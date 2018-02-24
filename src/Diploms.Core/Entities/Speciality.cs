using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class Speciality : BaseEntity
    {
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Сode { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}