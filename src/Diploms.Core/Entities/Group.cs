using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class Group : BaseEntity
    {
        public string Name { get; set; }

        public int SpecialityId { get; set; }
        public Speciality Speciality { get; set; }

        public int PeriodId { get; set; }
        public Period Period { get; set; }

        public List<Student> Students { get; set; }
    }
}
