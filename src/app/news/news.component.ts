import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
// import { Parser } from "xml2js";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // private xmlURL = "https://wmulibraries.blogspot.com/feeds/posts/default?alt=json-in-script&callback=libnews";
  xmlURL = "http://wmulibraries.blogspot.com/feeds/posts/default";

  constructor(private news: NewsService, private router:Router) { }

  ngOnInit() {

    // const jsonData = this.xmlParser.parseString(this.xmlURL);
    // console.log(jsonData)
    // this.news.getAllNewsItems().subscribe((newsItems) => {
    //   console.log(newsItems.libnews)
    // })
  }
  backToHome() {
    this.router.navigate(['/index']);
  }

}
