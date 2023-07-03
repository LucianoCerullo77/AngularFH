import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  @Input()
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesServices) {}

  searchByCapital(term: string) {
    this.countriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }

  searchByCountry(term: string) {
    this.countriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
