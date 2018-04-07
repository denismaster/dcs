using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Diploms.Core;

namespace Diploms.DataLayer
{
    public class RepositoryBase<T> : IRepository<T> where T : class, IEntity
    {
        protected readonly DiplomContext _context;

        public RepositoryBase(DiplomContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            _context = context;
        }

        /// <summary>
        /// Получение всех объектов
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<T>> Get(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = _context.Set<T>();
            if (includes != null)
            {
                foreach (var includeElement in includes)
                {
                    query = query.Include(includeElement);
                }
            }
            return await query.AsNoTracking().ToListAsync();
        }

        /// <summary>
        /// Получение объекта по Id
        /// </summary>
        /// <param name="id">Идентификатор объекта</param>
        /// <param name="includes"></param>
        /// <returns></returns>
        public async Task<T> Get(int id)
        {
            var query = _context.Set<T>().AsNoTracking();
            return await query.FirstOrDefaultAsync(entity => entity.Id == id);
        }

        /// <summary>
        /// Добавление объекта
        /// </summary>
        /// <param name="item">Объект для добавления</param>
        public void Add(T item)
        {
            _context.Set<T>().AddAsync(item);
        }

        /// <summary>
        /// Обновление объекта
        /// </summary>
        /// <param name="item">Объект для обновления</param>
        public void Update(T item)
        {
            _context.Set<T>().Update(item);
        }

        /// <summary>
        /// Удаление объекта
        /// </summary>
        /// <param name="item">Объект для удаления</param>
        public void Delete(T item)
        {
            _context.Set<T>().Remove(item);
        }

        /// <summary>
        /// Сохранение изменений в репозитории
        /// </summary>
        /// <returns></returns>
        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}