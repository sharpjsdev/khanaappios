(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-extact-pin-extact-pin-module"],{

/***/ "82p2":
/*!*****************************************************!*\
  !*** ./src/app/modal/extact-pin/extact-pin.page.ts ***!
  \*****************************************************/
/*! exports provided: ExtactPinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtactPinPage", function() { return ExtactPinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_extact_pin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./extact-pin.page.html */ "SXWM");
/* harmony import */ var _extact_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extact-pin.page.scss */ "PzP0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExtactPinPage = class ExtactPinPage {
    constructor() { }
    ngOnInit() {
    }
};
ExtactPinPage.ctorParameters = () => [];
ExtactPinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-extact-pin',
        template: _raw_loader_extact_pin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_extact_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExtactPinPage);



/***/ }),

/***/ "PzP0":
/*!*******************************************************!*\
  !*** ./src/app/modal/extact-pin/extact-pin.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRhY3QtcGluLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "SXWM":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/extact-pin/extact-pin.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>extact-pin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "oby1":
/*!***************************************************************!*\
  !*** ./src/app/modal/extact-pin/extact-pin-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ExtactPinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtactPinPageRoutingModule", function() { return ExtactPinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _extact_pin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extact-pin.page */ "82p2");




const routes = [
    {
        path: '',
        component: _extact_pin_page__WEBPACK_IMPORTED_MODULE_3__["ExtactPinPage"]
    }
];
let ExtactPinPageRoutingModule = class ExtactPinPageRoutingModule {
};
ExtactPinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExtactPinPageRoutingModule);



/***/ }),

/***/ "rd63":
/*!*******************************************************!*\
  !*** ./src/app/modal/extact-pin/extact-pin.module.ts ***!
  \*******************************************************/
/*! exports provided: ExtactPinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtactPinPageModule", function() { return ExtactPinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _extact_pin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extact-pin-routing.module */ "oby1");
/* harmony import */ var _extact_pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extact-pin.page */ "82p2");







let ExtactPinPageModule = class ExtactPinPageModule {
};
ExtactPinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _extact_pin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExtactPinPageRoutingModule"]
        ],
        declarations: [_extact_pin_page__WEBPACK_IMPORTED_MODULE_6__["ExtactPinPage"]]
    })
], ExtactPinPageModule);



/***/ })

}]);
//# sourceMappingURL=modal-extact-pin-extact-pin-module-es2015.js.map