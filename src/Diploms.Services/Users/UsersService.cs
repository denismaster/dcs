using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Users;

namespace Diploms.Services.Users
{
    public class UsersService : CatalogService<User, UserEditDto, UserEditDto>
    {
        public UsersService(IRepository<User> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}