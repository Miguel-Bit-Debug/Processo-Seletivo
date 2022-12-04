import { MatInput } from '@angular/material/input';
import { PessoaService } from './../../../services/pessoa.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PessoaInputModel } from 'src/app/models/pessoaInput';

export interface DialogData {
  PessoaId: number;
  NomeFantasia: string;
  CpfCnpj: string
}



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [PessoaService]
})
export class DialogComponent implements OnInit {

  nome!: string;

  constructor(
    private pessoaService: PessoaService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,
  ) {}

  ngOnInit(): void {
  }

  saveNamePerson(pessoaId: any) {

    let novoNome = new PessoaInputModel(pessoaId, this.nome);

    this.pessoaService.AtualizarNomePessoa(novoNome).subscribe();
  }
}
