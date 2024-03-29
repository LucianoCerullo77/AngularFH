import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favouriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  public newFavourite: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) {}

  get favouriteGames() {
    return this.myForm.get('favouriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `Mininum ${errors['minlength'].requiredLenght} characters`;
      }
    }
    return null;
  }

  onDeleteFavourite(index: number): void {
    this.favouriteGames.removeAt(index);
  }

  onAddFavourites(): void {
    if (this.newFavourite.invalid) return;

    const newGame = this.favouriteGames.value;
    // this.favouriteGames.push(new FormControl(newGame, Validators.required));
    this.favouriteGames.push(this.fb.control(newGame, Validators.required));
    this.newFavourite.reset();
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    (this.myForm.controls['favouriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
