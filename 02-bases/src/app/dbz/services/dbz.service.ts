import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 5000,
    },
    {
      name: 'Goku',
      power: 20000,
    },
    { name: 'Vegeta', power: 18000 },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    // this was good
    this.characters.splice(index, 1);
  }
}
