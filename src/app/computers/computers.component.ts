import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { LabStatsService } from '../lab-stats.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { floorComputers } from '../floorWiseComputers';

// import * as lb from 'src/assets/js/clock.js';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  timer: any;

  firstFloorComputers: floorComputers;
  secondFloorComputers: floorComputers;
  thirdFloorComputers: floorComputers;
  lowerLevelComputers: floorComputers;

  // public firstFloor: floorComputers;

  constructor(private lstat:LabStatsService, private router:Router) {
    this.lstat.getAvailableComputers().subscribe((res) => {
      console.log(res);
      this.firstFloorComputers = res.Groups[0];
      this.secondFloorComputers = res.Groups[1];
      this.thirdFloorComputers = res.Groups[3];
      this.lowerLevelComputers = res.Groups[2];
      console.log(this.firstFloorComputers);
    })
   }

  ngOnInit() {

    // $('#mapTarget').LabMap({
    //   mapId: 1006,
    //   authId: 'acf442ce-27d8-406e-bbf5-98a438d13b68',
    //   domain: 'https://itlabs-labstats.bernhard.wmich.edu'
    // });

    

    // this.lstat.getAvailableComputers().subscribe(res => {
    //   this.floorwiseAvComputers = res.Groups;
      


    this.timer = this.interval();
    

  }


  interval() {
    return setInterval(() => {
      this.lstat.getAvailableComputers().subscribe((res) => {
        this.firstFloorComputers = res.Groups[0];
        this.secondFloorComputers = res.Groups[1];
        this.thirdFloorComputers = res.Groups[3];
        this.lowerLevelComputers = res.Groups[2];
        console.log(this.firstFloorComputers);
      })
    }, 20* 1000)
    // 20 seconds timer
  }

  backToHome() {
    this.router.navigate(['/index']);
  }




  ngOnDestroy() {
    clearInterval(this.timer);
    console.log('Inside Destroy');
  }


}
