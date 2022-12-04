import { DialogComponent } from './../dialog/dialog.component';
import { PessoaService } from './../../../services/pessoa.service';
import { Pessoa } from './../../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [PessoaService],
})
export class TableComponent implements OnInit {

  show: boolean = false;
  dataSource!: Pessoa[];
  displayedColumns: string[] = ['NomeFantasia', 'actions'];

  constructor(private pessoaService: PessoaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pessoaService.getPessoas().subscribe((res) => {
      this.dataSource = res;
    });
  }

  mostrarTabela() {
    this.show = true;
  }

  esconderTabela() {
    this.show = false;
  }

  details(e: any) {
    this.pessoaService.pessoaDetails(e).subscribe(p => {
      this.dialog.open(DialogComponent, {
        width: '250px',
        data: {
          PessoaId: p.pessoaId,
          NomeFantasia: p.nomeFantasia,
          CpfCnpj: p.cpfCnpj
        },
      });
    })
  }
}
