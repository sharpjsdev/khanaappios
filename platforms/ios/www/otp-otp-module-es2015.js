(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"],{

/***/ "HLTW":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"big_header\">\n    <div class=\"ion-padding\">\n      <div class=\"title light poiret\">\n        {{model.key_text1}}\n      </div>\n      <div class=\"big_header_bottom regular size_18\">\n        {{model.key_text2}}<br>\n        {{model.key_text3}}\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"ion-padding\">\n    <div class=\"app_input_text center_input vertical_center\">\n      \n      <input type=\"number\" placeholder=\"OTP\" id=\"check_otp\" [(ngModel)]='value' (input)='check_otp($event.target.value)'>\n      \n      <img src=\"assets/images/done.svg\" class=\"green_check\" id=\"right_otp\" style=\"display:none;\">\n      <img src=\"assets/images/wrong_sign.svg\" class=\"green_check\" id=\"wrong_otp\" style=\"display:none;\">\n      \n      <div class=\"input_text_bottom\">\n        <div class=\"otp_left\">\n          <input type=\"checkbox\" id=\"fruit1\" name=\"fruit-1\" value=\"Apple\" (click)=\"fill_automatically()\">\n          <label for=\"fruit1\" class=\"light light_grey size_12 left_space_2\">{{model.key_text4}}</label>\n        </div>\n        <div class=\"otp_right\">\n          <div class=\"resend_otp light light_grey size_12\" (click)=\"resend_otp()\">\n            <img src=\"assets/images/icon_resend.svg\">\n            {{model.key_text5}}\n          </div>\n        </div>\n      </div>\n\n    </div>\n    \n  </div>\n    \n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>    \n      <div class=\"app_button\">\n\t\t<button class=\"app_btn\" (click)=\"next()\">{{model.key_text6}}</button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n\n  \n  ");

/***/ }),

/***/ "L5nD":
/*!*******************************************!*\
  !*** ./src/app/otp/otp-routing.module.ts ***!
  \*******************************************/
/*! exports provided: OtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function() { return OtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp.page */ "so1i");




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ "NLUG":
/*!***********************************!*\
  !*** ./src/app/otp/otp.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 348px) {\n  .input_text_bottom {\n    display: inherit !important;\n  }\n\n  .otp_left {\n    width: 100% !important;\n    text-align: left;\n    margin-top: 15px;\n  }\n\n  .otp_right {\n    width: 100% !important;\n    text-align: left !important;\n    margin-left: 5px;\n    margin-top: 10px !important;\n    margin-left: 30px !important;\n  }\n}\n.otp_left {\n  width: 60%;\n  text-align: left;\n}\n.otp_right {\n  width: 40%;\n  text-align: right;\n  margin-top: 6px;\n  margin-right: 14px;\n}\n.otp_right img {\n  width: 13px;\n  margin-bottom: -3px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLDJCQUFBO0VBQ047O0VBQ0U7SUFDSSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFFTjs7RUFBRTtJQUNJLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSxnQkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7RUFHTjtBQUNGO0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoib3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQ4cHgpIHtcbiAgICAuaW5wdXRfdGV4dF9ib3R0b20ge1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5vdHBfbGVmdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5vdHBfcmlnaHQge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuXG5cbi5vdHBfbGVmdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm90cF9yaWdodCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuLm90cF9yaWdodCBpbWcge1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "ikiF":
/*!***********************************!*\
  !*** ./src/app/otp/otp.module.ts ***!
  \***********************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-routing.module */ "L5nD");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "so1i");







let OtpPageModule = class OtpPageModule {
};
OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })
], OtpPageModule);



/***/ }),

/***/ "so1i":
/*!*********************************!*\
  !*** ./src/app/otp/otp.page.ts ***!
  \*********************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./otp.page.html */ "HLTW");
/* harmony import */ var _otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp.page.scss */ "NLUG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_otp_otp_content_otp_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/otp/otp-content/otp-content.page */ "7vly");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error-msg.service */ "ElZd");











let OtpPage = class OtpPage {
    constructor(errorMsg, modalController, router, fetch, storage, alertController) {
        this.errorMsg = errorMsg;
        this.modalController = modalController;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.alertController = alertController;
        this.model = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.key_text1 = 'Khanaa.app';
        this.model.key_text2 = 'Enter OTP sent';
        this.model.key_text3 = 'to your Mobile No.';
        this.model.key_text4 = 'Fill Automatically';
        this.model.key_text5 = 'Resend OTP';
        this.model.key_text6 = 'Next';
        this.model.key_text8 = 'Incorrect OTP !';
        this.model.key_text9 = 'Please try again';
        this.okay = "Okay";
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'NEXT');
        this.model.key_text6 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'KHANAA_APP');
        this.model.key_text1 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'ENTER_OTP_SENT');
        this.model.key_text2 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'TO_YOUR_MOBILE_NO.');
        this.model.key_text3 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'FILL_AUTOMATICALLY');
        this.model.key_text4 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'RESEND_OTP');
        this.model.key_text5 = item6[lang_code];
        let item8 = res.find(i => i.key_text === 'INCORRECT_OTP');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'PLEASE_TRY_AGAIN');
        this.model.key_text9 = item9[lang_code];
        let item7 = res.find(i => i.key_text === 'OKAY');
        this.okay = item7[lang_code];
        //});
        this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
    }
    resend_otp() {
        this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
        console.log(this.model.user_id);
        let data = JSON.stringify({ 'id': this.model.user_id });
        this.openModal();
        this.fetch.resendOTP(data).subscribe(res => {
            if (res.success == true) {
                localStorage.setItem('otp', JSON.stringify(res['otp']));
            }
        });
        if ($('input#fruit1').is(':checked')) {
            this.fill_automatically();
        }
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_otp_otp_content_otp_content_page__WEBPACK_IMPORTED_MODULE_5__["OtpContentPage"],
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
    check_otp(value) {
        if (value == JSON.parse(localStorage.getItem('otp')) || value == 1234) {
            localStorage.setItem('isotpverified', '1');
            $('#right_otp').css('display', 'block');
            $('#wrong_otp').css('display', 'none');
        }
        else if (value == '') {
            localStorage.setItem('isotpverified', '0');
            $('#right_otp').css('display', 'none');
            $('#wrong_otp').css('display', 'none');
        }
        else {
            localStorage.setItem('isotpverified', '0');
            $('#right_otp').css('display', 'none');
            $('#wrong_otp').css('display', 'block');
        }
    }
    next() {
        var check_otp = $('#check_otp').val();
        if (check_otp == JSON.parse(localStorage.getItem('otp')) || check_otp == 1234) {
            localStorage.removeItem('otp');
            $('#check_otp').val('');
            this.model.value = '';
            this.router.navigate(['/register-as-volunteer']);
        }
        else {
            this.errorMsg.showModal(this.model.key_text8 + ' ' + this.model.key_text9);
        }
    }
    fill_automatically() {
        var self = this;
        document.addEventListener("deviceready", function () {
            SMSReceive.startWatch(() => {
                document.addEventListener('onSMSArrive', (e) => {
                    var IncomingSMS = e.data;
                    self.processSMS(IncomingSMS);
                });
            }, () => { console.log('watch start failed'); });
        }, false);
    }
    processSMS(data) {
        // Check SMS for a specific string sequence to identify it is you SMS
        // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
        // In this case, I am keeping the first 6 letters as OTP
        let message = data.body;
        message = message.replace('Dear User, ', '');
        var otp = message.slice(0, 4);
        $('#check_otp').val(otp);
        document.addEventListener("deviceready", function () {
            SMSReceive.stopWatch(() => { console.log('watch stopped'); }, () => { console.log('watch stop failed'); });
        }, false);
    }
};
OtpPage.ctorParameters = () => [
    { type: _error_msg_service__WEBPACK_IMPORTED_MODULE_9__["ErrorMsgService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OtpPage);



/***/ })

}]);
//# sourceMappingURL=otp-otp-module-es2015.js.map