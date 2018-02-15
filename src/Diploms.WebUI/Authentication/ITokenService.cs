using Diploms.Dto.Login;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace Diploms.WebUI.Authentication
{
    public interface ITokenService
    {
        Task<ObjectResult> IssueToken(LoginDto user, JwtIssuerOptions _jwtOptions, JsonSerializerSettings _serializerSettings);
        Task<ObjectResult> RefreshToken(string token, JwtIssuerOptions _jwtOptions, JsonSerializerSettings _serializerSettings);
        void ThrowIfInvalidOptions(JwtIssuerOptions options);
    }
}