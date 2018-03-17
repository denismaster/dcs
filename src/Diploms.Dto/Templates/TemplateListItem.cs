using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploms.Dto
{
    public class TemplateEditDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string TemplateType { get; set; }
        public string FileName { get; set; }
        public bool IsDefault {get;set;}
    }
}
