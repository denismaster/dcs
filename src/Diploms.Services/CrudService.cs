using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Departments;

namespace Diploms.Services
{
    public class CrudService<TEntity, TAddModel, TEditModel> where TEntity : BaseEntity
    {
        private readonly IMapper _mapper;
        private readonly IRepository<TEntity> _repository;

        public CrudService(IRepository<TEntity> repository, IMapper mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public virtual async Task<OperationResult> Add(TAddModel model)
        {
            var result = new OperationResult();

            try
            {
                var entity = _mapper.Map<TEntity>(model);
                entity.CreateDate = DateTime.UtcNow;
                _repository.Add(entity);

                await _repository.SaveChanges();
            }
            catch (Exception e)
            {
                result.Errors.Add(e.Message);
            }

            return result;
        }

        public virtual async Task<OperationResult> Edit(TEditModel model)
        {
            var result = new OperationResult();

            try
            {
                var entity = _mapper.Map<TEntity>(model);
                entity.ChangeDate = DateTime.UtcNow;
                _repository.Update(entity);

                await _repository.SaveChanges();
            }
            catch (Exception e)
            {
                result.Errors.Add(e.Message);
            }

            return result;
        }
    }
}