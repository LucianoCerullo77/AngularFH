import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class DbzListComponent {
  @Input()
  // bring data from MainPage.ts
  public characterList: Character[] = [];

  @Output()
  public deleteCharacter: EventEmitter<Character> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    console.log({ index });
  }
}
