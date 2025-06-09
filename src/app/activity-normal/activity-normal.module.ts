import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityNormalPageRoutingModule } from './activity-normal-routing.module';

import { ActivityNormalPage } from './activity-normal.page';

import { PipesModule } from '../pipes/pipes.module';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";
@NgModule({
    declarations: [ActivityNormalPage, CaptchaComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        ActivityNormalPageRoutingModule,
        FooterPageModule
    ]
})
export class ActivityNormalPageModule {}
