using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class Period : BaseEntity
    {
        public static Period Current = new Period()
        {
            Id = 1,
            StartDate = new DateTime(2017, 9, 01),
            EndDate = new DateTime(2018, 6, 30),
            Name = "2017/2018 учебный год"
        };
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public List<DiplomWork> DiplomWorks { get; set; }
    }
}
