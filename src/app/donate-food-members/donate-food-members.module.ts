import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateFoodMembersPageRoutingModule } from './donate-food-members-routing.module';

import { DonateFoodMembersPage } from './donate-food-members.page';
import { CaptchaComponent } from '../captcha/captcha.component';
import { FooterPageModule } from "../footer/footer.module";
@NgModule({
    declarations: [DonateFoodMembersPage, CaptchaComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DonateFoodMembersPageRoutingModule,
        FooterPageModule
    ]
})
export class DonateFoodMembersPageModule {}
