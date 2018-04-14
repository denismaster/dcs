using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public interface IRepository<T> where T : class, IEntity
    {
        Task<IEnumerable<T>> Get(params Expression<Func<T, object>>[] includes);
        Task<T> Get(int id, params Expression<Func<T, object>>[] includes);
        void Add(T item);
        void Update(T item);
        void Delete(T item);
        Task SaveChanges();
    }
}