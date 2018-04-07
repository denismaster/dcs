using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Teachers
{
    public class TeachersMappings : Profile
    {
        public TeachersMappings()
        {
            CreateMap<Teacher, TeacherListDto>()
                .ForMember(item => item.Department, opt => opt.MapFrom(src => src.Department.ShortName))
                .ForMember(item => item.Position, opt => opt.MapFrom(src => src.Position.Name))
                .ForMember(item => item.WorkCount, opt => opt.MapFrom(src => src.Students.Count));

            CreateMap<TeacherEditDto, Teacher>();
        }
    }
}