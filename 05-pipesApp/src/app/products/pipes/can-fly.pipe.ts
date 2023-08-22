import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Fly' | 'Doesn´t Fly' {
    return value ? 'Fly' : 'Doesn´t Fly';
  }
}
