using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class Teacher : BaseEntity
    {
        public string FIO { get; set; }
        public int MaxWorkCount { get; set; }

        public int PositionId { get; set; }
        public TeacherPosition Position { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }

        public List<DiplomWork> DiplomWorks { get; set; }
        public List<Student> Students { get; set; }
    }
}
