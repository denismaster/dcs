using AutoMapper;
using Diploms.Core;
using Diploms.Dto.Institutes;

namespace Diploms.Services.Institutes
{
    public class InstitutesMappings : Profile
    {
        public InstitutesMappings()
        {
            CreateMap<InstituteEditDto, Institute>();
            CreateMap<Institute, InstituteEditDto>();
        }
    }
}