using System.Collections.Generic;

namespace Diploms.Core
{
    public class Template : BaseEntity
    {
        public string Name { get; set; }
        public TemplateType TemplateType { get; set; }
        public int TemplateTypeId { get; set; }
        public string FileName { get; set; }
        public bool IsDefault { get; set; }
        public string Type => System.IO.Path.GetExtension(FileName);
    }
}