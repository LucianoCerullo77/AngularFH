import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesServices } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  constructor(private countriesServices: CountriesServices) {}

  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesServices
      .searchRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }
}
