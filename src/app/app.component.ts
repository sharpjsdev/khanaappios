import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { FetchService } from './fetch.service';
import { StorageService } from './storage.service';
import { ModalController } from '@ionic/angular';
import { PushNotificationPage } from './modal/push-notification/push-notification.page';
import { DeliverFoodVolunteerPage } from './modal/deliver-food-volunteer/deliver-food-volunteer.page';
import { PickupSuccessModalPage } from './modal/pickup-success-modal/pickup-success-modal.page';
import { SimplePushNotificationPage } from './modal/simple-push-notification/simple-push-notification.page';
import { Geolocation,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx';
import { JsonpClientBackend } from '@angular/common/http';
import { ErrorMsgService } from './error-msg.service';
import { Device } from '@ionic-native/device/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AlertController } from "@ionic/angular";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

declare var google: any;
declare var cordova: any;
declare var FCMPlugin: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  options : GeolocationOptions;
model:any={};
user_id:any;
pincode;
isLanguageChanged: boolean;
volunteer_data:any=[];
//directionsService = new google.maps.DirectionsService();
// directionsRenderer = new google.maps.DirectionsRenderer({
//   suppressMarkers: true,
// });
pointarr = [];
allpoints;
res;
success:any;

  public selectedIndex = 0;
  public appPages = [];
  constructor(
    private firebase: FirebaseX,
    private geolocation: Geolocation,
    private alertController:AlertController,
    private device: Device,
    private errorMsg:ErrorMsgService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
	  private router: Router,
    private fetch: FetchService,
    private storage : StorageService,
    private modalController : ModalController,
    private diagnostic: Diagnostic
    
  ) {

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
	  this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      var self = this;
      self.options = {
      enableHighAccuracy: false,
      };
      self.geolocation.getCurrentPosition(self.options).then((resp) => {
       console.log('inside');
       self.model.lat = resp.coords.latitude;
       self.model.lon = resp.coords.longitude;
       
       self.showAddress(self.model.lat, self.model.lon);
     
     }); 
     const permissions = cordova.plugins.permissions;
      console.log(permissions);

      if (!permissions || !permissions.POST_NOTIFICATIONS) {
        console.warn("Permissions plugin or POST_NOTIFICATIONS not available.");
        return;
      }
    
      // First check if permission is already granted
      permissions.checkPermission(permissions.POST_NOTIFICATIONS, (status) => {
        if (!status.hasPermission) {
          // Now request it
          permissions.requestPermission(
            permissions.POST_NOTIFICATIONS,
            (result) => {
              if (result.hasPermission) {
                console.log("Notification permission granted.");
              } else {
                console.warn("Notification permission denied.");
              }
            },
            (error) => {
              console.error("Permission request failed:", error);
            }
          );
        } else {
          console.log("Notification permission already granted.");
        }
      });
     
    });
    
    this.checkVolunteer();
    //alert('dsd');

 
  }
  showAddress(lat, lon){
    var self = this;
    let latLng = new google.maps.LatLng(lat, lon);
    let geocoder = new google.maps.Geocoder();
    
    geocoder.geocode({ 'latLng': latLng }, (results, status) => {
  
      console.log("all results",results);
      this.pincode = results[0].address_components[5].short_name;
      
      this.model.colony_name = results[0].formatted_address;
      console.log(this.model.colony_name);
      
      results[0].address_components.forEach(function(val,i){
        
        if (val.types[0] == "locality"){
          
          self.model.city = val.long_name;
        }
        if (val.types[0] == "administrative_area_level_1"){
          
          self.model.state = val.long_name;
        } 
        if (val.types[0] == "country"){
          
          self.model.country = val.long_name;
        }
        if (val.types[0] == "postal_code"){
          
          self.model.postalCode = val.long_name;

          
         
          console.log(self.model.postalCode+"postalCode");
        }   
    
        });
        
        setTimeout(()=>{
          console.log(self.model.postalCode,"--")
          if(self.model.postalCode){
            self.closeModal(self.model.postalCode);
          }
        },1000)
    });
  }
  async closeModal(code) {
    
    console.log('inside close',code);
    localStorage.setItem('pincode',code.toString());
   if(this.user_id ){
   console.log(this.user_id+code,'user-id');
    var datap={
      pincode:code 
     };   
     
  console.log("posted data"+datap); 
  this.fetch.check_pincode(datap).subscribe(res=>{
  console.log(res,"check_pincode");
      if (res.success== true){
         this.router.navigate(['/pincode-error-component']);
        localStorage.setItem('success','true');
        
      } 
});
   }
}
// async showPincodeAlert() {
//   const modal = await this.modalController.create({
//   component: PincodeErrorMessageComponent,
//   cssClass: 'custom_current_location_modal notification-modal',
//   backdropDismiss : false,
//   componentProps: {
     
//   }
//   });  
//   modal.onDidDismiss().then((dataReturned) => {
  
//   });

//   return await modal.present();
// } 
// async showPincodeAlert(msg) {

//   const alert = await this.alertController.create({
//     cssClass: "my-custom-class custom_alert_1",
//     message: msg,
//     buttons: [
//       {
//         text: this.model.key_text17,
//         role: "cancel",
//         cssClass: "secondary",
//         handler: () => {
//           //this.router.navigate(['/home']);
//         },
//       },
//     ],
   
//   });

//   await alert.present();
// }
  ngOnInit() {
    this.initializeApp();
    console.log("UPDATED...");
    this.user_id = JSON.parse(localStorage.getItem('user_id'));
    this.platform.ready().then(() => {
    // this.success = JSON.parse(localStorage.getItem('success'));
//  if((this.user_id != '')&& ( this.success=='true')){
//   this.router.navigate(['/pincode-error-component']);
//  }
    this.getDevice();
    
    var self = this;
    setInterval(function(){ 
      self.checkVolunteer();
      self.checkLoginUser();
      if(localStorage.getItem('user_id') != null){
        self.checkUserUniqueId();
      }
    }, 1000);//run this thang every 1 seconds

    this.model.fromNotification = false;
    //  document.addEventListener('deviceready',() => {
    //   FCMPlugin.getToken((token: any) => {
		// 	  // alert(token)
    //     localStorage.setItem('device_token', JSON.stringify(token));
    //     // while(this.res.success == true){
    //     //   this.showvolnoti(this.res)
    //     // }
    //     });
    // // if(localStorage.getItem('check_notification') == 'true'){
    // // }
    //   });
    document.addEventListener("deviceready", () => {
      console.log("Device is ready...");

      const permissions = cordova.plugins.permissions;
      console.log(permissions);

      if (!permissions || !permissions.POST_NOTIFICATIONS) {
        console.warn("Permissions plugin or POST_NOTIFICATIONS not available.");
        return;
      }
    
      // First check if permission is already granted
      permissions.checkPermission(permissions.POST_NOTIFICATIONS, (status) => {
        if (!status.hasPermission) {
          // Now request it
          permissions.requestPermission(
            permissions.POST_NOTIFICATIONS,
            (result) => {
              if (result.hasPermission) {
                console.log("Notification permission granted.");
              } else {
                console.warn("Notification permission denied.");
              }
            },
            (error) => {
              console.error("Permission request failed:", error);
            }
          );
        } else {
          console.log("Notification permission already granted.");
        }
      });
      // FCMPlugin.getToken((token: any) => {
      //   localStorage.setItem("device_token", JSON.stringify(token));
      // });
      this.firebase.getToken().then(token =>
        localStorage.setItem("device_token", JSON.stringify(token))
      )

      FCMPlugin.onNotification(
        (data: any) => {
         
          console.log("Push received:", data);
        
          this.model.fromNotification = true;
          var self = this;
          console.log(data);
          if (data.wasTapped) {
            const jd = JSON.parse(data.message);
            if (jd.check_val == "1") {
              self.showNotification(
                jd.body,
                jd.my_array,
                jd.donor_details,
                jd.request_id
              );
            } else if (jd.check_val == "2") {
              self.showFoodDeliverPopupToVolunteer(jd.my_array);
            } else if (jd.check_val == "3") { 
              self.showFoodDeliverPopupToDonor(jd.my_array);
            }
            // Notification was received on device tray and tapped by the user.
          } else {
            const jd = JSON.parse(data.message);
            //;
            if (jd.check_val == "1") {
              this.showNotification(
                data.body,
                jd.my_array,
                jd.donor_details,
                jd.request_id
              );
            } else if (jd.check_val == "2") {
              this.showFoodDeliverPopupToVolunteer(jd.my_array);
            } else if (jd.check_val == "3") {
              this.showFoodDeliverPopupToDonor(jd.my_array);
            } else {
              this.showAlert(data.body);
            }
          }
        },
        (success: any) => {
          
          if (!this.model.fromNotification) {
            if (JSON.parse(localStorage.getItem("user_registerd")) != null) {
              this.fetch.isLanguageChanged.next(
                JSON.parse(localStorage.getItem("lang"))
              );

              // console.log(this.fetch.isLanguageChanged,'kijioppo');
              this.router.navigate(["/home"]);
              //this.navCtrl.navigateBack(['/home']);
            } else if (
              JSON.parse(localStorage.getItem("user_id")) != null &&
              localStorage.getItem("isotpverified") == "1"
            ) {
              this.fetch.isLanguageChanged.next(
                JSON.parse(localStorage.getItem("lang"))
              );
              this.router.navigate(["/register-as-volunteer"]);
              //this.navCtrl.navigateBack(['/register-as-volunteer']);
            } else if (localStorage.getItem("isotpverified") == "0") {
              this.router.navigate(["/otp"]);
            } else {
              this.router.navigate(["/language"]);
            }
          }
        },
        (error: any) => {}
      );
    });
    
      if(!this.model.fromNotification){
        console.log((localStorage.getItem('isotpverified')));
        if(JSON.parse(localStorage.getItem('user_registerd')) != null){
          this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
          this.router.navigate(['/home']);
          //this.navCtrl.navigateBack(['/home']);
        }else if((localStorage.getItem('user_id')) != undefined  && localStorage.getItem('isotpverified') == '1'){
          if(JSON.parse(localStorage.getItem('user_id')) != null){
            this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
            this.router.navigate(['/register-as-volunteer']);
          }
          
          //this.navCtrl.navigateBack(['/register-as-volunteer']);
        }else if(localStorage.getItem('isotpverified') == '0'){
          this.router.navigate(['/otp']);
        }else{
          this.router.navigate(['/language']);
        }
    }
       
        
      
  
	this.fetch.isLanguageChanged.subscribe( value => {
	    this.isLanguageChanged = value;
		var lang_code = JSON.parse(localStorage.getItem('lang'));
		this.fetch.getKeyText(lang_code).subscribe(rs => {
      this.storage.setScope(rs);
      let res = this.storage.getScope();
      let item1 = res.find(i => i.key_text === 'REGISTER_AS_VOLUNTEER');
				this.model.key_text1 = item1[lang_code];
			let item2 = res.find(i => i.key_text === 'SIDEBAR_QUOTE1');
				this.model.key_text2 = item2[lang_code];
			let item3 = res.find(i => i.key_text === 'PROFILE');
				this.model.key_text3 = item3[lang_code];
			let item4 = res.find(i => i.key_text === 'SIDEBAR_QUOTE2');
				this.model.key_text4 = item4[lang_code];
			let item5 = res.find(i => i.key_text === 'SAVED_ADDRESSES');
				this.model.key_text5 = item5[lang_code];
			let item6 = res.find(i => i.key_text === 'YOUR_PREVIOUSLY_SAVED_ADDRESSES');
				this.model.key_text6 = item6[lang_code];
			let item7 = res.find(i => i.key_text === 'CHOOSE_LANGUAGE');
				this.model.key_text7 = item7[lang_code];
			let item8 = res.find(i => i.key_text === 'SIDEBAR_QUOTE3');
				this.model.key_text8 = item8[lang_code];
			let item9 = res.find(i => i.key_text === 'HELP');
				this.model.key_text9 = item9[lang_code];
			let item10 = res.find(i => i.key_text === 'SIDEBAR_QUOTE4');
				this.model.key_text10 = item10[lang_code];
			let item11 = res.find(i => i.key_text === 'ABOUT_US');
				this.model.key_text11 = item11[lang_code];
			let item12 = res.find(i => i.key_text === 'SIDEBAR_QUOTE5');
        this.model.key_text12 = item12[lang_code];
      let item13 = res.find(i=> i.key_text === 'SHOW_IN_BETWEEN');
         this.model.key_text13 = item13[lang_code];  
      let item14 = res.find(i=> i.key_text === 'LOGOUT');
         this.model.key_text14 = item14[lang_code];  
      let item15 = res.find(i=> i.key_text === 'MULTI_LOGIN_ERROR_TEXT');
      this.model.key_text15 = item15[lang_code];  
      let item16 = res.find(i => i.key_text === 'SORRY_NOT_AVAILABLE_IN_YOUR_AREA');
      this.model.key4 = item16[lang_code];
      let item17 = res.find(i => i.key_text === 'OKAY');
      this.model.key_text17 = item17[lang_code];
        
  
         
	    });
	});
    });
  
  
   
  
    var self = this;
    var lang_code = JSON.parse(localStorage.getItem('lang'));
      const path = window.location.pathname.split('folder/')[1];
    
	//console.log("app.component"); 

 
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    

	
  }




  // checkwaiting(){
  //   this.user_id = JSON.parse(localStorage.getItem('user_registerd'));
  //   if(this.user_id){
  //     this.fetch.v_check(this.user_id).subscribe(res => {
               
  //       if(res.success == true){
  //         this.showvolnoti(res)
  //       }
  //     });
  //   }
    
  // }

  checkVolunteer(){
    this.user_id = JSON.parse(localStorage.getItem('user_registerd'));
    if(this.user_id){
      this.fetch.v_check(this.user_id).subscribe(res => {
               
        if(res.success == true){
             this.res = res;
          if(res.status == 1){
            localStorage.setItem('volunteer_approve','1');
          }
          else{
            localStorage.setItem('volunteer_approve','0');
          }
        }else{
          localStorage.setItem('volunteer_approve','0');
        }
      });
    }
    
  }
  // checkposition(vol, pathpoints) {
  //   var position = new google.maps.LatLng(vol.lat, vol.lng);

  //   var res = google.maps.geometry.poly.isLocationOnEdge(
  //     position,
  //     new google.maps.Polyline({ path: pathpoints }),
  //     0.0030
  //   );

  //   return { res, vol };
  // }

  // getLiText(point) {
  //   let lat = point.lat(),
  //     lng = point.lng();
  //   return { lat: lat, lng: lng };
  // }


  //  showvolnoti(verify){
     
   
  //     this.fetch.v_edit(verify.data).subscribe(res => {
  //       console.log("showvolnoti:",res);
        
  //       var element = {
  //            lat: res.data.latitude,
  //            lng: res.data.longitude
  //       }
        
  //       this.fetch.get_waiting_food().subscribe(res => {
             

  //             //  var start = {
  //             //       lat: res.data.startLat,
  //             //       lng: res.data.startLng
  //             //  }
  //             //  console.log("ye apna wala start:",start);
               

  //             //  var end = {
  //             //       lat: res.data.endLat,
  //             //       lng: res.data.endLng
  //             //  }
  //            //  console.log("ye apna wala end:",end);
        
  //       this.directionsService.route(
  //         {
  //           origin: "Tower Chowk, Freeganj, Madhav Nagar, Ujjain, Madhya Pradesh 456010, India",
  //           destination: "5Q4P+PQ3, Sanwer Rd, Nanakheda, Mahakal Vanijya, Ujjain, Madhya Pradesh 456010, India",
  //           //   waypoints: waypts,
  //           optimizeWaypoints: true,
  //           travelMode: google.maps.TravelMode.DRIVING,
  //         },
  //         (response, status) => {
  //           if (status === "OK") {
  //             this.directionsRenderer.setDirections(response);
  
  //             /////////////////////////////
  
  //             if (response.routes && response.routes.length > 0) {
  //               console.log("this is response of path:", response);
  
  //               var routes = response.routes;
  //               for (var j = 0; j < routes.length; j++) {
  //                 var points = routes[j].overview_path;
  //                 // var ul = document.getElementById("vertex");
  //                 for (var i = 0; i < points.length; i++) {
  //                   // var li = document.createElement('li');
  //                   // li.innerHTML = this.getLiText(points[i]);
  //                   var result = this.getLiText(points[i]);
  //                   console.log("path all latlong:", result);
  
  //                   // ul.appendChild(li);
  //                   //  this.resultarr.push(result.lat,result.lng);
  //                   this.allpoints = new google.maps.LatLng(
  //                     result.lat,
  //                     result.lng
  //                   );
  //                   console.log("this.allpoints:",this.allpoints);
                    
  //                   this.pointarr.push(this.allpoints);
  //                   console.log(this.pointarr);
                  
  //                 }
                 
  //               }
  //             }
  
  //       var check = this.checkposition(element, this.pointarr);
  //            console.log("check:",check);
  //             if (check.res = true){
  //               this.showFoodDeliverPopupToVolunteer("donar is waiting for food");
  //             }

  //           }
  //     });
  //     })
  //     })
     
     
       
  // }
  
  checkLoginUser(){
    if(localStorage.getItem('user_id')!=undefined ){
      if(JSON.parse(localStorage.getItem('user_id')) !=null ){
        let data = JSON.stringify({'id': JSON.parse(localStorage.getItem('user_id'))});
        this.fetch.profile(data).subscribe(res => {
          
        if(res['status']!=1){
          this.logout();
        }
    });
      }
    }
    
  }
  save_address(){
	  var id = JSON.parse(localStorage.getItem('user_registerd'));
	  this.router.navigate(['/saved-addresses',id]);
  }
  logout(){
    localStorage.clear();
    this.getDevice();
    this.router.navigate(['/language']);
  }
  side_bar_route(route){
	this.router.navigate(['/'+route]);  
  }
  async showNotification(msg,array,donor_details,request_id) {
      const modal = await this.modalController.create({
      component: PushNotificationPage,
      cssClass: 'custom_current_location_modal notification-modal',
      backdropDismiss : false,
      componentProps: {
        "array": array,
        "donor_details": donor_details,
        "request_id": request_id,
        "message": msg,
        "click_action":"FCM_PLUGIN_ACTIVITY"
      }
      });  
      modal.onDidDismiss().then((dataReturned) => {
      
      });
  
      return await modal.present();
    } 
    async showFoodDeliverPopupToVolunteer(array) {
      const modal = await this.modalController.create({
      component: DeliverFoodVolunteerPage,
      cssClass: 'custom_feedback_modal  my_volunteer_completed_modal',
      backdropDismiss : false,
      componentProps: {
        "array": array,
      }
      });  
      modal.onDidDismiss().then((dataReturned) => {
      
      });
  
      return await modal.present();
    } 
    async showFoodDeliverPopupToDonor(array) {
      const modal = await this.modalController.create({
      component: PickupSuccessModalPage,
      cssClass: 'custom_filter_modal cancel_allot_food_popup',
      backdropDismiss : false,
      componentProps: {
        "array": array,
      }
      });  
      modal.onDidDismiss().then((dataReturned) => {
      
      });
  
      return await modal.present();
    } 
    async showAlert(msg) {
      console.log(msg,'msg');
      const modal = await this.modalController.create({
      component: SimplePushNotificationPage,
      cssClass: 'custom_current_location_modal notification-modal',
      backdropDismiss : false,
      componentProps: {
        "msg": msg,
      }
      });  
      modal.onDidDismiss().then((dataReturned) => {
      
      });
  
      return await modal.present();
    } 
        //get Unique_id
        async getDevice(){
          this.platform.ready().then(() => {      
             const uuid = this.device.uuid;
            //  alert("id"+uuid);
          localStorage.setItem('unique_id', JSON.stringify(uuid));
           })
        }
       checkUserUniqueId(){
        var user_id = JSON.parse(localStorage.getItem('user_id'));
        var unique_id = JSON.parse(localStorage.getItem('unique_id'));
        let data = JSON.stringify({  'user_id':user_id,'unique_id':unique_id});
    
          this.fetch.checkDeviceId(data).subscribe(res => {
            if(res.success == false){
              this.errorMsg.showModal(this.model.key_text15);
              this.logout();
            }
           
          });
       
       }
}


