using System.Collections.Generic;

namespace Diploms.Core
{
    public class Institute : BaseEntity
    {
        public string Name { get; set; }
        public string ShortName { get; set; }

        public List<Department> Departments { get; set; }
    }
}