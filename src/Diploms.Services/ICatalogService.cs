using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Departments;

namespace Diploms.Services
{
    public interface ICatalogService<TEntity, TListModel, TGetOneModel, TAddModel, TEditModel> where TEntity : BaseEntity
    {
        Task<IEnumerable<TListModel>> GetList();
        Task<TGetOneModel> GetOne(int id);
        Task<OperationResult> Add(TAddModel model);
        Task<OperationResult> Edit(TEditModel model);
    }
}