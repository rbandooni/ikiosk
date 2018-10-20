import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HoursService } from './hours.service';
import { Hours } from './hours';

import * as $ from 'jquery';

declare function getHours(weeks): any;

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  title: string = 'library hours';
  routeInfo: string;
  hours: any[];
  todaysDate = new Date().toISOString().slice(0, 10);

  locations: object;
  waldo = {
    "image": "", 
    "hrs": {
      "Sunday":"",
      "Monday":"",
      "Tuesday":"",
      "Wednesday": "",
      "Thursday": "",
      "Friday": "",
      "Saturday": ""
    }
  };
  swain = {"image": "", "hrs": {
    "Sunday":"",
    "Monday":"",
    "Tuesday":"",
    "Wednesday": "",
    "Thursday": "",
    "Friday": "",
    "Saturday": ""
  }};
  maybee = {
    "image": "",
    "hrs": {
    "Sunday":"",
    "Monday":"",
    "Tuesday":"",
    "Wednesday": "",
    "Thursday": "",
    "Friday": "",
    "Saturday": ""
  }};

  weekNumber: number;
  now: any;
  onejan: any;

  jsonData: any;
  constructor(private router: Router, private hoursService: HoursService) {
    this.messageEvent.emit(this.router.url);

   }
   hrsKeys;
   today;
  ngOnInit() {

    this.hoursService.getAllHours().subscribe((hrs) => {
      console.log(hrs);
      // this.locations = hrs;

    this.now = new Date();
    var dateDay = this.now.getDay();
    // console.log(date);
    switch(dateDay) {
      case 1: this.today = 'Monday'; break;
      case 2: this.today = 'Tuesday'; break;
      case 3: this.today = 'Wednesday'; break;
      case 4: this.today = 'Thursday'; break;
      case 5: this.today = 'Friday'; break;
      case 6: this.today = 'Saturday'; break;
      case 0: this.today = 'Sunday'; break;
    }
    this.onejan = new Date(this.now.getFullYear(), 0, 1);
    this.weekNumber = Math.ceil((((this.now - this.onejan) / 86400000) + this.onejan.getDay() + 1) / 7);

    console.log('now', this.now);
    console.log('onejan', this.onejan);
    console.log('weekno', this.weekNumber);
    this.weekNumber = this.weekNumber - 43;
    // this.weekNumber = 0; ?? toTest
    // this.waldo = this.locations['locations'][0];
    // this.swain = this.locations['locations'][1];
    // this.maybee = this.locations['locations'][2];

    Object.assign(this.waldo, hrs['locations'][0]);
    Object.assign(this.swain, hrs['locations'][1]);
    Object.assign(this.maybee, hrs['locations'][2]);
    Object.assign(this.waldo.hrs.Sunday, hrs['locations'][0].weeks[this.weekNumber]['Sunday']);
    this.waldo.hrs.Sunday = hrs['locations'][0].weeks[this.weekNumber]['Sunday'];
    this.waldo.hrs.Monday = hrs['locations'][0].weeks[this.weekNumber]['Monday'];
    this.waldo.hrs.Tuesday = hrs['locations'][0].weeks[this.weekNumber]['Tuesday'];
    this.waldo.hrs.Wednesday = hrs['locations'][0].weeks[this.weekNumber]['Wednesday'];
    this.waldo.hrs.Thursday = hrs['locations'][0].weeks[this.weekNumber]['Thursday'];
    this.waldo.hrs.Friday = hrs['locations'][0].weeks[this.weekNumber]['Friday'];
    this.waldo.hrs.Saturday = hrs['locations'][0].weeks[this.weekNumber]['Saturday'];
    // Object.assign(this.maybee.hrs, hrs['locations'][2].weeks[this.weekNumber]);
    // this.maybee.hrs = JSON.parse(hrs['locations'][2].weeks[this.weekNumber]);
    this.swain.hrs.Sunday = hrs['locations'][1].weeks[this.weekNumber]['Sunday'];
    this.swain.hrs.Monday = hrs['locations'][1].weeks[this.weekNumber]['Monday'];
    this.swain.hrs.Tuesday = hrs['locations'][1].weeks[this.weekNumber]['Tuesday'];
    this.swain.hrs.Wednesday = hrs['locations'][1].weeks[this.weekNumber]['Wednesday'];
    this.swain.hrs.Thursday = hrs['locations'][1].weeks[this.weekNumber]['Thursday'];
    this.swain.hrs.Friday = hrs['locations'][1].weeks[this.weekNumber]['Friday'];
    this.swain.hrs.Saturday = hrs['locations'][1].weeks[this.weekNumber]['Saturday'];
    // var obj = hrs.reduce(function(acc, cur, i) {
    //   acc[i] = cur;
    //   return acc;
    // }, {});
    // console.log(obj);
    this.maybee.hrs.Sunday = hrs['locations'][2].weeks[this.weekNumber]['Sunday'];
    this.maybee.hrs.Monday = hrs['locations'][2].weeks[this.weekNumber]['Monday'];
    this.maybee.hrs.Tuesday = hrs['locations'][2].weeks[this.weekNumber]['Tuesday'];
    this.maybee.hrs.Wednesday = hrs['locations'][2].weeks[this.weekNumber]['Wednesday'];
    this.maybee.hrs.Thursday = hrs['locations'][2].weeks[this.weekNumber]['Thursday'];
    this.maybee.hrs.Friday = hrs['locations'][2].weeks[this.weekNumber]['Friday'];
    this.maybee.hrs.Saturday = hrs['locations'][2].weeks[this.weekNumber]['Saturday'];

    this.waldo.image = '/assets/images/hours/waldo.jpg';
    this.swain.image = '/assets/images/hours/swain.jpg';
    this.maybee.image = '/assets/images/hours/maybee.jpg';

    // this.hrsKeys = Object.keys(this.waldo.hrs);
    // this.locations = JSON.parse(this.locations);
    //     this.locations['locations'][0].image = '/assets/images/hours/waldo.jpg';
    // this.locations['locations'][1].image = '/assets/images/hours/swain.jpg';
    // this.locations['locations'][2].image = '/assets/images/hours/maybee.jpg';
    console.log(this.maybee);
    });


    // $.getJSON('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1', function (data) {
    //   // console.log(data);
    //   this.locations = data;
    //   // console.log('this.locations before then', this.locations);
    //   return data;
    // }).then(function(data) {
    //   console.log('this.locations after then', this.locations);
    //   // this.afterInit();

    // this.now = new Date();
    // this.onejan = new Date(this.now.getFullYear(), 0, 1);
    // this.weekNumber = Math.ceil((((this.now - this.onejan) / 86400000) + this.onejan.getDay() + 1) / 7);
    // // this.locations = JSON.parse(this.locations);

    // // console.log(this.locations['locations'][2]);
    // console.log(this.locations)
    // this.locations['locations'][0].image = '/assets/images/hours/waldo.jpg';
    // this.locations['locations'][1].image = '/assets/images/hours/swain.jpg';
    // this.locations['locations'][2].image = '/assets/images/hours/maybee.jpg';

    // this.waldo.hours.thisWeek = this.locations['locations'][0].weeks[this.weekNumber];
    // this.maybee.hours.thisWeek = this.locations['locations'][2].weeks[this.weekNumber];
    // // this.waldo.hours = this.locations['locations'][0].weeks[this.weekNumber];

    // // this.waldo['hours'] = Array.of(this.waldo['hours'][0]);
    // console.log(this.waldo.hours);
    // console.log('todays weeknum', this.weekNumber)
    // console.log('waldo.hours.monday.rendered', this.waldo.hours.thisWeek['Monday'].rendered);
    // });

    // console.log('this.locations after getjson', this.locations);

    
    // this.locations = getHours(1);


    // this.calcCurrentWeekIndex(this.locations['locations'][0].weeks);
    // this.waldo = this.locations['locations'][0];
    // this.swain = this.locations['locations'][1];
    // this.maybee = this.locations['locations'][2];

    // this.hoursService.getHours('WLD').subscribe((data) => {
    //   // this.hours = data[this.todaysDate][0];
    //   console.log(data[this.todaysDate][0].StartHour)
    //   // console.log(this.hours[this.todaysDate][0]);

    // })

    // this.hoursService.getAllHours().subscribe((hrs) => {
    //   this.hours = hrs;
    //   console.log('hrs',hrs);
    // });

  }

  afterInit() {

  }
  // calcCurrentWeekIndex() {
  //   this
  //   // console.log(weekArr)
  // }
  backToHome() {
    this.router.navigate(['/index']);
  }

  linkToComponent(componentName: string) {
    this.router.navigate(['/' + componentName]);
  }

  // checkHoursApi() {
  //   console.log(this.hours);
  // }


}
