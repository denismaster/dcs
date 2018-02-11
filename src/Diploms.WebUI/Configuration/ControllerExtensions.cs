using System.Linq;
using Diploms.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Diploms.WebUI
{
    public static class ControllerExtensions
    {
        public static void GetErrors(this Controller controller, object model, OperationResult result)
        {
            if (model == null)
            {
                result.Errors.Add("Ошибка ввода данных");
            }
            result.Errors.AddRange(controller.ModelState.Values.SelectMany(v => v.Errors
              .Where(b => !string.IsNullOrEmpty(b.ErrorMessage))
              .Select(b => b.ErrorMessage)));
        }
    }
}