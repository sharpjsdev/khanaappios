(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearest-donors-nearest-donors-module"],{

/***/ "58Pt":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nearest-donors/nearest-donors.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n    <!--<ion-title>home</ion-title>-->\n    <ion-buttons slot=\"end\">      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"grey_title regular size_18 white center\">\n  {{model.key_text1}}\n</div>\n<div class=\"sorting\">\n  <ion-row>\n    <ion-col size=\"6\" (click)=\"openModalSort()\" class=\"right_border\">\n      {{model.key_text2}} <img src=\"assets/images/icon_sort.svg\">\n    </ion-col>\n    <ion-col size=\"6\" (click)=\"openModal()\">\n      {{model.key_text3}} <img src=\"assets/images/icon_filter.svg\">\n    </ion-col>\n  </ion-row>\n</div>\n\n<div class=\"donor_list\" id=\"nearest_donors_list\">\n\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n\t\t\t<ion-grid class=\"donor_list_single\" *ngFor=\"let x of model.donor_data; let i = index;\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t<div class=\"donor_name medium\">\n\t\t\t\t\t\t  {{i+1}}. {{x.username}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t<div class=\"donor_title_sub size_13 regular\">\n\t\t\t\t\t\t\tFood available for <span class=\"green\">{{x.total_food_for}} persons</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"donor_list_inner\">\n\t\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_walk.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\">\n\t\t\t\t\t\t\t{{x.time_distance_walking.rows[0].elements[0].duration.text}}  {{model.key_text6}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_bike.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\">\n\t\t\t\t\t\t\t{{x.time_distance_driving.rows[0].elements[0].duration.text}} {{model.key_text7}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_bus.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\" >\n\t\t\t\t\t\t\t{{x.time_distance_transit.rows[0].elements[0].duration.text}} {{model.key_text8}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<a (click)=\"collect_food(x)\">\n\t\t\t\t\t\t\t<div class=\"donor_single_btn\">\n\t\t\t\t\t\t\t\t{{model.key_text5}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<hr class=\"donor_single_line\">\n\t\t\t\t</ion-row>  \n\t\t\t</ion-grid>\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\t<input type=\"hidden\" id=\"start_page\" value=\"0\">\n</div>\n<center class=\"current_location_spinner_position\" id=\"nearest_donors_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n</ion-content>\n<app-footer [currentRoute]=\"'/nearest-donors'\"></app-footer>\n");

/***/ }),

/***/ "8rUy":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-toolbar>\n\t<ion-grid [fixed]=\"true\">\n\t\t<ion-row>\n\t\t\t<ion-col (click)=\"changeCurrentUrl('home')\" [ngClass]=\"(activetab == 'home') ? 'active-col' : ''\">\n\t\t\t\t<img [src]=\"src.home\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'home') ? 'active-tab' : ''\">{{model.key_text5}}</ion-label>\n\t\t\t</ion-col>\n\t\t  <ion-col (click)=\"changeCurrentUrl('activity-normal')\" [ngClass]=\"(activetab == 'activity') ? 'active-col' : ''\">\n\t\t\t<img [src]=\"src.activity\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'activity') ? 'active-tab' : ''\">{{model.key_text6}}</ion-label>\n\t\t  </ion-col>\n\t\t  <ion-col [ngClass]=\"(activetab == 'volunteer') ? 'active-col' : ''\" *ngIf=\"model.is_volunteer== 1\" (click)=\"changeCurrentUrl('volunteer-detail')\">\n\t\t\t<img [src]=\"src.volunteer\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'volunteer') ? 'active-tab' : ''\">{{model.key_text7}}</ion-label>  \n\t\t</ion-col>\n\t\t  \n\t\t</ion-row>\n\t  </ion-grid>\n\t<!-- <ion-buttons slot=\"start\">\n\t\t<ion-button  value=\"activity\" >\n\t\t\t</ion-button>\n\t\t  <ion-button >\n\t\t\t \n\t\t</ion-button>\n\t</ion-buttons> -->\n\t  \n\t\t<!-- <ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button >\n\t\t\t  \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button>\n\t\t\t      \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button >\n\t\t\t\t \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>       -->\n\t</ion-toolbar>\n</ion-content>\n");

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
    currentRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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

/***/ "TnvT":
/*!*******************************************************!*\
  !*** ./src/app/nearest-donors/nearest-donors.page.ts ***!
  \*******************************************************/
/*! exports provided: NearestDonorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestDonorsPage", function() { return NearestDonorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nearest-donors.page.html */ "58Pt");
/* harmony import */ var _nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nearest-donors.page.scss */ "e9r2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/otp/filter-content/filter-content.page */ "/O/A");
/* harmony import */ var _modal_sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/sort-content/sort-content.page */ "G7j0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");












let NearestDonorsPage = class NearestDonorsPage {
    constructor(modalController, http, route, router, fetch, alertController) {
        this.modalController = modalController;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.alertController = alertController;
        this.model = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        console.log(lang_code);
        this.fetch.getKeyText(lang_code).subscribe(res => {
            let item1 = res.find(i => i.key_text === 'NEAREST_FOOD_DONORS');
            this.model.key_text1 = item1[lang_code];
            let item2 = res.find(i => i.key_text === 'SORT');
            this.model.key_text2 = item2[lang_code];
            let item3 = res.find(i => i.key_text === 'FILTER');
            this.model.key_text3 = item3[lang_code];
            let item5 = res.find(i => i.key_text === 'COLLECT_FOOD');
            this.model.key_text5 = item5[lang_code];
            let item6 = res.find(i => i.key_text === 'WALK');
            this.model.key_text6 = item6[lang_code];
            let item7 = res.find(i => i.key_text === 'TWO-WHEELER');
            this.model.key_text7 = item7[lang_code];
            let item8 = res.find(i => i.key_text === 'PUBLIC_TRANSPORT');
            this.model.key_text8 = item8[lang_code];
            let item9 = res.find(i => i.key_text === 'HOME');
            this.model.key_text9 = item9[lang_code];
            let item10 = res.find(i => i.key_text === 'ACTIVITY');
            this.model.key_text10 = item10[lang_code];
            let item11 = res.find(i => i.key_text === 'VOLUNTEER');
            this.model.key_text11 = item11[lang_code];
            let item12 = res.find(i => i.key_text === 'NO_DONOR');
            this.model.key_text12 = item12[lang_code];
            let item13 = res.find(i => i.key_text === 'OKAY');
            this.model.key_text13 = item13[lang_code];
        });
        var id = this.route.snapshot.params['id'];
        this.model.receiver_id = this.route.snapshot.params['id'];
        this.fetch.receiver_details(id).subscribe(res => {
            this.model.city = res['data'].city;
            this.model.colony_name = res['data'].colony_name;
            this.model.receiver_lat = res['data'].latitude;
            this.model.receiver_lon = res['data'].longitude;
            this.model.food_type = res['data'].food_type;
            this.model.no_of_person = res['data'].no_of_person;
            var i = $('#start_page').val();
            this.model.receiver_data = JSON.stringify({ 'latitude': this.model.receiver_lat, 'longitude': this.model.receiver_lon, 'city': res['data'].city, 'food_type': res['data'].food_type, 'needed_person': res['data'].no_of_person, 'skip': i });
            console.log(this.model.receiver_data);
            this.fetch.nearest_donors(this.model.receiver_data).subscribe(response => {
                $('#nearest_donors_spinner').css('display', 'none');
                $('#nearest_donors_list').css('display', 'block');
                console.log(response['data']);
                if (response['data'].length == 0) {
                    this.presentAlert();
                }
                this.model.donor_data = response['data'];
            });
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_5__["FilterContentPage"],
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
                    if (this.dataReturned != "close") {
                        $('#nearest_donors_spinner').css('display', 'block');
                        $('#nearest_donors_list').css('display', 'none');
                        this.model.food_type = this.dataReturned.filter_food_type;
                        this.model.no_of_person = this.dataReturned.filter_no_of_person;
                        this.model.receiver_data = JSON.stringify({ 'latitude': this.model.receiver_lat, 'longitude': this.model.receiver_lon, 'city': this.model.city, 'food_type': this.model.food_type, 'needed_person': this.model.no_of_person, 'skip': 0 });
                        this.fetch.nearest_donors(this.model.receiver_data).subscribe(response => {
                            /* var self = this;
                             response['data'].forEach(function (i, val) {
                                var x = self.distace(self.model.receiver_lat, self.model.receiver_lon, i.latitude ,i.longitude);
                                response['data'][val]['times'] = x;
                            }); */
                            $('#nearest_donors_spinner').css('display', 'none');
                            $('#nearest_donors_list').css('display', 'block');
                            console.log(response['data']);
                            this.model.donor_data = response['data'];
                        });
                    }
                }
            });
            return yield modal.present();
        });
    }
    openModalSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_6__["SortContentPage"],
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
                    if (this.dataReturned != "close") {
                        $('#nearest_donors_spinner').css('display', 'block');
                        $('#nearest_donors_list').css('display', 'none');
                        if (this.dataReturned.distance != null) {
                            //console.log(this.dataReturned.distance);
                            //this.model.donor_data.sort();
                            $('#nearest_donors_spinner').css('display', 'none');
                            $('#nearest_donors_list').css('display', 'block');
                            this.model.donor_data.sort((a, b) => {
                                const d1 = a.time_distance_transit.rows[0].elements[0].distance.text[0];
                                const d2 = b.time_distance_transit.rows[0].elements[0].distance.text[0];
                                console.log(d1 - d2);
                                return (d1 - d2);
                            });
                            console.log(this.model.donor_data);
                        }
                        if (this.dataReturned.time != null) {
                            $('#nearest_donors_spinner').css('display', 'none');
                            $('#nearest_donors_list').css('display', 'block');
                            this.model.donor_data.sort((a, b) => {
                                const d1 = a.time_distance_transit.rows[0].elements[0].duration.text[0];
                                const d2 = b.time_distance_transit.rows[0].elements[0].duration.text[0];
                                console.log(d1 - d2);
                                return (d1 - d2);
                            });
                            console.log(this.model.donor_data);
                        }
                    }
                }
            });
            return yield modal.present();
        });
    }
    collect_food(x) {
        console.log(x);
        this.router.navigate(['/get-food-nearest-donors', JSON.stringify(x), this.model.receiver_lat, this.model.receiver_lon, this.model.receiver_id]);
    }
    loadData(event) {
        var self = this;
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            console.log(event);
            var i = $('#start_page').val();
            var j = 5 + parseInt(i);
            self.model.receiver_data = JSON.stringify({ 'latitude': self.model.receiver_lat, 'longitude': self.model.receiver_lon, 'city': self.model.city, 'food_type': self.model.food_type, 'needed_person': this.model.no_of_person, 'skip': j });
            self.fetch.nearest_donors(self.model.receiver_data).subscribe(res => {
                console.log(res['data']);
                //self.model.donor_data.push(response['data']);
                /* res['data'].foreach((value, index) => {
                    response['data'].push(value);
                }); */
                for (var i = 0; i < res['data'].length; i++) {
                    self.model.donor_data.push(res['data'][i]);
                }
            });
            $('#start_page').val(j);
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.model.key_text12);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.model.key_text12,
                buttons: [this.model.key_text13]
            });
            yield alert.present();
        });
    }
};
NearestDonorsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
NearestDonorsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }]
};
NearestDonorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nearest-donors',
        template: _raw_loader_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NearestDonorsPage);



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

/***/ "e9r2":
/*!*********************************************************!*\
  !*** ./src/app/nearest-donors/nearest-donors.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#nearest_donors_list {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25lYXJlc3QtZG9ub3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFDQTtFQUNDLGlCQUFBO0FBRUQiLCJmaWxlIjoibmVhcmVzdC1kb25vcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25lYXJlc3RfZG9ub3JzX2xpc3R7XG5cdGRpc3BsYXkgOiBub25lO1xufVxuXG4uY3VycmVudF9sb2NhdGlvbl9zcHBpbmVye1xuXHQtLWNvbG9yOiM0MTlCOTU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcGlubmVyX3Bvc2l0aW9ue1xuXHRtYXJnaW4tdG9wOjI1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "ggf1":
/*!*****************************************************************!*\
  !*** ./src/app/nearest-donors/nearest-donors-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NearestDonorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestDonorsPageRoutingModule", function() { return NearestDonorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nearest-donors.page */ "TnvT");




const routes = [
    {
        path: '',
        component: _nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__["NearestDonorsPage"]
    }
];
let NearestDonorsPageRoutingModule = class NearestDonorsPageRoutingModule {
};
NearestDonorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NearestDonorsPageRoutingModule);



/***/ }),

/***/ "jiVj":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label.active-tab {\n  color: #e8604c !important;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col.active-col {\n  box-shadow: 0px 0px 3px 1px #a3a2a2;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBSUksa0JBQUE7QUFESjs7QUFJRTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsLmFjdGl2ZS10YWIge1xyXG4gICAgY29sb3I6ICNlODYwNGMgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29sIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMzVkNTQ7XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tY29sLmFjdGl2ZS1jb2x7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggI2EzYTJhMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "qX/V":
/*!*********************************************************!*\
  !*** ./src/app/nearest-donors/nearest-donors.module.ts ***!
  \*********************************************************/
/*! exports provided: NearestDonorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestDonorsPageModule", function() { return NearestDonorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nearest-donors-routing.module */ "ggf1");
/* harmony import */ var _nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nearest-donors.page */ "TnvT");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");








let NearestDonorsPageModule = class NearestDonorsPageModule {
};
NearestDonorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__["NearestDonorsPageRoutingModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"]
        ],
        declarations: [_nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__["NearestDonorsPage"]]
    })
], NearestDonorsPageModule);



/***/ })

}]);
//# sourceMappingURL=nearest-donors-nearest-donors-module-es2015.js.map