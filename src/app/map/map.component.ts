import { Component, OnInit } from '@angular/core';

// import { NgxImageZoomComponent, NgxImageZoomModule } from 'ngx-image-zoom';

import { IMAGEVIEWER_CONFIG, ImageViewerConfig } from '@hallysonh/ngx-imageviewer';

const imgConfig: ImageViewerConfig = {
  width: 850,
  height: 750
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

  providers: [
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: imgConfig
    }
  ]
})
export class MapComponent implements OnInit {

  constructor() { }

  thumb = 'https://placehold.it/500x500';
  full2nd3rd = '/assets/images/buildingMaps/Waldo Map 2018 08 floors2,3.png';
  fullLowerLevel = '/assets/images/buildingMaps/Waldo map 2018-08 floorsLL-1-b.png';

  ngOnInit() {
  }



}
