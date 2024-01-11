import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateFoodPickupDropPageRoutingModule } from './donate-food-pickup-drop-routing.module';

import { DonateFoodPickupDropPage } from './donate-food-pickup-drop.page';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonateFoodPickupDropPageRoutingModule,
    FooterPageModule
  ],
  declarations: [DonateFoodPickupDropPage,CaptchaComponent]
})
export class DonateFoodPickupDropPageModule {}
