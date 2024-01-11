import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchService } from '../fetch.service';
import { StorageService } from '../storage.service'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	app_noti;
	update_noti;
	
	notidata={
		id: "",
		admin_notification: 0,
		app_notification: 0
	}

model:any={};
  constructor(private storage:StorageService, private http: HttpClient,private route: ActivatedRoute,private router: Router,private fetch: FetchService,public alertController: AlertController,private platform: Platform,public datepipe: DatePipe,) { 
	this.platform.backButton.subscribeWithPriority(10, () => {
		this.router.navigate(['/home']);
	});
  }

  ngOnInit() {
	this.model.search = false;
  }

  appNotifications(app_noti){
	// console.log("$event.detail.checked:",$event.detail.checked);
	// console.log("$event.detail.value:",$event.detail.value);
	// console.log("$event",$event);	
	var id = JSON.stringify(this.model.user_id);
	
	if(app_noti == true){
		this.notidata.app_notification = 0,
		this.notidata.id = 	id
	
	this.fetch.notify(this.notidata).subscribe(res => {
		console.log("this is notification response",res);
		
		})
	}else{
		this.notidata.app_notification = 1,
		this.notidata.id = 	id

		this.fetch.notify(this.notidata).subscribe(res => {
			console.log("this is notification response",res);
			
			})
	}
  }

  adminNotifications(update_noti){
	// console.log("admin $event.detail.checked:",$event.detail.checked);
	// console.log("admin $event.detail.value:",$event.detail.value);
	// console.log("admin $event",$event);
	var id = JSON.stringify(this.model.user_id);
	
	if(update_noti == true){
		this.notidata.admin_notification = 0,
		this.notidata.id = 	id
	
	this.fetch.notify(this.notidata).subscribe(res => {
		console.log("this is notification response",res);
		
		})
	}else{
		this.notidata.admin_notification = 1,
		this.notidata.id = 	id

		this.fetch.notify(this.notidata).subscribe(res => {
			console.log("this is notification response",res);
			
			})
	}
  }

  ionViewWillEnter(){
	this.model.key_page_name = 'Profile Page';
	this.model.key_username = 'Username';
	this.model.key_dob = 'Date Of Birth';
	this.model.key_food_type = 'Type of food you prefer';
	this.model.key_veg = 'Veg';
	this.model.key_non_veg = 'Non Veg';
	this.model.key_both = 'Both';
	this.model.key_save_changes = 'Save Changes';
	var lang_code = JSON.parse(localStorage.getItem('lang'));
	
    let maxDate=  new Date((new Date().getFullYear() - 18),new Date().getMonth(), new Date().getDate());
	let latest_date =this.datepipe.transform(maxDate, 'yyyy-MM-dd');
	this.model.latest_date = latest_date;
	//this.fetch.getKeyText(lang_code).subscribe(res => {
		let res = this.storage.getScope();
		let item1 = res.find(i => i.key_text === 'PROFILE_PAGE');
			this.model.key_page_name = item1[lang_code]; 
		let item2 = res.find(i => i.key_text === 'USERNAME');
			this.model.key_username = item2[lang_code];
		let item3 = res.find(i => i.key_text === 'DATE_OF_BIRTH');
			this.model.key_dob = item3[lang_code];
		let item4 = res.find(i => i.key_text === 'TYPE_OF_FOOD_YOU_PREFER');
			this.model.key_food_type = item4[lang_code];
		let item5 = res.find(i => i.key_text === 'VEG');
			this.model.key_veg = item5[lang_code];
		let item6 = res.find(i => i.key_text === 'NON_VEG');
			this.model.key_non_veg = item6[lang_code];
		let item7 = res.find(i => i.key_text === 'ANY');
			this.model.key_both = item7[lang_code];
		let item8 = res.find(i => i.key_text === 'SAVE_CHANGES');
			this.model.key_save_changes = item8[lang_code];
		let item9 = res.find(i => i.key_text === 'THIS_FIELD_IS_REQUIRED');
			this.model.key_valid = item9[lang_code];
		let item10 = res.find(i => i.key_text === 'PROFILE_UPDATE_MSG');
			this.model.succ_msg = item10[lang_code];
		let item11 = res.find(i => i.key_text === 'OKAY');
			this.model.okay = item11[lang_code];
		let item12 = res.find(i => i.key_text === 'OTHER_ADMIN');
			this.model.other_admin = item12[lang_code];
		let item23 = res.find(i => i.key_text === 'CANCEL');
			this.model.key_text23 = item23[lang_code];	
		let item13 = res.find(i => i.key_text === 'DELETE_MY_ACCOUNT');
			this.model.key_text13 = item13[lang_code];
		let item14 = res.find(i => i.key_text === 'DELETE_MY_ACCOUNT_CONFIRM');
			this.model.key_text14 = item14[lang_code];	
	//});
	this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
	let data = JSON.stringify({'id': this.model.user_id});
	this.fetch.profile(data).subscribe(res => {
		this.notidata.admin_notification = res['admin_notification'];
		if(this.notidata.admin_notification == 1){
            this.update_noti =false;
		}else{
			this.update_noti =true;
		} 
		this.notidata.app_notification = res['app_notification'];
		if(this.notidata.app_notification == 1){
            this.app_noti =false;
		}else{
			this.app_noti =true;
		}
		this.model.username = res['username'];
		this.model.dob = res['dob'];
		this.model.food_type = res['type_of_food_you_prefer'];
		$('#profile_food_'+res['type_of_food_you_prefer']).addClass('active');
	});
  }
  food_type(val){
	this.model.food_type = val;
	if(val == 1){
		$('#profile_food_'+val).addClass('active');  
		$('#profile_food_2').removeClass('active');  
		$('#profile_food_3').removeClass('active');  
	}else if(val == 2){
		$('#profile_food_'+val).addClass('active');  
		$('#profile_food_1').removeClass('active');  
		$('#profile_food_3').removeClass('active');    
	}else{
		$('#profile_food_'+val).addClass('active');  
		$('#profile_food_2').removeClass('active');  
		$('#profile_food_1').removeClass('active');     
	}
  }
   update_profile(){
	this.model.search = true;
	var username = $('#profile_username').val();
	var dob = $('#profile_dob').val();
	if(!username){
		this.model.search = false;
		$('#username').show();
		$('#dob').hide();
		$('#foodtype').hide();
	}
	else if(!dob){
		this.model.search = false;
		$('#username').hide();
		$('#dob').show();
		$('#foodtype').hide();
	}
	else if(!this.model.food_type){
		this.model.search = false;
		$('#username').hide();
		$('#dob').hide();
		$('#foodtype').show();
	}else
	{
		$('#username').hide();
		$('#dob').hide();
		$('#foodtype').hide();
		let profile_data = JSON.stringify({'id' : this.model.user_id, 'username' : username, 'dob' : dob, 'food_type' : this.model.food_type});
		this.fetch.registerUser(profile_data).subscribe(async(res) => {
			
			this.model.search = false;
			if(res.success == true){
				const alert = await this.alertController.create({
					cssClass: 'my-custom-class',
					//header: 'alert',
					message : this.model.succ_msg,
					buttons: [this.model.okay]
				});
				await alert.present();
			}
		});
	}
  }
  async deleteAccount(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class custom_alert_1',
	  message: this.model.key_text14,
      buttons: [
        {
          text: this.model.key_text23,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: this.model.okay,
          handler: () => {
			let data = { id : JSON.parse(localStorage.getItem('user_registerd')) }
			this.fetch.deleteMyAccount(data).subscribe(async (resp) => {
				localStorage.clear();	
				this.router.navigate(['/language']);
			})
          }
        }
      ]
    });

    await alert.present();
  }
}
