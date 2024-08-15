import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoInicioComponent } from './components/contacto-inicio/contacto-inicio.component';


@NgModule({
  declarations: [
    ContactoInicioComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
  ]
})
export class ContactoModule { }
