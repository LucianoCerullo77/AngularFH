import { Component, OnInit } from '@angular/core';


import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) {}

  ngOnInit() {
  }

  get tags() {
    return this.gifsService.tagsHistory

  }

  private gifsArray:string[] = this.gifsService.tagsHistory
  public showGifs: string[] = this.gifsService.tagsHistory

}
