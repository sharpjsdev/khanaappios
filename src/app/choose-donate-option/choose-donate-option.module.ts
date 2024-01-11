import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseDonateOptionPageRoutingModule } from './choose-donate-option-routing.module';

import { ChooseDonateOptionPage } from './choose-donate-option.page';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseDonateOptionPageRoutingModule,
    FooterPageModule
  ],
  declarations: [ChooseDonateOptionPage,CaptchaComponent]
})
export class ChooseDonateOptionPageModule {}
