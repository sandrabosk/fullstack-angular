import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {

    console.log('items', items)
    console.log('field', field)
    console.log('value', value)

      if (!items) {
        return [];
      }

      if (!value) {
        return [];
      }

      return items.filter((item )=> {

        if(item.firstName){
        return  item.firstName.match(new RegExp(value, 'i'))

        }else if(item.username){

          return item.username.match(new RegExp(value, 'i'))
        }
    });
  }

}
