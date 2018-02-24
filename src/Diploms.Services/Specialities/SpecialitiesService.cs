using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Specialities;

namespace Diploms.Services.Specialities
{
    public class SpecialitiesService : CrudService<Speciality, SpecialityEditDto, SpecialityEditDto, SpecialityEditDto>
    {
        public SpecialitiesService(IRepository<Speciality> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}