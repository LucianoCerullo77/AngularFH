import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'SuperMan',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Spider-Man',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Martian ManHunter',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Daredevil',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.blue,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
