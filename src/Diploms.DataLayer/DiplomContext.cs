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
        public DbSet<Department> Departments { get; set; }
        
        public DiplomContext() : base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //TODO: Use appsettings.json or environment variable, not the string here.
            optionsBuilder.UseNpgsql(@"Host=localhost;Port=5432;Database=diploms;UserId=postgres;Password=12345678;Pooling=true");
        }
    }
}