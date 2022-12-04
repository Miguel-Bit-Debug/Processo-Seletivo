import { PessoaService } from './../../../services/pessoa.service';
import { Pessoa } from './../../../models/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [PessoaService]
})
export class TableComponent implements OnInit {

  show: boolean = false;
  dataSource!: Pessoa[];
  displayedColumns: string[] = ['Codigo', 'NomeFantasia', 'CpfCnpj', 'actions'];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getPessoas().subscribe(res => {
      this.dataSource = res;
      console.log(res)
    })
  }


  mostrarTabela() {
    this.show = true;
  }

  esconderTabela() {
    this.show = false;
  }

  details(e: any) {

  }
}
