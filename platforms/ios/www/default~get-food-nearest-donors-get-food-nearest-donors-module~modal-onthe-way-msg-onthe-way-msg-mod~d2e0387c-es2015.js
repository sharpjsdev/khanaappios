(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"],{

/***/ "1wMq":
/*!***************************************************************!*\
  !*** ./src/app/modal/common-message/common-message.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24tbWVzc2FnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "4vUC":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/reject-get-food-request/reject-get-food-request.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">\n      <!-- <img (click)=\"closeModal('Wrapped Up!')\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">     -->\n    \n      <div class=\"modal_inner\">      \n      <br>\n      <div class=\"medium size_16 grey center\">\n        {{model.key_text3}} <br>\n        {{model.key_text4}}\n        <span class=\"how_food\">\n          <input type=\"button\" class=\"minus-distance\" onclick=\"getDistanceDecrementValue()\" value=\"-\" />\n          <input type=\"text\" class=\"distance_value\" name=\"distance\" value=\"5\" maxlength=\"2\" max=\"20\" size=\"1\" id=\"distance\" disabled/>\n          <input type=\"button\" class=\"plus-distance\" onclick=\"getDistanceIncrementValue()\" value=\"+\" /> kms\n        </span>\n      </div>\n      <br>\n      <div class=\"medium size_14\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <button class=\"app_btn custom_reject_btn size_14 new_btn_css\"  (click)=\"search_again()\">{{model.key_text1}}</button>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"!model.search\">\n            <button class=\"app_btn custom_accept_btn size_14 new_btn_css\"  (click)=\"accept_food_request()\">{{model.key_text2}}</button>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"model.search\">\n            <button class=\"app_btn custom_accept_btn size_14 new_btn_css\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- <br><br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> -->\n\t  <!-- <br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div> -->\n    </div>\n\n  </div> \n</ion-content> ");

/***/ }),

/***/ "Fcc0":
/*!*******************************************************************************!*\
  !*** ./src/app/modal/reject-get-food-request/reject-get-food-request.page.ts ***!
  \*******************************************************************************/
/*! exports provided: RejectGetFoodRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectGetFoodRequestPage", function() { return RejectGetFoodRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reject_get_food_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reject-get-food-request.page.html */ "4vUC");
/* harmony import */ var _reject_get_food_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reject-get-food-request.page.scss */ "wzR1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _common_message_common_message_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-message/common-message.page */ "ypCr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let RejectGetFoodRequestPage = class RejectGetFoodRequestPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        this.model.food_type = localStorage.getItem('receiver_food_type');
        this.model.no_of_person = localStorage.getItem('number_of_person');
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'SEARCH_LATER');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'UPDATE_REQUEST');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'REJECT_FOOD_MSG_1');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'REJECT_FOOD_MSG_2');
        this.model.key_text4 = item4[lang_code];
    }
    accept_food_request() {
        var distance = $("#distance").val();
        this.model.search = true;
        let data1;
        if (this.r_data != null) {
            if (this.type_id == 0) {
                data1 = JSON.stringify({ 'app_user_id': this.app_id, 'food_type': this.model.food_type, 'no_of_person': this.model.no_of_person, 'latitude': this.r_data.latitude, 'longitude': this.r_data.longitude, 'colony_name': this.r_data.colony_name, 'city': this.r_data.city, 'state': this.r_data.state, 'country': this.r_data.country, 'postal_code': this.r_data.postalCode, 'status': 0, 'distance': distance });
            }
            if (this.type_id == 1) {
                // data = JSON.stringify({'app_user_id' : this.app_user_id,  'food_type' : this.food_type, 'no_of_person' : this.no_of_person, 'latitude' : this.ontheway_data[0].startLat, 'longitude' : this.ontheway_data[0].startLng, 'colony_name' : this.ontheway_data[1].start, 'city' : this.ontheway_data[0].city, 'state' : this.ontheway_data[0].state, 'country' : this.ontheway_data[0].country, 'postal_code' : this.ontheway_data[0].postalCode,'status' : 0, 'distance' : distance});
                data1 = JSON.stringify({ 'app_user_id': this.app_id, 'food_type': this.model.food_type, 'no_of_person': this.model.no_of_person, 'latitude': this.r_data[0].startLat, 'longitude': this.r_data[0].startLng, 'colony_name': this.r_data[1].start, 'city': this.r_data[0].city, 'state': this.r_data[0].state, 'country': this.r_data[0].country, 'postal_code': this.r_data[0].postalCode, 'status': 0, 'distance': distance });
            }
        }
        this.fetch.accept_food_request(data1).subscribe(res => {
            // alert(JSON.stringify(res));
            // alert(JSON.parse(res));
            this.model.search = false;
            if (res.success) {
                this.model.notify = 1;
                this.closeModal("Wrapped Up!");
                this.openSucessPopup('get_food_update_request');
                this.router.navigate(['/home']);
            }
            else {
                console.log(res.success);
            }
        });
    }
    openSucessPopup(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_message_common_message_page__WEBPACK_IMPORTED_MODULE_7__["CommonMessagePage"],
                cssClass: 'custom_current_location_modal notification-modal',
                backdropDismiss: false,
                componentProps: {
                    "message": msg
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    search_again() {
        this.closeModal("Wrapped Up!");
        this.router.navigate(['/home']);
    }
    closeModal(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = data;
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
RejectGetFoodRequestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
RejectGetFoodRequestPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    app_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    r_data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RejectGetFoodRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reject-get-food-request',
        template: _raw_loader_reject_get_food_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reject_get_food_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RejectGetFoodRequestPage);



/***/ }),

/***/ "qCyi":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/common-message/common-message.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\"> \n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"medium size_14 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}.\n      </div>\n      <div class=\"medium size_14 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}.\n      </div>\n    </div>\n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text3}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "wzR1":
/*!*********************************************************************************!*\
  !*** ./src/app/modal/reject-get-food-request/reject-get-food-request.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWplY3QtZ2V0LWZvb2QtcmVxdWVzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ypCr":
/*!*************************************************************!*\
  !*** ./src/app/modal/common-message/common-message.page.ts ***!
  \*************************************************************/
/*! exports provided: CommonMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMessagePage", function() { return CommonMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_common_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./common-message.page.html */ "qCyi");
/* harmony import */ var _common_message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-message.page.scss */ "1wMq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let CommonMessagePage = class CommonMessagePage {
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
        let item1 = res.find(i => i.key_text === 'SUCCESS_MSG_1');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'SUCCESS_MSG_2');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'OKAY');
        this.model.key_text3 = item3[lang_code];
    }
    redirectToNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
            this.router.navigate(['/home']);
        });
    }
};
CommonMessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
CommonMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-common-message',
        template: _raw_loader_common_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_common_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommonMessagePage);



/***/ })

}]);
//# sourceMappingURL=default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c-es2015.js.map