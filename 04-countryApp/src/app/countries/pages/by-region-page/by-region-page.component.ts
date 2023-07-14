import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServices } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  constructor(private countriesServices: CountriesServices) {}

  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  searchByRegion(term: string) {
    this.countriesServices
      .searchRegion(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
