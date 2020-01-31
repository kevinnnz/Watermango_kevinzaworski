using Microsoft.EntityFrameworkCore;
using Watermango_kevin_zaworski.Models;

namespace Watermango_kevin_zaworski.Data
{
    public class PlantContext : DbContext
    {
        public PlantContext (DbContextOptions<PlantContext> options) : base(options)
        {
            // intentionally left blank
        }

        public DbSet<Plant> Plants { get; set; }
        public DbSet<Water> Water { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Water>()
                .HasKey(pi => new { pi.Id, pi.PlantId });
            modelBuilder.Entity<Water>()
                .HasOne(p => p.Plant);

            modelBuilder.Entity<Plant>()
                .HasMany(w => w.Water);
        }
    }
}
