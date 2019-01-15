import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import * as Hammer from 'hammerjs';
// import { NgxImageZoomComponent, NgxImageZoomModule } from 'ngx-image-zoom';

// import { IMAGEVIEWER_CONFIG, ImageViewerConfig } from '@hallysonh/ngx-imageviewer';

// const imgConfig: ImageViewerConfig = {
//   width: 850,
//   height: 750
// };

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

  // providers: [
  //   {
  //     provide: IMAGEVIEWER_CONFIG,
  //     useValue: imgConfig
  //   }
  // ]
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor() { }

  thumb = 'https://placehold.it/500x500';
  full2nd3rd = '/assets/images/buildingMaps/Waldo Map 2018 08 floors2,3.png';
  fullLowerLevel = '/assets/images/buildingMaps/Waldo map 2018-08 floorsLL-1-b.png';

  @ViewChild('img1') img1Element: ElementRef;
  @ViewChild('img2') img2Element: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // const webpage = document.querySelector('.leftSideImage')[0];
    // const image1 = this.img1Element;
    // const image2 = this.img2Element;

    // const mc = new Hammer.Manager(image1);
    // const pinch = new Hammer.Pinch();
    // const pan = new Hammer.Pan();

    // pinch.recognizeWith(pan);
    // mc.add([pinch, pan]);

    // let adjustScale = 1;
    // let adjustDeltaX = 0;
    // let adjustDeltaY = 0;

    // let currentScale = null;
    // let currentDeltaX = null;
    // let currentDeltaY = null;

    // mc.on('pinch pan', function (ev) {

    //   const transforms = [];

    //   currentScale = adjustScale * ev.scale;
    //   currentDeltaX = adjustDeltaX + (ev.deltaX / currentScale);
    //   currentDeltaY = adjustDeltaY + (ev.deltaY / currentScale);
    //   transforms.push('scale(' + currentScale + ')');
    //   transforms.push('translate(' + currentDeltaX + 'px,' + currentDeltaY + 'px)');
    //   webpage.style.transform = transforms.join(' ');
    // });

    // mc.on('panend pinchend', function (ev) {

    //   // Saving the final transforms for adjustment next time the user interacts.
    //   adjustScale = currentScale;
    //   adjustDeltaX = currentDeltaX;
    //   adjustDeltaY = currentDeltaY;

    // });

    // const hammer1 = new Hammer(this.img1Element.nativeElement);
    // hammer1.get('pinch').set({
    //   enable: true
    // });
    // const hammer2 = new Hammer(this.img2Element.nativeElement);
    // hammer1.get('pinch').set({
    //   enable: true
    // });
  }





}
