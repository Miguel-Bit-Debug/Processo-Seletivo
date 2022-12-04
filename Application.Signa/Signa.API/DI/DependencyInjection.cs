using Microsoft.EntityFrameworkCore;
using Signa.Domain.Interfaces.Repositories;
using Signa.Infra.Data.Data;
using Signa.Infra.Data.Repositories;

namespace Signa.API.DI
{
    public static class DependencyInjection
    {
        public static void AddDependencyInjection(this WebApplicationBuilder builder)
        {
            builder.Services.AddDbContext<AppDbContext>(opt =>
            {
                opt.UseSqlServer(builder.Configuration["DbConnection"]);
            });

            builder.Services.AddScoped<IPessoaRepository, PessoaRepository>();
        }
    }
}
