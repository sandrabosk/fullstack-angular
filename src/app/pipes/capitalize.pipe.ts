import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any): any {
    if (value){
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value; 
  }

}


// import {Pipe} from “angular2/core”;
// import {PipeTransform} from “angular2/core”;
// @Pipe({name: ‘capitalize’})
// export class CapitalizePipe implements PipeTransform {
//   transform(value:any) {
//    if (value) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//     } return value;
//   }
// }
