import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HoursService } from '../hours.service';


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

  constructor(private router: Router, private hoursService: HoursService) {
    this.messageEvent.emit(this.router.url);
   }

  ngOnInit() {

    this.hoursService.getHours('WLD').subscribe((data) => {
      // this.hours = data[this.todaysDate][0];
      console.log(data[this.todaysDate][0].StartHour)
      // console.log(this.hours[this.todaysDate][0]);
      
    })
    

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
