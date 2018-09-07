import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courcesCollection: any, sortCondition: string): any {
    // return courcesCollection.map(e => e.topRated = true)
    return courcesCollection.sort((current, next) => current[sortCondition] < next[sortCondition])
  }

}
