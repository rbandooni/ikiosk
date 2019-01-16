import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeAnimation } from './animations';

import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'iKiosk';
  routeInfo: string;
  // timer: any;
  // Horizontal logo
  // logoURL: string = "/assets/images/Univ Libraries horz_gold and white.svg"

  homeButtonURL = '/assets/images/home.svg';
  // Stacked logo
  logoURL = '/assets/images/W-gold-black.svg';
  // Old logo
  // logoURL: string = "assets/images/ikiosk-logo.svg";

  formattedDate: string;
  formattedTime: string;
  constructor(private router: Router, private route: ActivatedRoute, private userIdle: UserIdleService) {
    // this.route = this.router.url;
    // var snapshot = route.snapshot;
    // console.log(snapshot.component.toString());
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      console.log(this.router.url);
      if (this.router.url !== '/') {
        this.userIdle.startWatching();
      } else {
        console.log('UserIdle check non-existent on this Route');
      }
    });
    // this.timeFormatter();
    // console.log('hey')
    this.timeInterval();
    // console.log('URL', this.router.url);


    this.userIdle.onTimerStart().subscribe(count => {
      console.log('Count', count);

    });

    // this.route.url.subscribe(url => console.log('Path ', url[0].path));

    this.userIdle.onTimeout().subscribe(() => {
      console.log('Timeout!');
      if (this.router.url !== '/') {
        console.log('not index!');
        this.router.navigate(['index']);
      } else {
        console.log('page reload deferred');
      }
    });
  }

  timeInterval() {
    return setInterval(() => {
      this.timeFormatter();
      // console.log('time formatter interval');
    }, 1 * 1000);
  }
  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }

  receiveMessage($event) {
    console.log('event', $event);
    this.routeInfo = $event;
  }

  backToHome() {
    // console.log()
    this.router.navigate(['/index']);
  }

  timeFormatter() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    this.formattedTime = today.toLocaleString('en-US', {
      hour12: true,
      minute: 'numeric',
      hour: 'numeric'
    });

    this.formattedDate = mm + '/' + dd + '/' + yyyy;


  }

}
