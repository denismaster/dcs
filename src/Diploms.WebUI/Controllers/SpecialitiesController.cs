using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Specialities;
using Diploms.Services.Specialities;

namespace Diploms.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class SpecialitiesController : Controller
    {
        private readonly IRepository<Speciality> _repository;
        private readonly SpecialitiesService _service;

        public SpecialitiesController(IRepository<Speciality> repository, SpecialitiesService service)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _service = service ?? throw new ArgumentNullException(nameof(service));
        }

        [HttpGet("select-list")]
        public async Task<IActionResult> GetAsSelectList()
        {
            return Ok((await _repository.Get()).Select(item=>{
                return new SelectListItem{
                    Text = item.Name,
                    Value = item.Id.ToString()
                };
            }));
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _repository.Get());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetOne(int id)
        {
            var result = await _service.GetOne(id);
            if (result != null)
            {
                return Ok(result);
            }
            return NotFound();
        }

        [HttpPut("add")]
        public async Task<IActionResult> Add([FromBody] SpecialityEditDto model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(this.GetErrors(model));
            }

            OperationResult result = await _service.Add(model);

            if(result.HasError) 
                return this.Unprocessable(result);
            
            return Ok(result);
        }

        [HttpPost("edit/{id:int}")]
        public async Task<IActionResult> Edit(int id, [FromBody] SpecialityEditDto model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(this.GetErrors(model));
            }

            OperationResult result = await _service.Edit(model);

            if(result.HasError) 
                return this.Unprocessable(result);
            
            return Ok(result);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var department = new Speciality { Id = id };
            try
            {
                _repository.Delete(department);
                await _repository.SaveChanges();
                return Ok(new OperationResult());
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
