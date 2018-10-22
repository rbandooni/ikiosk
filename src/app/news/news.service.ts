import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private key = 'AIzaSyClh6k8f3qzNPxr4cTdheHyFfL0HNdzESg';
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {

    return this.http.get(`https://www.googleapis.com/blogger/v3/blogs/5022270470070241638/posts?maxResults=20&key=${this.key}`)
  }
}
