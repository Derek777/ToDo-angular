import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longTime'
})
export class LongTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value <= 0) {
      return 'Час вичерпано';
    }

    const days = Math.floor(value / (24 * 3600));

    const hour = Math.floor(value / 3600  - (days * 24));
    const hours = hour < 10 ? '0' + hour : hour;

    const min = Math.floor(value / 60 - (days * 1440) - (hour * 60));
    const minutes = min < 10 ? '0' + min : min;

    const sec = value % 60;
    const seconds = sec < 10 ? '0' + sec : sec;

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  }

}

