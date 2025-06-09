import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLocationPageRoutingModule } from './select-location-routing.module';

import { SelectLocationPage } from './select-location.page';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
    declarations: [SelectLocationPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SelectLocationPageRoutingModule,
        FooterPageModule
    ]
})
export class SelectLocationPageModule {}
