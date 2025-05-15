import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateToVolunteerPageRoutingModule } from './donate-to-volunteer-routing.module';

import { DonateToVolunteerPage } from './donate-to-volunteer.page';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";
@NgModule({
    declarations: [DonateToVolunteerPage, CaptchaComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DonateToVolunteerPageRoutingModule,
        FooterPageModule
    ]
})
export class DonateToVolunteerPageModule {}
