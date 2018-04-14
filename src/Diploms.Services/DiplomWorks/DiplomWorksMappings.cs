using System;
using System.Linq;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.DiplomWorks
{
    public class DiplomWorksMappings : Profile
    {
        public DiplomWorksMappings()
        {
            CreateMap<DiplomWorkAddDto, DiplomWork>()
                .ForMember(u=>u.PeriodId, m=>m.UseValue(Period.Current.Id))
                .ForMember(u => u.StartDate, m => m.UseValue(Period.Current.StartDate))
                .ForMember(u => u.EndDate, m => m.UseValue(Period.Current.EndDate));
                
            CreateMap<DiplomWork, DiplomWorkEditDto>()
                .ForMember(u => u.Teacher, m => m.MapFrom(src => src.Teacher.FIO))
                .ForMember(u => u.Student, m => m.MapFrom(src => src.Students.FirstOrDefault().FIO))
                .ForMember(u => u.StudentId, m => m.MapFrom(src => src.Students.FirstOrDefault().Id));
        }
    }
}