import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetFoodSearchWithAddressPageRoutingModule } from './get-food-search-with-address-routing.module';

import { GetFoodSearchWithAddressPage } from './get-food-search-with-address.page';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
    declarations: [GetFoodSearchWithAddressPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GetFoodSearchWithAddressPageRoutingModule,
        FooterPageModule
    ]
})
export class GetFoodSearchWithAddressPageModule {}
