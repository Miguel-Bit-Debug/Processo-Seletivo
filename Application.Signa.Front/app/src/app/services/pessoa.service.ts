import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa';

@Injectable()
export class PessoaService {
  elementApiUrl = 'http://localhost:5203/api/Pessoa';
  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.elementApiUrl);
  }

  pessoaDetails(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.elementApiUrl}/${id}`);
  }
}
