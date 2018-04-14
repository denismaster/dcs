using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Dto
{
    public class DiplomWorkGetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsAccepted { get; set; }
        public DateTime AcceptDate { get; set; }
        public int? TeacherId {get;set;}
        public string Teacher { get; set; }
        public List<int> StudentsId { get; set; }
        public List<string> Students { get; set; }
    }
}
