import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  private apiTokenURL = 'https://api2.libcal.com/1.1/oauth/token';

  private apiURL = 'https://api2.libcal.com/1.1/events?cal_id=9993';
  token: any;



  private apiToken: string = null;
  constructor(private http: HttpClient) {


  }

    // return this.http.post(this.apiTokenURL, {
    //   'client_id': 303,
    //   'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
    //   'grant_type': 'client_credentials'
    // }).pipe(map(data => ))

  //    this.http.post(this.apiTokenURL, {
  //     'client_id': 303,
  //     'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
  //     'grant_type': 'client_credentials'
  //   }).pipe(map((response: any) => { 
  //   return response;
  // }
  //   ));

  getToken(): Observable<any> {

    return this.http.post(this.apiTokenURL, {
      'client_id': 303,
      'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
      'grant_type': 'client_credentials'
    });
  }
  
  getAllEvents(): Observable<any> {

 return this.getToken().pipe(map(token => {
  console.log(token.access_token);
   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token.access_token);
   return this.http.get(this.apiURL, { headers: headers });
 }));

//  map(tokenData => {
//       console.log(tokenData['access_token']);
//       // this.token = tokenData;
//       const headers = new HttpHeaders().set('Authorization', 'Bearer ' + tokenData['access_token']);

//       return this.http.get(this.apiURL, {headers: headers });
//     });
//     // console.log(this.token);
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
    // .set('Authorization', 'Bearer ' + this.token.access_token);

    // return this.http.get(this.apiURL, { headers: headers }
    //   );
  }

  }



