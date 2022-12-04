export class PessoaInputModel {
  novoNome: string
  pessoaId: number;

  constructor(pessoaId: number, nome: string) {
    this.novoNome = nome
    this.pessoaId = pessoaId
  }
}
