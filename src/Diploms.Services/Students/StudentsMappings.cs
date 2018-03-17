using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Students
{
    public class StudentsMappings : Profile
    {
        public StudentsMappings()
        {
            CreateMap<StudentEditDto, Student>();
            CreateMap<Student, StudentEditDto>();
        }
    }
}