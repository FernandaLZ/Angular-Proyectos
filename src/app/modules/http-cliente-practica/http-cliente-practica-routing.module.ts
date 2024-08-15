import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpPracticaComponent } from './components/http-practica/http-practica.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component:HttpPracticaComponent
  }
 ];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HttpClientePracticaRoutingModule { }
