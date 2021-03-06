(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"], {
    /***/
    "00wH":
    /*!*********************************************!*\
      !*** ./src/app/about-us/about-us.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutUsPageModule */

    /***/
    function wH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function () {
        return AboutUsPageModule;
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


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");
      /* harmony import */


      var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about-us-routing.module */
      "MiEk");
      /* harmony import */


      var _about_us_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about-us.page */
      "aqON");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-recaptcha */
      "jCJ1");

      var AboutUsPageModule = function AboutUsPageModule() {
        _classCallCheck(this, AboutUsPageModule);
      };

      AboutUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_6__["AboutUsPageRoutingModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaModule"]],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_7__["AboutUsPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_5__["CaptchaComponent"]]
      })], AboutUsPageModule);
      /***/
    },

    /***/
    "3SwB":
    /*!*********************************************!*\
      !*** ./src/app/about-us/about-us.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function SwB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".box input {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.box p {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.box input:focus ~ label {\n  outline: -webkit-focus-ring-color auto 5px;\n}\n.box input:checked + p {\n  -webkit-line-clamp: unset;\n}\n.box input:checked ~ label {\n  display: none;\n}\n/* From here on presentation styles */\n.box p {\n  margin: 0;\n}\n.swiper-slide img {\n  width: 130px;\n  max-width: 100%;\n  max-height: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.thanks_logo {\n  width: 50%;\n  margin: 0px 0px;\n}\n.current_location_spinner_position {\n  left: 50%;\n  position: absolute;\n  top: 80%;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRE47QUFJSTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBRk47QUFLSTtFQUNFLDBDQUFBO0FBSE47QUFNSTtFQUNFLHlCQUFBO0FBSk47QUFPSTtFQUNFLGFBQUE7QUFMTjtBQVdFLHFDQUFBO0FBTUU7RUFDRSxTQUFBO0FBYk47QUFtQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUdBLGlCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQWxCSjtBQW9CQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBakJKO0FBbUJBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFoQkYiLCJmaWxlIjoiYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XG4gIFxuICAgIGlucHV0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7ICBcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIFxuICAgIGlucHV0OmZvY3VzIH4gbGFiZWwge1xuICAgICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpjaGVja2VkICsgcCB7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHVuc2V0O1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gIFxuICAvKiBGcm9tIGhlcmUgb24gcHJlc2VudGF0aW9uIHN0eWxlcyAqL1xuICBcbiAgXG4gIC5ib3gge1xuICAgXG4gICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICB9XG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIFxuICAgIFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4udGhhbmtzX2xvZ28ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3Bpbm5lcl9wb3NpdGlvbntcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODAlO1xuICB6LWluZGV4OiA5OTk7XG4gIFxufSJdfQ== */";
      /***/
    },

    /***/
    "MiEk":
    /*!*****************************************************!*\
      !*** ./src/app/about-us/about-us-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutUsPageRoutingModule */

    /***/
    function MiEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function () {
        return AboutUsPageRoutingModule;
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


      var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about-us.page */
      "aqON");

      var routes = [{
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
      }];

      var AboutUsPageRoutingModule = function AboutUsPageRoutingModule() {
        _classCallCheck(this, AboutUsPageRoutingModule);
      };

      AboutUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutUsPageRoutingModule);
      /***/
    },

    /***/
    "aM5c":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function aM5c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content>\n\n  <div class=\"ion-padding\" style=\"padding: 35px 39px;\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"single_page_title medium size_18\" style=\"margin-left: 0px;\">{{ model.key_text1 }}</div>\n  </div>\n\n  <div class=\"ion-padding\" style=\"margin-top: -28px; padding: 35px 39px;\">         \n    <div class=\"regular size_15 box\">\n      <input type=\"checkbox\" id=\"expanded\" (click)=\"showMore()\">\n     <p>{{ model.aboutus }}</p>\n     \n    </div>\n    <div class=\"know_more\" *ngIf=\"model.aboutus != ''\">\n      <label class=\"red regular\" for=\"expanded\" id=\"know_more\" role=\"button\">{{ model.key_text4 }}</label>\n      <img src=\"assets/images/right_arrow.svg\">\n    </div>\n<br><br>\n  <div class=\"single_page_title medium size_18\" style=\"margin-left: 0px;\">{{ model.key_text2 }}</div>\n  \n  <div class=\"thanks_logos\">\n    <ion-slides>\n      <ion-slide *ngFor=\"let x of icons let i =index\">\n        <div class=\"thanks_logo tl_1\">\n          <img src=\"{{model.image_url}}{{x.icon1}}\">\n        </div>\n        <div class=\"thanks_logo tl_2\" >\n          <img src=\"{{model.image_url}}{{x.icon2}}\">\n        </div>\n      </ion-slide>\n\n      <!-- <ion-slide>\n        <div class=\"thanks_logo tl_1\">\n          <img src=\"assets/images/thanks_logo_1.png\">\n        </div>\n        <div class=\"thanks_logo tl_2\">\n          <img src=\"assets/images/thanks_logo_2.png\">\n        </div>\n      </ion-slide> -->\n    </ion-slides>\n  </div>\n\n  <div class=\"single_page_title medium size_18\" style=\"margin-left: 0px;\">{{ model.key_text3 }}</div>\n  <div class=\"about_contact\">\n    <div class=\"app_input_text\">   \n      <input type=\"text\" placeholder=\"{{ model.key_text8 }} * \" name=\"full_name\" id=\"full_name\">  \n      <span style=\"color:red;display:none;margin-left:1rem\" id=\"full_name_msg\">{{model.key_text13}}</span>     \n       \n    </div>\n    \n    <div class=\"app_input_text\">     \n      \n      <input type=\"email\" placeholder=\"{{ model.key_text9 }} *\" name=\"email\" id=\"email\">\n      <span style=\"color:red;display:none;margin-left:1rem\" id=\"email_msg\">{{model.key_text13}}</span>\n      <span style=\"color:red;display:none;margin-left:1rem\" id=\"correct_email_msg\">{{model.key_text14}}</span>       \n    </div>\n    \n    <div class=\"app_input_text\">\n             \n      <input type=\"number\" placeholder=\"{{ model.key_text10 }} *\" name=\"phone_no\" id=\"phone_no\"> \n      <span style=\"color:red;display:none;margin-left:1rem\" id=\"phone_no_msg\">{{model.key_text13}}</span>\n      <span style=\"color:red;display:none;margin-left:1rem\" id=\"correct_phone_msg\">{{model.key_text15}}</span>     \n    </div>\n   \n    <div class=\"app_input_text\">      \n      <ion-textarea rows=\"4\" placeholder=\"{{ model.key_text11 }}\" class=\"custom_textarea\" name=\"message\" id=\"message\"></ion-textarea>      \n      <span style=\"color:red;display:none;margin-left:1rem\" id=\"message_msg\">{{model.key_text13}}</span>\n    </div>\n  </div>\n  <div class=\"about_contact\">\n      <re-captcha\n      (resolved)=\"captchaResolved($event)\"\n      siteKey=\"6LfqyzIaAAAAAOCq3d6w-ArhGUNkP_TXWPJPJbPQ\"\n    ></re-captcha>\n  </div>\n  <span style=\"color:red;display:none;margin-left:1rem\" id=\"captcha_msg\">{{model.key_text16}}</span>\n  <div class=\"app_button\">\n    <button  class=\"app_btn about_btn\" *ngIf=\"!model.search\" (click)=\"saveForm()\">{{ model.key_text12 }}</button>\n    <button class=\"app_btn\" style=\"padding:10px\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n  </div>\n\n     \n  </div>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n      <ion-router-link href=\"\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link>\n    </div>\n  </ion-toolbar>\n</ion-footer> -->\n";
      /***/
    },

    /***/
    "aqON":
    /*!*******************************************!*\
      !*** ./src/app/about-us/about-us.page.ts ***!
      \*******************************************/

    /*! exports provided: AboutUsPage */

    /***/
    function aqON(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPage", function () {
        return AboutUsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about-us.page.html */
      "aM5c");
      /* harmony import */


      var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-us.page.scss */
      "3SwB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AboutUsPage = /*#__PURE__*/function () {
        function AboutUsPage(fetch, zone, alertController, storage) {
          _classCallCheck(this, AboutUsPage);

          this.fetch = fetch;
          this.zone = zone;
          this.alertController = alertController;
          this.storage = storage;
          this.captchaPassed = false;
          this.model = {};
          this.icons = [];
        }

        _createClass(AboutUsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.search = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            setTimeout(function () {
              $('.current_location_spinner_position').hide();
            }, 10000);
            this.model.image_url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'ABOUT_US';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'SPECIAL_THANKS_TO';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'CONTACT_US';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'KNOW_MORE';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'SEND_MESSAGE';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'ABOUT_US_MSG';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'KNOW_LESS';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'FULL_NAME';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'EMAIL';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'PHONE_NO';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'MESSAGE';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'SUBMIT';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'THIS_FIELD_IS_REQUIRED';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'ENTER_VALID_EMAIL_ADDRESS';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'ENTER_VALID_PHONE_NUMBER';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'CAPTCHA_REQUIRED';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'CLOSE';
            });
            this.model.key_text17 = item17[lang_code]; //});

            this.fetch.getAboutUsPageCOntent(lang_code).subscribe(function (res) {
              _this.model.aboutus = res.content.Aboutus;
              _this.model.Specialthanks = res.content.Specialthanks;

              _this.model.Specialthanks.forEach(function (val, i) {
                if (i % 2 == 0) {
                  _this.icons.push({
                    icon1: val.icon,
                    icon2: ''
                  });
                } else {
                  _this.icons[i - 1]['icon2'] = val.icon;
                }
              });
            });
          }
        }, {
          key: "captchaResolved",
          value: function captchaResolved(response) {
            var _this2 = this;

            console.log('in');
            this.zone.run(function () {
              _this2.captchaPassed = true;
              _this2.captchaResponse = response;
            });
          }
        }, {
          key: "saveForm",
          value: function saveForm() {
            var _this3 = this;

            var re_email = /\S+@\S+\.\S+/;
            var re_mobile = /^[0-9]*$/;
            var full_name = $('#full_name').val();
            var email = $('#email').val();
            var mobile = $('#phone_no').val();
            var message = $('#message').val();
            this.model.search = true;

            if (!full_name) {
              this.model.search = false;
              $('#full_name_msg').show();
              $('#email_msg').hide();
              $('#phone_no_msg').hide();
              $('#captcha_msg').hide();
              $('#correct_email_msg').hide();
              $('#correct_phone_msg').hide();
              $('#message_msg').hide();
            } else if (!email) {
              this.model.search = false;
              $('#full_name_msg').hide();
              $('#email_msg').show();
              $('#correct_email_msg').hide();
              $('#phone_no_msg').hide();
              $('#captcha_msg').hide();
              $('#correct_phone_msg').hide();
              $('#message_msg').hide();
            } else if (re_email.test(email) == false) {
              this.model.search = false;
              $('#full_name_msg').hide();
              $('#email_msg').hide();
              $('#correct_email_msg').show();
              $('#phone_no_msg').hide();
              $('#captcha_msg').hide();
              $('#correct_phone_msg').hide();
              $('#message_msg').hide();
            } else if (!mobile) {
              this.model.search = false;
              $('#full_name_msg').hide();
              $('#email_msg').hide();
              $('#correct_email_msg').hide();
              $('#phone_no_msg').show();
              $('#correct_phone_msg').hide();
              $('#captcha_msg').hide();
              $('#message_msg').hide();
            } else if (!message) {
              this.model.search = false;
              $('#full_name_msg').hide();
              $('#email_msg').hide();
              $('#correct_email_msg').hide();
              $('#phone_no_msg').hide();
              $('#correct_phone_msg').hide();
              $('#captcha_msg').hide();
              $('#message_msg').show();
            } else if (re_mobile.test(mobile) == false || mobile.length != 10) {
              this.model.search = false;
              $('#full_name_msg').hide();
              $('#email_msg').hide();
              $('#correct_phone_msg').show();
              $('#phone_no_msg').hide();
              $('#captcha_msg').hide();
              $('#message_msg').hide();
            } else if (!this.captchaPassed) {
              this.model.search = false;
              $('#full_name_msg').hide();
              $('#email_msg').hide();
              $('#correct_email_msg').hide();
              $('#correct_phone_msg').hide();
              $('#phone_no_msg').hide();
              $('#captcha_msg').show();
              $('#message_msg').hide();
            } else {
              $('#full_name_msg').hide();
              $('#email_msg').hide();
              $('#correct_email_msg').hide();
              $('#correct_phone_msg').hide();
              $('#phone_no_msg').hide();
              $('#captcha_msg').hide();
              $('#message_msg').hide();
              var data = JSON.stringify({
                'name': full_name,
                'mobile': mobile,
                'email': email,
                'message': message
              });
              this.fetch.save_contact_us(data).subscribe(function (res) {
                //if(res.success){
                _this3.model.search = false;

                _this3.showAlert();

                $('#full_name').val('');
                $('#email').val('');
                $('#phone_no').val('');
                $('#message').val(''); // }
              });
            }
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class custom_alert_1',
                        //header: 'Alert',
                        message: this.model.key_text6,
                        buttons: [{
                          text: this.model.key_text17,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showMore",
          value: function showMore() {
            if ($('#expanded').prop('checked')) {
              $('#know_more').text(this.model.key_text7);
            } else {
              $('#know_more').text(this.model.key_text4);
            }
          }
        }, {
          key: "resolved",
          value: function resolved(captchaResponse) {
            console.log("Resolved captcha with response: ".concat(captchaResponse));
          }
        }, {
          key: "errored",
          value: function errored() {
            console.warn("reCAPTCHA error encountered");
          }
        }]);

        return AboutUsPage;
      }();

      AboutUsPage.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      AboutUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutUsPage);
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
            var _this4 = this;

            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this4.notification = res['data'];

              if (_this4.notification.length > 0) {
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
    }
  }]);
})();
//# sourceMappingURL=about-us-about-us-module-es5.js.map