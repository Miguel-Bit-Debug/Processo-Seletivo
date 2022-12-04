import { PessoaInputModel } from './../models/pessoaInput';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa';

@Injectable()
export class PessoaService {
  private elementApiUrl = 'http://localhost:5203/api/Pessoa';
  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.elementApiUrl);
  }

  pessoaDetails(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.elementApiUrl}/${id}`);
  }

  AtualizarNomePessoa(pessoa: PessoaInputModel) {
    return this.http.put(`${this.elementApiUrl}`, pessoa);
  }
}
