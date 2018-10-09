import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  private apiTokenURL = 'https://api2.libcal.com/1.1/oauth/token';

  private apiURL = 'https://api2.libcal.com/1.1/events?cal_id=9993';

  // private itLabsURL: string = "https://itlabs-labstats.bernhard.wmich.edu";

  // private availableComputersURL: string = '/api/public/GetPublicApiData/1001';

  // private floors: Floors[] = [
  //   { title: "1 Floor", map_id: 19, total: -1, available: -1, label: "Lib_waldo_floor1" },
  //   { title: "2 Floor", map_id: 16, total: -1, available: -1, label: "Lib_waldo_floor2" },
  //   { title: "3 Floor", map_id: 17, total: -1, available: -1, label: "Lib_waldo_floor3" },
  //   { title: "Lower Level", map_id: 18, total: -1, available: -1, label: "Lib_waldo_floor_lower" }
  // ];

  private apiToken: string = null;
  constructor(private http: HttpClient) { }

  getToken() {
    // return this.http.post(this.apiTokenURL, {
    //   'client_id': 303,
    //   'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
    //   'grant_type': 'client_credentials'
    // }).pipe(map(data => ))

     this.http.post(this.apiTokenURL, {
      'client_id': 303,
      'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
      'grant_type': 'client_credentials'
    }).pipe(map((response: any) => { 
    return response;
  }
    ));

  }

  getAllEvents(token: string): Observable<any> {
  
    return this.http.get(this.apiURL, {
      headers: new HttpHeaders().set('Authorization', token)
    });
 }
  }



