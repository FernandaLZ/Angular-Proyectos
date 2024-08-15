import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTareasRoutingModule } from './lista-tareas-routing.module';
import { ListaTareasInicioComponent } from './components/lista-tareas-inicio/lista-tareas-inicio.component';
import {  MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ListaTareasInicioComponent,
    AgregarTareaComponent
  ],
  imports: [
    CommonModule,
    ListaTareasRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class ListaTareasModule { }
