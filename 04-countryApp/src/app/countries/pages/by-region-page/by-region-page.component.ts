import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  constructor(private countriesServices: CountriesServices) {}

  @Input()
  public countries: Country[] = [];

  searchByRegion(term: string) {
    this.countriesServices
      .searchRegion(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
