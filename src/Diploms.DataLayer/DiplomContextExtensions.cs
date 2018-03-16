using System;
using System.Linq;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Diploms.Core;
using System.Collections.Generic;

namespace Diploms.DataLayer
{
    public static class DiplomContentSystemExtensions
    {
        public static void EnsureSeedData(this DiplomContext context)
        {
            if (context.AllMigrationsApplied())
            {
                if (!context.Roles.Any())
                {
                    context.Roles.AddRange(Role.Admin, Role.Owner, Role.Student, Role.Teacher);
                    context.SaveChanges();
                }
                if(!context.Users.Any())
                {
                    context.Users.Add(new User{
                        Id = 1,
                        Login = "admin",
                        PasswordHash = @"WgHWgYQpzkpETS0VemCGE15u2LNPjTbtocMdxtqLll8=",
                        Roles = new List<UserRole> 
                        {
                            new UserRole 
                            {
                                UserId = 1,
                                RoleId = 1
                            }
                        }
                    });
                }
            }
        }
        private static bool AllMigrationsApplied(this DiplomContext context)
        {
            var applied = context.GetService<IHistoryRepository>()
                .GetAppliedMigrations()
                .Select(m => m.MigrationId);

            var total = context.GetService<IMigrationsAssembly>()
                .Migrations
                .Select(m => m.Key);

            return !total.Except(applied).Any();
        }
    }
}