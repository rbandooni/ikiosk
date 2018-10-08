import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsURL: string = "https://wmulibraries.blogspot.com/feeds/posts/default?alt=json-in-script&callback=libnews";

  // private availableComputersURL: string = '/api/public/GetPublicApiData/1001';


  constructor(private http: HttpClient) { }

  getAllNewsItems(): Observable<any> {
    return this.http.get(this.newsURL, {})
  }
}
