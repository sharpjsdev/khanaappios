(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"],{

/***/ "/O/A":
/*!*****************************************************************!*\
  !*** ./src/app/modal/otp/filter-content/filter-content.page.ts ***!
  \*****************************************************************/
/*! exports provided: FilterContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterContentPage", function() { return FilterContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filter_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filter-content.page.html */ "2mm5");
/* harmony import */ var _filter_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-content.page.scss */ "YRlk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sort-content/sort-content.page */ "G7j0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let FilterContentPage = class FilterContentPage {
    //const receiver_id: string = this.navParams.get('paramID');
    constructor(modalController, navParams, route, router, fetch, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.model = {};
    }
    ngOnInit() {
        //console.log(this.receiver_id);
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'SORT');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'FILTER');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'SELECT_TYPE_OF_FOOD');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'VEG');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'NON_VEG');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'BOTH');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'FOOD_NEEDED_FOR');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'SAVE_CHANGES');
        this.model.key_text8 = item8[lang_code];
        //});
        var filter_food_type = JSON.parse(localStorage.getItem('filter_food_type'));
        console.log(JSON.parse(localStorage.getItem('food_for_no_of_person')));
        if (JSON.parse(localStorage.getItem('food_for_no_of_person')) != null) {
            $('#filter_food_needed').val(JSON.parse(localStorage.getItem('food_for_no_of_person')));
        }
        if (filter_food_type != null) {
            this.model.food_type = filter_food_type;
            $('#filter_food_' + filter_food_type).addClass('active');
        }
    }
    food_type(val) {
        this.model.food_type = val;
        if (val == 1) {
            $('#filter_food_' + val).addClass('active');
            $('#filter_food_2').removeClass('active');
            $('#filter_food_3').removeClass('active');
        }
        else if (val == 2) {
            $('#filter_food_' + val).addClass('active');
            $('#filter_food_1').removeClass('active');
            $('#filter_food_3').removeClass('active');
        }
        else {
            $('#filter_food_' + val).addClass('active');
            $('#filter_food_2').removeClass('active');
            $('#filter_food_1').removeClass('active');
        }
        localStorage.setItem('filter_food_type', val);
    }
    filter() {
        localStorage.setItem('food_for_no_of_person', $('#filter_food_needed').val());
        let data = { filter_food_type: this.model.food_type, filter_no_of_person: $('#filter_food_needed').val() };
        this.modalController.dismiss(data);
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "close";
            yield this.modalController.dismiss(onClosedData);
        });
    }
    openModalSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.closeModal();
            const modal = yield this.modalController.create({
                component: _sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_4__["SortContentPage"],
                cssClass: 'custom_filter_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
FilterContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
FilterContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filter-content',
        template: _raw_loader_filter_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filter_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FilterContentPage);



/***/ }),

/***/ "2mm5":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/otp/filter-content/filter-content.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  <br><br><br>\n  <div class=\"modal_inner\">\n    <div class=\"sorting\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"right_border\" (click)=\"openModalSort()\">\n          {{model.key_text1}} <img src=\"assets/images/icon_sort.svg\">\n        </ion-col>\n        <ion-col size=\"6\" class=\"black\">\n          {{model.key_text2}} <img src=\"assets/images/icon_filter_black.svg\">\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"ion-padding\">      \n    <div style=\"margin-top: -24px; margin-left: 15px;\">{{model.key_text3}}:</div>\n    <div class=\"btn-group\">\n      <button class=\"grey regular btn2\" id=\"filter_food_1\" (click)=\"food_type(1)\">{{model.key_text4}}.</button>\n      <button class=\"grey regular btn2\" id=\"filter_food_2\" (click)=\"food_type(2)\">{{model.key_text5}}.</button>\n      <button class=\"grey regular btn2\" id=\"filter_food_3\" (click)=\"food_type(3)\">{{model.key_text6}}</button>\n    </div>\n\n    <ion-row style=\"margin-top: 25px; margin-left: 13px;\">\n      <ion-col size=\"6\" class=\"custom_left\" style=\"margin-top: 14px;\">\n        {{model.key_text7}} :\n      </ion-col>\n      <ion-col size=\"6\" class=\"custom_right\">\n        <div class=\"how_food\">\n          <input type=\"button\" class=\"minus\" onclick=\"filter_decrementValue()\" value=\"-\" />\n          <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"filter_food_needed\" disabled/>\n          <input type=\"button\" class=\"plus\" onclick=\"filter_incrementValue()\" value=\"+\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>  \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button modal_btn\">\n      <!-- <ion-router-link href=\"nearest-donors/{{receiver_id}}\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link> -->\n\t  <span (click)=\"filter()\">\n        <button class=\"app_btn\">{{model.key_text8}}</button>\n      </span>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "F0z1":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/sort-content/sort-content.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"modal_content\">\n  <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  <br><br><br>\n  <div class=\"modal_inner\">\n    <div class=\"sorting\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"right_border black\">\n          {{model.key_text1}} <img src=\"assets/images/icon_sort_black.svg\">\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"openModalFilter()\">\n          {{model.key_text2}} <img src=\"assets/images/icon_filter.svg\">\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"ion-padding\">   \n\n    <div style=\"margin-top: -24px;\">\n      <div class=\"input_text_bottom\">\n        <div class=\"left\">\n          <div style=\"margin-top: -10px; margin-bottom: 15px;\">\n            <input type=\"checkbox\" id=\"distance\" name=\"sort1\" value=\"1\">\n            <label for=\"distance\" class=\"light light_grey size_12\">{{model.key_text3}}</label>\n          </div>\n          <div>\n            <input type=\"checkbox\" id=\"time\" name=\"sort2\" value=\"2\">\n            <label for=\"time\" class=\"light light_grey size_12\">{{model.key_text4}}</label>\n          </div>\n        </div>        \n      </div>\n    </div>\n    \n  </div>\n</ion-content>  \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button modal_btn\">\n      <!-- <ion-router-link href=\"nearest-donors\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link>-->\n\t  <span (click)=\"save()\">\n        <button class=\"app_btn\">{{model.key_text5}}</button>\n      </span> \n    </div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "G7j0":
/*!*********************************************************!*\
  !*** ./src/app/modal/sort-content/sort-content.page.ts ***!
  \*********************************************************/
/*! exports provided: SortContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortContentPage", function() { return SortContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sort_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sort-content.page.html */ "F0z1");
/* harmony import */ var _sort_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-content.page.scss */ "Zua1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../otp/filter-content/filter-content.page */ "/O/A");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let SortContentPage = class SortContentPage {
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
        let item1 = res.find(i => i.key_text === 'SORT');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'FILTER');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'BY_DISTANCE');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'BY_TIME');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'SAVE_CHANGES');
        this.model.key_text5 = item5[lang_code];
        //});
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "close";
            yield this.modalController.dismiss(onClosedData);
        });
    }
    openModalFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.closeModal();
            const modal = yield this.modalController.create({
                component: _otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_4__["FilterContentPage"],
                cssClass: 'custom_filter_modal',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    console.log('Modal Sent Data :' + JSON.stringify(this.dataReturned));
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    save() {
        this.model.distance = null;
        this.model.time = null;
        var self = this;
        $('input[type="checkbox"]:checked').each(function () {
            if (this.value == 1) {
                self.model.distance = this.value;
            }
            if (this.value == 2) {
                self.model.time = this.value;
            }
        });
        let data = { distance: self.model.distance, time: self.model.time };
        console.log(data);
        self.modalController.dismiss(data);
    }
};
SortContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
SortContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sort-content',
        template: _raw_loader_sort_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sort_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SortContentPage);



/***/ }),

/***/ "YRlk":
/*!*******************************************************************!*\
  !*** ./src/app/modal/otp/filter-content/filter-content.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItY29udGVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Zua1":
/*!***********************************************************!*\
  !*** ./src/app/modal/sort-content/sort-content.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LWNvbnRlbnQucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1-es2015.js.map