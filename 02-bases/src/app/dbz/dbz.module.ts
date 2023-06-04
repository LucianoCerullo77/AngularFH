import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { DbzAddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponent, DbzListComponent, DbzAddCharacterComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
