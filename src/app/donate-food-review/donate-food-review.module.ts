import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateFoodReviewPageRoutingModule } from './donate-food-review-routing.module';

import { DonateFoodReviewPage } from './donate-food-review.page';

import { PipesModule } from '../pipes/pipes.module';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";
@NgModule({
    declarations: [DonateFoodReviewPage, CaptchaComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        DonateFoodReviewPageRoutingModule,
        FooterPageModule
    ]
})
export class DonateFoodReviewPageModule {}
