import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  gridText:Object =  ['library hours', 'available computers', 'building map', 'news'];
  now = new Date();
  hrs = this.now.getHours();
  min = this.now.getMinutes();
  sec = this.now.getSeconds();

  timeString = this.hrs+' : '+this.min+' : '+this.sec;
  canvas = document.querySelector('#clock');
  // context = this.canvas.getContext('2d');
  constructor(private router: Router) { }

  ngOnInit() {
    
    
  }



  linkToHoursComponent() {
    this.router.navigate(['/hours']);
  }

}
