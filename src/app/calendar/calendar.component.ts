import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // private apiToken: any = null;

  token: any = null;
  tokenData: any = null;

  events: Object;

  constructor(private router: Router) {
   $.ajax({
      url: 'https://api2.libcal.com/1.1/oauth/token',
      method: 'post',
      dataType: 'json',
      data: {
        'client_id': 303,
        'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
        'grant_type': 'client_credentials'
      },
      success: function (token) {
        // console.log(token.access_token);
        // return token.access_token;
        this.token = token.access_token;
      }
    });
  }

  ngOnInit() {

console.log(this.token);

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


  debug() {
    console.log(this.token);
    // this.router.navigate(['/index']);
  }

}
