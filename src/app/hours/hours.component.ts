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

  locations: any;
  waldo = {hours:{ thisWeek: {}}};
  swain = { hours: { thisWeek: {}}};
  maybee = { hours: { thisWeek: {}}};

  weekNumber: number;
  now: any;
  onejan: any;

  jsonData: any;
  constructor(private router: Router, private hoursService: HoursService) {
    this.messageEvent.emit(this.router.url);

   }

  ngOnInit() {

    $.getJSON('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1', function (data) {
      // console.log(data);
      this.locations = data;
    });
    // this.locations = getHours(1);

    this.now = new Date();
    this.onejan = new Date(this.now.getFullYear(), 0, 1);
    this.weekNumber = Math.ceil((((this.now - this.onejan) / 86400000) + this.onejan.getDay() + 1) / 7);
    // this.locations = JSON.parse(this.locations);
  
    console.log(this.locations['locations'][2]);

    this.locations['locations'][0].image = '/assets/images/hours/waldo.jpg';
    this.locations['locations'][1].image = '/assets/images/hours/swain.jpg';
    this.locations['locations'][2].image = '/assets/images/hours/maybee.jpg';

    this.waldo.hours.thisWeek = this.locations['locations'][0].weeks[0];
    this.maybee.hours.thisWeek = this.locations['locations'][2].weeks[0];
    // this.waldo.hours = this.locations['locations'][0].weeks[0];

    // this.waldo['hours'] = Array.of(this.waldo['hours'][0]);
    console.log(this.waldo.hours);
    console.log('todays weeknum', this.weekNumber)
    console.log('waldo.hours.monday.rendered', this.waldo.hours.thisWeek['Monday'].rendered);

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

  calcCurrentWeekIndex() {
    this
    // console.log(weekArr)
  }
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
