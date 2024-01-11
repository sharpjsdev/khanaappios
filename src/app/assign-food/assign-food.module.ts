import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignFoodPageRoutingModule } from './assign-food-routing.module';

import { AssignFoodPage } from './assign-food.page';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignFoodPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AssignFoodPage]
})
export class AssignFoodPageModule {}
