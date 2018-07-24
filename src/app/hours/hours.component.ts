import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
 


  constructor(private router:Router) {

   }

  ngOnInit() {

  }


  linkToComponent(componentName: string) {
    this.router.navigate(['/' + componentName]);
  }
}
