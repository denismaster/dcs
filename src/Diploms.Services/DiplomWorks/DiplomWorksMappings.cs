using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.DiplomWorks
{
    public class DiplomWorksMappings : Profile
    {
        public DiplomWorksMappings()
        {
            CreateMap<DiplomWorkEditDto, DiplomWork>();
            CreateMap<DiplomWork, DiplomWorkEditDto>();
        }
    }
}