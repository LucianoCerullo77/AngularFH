import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 2,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  // name: new FormControl('', [sincronas], [asyncronas])

  // name: new FormControl('', [], []),
  // price: new FormControl(0),
  // inStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.formBuider.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuider: FormBuilder) {}

  ngOnInit(): void {
    // this.myForm.reset(rtx5090);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      console.log(key);
    }
    return 'hello';
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched;
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({});
  }
}
