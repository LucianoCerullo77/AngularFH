import { Component } from '@angular/core';

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
    'Dooku',
    'Ahsoka',
    'Mando',
    'Grogu',
    'Boba Fett',
  ];

  deleteClient(): void {
    this.clients.shift();
  }
}
