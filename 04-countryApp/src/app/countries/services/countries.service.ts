import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesServices {
  private apiURL: string = 'https://restcountries.com/v3.1';
  private byCapital: string = '/capital/';
  private byCountry: string = '/name/';

  constructor(private http: HttpClient) {}
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}${this.byCapital}${term}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiURL}${this.byCountry}${term}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
