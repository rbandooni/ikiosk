import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HoursService } from './hours.service';
import { Hours } from './hours';


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

  locations = '{ "locations": [{ "lid": 9079, "name": "Waldo Library", "category": "library", "desc": "", "url": "", "contact": "", "fn": "", "lat": "", "long": "", "color": "#000000", "weeks": [{ "Sunday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "12:00pm", "to": "2:00am" }] }, "date": "2018-10-07", "rendered": "12:00pm - 2:00am" }, "Monday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-08", "rendered": "7:30am - 2:00am" }, "Tuesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-09", "rendered": "7:30am - 2:00am" }, "Wednesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-10", "rendered": "7:30am - 2:00am" }, "Thursday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-11", "rendered": "7:30am - 2:00am" }, "Friday": { "times": { "currently_open": true, "status": "open", "hours": [{ "from": "7:30am", "to": "9:00pm" }] }, "date": "2018-10-12", "rendered": "7:30am - 9:00pm" }, "Saturday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "10:00am", "to": "6:00pm" }] }, "date": "2018-10-13", "rendered": "10:00am - 6:00pm" } }] }, { "lid": 9265, "name": "Swain Education Library", "category": "library", "desc": "", "url": "", "contact": "", "fn": "", "lat": "", "long": "", "color": "#000", "weeks": [{ "Sunday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "2:00pm", "to": "10:00pm" }] }, "date": "2018-10-07", "rendered": "2:00pm - 10:00pm" }, "Monday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-08", "rendered": "9:00am - 10:00pm" }, "Tuesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-09", "rendered": "9:00am - 10:00pm" }, "Wednesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-10", "rendered": "9:00am - 10:00pm" }, "Thursday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-11", "rendered": "9:00am - 10:00pm" }, "Friday": { "times": { "currently_open": true, "status": "open", "hours": [{ "from": "9:00am", "to": "5:00pm" }] }, "date": "2018-10-12", "rendered": "9:00am - 5:00pm" }, "Saturday": { "times": { "currently_open": false, "status": "closed" }, "date": "2018-10-13", "rendered": "Closed" } }] }, { "lid": 9266, "name": "Maybee Music and Dance Library", "category": "library", "desc": "", "url": "", "contact": "", "fn": "", "lat": "", "long": "", "color": "#000000", "weeks": [{ "Sunday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "2:00pm", "to": "10:00pm" }] }, "date": "2018-10-07", "rendered": "2:00pm - 10:00pm" }, "Monday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-08", "rendered": "8:30am - 10:00pm" }, "Tuesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-09", "rendered": "8:30am - 10:00pm" }, "Wednesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-10", "rendered": "8:30am - 10:00pm" }, "Thursday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-11", "rendered": "8:30am - 10:00pm" }, "Friday": { "times": { "currently_open": true, "status": "open", "hours": [{ "from": "8:30am", "to": "5:00pm" }] }, "date": "2018-10-12", "rendered": "8:30am - 5:00pm" }, "Saturday": { "times": { "currently_open": false, "status": "closed" }, "date": "2018-10-13", "rendered": "Closed" } }] }] }';

  waldo = {hours:{}};
  swain = [];
  maybee = [];

  

  constructor(private router: Router, private hoursService: HoursService) {
    this.messageEvent.emit(this.router.url);

   }

  ngOnInit() {

    this.locations = JSON.parse(this.locations);
    console.log(this.locations['locations'][2]);

    this.locations['locations'][0].image = '/assets/images/hours/waldo.jpg';
    this.locations['locations'][1].image = '/assets/images/hours/swain.jpg';
    this.locations['locations'][2].image = '/assets/images/hours/maybee.jpg';

    this.waldo.hours = this.locations['locations'][0].weeks[0];

    // this.waldo.hours = this.locations['locations'][0].weeks[0];

    // this.waldo['hours'] = Array.of(this.waldo['hours'][0]);

    console.log(this.waldo);

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
