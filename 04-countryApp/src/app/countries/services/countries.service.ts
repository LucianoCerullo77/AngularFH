import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountriesServices {
  private apiURL: string = 'https://restcountries.com/v3.1';
  private byCapital: string = '/capital/';
  private byCountry: string = '/name/';
  private byRegion: string = '/region/';
  private byAlphaCode: string = '/alpha/';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}${this.byCapital}${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries }))
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiURL}${this.byCountry}${term}`;
    return this.getCountriesRequest(url);
  }
  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiURL}${this.byRegion}${term}`;
    return this.getCountriesRequest(url);
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiURL}${this.byAlphaCode}${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }
}
