﻿using Signa.Domain.Interfaces.Repositories;
using Signa.Domain.Models;
using Signa.Infra.Data.Data;

namespace Signa.Infra.Data.Repositories
{
    public class PessoaRepository : IPessoaRepository
    {
        private readonly AppDbContext _context;

        public PessoaRepository(AppDbContext context)
        {
            _context = context;
        }

        public Pessoa BuscarPessoaPorId(int id)
        {
            return _context.Pessoa
                    .Where(x => x.PessoaId == id)
                    .First();
        }

        public IEnumerable<Pessoa> ListarPessoas()
        {
            return _context.Pessoa.OrderBy(x => x.NomeFantasia);
        }
    }
}
