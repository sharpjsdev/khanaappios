(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-food-members-donate-food-members-module"], {
    /***/
    "1yyV":
    /*!***********************************************!*\
      !*** ./src/app/notification-count.service.ts ***!
      \***********************************************/

    /*! exports provided: NotificationCountService */

    /***/
    function yyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationCountService", function () {
        return NotificationCountService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NotificationCountService = /*#__PURE__*/function () {
        function NotificationCountService() {
          _classCallCheck(this, NotificationCountService);

          this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
          this.data$ = this.dataSubject.asObservable();
        }

        return _createClass(NotificationCountService, [{
          key: "updateData",
          value: function updateData(newData) {
            this.dataSubject.next(newData);
          }
        }]);
      }();

      NotificationCountService.ctorParameters = function () {
        return [];
      };

      NotificationCountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificationCountService);
      /***/
    },

    /***/
    "8rUy":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function rUy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-toolbar>\n\t<ion-grid [fixed]=\"true\">\n\t\t<ion-row>\n\t\t\t<ion-col (click)=\"changeCurrentUrl('home')\" [ngClass]=\"(activetab == 'home') ? 'active-col' : ''\">\n\t\t\t\t<img [src]=\"src.home\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'home') ? 'active-tab' : ''\">{{model.key_text5}}</ion-label>\n\t\t\t</ion-col>\n\t\t  <ion-col (click)=\"changeCurrentUrl('activity-normal')\" [ngClass]=\"(activetab == 'activity') ? 'active-col' : ''\">\n\t\t\t<img [src]=\"src.activity\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'activity') ? 'active-tab' : ''\">{{model.key_text6}}</ion-label>\n\t\t  </ion-col>\n\t\t  <ion-col [ngClass]=\"(activetab == 'volunteer') ? 'active-col' : ''\" *ngIf=\"model.is_volunteer== 1\" (click)=\"changeCurrentUrl('volunteer-detail')\">\n\t\t\t<img [src]=\"src.volunteer\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'volunteer') ? 'active-tab' : ''\">{{model.key_text7}}</ion-label>  \n\t\t</ion-col>\n\t\t</ion-row>\n\t  </ion-grid>\n\t<!-- <ion-buttons slot=\"start\">\n\t\t<ion-button  value=\"activity\" >\n\t\t\t</ion-button>\n\t\t  <ion-button >\n\t\t\t \n\t\t</ion-button>\n\t</ion-buttons> -->\n\t  \n\t\t<!-- <ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button >\n\t\t\t  \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button>\n\t\t\t      \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button >\n\t\t\t\t \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>       -->\n\t</ion-toolbar>\n</ion-content>\n";
      /***/
    },

    /***/
    "A7BC":
    /*!***************************************!*\
      !*** ./src/app/footer/footer.page.ts ***!
      \***************************************/

    /*! exports provided: FooterPage */

    /***/
    function A7BC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterPage", function () {
        return FooterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.page.html */
      "8rUy");
      /* harmony import */


      var _footer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.page.scss */
      "jiVj");
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

      var FooterPage = /*#__PURE__*/function () {
        function FooterPage(fetch, storage, router) {
          _classCallCheck(this, FooterPage);

          this.fetch = fetch;
          this.storage = storage;
          this.router = router;
          this.model = {};
          this.activetab = '';
          this.src = {
            activity: "assets/images/grey_footer_activity.svg",
            home: "assets/images/grey_footer_home.svg",
            volunteer: "assets/images/grey_footer_volunteer.svg"
          };
        }

        return _createClass(FooterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.changeCurrentUrl(this.currentRoute);
            var data = {
              model: "QuotesModel",
              lang_code: JSON.parse(localStorage.getItem('lang'))
            };
            this.fetch.getTestimonialByLanguage(data).subscribe(function (resp) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var quote, j, quote1;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (resp) {
                        quote = resp.data;
                        this.model.quotes = quote;

                        for (j = 0; j < quote.length; j++) {
                          quote1 = quote[j];
                        }
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            });
            localStorage.removeItem('temp_start_address');
            localStorage.removeItem('temp_end_address');
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            this.model.key_text5 = "Home";
            this.model.key_text6 = "Activity";
            this.model.key_text7 = "Volunteer";
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item5 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_FOOD_REQUEST';
            });
            this.model.key_text8 = item8[lang_code];
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this2 = this;

            this.changeCurrentUrl(this.currentRoute);
            var data = {
              model: "QuotesModel",
              lang_code: JSON.parse(localStorage.getItem('lang'))
            };
            this.fetch.getTestimonialByLanguage(data).subscribe(function (resp) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var quote, j, quote1;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (resp) {
                        quote = resp.data;
                        this.model.quotes = quote;

                        for (j = 0; j < quote.length; j++) {
                          quote1 = quote[j];
                        }
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            });
            localStorage.removeItem('temp_start_address');
            localStorage.removeItem('temp_end_address');
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            this.model.key_text5 = "Home";
            this.model.key_text6 = "Activity";
            this.model.key_text7 = "Volunteer";
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item5 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_FOOD_REQUEST';
            });
            this.model.key_text8 = item8[lang_code];
          }
        }, {
          key: "changeCurrentUrl",
          value: function changeCurrentUrl(route) {
            if (route == '/home') {
              this.activetab = 'home';
              this.src.volunteer = "assets/images/grey_footer_volunteer.svg";
              this.src.home = "assets/images/red_footer_home.svg";
              this.src.activity = "assets/images/grey_footer_activity.svg";
            } else if (route == '/volunteer-detail') {
              this.activetab = 'volunteer';
              this.src.volunteer = "assets/images/red_footer_volunteer.svg";
              this.src.home = "assets/images/grey_footer_home.svg";
              this.src.activity = "assets/images/grey_footer_activity.svg";
            } else if (route == '/activity-normal') {
              this.activetab = 'activity';
              this.src.volunteer = "assets/images/grey_footer_volunteer.svg";
              this.src.home = "assets/images/grey_footer_home.svg";
              this.src.activity = "assets/images/red_footer_activity.svg";
            }

            if (route !== this.currentRoute) {
              this.router.navigate(['/' + route]);
            }
          }
        }]);
      }();

      FooterPage.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      FooterPage.propDecorators = {
        currentRoute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        foo_lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      FooterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterPage);
      /***/
    },

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


      __webpack_exports__["default"] = "\n<app-captcha></app-captcha>\n<ion-content>\n<div class=\"ion-padding theme_width\"> \n  <div class=\"search_food_bg\" style=\"min-height: 370px;\">\n    <div class=\"\">\n      <!-- <span id=\"error\" style=\"color:red;display:none;margin-left: 1rem;\">Please Select food type.</span> -->\n\t    <div class=\"start_number left_padding green\">\n        <div class=\"size_16 medium big_heading\">{{model.key_text1}}</div>\n        <div class=\"checkbox\">\n          <input type=\"checkbox\" id=\"vegcheckbox\" name=\"\" value=\"veg\" (change)=\"showCount($event)\" >\n          <label for=\"vegcheckbox\" class=\"green\"><span>{{model.key_text2}}</span></label>\n       </div>\n      </div>   \n      <ion-row id=\"veg\" style=\"display: none;\">\n        <ion-col size=\"6\" class=\"custom_left left_padding\" style=\"padding-left: 12px;margin-top:10px\">\n          <!-- <div class=\"s_number\">2.</div> -->\n          <div>{{model.key_text6}}</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"center vertical_col\" style=\"margin-top:10px\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"decrementValue2()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"number2\" disabled/>\n            <input type=\"button\" class=\"plus\" onclick=\"incrementValue2()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <br>\n      <div class=\"start_number left_padding green\">\n        <div class=\"checkbox\">\n          <input type=\"checkbox\" id=\"non-vegcheckbox\" value=\"nonveg\" (change)=\"showCount2($event)\">\n          <label for=\"non-vegcheckbox\" class=\"green\"><span>{{model.key_text3}} </span></label>\n       </div>\n        <!-- <input style=\"margin-right: 6px;\" type=\"checkbox\" id=\"non-vegcheckbox\" value=\"nonveg\" (change)=\"showCount2($event)\">   -->\n      </div>\n      \n      <ion-row id=\"nonveg\" style=\"display: none;\">\n        <ion-col size=\"6\" class=\"custom_left left_padding\" style=\"padding-left: 12px;margin-top:10px\">\n          <!-- <div class=\"s_number\">2.</div> -->\n          <div>{{model.key_text6}}</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"center vertical_col\" style=\"margin-top:10px\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"how_food\">\n            <input type=\"button\" class=\"minus\" onclick=\"decrementValue3()\" value=\"-\" />\n            <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"non-veg\" disabled/>\n            <input type=\"button\" class=\"plus\" onclick=\"incrementValue3()\" value=\"+\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>   \n</div>\n\n</ion-content>\n<div class=\"app_button\">\n  <button class=\"app_btn\" (click)=\"review()\" *ngIf=\"!model.search\">{{model.key_text7}}</button>\n  <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n  </div>\n<app-footer [currentRoute]=\"'/donate-food-members'\">\n\n\n\n\n  \n\n";
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


      __webpack_exports__["default"] = ".checkbox {\n  width: 100%;\n  margin: 15px auto;\n  position: relative;\n  display: block;\n}\n.checkbox label {\n  position: relative;\n  min-height: 34px;\n  display: block;\n  padding-left: 37px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n  margin-left: -3px;\n}\n.checkbox label span {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.checkbox label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 5px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.28s ease;\n  border-radius: 3px;\n  border: 2px solid #419b95;\n}\n.checkbox label:after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 5px;\n  border-bottom: 2px solid #419b95;\n  border-left: 2px solid #419b95;\n  transform: rotate(-45deg) scale(0);\n  transition: transform ease 0.25s;\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n.checkbox input[type=checkbox] {\n  width: auto;\n  opacity: 1e-8;\n  position: absolute;\n  left: 0;\n  margin-left: -20px;\n}\n.checkbox input[type=checkbox]:checked ~ label:before {\n  border: 2px solid #419b95;\n}\n.checkbox input[type=checkbox]:checked ~ label:after {\n  transform: rotate(-45deg) scale(1);\n}\n.checkbox input[type=checkbox]:focus + label::before {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRvbmF0ZS1mb29kLW1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFWjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1k7RUFDSSx5QkFBQTtBQUNoQjtBQUNZO0VBQ0ksa0NBQUE7QUFDaEI7QUFFUTtFQUNJLFVBQUE7QUFBWiIsImZpbGUiOiJkb25hdGUtZm9vZC1tZW1iZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1ncmVlbjogIzM0QzM3QTsgXG4uY2hlY2tib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogMzRweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjhzIGVhc2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDE5Yjk1O1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZSAwLjI1cztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG9wYWNpdHk6IDAuMDAwMDAwMDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgICAgICAmOmNoZWNrZWQgfiBsYWJlbHtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDE5Yjk1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzICsgbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "PpLr":
    /*!*****************************************!*\
      !*** ./src/app/footer/footer.module.ts ***!
      \*****************************************/

    /*! exports provided: FooterPageModule */

    /***/
    function PpLr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterPageModule", function () {
        return FooterPageModule;
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


      var _footer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./footer-routing.module */
      "dPpK");
      /* harmony import */


      var _footer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./footer.page */
      "A7BC");

      var FooterPageModule = /*#__PURE__*/_createClass(function FooterPageModule() {
        _classCallCheck(this, FooterPageModule);
      });

      FooterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _footer_routing_module__WEBPACK_IMPORTED_MODULE_5__["FooterPageRoutingModule"]],
        declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_6__["FooterPage"]],
        exports: [_footer_page__WEBPACK_IMPORTED_MODULE_6__["FooterPage"]]
      })], FooterPageModule);
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

      var DonateFoodMembersPageRoutingModule = /*#__PURE__*/_createClass(function DonateFoodMembersPageRoutingModule() {
        _classCallCheck(this, DonateFoodMembersPageRoutingModule);
      });

      DonateFoodMembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonateFoodMembersPageRoutingModule);
      /***/
    },

    /***/
    "dPpK":
    /*!*************************************************!*\
      !*** ./src/app/footer/footer-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: FooterPageRoutingModule */

    /***/
    function dPpK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterPageRoutingModule", function () {
        return FooterPageRoutingModule;
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


      var _footer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer.page */
      "A7BC");

      var routes = [{
        path: '',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_3__["FooterPage"]
      }];

      var FooterPageRoutingModule = /*#__PURE__*/_createClass(function FooterPageRoutingModule() {
        _classCallCheck(this, FooterPageRoutingModule);
      });

      FooterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FooterPageRoutingModule);
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
      /* harmony import */


      var _notification_count_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../notification-count.service */
      "1yyV");

      var CaptchaComponent = /*#__PURE__*/function () {
        function CaptchaComponent(fetch, router, NotificationCount) {
          _classCallCheck(this, CaptchaComponent);

          this.fetch = fetch;
          this.router = router;
          this.NotificationCount = NotificationCount;
          this.model = {};
          this.notificationCount = 0;
          this.notification = [];
          this.notifications_admin = [];
        }

        return _createClass(CaptchaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.NotificationCount.data$.subscribe(function (newData) {
              _this3.notificationCount = newData;
            });
            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this3.notification = res['data'];
              _this3.notifications_admin = res['notifications'];

              if (_this3.notification.length != 0 || _this3.notifications_admin.length != 0) {
                $('#black_spot').show();
                var notifCount = _this3.notification.length + _this3.notifications_admin.length;

                _this3.NotificationCount.updateData(notifCount);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// this.fetch.read_notification(this.model.user_id).subscribe(res => {
            //   $('#black_spot').hide();
            //  });
          }
        }]);
      }();

      CaptchaComponent.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _notification_count_service__WEBPACK_IMPORTED_MODULE_6__["NotificationCountService"]
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
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");

      var DonateFoodMembersPage = /*#__PURE__*/function () {
        function DonateFoodMembersPage(errorMsg, modalController, router, fetch, storage, alertController, diagnostic) {
          _classCallCheck(this, DonateFoodMembersPage);

          this.errorMsg = errorMsg;
          this.modalController = modalController;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.diagnostic = diagnostic;
          this.model = {};
          this.notification = [];
        }

        return _createClass(DonateFoodMembersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.search = false;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              var confirm1;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Location',
                      message: "For a better experience, turn on device location, which uses Google\'s location service. ✓",
                      backdropDismiss: false,
                      buttons: [{
                        text: 'cancel',
                        role: 'Cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          _this4.diagnostic.switchToLocationSettings();
                        }
                      }]
                    });

                  case 2:
                    confirm1 = _context3.sent;
                    _context3.next = 5;
                    return confirm1.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this5 = this;

            this.diagnostic.isLocationEnabled().then(function (resp) {
              if (!resp) {
                _this5.presentAlert();
              }
            })["catch"](function (error) {
              _this5.presentAlert();
            });
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
            var _this6 = this;

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
                _this6.model.search = false;

                _this6.router.navigate(['/donate-food-review', res.donate_food_id1, res.donate_food_id2]);
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
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__["Diagnostic"]
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
    "jiVj":
    /*!*****************************************!*\
      !*** ./src/app/footer/footer.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function jiVj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label.active-tab {\n  color: #e8604c !important;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col.active-col.ios {\n  box-shadow: 0px 0px 3px 1px #a3a2a2;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBSUksa0JBQUE7QUFESjs7QUFJRTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsLmFjdGl2ZS10YWIge1xyXG4gICAgY29sb3I6ICNlODYwNGMgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29sIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMzVkNTQ7XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tY29sLmFjdGl2ZS1jb2wuaW9ze1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4ICNhM2EyYTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH0iXX0= */";
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


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <!-- <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\">\n        {{ this.notification.length + this.notifications_admin.length }}</span>  -->\n        <span *ngIf=\"this.notificationCount!== 0\" id=\"black_spot\" style=\"position: absolute;background-color: #000;border-radius: 50%;color: #fff;font-size: 13px;\n        top: -3px;right: 0px;text-align: center;padding: 0px 3px;\">\n        {{ this.notificationCount }}</span> \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>";
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
      /* harmony import */


      var _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../footer/footer.module */
      "PpLr");

      var DonateFoodMembersPageModule = /*#__PURE__*/_createClass(function DonateFoodMembersPageModule() {
        _classCallCheck(this, DonateFoodMembersPageModule);
      });

      DonateFoodMembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_donate_food_members_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodMembersPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_food_members_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonateFoodMembersPageRoutingModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterPageModule"]]
      })], DonateFoodMembersPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=donate-food-members-donate-food-members-module-es5.js.map