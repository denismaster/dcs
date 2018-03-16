using AutoMapper;
using Diploms.Core;
using Diploms.Dto.Groups;

namespace Diploms.Services.Groups
{
    public class GroupsMappings : Profile
    {
        public GroupsMappings()
        {
            CreateMap<GroupEditDto, Group>();
            CreateMap<Group, GroupEditDto>();
        }
    }
}