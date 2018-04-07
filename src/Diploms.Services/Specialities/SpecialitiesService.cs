using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Specialities;

namespace Diploms.Services.Specialities
{
    public class SpecialitiesService : CatalogService<Speciality, SpecialityListDto, SpecialityEditDto>
    {
        public SpecialitiesService(IRepository<Speciality> repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<IEnumerable<SpecialityListDto>> GetList()
        {
            var entities = await _repository.Get(includes: spec=>spec.Department);

            return _mapper.Map<IEnumerable<SpecialityListDto>>(entities);
        }
    }
}