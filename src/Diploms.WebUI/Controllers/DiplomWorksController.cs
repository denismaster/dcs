using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Services.DiplomWorks;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace Diploms.WebUI.Controllers
{
    [Route("api/diploms")]
    public class DiplomWorksController : Controller
    {
        private readonly IRepository<DiplomWork> _repository;
        private readonly DiplomWorksService _service;

        public DiplomWorksController(IRepository<DiplomWork> repository, DiplomWorksService service)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _service = service ?? throw new ArgumentNullException(nameof(service));
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _service.GetList());
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
        public async Task<IActionResult> Add([FromBody] DiplomWorkAddDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.GetErrors(model));
            }

            OperationResult result = await _service.Add(model);

            if (result.HasError)
                return this.Unprocessable(result);

            return Ok(result);
        }

        [HttpPost("edit/{id:int}")]
        public async Task<IActionResult> Edit(int id, [FromBody] DiplomWorkEditDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.GetErrors(model));
            }

            OperationResult result = await _service.Edit(model);

            if (result.HasError)
                return this.Unprocessable(result);

            return Ok(result);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var DiplomWork = new DiplomWork { Id = id };
            try
            {
                _repository.Delete(DiplomWork);
                await _repository.SaveChanges();
                return Ok(new OperationResult());
            }
            catch
            {
                return BadRequest();
            }
        }


        [HttpPost("{id:int}/materials")]
        public async Task<IActionResult> AddMaterial(IList<IFormFile> files, int id)
        {
            if (ModelState.IsValid)
            {
                var file = Request.Form.Files[0];
                if(file==null) return BadRequest();
                using (var memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);    
                    await _service.AddMaterial(id, file.Name, memoryStream.ToArray());
                    return Ok();
                }
            }

            return BadRequest();
        }

        [HttpPost("{id:int}/materials/{type:int}")]
        public async Task<IActionResult> AddMaterial(int id, int type)
        {
            if (ModelState.IsValid)
            {
                await _service.AddMaterial(id,type);
                return Ok();
            }

            return BadRequest();
        }

        [HttpGet("{id:int}/materials")]
        public async Task<IActionResult> GetMaterials(int id)
        {
            return Ok(await _service.GetMaterials(id));
        }

        [HttpGet("materials/{id:int}")]
        public async Task<IActionResult> GetMaterial(int id)
        {
            var material = await _service.GetMaterial(id);
            return new FileContentResult(material, "application/pdf");
        }
        
        [HttpGet("materials/{id:int}/text")]
        public async Task<IActionResult> GetMaterialText(int id)
        {
            var material = await _service.GetMaterialTextContent(id);
            return Ok(material);
        }


        [HttpGet("{id:int}/norm-control-info")]
        public async Task<IActionResult> GetNormControlInfo(int id)
        {
            var result = await _service.GetNormControlInfo(id);
            if (result != null)
            {
                return Ok(result);
            }
            return NotFound();
        }
    }
}