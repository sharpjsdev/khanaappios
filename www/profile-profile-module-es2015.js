(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











let ProfilePage = class ProfilePage {
    constructor(storage, http, route, router, fetch, alertController, platform, datepipe) {
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.alertController = alertController;
        this.platform = platform;
        this.datepipe = datepipe;
        this.notidata = {
            id: "",
            admin_notification: 0,
            app_notification: 0
        };
        this.model = {};
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.router.navigate(['/home']);
        });
    }
    ngOnInit() {
        this.model.search = false;
    }
    appNotifications(app_noti) {
        // console.log("$event.detail.checked:",$event.detail.checked);
        // console.log("$event.detail.value:",$event.detail.value);
        // console.log("$event",$event);	
        var id = JSON.stringify(this.model.user_id);
        if (app_noti == true) {
            this.notidata.app_notification = 0,
                this.notidata.id = id;
            this.fetch.notify(this.notidata).subscribe(res => {
                console.log("this is notification response", res);
            });
        }
        else {
            this.notidata.app_notification = 1,
                this.notidata.id = id;
            this.fetch.notify(this.notidata).subscribe(res => {
                console.log("this is notification response", res);
            });
        }
    }
    adminNotifications(update_noti) {
        // console.log("admin $event.detail.checked:",$event.detail.checked);
        // console.log("admin $event.detail.value:",$event.detail.value);
        // console.log("admin $event",$event);
        var id = JSON.stringify(this.model.user_id);
        if (update_noti == true) {
            this.notidata.admin_notification = 0,
                this.notidata.id = id;
            this.fetch.notify(this.notidata).subscribe(res => {
                console.log("this is notification response", res);
            });
        }
        else {
            this.notidata.admin_notification = 1,
                this.notidata.id = id;
            this.fetch.notify(this.notidata).subscribe(res => {
                console.log("this is notification response", res);
            });
        }
    }
    ionViewWillEnter() {
        this.model.key_page_name = 'Profile Page';
        this.model.key_username = 'Username';
        this.model.key_dob = 'Date Of Birth';
        this.model.key_food_type = 'Type of food you prefer';
        this.model.key_veg = 'Veg';
        this.model.key_non_veg = 'Non Veg';
        this.model.key_both = 'Both';
        this.model.key_save_changes = 'Save Changes';
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        let maxDate = new Date((new Date().getFullYear() - 18), new Date().getMonth(), new Date().getDate());
        let latest_date = this.datepipe.transform(maxDate, 'yyyy-MM-dd');
        this.model.latest_date = latest_date;
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'PROFILE_PAGE');
        this.model.key_page_name = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'USERNAME');
        this.model.key_username = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'DATE_OF_BIRTH');
        this.model.key_dob = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'TYPE_OF_FOOD_YOU_PREFER');
        this.model.key_food_type = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'VEG');
        this.model.key_veg = item5[lang_code];
        let item6 = res.find(i => i.key_text === 'NON_VEG');
        this.model.key_non_veg = item6[lang_code];
        let item7 = res.find(i => i.key_text === 'ANY');
        this.model.key_both = item7[lang_code];
        let item8 = res.find(i => i.key_text === 'SAVE_CHANGES');
        this.model.key_save_changes = item8[lang_code];
        let item9 = res.find(i => i.key_text === 'THIS_FIELD_IS_REQUIRED');
        this.model.key_valid = item9[lang_code];
        let item10 = res.find(i => i.key_text === 'PROFILE_UPDATE_MSG');
        this.model.succ_msg = item10[lang_code];
        let item11 = res.find(i => i.key_text === 'OKAY');
        this.model.okay = item11[lang_code];
        let item12 = res.find(i => i.key_text === 'OTHER_ADMIN');
        this.model.other_admin = item12[lang_code];
        let item23 = res.find(i => i.key_text === 'CANCEL');
        this.model.key_text23 = item23[lang_code];
        let item13 = res.find(i => i.key_text === 'DELETE_MY_ACCOUNT');
        this.model.key_text13 = item13[lang_code];
        let item14 = res.find(i => i.key_text === 'DELETE_MY_ACCOUNT_CONFIRM');
        this.model.key_text14 = item14[lang_code];
        //});
        this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
        let data = JSON.stringify({ 'id': this.model.user_id });
        this.fetch.profile(data).subscribe(res => {
            this.notidata.admin_notification = res['admin_notification'];
            if (this.notidata.admin_notification == 1) {
                this.update_noti = false;
            }
            else {
                this.update_noti = true;
            }
            this.notidata.app_notification = res['app_notification'];
            if (this.notidata.app_notification == 1) {
                this.app_noti = false;
            }
            else {
                this.app_noti = true;
            }
            this.model.username = res['username'];
            this.model.dob = res['dob'];
            this.model.food_type = res['type_of_food_you_prefer'];
            $('#profile_food_' + res['type_of_food_you_prefer']).addClass('active');
        });
    }
    food_type(val) {
        this.model.food_type = val;
        if (val == 1) {
            $('#profile_food_' + val).addClass('active');
            $('#profile_food_2').removeClass('active');
            $('#profile_food_3').removeClass('active');
        }
        else if (val == 2) {
            $('#profile_food_' + val).addClass('active');
            $('#profile_food_1').removeClass('active');
            $('#profile_food_3').removeClass('active');
        }
        else {
            $('#profile_food_' + val).addClass('active');
            $('#profile_food_2').removeClass('active');
            $('#profile_food_1').removeClass('active');
        }
    }
    update_profile() {
        this.model.search = true;
        var username = $('#profile_username').val();
        var dob = $('#profile_dob').val();
        if (!username) {
            this.model.search = false;
            $('#username').show();
            $('#dob').hide();
            $('#foodtype').hide();
        }
        else if (!dob) {
            this.model.search = false;
            $('#username').hide();
            $('#dob').show();
            $('#foodtype').hide();
        }
        else if (!this.model.food_type) {
            this.model.search = false;
            $('#username').hide();
            $('#dob').hide();
            $('#foodtype').show();
        }
        else {
            $('#username').hide();
            $('#dob').hide();
            $('#foodtype').hide();
            let profile_data = JSON.stringify({ 'id': this.model.user_id, 'username': username, 'dob': dob, 'food_type': this.model.food_type });
            this.fetch.registerUser(profile_data).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.model.search = false;
                if (res.success == true) {
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        //header: 'alert',
                        message: this.model.succ_msg,
                        buttons: [this.model.okay]
                    });
                    yield alert.present();
                }
            }));
        }
    }
    deleteAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class custom_alert_1',
                message: this.model.key_text14,
                buttons: [
                    {
                        text: this.model.key_text23,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: this.model.okay,
                        handler: () => {
                            let data = { id: JSON.parse(localStorage.getItem('user_registerd')) };
                            this.fetch.deleteMyAccount(data).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                localStorage.clear();
                                this.router.navigate(['/language']);
                            }));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"ion-padding\">\n    \n    <div class=\"single_page_title medium size_18\">\n      <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      {{model.key_page_name}}\n    </div>\n  </div>\n\n  <div class=\"ion-padding\">\n    <div class=\"profile app_input_text\">      \n      <input type=\"text\" id=\"profile_username\" value=\"{{model.username}}\" placeholder=\"{{model.key_username}}\">      \n    </div>\n    <span class=\"error\" id=\"username\">{{model.key_valid}}</span>  \n    <div class=\"profile app_input_text center_input\">    \n      <input type=\"text\" disabled>  \n      <ion-datetime placeholder=\"{{model.key_dob}}\" class=\"regular\" id=\"profile_dob\" value=\"{{model.dob}}\" max=\"{{ model.latest_date }}\" displayFormat=\"MMMM DD, YYYY\"></ion-datetime>         \n    </div> \n    <span class=\"error\" id=\"dob\">{{model.key_valid}}</span>  \n    <br><br>\n    <div class=\"grey\" style=\"margin-left: 23px;\">{{model.key_food_type}} : </div>\n\n    <div class=\"btn-group\">\n      <button class=\"grey regular btn2\" id=\"profile_food_1\" (click)=\"food_type(1)\">{{model.key_veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"profile_food_2\" (click)=\"food_type(2)\">{{model.key_non_veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"profile_food_3\" (click)=\"food_type(3)\">{{model.key_both}}</button>\n    </div> \n    <span class=\"error\" id=\"foodtype\">{{model.key_valid}}</span>  \n  </div>\n  <div>\n    <!-- <ion-item>\n      <ion-label>CURRENT UPDATE</ion-label>\n      <ion-toggle  [(ngModel)]=\"app_noti\" (ionChange)=\"appNotifications(app_noti)\"></ion-toggle>\n    </ion-item> -->\n  \n    <ion-item>\n      <ion-label>{{model.other_admin}}</ion-label>\n      <ion-toggle  [(ngModel)]=\"update_noti\" (ionChange)=\"adminNotifications(update_noti)\"></ion-toggle>\n    </ion-item>\n  </div>\n  <div class=\"delete-account\">\n    <ion-label (click)=\"deleteAccount()\"><ion-icon name=\"trash-outline\"></ion-icon> {{model.key_text13}}</ion-label>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n      <!-- <ion-router-link href=\"\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link> -->\n\t   <button class=\"app_btn\" (click)=\"update_profile()\" *ngIf=\"!model.search\">{{model.key_save_changes}}</button>\n     <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error {\n  display: none;\n  color: red;\n  margin-left: 8px;\n}\n\nion-toggle {\n  --background: rgb(179, 179, 179);\n  --background-checked: #7be0da;\n  --handle-background: white;\n  --handle-background-checked: #419B95;\n}\n\n.delete-account {\n  padding: 15px;\n  font-size: 18px;\n  color: #419b95;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUVBLDBCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOnJlZDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuaW9uLXRvZ2dsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTc5LCAxNzksIDE3OSk7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM3YmUwZGE7XG4gIFxuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzQxOUI5NTtcbiAgfVxuLmRlbGV0ZS1hY2NvdW50IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzQxOWI5NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map