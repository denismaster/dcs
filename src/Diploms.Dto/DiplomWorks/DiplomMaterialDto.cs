using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Dto
{
    public class DiplomMaterialDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Size { get; set; }
        public string Type { get; set; }
        public bool IsNotePart { get; set; }
    }
}
