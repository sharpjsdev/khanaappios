import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { VolunteerDetailPageRoutingModule } from './volunteer-detail-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { VolunteerDetailPage } from './volunteer-detail.page';
import { CaptchaComponent } from './../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
    declarations: [VolunteerDetailPage, CaptchaComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        Ng2GoogleChartsModule,
        VolunteerDetailPageRoutingModule,
        FooterPageModule
    ]
})
export class VolunteerDetailPageModule {}
