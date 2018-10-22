import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { Router } from '@angular/router';

declare function showNewsPopup(data): any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsFeed: any;
  popupFeed: any;
  // private xmlURL = "https://wmulibraries.blogspot.com/feeds/posts/default?alt=json-in-script&callback=libnews";
  xmlURL = "http://wmulibraries.blogspot.com/feeds/posts/default";

  constructor(private news: NewsService) { }

  ngOnInit() {

    this.news.getAllPosts().subscribe((newsData) => {
      // console.log(newsData);
      this.newsFeed = newsData.items;
      console.log(this.newsFeed);
    })

  }

  loadNewsItem(id: number) {
    // console.log(id);
    const strpid = [id];
    this.popupFeed = this.newsFeed.filter((val, index, arr) => {
      // return strpid.indexOf(index.id)
      // console.log(val.id, strpid[0]);
      return val.id === strpid[0];
    });
    // console.log(this.popupFeed);
    showNewsPopup(this.popupFeed);
  }


}
