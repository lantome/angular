import { Pipe, PipeTransform } from '@angular/core';
import {TProducts} from "../types/types";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: TProducts[], search: string): TProducts[] {
    // if(!search) {
    //   return products
    // }
    const a = products.filter((product) => {

      return  product.title.toLowerCase().includes(search.toLowerCase())
    })
    console.log(a)
    return a
  }


}
