import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  pure: false
})

export class TimePipe implements PipeTransform {
  transform(value: any): any {
    // const days = Math.floor(value / (24 * 3600));
    // const hours = Math.floor(value / 3600);
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  }
}
