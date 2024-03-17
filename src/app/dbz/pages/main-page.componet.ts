import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  public get characters() {
    return this.dbzService.characters;
  }

  public deleteCharacter(id: string): void {
    this.dbzService.deletecCharacterById(id);
  }

  public onNewCharacter(Character: Character): void {
    this.dbzService.addCharacter(Character);
  }
}
