using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.DiplomWorks
{
    public class DiplomWorksService : CrudService<DiplomWork, DiplomWorkEditDto, DiplomWorkEditDto, DiplomWorkEditDto>
    {
        public DiplomWorksService(IRepository<DiplomWork> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}