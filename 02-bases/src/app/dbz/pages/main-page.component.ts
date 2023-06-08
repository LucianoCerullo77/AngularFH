import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor() {}
  public title: string = 'Dragon Ball Z Character';
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
    this.characters.push(character)
  }
}
