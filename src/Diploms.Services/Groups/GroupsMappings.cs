using AutoMapper;
using Diploms.Core;
using Diploms.Dto.Groups;

namespace Diploms.Services.Groups
{
    public class GroupsMappings : Profile
    {
        public GroupsMappings()
        {
            CreateMap<GroupEditDto, Group>()
                .ForMember(g => g.PeriodId, u => u.UseValue(Period.Current.Id));
            CreateMap<Group, GroupEditDto>();
        }
    }
}