using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Institutes;

namespace Diploms.Services.Institutes
{
    public class InstitutesService : CatalogService<Institute, InstituteEditDto, InstituteEditDto, InstituteEditDto>
    {
        public InstitutesService(IRepository<Institute> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}