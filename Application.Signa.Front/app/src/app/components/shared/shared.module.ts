import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
