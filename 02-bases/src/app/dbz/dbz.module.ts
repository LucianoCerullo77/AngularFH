import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';



@NgModule({
  declarations: [MainPage],
  imports: [
    CommonModule
  ],
  exports: [MainPage]
})
export class DbzModule { }
