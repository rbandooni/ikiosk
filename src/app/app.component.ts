import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeAnimation } from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'iKiosk';
  routeInfo: string;
  // Horizontal logo
  // logoURL: string = "/assets/images/Univ Libraries horz_gold and white.svg"

  homeButtonURL: string = '/assets/images/home.svg';
  // Stacked logo
  logoURL: string = "/assets/images/W-gold-black.svg";
  // Old logo
  // logoURL: string = "assets/images/ikiosk-logo.svg";

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.route = this.router.url;
    var snapshot = route.snapshot;
    // console.log(snapshot.component.toString());
  }

  ngOnInit() {
    this.route.url.subscribe(url => console.log(url[0].path));
  }

  receiveMessage($event) {
    console.log('event', $event);
    this.routeInfo = $event;
  }

  backToHome() {
    // console.log()
    this.router.navigate(['/index']);
  }

}