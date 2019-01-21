import { Pipe, PipeTransform } from '@angular/core';
import { Cource } from "../../models";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courcesCollection: Cource[], sortCondition: string): Cource[] {
    // @ts-ignore
    return courcesCollection.sort((current, next) => current[sortCondition] < next[sortCondition])
  }

}
