using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Teachers
{
    public class TeachersService : CatalogService<Teacher, TeacherListDto, TeacherEditDto>
    {
        public TeachersService(IRepository<Teacher> repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<IEnumerable<TeacherListDto>> GetList()
        {
            var entities = await _repository.Get(
                teacher => teacher.Position, 
                teacher => teacher.Department, 
                teacher => teacher.Students
            );

            return _mapper.Map<IEnumerable<TeacherListDto>>(entities);
        }
    }
}