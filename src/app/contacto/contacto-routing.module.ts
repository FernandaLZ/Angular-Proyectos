import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoInicioComponent } from './components/contacto-inicio/contacto-inicio.component';

const routes: Routes = [
  {
    path:'',
    component:ContactoInicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
