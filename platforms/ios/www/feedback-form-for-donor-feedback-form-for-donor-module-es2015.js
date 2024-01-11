(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-form-for-donor-feedback-form-for-donor-module"],{

/***/ "IC90":
/*!*************************************************************************!*\
  !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor.page.ts ***!
  \*************************************************************************/
/*! exports provided: FeedbackFormForDonorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormForDonorPage", function() { return FeedbackFormForDonorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_form_for_donor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback-form-for-donor.page.html */ "Xj2s");
/* harmony import */ var _feedback_form_for_donor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-form-for-donor.page.scss */ "rU4P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_feedback_content_feedback_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/feedback-content/feedback-content.page */ "7Aly");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











let FeedbackFormForDonorPage = class FeedbackFormForDonorPage {
    constructor(modalController, http, route, router, fetch, storage, alertController) {
        this.modalController = modalController;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.alertController = alertController;
        this.model = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.r_id = this.route.snapshot.params['r_id'];
        this.model.getfood_id = this.route.snapshot.params['getfood_id'];
        this.model.food_quality = '';
        this.model.packaging = '';
        this.model.behaviour = '';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'DONEE');
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
        let item11 = res.find(i => i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS');
        this.model.alert_text = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'OKAY');
        this.model.okay = item12[lang_code];
        //});
    }
    behaviour(val) {
        this.model.behaviour = val;
        if (val == 1) {
            $('#behaviour_' + val).addClass('active');
            $('#behaviour_2').removeClass('active');
            $('#behaviour_3').removeClass('active');
        }
        else if (val == 2) {
            $('#behaviour_' + val).addClass('active');
            $('#behaviour_1').removeClass('active');
            $('#behaviour_3').removeClass('active');
        }
        else {
            $('#behaviour_' + val).addClass('active');
            $('#behaviour_1').removeClass('active');
            $('#behaviour_2').removeClass('active');
        }
    }
    submit() {
        var comment = $('#feedback_comment').val();
        if (this.model.behaviour == '') {
            this.presentAlert();
        }
        else {
            let data = JSON.stringify({ 'food_quality': 0, 'packaging': 0, 'behaviour': this.model.behaviour, 'comment': comment, 'receiver_id': this.model.r_id, 'getfood_id': this.model.getfood_id, 'given_by': 1 });
            this.fetch.feedback_donor(data).subscribe(res => {
                if (res.success == true) {
                    this.openModalFeedback();
                }
            });
        }
    }
    openModalFeedback() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_feedback_content_feedback_content_page__WEBPACK_IMPORTED_MODULE_5__["FeedbackContentPage"],
                cssClass: 'custom_feedback_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.router.navigate(['/home']);
                if (dataReturned !== null) {
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: this.model.alert_text,
                buttons: [this.model.okay]
            });
            yield alert.present();
        });
    }
};
FeedbackFormForDonorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_7__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
FeedbackFormForDonorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback-form-for-donor',
        template: _raw_loader_feedback_form_for_donor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_form_for_donor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedbackFormForDonorPage);



/***/ }),

/***/ "Xj2s":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback-form-for-donor/feedback-form-for-donor.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"ion-padding\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"single_page_title medium size_18\">{{model.key_text9}}</div>\n  </div>\n\n  <div class=\"ion-padding custom_padding\"> \n    \n\n    <div>1. {{model.key_text1}} {{model.key_text6}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_1\" (click)=\"behaviour(1)\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_2\" (click)=\"behaviour(2)\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_3\" (click)=\"behaviour(3)\">{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>2. {{model.key_text7}}</div>\n    <div class=\"btn-group\">\n      <ion-textarea rows=\"4\" placeholder=\"{{model.key_text8}}. . .\" class=\"custom_textarea\" id=\"feedback_comment\"></ion-textarea>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\" (click)=\"submit()\">\n      \n        <button class=\"app_btn\">{{model.key_text10}}</button>\n      \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "fp/J":
/*!***************************************************************************!*\
  !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor.module.ts ***!
  \***************************************************************************/
/*! exports provided: FeedbackFormForDonorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormForDonorPageModule", function() { return FeedbackFormForDonorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feedback_form_for_donor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback-form-for-donor-routing.module */ "kOAo");
/* harmony import */ var _feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback-form-for-donor.page */ "IC90");







let FeedbackFormForDonorPageModule = class FeedbackFormForDonorPageModule {
};
FeedbackFormForDonorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feedback_form_for_donor_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackFormForDonorPageRoutingModule"]
        ],
        declarations: [_feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackFormForDonorPage"]]
    })
], FeedbackFormForDonorPageModule);



/***/ }),

/***/ "kOAo":
/*!***********************************************************************************!*\
  !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FeedbackFormForDonorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormForDonorPageRoutingModule", function() { return FeedbackFormForDonorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-form-for-donor.page */ "IC90");




const routes = [
    {
        path: '',
        component: _feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackFormForDonorPage"]
    }
];
let FeedbackFormForDonorPageRoutingModule = class FeedbackFormForDonorPageRoutingModule {
};
FeedbackFormForDonorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedbackFormForDonorPageRoutingModule);



/***/ }),

/***/ "rU4P":
/*!***************************************************************************!*\
  !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay1mb3JtLWZvci1kb25vci5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=feedback-form-for-donor-feedback-form-for-donor-module-es2015.js.map