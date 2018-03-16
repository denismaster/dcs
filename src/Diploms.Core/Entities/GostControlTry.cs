using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class GostControlTry : BaseEntity
    {
        public string Сontroller { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public bool Result { get; set; }

        public int DiplomWorkMaterialId { get; set; }
        public DiplomWorkMaterial DiplomWorkMaterial { get; set; }
    }
}
