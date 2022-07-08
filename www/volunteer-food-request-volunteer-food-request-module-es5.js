(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteer-food-request-volunteer-food-request-module"], {
    /***/
    "Stwq":
    /*!*********************************************************************************!*\
      !*** ./src/app/volunteer-food-request/volunteer-food-request-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: VolunteerFoodRequestPageRoutingModule */

    /***/
    function Stwq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerFoodRequestPageRoutingModule", function () {
        return VolunteerFoodRequestPageRoutingModule;
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


      var _volunteer_food_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./volunteer-food-request.page */
      "XX2c");

      var routes = [{
        path: '',
        component: _volunteer_food_request_page__WEBPACK_IMPORTED_MODULE_3__["VolunteerFoodRequestPage"]
      }];

      var VolunteerFoodRequestPageRoutingModule = function VolunteerFoodRequestPageRoutingModule() {
        _classCallCheck(this, VolunteerFoodRequestPageRoutingModule);
      };

      VolunteerFoodRequestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VolunteerFoodRequestPageRoutingModule);
      /***/
    },

    /***/
    "XX2c":
    /*!***********************************************************************!*\
      !*** ./src/app/volunteer-food-request/volunteer-food-request.page.ts ***!
      \***********************************************************************/

    /*! exports provided: VolunteerFoodRequestPage */

    /***/
    function XX2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerFoodRequestPage", function () {
        return VolunteerFoodRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_volunteer_food_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./volunteer-food-request.page.html */
      "YcHy");
      /* harmony import */


      var _volunteer_food_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./volunteer-food-request.page.scss */
      "wzVI");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_volunteer_food_request_content_volunteer_food_request_content_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../modal/volunteer-food-request-content/volunteer-food-request-content.page */
      "jQhV");
      /* harmony import */


      var _error_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../error-msg.service */
      "ElZd");

      var VolunteerFoodRequestPage = /*#__PURE__*/function () {
        function VolunteerFoodRequestPage(errorMsg, modalController, alertController, router, fetch, storage) {
          _classCallCheck(this, VolunteerFoodRequestPage);

          this.errorMsg = errorMsg;
          this.modalController = modalController;
          this.alertController = alertController;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
          this.food_request = [];
          this.food_request_fulfill = [];
          this.volunteer_data = [];
        }

        _createClass(VolunteerFoodRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            var lang_code = JSON.parse(localStorage.getItem('lang')); // this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'NAME';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'TYPE_HERE';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'SELECT_TYPE_OF_FOOD';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'ANY';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'FOOD_NEEDED_FOR_HOW_MANY_PEOPLE';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'UPLOAD_FOOD_REQUEST';
            });
            this.model.key_text8 = item8[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text12 = item12[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.okay = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.key_text17 = item17[lang_code]; //});

            this.model.volunteer_id = '';
            var user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.model.user_id = user_id;
            this.fetch.v_check(user_id).subscribe(function (res) {
              if (res.success == true) {
                _this.model.status = res.status;
                _this.model.volunteer_id = res.data;

                if (_this.model.status != 1) {
                  _this.router.navigate(['/volunteer-detail']);
                }
              } else {
                _this.model.status = 0;

                _this.router.navigate(['/volunteer-detail']);
              }

              if (_this.model.volunteer_id == '') {
                _this.router.navigate(['/volunteer-detail']);
              }
            });
            this.model.food_type = '';
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }
          }
        }, {
          key: "food_type",
          value: function food_type(val) {
            this.model.food_type = val;

            if (val == 1) {
              $('#v_food_' + val).addClass('active');
              $('#v_food_2').removeClass('active');
              $('#v_food_3').removeClass('active');
            } else if (val == 2) {
              $('#v_food_' + val).addClass('active');
              $('#v_food_1').removeClass('active');
              $('#v_food_3').removeClass('active');
            } else {
              $('#v_food_' + val).addClass('active');
              $('#v_food_2').removeClass('active');
              $('#v_food_1').removeClass('active');
            }
          }
        }, {
          key: "upload_req",
          value: function upload_req() {
            var _this2 = this;

            var name = $('#v_r_name').val();
            var no_of_people = $('#v_r_number').val();

            if (name == '') {
              this.errorMsg.showModal(this.model.key_text17);
            } else if (this.model.food_type == '') {
              this.errorMsg.showModal(this.model.key_text17);
            } else if (no_of_people == '') {
              this.errorMsg.showModal(this.model.key_text17);
            } else {
              var data = JSON.stringify({
                'volunteer_id': this.model.volunteer_id,
                'name': name,
                'food_type': this.model.food_type,
                'no_of_people': no_of_people
              });
              this.fetch.volunteer_request(data).subscribe(function (res) {
                _this2.food_request.push(res['data']);

                _this2.openSuccessModal(res['data']);
              });
            }
          }
        }, {
          key: "openSuccessModal",
          value: function openSuccessModal(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_volunteer_food_request_content_volunteer_food_request_content_page__WEBPACK_IMPORTED_MODULE_8__["VolunteerFoodRequestContentPage"],
                        cssClass: 'custom_donate_food_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title",
                          "request_data": data
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        _this3.router.navigate(['/volunteer-detail']);

                        if (dataReturned !== null) {
                          _this3.dataReturned = dataReturned.data;
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return VolunteerFoodRequestPage;
      }();

      VolunteerFoodRequestPage.ctorParameters = function () {
        return [{
          type: _error_msg_service__WEBPACK_IMPORTED_MODULE_9__["ErrorMsgService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      VolunteerFoodRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-volunteer-food-request',
        template: _raw_loader_volunteer_food_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_volunteer_food_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VolunteerFoodRequestPage);
      /***/
    },

    /***/
    "YcHy":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer-food-request/volunteer-food-request.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YcHy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width\">\n  <div class=\"noto_medium size_18\">\n  </div>\n  <div class=\"volunteer_info\">\n    <div class=\"info_single flex\">\n      <div style=\"margin-right: 7px;\">1. </div>\n      <div class=\"info_label\">{{model.key_text1}}:</div> \n      <div class=\"volunteer_input\">      \n        <input type=\"text\" class=\"custom_app_input\" placeholder=\"{{model.key_text2}}\" id=\"v_r_name\">       \n      </div>\n    </div>    \n    <div class=\"info_single\">\n      2. {{model.key_text3}} :\n      <div class=\"search_food_buttons\">\n        <div class=\"btn-group\">\n          <button class=\"grey regular btn1\" id=\"v_food_1\" (click)=\"food_type(1)\">{{model.key_text4}}.</button>\n          <button class=\"grey regular btn1\" id=\"v_food_2\" (click)=\"food_type(2)\">{{model.key_text5}}.</button>\n          <button class=\"grey regular btn1\" id=\"v_food_3\" (click)=\"food_type(3)\">{{model.key_text6}}</button>\n        </div>\n      </div> \n    </div>\n    <div class=\"info_single\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"custom_left\">\n          3. {{model.key_text7}}\n        </ion-col>\n        <ion-col size=\"1\" class=\"center\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"volunteerDecrementValue()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"v_r_number\" />\n            <input type=\"button\" class=\"plus\" onclick=\"volunteerIncrementValue()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- <button class=\"desgin_btn white\" (click)=\"upload_req()\">{{model.key_text8}}</button> -->\n  </div>\n</div>\n\n</ion-content>\n<ion-footer> \n  <ion-toolbar>     \n    <div class=\"app_button\">\n      <span (click)=\"upload_req()\" >\n        <button class=\"app_btn\">{{model.key_text8}}</button>\n      </span> \n    </div>\n  </ion-toolbar>\n</ion-footer>\n<ion-footer>\n  <ion-toolbar>    \n    <ion-segment color=\"transparent\" value=\"volunteer\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n          <!--<img src=\"assets/images/red_footer_home.svg\">-->\n          <ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>\n          <ion-label class=\"size_12 medium\" >{{model.key_text10}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text11}}</ion-label>    \n      </ion-segment-button>        \n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">            \n        <ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>\n        <!--<img src=\"assets/images/grey_footer_volunteer.svg\">-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text12}}</ion-label>                \n      </ion-segment-button>        \n    </ion-segment>      \n</ion-toolbar>\n</ion-footer>\n\n\n  \n\n";
      /***/
    },

    /***/
    "b3or":
    /*!*************************************************************************!*\
      !*** ./src/app/volunteer-food-request/volunteer-food-request.module.ts ***!
      \*************************************************************************/

    /*! exports provided: VolunteerFoodRequestPageModule */

    /***/
    function b3or(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerFoodRequestPageModule", function () {
        return VolunteerFoodRequestPageModule;
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


      var _volunteer_food_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./volunteer-food-request-routing.module */
      "Stwq");
      /* harmony import */


      var _volunteer_food_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./volunteer-food-request.page */
      "XX2c");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var VolunteerFoodRequestPageModule = function VolunteerFoodRequestPageModule() {
        _classCallCheck(this, VolunteerFoodRequestPageModule);
      };

      VolunteerFoodRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _volunteer_food_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["VolunteerFoodRequestPageRoutingModule"]],
        declarations: [_volunteer_food_request_page__WEBPACK_IMPORTED_MODULE_6__["VolunteerFoodRequestPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], VolunteerFoodRequestPageModule);
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
    },

    /***/
    "wzVI":
    /*!*************************************************************************!*\
      !*** ./src/app/volunteer-food-request/volunteer-food-request.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function wzVI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x1bnRlZXItZm9vZC1yZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=volunteer-food-request-volunteer-food-request-module-es5.js.map