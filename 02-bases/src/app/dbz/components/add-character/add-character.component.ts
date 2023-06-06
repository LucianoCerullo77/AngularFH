import { Component } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class DbzAddCharacterComponent {
  constructor() {}

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter():void{
    console.log(this.character);

  }
}
