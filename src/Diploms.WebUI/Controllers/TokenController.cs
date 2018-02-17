using Diploms.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using Diploms.Dto.Login;
using Diploms.WebUI.Authentication;

namespace Diploms.Controllers
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly JsonSerializerSettings _serializerSettings;
        private readonly ITokenService _tokenService;

        public TokenController(IOptions<JwtIssuerOptions> jwtOptions, ITokenService service)
        {
            this._tokenService = service;
            this._jwtOptions = jwtOptions.Value;
            service.ThrowIfInvalidOptions(_jwtOptions);

            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginDto user)
        {
            return await _tokenService.IssueToken(user, _jwtOptions, _serializerSettings);
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] string token)
        {
            return await _tokenService.RefreshToken(token, _jwtOptions, _serializerSettings);
        }
    }
}