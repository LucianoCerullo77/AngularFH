import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter : {{ counter }}</h3>

    <button class="btn btn-primary mx-2" (click)="increasedBy(1)">+ 1</button>
    <button class="btn btn-primary mx-2" (click)="resetCount()">Reset</button>
    <button class="btn btn-danger mx-2" (click)="increasedBy(-1)">- 1</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  increasedBy(value: number): void {
    this.counter += value;
  }

  resetCount() {
    this.counter = 10;
  }
}
