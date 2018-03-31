using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Departments;

namespace Diploms.Services
{
    public interface ICatalogService<TEntity, TGetOneModel, TAddModel, TEditModel> where TEntity : BaseEntity
    {
        Task<TGetOneModel> GetOne(int id);
        Task<OperationResult> Add(TAddModel model);
        Task<OperationResult> Edit(TEditModel model);
    }
}