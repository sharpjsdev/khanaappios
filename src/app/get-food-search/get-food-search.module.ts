import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetFoodSearchPageRoutingModule } from './get-food-search-routing.module';

import { GetFoodSearchPage } from './get-food-search.page';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";
@NgModule({
    declarations: [GetFoodSearchPage, CaptchaComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GetFoodSearchPageRoutingModule,
        FooterPageModule
    ]
})
export class GetFoodSearchPageModule {}
