import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesServices: CountriesServices
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.countriesServices
        .searchCountryByAlphaCode(id)
        .subscribe((country) => console.log(country));
    });
  }
}
