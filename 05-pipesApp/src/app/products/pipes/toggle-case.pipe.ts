import { Pipe, PipeTransform } from '@angular/core';

// name | toggleCase = 'NAME'
// NAME | toggleCase = 'name'

@Pipe({
  name: 'toggleCase',
})


export class ToggleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
