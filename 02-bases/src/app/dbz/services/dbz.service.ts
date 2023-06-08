import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 5000,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 20000,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 18000,
      id: uuid()
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   // this was good
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
