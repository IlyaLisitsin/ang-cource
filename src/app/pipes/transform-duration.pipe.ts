import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDuration'
})
export class TransformDurationPipe implements PipeTransform {

  transform(duration: number, args?: any): string {
    if (duration > 60) return `${Math.floor(duration / 60)}h ${duration % 60}m`
    else return `${duration}m`
  }

}
