import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age} años`;
  }

  changeHeroeName(): void {
    this.name = 'Spiderman';
  }

  changeHeroeAge(): void {
    this.age = 30;
  }

  resetHeroe(): void {
    this.name = 'Ironman';
    this.age = 45;
  }


}
