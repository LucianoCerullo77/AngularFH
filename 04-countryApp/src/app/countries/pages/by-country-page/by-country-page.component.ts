import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  @Input()
  public countries: Country[] = [];
  public initialValue : string = ''

  constructor(private countriesServices: CountriesServices) {}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries
    this.initialValue = this.countriesServices.cacheStore.byCountries.term
  }

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
