import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

@NgModule({
  imports: [CommonModule, CountriesRoutingModule, ReactiveFormsModule],
  declarations: [SelectorPageComponent],
  providers: [
    /* Services */
  ],
})
export class CountriesModule {}
