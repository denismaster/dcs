using Diploms.Core;
using Diploms.DataLayer;
using Diploms.Services.Departments;
using Diploms.Services.Specialities;
using Diploms.Services.Institutes;
using Microsoft.Extensions.DependencyInjection;

namespace Diploms.WebUI.Configuration
{
    public static class StartupExtensions
    {
        public static IServiceCollection AddInstitutes(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Institute>, RepositoryBase<Institute>>();
            services.AddScoped<InstitutesService>();
            return services;
        }

        public static IServiceCollection AddSpecialities(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Speciality>, RepositoryBase<Speciality>>();
            services.AddScoped<SpecialitiesService>();
            return services;
        }

        public static IServiceCollection AddDepartments(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Department>, RepositoryBase<Department>>();
            services.AddScoped<DepartmentsService>();
            return services;
        }
    }
}