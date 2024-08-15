import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent implements OnInit {
  triangle: { values: number[], color: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generatePascalTriangle(5); // Puedes cambiar el número de filas aquí
  }

  generatePascalTriangle(rows: number): void {
    for (let i = 0; i < rows; i++) {
      const rowValues = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          rowValues[j] = 1;
        } else {
          rowValues[j] = this.triangle[i - 1].values[j - 1] + this.triangle[i - 1].values[j];
        }
      }
      // Asigna un color aleatorio a cada fila
      this.triangle.push({ values: rowValues, color: this.generateRandomColor() });
    }
  }
  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
