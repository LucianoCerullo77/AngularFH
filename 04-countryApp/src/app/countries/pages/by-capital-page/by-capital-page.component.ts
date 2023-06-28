import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesServices) {}

  searchByCapital(term: string) {
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
