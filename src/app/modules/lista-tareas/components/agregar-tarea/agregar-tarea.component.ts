import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {
  form:FormGroup<TareaForma>= new FormGroup<TareaForma>({
    tarea: new FormControl<string|null>(null,Validators.required)
  })

  constructor(
    private dialogRef: MatDialogRef<AgregarTareaComponent>
  ) { }

  ngOnInit(): void {
  }
  cerrar(){
    this.dialogRef.close()
  }
  agregar(){
    const res={
      tarea: this.form.controls.tarea.value
    }
    this.dialogRef.close(res)
  }
}
interface TareaForma{
  tarea:FormControl<string|null>
}
