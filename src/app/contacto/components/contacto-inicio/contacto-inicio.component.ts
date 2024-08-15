import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-inicio',
  templateUrl: './contacto-inicio.component.html',
  styleUrls: ['./contacto-inicio.component.scss']
})
export class ContactoInicioComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  irInicio(){
    this.router.navigate(['home'])
  }
  irCourses(){
    this.router.navigate(['course-detail',2])
  }
}
