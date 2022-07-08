(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-number-mobile-number-module"],{

/***/ "2UAd":
/*!*******************************************************!*\
  !*** ./src/app/mobile-number/mobile-number.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbnVtYmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "DHuj":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-number/mobile-number.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<div class=\"big_header\">\n  <div class=\"ion-padding\">\n    <div class=\"title light poiret\">\n      {{app_title}}\n    </div>\n    <div class=\"big_header_bottom regular size_18\">\n      {{this.page_key1}}<br>\n      {{this.page_key2}}\n    </div>\n  </div>\n</div>\n\n<div class=\"ion-padding\">\n  <div class=\"app_input_text center_input vertical_center\">\n    <input type=\"number\" placeholder=\"{{mobile_no}}\" [(ngModel)]='value' (input)='check_no($event.target.value)' class=\"check_number\"  (ionChange)=\"check_no(value)\">\n    <img src=\"assets/images/done.svg\" class=\"green_check\" id=\"right\" style=\"display:none\" >\n    <img src=\"assets/images/wrong_sign.svg\" class=\"green_check\" id=\"wrong\"  style=\"display:none\" >\n  </div>  \n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n\t   <button class=\"app_btn\" (click)=\"save()\">{{next_btn}}</button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n\n");

/***/ }),

/***/ "DTUL":
/*!*****************************************************!*\
  !*** ./src/app/mobile-number/mobile-number.page.ts ***!
  \*****************************************************/
/*! exports provided: MobileNumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNumberPage", function() { return MobileNumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mobile_number_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mobile-number.page.html */ "DHuj");
/* harmony import */ var _mobile_number_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-number.page.scss */ "2UAd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _error_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error-msg.service */ "ElZd");










let MobileNumberPage = class MobileNumberPage {
    constructor(errorMsg, storage, http, route, router, fetch, alertController) {
        this.errorMsg = errorMsg;
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.alertController = alertController;
        this.model = {};
        this.next_btn = {};
    }
    ngOnInit() {
        this.model.mobile_no = '';
    }
    ionViewWillEnter() {
        this.next_btn = 'Next';
        this.app_title = 'Khanaa.app';
        this.page_key1 = 'Enter your Mobile No.';
        this.page_key2 = 'for verification';
        this.mobile_no = 'Mobile No.';
        this.okay = "Okay";
        this.model.verify_mobile = "Please enter a valid 10 digit mobile number";
        this.alert_text = "Please enter mobile number";
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'NEXT');
        this.next_btn = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'KHANAA_APP');
        this.app_title = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'ENTER_YOUR_MOBILE_NO.');
        this.page_key1 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'FOR_VERIFICATION');
        this.page_key2 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'MOBILE_NO');
        this.mobile_no = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'PLEASE_ENTER_MOBILE_NUMBER');
        this.alert_text = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'OKAY');
        this.okay = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'VALID_MOBILE_NUMBER');
        this.model.verify_mobile = item8[lang_code];
        //});
        document.addEventListener('deviceready', () => {
            FCMPlugin.getToken((token) => {
                localStorage.setItem('device_token', JSON.stringify(token));
            });
        });
    }
    check_no(value) {
        var no = $('.check_number').val();
        if (no.length == 10) {
            $('#right').css('display', 'block');
            $('#wrong').css('display', 'none');
            this.model.mobile_no = no;
        }
        else {
            $('#right').css('display', 'none');
            $('#wrong').css('display', 'block');
            this.model.mobile_no = no;
        }
    }
    save() {
        if (this.model.mobile_no.length == 10) {
            let token = localStorage.getItem('device_token');
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            let platform = '';
            document.addEventListener('deviceready', () => {
                platform = device.platform;
            });
            let data = JSON.stringify({ 'mobile_no': this.model.mobile_no, 'device_token': token, 'platform': platform, 'language': lang_code });
            this.fetch.createUser(data).subscribe(res => {
                if (res['success'] == true) {
                    localStorage.setItem('user_id', JSON.stringify(res['user_id']));
                    localStorage.setItem('user_mobile', JSON.stringify(this.model.mobile_no));
                    localStorage.setItem('otp', JSON.stringify(res['otp']));
                    localStorage.setItem('isotpverified', '0');
                    $('.check_number').val('');
                    this.router.navigate(['/otp']);
                }
                else {
                    this.errorMsg.showModal(res['message']);
                }
            });
        }
        else if (this.model.mobile_no.length != 10 && this.model.mobile_no != '') {
            this.msg = this.model.verify_mobile;
            this.errorMsg.showModal(this.msg);
        }
        else {
            this.errorMsg.showModal(this.alert_text);
        }
    }
};
MobileNumberPage.ctorParameters = () => [
    { type: _error_msg_service__WEBPACK_IMPORTED_MODULE_9__["ErrorMsgService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
MobileNumberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mobile-number',
        template: _raw_loader_mobile_number_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mobile_number_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MobileNumberPage);



/***/ }),

/***/ "WmCV":
/*!*******************************************************!*\
  !*** ./src/app/mobile-number/mobile-number.module.ts ***!
  \*******************************************************/
/*! exports provided: MobileNumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNumberPageModule", function() { return MobileNumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mobile_number_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-number-routing.module */ "tayg");
/* harmony import */ var _mobile_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-number.page */ "DTUL");







let MobileNumberPageModule = class MobileNumberPageModule {
};
MobileNumberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobile_number_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileNumberPageRoutingModule"]
        ],
        declarations: [_mobile_number_page__WEBPACK_IMPORTED_MODULE_6__["MobileNumberPage"]]
    })
], MobileNumberPageModule);



/***/ }),

/***/ "tayg":
/*!***************************************************************!*\
  !*** ./src/app/mobile-number/mobile-number-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MobileNumberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNumberPageRoutingModule", function() { return MobileNumberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mobile_number_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-number.page */ "DTUL");




const routes = [
    {
        path: '',
        component: _mobile_number_page__WEBPACK_IMPORTED_MODULE_3__["MobileNumberPage"]
    }
];
let MobileNumberPageRoutingModule = class MobileNumberPageRoutingModule {
};
MobileNumberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobileNumberPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=mobile-number-mobile-number-module-es2015.js.map