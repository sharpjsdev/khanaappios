(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-screen-after-reject-choose-screen-after-reject-module"],{

/***/ "QaYJ":
/*!*********************************************************************************!*\
  !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ChooseScreenAfterRejectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseScreenAfterRejectPageModule", function() { return ChooseScreenAfterRejectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _choose_screen_after_reject_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-screen-after-reject-routing.module */ "aYqr");
/* harmony import */ var _choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-screen-after-reject.page */ "zuWJ");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../captcha/captcha.component */ "ekeA");








let ChooseScreenAfterRejectPageModule = class ChooseScreenAfterRejectPageModule {
};
ChooseScreenAfterRejectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_screen_after_reject_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseScreenAfterRejectPageRoutingModule"]
        ],
        declarations: [_choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_6__["ChooseScreenAfterRejectPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], ChooseScreenAfterRejectPageModule);



/***/ }),

/***/ "VOrp":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-screen-after-reject/choose-screen-after-reject.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width my_custome_theme_width\">\n  <div class=\"big_content_new noto_medium size_18\">\n  </div>\n  <div class=\"horizontal_center\">\n    <a (click)=\"pickupRequest()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text1}}\n      </button>\n    </a>\n    <a (click)=\"donateLater()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text2}}\n      </button>  \n    </a>\n  </div>\n</div>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar>    \n\t\t<ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n\t\t\t  <img src=\"assets/images/red_footer_home.svg\">\n\t\t\t  <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n\t\t\t  <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text5}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\"> \n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_activity.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text6}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_volunteer.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text7}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>      \n\t</ion-toolbar>\n</ion-footer>\n\n\n  \n\n");

/***/ }),

/***/ "aYqr":
/*!*****************************************************************************************!*\
  !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChooseScreenAfterRejectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseScreenAfterRejectPageRoutingModule", function() { return ChooseScreenAfterRejectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-screen-after-reject.page */ "zuWJ");




const routes = [
    {
        path: '',
        component: _choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_3__["ChooseScreenAfterRejectPage"]
    }
];
let ChooseScreenAfterRejectPageRoutingModule = class ChooseScreenAfterRejectPageRoutingModule {
};
ChooseScreenAfterRejectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseScreenAfterRejectPageRoutingModule);



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

/***/ "qvSO":
/*!*********************************************************************************!*\
  !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2Utc2NyZWVuLWFmdGVyLXJlamVjdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "zuWJ":
/*!*******************************************************************************!*\
  !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ChooseScreenAfterRejectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseScreenAfterRejectPage", function() { return ChooseScreenAfterRejectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_screen_after_reject_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-screen-after-reject.page.html */ "VOrp");
/* harmony import */ var _choose_screen_after_reject_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-screen-after-reject.page.scss */ "qvSO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_conert_to_pickup_success_conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/conert-to-pickup-success/conert-to-pickup-success.page */ "AgMY");
/* harmony import */ var _modal_donate_later_msg_donate_later_msg_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/donate-later-msg/donate-later-msg.page */ "Cqxs");











let ChooseScreenAfterRejectPage = class ChooseScreenAfterRejectPage {
    constructor(http, route, router, fetch, storage, modalController) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.modalController = modalController;
        this.model = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        var id = parseInt(this.route.snapshot.params['id']);
        var rid = parseInt(this.route.snapshot.params['rid']);
        var fid = parseInt(this.route.snapshot.params['fid']);
        this.model.food_id = id;
        this.model.receiver = rid;
        this.model.fid = fid;
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'CONVERT_REQUEST_TO_PICKUP');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'I_WILL_DONATE_LATER');
        this.model.key_text2 = item2[lang_code];
    }
    successModal(food) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_conert_to_pickup_success_conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_9__["ConertToPickupSuccessPage"],
                cssClass: 'custom_current_location_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title",
                    "food": food
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    donateLaterModel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_donate_later_msg_donate_later_msg_page__WEBPACK_IMPORTED_MODULE_10__["DonateLaterMsgPage"],
                cssClass: 'custom_current_location_modal empty_message_height',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    pickupRequest() {
        var formData = new FormData();
        formData.append("food_id", this.model.food_id);
        formData.append("receiver_id", this.model.receiver);
        formData.append("fid", this.model.fid);
        this.fetch.convert_to_pickup_request(formData).subscribe(res => {
            if (res['success'] == true) {
                this.successModal(res['data']);
                this.router.navigate(['/home']);
            }
        });
    }
    donateLater() {
        var formData = new FormData();
        formData.append("food_id", this.model.food_id);
        formData.append("receiver_id", this.model.receiver);
        formData.append("fid", this.model.fid);
        this.fetch.donate_later_food(formData).subscribe(res => {
            if (res['success'] == true) {
                this.donateLaterModel();
                this.router.navigate(['/home']);
            }
        });
    }
};
ChooseScreenAfterRejectPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
ChooseScreenAfterRejectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-screen-after-reject',
        template: _raw_loader_choose_screen_after_reject_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_screen_after_reject_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseScreenAfterRejectPage);



/***/ })

}]);
//# sourceMappingURL=choose-screen-after-reject-choose-screen-after-reject-module-es2015.js.map