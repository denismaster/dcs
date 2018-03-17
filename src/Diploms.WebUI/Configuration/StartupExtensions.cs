using Diploms.Core;
using Diploms.DataLayer;
using Diploms.Services.Departments;
using Diploms.Services.Specialities;
using Diploms.Services.Institutes;
using Diploms.WebUI.Authentication;
using Microsoft.Extensions.DependencyInjection;
using Diploms.Services.Groups;
using Diploms.Services.Teachers;
using Diploms.Services.Students;
using Diploms.Services.DiplomWorks;
using Diploms.Services.Templates;

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

        public static IServiceCollection AddDepartments(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Department>, RepositoryBase<Department>>();
            services.AddScoped<DepartmentsService>();
            return services;
        }

        public static IServiceCollection AddSpecialities(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Speciality>, RepositoryBase<Speciality>>();
            services.AddScoped<SpecialitiesService>();
            return services;
        }

        public static IServiceCollection AddGroups(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Group>, RepositoryBase<Group>>();
            services.AddScoped<GroupsService>();
            return services;
        }

        public static IServiceCollection AddTeachers(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Teacher>, RepositoryBase<Teacher>>();
            services.AddScoped<TeachersService>();
            return services;
        }

        public static IServiceCollection AddStudents(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Student>, RepositoryBase<Student>>();
            services.AddScoped<StudentsService>();
            return services;
        }

        public static IServiceCollection AddDiplomWorks(this IServiceCollection services)
        {
            services.AddScoped<IRepository<DiplomWork>, RepositoryBase<DiplomWork>>();
            services.AddScoped<DiplomWorksService>();
            return services;
        }

        public static IServiceCollection AddTemplates(this IServiceCollection services)
        {
            services.AddScoped<IRepository<Template>, RepositoryBase<Template>>();
            services.AddScoped<TemplatesService>();
            return services;
        }

        public static IServiceCollection AddJWTTokens(this IServiceCollection services)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserRepository, UserRepository>();
            return services;
        }
    }
}