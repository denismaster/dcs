namespace Diploms.Core
{
    public class Department : BaseEntity
    {
        public string Name { get; set; }
        public string ShortName { get; set; }

        public int InstituteId { get; set; }
        public Institute Institute { get; set; }
    }
}