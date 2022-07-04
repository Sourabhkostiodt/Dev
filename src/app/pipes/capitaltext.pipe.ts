import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaltext'
})
export class CapitaltextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
