using AutoMapper;
using Diploms.Core;
using Diploms.Dto.Departments;

namespace Diploms.Services.Departments
{
    public class DepartmentsMappings : Profile
    {
        public DepartmentsMappings()
        {
            CreateMap<DepartmentEditDto, Department>();
            CreateMap<Department, DepartmentEditDto>();
        }
    }
}