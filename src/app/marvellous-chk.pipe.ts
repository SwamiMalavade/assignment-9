import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true,
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value: number, Params: string): any {
    if (Params == 'Prime') {
      for (let i: number = 2; i < value; i++)
        if (value % i == 0) return 'Not a Prime Number';
        else return 'Is a Prime number';
    }
    if (Params == 'Even') {
      if (value % 2 == 0) {
        return 'It is an Even number';
      } else {
        return 'It is not an Even number';
      }
    }
    if (Params == 'Odd') {
      if (value % 2 != 0) {
        return 'It is an Odd number';
      } else {
        return 'It is not an Odd number';
      }
    }
    if (Params == 'Perfect') {
      let temp: number = 0;
      for (let i: number = 1; i <= value / 2; i++) {
        if (value % i == 0) {
          temp += i;
        }
      }
      if (temp == value && temp != 0) {
        return 'It is a Perfect number.';
      } else {
        return 'It is not a Perfect number.';
      }
    }
  }
}
