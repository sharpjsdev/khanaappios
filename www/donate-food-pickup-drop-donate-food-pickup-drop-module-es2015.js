(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-food-pickup-drop-donate-food-pickup-drop-module"],{

/***/ "6gwJ":
/*!***********************************************************************************!*\
  !*** ./src/app/donate-food-pickup-drop/donate-food-pickup-drop-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DonateFoodPickupDropPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodPickupDropPageRoutingModule", function() { return DonateFoodPickupDropPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _donate_food_pickup_drop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donate-food-pickup-drop.page */ "PxVs");




const routes = [
    {
        path: '',
        component: _donate_food_pickup_drop_page__WEBPACK_IMPORTED_MODULE_3__["DonateFoodPickupDropPage"]
    }
];
let DonateFoodPickupDropPageRoutingModule = class DonateFoodPickupDropPageRoutingModule {
};
DonateFoodPickupDropPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonateFoodPickupDropPageRoutingModule);



/***/ }),

/***/ "KDMT":
/*!***************************************************************************!*\
  !*** ./src/app/donate-food-pickup-drop/donate-food-pickup-drop.module.ts ***!
  \***************************************************************************/
/*! exports provided: DonateFoodPickupDropPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodPickupDropPageModule", function() { return DonateFoodPickupDropPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _donate_food_pickup_drop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donate-food-pickup-drop-routing.module */ "6gwJ");
/* harmony import */ var _donate_food_pickup_drop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-food-pickup-drop.page */ "PxVs");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../captcha/captcha.component */ "ekeA");








let DonateFoodPickupDropPageModule = class DonateFoodPickupDropPageModule {
};
DonateFoodPickupDropPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _donate_food_pickup_drop_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonateFoodPickupDropPageRoutingModule"]
        ],
        declarations: [_donate_food_pickup_drop_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodPickupDropPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], DonateFoodPickupDropPageModule);



/***/ }),

/***/ "PxVs":
/*!*************************************************************************!*\
  !*** ./src/app/donate-food-pickup-drop/donate-food-pickup-drop.page.ts ***!
  \*************************************************************************/
/*! exports provided: DonateFoodPickupDropPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodPickupDropPage", function() { return DonateFoodPickupDropPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donate_food_pickup_drop_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donate-food-pickup-drop.page.html */ "dLbm");
/* harmony import */ var _donate_food_pickup_drop_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate-food-pickup-drop.page.scss */ "zPuP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_current_location_content_current_location_content_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/current-location-content/current-location-content.page */ "rW5W");
/* harmony import */ var _modal_donate_food_content_donate_food_content_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/donate-food-content/donate-food-content.page */ "6kjK");
/* harmony import */ var _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/error-msg-modal/error-msg-modal.page */ "HQjg");











let DonateFoodPickupDropPage = class DonateFoodPickupDropPage {
    constructor(route, router, fetch, storage, alertController, modalController) {
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.model = {};
        this.notification = [];
        this.saved_address = [];
        this.donate_address = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        var id = parseInt(this.route.snapshot.params['id']);
        var id2 = parseInt(this.route.snapshot.params['id2']);
        this.model.veg = id;
        this.model.nonveg = id2;
        if (id != 0) {
            this.fetch.reviewFood(id).subscribe(res => {
                this.veg_food = res['data'];
            });
        }
        if (id2 != 0) {
            this.fetch.reviewFood(id2).subscribe(res => {
                this.nonveg_food = res['data'];
            });
        }
        this.model.alert_text = 'Please fill all the details';
        this.model.okay = 'okay';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        ///this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'REQUEST_PICKUP');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'I_WILL_DROP');
        this.model.key_text2 = item2[lang_code];
        ;
        let alert_text = res.find(i => i.key_text === 'KEEP_PIN_EXACT_LOCATION');
        this.alert_text = alert_text[lang_code];
        ;
        let item5 = res.find(i => i.key_text === 'HOME');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text7 = item7[lang_code];
    }
    openModalCurrentLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('set_confirm_location_route', JSON.stringify('donate-food'));
            const modal = yield this.modalController.create({
                component: _modal_current_location_content_current_location_content_page__WEBPACK_IMPORTED_MODULE_8__["CurrentLocationContentPage"],
                cssClass: 'custom_current_location_modal_new',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "donate_food"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    this.location_data = JSON.parse(this.dataReturned);
                    this.donate_address = this.dataReturned;
                    var formData = new FormData();
                    formData.append("id", this.model.veg);
                    formData.append("id2", this.model.nonveg);
                    formData.append("donate_address", this.donate_address);
                    let data = JSON.stringify({ 'id': this.model.veg, 'id2': this.model.nonveg, 'donate_address': this.donate_address });
                    this.fetch.donate_food_location_new(formData).subscribe(res => {
                        this.model.search = false;
                        this.openModalDonateFood();
                    });
                }
            });
            return yield modal.present();
        });
    }
    openModalDonateFood() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_donate_food_content_donate_food_content_page__WEBPACK_IMPORTED_MODULE_9__["DonateFoodContentPage"],
                cssClass: 'custom_donate_food_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title",
                    "veg": this.model.veg,
                    "nonveg": this.model.nonveg,
                    "veg_food": this.veg_food,
                    "nonveg_food": this.nonveg_food
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                localStorage.removeItem('donate_address_type');
                localStorage.removeItem('set_confirm_location_route');
                localStorage.removeItem('donor_location');
                this.router.navigate(['/home']);
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    presentConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_10__["ErrorMsgModalPage"],
                cssClass: 'error_modal_css',
                backdropDismiss: false,
                componentProps: {
                    "msg": this.alert_text,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.openModalCurrentLocation();
            });
            return yield modal.present();
        });
    }
    nextScreen() {
        this.router.navigate(['/choose-donate-option', this.model.veg, this.model.nonveg]);
    }
};
DonateFoodPickupDropPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
DonateFoodPickupDropPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-food-pickup-drop',
        template: _raw_loader_donate_food_pickup_drop_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_food_pickup_drop_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonateFoodPickupDropPage);



/***/ }),

/***/ "dLbm":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate-food-pickup-drop/donate-food-pickup-drop.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width my_custome_theme_width\">\n  <div class=\"big_content_new noto_medium size_18\">\n  </div>\n  <div class=\"horizontal_center\">\n    <a (click)=\"presentConfirm()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text1}}\n      </button>\n    </a>\n    <a (click)=\"nextScreen()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text2}}\n      </button>  \n    </a>\n  </div>\n</div>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar>    \n\t\t<ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n\t\t\t  <img src=\"assets/images/red_footer_home.svg\">\n\t\t\t  <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n\t\t\t  <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text5}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\"> \n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_activity.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text6}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"volunteer\"*ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_volunteer.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text7}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>      \n\t</ion-toolbar>\n</ion-footer>\n\n\n  \n\n");

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

/***/ "zPuP":
/*!***************************************************************************!*\
  !*** ./src/app/donate-food-pickup-drop/donate-food-pickup-drop.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb25hdGUtZm9vZC1waWNrdXAtZHJvcC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=donate-food-pickup-drop-donate-food-pickup-drop-module-es2015.js.map