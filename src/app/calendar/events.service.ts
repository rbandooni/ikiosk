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

  constructor(private http: HttpClient) {

    //  this.http.post(this.apiTokenURL, {
    //   'client_id': 303,
    //   'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
    //   'grant_type': 'client_credentials'
    // }).subscribe(tokenData => this.token = tokenData['access_token']);

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

//   getToken() {

//      this.http.post(this.apiTokenURL, {
//       'client_id': 303,
//       'client_secret': 'bf62dd89e6dfc88e84c0a5839a22ac38',
//       'grant_type': 'client_credentials'
//      }).subscribe(tokenData => this.token = tokenData['access_token']);
//   }

//   getAllEvents(): Observable<any> {
//     this.getToken();
// console.log(this.token);
//     // this.getToken();
//    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
//    return this.http.get(this.apiURL, { headers: headers });
//  }

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

  



