(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assign-food-assign-food-module"],{

/***/ "LVOv":
/*!***********************************************************!*\
  !*** ./src/app/assign-food/assign-food-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AssignFoodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignFoodPageRoutingModule", function() { return AssignFoodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assign_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assign-food.page */ "NGPS");




const routes = [
    {
        path: '',
        component: _assign_food_page__WEBPACK_IMPORTED_MODULE_3__["AssignFoodPage"]
    }
];
let AssignFoodPageRoutingModule = class AssignFoodPageRoutingModule {
};
AssignFoodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssignFoodPageRoutingModule);



/***/ }),

/***/ "NGPS":
/*!*************************************************!*\
  !*** ./src/app/assign-food/assign-food.page.ts ***!
  \*************************************************/
/*! exports provided: AssignFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignFoodPage", function() { return AssignFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assign_food_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assign-food.page.html */ "Tq8c");
/* harmony import */ var _assign_food_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-food.page.scss */ "S0rA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let AssignFoodPage = class AssignFoodPage {
    constructor(modalController, fetch) {
        this.modalController = modalController;
        this.fetch = fetch;
        this.model = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
        this.fetch.get_available_food(this.model.user_id).subscribe((res) => {
            if (res.success) {
                this.model.available_food = res.data;
            }
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
    AssignFood() {
        if (this.model.donate_food_id) {
            this.model.error = false;
            let data = JSON.stringify({ 'request_food_id': this.request_food_id, 'donate_food_id': this.model.donate_food_id, 'status': 1 });
            this.fetch.volunteer_receive_requested_food(data).subscribe(res => {
                this.closeModal();
            });
        }
        else {
            this.model.error = true;
        }
    }
};
AssignFoodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] }
];
AssignFoodPage.propDecorators = {
    request_food_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AssignFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assign-food',
        template: _raw_loader_assign_food_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assign_food_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AssignFoodPage);



/***/ }),

/***/ "S0rA":
/*!***************************************************!*\
  !*** ./src/app/assign-food/assign-food.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ24tZm9vZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Tq8c":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assign-food/assign-food.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">\n    <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n   </ion-buttons>\n      <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n      <div class=\"modal_inner\"> \n        <br>    \n        <ion-label>Select food</ion-label>\n        <ion-select class=\"\" [(ngModel)]=\"model.donate_food_id\" interface=\"popover\" placeholder=\"Select one\">\n          <ion-select-option *ngFor=\"let x of model.available_food\" value=\"{{x.id}}\"><span *ngIf=\"x.food_type == 1\">Veg {{ x.no_of_people_foodleft }} people</span><span *ngIf=\"x.food_type == 2\">Non-veg {{ x.no_of_people_foodleft }} people</span></ion-select-option>\n        </ion-select>\n        <span style=\"color: red;\" *ngIf=\"model.error\">Please select food</span>  \n        <!--<button class=\"app_btn\" (click)=\"AssignFood()\">Assign Food</button>-->      \n    </div>\n  </div> \n</ion-content> \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"AssignFood()\" class=\"app_btn\">Assign Food</button>      \n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "tIis":
/*!***************************************************!*\
  !*** ./src/app/assign-food/assign-food.module.ts ***!
  \***************************************************/
/*! exports provided: AssignFoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignFoodPageModule", function() { return AssignFoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _assign_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign-food-routing.module */ "LVOv");
/* harmony import */ var _assign_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assign-food.page */ "NGPS");







let AssignFoodPageModule = class AssignFoodPageModule {
};
AssignFoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assign_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssignFoodPageRoutingModule"]
        ],
        declarations: [_assign_food_page__WEBPACK_IMPORTED_MODULE_6__["AssignFoodPage"]]
    })
], AssignFoodPageModule);



/***/ })

}]);
//# sourceMappingURL=assign-food-assign-food-module-es2015.js.map