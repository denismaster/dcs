using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class ImplementationStage : BaseEntity, IStage
    {
        public bool Accepted { get; set; }
        public GlobalStage GlobalStage { get; set; }
        public int GlobalStageId { get; set; }
        public int DiplomWorkId { get; set; }
        public DiplomWork DiplomWork { get; set; }
        public string Name
        {
            get
            {
                return GlobalStage.Name;
            }
        }
        public DateTime StartDate
        {
            get
            {
                return GlobalStage.StartDate;
            }
        }
        public DateTime EndDate
        {
            get
            {
                return GlobalStage.EndDate;
            }
        }
    }
}
