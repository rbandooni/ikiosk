import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabStatsService {

  // private itLabsURL: string = "https://itlabs-labstats.bernhard.wmich.edu";

  // private availableComputersURL: string = '/api/public/GetPublicApiData/1001';

  // private floors: Floors[] = [
  //   { title: "1 Floor", map_id: 19, total: -1, available: -1, label: "Lib_waldo_floor1" },
  //   { title: "2 Floor", map_id: 16, total: -1, available: -1, label: "Lib_waldo_floor2" },
  //   { title: "3 Floor", map_id: 17, total: -1, available: -1, label: "Lib_waldo_floor3" },
  //   { title: "Lower Level", map_id: 18, total: -1, available: -1, label: "Lib_waldo_floor_lower" }
  // ];


  constructor(private http: HttpClient) { }

  // getAvailableComputers(): Observable<any> {
  //   return this.http.get(this.itLabsURL + this.availableComputersURL, {
  //     headers: new HttpHeaders().set('Authorization', 'acf442ce-27d8-406e-bbf5-98a438d13b68')
  //   })
  // }
}
