using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Teachers
{
    public class TeachersService : CatalogService<Teacher, TeacherEditDto, TeacherEditDto>
    {
        public TeachersService(IRepository<Teacher> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}