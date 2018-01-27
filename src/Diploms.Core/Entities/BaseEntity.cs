using System;

namespace Diploms.Core
{
    public abstract class BaseEntity : IEntity
    {
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ChangeDate { get; set; }
        public DateTime RemoveDate { get; set; }
    }
}