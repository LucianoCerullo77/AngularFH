import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private giphyApiKey: string = 'zyhfnQBl6e3sapRzbg4t4LtYsknYvWuz';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    //inseting old tag
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    // inserting new tag
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    this.http.get(
      'https://api.giphy.com/v1/gifs/search?api_key=zyhfnQBl6e3sapRzbg4t4LtYsknYvWuz&q=valorant&limit=12'
    );

    // 'https://api.giphy.com/v1/gifs/search?api_key=zyhfnQBl6e3sapRzbg4t4LtYsknYvWuz&q=valorant&limit=12'
  }
}
