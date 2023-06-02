import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})


export class HeroComponent {
  public heroName: string = 'Iron Man';
  public heroRealName: string = 'Tony Stark';
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
    this.heroRealName = 'Peter Parker';
  }

  changeHeroAge() {
    this.age = 23;
  }

  resetForm(): void {
    this.heroName = 'Iron Man';
    this.heroRealName = 'Tony Stark';
    this.age = 45;
  }
}
