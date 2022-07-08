(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"],{

/***/ "QSij":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  background-color: #419B95;\n  height: 60%;\n  text-align: center;\n  color: white;\n  position: relative;\n  border-radius: 0px 0px 50px 50px;\n}\n\n.mobile_img {\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  right: 0;\n}\n\n.title_bottom {\n  position: absolute;\n  bottom: 70px;\n  left: 5px;\n  right: 0;\n  z-index: 9;\n  text-align: center;\n  font-size: 18px;\n  color: white;\n}\n\n.splash_content {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.splash_content span {\n  margin-top: 25px !important;\n  display: block;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFLSiIsImZpbGUiOiJzcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE5Qjk1O1xuICAgIGhlaWdodDogNjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNTBweCA1MHB4O1xufVxuXG4ubW9iaWxlX2ltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLnRpdGxlX2JvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNzBweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogOTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5zcGxhc2hfY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uc3BsYXNoX2NvbnRlbnQgc3BhbiB7XG4gICAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "acyj":
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splash.page.html */ "hFcS");
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.page.scss */ "QSij");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SplashPage = class SplashPage {
    constructor() { }
    ngOnInit() {
    }
};
SplashPage.ctorParameters = () => [];
SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashPage);



/***/ }),

/***/ "eYMH":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash-routing.module */ "zerW");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "acyj");







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
    })
], SplashPageModule);



/***/ }),

/***/ "hFcS":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>splash</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-content>\n<a href=\"language\">\n<div class=\"bg\">\n  <div class=\"ion-padding\">\n    <div class=\"title light poiret\">\n      Khanaa.app\n    </div>\n  </div>\n  <div class=\"title_bottom regular\">\n    Welcome to<br>\n    Khaana.app\n  </div>\n  <div class=\"mobile_img\">\n    <img src=\"assets/images/mobile.png\">    \n  </div>\n</div>\n<div class=\"ion-padding splash_content light size_20\">\n  \" The greatest <br>\n  GOOD <br>\n  is what we do <br>\n  for one another. \"\n  <br>\n  <span class=\"regular size_14\">MOTHER TERESA</span>\n</div>\n</a>\n</ion-content> \n\n");

/***/ }),

/***/ "zerW":
/*!*************************************************!*\
  !*** ./src/app/splash/splash-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SplashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function() { return SplashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.page */ "acyj");




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=splash-splash-module-es2015.js.map