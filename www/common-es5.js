(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "+UNA":
    /*!*******************************************************************!*\
      !*** ./src/app/common-search-screen/common-search-screen.page.ts ***!
      \*******************************************************************/

    /*! exports provided: CommonSearchScreenPage */

    /***/
    function UNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonSearchScreenPage", function () {
        return CommonSearchScreenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_common_search_screen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./common-search-screen.page.html */
      "idzl");
      /* harmony import */


      var _common_search_screen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./common-search-screen.page.scss */
      "4K2E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CommonSearchScreenPage = /*#__PURE__*/function () {
        function CommonSearchScreenPage(modalController, storage) {
          _classCallCheck(this, CommonSearchScreenPage);

          this.modalController = modalController;
          this.storage = storage;
          this.model = {};
        }

        _createClass(CommonSearchScreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();

            if (this.type == 'nearby') {
              var item1 = res.find(function (i) {
                return i.key_text === 'GET_SEARCH_PAGE_NEAR_1';
              });
              this.model.key_text1 = item1[lang_code];
            }

            if (this.type == 'ontheway') {
              var _item = res.find(function (i) {
                return i.key_text === 'GET_SEARCH_PAGE_ONTHEWAY_1';
              });

              this.model.key_text1 = _item[lang_code];
            }
          }
        }]);

        return CommonSearchScreenPage;
      }();

      CommonSearchScreenPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      };

      CommonSearchScreenPage.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CommonSearchScreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-common-search-screen',
        template: _raw_loader_common_search_screen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_common_search_screen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CommonSearchScreenPage);
      /***/
    },

    /***/
    "/b2v":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/error-msg-modal/error-msg-modal.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b2v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <div class=\"medium size_14 green center\" style=\"max-width: 195px; width: 100%; margin: 0 auto; margin-top: 25px;\">\n        <span >{{ msg }} </span>\n      </div>\n    </div>\n\n  </div> \n</ion-content> ";
      /***/
    },

    /***/
    "1cap":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/success-deliver-modal/success-deliver-modal.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div> \n       <br><br>\n      <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> \n\t  <br>\n       <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div>\n      <br><br><br><br><br><br><br>\n      <div class=\"medium size_14 center\" style=\"color:#b8b8b8; width: 100%; margin: 0 auto;\">\n        {{model.key_text4}}\n      </div>\n    </div>\n    \n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text5}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "2MEt":
    /*!*****************************************************************************!*\
      !*** ./src/app/modal/success-deliver-modal/success-deliver-modal.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function MEt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLWRlbGl2ZXItbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "4K2E":
    /*!*********************************************************************!*\
      !*** ./src/app/common-search-screen/common-search-screen.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function K2E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24tc2VhcmNoLXNjcmVlbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "6kjK":
    /*!***********************************************************************!*\
      !*** ./src/app/modal/donate-food-content/donate-food-content.page.ts ***!
      \***********************************************************************/

    /*! exports provided: DonateFoodContentPage */

    /***/
    function kjK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodContentPage", function () {
        return DonateFoodContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate-food-content.page.html */
      "uXec");
      /* harmony import */


      var _donate_food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate-food-content.page.scss */
      "d2R5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var DonateFoodContentPage = /*#__PURE__*/function () {
        function DonateFoodContentPage(modalController, navParams, router, fetch, storage) {
          _classCallCheck(this, DonateFoodContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(DonateFoodContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            $("#donate_food_spinner").show();
            $(".modal_content").css("opacity", 0);
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            var data = JSON.stringify({
              'id': this.model.user_id
            });
            this.fetch.profile(data).subscribe(function (res) {
              //	console.log(res);
              $("#donate_food_spinner").hide();
              $(".modal_content").css("opacity", 1);
              _this.model.username = res['username']; // this.model.dob = res['dob'];
              // this.model.food_type = res['type_of_food_you_prefer'];
              // $('#profile_food_'+res['type_of_food_you_prefer']).addClass('active');
            }); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'DEAR';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'DONATION_MSG_1';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'PEOPLE';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'DONATE_MSG_2';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'DONATE_MSG_3';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'DONATE_MSG_4';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'THANK_YOU_FOR_YOUR_KIND_GESTURE';
            });
            this.model.key_text7 = item7[lang_code]; // let item1 = res.find(i => i.key_text === 'THANK_YOU_FOR_YOUR_KIND_GESTURE');
            //   this.model.key_text1 = item1[lang_code]; 
            // let item2 = res.find(i => i.key_text === 'END_DONATION_MSG');
            //   this.model.key_text2= item2[lang_code]; 
            // let item3 = res.find(i => i.key_text === 'CHECK_DONATION');
            //   this.model.key_text3= item3[lang_code]; 
            //});
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                      this.router.navigate(['/home']);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DonateFoodContentPage;
      }();

      DonateFoodContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      DonateFoodContentPage.propDecorators = {
        veg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nonveg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        veg_food: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nonveg_food: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DonateFoodContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-food-content',
        template: _raw_loader_donate_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonateFoodContentPage);
      /***/
    },

    /***/
    "7Aly":
    /*!*****************************************************************!*\
      !*** ./src/app/modal/feedback-content/feedback-content.page.ts ***!
      \*****************************************************************/

    /*! exports provided: FeedbackContentPage */

    /***/
    function Aly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackContentPage", function () {
        return FeedbackContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feedback_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feedback-content.page.html */
      "8lvR");
      /* harmony import */


      var _feedback_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feedback-content.page.scss */
      "PdVw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var FeedbackContentPage = /*#__PURE__*/function () {
        function FeedbackContentPage(modalController, navParams, fetch, storage) {
          _classCallCheck(this, FeedbackContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(FeedbackContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'FEEDBACK_QUOTE1';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'FEEDBACK_QUOTE2';
            });
            this.model.key_text2 = item2[lang_code]; //});
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context2.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return FeedbackContentPage;
      }();

      FeedbackContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      FeedbackContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback-content',
        template: _raw_loader_feedback_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeedbackContentPage);
      /***/
    },

    /***/
    "7bR5":
    /*!*****************************************************************!*\
      !*** ./src/app/modal/error-msg-modal/error-msg-modal.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function bR5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1tc2ctbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "7vly":
    /*!***********************************************************!*\
      !*** ./src/app/modal/otp/otp-content/otp-content.page.ts ***!
      \***********************************************************/

    /*! exports provided: OtpContentPage */

    /***/
    function vly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpContentPage", function () {
        return OtpContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp-content.page.html */
      "Jp/l");
      /* harmony import */


      var _otp_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp-content.page.scss */
      "DvzQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var OtpContentPage = /*#__PURE__*/function () {
        function OtpContentPage(modalController, navParams, fetch, Storage) {
          _classCallCheck(this, OtpContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.fetch = fetch;
          this.Storage = Storage;
          this.model = {};
        }

        _createClass(OtpContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.mobile_no = JSON.parse(localStorage.getItem('user_mobile'));
            this.model.key_text1 = 'New OTP has been sent to your mobile number. ';
            this.model.key_text2 = 'New OTP has been sent to your mobile number.';
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.Storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'NEW_OTP_HAS_BEEN';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'NEW_OTP_HAS_BEEN_SENT_TO_YOUR_MOBILE_NO';
            });
            this.model.key_text2 = item2[lang_code]; // });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context3.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return OtpContentPage;
      }();

      OtpContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      OtpContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp-content',
        template: _raw_loader_otp_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtpContentPage);
      /***/
    },

    /***/
    "8lvR":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/feedback-content/feedback-content.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lvR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br><br>\n      <div class=\"center\" style=\"margin-top: 15px;\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div>\n      <br><br>\n      <div class=\"medium size_16 center\" style=\"max-width: 260px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div>\n    </div>\n\n  </div>\n</ion-content> ";
      /***/
    },

    /***/
    "AgMY":
    /*!*********************************************************************************!*\
      !*** ./src/app/modal/conert-to-pickup-success/conert-to-pickup-success.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: ConertToPickupSuccessPage */

    /***/
    function AgMY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConertToPickupSuccessPage", function () {
        return ConertToPickupSuccessPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_conert_to_pickup_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./conert-to-pickup-success.page.html */
      "U3F8");
      /* harmony import */


      var _conert_to_pickup_success_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./conert-to-pickup-success.page.scss */
      "DkQu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ConertToPickupSuccessPage = /*#__PURE__*/function () {
        function ConertToPickupSuccessPage(modalController, navParams, router, fetch, storage) {
          _classCallCheck(this, ConertToPickupSuccessPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(ConertToPickupSuccessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var lang_code = JSON.parse(localStorage.getItem('lang'));
            console.log(JSON.parse(localStorage.getItem('user_registerd')));
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            console.log(this.model.user_id);
            var data = JSON.stringify({
              'id': this.model.user_id
            });
            this.fetch.profile(data).subscribe(function (res) {
              _this2.model.username = res['username'];
            });
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'DEAR';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'DONATE_MSG_5';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'PERSON';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'DONATE_MSG_3';
            });
            this.model.key_text4 = item4[lang_code];
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context4.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                      this.router.navigate(['/home']);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ConertToPickupSuccessPage;
      }();

      ConertToPickupSuccessPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      ConertToPickupSuccessPage.propDecorators = {
        food: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ConertToPickupSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conert-to-pickup-success',
        template: _raw_loader_conert_to_pickup_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conert_to_pickup_success_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConertToPickupSuccessPage);
      /***/
    },

    /***/
    "Cqxs":
    /*!*****************************************************************!*\
      !*** ./src/app/modal/donate-later-msg/donate-later-msg.page.ts ***!
      \*****************************************************************/

    /*! exports provided: DonateLaterMsgPage */

    /***/
    function Cqxs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateLaterMsgPage", function () {
        return DonateLaterMsgPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_later_msg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate-later-msg.page.html */
      "YnyR");
      /* harmony import */


      var _donate_later_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate-later-msg.page.scss */
      "GyBy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var DonateLaterMsgPage = /*#__PURE__*/function () {
        function DonateLaterMsgPage(modalController, storage) {
          _classCallCheck(this, DonateLaterMsgPage);

          this.modalController = modalController;
          this.storage = storage;
          this.model = {};
        }

        _createClass(DonateLaterMsgPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'THANKYOU';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'DONATE_LATER_1';
            });
            this.model.key_text2 = item2[lang_code];
          }
        }, {
          key: "redirectToNext",
          value: function redirectToNext() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context5.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return DonateLaterMsgPage;
      }();

      DonateLaterMsgPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      };

      DonateLaterMsgPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-later-msg',
        template: _raw_loader_donate_later_msg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_later_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonateLaterMsgPage);
      /***/
    },

    /***/
    "DkQu":
    /*!***********************************************************************************!*\
      !*** ./src/app/modal/conert-to-pickup-success/conert-to-pickup-success.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function DkQu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25lcnQtdG8tcGlja3VwLXN1Y2Nlc3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "DvzQ":
    /*!*************************************************************!*\
      !*** ./src/app/modal/otp/otp-content/otp-content.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function DvzQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAtY29udGVudC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "ElZd":
    /*!**************************************!*\
      !*** ./src/app/error-msg.service.ts ***!
      \**************************************/

    /*! exports provided: ErrorMsgService */

    /***/
    function ElZd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMsgService", function () {
        return ErrorMsgService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/error-msg-modal/error-msg-modal.page */
      "HQjg");

      var ErrorMsgService = /*#__PURE__*/function () {
        function ErrorMsgService(modalController) {
          _classCallCheck(this, ErrorMsgService);

          this.modalController = modalController;
        }

        _createClass(ErrorMsgService, [{
          key: "showModal",
          value: function showModal(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", new Promise(function (resolve) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var modal;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  _context6.next = 2;
                                  return this.modalController.create({
                                    component: _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_3__["ErrorMsgModalPage"],
                                    cssClass: 'error_modal_css',
                                    componentProps: {
                                      "msg": msg
                                    }
                                  });

                                case 2:
                                  modal = _context6.sent;
                                  modal.onDidDismiss().then(function (dataReturned) {});
                                  _context6.next = 6;
                                  return modal.present();

                                case 6:
                                  return _context6.abrupt("return", _context6.sent);

                                case 7:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }]);

        return ErrorMsgService;
      }();

      ErrorMsgService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ErrorMsgService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ErrorMsgService);
      /***/
    },

    /***/
    "GCnJ":
    /*!*****************************************************************************!*\
      !*** ./src/app/modal/location-error-content/location-error-content.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: LocationErrorContentPage */

    /***/
    function GCnJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationErrorContentPage", function () {
        return LocationErrorContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_location_error_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./location-error-content.page.html */
      "uGlT");
      /* harmony import */


      var _location_error_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./location-error-content.page.scss */
      "kT9p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LocationErrorContentPage = /*#__PURE__*/function () {
        function LocationErrorContentPage(modalController, navParams, fetch, storage) {
          _classCallCheck(this, LocationErrorContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(LocationErrorContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'KINDLY_SET_YOUR_CURRENT_LOCATION_TO_CONTINUE';
            });
            this.model.key_text1 = item1[lang_code]; //});
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context8.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return LocationErrorContentPage;
      }();

      LocationErrorContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      LocationErrorContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location-error-content',
        template: _raw_loader_location_error_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_error_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LocationErrorContentPage);
      /***/
    },

    /***/
    "GRg+":
    /*!***********************************************************!*\
      !*** ./src/app/modal/home-content/home-content.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function GRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWNvbnRlbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "GyBy":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/donate-later-msg/donate-later-msg.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function GyBy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb25hdGUtbGF0ZXItbXNnLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "HQjg":
    /*!***************************************************************!*\
      !*** ./src/app/modal/error-msg-modal/error-msg-modal.page.ts ***!
      \***************************************************************/

    /*! exports provided: ErrorMsgModalPage */

    /***/
    function HQjg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMsgModalPage", function () {
        return ErrorMsgModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_error_msg_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./error-msg-modal.page.html */
      "/b2v");
      /* harmony import */


      var _error_msg_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-msg-modal.page.scss */
      "7bR5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ErrorMsgModalPage = /*#__PURE__*/function () {
        function ErrorMsgModalPage(modalController, navParams, router, fetch) {
          _classCallCheck(this, ErrorMsgModalPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
        }

        _createClass(ErrorMsgModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context9.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return ErrorMsgModalPage;
      }();

      ErrorMsgModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }];
      };

      ErrorMsgModalPage.propDecorators = {
        msg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ErrorMsgModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error-msg-modal',
        template: _raw_loader_error_msg_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_msg_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ErrorMsgModalPage);
      /***/
    },

    /***/
    "Jp/l":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/otp/otp-content/otp-content.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JpL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  \n    <div class=\"modal_inner green size_16 center regular\" style=\"max-width: 250px;margin: auto;\">\n      {{model.key_text2}}<br>\n      +91 {{model.mobile_no}} \n    </div>\n\n  </div>\n</ion-content> ";
      /***/
    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (!delegate) {
                    _context10.next = 2;
                    break;
                  }

                  return _context10.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context10.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context10.next = 11;
                    break;
                  }

                  _context10.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context10.abrupt("return", el);

                case 12:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "PdVw":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/feedback-content/feedback-content.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function PdVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay1jb250ZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "QNkS":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modal/volunteer-food-request-content/volunteer-food-request-content.page.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function QNkS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x1bnRlZXItZm9vZC1yZXF1ZXN0LWNvbnRlbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "U3F8":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/conert-to-pickup-success/conert-to-pickup-success.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U3F8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/icon_registered.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        <span *ngIf=\"food != 0  && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text2 }} {{ food }}  {{ model.key_text3 }}, {{ model.key_text4 }}</span>\n      </div>\n    </div>\n\n  </div> \n</ion-content> ";
      /***/
    },

    /***/
    "UG66":
    /*!***********************************************************!*\
      !*** ./src/app/modal/onthe-way-msg/onthe-way-msg.page.ts ***!
      \***********************************************************/

    /*! exports provided: OntheWayMsgPage */

    /***/
    function UG66(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OntheWayMsgPage", function () {
        return OntheWayMsgPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_onthe_way_msg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./onthe-way-msg.page.html */
      "ZySf");
      /* harmony import */


      var _onthe_way_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onthe-way-msg.page.scss */
      "bq6f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _reject_get_food_request_reject_get_food_request_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../reject-get-food-request/reject-get-food-request.page */
      "Fcc0");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var OntheWayMsgPage = /*#__PURE__*/function () {
        function OntheWayMsgPage(modalController, navParams, router, fetch, storage) {
          _classCallCheck(this, OntheWayMsgPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(OntheWayMsgPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.way);

            if (this.type == 'ontheway') {
              this.model.type_id = 1;
            } else {
              this.model.type_id = 0;
            }

            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'NO_DONOR_MSG_1';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'NO_DONOR_MSG_2';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.key_text3 = item3[lang_code];
          }
        }, {
          key: "redirectToNext",
          value: function redirectToNext() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context11.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                      this.openModel();

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context12.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                      this.router.navigate(['/home']);

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "openModel",
          value: function openModel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var modal;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.modalController.create({
                        component: _reject_get_food_request_reject_get_food_request_page__WEBPACK_IMPORTED_MODULE_7__["RejectGetFoodRequestPage"],
                        cssClass: 'custom_current_location_modal notification-modal',
                        backdropDismiss: false,
                        componentProps: {
                          "data": "",
                          "r_data": this.way,
                          "app_id": this.r_id,
                          "type_id": this.model.type_id
                        }
                      });

                    case 2:
                      modal = _context13.sent;
                      modal.onDidDismiss().then(function (dataReturned) {});
                      _context13.next = 6;
                      return modal.present();

                    case 6:
                      return _context13.abrupt("return", _context13.sent);

                    case 7:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return OntheWayMsgPage;
      }();

      OntheWayMsgPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      OntheWayMsgPage.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        r_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        way: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      OntheWayMsgPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onthe-way-msg',
        template: _raw_loader_onthe_way_msg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onthe_way_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OntheWayMsgPage);
      /***/
    },

    /***/
    "Wwn5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js ***!
      \**************************************************************************/

    /*! exports provided: CallNumber */

    /***/
    function Wwn5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallNumber", function () {
        return CallNumber;
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "C6fG");

      var CallNumber =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);

        function CallNumber() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", {
            "callbackOrder": "reverse"
          }, arguments);
        };

        CallNumber.prototype.isCallSupported = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments);
        };

        CallNumber.pluginName = "CallNumber";
        CallNumber.plugin = "call-number";
        CallNumber.pluginRef = "plugins.CallNumber";
        CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
        CallNumber.platforms = ["Android", "iOS"];

        CallNumber.ɵfac = function CallNumber_Factory(t) {
          return ɵCallNumber_BaseFactory(t || CallNumber);
        };

        CallNumber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: CallNumber,
          factory: function factory(t) {
            return CallNumber.ɵfac(t);
          }
        });

        var ɵCallNumber_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CallNumber);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallNumber, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return CallNumber;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FsbC1udW1iZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUEwQnNCLDhCQUFpQjtBQUFDO0FBRTlCO0FBQytDO0FBQ2pFLElBTUEsK0JBQVUsYUFBQyxZQUFvQixFQUFFLGdCQUF5QjtBQU12RCxJQUdILG9DQUFlO0FBSXNCO0FBQTBDO0FBQXVDO0FBQWlEO0FBQTZFOzhDQXhCclAsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkFoQ1A7QUFBRSxFQWdDOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBOdW1iZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ2FsbCBhIG51bWJlciBkaXJlY3RseSBmcm9tIHlvdXIgQ29yZG92YS9Jb25pYyBhcHBsaWNhdGlvbi5cbiAqICoqTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxsTnVtYmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxsLW51bWJlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbE51bWJlcjogQ2FsbE51bWJlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2FsbE51bWJlci5jYWxsTnVtYmVyKFwiMTgwMDEwMTAxMDFcIiwgdHJ1ZSlcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBkaWFsZXIhJywgcmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgbGF1bmNoaW5nIGRpYWxlcicsIGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxOdW1iZXInLFxuICBwbHVnaW46ICdjYWxsLW51bWJlcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQ2FsbE51bWJlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUm9oZm9zaG8vQ29yZG92YUNhbGxOdW1iZXJQbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbE51bWJlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxzIGEgcGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBudW1iZXJUb0NhbGwgVGhlIHBob25lIG51bWJlciB0byBjYWxsIGFzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnlwYXNzQXBwQ2hvb3NlciBTZXQgdG8gdHJ1ZSB0byBieXBhc3MgdGhlIGFwcCBjaG9vc2VyIGFuZCBnbyBkaXJlY3RseSB0byBkaWFsZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "YnyR":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/donate-later-msg/donate-later-msg.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YnyR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"redirectToNext()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n       <div class=\"medium size_16 center green\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}},\n      </div>\n      <br>\n      <div class=\"medium size_16 center green\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text2}} \n      </div>\n    </div>\n    \n  </div> \n</ion-content> ";
      /***/
    },

    /***/
    "ZySf":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/onthe-way-msg/onthe-way-msg.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZySf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"map current_location\">\n\t\t<img src=\"assets/images/close_btn.svg\" style=\"margin-top: 10px;float:right;margin-right:20px;\" (click)=\"closeModal()\">\n\t</div>\n  <div class=\"ion-padding\"> \n    <div class=\"modal_inner\" style=\"margin-top: 30px;\">\n      <br>\n      <div class=\"medium size_14 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}.{{model.key_text2}}.\n      </div>\n    </div>\n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text3}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "bq6f":
    /*!*************************************************************!*\
      !*** ./src/app/modal/onthe-way-msg/onthe-way-msg.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function bq6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbnRoZS13YXktbXNnLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "br8U":
    /*!***************************************************************************!*\
      !*** ./src/app/modal/success-deliver-modal/success-deliver-modal.page.ts ***!
      \***************************************************************************/

    /*! exports provided: SuccessDeliverModalPage */

    /***/
    function br8U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessDeliverModalPage", function () {
        return SuccessDeliverModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_success_deliver_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./success-deliver-modal.page.html */
      "1cap");
      /* harmony import */


      var _success_deliver_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./success-deliver-modal.page.scss */
      "2MEt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SuccessDeliverModalPage = /*#__PURE__*/function () {
        function SuccessDeliverModalPage(modalController, navParams, router, fetch, storage) {
          _classCallCheck(this, SuccessDeliverModalPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(SuccessDeliverModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'THANKYOU_FOR_YOUR_DONATION';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'DONATION_SUCCESS_MSG_1';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'DONATION_SUCCESS_MSG_2';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'DONATION_SUCCESS_FOOTER_MSG';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'GIVE_FEEDBACK';
            });
            this.model.key_text5 = item5[lang_code];
          }
        }, {
          key: "redirectToNext",
          value: function redirectToNext() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context14.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                      this.router.navigate(['/feedback-form-for-donor', this.data, this.id]);

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }]);

        return SuccessDeliverModalPage;
      }();

      SuccessDeliverModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      SuccessDeliverModalPage.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SuccessDeliverModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-deliver-modal',
        template: _raw_loader_success_deliver_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_deliver_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SuccessDeliverModalPage);
      /***/
    },

    /***/
    "d2R5":
    /*!*************************************************************************!*\
      !*** ./src/app/modal/donate-food-content/donate-food-content.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function d2R5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 153px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RvbmF0ZS1mb29kLWNvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUNBO0VBQ0MsaUJBQUE7QUFFRCIsImZpbGUiOiJkb25hdGUtZm9vZC1jb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50X2xvY2F0aW9uX3NwcGluZXJ7XG5cdC0tY29sb3I6IzQxOUI5NTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3NwaW5uZXJfcG9zaXRpb257XG5cdG1hcmdpbi10b3A6MTUzcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "fdas":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/terms-conditions/terms-conditions.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fdas(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"big_header\">\n    <div class=\"ion-padding\">\n      <div class=\"title light poiret\">\n        {{app_title}}\n      </div>\n      <div class=\"big_header_bottom regular size_18\">\n       {{page_key1}}\n      </div>\n    </div>\n  </div>\n  <div class=\"ion-padding\">\n    <div class=\"app_input_text\">\n      {{content}}\n    </div>  \n  </div>\n  <ion-footer>\n    <ion-toolbar>    \n      <div class=\"app_button\">\n       <button class=\"app_btn\"  (click)=\"closeModal(true)\">{{model.accept_btn}}</button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content> \n";
      /***/
    },

    /***/
    "idzl":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-search-screen/common-search-screen.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function idzl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <ion-img src=\"../assets/images/loader.gif\" style=\"height: 100px;text-align: center;margin-top: 50%;\"></ion-img>\n  <h5 class=\"size_15 regular green center\">{{model.key_text1}}</h5>\n  </ion-content>";
      /***/
    },

    /***/
    "jQhV":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modal/volunteer-food-request-content/volunteer-food-request-content.page.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VolunteerFoodRequestContentPage */

    /***/
    function jQhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerFoodRequestContentPage", function () {
        return VolunteerFoodRequestContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_volunteer_food_request_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./volunteer-food-request-content.page.html */
      "wr5j");
      /* harmony import */


      var _volunteer_food_request_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./volunteer-food-request-content.page.scss */
      "QNkS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var VolunteerFoodRequestContentPage = /*#__PURE__*/function () {
        function VolunteerFoodRequestContentPage(modalController, navParams, router, storage) {
          _classCallCheck(this, VolunteerFoodRequestContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.storage = storage;
          this.model = {};
        }

        _createClass(VolunteerFoodRequestContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.request_data);
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'DEAR';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_FOOD_REQUEST_ADD_MSG';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'PERSON';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_MSG';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_MSG_1';
            });
            this.model.key_text6 = item6[lang_code];
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context15.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                      this.router.navigate(['/volunteer-detail']);

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return VolunteerFoodRequestContentPage;
      }();

      VolunteerFoodRequestContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      VolunteerFoodRequestContentPage.propDecorators = {
        request_data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      VolunteerFoodRequestContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-volunteer-food-request-content',
        template: _raw_loader_volunteer_food_request_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_volunteer_food_request_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VolunteerFoodRequestContentPage);
      /***/
    },

    /***/
    "kT9p":
    /*!*******************************************************************************!*\
      !*** ./src/app/modal/location-error-content/location-error-content.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function kT9p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi1lcnJvci1jb250ZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "kzFx":
    /*!*********************************************************!*\
      !*** ./src/app/modal/home-content/home-content.page.ts ***!
      \*********************************************************/

    /*! exports provided: HomeContentPage */

    /***/
    function kzFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeContentPage", function () {
        return HomeContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home-content.page.html */
      "oM9r");
      /* harmony import */


      var _home_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-content.page.scss */
      "GRg+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HomeContentPage = /*#__PURE__*/function () {
        function HomeContentPage(modalController, navParams, fetch, storage) {
          _classCallCheck(this, HomeContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(HomeContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_THANKYOU1';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_THANKYOU2';
            });
            this.model.key_text2 = item2[lang_code]; //});
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context16.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return HomeContentPage;
      }();

      HomeContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      HomeContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-content',
        template: _raw_loader_home_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeContentPage);
      /***/
    },

    /***/
    "ltDH":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/terms-conditions/terms-conditions.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function ltDH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#parent-ele {\n  text-align: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhcmVudC1lbGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "oM9r":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/home-content/home-content.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oM9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  \n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/icon_registered.svg\">\n      </div>\n      \n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div>\n      <br>\n      <div class=\"medium size_16 center\" style=\"max-width: 242px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div>\n    </div>\n\n  </div>\n</ion-content> ";
      /***/
    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context17.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context17.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context17.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context17.abrupt("return", false);

                case 6:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "t9PW":
    /*!*****************************************************************!*\
      !*** ./src/app/modal/terms-conditions/terms-conditions.page.ts ***!
      \*****************************************************************/

    /*! exports provided: TermsConditionsPage */

    /***/
    function t9PW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function () {
        return TermsConditionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./terms-conditions.page.html */
      "fdas");
      /* harmony import */


      var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./terms-conditions.page.scss */
      "ltDH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_content_home_content_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../home-content/home-content.page */
      "kzFx");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var TermsConditionsPage = /*#__PURE__*/function () {
        function TermsConditionsPage(modalController, navParams, storage, router, fetch) {
          _classCallCheck(this, TermsConditionsPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.storage = storage;
          this.router = router;
          this.fetch = fetch;
          this.model = {};
        }

        _createClass(TermsConditionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.app_title = 'Khanaa.app';
            this.page_key1 = 'Terms & Conditions';
            this.model.accept_btn = 'Accept';
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'KHANAA_APP';
            });
            this.app_title = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'TERMS_AND_CONDITIONS';
            });
            this.page_key1 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'ACCEPT';
            });
            this.model.accept_btn = item3[lang_code];
            var lang_code = JSON.parse(localStorage.getItem('lang'));
          }
        }, {
          key: "successFullRegistration",
          value: function successFullRegistration() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.modalController.create({
                        component: _home_content_home_content_page__WEBPACK_IMPORTED_MODULE_7__["HomeContentPage"],
                        cssClass: 'home_content_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context18.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        _this4.router.navigate(['/home']);

                        if (dataReturned !== null) {}
                      });
                      _context18.next = 6;
                      return modal.present();

                    case 6:
                      return _context18.abrupt("return", _context18.sent);

                    case 7:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      onClosedData = data;
                      _context19.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                      if (this.paramTitle == 1) {
                        this.router.navigate(['/home']);
                      } else {
                        this.successFullRegistration();
                      }

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }]);

        return TermsConditionsPage;
      }();

      TermsConditionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }];
      };

      TermsConditionsPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        paramTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TermsConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TermsConditionsPage);
      /***/
    },

    /***/
    "uGlT":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/location-error-content/location-error-content.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uGlT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    \n    <div class=\"modal_inner green size_16 center regular\" style=\"margin-top: 13px;\">\n      {{model.key_text1}}\n    </div>\n\n  </div>\n</ion-content>  ";
      /***/
    },

    /***/
    "uXec":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/donate-food-content/donate-food-content.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uXec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center class=\"current_location_spinner_position\" id=\"donate_food_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/icon_registered.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px;width: 100%; margin: 0 auto;\">\n        <span>{{model.key_text7}}</span>\n      </div>\n      <br>\n      <div class=\"medium size_16 center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        <span *ngIf=\"veg != 0 && nonveg != 0 && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text2 }} {{ veg_food.total_food_for }} {{ model.key_text3 }} {{ model.key_text4 }} {{ nonveg_food.total_food_for }} {{ model.key_text3 }}, {{ model.key_text5 }}</span>\n        <span *ngIf=\"veg != 0 && nonveg == 0 && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text2 }} {{ veg_food.total_food_for }} {{ model.key_text3 }}, {{ model.key_text5 }}</span>\n        <span *ngIf=\"veg == 0 && nonveg != 0 && model.username\">{{ model.key_text1 }} {{ model.username }} {{ model.key_text6 }} {{ nonveg_food.total_food_for }} {{ model.key_text3 }}, {{ model.key_text5 }}</span>\n      </div>\n      <!-- <br><br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> -->\n\t  <!-- <br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div> -->\n    </div>\n\n  </div> \n</ion-content> ";
      /***/
    },

    /***/
    "wr5j":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/volunteer-food-request-content/volunteer-food-request-content.page.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wr5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/icon_registered.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"max-width: 200px; width: 100%; margin: 0 auto;\">\n        <p class=\"text-center theme_color\">{{ model.key_text2 }}</p>\n        <span *ngIf=\"request_data\" class=\"vol_content_text\">{{ model.key_text1 }} {{ model.key_text4 }} {{model.key_text5}} {{ request_data.no_of_person }} {{ model.key_text3 }}.<br> {{ model.key_text6 }}</span>\n      </div>\n    </div>\n\n  </div> \n</ion-content> ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map