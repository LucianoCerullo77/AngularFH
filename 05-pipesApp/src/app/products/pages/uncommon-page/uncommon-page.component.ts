import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'John Doe';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invited Man of the year',
    female: 'invited Woman of the year',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural

  public clients: string[] = [
    'John',
    'Vanessa',
    'Anakin',
    'Padme',
    'Luke',
    'Leia',
    'Obi-Wan',
    'Mando',
    'Boba Fett',
  ];
  public clientsMap = {
    '=0': 'no clients waiting.',
    '=1': 'only 1 Client waiting.',
    other: '# Clients waiting.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // Key Value Pipe

  public person = {
    name: 'John',
    age: '32',
    address: 'Quebec, Canada',
  };

  // Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );
}
