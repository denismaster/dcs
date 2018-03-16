using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class CustomStage : BaseEntity, IStage
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int DiplomWorkId { get; set; }
        public DiplomWork DiplomWork { get; set; }
        public bool Accepted { get; set; }
    }
}
