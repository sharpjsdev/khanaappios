(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-common-message-common-message-module"],{

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

/***/ "YLQj":
/*!***********************************************************************!*\
  !*** ./src/app/modal/common-message/common-message-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CommonMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMessagePageRoutingModule", function() { return CommonMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-message.page */ "ypCr");




const routes = [
    {
        path: '',
        component: _common_message_page__WEBPACK_IMPORTED_MODULE_3__["CommonMessagePage"]
    }
];
let CommonMessagePageRoutingModule = class CommonMessagePageRoutingModule {
};
CommonMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommonMessagePageRoutingModule);



/***/ }),

/***/ "kx68":
/*!***************************************************************!*\
  !*** ./src/app/modal/common-message/common-message.module.ts ***!
  \***************************************************************/
/*! exports provided: CommonMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMessagePageModule", function() { return CommonMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _common_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-message-routing.module */ "YLQj");
/* harmony import */ var _common_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-message.page */ "ypCr");







let CommonMessagePageModule = class CommonMessagePageModule {
};
CommonMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _common_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommonMessagePageRoutingModule"]
        ],
        declarations: [_common_message_page__WEBPACK_IMPORTED_MODULE_6__["CommonMessagePage"]]
    })
], CommonMessagePageModule);



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
//# sourceMappingURL=modal-common-message-common-message-module-es2015.js.map