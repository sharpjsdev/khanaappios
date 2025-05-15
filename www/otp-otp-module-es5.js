(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"], {
    /***/
    "HLTW":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function HLTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"big_header\">\n    <div class=\"ion-padding\">\n      <div class=\"title light poiret\">\n        {{model.key_text1}}\n      </div>\n      <div class=\"big_header_bottom regular size_18\">\n        {{model.key_text2}}<br>\n        {{model.key_text3}}\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"ion-padding\">\n    <div class=\"app_input_text center_input vertical_center\">\n      \n      <input type=\"number\" placeholder=\"OTP\" id=\"check_otp\" [(ngModel)]='value' (input)='check_otp($event.target.value)'>\n      \n      <img src=\"assets/images/done.svg\" class=\"green_check\" id=\"right_otp\" style=\"display:none;\">\n      <img src=\"assets/images/wrong_sign.svg\" class=\"green_check\" id=\"wrong_otp\" style=\"display:none;\">\n      \n      <div class=\"input_text_bottom\">\n        <div class=\"otp_left\">\n          <input type=\"checkbox\" id=\"fruit1\" name=\"fruit-1\" value=\"Apple\" (click)=\"fill_automatically()\">\n          <label for=\"fruit1\" class=\"light light_grey size_12 left_space_2\">{{model.key_text4}}</label>\n        </div>\n        <div class=\"otp_right\">\n          <div class=\"resend_otp light light_grey size_12\" (click)=\"resend_otp()\">\n            <img src=\"assets/images/icon_resend.svg\">\n            {{model.key_text5}}\n          </div>\n        </div>\n      </div>\n\n    </div>\n    \n  </div>\n    \n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>    \n      <div class=\"app_button\">\n\t\t<button class=\"app_btn\" (click)=\"next()\">{{model.key_text6}}</button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n\n  \n  ";
      /***/
    },

    /***/
    "L5nD":
    /*!*******************************************!*\
      !*** ./src/app/otp/otp-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: OtpPageRoutingModule */

    /***/
    function L5nD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
        return OtpPageRoutingModule;
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


      var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var routes = [{
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
      }];

      var OtpPageRoutingModule = /*#__PURE__*/_createClass(function OtpPageRoutingModule() {
        _classCallCheck(this, OtpPageRoutingModule);
      });

      OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpPageRoutingModule);
      /***/
    },

    /***/
    "NLUG":
    /*!***********************************!*\
      !*** ./src/app/otp/otp.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function NLUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media only screen and (max-width: 348px) {\n  .input_text_bottom {\n    display: inherit !important;\n  }\n\n  .otp_left {\n    width: 100% !important;\n    text-align: left;\n    margin-top: 15px;\n  }\n\n  .otp_right {\n    width: 100% !important;\n    text-align: left !important;\n    margin-left: 5px;\n    margin-top: 10px !important;\n    margin-left: 30px !important;\n  }\n}\n.otp_left {\n  width: 60%;\n  text-align: left;\n}\n.otp_right {\n  width: 40%;\n  text-align: right;\n  margin-top: 6px;\n  margin-right: 14px;\n}\n.otp_right img {\n  width: 13px;\n  margin-bottom: -3px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLDJCQUFBO0VBQ047O0VBQ0U7SUFDSSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFFTjs7RUFBRTtJQUNJLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSxnQkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7RUFHTjtBQUNGO0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoib3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQ4cHgpIHtcbiAgICAuaW5wdXRfdGV4dF9ib3R0b20ge1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5vdHBfbGVmdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5vdHBfcmlnaHQge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuXG5cbi5vdHBfbGVmdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm90cF9yaWdodCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuLm90cF9yaWdodCBpbWcge1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "ikiF":
    /*!***********************************!*\
      !*** ./src/app/otp/otp.module.ts ***!
      \***********************************/

    /*! exports provided: OtpPageModule */

    /***/
    function ikiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
        return OtpPageModule;
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


      var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-routing.module */
      "L5nD");
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var OtpPageModule = /*#__PURE__*/_createClass(function OtpPageModule() {
        _classCallCheck(this, OtpPageModule);
      });

      OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
      })], OtpPageModule);
      /***/
    },

    /***/
    "so1i":
    /*!*********************************!*\
      !*** ./src/app/otp/otp.page.ts ***!
      \*********************************/

    /*! exports provided: OtpPage */

    /***/
    function so1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
        return OtpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp.page.html */
      "HLTW");
      /* harmony import */


      var _otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp.page.scss */
      "NLUG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_otp_otp_content_otp_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modal/otp/otp-content/otp-content.page */
      "7vly");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _error_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../error-msg.service */
      "ElZd");

      var OtpPage = /*#__PURE__*/function () {
        function OtpPage(errorMsg, modalController, router, fetch, storage, alertController) {
          _classCallCheck(this, OtpPage);

          this.errorMsg = errorMsg;
          this.modalController = modalController;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.model = {};
        }

        return _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.model.key_text1 = 'Khanaa.app';
            this.model.key_text2 = 'Enter OTP sent';
            this.model.key_text3 = 'to your Mobile No.';
            this.model.key_text4 = 'Fill Automatically';
            this.model.key_text5 = 'Resend OTP';
            this.model.key_text6 = 'Next';
            this.model.key_text8 = 'Incorrect OTP !';
            this.model.key_text9 = 'Please try again';
            this.okay = "Okay";
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'NEXT';
            });
            this.model.key_text6 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'KHANAA_APP';
            });
            this.model.key_text1 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'ENTER_OTP_SENT';
            });
            this.model.key_text2 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'TO_YOUR_MOBILE_NO.';
            });
            this.model.key_text3 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'FILL_AUTOMATICALLY';
            });
            this.model.key_text4 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'RESEND_OTP';
            });
            this.model.key_text5 = item6[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'INCORRECT_OTP';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'PLEASE_TRY_AGAIN';
            });
            this.model.key_text9 = item9[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.okay = item7[lang_code]; //});

            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
          }
        }, {
          key: "resend_otp",
          value: function resend_otp() {
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            console.log(this.model.user_id);
            var data = JSON.stringify({
              'id': this.model.user_id
            });
            this.openModal();
            this.fetch.resendOTP(data).subscribe(function (res) {
              if (res.success == true) {
                localStorage.setItem('otp', JSON.stringify(res['otp']));
              }
            });

            if ($('input#fruit1').is(':checked')) {
              this.fill_automatically();
            }
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modal_otp_otp_content_otp_content_page__WEBPACK_IMPORTED_MODULE_5__["OtpContentPage"],
                      cssClass: 'custom_otp_modal',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title"
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
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
              }, _callee, this);
            }));
          }
        }, {
          key: "check_otp",
          value: function check_otp(value) {
            // value == 1234
            if (value == JSON.parse(localStorage.getItem('otp'))) {
              localStorage.setItem('isotpverified', '1');
              $('#right_otp').css('display', 'block');
              $('#wrong_otp').css('display', 'none');
            } else if (value == '') {
              localStorage.setItem('isotpverified', '0');
              $('#right_otp').css('display', 'none');
              $('#wrong_otp').css('display', 'none');
            } else {
              localStorage.setItem('isotpverified', '0');
              $('#right_otp').css('display', 'none');
              $('#wrong_otp').css('display', 'block');
            }
          }
        }, {
          key: "next",
          value: function next() {
            var check_otp = $('#check_otp').val(); // check_otp == 1234

            if (check_otp == JSON.parse(localStorage.getItem('otp'))) {
              localStorage.removeItem('otp');
              $('#check_otp').val('');
              this.model.value = '';
              this.router.navigate(['/register-as-volunteer']);
            } else {
              this.errorMsg.showModal(this.model.key_text8 + ' ' + this.model.key_text9);
            }
          }
        }, {
          key: "fill_automatically",
          value: function fill_automatically() {
            var self = this;
            document.addEventListener("deviceready", function () {
              SMSReceive.startWatch(function () {
                document.addEventListener('onSMSArrive', function (e) {
                  var IncomingSMS = e.data;
                  self.processSMS(IncomingSMS);
                });
              }, function () {
                console.log('watch start failed');
              });
            }, false);
          }
        }, {
          key: "processSMS",
          value: function processSMS(data) {
            // Check SMS for a specific string sequence to identify it is you SMS
            // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
            // In this case, I am keeping the first 6 letters as OTP
            var message = data.body;
            message = message.replace('Dear User, ', '');
            var otp = message.slice(0, 4);
            $('#check_otp').val(otp);
            document.addEventListener("deviceready", function () {
              SMSReceive.stopWatch(function () {
                console.log('watch stopped');
              }, function () {
                console.log('watch stop failed');
              });
            }, false);
          }
        }]);
      }();

      OtpPage.ctorParameters = function () {
        return [{
          type: _error_msg_service__WEBPACK_IMPORTED_MODULE_9__["ErrorMsgService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=otp-otp-module-es5.js.map