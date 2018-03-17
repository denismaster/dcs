using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Templates
{
    public class TemplatesService : CrudService<Template, TemplateEditDto, TemplateEditDto, TemplateEditDto>
    {
        public TemplatesService(IRepository<Template> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}