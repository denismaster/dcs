using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Departments;

namespace Diploms.Services
{
    public class CatalogService<TEntity, TListModel, TEditModel>
        : CatalogService<TEntity, TListModel, TListModel, TEditModel, TEditModel>
        where TEntity : BaseEntity
    {
        public CatalogService(IRepository<TEntity> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }

    public class CatalogService<TEntity, TListModel, TGetOneModel, TAddModel, TEditModel> 
        : ICatalogService<TEntity,TListModel, TGetOneModel, TAddModel, TEditModel>
        where TEntity : BaseEntity
    {
        protected readonly IMapper _mapper;
        protected readonly IRepository<TEntity> _repository;

        public CatalogService(IRepository<TEntity> repository, IMapper mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<IEnumerable<TListModel>> GetList()
        {
            var entities = await _repository.Get();

            return _mapper.Map<IEnumerable<TListModel>>(entities);
        }

        public async Task<TGetOneModel> GetOne(int id)
        {
            var entity = await _repository.Get(id);

            if(entity==null) return default(TGetOneModel);

            return _mapper.Map<TGetOneModel>(entity);
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