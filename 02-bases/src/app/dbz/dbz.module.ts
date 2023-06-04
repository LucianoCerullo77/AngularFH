import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { DbzAddCaracterComponent } from './components/addCaracter/addCaracter.component';

@NgModule({
  declarations: [MainPageComponent, DbzListComponent, DbzAddCaracterComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
