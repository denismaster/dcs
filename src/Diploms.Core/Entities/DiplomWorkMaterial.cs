using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public class DiplomWorkMaterial : BaseEntity
    {
        public string Name { get; set; }
        public int Rank { get; set; }
        public byte[] Data { get; set; }

        public bool IsNotePart { get; set; } = false;

        public MaterialType MaterialType { get; set; } 
        public int MaterialTypeId { get; set; } = MaterialType.Other.Id;

        public int AuthorId { get; set; }
        public Student Author { get; set; }

        public int DiplomWorkId { get; set; }
        public DiplomWork DiplomWork { get; set; }

        public List<GostControlTry> GostControlTries { get; set; }

        public int Size => Data.Length;
    }
}
