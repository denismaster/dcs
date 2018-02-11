using System.Linq;
using Diploms.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Diploms.WebUI
{
    public static class ControllerExtensions
    {
        public static OperationResult GetErrors(this Controller controller, object model)
        {
            var result = new OperationResult();

            if (model == null)
            {
                result.Errors.Add("Ошибка ввода данных");
            }

            result.Errors.AddRange(controller.ModelState.Values.SelectMany(v => v.Errors
              .Where(b => !string.IsNullOrEmpty(b.ErrorMessage))
              .Select(b => b.ErrorMessage)));

            return result;
        }

        public static IActionResult Unprocessable(this Controller controller, object value)
        {
            return controller.StatusCode(422, value);
        }
    }
}