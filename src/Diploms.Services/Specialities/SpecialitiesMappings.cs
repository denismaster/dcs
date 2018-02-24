using AutoMapper;
using Diploms.Core;
using Diploms.Dto.Specialities;

namespace Diploms.Services.Specialities
{
    public class SpecialitiesMappings : Profile
    {
        public SpecialitiesMappings()
        {
            CreateMap<SpecialityEditDto, Speciality>();
        }
    }
}