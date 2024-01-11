import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearestDonorsPageRoutingModule } from './nearest-donors-routing.module';

import { NearestDonorsPage } from './nearest-donors.page';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearestDonorsPageRoutingModule,
    FooterPageModule
  ],
  declarations: [NearestDonorsPage]
})
export class NearestDonorsPageModule {}
