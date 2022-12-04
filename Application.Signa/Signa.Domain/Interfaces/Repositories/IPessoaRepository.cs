using Signa.Domain.Models;

namespace Signa.Domain.Interfaces.Repositories
{
    public interface IPessoaRepository
    {
        IEnumerable<Pessoa> ListarPessoas();
        Pessoa BuscarPessoaPorId(int id);
        bool AtualizarNomePessoa(int pessoaId, string nome);
    }
}
