using System;
using System.Collections.Generic;

namespace Diploms.Dto
{
    public class OperationResult
    {
        public List<string> Errors { get; set; }
        
        public bool HasError => Errors.Count!=0;
    }
}
