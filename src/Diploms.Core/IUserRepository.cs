using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public interface IUserRepository: IRepository<User>
    {
        Task<User> GetUserAsync(string login);
    }
}