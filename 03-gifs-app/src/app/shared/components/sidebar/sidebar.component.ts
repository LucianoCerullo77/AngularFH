import { Component, OnInit } from '@angular/core';

import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit() {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  showGifByHistory(tag: string): void {
    this.gifsService.searchTag(tag);
  }

  deleteHistory(): void {
    const remove = localStorage.removeItem('history');
    location.reload();
    return remove;
  }
}
