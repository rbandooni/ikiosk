import { Component, OnInit, AfterContentInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { EventsService } from './events.service';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


declare function showModal(evtData): any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

  // private apiToken: any = null;

  token: any = null;
  // tokenData: any = null;

  eventsList: any;
  eventsCategories: any;
  clickedCategory = 'All';
  modalEventData: any;

  apiTokenURL = 'https://api2.libcal.com/1.1/oauth/token';
  apiURL = 'https://api2.libcal.com/1.1/events?cal_id=9993&days=90&limit=20';
  specificEventURL = 'https://api2.libcal.com/1.1/events';

  constructor(private router: Router, private events: EventsService, private http:HttpClient) {}

@Output() reloadEvent = new EventEmitter();

  ngOnInit() {
    this.getEvents(null);

  }
  filterEvents(category: string, id: number) {
    this.clickedCategory = category;
    // alert(category);
    this.getEvents(id);

  }
 multiDimensionalUnique(arr) {
  const uniques = [];
  const itemsFound = {};
  for (let i = 0, l = arr.length; i < l; i++) {
    const stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) { continue; }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

  getEvents(category) {
    if (category !== null ) {
        this.apiURL = this.apiURL + '&category=' + category;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.apiTokenURL, {
        'client_id': 303,
        'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
        'grant_type': 'client_credentials'
      }).toPromise().then(res => {
        // console.log(res);
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + res['access_token']);
        this.http.get(this.apiURL, { headers: headers }).toPromise().then(evts => {
           let events = JSON.stringify(evts);
           events = JSON.parse(events);
          const categories = [];
          categories.push({id: 0, name: 'All'});

          if (category === null) {
          
          $.each(events['events'], function(ind, val) {
            $.each(val['category'], function(idx, vl) {
              
              categories.push(vl);
              
            });
            
          });
            let i = 0;
            $.each(events['events'], function (ind, val) {
              $.each(val['category'], function (idx, vl) {
                console.log(vl.name)
                if (vl.name === 'Special Collections') {
                  // document.getElementById('grid' + i).classList.add('special-collection');
                }
                // categories.push(vl);
                i++;
              });
            });
          // this.eventsCategories = evts['category'];

          this.eventsCategories = this.multiDimensionalUnique(categories);

          }
          this.eventsList = evts;
          resolve();
        });

      });
    });

    return promise;
  }

  getEvent(id: number){
    // console.log(this.eventsCategories)
    const promise = new Promise((res, rej) => {
      this.http.post(this.apiTokenURL, {
        'client_id': 303,
        'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
        'grant_type': 'client_credentials'
      }).toPromise().then(res => {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + res['access_token']);
        this.http.get(this.specificEventURL + '/' + id, { headers: headers}).toPromise().then(evts => {
          showModal(evts);
        });
      });
    });
  }

  eventModal(id: number) {

    this.getEvent(id);
    // window.localStorage.setItem('ModalWindow', 'true');
    // this.modalEventData = this.eventsList.events.filter(function(i) {
    //   return i.id = id;
    // });


    console.log('showModal run');
  }

  scrollWindow() {
    console.log('scroll');
  }

  ngOnDestroy() {

  }

}
