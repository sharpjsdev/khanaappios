(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-food-search-with-address-get-food-search-with-address-module"],{

/***/ "+K8E":
/*!***********************************************************************************!*\
  !*** ./src/app/get-food-search-with-address/get-food-search-with-address.page.ts ***!
  \***********************************************************************************/
/*! exports provided: GetFoodSearchWithAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodSearchWithAddressPage", function() { return GetFoodSearchWithAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_get_food_search_with_address_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./get-food-search-with-address.page.html */ "9LF8");
/* harmony import */ var _get_food_search_with_address_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-food-search-with-address.page.scss */ "V7BS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GetFoodSearchWithAddressPage = class GetFoodSearchWithAddressPage {
    constructor() { }
    ngOnInit() {
    }
};
GetFoodSearchWithAddressPage.ctorParameters = () => [];
GetFoodSearchWithAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-food-search-with-address',
        template: _raw_loader_get_food_search_with_address_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_get_food_search_with_address_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetFoodSearchWithAddressPage);



/***/ }),

/***/ "9LF8":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-food-search-with-address/get-food-search-with-address.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n    <!--<ion-title>home</ion-title>-->\n    <ion-buttons slot=\"end\">      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding theme_width\"> \n  <div class=\"search_food_bg\">\n    <div class=\"search_single\">\n      1. Select type of Food :\n      <div class=\"search_food_buttons\">\n        <div class=\"btn-group\">\n          <button class=\"grey regular btn1\">Veg.</button>\n          <button class=\"grey regular btn1\">Non Veg.</button>\n          <button class=\"grey regular btn1\">Both</button>\n        </div>\n      </div>  \n    </div>\n\n    <div class=\"search_single\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"custom_left\">\n          2. Food needed for how many people\n        </ion-col>\n        <ion-col size=\"1\" class=\"center\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"decrementValue()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"2\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"number\" />\n            <input type=\"button\" class=\"plus\" onclick=\"incrementValue()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"search_single\">\n      <div class=\"food_location\">\n        <p>3.</p>\n        <div class=\"location_input\">\n          <img src=\"assets/images/food_location_icon.svg\">\n          <input type=\"text\" value=\"Current Location\">\n        </div>        \n      </div>      \n    </div> \n\n    <div class=\"size_15 regular green\" style=\"margin-top: 90px; padding-left: 20px;\">\n      Rajsamrat Colony, Ayodhya Nagar,<br>\n      Bhopal, Madhya Pradesh<br>\n      462041, India\n    </div>\n\n  </div>   \n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n      <ion-router-link href=\"nearest-donors\">\n        <button class=\"app_btn\">Search Food</button>\n      </ion-router-link>\n    </div>\n    <br>\n    <ion-segment value=\"home\" color=\"transparent\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n        <img src=\"assets/images/red_footer_home.svg\">\n        <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">Home</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">Activity</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"volunteer\" [routerLink]=\"['/volunteer']\">\n        <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_volunteer.svg\">\n        <ion-label class=\"size_12 medium\">Volunteer</ion-label>    \n      </ion-segment-button>\n    </ion-segment>   \n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n  \n\n");

/***/ }),

/***/ "V7BS":
/*!*************************************************************************************!*\
  !*** ./src/app/get-food-search-with-address/get-food-search-with-address.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtZm9vZC1zZWFyY2gtd2l0aC1hZGRyZXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VLRt":
/*!*************************************************************************************!*\
  !*** ./src/app/get-food-search-with-address/get-food-search-with-address.module.ts ***!
  \*************************************************************************************/
/*! exports provided: GetFoodSearchWithAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodSearchWithAddressPageModule", function() { return GetFoodSearchWithAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _get_food_search_with_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-food-search-with-address-routing.module */ "sU93");
/* harmony import */ var _get_food_search_with_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-food-search-with-address.page */ "+K8E");







let GetFoodSearchWithAddressPageModule = class GetFoodSearchWithAddressPageModule {
};
GetFoodSearchWithAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _get_food_search_with_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetFoodSearchWithAddressPageRoutingModule"]
        ],
        declarations: [_get_food_search_with_address_page__WEBPACK_IMPORTED_MODULE_6__["GetFoodSearchWithAddressPage"]]
    })
], GetFoodSearchWithAddressPageModule);



/***/ }),

/***/ "sU93":
/*!*********************************************************************************************!*\
  !*** ./src/app/get-food-search-with-address/get-food-search-with-address-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: GetFoodSearchWithAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoodSearchWithAddressPageRoutingModule", function() { return GetFoodSearchWithAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _get_food_search_with_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-food-search-with-address.page */ "+K8E");




const routes = [
    {
        path: '',
        component: _get_food_search_with_address_page__WEBPACK_IMPORTED_MODULE_3__["GetFoodSearchWithAddressPage"]
    }
];
let GetFoodSearchWithAddressPageRoutingModule = class GetFoodSearchWithAddressPageRoutingModule {
};
GetFoodSearchWithAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetFoodSearchWithAddressPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=get-food-search-with-address-get-food-search-with-address-module-es2015.js.map