using System.Collections.Generic;
using System.Threading.Tasks;

namespace Diploms.Core
{
    public interface IRepository<T> where T : class, IEntity
    {
        Task<IEnumerable<T>> Get();
        Task<T> Get(int id);
        void Add(T item);
        void Update(T item);
        void Delete(T item);
        Task SaveChanges();
    }
}