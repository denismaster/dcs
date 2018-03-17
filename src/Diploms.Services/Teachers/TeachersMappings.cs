using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Teachers
{
    public class TeachersMappings : Profile
    {
        public TeachersMappings()
        {
            CreateMap<TeacherEditDto, Teacher>();
            CreateMap<Teacher, TeacherEditDto>();
        }
    }
}