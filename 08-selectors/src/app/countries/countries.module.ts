import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

@NgModule({
  imports: [CommonModule, CountriesRoutingModule],
  declarations: [SelectorPageComponent],
})
export class CountriesModule {}
