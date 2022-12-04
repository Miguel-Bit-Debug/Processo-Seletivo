using Microsoft.AspNetCore.Mvc;
using Signa.Domain.Interfaces.Repositories;

namespace Signa.API.Controllers
{
    [Route("api/[controller]")]
    public class PessoaController : ControllerBase
    {
        private readonly IPessoaRepository _pessoaRepository;

        public PessoaController(IPessoaRepository pessoaRepository)
        {
            _pessoaRepository = pessoaRepository;
        }

        [HttpGet]
        public IActionResult BuscarPessoas()
        {
            var pessoas = _pessoaRepository.ListarPessoas();

            return Ok(pessoas);
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPessoaPorId(int id)
        {
            var pessoa = _pessoaRepository.BuscarPessoaPorId(id);

            return Ok(pessoa);
        }
    }
}
