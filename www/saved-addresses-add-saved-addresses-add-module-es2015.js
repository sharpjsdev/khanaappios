(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saved-addresses-add-saved-addresses-add-module"],{

/***/ "2rwE":
/*!*******************************************************************!*\
  !*** ./src/app/saved-addresses-add/saved-addresses-add.module.ts ***!
  \*******************************************************************/
/*! exports provided: SavedAddressesAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressesAddPageModule", function() { return SavedAddressesAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _saved_addresses_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saved-addresses-add-routing.module */ "G4zG");
/* harmony import */ var _saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saved-addresses-add.page */ "IQXk");







let SavedAddressesAddPageModule = class SavedAddressesAddPageModule {
};
SavedAddressesAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saved_addresses_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["SavedAddressesAddPageRoutingModule"]
        ],
        declarations: [_saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_6__["SavedAddressesAddPage"]]
    })
], SavedAddressesAddPageModule);



/***/ }),

/***/ "G4zG":
/*!***************************************************************************!*\
  !*** ./src/app/saved-addresses-add/saved-addresses-add-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SavedAddressesAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressesAddPageRoutingModule", function() { return SavedAddressesAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saved-addresses-add.page */ "IQXk");




const routes = [
    {
        path: '',
        component: _saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_3__["SavedAddressesAddPage"]
    }
];
let SavedAddressesAddPageRoutingModule = class SavedAddressesAddPageRoutingModule {
};
SavedAddressesAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SavedAddressesAddPageRoutingModule);



/***/ }),

/***/ "IQXk":
/*!*****************************************************************!*\
  !*** ./src/app/saved-addresses-add/saved-addresses-add.page.ts ***!
  \*****************************************************************/
/*! exports provided: SavedAddressesAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressesAddPage", function() { return SavedAddressesAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_saved_addresses_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./saved-addresses-add.page.html */ "tDHX");
/* harmony import */ var _saved_addresses_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved-addresses-add.page.scss */ "R+91");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_msg_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error-msg.service */ "ElZd");














let SavedAddressesAddPage = class SavedAddressesAddPage {
    constructor(geolocation, nativeGeocoder, alertController, http, route, router, fetch, storage, platform, zone, location, errorMsg) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.platform = platform;
        this.zone = zone;
        this.location = location;
        this.errorMsg = errorMsg;
        this.model = {};
        this.autocomplete = {};
        this.service = new google.maps.places.AutocompleteService();
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.location.back();
        });
    }
    ngOnInit() {
        this.model.search = false;
    }
    ionViewWillEnter() {
        //$('.current_location_page_show').hide();  
        //$('#add_t_1').addClass('active');
        this.model.alert_text = 'Please fill all the details';
        this.model.okay = 'okay';
        this.model.zoom = 15;
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'HOUSE');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'FLAT');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'BLOCK');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'LANDMARK');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'HOME');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'WORK');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'OTHER');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'ADD_LOCATION');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS');
        this.model.alert_text = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'OKAY');
        this.model.okay = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'SAVE_AS');
        this.model.key_text11 = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'SEARCH_HERE');
        this.model.key_text12 = item12[lang_code];
        let item13 = res.find(i => i.key_text === 'LANDMARK_FIELD_IS_REQUIRED');
        this.model.key_text13 = item13[lang_code];
        let item14 = res.find(i => i.key_text === 'SAVE_AS_FIELD_REQUIRED');
        this.model.key_text14 = item14[lang_code];
        //});
        var self = this;
        self.options = {
            enableHighAccuracy: false,
        };
        self.geolocation.getCurrentPosition(self.options).then((resp) => {
            $('#add_location_spinner').css('display', 'none');
            $('.current_location_page_show').css('display', 'block');
            self.model.LastLat = resp.coords.latitude;
            self.model.LastLng = resp.coords.longitude;
            console.log('lat :' + self.model.LastLat, 'lon :' + self.model.LastLng);
            self.showAddress(self.model.LastLat, self.model.LastLng);
            let latLng = new google.maps.LatLng(self.model.LastLat, self.model.LastLng);
            let mapOptions = {
                center: latLng,
                zoom: self.model.zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            self.map = new google.maps.Map(self.mapElement.nativeElement, mapOptions);
            self.addMarker();
            self.map.addListener('zoom_changed', () => {
                var zoom = self.map.getZoom();
                self.model.zoom = zoom;
            });
        });
    }
    addMarker() {
        console.log(this.map.getCenter());
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter(),
            draggable: true
        });
        let content = "<p>This is your current position !</p>";
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(this.marker, 'click', () => {
            infoWindow.open(this.map, this.marker);
        });
        this.lastLatLng(this.marker);
    }
    lastLatLng(marker) {
        google.maps.event.addListener(marker, 'dragend', () => {
            this.model.LastLat = marker.position.lat();
            this.model.LastLng = marker.position.lng();
            this.showAddress(this.model.LastLat, this.model.LastLng);
        });
    }
    showAddress(lat, lon) {
        var self = this;
        let latLng = new google.maps.LatLng(lat, lon);
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latLng }, (results, status) => {
            this.model.colony_name = results[0].formatted_address;
            results[0].address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                    self.model.city = val.long_name;
                }
                if (val.types[0] == "administrative_area_level_1") {
                    self.model.state = val.long_name;
                }
                if (val.types[0] == "country") {
                    self.model.country = val.long_name;
                }
                if (val.types[0] == "postal_code") {
                    self.model.postalCode = val.long_name;
                }
            });
        });
        // let options: NativeGeocoderOptions = {
        // 	useLocale: true,
        // 	maxResults: 5
        // };
        // this.nativeGeocoder.reverseGeocode(lat, lon, options).then((result: NativeGeocoderResult[]) => {
        // 	console.log(result);
        // 	this.model.colony_name = result[0].areasOfInterest[0]+' '+result[0].subLocality;
        // 	this.model.city = result[0].locality;
        // 	this.model.state = result[0].administrativeArea;
        // 	this.model.country = result[0].countryName;
        // 	this.model.postalCode = result[0].postalCode
        // }).catch((error: any) => console.log(error));
    }
    address_type(val) {
        this.model.address_type = val;
        if (val == 1) {
            $('#add_t_' + val).addClass('active');
            $('#add_t_2').removeClass('active');
            $('#add_t_3').removeClass('active');
        }
        else if (val == 2) {
            $('#add_t_' + val).addClass('active');
            $('#add_t_1').removeClass('active');
            $('#add_t_3').removeClass('active');
        }
        else {
            $('#add_t_' + val).addClass('active');
            $('#add_t_1').removeClass('active');
            $('#add_t_2').removeClass('active');
        }
    }
    save() {
        this.model.search = true;
        var house_no = $('#add_location_house_no').val();
        var landmark = $('#add_location_landmark').val();
        // var address_type = this.model.address_type;
        var save_as = $('#save_as').val();
        // if(house_no == ""){
        // 	this.presentAlert("House No. field is required");
        // }else 
        if (landmark == "") {
            this.model.search = false;
            this.errorMsg.showModal(this.model.key_text13);
        }
        else if (save_as == "") {
            this.model.search = false;
            this.errorMsg.showModal(this.model.key_text14);
        }
        else {
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            let data = JSON.stringify({ 'zoom': this.model.zoom, 'app_user_id': this.model.user_id, 'house_no': house_no, 'landmark': landmark, 'address_type': save_as, 'latitude': this.model.LastLat, 'longitude': this.model.LastLng, 'colony_name': this.model.colony_name, 'city': this.model.city, 'state': this.model.state, 'country': this.model.country, 'postalCode': this.model.postalCode });
            //alert(data);
            this.fetch.add_location(data).subscribe(res => {
                this.model.search = false;
                console.log(res);
                //alert(res.success);
                if (res.success == true) {
                    this.router.navigate(['/saved-addresses', this.model.user_id]);
                }
            });
        }
    }
    presentAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: msg,
                buttons: [this.model.okay]
            });
            yield alert.present();
        });
    }
    close_btn() {
        this.location.back();
    }
    chooseSource(item) {
        this.sources = [];
        this.autocomplete.start = item;
        this.geo = item;
        this.geoCode(this.geo, 'start'); //convert Address to lat and long
    }
    dismissSource() {
        this.sources = [];
    }
    updateSources() {
        if (this.autocomplete.start == '') {
            this.sources = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.start,
            componentRestrictions: {
                country: 'in'
            }
        }, (predictions, status) => {
            me.sources = [];
            me.zone.run(() => {
                if (predictions != null) {
                    predictions.forEach((prediction) => {
                        me.sources.push(prediction.description);
                    });
                }
            });
            //console.log(this.sources);
        });
    }
    geoCode(address, path) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, (results, status) => {
            var address_components = results[0].address_components;
            var self = this;
            address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                    self.model.city = val.long_name;
                }
                if (val.types[0] == "administrative_area_level_1") {
                    self.model.state = val.long_name;
                }
                if (val.types[0] == "country") {
                    self.model.country = val.long_name;
                }
                if (val.types[0] == "postal_code") {
                    self.model.postalCode = val.long_name;
                }
            });
            if (path == 'start') {
                this.model.startLat = results[0].geometry.location.lat();
                this.model.startLng = results[0].geometry.location.lng();
                this.addMarker2(this.model.startLat, this.model.startLng);
            }
            // alert("lat: " + this.latitude + ", long: " + this.longitude);
        });
    }
    addMarker2(lat, lng) {
        this.marker.setMap(null);
        this.showAddress(lat, lng);
        let mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(lat, lng),
            draggable: true
        });
        let content = "<p>This is your current position !</p>";
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(this.marker, 'click', () => {
            infoWindow.open(this.map, this.marker);
        });
        this.lastLatLng(this.marker);
    }
};
SavedAddressesAddPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: _error_msg_service__WEBPACK_IMPORTED_MODULE_12__["ErrorMsgService"] }
];
SavedAddressesAddPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
SavedAddressesAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saved-addresses-add',
        template: _raw_loader_saved_addresses_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_addresses_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SavedAddressesAddPage);



/***/ }),

/***/ "R+91":
/*!*******************************************************************!*\
  !*** ./src/app/saved-addresses-add/saved-addresses-add.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 52%;\n}\n\n.current_location_page_show {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NhdmVkLWFkZHJlc3Nlcy1hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNDLGFBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7QUFHRDs7QUFEQTtFQUNDLGlCQUFBO0FBSUQiLCJmaWxlIjoic2F2ZWQtYWRkcmVzc2VzLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUyJTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3BhZ2Vfc2hvd3tcblx0ZGlzcGxheTpub25lO1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3BwaW5lcntcblx0LS1jb2xvcjojNDE5Qjk1O1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3Bpbm5lcl9wb3NpdGlvbntcblx0bWFyZ2luLXRvcDoyNTBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "tDHX":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saved-addresses-add/saved-addresses-add.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<center class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content class=\"current_location_page_show\">\n  \n  <div class=\"map edit\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <a (click)=\"close_btn()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    \n  </div>\n  <ion-searchbar [(ngModel)]=\"autocomplete.start\" placeholder=\"{{model.key_text12}}\" [showCancelButton]=\"true\"   (ionInput)=\"updateSources()\" (ionCancel)=\"dismissSource()\"></ion-searchbar>\n  <ion-list style=\"position: absolute;z-index: 999;\">\n  <ion-item *ngFor=\"let item of sources\" tappable   (click)=\"chooseSource(item)\">\n    {{ item }}\n  </ion-item>\n  </ion-list>\n  <div #map id=\"map\"></div>\n  <div class=\"ion-padding\">\n    <div class=\"map-icon\">\n      <img src=\"assets/images/location_red.svg\">\n    </div>\n    <div class=\"map_desc\">\n      <div class=\"size_16\">\n        {{model.colony_name}}\n      </div>\n      <div class=\"regular size_12\">\n        <!-- {{model.colony_name}}<br> -->\n        <!-- {{model.city}}, {{model.state}} {{model.postalCode}}, {{model.country}} -->\n      </div>\n      <div class=\"map_input\">\n        <ion-item lines=\"none\" style=\"display: none;\">\n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text1}} / {{model.key_text2}} / {{model.key_text3}} NO.</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"add_location_house_no\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n        <ion-item lines=\"none\"> \n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text4}}</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"add_location_landmark\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n        <ion-item lines=\"none\"> \n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{ model.key_text11 }}</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"save_as\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n      </div>\n      <!-- <div class=\"btn-group buttons2\">\n        <button class=\"grey regular btn3 size_12 medium\" id=\"add_t_1\" (click)=\"address_type(1)\">{{model.key_text5}}</button>\n        <button class=\"grey regular btn3 size_12 medium\" id=\"add_t_2\" (click)=\"address_type(2)\">{{model.key_text6}}</button>\n        <button class=\"grey regular btn3 size_12 medium\" id=\"add_t_3\" (click)=\"address_type(3)\">{{model.key_text7}}</button> \n        \n      </div> -->\n    </div>\n  </div>\n  \n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar>    \n      <div class=\"app_button\">\n        <!-- <ion-router-link href=\"saved-addresses\">\n          <button class=\"app_btn\">Save Changes</button>\n        </ion-router-link> -->\n\t\t<button class=\"app_btn\" (click)=\"save()\" *ngIf=\"!model.search\">{{model.key_text8}}</button>\n    <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  ");

/***/ })

}]);
//# sourceMappingURL=saved-addresses-add-saved-addresses-add-module-es2015.js.map