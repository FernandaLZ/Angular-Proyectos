import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-tareas-inicio',
  templateUrl: './lista-tareas-inicio.component.html',
  styleUrls: ['./lista-tareas-inicio.component.scss']
})
export class ListaTareasInicioComponent implements OnInit {
  tareas:Tareas[]=[]
  displayedColumns:string[]=['id','tarea','acciones'];
  dataSource = new MatTableDataSource<Tareas>([]);
  constructor(
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.dataSource.data = [
      {
        id:1,
        tarea:"Tarea 1"
      },
      {
        id:2,
        tarea:"Tarea 2"
      },
      {
        id:3,
        tarea:"Tarea 3"
      }
    ] 
  }
  agregarTarea(){
    this.matDialog.open(AgregarTareaComponent,{
      width:'400px'
    }).afterClosed().subscribe(res=>{
      let id:number=1;
      const currentData = this.dataSource.data;
      if(this.dataSource.data.length)
        id= this.dataSource.data.length+1 ?? 0;
      this.dataSource.data = [
        ...currentData,
        {
          id: id,
          tarea: res.tarea
        }
      ];
      console.log(this.dataSource)
    })
  }

  eliminarTarea(idTarea:number){
    console.log(idTarea)
    this.dataSource.data = this.dataSource.data.filter((val:Tareas)=>{return val.id !== idTarea})
  }
}
interface Tareas {
  id:number,
  tarea:string
}
