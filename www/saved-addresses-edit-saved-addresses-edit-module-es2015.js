(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saved-addresses-edit-saved-addresses-edit-module"],{

/***/ "6Vrq":
/*!*****************************************************************************!*\
  !*** ./src/app/saved-addresses-edit/saved-addresses-edit-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SavedAddressesEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressesEditPageRoutingModule", function() { return SavedAddressesEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _saved_addresses_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saved-addresses-edit.page */ "MdeN");




const routes = [
    {
        path: '',
        component: _saved_addresses_edit_page__WEBPACK_IMPORTED_MODULE_3__["SavedAddressesEditPage"]
    }
];
let SavedAddressesEditPageRoutingModule = class SavedAddressesEditPageRoutingModule {
};
SavedAddressesEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SavedAddressesEditPageRoutingModule);



/***/ }),

/***/ "MdeN":
/*!*******************************************************************!*\
  !*** ./src/app/saved-addresses-edit/saved-addresses-edit.page.ts ***!
  \*******************************************************************/
/*! exports provided: SavedAddressesEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressesEditPage", function() { return SavedAddressesEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_saved_addresses_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./saved-addresses-edit.page.html */ "l8YH");
/* harmony import */ var _saved_addresses_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved-addresses-edit.page.scss */ "psww");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_msg_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error-msg.service */ "ElZd");














let SavedAddressesEditPage = class SavedAddressesEditPage {
    constructor(storage, http, route, router, fetch, geolocation, errorMsg, nativeGeocoder, alertController, platform, location) {
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.geolocation = geolocation;
        this.errorMsg = errorMsg;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.platform = platform;
        this.location = location;
        this.model = {};
        this.location_data = [];
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.location.back();
        });
    }
    ngOnInit() {
        this.model.search = false;
    }
    ionViewWillEnter() {
        this.model.alert_text = 'Please fill all the details';
        this.model.okay = 'okay';
        this.model.LastLat = '';
        this.model.LastLng = '';
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
        let item8 = res.find(i => i.key_text === 'SAVE_CHANGES');
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
        this.model.location_id = this.route.snapshot.params['id'];
        this.fetch.get_lat_lon(this.model.location_id).subscribe(res => {
            console.log(res);
            this.options = {
                enableHighAccuracy: false,
            };
            this.geolocation.getCurrentPosition(this.options).then((resp) => {
                $('#edit_location_spinner').css('display', 'none');
                $('.current_location_page_show').css('display', 'block');
                this.model.lat = res['latitude'];
                this.model.lon = res['longitude'];
                this.location_data = res;
                $('#edit_address_type_' + res['adress_type']).addClass('active');
                this.model.address_type = res['adress_type'];
                this.showAddress(this.model.lat, this.model.lon);
                let latLng = new google.maps.LatLng(this.model.lat, this.model.lon);
                if (this.location_data.zoom > 15) {
                    this.model.zoom = this.location_data.zoom;
                }
                else {
                    this.model.zoom = 15;
                }
                let mapOptions = {
                    center: latLng,
                    zoom: this.model.zoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                this.addMarker();
                this.map.addListener('zoom_changed', () => {
                    var zoom = this.map.getZoom();
                    this.model.zoom = zoom;
                });
            });
        });
    }
    addMarker() {
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter(),
            draggable: true
        });
        let content = "<p>This is your current position !</p>";
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });
        this.lastLatLng(marker);
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
            console.log(results);
            this.location_data.colony_name = results[0].formatted_address;
            results[0].address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                    self.location_data.city = val.long_name;
                }
                if (val.types[0] == "administrative_area_level_1") {
                    self.location_data.state = val.long_name;
                }
                if (val.types[0] == "country") {
                    self.location_data.country = val.long_name;
                }
                if (val.types[0] == "postal_code") {
                    self.location_data.postalCode = val.long_name;
                }
            });
        });
    }
    address_type(val) {
        this.model.address_type = val;
        if (val == 1) {
            $('#edit_address_type_' + val).addClass('active');
            $('#edit_address_type_2').removeClass('active');
            $('#edit_address_type_3').removeClass('active');
        }
        else if (val == 2) {
            $('#edit_address_type_' + val).addClass('active');
            $('#edit_address_type_1').removeClass('active');
            $('#edit_address_type_3').removeClass('active');
        }
        else {
            $('#edit_address_type_' + val).addClass('active');
            $('#edit_address_type_2').removeClass('active');
            $('#edit_address_type_1').removeClass('active');
        }
    }
    update() {
        this.model.search = true;
        var house_no = $('#edit_house_no').val();
        var landmark = $('#edit_landmark').val();
        // var address_type = this.model.address_type;
        var save_as = $('#save_as').val();
        if (landmark == "") {
            this.model.search = false;
            this.errorMsg.showModal(this.model.key_text13);
        }
        else if (save_as == "") {
            this.model.search = false;
            this.errorMsg.showModal(this.model.key_text14);
        }
        else {
            var user_id = JSON.parse(localStorage.getItem('user_id'));
            if (this.model.LastLat == '') {
                this.model.LastLat = this.model.lat;
            }
            if (this.model.LastLng == '') {
                this.model.LastLng = this.model.lon;
            }
            let data = JSON.stringify({ 'zoom': this.model.zoom, 'id': this.model.location_id, 'app_user_id': user_id, 'house_no': house_no, 'landmark': landmark, 'address_type': save_as, 'latitude': this.model.LastLat, 'longitude': this.model.LastLng, 'colony_name': this.location_data.colony_name, 'city': this.location_data.city, 'state': this.location_data.state, 'country': this.location_data.country, 'postalCode': this.location_data.postalCode });
            console.log(data);
            this.fetch.updateLocation(data).subscribe(res => {
                console.log(res);
                this.model.search = false;
                if (res.success == true) {
                    var id = JSON.parse(localStorage.getItem('user_registerd'));
                    this.router.navigate(['/saved-addresses', id]);
                }
            });
        }
    }
    close_btn() {
        this.location.back();
    }
};
SavedAddressesEditPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _error_msg_service__WEBPACK_IMPORTED_MODULE_12__["ErrorMsgService"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] }
];
SavedAddressesEditPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
SavedAddressesEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saved-addresses-edit',
        template: _raw_loader_saved_addresses_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_addresses_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SavedAddressesEditPage);



/***/ }),

/***/ "krGk":
/*!*********************************************************************!*\
  !*** ./src/app/saved-addresses-edit/saved-addresses-edit.module.ts ***!
  \*********************************************************************/
/*! exports provided: SavedAddressesEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressesEditPageModule", function() { return SavedAddressesEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _saved_addresses_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saved-addresses-edit-routing.module */ "6Vrq");
/* harmony import */ var _saved_addresses_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saved-addresses-edit.page */ "MdeN");







let SavedAddressesEditPageModule = class SavedAddressesEditPageModule {
};
SavedAddressesEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saved_addresses_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SavedAddressesEditPageRoutingModule"]
        ],
        declarations: [_saved_addresses_edit_page__WEBPACK_IMPORTED_MODULE_6__["SavedAddressesEditPage"]]
    })
], SavedAddressesEditPageModule);



/***/ }),

/***/ "l8YH":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saved-addresses-edit/saved-addresses-edit.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<center class=\"current_location_spinner_position\" id=\"edit_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content class=\"current_location_page_show\">\n \n<div class=\"map edit\">\n  <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n    <ion-back-button defaultHref=\"home\"></ion-back-button>\n  </ion-buttons>\n  <a (click)=\"close_btn()\">\n    <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  </a>\n <!--  <img src=\"assets/images/map.svg\"> -->\n</div>\n<div #map id=\"map\"></div>\n<div class=\"ion-padding\">\n  <div class=\"map-icon\">\n    <img src=\"assets/images/location_red.svg\">\n  </div>\n  <div class=\"map_desc\">\n    <div class=\"size_18\">\n      {{location_data.colony_name}}\n    </div>\n    <div class=\"regular size_12\">\n      <!-- {{location_data.colony_name}},<br> -->\n      <!-- {{location_data.city}}, {{location_data.state}} {{location_data.postalCode}}, {{location_data.country}} -->\n    </div>\n    <br>\n    <div class=\"map_input\">\n      <ion-item lines=\"none\" style=\"display: none;\">\n        <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text1}} / {{model.key_text2}} / {{model.key_text3}} NO.</ion-label>\n        <ion-input value=\"{{location_data.house_no}}\" class=\"size_12 regular\" id=\"edit_house_no\"></ion-input>\n        <hr class=\"input_line\">\n      </ion-item>\n      <br>\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text4}}</ion-label>\n        <ion-input class=\"size_12 regular\" value=\"{{location_data.landmark}}\" id=\"edit_landmark\"></ion-input>\n        <hr class=\"input_line\">\n      </ion-item>\n      <ion-item lines=\"none\"> \n        <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{ model.key_text11 }}</ion-label>\n        <ion-input class=\"size_12 regular\" value=\"{{ model.address_type }}\" id=\"save_as\"></ion-input>\n        <hr class=\"input_line\">\n      </ion-item>\n    </div>\n  </div>\n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n\t  <button class=\"app_btn\" (click)=\"update()\" *ngIf=\"!model.search\">{{model.key_text8}}</button>\n    <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "psww":
/*!*********************************************************************!*\
  !*** ./src/app/saved-addresses-edit/saved-addresses-edit.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 66%;\n}\n\n.current_location_page_show {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NhdmVkLWFkZHJlc3Nlcy1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDQyxhQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0FBR0Q7O0FBREE7RUFDQyxpQkFBQTtBQUlEIiwiZmlsZSI6InNhdmVkLWFkZHJlc3Nlcy1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjYlO1xufVxuLmN1cnJlbnRfbG9jYXRpb25fcGFnZV9zaG93e1xuXHRkaXNwbGF5Om5vbmU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcHBpbmVye1xuXHQtLWNvbG9yOiM0MTlCOTU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcGlubmVyX3Bvc2l0aW9ue1xuXHRtYXJnaW4tdG9wOjI1MHB4O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=saved-addresses-edit-saved-addresses-edit-module-es2015.js.map