(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-food-screen-two-search-food-screen-two-module"],{

/***/ "PjUa":
/*!*************************************************************************!*\
  !*** ./src/app/search-food-screen-two/search-food-screen-two.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtZm9vZC1zY3JlZW4tdHdvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "WJbt":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-food-screen-two/search-food-screen-two.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width my_custome_theme_width\">\n  <div class=\"big_content_new noto_medium size_18\">\n  </div>\n  <div class=\"horizontal_center\">\n    <a>\n      <button class=\"app_btn big button\" [ngClass]=\"model.click ? 'btn_disabled_class' : ''\" (click)=\"!model.click && openModalCurrentLocation()\">\n        {{model.key_text1}}\n      </button>\n    </a>\n    <a (click)=\"openOnTheWay()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text2}}\n      </button>  \n    </a>\n  </div>\n</div>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar>    \n\t\t<ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n\t\t\t  <img src=\"assets/images/red_footer_home.svg\">\n\t\t\t  <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n\t\t\t  <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text5}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\"> \n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_activity.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text6}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_volunteer.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text7}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>      \n\t</ion-toolbar>\n</ion-footer>\n\n\n  \n\n");

/***/ }),

/***/ "Y2bJ":
/*!*********************************************************************************!*\
  !*** ./src/app/search-food-screen-two/search-food-screen-two-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchFoodScreenTwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFoodScreenTwoPageRoutingModule", function() { return SearchFoodScreenTwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_food_screen_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-food-screen-two.page */ "uLmB");




const routes = [
    {
        path: '',
        component: _search_food_screen_two_page__WEBPACK_IMPORTED_MODULE_3__["SearchFoodScreenTwoPage"]
    }
];
let SearchFoodScreenTwoPageRoutingModule = class SearchFoodScreenTwoPageRoutingModule {
};
SearchFoodScreenTwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchFoodScreenTwoPageRoutingModule);



/***/ }),

/***/ "ekeA":
/*!**********************************************!*\
  !*** ./src/app/captcha/captcha.component.ts ***!
  \**********************************************/
/*! exports provided: CaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function() { return CaptchaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./captcha.component.html */ "l+ky");
/* harmony import */ var _captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha.component.scss */ "oebF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let CaptchaComponent = class CaptchaComponent {
    constructor(fetch, router) {
        this.fetch = fetch;
        this.router = router;
        this.model = {};
        this.notification = [];
    }
    ngOnInit() {
        this.pageName = this.router['routerState'].snapshot.url;
        this.model.user_id = localStorage.getItem('user_id');
        this.fetch.get_notification(this.model.user_id).subscribe(res => {
            this.notification = res['data'];
            if (this.notification.length > 0) {
                $('#black_spot').show();
            }
        });
    }
    ngOnDestroy() {
        this.fetch.read_notification(this.model.user_id).subscribe(res => {
            $('#black_spot').hide();
        });
    }
};
CaptchaComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-captcha',
        template: _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CaptchaComponent);



/***/ }),

/***/ "l+ky":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/captcha/captcha.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\"></span>      \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n      \n     \n      \n    </ion-toolbar>\n  </ion-header>");

/***/ }),

/***/ "oebF":
/*!************************************************!*\
  !*** ./src/app/captcha/captcha.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0Y2hhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uLmB":
/*!***********************************************************************!*\
  !*** ./src/app/search-food-screen-two/search-food-screen-two.page.ts ***!
  \***********************************************************************/
/*! exports provided: SearchFoodScreenTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFoodScreenTwoPage", function() { return SearchFoodScreenTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_food_screen_two_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-food-screen-two.page.html */ "WJbt");
/* harmony import */ var _search_food_screen_two_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-food-screen-two.page.scss */ "PjUa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _common_search_screen_common_search_screen_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-search-screen/common-search-screen.page */ "+UNA");
/* harmony import */ var _modal_on_the_way_on_the_way_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/on-the-way/on-the-way.page */ "ZFA4");
/* harmony import */ var _modal_onthe_way_msg_onthe_way_msg_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/onthe-way-msg/onthe-way-msg.page */ "UG66");











let SearchFoodScreenTwoPage = class SearchFoodScreenTwoPage {
    constructor(router, fetch, storage, alertController, modalController) {
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.model = {};
        this.notification = [];
        this.data = [];
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.click = false;
        this.model.postalCode = 0;
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
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
        this.geoCode(localStorage.getItem('nearby_lat'), localStorage.getItem('nearby_lng'));
    }
    searchingModel(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_search_screen_common_search_screen_page__WEBPACK_IMPORTED_MODULE_8__["CommonSearchScreenPage"],
                // cssClass: 'custom_filter_modal cancel_allot_food_popup',
                componentProps: {
                    "type": type
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                }
            });
            return yield modal.present();
        });
    }
    emptyMessage(type, onthewaydata, rid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_onthe_way_msg_onthe_way_msg_page__WEBPACK_IMPORTED_MODULE_10__["OntheWayMsgPage"],
                cssClass: 'custom_filter_modal empty_message_height',
                componentProps: {
                    "type": type,
                    "way": onthewaydata,
                    "r_id": rid
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                }
            });
            return yield modal.present();
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = '';
            yield this.modalController.dismiss(onClosedData);
        });
    }
    openModalCurrentLocation() {
        this.model.click = true;
        setTimeout(() => {
            var self = this;
            self.model.click = false;
            localStorage.setItem('set_confirm_location_route', JSON.stringify('get-food-search'));
            self.searchingModel('nearby');
            self.location_data = JSON.parse(self.model.my_data);
            if (self.model.my_data != '' || self.model.my_data != 'undefined') {
                let data = JSON.stringify({ 'app_user_id': self.model.user_id, 'food_type': localStorage.getItem('receiver_food_type'), 'no_of_person': localStorage.getItem('number_of_person'), 'latitude': self.model.Lat, 'longitude': self.model.Lng, 'colony_name': self.model.colony_name, 'city': self.model.city, 'state': self.model.state, 'country': self.model.country, 'postal_code': self.model.postalCode });
                self.fetch.receiver_food_details(data).subscribe(res => {
                    self.closeModal();
                    if (res.data != null && res.data.total_food_for != 0) {
                        self.data = res;
                        self.router.navigate(['/get-food-nearest-donors', JSON.stringify(self.data), self.model.Lat, self.model.Lng, self.model.user_id, res.data.id, self.model.my_data, '0']);
                    }
                    else {
                        self.data = { 'success': true, 'data': null };
                        self.emptyMessage('nearby', self.location_data, self.model.user_id);
                    }
                    self.model.search = false;
                    self.model.food_type = localStorage.getItem('receiver_food_type');
                    self.model.no_of_person = localStorage.getItem('number_of_person');
                });
            }
            else {
                self.closeModal();
            }
        }, 3000);
    }
    openOnTheWay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('set_confirm_location_route', JSON.stringify('get-food-search'));
            const modal = yield this.modalController.create({
                component: _modal_on_the_way_on_the_way_page__WEBPACK_IMPORTED_MODULE_9__["OnTheWayPage"],
                cssClass: 'custom_current_location_modal_new',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log('data sdafadf', dataReturned);
                if (dataReturned !== null && dataReturned.data.length != 0) {
                    this.searchingModel('ontheway');
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                    console.log(this.dataReturned);
                    if (this.dataReturned.length > 0) {
                        console.log(this.dataReturned);
                        this.ontheway_data = this.dataReturned;
                        if (this.ontheway_data.length > 0) {
                            let data = JSON.stringify({ startLat: this.ontheway_data[0].startLat, startLng: this.ontheway_data[0].startLng, endLat: this.ontheway_data[0].endLat, endLng: this.ontheway_data[0].endLng, city: this.ontheway_data[0].city, choice: "receiver", 'app_user_id': this.model.user_id, 'food_type': localStorage.getItem('receiver_food_type'), 'no_of_person': localStorage.getItem('number_of_person') });
                            this.fetch.get_waypoints(data).subscribe(res => {
                                this.closeModal();
                                this.model.search = false;
                                if (res.data != null && res.data.total_food_for != 0) {
                                    this.data = res;
                                    //this.router.navigate(['/get-food-nearest-donors',JSON.stringify(this.data),this.location_data.latitude,this.location_data.longitude,this.model.user_id,res.data.id,JSON.stringify(this.location_data)]);
                                    this.router.navigate(['/get-food-nearest-donors', JSON.stringify(this.data), this.ontheway_data[0].startLat, this.ontheway_data[0].startLng, this.model.user_id, res.data.id, JSON.stringify(this.ontheway_data), '1']);
                                }
                                else {
                                    this.data = { 'success': true, 'data': null };
                                    this.emptyMessage('ontheway', this.ontheway_data, this.model.user_id);
                                }
                                this.model.food_type = localStorage.getItem('receiver_food_type');
                                this.model.no_of_person = localStorage.getItem('number_of_person');
                            });
                        }
                        // this.location_data = null;
                    }
                    // let data = JSON.stringify({'app_user_id' : this.model.user_id,'latitude' : this.location_data.latitude, 'longitude' : this.location_data.longitude, 'colony_name' : this.location_data.colony_name, 'city' : this.location_data.city, 'state' : this.location_data.state, 'country' : this.location_data.country, 'postal_code' : this.location_data.postalCode});
                    // this.fetch.recomended_distance(data).subscribe(res => {
                    // 	this.model.recommended_distance = res.data;
                    // });
                }
            });
            return yield modal.present();
        });
    }
    //convert Address string to lat and long
    geoCode(lat, lng) {
        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(lat, lng);
        let request = { latLng: latlng };
        geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                var self = this;
                var address_components = results[0].address_components;
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
                self.model.Lat = results[0].geometry.location.lat();
                self.model.Lng = results[0].geometry.location.lng();
                self.model.colony_name = results[0].formatted_address;
                //alert("lat: " + self.model.Lat + ", long: " + self.model.Lng +" , colony_name : "+ self.model.colony_name);
                this.model.my_data = JSON.stringify({ 'latitude': this.model.Lat, 'longitude': this.model.Lng, 'colony_name': this.model.colony_name, 'city': this.model.city, 'state': this.model.state, 'country': this.model.country, 'postalCode': this.model.postalCode });
                // alert(this.model.my_data);
            }
            //alert("inside_city2: " + this.model.city);
        });
        //alert("city: " + this.model.city);
    }
};
SearchFoodScreenTwoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
SearchFoodScreenTwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-food-screen-two',
        template: _raw_loader_search_food_screen_two_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_food_screen_two_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchFoodScreenTwoPage);



/***/ }),

/***/ "yNaW":
/*!*************************************************************************!*\
  !*** ./src/app/search-food-screen-two/search-food-screen-two.module.ts ***!
  \*************************************************************************/
/*! exports provided: SearchFoodScreenTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFoodScreenTwoPageModule", function() { return SearchFoodScreenTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_food_screen_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-food-screen-two-routing.module */ "Y2bJ");
/* harmony import */ var _search_food_screen_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-food-screen-two.page */ "uLmB");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../captcha/captcha.component */ "ekeA");








let SearchFoodScreenTwoPageModule = class SearchFoodScreenTwoPageModule {
};
SearchFoodScreenTwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_food_screen_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchFoodScreenTwoPageRoutingModule"]
        ],
        declarations: [_search_food_screen_two_page__WEBPACK_IMPORTED_MODULE_6__["SearchFoodScreenTwoPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], SearchFoodScreenTwoPageModule);



/***/ })

}]);
//# sourceMappingURL=search-food-screen-two-search-food-screen-two-module-es2015.js.map