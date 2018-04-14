using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Dto
{
    public class DiplomWorkAddDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int TeacherId {get;set;}
        public int StudentId { get; set; }
    }
}
