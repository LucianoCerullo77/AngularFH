import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountriesServices } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesServices: CountriesServices
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesServices.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        console.log('Country found');
        return;
      });
  }
}
