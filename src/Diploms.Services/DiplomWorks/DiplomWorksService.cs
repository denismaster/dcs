using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;

namespace Diploms.Services.DiplomWorks
{
    public class DiplomWorksService : CatalogService<DiplomWork, DiplomWorkEditDto, DiplomWorkGetDto, DiplomWorkAddDto, DiplomWorkEditDto>
    {
        private readonly string templatePath = "../../templates/";
        private readonly IRepository<DiplomWorkMaterial> _materialsRepository;
        private readonly IRepository<Group> _groupRepository;

        public DiplomWorksService(
            IRepository<DiplomWork> repository,
            IRepository<DiplomWorkMaterial> materialsRepository,
            IRepository<Group> groupRepository,
            IMapper mapper
        ) : base(repository, mapper)
        {
            _materialsRepository = materialsRepository;
            _groupRepository = groupRepository;
        }

        public override async Task<IEnumerable<DiplomWorkEditDto>> GetList()
        {
            var entities = await _repository.Get(
                work => work.Teacher,
                work => work.Students
            );

            return _mapper.Map<IEnumerable<DiplomWorkEditDto>>(entities);
        }

        public override async Task<DiplomWorkGetDto> GetOne(int id)
        {
            var entity = await _repository.Get(id,
                work => work.Teacher,
                work => work.Students
            );

            if (entity == null) return default(DiplomWorkGetDto);

            return _mapper.Map<DiplomWorkGetDto>(entity);
        }

        public async Task<byte[]> GetMaterial(int id)
        {
            var material = await _materialsRepository.Get(id);

            return material.Data;
        }

        public async Task<string> GetMaterialTextContent(int id)
        {
            var material = await _materialsRepository.Get(id);
            if (material.IsNotePart != true) throw new InvalidOperationException();
            return System.Text.Encoding.Default.GetString(material.Data);
        }

        public async Task<IEnumerable<DiplomMaterialDto>> GetMaterials(int diplomId)
        {
            var materials = await _materialsRepository.Get(x => x.DiplomWorkId == diplomId, material => material.MaterialType);

            return _mapper.Map<IEnumerable<DiplomMaterialDto>>(materials);
        }

        public virtual async Task<OperationResult> AddMaterial(int id, int typeId)
        {
            var result = new OperationResult();
            var work = await this.GetOne(id);
            string name = null;
            byte[] data = null;
            try
            {
                if (typeId == MaterialType.LatexFile.Id)
                {
                    data = System.IO.File.ReadAllBytes(this.templatePath + "main.tex");
                    name = "main.tex";
                }
                if (typeId == MaterialType.Preambula.Id)
                {
                    data = System.IO.File.ReadAllBytes(this.templatePath + "preamble.tex");
                    name = "preabmle.tex";
                }
                if (data == null || name == null) throw new System.IO.FileNotFoundException();
                var material = new DiplomWorkMaterial
                {
                    Name = name,
                    Data = data,
                    DiplomWorkId = id,
                    MaterialTypeId = MaterialType.LatexFile.Id,
                    MaterialType = null,
                    IsNotePart = true,
                    AuthorId = work.StudentsId.FirstOrDefault(),
                };
                material.CreateDate = DateTime.UtcNow;
                _materialsRepository.Add(material);

                await _materialsRepository.SaveChanges();
            }
            catch (Exception e)
            {
                result.Errors.Add(e.Message);
            }

            return result;
        }

        public virtual async Task<OperationResult> AddMaterial(int id, string name, byte[] data)
        {
            var result = new OperationResult();
            var work = await this.GetOne(id);
            try
            {
                var material = new DiplomWorkMaterial
                {
                    Name = name,
                    Data = data,
                    DiplomWorkId = id,
                    AuthorId = work.StudentsId.FirstOrDefault(),
                };
                material.CreateDate = DateTime.UtcNow;
                _materialsRepository.Add(material);

                await _materialsRepository.SaveChanges();
            }
            catch (Exception e)
            {
                result.Errors.Add(e.Message);
            }

            return result;
        }

        public async Task<DiplomWorkNormControlInfo> GetNormControlInfo(int id)
        {
            var entity = await _repository.Get(id,
                work => work.Students
            );

            var student = entity.Students.FirstOrDefault();

            if (student == null) throw new Exception();

            var group = await _groupRepository.Get(student.GroupId);

            return new DiplomWorkNormControlInfo
            {
                Fio = student.FIO,
                Group = group.Name,
                WorkName = entity.Name
            };
        }
    }
}