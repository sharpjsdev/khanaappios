(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-form-feedback-form-module"], {
    /***/
    "87NS":
    /*!*******************************************************!*\
      !*** ./src/app/feedback-form/feedback-form.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function NS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".behaviour-error-text {\n  color: red;\n  display: none;\n}\n\n.food_quality-error-text {\n  color: red;\n  display: none;\n}\n\n.packaging-error-text {\n  color: red;\n  display: none;\n}\n\n.number-error-text {\n  color: red;\n  display: none;\n}\n\n.error-line {\n  border: 1px solid red;\n}\n\n.error-minus {\n  border-left: 1px solid red;\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n\n.error-minus {\n  border-right: 1px solid red;\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n\n.error-value {\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n\n.star {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlZWRiYWNrLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFNSjs7QUFKQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQU9KOztBQUxBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQVFKOztBQU5BO0VBQ0ksVUFBQTtBQVNKIiwiZmlsZSI6ImZlZWRiYWNrLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlaGF2aW91ci1lcnJvci10ZXh0e1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmZvb2RfcXVhbGl0eS1lcnJvci10ZXh0e1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnBhY2thZ2luZy1lcnJvci10ZXh0e1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm51bWJlci1lcnJvci10ZXh0e1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmVycm9yLWxpbmV7XG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XG59XG4uZXJyb3ItbWludXN7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xufVxuLmVycm9yLW1pbnVze1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG4uZXJyb3ItdmFsdWV7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xufVxuLnN0YXJ7XG4gICAgY29sb3I6cmVkO1xufSAgICJdfQ== */";
      /***/
    },

    /***/
    "LKPd":
    /*!***************************************************************!*\
      !*** ./src/app/feedback-form/feedback-form-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: FeedbackFormPageRoutingModule */

    /***/
    function LKPd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackFormPageRoutingModule", function () {
        return FeedbackFormPageRoutingModule;
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


      var _feedback_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feedback-form.page */
      "ZFlX");

      var routes = [{
        path: '',
        component: _feedback_form_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackFormPage"]
      }];

      var FeedbackFormPageRoutingModule = function FeedbackFormPageRoutingModule() {
        _classCallCheck(this, FeedbackFormPageRoutingModule);
      };

      FeedbackFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedbackFormPageRoutingModule);
      /***/
    },

    /***/
    "Pkrh":
    /*!*******************************************************!*\
      !*** ./src/app/feedback-form/feedback-form.module.ts ***!
      \*******************************************************/

    /*! exports provided: FeedbackFormPageModule */

    /***/
    function Pkrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackFormPageModule", function () {
        return FeedbackFormPageModule;
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


      var _feedback_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feedback-form-routing.module */
      "LKPd");
      /* harmony import */


      var _feedback_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feedback-form.page */
      "ZFlX");

      var FeedbackFormPageModule = function FeedbackFormPageModule() {
        _classCallCheck(this, FeedbackFormPageModule);
      };

      FeedbackFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feedback_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackFormPageRoutingModule"]],
        declarations: [_feedback_form_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackFormPage"]]
      })], FeedbackFormPageModule);
      /***/
    },

    /***/
    "ZFlX":
    /*!*****************************************************!*\
      !*** ./src/app/feedback-form/feedback-form.page.ts ***!
      \*****************************************************/

    /*! exports provided: FeedbackFormPage */

    /***/
    function ZFlX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackFormPage", function () {
        return FeedbackFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feedback_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feedback-form.page.html */
      "sxO4");
      /* harmony import */


      var _feedback_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feedback-form.page.scss */
      "87NS");
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

      var FeedbackFormPage = /*#__PURE__*/function () {
        function FeedbackFormPage(modalController, http, route, router, fetch, storage, alertController) {
          _classCallCheck(this, FeedbackFormPage);

          this.modalController = modalController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.model = {};
        }

        _createClass(FeedbackFormPage, [{
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
              return i.key_text === 'FOOD_QUALITY';
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
          key: "food_quality",
          value: function food_quality(val) {
            this.model.food_quality = val;

            if (val == 1) {
              $('#food_quality_' + val).addClass('active');
              $('#food_quality_2').removeClass('active');
              $('#food_quality_3').removeClass('active');
            } else if (val == 2) {
              $('#food_quality_' + val).addClass('active');
              $('#food_quality_1').removeClass('active');
              $('#food_quality_3').removeClass('active');
            } else {
              $('#food_quality_' + val).addClass('active');
              $('#food_quality_1').removeClass('active');
              $('#food_quality_2').removeClass('active');
            }
          }
        }, {
          key: "packaging",
          value: function packaging(val) {
            this.model.packaging = val;

            if (val == 1) {
              $('#packaging_' + val).addClass('active');
              $('#packaging_2').removeClass('active');
              $('#packaging_3').removeClass('active');
            } else if (val == 2) {
              $('#packaging_' + val).addClass('active');
              $('#packaging_1').removeClass('active');
              $('#packaging_3').removeClass('active');
            } else {
              $('#packaging_' + val).addClass('active');
              $('#packaging_1').removeClass('active');
              $('#packaging_2').removeClass('active');
            }
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

            if (this.model.food_quality == '') {
              this.presentAlert();
            } else if (this.model.packaging == '') {
              this.presentAlert();
            } else if (this.model.behaviour == '') {
              this.presentAlert();
            } else {
              var data = JSON.stringify({
                'food_quality': this.model.food_quality,
                'packaging': this.model.packaging,
                'behaviour': this.model.behaviour,
                'comment': comment,
                'receiver_id': this.model.r_id,
                'getfood_id': this.model.getfood_id
              });
              this.fetch.feedback(data).subscribe(function (res) {
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
                        header: this.model.alert_text,
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

        return FeedbackFormPage;
      }();

      FeedbackFormPage.ctorParameters = function () {
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

      FeedbackFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback-form',
        template: _raw_loader_feedback_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeedbackFormPage);
      /***/
    },

    /***/
    "sxO4":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback-form/feedback-form.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function sxO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"ion-padding\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"single_page_title medium size_18\">{{model.key_text9}}</div>\n  </div>\n\n  <div class=\"ion-padding custom_padding\"> \n    \n    <div>1. {{model.key_text1}}</div> \n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_1\" (click)=\"food_quality(1)\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_2\" (click)=\"food_quality(2)\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_3\" (click)=\"food_quality(3)\">{{model.key_text4}}</button>\n    </div>\n    <span class=\"food_quality-error-text\">This field is required</span>  \n\n    <br>\n    <div>2. {{model.key_text5}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_1\" (click)=\"packaging(1)\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_2\" (click)=\"packaging(2)\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_3\" (click)=\"packaging(3)\">{{model.key_text4}}</button>\n    </div>\n    <span class=\"packaging-error-text\">This field is required</span>  \n    <br>\n    <div>3. {{model.key_text6}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_1\" (click)=\"behaviour(1)\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_2\" (click)=\"behaviour(2)\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_3\" (click)=\"behaviour(3)\">{{model.key_text4}}</button>\n    </div>\n    <span class=\"behaviour-error-text\">This field is required</span>  \n    <br>\n    <div>4. {{model.key_text7}}</div>\n    <div class=\"btn-group\">\n      <ion-textarea rows=\"4\" placeholder=\"{{model.key_text8}}. . .\" class=\"custom_textarea\" id=\"feedback_comment\"></ion-textarea>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\" (click)=\"submit()\">\n      \n        <button class=\"app_btn\">{{model.key_text10}}</button>\n      \n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=feedback-form-feedback-form-module-es5.js.map