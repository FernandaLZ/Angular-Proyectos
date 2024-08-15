import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactPhoneComponent } from './components/contact-phone/contact-phone.component';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ListaTareasModule } from './modules/lista-tareas/lista-tareas.module';
import { TrianguloComponent } from './modules/triangulo-pascal/triangulo/triangulo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    children:[
      {
        path:"phone",
        component: ContactPhoneComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course-detail/:id',
    component: CourseDetailComponent
  },{
    path: 'lista',
    loadChildren:() => import('./modules/lista-tareas/lista-tareas.module')
    .then(m=>m.ListaTareasModule)
  },{
    path: 'http',
    loadChildren:() => import('./modules/http-cliente-practica/http-cliente-practica.module')
    .then(m=>m.HttpClientePracticaModule)
  },{
    path: 'triangulo',
    component: TrianguloComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
