(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module"],{

/***/ "Ub2x":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/receiver-confirm/receiver-confirm.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">\n      <img (click)=\"closeModal('Wrapped Up!')\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">    \n    \n      <div class=\"modal_inner\">      \n      <br>\n      <div class=\"medium size_18 green center\">\n        <div *ngIf=\"this.data.data != null\">\n          <span *ngIf=\"no_of_person <= data.data.total_food_for && data.data.food_type == 1\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text2 }} {{ model.key_text4 }} {{ model.key_text6 }} {{ no_of_person }} {{ model.key_text3 }} {{ model.key_text7 }} {{ model.donar_username }} </span>\n          <span *ngIf=\"no_of_person > data.data.total_food_for && data.data.food_type == 1\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text4 }} {{ model.key_text6 }} {{ data.data.total_food_for }} {{ model.key_text3 }} {{ model.key_text8 }} {{ model.donar_username }}, {{ model.key_text9 }} {{ no_of_person-data.data.total_food_for }} {{ model.key_text10 }}</span>\n          <span *ngIf=\"no_of_person <= data.data.total_food_for && data.data.food_type == 2\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text2 }} {{ model.key_text5 }} {{ model.key_text6 }} {{ no_of_person }} {{ model.key_text3 }} {{ model.key_text7 }} {{ model.donar_username }} </span>\n          <span *ngIf=\"no_of_person > data.data.total_food_for && data.data.food_type == 2\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text5 }} {{ model.key_text6 }} {{ data.data.total_food_for }} {{ model.key_text3 }} {{ model.key_text8 }} {{ model.donar_username }}, {{ model.key_text9 }} {{ no_of_person-data.data.total_food_for }} {{ model.key_text10 }}</span>\n          <span *ngIf=\"no_of_person <= data.data.total_food_for && data.data.food_type == 3\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text13 }} <span *ngIf=\"data.data.food_type == 1\">{{ model.key_text4 }}</span> <span *ngIf=\"data.data.food_type == 2\">{{ model.key_text5 }}</span> {{ model.key_text6 }} {{ no_of_person }} {{ model.key_text3 }} {{ model.key_text7 }} {{ model.donar_username }} </span>\n          <span *ngIf=\"no_of_person > data.data.total_food_for && data.data.food_type == 3\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text13 }} <span *ngIf=\"data.data.food_type == 1\">{{ model.key_text4 }}</span> <span *ngIf=\"data.data.food_type == 2\">{{ model.key_text5 }}</span> {{ model.key_text6 }} {{ data.data.total_food_for }} {{ model.key_text3 }} {{ model.key_text8 }} {{ model.donar_username }}, {{ model.key_text9 }} {{ no_of_person-data.data.total_food_for }} {{ model.key_text10 }}</span>\n        </div>\n      \n      <span *ngIf=\"this.data.data == null && model.notify == 0 && this.location_data != null\" class=\"custom_new_food_btn\">\n          {{ model.key_text14 }} {{ distance }} {{ model.key_text15 }}<br><br>\n          <button class=\"app_btn\" (click)=\"accept_food_request()\" *ngIf=\"!model.search\">{{ model.key_text16 }}</button>\n          <button class=\"app_btn\" (click)=\"search_again()\" *ngIf=\"!model.search\">{{ model.key_text17 }}</button>\n      </span>\n      <span *ngIf=\"this.data.data == null && model.notify == 0 && this.ontheway_data.length>0\" class=\"custom_new_food_btn\">\n        {{ model.key_text19 }}<br><br>\n        \n    </span>\n      <span *ngIf=\"model.notify == 1\">\n        {{ model.key_text18 }}\n      </span>\n      </div>\n      <div class=\"app_button\" *ngIf=\"this.data.data != null\" style=\"margin-top: 85px;\">\n        <ion-router-link (click)=\"accept_food()\" *ngIf=\"!model.search\">\n          <button class=\"app_btn\">{{ model.key_text12 }}</button>\n        </ion-router-link>\n      </div>\n      <div class=\"app_button\" >\n        <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n      </div>\n      <!-- <br><br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> -->\n\t  <!-- <br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div> -->\n    </div>\n\n  </div> \n</ion-content> ");

/***/ }),

/***/ "oNc3":
/*!*****************************************************************!*\
  !*** ./src/app/modal/receiver-confirm/receiver-confirm.page.ts ***!
  \*****************************************************************/
/*! exports provided: ReceiverConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiverConfirmPage", function() { return ReceiverConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_receiver_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./receiver-confirm.page.html */ "Ub2x");
/* harmony import */ var _receiver_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receiver-confirm.page.scss */ "twDH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ReceiverConfirmPage = class ReceiverConfirmPage {
    constructor(modalController, navParams, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        this.model.search = false;
        this.model.notify = 0;
        let receiver = JSON.stringify({ 'id': this.app_user_id });
        this.fetch.profile(receiver).subscribe(res => {
            this.model.receiver_username = res['username'];
        });
        if (this.data.data != null && this.data.data.total_food_for != 0) {
            let donar = JSON.stringify({ 'id': this.data.data.app_user_id });
            this.fetch.profile(donar).subscribe(res => {
                this.model.donar_username = res['username'];
            });
        }
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'DEAR');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'RECEIVER_MSG_1');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'PEOPLE');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'VEG');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'NON_VEG');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'FOOD_FOR');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'FROM');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'RECEIVER_MSG_2');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'RECEIVER_MSG_3');
        this.model.key_text9 = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'RECEIVER_MSG_4');
        this.model.key_text10 = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'NO_DONATION_FOUND');
        this.model.key_text11 = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'ACCEPT');
        this.model.key_text12 = item12[lang_code];
        let item13 = res.find(i => i.key_text == 'RECEIVER_MSG_1');
        this.model.key_text13 = item13[lang_code];
        let item14 = res.find(i => i.key_text == 'FOOD_NOTAVAILABLE_MSG');
        this.model.key_text14 = item14[lang_code];
        let item15 = res.find(i => i.key_text == 'FOOD_NOTAVAILABLE_MSG1');
        this.model.key_text15 = item15[lang_code];
        let item16 = res.find(i => i.key_text == 'YES');
        this.model.key_text16 = item16[lang_code];
        let item17 = res.find(i => i.key_text == 'NO');
        this.model.key_text17 = item17[lang_code];
        let item18 = res.find(i => i.key_text == 'ACCEPT_REQUEST_MSG');
        this.model.key_text18 = item18[lang_code];
        let item19 = res.find(i => i.key_text == 'NOT_ON_THE_WAY_MSG');
        this.model.key_text19 = item19[lang_code];
        // let item1 = res.find(i => i.key_text === 'THANK_YOU_FOR_YOUR_KIND_GESTURE');
        //   this.model.key_text1 = item1[lang_code]; 
        // let item2 = res.find(i => i.key_text === 'END_DONATION_MSG');
        //   this.model.key_text2= item2[lang_code]; 
        // let item3 = res.find(i => i.key_text === 'CHECK_DONATION');
        //   this.model.key_text3= item3[lang_code]; 
        //});
    }
    accept_food() {
        this.model.search = true;
        this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
        let data;
        if (this.no_of_person > this.data.data.total_food_for) {
            this.model.number_of_person = this.data.data.total_food_for;
        }
        else if (this.no_of_person <= this.data.data.total_food_for) {
            this.model.number_of_person = this.no_of_person;
        }
        if (this.location_data != null) {
            data = JSON.stringify({ 'app_user_id': this.app_user_id, 'donar_id': this.data.data.app_user_id, 'donate_food_id': this.data.data.id, 'food_type': this.data.data.food_type, 'no_of_person': this.model.number_of_person, 'latitude': this.location_data.latitude, 'longitude': this.location_data.longitude, 'colony_name': this.location_data.colony_name, 'city': this.location_data.city, 'state': this.location_data.state, 'country': this.location_data.country, 'postal_code': this.location_data.postalCode, 'notification_type': 1 });
        }
        else if (this.ontheway_data.length > 0) {
            data = JSON.stringify({ 'app_user_id': this.app_user_id, 'donar_id': this.data.data.app_user_id, 'donate_food_id': this.data.data.id, 'food_type': this.data.data.food_type, 'no_of_person': this.model.number_of_person, 'latitude': this.ontheway_data[0].startLat, 'longitude': this.ontheway_data[0].startLng, 'colony_name': this.ontheway_data[1].start, 'city': this.ontheway_data[0].city, 'state': this.ontheway_data[0].state, 'country': this.ontheway_data[0].country, 'postal_code': this.ontheway_data[0].postalCode, 'notification_type': 1 });
        }
        //console.log(data);
        localStorage.setItem('temp_total_food', this.model.number_of_person);
        this.fetch.accept_food(data).subscribe(res => {
            if (res.success == true) {
                this.model.search = false;
                localStorage.setItem('res.receiver_food_id', res.receiver_food_id);
                this.closeModal("accept");
            }
        });
    }
    accept_food_request() {
        this.model.search = true;
        let data;
        if (this.location_data != null) {
            data = JSON.stringify({ 'app_user_id': this.app_user_id, 'food_type': this.food_type, 'no_of_person': this.no_of_person, 'latitude': this.location_data.latitude, 'longitude': this.location_data.longitude, 'colony_name': this.location_data.colony_name, 'city': this.location_data.city, 'state': this.location_data.state, 'country': this.location_data.country, 'postal_code': this.location_data.postalCode, 'status': 0, 'distance': this.distance });
        }
        else if (this.ontheway_data.length > 0) {
            data = JSON.stringify({ 'app_user_id': this.app_user_id, 'food_type': this.food_type, 'no_of_person': this.no_of_person, 'latitude': this.ontheway_data[0].startLat, 'longitude': this.ontheway_data[0].startLng, 'colony_name': this.ontheway_data[1].start, 'city': this.ontheway_data[0].city, 'state': this.ontheway_data[0].state, 'country': this.ontheway_data[0].country, 'postal_code': this.ontheway_data[0].postalCode, 'status': 0, 'distance': 0 });
        }
        this.fetch.accept_food_request(data).subscribe(res => {
            this.model.search = false;
            if (res.success) {
                this.model.notify = 1;
            }
            else {
                console.log(res.success);
            }
        });
    }
    search_again() {
        this.closeModal("Wrapped Up!");
    }
    closeModal(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.data != null) {
                let data = JSON.stringify({ 'food_id': this.data.data.id });
                this.fetch.cancel_accept_food(data).subscribe(res => {
                    if (res.success) {
                    }
                    else {
                        console.log(res.data);
                    }
                });
            }
            const onClosedData = data;
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
ReceiverConfirmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
ReceiverConfirmPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    app_user_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    no_of_person: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    food_type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    location_data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    distance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ontheway_data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReceiverConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-receiver-confirm',
        template: _raw_loader_receiver_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_receiver_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReceiverConfirmPage);



/***/ }),

/***/ "twDH":
/*!*******************************************************************!*\
  !*** ./src/app/modal/receiver-confirm/receiver-confirm.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span.custom_new_food_btn button {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY2VpdmVyLWNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJyZWNlaXZlci1jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uY3VzdG9tX25ld19mb29kX2J0biBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module-es2015.js.map