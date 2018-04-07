using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Students
{
    public class StudentsService : CatalogService<Student, StudentEditDto, StudentEditDto, StudentAddDto, StudentEditDto>
    {
        public StudentsService(IRepository<Student> repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<IEnumerable<StudentEditDto>> GetList()
        {
            var entities = await _repository.Get(
                student => student.Group,
                student => student.Teacher,
                student => student.DiplomWork
            );

            return _mapper.Map<IEnumerable<StudentEditDto>>(entities);
        }
    }
}