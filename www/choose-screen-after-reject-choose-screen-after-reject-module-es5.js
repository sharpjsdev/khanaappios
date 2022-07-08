(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-screen-after-reject-choose-screen-after-reject-module"], {
    /***/
    "QaYJ":
    /*!*********************************************************************************!*\
      !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ChooseScreenAfterRejectPageModule */

    /***/
    function QaYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseScreenAfterRejectPageModule", function () {
        return ChooseScreenAfterRejectPageModule;
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


      var _choose_screen_after_reject_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choose-screen-after-reject-routing.module */
      "aYqr");
      /* harmony import */


      var _choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./choose-screen-after-reject.page */
      "zuWJ");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../captcha/captcha.component */
      "ekeA");

      var ChooseScreenAfterRejectPageModule = function ChooseScreenAfterRejectPageModule() {
        _classCallCheck(this, ChooseScreenAfterRejectPageModule);
      };

      ChooseScreenAfterRejectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_screen_after_reject_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseScreenAfterRejectPageRoutingModule"]],
        declarations: [_choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_6__["ChooseScreenAfterRejectPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], ChooseScreenAfterRejectPageModule);
      /***/
    },

    /***/
    "VOrp":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-screen-after-reject/choose-screen-after-reject.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VOrp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width my_custome_theme_width\">\n  <div class=\"big_content_new noto_medium size_18\">\n  </div>\n  <div class=\"horizontal_center\">\n    <a (click)=\"pickupRequest()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text1}}\n      </button>\n    </a>\n    <a (click)=\"donateLater()\">\n      <button class=\"app_btn big button\">\n        {{model.key_text2}}\n      </button>  \n    </a>\n  </div>\n</div>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar>    \n\t\t<ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n\t\t\t  <img src=\"assets/images/red_footer_home.svg\">\n\t\t\t  <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n\t\t\t  <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text5}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\"> \n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_activity.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text6}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n\t\t\t  <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n\t\t\t  <img src=\"assets/images/grey_footer_volunteer.svg\">\n\t\t\t  <ion-label class=\"size_12 medium\">{{model.key_text7}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>      \n\t</ion-toolbar>\n</ion-footer>\n\n\n  \n\n";
      /***/
    },

    /***/
    "aYqr":
    /*!*****************************************************************************************!*\
      !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ChooseScreenAfterRejectPageRoutingModule */

    /***/
    function aYqr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseScreenAfterRejectPageRoutingModule", function () {
        return ChooseScreenAfterRejectPageRoutingModule;
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


      var _choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choose-screen-after-reject.page */
      "zuWJ");

      var routes = [{
        path: '',
        component: _choose_screen_after_reject_page__WEBPACK_IMPORTED_MODULE_3__["ChooseScreenAfterRejectPage"]
      }];

      var ChooseScreenAfterRejectPageRoutingModule = function ChooseScreenAfterRejectPageRoutingModule() {
        _classCallCheck(this, ChooseScreenAfterRejectPageRoutingModule);
      };

      ChooseScreenAfterRejectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChooseScreenAfterRejectPageRoutingModule);
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
    "qvSO":
    /*!*********************************************************************************!*\
      !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function qvSO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2Utc2NyZWVuLWFmdGVyLXJlamVjdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "zuWJ":
    /*!*******************************************************************************!*\
      !*** ./src/app/choose-screen-after-reject/choose-screen-after-reject.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChooseScreenAfterRejectPage */

    /***/
    function zuWJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseScreenAfterRejectPage", function () {
        return ChooseScreenAfterRejectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_choose_screen_after_reject_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./choose-screen-after-reject.page.html */
      "VOrp");
      /* harmony import */


      var _choose_screen_after_reject_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./choose-screen-after-reject.page.scss */
      "qvSO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_conert_to_pickup_success_conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../modal/conert-to-pickup-success/conert-to-pickup-success.page */
      "AgMY");
      /* harmony import */


      var _modal_donate_later_msg_donate_later_msg_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../modal/donate-later-msg/donate-later-msg.page */
      "Cqxs");

      var ChooseScreenAfterRejectPage = /*#__PURE__*/function () {
        function ChooseScreenAfterRejectPage(http, route, router, fetch, storage, modalController) {
          _classCallCheck(this, ChooseScreenAfterRejectPage);

          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.modalController = modalController;
          this.model = {};
        }

        _createClass(ChooseScreenAfterRejectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            var id = parseInt(this.route.snapshot.params['id']);
            var rid = parseInt(this.route.snapshot.params['rid']);
            var fid = parseInt(this.route.snapshot.params['fid']);
            this.model.food_id = id;
            this.model.receiver = rid;
            this.model.fid = fid;
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'CONVERT_REQUEST_TO_PICKUP';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'I_WILL_DONATE_LATER';
            });
            this.model.key_text2 = item2[lang_code];
          }
        }, {
          key: "successModal",
          value: function successModal(food) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_conert_to_pickup_success_conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_9__["ConertToPickupSuccessPage"],
                        cssClass: 'custom_current_location_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title",
                          "food": food
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this2.dataReturned = dataReturned.data;
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
        }, {
          key: "donateLaterModel",
          value: function donateLaterModel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modal_donate_later_msg_donate_later_msg_page__WEBPACK_IMPORTED_MODULE_10__["DonateLaterMsgPage"],
                        cssClass: 'custom_current_location_modal empty_message_height',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {});
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pickupRequest",
          value: function pickupRequest() {
            var _this3 = this;

            var formData = new FormData();
            formData.append("food_id", this.model.food_id);
            formData.append("receiver_id", this.model.receiver);
            formData.append("fid", this.model.fid);
            this.fetch.convert_to_pickup_request(formData).subscribe(function (res) {
              if (res['success'] == true) {
                _this3.successModal(res['data']);

                _this3.router.navigate(['/home']);
              }
            });
          }
        }, {
          key: "donateLater",
          value: function donateLater() {
            var _this4 = this;

            var formData = new FormData();
            formData.append("food_id", this.model.food_id);
            formData.append("receiver_id", this.model.receiver);
            formData.append("fid", this.model.fid);
            this.fetch.donate_later_food(formData).subscribe(function (res) {
              if (res['success'] == true) {
                _this4.donateLaterModel();

                _this4.router.navigate(['/home']);
              }
            });
          }
        }]);

        return ChooseScreenAfterRejectPage;
      }();

      ChooseScreenAfterRejectPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }];
      };

      ChooseScreenAfterRejectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-screen-after-reject',
        template: _raw_loader_choose_screen_after_reject_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_screen_after_reject_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChooseScreenAfterRejectPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=choose-screen-after-reject-choose-screen-after-reject-module-es5.js.map