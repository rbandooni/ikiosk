import { Injectable } from '@angular/core';
// import { environment } from "../environments/environment";

import { Observable} from 'rxjs';

// import { Hours } from './hours';
import { HttpClient } from '@angular/common/http';

// const API_URL = environment.hoursApiUrl;
// const API_URL = "https://ikioskdev.library.wmich.edu/hours/api.php?branch=";
@Injectable()
export class HoursService {

  constructor(private http:HttpClient) { }

  // API: Get hours for the entire week
  public getHours(branch): Observable<any[]> {
    if(branch == 'WLD') {
      return this.http.get<any[]>('https://hours.library.wmich.edu/libhours_api.php?branch='+branch);
    }
    // return this.http.get<Hours[]>(`${API_URL}`);
  }
}
