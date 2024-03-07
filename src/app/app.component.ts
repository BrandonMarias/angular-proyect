import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'mi-primer-proyecto-angular';
  public counter: number = 10;
  increaseBy1(): void {
    this.counter++;
  }
  decreaseBy1(): void {
    this.counter--;
  }
}
