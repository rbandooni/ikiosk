import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HoursComponent,
    ComputersComponent,
    MapComponent,
    NewsComponent,
    RoomsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HoursService],
  bootstrap: [AppComponent]
})

// declare var $: any;

export class AppModule {}
