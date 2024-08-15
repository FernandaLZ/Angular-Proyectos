import { Component, OnInit } from '@angular/core';
import { ServicioHttpService } from '../../servicio-http.service';

@Component({
  selector: 'app-http-practica',
  templateUrl: './http-practica.component.html',
  styleUrls: ['./http-practica.component.scss']
})
export class HttpPracticaComponent implements OnInit {

  constructor(
    private httpservice: ServicioHttpService
  ) { }

  ngOnInit(): void {
  }

  getAllTask(){
    this.httpservice.getAllTask().subscribe({
      next: (http:HttpRespuesta[])=>{
        console.log(http)
      },
      error: (err:any)=>{
        console.error(err)
      }
    })
  }

}

export interface HttpRespuesta {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
