import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';
import { NotificationCountService } from '../notification-count.service';

declare var $ :any;
@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
})
export class CaptchaComponent implements OnInit {
  model :any= {};
  pageName:any;
  notificationCount: number = 0;
 private notification : any = [];
 private notifications_admin : any = [];
  constructor(
    private fetch: FetchService,
    private router: Router,
    private NotificationCount:NotificationCountService	  
  ) { }

  ngOnInit() {
    this.NotificationCount.data$.subscribe((newData) => {
      this.notificationCount = newData;
    });
    this.pageName = this.router['routerState'].snapshot.url;

    this.model.user_id = localStorage.getItem('user_id');
    this.fetch.get_notification(this.model.user_id).subscribe(res => {
			this.notification = res['data'];
			this.notifications_admin = res['notifications'];
			if(this.notification.length != 0 || this.notifications_admin.length !=0){
        $('#black_spot').show();
        let notifCount = this.notification.length + this.notifications_admin.length;
        this.NotificationCount.updateData(notifCount);
      }
      });     
  }
  ngOnDestroy() {
    // this.fetch.read_notification(this.model.user_id).subscribe(res => {
    //   $('#black_spot').hide();
    //  });
  }
}
