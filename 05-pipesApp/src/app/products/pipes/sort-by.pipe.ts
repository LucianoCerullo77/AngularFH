import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
// export class SortByPipe implements PipeTransform {
//   transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
//     switch (sortBy) {
//       case 'name':
//         return heroes.sort((a, b) => (a.name > b.name )? 1 : -1);

//       case 'canFly':
//         return heroes.sort((a, b) => (a.name > b.name )? 1 : -1);

//       case 'color':
//         return heroes.sort((a, b) => (a.name > b.name )? 1 : -1);

//       default:
//         return heroes;
//     }
//   }
// }

export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: keyof  Hero | '' = ''): Hero[] {

    return sortBy !== '' ? heroes.sort((a,b)=> a[sortBy] > b[sortBy] ? 1 : -1) : heroes;
  }

}
