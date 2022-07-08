(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteer-detail-volunteer-detail-module"],{

/***/ "+ED7":
/*!***********************************************************!*\
  !*** ./src/app/volunteer-detail/volunteer-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: VolunteerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerDetailPage", function() { return VolunteerDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_volunteer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./volunteer-detail.page.html */ "FbHi");
/* harmony import */ var _volunteer_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./volunteer-detail.page.scss */ "5MKl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/cancel-allotedfood/cancel-allotedfood.page */ "hHBB");










let VolunteerDetailPage = class VolunteerDetailPage {
    constructor(fetch, storage, alertController, router, modalController) {
        this.fetch = fetch;
        this.storage = storage;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.model = {};
        this.food_request = [];
        this.food_request_fulfill = [];
        this.volunteer_data = [];
        this.onthe_way = [];
        this.completed_way = [];
        this.volunteer_graph_data = [];
        this.volunteer_graph_accepted_data = [];
        this.full_count = "";
        this.active_count = "";
        this.x_cat_count = [];
        this.mylang = '';
    }
    dynamicColumnChart(data, data2, cat, min, max, tickInterval) {
        let myChart = highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('my_highcharts', {
            chart: {
                type: 'column',
                backgroundColor: '#fff',
                height: 300,
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: cat,
            },
            yAxis: {
                gridLineWidth: 0,
                min: min,
                max: max,
                tickInterval: tickInterval,
                tickPixelInterval: 1,
                title: {
                    text: ''
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                    name: this.model.key_text27,
                    type: undefined,
                    color: '#ffcc00',
                    data: data
                }, {
                    name: this.model.key_text28,
                    type: undefined,
                    color: '#999900',
                    data: data2
                }]
        });
        setTimeout(function () { myChart.reflow(); }, 2000);
    }
    ngOnInit() {
        this.head_tab = "tab-1";
        this.model.is_volunteer = localStorage.getItem('volunteer_approve');
    }
    segmentChanged(ev) {
        $('#add_location_spinner').show();
        this.head_tab = ev.target.value;
        if (this.head_tab == 'tab-2') {
            this.fetch.my_ontheway_food(this.model.user_id).subscribe(res => {
                $('#add_location_spinner').hide();
                this.onthe_way = res['data'];
            });
        }
        else if (this.head_tab == 'tab-3') {
            this.fetch.my_completed_food(this.model.user_id).subscribe(res => {
                $('#add_location_spinner').hide();
                this.completed_way = res['data'];
            });
            this.todayGraph();
        }
        else if (this.head_tab == 'tab-1') {
            this.fetch.my_waiting_request(this.model.volunteer_id).subscribe(res => {
                $('#add_location_spinner').hide();
                this.food_request = res.data;
            });
        }
    }
    segmentChangedCompleted(ev) {
        var vale = ev.target.value;
        if (vale == 'week') {
            this.weeklyGraph();
        }
        if (vale == 'month') {
            this.monthlyGraph();
        }
        if (vale == 'year') {
            this.yearlyGraph();
        }
        if (vale == 'today') {
            this.todayGraph();
        }
    }
    todayGraph() {
        $('#add_location_spinner').show();
        this.volunteer_graph_data = [];
        this.x_cat_count = [];
        this.volunteer_graph_accepted_data = [];
        this.fetch.volunteer_graph_today(this.model.user_id).subscribe(res => {
            $('#add_location_spinner').hide();
            for (var m = 0; m < res.data.length; m++) {
                this.volunteer_graph_data.push(0);
            }
            let calcmax1 = 12;
            for (var k = 0; k < res.data.length; k++) {
                var index1 = k;
                this.volunteer_graph_data[index1] = res.data[k].cnt;
                this.x_cat_count.push(res.data[k].time);
            }
            this.fetch.volunteer_graph_today_accepted(this.model.user_id).subscribe(res1 => {
                for (var l = 0; l < res1.data.length; l++) {
                    this.volunteer_graph_accepted_data.push(0);
                }
                let calcmax1 = 12;
                for (var kk = 0; kk < res1.data.length; kk++) {
                    var index2 = kk;
                    this.volunteer_graph_accepted_data[index2] = res1.data[kk].cnt;
                    this.x_cat_count.push(res1.data[kk].time);
                }
                this.model.min = 0;
                this.model.max = 30;
                this.model.tickInterval = 5;
                this.dynamicColumnChart(this.volunteer_graph_data, this.volunteer_graph_accepted_data, this.x_cat_count, this.model.min, this.model.max, this.model.tickInterval);
            });
        });
        this.fetch.count_today_donation_fullfiled(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.full_count = res.data[0].total_donation;
            }
        });
        this.fetch.count_today_donation_accepted(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.active_count = res.data[0].total_donation;
            }
        });
    }
    weeklyGraph() {
        $('#add_location_spinner').show();
        this.volunteer_graph_data = [];
        this.volunteer_graph_accepted_data = [];
        this.fetch.volunteer_graph_weekly(this.model.user_id).subscribe(res => {
            $('#add_location_spinner').hide();
            for (var i = 0; i < 7; i++) {
                this.volunteer_graph_data.push(0);
            }
            let calcmax = 12;
            for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].day - 1;
                this.volunteer_graph_data[index] = res.data[j].cnt;
                if (res.data[j].cnt > calcmax) {
                    calcmax = res.data[j].cnt;
                }
            }
            this.fetch.volunteer_graph_weekly_accepted(this.model.user_id).subscribe(res1 => {
                $('#add_location_spinner').hide();
                for (var m = 0; m < 7; m++) {
                    this.volunteer_graph_accepted_data.push(0);
                }
                let calcmax1 = 12;
                for (var k = 0; k < res1.data.length; k++) {
                    var index1 = res1.data[k].day - 1;
                    this.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;
                    if (res1.data[k].cnt > calcmax1) {
                        calcmax1 = res1.data[k].cnt;
                    }
                }
                this.model.xcat = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                this.model.min = 0;
                this.model.max = 30;
                this.model.tickInterval = 5;
                this.dynamicColumnChart(this.volunteer_graph_data, this.volunteer_graph_accepted_data, this.model.xcat, this.model.min, this.model.max, this.model.tickInterval);
            });
        });
        this.fetch.count_weekly_donation_fullfiled(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.full_count = res.data[0].total_donation;
            }
        });
        this.fetch.count_weekly_donation_accepted(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.active_count = res.data[0].total_donation;
            }
        });
    }
    monthlyGraph() {
        $('#add_location_spinner').show();
        this.volunteer_graph_data = [];
        this.volunteer_graph_accepted_data = [];
        this.fetch.volunteer_graph_monthly(this.model.user_id).subscribe(res => {
            this.volunteer_graph_data = [0, 0, 0, 0];
            for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].Week_no - 1;
                this.volunteer_graph_data[index] = res.data[j].cnt;
            }
            $('#add_location_spinner').hide();
            this.fetch.volunteer_graph_monthly_accepted(this.model.user_id).subscribe(res1 => {
                this.volunteer_graph_accepted_data = [0, 0, 0, 0];
                for (var k = 0; k < res1.data.length; k++) {
                    var index1 = res1.data[k].Week_no - 1;
                    this.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;
                }
                this.model.xcat = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'];
                this.model.min = 0;
                this.model.max = 60;
                this.model.tickInterval = 20;
                this.dynamicColumnChart(this.volunteer_graph_data, this.volunteer_graph_accepted_data, this.model.xcat, this.model.min, this.model.max, this.model.tickInterval);
            });
        });
        this.fetch.count_monthly_donation_fullfiled(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.full_count = res.data[0].total_donation;
            }
        });
        this.fetch.count_monthly_donation_accepted(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.active_count = res.data[0].total_donation;
            }
        });
    }
    yearlyGraph() {
        this.volunteer_graph_data = [];
        this.volunteer_graph_accepted_data = [];
        $('#add_location_spinner').show();
        this.fetch.volunteer_graph_yearly(this.model.user_id).subscribe(res => {
            this.volunteer_graph_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].month - 1;
                this.volunteer_graph_data[index] = res.data[j].cnt;
            }
            $('#add_location_spinner').hide();
            this.fetch.volunteer_graph_yearly_accepted(this.model.user_id).subscribe(res1 => {
                this.volunteer_graph_accepted_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (var k = 0; k < res1.data.length; k++) {
                    var index1 = res1.data[k].month - 1;
                    this.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;
                }
                this.model.xcat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                this.model.min = 0;
                this.model.max = 60;
                this.model.tickInterval = 20;
                this.dynamicColumnChart(this.volunteer_graph_data, this.volunteer_graph_accepted_data, this.model.xcat, this.model.min, this.model.max, this.model.tickInterval);
            });
        });
        this.fetch.count_yearly_donation_fullfiled(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.full_count = res.data[0].total_donation;
            }
        });
        this.fetch.count_yearly_donation_accepted(this.model.user_id).subscribe(res => {
            if (res['success'] == true) {
                this.active_count = res.data[0].total_donation;
            }
        });
    }
    ionViewDidEnter() {
        this.model.app_user_id = localStorage.getItem("user_id");
        let user = JSON.stringify({ 'id': this.model.app_user_id });
        this.fetch.profile(user).subscribe(res => {
            this.model.login_username = res['username'];
        });
        this.model.mode = 'WALKING';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        console.log(lang_code);
        this.mylang = lang_code;
        // this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'WAITING');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'ON_THE_WAY');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'COMPLETED');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'OKAY');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'REASON_FOR_CANCEL_FOOD_REQUEST');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'CANCEL');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'TODAY');
        this.model.key_text8 = item8[lang_code];
        let item10 = res.find(i => i.key_text === 'HOME');
        let item9 = res.find(i => i.key_text === 'FOOD_REQUESTS');
        this.model.key_text9 = item9[lang_code];
        this.model.key_text10 = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text11 = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text12 = item12[lang_code];
        let item17 = res.find(i => i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS');
        this.model.key_text17 = item17[lang_code];
        let item18 = res.find(i => i.key_text === 'WEEK');
        this.model.key_text18 = item18[lang_code];
        let item19 = res.find(i => i.key_text === 'MONTH');
        this.model.key_text19 = item19[lang_code];
        let item20 = res.find(i => i.key_text === 'YEAR');
        this.model.key_text20 = item20[lang_code];
        let item21 = res.find(i => i.key_text === 'TOTAL_DONATIONS_ACCEPTED');
        this.model.key_text21 = item21[lang_code];
        let item22 = res.find(i => i.key_text === 'TOTAL_DONATIONS_FULLFILLED');
        this.model.key_text22 = item22[lang_code];
        let item23 = res.find(i => i.key_text === 'FOOD_FOR');
        this.model.key_text23 = item23[lang_code];
        let item24 = res.find(i => i.key_text === 'PERSONS');
        this.model.key_text24 = item24[lang_code];
        let item25 = res.find(i => i.key_text === 'VIEW_FEEDBACK');
        this.model.key_text25 = item25[lang_code];
        let item26 = res.find(i => i.key_text === 'SHARE_FEEDBACK');
        this.model.key_text26 = item26[lang_code];
        let item27 = res.find(i => i.key_text === 'DONATION_FULFILLED');
        this.model.key_text27 = item27[lang_code];
        let item28 = res.find(i => i.key_text === 'DONATION_ACCEPTED');
        this.model.key_text28 = item28[lang_code];
        let item29 = res.find(i => i.key_text === 'PEOPLE');
        this.model.key_text29 = item29[lang_code];
        let item30 = res.find(i => i.key_text === 'PERSON');
        this.model.key_text30 = item30[lang_code];
        let item31 = res.find(i => i.key_text === 'TYPE_HERE');
        this.model.key_text31 = item31[lang_code];
        let item32 = res.find(i => i.key_text === 'FOOD');
        this.model.key_text32 = item32[lang_code];
        let item33 = res.find(i => i.key_text === 'FOR');
        this.model.key_text33 = item33[lang_code];
        //});
        this.model.volunteer_id = '';
        var user_id = JSON.parse(localStorage.getItem('user_registerd'));
        this.model.user_id = user_id;
        this.fetch.v_check(user_id).subscribe(res => {
            if (res.success == true) {
                this.model.status = res.status;
                this.model.volunteer_id = res.data;
                this.fetch.v_edit(this.model.volunteer_id).subscribe(res1 => {
                    this.volunteer_data = res1.data;
                    this.model.app_status = res1.data.app_status == 1 ? true : false;
                });
                if (this.model.status != 1) {
                    this.router.navigate(['/volunteer-food-request']);
                }
                this.fetch.my_waiting_request(this.model.volunteer_id).subscribe(res => {
                    this.food_request = res.data;
                });
            }
            else {
                this.model.status = 0;
                this.router.navigate(['/volunteer-food-request']);
            }
            if (this.model.volunteer_id == '') {
                this.router.navigate(['/volunteer-food-request']);
            }
        });
    }
    presentAlertPrompt(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.model.key_text6,
                inputs: [
                    {
                        name: 'reason',
                        id: 'cancel_rsn',
                        type: 'textarea',
                        placeholder: this.model.key_text31
                    }
                ],
                buttons: [
                    {
                        text: this.model.key_text7,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: this.model.key_text4,
                        handler: () => {
                            var rsn = $('#cancel_rsn').val();
                            if (rsn == '') {
                                this.presentAlert();
                            }
                            else {
                                $("#req_list_" + id).hide();
                                let data = JSON.stringify({ 'v_id': id, 'rsn': rsn, 'status': 3 });
                                this.fetch.volunteer_cancel_requested_food(data).subscribe(res => {
                                    this.fetch.my_waiting_request(this.model.volunteer_id).subscribe(res => {
                                        this.food_request = res.data;
                                    });
                                });
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancelAllotedRequest(id, food_id, donar_id, no_of_person, food_type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_9__["CancelAllotedfoodPage"],
                cssClass: 'custom_filter_modal cancel_allot_food_popup',
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title",
                    "id": id,
                    "type": 'donate_food'
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    if (this.dataReturned == 1) {
                        let data = JSON.stringify({ 'food_id': food_id, 'logged_in_user': this.model.login_username, 'no_of_person': no_of_person, 'app_user_id': this.model.app_user_id, 'food_type': food_type, 'notification_type': 3, 'to': donar_id, 'from': this.model.app_user_id, 'getFoodId': id });
                        this.fetch.notify_donar_donate(data).subscribe(res => {
                            this.fetch.my_ontheway_food(this.model.user_id).subscribe(res => {
                                $('#add_location_spinner').hide();
                                this.onthe_way = res['data'];
                            });
                        });
                    }
                }
            });
            return yield modal.present();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: this.model.key_text5,
                buttons: [this.model.key_text4]
            });
            yield alert.present();
        });
    }
};
VolunteerDetailPage.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
VolunteerDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-volunteer-detail',
        template: _raw_loader_volunteer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_volunteer_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VolunteerDetailPage);



/***/ }),

/***/ "5MKl":
/*!*************************************************************!*\
  !*** ./src/app/volunteer-detail/volunteer-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZvbHVudGVlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUNBO0VBQ0MsaUJBQUE7QUFFRCIsImZpbGUiOiJ2b2x1bnRlZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50X2xvY2F0aW9uX3NwcGluZXJ7XG5cdC0tY29sb3I6IzQxOUI5NTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3NwaW5uZXJfcG9zaXRpb257XG5cdG1hcmdpbi10b3A6MjUwcHg7XG59Il19 */");

/***/ }),

/***/ "FbHi":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer-detail/volunteer-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width\">\n  <div class=\"food_request_heading size_18\">{{model.key_text9}}</div><br>\n  <ion-segment class=\"volunteer-tab\" [(ngModel)] = \"head_tab\" value=\"tab-1\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"tab-1\" >\n        <ion-label class=\"size_12 medium\" >{{model.key_text1}}</ion-label>    \n    </ion-segment-button>\n    <ion-segment-button value=\"tab-2\">\n      <ion-label class=\"size_12 medium\">{{model.key_text2}}</ion-label>    \n    </ion-segment-button>        \n    <ion-segment-button value=\"tab-3\">    \n      <ion-label class=\"size_12 medium\">{{model.key_text3}}</ion-label>                \n    </ion-segment-button>        \n  </ion-segment>      \n</div>\n<div [ngSwitch]=\"head_tab\">\n  <div class=\"food_request_new\" *ngSwitchCase=\"'tab-1'\">\n    <div class=\"food_request_entry\" *ngFor=\"let x of food_request;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;\">\n      <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n      <div class=\"entry_name\" style=\"width: 70%;\" *ngIf=\"mylang!='hi'\">\n        <span class=\"green\">{{x.name}}</span> \n        <br>\n        {{x.food_type | foodType}} {{model.key_text23}} {{x.no_of_person_leftfor_food}} {{model.key_text30}}\n        \n      </div> \n      <div class=\"entry_name\" style=\"width: 70%;\" *ngIf=\"mylang=='hi'\">\n        <span class=\"green\">{{x.name}}</span> \n        <br>\n        {{x.food_type | foodType}} {{model.key_text32}} {{x.no_of_person_leftfor_food}} <span *ngIf=\"x.no_of_person_leftfor_food > 1\">{{model.key_text24}}</span><span *ngIf=\"x.no_of_person_leftfor_food == 1\">{{model.key_text30}}</span> {{model.key_text33}}\n        \n      </div> \n      <div class=\"custom_new_close_btn entry_delete\" style=\"width: 11%;\">\n        <img src=\"assets/images/round_cross.svg\" style=\"margin-top:0px;\" (click)=\"presentAlertPrompt(x.id)\">\n      </div>      \n    </div>\n  \n  </div>\n  \n  <div class=\"food_request_new\" *ngSwitchCase=\"'tab-2'\">\n    <ion-row *ngFor=\"let x of onthe_way;let i = index;\" class=\"custom_new_single_row\">\n      <ion-col size=\"1\" style=\"padding: 0;\">\t\n        {{i+1}}.\n      </ion-col>\n      <ion-col size=\"8\" style=\"padding: 0; padding-right: 10px;\" >\n        {{ x.username }} {{x.food_type | foodType}}. {{model.key_text23}} {{x.no_of_person}} {{model.key_text24}}\n      </ion-col>\t\t\t  \n      <ion-col size=\"3\" style=\"padding: 0;\" >\n        <div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n      </ion-col>\n    </ion-row> \n  </div>\n  <div class=\"ion-padding theme_width\" *ngSwitchCase=\"'tab-3'\">\n\n    \n\n    <ion-segment class=\"volunteer-graph-tab\"  value=\"today\" (ionChange)=\"segmentChangedCompleted($event)\">  \n      <ion-segment-button value=\"today\" >\n          <ion-label class=\"size_12 medium\" >{{model.key_text8}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"week\">\n        <ion-label class=\"size_12 medium\">{{model.key_text18}}</ion-label>    \n      </ion-segment-button>        \n      <ion-segment-button value=\"month\">    \n        <ion-label class=\"size_12 medium\">{{model.key_text19}}</ion-label>                \n      </ion-segment-button> \n      <ion-segment-button value=\"year\">    \n        <ion-label class=\"size_12 medium\">{{model.key_text20}}</ion-label>                \n      </ion-segment-button>        \n    </ion-segment>   \n    <div class=\"count_detail\">\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-label class=\"size_14 medium\" >{{model.key_text21}}</ion-label> \n        </ion-col>\n        <ion-col size=\"1\">\n          :\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label class=\"size_14 medium\" >{{active_count}}</ion-label> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-label class=\"size_14 medium\" >{{model.key_text22}}</ion-label> \n        </ion-col>\n        <ion-col size=\"1\">\n          :\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label class=\"size_14 medium\" >{{full_count}} {{model.key_text29}}</ion-label> \n        </ion-col>\n      </ion-row>\n     </div> \n    \n     <div id=\"my_highcharts\" style=\"width:100%;\"></div>\n    <div class=\"border-bottom\"></div>\n    <div class=\"count_detail\">\n  \n      <div class=\"food_request_entry\" *ngFor=\"let x of completed_way;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;\">\n        <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n        <div class=\"entry_name\" style=\"width: 65%;\">\n          <span class=\"green\">{{x.username}}</span> \n          <br>\n          {{x.food_type | foodType}}. {{model.key_text23}} {{x.no_of_person}} {{model.key_text24}}\n        </div> \n        <div  routerLink=\"/view-feedback/{{x.feedback_id}}\" class=\"custom_new_close_btn entry_delete\" style=\"width: 28%;\" *ngIf=\"x.feedback_id\">\n          {{model.key_text25}}\n        </div>\n        <div routerLink=\"/feedback-form/{{x.app_user_id}}/{{x.id}}\" class=\"custom_new_close_btn entry_delete\" style=\"width: 28%;\" *ngIf=\"x.feedback_id =='' || x.feedback_id ==null\">\n          {{model.key_text26}}\n        </div>      \n      </div>\n    </div>\n    \n  </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>    \n    <ion-segment color=\"transparent\" value=\"volunteer\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n          <!--<img src=\"assets/images/red_footer_home.svg\">-->\n          <ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>\n          <ion-label class=\"size_12 medium\" >{{model.key_text10}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text11}}</ion-label>    \n      </ion-segment-button>        \n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">            \n        <ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>\n        <!--<img src=\"assets/images/grey_footer_volunteer.svg\">-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text12}}</ion-label>                \n      </ion-segment-button>        \n    </ion-segment>      \n</ion-toolbar>\n</ion-footer>\n\n\n  \n\n");

/***/ }),

/***/ "INBn":
/*!*************************************************************!*\
  !*** ./src/app/volunteer-detail/volunteer-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: VolunteerDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerDetailPageModule", function() { return VolunteerDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");
/* harmony import */ var _volunteer_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./volunteer-detail-routing.module */ "d6yE");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./volunteer-detail.page */ "+ED7");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../captcha/captcha.component */ "ekeA");










let VolunteerDetailPageModule = class VolunteerDetailPageModule {
};
VolunteerDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"],
            _volunteer_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["VolunteerDetailPageRoutingModule"]
        ],
        declarations: [_volunteer_detail_page__WEBPACK_IMPORTED_MODULE_8__["VolunteerDetailPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_9__["CaptchaComponent"]]
    })
], VolunteerDetailPageModule);



/***/ }),

/***/ "bljD":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "d6yE":
/*!*********************************************************************!*\
  !*** ./src/app/volunteer-detail/volunteer-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VolunteerDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerDetailPageRoutingModule", function() { return VolunteerDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volunteer-detail.page */ "+ED7");




const routes = [
    {
        path: '',
        component: _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_3__["VolunteerDetailPage"]
    }
];
let VolunteerDetailPageRoutingModule = class VolunteerDetailPageRoutingModule {
};
VolunteerDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VolunteerDetailPageRoutingModule);



/***/ }),

/***/ "omRQ":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js ***!
  \***********************************************************************************/
/*! exports provided: ChartHTMLTooltip, GoogleChartComponent, GoogleChartEditor, GoogleChartsControlComponent, GoogleChartsDashboardComponent, GoogleChartsLoaderService, Ng2GoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartEditor", function() { return GoogleChartEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsControlComponent", function() { return GoogleChartsControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsDashboardComponent", function() { return GoogleChartsDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "bljD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GoogleChartsLoaderService = class GoogleChartsLoaderService {
    constructor(localeId, googleChartsSettings) {
        this.googleChartsSettings = googleChartsSettings;
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
        this.loadGoogleChartsScriptPromise = new Promise((resolve, reject) => {
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!this.googleScriptIsLoading) {
                this.googleScriptIsLoading = true;
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    this.googleScriptIsLoading = false;
                    this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = () => {
                    this.googleScriptIsLoading = false;
                    this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                this.googleScriptLoadingNotifier.subscribe((loaded) => {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    }
    load(settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadGoogleChartsScriptPromise;
            yield new Promise((resolve) => {
                if (!settings) {
                    settings = Object.create(this.googleChartsSettings);
                }
                if (!settings) {
                    settings = {};
                }
                if (!settings.language) {
                    settings.language = this.localeId;
                }
                if (!settings.googleChartsVersion) {
                    settings.googleChartsVersion = '47';
                }
                const _settings = settings;
                _settings.callback = resolve;
                google.charts.load(settings.googleChartsVersion, _settings);
            });
        });
    }
};
GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(t) { return new (t || GoogleChartsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('googleChartsSettings', 8)); };
GoogleChartsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GoogleChartsLoaderService_Factory() { return new GoogleChartsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("googleChartsSettings", 8)); }, token: GoogleChartsLoaderService, providedIn: "root" });
GoogleChartsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('googleChartsSettings')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object])
], GoogleChartsLoaderService);

class GoogleChartsDataTable {
    constructor(opt) {
        this.opt = opt;
        this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (opt) {
            this._setDataTable(opt.dataTable, opt.firstRowIsData);
        }
    }
    send() {
        if (this.query === undefined) {
            return;
        }
        this.query.send((queryResponse) => {
            this.setDataTable(queryResponse.getDataTable());
            if (this.opt.queryCallback) {
                this.opt.queryCallback(queryResponse);
            }
        });
    }
    init(opt) {
        if (opt) {
            this.opt = opt;
        }
        if (this.tid !== undefined) {
            // doesn't work, see https://github.com/google/google-visualization-issues/issues/2381
            // this.query.abort();
            window.clearInterval(this.tid);
            this.tid = undefined;
        }
        if (this.opt.dataSourceUrl) {
            this.query = new google.visualization.Query(this.opt.dataSourceUrl);
            if (this.opt.query) {
                this.query.setQuery(this.opt.query);
            }
            if (this.opt.timeout !== undefined) {
                this.query.setTimeout(this.opt.timeout);
            }
            if (this.opt.refreshInterval) {
                // this.query.setRefreshInterval(this.opt.refreshInterval);
                this.tid = window.setInterval(() => {
                    this.send();
                }, this.opt.refreshInterval * 1000);
            }
            this.send();
        }
        else {
            this.setDataTable(this.opt.dataTable);
        }
    }
    /**
     * @returns Underlying google.visualization.DataTable
     */
    getDataTable() {
        return this.dataTable;
    }
    setDataTable(dt, firstRowIsData) {
        if (firstRowIsData === undefined) {
            firstRowIsData = this.opt.firstRowIsData;
        }
        this._setDataTable(dt, firstRowIsData);
        this.dataTableChanged.emit(this.dataTable);
    }
    _setDataTable(dt, firstRowIsData) {
        if (Array.isArray(dt)) {
            dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
        }
        this.dataTable = dt;
        this.reformat();
    }
    /**
     * Applies formatters to data columns, if defined
     */
    reformat() {
        const dt = this.dataTable;
        if (dt === undefined) {
            return;
        }
        if (this.opt.formatters === undefined) {
            return;
        }
        for (const formatterConfig of this.opt.formatters) {
            let formatter;
            if (formatterConfig.type === 'PatternFormat') {
                const fmtOptions = formatterConfig.options;
                formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
                formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
                continue;
            }
            const formatterConstructor = google.visualization[formatterConfig.type];
            const formatterOptions = formatterConfig.options;
            formatter = new formatterConstructor(formatterOptions);
            if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                const fmtOptions = formatterOptions;
                for (const range of fmtOptions.ranges) {
                    if (typeof (range.fromBgColor) !== 'undefined'
                        && typeof (range.toBgColor) !== 'undefined') {
                        formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                    }
                    else {
                        formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                    }
                }
            }
            for (const col of formatterConfig.columns) {
                formatter.format(dt, col);
            }
        }
    }
}
GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
GoogleChartsDataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GoogleChartsDataTable, outputs: { dataTableChanged: "dataTableChanged" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartsDataTable.prototype, "dataTableChanged", void 0);

class ChartHTMLTooltip {
    constructor(el) {
        this.el = el;
    }
    setPosition(x, y) {
        this.el.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.el.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    }
    getDOMElement() {
        return this.el;
    }
}
ChartHTMLTooltip.PIXELS = 'px';

let GoogleChartComponent = class GoogleChartComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.mouseOverListener = (item) => {
            const event = this.parseMouseEvent(item);
            event.tooltip = this.getHTMLTooltip();
            return event;
        };
        this.mouseOutListener = (item) => {
            const event = this.parseMouseEvent(item);
            return event;
        };
        this.selectListener = () => {
            const event = {
                message: 'select',
                row: null,
                column: null,
                selectedRowValues: [],
                selectedRowFormattedValues: [],
                columnLabel: ''
            };
            const s = this.wrapper.visualization.getSelection();
            const gs = s[s.length - 1];
            if (!gs) {
                event.message = 'deselect';
                return event;
            }
            const selection = gs;
            if (gs.row != null) {
                event.row = selection.row;
                const selectedRowValues = [];
                const selectedRowFormattedValues = [];
                const dataTable = this.wrapper.getDataTable();
                const numberOfColumns = dataTable.getNumberOfColumns();
                for (let i = 0; i < numberOfColumns; i++) {
                    selectedRowValues.push(dataTable.getValue(selection.row, i));
                    selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                }
                event.selectedRowValues = selectedRowValues;
                event.selectedRowFormattedValues = selectedRowFormattedValues;
            }
            if (selection.column != null) {
                event.column = selection.column;
                event.columnLabel = this.getColumnLabelAtPosition(selection);
            }
            if (gs.name) {
                event.columnLabel = gs.name;
            }
            return event;
        };
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClickOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.HTMLel = this.el.nativeElement.querySelector('div');
        if (Object.isExtensible(this.data)) {
            this.data.component = this;
        }
        this.options = this.data.options;
        this.init().then(() => {
            this.draw();
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loaderService.load();
            this.recreateWrapper();
        });
    }
    recreateWrapper() {
        if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
            this.dataTable = new GoogleChartsDataTable(this.data);
            this.dataTable.dataTableChanged.subscribe((dt) => {
                this._draw();
            });
            // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
            let temp = this.data;
            if (this.data.firstRowIsData) {
                temp = Object.assign(temp, this.data);
                temp.dataTable = this.dataTable.getDataTable();
            }
            this.wrapper = new google.visualization.ChartWrapper(temp);
            this.registerChartWrapperEvents();
            /* Calling draw even without data is the only way to pass the HTMl element
               when using the chart in a dashboard. Don't do this in all other cases:
               it breaks formatters with remote data source, hence the conditional. */
            if (temp.dataTable === undefined && temp.dataSourceUrl === undefined) {
                try {
                    this.wrapper.draw(this.HTMLel);
                }
                catch (err) { }
            }
        }
    }
    _draw() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dt = this.dataTable.getDataTable();
            if (dt === undefined) {
                return;
            }
            this.convertOptions();
            this.recreateWrapper();
            this.wrapper.setOptions(this.options);
            this.wrapper.setDataTable(dt);
            this.wrapper.draw(this.HTMLel);
        });
    }
    getDataTable() {
        return this.dataTable;
    }
    draw(value) {
        if (value === undefined) {
            value = this.data;
        }
        this.options = value.options;
        this.dataTable.init(value);
    }
    getSelectorBySeriesType(seriesType) {
        const selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        const selector = selectors[seriesType];
        return selector;
    }
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    getSeriesByColumn(column) {
        let series = 0;
        const dataTable = this.wrapper.getDataTable();
        for (let i = column - 1; i >= 0; i--) {
            const role = dataTable.getColumnRole(i);
            const type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    }
    getBoundingBoxForItem(item) {
        let boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            const column = item.column;
            const series = this.getSeriesByColumn(column);
            const row = item.row;
            let seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                let selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    const box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    }
    getValueAtPosition(position) {
        if (position.row == null) {
            return null;
        }
        const dataTable = this.wrapper.getDataTable();
        const value = dataTable.getValue(position.row, position.column);
        return value;
    }
    getColumnTypeAtPosition(position) {
        const dataTable = this.wrapper.getDataTable();
        const type = dataTable.getColumnType(position.column) || '';
        return type;
    }
    getColumnLabelAtPosition(position) {
        const dataTable = this.wrapper.getDataTable();
        const type = dataTable.getColumnLabel(position.column) || '';
        return type;
    }
    getHTMLTooltip() {
        const tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new ChartHTMLTooltip(tooltipER);
    }
    parseMouseEvent(item) {
        const chartType = this.wrapper.getChartType();
        let eventColumn = item.column;
        if (eventColumn == null) {
            switch (chartType) {
                case 'Timeline':
                    eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                    break;
                default:
                    eventColumn = 0;
            }
        }
        const eventRow = item.row;
        const myItem = {
            row: eventRow,
            column: eventColumn
        };
        const event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(myItem),
            value: this.getValueAtPosition(myItem),
            columnType: this.getColumnTypeAtPosition(myItem),
            columnLabel: this.getColumnLabelAtPosition(myItem)
        };
        return event;
    }
    unregisterEvents() {
        google.visualization.events.removeAllListeners(this.wrapper.getChart());
        google.visualization.events.removeAllListeners(this.wrapper);
    }
    registerChartEvents() {
        const chart = this.wrapper.getChart();
        this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
        if (this.mouseOver.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseover', (item) => {
                const event = this.parseMouseEvent(item);
                event.tooltip = this.getHTMLTooltip();
                this.mouseOver.emit(event);
            });
        }
        if (this.mouseOverOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseover', (item) => {
                const event = this.parseMouseEvent(item);
                event.tooltip = this.getHTMLTooltip();
                this.mouseOverOneTime.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseout', (item) => {
                const event = this.parseMouseEvent(item);
                this.mouseOut.emit(event);
            });
        }
        if (this.mouseOutOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseout', (item) => {
                const event = this.parseMouseEvent(item);
                this.mouseOutOneTime.emit(event);
            });
        }
        if (this.data.chartType === 'GeoChart') {
            if (this.regionClick.observers.length > 0) {
                google.visualization.events.addListener(chart, 'regionClick', (item) => {
                    this.regionClick.emit(item);
                });
            }
            if (this.regionClickOneTime.observers.length > 0) {
                google.visualization.events.addOneTimeListener(chart, 'regionClick', (item) => {
                    this.regionClick.emit(item);
                });
            }
        }
    }
    registerChartWrapperEvents() {
        google.visualization.events.addListener(this.wrapper, 'ready', () => {
            this.chartReady.emit({ message: 'Chart ready' });
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'ready', () => {
            this.chartReadyOneTime.emit({ message: 'Chart ready (one time)' });
            this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', (error) => {
            this.chartError.emit(error);
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'error', (error) => {
            this.chartErrorOneTime.emit(error);
        });
        this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
        this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
    }
    addListener(source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addListener(source, eventType, () => {
            evEmitter.emit(listenerFn());
        });
    }
    addOneTimeListener(source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addOneTimeListener(source, eventType, () => {
            evEmitter.emit(listenerFn());
        });
    }
    convertOptions() {
        try {
            this.options = google.charts[this.data.chartType].convertOptions(this.options);
        }
        catch (error) {
            return;
        }
    }
};
GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) { return new (t || GoogleChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartComponent, selectors: [["google-chart"]], inputs: { data: "data" }, outputs: { chartSelect: "chartSelect", chartSelectOneTime: "chartSelectOneTime", chartReady: "chartReady", chartReadyOneTime: "chartReadyOneTime", chartError: "chartError", chartErrorOneTime: "chartErrorOneTime", mouseOver: "mouseOver", mouseOverOneTime: "mouseOverOneTime", mouseOut: "mouseOut", mouseOutOneTime: "mouseOutOneTime", regionClick: "regionClick", regionClickOneTime: "regionClickOneTime" }, decls: 1, vars: 0, template: function GoogleChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartReady", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "regionClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "regionClickOneTime", void 0);
GoogleChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartComponent);

let GoogleChartsDashboardComponent = class GoogleChartsDashboardComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.el = el;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.data.component = this;
        this.init().then(() => {
            if (!this.dataTable) {
                this.dataTable = new GoogleChartsDataTable(this.data);
                this.dataTable.dataTableChanged.subscribe((dt) => {
                    this._draw();
                });
            }
            this.draw();
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loaderService.load({ packages: ['controls'] });
            this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
            for (const b of this.data.bind) {
                let controls = b[0];
                let charts = b[1];
                if (!(controls instanceof Array)) {
                    controls = [controls];
                }
                if (!(charts instanceof Array)) {
                    charts = [charts];
                }
                for (const c of controls) {
                    yield c.component.ensureInit();
                }
                for (const c of charts) {
                    yield c.component.init();
                    const data = c.component.data;
                    if (data.dataTable !== undefined || data.dataSourceUrl !== undefined) {
                        throw Error('dataTable and dataSourceUrl cannot be specified when ' +
                            'chart is drawn in a Dashboard');
                    }
                }
                this.dashboard.bind(controls.map(x => x.component.wrapper), charts.map(x => x.component.wrapper));
            }
        });
    }
    draw(value) {
        this.dataTable.init(value);
    }
    _draw() {
        this.dashboard.draw(this.dataTable.getDataTable());
    }
};
GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(t) { return new (t || GoogleChartsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartsDashboardComponent, selectors: [["google-charts-dashboard"]], inputs: { data: "data" }, decls: 1, vars: 0, template: function GoogleChartsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartsDashboardComponent.prototype, "data", void 0);
GoogleChartsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartsDashboardComponent);

let GoogleChartsControlComponent = class GoogleChartsControlComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.el = el;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.data.component = this;
    }
    ensureInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.wrapper) {
                return;
            }
            yield this.loaderService.load({ packages: ['controls'] });
            let opt;
            opt = Object.create(this.data);
            opt.containerId = this.el.nativeElement.querySelector('div');
            this.wrapper = new google.visualization.ControlWrapper(opt);
        });
    }
};
GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(t) { return new (t || GoogleChartsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartsControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartsControlComponent, selectors: [["google-charts-control"]], inputs: { data: "data" }, decls: 1, vars: 0, template: function GoogleChartsControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartsControlComponent.prototype, "data", void 0);
GoogleChartsControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartsControlComponent);

let Ng2GoogleChartsModule = class Ng2GoogleChartsModule {
};
Ng2GoogleChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Ng2GoogleChartsModule });
Ng2GoogleChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Ng2GoogleChartsModule_Factory(t) { return new (t || Ng2GoogleChartsModule)(); }, providers: [
        GoogleChartsLoaderService
    ] });

function isComponent(chart) {
    return chart.wrapper !== undefined;
}
let GoogleChartEditor = class GoogleChartEditor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    createEditor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.chartEditor !== undefined) {
                return;
            }
            yield this.loaderService.load({ packages: ['charteditor'] });
            this.chartEditor = new google.visualization.ChartEditor();
            google.visualization.events.addListener(this.chartEditor, 'ok', () => {
                const wrapper = this.chartEditor.getChartWrapper();
                this.comp.wrapper = wrapper;
                this.comp.data.chartType = wrapper.getChartType();
                if (this.comp.data.options !== undefined || Object.isExtensible(this.comp.data)) {
                    this.comp.data.options = wrapper.getOptions();
                }
                this.comp.wrapper.draw();
            });
        });
    }
    openDialog(chart, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.createEditor();
            return new Promise((resolve, reject) => {
                this.comp = isComponent(chart) ? chart : chart.component;
                this.chartEditor.openDialog(this.comp.wrapper, options);
                google.visualization.events.addListener(this.chartEditor, 'ok', () => {
                    resolve(this.comp.wrapper);
                });
                google.visualization.events.addListener(this.chartEditor, 'cancel', () => {
                    reject();
                });
            });
        });
    }
};
GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(t) { return new (t || GoogleChartEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleChartsLoaderService)); };
GoogleChartEditor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GoogleChartEditor_Factory() { return new GoogleChartEditor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(GoogleChartsLoaderService)); }, token: GoogleChartEditor, providedIn: "root" });
GoogleChartEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleChartsLoaderService])
], GoogleChartEditor);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: ['googleChartsSettings']
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-chart',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { chartSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartSelectOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartReadyOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartErrorOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOverOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOutOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], regionClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], regionClickOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-charts-dashboard',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-charts-control',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2GoogleChartsModule, { declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent], exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2GoogleChartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    GoogleChartComponent,
                    GoogleChartsDashboardComponent,
                    GoogleChartsControlComponent,
                ],
                providers: [
                    GoogleChartsLoaderService
                ],
                exports: [
                    GoogleChartComponent,
                    GoogleChartsDashboardComponent,
                    GoogleChartsControlComponent,
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartEditor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: GoogleChartsLoaderService }]; }, null); })();

/*
 * Public API Surface of ng2-google-charts
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-google-charts.js.map

/***/ })

}]);
//# sourceMappingURL=volunteer-detail-volunteer-detail-module-es2015.js.map