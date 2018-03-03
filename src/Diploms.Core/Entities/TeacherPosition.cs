using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class TeacherPosition : IEntity
    {
        public static TeacherPosition Doctor = new TeacherPosition() { Name = "Доктор" };
        public static TeacherPosition Professor = new TeacherPosition() { Name = "Профессор" };
        public static TeacherPosition HighTeacher = new TeacherPosition() { Name = "Старший преподаватель" };
        public int Id { get; set; }
        public string Name { get; set; }
    }
}