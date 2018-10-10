import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { EventsService } from './events.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // private apiToken: any = null;

  // token: any = null;
  // tokenData: any = null;

  events: any;

  constructor(private router: Router, private evts: EventsService) { }
  //   const token = '';
  //  $.ajax({
  //     url: 'https://api2.libcal.com/1.1/oauth/token',
  //     method: 'post',
  //     dataType: 'json',
  //     data: {
  //       'client_id': 303,
  //       'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
  //       'grant_type': 'client_credentials'
  //     },
  //     success: function (tokenDat) {
  //       // console.log(token.access_token);
  //       // return token.access_token;
  //       this.token = tokenDat.access_token;
  //     }
  //   });
  // }

  ngOnInit() {

    this.evts.getAllEvents().pipe(map(events => {
      this.events = events;
      console.log(events);
    }));

//  this.tokenData =  $.ajax({
//     url: 'https://api2.libcal.com/1.1/events?cal_id=9993',
//     method: 'get',
//     dataType: 'json',
//     beforeSend: function( xhr ) {
//       xhr.setRequestHeader('Authorization', 'Bearer ' + this.token.responseJSON['access_token']);
//     },
//     success: function(events) {
//       // this.events = events;
//       // return events;
//       console.log(events);
//     }
//   });


  }

}
