using System;
using System.Collections.Generic;

namespace Diploms.Dto.Specialities
{
    public class SpecialityListDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Code { get; set; }
        public string Department { get; set; }
        public int DepartmentId { get; set; }
    }
}
