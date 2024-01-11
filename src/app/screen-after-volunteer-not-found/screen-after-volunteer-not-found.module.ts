import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenAfterVolunteerNotFoundPageRoutingModule } from './screen-after-volunteer-not-found-routing.module';

import { ScreenAfterVolunteerNotFoundPage } from './screen-after-volunteer-not-found.page';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenAfterVolunteerNotFoundPageRoutingModule,
    FooterPageModule
  ],
  declarations: [ScreenAfterVolunteerNotFoundPage,CaptchaComponent]
})
export class ScreenAfterVolunteerNotFoundPageModule {}
