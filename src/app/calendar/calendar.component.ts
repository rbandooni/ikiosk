import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
  backToHome() {
    this.router.navigate(['/index']);
  }

}
