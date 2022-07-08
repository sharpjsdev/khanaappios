(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-language-choose-language-module"], {
    /***/
    "06s9":
    /*!*******************************************************************!*\
      !*** ./src/app/choose-language/choose-language-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ChooseLanguagePageRoutingModule */

    /***/
    function s9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLanguagePageRoutingModule", function () {
        return ChooseLanguagePageRoutingModule;
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


      var _choose_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choose-language.page */
      "Waqm");

      var routes = [{
        path: '',
        component: _choose_language_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLanguagePage"]
      }];

      var ChooseLanguagePageRoutingModule = function ChooseLanguagePageRoutingModule() {
        _classCallCheck(this, ChooseLanguagePageRoutingModule);
      };

      ChooseLanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChooseLanguagePageRoutingModule);
      /***/
    },

    /***/
    "Ivhk":
    /*!***********************************************************!*\
      !*** ./src/app/choose-language/choose-language.module.ts ***!
      \***********************************************************/

    /*! exports provided: ChooseLanguagePageModule */

    /***/
    function Ivhk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLanguagePageModule", function () {
        return ChooseLanguagePageModule;
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


      var _choose_language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choose-language-routing.module */
      "06s9");
      /* harmony import */


      var _choose_language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./choose-language.page */
      "Waqm");

      var ChooseLanguagePageModule = function ChooseLanguagePageModule() {
        _classCallCheck(this, ChooseLanguagePageModule);
      };

      ChooseLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_language_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseLanguagePageRoutingModule"]],
        declarations: [_choose_language_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLanguagePage"]]
      })], ChooseLanguagePageModule);
      /***/
    },

    /***/
    "Waqm":
    /*!*********************************************************!*\
      !*** ./src/app/choose-language/choose-language.page.ts ***!
      \*********************************************************/

    /*! exports provided: ChooseLanguagePage */

    /***/
    function Waqm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLanguagePage", function () {
        return ChooseLanguagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_choose_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./choose-language.page.html */
      "eLml");
      /* harmony import */


      var _choose_language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./choose-language.page.scss */
      "rqvV");
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ChooseLanguagePage = /*#__PURE__*/function () {
        function ChooseLanguagePage(http, route, router, fetch, alertController, platform, location) {
          var _this = this;

          _classCallCheck(this, ChooseLanguagePage);

          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.alertController = alertController;
          this.platform = platform;
          this.location = location;
          this.model = {};
          this.platform.backButton.subscribeWithPriority(10, function () {
            //this.location.back();
            _this.router.navigate(['/home']);
          });
        }

        _createClass(ChooseLanguagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//localStorage.removeItem('lang'); 
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.model.search = false;
            this.model.lang_code = JSON.parse(localStorage.getItem('lang'));
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            $('#choose_lang_' + this.model.lang_code).prop("checked", true);
            this.model.choose_btn = 'Choose Language';
            this.fetch.getLanguage().subscribe(function (res) {
              _this2.model.lang_data = res;
            });
          }
        }, {
          key: "select_lang",
          value: function select_lang(value) {
            var _this3 = this;

            localStorage.setItem('lang', JSON.stringify(value.detail.value));
            var lang_code = value.detail.value;
            this.fetch.getKeyText(value.detail.value).subscribe(function (res) {
              localStorage.setItem('lang_key', JSON.stringify(res));
              var item1 = res.find(function (i) {
                return i.key_text === 'CHOOSE_LANGUAGE';
              });
              _this3.model.choose_btn = item1[lang_code];
            });
          }
        }, {
          key: "choose_lang",
          value: function choose_lang() {
            var _this4 = this;

            this.model.search = true;

            if (JSON.parse(localStorage.getItem('lang')) != null) {
              var lang_data = JSON.stringify({
                'id': this.model.user_id,
                'language': JSON.parse(localStorage.getItem('lang'))
              });
              this.fetch.updateLanguage(lang_data).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
              });
              this.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));
              var self = this;
              setTimeout(function () {
                self.router.navigate(['/home']);
              }, 3000);
            } else {
              this.presentAlert();
            }
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
                        header: 'Please choose a language',
                        buttons: ['OK']
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

        return ChooseLanguagePage;
      }();

      ChooseLanguagePage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      };

      ChooseLanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-language',
        template: _raw_loader_choose_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChooseLanguagePage);
      /***/
    },

    /***/
    "eLml":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-language/choose-language.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eLml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n<div class=\"ion-padding\">\n  <div class=\"language_header size_18 red medium\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    Choose Language / भाषा चुनें \n  </div>\n\n  <ion-list lines=\"none\" >\n    <ion-radio-group (ionChange)=\"select_lang($event)\" [(ngModel)]=\"model.lang_code\">\n      <ion-item *ngFor=\"let x of model.lang_data\">\n        <ion-label>{{x.translate}} <br> <span>{{x.language}}</span></ion-label>\n        <ion-radio slot=\"start\" value=\"{{x.language_code}}\" (ionChange)=\"radioGroupChange($event)\" id=\"choose_lang_{{x.language_code}}\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>   \n  </ion-list>  \n\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n\t\t <button class=\"app_btn\" *ngIf=\"!model.search\" (click)=\"choose_lang()\">{{model.choose_btn}}</button>\n     <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n      <!-- <ion-router-link href=\"mobile-number\">\n       \n      </ion-router-link> -->\n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "rqvV":
    /*!***********************************************************!*\
      !*** ./src/app/choose-language/choose-language.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function rqvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".language_header {\n  margin-bottom: 6px;\n}\n\nion-item {\n  margin: 8px 0px;\n}\n\nion-label {\n  font-family: noto_medium !important;\n}\n\nion-radio {\n  margin-left: -15px;\n}\n\nion-item span {\n  color: #419B95;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nob29zZS1sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksbUNBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0oiLCJmaWxlIjoiY2hvb3NlLWxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZV9oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDhweCAwcHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBub3RvX21lZGl1bSAhaW1wb3J0YW50O1xufVxuaW9uLXJhZGlvIHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5pb24taXRlbSBzcGFuIHtcbiAgICBjb2xvcjogIzQxOUI5NTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=choose-language-choose-language-module-es5.js.map