import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRespuesta } from './components/http-practica/http-practica.component';

@Injectable()

export class ServicioHttpService {

  constructor(
    private httpClient: HttpClient
  ) { 
    
  }

  getAllTask(){
    const path= 'https://jsonplaceholder.typicode.com/todos'
    return this.httpClient.get<HttpRespuesta[]>(path);
  }
  
}

