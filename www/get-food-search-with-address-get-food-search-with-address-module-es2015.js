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

/***/ "8rUy":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-toolbar>\n\t<ion-grid [fixed]=\"true\">\n\t\t<ion-row>\n\t\t\t<ion-col (click)=\"changeCurrentUrl('home')\" [ngClass]=\"(activetab == 'home') ? 'active-col' : ''\">\n\t\t\t\t<img [src]=\"src.home\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'home') ? 'active-tab' : ''\">{{model.key_text5}}</ion-label>\n\t\t\t</ion-col>\n\t\t  <ion-col (click)=\"changeCurrentUrl('activity-normal')\" [ngClass]=\"(activetab == 'activity') ? 'active-col' : ''\">\n\t\t\t<img [src]=\"src.activity\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'activity') ? 'active-tab' : ''\">{{model.key_text6}}</ion-label>\n\t\t  </ion-col>\n\t\t  <ion-col [ngClass]=\"(activetab == 'volunteer') ? 'active-col' : ''\" *ngIf=\"model.is_volunteer== 1\" (click)=\"changeCurrentUrl('volunteer-detail')\">\n\t\t\t<img [src]=\"src.volunteer\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'volunteer') ? 'active-tab' : ''\">{{model.key_text7}}</ion-label>  \n\t\t</ion-col>\n\t\t</ion-row>\n\t  </ion-grid>\n\t<!-- <ion-buttons slot=\"start\">\n\t\t<ion-button  value=\"activity\" >\n\t\t\t</ion-button>\n\t\t  <ion-button >\n\t\t\t \n\t\t</ion-button>\n\t</ion-buttons> -->\n\t  \n\t\t<!-- <ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button >\n\t\t\t  \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button>\n\t\t\t      \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button >\n\t\t\t\t \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>       -->\n\t</ion-toolbar>\n</ion-content>\n");

/***/ }),

/***/ "9LF8":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-food-search-with-address/get-food-search-with-address.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n    <!--<ion-title>home</ion-title>-->\n    <ion-buttons slot=\"end\">      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding theme_width\"> \n  <div class=\"search_food_bg\">\n    <div class=\"search_single\">\n      1. Select type of Food :\n      <div class=\"search_food_buttons\">\n        <div class=\"btn-group\">\n          <button class=\"grey regular btn1\">Veg.</button>\n          <button class=\"grey regular btn1\">Non Veg.</button>\n          <button class=\"grey regular btn1\">Both</button>\n        </div>\n      </div>  \n    </div>\n\n    <div class=\"search_single\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"custom_left\">\n          2. Food needed for how many people\n        </ion-col>\n        <ion-col size=\"1\" class=\"center\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"decrementValue()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"2\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"number\" />\n            <input type=\"button\" class=\"plus\" onclick=\"incrementValue()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"search_single\">\n      <div class=\"food_location\">\n        <p>3.</p>\n        <div class=\"location_input\">\n          <img src=\"assets/images/food_location_icon.svg\">\n          <input type=\"text\" value=\"Current Location\">\n        </div>        \n      </div>      \n    </div> \n\n    <div class=\"size_15 regular green\" style=\"margin-top: 90px; padding-left: 20px;\">\n      Rajsamrat Colony, Ayodhya Nagar,<br>\n      Bhopal, Madhya Pradesh<br>\n      462041, India\n    </div>\n\n  </div>   \n</div>\n\n</ion-content>\n<app-footer [currentRoute]=\"'/get-food-search-with-address'\"></app-footer>\n\n\n\n\n  \n\n");

/***/ }),

/***/ "A7BC":
/*!***************************************!*\
  !*** ./src/app/footer/footer.page.ts ***!
  \***************************************/
/*! exports provided: FooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPage", function() { return FooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.page.html */ "8rUy");
/* harmony import */ var _footer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.page.scss */ "jiVj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let FooterPage = class FooterPage {
    constructor(fetch, storage, router) {
        this.fetch = fetch;
        this.storage = storage;
        this.router = router;
        this.model = {};
        this.activetab = '';
        this.src = {
            activity: "assets/images/grey_footer_activity.svg",
            home: "assets/images/grey_footer_home.svg",
            volunteer: "assets/images/grey_footer_volunteer.svg"
        };
    }
    ngOnInit() {
        this.changeCurrentUrl(this.currentRoute);
        let data = { model: "QuotesModel", lang_code: JSON.parse(localStorage.getItem('lang')) };
        this.fetch.getTestimonialByLanguage(data).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (resp) {
                var quote = resp.data;
                this.model.quotes = quote;
                for (var j = 0; j < quote.length; j++) {
                    var quote1 = quote[j];
                }
            }
        }));
        localStorage.removeItem('temp_start_address');
        localStorage.removeItem('temp_end_address');
        this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        this.model.key_text5 = "Home";
        this.model.key_text6 = "Activity";
        this.model.key_text7 = "Volunteer";
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item5 = res.find(i => i.key_text === 'HOME');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'VOLUNTEER_FOOD_REQUEST');
        this.model.key_text8 = item8[lang_code];
    }
    ngOnChanges() {
        this.changeCurrentUrl(this.currentRoute);
        let data = { model: "QuotesModel", lang_code: JSON.parse(localStorage.getItem('lang')) };
        this.fetch.getTestimonialByLanguage(data).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (resp) {
                var quote = resp.data;
                this.model.quotes = quote;
                for (var j = 0; j < quote.length; j++) {
                    var quote1 = quote[j];
                }
            }
        }));
        localStorage.removeItem('temp_start_address');
        localStorage.removeItem('temp_end_address');
        this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        this.model.key_text5 = "Home";
        this.model.key_text6 = "Activity";
        this.model.key_text7 = "Volunteer";
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item5 = res.find(i => i.key_text === 'HOME');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'VOLUNTEER_FOOD_REQUEST');
        this.model.key_text8 = item8[lang_code];
    }
    changeCurrentUrl(route) {
        if (route == '/home') {
            this.activetab = 'home';
            this.src.volunteer = "assets/images/grey_footer_volunteer.svg";
            this.src.home = "assets/images/red_footer_home.svg";
            this.src.activity = "assets/images/grey_footer_activity.svg";
        }
        else if (route == '/volunteer-detail') {
            this.activetab = 'volunteer';
            this.src.volunteer = "assets/images/red_footer_volunteer.svg";
            this.src.home = "assets/images/grey_footer_home.svg";
            this.src.activity = "assets/images/grey_footer_activity.svg";
        }
        else if (route == '/activity-normal') {
            this.activetab = 'activity';
            this.src.volunteer = "assets/images/grey_footer_volunteer.svg";
            this.src.home = "assets/images/grey_footer_home.svg";
            this.src.activity = "assets/images/red_footer_activity.svg";
        }
        if (route !== this.currentRoute) {
            this.router.navigate(['/' + route]);
        }
    }
};
FooterPage.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
FooterPage.propDecorators = {
    currentRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    foo_lang: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FooterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterPage);



/***/ }),

/***/ "PpLr":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageModule", function() { return FooterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer-routing.module */ "dPpK");
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.page */ "A7BC");







let FooterPageModule = class FooterPageModule {
};
FooterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _footer_routing_module__WEBPACK_IMPORTED_MODULE_5__["FooterPageRoutingModule"]
        ],
        declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_6__["FooterPage"]],
        exports: [
            _footer_page__WEBPACK_IMPORTED_MODULE_6__["FooterPage"],
        ]
    })
], FooterPageModule);



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
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");








let GetFoodSearchWithAddressPageModule = class GetFoodSearchWithAddressPageModule {
};
GetFoodSearchWithAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_get_food_search_with_address_page__WEBPACK_IMPORTED_MODULE_6__["GetFoodSearchWithAddressPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _get_food_search_with_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetFoodSearchWithAddressPageRoutingModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"]
        ]
    })
], GetFoodSearchWithAddressPageModule);



/***/ }),

/***/ "dPpK":
/*!*************************************************!*\
  !*** ./src/app/footer/footer-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FooterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageRoutingModule", function() { return FooterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.page */ "A7BC");




const routes = [
    {
        path: '',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_3__["FooterPage"]
    }
];
let FooterPageRoutingModule = class FooterPageRoutingModule {
};
FooterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FooterPageRoutingModule);



/***/ }),

/***/ "jiVj":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label.active-tab {\n  color: #e8604c !important;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col.active-col.ios {\n  box-shadow: 0px 0px 3px 1px #a3a2a2;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBSUksa0JBQUE7QUFESjs7QUFJRTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsLmFjdGl2ZS10YWIge1xyXG4gICAgY29sb3I6ICNlODYwNGMgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29sIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMzVkNTQ7XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tY29sLmFjdGl2ZS1jb2wuaW9ze1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4ICNhM2EyYTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH0iXX0= */");

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