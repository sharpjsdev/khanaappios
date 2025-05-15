import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from '../footer/footer.module';
@NgModule({
  declarations: [HomePage,CaptchaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterPageModule
  ],
})
export class HomePageModule {}
