import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationPage } from './notification.page';
import { CaptchaComponent } from '../../captcha/captcha.component';
import { FooterPageModule } from "../../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule,
    FooterPageModule
  ],
  declarations: [NotificationPage,CaptchaComponent]
})
export class NotificationPageModule {}
