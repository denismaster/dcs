using Diploms.Core;
using Diploms.Dto.Login;
using Diploms.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace Diploms.WebUI.Authentication
{
    public class TokenService : ITokenService
    {
        private readonly IUserRepository _repository;

        public TokenService(IUserRepository repository)
        {
            if (repository == null) throw new ArgumentNullException(nameof(repository));
            _repository = repository;
        }

        public async Task<ObjectResult> IssueToken(LoginDto user, JwtIssuerOptions _jwtOptions, JsonSerializerSettings _serializerSettings)
        {
            var dbUser = await _repository.GetUserAsync(user.Username);
            if (dbUser == null)
            {
                var authenticationResult = new
                {
                    Succeeded = false,
                    Message = "Пользователь не зарегистрирован"
                };
                return new ObjectResult(authenticationResult);
            }

            var identity = await GetClaimsIdentity(user);
            if (identity == null)
            {
                var authenticationResult = new
                {
                    Succeeded = false,
                    Message = "Неверный пароль"
                };

                return new ObjectResult(authenticationResult);
            }

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                new Claim(JwtRegisteredClaimNames.Jti, await _jwtOptions.JtiGenerator()),
                new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(_jwtOptions.IssuedAt).ToString(), ClaimValueTypes.Integer64),
                identity.FindFirst(AuthConsts.ClaimUserType)
            };

            var expiration = user.RememberMe ? _jwtOptions.Expiration : _jwtOptions.RememberExpiration;

            var encodedJwt = CreateJWTToken(claims, _jwtOptions.TokenExpiration , _jwtOptions);
            var encodedRefreshToken = CreateJWTToken(claims, expiration , _jwtOptions);

            return TokenResult(encodedJwt, encodedRefreshToken, dbUser.Login,dbUser.Id,  user.RememberMe ? (int)_jwtOptions.RememberValidFor.TotalSeconds : (int)_jwtOptions.ValidFor.TotalSeconds, _jwtOptions, _serializerSettings);
        }

        private ObjectResult TokenResult(string token, string refreshToken, string userName, int userId, double expires, JwtIssuerOptions _jwtOptions, JsonSerializerSettings _serializerSettings)
        {
            var response = new
            {
                token = token,
                refreshToken = refreshToken,
                expires = expires,
                userId,
                userName
            };
            var json = JsonConvert.SerializeObject(response, _serializerSettings);
            return new OkObjectResult(json);
        }

        public async Task<ObjectResult> RefreshToken(string token, JwtIssuerOptions _jwtOptions, JsonSerializerSettings _serializerSettings)
        {
            JwtSecurityToken tok = new JwtSecurityTokenHandler().ReadJwtToken(token);

            // extend token's expiration
            var expiration = _jwtOptions.Expiration;

            var user = tok.Claims.First(c => c.Type == JwtRegisteredClaimNames.Sub).Value;
            var identity = await GetClaimsIdentity(user);
            if (identity == null)
            {
                var refreshTokenResult = new
                {
                    Succeeded = false,
                    Message = "Пользователь не зарегистрирован"
                };
                return new ObjectResult(refreshTokenResult);
            }

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user),
                new Claim(JwtRegisteredClaimNames.Jti, await _jwtOptions.JtiGenerator()),
                new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(_jwtOptions.IssuedAt).ToString(), ClaimValueTypes.Integer64),
                identity.FindFirst(AuthConsts.ClaimUserType)
            };
            
            var encodedJwt = CreateJWTToken(claims, _jwtOptions.TokenExpiration , _jwtOptions);
            var encodedRefreshToken = CreateJWTToken(claims, expiration , _jwtOptions);

            return TokenResult(encodedJwt, encodedRefreshToken, user, 0, (int)_jwtOptions.ValidFor.TotalSeconds, _jwtOptions, _serializerSettings);
        }

        public void ThrowIfInvalidOptions(JwtIssuerOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            if (options.ValidFor <= TimeSpan.Zero)
            {
                throw new ArgumentException("Must be a non-zero TimeSpan.", nameof(JwtIssuerOptions.ValidFor));
            }

            if (options.RememberValidFor <= TimeSpan.Zero)
            {
                throw new ArgumentException("Must be a non-zero TimeSpan.", nameof(JwtIssuerOptions.RememberValidFor));
            }

            if (options.SigningCredentials == null)
            {
                throw new ArgumentNullException(nameof(JwtIssuerOptions.SigningCredentials));
            }

            if (options.JtiGenerator == null)
            {
                throw new ArgumentNullException(nameof(JwtIssuerOptions.JtiGenerator));
            }
        }

        private string CreateJWTToken(Claim[] claims, DateTime expiration, JwtIssuerOptions _jwtOptions)
        {
            var jwt = new JwtSecurityToken(
                issuer: _jwtOptions.Issuer,
                audience: _jwtOptions.Audience,
                claims: claims,
                notBefore: _jwtOptions.NotBefore,
                expires: expiration,
                signingCredentials: _jwtOptions.SigningCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return encodedJwt;
        }

        private long ToUnixEpochDate(DateTime date) => (long)Math.Round((date.ToUniversalTime() - new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero)).TotalSeconds);

        private async Task<ClaimsIdentity> GetClaimsIdentity(LoginDto user)
        {
            var dbUser = await _repository.GetUserAsync(user.Username);
            //not await verify due to CPU-bound operation//
            dbUser = PasswordUtils.Verify(user.Password, dbUser.PasswordHash) ? dbUser : null;
            if (dbUser != null)
            {
                var claims = dbUser.Roles.Select(role=>new Claim(AuthConsts.ClaimUserType, role.Role.Name)).ToArray();
                return new ClaimsIdentity(new GenericIdentity(dbUser.Login, "Token"),claims);
            }
            return null;
        }

        //TODO: Implement refreshing.
        private async Task<ClaimsIdentity> GetClaimsIdentity(string user)
        {
            var dbUser = await _repository.GetUserAsync(user);
            if (dbUser != null)
            {
                return new ClaimsIdentity(new GenericIdentity(dbUser.Login, "Token"),
                    dbUser.Login == "admin"
                    ? new Claim[] { new Claim(AuthConsts.ClaimUserType, AuthConsts.RoleAdmin) }
                    : new Claim[] { new Claim(AuthConsts.ClaimUserType, AuthConsts.RoleUser
                    ) });
            }

            return null;
        }
        internal class User
        {
            public bool IsAdmin = true;
            public string Login;

            public User(string username)
            {
                this.Login = username;
                this.IsAdmin = true;
            }
        }
    }
}