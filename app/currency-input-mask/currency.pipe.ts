import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, args?: string[]): any {
    if (!isNaN(value)) {
      const currencySymbol = '₹';
      const result = value.toString().split('.');
      let lastThree = result[0].substring(result[0].length - 3);
      let otherNumbers = result[0].substring(0, result[0].length - 3);
      if (otherNumbers != '')
        lastThree = ',' + lastThree;
      let output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      if (result.length > 1) {
        output += "." + result[1];
      }
      return currencySymbol + output;
    }

  }

}