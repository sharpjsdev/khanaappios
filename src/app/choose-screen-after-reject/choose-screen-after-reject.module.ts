import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseScreenAfterRejectPageRoutingModule } from './choose-screen-after-reject-routing.module';

import { ChooseScreenAfterRejectPage } from './choose-screen-after-reject.page';
import { CaptchaComponent } from './../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseScreenAfterRejectPageRoutingModule,
    FooterPageModule
  ],
  declarations: [ChooseScreenAfterRejectPage,CaptchaComponent]
})
export class ChooseScreenAfterRejectPageModule {}
