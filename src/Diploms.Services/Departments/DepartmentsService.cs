using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Departments;

namespace Diploms.Services.Departments
{
    public class DepartmentsService : CatalogService<Department, DepartmentEditDto, DepartmentEditDto, DepartmentEditDto>
    {
        public DepartmentsService(IRepository<Department> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}