import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HoursComponent } from './hours/hours.component';
import { ComputersComponent } from './computers/computers.component';
import { MapComponent } from './map/map.component';
import { NewsComponent } from './news/news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoursService } from './hours/hours.service';
import { HttpClientModule } from '@angular/common/http';
import { RoomsComponent } from './rooms/rooms.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatButtonModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
// import { NgxImageZoomModule } from 'ngx-image-zoom';

// import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';

import { UserIdleModule } from 'angular-user-idle';
import { DstDatePipe } from './calendar/dst-date.pipe';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PinchZoomModule } from 'ngx-pinch-zoom';

export class CustomHammerClass extends  HammerGestureConfig {
  overrides = <any> {
    'pinch': {enable: true},
    'rotate': {enable: true}
  };
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HoursComponent,
    ComputersComponent,
    MapComponent,
    NewsComponent,
    RoomsComponent,
    CalendarComponent,
    DstDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatChipsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    PinchZoomModule,
    // NgxImageZoomModule.forRoot(),
    // ImageViewerModule,
    // if user is idle for 30 sec, start timer for 29 sec and ping every 1 sec
    UserIdleModule.forRoot({idle: 30, timeout: 29, ping: 1}),
  ],
  providers: [HoursService, { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerClass}],
  bootstrap: [AppComponent]
})

// declare var $: any;

export class AppModule {}
