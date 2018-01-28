using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Diploms.Core;

namespace Diploms.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class DepartmentsController : Controller
    {
        private readonly IRepository<Department> _repository;

        public DepartmentsController(IRepository<Department> repository)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpGet("")]
        public async Task<IActionResult> GetDepartments()
        {
            return Ok(await _repository.Get());
        }

        [HttpPut("add")]
        public async Task<IActionResult> AddDepartment([FromBody] DepartmentAddDto model)
        {
            var department = new Department
            {
                Name = model.Name,
                ShortName = model.ShortName,
                CreateDate = DateTime.UtcNow
            };
            try
            {
                _repository.Add(department);
                await _repository.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }

    public class DepartmentAddDto
    {
        public string Name { get; set; }
        public string ShortName { get; set; }
    }
}
