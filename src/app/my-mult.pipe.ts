import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true,
})
export class MyMultPipe implements PipeTransform {
  transform(value: number, Params: number): number {
    return value * Params;
  }
}
