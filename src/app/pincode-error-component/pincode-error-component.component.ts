import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { FetchService } from '../fetch.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

import {
  LoadingController,
  Platform
} from '@ionic/angular';
import { BackButtonEvent } from '@ionic/core';

@Component({
  selector: 'app-pincode-error-component',
  templateUrl: './pincode-error-component.component.html',
  styleUrls: ['./pincode-error-component.component.scss'],
})
export class PincodeErrorComponentComponent implements OnInit {
  isLanguageChanged: boolean;
  model:any={};
  app_title:any;
  page_key1:any;
  page_key2:any;
  constructor(public platform: Platform, private loadingController: LoadingController,private alertController:AlertController,private fetch: FetchService,  private router: Router, private storage : StorageService,) {
    this.app_title = 'Khanaa.app';
    this.fetch.isLanguageChanged.subscribe( value => {
	    this.isLanguageChanged = value;
		var lang_code = JSON.parse(localStorage.getItem('lang'));
		this.fetch.getKeyText(lang_code).subscribe(rs => {
      this.storage.setScope(rs);
      let res = this.storage.getScope();
      let item1 = res.find(i => i.key_text === 'SORRY_NOT_AVAILABLE_IN_YOUR_AREA');
      this.model.key1 = item1[lang_code];
      let item2 = res.find(i => i.key_text === 'OKAY');
      this.model.key_text2 = item2[lang_code];
        
     
	    });
	});
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
  });
  
   }
  ngOnInit()  {
    // this.presentLoading();
  }

 
  

//   async presentLoading() {
//     this.platform.backButton.subscribeWithPriority(10, () => {
//         document.addEventListener('backbutton', () => {}, false);
//     });
//     const loading = await this.loadingController.create({
//         spinner: 'circles',
//         keyboardClose: true,
//         message: 'Loading...',
//         duration:2000
//     }).then((res) => {

//         res.onDidDismiss().then((d) => {
//             this.platform.backButton.observers.pop();
//         })
//         return res.present()
//     })
//     return loading;
// }

}