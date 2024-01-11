(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearest-donors-nearest-donors-module"], {
    /***/
    "58Pt":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nearest-donors/nearest-donors.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n    <!--<ion-title>home</ion-title>-->\n    <ion-buttons slot=\"end\">      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"grey_title regular size_18 white center\">\n  {{model.key_text1}}\n</div>\n<div class=\"sorting\">\n  <ion-row>\n    <ion-col size=\"6\" (click)=\"openModalSort()\" class=\"right_border\">\n      {{model.key_text2}} <img src=\"assets/images/icon_sort.svg\">\n    </ion-col>\n    <ion-col size=\"6\" (click)=\"openModal()\">\n      {{model.key_text3}} <img src=\"assets/images/icon_filter.svg\">\n    </ion-col>\n  </ion-row>\n</div>\n\n<div class=\"donor_list\" id=\"nearest_donors_list\">\n\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n\t\t\t<ion-grid class=\"donor_list_single\" *ngFor=\"let x of model.donor_data; let i = index;\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t<div class=\"donor_name medium\">\n\t\t\t\t\t\t  {{i+1}}. {{x.username}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t<div class=\"donor_title_sub size_13 regular\">\n\t\t\t\t\t\t\tFood available for <span class=\"green\">{{x.total_food_for}} persons</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"donor_list_inner\">\n\t\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_walk.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\">\n\t\t\t\t\t\t\t{{x.time_distance_walking.rows[0].elements[0].duration.text}}  {{model.key_text6}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_bike.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\">\n\t\t\t\t\t\t\t{{x.time_distance_driving.rows[0].elements[0].duration.text}} {{model.key_text7}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_bus.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\" >\n\t\t\t\t\t\t\t{{x.time_distance_transit.rows[0].elements[0].duration.text}} {{model.key_text8}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<a (click)=\"collect_food(x)\">\n\t\t\t\t\t\t\t<div class=\"donor_single_btn\">\n\t\t\t\t\t\t\t\t{{model.key_text5}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<hr class=\"donor_single_line\">\n\t\t\t\t</ion-row>  \n\t\t\t</ion-grid>\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\t<input type=\"hidden\" id=\"start_page\" value=\"0\">\n</div>\n<center class=\"current_location_spinner_position\" id=\"nearest_donors_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n</ion-content>\n<app-footer [currentRoute]=\"'/nearest-donors'\"></app-footer>\n";
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


      __webpack_exports__["default"] = "<ion-content>\n  <ion-toolbar>\n\t<ion-grid [fixed]=\"true\">\n\t\t<ion-row>\n\t\t\t<ion-col (click)=\"changeCurrentUrl('home')\" [ngClass]=\"(activetab == 'home') ? 'active-col' : ''\">\n\t\t\t\t<img [src]=\"src.home\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'home') ? 'active-tab' : ''\">{{model.key_text5}}</ion-label>\n\t\t\t</ion-col>\n\t\t  <ion-col (click)=\"changeCurrentUrl('activity-normal')\" [ngClass]=\"(activetab == 'activity') ? 'active-col' : ''\">\n\t\t\t<img [src]=\"src.activity\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'activity') ? 'active-tab' : ''\">{{model.key_text6}}</ion-label>\n\t\t  </ion-col>\n\t\t  <ion-col [ngClass]=\"(activetab == 'volunteer') ? 'active-col' : ''\" *ngIf=\"model.is_volunteer== 1\" (click)=\"changeCurrentUrl('volunteer-detail')\">\n\t\t\t<img [src]=\"src.volunteer\"><br>\n\t\t\t<ion-label class=\"size_12 medium\" [ngClass]=\"(activetab == 'volunteer') ? 'active-tab' : ''\">{{model.key_text7}}</ion-label>  \n\t\t</ion-col>\n\t\t  \n\t\t</ion-row>\n\t  </ion-grid>\n\t<!-- <ion-buttons slot=\"start\">\n\t\t<ion-button  value=\"activity\" >\n\t\t\t</ion-button>\n\t\t  <ion-button >\n\t\t\t \n\t\t</ion-button>\n\t</ion-buttons> -->\n\t  \n\t\t<!-- <ion-segment color=\"transparent\" value=\"home\">\n\t\t\t<ion-segment-button >\n\t\t\t  \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button>\n\t\t\t      \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button >\n\t\t\t\t \n\t\t\t</ion-segment-button>\n\t\t</ion-segment>       -->\n\t</ion-toolbar>\n</ion-content>\n";
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

        _createClass(FooterPage, [{
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

        return FooterPage;
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
    "TnvT":
    /*!*******************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors.page.ts ***!
      \*******************************************************/

    /*! exports provided: NearestDonorsPage */

    /***/
    function TnvT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearestDonorsPage", function () {
        return NearestDonorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nearest-donors.page.html */
      "58Pt");
      /* harmony import */


      var _nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nearest-donors.page.scss */
      "e9r2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modal/otp/filter-content/filter-content.page */
      "/O/A");
      /* harmony import */


      var _modal_sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/sort-content/sort-content.page */
      "G7j0");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NearestDonorsPage = /*#__PURE__*/function () {
        function NearestDonorsPage(modalController, http, route, router, fetch, alertController) {
          _classCallCheck(this, NearestDonorsPage);

          this.modalController = modalController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.alertController = alertController;
          this.model = {};
        }

        _createClass(NearestDonorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            var lang_code = JSON.parse(localStorage.getItem('lang'));
            console.log(lang_code);
            this.fetch.getKeyText(lang_code).subscribe(function (res) {
              var item1 = res.find(function (i) {
                return i.key_text === 'NEAREST_FOOD_DONORS';
              });
              _this2.model.key_text1 = item1[lang_code];
              var item2 = res.find(function (i) {
                return i.key_text === 'SORT';
              });
              _this2.model.key_text2 = item2[lang_code];
              var item3 = res.find(function (i) {
                return i.key_text === 'FILTER';
              });
              _this2.model.key_text3 = item3[lang_code];
              var item5 = res.find(function (i) {
                return i.key_text === 'COLLECT_FOOD';
              });
              _this2.model.key_text5 = item5[lang_code];
              var item6 = res.find(function (i) {
                return i.key_text === 'WALK';
              });
              _this2.model.key_text6 = item6[lang_code];
              var item7 = res.find(function (i) {
                return i.key_text === 'TWO-WHEELER';
              });
              _this2.model.key_text7 = item7[lang_code];
              var item8 = res.find(function (i) {
                return i.key_text === 'PUBLIC_TRANSPORT';
              });
              _this2.model.key_text8 = item8[lang_code];
              var item9 = res.find(function (i) {
                return i.key_text === 'HOME';
              });
              _this2.model.key_text9 = item9[lang_code];
              var item10 = res.find(function (i) {
                return i.key_text === 'ACTIVITY';
              });
              _this2.model.key_text10 = item10[lang_code];
              var item11 = res.find(function (i) {
                return i.key_text === 'VOLUNTEER';
              });
              _this2.model.key_text11 = item11[lang_code];
              var item12 = res.find(function (i) {
                return i.key_text === 'NO_DONOR';
              });
              _this2.model.key_text12 = item12[lang_code];
              var item13 = res.find(function (i) {
                return i.key_text === 'OKAY';
              });
              _this2.model.key_text13 = item13[lang_code];
            });
            var id = this.route.snapshot.params['id'];
            this.model.receiver_id = this.route.snapshot.params['id'];
            this.fetch.receiver_details(id).subscribe(function (res) {
              _this2.model.city = res['data'].city;
              _this2.model.colony_name = res['data'].colony_name;
              _this2.model.receiver_lat = res['data'].latitude;
              _this2.model.receiver_lon = res['data'].longitude;
              _this2.model.food_type = res['data'].food_type;
              _this2.model.no_of_person = res['data'].no_of_person;
              var i = $('#start_page').val();
              _this2.model.receiver_data = JSON.stringify({
                'latitude': _this2.model.receiver_lat,
                'longitude': _this2.model.receiver_lon,
                'city': res['data'].city,
                'food_type': res['data'].food_type,
                'needed_person': res['data'].no_of_person,
                'skip': i
              });
              console.log(_this2.model.receiver_data);

              _this2.fetch.nearest_donors(_this2.model.receiver_data).subscribe(function (response) {
                $('#nearest_donors_spinner').css('display', 'none');
                $('#nearest_donors_list').css('display', 'block');
                console.log(response['data']);

                if (response['data'].length == 0) {
                  _this2.presentAlert();
                }

                _this2.model.donor_data = response['data'];
              });
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modal_otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_5__["FilterContentPage"],
                      cssClass: 'custom_filter_modal',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title"
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this3.dataReturned = dataReturned.data;
                        console.log('Modal Sent Data :' + JSON.stringify(_this3.dataReturned));

                        if (_this3.dataReturned != "close") {
                          $('#nearest_donors_spinner').css('display', 'block');
                          $('#nearest_donors_list').css('display', 'none');
                          _this3.model.food_type = _this3.dataReturned.filter_food_type;
                          _this3.model.no_of_person = _this3.dataReturned.filter_no_of_person;
                          _this3.model.receiver_data = JSON.stringify({
                            'latitude': _this3.model.receiver_lat,
                            'longitude': _this3.model.receiver_lon,
                            'city': _this3.model.city,
                            'food_type': _this3.model.food_type,
                            'needed_person': _this3.model.no_of_person,
                            'skip': 0
                          });

                          _this3.fetch.nearest_donors(_this3.model.receiver_data).subscribe(function (response) {
                            /* var self = this;
                             response['data'].forEach(function (i, val) {
                                var x = self.distace(self.model.receiver_lat, self.model.receiver_lon, i.latitude ,i.longitude);
                                response['data'][val]['times'] = x;
                            }); */
                            $('#nearest_donors_spinner').css('display', 'none');
                            $('#nearest_donors_list').css('display', 'block');
                            console.log(response['data']);
                            _this3.model.donor_data = response['data'];
                          });
                        }
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openModalSort",
          value: function openModalSort() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _modal_sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_6__["SortContentPage"],
                      cssClass: 'custom_filter_modal',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title"
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this4.dataReturned = dataReturned.data;
                        console.log('Modal Sent Data :' + JSON.stringify(_this4.dataReturned));

                        if (_this4.dataReturned != "close") {
                          $('#nearest_donors_spinner').css('display', 'block');
                          $('#nearest_donors_list').css('display', 'none');

                          if (_this4.dataReturned.distance != null) {
                            //console.log(this.dataReturned.distance);
                            //this.model.donor_data.sort();
                            $('#nearest_donors_spinner').css('display', 'none');
                            $('#nearest_donors_list').css('display', 'block');

                            _this4.model.donor_data.sort(function (a, b) {
                              var d1 = a.time_distance_transit.rows[0].elements[0].distance.text[0];
                              var d2 = b.time_distance_transit.rows[0].elements[0].distance.text[0];
                              console.log(d1 - d2);
                              return d1 - d2;
                            });

                            console.log(_this4.model.donor_data);
                          }

                          if (_this4.dataReturned.time != null) {
                            $('#nearest_donors_spinner').css('display', 'none');
                            $('#nearest_donors_list').css('display', 'block');

                            _this4.model.donor_data.sort(function (a, b) {
                              var d1 = a.time_distance_transit.rows[0].elements[0].duration.text[0];
                              var d2 = b.time_distance_transit.rows[0].elements[0].duration.text[0];
                              console.log(d1 - d2);
                              return d1 - d2;
                            });

                            console.log(_this4.model.donor_data);
                          }
                        }
                      }
                    });
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "collect_food",
          value: function collect_food(x) {
            console.log(x);
            this.router.navigate(['/get-food-nearest-donors', JSON.stringify(x), this.model.receiver_lat, this.model.receiver_lon, this.model.receiver_id]);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this5 = this;

            var self = this;
            setTimeout(function () {
              console.log('Done');
              event.target.complete();
              console.log(event);
              var i = $('#start_page').val();
              var j = 5 + parseInt(i);
              self.model.receiver_data = JSON.stringify({
                'latitude': self.model.receiver_lat,
                'longitude': self.model.receiver_lon,
                'city': self.model.city,
                'food_type': self.model.food_type,
                'needed_person': _this5.model.no_of_person,
                'skip': j
              });
              self.fetch.nearest_donors(self.model.receiver_data).subscribe(function (res) {
                console.log(res['data']); //self.model.donor_data.push(response['data']);

                /* res['data'].foreach((value, index) => {
                    response['data'].push(value);
                }); */

                for (var i = 0; i < res['data'].length; i++) {
                  self.model.donor_data.push(res['data'][i]);
                }
              });
              $('#start_page').val(j);
            }, 500);
          }
        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log(this.model.key_text12);
                    _context4.next = 3;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.model.key_text12,
                      buttons: [this.model.key_text13]
                    });

                  case 3:
                    alert = _context4.sent;
                    _context4.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }]);

        return NearestDonorsPage;
      }();

      NearestDonorsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      NearestDonorsPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]]
        }]
      };
      NearestDonorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nearest-donors',
        template: _raw_loader_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NearestDonorsPage);
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
    "e9r2":
    /*!*********************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function e9r2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#nearest_donors_list {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25lYXJlc3QtZG9ub3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFDQTtFQUNDLGlCQUFBO0FBRUQiLCJmaWxlIjoibmVhcmVzdC1kb25vcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25lYXJlc3RfZG9ub3JzX2xpc3R7XG5cdGRpc3BsYXkgOiBub25lO1xufVxuXG4uY3VycmVudF9sb2NhdGlvbl9zcHBpbmVye1xuXHQtLWNvbG9yOiM0MTlCOTU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcGlubmVyX3Bvc2l0aW9ue1xuXHRtYXJnaW4tdG9wOjI1MHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "ggf1":
    /*!*****************************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NearestDonorsPageRoutingModule */

    /***/
    function ggf1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearestDonorsPageRoutingModule", function () {
        return NearestDonorsPageRoutingModule;
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


      var _nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nearest-donors.page */
      "TnvT");

      var routes = [{
        path: '',
        component: _nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__["NearestDonorsPage"]
      }];

      var NearestDonorsPageRoutingModule = /*#__PURE__*/_createClass(function NearestDonorsPageRoutingModule() {
        _classCallCheck(this, NearestDonorsPageRoutingModule);
      });

      NearestDonorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NearestDonorsPageRoutingModule);
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


      __webpack_exports__["default"] = "ion-label.active-tab {\n  color: #e8604c !important;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col.active-col {\n  box-shadow: 0px 0px 3px 1px #a3a2a2;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBSUksa0JBQUE7QUFESjs7QUFJRTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsLmFjdGl2ZS10YWIge1xyXG4gICAgY29sb3I6ICNlODYwNGMgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29sIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMzVkNTQ7XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tY29sLmFjdGl2ZS1jb2x7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggI2EzYTJhMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "qX/V":
    /*!*********************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors.module.ts ***!
      \*********************************************************/

    /*! exports provided: NearestDonorsPageModule */

    /***/
    function qXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearestDonorsPageModule", function () {
        return NearestDonorsPageModule;
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


      var _nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nearest-donors-routing.module */
      "ggf1");
      /* harmony import */


      var _nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nearest-donors.page */
      "TnvT");
      /* harmony import */


      var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../footer/footer.module */
      "PpLr");

      var NearestDonorsPageModule = /*#__PURE__*/_createClass(function NearestDonorsPageModule() {
        _classCallCheck(this, NearestDonorsPageModule);
      });

      NearestDonorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__["NearestDonorsPageRoutingModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"]],
        declarations: [_nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__["NearestDonorsPage"]]
      })], NearestDonorsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=nearest-donors-nearest-donors-module-es5.js.map