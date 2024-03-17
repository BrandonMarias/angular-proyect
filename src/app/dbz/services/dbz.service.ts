import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { nanoid } from 'nanoid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: nanoid(), name: 'Goku', power: 15000 },
    { id: nanoid(), name: 'Vegeta', power: 7500 },
    { id: nanoid(), name: 'Krillin', power: 5000 },
  ];
  constructor() {}

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: nanoid() };
    this.characters.push(newCharacter);
  }

  deletecCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
