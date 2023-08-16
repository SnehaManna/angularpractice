import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let currentYear:any=new Date().getFullYear();
    let userYear:any=new Date(value).getFullYear();
    let ageval= currentYear - userYear;
    return ageval;
  }

}
