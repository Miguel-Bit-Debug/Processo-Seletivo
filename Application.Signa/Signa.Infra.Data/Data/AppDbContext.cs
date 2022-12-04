using Microsoft.EntityFrameworkCore;
using Signa.Domain.Models;

namespace Signa.Infra.Data.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Pessoa> Pessoa { get; set; }
    }
}
