using Diploms.Core;
using Diploms.DataLayer;
using Diploms.Services.Departments;
using Microsoft.Extensions.DependencyInjection;

namespace Diploms.WebUI.Configuration
{
    public static class StartupExtensions
    {
        public static IServiceCollection AddDepartments(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Department>, RepositoryBase<Department>>();
            services.AddScoped<DepartmentsService>();
            return services;
        }
    }
}