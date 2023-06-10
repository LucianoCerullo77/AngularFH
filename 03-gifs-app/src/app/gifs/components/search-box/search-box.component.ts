import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Search</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search Gifs . . ."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />`,
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }
}
