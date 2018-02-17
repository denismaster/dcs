using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diploms.Core;
using Diploms.Dto.Login;
using Diploms.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Diploms.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _repository;

        public UserController(IUserRepository repository){
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpPut("[action]")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] LoginDto model)
        {
            var user = new User {
                CreateDate = DateTime.UtcNow,
                Login = model.Username,
                PasswordHash = PasswordUtils.Hash(model.Password)
            };

            _repository.Add(user);
            await _repository.SaveChanges();
            return Ok();
        }
    }
}