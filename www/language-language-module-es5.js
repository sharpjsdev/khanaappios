(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"], {
    /***/
    "59xb":
    /*!*****************************************************!*\
      !*** ./src/app/language/language-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LanguagePageRoutingModule */

    /***/
    function xb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePageRoutingModule", function () {
        return LanguagePageRoutingModule;
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


      var _language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./language.page */
      "tAP4");

      var routes = [{
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePage"]
      }];

      var LanguagePageRoutingModule = function LanguagePageRoutingModule() {
        _classCallCheck(this, LanguagePageRoutingModule);
      };

      LanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LanguagePageRoutingModule);
      /***/
    },

    /***/
    "Dmpp":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function Dmpp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n<div class=\"ion-padding\">\n  \n  <div class=\"language_header size_18 red medium\" style=\"margin-top: 30px;\">\n   Choose Language / भाषा चुनें \n  </div>\n\n  <ion-list lines=\"none\">\n    <ion-radio-group (ionChange)=\"select_lang($event)\">\n      <ion-item *ngFor=\"let x of model.lang_data\">\n        <ion-label>{{x.translate}} <br> <span>{{x.language}}</span></ion-label>\n        <ion-radio slot=\"start\" id=\"language_{{x.id}}\" (ngModel)=\"model.language\" value=\"{{x.language_code}}\" (ionChange)=\"radioGroupChange($event)\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>   \n  </ion-list>  \n\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n\t\t <button class=\"app_btn\" *ngIf=\"!model.search\" (click)=\"next()\">{{next_btn}}</button>\n    <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n      <!-- <ion-router-link href=\"mobile-number\">\n       \n      </ion-router-link> -->\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "XkIt":
    /*!*********************************************!*\
      !*** ./src/app/language/language.module.ts ***!
      \*********************************************/

    /*! exports provided: LanguagePageModule */

    /***/
    function XkIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function () {
        return LanguagePageModule;
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


      var _language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./language-routing.module */
      "59xb");
      /* harmony import */


      var _language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./language.page */
      "tAP4");

      var LanguagePageModule = function LanguagePageModule() {
        _classCallCheck(this, LanguagePageModule);
      };

      LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _language_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagePageRoutingModule"]],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]]
      })], LanguagePageModule);
      /***/
    },

    /***/
    "tAP4":
    /*!*******************************************!*\
      !*** ./src/app/language/language.page.ts ***!
      \*******************************************/

    /*! exports provided: LanguagePage */

    /***/
    function tAP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePage", function () {
        return LanguagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./language.page.html */
      "Dmpp");
      /* harmony import */


      var _language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./language.page.scss */
      "wXOg");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LanguagePage = /*#__PURE__*/function () {
        function LanguagePage(http, route, router, fetch, alertController, navCtrl) {
          _classCallCheck(this, LanguagePage);

          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.model = {};
          this.next_btn = {};

          if (JSON.parse(localStorage.getItem('user_registerd')) != null) {
            this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
            this.router.navigate(['/home']); //this.navCtrl.navigateBack(['/home']);
          } else if (JSON.parse(localStorage.getItem('user_id')) != null && localStorage.getItem('isotpverified') == '1') {
            this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
            this.router.navigate(['/register-as-volunteer']); //this.navCtrl.navigateBack(['/register-as-volunteer']);
          } else if (localStorage.getItem('isotpverified') == '0') {
            this.router.navigate(['/otp']);
          }
        }

        _createClass(LanguagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.model.search = false;

            if (this.model.language) {
              localStorage.setItem('lang', JSON.stringify(this.model.language));
            }

            this.next_btn = 'Next';
            this.fetch.getLanguage().subscribe(function (res) {
              _this.model.lang_data = res;
            });
          }
        }, {
          key: "select_lang",
          value: function select_lang(value) {
            var _this2 = this;

            localStorage.setItem('lang', JSON.stringify(value.detail.value));
            this.model.language = value.detail.value;
            var lang_code = value.detail.value;
            this.fetch.getKeyText(value.detail.value).subscribe(function (res) {
              localStorage.setItem('lang_key', JSON.stringify(res));
              var item1 = res.find(function (i) {
                return i.key_text === 'NEXT';
              });
              _this2.next_btn = item1[lang_code];
            });
          }
        }, {
          key: "next",
          value: function next() {
            this.model.search = true;

            if (JSON.parse(localStorage.getItem('lang')) != null) {
              this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
              var self = this;
              setTimeout(function () {
                self.router.navigate(['/mobile-number']);
              }, 3000);
            } else {
              this.presentAlert();
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please choose a language',
                        buttons: ['OK']
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
        }]);

        return LanguagePage;
      }();

      LanguagePage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-language',
        template: _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LanguagePage);
      /***/
    },

    /***/
    "wXOg":
    /*!*********************************************!*\
      !*** ./src/app/language/language.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function wXOg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".language_header {\n  margin-bottom: 6px;\n}\n\nion-item {\n  margin: 8px 0px;\n}\n\nion-label {\n  font-family: noto_medium !important;\n}\n\nion-radio {\n  margin-left: -15px;\n}\n\nion-item span {\n  color: #419B95;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxtQ0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7QUFLSiIsImZpbGUiOiJsYW5ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ3VhZ2VfaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5pb24taXRlbSB7XG4gICAgbWFyZ2luOiA4cHggMHB4O1xufVxuaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogbm90b19tZWRpdW0gIWltcG9ydGFudDtcbn1cbmlvbi1yYWRpbyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuaW9uLWl0ZW0gc3BhbiB7XG4gICAgY29sb3I6ICM0MTlCOTU7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=language-language-module-es5.js.map