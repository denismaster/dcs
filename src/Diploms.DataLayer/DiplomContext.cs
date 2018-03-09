using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Diploms.Core;

namespace Diploms.DataLayer
{
    public class DiplomContext : DbContext
    {
        public DbSet<Institute> Institutes { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Speciality> Specialities { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        
        public DiplomContext() : base()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRole>()
                            .HasKey(t => new { t.UserId, t.RoleId });

            modelBuilder.Entity<UserRole>()
                .HasOne(pt => pt.User)
                .WithMany(p => p.Roles)
                .HasForeignKey(pt => pt.RoleId);

            modelBuilder.Entity<UserRole>()
                .HasOne(pt => pt.Role)
                .WithMany(t => t.Users)
                .HasForeignKey(pt => pt.UserId);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //TODO: Use appsettings.json or environment variable, not the string here.
            optionsBuilder.UseNpgsql(@"Host=localhost;Port=5432;Database=diploms;UserId=postgres;Password=12345678;Pooling=true");
        }
    }
}