import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Search</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search Gifs . . ."
      (keyup)="searchTag(txtTagInput.value)"
      #txtTagInput
    />`,
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  searchTag(newTag: string): void {
    console.log({ newTag });
  }
}
