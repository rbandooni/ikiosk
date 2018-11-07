import { Pipe, PipeTransform } from '@angular/core';

import { DatePipe } from '@angular/common';

import * as moment from 'moment-timezone';

@Pipe({
  name: 'dstDate'
})
export class DstDatePipe extends DatePipe implements PipeTransform {


  transform(
    value: string | Date,
    format: string = 'shortTime',
    timezone: string = 'America/Detroit'
  ): string {
    const timezoneOffset = moment(value).tz(timezone).format('Z');
    return super.transform(value, format, timezoneOffset);
  }

}
