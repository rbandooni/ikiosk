import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
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

  constructor(private lstat: LabStatsService, private router: Router) {
    this.lstat.getAvailableComputers().subscribe((res) => {
      console.log(res);
      this.firstFloorComputers = res.Groups[0];
      this.secondFloorComputers = res.Groups[1];
      this.thirdFloorComputers = res.Groups[3];
      this.lowerLevelComputers = res.Groups[2];
      console.log(this.firstFloorComputers);
    });
   }

  ngOnInit() {

    $('#floor1Map').removeClass('d-none');
    $('#firstFloorTab').addClass('active');
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
      });
    }, 20 * 1000);
    // 20 seconds timer
  }

  backToHome() {
    this.router.navigate(['/index']);
  }

  changeMapView(id: number) {
    if (id === 0) {
      // activate lower level map

      $('.labmap').removeClass('d-none').addClass('d-none');
      $('.leftTabs').removeClass('active');
      $('#floor0Map').removeClass('d-none');
      $('#lowerFloorTab').addClass('active');

    } else if (id === 1) {
      // activate 1st floor map
      $('.labmap').removeClass('d-none').addClass('d-none');
      $('.leftTabs').removeClass('active');
      $('#floor1Map').removeClass('d-none');
      $('#firstFloorTab').addClass('active');
    } else if (id === 2) {
      // activate 2nd floor map
      $('.labmap').removeClass('d-none').addClass('d-none');
      $('.leftTabs').removeClass('active');
      $('#floor2Map').removeClass('d-none');
      $('#secondFloorTab').addClass('active');
    } else {
      // activate 3rd floor map
      $('.labmap').removeClass('d-none').addClass('d-none');
      $('.leftTabs').removeClass('active');

      $('#floor3Map').removeClass('d-none');
      $('#thirdFloorTab').addClass('active');
    }

  }



  // ngOnDestroy() {
  //   clearInterval(this.timer);
  //   console.log('Inside Destroy');
  // }


}
