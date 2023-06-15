import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {


  @Input()
  public gifs!: Gif

  ngOnInit(): void {
    if(!this.gifs) throw new Error('Gif property is required.');
  }
}
