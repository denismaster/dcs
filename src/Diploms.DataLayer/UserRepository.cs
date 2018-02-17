using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diploms.Core;
using Microsoft.EntityFrameworkCore;

namespace Diploms.DataLayer
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(DiplomContext context) : base(context)
        { }

        public Task<User> GetUserAsync(string login)
        {
            return _context.Users
                .Include(user => user.Roles)
                .ThenInclude(user => user.Role)
                .FirstOrDefaultAsync(user => user.Login == login);
        }
    }
}