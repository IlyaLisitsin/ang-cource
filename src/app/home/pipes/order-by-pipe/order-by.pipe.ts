import { Pipe, PipeTransform } from '@angular/core';
import { Cource } from "../../models";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courcesList: Cource[], conditon: string): any {
    switch(conditon) {
      case 'duration':
        return courcesList.sort((a, b) => Number(b['duration']) - Number(a['duration']));
      case 'creation':
        // @ts-ignore
        return courcesList.sort((a, b) => new Date(b['creation']).getTime() - new Date(a['creation']).getTime());
      case 'title':
        return courcesList.sort((a, b) => {
          if(a['title'] < b['title']) return -1;
          if(a['title'] > b['title']) return 1;
          return 0;
        });
      default: return courcesList.sort((a, b) => b[conditon] - a[conditon]);
    }
  }
}
