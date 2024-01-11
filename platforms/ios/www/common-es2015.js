(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+UNA":
/*!*******************************************************************!*\
  !*** ./src/app/common-search-screen/common-search-screen.page.ts ***!
  \*******************************************************************/
/*! exports provided: CommonSearchScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSearchScreenPage", function() { return CommonSearchScreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_common_search_screen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./common-search-screen.page.html */ "idzl");
/* harmony import */ var _common_search_screen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-search-screen.page.scss */ "4K2E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let CommonSearchScreenPage = class CommonSearchScreenPage {
    constructor(modalController, storage) {
        this.modalController = modalController;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        if (this.type == 'nearby') {
            let item1 = res.find(i => i.key_text === 'GET_SEARCH_PAGE_NEAR_1');
            this.model.key_text1 = item1[lang_code];
        }
        if (this.type == 'ontheway') {
            let item1 = res.find(i => i.key_text === 'GET_SEARCH_PAGE_ONTHEWAY_1');
            this.model.key_text1 = item1[lang_code];
        }
    }
};
CommonSearchScreenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
CommonSearchScreenPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CommonSearchScreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-common-search-screen',
        template: _raw_loader_common_search_screen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_common_search_screen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommonSearchScreenPage);



/***/ }),

/***/ "/b2v":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/error-msg-modal/error-msg-modal.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <div class=\"medium size_14 green center\" style=\"max-width: 195px; width: 100%; margin: 0 auto; margin-top: 25px;\">\n        <span >{{ msg }} </span>\n      </div>\n    </div>\n\n  </div> \n</ion-content> ");

/***/ }),

/***/ "1cap":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/success-deliver-modal/success-deliver-modal.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div> \n       <br><br>\n      <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> \n\t  <br>\n       <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div>\n      <br><br><br><br><br><br><br>\n      <div class=\"medium size_14 center\" style=\"color:#b8b8b8; width: 100%; margin: 0 auto;\">\n        {{model.key_text4}}\n      </div>\n    </div>\n    \n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text5}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "2MEt":
/*!*****************************************************************************!*\
  !*** ./src/app/modal/success-deliver-modal/success-deliver-modal.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLWRlbGl2ZXItbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "4K2E":
/*!*********************************************************************!*\
  !*** ./src/app/common-search-screen/common-search-screen.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24tc2VhcmNoLXNjcmVlbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "6kjK":
/*!***********************************************************************!*\
  !*** ./src/app/modal/donate-food-content/donate-food-content.page.ts ***!
  \***********************************************************************/
/*! exports provided: DonateFoodContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodContentPage", function() { return DonateFoodContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donate_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donate-food-content.page.html */ "uXec");
/* harmony import */ var _donate_food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate-food-content.page.scss */ "d2R5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let DonateFoodContentPage = class DonateFoodContentPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        $("#donate_food_spinner").show();
        $(".modal_content").css("opacity", 0);
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
        let data = JSON.stringify({ 'id': this.model.user_id });
        this.fetch.profile(data).subscribe(res => {
            //	console.log(res);
            $("#donate_food_spinner").hide();
            $(".modal_content").css("opacity", 1);
            this.model.username = res['username'];
            // this.model.dob = res['dob'];
            // this.model.food_type = res['type_of_food_you_prefer'];
            // $('#profile_food_'+res['type_of_food_you_prefer']).addClass('active');
        });
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'DEAR');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'DONATION_MSG_1');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'PEOPLE');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'DONATE_MSG_2');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'DONATE_MSG_3');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'DONATE_MSG_4');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'THANK_YOU_FOR_YOUR_KIND_GESTURE');
        this.model.key_text7 = item7[lang_code];
        // let item1 = res.find(i => i.key_text === 'THANK_YOU_FOR_YOUR_KIND_GESTURE');
        //   this.model.key_text1 = item1[lang_code]; 
        // let item2 = res.find(i => i.key_text === 'END_DONATION_MSG');
        //   this.model.key_text2= item2[lang_code]; 
        // let item3 = res.find(i => i.key_text === 'CHECK_DONATION');
        //   this.model.key_text3= item3[lang_code]; 
        //});
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.router.navigate(['/home']);
        });
    }
};
DonateFoodContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
DonateFoodContentPage.propDecorators = {
    veg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nonveg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    veg_food: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nonveg_food: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DonateFoodContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-food-content',
        template: _raw_loader_donate_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonateFoodContentPage);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "7Aly":
/*!*****************************************************************!*\
  !*** ./src/app/modal/feedback-content/feedback-content.page.ts ***!
  \*****************************************************************/
/*! exports provided: FeedbackContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackContentPage", function() { return FeedbackContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback-content.page.html */ "8lvR");
/* harmony import */ var _feedback_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-content.page.scss */ "PdVw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let FeedbackContentPage = class FeedbackContentPage {
    constructor(modalController, navParams, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'FEEDBACK_QUOTE1');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'FEEDBACK_QUOTE2');
        this.model.key_text2 = item2[lang_code];
        //});
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
FeedbackContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
FeedbackContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback-content',
        template: _raw_loader_feedback_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedbackContentPage);



/***/ }),

/***/ "7bR5":
/*!*****************************************************************!*\
  !*** ./src/app/modal/error-msg-modal/error-msg-modal.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1tc2ctbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "7vly":
/*!***********************************************************!*\
  !*** ./src/app/modal/otp/otp-content/otp-content.page.ts ***!
  \***********************************************************/
/*! exports provided: OtpContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpContentPage", function() { return OtpContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_otp_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./otp-content.page.html */ "Jp/l");
/* harmony import */ var _otp_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp-content.page.scss */ "DvzQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let OtpContentPage = class OtpContentPage {
    constructor(modalController, navParams, fetch, Storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.fetch = fetch;
        this.Storage = Storage;
        this.model = {};
    }
    ngOnInit() {
        this.model.mobile_no = JSON.parse(localStorage.getItem('user_mobile'));
        this.model.key_text1 = 'New OTP has been sent to your mobile number. ';
        this.model.key_text2 = 'New OTP has been sent to your mobile number.';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.Storage.getScope();
        let item1 = res.find(i => i.key_text === 'NEW_OTP_HAS_BEEN');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'NEW_OTP_HAS_BEEN_SENT_TO_YOUR_MOBILE_NO');
        this.model.key_text2 = item2[lang_code];
        // });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
OtpContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
OtpContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp-content',
        template: _raw_loader_otp_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OtpContentPage);



/***/ }),

/***/ "8lvR":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/feedback-content/feedback-content.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br><br>\n      <div class=\"center\" style=\"margin-top: 15px;\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div>\n      <br><br>\n      <div class=\"medium size_16 center\" style=\"max-width: 260px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div>\n    </div>\n\n  </div>\n</ion-content> ");

/***/ }),

/***/ "AgMY":
/*!*********************************************************************************!*\
  !*** ./src/app/modal/conert-to-pickup-success/conert-to-pickup-success.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ConertToPickupSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConertToPickupSuccessPage", function() { return ConertToPickupSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conert_to_pickup_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conert-to-pickup-success.page.html */ "U3F8");
/* harmony import */ var _conert_to_pickup_success_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conert-to-pickup-success.page.scss */ "DkQu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ConertToPickupSuccessPage = class ConertToPickupSuccessPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        console.log(JSON.parse(localStorage.getItem('user_registerd')));
        this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
        console.log(this.model.user_id);
        let data = JSON.stringify({ 'id': this.model.user_id });
        this.fetch.profile(data).subscribe(res => {
            this.model.username = res['username'];
        });
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'DEAR');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'DONATE_MSG_5');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'PERSON');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'DONATE_MSG_3');
        this.model.key_text4 = item4[lang_code];
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.router.navigate(['/home']);
        });
    }
};
ConertToPickupSuccessPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
ConertToPickupSuccessPage.propDecorators = {
    food: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ConertToPickupSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conert-to-pickup-success',
        template: _raw_loader_conert_to_pickup_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conert_to_pickup_success_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConertToPickupSuccessPage);



/***/ }),

/***/ "Cqxs":
/*!*****************************************************************!*\
  !*** ./src/app/modal/donate-later-msg/donate-later-msg.page.ts ***!
  \*****************************************************************/
/*! exports provided: DonateLaterMsgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateLaterMsgPage", function() { return DonateLaterMsgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donate_later_msg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donate-later-msg.page.html */ "YnyR");
/* harmony import */ var _donate_later_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate-later-msg.page.scss */ "GyBy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let DonateLaterMsgPage = class DonateLaterMsgPage {
    constructor(modalController, storage) {
        this.modalController = modalController;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'THANKYOU');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'DONATE_LATER_1');
        this.model.key_text2 = item2[lang_code];
    }
    redirectToNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
DonateLaterMsgPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
DonateLaterMsgPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-later-msg',
        template: _raw_loader_donate_later_msg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_later_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonateLaterMsgPage);



/***/ }),

/***/ "DkQu":
/*!***********************************************************************************!*\
  !*** ./src/app/modal/conert-to-pickup-success/conert-to-pickup-success.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25lcnQtdG8tcGlja3VwLXN1Y2Nlc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "DvzQ":
/*!*************************************************************!*\
  !*** ./src/app/modal/otp/otp-content/otp-content.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAtY29udGVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ElZd":
/*!**************************************!*\
  !*** ./src/app/error-msg.service.ts ***!
  \**************************************/
/*! exports provided: ErrorMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsgService", function() { return ErrorMsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/error-msg-modal/error-msg-modal.page */ "HQjg");




let ErrorMsgService = class ErrorMsgService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    showModal(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modal = yield this.modalController.create({
                    component: _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_3__["ErrorMsgModalPage"],
                    cssClass: 'error_modal_css',
                    componentProps: {
                        "msg": msg,
                    }
                });
                modal.onDidDismiss().then((dataReturned) => {
                });
                return yield modal.present();
            }));
        });
    }
};
ErrorMsgService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ErrorMsgService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorMsgService);



/***/ }),

/***/ "GCnJ":
/*!*****************************************************************************!*\
  !*** ./src/app/modal/location-error-content/location-error-content.page.ts ***!
  \*****************************************************************************/
/*! exports provided: LocationErrorContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationErrorContentPage", function() { return LocationErrorContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_location_error_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./location-error-content.page.html */ "uGlT");
/* harmony import */ var _location_error_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-error-content.page.scss */ "kT9p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let LocationErrorContentPage = class LocationErrorContentPage {
    constructor(modalController, navParams, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'KINDLY_SET_YOUR_CURRENT_LOCATION_TO_CONTINUE');
        this.model.key_text1 = item1[lang_code];
        //});
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
LocationErrorContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
LocationErrorContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location-error-content',
        template: _raw_loader_location_error_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_error_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LocationErrorContentPage);



/***/ }),

/***/ "GyBy":
/*!*******************************************************************!*\
  !*** ./src/app/modal/donate-later-msg/donate-later-msg.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb25hdGUtbGF0ZXItbXNnLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "HQjg":
/*!***************************************************************!*\
  !*** ./src/app/modal/error-msg-modal/error-msg-modal.page.ts ***!
  \***************************************************************/
/*! exports provided: ErrorMsgModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsgModalPage", function() { return ErrorMsgModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_msg_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-msg-modal.page.html */ "/b2v");
/* harmony import */ var _error_msg_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-msg-modal.page.scss */ "7bR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let ErrorMsgModalPage = class ErrorMsgModalPage {
    constructor(modalController, navParams, router, fetch) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
    }
    ngOnInit() {
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
ErrorMsgModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] }
];
ErrorMsgModalPage.propDecorators = {
    msg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ErrorMsgModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error-msg-modal',
        template: _raw_loader_error_msg_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_msg_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErrorMsgModalPage);



/***/ }),

/***/ "Jp/l":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/otp/otp-content/otp-content.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  \n    <div class=\"modal_inner green size_16 center regular\" style=\"max-width: 250px;margin: auto;\">\n      {{model.key_text2}}<br>\n      +91 {{model.mobile_no}} \n    </div>\n\n  </div>\n</ion-content> ");

/***/ }),

/***/ "PdVw":
/*!*******************************************************************!*\
  !*** ./src/app/modal/feedback-content/feedback-content.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay1jb250ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "QNkS":
/*!***********************************************************************************************!*\
  !*** ./src/app/modal/volunteer-food-request-content/volunteer-food-request-content.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x1bnRlZXItZm9vZC1yZXF1ZXN0LWNvbnRlbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "U3F8":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/conert-to-pickup-success/conert-to-pickup-success.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/icon_registered.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        <span *ngIf=\"food != 0  && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text2 }} {{ food }}  {{ model.key_text3 }}, {{ model.key_text4 }}</span>\n      </div>\n    </div>\n\n  </div> \n</ion-content> ");

/***/ }),

/***/ "UG66":
/*!***********************************************************!*\
  !*** ./src/app/modal/onthe-way-msg/onthe-way-msg.page.ts ***!
  \***********************************************************/
/*! exports provided: OntheWayMsgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntheWayMsgPage", function() { return OntheWayMsgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_onthe_way_msg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./onthe-way-msg.page.html */ "ZySf");
/* harmony import */ var _onthe_way_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onthe-way-msg.page.scss */ "bq6f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _reject_get_food_request_reject_get_food_request_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reject-get-food-request/reject-get-food-request.page */ "Fcc0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let OntheWayMsgPage = class OntheWayMsgPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        console.log(this.way);
        if (this.type == 'ontheway') {
            this.model.type_id = 1;
        }
        else {
            this.model.type_id = 0;
        }
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'NO_DONOR_MSG_1');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'NO_DONOR_MSG_2');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'OKAY');
        this.model.key_text3 = item3[lang_code];
    }
    redirectToNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.openModel();
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.router.navigate(['/home']);
        });
    }
    openModel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _reject_get_food_request_reject_get_food_request_page__WEBPACK_IMPORTED_MODULE_7__["RejectGetFoodRequestPage"],
                cssClass: 'custom_current_location_modal notification-modal',
                backdropDismiss: false,
                componentProps: {
                    "data": "",
                    "r_data": this.way,
                    "app_id": this.r_id,
                    "type_id": this.model.type_id
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
};
OntheWayMsgPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
OntheWayMsgPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    r_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    way: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OntheWayMsgPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onthe-way-msg',
        template: _raw_loader_onthe_way_msg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onthe_way_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OntheWayMsgPage);



/***/ }),

/***/ "Wwn5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************/
/*! exports provided: CallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumber", function() { return CallNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var CallNumber = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumber.prototype.isCallSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments); };
    CallNumber.pluginName = "CallNumber";
    CallNumber.plugin = "call-number";
    CallNumber.pluginRef = "plugins.CallNumber";
    CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumber.platforms = ["Android", "iOS"];
CallNumber.ɵfac = function CallNumber_Factory(t) { return ɵCallNumber_BaseFactory(t || CallNumber); };
CallNumber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CallNumber, factory: function (t) { return CallNumber.ɵfac(t); } });
var ɵCallNumber_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CallNumber);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallNumber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return CallNumber;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FsbC1udW1iZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUEwQnNCLDhCQUFpQjtBQUFDO0FBRTlCO0FBQytDO0FBQ2pFLElBTUEsK0JBQVUsYUFBQyxZQUFvQixFQUFFLGdCQUF5QjtBQU12RCxJQUdILG9DQUFlO0FBSXNCO0FBQTBDO0FBQXVDO0FBQWlEO0FBQTZFOzhDQXhCclAsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkFoQ1A7QUFBRSxFQWdDOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBOdW1iZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ2FsbCBhIG51bWJlciBkaXJlY3RseSBmcm9tIHlvdXIgQ29yZG92YS9Jb25pYyBhcHBsaWNhdGlvbi5cbiAqICoqTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxsTnVtYmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxsLW51bWJlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbE51bWJlcjogQ2FsbE51bWJlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2FsbE51bWJlci5jYWxsTnVtYmVyKFwiMTgwMDEwMTAxMDFcIiwgdHJ1ZSlcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBkaWFsZXIhJywgcmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgbGF1bmNoaW5nIGRpYWxlcicsIGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxOdW1iZXInLFxuICBwbHVnaW46ICdjYWxsLW51bWJlcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQ2FsbE51bWJlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUm9oZm9zaG8vQ29yZG92YUNhbGxOdW1iZXJQbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbE51bWJlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxzIGEgcGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBudW1iZXJUb0NhbGwgVGhlIHBob25lIG51bWJlciB0byBjYWxsIGFzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnlwYXNzQXBwQ2hvb3NlciBTZXQgdG8gdHJ1ZSB0byBieXBhc3MgdGhlIGFwcCBjaG9vc2VyIGFuZCBnbyBkaXJlY3RseSB0byBkaWFsZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "YnyR":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/donate-later-msg/donate-later-msg.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"redirectToNext()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n       <div class=\"medium size_16 center green\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}},\n      </div>\n      <br>\n      <div class=\"medium size_16 center green\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text2}} \n      </div>\n    </div>\n    \n  </div> \n</ion-content> ");

/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "ZySf":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/onthe-way-msg/onthe-way-msg.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"map current_location\">\n\t\t<img src=\"assets/images/close_btn.svg\" style=\"margin-top: 10px;float:right;margin-right:20px;\" (click)=\"closeModal()\">\n\t</div>\n  <div class=\"ion-padding\"> \n    <div class=\"modal_inner\" style=\"margin-top: 30px;\">\n      <br>\n      <div class=\"medium size_14 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}.{{model.key_text2}}.\n      </div>\n    </div>\n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text3}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "bq6f":
/*!*************************************************************!*\
  !*** ./src/app/modal/onthe-way-msg/onthe-way-msg.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbnRoZS13YXktbXNnLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "br8U":
/*!***************************************************************************!*\
  !*** ./src/app/modal/success-deliver-modal/success-deliver-modal.page.ts ***!
  \***************************************************************************/
/*! exports provided: SuccessDeliverModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessDeliverModalPage", function() { return SuccessDeliverModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_deliver_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success-deliver-modal.page.html */ "1cap");
/* harmony import */ var _success_deliver_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-deliver-modal.page.scss */ "2MEt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let SuccessDeliverModalPage = class SuccessDeliverModalPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
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
            this.router.navigate(['/feedback-form-for-donor', this.data, this.id]);
        });
    }
};
SuccessDeliverModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
SuccessDeliverModalPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SuccessDeliverModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-deliver-modal',
        template: _raw_loader_success_deliver_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_deliver_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuccessDeliverModalPage);



/***/ }),

/***/ "d2R5":
/*!*************************************************************************!*\
  !*** ./src/app/modal/donate-food-content/donate-food-content.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 153px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RvbmF0ZS1mb29kLWNvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUNBO0VBQ0MsaUJBQUE7QUFFRCIsImZpbGUiOiJkb25hdGUtZm9vZC1jb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50X2xvY2F0aW9uX3NwcGluZXJ7XG5cdC0tY29sb3I6IzQxOUI5NTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3NwaW5uZXJfcG9zaXRpb257XG5cdG1hcmdpbi10b3A6MTUzcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "idzl":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-search-screen/common-search-screen.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-img src=\"../assets/images/loader.gif\" style=\"height: 100px;text-align: center;margin-top: 50%;\"></ion-img>\n  <h5 class=\"size_15 regular green center\">{{model.key_text1}}</h5>\n  </ion-content>");

/***/ }),

/***/ "jQhV":
/*!*********************************************************************************************!*\
  !*** ./src/app/modal/volunteer-food-request-content/volunteer-food-request-content.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: VolunteerFoodRequestContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerFoodRequestContentPage", function() { return VolunteerFoodRequestContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_volunteer_food_request_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./volunteer-food-request-content.page.html */ "wr5j");
/* harmony import */ var _volunteer_food_request_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./volunteer-food-request-content.page.scss */ "QNkS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let VolunteerFoodRequestContentPage = class VolunteerFoodRequestContentPage {
    constructor(modalController, navParams, router, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        console.log(this.request_data);
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'DEAR');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'VOLUNTEER_FOOD_REQUEST_ADD_MSG');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'PERSON');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'VOLUNTEER_MSG');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'VOLUNTEER_MSG_1');
        this.model.key_text6 = item6[lang_code];
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.router.navigate(['/volunteer-detail']);
        });
    }
};
VolunteerFoodRequestContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
VolunteerFoodRequestContentPage.propDecorators = {
    request_data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
VolunteerFoodRequestContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-volunteer-food-request-content',
        template: _raw_loader_volunteer_food_request_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_volunteer_food_request_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VolunteerFoodRequestContentPage);



/***/ }),

/***/ "kT9p":
/*!*******************************************************************************!*\
  !*** ./src/app/modal/location-error-content/location-error-content.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi1lcnJvci1jb250ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "spDm":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "uGlT":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/location-error-content/location-error-content.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    \n    <div class=\"modal_inner green size_16 center regular\" style=\"margin-top: 13px;\">\n      {{model.key_text1}}\n    </div>\n\n  </div>\n</ion-content>  ");

/***/ }),

/***/ "uXec":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/donate-food-content/donate-food-content.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<center class=\"current_location_spinner_position\" id=\"donate_food_spinner\">\n    <ion-spinner class=\"current_location_sppiner\"></ion-spinner>\n</center>\n<ion-content class=\"modal_content\">\n    <div class=\"ion-padding\">\n        <a (click)=\"closeModal()\">\n            <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n        </a>\n        <div class=\"modal_inner\">\n            <br>\n            <div class=\"center\">\n                <img src=\"assets/images/icon_registered.svg\">\n            </div>\n            <br>\n            <div class=\"medium size_18 green center\" style=\"max-width: 200px;width: 100%; margin: 0 auto;\">\n                <span>{{model.key_text7}}</span>\n            </div>\n            <br>\n            <div class=\"medium size_16 center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n                <span *ngIf=\"veg != 0 && nonveg != 0 && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text2 }} {{ veg_food.total_food_for }} {{ model.key_text3 }} {{ model.key_text4 }} {{ nonveg_food.total_food_for }} {{ model.key_text3 }}, {{ model.key_text5 }}</span>\n                <span *ngIf=\"veg != 0 && nonveg == 0 && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text2 }} {{ veg_food.total_food_for }} {{ model.key_text3 }}, {{ model.key_text5 }}</span>\n                <span *ngIf=\"veg == 0 && nonveg != 0 && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text6 }} {{ nonveg_food.total_food_for }} {{ model.key_text3 }}, {{ model.key_text5 }}</span>\n            </div>\n            <!-- <br><br> -->\n            <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> -->\n            <!-- <br> -->\n            <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div> -->\n        </div>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "wr5j":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/volunteer-food-request-content/volunteer-food-request-content.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/icon_registered.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        <p class=\"text-center theme_color\">{{ model.key_text2 }}</p>\n        <span *ngIf=\"request_data\" class=\"vol_content_text\">{{ model.key_text1 }} {{ model.key_text4 }} {{model.key_text5}} {{ request_data.no_of_person }} {{ model.key_text3 }}.<br> {{ model.key_text6 }}</span>\n      </div>\n    </div>\n\n  </div> \n</ion-content> ");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map