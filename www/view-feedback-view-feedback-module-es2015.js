(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-feedback-view-feedback-module"],{

/***/ "N1Y6":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-feedback/view-feedback.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"ion-padding\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"single_page_title medium size_18\">{{model.key_text9}}</div>\n  </div>\n\n  <div class=\"ion-padding custom_padding\"> \n    \n    <div>1. {{model.key_text1}}</div> \n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_1\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_2\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_3\">{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>2. {{model.key_text5}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_1\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_2\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_3\" >{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>3. {{model.key_text6}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_1\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_2\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_3\">{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>4. {{model.key_text7}}</div>\n    <div class=\"btn-group\">\n      <ion-textarea rows=\"4\" readonly placeholder=\"{{model.key_text8}}. . .\" class=\"custom_textarea\" id=\"feedback_comment\"></ion-textarea>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "P05z":
/*!*******************************************************!*\
  !*** ./src/app/view-feedback/view-feedback.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWZlZWRiYWNrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "UnYZ":
/*!*****************************************************!*\
  !*** ./src/app/view-feedback/view-feedback.page.ts ***!
  \*****************************************************/
/*! exports provided: ViewFeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFeedbackPage", function() { return ViewFeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-feedback.page.html */ "N1Y6");
/* harmony import */ var _view_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-feedback.page.scss */ "P05z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ViewFeedbackPage = class ViewFeedbackPage {
    constructor(http, route, router, fetch, storage) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.feedback_id = this.route.snapshot.params['id'];
        this.model.food_quality = '';
        this.model.packaging = '';
        this.model.behaviour = '';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'FOOD_QUALITY');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'EXCELLENT');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'GOOD');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'BAD');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'PACKAGING');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'BEHAVIOUR');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'COMMENT');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'TYPE_HERE');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'HOW_WAS_YOUR_EXPERIENCE');
        this.model.key_text9 = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'SUBMIT');
        this.model.key_text10 = item10[lang_code];
        this.fetch.show_feedback_by_id(this.model.feedback_id).subscribe(res => {
            console.log(res);
            if (res.success == true) {
                if (res.data.food_quality == 1) {
                    $('#food_quality_' + res.data.food_quality).addClass('active');
                }
                else if (res.data.food_quality == 2) {
                    $('#food_quality_' + res.data.food_quality).addClass('active');
                }
                else {
                    $('#food_quality_' + res.data.food_quality).addClass('active');
                }
                if (res.data.packaging == 1) {
                    $('#packaging_' + res.data.packaging).addClass('active');
                }
                else if (res.data.packaging == 2) {
                    $('#packaging_' + res.data.packaging).addClass('active');
                }
                else {
                    $('#packaging_' + res.data.packaging).addClass('active');
                }
                if (res.data.behaviour == 1) {
                    $('#behaviour_' + res.data.behaviour).addClass('active');
                }
                else if (res.data.behaviour == 2) {
                    $('#behaviour_' + res.data.behaviour).addClass('active');
                }
                else {
                    $('#behaviour_' + res.data.behaviour).addClass('active');
                }
                $("#feedback_comment").val(res.data.comment);
            }
        });
        //});
    }
};
ViewFeedbackPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
ViewFeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-feedback',
        template: _raw_loader_view_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewFeedbackPage);



/***/ }),

/***/ "j3DA":
/*!***************************************************************!*\
  !*** ./src/app/view-feedback/view-feedback-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewFeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFeedbackPageRoutingModule", function() { return ViewFeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-feedback.page */ "UnYZ");




const routes = [
    {
        path: '',
        component: _view_feedback_page__WEBPACK_IMPORTED_MODULE_3__["ViewFeedbackPage"]
    }
];
let ViewFeedbackPageRoutingModule = class ViewFeedbackPageRoutingModule {
};
ViewFeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewFeedbackPageRoutingModule);



/***/ }),

/***/ "vBvZ":
/*!*******************************************************!*\
  !*** ./src/app/view-feedback/view-feedback.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewFeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFeedbackPageModule", function() { return ViewFeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-feedback-routing.module */ "j3DA");
/* harmony import */ var _view_feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-feedback.page */ "UnYZ");







let ViewFeedbackPageModule = class ViewFeedbackPageModule {
};
ViewFeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewFeedbackPageRoutingModule"]
        ],
        declarations: [_view_feedback_page__WEBPACK_IMPORTED_MODULE_6__["ViewFeedbackPage"]]
    })
], ViewFeedbackPageModule);



/***/ })

}]);
//# sourceMappingURL=view-feedback-view-feedback-module-es2015.js.map