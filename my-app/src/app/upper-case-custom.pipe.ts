import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseCustom'
})
export class UpperCaseCustom implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    return value.toUpperCase()
  }

}
