import { Component, OnInit } from '@angular/core';

import { NgxImageZoomComponent, NgxImageZoomModule } from 'ngx-image-zoom';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  thumb = "https://placehold.it/500x500";
  full = "https://placehold.it/1000x1000";
  ngOnInit() {
  }

}
