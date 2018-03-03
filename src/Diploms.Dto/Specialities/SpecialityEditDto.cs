using System;
using System.Collections.Generic;

namespace Diploms.Dto.Specialities
{
    public class SpecialityEditDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Code { get; set; }
        public int DepartmentId { get; set; }
    }
}
