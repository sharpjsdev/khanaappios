(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searching-volunteer-searching-volunteer-module"],{

/***/ "5t2i":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searching-volunteer/searching-volunteer.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n    <ion-img src=\"../assets/images/loader.gif\" style=\"height: 100px;text-align: center;margin-top: 50%;\"></ion-img>\n    <h5 class=\"size_15 regular green center\">{{model.key_text1}}</h5>\n    </ion-content>");

/***/ }),

/***/ "8xx+":
/*!*****************************************************************!*\
  !*** ./src/app/searching-volunteer/searching-volunteer.page.ts ***!
  \*****************************************************************/
/*! exports provided: SearchingVolunteerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchingVolunteerPage", function() { return SearchingVolunteerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_searching_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./searching-volunteer.page.html */ "5t2i");
/* harmony import */ var _searching_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searching-volunteer.page.scss */ "FNve");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage.service */ "qkCY");








let SearchingVolunteerPage = class SearchingVolunteerPage {
    constructor(http, route, router, fetch, storage) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
        var self = this;
        this.tracking_timer = setTimeout(function () { self.stopTrackingLoop(); self.router.navigate(['/home']); }, 30000);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'SEARCHING_DONEE_NEAR_YOU');
        this.model.key_text1 = item1[lang_code];
        var id = parseInt(this.route.snapshot.params['id']);
        var id2 = parseInt(this.route.snapshot.params['id2']);
        this.model.veg = id;
        this.model.nonveg = id2;
    }
    ionViewDidEnter() {
        this.startTrackingLoop();
    }
    ionViewWillLeave() {
        this.stopTrackingLoop();
    }
    startTrackingLoop() {
        this.tracking = setInterval(() => {
            this.checkVolunteer();
        }, 1000);
    }
    stopTrackingLoop() {
        clearInterval(this.tracking);
        clearTimeout(this.tracking_timer);
        this.tracking = null;
    }
    checkVolunteer() {
        var formData = new FormData();
        formData.append("id", this.model.veg);
        formData.append("id2", this.model.nonveg);
        this.fetch.checkVolunteerAcceptRequest(formData).subscribe(res => {
            if (res['success'] == true) {
                this.router.navigate(['/display-accept-request-on-map', JSON.stringify(res['data']), this.model.veg, this.model.nonveg]);
                //alert(JSON.stringify(res['data']));
            }
        });
    }
};
SearchingVolunteerPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
SearchingVolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-searching-volunteer',
        template: _raw_loader_searching_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_searching_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchingVolunteerPage);



/***/ }),

/***/ "FNve":
/*!*******************************************************************!*\
  !*** ./src/app/searching-volunteer/searching-volunteer.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2hpbmctdm9sdW50ZWVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "g8dT":
/*!*******************************************************************!*\
  !*** ./src/app/searching-volunteer/searching-volunteer.module.ts ***!
  \*******************************************************************/
/*! exports provided: SearchingVolunteerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchingVolunteerPageModule", function() { return SearchingVolunteerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _searching_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searching-volunteer-routing.module */ "rovK");
/* harmony import */ var _searching_volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searching-volunteer.page */ "8xx+");







let SearchingVolunteerPageModule = class SearchingVolunteerPageModule {
};
SearchingVolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _searching_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchingVolunteerPageRoutingModule"]
        ],
        declarations: [_searching_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["SearchingVolunteerPage"]]
    })
], SearchingVolunteerPageModule);



/***/ }),

/***/ "rovK":
/*!***************************************************************************!*\
  !*** ./src/app/searching-volunteer/searching-volunteer-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SearchingVolunteerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchingVolunteerPageRoutingModule", function() { return SearchingVolunteerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _searching_volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searching-volunteer.page */ "8xx+");




const routes = [
    {
        path: '',
        component: _searching_volunteer_page__WEBPACK_IMPORTED_MODULE_3__["SearchingVolunteerPage"]
    }
];
let SearchingVolunteerPageRoutingModule = class SearchingVolunteerPageRoutingModule {
};
SearchingVolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchingVolunteerPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=searching-volunteer-searching-volunteer-module-es2015.js.map