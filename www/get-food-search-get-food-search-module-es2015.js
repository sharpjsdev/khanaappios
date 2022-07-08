(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-food-search-get-food-search-module"],{

/***/ "1r7E":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-food-search/get-food-search.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-captcha></app-captcha>\n<ion-content>\n<div class=\"ion-padding theme_width\"> \n  <div class=\"search_food_bg custome_search_css\">\n    <div class=\"search_single\">\n      <div class=\"start_number left_padding\">\n        <div class=\"s_number\">1.</div>\n        <div class=\"heading\">{{model.key_text1}} <span class=\"star\"> *</span>:</div> \n      </div>      \n      <div class=\"search_food_buttons\">\n        <div class=\"btn-group\">\n          <button class=\"grey regular btn1 receiver_error_border\" id=\"g_food_1\" (click)=\"food_type(1)\">{{model.key_text2}}.</button>\n          <button class=\"grey regular btn1 receiver_error_border\" id=\"g_food_2\" (click)=\"food_type(2)\">{{model.key_text3}}.</button>\n          <button class=\"grey regular btn1 receiver_error_border\" id=\"g_food_3\" (click)=\"food_type(3)\">{{model.key_text13}}</button>\n        </div>\n      </div>\n      <span class=\"receiver_food_type-error-text\">{{model.key_text16}}</span>  \n    </div>\n\n    <div class=\"search_single\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"custom_left left_padding\" style=\"padding-left: 12px;margin-top:10px\">\n          <div class=\"s_number\">2.</div>\n          <div class=\"heading\">{{model.key_text5}}<span class=\"star\"> *</span></div>            \n        </ion-col>\n        <ion-col size=\"1\" class=\"center\" style=\"margin-top:10px\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"getFoodDecrementValue()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"get_food_number\" disabled/>\n            <input type=\"button\" class=\"plus\" onclick=\"getFoodIncrementValue()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n      <span class=\"number-error-text\">{{model.key_text16}}</span> \n    </div></div>   \n</div>\n\n</ion-content>\n<div class=\"app_button\" >\n  <ion-router-link (click)=\"search_food()\">\n    <button class=\"app_btn\" *ngIf=\"!model.search\">{{model.key_text7}}</button>\n  </ion-router-link>\n  <button class=\"app_btn\" style=\"padding:10px\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n</div>\n<ion-footer>\n  <ion-toolbar>\n\t\n\t\n    <br>\n    <ion-segment value=\"home\" color=\"transparent\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n        <img src=\"assets/images/red_footer_home.svg\">\n        <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text8}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text9}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n        <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_volunteer.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text10}}</ion-label>    \n      </ion-segment-button>\n    </ion-segment>      \n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n  \n\n");

/***/ }),

/***/ "OYR2":
/*!***********************************************************!*\
  !*** ./src/app/get-food-search/get-food-search.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".receiver_food_type-error-text {\n  color: red;\n  display: none;\n}\n\n.number-error-text {\n  color: red;\n  display: none;\n}\n\n.distance-error-text {\n  color: red;\n  display: none;\n}\n\n.error-line {\n  border: 1px solid red;\n}\n\n.error-minus {\n  border-left: 1px solid red;\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n\n.error-minus {\n  border-right: 1px solid red;\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n\n.error-value {\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n\n.star {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dldC1mb29kLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREE7RUFDSSxxQkFBQTtBQUlKOztBQUZBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBSEE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7QUFRSiIsImZpbGUiOiJnZXQtZm9vZC1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpdmVyX2Zvb2RfdHlwZS1lcnJvci10ZXh0e1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm51bWJlci1lcnJvci10ZXh0e1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmRpc3RhbmNlLWVycm9yLXRleHR7XG4gICAgY29sb3I6cmVkO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uZXJyb3ItbGluZXtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbn1cbi5lcnJvci1taW51c3tcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG4uZXJyb3ItbWludXN7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cbi5lcnJvci12YWx1ZXtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG4uc3RhcntcbiAgICBjb2xvcjpyZWQ7XG59ICAgICJdfQ== */");

/***/ }),

/***/ "WUzT":
/*!***********************************************************!*\
  !*** ./src/app/get-food-search/get-food-search.module.ts ***!
  \***********************************************************/
/*! exports provided: GetFoodSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodSearchPageModule", function() { return GetFoodSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _get_food_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-food-search-routing.module */ "hIoK");
/* harmony import */ var _get_food_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-food-search.page */ "jzTr");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../captcha/captcha.component */ "ekeA");








let GetFoodSearchPageModule = class GetFoodSearchPageModule {
};
GetFoodSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _get_food_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetFoodSearchPageRoutingModule"]
        ],
        declarations: [_get_food_search_page__WEBPACK_IMPORTED_MODULE_6__["GetFoodSearchPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], GetFoodSearchPageModule);



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

/***/ "hIoK":
/*!*******************************************************************!*\
  !*** ./src/app/get-food-search/get-food-search-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: GetFoodSearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodSearchPageRoutingModule", function() { return GetFoodSearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _get_food_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-food-search.page */ "jzTr");




const routes = [
    {
        path: '',
        component: _get_food_search_page__WEBPACK_IMPORTED_MODULE_3__["GetFoodSearchPage"]
    }
];
let GetFoodSearchPageRoutingModule = class GetFoodSearchPageRoutingModule {
};
GetFoodSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetFoodSearchPageRoutingModule);



/***/ }),

/***/ "jzTr":
/*!*********************************************************!*\
  !*** ./src/app/get-food-search/get-food-search.page.ts ***!
  \*********************************************************/
/*! exports provided: GetFoodSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodSearchPage", function() { return GetFoodSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_get_food_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./get-food-search.page.html */ "1r7E");
/* harmony import */ var _get_food_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-food-search.page.scss */ "OYR2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_on_the_way_on_the_way_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/on-the-way/on-the-way.page */ "ZFA4");
/* harmony import */ var _modal_receiver_confirm_receiver_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/receiver-confirm/receiver-confirm.page */ "oNc3");
/* harmony import */ var _modal_location_error_content_location_error_content_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/location-error-content/location-error-content.page */ "GCnJ");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
















let GetFoodSearchPage = class GetFoodSearchPage {
    constructor(geolocation, nativeGeocoder, modalController, router, fetch, storage, alertController, platform, location) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.modalController = modalController;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.alertController = alertController;
        this.platform = platform;
        this.location = location;
        this.model = {};
        this.data = [];
        this.ontheway_data = [];
        this.notification = [];
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.location.back();
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.search = false;
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
        this.model.alert_text = 'Please fill all the details';
        this.model.okay = 'okay';
        var receiver_location = JSON.parse(localStorage.getItem('receiver_location'));
        this.location_data = receiver_location;
        if (this.location_data) {
            let data = JSON.stringify({ 'app_user_id': this.model.user_id, 'latitude': this.location_data.latitude, 'longitude': this.location_data.longitude, 'colony_name': this.location_data.colony_name, 'city': this.location_data.city, 'state': this.location_data.state, 'country': this.location_data.country, 'postal_code': this.location_data.postalCode });
            this.fetch.recomended_distance(data).subscribe(res => {
                this.model.recommended_distance = res.data;
            });
        }
        var receiver_food_type = JSON.parse(localStorage.getItem('receiver_food_type'));
        if (receiver_food_type != null) {
            $('#g_food_' + receiver_food_type).addClass('active');
        }
        this.options = {
            enableHighAccuracy: false,
        };
        this.geolocation.getCurrentPosition(this.options).then((resp) => {
            this.model.currLat = resp.coords.latitude;
            this.model.currLng = resp.coords.longitude;
            var self = this;
            localStorage.setItem('nearby_lat', self.model.currLat);
            localStorage.setItem('nearby_lng', self.model.currLng);
            self.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, this.geoencoderOptions)
                .then((result) => {
                self.model.curr_address = self.generateAddress(result[0]);
                localStorage.setItem('nearby_address', this.model.curr_address);
            })
                .catch((error) => {
            });
        });
    }
    //Return Comma saperated address
    generateAddress(addressObj) {
        let obj = [];
        let address = "";
        for (let key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }
    ionViewDidEnter() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'SELECT_TYPE_OF_FOOD');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'VEG');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'NON_VEG');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'BOTH');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'FOOD_NEEDED_FOR_HOW_MANY_PEOPLE');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'CURRENT_LOCATION');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'SEARCH_FOOD');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'HOME');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text9 = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text10 = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS');
        this.model.alert_text = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'OKAY');
        this.model.okay = item12[lang_code];
        let item13 = res.find(i => i.key_text === 'ANY');
        this.model.key_text13 = item13[lang_code];
        let item14 = res.find(i => i.key_text === 'CONVIENIENT_DISTANCE');
        this.model.key_text14 = item14[lang_code];
        let item15 = res.find(i => i.key_text === 'SHOW_IN_BETWEEN');
        this.model.key_text15 = item15[lang_code];
        let item16 = res.find(i => i.key_text === 'THIS_FIELD_IS_REQUIRED');
        this.model.key_text16 = item16[lang_code];
        //}); 
    }
    food_type(val) {
        this.model.food_type = val;
        if (val == 1) {
            $('#g_food_' + val).addClass('active');
            $('#g_food_2').removeClass('active');
            $('#g_food_3').removeClass('active');
        }
        else if (val == 2) {
            $('#g_food_' + val).addClass('active');
            $('#g_food_1').removeClass('active');
            $('#g_food_3').removeClass('active');
        }
        else {
            $('#g_food_' + val).addClass('active');
            $('#g_food_2').removeClass('active');
            $('#g_food_1').removeClass('active');
        }
        localStorage.setItem('receiver_food_type', val);
    }
    search_food() {
        this.model.search = true;
        var receiver_food_type = JSON.parse(localStorage.getItem('receiver_food_type'));
        var number_of_person = $('#get_food_number').val();
        localStorage.setItem('number_of_person', number_of_person);
        if (receiver_food_type == null && (number_of_person == '' || number_of_person == 0)) {
            $('.receiver_error_border').addClass('error-line');
            $('.minus').addClass('error-minus');
            $('.food_value').addClass('error-value');
            $('.plus').addClass('error-plus');
            $('.receiver_food_type-error-text').show();
            $('.number-error-text').show();
            this.model.search = false;
        }
        else if (receiver_food_type == null) {
            $('.receiver_error_border').addClass('error-line');
            $('.minus').removeClass('error-minus');
            $('.food_value').removeClass('error-value');
            $('.plus').removeClass('error-plus');
            $('.receiver_food_type-error-text').show();
            $('.number-error-text').hide();
            this.model.search = false;
            // this.presentAlert();
        }
        else if (number_of_person == '' || number_of_person == 0) {
            $('.receiver_error_border').removeClass('error-line');
            $('.minus').addClass('error-minus');
            $('.food_value').addClass('error-value');
            $('.plus').addClass('error-plus');
            $('.receiver_food_type-error-text').hide();
            $('.number-error-text').show();
            this.model.search = false;
            //this.presentAlert();
        }
        else {
            $('.receiver_error_border').removeClass('error-line');
            $('.minus').removeClass('error-minus');
            $('.food_value').removeClass('error-value');
            $('.plus').removeClass('error-plus');
            $('.receiver_food_type-error-text').hide();
            $('.number-error-text').hide();
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            this.router.navigate(['/search-food-screen-two']);
        }
    }
    openOnTheWay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('set_confirm_location_route', JSON.stringify('get-food-search'));
            const modal = yield this.modalController.create({
                component: _modal_on_the_way_on_the_way_page__WEBPACK_IMPORTED_MODULE_5__["OnTheWayPage"],
                cssClass: 'custom_current_location_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    if (this.dataReturned.length > 0) {
                        this.ontheway_data = this.dataReturned;
                        this.location_data = null;
                    }
                }
            });
            return yield modal.present();
        });
    }
    openReceiverConfirmPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //localStorage.setItem('set_confirm_location_route', JSON.stringify('get-food-search'));
            const modal = yield this.modalController.create({
                component: _modal_receiver_confirm_receiver_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ReceiverConfirmPage"],
                cssClass: 'custom_receiver_confirm_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title",
                    "data": this.data,
                    "food_type": this.model.food_type,
                    "no_of_person": this.model.no_of_person,
                    "app_user_id": this.model.user_id,
                    "location_data": this.location_data,
                    "distance": this.model.distance,
                    "ontheway_data": this.ontheway_data
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    $('#g_food_1').removeClass('active');
                    $('#g_food_2').removeClass('active');
                    $('#g_food_3').removeClass('active');
                    localStorage.removeItem('receiver_food_type');
                    if (dataReturned.data != 'accept') {
                        this.router.navigate(['/home']);
                    }
                    else {
                        let receiver_food_id = localStorage.getItem('res.receiver_food_id');
                        if (this.location_data != null) {
                            this.router.navigate(['/get-food-nearest-donors', JSON.stringify(this.data), this.location_data.latitude, this.location_data.longitude, this.model.user_id, receiver_food_id]);
                        }
                        else if (this.ontheway_data.length > 0) {
                            this.router.navigate(['/get-food-nearest-donors', JSON.stringify(this.data), this.ontheway_data[0].startLat, this.ontheway_data[0].startLng, this.model.user_id, receiver_food_id]);
                        }
                    }
                }
            });
            return yield modal.present();
        });
    }
    openModalError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_location_error_content_location_error_content_page__WEBPACK_IMPORTED_MODULE_7__["LocationErrorContentPage"],
                cssClass: 'custom_otp_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
GetFoodSearchPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] }
];
GetFoodSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-food-search',
        template: _raw_loader_get_food_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_get_food_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetFoodSearchPage);



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

/***/ })

}]);
//# sourceMappingURL=get-food-search-get-food-search-module-es2015.js.map