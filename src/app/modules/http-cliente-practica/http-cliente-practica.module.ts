import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientePracticaRoutingModule } from './http-cliente-practica-routing.module';
import { HttpPracticaComponent } from './components/http-practica/http-practica.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ServicioHttpService } from './servicio-http.service';


@NgModule({
  declarations: [
    HttpPracticaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientePracticaRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [ServicioHttpService]
})
export class HttpClientePracticaModule { }
