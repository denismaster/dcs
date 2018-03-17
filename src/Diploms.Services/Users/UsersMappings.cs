using AutoMapper;
using Diploms.Core;
using Diploms.Dto.Users;

namespace Diploms.Services.Users
{
    public class UsersMappings : Profile
    {
        public UsersMappings()
        {
            CreateMap<UserEditDto, User>();
            CreateMap<User, UserEditDto>();
        }
    }
}