using System.Collections.Generic;

namespace Diploms.Core
{
    public class MaterialType : IEntity
    {
        public static MaterialType Other = new MaterialType() { Id = 13, Name = "Изображение" };
        public static MaterialType Image = new MaterialType() { Id =2 , Name = "Изображение" };
        public static MaterialType LatexFile = new MaterialType() {  Id=3, Name = "ПЗ в формате LATEX" };

        public static MaterialType Preambula = new MaterialType() { Id=4, Name = "Преамбула" };
        public static MaterialType Introduction = new MaterialType() { Id=5, Name = "Введение" };
        public static MaterialType Chapter = new MaterialType() { Name = "Раздел" };
        public static MaterialType Subchapter = new MaterialType() { Name = "Подраздел" };
        public static MaterialType Conclusion = new MaterialType() { Name = "Заключение" };
        public static MaterialType Bibliography  = new MaterialType() { Name = "Список литературы" };
        public static MaterialType Abbreviations  = new MaterialType() { Name = "Список принятых сокращений" };
        public static MaterialType Appendix = new MaterialType() { Name = "Приложение" };

        public int Id { get; set; }
        public string Name { get; set; }
    }
}