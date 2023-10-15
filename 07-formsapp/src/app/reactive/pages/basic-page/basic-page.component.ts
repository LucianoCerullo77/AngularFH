import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent {
  // public myForm: FormGroup = new FormGroup({
  // name: new FormControl('', [sincronas], [asyncronas])

  // name: new FormControl('', [], []),
  // price: new FormControl(0),
  // inStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.formBuider.group({
    name: [''],
    price: [0],
    inStorage: [0],
  });

  constructor(private formBuider: FormBuilder) {}

  onSave(): void {
    console.log(this.myForm.value);
  }
}
