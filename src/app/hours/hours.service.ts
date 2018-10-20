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

  jsonData = '{ "locations": [{ "lid": 9079, "name": "Waldo Library", "category": "library", "desc": "", "url": "", "contact": "", "fn": "", "lat": "", "long": "", "color": "#000000", "weeks": [{ "Sunday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "12:00pm", "to": "2:00am" }] }, "date": "2018-10-07", "rendered": "12:00pm - 2:00am" }, "Monday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-08", "rendered": "7:30am - 2:00am" }, "Tuesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-09", "rendered": "7:30am - 2:00am" }, "Wednesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-10", "rendered": "7:30am - 2:00am" }, "Thursday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "7:30am", "to": "2:00am" }] }, "date": "2018-10-11", "rendered": "7:30am - 2:00am" }, "Friday": { "times": { "currently_open": true, "status": "open", "hours": [{ "from": "7:30am", "to": "9:00pm" }] }, "date": "2018-10-12", "rendered": "7:30am - 9:00pm" }, "Saturday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "10:00am", "to": "6:00pm" }] }, "date": "2018-10-13", "rendered": "10:00am - 6:00pm" } }] }, { "lid": 9265, "name": "Swain Education Library", "category": "library", "desc": "", "url": "", "contact": "", "fn": "", "lat": "", "long": "", "color": "#000", "weeks": [{ "Sunday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "2:00pm", "to": "10:00pm" }] }, "date": "2018-10-07", "rendered": "2:00pm - 10:00pm" }, "Monday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-08", "rendered": "9:00am - 10:00pm" }, "Tuesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-09", "rendered": "9:00am - 10:00pm" }, "Wednesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-10", "rendered": "9:00am - 10:00pm" }, "Thursday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "9:00am", "to": "10:00pm" }] }, "date": "2018-10-11", "rendered": "9:00am - 10:00pm" }, "Friday": { "times": { "currently_open": true, "status": "open", "hours": [{ "from": "9:00am", "to": "5:00pm" }] }, "date": "2018-10-12", "rendered": "9:00am - 5:00pm" }, "Saturday": { "times": { "currently_open": false, "status": "closed" }, "date": "2018-10-13", "rendered": "Closed" } }] }, { "lid": 9266, "name": "Maybee Music and Dance Library", "category": "library", "desc": "", "url": "", "contact": "", "fn": "", "lat": "", "long": "", "color": "#000000", "weeks": [{ "Sunday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "2:00pm", "to": "10:00pm" }] }, "date": "2018-10-07", "rendered": "2:00pm - 10:00pm" }, "Monday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-08", "rendered": "8:30am - 10:00pm" }, "Tuesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-09", "rendered": "8:30am - 10:00pm" }, "Wednesday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-10", "rendered": "8:30am - 10:00pm" }, "Thursday": { "times": { "currently_open": false, "status": "open", "hours": [{ "from": "8:30am", "to": "10:00pm" }] }, "date": "2018-10-11", "rendered": "8:30am - 10:00pm" }, "Friday": { "times": { "currently_open": true, "status": "open", "hours": [{ "from": "8:30am", "to": "5:00pm" }] }, "date": "2018-10-12", "rendered": "8:30am - 5:00pm" }, "Saturday": { "times": { "currently_open": false, "status": "closed" }, "date": "2018-10-13", "rendered": "Closed" } }] }] }';

  constructor(private http:HttpClient) { }

  // API: Get hours for the entire week
  // public getHours(branch): Observable<any[]> {
  //   if(branch == 'WLD') {
  //     return this.http.get<any[]>(`https://hours.library.wmich.edu/libhours_api.php?branch=${branch}`;
  //   }
  //   // return this.http.get<Hours[]>(`${API_URL}`);
  // }

  getAllHours(){

    return this.http.get<any>('https://ikioskdev.library.wmich.edu/api/hours/libcal.php?weeks=1');
    // return this.jsonData;

    // return this.http.post<any[]>(`https://ikioskdev.library.wmich.edu/api/hours/libcal.php`, {
    //   'weeks': week,
    // }, {
    //   responseType: 'json'
    // });

    // return this.jsonp.request('https://api3.libcal.com/api_hours_grid.php?iid=4191&format=json&weeks=1&systemTime=1').pipe(map((res) => {

    // return res.json();
    // }));

  }

}
