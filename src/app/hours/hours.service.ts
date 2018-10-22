import { Injectable } from '@angular/core';
// import { environment } from "../environments/environment";

import { Observable} from 'rxjs';

import { map } from 'rxjs/operators';
// import "rxjs/add/operator/map";
// import { Hours } from './hours';
import { HttpClient, HttpParams } from '@angular/common/http';



// const API_URL = environment.hoursApiUrl;
// const API_URL = "https://ikioskdev.library.wmich.edu/hours/api.php?branch=";



@Injectable()
export class HoursService {

data: any;
  constructor(private http:HttpClient) { }

  // API: Get hours for the entire week
  // public getHours(branch): Observable<any[]> {
  //   if(branch == 'WLD') {
  //     return this.http.get<any[]>(`https://hours.library.wmich.edu/libhours_api.php?branch=${branch}`;
  //   }
  //   // return this.http.get<Hours[]>(`${API_URL}`);
  // }

  getAllHours(): Observable<any> {
    return this.http.get('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1');
  }

  getWaldoHours(): Observable<any> {
    return this.http.get('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=waldo');
  }
  getSwainHours(): Observable<any> {
    return this.http.get('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=swain');
  }
  getMaybeeHours(): Observable<any> {
    return this.http.get('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1&lib=maybee');
  }

  // getWaldoHrs(): Observable<any> {
  //   this.data = this.getWaldoHours();
  //   return this.data['loc_9079'];
  // }
}
