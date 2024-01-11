(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-terms-conditions-terms-conditions-module~register-as-volunteer-register-as-volunteer-m~dc236ab8"],{

/***/ "GRg+":
/*!***********************************************************!*\
  !*** ./src/app/modal/home-content/home-content.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWNvbnRlbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "fdas":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/terms-conditions/terms-conditions.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"big_header\">\n        <div class=\"ion-padding\">\n            <div class=\"title light poiret\">\n                {{app_title}}\n            </div>\n            <div class=\"big_header_bottom regular size_18\">\n                {{page_key1}}\n            </div>\n        </div>\n    </div>\n    <div class=\"ion-padding\">\n        <div class=\"app_input_text\">\n            {{content}}\n        </div>\n    </div>\n    <ion-footer>\n        <ion-toolbar>\n            <div class=\"app_button\">\n                <button class=\"app_btn\" *ngIf=\"!model.search\" (click)=\"closeModal(true)\">{{model.accept_btn}}</button>\n                <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n            </div>\n        </ion-toolbar>\n    </ion-footer>\n</ion-content>");

/***/ }),

/***/ "kzFx":
/*!*********************************************************!*\
  !*** ./src/app/modal/home-content/home-content.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentPage", function() { return HomeContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-content.page.html */ "oM9r");
/* harmony import */ var _home_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-content.page.scss */ "GRg+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let HomeContentPage = class HomeContentPage {
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
        let item1 = res.find(i => i.key_text === 'VOLUNTEER_THANKYOU1');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'VOLUNTEER_THANKYOU2');
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
HomeContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
HomeContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-content',
        template: _raw_loader_home_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeContentPage);



/***/ }),

/***/ "ltDH":
/*!*******************************************************************!*\
  !*** ./src/app/modal/terms-conditions/terms-conditions.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#parent-ele {\n  text-align: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhcmVudC1lbGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "oM9r":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/home-content/home-content.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  \n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/icon_registered.svg\">\n      </div>\n      \n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div>\n      <br>\n      <div class=\"medium size_16 center\" style=\"max-width: 242px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div>\n    </div>\n\n  </div>\n</ion-content> ");

/***/ }),

/***/ "t9PW":
/*!*****************************************************************!*\
  !*** ./src/app/modal/terms-conditions/terms-conditions.page.ts ***!
  \*****************************************************************/
/*! exports provided: TermsConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function() { return TermsConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms-conditions.page.html */ "fdas");
/* harmony import */ var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-conditions.page.scss */ "ltDH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_content_home_content_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../home-content/home-content.page */ "kzFx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");












let TermsConditionsPage = class TermsConditionsPage {
    constructor(modalController, geolocation, alertController, nativeGeocoder, navParams, storage, router, fetch) {
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.nativeGeocoder = nativeGeocoder;
        this.navParams = navParams;
        this.storage = storage;
        this.router = router;
        this.fetch = fetch;
        this.model = {};
    }
    ngOnInit() {
        this.app_title = 'Khanaa.app';
        this.page_key1 = 'Terms & Conditions';
        this.model.accept_btn = 'Accept';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'KHANAA_APP');
        this.app_title = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'TERMS_AND_CONDITIONS');
        this.page_key1 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'ACCEPT');
        this.model.accept_btn = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'SORRY_NOT_AVAILABLE_IN_YOUR_AREA');
        this.model.key4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'OKAY');
        this.model.key_text5 = item5[lang_code];
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        var self = this;
        self.options = {
            enableHighAccuracy: false,
        };
        self.geolocation.getCurrentPosition(self.options).then((resp) => {
            self.model.lat = resp.coords.latitude;
            self.model.lon = resp.coords.longitude;
            self.showAddress(self.model.lat, self.model.lon);
        });
    }
    showAddress(lat, lon) {
        var self = this;
        let latLng = new google.maps.LatLng(lat, lon);
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latLng }, (results, status) => {
            console.log("all results", results);
            this.pincode = results[0].address_components[5].short_name;
            this.model.colony_name = results[0].formatted_address;
            console.log(this.model.colony_name);
            results[0].address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                    self.model.city = val.long_name;
                }
                if (val.types[0] == "administrative_area_level_1") {
                    self.model.state = val.long_name;
                }
                if (val.types[0] == "country") {
                    self.model.country = val.long_name;
                }
                if (val.types[0] == "postal_code") {
                    self.model.postalCode = val.long_name;
                    console.log(self.model.postalCode);
                }
            });
        });
    }
    showAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class custom_alert_1",
                message: msg,
                buttons: [
                    {
                        text: this.model.key_text5,
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            //this.router.navigate(['/home']);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    // async showAlert(msg) {
    //   const modal = await this.modalController.create({
    //   component: SimplePushNotificationPage,
    //   cssClass: 'custom_current_location_modal notification-modal',
    //   backdropDismiss : false,
    //   componentProps: {
    //     "msg": msg,
    //   }
    //   });  
    //   modal.onDidDismiss().then((dataReturned) => {
    //   });
    //   return await modal.present();
    // } 
    successFullRegistration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _home_content_home_content_page__WEBPACK_IMPORTED_MODULE_7__["HomeContentPage"],
                cssClass: 'home_content_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.router.navigate(['/home']);
                if (dataReturned !== null) {
                }
            });
            return yield modal.present();
        });
    }
    closeModal(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.model.search = true;
            if (this.paramTitle == 1) {
                setTimeout(() => {
                    const onClosedData = data;
                    this.modalController.dismiss(onClosedData);
                    var datap = {
                        pincode: this.model.postalCode
                    };
                    console.log("posted data", datap);
                    this.fetch.check_pincode(datap).subscribe(res => {
                        this.model.search = false;
                        if (res.success == true) {
                            // this.showAlert(this.model.key4);
                            this.router.navigate(['/pincode-error-component']);
                        }
                    });
                    this.router.navigate(['/home']);
                }, 3000);
            }
            else {
                this.model.search = false;
                const onClosedData = data;
                yield this.modalController.dismiss(onClosedData);
                this.successFullRegistration();
            }
        });
    }
};
TermsConditionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] }
];
TermsConditionsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    paramTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TermsConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsConditionsPage);



/***/ })

}]);
//# sourceMappingURL=default~modal-terms-conditions-terms-conditions-module~register-as-volunteer-register-as-volunteer-m~dc236ab8-es2015.js.map