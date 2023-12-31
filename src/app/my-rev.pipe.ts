import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true,
})
export class MyRevPipe implements PipeTransform {
  public temp: any;
  transform(value: string): any {
    return value.split('').reverse().join('');
  }
}
