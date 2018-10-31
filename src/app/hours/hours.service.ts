import { Injectable } from '@angular/core';
// import { environment } from "../environments/environment";

import { Observable} from 'rxjs';

import { map } from 'rxjs/operators';
// import "rxjs/add/operator/map";
// import { Hours } from './hours';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HoursService {

data: any;
  constructor(private http:HttpClient) { }

  getAllHours(): Observable<any> {
    return this.http.get('https://ikiosk.library.wmich.edu/api/hours/libcal.php?weeks=1');
  }

  getWaldoHours(): Observable<any> {
    return this.http.get('https://ikiosk.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=waldo');
  }
  getSwainHours(): Observable<any> {
    return this.http.get('https://ikiosk.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=swain');
  }
  getMaybeeHours(): Observable<any> {
    return this.http.get('https://ikiosk.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=maybee');
  }

  getZhangHours(): Observable<any> {
    return this.http.get('https://ikiosk.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=zhang');
  }

  getVRLabHours(): Observable<any> {
    return this.http.get('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=vrlab');
  }

}
