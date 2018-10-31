import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';
import { switchMap } from 'rxjs/operators';
// import { toPromise } from 'rxjs/operator';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  private apiTokenURL = 'https://api2.libcal.com/1.1/oauth/token';

  private apiURL = 'https://api2.libcal.com/1.1/events?cal_id=9993';
  token: any;
  private apiToken: string = null;

  constructor(private http: HttpClient) {}

  }



