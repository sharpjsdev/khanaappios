(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-donate-option-choose-donate-option-module"],{

/***/ "L4up":
/*!*********************************************************************!*\
  !*** ./src/app/choose-donate-option/choose-donate-option.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2UtZG9uYXRlLW9wdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Saw6":
/*!*********************************************************************!*\
  !*** ./src/app/choose-donate-option/choose-donate-option.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChooseDonateOptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDonateOptionPageModule", function() { return ChooseDonateOptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _choose_donate_option_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-donate-option-routing.module */ "glUc");
/* harmony import */ var _choose_donate_option_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-donate-option.page */ "dACR");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../captcha/captcha.component */ "ekeA");








let ChooseDonateOptionPageModule = class ChooseDonateOptionPageModule {
};
ChooseDonateOptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_donate_option_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseDonateOptionPageRoutingModule"]
        ],
        declarations: [_choose_donate_option_page__WEBPACK_IMPORTED_MODULE_6__["ChooseDonateOptionPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], ChooseDonateOptionPageModule);



/***/ }),

/***/ "Uz90":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-donate-option/choose-donate-option.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width my_custome_theme_width\">\n  <div class=\"big_content_new noto_medium size_18\">\n  </div>\n  <div class=\"horizontal_center\">\n    <a (click)=\"openModalCurrentLocation()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text1}}\n      </button>\n    </a>\n    <a (click)=\"openOnTheWay()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text2}}\n      </button>  \n    </a>\n  </div>\n</div>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar>    \n\t\t<ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n\t\t\t  <img src=\"assets/images/red_footer_home.svg\">\n\t\t\t  <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n\t\t\t  <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text5}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\"> \n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_activity.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text6}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_volunteer.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text7}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>      \n\t</ion-toolbar>\n</ion-footer>\n\n\n  \n\n");

/***/ }),

/***/ "dACR":
/*!*******************************************************************!*\
  !*** ./src/app/choose-donate-option/choose-donate-option.page.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseDonateOptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDonateOptionPage", function() { return ChooseDonateOptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_donate_option_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-donate-option.page.html */ "Uz90");
/* harmony import */ var _choose_donate_option_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-donate-option.page.scss */ "L4up");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_current_location_content_current_location_content_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/current-location-content/current-location-content.page */ "rW5W");









let ChooseDonateOptionPage = class ChooseDonateOptionPage {
    constructor(route, router, fetch, storage, alertController, modalController) {
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.model = {};
        this.notification = [];
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
        this.model.okay = 'okay';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'NEARBY');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'ON_THE_WAY');
        this.model.key_text2 = item2[lang_code];
        let alert_text = res.find(i => i.key_text === 'KEEP_PIN_EXACT_LOCATION');
        this.alert_text = alert_text[lang_code];
        let item3 = res.find(i => i.key_text === 'NO_VOLUNTEER_FOUND');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'CLOSE');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'HOME');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text7 = item7[lang_code];
    }
    showAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                            //this.router.navigate(['/home']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openModalCurrentLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('set_confirm_location_route', JSON.stringify('donate-food'));
            const modal = yield this.modalController.create({
                component: _modal_current_location_content_current_location_content_page__WEBPACK_IMPORTED_MODULE_8__["CurrentLocationContentPage"],
                cssClass: 'custom_current_location_modal_new',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
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
                    this.fetch.test(formData).subscribe(res => {
                        if (res['success'] == true) {
                            if (res['data'].length > 0) {
                                this.router.navigate(['/searching-volunteer', this.model.veg, this.model.nonveg]);
                            }
                            else {
                                this.showAlert(this.model.key_text3);
                                this.router.navigate(['/screen-after-volunteer-not-found', this.model.veg, this.model.nonveg]);
                            }
                        }
                    });
                }
            });
            return yield modal.present();
        });
    }
    openOnTheWay() {
        this.router.navigate(['/on-the-way-search', this.model.veg, this.model.nonveg]);
    }
};
ChooseDonateOptionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
ChooseDonateOptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-donate-option',
        template: _raw_loader_choose_donate_option_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_donate_option_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseDonateOptionPage);



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

/***/ "glUc":
/*!*****************************************************************************!*\
  !*** ./src/app/choose-donate-option/choose-donate-option-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChooseDonateOptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDonateOptionPageRoutingModule", function() { return ChooseDonateOptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _choose_donate_option_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-donate-option.page */ "dACR");




const routes = [
    {
        path: '',
        component: _choose_donate_option_page__WEBPACK_IMPORTED_MODULE_3__["ChooseDonateOptionPage"]
    }
];
let ChooseDonateOptionPageRoutingModule = class ChooseDonateOptionPageRoutingModule {
};
ChooseDonateOptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseDonateOptionPageRoutingModule);



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
//# sourceMappingURL=choose-donate-option-choose-donate-option-module-es2015.js.map