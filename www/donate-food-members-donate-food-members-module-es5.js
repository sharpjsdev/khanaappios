(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-food-members-donate-food-members-module"], {
    /***/
    "Bz+T":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate-food-members/donate-food-members.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BzT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-captcha></app-captcha>\n<ion-content>\n<div class=\"ion-padding theme_width\"> \n  <div class=\"search_food_bg\" style=\"min-height: 370px;\">\n    <div class=\"\">\n      <!-- <span id=\"error\" style=\"color:red;display:none;margin-left: 1rem;\">Please Select food type.</span> -->\n\t    <div class=\"start_number left_padding green\">\n        <div class=\"size_16 medium big_heading\">{{model.key_text1}}</div>\n        <div class=\"checkbox\">\n          <input type=\"checkbox\" id=\"vegcheckbox\" name=\"\" value=\"veg\" (change)=\"showCount($event)\" >\n          <label for=\"vegcheckbox\" class=\"green\"><span>{{model.key_text2}}</span></label>\n       </div>\n      </div>   \n      <ion-row id=\"veg\" style=\"display: none;\">\n        <ion-col size=\"6\" class=\"custom_left left_padding\" style=\"padding-left: 12px;margin-top:10px\">\n          <!-- <div class=\"s_number\">2.</div> -->\n          <div>{{model.key_text6}}</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"center vertical_col\" style=\"margin-top:10px\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"decrementValue2()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"number2\" disabled/>\n            <input type=\"button\" class=\"plus\" onclick=\"incrementValue2()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <br>\n      <div class=\"start_number left_padding green\">\n        <div class=\"checkbox\">\n          <input type=\"checkbox\" id=\"non-vegcheckbox\" value=\"nonveg\" (change)=\"showCount2($event)\">\n          <label for=\"non-vegcheckbox\" class=\"green\"><span>{{model.key_text3}} </span></label>\n       </div>\n        <!-- <input style=\"margin-right: 6px;\" type=\"checkbox\" id=\"non-vegcheckbox\" value=\"nonveg\" (change)=\"showCount2($event)\">   -->\n      </div>\n      \n      <ion-row id=\"nonveg\" style=\"display: none;\">\n        <ion-col size=\"6\" class=\"custom_left left_padding\" style=\"padding-left: 12px;margin-top:10px\">\n          <!-- <div class=\"s_number\">2.</div> -->\n          <div>{{model.key_text6}}</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"center vertical_col\" style=\"margin-top:10px\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"decrementValue3()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"non-veg\" disabled/>\n            <input type=\"button\" class=\"plus\" onclick=\"incrementValue3()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>   \n</div>\n\n</ion-content>\n<div class=\"app_button\">\n  <button class=\"app_btn\" (click)=\"review()\" *ngIf=\"!model.search\">{{model.key_text7}}</button>\n  <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n  </div>\n<ion-footer>\n  <ion-toolbar>    \n    \n    <br>\n    <ion-segment value=\"home\" color=\"transparent\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n        <img src=\"assets/images/red_footer_home.svg\">\n        <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text8}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text9}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n        <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_volunteer.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text10}}</ion-label>    \n      </ion-segment-button>\n    </ion-segment>      \n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n  \n\n";
      /***/
    },

    /***/
    "G2PK":
    /*!*******************************************************************!*\
      !*** ./src/app/donate-food-members/donate-food-members.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function G2PK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checkbox {\n  width: 100%;\n  margin: 15px auto;\n  position: relative;\n  display: block;\n}\n.checkbox label {\n  position: relative;\n  min-height: 34px;\n  display: block;\n  padding-left: 37px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n  margin-left: -3px;\n}\n.checkbox label span {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.checkbox label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 5px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.28s ease;\n  border-radius: 3px;\n  border: 2px solid #419b95;\n}\n.checkbox label:after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 5px;\n  border-bottom: 2px solid #419b95;\n  border-left: 2px solid #419b95;\n  transform: rotate(-45deg) scale(0);\n  transition: transform ease 0.25s;\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n.checkbox input[type=checkbox] {\n  width: auto;\n  opacity: 1e-8;\n  position: absolute;\n  left: 0;\n  margin-left: -20px;\n}\n.checkbox input[type=checkbox]:checked ~ label:before {\n  border: 2px solid #419b95;\n}\n.checkbox input[type=checkbox]:checked ~ label:after {\n  transform: rotate(-45deg) scale(1);\n}\n.checkbox input[type=checkbox]:focus + label::before {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvbmF0ZS1mb29kLW1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFWjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1k7RUFDSSx5QkFBQTtBQUNoQjtBQUNZO0VBQ0ksa0NBQUE7QUFDaEI7QUFFUTtFQUNJLFVBQUE7QUFBWiIsImZpbGUiOiJkb25hdGUtZm9vZC1tZW1iZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1ncmVlbjogIzM0QzM3QTsgXG4uY2hlY2tib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogMzRweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjhzIGVhc2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDE5Yjk1O1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZSAwLjI1cztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG9wYWNpdHk6IDAuMDAwMDAwMDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgICAgICAmOmNoZWNrZWQgfiBsYWJlbHtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDE5Yjk1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzICsgbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "T9ss":
    /*!***************************************************************************!*\
      !*** ./src/app/donate-food-members/donate-food-members-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: DonateFoodMembersPageRoutingModule */

    /***/
    function T9ss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodMembersPageRoutingModule", function () {
        return DonateFoodMembersPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _donate_food_members_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate-food-members.page */
      "f93t");

      var routes = [{
        path: '',
        component: _donate_food_members_page__WEBPACK_IMPORTED_MODULE_3__["DonateFoodMembersPage"]
      }];

      var DonateFoodMembersPageRoutingModule = function DonateFoodMembersPageRoutingModule() {
        _classCallCheck(this, DonateFoodMembersPageRoutingModule);
      };

      DonateFoodMembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonateFoodMembersPageRoutingModule);
      /***/
    },

    /***/
    "ekeA":
    /*!**********************************************!*\
      !*** ./src/app/captcha/captcha.component.ts ***!
      \**********************************************/

    /*! exports provided: CaptchaComponent */

    /***/
    function ekeA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function () {
        return CaptchaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./captcha.component.html */
      "l+ky");
      /* harmony import */


      var _captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./captcha.component.scss */
      "oebF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CaptchaComponent = /*#__PURE__*/function () {
        function CaptchaComponent(fetch, router) {
          _classCallCheck(this, CaptchaComponent);

          this.fetch = fetch;
          this.router = router;
          this.model = {};
          this.notification = [];
        }

        _createClass(CaptchaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this.notification = res['data'];

              if (_this.notification.length > 0) {
                $('#black_spot').show();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.fetch.read_notification(this.model.user_id).subscribe(function (res) {
              $('#black_spot').hide();
            });
          }
        }]);

        return CaptchaComponent;
      }();

      CaptchaComponent.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      CaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-captcha',
        template: _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CaptchaComponent);
      /***/
    },

    /***/
    "f93t":
    /*!*****************************************************************!*\
      !*** ./src/app/donate-food-members/donate-food-members.page.ts ***!
      \*****************************************************************/

    /*! exports provided: DonateFoodMembersPage */

    /***/
    function f93t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodMembersPage", function () {
        return DonateFoodMembersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_food_members_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate-food-members.page.html */
      "Bz+T");
      /* harmony import */


      var _donate_food_members_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate-food-members.page.scss */
      "G2PK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _error_msg_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../error-msg.service */
      "ElZd");

      var DonateFoodMembersPage = /*#__PURE__*/function () {
        function DonateFoodMembersPage(errorMsg, modalController, router, fetch, storage, alertController) {
          _classCallCheck(this, DonateFoodMembersPage);

          this.errorMsg = errorMsg;
          this.modalController = modalController;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.model = {};
          this.notification = [];
        }

        _createClass(DonateFoodMembersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.search = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.app_user = JSON.parse(localStorage.getItem('user_id'));
            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            this.model.alert_text = 'Please specify donation serving to proceed further';
            this.model.okay = 'okay';
            this.model.food_type = null;
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'SELECT_TYPE_OF_FOOD_AND_NO_OF_PEPOPLE';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'BOTH';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'TOTAL_NO._OF_PACKETS';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'EACH_PACKET_CONTAINS_FOOD_FOR_HOW_MANY_PEOPLE';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'REVIEW_YOUR_DONATION_REQUEST';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_SPECIFY_DETAILS';
            });
            this.model.alert_text = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item12[lang_code]; //});
          }
        }, {
          key: "food_type",
          value: function food_type(val) {
            this.model.food_type = val;

            if (val == 1) {
              $('#d_food_' + val).addClass('active');
              $('#d_food_2').removeClass('active');
            } else if (val == 2) {
              $('#d_food_' + val).addClass('active');
              $('#d_food_1').removeClass('active');
            }
          }
        }, {
          key: "review",
          value: function review() {
            var _this2 = this;

            this.model.search = true;
            var number2 = $('#number2').val();
            var non_veg = 0;

            if ($('#vegcheckbox').prop('checked') == false && $('#non-vegcheckbox').prop('checked') == false) {
              this.model.search = false; //$('#error').show();

              this.errorMsg.showModal(this.model.alert_text);
            } else {
              //$('#error').hide();
              //number = parseInt($('#number').val());
              if ($('#vegcheckbox').prop('checked') == true) {
                number2 = parseInt($('#number2').val());
                this.model.food_type = 1;
                this.model.isveg = true;
              } else {
                number2 = 0;
                this.model.isveg = false;
              }

              if ($('#non-vegcheckbox').prop('checked') == true) {
                non_veg = parseInt($('#non-veg').val());
                this.model.food_type = 2;
                this.model.isnonveg = true;
              } else {
                non_veg = 0;
                this.model.isnonveg = false;
              } //var id = parseInt(this.route.snapshot.params['id']);
              //var total_food = number*number2;


              var total_food = number2;
              var data = JSON.stringify({
                'app_user_id': this.app_user,
                'food_type': this.model.food_type,
                'is_veg': this.model.isveg,
                'is_nonveg': this.model.isnonveg,
                'no_of_packets': null,
                'each_packet_contain_food_for': number2,
                'total_veg_food': number2,
                'total_nonveg_food': non_veg
              });
              this.fetch.donate_food_details_new(data).subscribe(function (res) {
                _this2.model.search = false;

                _this2.router.navigate(['/donate-food-review', res.donate_food_id1, res.donate_food_id2]);
              });
            }
          }
        }, {
          key: "showCount",
          value: function showCount(event) {
            if ($('#vegcheckbox').prop('checked') == true) {
              $('#veg').show();
            } else {
              $('#veg').hide();
            }
          }
        }, {
          key: "showCount2",
          value: function showCount2(event) {
            if ($('#non-vegcheckbox').prop('checked') == true) {
              $('#nonveg').show();
            } else {
              $('#nonveg').hide();
            }
          }
        }]);

        return DonateFoodMembersPage;
      }();

      DonateFoodMembersPage.ctorParameters = function () {
        return [{
          type: _error_msg_service__WEBPACK_IMPORTED_MODULE_8__["ErrorMsgService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      DonateFoodMembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-food-members',
        template: _raw_loader_donate_food_members_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_food_members_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonateFoodMembersPage);
      /***/
    },

    /***/
    "l+ky":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/captcha/captcha.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function lKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\"></span>      \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n      \n     \n      \n    </ion-toolbar>\n  </ion-header>";
      /***/
    },

    /***/
    "oebF":
    /*!************************************************!*\
      !*** ./src/app/captcha/captcha.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function oebF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0Y2hhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "vV63":
    /*!*******************************************************************!*\
      !*** ./src/app/donate-food-members/donate-food-members.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DonateFoodMembersPageModule */

    /***/
    function vV63(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodMembersPageModule", function () {
        return DonateFoodMembersPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _donate_food_members_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donate-food-members-routing.module */
      "T9ss");
      /* harmony import */


      var _donate_food_members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donate-food-members.page */
      "f93t");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var DonateFoodMembersPageModule = function DonateFoodMembersPageModule() {
        _classCallCheck(this, DonateFoodMembersPageModule);
      };

      DonateFoodMembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_food_members_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonateFoodMembersPageRoutingModule"]],
        declarations: [_donate_food_members_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodMembersPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], DonateFoodMembersPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=donate-food-members-donate-food-members-module-es5.js.map