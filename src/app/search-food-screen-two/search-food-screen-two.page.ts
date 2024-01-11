import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { FetchService } from '../fetch.service';
import { StorageService } from '../storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController , ModalController } from '@ionic/angular';
import { CommonSearchScreenPage } from '../common-search-screen/common-search-screen.page';
import { OnTheWayPage } from '../modal/on-the-way/on-the-way.page';
import { OntheWayMsgPage } from '../modal/onthe-way-msg/onthe-way-msg.page';
import { Diagnostic } from "@ionic-native/diagnostic/ngx";

declare var google: any;
@Component({
  selector: 'app-search-food-screen-two',
  templateUrl: './search-food-screen-two.page.html',
  styleUrls: ['./search-food-screen-two.page.scss'],
})
export class SearchFoodScreenTwoPage implements OnInit {
  div1;
  div2;
  model:any={};
  notification:any=[];
  dataReturned: any;
  alert_text: any;
  donate_address: any;
  location_data: any;
  data : any= [];
  ontheway_data: any;
  search_type: string = '';
  options : GeolocationOptions;
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private router: Router,
    private fetch: FetchService,
    private storage: StorageService,
    public alertController: AlertController,
    public modalController: ModalController,
    private diagnostic: Diagnostic
  ) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.diagnostic.isLocationAvailable().then(resp =>{
      if(!resp){
        this.router.navigate(['/home']);
      }
    }).catch((error: any) => {
      this.router.navigate(['/home']);
    });
        
    this.model.click = false;
    this.model.postalCode = 0;
    this.model.is_volunteer = 0;
    if(localStorage.getItem('volunteer_approve') != null){
      this.model.is_volunteer = localStorage.getItem('volunteer_approve');
    }  
    this.model.user_id = localStorage.getItem('user_id');
    this.model.okay = 'okay';
    var lang_code = JSON.parse(localStorage.getItem('lang'));
      let res = this.storage.getScope();
      let item1 = res.find(i => i.key_text === 'NEARBY');
        this.model.key_text1 = item1[lang_code]; 
      let item2 = res.find(i => i.key_text === 'ON_THE_WAY');
        this.model.key_text2 = item2[lang_code]; 
      let alert_text = res.find(i => i.key_text === 'KEEP_PIN_EXACT_LOCATION');
        this.alert_text = alert_text[lang_code];
        let item5 = res.find(i => i.key_text === 'HOME');
				this.model.key_text5 = item5[lang_code];
			let item6 = res.find(i => i.key_text === 'ACTIVITY');
				this.model.key_text6 = item6[lang_code];
			let item7 = res.find(i => i.key_text === 'VOLUNTEER');
      this.model.key_text7 = item7[lang_code];
         this.geoCode(localStorage.getItem('nearby_lat'),localStorage.getItem('nearby_lng'));
         
         if(this.search_type == 'nearby'){
          let item1 = res.find(i => i.key_text === 'GET_SEARCH_PAGE_NEAR_1');
              this.model.key_text8 = item1[lang_code];
          }
          if(this.search_type == 'ontheway'){
            let item1 = res.find(i => i.key_text === 'GET_SEARCH_PAGE_ONTHEWAY_1');
              this.model.key_text8 = item1[lang_code];
          }
        
    }
    async searchingModel(type) {
	  
      const modal = await this.modalController.create({
      component: CommonSearchScreenPage,
     // cssClass: 'custom_filter_modal cancel_allot_food_popup',
      componentProps: {
        "type" : type
      }
      });
    modal.onDidDismiss().then((dataReturned) => {
      
      if (dataReturned !== null) {
      }
      });
  
      return await modal.present();
    }

    async emptyMessage(type,onthewaydata,rid) {
	  
      const modal = await this.modalController.create({
      component: OntheWayMsgPage,
      cssClass: 'custom_filter_modal empty_message_height',
      componentProps: {
        "type" : type,
        "way" : onthewaydata,
        "r_id" : rid
      }
      });
    modal.onDidDismiss().then((dataReturned) => {
      
      if (dataReturned !== null) {
      }
      });
  
      return await modal.present();
    }


      async closeModal() {
        const onClosedData: string = '';
        await this.modalController.dismiss(onClosedData);
      }

    openModalCurrentLocation() {
      this.model.click = true;
      this.search_type = 'nearby';
      setTimeout(() => {
      var self = this;
      self.model.click = false;
        localStorage.setItem('set_confirm_location_route', JSON.stringify('get-food-search'));
          // self.searchingModel('nearby');
          
          console.log(self.model,"akshay qqqqqqqq 0000000000");
          
          console.log(self.model.my_data,'------------123');
          if(self.model.my_data){
            console.log('yup')
            self.location_data = JSON.parse(self.model.my_data);
          let data = JSON.stringify({'app_user_id' : self.model.user_id,'food_type' : localStorage.getItem('receiver_food_type'), 'no_of_person' : localStorage.getItem('number_of_person'), 'latitude' : self.model.Lat, 'longitude' : self.model.Lng, 'colony_name' : self.model.colony_name, 'city' : self.model.city, 'state' : self.model.state, 'country' : self.model.country, 'postal_code' : self.model.postalCode});
          self.fetch.receiver_food_details(data).subscribe(res => {
            // self.closeModal();
            self.search_type = '';
            if(res.data != null && res.data.total_food_for != 0){
              self.data = res;
              self.router.navigate(['/get-food-nearest-donors',JSON.stringify(self.data),self.model.Lat,self.model.Lng,self.model.user_id,res.data.id,self.model.my_data,'0']);
              		}else{
              			self.data = {'success' : true, 'data' : null};
                    self.emptyMessage('nearby',self.location_data,self.model.user_id);
              		}
              		self.model.search = false;
              		self.model.food_type = localStorage.getItem('receiver_food_type');
              		self.model.no_of_person = localStorage.getItem('number_of_person');
          })
        }else{
          // self.closeModal();
          this.search_type = '';
        }
        }, 3000);
      }
      async openOnTheWay() {
        localStorage.setItem('set_confirm_location_route', JSON.stringify('get-food-search'));
          const modal = await this.modalController.create({
            component: OnTheWayPage,
            cssClass: 'custom_current_location_modal_new',
            componentProps: {
              "paramID": 123,
              "paramTitle": "Test Title"
            }
          }); 
      
          modal.onDidDismiss().then((dataReturned) => {
            console.log('data sdafadf',dataReturned);
            if (dataReturned !== null && dataReturned.data.length != 0) {
		// this.searchingModel('ontheway');
              this.search_type = 'ontheway';
	      this.dataReturned = dataReturned.data;
              //alert('Modal Sent Data :'+ dataReturned);
          console.log(this.dataReturned);
          if(this.dataReturned.length>0){
            console.log(this.dataReturned);
             this.ontheway_data = this.dataReturned;
             
             if(this.ontheway_data.length>0){
              	let data = JSON.stringify({startLat:this.ontheway_data[0].startLat,startLng:this.ontheway_data[0].startLng,endLat:this.ontheway_data[0].endLat,endLng:this.ontheway_data[0].endLng,city:this.ontheway_data[0].city,choice:"receiver",'app_user_id' : this.model.user_id,'food_type' : localStorage.getItem('receiver_food_type'), 'no_of_person' : localStorage.getItem('number_of_person')});
                 		this.fetch.get_waypoints(data).subscribe(res => {
                    // this.closeModal();
                    this.search_type = 'ontheway';
              			this.model.search = false;
              			if(res.data != null && res.data.total_food_for != 0){
              				this.data = res;
                      console.log("donar data",this.data);
                      


console.log("donar lat long:",this.data.data.latitude, this.data.data.longitude);
console.log("start latlong:",this.ontheway_data[0].startLat,this.ontheway_data[0].startLng);
console.log("end latlong:", this.ontheway_data[0].endLat,this.ontheway_data[0].endLng);


var position = new google.maps.LatLng(this.data.data.latitude, this.data.data.longitude); 
console.log("path all points:",this.ontheway_data[0].pointarr);
console.log("position:", position);

const volcheck = google.maps.geometry.poly.isLocationOnEdge(position, new google.maps.Polyline({path:this.ontheway_data[0].pointarr }), 0.0080)
console.log("donar available:",volcheck);

          

                   if(volcheck === true){
                      //this.router.navigate(['/get-food-nearest-donors',JSON.stringify(this.data),this.location_data.latitude,this.location_data.longitude,this.model.user_id,res.data.id,JSON.stringify(this.location_data)]);
                      this.router.navigate(['/get-food-nearest-donors',JSON.stringify(this.data),this.ontheway_data[0].startLat,this.ontheway_data[0].startLng,this.model.user_id,res.data.id,JSON.stringify(this.ontheway_data),'1']);
              			}else{            				
                      
                    this.data = {'success' : true, 'data' : null};
                    this.emptyMessage('ontheway',this.ontheway_data,this.model.user_id);
                  }
                  }else{
              				this.data = {'success' : true, 'data' : null};
                      this.emptyMessage('ontheway',this.ontheway_data,this.model.user_id);
              			}
                    this.model.food_type = localStorage.getItem('receiver_food_type');
                    this.model.no_of_person = localStorage.getItem('number_of_person');


              		 })
              }

          }
            }
          });
      
          return await modal.present();
        }



  
//convert Address string to lat and long
geoCode(lat: any, lng: any) {
  let geocoder = new google.maps.Geocoder();
  let latlng = new google.maps.LatLng(lat, lng);
  let request = { latLng: latlng };
  geocoder.geocode(request, (results, status) => {
    if (status == google.maps.GeocoderStatus.OK) {
          var self = this;
        var address_components = results[0].address_components;
          address_components.forEach(function(val,i){
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
            }

          });
          self.model.Lat = results[0].geometry.location.lat();
        self.model.Lng = results[0].geometry.location.lng();
        self.model.colony_name = results[0].formatted_address;
        //alert("lat: " + self.model.Lat + ", long: " + self.model.Lng +" , colony_name : "+ self.model.colony_name);
        this.model.my_data = JSON.stringify({'latitude' : this.model.Lat, 'longitude' : this.model.Lng,'colony_name' : this.model.colony_name, 'city' : this.model.city, 'state' : this.model.state, 'country' : this.model.country, 'postalCode' : this.model.postalCode });
       // alert(this.model.my_data);
    }
  
    //alert("inside_city2: " + this.model.city);
    
  });
   //alert("city: " + this.model.city);
 
 
}

}
