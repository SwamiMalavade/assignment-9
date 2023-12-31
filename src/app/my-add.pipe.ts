import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true,
})
export class MyAddPipe implements PipeTransform {
  transform(value: number, Params: any): number {
    return value * Params;
  }
}
