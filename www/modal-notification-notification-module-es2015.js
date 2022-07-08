(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-notification-notification-module"],{

/***/ "AxM2":
/*!*******************************************************************!*\
  !*** ./src/app/modal/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "zvcb");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ "E4DV":
/*!***********************************************************!*\
  !*** ./src/app/modal/notification/notification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */");

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

/***/ "pGOE":
/*!***********************************************************!*\
  !*** ./src/app/modal/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "AxM2");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "zvcb");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../captcha/captcha.component */ "ekeA");








let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "zhLA":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/notification/notification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-captcha></app-captcha>\n<ion-content class=\"modal_content\">\n  <div  style=\"padding-left:30px;padding-right:10px\">  \n   \n  \n    <div class=\"modal_inner\">\n        <p *ngFor=\"let x of notifications;\" style=\"padding:10px;border-bottom:1px solid #ccc;color:#e8604c;\">\n         \n          <span *ngIf=\"x.notification_type == 1\">\n              {{ model.key_text1 }} {{ model.username }}, {{ model.key_text2 }} <span *ngIf=\"x.food_type==1\">{{ model.key_text3 }}</span><span *ngIf=\"x.food_type==2\">{{ model.key_text4 }}</span> {{ model.key_text5 }}.  \n              {{ x.no_of_person }} {{ model.key_text7 }} {{ x.food_receiver_name }} {{ model.key_text6 }}\n          </span>\n          <span *ngIf=\"x.notification_type == 2 && this.model.status==1\">\n            {{ model.key_text8 }}\n          </span>\n          <span *ngIf=\"x.notification_type == 2 && this.model.status==2\">\n            {{ model.key_text9 }}\n          </span>\n          <span *ngIf=\"x.notification_type == 3\">\n            {{ x.food_receiver_name }} {{ model.key_text10 }}\n          </span>\n          <span *ngIf=\"x.notification_type == 5\">\n            {{ model.key_text12 }}\n          </span> \n              \n       \n        </p>\n        <p *ngIf=\"notifications.length == 0\" style=\"text-align: center;\">\n            {{ model.key_text11 }}\n        </p>\n    </div>\n  </div>\n  \n</ion-content> \n<ion-footer>\n\t<ion-toolbar>    \n\t\t<ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n\t\t\t  <img src=\"assets/images/red_footer_home.svg\">\n\t\t\t  <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n\t\t\t  <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text13}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\"> \n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_activity.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text14}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button *ngIf=\"model.is_volunteer== 1\" value=\"volunteer\" [routerLink]=\"['/volunteer-detail']\">\n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_volunteer.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text15}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>      \n\t</ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "zvcb":
/*!*********************************************************!*\
  !*** ./src/app/modal/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.page.html */ "zhLA");
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.page.scss */ "E4DV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");






let NotificationPage = class NotificationPage {
    constructor(fetch, storage) {
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
        this.notifications = [];
    }
    ngOnInit() {
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        // this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'DEAR');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'KINDLY_PACK');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'VEG');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'NON_VEG');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'FOOD_FOR');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'COMING_FOR_PICKUP');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'PEOPLE');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'VOLUNTEER_REGISTER_MSG');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'VOLUNTEER_REJECT_MSG');
        this.model.key_text9 = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'MSG_CANCEL_NOTI');
        this.model.key_text10 = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'NO_NOTIFICATION_FOUND');
        this.model.key_text11 = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'NOTI_RECEIVER');
        this.model.key_text12 = item12[lang_code];
        let item13 = res.find(i => i.key_text === 'HOME');
        this.model.key_text13 = item13[lang_code];
        let item14 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text14 = item14[lang_code];
        let item15 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text15 = item15[lang_code];
        //});
        this.model.user_id = localStorage.getItem('user_id');
        let data = JSON.stringify({ id: this.model.user_id });
        this.fetch.profile(data).subscribe(res => {
            this.model.username = res['username'];
        });
        this.fetch.v_check(this.model.user_id).subscribe(res => {
            if (res.success == true) {
                this.model.status = res.status;
            }
            else {
                this.model.status = 0;
            }
        });
        this.fetch.get_notification(this.model.user_id).subscribe(res => {
            this.notifications = res['data'];
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fetch.read_notification(this.model.user_id).subscribe(res => {
            });
        });
    }
};
NotificationPage.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationPage);



/***/ })

}]);
//# sourceMappingURL=modal-notification-notification-module-es2015.js.map