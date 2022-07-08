(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ewayitsolutions/Documents/khanna-app/src/main.ts */"zUnb");


/***/ }),

/***/ "0jGL":
/*!*******************************************************!*\
  !*** ./src/app/modal/dynamic-msg/dynamic-msg.page.ts ***!
  \*******************************************************/
/*! exports provided: DynamicMsgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicMsgPage", function() { return DynamicMsgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dynamic_msg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dynamic-msg.page.html */ "L9uu");
/* harmony import */ var _dynamic_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-msg.page.scss */ "JZkw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let DynamicMsgPage = class DynamicMsgPage {
    constructor(modalController, navParams, router, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        this.model.key_text1 = "okay";
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'OKAY');
        this.model.key_text1 = item1[lang_code];
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
DynamicMsgPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
DynamicMsgPage.propDecorators = {
    msg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DynamicMsgPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dynamic-msg',
        template: _raw_loader_dynamic_msg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dynamic_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DynamicMsgPage);



/***/ }),

/***/ "4kW0":
/*!*********************************************************************************!*\
  !*** ./src/app/modal/simple-push-notification/simple-push-notification.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SimplePushNotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePushNotificationPage", function() { return SimplePushNotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simple_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simple-push-notification.page.html */ "gCKo");
/* harmony import */ var _simple_push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-push-notification.page.scss */ "fF+m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let SimplePushNotificationPage = class SimplePushNotificationPage {
    constructor(storage, fetch, modalController) {
        this.storage = storage;
        this.fetch = fetch;
        this.modalController = modalController;
        this.model = {};
    }
    ngOnInit() {
        this.model.key_text1 = "okay";
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'OKAY');
        this.model.key_text1 = item1[lang_code];
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss('');
        });
    }
};
SimplePushNotificationPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
SimplePushNotificationPage.propDecorators = {
    msg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SimplePushNotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-simple-push-notification',
        template: _raw_loader_simple_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simple_push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SimplePushNotificationPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    base_url: 'https://khana.app/api/api/',
    image_url: 'https://khana.app/',
    //phone_no : '08069038801'
    phone_no: '08069010173'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CvUJ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/deliver-food-volunteer/deliver-food-volunteer.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div> \n       <br><br>\n      <div class=\"medium size_14 center\" style=\"max-width: 237px;width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div>\n    </div>\n    \n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text5}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "EQfQ":
/*!*****************************************************************************!*\
  !*** ./src/app/modal/deliver-food-volunteer/deliver-food-volunteer.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DeliverFoodVolunteerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverFoodVolunteerPage", function() { return DeliverFoodVolunteerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deliver_food_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deliver-food-volunteer.page.html */ "CvUJ");
/* harmony import */ var _deliver_food_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deliver-food-volunteer.page.scss */ "tHrL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let DeliverFoodVolunteerPage = class DeliverFoodVolunteerPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
        this.details = {};
    }
    ngOnInit() {
        this.details = JSON.stringify(this.array);
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'FOOD_REQUEST_COMPLETED_SUCCESSFULLY');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'VOLUNTEER_SUCCESS_MSG');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'DONATION_SUCCESS_MSG_2');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'DONATION_SUCCESS_FOOTER_MSG');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'SHARE_FEEDBACK');
        this.model.key_text5 = item5[lang_code];
    }
    redirectToNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            var t = JSON.parse(this.details);
            this.router.navigate(['/feedback-form', t.r_id, t.getFood_id]);
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.router.navigate(['/home']);
        });
    }
};
DeliverFoodVolunteerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
DeliverFoodVolunteerPage.propDecorators = {
    array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DeliverFoodVolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deliver-food-volunteer',
        template: _raw_loader_deliver_food_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deliver_food_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeliverFoodVolunteerPage);



/***/ }),

/***/ "JZkw":
/*!*********************************************************!*\
  !*** ./src/app/modal/dynamic-msg/dynamic-msg.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLW1zZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "L9uu":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/dynamic-msg/dynamic-msg.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\"> \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    <div class=\"modal_inner\">\n      <br>\n      <br>\n      <div class=\"medium size_16 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{msg}}.\n      </div>\n    </div>\n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"closeModal()\" class=\"app_btn\">{{model.key_text1}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "RPep":
/*!**********************************!*\
  !*** ./src/app/fetch.service.ts ***!
  \**********************************/
/*! exports provided: FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchService", function() { return FetchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");






let FetchService = class FetchService {
    constructor(http) {
        this.http = http;
        this.isLanguageChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    getLanguage() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'language');
    }
    getKeyText(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'key_text/' + id);
    }
    getAboutUsPageCOntent(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get-about-us-content-by-lang/' + id);
    }
    createUser(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'create_user', data);
    }
    resendOTP(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'resend_otp', data);
    }
    registerUser(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'register_user', data);
    }
    profile(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'user_profile', data);
    }
    get_location(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_long', data);
    }
    help_video(lang_code) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'help_video/' + lang_code);
    }
    add_location(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'add_location', data);
    }
    get_user_locations(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_location/' + id);
    }
    get_lat_lon(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_location/' + id);
    }
    updateLocation(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'edit_location', data);
    }
    remove_location(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'remove_location/' + id);
    }
    getUserLocationForDonation(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_user_loaction/' + id);
    }
    donate_food_location(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food', data);
    }
    donate_food_details(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_details', data);
    }
    reviewFood(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'review_food/' + id);
    }
    update_food_details(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_food_details', data);
    }
    pending_donation(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'pending_donation/' + id);
    }
    my_alloted_donation(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_alloted_donation/' + id);
    }
    my_food_request(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_food_request/' + id);
    }
    my_alloted_request(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_alloted_request/' + id);
    }
    receiver_food_details(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'receiver_food_details', data);
    }
    accept_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'accept_food', data);
    }
    accept_food_request(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'accept_food_request', data);
    }
    cancel_accept_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_accept_food', data);
    }
    cancel_requested_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_requested_food', data);
    }
    cancel_alloted_request(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_alloted_request', data);
    }
    get_food_cancel_alloted_request(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_food_cancel_alloted_request', data);
    }
    get_reasons(lang_code) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_reasons/' + lang_code);
    }
    get_terms_conditions(lang_code) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_terms_conditions/' + lang_code);
    }
    volunteer_get_terms_conditions(lang_code) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_get_terms_conditions/' + lang_code);
    }
    receiver_details(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'receiver_data/' + id);
    }
    nearest_donors(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'nearest_donors', data);
    }
    distanceAndTime(slat, slon, dlat, dlon, mode) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Authorization', 'Basic');
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        return this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyDFf3YK0MWDI1dYyVcJONOwdaaXW_eO3aU&origins=' + slat + ',' + slon + '&destinations=' + dlat + ',' + dlon + '&mode=' + mode + '&language=en-EN&sensor=false', {
            headers: headers
        });
    }
    showTimeAndDistance(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_time_distance', data);
    }
    get_donor_food_detail(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donar_food_detail/' + id);
    }
    get_volunteer_detail(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_detail/' + id);
    }
    pickup_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'food_pickup', data);
    }
    pickup_food_for_get(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'food_pickup_for_get', data);
    }
    feedback(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'feedback', data);
    }
    feedback_donor(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'feedback_donor', data);
    }
    register_volunteer(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'register_volunteer', data);
    }
    volunteer_request(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'request-food', data);
    }
    get_request(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_request/' + id);
    }
    my_ontheway_food(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_ontheway_food/' + id);
    }
    my_waiting_request(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_waiting_request/' + id);
    }
    my_completed_food(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_completed_food/' + id);
    }
    volunteer_receive_requested_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'receive-food', data);
    }
    volunteer_received_cancel_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel-alloted-food', data);
    }
    volunteer_cancel_requested_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel-receive-food', data);
    }
    req_list(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'food-request', data);
    }
    v_edit(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_edit/' + id);
    }
    cancel_all_request(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_all_request/' + id);
    }
    v_check(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_check/' + id);
    }
    update_volunteer(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_volunteer', data);
    }
    get_user_city(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'user_city/' + id);
    }
    get_top_donors(city) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'top_donors/' + city);
    }
    show_feedback(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_feedback/' + id);
    }
    weekly_donation_graph(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donation_graph_weekly/' + id);
    }
    monthly_donation_graph(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donation_graph_monthly/' + id);
    }
    blessings_this_week(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'blessing_this_week/' + id);
    }
    blessings_this_month(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'blessing_this_month/' + id);
    }
    total_blessings(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'total_blessings/' + id);
    }
    food_quality_weekly(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_food_quality/' + id);
    }
    weekly_packaging(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_packaging/' + id);
    }
    weekly_behaviour(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_behaviour/' + id);
    }
    monthly_food_quality(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_food_quality/' + id);
    }
    monthly_packaging(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_packaging/' + id);
    }
    monthly_behaviour(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_behaviour/' + id);
    }
    weekly_volunteer_req(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_volunteer_req/' + id);
    }
    monthly_volunteer_req(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_volunteer_req/' + id);
    }
    volunteer_blessings_this_week(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_blessing_this_week/' + id);
    }
    volunteer_blessings_this_month(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_blessing_this_month/' + id);
    }
    volunteer_total_blessings(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_total_blessings/' + id);
    }
    volunteer_city(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_city/' + id);
    }
    top_volunteers(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'top_volunteers/' + id);
    }
    twilio_token() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'twilio_token_generate');
    }
    get_registered_user_data(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_user_detail/' + id);
    }
    collect_food_noti_to_donor(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'collect_food_notification', data);
    }
    get_notification(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_notification/' + id);
    }
    read_notification(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'read_notification/' + id);
    }
    get_available_food(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_available_food/' + id);
    }
    cancel_donation_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_donation_food', data);
    }
    cancel_alloted_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_alloted_food', data);
    }
    change_app_status(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'change_app_status', data);
    }
    notify_donar(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'notify_donar', data);
    }
    notify_donar_donate(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'notify_donar_donate', data);
    }
    get_waypoints(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_waypoints', data);
    }
    get_volunteer_waypoints(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_waypoints', data);
    }
    get_volunteer_waypoints_new(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_waypoints_new', data);
    }
    get_volunteer_waypoints_by_condition(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_waypoints_by_condition', data);
    }
    save_contact_us(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'save_contact_us', data);
    }
    recomended_distance(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'recomended_distance', data);
    }
    donate_food_to_volunteer(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_to_volunteer', data);
    }
    active_donation(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'active_donation', data);
    }
    add_call_detail(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'add_call_detail', data);
    }
    get_received_food(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_received_food/' + id);
    }
    donate_food_location_new(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_new', data);
    }
    donate_food_details_new(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_details_new', data);
    }
    update_food_details_new(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_food_details_new', data);
    }
    test(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'test', data);
    }
    volunterr_accept_request(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunterr_accept_request', data);
    }
    checkVolunteerAcceptRequest(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunterr_accept_request_result', data);
    }
    convert_to_pickup_request(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'convert_to_pickup_request', data);
    }
    convert_to_pickup_request_no_volunteer(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'convert_to_pickup_request_no_volunteer', data);
    }
    donate_later_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_later_food', data);
    }
    donate_later_food_no_volunteer(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_later_food_no_volunteer', data);
    }
    reject_food_request_by_donee(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'reject_food_request_by_donee', data);
    }
    donee_accept_food(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donee_accept_food', data);
    }
    get_donate_food(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_donate_food/' + id);
    }
    volunteer_graph_today(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_today/' + id);
    }
    volunteer_graph_weekly(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_weekly/' + id);
    }
    volunteer_graph_monthly(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_monthly/' + id);
    }
    volunteer_graph_yearly(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_yearly/' + id);
    }
    count_today_donation_fullfiled(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_today_donation_fullfiled/' + id);
    }
    count_yearly_donation_fullfiled(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_yearly_donation_fullfiled/' + id);
    }
    count_monthly_donation_fullfiled(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_monthly_donation_fullfiled/' + id);
    }
    count_weekly_donation_fullfiled(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_weekly_donation_fullfiled/' + id);
    }
    volunteer_graph_today_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_today_accepted/' + id);
    }
    volunteer_graph_weekly_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_weekly_accepted/' + id);
    }
    volunteer_graph_monthly_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_monthly_accepted/' + id);
    }
    volunteer_graph_yearly_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_yearly_accepted/' + id);
    }
    count_yearly_donation_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_yearly_donation_accepted/' + id);
    }
    count_today_donation_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_today_donation_accepted/' + id);
    }
    count_monthly_donation_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_monthly_donation_accepted/' + id);
    }
    count_weekly_donation_accepted(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_weekly_donation_accepted/' + id);
    }
    show_feedback_by_id(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_feedback_by_id/' + id);
    }
    updateLanguage(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_language', data);
    }
    updateDeviceToken(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_device_token', data);
    }
};
FetchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FetchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FetchService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage.service */ "qkCY");
/* harmony import */ var _modal_push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/push-notification/push-notification.page */ "kEdH");
/* harmony import */ var _modal_deliver_food_volunteer_deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/deliver-food-volunteer/deliver-food-volunteer.page */ "EQfQ");
/* harmony import */ var _modal_pickup_success_modal_pickup_success_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/pickup-success-modal/pickup-success-modal.page */ "uFyy");
/* harmony import */ var _modal_simple_push_notification_simple_push_notification_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/simple-push-notification/simple-push-notification.page */ "4kW0");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");
















let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, fetch, storage, modalController, fcm) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.modalController = modalController;
        this.fcm = fcm;
        this.model = {};
        this.selectedIndex = 0;
        this.appPages = [];
        var self = this;
        setInterval(function () {
            self.checkVolunteer();
            self.checkLoginUser();
        }, 1000); //run this thang every 2 seconds
        this.model.fromNotification = false;
        this.pushSetup();
        document.addEventListener('deviceready', () => {
            // FCMPlugin.getToken((token: any) => {
            //   alert(token);
            //   localStorage.setItem('device_token', JSON.stringify(token));
            //   });
            // FCMPlugin.onNotification((data: any) => {
            // this.model.fromNotification = true;
            // var self = this;
            // if (data.wasTapped) 
            //   {
            //     var jd = JSON.parse(data.message);
            //     if(jd.check_val == '1' ){
            //       self.showNotification(jd.body,jd.my_array,jd.donor_details,jd.request_id);
            //     }else if(jd.check_val == '2' ){
            //       self.showFoodDeliverPopupToVolunteer(jd.my_array);
            //     }else if(jd.check_val == '3' ){
            //       self.showFoodDeliverPopupToDonor(jd.my_array);
            //     }
            //     // Notification was received on device tray and tapped by the user.
            //   } else {
            //     //alert("Received in foreground");
            //      var jd = JSON.parse(data.message);
            //     //;
            //     if(jd.check_val == '1' ){
            //       this.showNotification(data.body,jd.my_array,jd.donor_details,jd.request_id);
            //     }else if(jd.check_val == '2' ){
            //       this.showFoodDeliverPopupToVolunteer(jd.my_array);
            //     }else if(jd.check_val == '3' ){
            //       this.showFoodDeliverPopupToDonor(jd.my_array);
            //     }else{
            //       this.showAlert(data.body);
            //     }
            //   }
            // },(success:any)=>{
            //   if(!this.model.fromNotification){
            //           if(JSON.parse(localStorage.getItem('user_registerd')) != null){
            //             this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
            //             this.router.navigate(['/home']);
            //             //this.navCtrl.navigateBack(['/home']);
            //           }else if((localStorage.getItem('user_id')) != undefined && localStorage.getItem('isotpverified') == '1'){
            //             if(JSON.parse(localStorage.getItem('user_id')) != null){
            //               this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
            //               this.router.navigate(['/register-as-volunteer']);
            //             }
            //             //this.navCtrl.navigateBack(['/register-as-volunteer']);
            //           }else if(localStorage.getItem('isotpverified') == '0'){
            //             this.router.navigate(['/otp']);
            //           }else{
            //             this.router.navigate(['/language']);
            //           }
            //       }
            // },(error:any)=>{
            // });
        });
        //   if(!this.model.fromNotification){
        //     console.log((localStorage.getItem('isotpverified')));
        //     if(JSON.parse(localStorage.getItem('user_registerd')) != null){
        //       this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
        //       this.router.navigate(['/home']);
        //       //this.navCtrl.navigateBack(['/home']);
        //     }else if((localStorage.getItem('user_id')) != undefined  && localStorage.getItem('isotpverified') == '1'){
        //       if(JSON.parse(localStorage.getItem('user_id')) != null){
        //         this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
        //         this.router.navigate(['/register-as-volunteer']);
        //       }
        //       //this.navCtrl.navigateBack(['/register-as-volunteer']);
        //     }else if(localStorage.getItem('isotpverified') == '0'){
        //       this.router.navigate(['/otp']);
        //     }else{
        //       this.router.navigate(['/language']);
        //     }
        // }
        this.fetch.isLanguageChanged.subscribe(value => {
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
                let item13 = res.find(i => i.key_text === 'SHOW_IN_BETWEEN');
                this.model.key_text13 = item13[lang_code];
                let item14 = res.find(i => i.key_text === 'LOGOUT');
                this.model.key_text14 = item14[lang_code];
            });
        });
        this.initializeApp();
    }
    pushSetup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.platform.ready();
            if (!this.platform.is('cordova')) {
                return;
            }
            let token = yield this.fcm.getToken();
            //alert(token);
            localStorage.setItem('device_token', JSON.stringify(token));
            console.log('Subscribing to token updates');
            this.fcm.onTokenRefresh().subscribe((newToken) => {
                //this.token = newToken;
                console.log(newToken);
                localStorage.setItem('device_token', JSON.stringify(newToken));
            });
            console.log('Subscribing to new notifications');
            this.fcm.onNotification().subscribe((payload) => {
                //alert('in');
                //this.pushPayload = payload;
                console.log(payload);
                this.model.fromNotification = true;
                var self = this;
                if (payload.wasTapped) {
                    var jd = JSON.parse(payload.message);
                    if (jd.check_val == '1') {
                        self.showNotification(jd.body, jd.my_array, jd.donor_details, jd.request_id);
                    }
                    else if (jd.check_val == '2') {
                        self.showFoodDeliverPopupToVolunteer(jd.my_array);
                    }
                    else if (jd.check_val == '3') {
                        self.showFoodDeliverPopupToDonor(jd.my_array);
                    }
                    // Notification was received on device tray and tapped by the user.
                }
                else {
                    //alert("Received in foreground");
                    var jd = JSON.parse(payload.message);
                    //;
                    if (jd.check_val == '1') {
                        this.showNotification(payload.body, jd.my_array, jd.donor_details, jd.request_id);
                    }
                    else if (jd.check_val == '2') {
                        this.showFoodDeliverPopupToVolunteer(jd.my_array);
                    }
                    else if (jd.check_val == '3') {
                        this.showFoodDeliverPopupToDonor(jd.my_array);
                    }
                    else {
                        this.showAlert(payload.body);
                    }
                }
            });
            let hasPermission = yield this.fcm.requestPushPermission();
            console.log(hasPermission);
            let pushPayload = yield this.fcm.getInitialPushPayload();
            console.log(pushPayload);
            //alert(this.model.fromNotification);
            if (!this.model.fromNotification) {
                console.log((localStorage.getItem('isotpverified')));
                if (JSON.parse(localStorage.getItem('user_registerd')) != null) {
                    this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
                    this.router.navigate(['/home']);
                    //this.navCtrl.navigateBack(['/home']);
                }
                else if ((localStorage.getItem('user_id')) != undefined && localStorage.getItem('isotpverified') == '1') {
                    if (JSON.parse(localStorage.getItem('user_id')) != null) {
                        this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
                        this.router.navigate(['/register-as-volunteer']);
                    }
                    //this.navCtrl.navigateBack(['/register-as-volunteer']);
                }
                else if (localStorage.getItem('isotpverified') == '0') {
                    this.router.navigate(['/otp']);
                }
                else {
                    this.router.navigate(['/language']);
                }
            }
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.statusBar.styleBlackTranslucent();
            this.splashScreen.hide();
        });
        this.checkVolunteer();
        //alert('dsd');
    }
    ngOnInit() {
        var self = this;
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        const path = window.location.pathname.split('folder/')[1];
        //console.log("app.component"); 
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
    checkVolunteer() {
        this.user_id = JSON.parse(localStorage.getItem('user_registerd'));
        if (this.user_id) {
            this.fetch.v_check(this.user_id).subscribe(res => {
                if (res.success == true) {
                    if (res.status == 1) {
                        localStorage.setItem('volunteer_approve', '1');
                    }
                    else {
                        localStorage.setItem('volunteer_approve', '0');
                    }
                }
                else {
                    localStorage.setItem('volunteer_approve', '0');
                }
            });
        }
    }
    checkLoginUser() {
        if (localStorage.getItem('user_id') != undefined) {
            if (JSON.parse(localStorage.getItem('user_id')) != null) {
                let data = JSON.stringify({ 'id': JSON.parse(localStorage.getItem('user_id')) });
                this.fetch.profile(data).subscribe(res => {
                    if (res['status'] != 1) {
                        this.logout();
                    }
                });
            }
        }
    }
    save_address() {
        var id = JSON.parse(localStorage.getItem('user_registerd'));
        this.router.navigate(['/saved-addresses', id]);
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/language']);
    }
    side_bar_route(route) {
        this.router.navigate(['/' + route]);
    }
    showNotification(msg, array, donor_details, request_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_10__["PushNotificationPage"],
                cssClass: 'custom_current_location_modal notification-modal',
                backdropDismiss: false,
                componentProps: {
                    "array": array,
                    "donor_details": donor_details,
                    "request_id": request_id,
                    "message": msg
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    showFoodDeliverPopupToVolunteer(array) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_deliver_food_volunteer_deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_11__["DeliverFoodVolunteerPage"],
                cssClass: 'custom_feedback_modal  my_volunteer_completed_modal',
                backdropDismiss: false,
                componentProps: {
                    "array": array,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    showFoodDeliverPopupToDonor(array) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_pickup_success_modal_pickup_success_modal_page__WEBPACK_IMPORTED_MODULE_12__["PickupSuccessModalPage"],
                cssClass: 'custom_filter_modal cancel_allot_food_popup',
                backdropDismiss: false,
                componentProps: {
                    "array": array,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    showAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_simple_push_notification_simple_push_notification_page__WEBPACK_IMPORTED_MODULE_13__["SimplePushNotificationPage"],
                cssClass: 'custom_current_location_modal notification-modal',
                backdropDismiss: false,
                componentProps: {
                    "msg": msg,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_14__["FCM"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TdOy":
/*!*********************************************************************!*\
  !*** ./src/app/modal/push-notification/push-notification.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXNoLW5vdGlmaWNhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\" style=\"margin: 0px 30px;\">\n          <ion-list-header class=\"medium size_18 custom_header\">More</ion-list-header>          \n\n          <!--<ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>-->\n        </ion-list>\n\n        <div class=\"custom_menubar\">\n\t\t\t<ion-list class=\"custom_menu\" style=\"margin-top: -40px !important; margin-bottom:12px;\">\n\t\t\t\t<ion-menu-toggle>\n\t\t\t\t\t<ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/register-volunteer']\">\n\t\t\t\t\t\t<div class=\"menu_img\"><img src=\"assets/images/menu_1.svg\"> </div>\n\t\t\t\t\t\t<div class=\"menu_content\">\n\t\t\t\t\t\t\t<div class=\"menu_title size_16 medium\">{{model.key_text1}}</div>\n\t\t\t\t\t\t\t<div class=\"menu_sub green regular size_12\">{{model.key_text2}}</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/profile']\" >\n\t\t\t\t\t\t<div class=\"menu_img\"><img src=\"assets/images/menu_2.svg\"> </div>\n\t\t\t\t\t\t<div class=\"menu_content\">\n\t\t\t\t\t\t\t<div class=\"menu_title size_16 medium\">{{model.key_text3}}</div>\n\t\t\t\t\t\t\t<div class=\"menu_sub green regular size_12\">{{model.key_text4}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/saved-addresses',user_id]\">\n\t\t\t\t\t\t<div class=\"menu_img\"><img src=\"assets/images/menu_3.svg\"> </div>\n\t\t\t\t\t\t<div class=\"menu_content\">\n\t\t\t\t\t\t\t<div class=\"menu_title size_16 medium\">{{model.key_text5}}</div>\n\t\t\t\t\t\t\t<div class=\"menu_sub green regular size_12\">{{model.key_text6}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/choose-language']\">\n\t\t\t\t\t\t<div class=\"menu_img\"><img src=\"assets/images/menu_4.svg\"> </div>\n\t\t\t\t\t\t<div class=\"menu_content\">\n\t\t\t\t\t\t\t<div class=\"menu_title size_16 medium\">{{model.key_text7}}</div>\n\t\t\t\t\t\t\t<div class=\"menu_sub green regular size_12\">{{model.key_text8}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/help']\">\n\t\t\t\t\t\t<div class=\"menu_img\"><img src=\"assets/images/menu_5.svg\"> </div>\n\t\t\t\t\t\t<div class=\"menu_content\">\n\t\t\t\t\t\t\t<div class=\"menu_title size_16 medium\">{{model.key_text9}}</div>\n\t\t\t\t\t\t\t<div class=\"menu_sub green regular size_12\">{{model.key_text10}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/about-us']\">\n\t\t\t\t\t\t<div class=\"menu_img\"><img src=\"assets/images/menu_6.svg\"> </div>\n\t\t\t\t\t\t<div class=\"menu_content\">\n\t\t\t\t\t\t\t<div class=\"menu_title size_16 medium\">{{model.key_text11}}</div>\n\t\t\t\t\t\t\t<div class=\"menu_sub green regular size_12\">{{model.key_text12}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t  \n\t\t\t\t\t <ion-item class=\"item-icon-left menu_item\" menu-close  (click)=\"logout()\">\n\t\t\t\t\t\t<div class=\"menu_img\"><img src=\"assets/images/menu_6.svg\"> </div>\n\t\t\t\t\t\t<div class=\"menu_content\">\n\t\t\t\t\t\t\t<div class=\"menu_title size_16 medium\">{{model.key_text14}}</div>\n\t\t\t\t\t\t\t<div class=\"menu_sub green regular size_12\">{{model.key_text14}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item>  \n\t\t\t\t</ion-menu-toggle>\t\t\t\n\t\t\t</ion-list>\n        </div>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "XrzN":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/push-notification/push-notification.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <!-- <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\"> -->\n  \n    <div class=\"modal_inner\">\n      <br>\n      \n      <div class=\"medium size_18 green center\" style=\"max-width: 228px; width: 100%; margin: 0 auto;\">\n        {{message}}\n      </div>\n      <br>\n      <div class=\"medium size_16\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <button class=\"app_btn custom_reject_btn\"  (click)=\"RejectRequest(true)\">{{model.key_text1}}</button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <button class=\"app_btn custom_accept_btn\"  (click)=\"acceptRequest()\">{{model.key_text2}}</button>\n          </ion-col>\n        </ion-row>\n         \n      </div>\n    </div>\n\n  </div>\n</ion-content> ");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "ORb9");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "ya1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");


















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__["RecaptchaModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["DatePicker"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"],
            _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_7__["BrowserTab"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_17__["FCM"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "Zpru":
/*!***************************************************************************!*\
  !*** ./src/app/modal/pickup-success-modal/pickup-success-modal.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrdXAtc3VjY2Vzcy1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ejjP":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/pickup-success-modal/pickup-success-modal.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <!-- <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a> -->\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div> \n       <br><br>\n      <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> \n\t  <br>\n       <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div>\n      <br><br><br><br><br><br><br>\n      <div class=\"medium size_14 center\" style=\"color:#b8b8b8; width: 100%; margin: 0 auto;\">\n        {{model.key_text4}}\n      </div>\n    </div>\n    \n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text5}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "fF+m":
/*!***********************************************************************************!*\
  !*** ./src/app/modal/simple-push-notification/simple-push-notification.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUtcHVzaC1ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "gCKo":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/simple-push-notification/simple-push-notification.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  \n    <div class=\"modal_inner\">\n      <br>\n      \n      <div class=\"medium size_16 green center\" style=\"max-width: 300px; width: 100%; margin: 0 auto;\">\n        {{msg}}\n      </div>\n      <br>\n      <br>\n      <div class=\"app_button\">\n          <button class=\"app_btn\" (click)=\"closeModal()\">{{ model.key_text1 }}</button>\n      </div>\n    </div>\n\n  </div>\n</ion-content> ");

/***/ }),

/***/ "kEdH":
/*!*******************************************************************!*\
  !*** ./src/app/modal/push-notification/push-notification.page.ts ***!
  \*******************************************************************/
/*! exports provided: PushNotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationPage", function() { return PushNotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./push-notification.page.html */ "XrzN");
/* harmony import */ var _push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./push-notification.page.scss */ "TdOy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _dynamic_msg_dynamic_msg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamic-msg/dynamic-msg.page */ "0jGL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let PushNotificationPage = class PushNotificationPage {
    constructor(storage, fetch, modalController, alertController) {
        this.storage = storage;
        this.fetch = fetch;
        this.modalController = modalController;
        this.alertController = alertController;
        this.model = {};
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss('');
        });
    }
    ngOnInit() {
        this.model.key_text1 = "Reject";
        this.model.key_text2 = "Accept";
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'REJECT');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'ACCEPT');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'VOLUNTEER_FOOD_REJECT_MSG');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'CLOSE');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'FOOD_ACCEPTED');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'SOMETHING_WENT_WRONG');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'FOOD_ALLOTED_TO_OTHER_VOLUNTEER');
        this.model.key_text7 = item7[lang_code];
    }
    acceptRequest() {
        var app_user_id = localStorage.getItem('user_id');
        var formData = new FormData();
        formData.append("donate_request", JSON.stringify(this.array));
        formData.append("donate_address", JSON.stringify(this.donor_details));
        formData.append("receiver_id", app_user_id);
        formData.append("request_id", this.request_id);
        this.fetch.volunterr_accept_request(formData).subscribe(res => {
            if (res['success']) {
                this.closeModal();
                this.showAlert(res['message']);
            }
        });
    }
    showAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (msg == 'Food accepted') {
                msg = this.model.key_text5;
            }
            else if (msg == 'Food alloted to other volunteer') {
                msg = this.model.key_text7;
            }
            else {
                msg = this.model.key_text6;
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class custom_alert_1',
                //header: 'Alert',
                message: msg,
                buttons: [
                    {
                        text: this.model.key_text4,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    RejectRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.closeModal();
            const modal = yield this.modalController.create({
                component: _dynamic_msg_dynamic_msg_page__WEBPACK_IMPORTED_MODULE_6__["DynamicMsgPage"],
                cssClass: 'home_content_modal dynamic_model_css',
                componentProps: {
                    "msg": this.model.key_text3
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
};
PushNotificationPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
PushNotificationPage.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    donor_details: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    request_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PushNotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-push-notification',
        template: _raw_loader_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PushNotificationPage);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "p9Ra":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy namespace object ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "p9Ra";

/***/ }),

/***/ "qkCY":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let StorageService = class StorageService {
    constructor() { }
    getScope() {
        //console.log('yes',JSON.parse(localStorage.getItem('scope')));
        if (localStorage.getItem('scope')) {
            return JSON.parse(localStorage.getItem('scope'));
        }
        else {
            return this.scope;
        }
    }
    setScope(scope) {
        this.scope = scope;
        localStorage.setItem('scope', JSON.stringify(scope));
    }
};
StorageService.ctorParameters = () => [];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "tHrL":
/*!*******************************************************************************!*\
  !*** ./src/app/modal/deliver-food-volunteer/deliver-food-volunteer.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyLWZvb2Qtdm9sdW50ZWVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "uFyy":
/*!*************************************************************************!*\
  !*** ./src/app/modal/pickup-success-modal/pickup-success-modal.page.ts ***!
  \*************************************************************************/
/*! exports provided: PickupSuccessModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupSuccessModalPage", function() { return PickupSuccessModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pickup_success_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pickup-success-modal.page.html */ "ejjP");
/* harmony import */ var _pickup_success_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickup-success-modal.page.scss */ "Zpru");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let PickupSuccessModalPage = class PickupSuccessModalPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
        this.details = {};
    }
    ngOnInit() {
        this.details = JSON.stringify(this.array);
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'THANKYOU_FOR_YOUR_DONATION');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'DONATION_SUCCESS_MSG_1');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'DONATION_SUCCESS_MSG_2');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'DONATION_SUCCESS_FOOTER_MSG');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'GIVE_FEEDBACK');
        this.model.key_text5 = item5[lang_code];
    }
    redirectToNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            var t = JSON.parse(this.details);
            this.router.navigate(['/feedback-form-for-donor', t.r_id, t.getFood_id]);
            //this.router.navigate(['/feedback-form',t.r_id,t.getFood_id]);
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.router.navigate(['/home']);
        });
    }
};
PickupSuccessModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
PickupSuccessModalPage.propDecorators = {
    array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PickupSuccessModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pickup-success-modal',
        template: _raw_loader_pickup_success_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pickup_success_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PickupSuccessModalPage);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    // {
    //   path: '',
    //   redirectTo: 'language',
    //   pathMatch: 'full'
    // },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() | splash-splash-module */ "splash-splash-module").then(__webpack_require__.bind(null, /*! ./splash/splash.module */ "eYMH")).then(m => m.SplashPageModule)
    },
    {
        path: 'language',
        loadChildren: () => __webpack_require__.e(/*! import() | language-language-module */ "language-language-module").then(__webpack_require__.bind(null, /*! ./language/language.module */ "XkIt")).then(m => m.LanguagePageModule)
    },
    {
        path: 'mobile-number',
        loadChildren: () => Promise.all(/*! import() | mobile-number-mobile-number-module */[__webpack_require__.e("common"), __webpack_require__.e("mobile-number-mobile-number-module")]).then(__webpack_require__.bind(null, /*! ./mobile-number/mobile-number.module */ "WmCV")).then(m => m.MobileNumberPageModule)
    },
    {
        path: 'otp',
        loadChildren: () => Promise.all(/*! import() | otp-otp-module */[__webpack_require__.e("common"), __webpack_require__.e("otp-otp-module")]).then(__webpack_require__.bind(null, /*! ./otp/otp.module */ "ikiF")).then(m => m.OtpPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'get-food-search',
        loadChildren: () => Promise.all(/*! import() | get-food-search-get-food-search-module */[__webpack_require__.e("default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a"), __webpack_require__.e("default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module"), __webpack_require__.e("common"), __webpack_require__.e("get-food-search-get-food-search-module")]).then(__webpack_require__.bind(null, /*! ./get-food-search/get-food-search.module */ "WUzT")).then(m => m.GetFoodSearchPageModule)
    },
    {
        path: 'nearest-donors/:id',
        loadChildren: () => Promise.all(/*! import() | nearest-donors-nearest-donors-module */[__webpack_require__.e("default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"), __webpack_require__.e("nearest-donors-nearest-donors-module")]).then(__webpack_require__.bind(null, /*! ./nearest-donors/nearest-donors.module */ "qX/V")).then(m => m.NearestDonorsPageModule)
    },
    {
        path: 'register-as-volunteer',
        loadChildren: () => Promise.all(/*! import() | register-as-volunteer-register-as-volunteer-module */[__webpack_require__.e("common"), __webpack_require__.e("register-as-volunteer-register-as-volunteer-module")]).then(__webpack_require__.bind(null, /*! ./register-as-volunteer/register-as-volunteer.module */ "M26G")).then(m => m.RegisterAsVolunteerPageModule)
    },
    {
        path: 'register-volunteer',
        loadChildren: () => Promise.all(/*! import() | register-volunteer-register-volunteer-module */[__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("common"), __webpack_require__.e("register-volunteer-register-volunteer-module")]).then(__webpack_require__.bind(null, /*! ./register-volunteer/register-volunteer.module */ "WdT9")).then(m => m.RegisterVolunteerPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
    }, {
        path: 'saved-addresses/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | saved-addresses-saved-addresses-module */ "saved-addresses-saved-addresses-module").then(__webpack_require__.bind(null, /*! ./saved-addresses/saved-addresses.module */ "xuot")).then(m => m.SavedAddressesPageModule)
    }, {
        path: 'otp-content',
        loadChildren: () => Promise.all(/*! import() | modal-otp-otp-content-otp-content-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-otp-otp-content-otp-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/otp/otp-content/otp-content.module */ "0DpX")).then(m => m.OtpContentPageModule)
    },
    {
        path: 'saved-addresses-edit/:id',
        loadChildren: () => Promise.all(/*! import() | saved-addresses-edit-saved-addresses-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("saved-addresses-edit-saved-addresses-edit-module")]).then(__webpack_require__.bind(null, /*! ./saved-addresses-edit/saved-addresses-edit.module */ "krGk")).then(m => m.SavedAddressesEditPageModule)
    },
    {
        path: 'saved-addresses-add',
        loadChildren: () => Promise.all(/*! import() | saved-addresses-add-saved-addresses-add-module */[__webpack_require__.e("common"), __webpack_require__.e("saved-addresses-add-saved-addresses-add-module")]).then(__webpack_require__.bind(null, /*! ./saved-addresses-add/saved-addresses-add.module */ "2rwE")).then(m => m.SavedAddressesAddPageModule)
    },
    {
        path: 'filter-content',
        loadChildren: () => Promise.all(/*! import() | modal-otp-filter-content-filter-content-module */[__webpack_require__.e("default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"), __webpack_require__.e("modal-otp-filter-content-filter-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/otp/filter-content/filter-content.module */ "kfW7")).then(m => m.FilterContentPageModule)
    },
    {
        path: 'sort-content',
        loadChildren: () => Promise.all(/*! import() | modal-sort-content-sort-content-module */[__webpack_require__.e("default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"), __webpack_require__.e("modal-sort-content-sort-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/sort-content/sort-content.module */ "Io9y")).then(m => m.SortContentPageModule)
    },
    {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ./help/help.module */ "7XJi")).then(m => m.HelpPageModule)
    },
    {
        path: 'home-content',
        loadChildren: () => Promise.all(/*! import() | modal-home-content-home-content-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-home-content-home-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/home-content/home-content.module */ "RpSc")).then(m => m.HomeContentPageModule)
    },
    {
        path: 'donate-food-add-location',
        loadChildren: () => __webpack_require__.e(/*! import() | donate-food-add-location-donate-food-add-location-module */ "donate-food-add-location-donate-food-add-location-module").then(__webpack_require__.bind(null, /*! ./donate-food-add-location/donate-food-add-location.module */ "HP7G")).then(m => m.DonateFoodAddLocationPageModule)
    },
    {
        path: 'current-location-content',
        loadChildren: () => Promise.all(/*! import() | modal-current-location-content-current-location-content-module */[__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("modal-current-location-content-current-location-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/current-location-content/current-location-content.module */ "Y53R")).then(m => m.CurrentLocationContentPageModule)
    },
    {
        path: 'select-location',
        loadChildren: () => __webpack_require__.e(/*! import() | select-location-select-location-module */ "select-location-select-location-module").then(__webpack_require__.bind(null, /*! ./select-location/select-location.module */ "spR7")).then(m => m.SelectLocationPageModule)
    },
    {
        path: 'choose-language',
        loadChildren: () => __webpack_require__.e(/*! import() | choose-language-choose-language-module */ "choose-language-choose-language-module").then(__webpack_require__.bind(null, /*! ./choose-language/choose-language.module */ "Ivhk")).then(m => m.ChooseLanguagePageModule)
    },
    {
        path: 'donate-food-members',
        loadChildren: () => Promise.all(/*! import() | donate-food-members-donate-food-members-module */[__webpack_require__.e("common"), __webpack_require__.e("donate-food-members-donate-food-members-module")]).then(__webpack_require__.bind(null, /*! ./donate-food-members/donate-food-members.module */ "vV63")).then(m => m.DonateFoodMembersPageModule)
    },
    {
        path: 'donate-food-review/:id/:id2',
        loadChildren: () => Promise.all(/*! import() | donate-food-review-donate-food-review-module */[__webpack_require__.e("common"), __webpack_require__.e("donate-food-review-donate-food-review-module")]).then(__webpack_require__.bind(null, /*! ./donate-food-review/donate-food-review.module */ "aOuy")).then(m => m.DonateFoodReviewPageModule)
    },
    {
        path: 'donate-food-successful',
        loadChildren: () => __webpack_require__.e(/*! import() | donate-food-successful-donate-food-successful-module */ "donate-food-successful-donate-food-successful-module").then(__webpack_require__.bind(null, /*! ./donate-food-successful/donate-food-successful.module */ "fIfy")).then(m => m.DonateFoodSuccessfulPageModule)
    },
    {
        path: 'donate-food-content',
        loadChildren: () => Promise.all(/*! import() | modal-donate-food-content-donate-food-content-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-donate-food-content-donate-food-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/donate-food-content/donate-food-content.module */ "wHLh")).then(m => m.DonateFoodContentPageModule)
    },
    {
        path: 'feedback-form/:r_id/:getfood_id',
        loadChildren: () => Promise.all(/*! import() | feedback-form-feedback-form-module */[__webpack_require__.e("common"), __webpack_require__.e("feedback-form-feedback-form-module")]).then(__webpack_require__.bind(null, /*! ./feedback-form/feedback-form.module */ "Pkrh")).then(m => m.FeedbackFormPageModule)
    },
    {
        path: 'feedback-content',
        loadChildren: () => Promise.all(/*! import() | modal-feedback-content-feedback-content-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-feedback-content-feedback-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/feedback-content/feedback-content.module */ "K/ym")).then(m => m.FeedbackContentPageModule)
    },
    {
        path: 'get-food-nearest-donors/:data/:r_lat/:r_lon/:r_id/:id/:data2/:t',
        loadChildren: () => Promise.all(/*! import() | get-food-nearest-donors-get-food-nearest-donors-module */[__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("get-food-nearest-donors-get-food-nearest-donors-module")]).then(__webpack_require__.bind(null, /*! ./get-food-nearest-donors/get-food-nearest-donors.module */ "M/g4")).then(m => m.GetFoodNearestDonorsPageModule)
    },
    {
        path: 'get-food-nearest-donors-two/:id/:lat/:lon/:r_id/:mode/:food_type/:getfoodid',
        loadChildren: () => Promise.all(/*! import() | get-food-nearest-donors-two-get-food-nearest-donors-two-module */[__webpack_require__.e("common"), __webpack_require__.e("get-food-nearest-donors-two-get-food-nearest-donors-two-module")]).then(__webpack_require__.bind(null, /*! ./get-food-nearest-donors-two/get-food-nearest-donors-two.module */ "K8Ou")).then(m => m.GetFoodNearestDonorsTwoPageModule)
    },
    {
        path: 'get-food-search-with-address',
        loadChildren: () => __webpack_require__.e(/*! import() | get-food-search-with-address-get-food-search-with-address-module */ "get-food-search-with-address-get-food-search-with-address-module").then(__webpack_require__.bind(null, /*! ./get-food-search-with-address/get-food-search-with-address.module */ "VLRt")).then(m => m.GetFoodSearchWithAddressPageModule)
    },
    {
        path: 'location-error-content',
        loadChildren: () => Promise.all(/*! import() | modal-location-error-content-location-error-content-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-location-error-content-location-error-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/location-error-content/location-error-content.module */ "ZgGT")).then(m => m.LocationErrorContentPageModule)
    },
    {
        path: 'volunteer',
        loadChildren: () => Promise.all(/*! import() | volunteer-volunteer-module */[__webpack_require__.e("common"), __webpack_require__.e("volunteer-volunteer-module")]).then(__webpack_require__.bind(null, /*! ./volunteer/volunteer.module */ "Iy9B")).then(m => m.VolunteerPageModule)
    },
    {
        path: 'volunteer/volunteer',
        loadChildren: () => Promise.all(/*! import() | volunteer-volunteer-module */[__webpack_require__.e("common"), __webpack_require__.e("volunteer-volunteer-module")]).then(__webpack_require__.bind(null, /*! ./volunteer/volunteer.module */ "Iy9B")).then(m => m.VolunteerPageModule)
    },
    {
        path: 'activity-normal',
        loadChildren: () => Promise.all(/*! import() | activity-normal-activity-normal-module */[__webpack_require__.e("default~activity-normal-activity-normal-module~volunteer-detail-volunteer-detail-module"), __webpack_require__.e("common"), __webpack_require__.e("activity-normal-activity-normal-module")]).then(__webpack_require__.bind(null, /*! ./activity-normal/activity-normal.module */ "vYF8")).then(m => m.ActivityNormalPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() | about-us-about-us-module */ "about-us-about-us-module").then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "00wH")).then(m => m.AboutUsPageModule)
    },
    {
        path: 'receiver-confirm',
        loadChildren: () => Promise.all(/*! import() | modal-receiver-confirm-receiver-confirm-module */[__webpack_require__.e("default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module"), __webpack_require__.e("modal-receiver-confirm-receiver-confirm-module")]).then(__webpack_require__.bind(null, /*! ./modal/receiver-confirm/receiver-confirm.module */ "9BkE")).then(m => m.ReceiverConfirmPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-notification-notification-module */ "modal-notification-notification-module").then(__webpack_require__.bind(null, /*! ./modal/notification/notification.module */ "pGOE")).then(m => m.NotificationPageModule)
    },
    {
        path: 'receive-food-call/:num',
        loadChildren: () => __webpack_require__.e(/*! import() | receive-food-call-receive-food-call-module */ "receive-food-call-receive-food-call-module").then(__webpack_require__.bind(null, /*! ./receive-food-call/receive-food-call.module */ "DgmM")).then(m => m.ReceiveFoodCallPageModule)
    },
    {
        path: 'cancel-allotedfood',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-cancel-allotedfood-cancel-allotedfood-module */ "modal-cancel-allotedfood-cancel-allotedfood-module").then(__webpack_require__.bind(null, /*! ./modal/cancel-allotedfood/cancel-allotedfood.module */ "8LZw")).then(m => m.CancelAllotedfoodPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => Promise.all(/*! import() | modal-terms-conditions-terms-conditions-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-terms-conditions-terms-conditions-module")]).then(__webpack_require__.bind(null, /*! ./modal/terms-conditions/terms-conditions.module */ "i1s7")).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'show-in-between',
        loadChildren: () => Promise.all(/*! import() | show-in-between-show-in-between-module */[__webpack_require__.e("common"), __webpack_require__.e("show-in-between-show-in-between-module")]).then(__webpack_require__.bind(null, /*! ./show-in-between/show-in-between.module */ "1GTf")).then(m => m.ShowInBetweenPageModule)
    },
    {
        path: 'donate-to-volunteer/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | donate-to-volunteer-donate-to-volunteer-module */ "donate-to-volunteer-donate-to-volunteer-module").then(__webpack_require__.bind(null, /*! ./donate-to-volunteer/donate-to-volunteer.module */ "ni/N")).then(m => m.DonateToVolunteerPageModule)
    },
    {
        path: 'assign-food',
        loadChildren: () => __webpack_require__.e(/*! import() | assign-food-assign-food-module */ "assign-food-assign-food-module").then(__webpack_require__.bind(null, /*! ./assign-food/assign-food.module */ "tIis")).then(m => m.AssignFoodPageModule)
    },
    {
        path: 'on-the-way',
        loadChildren: () => Promise.all(/*! import() | modal-on-the-way-on-the-way-module */[__webpack_require__.e("default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a"), __webpack_require__.e("modal-on-the-way-on-the-way-module")]).then(__webpack_require__.bind(null, /*! ./modal/on-the-way/on-the-way.module */ "DUUe")).then(m => m.OnTheWayPageModule)
    },
    {
        path: 'donate-food-pickup-drop/:id/:id2',
        loadChildren: () => Promise.all(/*! import() | donate-food-pickup-drop-donate-food-pickup-drop-module */[__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("common"), __webpack_require__.e("donate-food-pickup-drop-donate-food-pickup-drop-module")]).then(__webpack_require__.bind(null, /*! ./donate-food-pickup-drop/donate-food-pickup-drop.module */ "KDMT")).then(m => m.DonateFoodPickupDropPageModule)
    },
    {
        path: 'choose-donate-option/:id/:id2',
        loadChildren: () => Promise.all(/*! import() | choose-donate-option-choose-donate-option-module */[__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("choose-donate-option-choose-donate-option-module")]).then(__webpack_require__.bind(null, /*! ./choose-donate-option/choose-donate-option.module */ "Saw6")).then(m => m.ChooseDonateOptionPageModule)
    },
    {
        path: 'volunteer-food-request',
        loadChildren: () => Promise.all(/*! import() | volunteer-food-request-volunteer-food-request-module */[__webpack_require__.e("common"), __webpack_require__.e("volunteer-food-request-volunteer-food-request-module")]).then(__webpack_require__.bind(null, /*! ./volunteer-food-request/volunteer-food-request.module */ "b3or")).then(m => m.VolunteerFoodRequestPageModule)
    },
    {
        path: 'volunteer-food-request-content',
        loadChildren: () => Promise.all(/*! import() | modal-volunteer-food-request-content-volunteer-food-request-content-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-volunteer-food-request-content-volunteer-food-request-content-module")]).then(__webpack_require__.bind(null, /*! ./modal/volunteer-food-request-content/volunteer-food-request-content.module */ "f7Ij")).then(m => m.VolunteerFoodRequestContentPageModule)
    },
    {
        path: 'volunteer-detail',
        loadChildren: () => Promise.all(/*! import() | volunteer-detail-volunteer-detail-module */[__webpack_require__.e("default~activity-normal-activity-normal-module~volunteer-detail-volunteer-detail-module"), __webpack_require__.e("volunteer-detail-volunteer-detail-module")]).then(__webpack_require__.bind(null, /*! ./volunteer-detail/volunteer-detail.module */ "INBn")).then(m => m.VolunteerDetailPageModule)
    },
    {
        path: 'near-by-me-location',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-near-by-me-location-near-by-me-location-module */ "modal-near-by-me-location-near-by-me-location-module").then(__webpack_require__.bind(null, /*! ./modal/near-by-me-location/near-by-me-location.module */ "Qoc/")).then(m => m.NearByMeLocationPageModule)
    },
    {
        path: 'push-notification',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-push-notification-push-notification-module */ "modal-push-notification-push-notification-module").then(__webpack_require__.bind(null, /*! ./modal/push-notification/push-notification.module */ "cJEu")).then(m => m.PushNotificationPageModule)
    },
    {
        path: 'searching-volunteer/:id/:id2',
        loadChildren: () => __webpack_require__.e(/*! import() | searching-volunteer-searching-volunteer-module */ "searching-volunteer-searching-volunteer-module").then(__webpack_require__.bind(null, /*! ./searching-volunteer/searching-volunteer.module */ "g8dT")).then(m => m.SearchingVolunteerPageModule)
    },
    {
        path: 'display-accept-request-on-map/:data/:id/:id2',
        loadChildren: () => __webpack_require__.e(/*! import() | display-accept-request-on-map-display-accept-request-on-map-module */ "display-accept-request-on-map-display-accept-request-on-map-module").then(__webpack_require__.bind(null, /*! ./display-accept-request-on-map/display-accept-request-on-map.module */ "U/2Q")).then(m => m.DisplayAcceptRequestOnMapPageModule)
    },
    {
        path: 'choose-screen-after-reject/:id/:rid/:fid',
        loadChildren: () => Promise.all(/*! import() | choose-screen-after-reject-choose-screen-after-reject-module */[__webpack_require__.e("common"), __webpack_require__.e("choose-screen-after-reject-choose-screen-after-reject-module")]).then(__webpack_require__.bind(null, /*! ./choose-screen-after-reject/choose-screen-after-reject.module */ "QaYJ")).then(m => m.ChooseScreenAfterRejectPageModule)
    },
    {
        path: 'conert-to-pickup-success',
        loadChildren: () => Promise.all(/*! import() | modal-conert-to-pickup-success-conert-to-pickup-success-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-conert-to-pickup-success-conert-to-pickup-success-module")]).then(__webpack_require__.bind(null, /*! ./modal/conert-to-pickup-success/conert-to-pickup-success.module */ "QX3W")).then(m => m.ConertToPickupSuccessPageModule)
    },
    {
        path: 'success-deliver-modal',
        loadChildren: () => Promise.all(/*! import() | modal-success-deliver-modal-success-deliver-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-success-deliver-modal-success-deliver-modal-module")]).then(__webpack_require__.bind(null, /*! ./modal/success-deliver-modal/success-deliver-modal.module */ "yXmX")).then(m => m.SuccessDeliverModalPageModule)
    },
    {
        path: 'feedback-form-for-donor/:r_id/:getfood_id',
        loadChildren: () => Promise.all(/*! import() | feedback-form-for-donor-feedback-form-for-donor-module */[__webpack_require__.e("common"), __webpack_require__.e("feedback-form-for-donor-feedback-form-for-donor-module")]).then(__webpack_require__.bind(null, /*! ./feedback-form-for-donor/feedback-form-for-donor.module */ "fp/J")).then(m => m.FeedbackFormForDonorPageModule)
    },
    {
        path: 'deliver-food-volunteer',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-deliver-food-volunteer-deliver-food-volunteer-module */ "modal-deliver-food-volunteer-deliver-food-volunteer-module").then(__webpack_require__.bind(null, /*! ./modal/deliver-food-volunteer/deliver-food-volunteer.module */ "Rhyd")).then(m => m.DeliverFoodVolunteerPageModule)
    },
    {
        path: 'on-the-way-search/:id/:id2',
        loadChildren: () => __webpack_require__.e(/*! import() | on-the-way-search-on-the-way-search-module */ "on-the-way-search-on-the-way-search-module").then(__webpack_require__.bind(null, /*! ./on-the-way-search/on-the-way-search.module */ "BWGN")).then(m => m.OnTheWaySearchPageModule)
    },
    {
        path: 'on-the-way-address/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | on-the-way-address-on-the-way-address-module */ "on-the-way-address-on-the-way-address-module").then(__webpack_require__.bind(null, /*! ./on-the-way-address/on-the-way-address.module */ "cSTq")).then(m => m.OnTheWayAddressPageModule)
    },
    {
        path: 'search-food-screen-two',
        loadChildren: () => Promise.all(/*! import() | search-food-screen-two-search-food-screen-two-module */[__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a"), __webpack_require__.e("common"), __webpack_require__.e("search-food-screen-two-search-food-screen-two-module")]).then(__webpack_require__.bind(null, /*! ./search-food-screen-two/search-food-screen-two.module */ "yNaW")).then(m => m.SearchFoodScreenTwoPageModule)
    },
    {
        path: 'reject-get-food-request',
        loadChildren: () => Promise.all(/*! import() | modal-reject-get-food-request-reject-get-food-request-module */[__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("modal-reject-get-food-request-reject-get-food-request-module")]).then(__webpack_require__.bind(null, /*! ./modal/reject-get-food-request/reject-get-food-request.module */ "SHim")).then(m => m.RejectGetFoodRequestPageModule)
    },
    {
        path: 'common-message',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-common-message-common-message-module */ "modal-common-message-common-message-module").then(__webpack_require__.bind(null, /*! ./modal/common-message/common-message.module */ "kx68")).then(m => m.CommonMessagePageModule)
    },
    {
        path: 'get-food-nearest-donors-two-duplicate/:id/:lat/:lon/:r_id/:mode/:food_type/:getfoodid',
        loadChildren: () => Promise.all(/*! import() | get-food-nearest-donors-two-duplicate-get-food-nearest-donors-two-duplicate-module */[__webpack_require__.e("common"), __webpack_require__.e("get-food-nearest-donors-two-duplicate-get-food-nearest-donors-two-duplicate-module")]).then(__webpack_require__.bind(null, /*! ./get-food-nearest-donors-two-duplicate/get-food-nearest-donors-two-duplicate.module */ "5yZr")).then(m => m.GetFoodNearestDonorsTwoDuplicatePageModule)
    },
    {
        path: 'common-search-screen',
        loadChildren: () => Promise.all(/*! import() | common-search-screen-common-search-screen-module */[__webpack_require__.e("common"), __webpack_require__.e("common-search-screen-common-search-screen-module")]).then(__webpack_require__.bind(null, /*! ./common-search-screen/common-search-screen.module */ "MBg2")).then(m => m.CommonSearchScreenPageModule)
    },
    {
        path: 'onthe-way-msg',
        loadChildren: () => Promise.all(/*! import() | modal-onthe-way-msg-onthe-way-msg-module */[__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("common"), __webpack_require__.e("modal-onthe-way-msg-onthe-way-msg-module")]).then(__webpack_require__.bind(null, /*! ./modal/onthe-way-msg/onthe-way-msg.module */ "PF4X")).then(m => m.OntheWayMsgPageModule)
    },
    {
        path: 'pickup-success-modal',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-pickup-success-modal-pickup-success-modal-module */ "modal-pickup-success-modal-pickup-success-modal-module").then(__webpack_require__.bind(null, /*! ./modal/pickup-success-modal/pickup-success-modal.module */ "AvH9")).then(m => m.PickupSuccessModalPageModule)
    },
    {
        path: 'error-msg-modal',
        loadChildren: () => Promise.all(/*! import() | modal-error-msg-modal-error-msg-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-error-msg-modal-error-msg-modal-module")]).then(__webpack_require__.bind(null, /*! ./modal/error-msg-modal/error-msg-modal.module */ "Beh4")).then(m => m.ErrorMsgModalPageModule)
    },
    {
        path: 'simple-push-notification',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-simple-push-notification-simple-push-notification-module */ "modal-simple-push-notification-simple-push-notification-module").then(__webpack_require__.bind(null, /*! ./modal/simple-push-notification/simple-push-notification.module */ "rdFz")).then(m => m.SimplePushNotificationPageModule)
    },
    {
        path: 'dynamic-msg',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-dynamic-msg-dynamic-msg-module */ "modal-dynamic-msg-dynamic-msg-module").then(__webpack_require__.bind(null, /*! ./modal/dynamic-msg/dynamic-msg.module */ "6PK8")).then(m => m.DynamicMsgPageModule)
    },
    {
        path: 'extact-pin',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-extact-pin-extact-pin-module */ "modal-extact-pin-extact-pin-module").then(__webpack_require__.bind(null, /*! ./modal/extact-pin/extact-pin.module */ "rd63")).then(m => m.ExtactPinPageModule)
    },
    {
        path: 'donate-later-msg',
        loadChildren: () => Promise.all(/*! import() | modal-donate-later-msg-donate-later-msg-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-donate-later-msg-donate-later-msg-module")]).then(__webpack_require__.bind(null, /*! ./modal/donate-later-msg/donate-later-msg.module */ "jiPG")).then(m => m.DonateLaterMsgPageModule)
    },
    {
        path: 'view-feedback/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | view-feedback-view-feedback-module */ "view-feedback-view-feedback-module").then(__webpack_require__.bind(null, /*! ./view-feedback/view-feedback.module */ "vBvZ")).then(m => m.ViewFeedbackPageModule)
    },
    {
        path: 'screen-after-volunteer-not-found/:id/:id2',
        loadChildren: () => Promise.all(/*! import() | screen-after-volunteer-not-found-screen-after-volunteer-not-found-module */[__webpack_require__.e("common"), __webpack_require__.e("screen-after-volunteer-not-found-screen-after-volunteer-not-found-module")]).then(__webpack_require__.bind(null, /*! ./screen-after-volunteer-not-found/screen-after-volunteer-not-found.module */ "Xc7c")).then(m => m.ScreenAfterVolunteerNotFoundPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map