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
                .ForMember(u => u.PeriodId, m => m.UseValue(Period.Current.Id))
                .ForMember(u => u.StartDate, m => m.UseValue(Period.Current.StartDate))
                .ForMember(u => u.EndDate, m => m.UseValue(Period.Current.EndDate));

            CreateMap<DiplomWork, DiplomWorkEditDto>()
                .ForMember(u => u.Teacher, m => m.MapFrom(src => src.Teacher.FIO))
                .ForMember(u => u.Student, m => m.MapFrom(src => src.Students.FirstOrDefault().FIO))
                .ForMember(u => u.StudentId, m => m.MapFrom(src => src.Students.FirstOrDefault().Id));

            CreateMap<DiplomWork, DiplomWorkGetDto>()
                .ForMember(u => u.Teacher, m => m.MapFrom(src => src.Teacher.FIO))
                .ForMember(u => u.AcceptDate, m => m.MapFrom(src => src.StartDate))
                .ForMember(u => u.IsAccepted, m => m.MapFrom(src => src.RemoveDate == null))
                .ForMember(u => u.Students, m => m.MapFrom(src => src.Students.Select(s => s.FIO).ToList()))
                .ForMember(u => u.StudentsId, m => m.MapFrom(src => src.Students.Select(s => s.Id).ToList()));

            CreateMap<DiplomWorkMaterial, DiplomMaterialDto>()
                .ForMember(u => u.Type, m => m.MapFrom(src => src.MaterialType.Name));
        }
    }
}