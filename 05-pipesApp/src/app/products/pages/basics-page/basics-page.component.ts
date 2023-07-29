import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'angular';
  public nameUpper: string = 'ANGULAR';
  public fullname: string = 'AnGuLaR FrAmEwOrK';

  public customDate: Date = new Date();
}
