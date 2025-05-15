import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFoodScreenTwoPageRoutingModule } from './search-food-screen-two-routing.module';

import { SearchFoodScreenTwoPage } from './search-food-screen-two.page';

import { CaptchaComponent } from './../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
    declarations: [SearchFoodScreenTwoPage, CaptchaComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchFoodScreenTwoPageRoutingModule,
        FooterPageModule
    ]
})
export class SearchFoodScreenTwoPageModule {}
