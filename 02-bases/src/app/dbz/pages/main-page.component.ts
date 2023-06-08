import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public title: string = 'Dragon Ball Z Characters';

  constructor(public dbzService: DbzService) {
    this.dbzService.characters;
    this.dbzService.onDeleteCharacter;
    this.dbzService.onNewCharacter;
  }
}
