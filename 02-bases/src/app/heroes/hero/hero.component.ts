import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public heroName: string = 'Iron Man';
  public realName: string = 'Tony Stark';
  public age: number = 45;

  get capitalizedName(): string {
    return this.heroName.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.heroName} - ${this.age}`;
  }

  changeHeroName(): void {
    // throw 'Method not found'
    this.heroName = 'Spider-Man';
  }

  changeHeroRealName(): void {
    this.realName = 'Peter Parker';
  }

  changeHeroAge() {
    this.age = 23;
  }
}
