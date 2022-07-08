(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteer-volunteer-module"],{

/***/ "2LDQ":
/*!***********************************************!*\
  !*** ./src/app/volunteer/volunteer.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-volunteer-tab {\n  color: #e8604c;\n}\n\n.how_food {\n  text-align: right;\n  margin-top: -9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZvbHVudGVlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxjQUFBO0FBQ0E7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoidm9sdW50ZWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtdm9sdW50ZWVyLXRhYntcbmNvbG9yIDogI2U4NjA0Yztcbn1cbi5ob3dfZm9vZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbn0gIl19 */");

/***/ }),

/***/ "5dNb":
/*!*********************************************!*\
  !*** ./src/app/volunteer/volunteer.page.ts ***!
  \*********************************************/
/*! exports provided: VolunteerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerPage", function() { return VolunteerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./volunteer.page.html */ "iIWJ");
/* harmony import */ var _volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./volunteer.page.scss */ "2LDQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../environments/environment */ "AytR");












let VolunteerPage = class VolunteerPage {
    constructor(modalController, alertController, http, route, router, fetch, actionSheetController, callNumber, storage) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.actionSheetController = actionSheetController;
        this.callNumber = callNumber;
        this.storage = storage;
        this.model = {};
        this.food_request = [];
        this.food_request_fulfill = [];
        this.volunteer_data = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        /* this.model.volunteer_id = JSON.parse(localStorage.getItem('volunteer_id'));
        console.log(this.model.volunteer_id);
        alert(this.model.volunteer_id); */
        this.model.volunteer_id = '';
        var user_id = JSON.parse(localStorage.getItem('user_registerd'));
        console.log(user_id);
        this.model.user_id = user_id;
        this.fetch.v_check(user_id).subscribe(res => {
            console.log(res);
            if (res.success == true) {
                this.model.status = res.status;
                this.model.volunteer_id = res.data;
                this.fetch.v_edit(this.model.volunteer_id).subscribe(res1 => {
                    this.volunteer_data = res1.data;
                    this.model.app_status = res1.data.app_status == 1 ? true : false;
                });
                if (this.model.status != 1) {
                    this.router.navigate(['/volunteer-request']);
                }
                this.fetch.get_request(this.model.volunteer_id).subscribe(res => {
                    console.log(res.data);
                    this.food_request = res.data;
                });
                this.fetch.get_received_food(this.model.volunteer_id).subscribe(res => {
                    this.food_request_fulfill = res.data;
                });
            }
            else {
                this.model.status = 0;
                this.router.navigate(['/volunteer-request']);
            }
            //alert(this.model.volunteer_id);
            if (this.model.volunteer_id == '') {
                this.router.navigate(['/volunteer-request']);
            }
        });
        this.model.food_type = '';
    }
    ionViewDidEnter() {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        // this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'NAME');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'TYPE_HERE');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'SELECT_TYPE_OF_FOOD');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'VEG');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'NON_VEG');
        this.model.key_text5 = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'ANY');
        this.model.key_text6 = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'FOOD_NEEDED_FOR_HOW_MANY_PEOPLE');
        this.model.key_text7 = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'UPLOAD_FOOD_REQUEST');
        this.model.key_text8 = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'FOOD_REQUESTS');
        this.model.key_text9 = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'HOME');
        this.model.key_text10 = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text11 = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text12 = item12[lang_code];
        let item13 = res.find(i => i.key_text === 'NEARBY_OTHER_VOLUNTEER');
        this.model.key_text13 = item13[lang_code];
        let item14 = res.find(i => i.key_text === 'REQUEST_FOOD');
        this.model.key_text14 = item14[lang_code];
        let item15 = res.find(i => i.key_text === 'FOOD_RECEIVED');
        this.model.key_text15 = item15[lang_code];
        let item16 = res.find(i => i.key_text === 'OKAY');
        this.okay = item16[lang_code];
        //});
    }
    food_type(val) {
        this.model.food_type = val;
        if (val == 1) {
            $('#v_food_' + val).addClass('active');
            $('#v_food_2').removeClass('active');
            $('#v_food_3').removeClass('active');
        }
        else if (val == 2) {
            $('#v_food_' + val).addClass('active');
            $('#v_food_1').removeClass('active');
            $('#v_food_3').removeClass('active');
        }
        else {
            $('#v_food_' + val).addClass('active');
            $('#v_food_2').removeClass('active');
            $('#v_food_1').removeClass('active');
        }
    }
    upload_req() {
        var name = $('#v_r_name').val();
        var no_of_people = $('#v_r_number').val();
        //console.log(no_of_people);
        if (name == '') {
            this.presentAlert();
        }
        else if (this.model.food_type == '') {
            this.presentAlert();
        }
        else if (no_of_people == '') {
            this.presentAlert();
        }
        else {
            let data = JSON.stringify({ 'volunteer_id': this.model.volunteer_id, 'name': name, 'food_type': this.model.food_type, 'no_of_people': no_of_people });
            console.log(data);
            this.fetch.volunteer_request(data).subscribe(res => {
                console.log(res);
                this.food_request.push(res['data']);
                this.presentError('food request is uploaded');
            });
        }
    }
    presentError(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: msg,
                buttons: [this.okay]
            });
            yield alert.present();
        });
    }
    updateVolunteer() {
        if (this.food_request.length > 0 && this.model.app_status == false) {
            this.presentActionSheet();
        }
        else {
            // console.log(this.volunteer_data);
            var app_status = this.model.app_status == true ? 1 : 0;
            let data = JSON.stringify({ 'id': this.model.volunteer_id, 'app_user_id': JSON.parse(localStorage.getItem('user_id')), 'username': this.volunteer_data.username, 'dob': this.volunteer_data.dob, 'latitude': this.volunteer_data.latitude, 'longitude': this.volunteer_data.longitude, 'colony_name': this.volunteer_data.colony_name, 'city': this.volunteer_data.city, 'state': this.volunteer_data.state, 'country': this.volunteer_data.country, 'postalCode': this.volunteer_data.postalCode, 'status': this.volunteer_data.status, 'shop_stall_name': this.volunteer_data.shop_stall_name, 'working_hour': this.volunteer_data.working_hour, 'app_status': app_status, 'countof_closeapp': Number(this.volunteer_data.countof_closeapp) });
            console.log(data);
            this.fetch.update_volunteer(data).subscribe(res => {
                console.log('record update successfully');
            });
        }
    }
    //   async receive_requested_food(id){
    // 	const modal = await this.modalController.create({
    // 		component: AssignFoodPage,
    // 		cssClass: 'custom_receiver_confirm_modal',
    // 		componentProps: {
    // 		  "paramID": 123,
    // 		  "paramTitle": "Test Title",
    // 		  "request_food_id" : id
    // 		}
    // 	  }); 
    // 	  modal.onDidDismiss().then((dataReturned) => {
    // 		if (dataReturned !== null) {
    // 		  this.dataReturned = dataReturned.data;
    // 			this.fetch.get_request(this.model.volunteer_id).subscribe(res => {
    // 				this.food_request = res.data;
    // 			});
    // 		}
    // 	  });
    // 	  return await modal.present()
    // 	//   $("#req_list_"+id).hide();
    //   }
    receive_requested_food(id) {
        let data = JSON.stringify({ 'request_food_id': id, 'donate_food_id': this.model.donate_food_id, 'status': 1 });
        this.fetch.volunteer_receive_requested_food(data).subscribe(res => {
            this.fetch.get_received_food(this.model.volunteer_id).subscribe(res => {
                this.food_request_fulfill = res.data;
            });
        });
    }
    cancelReceivedFood(id) {
        let data = JSON.stringify({ 'request_food_id': id });
        this.fetch.volunteer_received_cancel_food(data).subscribe(res => {
            this.fetch.get_received_food(this.model.volunteer_id).subscribe(res => {
                this.food_request_fulfill = res.data;
            });
            this.fetch.get_request(this.model.volunteer_id).subscribe(res => {
                console.log(res.data);
                this.food_request = res.data;
            });
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Please fill all the details',
                buttons: ['Okay']
            });
            yield alert.present();
        });
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class custom_alert_1',
                header: 'Alert',
                message: "Please guide receiver to other near volunteer. Thank you",
                buttons: [
                    {
                        text: 'Okay',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Reason For Cancel Food Request!',
                inputs: [
                    {
                        name: 'reason',
                        id: 'cancel_rsn',
                        type: 'textarea',
                        placeholder: 'Type Here...'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            var rsn = $('#cancel_rsn').val();
                            console.log(rsn);
                            if (rsn == '') {
                                this.presentAlert();
                            }
                            else {
                                $("#req_list_" + id).hide();
                                let data = JSON.stringify({ 'v_id': id, 'rsn': rsn, 'status': 3 });
                                this.fetch.volunteer_cancel_requested_food(data).subscribe(res => {
                                    this.fetch.get_request(this.model.volunteer_id).subscribe(res => {
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
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'NOTE: There are active donation receivers waiting',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Cancel all request and close app',
                        handler: () => {
                            var app_status = this.model.app_status == true ? 1 : 0;
                            let data = JSON.stringify({ 'id': this.model.volunteer_id, 'app_user_id': JSON.parse(localStorage.getItem('user_id')), 'username': this.volunteer_data.username, 'dob': this.volunteer_data.dob, 'latitude': this.volunteer_data.latitude, 'longitude': this.volunteer_data.longitude, 'colony_name': this.volunteer_data.colony_name, 'city': this.volunteer_data.city, 'state': this.volunteer_data.state, 'country': this.volunteer_data.country, 'postalCode': this.volunteer_data.postalCode, 'status': this.volunteer_data.status, 'shop_stall_name': this.volunteer_data.shop_stall_name, 'working_hour': this.volunteer_data.working_hour, 'app_status': app_status, 'countof_closeapp': Number(this.volunteer_data.countof_closeapp) + 1 });
                            this.fetch.update_volunteer(data).subscribe(res => {
                                this.showAlert();
                                console.log('record update successfully');
                            });
                            this.fetch.cancel_all_request(this.model.volunteer_id).subscribe(res => {
                                this.fetch.get_request(this.model.volunteer_id).subscribe(res => {
                                    this.food_request = res.data;
                                });
                            });
                        }
                    }, {
                        text: 'Ok I will not close the app',
                        handler: () => {
                            this.model.app_status = true;
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    call(number) {
        let data = JSON.stringify({ 'caller_id': this.model.user_id, 'callee_mobile_no': number });
        $('#add_location_spinner').show();
        this.fetch.add_call_detail(data).subscribe(res => {
            this.callNumber.callNumber(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].phone_no, true)
                .then(res => { $('#add_location_spinner').show(); console.log('Launched dialer!', res); })
                .catch(err => console.log('Error launching dialer', err));
        });
    }
};
VolunteerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
VolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-volunteer',
        template: _raw_loader_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"]],
        styles: [_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VolunteerPage);



/***/ }),

/***/ "HaGj":
/*!*****************************************!*\
  !*** ./src/app/pipes/food-type.pipe.ts ***!
  \*****************************************/
/*! exports provided: FoodTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodTypePipe", function() { return FoodTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FoodTypePipe = class FoodTypePipe {
    transform(value, arg) {
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        console.log(lang_code);
        var address_type = "";
        if (lang_code == 'en') {
            if (value == 1) {
                address_type = "Veg";
            }
            else if (value == 2) {
                address_type = "Non Veg";
            }
            else {
                address_type = "Both";
            }
        }
        else if (lang_code == 'hi') {
            if (value == 1) {
                address_type = "शाकाहारी";
            }
            else if (value == 2) {
                address_type = "मासाहारी";
            }
            else {
                address_type = "दोनों";
            }
        }
        else if (lang_code == 'te') {
            if (value == 1) {
                address_type = "వెజ్";
            }
            else if (value == 2) {
                address_type = "నాన్ వెజ్";
            }
            else {
                address_type = "రెండు";
            }
        }
        return address_type;
    }
};
FoodTypePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'foodType'
    })
], FoodTypePipe);



/***/ }),

/***/ "Iy9B":
/*!***********************************************!*\
  !*** ./src/app/volunteer/volunteer.module.ts ***!
  \***********************************************/
/*! exports provided: VolunteerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerPageModule", function() { return VolunteerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./volunteer-routing.module */ "P46v");
/* harmony import */ var _volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./volunteer.page */ "5dNb");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../captcha/captcha.component */ "ekeA");









let VolunteerPageModule = class VolunteerPageModule {
};
VolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["VolunteerPageRoutingModule"]
        ],
        declarations: [_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["VolunteerPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"]]
    })
], VolunteerPageModule);



/***/ }),

/***/ "P46v":
/*!*******************************************************!*\
  !*** ./src/app/volunteer/volunteer-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VolunteerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerPageRoutingModule", function() { return VolunteerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volunteer.page */ "5dNb");




const routes = [
    {
        path: '',
        component: _volunteer_page__WEBPACK_IMPORTED_MODULE_3__["VolunteerPage"]
    }
];
let VolunteerPageRoutingModule = class VolunteerPageRoutingModule {
};
VolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VolunteerPageRoutingModule);



/***/ }),

/***/ "UrZZ":
/*!********************************************!*\
  !*** ./src/app/pipes/address-type.pipe.ts ***!
  \********************************************/
/*! exports provided: AddressTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressTypePipe", function() { return AddressTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AddressTypePipe = class AddressTypePipe {
    transform(value, arg) {
        var address_type = "";
        if (value == 1) {
            address_type = "Home";
        }
        else if (value == 2) {
            address_type = "Work";
        }
        else {
            address_type = "Other";
        }
        return address_type;
    }
};
AddressTypePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'addressType'
    })
], AddressTypePipe);



/***/ }),

/***/ "YYwF":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, arg) {
        value = value.replace('watch?v=', 'embed/');
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "ekeA":
/*!**********************************************!*\
  !*** ./src/app/captcha/captcha.component.ts ***!
  \**********************************************/
/*! exports provided: CaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function() { return CaptchaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./captcha.component.html */ "l+ky");
/* harmony import */ var _captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha.component.scss */ "oebF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let CaptchaComponent = class CaptchaComponent {
    constructor(fetch, router) {
        this.fetch = fetch;
        this.router = router;
        this.model = {};
        this.notification = [];
    }
    ngOnInit() {
        this.pageName = this.router['routerState'].snapshot.url;
        this.model.user_id = localStorage.getItem('user_id');
        this.fetch.get_notification(this.model.user_id).subscribe(res => {
            this.notification = res['data'];
            if (this.notification.length > 0) {
                $('#black_spot').show();
            }
        });
    }
    ngOnDestroy() {
        this.fetch.read_notification(this.model.user_id).subscribe(res => {
            $('#black_spot').hide();
        });
    }
};
CaptchaComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-captcha',
        template: _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CaptchaComponent);



/***/ }),

/***/ "iIWJ":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer/volunteer.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n   \n    <ion-buttons slot=\"end\" (click)=\"openModalNotification()\">\n       <span *ngIf=\"notification.length>0\" style=\"position:absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n      top: -3px;\n      right: 3px;\n      text-align: center;\"></span>      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar> \n \n</ion-header>  -->\n<app-captcha></app-captcha>\n<ion-content class=\"custom_new_volunteer\">\n  <div style=\"display: flex;\" *ngIf=\"model.status==1\" class=\"custom_new_volunteer_btns\">\n    <div routerLink=\"/volunteer-request\">\n      {{ model.key_text13 }}\n    </div>\n    <div routerLink=\"/volunteer\" class=\"btn1 active\">\n      {{ model.key_text14 }}\n    </div> \n  </div>\n  <div class=\"ion-padding theme_width\">\n    <div class=\"volunteer_info\" style=\"margin:15px 0px;padding: 20px 25px 21px 25px\">\n      <div class=\"info_label\">Availability</div>\n      <div class=\"avail_status flex\">\t\t\t\n        <div class=\"avail_left\">Off</div>\n        <div class=\"avail_center\">\n          <ion-toggle (ionChange)=\"updateVolunteer()\" [(ngModel)]=\"model.app_status\" style=\"float:left;\"></ion-toggle>\n        </div>\n        <div class=\"avail_right\">On</div>\t\t\t\n      </div>\n    </div>\n    <div class=\"volunteer_info\">\n      <div class=\"info_single flex\">\n        <div style=\"margin-right: 7px;\">1. </div>\n        <div class=\"info_label\">{{model.key_text1}}:</div> \n        <div class=\"volunteer_input\">      \n          <input type=\"text\" class=\"custom_app_input\" placeholder=\"{{model.key_text2}}\" id=\"v_r_name\">       \n        </div>\n      </div>    \n      <div class=\"info_single\">\n        2. {{model.key_text3}} :\n        <div class=\"search_food_buttons\">\n          <div class=\"btn-group\">\n            <button class=\"grey regular btn1\" id=\"v_food_1\" (click)=\"food_type(1)\">{{model.key_text4}}.</button>\n            <button class=\"grey regular btn1\" id=\"v_food_2\" (click)=\"food_type(2)\">{{model.key_text5}}.</button>\n            <button class=\"grey regular btn1\" id=\"v_food_3\" (click)=\"food_type(3)\">{{model.key_text6}}</button>\n          </div>\n        </div> \n      </div>\n      <div class=\"info_single\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"custom_left\">\n            3. {{model.key_text7}}\n          </ion-col>\n          <ion-col size=\"1\" class=\"center\">\n            :\n          </ion-col>\n          <ion-col size=\"5\" class=\"custom_right\">\n            <div class=\"how_food\">\n              <input type=\"button\" class=\"minus\" onclick=\"volunteerDecrementValue()\" value=\"-\" />\n              <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"v_r_number\" />\n              <input type=\"button\" class=\"plus\" onclick=\"volunteerIncrementValue()\" value=\"+\" />\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <button class=\"desgin_btn white\" (click)=\"upload_req()\">{{model.key_text8}}</button>\n    </div>\n\n    <div class=\"food_request\">\n      <div class=\"food_request_heading size_18\">{{model.key_text9}}</div>\n      <div class=\"food_request_entry\" *ngFor=\"let x of food_request;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;\">\n        <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n        <div class=\"entry_name\" style=\"width: 70%;\">\n          <span class=\"green\">{{x.name}}</span> \n          <br>\n          {{x.food_type | foodType}} food for {{x.no_of_person}} person\n          \n        </div> \n       \n        <!-- <div *ngIf=\"x.donor_id!=0\" class=\"entry_tick\" style=\"width: 12%; text-align: right;\">\n          <img src=\"assets/images/round_right.svg\" (click)=\"receive_requested_food(x.id)\" style=\"width: 25px;\">\n        </div>     -->\n        <div class=\"custom_new_close_btn entry_delete\" style=\"width: 11%;\">\n          <img src=\"assets/images/round_cross.svg\" style=\"margin-top:0px;\" (click)=\"presentAlertPrompt(x.id)\">\n        </div>      \n      </div>\n    \n    </div>\n\n    <div class=\"food_request\">\n      <div class=\"food_request_heading size_18\">{{model.key_text15}}</div>\n      <div class=\"food_request_entry\" *ngFor=\"let x of food_request_fulfill;let i = index; \" id=\"req_fullfil_list_{{x.id}}\" style=\"position:relative;\">\n        <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n        <div class=\"entry_name\" style=\"width: 65%;\">\n          <span class=\"green\">{{x.name}}</span> \n          <br>\n          {{x.food_type | foodType}} food for {{x.no_of_person}} person donated by {{ x.username }}\n        </div>\n        <div class=\"size_15 medium\" style=\"width: 27px;\n          background: #419B95;\n          color: white;\n          padding: 4px 0px 0px 6px;\n          border-radius: 30px;height:26px;\" (click)=\"call(x.mobile_no)\"><ion-icon name=\"call-outline\"></ion-icon></div>  \n        <div class=\"entry_tick\" style=\"width: 12%; text-align: right;\">\n          <img src=\"assets/images/round_right.svg\" (click)=\"receive_requested_food(x.id)\" style=\"width: 25px;\">\n        </div>    \n        <div class=\"custom_new_close_btn entry_delete\" style=\"width: 11%;\">\n          <img src=\"assets/images/round_cross.svg\" style=\"margin-top:0px;\" (click)=\"cancelReceivedFood(x.id)\">\n        </div>      \n      </div>\n    \n    </div>\n\n  </div>\n</ion-content>  \n\n<ion-footer>\n  <ion-toolbar>    \n      <ion-segment color=\"transparent\" value=\"volunteer\">\n        <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n            <!--<img src=\"assets/images/red_footer_home.svg\">-->\n            <ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>\n            <ion-label class=\"size_12 medium\" >{{model.key_text10}}</ion-label>    \n        </ion-segment-button>\n        <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n          <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n          <img src=\"assets/images/grey_footer_activity.svg\">\n          <ion-label class=\"size_12 medium\">{{model.key_text11}}</ion-label>    \n        </ion-segment-button>        \n        <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">            \n          <ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>\n          <!--<img src=\"assets/images/grey_footer_volunteer.svg\">-->\n          <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text12}}</ion-label>                \n        </ion-segment-button>        \n      </ion-segment>      \n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/safe.pipe */ "YYwF");
/* harmony import */ var _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/address-type.pipe */ "UrZZ");
/* harmony import */ var _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/food-type.pipe */ "HaGj");





let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__["AddressTypePipe"], _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__["FoodTypePipe"]],
        imports: [],
        exports: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__["AddressTypePipe"], _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__["FoodTypePipe"]],
    })
], PipesModule);



/***/ }),

/***/ "l+ky":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/captcha/captcha.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\"></span>      \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n      \n     \n      \n    </ion-toolbar>\n  </ion-header>");

/***/ }),

/***/ "oebF":
/*!************************************************!*\
  !*** ./src/app/captcha/captcha.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0Y2hhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=volunteer-volunteer-module-es2015.js.map