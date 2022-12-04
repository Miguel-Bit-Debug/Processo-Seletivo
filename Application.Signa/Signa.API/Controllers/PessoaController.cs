using Microsoft.AspNetCore.Mvc;
using Signa.API.Controllers.InputModel;
using Signa.Domain.Interfaces.Repositories;
using Signa.Domain.Models;

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

        [HttpPut]
        public IActionResult AtualizarNomePessoa([FromBody] PessoaInputModel input)
        {
            var result = _pessoaRepository.AtualizarNomePessoa(input.PessoaId, input.NovoNome);

            if(result == false)
            {
                return BadRequest("Erro ao atualizar nome.");
            }

            return Ok("Nomw atualizado com sucesso");
        }
    }
}
