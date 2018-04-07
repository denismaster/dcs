using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Departments;

namespace Diploms.Services.Departments
{
    public class DepartmentsService : CatalogService<Department, DepartmentListDto, DepartmentEditDto>
    {
        public DepartmentsService(IRepository<Department> repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<IEnumerable<DepartmentListDto>> GetList()
        {
            var entities = await _repository.Get(includes: department=>department.Institute);

            return _mapper.Map<IEnumerable<DepartmentListDto>>(entities);
        }
    }
}