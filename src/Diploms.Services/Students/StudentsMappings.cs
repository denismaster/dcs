using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Students
{
    public class StudentsMappings : Profile
    {
        public StudentsMappings()
        {
            CreateMap<StudentAddDto, Student>();
            CreateMap<StudentEditDto, Student>();
            CreateMap<Student, StudentEditDto>()
                .ForMember(item => item.DiplomWork, opt => opt.MapFrom(src => src.DiplomWork.Name))
                .ForMember(item => item.Group, opt => opt.MapFrom(src => src.Group.Name))
                .ForMember(item => item.Teacher, opt => opt.MapFrom(src => src.Teacher.FIO));
        }
    }
}