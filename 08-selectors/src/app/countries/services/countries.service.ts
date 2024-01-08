import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor() {}

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): SmallCountry[] {
    return [];
  }
}
