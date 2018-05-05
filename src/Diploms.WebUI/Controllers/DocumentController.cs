using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Diploms.Dto;
using Diploms.Services.Departments;
using Diploms.Requests;
using System.Threading.Tasks;
using Microsoft.Net.Http.Headers;

namespace Diploms.Controllers
{
    [Route("api/documents")]
    [Authorize]
    public class DocumentsController : Controller
    {
        private readonly RequestService _service;
        public DocumentsController(RequestService service)
        {
            if (service == null) throw new ArgumentNullException(nameof(service));
            _service = service;
        }
        [HttpPost("latex/preview")]
        public async Task<IActionResult> GeneratePreviewLatex(string latex)
        {
            var objectToSend = new {
                data = latex
            };
            var stream = await _service.SendRequest(objectToSend , false);
            return new FileStreamResult(stream,"application/pdf");
        }
    }
}