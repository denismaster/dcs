using System;
using System.Collections.Generic;

namespace Diploms.Dto.Departments
{
    public class DepartmentEditDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public int InstituteId { get; set; }
    }
}
