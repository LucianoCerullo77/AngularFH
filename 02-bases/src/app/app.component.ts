import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Hello world';
  public counter: number = 10;

  increasedBy(): void {
    this.counter += 1;
  }
}
