using System.Collections.Generic;

namespace Diploms.Core
{
    public class User : BaseEntity
    {
        public string Login { get; set; }
        public string PasswordHash { get; set; }

        public List<UserRole> Roles { get; set; }
    }
}