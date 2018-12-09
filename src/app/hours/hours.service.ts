import { Injectable } from '@angular/core';
// import { environment } from "../environments/environment";

import { Observable} from 'rxjs';

import { map } from 'rxjs/operators';
// import "rxjs/add/operator/map";
// import { Hours } from './hours';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HoursService {

  apiRoot = 'https://ikiosk.library.wmich.edu/';

data: any;
  constructor(private http:HttpClient) { }

  getAllHours(): Observable<any> {
    return this.http.get(this.apiRoot + 'api/hours/libcal.php?weeks=1');
  }

  getWaldoHours(): Observable<any> {
    return this.http.get(this.apiRoot + 'api/hours/libcal.php?weeks=1&lib=waldo');
  }
  getSwainHours(): Observable<any> {
    return this.http.get(this.apiRoot + 'api/hours/libcal.php?weeks=1&lib=swain');
  }
  getMaybeeHours(): Observable<any> {
    return this.http.get(this.apiRoot + 'api/hours/libcal.php?weeks=1&lib=maybee');
  }

  getZhangHours(): Observable<any> {
    return this.http.get(this.apiRoot + 'api/hours/libcal.php?weeks=1&lib=zhang');
  }

  getVRLabHours(): Observable<any> {
    return this.http.get(this.apiRoot + 'api/hours/libcal.php?weeks=1&lib=vrlab');
  }

}
