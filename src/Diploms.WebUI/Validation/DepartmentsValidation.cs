using System;
using System.Collections.Generic;
using Diploms.Dto.Departments;
using FluentValidation;

namespace Diploms.WebUI.Validation
{
    public class DepartmentsEditDtoValidator : AbstractValidator<DepartmentEditDto>
    {
        public DepartmentsEditDtoValidator()
        {
            RuleFor(c=>c.Name).NotEmpty();
        }
    }
}