using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class DiplomWork : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }

        public int PeriodId { get; set; }
        public Period Period { get; set; }

        public List<Student> Students { get; set; }
        public List<DiplomWorkMaterial> DiplomWorkMaterials { get; set; }
        public List<ImplementationStage> ImplementationStages { get; set; }
        public List<CustomStage> CustomStages { get; set; }

        public GlobalStage CurrentGlobalStage
        {
            get
            {
                if (this.ImplementationStages == null) return null;
                return this.ImplementationStages
                    .Where(s => s.Accepted)
                    .OrderBy(s => s.StartDate)
                    .Last()
                    .GlobalStage;
            }
        }
    }
}
