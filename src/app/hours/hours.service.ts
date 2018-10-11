import { Injectable } from '@angular/core';
// import { environment } from "../environments/environment";

import { Observable} from 'rxjs';

import { map } from 'rxjs/operators';
import "rxjs/add/operator/map";
// import { Hours } from './hours';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Jsonp } from '@angular/http';

// const API_URL = environment.hoursApiUrl;
// const API_URL = "https://ikioskdev.library.wmich.edu/hours/api.php?branch=";
@Injectable()
export class HoursService {

  constructor(private http:HttpClient, private jsonp: Jsonp) { }

  // API: Get hours for the entire week
  public getHours(branch): Observable<any[]> {
    if(branch == 'WLD') {
      return this.http.get<any[]>('https://hours.library.wmich.edu/libhours_api.php?branch='+branch);
    }
    // return this.http.get<Hours[]>(`${API_URL}`);
  }

  getAllHours(): Observable<any[]> {

    // return this.http.get<any[]>('https://api3.libcal.com/api_hours_grid.php', {
    //   params: getParams
    // });

    return this.jsonp.request('https://api3.libcal.com/api_hours_grid.php?iid=4191&format=json&weeks=1&systemTime=1').map(res => {
    return res.json();
    });

  }

}
