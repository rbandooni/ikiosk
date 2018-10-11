import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { EventsService } from './events.service';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // private apiToken: any = null;

  token: any = null;
  // tokenData: any = null;

  eventsList: any;

  constructor(private router: Router, private events: EventsService, private http:HttpClient) {}



  ngOnInit() {
    this.getToken();
  }

  getToken() {
      const apiTokenURL = 'https://api2.libcal.com/1.1/oauth/token';

      const apiURL = 'https://api2.libcal.com/1.1/events?cal_id=9993';

    const promise = new Promise((resolve, reject) => {
      this.http.post(apiTokenURL, {
        'client_id': 303,
        'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
        'grant_type': 'client_credentials'
      }).toPromise().then(res => {
        // console.log(res);
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + res['access_token']);
        this.http.get(apiURL, { headers: headers }).toPromise().then(evts => {
          console.log(evts);
          this.eventsList = evts;
          resolve();
        });

      });
    });

    return promise;
  }

}
