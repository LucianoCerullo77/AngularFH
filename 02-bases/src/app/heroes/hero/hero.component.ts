import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public heroName: string = 'iron Man';
  public realName : string = 'Tony Stark'
  public age: number = 45;
}
