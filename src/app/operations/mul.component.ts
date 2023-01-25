import { Component } from '@angular/core';

@Component({
  selector: 'app-mul',
  template: `
  <div class="container">
    <form>
      <div class="form-group">
        <label for="num1">Numero 1</label>
        <input type="number" class="form-control" id="num1" [(ngModel)]="num1" name="num1">
      </div>

      <div class="form-group">
        <label for="num2">Numero 2</label>
        <input type="number" class="form-control" id="num2" [(ngModel)]="num2" name="num2">
      </div>

      <br>

      <div class="d-flex justify-content-center">
        <button class="btn btn-warning" (click)="mul()">Multiplicar</button>
      </div>

      <hr>

      <div class="result-group">
        <p>Resultado: <span class="result">{{result}}</span></p>
      </div>
    </form>
  </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
  `]
})

export class MulComponent {
  num1: number;
  num2: number;
  result: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }

  mul() {
    this.result = Number(this.num1) * Number(this.num2);
  }
}