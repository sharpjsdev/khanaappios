(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-food-nearest-donors-two-get-food-nearest-donors-two-module"],{

/***/ "3r+M":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n  \n    <ion-buttons slot=\"end\" (click)=\"openModalNotification()\">\n      <span *ngIf=\"notification.length>0\" style=\"position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;\n        right: 3px;\n        text-align: center;\"></span>      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"map_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<app-captcha></app-captcha>\n<ion-content>\n  <div class=\"custom_map_design\">\n  <div class=\"ion-padding\" style=\"margin-left: 20px; padding: 5px !important;\">\n    <div class=\"map-icon\">\n      <img src=\"assets/images/location_black.svg\">\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12 address_size\">\n        {{model.colony_name}} \n        <!-- {{model.city}}, {{model.state}} <br>\n        {{model.postalCode}}, {{model.country}} -->\n      </div> \n    </div>\n  </div>\n  \n  <!-- <div class=\"map volunteer_location\">    \n    <img src=\"assets/images/map_volunteer.svg\">\n  </div>  -->\n  <div class=\"ion-padding\" style=\"margin-left: 20px;padding: 5px !important;\">\n    <div class=\"map-icon\">\n      <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12\">\n        Wearning a mask in some public spaces is required due to COVID - 19 \n      </div> \n    </div>\n  </div>\n  <div #map id=\"map\"></div>\n  <br>\n  <ion-row>\n    <ion-col size=\"12\">\n      <a class=\"size_15 medium direction\"  (click)=\"openMap()\"><ion-icon name=\"navigate-outline\"></ion-icon> {{model.key_text16}}</a> \n    </ion-col>\n  </ion-row>\n  \n  <br>\n  <div class=\"ion-padding theme_width\">  \n    \n    <ul class=\"size_15 medium\">\n      <li>{{model.food_type}} {{model.key_text13}} {{model.key_text14}} {{model.total_food_for}} {{model.key_text15}}</li>\n      \n      <br>\n      <li style=\"padding-right: 100px;\">{{model.key_text12}} - {{model.shop_name}}</li>      \n       <a class=\"size_15 medium call\" (click)=\"call()\">{{model.key_text17}}</a> \n       \n\t   \n    </ul>\n\n\n  </div>\n\n </div>\n  \n  </ion-content>\n  <ion-footer style=\"padding-top: 0px!important;\">\n    <div class=\"medium size_16\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_reject_btn new_btn_css\"  (click)=\"pickup_status(0)\">{{model.key_text10}}</button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_accept_btn new_btn_css\"  (click)=\"pickup_status(1)\">{{model.key_text11}}</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-footer>\n\n\n \n  ");

/***/ }),

/***/ "K8Ou":
/*!***********************************************************************************!*\
  !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.module.ts ***!
  \***********************************************************************************/
/*! exports provided: GetFoodNearestDonorsTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoPageModule", function() { return GetFoodNearestDonorsTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _get_food_nearest_donors_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-food-nearest-donors-two-routing.module */ "eANI");
/* harmony import */ var _get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-food-nearest-donors-two.page */ "wAmT");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../captcha/captcha.component */ "ekeA");








let GetFoodNearestDonorsTwoPageModule = class GetFoodNearestDonorsTwoPageModule {
};
GetFoodNearestDonorsTwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _get_food_nearest_donors_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetFoodNearestDonorsTwoPageRoutingModule"]
        ],
        declarations: [_get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_6__["GetFoodNearestDonorsTwoPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], GetFoodNearestDonorsTwoPageModule);



/***/ }),

/***/ "bYHX":
/*!***********************************************************************************!*\
  !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 45%;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dldC1mb29kLW5lYXJlc3QtZG9ub3JzLXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0MsZUFBQTtBQUVEOztBQUFBO0VBQ0MsaUJBQUE7QUFHRCIsImZpbGUiOiJnZXQtZm9vZC1uZWFyZXN0LWRvbm9ycy10d28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NSU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcHBpbmVye1xuXHQtLWNvbG9yOiM0MTlCOTU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcGlubmVyX3Bvc2l0aW9ue1xuXHRtYXJnaW4tdG9wOjI1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "eANI":
/*!*******************************************************************************************!*\
  !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: GetFoodNearestDonorsTwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoPageRoutingModule", function() { return GetFoodNearestDonorsTwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-food-nearest-donors-two.page */ "wAmT");




const routes = [
    {
        path: '',
        component: _get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_3__["GetFoodNearestDonorsTwoPage"]
    }
];
let GetFoodNearestDonorsTwoPageRoutingModule = class GetFoodNearestDonorsTwoPageRoutingModule {
};
GetFoodNearestDonorsTwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetFoodNearestDonorsTwoPageRoutingModule);



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

/***/ "epfR":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"modal_content\">\n  <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  <br>\n  <div class=\"ion-padding\">   \n  \n    <div class=\"modal_inner\">\n      <div class=\"regular medium size_16\" style=\"border-bottom: 1px solid;\"><label>{{model.key_text2}} <span style=\"color:red\">*</span></label></div><br/>\n\n      <ion-radio-group (ionChange)=\"select_reason($event)\"> \n        <ion-item *ngFor=\"let x of reasons\" lines=\"none\" class=\"cancel_radio\">\n          <ion-label class=\"regular size_14\">{{ x.label }}</ion-label>\n          <ion-radio name=\"reason\" slot=\"start\" value=\"{{x.label}}\" (ionChange)=\"radioGroupChange($event)\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <!--<label *ngFor=\"let x of reasons\">\n        <input  name=\"reason\" type=\"radio\" value=\"{{x.label}}\"/>{{ x.label }}\n        <br/>\n      </label>-->\n\n      <div id=\"reason_msg\" style=\"color:red;display:none;\">Reason is required</div><br/>\n      <label>{{model.key_text3}}</label><br/>      \n      <div class=\"btn-group\">\n        <ion-textarea rows=\"4\" name=\"comments\" placeholder=\"\" class=\"custom_textarea\" id=\"comments\"></ion-textarea>\n      </div>      \n      \n    </div>\n  </div>\n</ion-content> \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"cancelDonation()\" *ngIf=\"!model.search\" class=\"app_btn\">{{model.key_text1}}</button>\n        <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>      \n    </div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "hHBB":
/*!*********************************************************************!*\
  !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.ts ***!
  \*********************************************************************/
/*! exports provided: CancelAllotedfoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelAllotedfoodPage", function() { return CancelAllotedfoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cancel_allotedfood_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cancel-allotedfood.page.html */ "epfR");
/* harmony import */ var _cancel_allotedfood_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-allotedfood.page.scss */ "m52P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let CancelAllotedfoodPage = class CancelAllotedfoodPage {
    constructor(modalController, navParams, storage, fetch) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.storage = storage;
        this.fetch = fetch;
        this.model = {};
        this.reasons = [];
    }
    ngOnInit() {
        this.model.search = false;
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        this.fetch.get_reasons(lang_code).subscribe(res => {
            res['data'].forEach((val, i) => {
                this.reasons.push({ label: val['' + lang_code + ''] });
            });
        });
        let res = this.storage.getScope();
        if (this.paramTitle == 'get_food') {
            let item1 = res.find(i => i.key_text === 'CANCEL_PICK_UP');
            this.model.key_text1 = item1[lang_code];
        }
        else {
            let item1 = res.find(i => i.key_text === 'CANCEL_DROP');
            this.model.key_text1 = item1[lang_code];
        }
        let item2 = res.find(i => i.key_text === 'REASON_FOR_CANCELLATION');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'COMMENT');
        this.model.key_text3 = item3[lang_code];
    }
    select_reason(value) {
        this.model.selected_reason = value.detail.value;
        ;
    }
    cancelDonation() {
        this.model.search = true;
        let reason = this.model.selected_reason;
        if (!reason) {
            $('#reason_msg').show();
            this.model.search = false;
        }
        else {
            $('#reason_msg').hide();
            let comment = $('#comments').val();
            let data = JSON.stringify({ 'id': this.id, 'reason': reason, 'comment': comment });
            if (this.type == "get_food") {
                this.fetch.get_food_cancel_alloted_request(data).subscribe(res => {
                    this.model.search = false;
                    this.closeModal(1);
                });
            }
            else {
                this.fetch.cancel_alloted_request(data).subscribe(res => {
                    this.model.search = false;
                    this.closeModal(1);
                });
            }
        }
    }
    closeModal(isDone) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = isDone;
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
CancelAllotedfoodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] }
];
CancelAllotedfoodPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    paramTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CancelAllotedfoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cancel-allotedfood',
        template: _raw_loader_cancel_allotedfood_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cancel_allotedfood_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CancelAllotedfoodPage);



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

/***/ "m52P":
/*!***********************************************************************!*\
  !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-radio-group ion-item {\n  margin-left: -19px;\n  margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbmNlbC1hbGxvdGVkZm9vZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoiY2FuY2VsLWFsbG90ZWRmb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufSJdfQ== */");

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

/***/ "wAmT":
/*!*********************************************************************************!*\
  !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.page.ts ***!
  \*********************************************************************************/
/*! exports provided: GetFoodNearestDonorsTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoPage", function() { return GetFoodNearestDonorsTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_get_food_nearest_donors_two_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./get-food-nearest-donors-two.page.html */ "3r+M");
/* harmony import */ var _get_food_nearest_donors_two_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-food-nearest-donors-two.page.scss */ "bYHX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/cancel-allotedfood/cancel-allotedfood.page */ "hHBB");
/* harmony import */ var _modal_success_deliver_modal_success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal/success-deliver-modal/success-deliver-modal.page */ "br8U");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "ORb9");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
















let GetFoodNearestDonorsTwoPage = class GetFoodNearestDonorsTwoPage {
    constructor(modalController, http, route, router, fetch, storage, geolocation, alertCtrl, browserTab, callNumber, platform) {
        this.modalController = modalController;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.browserTab = browserTab;
        this.callNumber = callNumber;
        this.platform = platform;
        this.model = {};
        this.notification = [];
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directions = [];
        this.polylines = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        $("#map_location_spinner").show();
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        var infowindow = new google.maps.InfoWindow();
        var renderer = new google.maps.DirectionsRenderer({
            suppressPolylines: true,
            infoWindow: infowindow,
        });
        this.model.latitude = '';
        this.model.longitude = '';
        this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
        var food_id = this.route.snapshot.params['id'];
        var r_lat = this.route.snapshot.params['lat'];
        var r_lon = this.route.snapshot.params['lon'];
        this.model.r_id = this.route.snapshot.params['r_id'];
        this.model.d_food_type = this.route.snapshot.params['food_type'];
        this.model.getfood_id = this.route.snapshot.params['getfoodid'];
        if (this.model.d_food_type == 1 || this.model.d_food_type == 3) {
            this.model.food_type = 'Veg.';
        }
        else if (this.model.d_food_type == 2) {
            this.model.food_type = 'Non-Veg.';
        }
        this.l1 = r_lat;
        this.l2 = r_lon;
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'DONOR_NAME');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'CANCEL_PICK_UP');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'FOOD_PICKED_UP');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'HOME');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'CANCEL_FOOD_REQUEST');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'WANT_FOOD');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'DONT_WANT_FOOD');
        this.model.key_text9 = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'CANCEL_DROP');
        this.model.key_text10 = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'FOOD_DROPPED');
        this.model.key_text11 = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'SHOP_NAME1');
        this.model.key_text12 = item12[lang_code];
        let item13 = res.find(i => i.key_text === 'FOOD');
        this.model.key_text13 = item13[lang_code];
        let item14 = res.find(i => i.key_text === 'REQUESTED_FOR');
        this.model.key_text14 = item14[lang_code];
        let item15 = res.find(i => i.key_text === 'PERSON');
        this.model.key_text15 = item15[lang_code];
        let item16 = res.find(i => i.key_text === 'DIRECTION');
        this.model.key_text16 = item16[lang_code];
        let item17 = res.find(i => i.key_text === 'CALL');
        this.model.key_text17 = item17[lang_code];
        //});
        var mode = this.route.snapshot.params['mode'];
        this.fetch.get_volunteer_detail(this.model.getfood_id).subscribe(res => {
            console.log(res.data);
            this.model.colony_name = res.data.colony_name;
            this.model.city = res.data.city;
            this.model.state = res.data.state;
            this.model.country = res.data.country;
            this.model.postalCode = res.data.postalCode;
            var no_of_person = localStorage.getItem('temp_total_food');
            this.model.total_food_for = no_of_person;
            this.model.username = res.data.username;
            //this.model.latitude = res.data.latitude;
            //this.model.longitude = res.data.longitude;
            this.model.donate_food_id = res.data.donate_food_id;
            //console.log(this.model.food_data);
            this.model.donar_id = res.data.donor_id;
            this.model.shop_name = res.data.shop_stall_name;
            let donar = JSON.stringify({ 'id': res.data.app_user_id });
            this.fetch.profile(donar).subscribe(res => {
                this.model.mobile_number = res['mobile_no'];
            });
            let receiver = JSON.stringify({ 'id': this.model.user_id });
            this.fetch.profile(receiver).subscribe(res => {
                this.model.loged_in_user = res['username'];
            });
            this.fetch.get_donate_food(food_id).subscribe(f_d => {
                if (f_d['success'] == true) {
                    this.model.latitude = f_d.data.don_lat;
                    this.model.longitude = f_d.data.don_lng;
                    console.log('my', this.model.latitude);
                    console.log('my', this.model.longitude);
                    if (this.model.latitude != '' && this.model.longitude != '') {
                        $("#map_location_spinner").hide();
                        console.log('receiver lat' + r_lat);
                        console.log('receiver lat' + r_lon);
                        console.log('donor lat' + this.model.latitude);
                        console.log('donor long' + this.model.longitude);
                        this.geolocation.getCurrentPosition().then((resp) => {
                            //console.log(res.data.latitude);
                            //console.log(res.data.longitude);
                            let latLng = new google.maps.LatLng(this.model.latitude, this.model.longitude);
                            let mapOptions = {
                                center: latLng,
                                zoom: 15,
                                mapTypeId: google.maps.MapTypeId.ROADMAP
                            };
                            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                            let directionsService = new google.maps.DirectionsService;
                            let directionsDisplay = new google.maps.DirectionsRenderer;
                            directionsDisplay.setMap(this.map);
                            //directionsDisplay.setPanel(this.directionsPanel.nativeElement);
                            directionsService.route({
                                origin: r_lat + ", " + r_lon,
                                destination: this.model.latitude + ", " + this.model.longitude,
                                travelMode: google.maps.TravelMode[mode],
                                provideRouteAlternatives: true,
                            }, (res, status) => {
                                if (status == google.maps.DirectionsStatus.OK) {
                                    console.log(res);
                                    renderer.setDirections(res);
                                    renderer.setMap(this.map);
                                    for (var i = 0; i < this.polylines.length; i++) {
                                        this.polylines[i].setMap(null);
                                    }
                                    for (var i = 0; i < res.routes.length; i++) {
                                        var fastest = Number.MAX_VALUE, shortest = Number.MAX_VALUE;
                                        res.routes.forEach(function (rou, index) {
                                            console.log("distance of route " + index + ": ", rou.legs[0].distance.value);
                                            console.log("duration of route " + index + ": ", rou.legs[0].duration.value);
                                            if (rou.legs[0].distance.value < shortest)
                                                shortest = rou.legs[0].distance.value;
                                            if (rou.legs[0].duration.value < fastest)
                                                fastest = rou.legs[0].duration.value;
                                        });
                                        var polylineOptions = {
                                            strokeColor: res.routes[i].legs[0].duration.value == fastest ? "#22A7F0" : res.routes[i].legs[0].distance.value == shortest ? "#585858" : "#585858",
                                            strokeOpacity: res.routes[i].legs[0].duration.value == fastest ? 0.8 : res.routes[i].legs[0].distance.value == shortest ? 0.9 : 0.5,
                                            strokeWeight: res.routes[i].legs[0].duration.value == fastest ? 9 : res.routes[i].legs[0].distance.value == shortest ? 8 : 3,
                                        };
                                        this.renderDirectionsPolylines(res.routes[i], polylineOptions);
                                    }
                                }
                                else {
                                    console.warn(status);
                                }
                            });
                        });
                    }
                }
            });
        });
    }
    renderDirectionsPolylines(response, polylineOptions) {
        console.log(response);
        var infowindow = new google.maps.InfoWindow();
        var legs = response.legs;
        for (var i = 0; i < legs.length; i++) {
            var steps = legs[i].steps;
            for (var j = 0; j < steps.length; j++) {
                var nextSegment = steps[j].path;
                var stepPolyline = new google.maps.Polyline(polylineOptions);
                for (var k = 0; k < nextSegment.length; k++) {
                    stepPolyline.getPath().push(nextSegment[k]);
                }
                this.polylines.push(stepPolyline);
                stepPolyline.setMap(this.map);
                // route click listeners, different one on each step
                /* infowindow2.setContent(response.legs[0].duration.text);
                var step = 6;
                infowindow2.setPosition(response.legs[0].steps[step].end_location);
                infowindow2.open(this.map); */
                google.maps.event.addListener(stepPolyline, 'click', function (evt) {
                    console.log(response.legs[0].duration.text);
                    infowindow.setContent(response.legs[0].duration.text);
                    infowindow.setPosition(evt.latLng);
                    infowindow.open(this.map);
                });
            }
        }
    }
    pickup_status(val) {
        //console.log(val);
        if (val == 1) {
            let data = JSON.stringify({ 'receiver_id': this.model.r_id, 'donor_id': this.model.donar_id, 'getFood_id': this.model.getfood_id });
            this.fetch.pickup_food(data).subscribe(res => {
                //console.log(res);
                if (res.success == true) {
                    localStorage.removeItem('receiver_food_type');
                    localStorage.removeItem('set_confirm_location_route');
                    localStorage.removeItem('receiver_location');
                    localStorage.removeItem('food_for_no_of_person');
                    this.pickupRequestSuccessModal(res.data, this.model.getfood_id);
                    //this.router.navigate(['/feedback-form',res.data,this.model.getfood_id]);
                }
            });
        }
        else {
            // this.presentConfirm();
            this.cancelAllotedRequest(this.model.getfood_id);
            /* localStorage.removeItem('receiver_food_type');
            localStorage.removeItem('set_confirm_location_route');
            localStorage.removeItem('receiver_location');
            localStorage.removeItem('food_for_no_of_person');
            this.router.navigate(['/home']); */
        }
    }
    call() {
        let data = JSON.stringify({ 'caller_id': this.model.user_id, 'callee_mobile_no': this.model.mobile_number });
        $('#add_location_spinner').show();
        this.fetch.add_call_detail(data).subscribe(res => {
            this.callNumber.callNumber(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].phone_no, true)
                .then(res => { $('#add_location_spinner').show(); console.log('Launched dialer!', res); })
                .catch(err => console.log('Error launching dialer', err));
        });
    }
    cancelAllotedRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_10__["CancelAllotedfoodPage"],
                cssClass: 'custom_filter_modal cancel_allot_food_popup',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title",
                    "id": id,
                    "type": 'donate_food'
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    if (this.dataReturned == 1) {
                        // this.ngOnInit();
                        this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                        var no_of_person = localStorage.getItem('temp_total_food');
                        var food_id = this.route.snapshot.params['id'];
                        let data = JSON.stringify({ 'food_id': food_id, 'logged_in_user': this.model.loged_in_user, 'no_of_person': no_of_person, 'app_user_id': this.model.user_id, 'food_type': this.model.d_food_type, 'notification_type': 3, 'to': this.model.donar_id, 'from': this.model.user_id, 'getFoodId': this.model.getfood_id });
                        //console.log(data);
                        this.fetch.notify_donar_donate(data).subscribe(res => {
                            this.router.navigate(['/home']);
                        });
                    }
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    pickupRequestSuccessModal(data, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_success_deliver_modal_success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_11__["SuccessDeliverModalPage"],
                cssClass: 'custom_filter_modal cancel_allot_food_popup',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title",
                    "id": id,
                    "data": data
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    presentConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: this.model.key_text7,
                buttons: [
                    {
                        text: this.model.key_text9,
                        handler: () => {
                            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                            var no_of_person = localStorage.getItem('temp_total_food');
                            var food_id = this.route.snapshot.params['id'];
                            let data = JSON.stringify({ 'food_id': food_id, 'logged_in_user': this.model.loged_in_user, 'no_of_person': no_of_person, 'app_user_id': this.model.user_id, 'food_type': this.model.d_food_type, 'notification_type': 3, 'to': this.model.donar_id, 'from': this.model.user_id, 'getFoodId': this.model.getfood_id });
                            //console.log(data);
                            this.fetch.notify_donar(data).subscribe(res => {
                                this.router.navigate(['/home']);
                            });
                        }
                    },
                    {
                        text: this.model.key_text8,
                        handler: () => {
                            //localStorage.removeItem('receiver_food_type'); 
                            //localStorage.removeItem('set_confirm_location_route'); 
                            //localStorage.removeItem('receiver_location'); 
                            //localStorage.removeItem('food_for_no_of_person'); 
                            //this.router.navigate(['/home']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openMap() {
        let destination = this.l1 + ',' + this.l2;
        //window.open('maps://?q=' + destination, '_system');
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + destination, '_system');
        }
        else {
            let label = encodeURI('My Label');
            window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
        }
    }
};
GetFoodNearestDonorsTwoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_12__["BrowserTab"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] }
];
GetFoodNearestDonorsTwoPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
GetFoodNearestDonorsTwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-food-nearest-donors-two',
        template: _raw_loader_get_food_nearest_donors_two_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"]],
        styles: [_get_food_nearest_donors_two_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetFoodNearestDonorsTwoPage);



/***/ })

}]);
//# sourceMappingURL=get-food-nearest-donors-two-get-food-nearest-donors-two-module-es2015.js.map