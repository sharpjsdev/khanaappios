(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/b2v":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/error-msg-modal/error-msg-modal.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _b2v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <div class=\"medium size_14 green center\" style=\"max-width: 195px; width: 100%; margin: 0 auto; margin-top: 25px;\">\n        <span >{{ msg }} </span>\n      </div>\n    </div>\n\n  </div> \n</ion-content> ";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\khana\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0jGL":
    /*!*******************************************************!*\
      !*** ./src/app/modal/dynamic-msg/dynamic-msg.page.ts ***!
      \*******************************************************/

    /*! exports provided: DynamicMsgPage */

    /***/
    function jGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicMsgPage", function () {
        return DynamicMsgPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dynamic_msg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dynamic-msg.page.html */
      "L9uu");
      /* harmony import */


      var _dynamic_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dynamic-msg.page.scss */
      "JZkw");
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

      var DynamicMsgPage = /*#__PURE__*/function () {
        function DynamicMsgPage(modalController, navParams, router, storage) {
          _classCallCheck(this, DynamicMsgPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.storage = storage;
          this.model = {};
        }

        return _createClass(DynamicMsgPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.key_text1 = "okay";
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.key_text1 = item1[lang_code];
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      DynamicMsgPage.ctorParameters = function () {
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

      DynamicMsgPage.propDecorators = {
        msg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DynamicMsgPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dynamic-msg',
        template: _raw_loader_dynamic_msg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dynamic_msg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DynamicMsgPage);
      /***/
    },

    /***/
    "4kW0":
    /*!*********************************************************************************!*\
      !*** ./src/app/modal/simple-push-notification/simple-push-notification.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: SimplePushNotificationPage */

    /***/
    function kW0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePushNotificationPage", function () {
        return SimplePushNotificationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_simple_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./simple-push-notification.page.html */
      "gCKo");
      /* harmony import */


      var _simple_push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./simple-push-notification.page.scss */
      "fF+m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SimplePushNotificationPage = /*#__PURE__*/function () {
        function SimplePushNotificationPage(storage, fetch, modalController) {
          _classCallCheck(this, SimplePushNotificationPage);

          this.storage = storage;
          this.fetch = fetch;
          this.modalController = modalController;
          this.model = {};
        }

        return _createClass(SimplePushNotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.key_text1 = "okay";
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.key_text1 = item1[lang_code];
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context2.next = 3;
                    return this.modalController.dismiss('');

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }]);
      }();

      SimplePushNotificationPage.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      SimplePushNotificationPage.propDecorators = {
        msg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SimplePushNotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-simple-push-notification',
        template: _raw_loader_simple_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simple_push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SimplePushNotificationPage);
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
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        base_url: 'https://khana.app/api/api/',
        image_url: 'https://khana.app/',
        //phone_no : '08069038801'
        //phone_no : '08069010173'
        phone_no: '08045889184'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CvUJ":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/deliver-food-volunteer/deliver-food-volunteer.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CvUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div> \n       <br><br>\n      <div class=\"medium size_14 center\" style=\"max-width: 237px;width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div>\n    </div>\n    \n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text5}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "EQfQ":
    /*!*****************************************************************************!*\
      !*** ./src/app/modal/deliver-food-volunteer/deliver-food-volunteer.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: DeliverFoodVolunteerPage */

    /***/
    function EQfQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliverFoodVolunteerPage", function () {
        return DeliverFoodVolunteerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_deliver_food_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./deliver-food-volunteer.page.html */
      "CvUJ");
      /* harmony import */


      var _deliver_food_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./deliver-food-volunteer.page.scss */
      "tHrL");
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

      var DeliverFoodVolunteerPage = /*#__PURE__*/function () {
        function DeliverFoodVolunteerPage(modalController, navParams, router, fetch, storage) {
          _classCallCheck(this, DeliverFoodVolunteerPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
          this.details = {};
        }

        return _createClass(DeliverFoodVolunteerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.details = JSON.stringify(this.array);
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'FOOD_REQUEST_COMPLETED_SUCCESSFULLY';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_SUCCESS_MSG';
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
              return i.key_text === 'SHARE_FEEDBACK';
            });
            this.model.key_text5 = item5[lang_code];
          }
        }, {
          key: "redirectToNext",
          value: function redirectToNext() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var onClosedData, t;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context3.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                    t = JSON.parse(this.details);
                    this.router.navigate(['/feedback-form', t.r_id, t.getFood_id]);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
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
              }, _callee4, this);
            }));
          }
        }]);
      }();

      DeliverFoodVolunteerPage.ctorParameters = function () {
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

      DeliverFoodVolunteerPage.propDecorators = {
        array: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DeliverFoodVolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deliver-food-volunteer',
        template: _raw_loader_deliver_food_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deliver_food_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeliverFoodVolunteerPage);
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

        return _createClass(ErrorMsgService, [{
          key: "showModal",
          value: function showModal(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this = this;

              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                        var modal;
                        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                          while (1) switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return this.modalController.create({
                                component: _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_3__["ErrorMsgModalPage"],
                                cssClass: 'error_modal_css',
                                componentProps: {
                                  "msg": msg
                                }
                              });

                            case 2:
                              modal = _context5.sent;
                              modal.onDidDismiss().then(function (dataReturned) {});
                              _context5.next = 6;
                              return modal.present();

                            case 6:
                              return _context5.abrupt("return", _context5.sent);

                            case 7:
                            case "end":
                              return _context5.stop();
                          }
                        }, _callee5, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
          }
        }]);
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
    "GNQA":
    /*!********************************************************************************!*\
      !*** ./src/app/pincode-error-component/pincode-error-component.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function GNQA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-padding {\n  padding: 84px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBpbmNvZGUtZXJyb3ItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InBpbmNvZGUtZXJyb3ItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDg0cHg7XHJcbn0iXX0= */";
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

        return _createClass(ErrorMsgModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context7.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }]);
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
    "JZkw":
    /*!*********************************************************!*\
      !*** ./src/app/modal/dynamic-msg/dynamic-msg.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function JZkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLW1zZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "L9uu":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/dynamic-msg/dynamic-msg.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function L9uu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\"> \n    <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    <div class=\"modal_inner\">\n      <br>\n      <br>\n      <div class=\"medium size_16 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{msg}}.\n      </div>\n    </div>\n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"closeModal()\" class=\"app_btn\">{{model.key_text1}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "RPep":
    /*!**********************************!*\
      !*** ./src/app/fetch.service.ts ***!
      \**********************************/

    /*! exports provided: FetchService */

    /***/
    function RPep(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FetchService", function () {
        return FetchService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      var FetchService = /*#__PURE__*/function () {
        function FetchService(http) {
          _classCallCheck(this, FetchService);

          this.http = http;
          this.isLanguageChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        }

        return _createClass(FetchService, [{
          key: "getLanguage",
          value: function getLanguage() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'language');
          }
        }, {
          key: "getKeyText",
          value: function getKeyText(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'key_text/' + id);
          }
        }, {
          key: "getAboutUsPageCOntent",
          value: function getAboutUsPageCOntent(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get-about-us-content-by-lang/' + id);
          }
        }, {
          key: "createUser",
          value: function createUser(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'create_user', data);
          }
        }, {
          key: "resendOTP",
          value: function resendOTP(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'resend_otp', data);
          }
        }, {
          key: "registerUser",
          value: function registerUser(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'register_user', data);
          }
        }, {
          key: "profile",
          value: function profile(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'user_profile', data);
          }
        }, {
          key: "get_location",
          value: function get_location(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_long', data);
          }
        }, {
          key: "help_video",
          value: function help_video(lang_code) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'help_video/' + lang_code);
          }
        }, {
          key: "add_location",
          value: function add_location(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'add_location', data);
          }
        }, {
          key: "get_user_locations",
          value: function get_user_locations(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_location/' + id);
          }
        }, {
          key: "get_lat_lon",
          value: function get_lat_lon(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_location/' + id);
          }
        }, {
          key: "updateLocation",
          value: function updateLocation(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'edit_location', data);
          }
        }, {
          key: "remove_location",
          value: function remove_location(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'remove_location/' + id);
          }
        }, {
          key: "getUserLocationForDonation",
          value: function getUserLocationForDonation(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_user_loaction/' + id);
          }
        }, {
          key: "donate_food_location",
          value: function donate_food_location(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food', data);
          }
        }, {
          key: "donate_food_details",
          value: function donate_food_details(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_details', data);
          }
        }, {
          key: "reviewFood",
          value: function reviewFood(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'review_food/' + id);
          }
        }, {
          key: "update_food_details",
          value: function update_food_details(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_food_details', data);
          }
        }, {
          key: "pending_donation",
          value: function pending_donation(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'pending_donation/' + id);
          }
        }, {
          key: "my_alloted_donation",
          value: function my_alloted_donation(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_alloted_donation/' + id);
          }
        }, {
          key: "my_food_request",
          value: function my_food_request(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_food_request/' + id);
          }
        }, {
          key: "my_alloted_request",
          value: function my_alloted_request(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_alloted_request/' + id);
          }
        }, {
          key: "receiver_food_details",
          value: function receiver_food_details(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'receiver_food_details', data);
          }
        }, {
          key: "accept_food",
          value: function accept_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'accept_food', data);
          }
        }, {
          key: "accept_food_request",
          value: function accept_food_request(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'accept_food_request', data);
          }
        }, {
          key: "cancel_accept_food",
          value: function cancel_accept_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_accept_food', data);
          }
        }, {
          key: "cancel_requested_food",
          value: function cancel_requested_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_requested_food', data);
          }
        }, {
          key: "cancel_alloted_request",
          value: function cancel_alloted_request(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_alloted_request', data);
          }
        }, {
          key: "get_food_cancel_alloted_request",
          value: function get_food_cancel_alloted_request(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_food_cancel_alloted_request', data);
          }
        }, {
          key: "get_reasons",
          value: function get_reasons(lang_code) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_reasons/' + lang_code);
          }
        }, {
          key: "get_terms_conditions",
          value: function get_terms_conditions(lang_code) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_terms_conditions/' + lang_code);
          }
        }, {
          key: "volunteer_get_terms_conditions",
          value: function volunteer_get_terms_conditions(lang_code) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_get_terms_conditions/' + lang_code);
          }
        }, {
          key: "receiver_details",
          value: function receiver_details(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'receiver_data/' + id);
          }
        }, {
          key: "nearest_donors",
          value: function nearest_donors(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'nearest_donors', data);
          }
        }, {
          key: "check_pincode",
          value: function check_pincode(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'check_pincode', data);
          }
        }, {
          key: "distanceAndTime",
          value: function distanceAndTime(slat, slon, dlat, dlon, mode) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.set('Authorization', 'Basic');
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
            return this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyDFf3YK0MWDI1dYyVcJONOwdaaXW_eO3aU&origins=' + slat + ',' + slon + '&destinations=' + dlat + ',' + dlon + '&mode=' + mode + '&language=en-EN&sensor=false', {
              headers: headers
            });
          }
        }, {
          key: "showTimeAndDistance",
          value: function showTimeAndDistance(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_time_distance', data);
          }
        }, {
          key: "get_donor_food_detail",
          value: function get_donor_food_detail(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donar_food_detail/' + id);
          }
        }, {
          key: "get_volunteer_detail",
          value: function get_volunteer_detail(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_detail/' + id);
          }
        }, {
          key: "pickup_food",
          value: function pickup_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'food_pickup', data);
          }
        }, {
          key: "pickup_food_for_get",
          value: function pickup_food_for_get(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'food_pickup_for_get', data);
          }
        }, {
          key: "feedback",
          value: function feedback(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'feedback', data);
          }
        }, {
          key: "feedback_donor",
          value: function feedback_donor(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'feedback_donor', data);
          }
        }, {
          key: "register_volunteer",
          value: function register_volunteer(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'register_volunteer', data);
          }
        }, {
          key: "volunteer_request",
          value: function volunteer_request(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'request-food', data);
          }
        }, {
          key: "get_request",
          value: function get_request(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_request/' + id);
          }
        }, {
          key: "my_ontheway_food",
          value: function my_ontheway_food(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_ontheway_food/' + id);
          }
        }, {
          key: "my_waiting_request",
          value: function my_waiting_request(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_waiting_request/' + id);
          }
        }, {
          key: "my_completed_food",
          value: function my_completed_food(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'my_completed_food/' + id);
          }
        }, {
          key: "volunteer_receive_requested_food",
          value: function volunteer_receive_requested_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'receive-food', data);
          }
        }, {
          key: "volunteer_received_cancel_food",
          value: function volunteer_received_cancel_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel-alloted-food', data);
          }
        }, {
          key: "volunteer_cancel_requested_food",
          value: function volunteer_cancel_requested_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel-receive-food', data);
          }
        }, {
          key: "getAllRowWithoutWhere",
          value: function getAllRowWithoutWhere(model) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getAllRowWithoutWhere', model);
          }
        }, {
          key: "getTestimonialByLanguage",
          value: function getTestimonialByLanguage(model) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get-testimonial-by-lang', model);
          }
        }, {
          key: "deleteMyAccount",
          value: function deleteMyAccount(model) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'delete-my-account', model);
          }
        }, {
          key: "notify",
          value: function notify(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'notify', data);
          }
        }, {
          key: "req_list",
          value: function req_list(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'food-request', data);
          }
        }, {
          key: "v_edit",
          value: function v_edit(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_edit/' + id);
          }
        }, {
          key: "get_waiting_food",
          value: function get_waiting_food() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_waiting_food');
          }
        }, {
          key: "cancel_all_request",
          value: function cancel_all_request(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_all_request/' + id);
          }
        }, {
          key: "v_check",
          value: function v_check(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_check/' + id);
          }
        }, {
          key: "update_volunteer",
          value: function update_volunteer(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_volunteer', data);
          }
        }, {
          key: "get_user_city",
          value: function get_user_city(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'user_city/' + id);
          }
        }, {
          key: "get_top_donors",
          value: function get_top_donors(city) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'top_donors/' + city);
          }
        }, {
          key: "show_feedback",
          value: function show_feedback(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_feedback/' + id);
          }
        }, {
          key: "weekly_donation_graph",
          value: function weekly_donation_graph(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donation_graph_weekly/' + id);
          }
        }, {
          key: "monthly_donation_graph",
          value: function monthly_donation_graph(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donation_graph_monthly/' + id);
          }
        }, {
          key: "blessings_this_week",
          value: function blessings_this_week(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'blessing_this_week/' + id);
          }
        }, {
          key: "blessings_this_month",
          value: function blessings_this_month(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'blessing_this_month/' + id);
          }
        }, {
          key: "total_blessings",
          value: function total_blessings(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'total_blessings/' + id);
          }
        }, {
          key: "food_quality_weekly",
          value: function food_quality_weekly(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_food_quality', data);
          }
        }, {
          key: "weekly_packaging",
          value: function weekly_packaging(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_packaging/' + id);
          }
        }, {
          key: "weekly_behaviour",
          value: function weekly_behaviour(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_behaviour/' + id);
          }
        }, {
          key: "monthly_food_quality",
          value: function monthly_food_quality(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_food_quality/' + id);
          }
        }, {
          key: "monthly_packaging",
          value: function monthly_packaging(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_packaging/' + id);
          }
        }, {
          key: "monthly_behaviour",
          value: function monthly_behaviour(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_behaviour/' + id);
          }
        }, {
          key: "weekly_volunteer_req",
          value: function weekly_volunteer_req(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'weekly_volunteer_req/' + id);
          }
        }, {
          key: "monthly_volunteer_req",
          value: function monthly_volunteer_req(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'monthly_volunteer_req/' + id);
          }
        }, {
          key: "volunteer_blessings_this_week",
          value: function volunteer_blessings_this_week(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_blessing_this_week/' + id);
          }
        }, {
          key: "volunteer_blessings_this_month",
          value: function volunteer_blessings_this_month(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_blessing_this_month/' + id);
          }
        }, {
          key: "volunteer_total_blessings",
          value: function volunteer_total_blessings(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_total_blessings/' + id);
          }
        }, {
          key: "volunteer_city",
          value: function volunteer_city(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_city/' + id);
          }
        }, {
          key: "top_volunteers",
          value: function top_volunteers(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'top_volunteers/' + id);
          }
        }, {
          key: "twilio_token",
          value: function twilio_token() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'twilio_token_generate');
          }
        }, {
          key: "get_registered_user_data",
          value: function get_registered_user_data(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_user_detail/' + id);
          }
        }, {
          key: "collect_food_noti_to_donor",
          value: function collect_food_noti_to_donor(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'collect_food_notification', data);
          }
        }, {
          key: "get_notification",
          value: function get_notification(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_notification/' + id);
          }
        }, {
          key: "read_notification",
          value: function read_notification(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'read_notification/' + id);
          }
        }, {
          key: "get_available_food",
          value: function get_available_food(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_available_food/' + id);
          }
        }, {
          key: "cancel_donation_food",
          value: function cancel_donation_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_donation_food', data);
          }
        }, {
          key: "cancel_alloted_food",
          value: function cancel_alloted_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cancel_alloted_food', data);
          }
        }, {
          key: "change_app_status",
          value: function change_app_status(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'change_app_status', data);
          }
        }, {
          key: "notify_donar",
          value: function notify_donar(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'notify_donar', data);
          }
        }, {
          key: "notify_donar_donate",
          value: function notify_donar_donate(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'notify_donar_donate', data);
          }
        }, {
          key: "get_waypoints",
          value: function get_waypoints(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_waypoints', data);
          }
        }, {
          key: "get_volunteer_waypoints",
          value: function get_volunteer_waypoints(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_waypoints', data);
          }
        }, {
          key: "get_volunteer_waypoints_new",
          value: function get_volunteer_waypoints_new(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_waypoints_new', data);
          }
        }, {
          key: "alert_volunteer_on_true",
          value: function alert_volunteer_on_true(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'alert_volunteer_on_true', data);
          }
        }, {
          key: "store_food_for_waiting",
          value: function store_food_for_waiting(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'store_food_for_waiting', data);
          }
        }, {
          key: "get_volunteer_waypoints_by_condition",
          value: function get_volunteer_waypoints_by_condition(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_volunteer_waypoints_by_condition', data);
          }
        }, {
          key: "save_contact_us",
          value: function save_contact_us(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'save_contact_us', data);
          }
        }, {
          key: "recomended_distance",
          value: function recomended_distance(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'recomended_distance', data);
          }
        }, {
          key: "donate_food_to_volunteer",
          value: function donate_food_to_volunteer(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_to_volunteer', data);
          }
        }, {
          key: "active_donation",
          value: function active_donation(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'active_donation', data);
          }
        }, {
          key: "add_call_detail",
          value: function add_call_detail(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'add_call_detail', data);
          }
        }, {
          key: "get_received_food",
          value: function get_received_food(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_received_food/' + id);
          }
        }, {
          key: "donate_food_location_new",
          value: function donate_food_location_new(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_new', data);
          }
        }, {
          key: "donate_food_details_new",
          value: function donate_food_details_new(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_food_details_new', data);
          }
        }, {
          key: "update_food_details_new",
          value: function update_food_details_new(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_food_details_new', data);
          }
        }, {
          key: "test",
          value: function test(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'test', data);
          }
        }, {
          key: "volunterr_accept_request",
          value: function volunterr_accept_request(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunterr_accept_request', data);
          }
        }, {
          key: "checkVolunteerAcceptRequest",
          value: function checkVolunteerAcceptRequest(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunterr_accept_request_result', data);
          }
        }, {
          key: "convert_to_pickup_request",
          value: function convert_to_pickup_request(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'convert_to_pickup_request', data);
          }
        }, {
          key: "convert_to_pickup_request_no_volunteer",
          value: function convert_to_pickup_request_no_volunteer(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'convert_to_pickup_request_no_volunteer', data);
          }
        }, {
          key: "donate_later_food",
          value: function donate_later_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_later_food', data);
          }
        }, {
          key: "donate_later_food_no_volunteer",
          value: function donate_later_food_no_volunteer(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donate_later_food_no_volunteer', data);
          }
        }, {
          key: "reject_food_request_by_donee",
          value: function reject_food_request_by_donee(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'reject_food_request_by_donee', data);
          }
        }, {
          key: "donee_accept_food",
          value: function donee_accept_food(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'donee_accept_food', data);
          }
        }, {
          key: "get_donate_food",
          value: function get_donate_food(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'get_donate_food/' + id);
          }
        }, {
          key: "volunteer_graph_today",
          value: function volunteer_graph_today(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_today/' + id);
          }
        }, {
          key: "volunteer_graph_weekly",
          value: function volunteer_graph_weekly(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_weekly/' + id);
          }
        }, {
          key: "volunteer_graph_monthly",
          value: function volunteer_graph_monthly(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_monthly/' + id);
          }
        }, {
          key: "volunteer_graph_yearly",
          value: function volunteer_graph_yearly(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_yearly/' + id);
          }
        }, {
          key: "count_today_donation_fullfiled",
          value: function count_today_donation_fullfiled(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_today_donation_fullfiled/' + id);
          }
        }, {
          key: "count_yearly_donation_fullfiled",
          value: function count_yearly_donation_fullfiled(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_yearly_donation_fullfiled/' + id);
          }
        }, {
          key: "count_monthly_donation_fullfiled",
          value: function count_monthly_donation_fullfiled(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_monthly_donation_fullfiled/' + id);
          }
        }, {
          key: "count_weekly_donation_fullfiled",
          value: function count_weekly_donation_fullfiled(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_weekly_donation_fullfiled/' + id);
          }
        }, {
          key: "volunteer_graph_today_accepted",
          value: function volunteer_graph_today_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_today_accepted/' + id);
          }
        }, {
          key: "volunteer_graph_weekly_accepted",
          value: function volunteer_graph_weekly_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_weekly_accepted/' + id);
          }
        }, {
          key: "volunteer_graph_monthly_accepted",
          value: function volunteer_graph_monthly_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_monthly_accepted/' + id);
          }
        }, {
          key: "volunteer_graph_yearly_accepted",
          value: function volunteer_graph_yearly_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'volunteer_graph_yearly_accepted/' + id);
          }
        }, {
          key: "count_yearly_donation_accepted",
          value: function count_yearly_donation_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_yearly_donation_accepted/' + id);
          }
        }, {
          key: "count_today_donation_accepted",
          value: function count_today_donation_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_today_donation_accepted/' + id);
          }
        }, {
          key: "count_monthly_donation_accepted",
          value: function count_monthly_donation_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_monthly_donation_accepted/' + id);
          }
        }, {
          key: "count_weekly_donation_accepted",
          value: function count_weekly_donation_accepted(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'count_weekly_donation_accepted/' + id);
          }
        }, {
          key: "show_feedback_by_id",
          value: function show_feedback_by_id(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'show_feedback_by_id/' + id);
          }
        }, {
          key: "updateLanguage",
          value: function updateLanguage(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_language', data);
          }
        }, {
          key: "updateDeviceToken",
          value: function updateDeviceToken(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'update_device_token', data);
          }
        }, {
          key: "checkDeviceId",
          value: function checkDeviceId(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'check_unique_login', data);
          }
        }, {
          key: "read_notification_by_id",
          value: function read_notification_by_id(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'read_notification_by_id', data);
          }
        }]);
      }();

      FetchService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      FetchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FetchService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./storage.service */
      "qkCY");
      /* harmony import */


      var _modal_push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modal/push-notification/push-notification.page */
      "kEdH");
      /* harmony import */


      var _modal_deliver_food_volunteer_deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./modal/deliver-food-volunteer/deliver-food-volunteer.page */
      "EQfQ");
      /* harmony import */


      var _modal_pickup_success_modal_pickup_success_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modal/pickup-success-modal/pickup-success-modal.page */
      "uFyy");
      /* harmony import */


      var _modal_simple_push_notification_simple_push_notification_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modal/simple-push-notification/simple-push-notification.page */
      "4kW0");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _error_msg_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./error-msg.service */
      "ElZd");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "E9qw");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(firebase, geolocation, alertController, device, errorMsg, platform, splashScreen, statusBar, router, fetch, storage, modalController, diagnostic) {
          _classCallCheck(this, AppComponent);

          this.firebase = firebase;
          this.geolocation = geolocation;
          this.alertController = alertController;
          this.device = device;
          this.errorMsg = errorMsg;
          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.modalController = modalController;
          this.diagnostic = diagnostic;
          this.model = {};
          this.volunteer_data = []; //directionsService = new google.maps.DirectionsService();
          // directionsRenderer = new google.maps.DirectionsRenderer({
          //   suppressMarkers: true,
          // });

          this.pointarr = [];
          this.selectedIndex = 0;
          this.appPages = [];
        }

        return _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.statusBar.styleBlackTranslucent();

              _this2.splashScreen.hide();

              var self = _this2;
              self.options = {
                enableHighAccuracy: false
              };
              self.geolocation.getCurrentPosition(self.options).then(function (resp) {
                console.log('inside');
                self.model.lat = resp.coords.latitude;
                self.model.lon = resp.coords.longitude;
                self.showAddress(self.model.lat, self.model.lon);
              });
              var permissions = cordova.plugins.permissions;
              console.log(permissions);

              if (!permissions || !permissions.POST_NOTIFICATIONS) {
                console.warn("Permissions plugin or POST_NOTIFICATIONS not available.");
                return;
              } // First check if permission is already granted


              permissions.checkPermission(permissions.POST_NOTIFICATIONS, function (status) {
                if (!status.hasPermission) {
                  // Now request it
                  permissions.requestPermission(permissions.POST_NOTIFICATIONS, function (result) {
                    if (result.hasPermission) {
                      console.log("Notification permission granted.");
                    } else {
                      console.warn("Notification permission denied.");
                    }
                  }, function (error) {
                    console.error("Permission request failed:", error);
                  });
                } else {
                  console.log("Notification permission already granted.");
                }
              });
            });
            this.checkVolunteer(); //alert('dsd');
          }
        }, {
          key: "showAddress",
          value: function showAddress(lat, lon) {
            var _this3 = this;

            var self = this;
            var latLng = new google.maps.LatLng(lat, lon);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'latLng': latLng
            }, function (results, status) {
              console.log("all results", results);
              _this3.pincode = results[0].address_components[5].short_name;
              _this3.model.colony_name = results[0].formatted_address;
              console.log(_this3.model.colony_name);
              results[0].address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                  self.model.city = val.long_name;
                }

                if (val.types[0] == "administrative_area_level_1") {
                  self.model.state = val.long_name;
                }

                if (val.types[0] == "country") {
                  self.model.country = val.long_name;
                }

                if (val.types[0] == "postal_code") {
                  self.model.postalCode = val.long_name;
                  console.log(self.model.postalCode + "postalCode");
                }
              });
              setTimeout(function () {
                console.log(self.model.postalCode, "--");

                if (self.model.postalCode) {
                  self.closeModal(self.model.postalCode);
                }
              }, 1000);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal(code) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this4 = this;

              var datap;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    console.log('inside close', code);
                    localStorage.setItem('pincode', code.toString());

                    if (this.user_id) {
                      console.log(this.user_id + code, 'user-id');
                      datap = {
                        pincode: code
                      };
                      console.log("posted data" + datap);
                      this.fetch.check_pincode(datap).subscribe(function (res) {
                        console.log(res, "check_pincode");

                        if (res.success == true) {
                          _this4.router.navigate(['/pincode-error-component']);

                          localStorage.setItem('success', 'true');
                        }
                      });
                    }

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          } // async showPincodeAlert() {
          //   const modal = await this.modalController.create({
          //   component: PincodeErrorMessageComponent,
          //   cssClass: 'custom_current_location_modal notification-modal',
          //   backdropDismiss : false,
          //   componentProps: {
          //   }
          //   });  
          //   modal.onDidDismiss().then((dataReturned) => {
          //   });
          //   return await modal.present();
          // } 
          // async showPincodeAlert(msg) {
          //   const alert = await this.alertController.create({
          //     cssClass: "my-custom-class custom_alert_1",
          //     message: msg,
          //     buttons: [
          //       {
          //         text: this.model.key_text17,
          //         role: "cancel",
          //         cssClass: "secondary",
          //         handler: () => {
          //           //this.router.navigate(['/home']);
          //         },
          //       },
          //     ],
          //   });
          //   await alert.present();
          // }

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.initializeApp();
            console.log("UPDATED...");
            this.user_id = JSON.parse(localStorage.getItem('user_id'));
            this.platform.ready().then(function () {
              // this.success = JSON.parse(localStorage.getItem('success'));
              //  if((this.user_id != '')&& ( this.success=='true')){
              //   this.router.navigate(['/pincode-error-component']);
              //  }
              _this5.getDevice();

              var self = _this5;
              setInterval(function () {
                self.checkVolunteer();
                self.checkLoginUser();

                if (localStorage.getItem('user_id') != null) {
                  self.checkUserUniqueId();
                }
              }, 1000); //run this thang every 1 seconds

              _this5.model.fromNotification = false; //  document.addEventListener('deviceready',() => {
              //   FCMPlugin.getToken((token: any) => {
              // 	  // alert(token)
              //     localStorage.setItem('device_token', JSON.stringify(token));
              //     // while(this.res.success == true){
              //     //   this.showvolnoti(this.res)
              //     // }
              //     });
              // // if(localStorage.getItem('check_notification') == 'true'){
              // // }
              //   });

              document.addEventListener("deviceready", function () {
                console.log("Device is ready...");
                var permissions = cordova.plugins.permissions;
                console.log(permissions);

                if (!permissions || !permissions.POST_NOTIFICATIONS) {
                  console.warn("Permissions plugin or POST_NOTIFICATIONS not available.");
                  return;
                } // First check if permission is already granted


                permissions.checkPermission(permissions.POST_NOTIFICATIONS, function (status) {
                  if (!status.hasPermission) {
                    // Now request it
                    permissions.requestPermission(permissions.POST_NOTIFICATIONS, function (result) {
                      if (result.hasPermission) {
                        console.log("Notification permission granted.");
                      } else {
                        console.warn("Notification permission denied.");
                      }
                    }, function (error) {
                      console.error("Permission request failed:", error);
                    });
                  } else {
                    console.log("Notification permission already granted.");
                  }
                }); // FCMPlugin.getToken((token: any) => {
                //   localStorage.setItem("device_token", JSON.stringify(token));
                // });

                _this5.firebase.getToken().then(function (token) {
                  return localStorage.setItem("device_token", JSON.stringify(token));
                });

                FCMPlugin.onNotification(function (data) {
                  console.log("Push received:", data);
                  _this5.model.fromNotification = true;
                  var self = _this5;
                  console.log(data);

                  if (data.wasTapped) {
                    var jd = JSON.parse(data.message);

                    if (jd.check_val == "1") {
                      self.showNotification(jd.body, jd.my_array, jd.donor_details, jd.request_id);
                    } else if (jd.check_val == "2") {
                      self.showFoodDeliverPopupToVolunteer(jd.my_array);
                    } else if (jd.check_val == "3") {
                      self.showFoodDeliverPopupToDonor(jd.my_array);
                    } // Notification was received on device tray and tapped by the user.

                  } else {
                    var _jd = JSON.parse(data.message); //;


                    if (_jd.check_val == "1") {
                      _this5.showNotification(data.body, _jd.my_array, _jd.donor_details, _jd.request_id);
                    } else if (_jd.check_val == "2") {
                      _this5.showFoodDeliverPopupToVolunteer(_jd.my_array);
                    } else if (_jd.check_val == "3") {
                      _this5.showFoodDeliverPopupToDonor(_jd.my_array);
                    } else {
                      _this5.showAlert(data.body);
                    }
                  }
                }, function (success) {
                  if (!_this5.model.fromNotification) {
                    if (JSON.parse(localStorage.getItem("user_registerd")) != null) {
                      _this5.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem("lang"))); // console.log(this.fetch.isLanguageChanged,'kijioppo');


                      _this5.router.navigate(["/home"]); //this.navCtrl.navigateBack(['/home']);

                    } else if (JSON.parse(localStorage.getItem("user_id")) != null && localStorage.getItem("isotpverified") == "1") {
                      _this5.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem("lang")));

                      _this5.router.navigate(["/register-as-volunteer"]); //this.navCtrl.navigateBack(['/register-as-volunteer']);

                    } else if (localStorage.getItem("isotpverified") == "0") {
                      _this5.router.navigate(["/otp"]);
                    } else {
                      _this5.router.navigate(["/language"]);
                    }
                  }
                }, function (error) {});
              });

              if (!_this5.model.fromNotification) {
                console.log(localStorage.getItem('isotpverified'));

                if (JSON.parse(localStorage.getItem('user_registerd')) != null) {
                  _this5.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));

                  _this5.router.navigate(['/home']); //this.navCtrl.navigateBack(['/home']);

                } else if (localStorage.getItem('user_id') != undefined && localStorage.getItem('isotpverified') == '1') {
                  if (JSON.parse(localStorage.getItem('user_id')) != null) {
                    _this5.fetch.isLanguageChanged.next(JSON.parse(localStorage.getItem('lang')));

                    _this5.router.navigate(['/register-as-volunteer']);
                  } //this.navCtrl.navigateBack(['/register-as-volunteer']);

                } else if (localStorage.getItem('isotpverified') == '0') {
                  _this5.router.navigate(['/otp']);
                } else {
                  _this5.router.navigate(['/language']);
                }
              }

              _this5.fetch.isLanguageChanged.subscribe(function (value) {
                _this5.isLanguageChanged = value;
                var lang_code = JSON.parse(localStorage.getItem('lang'));

                _this5.fetch.getKeyText(lang_code).subscribe(function (rs) {
                  _this5.storage.setScope(rs);

                  var res = _this5.storage.getScope();

                  var item1 = res.find(function (i) {
                    return i.key_text === 'REGISTER_AS_VOLUNTEER';
                  });
                  _this5.model.key_text1 = item1[lang_code];
                  var item2 = res.find(function (i) {
                    return i.key_text === 'SIDEBAR_QUOTE1';
                  });
                  _this5.model.key_text2 = item2[lang_code];
                  var item3 = res.find(function (i) {
                    return i.key_text === 'PROFILE';
                  });
                  _this5.model.key_text3 = item3[lang_code];
                  var item4 = res.find(function (i) {
                    return i.key_text === 'SIDEBAR_QUOTE2';
                  });
                  _this5.model.key_text4 = item4[lang_code];
                  var item5 = res.find(function (i) {
                    return i.key_text === 'SAVED_ADDRESSES';
                  });
                  _this5.model.key_text5 = item5[lang_code];
                  var item6 = res.find(function (i) {
                    return i.key_text === 'YOUR_PREVIOUSLY_SAVED_ADDRESSES';
                  });
                  _this5.model.key_text6 = item6[lang_code];
                  var item7 = res.find(function (i) {
                    return i.key_text === 'CHOOSE_LANGUAGE';
                  });
                  _this5.model.key_text7 = item7[lang_code];
                  var item8 = res.find(function (i) {
                    return i.key_text === 'SIDEBAR_QUOTE3';
                  });
                  _this5.model.key_text8 = item8[lang_code];
                  var item9 = res.find(function (i) {
                    return i.key_text === 'HELP';
                  });
                  _this5.model.key_text9 = item9[lang_code];
                  var item10 = res.find(function (i) {
                    return i.key_text === 'SIDEBAR_QUOTE4';
                  });
                  _this5.model.key_text10 = item10[lang_code];
                  var item11 = res.find(function (i) {
                    return i.key_text === 'ABOUT_US';
                  });
                  _this5.model.key_text11 = item11[lang_code];
                  var item12 = res.find(function (i) {
                    return i.key_text === 'SIDEBAR_QUOTE5';
                  });
                  _this5.model.key_text12 = item12[lang_code];
                  var item13 = res.find(function (i) {
                    return i.key_text === 'SHOW_IN_BETWEEN';
                  });
                  _this5.model.key_text13 = item13[lang_code];
                  var item14 = res.find(function (i) {
                    return i.key_text === 'LOGOUT';
                  });
                  _this5.model.key_text14 = item14[lang_code];
                  var item15 = res.find(function (i) {
                    return i.key_text === 'MULTI_LOGIN_ERROR_TEXT';
                  });
                  _this5.model.key_text15 = item15[lang_code];
                  var item16 = res.find(function (i) {
                    return i.key_text === 'SORRY_NOT_AVAILABLE_IN_YOUR_AREA';
                  });
                  _this5.model.key4 = item16[lang_code];
                  var item17 = res.find(function (i) {
                    return i.key_text === 'OKAY';
                  });
                  _this5.model.key_text17 = item17[lang_code];
                });
              });
            });
            var self = this;
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var path = window.location.pathname.split('folder/')[1]; //console.log("app.component"); 

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }
          } // checkwaiting(){
          //   this.user_id = JSON.parse(localStorage.getItem('user_registerd'));
          //   if(this.user_id){
          //     this.fetch.v_check(this.user_id).subscribe(res => {
          //       if(res.success == true){
          //         this.showvolnoti(res)
          //       }
          //     });
          //   }
          // }

        }, {
          key: "checkVolunteer",
          value: function checkVolunteer() {
            var _this6 = this;

            this.user_id = JSON.parse(localStorage.getItem('user_registerd'));

            if (this.user_id) {
              this.fetch.v_check(this.user_id).subscribe(function (res) {
                if (res.success == true) {
                  _this6.res = res;

                  if (res.status == 1) {
                    localStorage.setItem('volunteer_approve', '1');
                  } else {
                    localStorage.setItem('volunteer_approve', '0');
                  }
                } else {
                  localStorage.setItem('volunteer_approve', '0');
                }
              });
            }
          } // checkposition(vol, pathpoints) {
          //   var position = new google.maps.LatLng(vol.lat, vol.lng);
          //   var res = google.maps.geometry.poly.isLocationOnEdge(
          //     position,
          //     new google.maps.Polyline({ path: pathpoints }),
          //     0.0030
          //   );
          //   return { res, vol };
          // }
          // getLiText(point) {
          //   let lat = point.lat(),
          //     lng = point.lng();
          //   return { lat: lat, lng: lng };
          // }
          //  showvolnoti(verify){
          //     this.fetch.v_edit(verify.data).subscribe(res => {
          //       console.log("showvolnoti:",res);
          //       var element = {
          //            lat: res.data.latitude,
          //            lng: res.data.longitude
          //       }
          //       this.fetch.get_waiting_food().subscribe(res => {
          //             //  var start = {
          //             //       lat: res.data.startLat,
          //             //       lng: res.data.startLng
          //             //  }
          //             //  console.log("ye apna wala start:",start);
          //             //  var end = {
          //             //       lat: res.data.endLat,
          //             //       lng: res.data.endLng
          //             //  }
          //            //  console.log("ye apna wala end:",end);
          //       this.directionsService.route(
          //         {
          //           origin: "Tower Chowk, Freeganj, Madhav Nagar, Ujjain, Madhya Pradesh 456010, India",
          //           destination: "5Q4P+PQ3, Sanwer Rd, Nanakheda, Mahakal Vanijya, Ujjain, Madhya Pradesh 456010, India",
          //           //   waypoints: waypts,
          //           optimizeWaypoints: true,
          //           travelMode: google.maps.TravelMode.DRIVING,
          //         },
          //         (response, status) => {
          //           if (status === "OK") {
          //             this.directionsRenderer.setDirections(response);
          //             /////////////////////////////
          //             if (response.routes && response.routes.length > 0) {
          //               console.log("this is response of path:", response);
          //               var routes = response.routes;
          //               for (var j = 0; j < routes.length; j++) {
          //                 var points = routes[j].overview_path;
          //                 // var ul = document.getElementById("vertex");
          //                 for (var i = 0; i < points.length; i++) {
          //                   // var li = document.createElement('li');
          //                   // li.innerHTML = this.getLiText(points[i]);
          //                   var result = this.getLiText(points[i]);
          //                   console.log("path all latlong:", result);
          //                   // ul.appendChild(li);
          //                   //  this.resultarr.push(result.lat,result.lng);
          //                   this.allpoints = new google.maps.LatLng(
          //                     result.lat,
          //                     result.lng
          //                   );
          //                   console.log("this.allpoints:",this.allpoints);
          //                   this.pointarr.push(this.allpoints);
          //                   console.log(this.pointarr);
          //                 }
          //               }
          //             }
          //       var check = this.checkposition(element, this.pointarr);
          //            console.log("check:",check);
          //             if (check.res = true){
          //               this.showFoodDeliverPopupToVolunteer("donar is waiting for food");
          //             }
          //           }
          //     });
          //     })
          //     })
          // }

        }, {
          key: "checkLoginUser",
          value: function checkLoginUser() {
            var _this7 = this;

            if (localStorage.getItem('user_id') != undefined) {
              if (JSON.parse(localStorage.getItem('user_id')) != null) {
                var data = JSON.stringify({
                  'id': JSON.parse(localStorage.getItem('user_id'))
                });
                this.fetch.profile(data).subscribe(function (res) {
                  if (res['status'] != 1) {
                    _this7.logout();
                  }
                });
              }
            }
          }
        }, {
          key: "save_address",
          value: function save_address() {
            var id = JSON.parse(localStorage.getItem('user_registerd'));
            this.router.navigate(['/saved-addresses', id]);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.getDevice();
            this.router.navigate(['/language']);
          }
        }, {
          key: "side_bar_route",
          value: function side_bar_route(route) {
            this.router.navigate(['/' + route]);
          }
        }, {
          key: "showNotification",
          value: function showNotification(msg, array, donor_details, request_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalController.create({
                      component: _modal_push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_10__["PushNotificationPage"],
                      cssClass: 'custom_current_location_modal notification-modal',
                      backdropDismiss: false,
                      componentProps: {
                        "array": array,
                        "donor_details": donor_details,
                        "request_id": request_id,
                        "message": msg,
                        "click_action": "FCM_PLUGIN_ACTIVITY"
                      }
                    });

                  case 2:
                    modal = _context9.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context9.next = 6;
                    return modal.present();

                  case 6:
                    return _context9.abrupt("return", _context9.sent);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "showFoodDeliverPopupToVolunteer",
          value: function showFoodDeliverPopupToVolunteer(array) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalController.create({
                      component: _modal_deliver_food_volunteer_deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_11__["DeliverFoodVolunteerPage"],
                      cssClass: 'custom_feedback_modal  my_volunteer_completed_modal',
                      backdropDismiss: false,
                      componentProps: {
                        "array": array
                      }
                    });

                  case 2:
                    modal = _context10.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context10.next = 6;
                    return modal.present();

                  case 6:
                    return _context10.abrupt("return", _context10.sent);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "showFoodDeliverPopupToDonor",
          value: function showFoodDeliverPopupToDonor(array) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.modalController.create({
                      component: _modal_pickup_success_modal_pickup_success_modal_page__WEBPACK_IMPORTED_MODULE_12__["PickupSuccessModalPage"],
                      cssClass: 'custom_filter_modal cancel_allot_food_popup',
                      backdropDismiss: false,
                      componentProps: {
                        "array": array
                      }
                    });

                  case 2:
                    modal = _context11.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context11.next = 6;
                    return modal.present();

                  case 6:
                    return _context11.abrupt("return", _context11.sent);

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    console.log(msg, 'msg');
                    _context12.next = 3;
                    return this.modalController.create({
                      component: _modal_simple_push_notification_simple_push_notification_page__WEBPACK_IMPORTED_MODULE_13__["SimplePushNotificationPage"],
                      cssClass: 'custom_current_location_modal notification-modal',
                      backdropDismiss: false,
                      componentProps: {
                        "msg": msg
                      }
                    });

                  case 3:
                    modal = _context12.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context12.next = 7;
                    return modal.present();

                  case 7:
                    return _context12.abrupt("return", _context12.sent);

                  case 8:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this);
            }));
          } //get Unique_id

        }, {
          key: "getDevice",
          value: function getDevice() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var _this8 = this;

              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    this.platform.ready().then(function () {
                      var uuid = _this8.device.uuid; //  alert("id"+uuid);

                      localStorage.setItem('unique_id', JSON.stringify(uuid));
                    });

                  case 1:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "checkUserUniqueId",
          value: function checkUserUniqueId() {
            var _this9 = this;

            var user_id = JSON.parse(localStorage.getItem('user_id'));
            var unique_id = JSON.parse(localStorage.getItem('unique_id'));
            var data = JSON.stringify({
              'user_id': user_id,
              'unique_id': unique_id
            });
            this.fetch.checkDeviceId(data).subscribe(function (res) {
              if (res.success == false) {
                _this9.errorMsg.showModal(_this9.model.key_text15);

                _this9.logout();
              }
            });
          }
        }]);
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_18__["FirebaseX"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_16__["Device"]
        }, {
          type: _error_msg_service__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TdOy":
    /*!*********************************************************************!*\
      !*** ./src/app/modal/push-notification/push-notification.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function TdOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXNoLW5vdGlmaWNhdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu contentId=\"main-content\" type=\"overlay\">\n            <ion-content>\n                <ion-list id=\"inbox-list\" style=\"margin: 0px 30px;\">\n                    <ion-list-header class=\"medium size_18 custom_header\">More</ion-list-header>\n\n                    <!--<ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>-->\n                </ion-list>\n\n                <div class=\"custom_menubar\">\n                    <ion-list class=\"custom_menu\" style=\"margin-top: -40px !important; margin-bottom:12px;\">\n                        <ion-menu-toggle>\n                            <ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/register-volunteer']\">\n                                <div class=\"menu_img\"><img src=\"assets/images/menu_1.svg\"> </div>\n                                <div class=\"menu_content\">\n                                    <div class=\"menu_title size_16 medium\">{{model.key_text1}}</div>\n                                    <div class=\"menu_sub green regular size_12\">{{model.key_text2}}</div>\n\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/profile']\">\n                                <div class=\"menu_img\"><img src=\"assets/images/menu_2.svg\"> </div>\n                                <div class=\"menu_content\">\n                                    <div class=\"menu_title size_16 medium\">{{model.key_text3}}</div>\n                                    <div class=\"menu_sub green regular size_12\">{{model.key_text4}}</div>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/saved-addresses',user_id]\">\n                                <div class=\"menu_img\"><img src=\"assets/images/menu_3.svg\"> </div>\n                                <div class=\"menu_content\">\n                                    <div class=\"menu_title size_16 medium\">{{model.key_text5}}</div>\n                                    <div class=\"menu_sub green regular size_12\">{{model.key_text6}}</div>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/choose-language']\">\n                                <div class=\"menu_img\"><img src=\"assets/images/menu_4.svg\"> </div>\n                                <div class=\"menu_content\">\n                                    <div class=\"menu_title size_16 medium\">{{model.key_text7}}</div>\n                                    <div class=\"menu_sub green regular size_12\">{{model.key_text8}}</div>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/help']\">\n                                <div class=\"menu_img\"><img src=\"assets/images/menu_5.svg\"> </div>\n                                <div class=\"menu_content\">\n                                    <div class=\"menu_title size_16 medium\">{{model.key_text9}}</div>\n                                    <div class=\"menu_sub green regular size_12\">{{model.key_text10}}</div>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-icon-left menu_item\" menu-close [routerLink]=\"['/about-us']\">\n                                <div class=\"menu_img\"><img src=\"assets/images/menu_6.svg\"> </div>\n                                <div class=\"menu_content\">\n                                    <div class=\"menu_title size_16 medium\">{{model.key_text11}}</div>\n                                    <div class=\"menu_sub green regular size_12\">{{model.key_text12}}</div>\n                                </div>\n                            </ion-item>\n\n                            <ion-item class=\"item-icon-left menu_item\" menu-close (click)=\"logout()\">\n                                <div class=\"menu_img\"><img src=\"assets/images/menu_6.svg\"> </div>\n                                <div class=\"menu_content\">\n                                    <div class=\"menu_title size_16 medium\">{{model.key_text14}}</div>\n                                    <div class=\"menu_sub green regular size_12\">{{model.key_text14}}</div>\n                                </div>\n                            </ion-item>\n                        </ion-menu-toggle>\n                    </ion-list>\n                </div>\n            </ion-content>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n</ion-app>";
      /***/
    },

    /***/
    "XVfp":
    /*!******************************************************************************!*\
      !*** ./src/app/pincode-error-component/pincode-error-component.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PincodeErrorComponentComponent */

    /***/
    function XVfp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PincodeErrorComponentComponent", function () {
        return PincodeErrorComponentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pincode_error_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pincode-error-component.component.html */
      "efjc");
      /* harmony import */


      var _pincode_error_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pincode-error-component.component.scss */
      "GNQA");
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

      var PincodeErrorComponentComponent = /*#__PURE__*/function () {
        function PincodeErrorComponentComponent(platform, loadingController, alertController, fetch, router, storage) {
          var _this10 = this;

          _classCallCheck(this, PincodeErrorComponentComponent);

          this.platform = platform;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.fetch = fetch;
          this.router = router;
          this.storage = storage;
          this.model = {};
          this.app_title = 'Khanaa.app';
          this.fetch.isLanguageChanged.subscribe(function (value) {
            _this10.isLanguageChanged = value;
            var lang_code = JSON.parse(localStorage.getItem('lang'));

            _this10.fetch.getKeyText(lang_code).subscribe(function (rs) {
              _this10.storage.setScope(rs);

              var res = _this10.storage.getScope();

              var item1 = res.find(function (i) {
                return i.key_text === 'SORRY_NOT_AVAILABLE_IN_YOUR_AREA';
              });
              _this10.model.key1 = item1[lang_code];
              var item2 = res.find(function (i) {
                return i.key_text === 'OKAY';
              });
              _this10.model.key_text2 = item2[lang_code];
            });
          });
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
          });
        }

        return _createClass(PincodeErrorComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.presentLoading();
          }
        }]);
      }();

      PincodeErrorComponentComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      PincodeErrorComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pincode-error-component',
        template: _raw_loader_pincode_error_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pincode_error_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PincodeErrorComponentComponent);
      /***/
    },

    /***/
    "XrzN":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/push-notification/push-notification.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XrzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <!-- <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\"> -->\n  \n    <div class=\"modal_inner\">\n      <br>\n      \n      <div class=\"medium size_18 green center\" style=\"max-width: 228px; width: 100%; margin: 0 auto;\">\n        {{message}}\n      </div>\n      <br>\n      <div class=\"medium size_16\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <button class=\"app_btn custom_reject_btn\"  (click)=\"RejectRequest(true)\">{{model.key_text1}}</button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <button class=\"app_btn custom_accept_btn\"  (click)=\"acceptRequest()\">{{model.key_text2}}</button>\n          </ion-col>\n        </ion-row>\n         \n      </div>\n    </div>\n\n  </div>\n</ion-content> ";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/browser-tab/ngx */
      "ORb9");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "h+qT");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-recaptcha */
      "jCJ1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "ya1t");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "E9qw"); // import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';


      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__["RecaptchaModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_19__["FirebaseX"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_18__["Device"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["DatePicker"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"], _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_7__["BrowserTab"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_16__["Diagnostic"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "Zpru":
    /*!***************************************************************************!*\
      !*** ./src/app/modal/pickup-success-modal/pickup-success-modal.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Zpru(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrdXAtc3VjY2Vzcy1tb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "efjc":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pincode-error-component/pincode-error-component.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function efjc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content> -->\n    <div class=\"big_header\">\n        <div class=\"ion-padding\">\n            <div class=\"title light poiret\">\n                {{app_title}}\n            </div>\n\n        </div>\n    </div>\n    <div class=\"ion-padding\">\n        <div class=\"app_input_text\">\n            {{this.model.key1}}\n        </div>\n    </div>\n    <!-- <ion-footer>\n        <ion-toolbar>\n            <div class=\"app_button\">\n                <button class=\"app_btn\">{{this.model.key_text2 }}</button>\n            </div>\n        </ion-toolbar>\n    </ion-footer> -->\n\n<!-- </ion-content> -->";
      /***/
    },

    /***/
    "ejjP":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/pickup-success-modal/pickup-success-modal.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ejjP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">  \n    <!-- <a (click)=\"closeModal()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a> -->\n    <div class=\"modal_inner\">\n      <br>\n      <div class=\"center\">\n        <img src=\"assets/images/smile_green.svg\">\n      </div>\n      <br>\n      <div class=\"medium size_18 green center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text1}}\n      </div> \n       <br><br>\n      <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> \n\t  <br>\n       <div class=\"medium size_14 center\" style=\"width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div>\n      <br><br><br><br><br><br><br>\n      <div class=\"medium size_14 center\" style=\"color:#b8b8b8; width: 100%; margin: 0 auto;\">\n        {{model.key_text4}}\n      </div>\n    </div>\n    \n  </div> \n</ion-content> \n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"redirectToNext()\" class=\"app_btn\">{{model.key_text5}}</button>    \n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "fF+m":
    /*!***********************************************************************************!*\
      !*** ./src/app/modal/simple-push-notification/simple-push-notification.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function fFM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUtcHVzaC1ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "gCKo":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/simple-push-notification/simple-push-notification.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gCKo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n    <div class=\"ion-padding\">\n        <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n\n        <div class=\"modal_inner\">\n            <br>\n\n            <div class=\"medium size_16 green center\" style=\"max-width: 300px; width: 100%; margin: 0 auto;\">\n                {{ msg }}\n            </div>\n            <br>\n            <br>\n            <div class=\"app_button\">\n                <button class=\"app_btn\" (click)=\"closeModal()\">{{ model.key_text1 }}</button>\n            </div>\n        </div>\n\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "kEdH":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/push-notification/push-notification.page.ts ***!
      \*******************************************************************/

    /*! exports provided: PushNotificationPage */

    /***/
    function kEdH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PushNotificationPage", function () {
        return PushNotificationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./push-notification.page.html */
      "XrzN");
      /* harmony import */


      var _push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./push-notification.page.scss */
      "TdOy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _dynamic_msg_dynamic_msg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../dynamic-msg/dynamic-msg.page */
      "0jGL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var PushNotificationPage = /*#__PURE__*/function () {
        function PushNotificationPage(storage, fetch, modalController, alertController) {
          _classCallCheck(this, PushNotificationPage);

          this.storage = storage;
          this.fetch = fetch;
          this.modalController = modalController;
          this.alertController = alertController;
          this.model = {};
        }

        return _createClass(PushNotificationPage, [{
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context14.next = 3;
                    return this.modalController.dismiss('');

                  case 3:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.key_text1 = "Reject";
            this.model.key_text2 = "Accept";
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'REJECT';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'ACCEPT';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_FOOD_REJECT_MSG';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'CLOSE';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'FOOD_ACCEPTED';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'SOMETHING_WENT_WRONG';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'FOOD_ALLOTED_TO_OTHER_VOLUNTEER';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'FOOD_REQUIREMENT_OVER';
            });
            this.model.key_text8 = item8[lang_code];
          }
        }, {
          key: "acceptRequest",
          value: function acceptRequest() {
            var _this11 = this;

            var app_user_id = localStorage.getItem('user_id');
            var formData = new FormData();
            formData.append("donate_request", JSON.stringify(this.array));
            formData.append("donate_address", JSON.stringify(this.donor_details));
            formData.append("receiver_id", app_user_id);
            formData.append("request_id", this.request_id);
            this.fetch.volunterr_accept_request(formData).subscribe(function (res) {
              if (res['success']) {
                _this11.closeModal();

                _this11.showAlert(res['message']);
              }
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    if (msg == 'Food accepted') {
                      msg = this.model.key_text5;
                    } else if (msg == 'Food alloted to other volunteer') {
                      msg = this.model.key_text7;
                    } else if (msg == 'Food requirement is over') {
                      msg = this.model.key_text8;
                    } else {
                      msg = this.model.key_text6;
                    }

                    _context15.next = 3;
                    return this.alertController.create({
                      cssClass: 'my-custom-class custom_alert_1',
                      //header: 'Alert',
                      message: msg,
                      buttons: [{
                        text: this.model.key_text4,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }]
                    });

                  case 3:
                    alert = _context15.sent;
                    _context15.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "RejectRequest",
          value: function RejectRequest() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    this.closeModal();
                    _context16.next = 3;
                    return this.modalController.create({
                      component: _dynamic_msg_dynamic_msg_page__WEBPACK_IMPORTED_MODULE_6__["DynamicMsgPage"],
                      cssClass: 'home_content_modal dynamic_model_css',
                      componentProps: {
                        "msg": this.model.key_text3
                      }
                    });

                  case 3:
                    modal = _context16.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context16.next = 7;
                    return modal.present();

                  case 7:
                    return _context16.abrupt("return", _context16.sent);

                  case 8:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, this);
            }));
          }
        }]);
      }();

      PushNotificationPage.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      PushNotificationPage.propDecorators = {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        array: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        donor_details: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        request_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PushNotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-push-notification',
        template: _raw_loader_push_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_push_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PushNotificationPage);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "qkCY":
    /*!************************************!*\
      !*** ./src/app/storage.service.ts ***!
      \************************************/

    /*! exports provided: StorageService */

    /***/
    function qkCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        return _createClass(StorageService, [{
          key: "getScope",
          value: function getScope() {
            //console.log('yes',JSON.parse(localStorage.getItem('scope')));
            if (localStorage.getItem('scope')) {
              return JSON.parse(localStorage.getItem('scope'));
            } else {
              return this.scope;
            }
          }
        }, {
          key: "setScope",
          value: function setScope(scope) {
            this.scope = scope;
            localStorage.setItem('scope', JSON.stringify(scope));
          }
        }]);
      }();

      StorageService.ctorParameters = function () {
        return [];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    },

    /***/
    "tHrL":
    /*!*******************************************************************************!*\
      !*** ./src/app/modal/deliver-food-volunteer/deliver-food-volunteer.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function tHrL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyLWZvb2Qtdm9sdW50ZWVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "uFyy":
    /*!*************************************************************************!*\
      !*** ./src/app/modal/pickup-success-modal/pickup-success-modal.page.ts ***!
      \*************************************************************************/

    /*! exports provided: PickupSuccessModalPage */

    /***/
    function uFyy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickupSuccessModalPage", function () {
        return PickupSuccessModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pickup_success_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pickup-success-modal.page.html */
      "ejjP");
      /* harmony import */


      var _pickup_success_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pickup-success-modal.page.scss */
      "Zpru");
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

      var PickupSuccessModalPage = /*#__PURE__*/function () {
        function PickupSuccessModalPage(modalController, navParams, router, fetch, storage) {
          _classCallCheck(this, PickupSuccessModalPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
          this.details = {};
        }

        return _createClass(PickupSuccessModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.details = JSON.stringify(this.array);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var onClosedData, t;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context17.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                    t = JSON.parse(this.details);
                    this.router.navigate(['/feedback-form-for-donor', t.r_id, t.getFood_id]); //this.router.navigate(['/feedback-form',t.r_id,t.getFood_id]);

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context18.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                    this.router.navigate(['/home']);

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, this);
            }));
          }
        }]);
      }();

      PickupSuccessModalPage.ctorParameters = function () {
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

      PickupSuccessModalPage.propDecorators = {
        array: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PickupSuccessModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pickup-success-modal',
        template: _raw_loader_pickup_success_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pickup_success_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PickupSuccessModalPage);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _pincode_error_component_pincode_error_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pincode-error-component/pincode-error-component.component */
      "XVfp");

      var routes = [{
        path: '',
        redirectTo: 'language',
        pathMatch: 'full'
      }, {
        path: 'splash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | splash-splash-module */
          "splash-splash-module").then(__webpack_require__.bind(null,
          /*! ./splash/splash.module */
          "eYMH")).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: 'language',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | language-language-module */
          "language-language-module").then(__webpack_require__.bind(null,
          /*! ./language/language.module */
          "XkIt")).then(function (m) {
            return m.LanguagePageModule;
          });
        }
      }, {
        path: 'mobile-number',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mobile-number-mobile-number-module */
          "mobile-number-mobile-number-module").then(__webpack_require__.bind(null,
          /*! ./mobile-number/mobile-number.module */
          "WmCV")).then(function (m) {
            return m.MobileNumberPageModule;
          });
        }
      }, {
        path: 'otp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | otp-otp-module */
          [__webpack_require__.e("common"), __webpack_require__.e("otp-otp-module")]).then(__webpack_require__.bind(null,
          /*! ./otp/otp.module */
          "ikiF")).then(function (m) {
            return m.OtpPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'get-food-search',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | get-food-search-get-food-search-module */
          [__webpack_require__.e("default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a"), __webpack_require__.e("default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module"), __webpack_require__.e("common"), __webpack_require__.e("get-food-search-get-food-search-module")]).then(__webpack_require__.bind(null,
          /*! ./get-food-search/get-food-search.module */
          "WUzT")).then(function (m) {
            return m.GetFoodSearchPageModule;
          });
        }
      }, {
        path: 'nearest-donors/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | nearest-donors-nearest-donors-module */
          [__webpack_require__.e("default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"), __webpack_require__.e("nearest-donors-nearest-donors-module")]).then(__webpack_require__.bind(null,
          /*! ./nearest-donors/nearest-donors.module */
          "qX/V")).then(function (m) {
            return m.NearestDonorsPageModule;
          });
        }
      }, {
        path: 'register-as-volunteer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-as-volunteer-register-as-volunteer-module */
          [__webpack_require__.e("default~modal-terms-conditions-terms-conditions-module~register-as-volunteer-register-as-volunteer-m~dc236ab8"), __webpack_require__.e("register-as-volunteer-register-as-volunteer-module")]).then(__webpack_require__.bind(null,
          /*! ./register-as-volunteer/register-as-volunteer.module */
          "M26G")).then(function (m) {
            return m.RegisterAsVolunteerPageModule;
          });
        }
      }, {
        path: 'register-volunteer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-volunteer-register-volunteer-module */
          [__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("default~modal-terms-conditions-terms-conditions-module~register-as-volunteer-register-as-volunteer-m~dc236ab8"), __webpack_require__.e("common"), __webpack_require__.e("register-volunteer-register-volunteer-module")]).then(__webpack_require__.bind(null,
          /*! ./register-volunteer/register-volunteer.module */
          "WdT9")).then(function (m) {
            return m.RegisterVolunteerPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'saved-addresses/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | saved-addresses-saved-addresses-module */
          "saved-addresses-saved-addresses-module").then(__webpack_require__.bind(null,
          /*! ./saved-addresses/saved-addresses.module */
          "xuot")).then(function (m) {
            return m.SavedAddressesPageModule;
          });
        }
      }, {
        path: 'otp-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-otp-otp-content-otp-content-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-otp-otp-content-otp-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/otp/otp-content/otp-content.module */
          "0DpX")).then(function (m) {
            return m.OtpContentPageModule;
          });
        }
      }, {
        path: 'saved-addresses-edit/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | saved-addresses-edit-saved-addresses-edit-module */
          "saved-addresses-edit-saved-addresses-edit-module").then(__webpack_require__.bind(null,
          /*! ./saved-addresses-edit/saved-addresses-edit.module */
          "krGk")).then(function (m) {
            return m.SavedAddressesEditPageModule;
          });
        }
      }, {
        path: 'saved-addresses-add',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | saved-addresses-add-saved-addresses-add-module */
          "saved-addresses-add-saved-addresses-add-module").then(__webpack_require__.bind(null,
          /*! ./saved-addresses-add/saved-addresses-add.module */
          "2rwE")).then(function (m) {
            return m.SavedAddressesAddPageModule;
          });
        }
      }, {
        path: 'filter-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-otp-filter-content-filter-content-module */
          [__webpack_require__.e("default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"), __webpack_require__.e("modal-otp-filter-content-filter-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/otp/filter-content/filter-content.module */
          "kfW7")).then(function (m) {
            return m.FilterContentPageModule;
          });
        }
      }, {
        path: 'sort-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-sort-content-sort-content-module */
          [__webpack_require__.e("default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"), __webpack_require__.e("modal-sort-content-sort-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/sort-content/sort-content.module */
          "Io9y")).then(function (m) {
            return m.SortContentPageModule;
          });
        }
      }, {
        path: 'help',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | help-help-module */
          "help-help-module").then(__webpack_require__.bind(null,
          /*! ./help/help.module */
          "7XJi")).then(function (m) {
            return m.HelpPageModule;
          });
        }
      }, {
        path: 'home-content',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-home-content-home-content-module */
          "modal-home-content-home-content-module").then(__webpack_require__.bind(null,
          /*! ./modal/home-content/home-content.module */
          "RpSc")).then(function (m) {
            return m.HomeContentPageModule;
          });
        }
      }, {
        path: 'donate-food-add-location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | donate-food-add-location-donate-food-add-location-module */
          "donate-food-add-location-donate-food-add-location-module").then(__webpack_require__.bind(null,
          /*! ./donate-food-add-location/donate-food-add-location.module */
          "HP7G")).then(function (m) {
            return m.DonateFoodAddLocationPageModule;
          });
        }
      }, {
        path: 'current-location-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-current-location-content-current-location-content-module */
          [__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("modal-current-location-content-current-location-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/current-location-content/current-location-content.module */
          "Y53R")).then(function (m) {
            return m.CurrentLocationContentPageModule;
          });
        }
      }, {
        path: 'select-location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-location-select-location-module */
          "select-location-select-location-module").then(__webpack_require__.bind(null,
          /*! ./select-location/select-location.module */
          "spR7")).then(function (m) {
            return m.SelectLocationPageModule;
          });
        }
      }, {
        path: 'choose-language',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | choose-language-choose-language-module */
          "choose-language-choose-language-module").then(__webpack_require__.bind(null,
          /*! ./choose-language/choose-language.module */
          "Ivhk")).then(function (m) {
            return m.ChooseLanguagePageModule;
          });
        }
      }, {
        path: 'donate-food-members',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | donate-food-members-donate-food-members-module */
          "donate-food-members-donate-food-members-module").then(__webpack_require__.bind(null,
          /*! ./donate-food-members/donate-food-members.module */
          "vV63")).then(function (m) {
            return m.DonateFoodMembersPageModule;
          });
        }
      }, {
        path: 'donate-food-review/:id/:id2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | donate-food-review-donate-food-review-module */
          [__webpack_require__.e("common"), __webpack_require__.e("donate-food-review-donate-food-review-module")]).then(__webpack_require__.bind(null,
          /*! ./donate-food-review/donate-food-review.module */
          "aOuy")).then(function (m) {
            return m.DonateFoodReviewPageModule;
          });
        }
      }, {
        path: 'donate-food-successful',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | donate-food-successful-donate-food-successful-module */
          "donate-food-successful-donate-food-successful-module").then(__webpack_require__.bind(null,
          /*! ./donate-food-successful/donate-food-successful.module */
          "fIfy")).then(function (m) {
            return m.DonateFoodSuccessfulPageModule;
          });
        }
      }, {
        path: 'donate-food-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-donate-food-content-donate-food-content-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-donate-food-content-donate-food-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/donate-food-content/donate-food-content.module */
          "wHLh")).then(function (m) {
            return m.DonateFoodContentPageModule;
          });
        }
      }, {
        path: 'feedback-form/:r_id/:getfood_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | feedback-form-feedback-form-module */
          [__webpack_require__.e("common"), __webpack_require__.e("feedback-form-feedback-form-module")]).then(__webpack_require__.bind(null,
          /*! ./feedback-form/feedback-form.module */
          "Pkrh")).then(function (m) {
            return m.FeedbackFormPageModule;
          });
        }
      }, {
        path: 'feedback-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-feedback-content-feedback-content-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-feedback-content-feedback-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/feedback-content/feedback-content.module */
          "K/ym")).then(function (m) {
            return m.FeedbackContentPageModule;
          });
        }
      }, {
        path: 'get-food-nearest-donors/:data/:r_lat/:r_lon/:r_id/:id/:data2/:t',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | get-food-nearest-donors-get-food-nearest-donors-module */
          [__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("get-food-nearest-donors-get-food-nearest-donors-module")]).then(__webpack_require__.bind(null,
          /*! ./get-food-nearest-donors/get-food-nearest-donors.module */
          "M/g4")).then(function (m) {
            return m.GetFoodNearestDonorsPageModule;
          });
        }
      }, {
        path: 'get-food-nearest-donors-two/:id/:lat/:lon/:r_id/:mode/:food_type/:getfoodid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | get-food-nearest-donors-two-get-food-nearest-donors-two-module */
          [__webpack_require__.e("common"), __webpack_require__.e("get-food-nearest-donors-two-get-food-nearest-donors-two-module")]).then(__webpack_require__.bind(null,
          /*! ./get-food-nearest-donors-two/get-food-nearest-donors-two.module */
          "K8Ou")).then(function (m) {
            return m.GetFoodNearestDonorsTwoPageModule;
          });
        }
      }, {
        path: 'get-food-search-with-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | get-food-search-with-address-get-food-search-with-address-module */
          "get-food-search-with-address-get-food-search-with-address-module").then(__webpack_require__.bind(null,
          /*! ./get-food-search-with-address/get-food-search-with-address.module */
          "VLRt")).then(function (m) {
            return m.GetFoodSearchWithAddressPageModule;
          });
        }
      }, {
        path: 'location-error-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-location-error-content-location-error-content-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-location-error-content-location-error-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/location-error-content/location-error-content.module */
          "ZgGT")).then(function (m) {
            return m.LocationErrorContentPageModule;
          });
        }
      }, {
        path: 'volunteer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | volunteer-volunteer-module */
          [__webpack_require__.e("common"), __webpack_require__.e("volunteer-volunteer-module")]).then(__webpack_require__.bind(null,
          /*! ./volunteer/volunteer.module */
          "Iy9B")).then(function (m) {
            return m.VolunteerPageModule;
          });
        }
      }, {
        path: 'volunteer/volunteer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | volunteer-volunteer-module */
          [__webpack_require__.e("common"), __webpack_require__.e("volunteer-volunteer-module")]).then(__webpack_require__.bind(null,
          /*! ./volunteer/volunteer.module */
          "Iy9B")).then(function (m) {
            return m.VolunteerPageModule;
          });
        }
      }, {
        path: 'activity-normal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | activity-normal-activity-normal-module */
          [__webpack_require__.e("default~activity-normal-activity-normal-module~volunteer-detail-volunteer-detail-module"), __webpack_require__.e("common"), __webpack_require__.e("activity-normal-activity-normal-module")]).then(__webpack_require__.bind(null,
          /*! ./activity-normal/activity-normal.module */
          "vYF8")).then(function (m) {
            return m.ActivityNormalPageModule;
          });
        }
      }, {
        path: 'about-us',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | about-us-about-us-module */
          "about-us-about-us-module").then(__webpack_require__.bind(null,
          /*! ./about-us/about-us.module */
          "00wH")).then(function (m) {
            return m.AboutUsPageModule;
          });
        }
      }, {
        path: 'receiver-confirm',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-receiver-confirm-receiver-confirm-module */
          [__webpack_require__.e("default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module"), __webpack_require__.e("modal-receiver-confirm-receiver-confirm-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/receiver-confirm/receiver-confirm.module */
          "9BkE")).then(function (m) {
            return m.ReceiverConfirmPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-notification-notification-module */
          "modal-notification-notification-module").then(__webpack_require__.bind(null,
          /*! ./modal/notification/notification.module */
          "pGOE")).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'receive-food-call/:num',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | receive-food-call-receive-food-call-module */
          "receive-food-call-receive-food-call-module").then(__webpack_require__.bind(null,
          /*! ./receive-food-call/receive-food-call.module */
          "DgmM")).then(function (m) {
            return m.ReceiveFoodCallPageModule;
          });
        }
      }, {
        path: 'cancel-allotedfood',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-cancel-allotedfood-cancel-allotedfood-module */
          "modal-cancel-allotedfood-cancel-allotedfood-module").then(__webpack_require__.bind(null,
          /*! ./modal/cancel-allotedfood/cancel-allotedfood.module */
          "8LZw")).then(function (m) {
            return m.CancelAllotedfoodPageModule;
          });
        }
      }, {
        path: 'terms-conditions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-terms-conditions-terms-conditions-module */
          [__webpack_require__.e("default~modal-terms-conditions-terms-conditions-module~register-as-volunteer-register-as-volunteer-m~dc236ab8"), __webpack_require__.e("modal-terms-conditions-terms-conditions-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/terms-conditions/terms-conditions.module */
          "i1s7")).then(function (m) {
            return m.TermsConditionsPageModule;
          });
        }
      }, {
        path: 'show-in-between',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | show-in-between-show-in-between-module */
          [__webpack_require__.e("common"), __webpack_require__.e("show-in-between-show-in-between-module")]).then(__webpack_require__.bind(null,
          /*! ./show-in-between/show-in-between.module */
          "1GTf")).then(function (m) {
            return m.ShowInBetweenPageModule;
          });
        }
      }, {
        path: 'donate-to-volunteer/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | donate-to-volunteer-donate-to-volunteer-module */
          "donate-to-volunteer-donate-to-volunteer-module").then(__webpack_require__.bind(null,
          /*! ./donate-to-volunteer/donate-to-volunteer.module */
          "ni/N")).then(function (m) {
            return m.DonateToVolunteerPageModule;
          });
        }
      }, {
        path: 'assign-food',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | assign-food-assign-food-module */
          "assign-food-assign-food-module").then(__webpack_require__.bind(null,
          /*! ./assign-food/assign-food.module */
          "tIis")).then(function (m) {
            return m.AssignFoodPageModule;
          });
        }
      }, {
        path: 'on-the-way',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-on-the-way-on-the-way-module */
          [__webpack_require__.e("default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a"), __webpack_require__.e("modal-on-the-way-on-the-way-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/on-the-way/on-the-way.module */
          "DUUe")).then(function (m) {
            return m.OnTheWayPageModule;
          });
        }
      }, {
        path: 'donate-food-pickup-drop/:id/:id2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | donate-food-pickup-drop-donate-food-pickup-drop-module */
          [__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("common"), __webpack_require__.e("donate-food-pickup-drop-donate-food-pickup-drop-module")]).then(__webpack_require__.bind(null,
          /*! ./donate-food-pickup-drop/donate-food-pickup-drop.module */
          "KDMT")).then(function (m) {
            return m.DonateFoodPickupDropPageModule;
          });
        }
      }, {
        path: 'choose-donate-option/:id/:id2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | choose-donate-option-choose-donate-option-module */
          [__webpack_require__.e("default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"), __webpack_require__.e("choose-donate-option-choose-donate-option-module")]).then(__webpack_require__.bind(null,
          /*! ./choose-donate-option/choose-donate-option.module */
          "Saw6")).then(function (m) {
            return m.ChooseDonateOptionPageModule;
          });
        }
      }, {
        path: 'volunteer-food-request',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | volunteer-food-request-volunteer-food-request-module */
          [__webpack_require__.e("common"), __webpack_require__.e("volunteer-food-request-volunteer-food-request-module")]).then(__webpack_require__.bind(null,
          /*! ./volunteer-food-request/volunteer-food-request.module */
          "b3or")).then(function (m) {
            return m.VolunteerFoodRequestPageModule;
          });
        }
      }, {
        path: 'volunteer-food-request-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-volunteer-food-request-content-volunteer-food-request-content-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-volunteer-food-request-content-volunteer-food-request-content-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/volunteer-food-request-content/volunteer-food-request-content.module */
          "f7Ij")).then(function (m) {
            return m.VolunteerFoodRequestContentPageModule;
          });
        }
      }, {
        path: 'volunteer-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | volunteer-detail-volunteer-detail-module */
          [__webpack_require__.e("default~activity-normal-activity-normal-module~volunteer-detail-volunteer-detail-module"), __webpack_require__.e("volunteer-detail-volunteer-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./volunteer-detail/volunteer-detail.module */
          "INBn")).then(function (m) {
            return m.VolunteerDetailPageModule;
          });
        }
      }, {
        path: 'near-by-me-location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-near-by-me-location-near-by-me-location-module */
          "modal-near-by-me-location-near-by-me-location-module").then(__webpack_require__.bind(null,
          /*! ./modal/near-by-me-location/near-by-me-location.module */
          "Qoc/")).then(function (m) {
            return m.NearByMeLocationPageModule;
          });
        }
      }, {
        path: 'push-notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-push-notification-push-notification-module */
          "modal-push-notification-push-notification-module").then(__webpack_require__.bind(null,
          /*! ./modal/push-notification/push-notification.module */
          "cJEu")).then(function (m) {
            return m.PushNotificationPageModule;
          });
        }
      }, {
        path: 'searching-volunteer/:id/:id2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | searching-volunteer-searching-volunteer-module */
          "searching-volunteer-searching-volunteer-module").then(__webpack_require__.bind(null,
          /*! ./searching-volunteer/searching-volunteer.module */
          "g8dT")).then(function (m) {
            return m.SearchingVolunteerPageModule;
          });
        }
      }, {
        path: 'display-accept-request-on-map/:data/:id/:id2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | display-accept-request-on-map-display-accept-request-on-map-module */
          "display-accept-request-on-map-display-accept-request-on-map-module").then(__webpack_require__.bind(null,
          /*! ./display-accept-request-on-map/display-accept-request-on-map.module */
          "U/2Q")).then(function (m) {
            return m.DisplayAcceptRequestOnMapPageModule;
          });
        }
      }, {
        path: 'choose-screen-after-reject/:id/:rid/:fid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | choose-screen-after-reject-choose-screen-after-reject-module */
          [__webpack_require__.e("common"), __webpack_require__.e("choose-screen-after-reject-choose-screen-after-reject-module")]).then(__webpack_require__.bind(null,
          /*! ./choose-screen-after-reject/choose-screen-after-reject.module */
          "QaYJ")).then(function (m) {
            return m.ChooseScreenAfterRejectPageModule;
          });
        }
      }, {
        path: 'conert-to-pickup-success',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-conert-to-pickup-success-conert-to-pickup-success-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-conert-to-pickup-success-conert-to-pickup-success-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/conert-to-pickup-success/conert-to-pickup-success.module */
          "QX3W")).then(function (m) {
            return m.ConertToPickupSuccessPageModule;
          });
        }
      }, {
        path: 'success-deliver-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-success-deliver-modal-success-deliver-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-success-deliver-modal-success-deliver-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/success-deliver-modal/success-deliver-modal.module */
          "yXmX")).then(function (m) {
            return m.SuccessDeliverModalPageModule;
          });
        }
      }, {
        path: 'feedback-form-for-donor/:r_id/:getfood_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | feedback-form-for-donor-feedback-form-for-donor-module */
          [__webpack_require__.e("common"), __webpack_require__.e("feedback-form-for-donor-feedback-form-for-donor-module")]).then(__webpack_require__.bind(null,
          /*! ./feedback-form-for-donor/feedback-form-for-donor.module */
          "fp/J")).then(function (m) {
            return m.FeedbackFormForDonorPageModule;
          });
        }
      }, {
        path: 'deliver-food-volunteer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-deliver-food-volunteer-deliver-food-volunteer-module */
          "modal-deliver-food-volunteer-deliver-food-volunteer-module").then(__webpack_require__.bind(null,
          /*! ./modal/deliver-food-volunteer/deliver-food-volunteer.module */
          "Rhyd")).then(function (m) {
            return m.DeliverFoodVolunteerPageModule;
          });
        }
      }, {
        path: 'on-the-way-search/:id/:id2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | on-the-way-search-on-the-way-search-module */
          "on-the-way-search-on-the-way-search-module").then(__webpack_require__.bind(null,
          /*! ./on-the-way-search/on-the-way-search.module */
          "BWGN")).then(function (m) {
            return m.OnTheWaySearchPageModule;
          });
        }
      }, {
        path: 'on-the-way-address/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | on-the-way-address-on-the-way-address-module */
          "on-the-way-address-on-the-way-address-module").then(__webpack_require__.bind(null,
          /*! ./on-the-way-address/on-the-way-address.module */
          "cSTq")).then(function (m) {
            return m.OnTheWayAddressPageModule;
          });
        }
      }, {
        path: 'search-food-screen-two',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | search-food-screen-two-search-food-screen-two-module */
          [__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a"), __webpack_require__.e("common"), __webpack_require__.e("search-food-screen-two-search-food-screen-two-module")]).then(__webpack_require__.bind(null,
          /*! ./search-food-screen-two/search-food-screen-two.module */
          "yNaW")).then(function (m) {
            return m.SearchFoodScreenTwoPageModule;
          });
        }
      }, {
        path: 'reject-get-food-request',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-reject-get-food-request-reject-get-food-request-module */
          [__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("modal-reject-get-food-request-reject-get-food-request-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/reject-get-food-request/reject-get-food-request.module */
          "SHim")).then(function (m) {
            return m.RejectGetFoodRequestPageModule;
          });
        }
      }, {
        path: 'common-message',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-common-message-common-message-module */
          "modal-common-message-common-message-module").then(__webpack_require__.bind(null,
          /*! ./modal/common-message/common-message.module */
          "kx68")).then(function (m) {
            return m.CommonMessagePageModule;
          });
        }
      }, {
        path: 'get-food-nearest-donors-two-duplicate/:id/:lat/:lon/:r_id/:mode/:food_type/:getfoodid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | get-food-nearest-donors-two-duplicate-get-food-nearest-donors-two-duplicate-module */
          [__webpack_require__.e("common"), __webpack_require__.e("get-food-nearest-donors-two-duplicate-get-food-nearest-donors-two-duplicate-module")]).then(__webpack_require__.bind(null,
          /*! ./get-food-nearest-donors-two-duplicate/get-food-nearest-donors-two-duplicate.module */
          "5yZr")).then(function (m) {
            return m.GetFoodNearestDonorsTwoDuplicatePageModule;
          });
        }
      }, {
        path: 'common-search-screen',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | common-search-screen-common-search-screen-module */
          [__webpack_require__.e("common"), __webpack_require__.e("common-search-screen-common-search-screen-module")]).then(__webpack_require__.bind(null,
          /*! ./common-search-screen/common-search-screen.module */
          "MBg2")).then(function (m) {
            return m.CommonSearchScreenPageModule;
          });
        }
      }, {
        path: 'onthe-way-msg',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-onthe-way-msg-onthe-way-msg-module */
          [__webpack_require__.e("default~get-food-nearest-donors-get-food-nearest-donors-module~modal-onthe-way-msg-onthe-way-msg-mod~d2e0387c"), __webpack_require__.e("common"), __webpack_require__.e("modal-onthe-way-msg-onthe-way-msg-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/onthe-way-msg/onthe-way-msg.module */
          "PF4X")).then(function (m) {
            return m.OntheWayMsgPageModule;
          });
        }
      }, {
        path: 'pickup-success-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-pickup-success-modal-pickup-success-modal-module */
          "modal-pickup-success-modal-pickup-success-modal-module").then(__webpack_require__.bind(null,
          /*! ./modal/pickup-success-modal/pickup-success-modal.module */
          "AvH9")).then(function (m) {
            return m.PickupSuccessModalPageModule;
          });
        }
      }, {
        path: 'error-msg-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-error-msg-modal-error-msg-modal-module */
          "modal-error-msg-modal-error-msg-modal-module").then(__webpack_require__.bind(null,
          /*! ./modal/error-msg-modal/error-msg-modal.module */
          "Beh4")).then(function (m) {
            return m.ErrorMsgModalPageModule;
          });
        }
      }, {
        path: 'simple-push-notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-simple-push-notification-simple-push-notification-module */
          "modal-simple-push-notification-simple-push-notification-module").then(__webpack_require__.bind(null,
          /*! ./modal/simple-push-notification/simple-push-notification.module */
          "rdFz")).then(function (m) {
            return m.SimplePushNotificationPageModule;
          });
        }
      }, {
        path: 'dynamic-msg',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-dynamic-msg-dynamic-msg-module */
          "modal-dynamic-msg-dynamic-msg-module").then(__webpack_require__.bind(null,
          /*! ./modal/dynamic-msg/dynamic-msg.module */
          "6PK8")).then(function (m) {
            return m.DynamicMsgPageModule;
          });
        }
      }, {
        path: 'extact-pin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-extact-pin-extact-pin-module */
          "modal-extact-pin-extact-pin-module").then(__webpack_require__.bind(null,
          /*! ./modal/extact-pin/extact-pin.module */
          "rd63")).then(function (m) {
            return m.ExtactPinPageModule;
          });
        }
      }, {
        path: 'donate-later-msg',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-donate-later-msg-donate-later-msg-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-donate-later-msg-donate-later-msg-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/donate-later-msg/donate-later-msg.module */
          "jiPG")).then(function (m) {
            return m.DonateLaterMsgPageModule;
          });
        }
      }, {
        path: 'view-feedback/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | view-feedback-view-feedback-module */
          "view-feedback-view-feedback-module").then(__webpack_require__.bind(null,
          /*! ./view-feedback/view-feedback.module */
          "vBvZ")).then(function (m) {
            return m.ViewFeedbackPageModule;
          });
        }
      }, {
        path: 'screen-after-volunteer-not-found/:id/:id2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | screen-after-volunteer-not-found-screen-after-volunteer-not-found-module */
          [__webpack_require__.e("common"), __webpack_require__.e("screen-after-volunteer-not-found-screen-after-volunteer-not-found-module")]).then(__webpack_require__.bind(null,
          /*! ./screen-after-volunteer-not-found/screen-after-volunteer-not-found.module */
          "Xc7c")).then(function (m) {
            return m.ScreenAfterVolunteerNotFoundPageModule;
          });
        }
      }, {
        path: 'pincode-error-component',
        component: _pincode_error_component_pincode_error_component_component__WEBPACK_IMPORTED_MODULE_3__["PincodeErrorComponentComponent"]
      }, {
        path: 'footer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | footer-footer-module */
          "footer-footer-module").then(__webpack_require__.bind(null,
          /*! ./footer/footer.module */
          "PpLr")).then(function (m) {
            return m.FooterPageModule;
          });
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map