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
        private readonly IRepository<DiplomWorkMaterial> _materialsRepository;

        public DiplomWorksService(
            IRepository<DiplomWork> repository,
            IRepository<DiplomWorkMaterial> materialsRepository,
            IMapper mapper
        ) : base(repository, mapper)
        {
            _materialsRepository = materialsRepository;
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

        public async Task<IEnumerable<DiplomMaterialDto>> GetMaterials(int diplomId)
        {
            var materials = await _materialsRepository.Get(x=>x.DiplomWorkId==diplomId);

            return _mapper.Map<IEnumerable<DiplomMaterialDto>>(materials);
        }

        public virtual async Task<OperationResult> AddMaterial(int id, string name, byte[] data)
        {
            var result = new OperationResult();
            var work = await this.GetOne(id);
            try
            {
                var material = new DiplomWorkMaterial{
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
    }
}