using System;
using System.Collections.Generic;

namespace Diploms.Dto
{
    public class NormControlTryResultDto
    {
        public string FIO { get;set; }
        public List<string> Errors {get;set;}
        public bool HasTeacherReport { get; set; }
        public bool IsEquatableToOrder { get; set; }
        public bool HasTableOfContents { get; set; }
        public bool HasAbstract { get; set; }
        public bool HasIntroduction { get; set; }
        public bool HasTeacherSignature { get; set; }
        public bool HasConsultantsSignature { get; set; }
        public bool HasSignedTask { get; set; }
        public bool HasActualDescription { get; set; }
        public bool HasGoalsAndObjectives { get; set; }
        public bool HasResearchSubjectAndObject { get; set; }
        public bool HasPracticalSupposes { get; set; }
        public bool HasStructure { get; set; }
        public bool UsedMathMethods { get; set; }
        public bool IsTablesGoodFormatted { get; set; }
        public bool IsPicturesGoodFormatted { get; set; }
        public bool IsSourcesGoodFormatted { get; set; }
        public bool IsShorthandsGoodFormatted { get; set; }
        public bool HasShorthandsInText { get; set; }
        public bool IsAppendixGoodFormatted { get; set; }
        public bool HasLinksToFormulas { get; set; }
        public bool HasLinksToTables { get; set; }
        public bool HasLinksToPictures { get; set; }
        public bool HasLinksToAppendixes { get; set; }
        public bool HasLinksToSources { get; set; }
    }
}