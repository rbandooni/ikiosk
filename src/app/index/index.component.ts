import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit, OnInit {

  ikioskGrid: boolean;
  gridSize = 4;

  gridClass = 'col-md-3 col-sm-4 col-xs-6 kioskGrid';

  // gridClass: string = 'col-lg-3 col-md-4 col-sm-6 col-xs-12 kioskgrid';

  gridText: Object = ['library hours', 'available computers', 'building map', 'library news', 'events', 'study rooms', 'appointment', 'random 3'];

  currentDate: string;
  dayText: string;
  day: number;
  month: number;

  @ViewChild('clock') public canvas: any;
  // setting witdth and height of canvas
  @Input() public width = 250;
  @Input() public height = 250;

  private cx: CanvasRenderingContext2D;

  constructor(private router: Router) {

    if (window.screen.availWidth === 1920) {
      this.ikioskGrid = true;
    } else if(window.screen.availWidth > 360 || window.screen.availWidth > 1920) {
      this.ikioskGrid = true;
    }
    else {
      this.ikioskGrid = false;
    }
    console.log(window.screen.width);
  }


  ngOnInit() {
    // console.log(
    console.log('WIDTH', window.screen.availWidth);
    console.log('HEIGHT', window.screen.availHeight);

    const dateObj = new Date();
    // var month = dateObj.getUTCMonth()  //+ 1; //months from 1-12
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const weekday = new Array(7);
    const monthArr = new Array(12);
    monthArr[0] = 'January';
    monthArr[1] = 'February';
    monthArr[2] = 'March';
    monthArr[3] = 'April';
    monthArr[4] = 'May';
    monthArr[5] = 'June';
    monthArr[6] = 'July';
    monthArr[7] = 'August';
    monthArr[8] = 'September';
    monthArr[9] = 'October';
    monthArr[10] = 'November';
    monthArr[11] = 'December';

    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesda';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';
    const month = monthArr[dateObj.getMonth()];
    const n = weekday[dateObj.getDay()];
    this.dayText = n;
    this.day = day;
    this.month = month;
    this.currentDate = year + '-' + dateObj.getMonth() + '-' + day;
    console.log(this.dayText);
    console.log(this.currentDate);

  }

  ngAfterViewInit() {


    // get the context
    if (this.ikioskGrid) {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      this.cx = canvasEl.getContext('2d');
      canvasEl.width = this.width;
      canvasEl.height = this.height;
      // let canvas = document.getElementById("clock")[0];

      // let cx = canvas.getContext("2d");
      let radius = canvasEl.height / 2;
      console.log('radius', radius)
      this.cx.translate(radius, radius);
      radius = radius * 0.90;
      // this.cx = cx;
      // this.radius = radius;
      setInterval(() => this.drawClock(radius), 1000);
    }


    // console.log(this.ikioskGrid)

  }



  linkToComponent(componentName: string) {
    this.router.navigate(['/' + componentName]);
  }
  drawClock(rad) {
    this.drawFace(this.cx, rad);
    this.drawNumbers(this.cx, rad);
    this.drawTime(this.cx, rad);
  }

  drawFace(cx, radius) {
    let grad;
    cx.beginPath();
    cx.arc(0, 0, radius, 0, 2 * Math.PI);
    cx.fillStyle = 'white';
    cx.fill();
    grad = cx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    // cx.strokeStyle = grad;
    cx.strokeStyle = 'rgba(0,0,0,0.8)'
    // cx.lineWidth = radius * 0.1;
    cx.stroke();
    cx.beginPath();
    cx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    cx.fillStyle = '#333';
    cx.fill();
  }

  drawNumbers(cx, radius) {
    let ang;
    let num;
    cx.font = radius * 0.2 + 'px Source Sans Pro';
    cx.textBaseline = 'middle';
    cx.textAlign = 'center';
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      cx.rotate(ang);
      cx.translate(0, -radius * 0.85);
      cx.rotate(-ang);
      cx.fillText(num.toString(), 0, 0);
      cx.rotate(ang);
      cx.translate(0, radius * 0.85);
      cx.rotate(-ang);
    }
  }

  drawTime(cx, radius) {
    const now = new Date();
    let hour = now.getHours();
    
    let minute = now.getMinutes();
    let second = now.getSeconds();
    // alert(hour + ' ' + minute + ' ' + second);
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
    this.drawHand(cx, hour, radius * 0.5, radius * 0.07, '');
    // minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(cx, minute, radius * 0.8, radius * 0.07, '');
    // second
    second = (second * Math.PI / 30);
    this.drawHand(cx, second, radius * 0.9, radius * 0.02, 'red');
    // cx.strokeStyle = '#9f1b16';
  }

  drawHand(cx, pos, length, width, color) {
    cx.beginPath();
    cx.lineWidth = width;
    cx.lineCap = 'round';
    cx.moveTo(0, 0);
    cx.rotate(pos);
    cx.lineTo(0, -length);
    if (color == 'red') cx.strokeStyle = '#9f1b16';
    else cx.strokeStyle = '#2c2928';
    cx.stroke();
    cx.rotate(-pos);

  }


}
