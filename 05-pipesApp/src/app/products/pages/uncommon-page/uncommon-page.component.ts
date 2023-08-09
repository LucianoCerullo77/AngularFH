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

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }
}
