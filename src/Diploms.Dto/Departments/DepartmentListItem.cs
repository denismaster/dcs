namespace Diploms.Dto.Departments
{
    public class DepartmentListDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public int InstituteId { get; set; }
        public string Institute { get; set; }
    }
}