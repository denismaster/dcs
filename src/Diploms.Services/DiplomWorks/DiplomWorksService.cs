using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.DiplomWorks
{
    public class DiplomWorksService : CatalogService<DiplomWork, DiplomWorkEditDto, DiplomWorkGetDto, DiplomWorkAddDto, DiplomWorkEditDto>
    {
        public DiplomWorksService(IRepository<DiplomWork> repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<IEnumerable<DiplomWorkEditDto>> GetList()
        {
            var entities = await _repository.Get(
                work => work.Teacher,
                work => work.Students
            );

            return _mapper.Map<IEnumerable<DiplomWorkEditDto>>(entities);
        }

        public override async Task<DiplomWorkGetDto> GetOne(int id)
        {
            var entity = await _repository.Get(id,
                work => work.Teacher,
                work => work.Students
            );

            if (entity == null) return default(DiplomWorkGetDto);

            return _mapper.Map<DiplomWorkGetDto>(entity);
        }
    }
}