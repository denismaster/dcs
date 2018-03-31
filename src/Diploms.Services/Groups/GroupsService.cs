using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Groups;

namespace Diploms.Services.Groups
{
    public class GroupsService : CatalogService<Group, GroupListDto, GroupEditDto>
    {
        public GroupsService(IRepository<Group> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}