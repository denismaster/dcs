using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Diploms.WebUI.Authentication;
using Diploms.Core;
using Diploms.Dto;
using System.Threading.Tasks;

namespace DiplomContentSystem.Controllers
{
    [Route("api/teachers/positions")]
    public class TeacherPositionController : Controller
    {
        private readonly IRepository<TeacherPosition> _repository;
        public TeacherPositionController(IRepository<TeacherPosition> repository)
        {
            if(repository==null) throw new ArgumentNullException(nameof(repository));
            _repository = repository;
        }

        [HttpGet("")]
        public async Task<IActionResult> Get()
        {
            var result = (await _repository.Get()).Select(item=>new SelectListItem(){
                Value = item.Id.ToString(),
                Text = item.Name
            });
            if(result!=null) return Ok(result);
            return BadRequest();
        }
    }
}