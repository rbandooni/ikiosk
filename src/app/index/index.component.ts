import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

  gridText:Object =  ['library hours', 'available computers', 'building map', 'library news'];

  @ViewChild('clock') public canvas: any;
  // setting witdth and height of canvas
  @Input() public width = 250;
  @Input() public height = 250;

  private cx: CanvasRenderingContext2D;

  constructor(private router: Router) { }
  //  cx: number
  //  radius: number


   
  ngAfterViewInit() {
    // get the context
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



  linkToComponent(componentName:string) {
    this.router.navigate(['/'+componentName]);
  }
  drawClock(rad) {
    this.drawFace(this.cx, rad);
    this.drawNumbers(this.cx, rad);
    this.drawTime(this.cx, rad);
  }

  drawFace(cx, radius) {
    var grad;
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
    var ang;
    var num;
    cx.font = radius * 0.15 + "px arial";
    cx.textBaseline = "middle";
    cx.textAlign = "center";
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
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
    this.drawHand(cx, hour, radius * 0.5, radius * 0.07, '');
    //minute
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
    cx.lineCap = "round";
    cx.moveTo(0, 0);
    cx.rotate(pos);
    cx.lineTo(0, -length);
    if (color == 'red') cx.strokeStyle = '#9f1b16';
    else cx.strokeStyle = '#2c2928';
    cx.stroke();
    cx.rotate(-pos);
    
  }


}
