using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Students
{
    public class StudentsService : CatalogService<Student, StudentEditDto, StudentEditDto, StudentEditDto>
    {
        public StudentsService(IRepository<Student> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}