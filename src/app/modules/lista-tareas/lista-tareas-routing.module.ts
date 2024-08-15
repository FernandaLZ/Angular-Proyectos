import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasInicioComponent } from './components/lista-tareas-inicio/lista-tareas-inicio.component';

const routes: Routes = [
  {
    path:'',
    component: ListaTareasInicioComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListaTareasRoutingModule { }
