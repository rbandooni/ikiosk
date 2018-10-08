import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HoursComponent } from './hours/hours.component';
import { ComputersComponent } from './computers/computers.component';
import { NewsComponent } from './news/news.component';
import { MapComponent } from './map/map.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'hours',
    component: HoursComponent
  },
  {
    path: 'computers',
    component: ComputersComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'building-map',
    component: MapComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: '**',
    redirectTo: '', 
    pathMatch: 'full'
  },
  {
    path: 'index',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
