using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.Templates
{
    public class TemplatesMappings : Profile
    {
        public TemplatesMappings()
        {
            CreateMap<TemplateEditDto, Template>();
            CreateMap<Template, TemplateEditDto>();
        }
    }
}