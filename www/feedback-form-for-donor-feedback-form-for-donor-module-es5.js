(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-form-for-donor-feedback-form-for-donor-module"], {
    /***/
    "IC90":
    /*!*************************************************************************!*\
      !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor.page.ts ***!
      \*************************************************************************/

    /*! exports provided: FeedbackFormForDonorPage */

    /***/
    function IC90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackFormForDonorPage", function () {
        return FeedbackFormForDonorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feedback_form_for_donor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feedback-form-for-donor.page.html */
      "Xj2s");
      /* harmony import */


      var _feedback_form_for_donor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feedback-form-for-donor.page.scss */
      "rU4P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_feedback_content_feedback_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modal/feedback-content/feedback-content.page */
      "7Aly");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FeedbackFormForDonorPage = /*#__PURE__*/function () {
        function FeedbackFormForDonorPage(modalController, http, route, router, fetch, storage, alertController) {
          _classCallCheck(this, FeedbackFormForDonorPage);

          this.modalController = modalController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.model = {};
        }

        _createClass(FeedbackFormForDonorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.model.r_id = this.route.snapshot.params['r_id'];
            this.model.getfood_id = this.route.snapshot.params['getfood_id'];
            this.model.food_quality = '';
            this.model.packaging = '';
            this.model.behaviour = '';
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'DONEE';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'EXCELLENT';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'GOOD';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'BAD';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'PACKAGING';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'BEHAVIOUR';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'COMMENT';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'TYPE_HERE';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'HOW_WAS_YOUR_EXPERIENCE';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'SUBMIT';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.alert_text = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item12[lang_code]; //});
          }
        }, {
          key: "behaviour",
          value: function behaviour(val) {
            this.model.behaviour = val;

            if (val == 1) {
              $('#behaviour_' + val).addClass('active');
              $('#behaviour_2').removeClass('active');
              $('#behaviour_3').removeClass('active');
            } else if (val == 2) {
              $('#behaviour_' + val).addClass('active');
              $('#behaviour_1').removeClass('active');
              $('#behaviour_3').removeClass('active');
            } else {
              $('#behaviour_' + val).addClass('active');
              $('#behaviour_1').removeClass('active');
              $('#behaviour_2').removeClass('active');
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var comment = $('#feedback_comment').val();

            if (this.model.behaviour == '') {
              this.presentAlert();
            } else {
              var data = JSON.stringify({
                'food_quality': 0,
                'packaging': 0,
                'behaviour': this.model.behaviour,
                'comment': comment,
                'receiver_id': this.model.r_id,
                'getfood_id': this.model.getfood_id,
                'given_by': 1
              });
              this.fetch.feedback_donor(data).subscribe(function (res) {
                if (res.success == true) {
                  _this.openModalFeedback();
                }
              });
            }
          }
        }, {
          key: "openModalFeedback",
          value: function openModalFeedback() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_feedback_content_feedback_content_page__WEBPACK_IMPORTED_MODULE_5__["FeedbackContentPage"],
                        cssClass: 'custom_feedback_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        _this2.router.navigate(['/home']);

                        if (dataReturned !== null) {//alert('Modal Sent Data :'+ dataReturned);
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
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: this.model.alert_text,
                        buttons: [this.model.okay]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return FeedbackFormForDonorPage;
      }();

      FeedbackFormForDonorPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_7__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      FeedbackFormForDonorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback-form-for-donor',
        template: _raw_loader_feedback_form_for_donor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_form_for_donor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeedbackFormForDonorPage);
      /***/
    },

    /***/
    "Xj2s":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback-form-for-donor/feedback-form-for-donor.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xj2s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"ion-padding\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"single_page_title medium size_18\">{{model.key_text9}}</div>\n  </div>\n\n  <div class=\"ion-padding custom_padding\"> \n    \n\n    <div>1. {{model.key_text1}} {{model.key_text6}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_1\" (click)=\"behaviour(1)\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_2\" (click)=\"behaviour(2)\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_3\" (click)=\"behaviour(3)\">{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>2. {{model.key_text7}}</div>\n    <div class=\"btn-group\">\n      <ion-textarea rows=\"4\" placeholder=\"{{model.key_text8}}. . .\" class=\"custom_textarea\" id=\"feedback_comment\"></ion-textarea>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\" (click)=\"submit()\">\n      \n        <button class=\"app_btn\">{{model.key_text10}}</button>\n      \n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "fp/J":
    /*!***************************************************************************!*\
      !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor.module.ts ***!
      \***************************************************************************/

    /*! exports provided: FeedbackFormForDonorPageModule */

    /***/
    function fpJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackFormForDonorPageModule", function () {
        return FeedbackFormForDonorPageModule;
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


      var _feedback_form_for_donor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feedback-form-for-donor-routing.module */
      "kOAo");
      /* harmony import */


      var _feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feedback-form-for-donor.page */
      "IC90");

      var FeedbackFormForDonorPageModule = function FeedbackFormForDonorPageModule() {
        _classCallCheck(this, FeedbackFormForDonorPageModule);
      };

      FeedbackFormForDonorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feedback_form_for_donor_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackFormForDonorPageRoutingModule"]],
        declarations: [_feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackFormForDonorPage"]]
      })], FeedbackFormForDonorPageModule);
      /***/
    },

    /***/
    "kOAo":
    /*!***********************************************************************************!*\
      !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: FeedbackFormForDonorPageRoutingModule */

    /***/
    function kOAo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackFormForDonorPageRoutingModule", function () {
        return FeedbackFormForDonorPageRoutingModule;
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


      var _feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feedback-form-for-donor.page */
      "IC90");

      var routes = [{
        path: '',
        component: _feedback_form_for_donor_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackFormForDonorPage"]
      }];

      var FeedbackFormForDonorPageRoutingModule = function FeedbackFormForDonorPageRoutingModule() {
        _classCallCheck(this, FeedbackFormForDonorPageRoutingModule);
      };

      FeedbackFormForDonorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedbackFormForDonorPageRoutingModule);
      /***/
    },

    /***/
    "rU4P":
    /*!***************************************************************************!*\
      !*** ./src/app/feedback-form-for-donor/feedback-form-for-donor.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function rU4P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay1mb3JtLWZvci1kb25vci5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=feedback-form-for-donor-feedback-form-for-donor-module-es5.js.map