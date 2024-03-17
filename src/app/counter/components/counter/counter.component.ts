import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{ counter }}</h3>

    <button (click)="decreaseBy1(10)">-1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy1(10)">+1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;
  increaseBy1(value: number): void {
    this.counter += value;
  }
  decreaseBy1(value: number): void {
    this.counter -= value;
  }
  resetCounter(): void {
    this.counter = 0;
  }
}
