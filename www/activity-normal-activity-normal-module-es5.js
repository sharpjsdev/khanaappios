(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-normal-activity-normal-module"], {
    /***/
    "YeSl":
    /*!*******************************************************************!*\
      !*** ./src/app/activity-normal/activity-normal-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ActivityNormalPageRoutingModule */

    /***/
    function YeSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityNormalPageRoutingModule", function () {
        return ActivityNormalPageRoutingModule;
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


      var _activity_normal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activity-normal.page */
      "ntK3");

      var routes = [{
        path: '',
        component: _activity_normal_page__WEBPACK_IMPORTED_MODULE_3__["ActivityNormalPage"]
      }];

      var ActivityNormalPageRoutingModule = /*#__PURE__*/_createClass(function ActivityNormalPageRoutingModule() {
        _classCallCheck(this, ActivityNormalPageRoutingModule);
      });

      ActivityNormalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivityNormalPageRoutingModule);
      /***/
    },

    /***/
    "a20N":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activity-normal/activity-normal.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a20N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<app-captcha></app-captcha>\n<ion-content>\n<!-- <span id=\"activity_normal_content\"> -->\n<div class=\"ion-padding theme_width\">\n  <div class=\"activity_graph custom_new_graph\">\n\t<div style=\"display: flex;\">\n\t\t<div (click)=\"handleTab(1)\" class=\"rec custon_new_tab_active\" style=\"margin-left: 15px;margin-bottom:10px;border-radius: 15px;width: 50%;text-align: center;padding: 8px;background: #f7f6f4;\n\t\t\">\n\t\t {{ model.key_text19 }}\n\t\t</div>\n\t\t<div (click)=\"handleTab(2)\" class=\"donar custon_new_tab_deactive btn1 active\" style=\"border:1px solid #419B95;margin-right: 15px;margin-bottom:10px;border-radius: 15px;width: 50%;text-align: center;padding: 8px;background: #f7f6f4;\">\n\t\t {{ model.key_text20 }}\n\t\t</div>\n\t   </div>\n\t<div class=\"search_food_bg\" style=\"min-height: 234px;\" >\n\t\t<div class=\"search_single receivertab\" *ngIf=\"request_food.length>0 && model.receivertab == 1\">\n\t\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{ model.key_text17 }}</div>\n\t  \n\t\t\t<ion-row *ngFor=\"let x of request_food;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t  <ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t{{i+1}}.\n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"6\" style=\"padding: 0;\">\n\t\t\t\t{{x.food_type | foodType}}. {{model.key_text12}} {{x.no_of_person}} {{model.key_text13}}\n\t\t\t  </ion-col>\t\t\t  \n\t\t\t  <ion-col size=\"3\" style=\"padding: 0;\" >\n\t\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"2\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\t\t\t\t  \n\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"cancelRequestFood(x.id)\">\t\t\t\t   \n\t\t\t  </ion-col>\n\t\t\t</ion-row>  \t\t\t\n\t\t</div>\n\t\t\n\t\t<div class=\"search_single receivertab\"  *ngIf=\"alloted_request_food.length>0 && model.receivertab == 1\" style=\"margin-top: 60px;\">\n\t\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{ model.key_text18 }}</div>\n\t\t\n\t\t\t<ion-row *ngFor=\"let x of alloted_request_food;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t\t<ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t\t{{i+1}}.\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" style=\"padding: 0; padding-right: 10px;\" routerLink=\"/get-food-nearest-donors-two-duplicate/{{x.donate_food_id}}/{{model.recLat}}/{{model.recLng}}/{{x.app_user_id}}/{{model.mode}}/{{x.food_type}}/{{x.id}}\">\n\t\t\t\t\t {{x.food_type | foodType}}. {{model.key_text12}} {{x.no_of_person}} {{model.key_text13}}\n\t\t\t\t</ion-col>\t\t\t  \n\t\t\t\t<ion-col size=\"2\" style=\"padding: 0;\" >\n\t\t\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t\t</ion-col>\t\t\t\t\n\t\t\t\t<ion-col size=\"2\" class=\"custom_new_call_btn\" style=\"text-align: right; margin-top: -4px;\">\n\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t<a class=\"size_15 medium\" (click)=\"call(x.mobile_no)\"><ion-icon name=\"call-outline\"></ion-icon></a> \t\t\t\t   \n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"1\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\t\t\t\n\t\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"cancelAllotedRequest(x.id,x.donate_food_id,x.donor_id,x.no_of_person,x.food_type)\">\t\t\t \n\t\t\t\t</ion-col>\n\t\t\t</ion-row>  \t\t\t\n\t\t</div>\t\n\n\t\t<div class=\"search_single donartab\" *ngIf=\"pending_data.length>0 && model.donartab == 1\">\n\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{model.key_text11}}</div>\n\t\t<ion-row *ngFor=\"let x of pending_data;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t{{i+1}}.\n\t\t\t</ion-col>  \n\t\t\t<ion-col size=\"5\" style=\"padding: 0;\" >\n\t\t\t{{x.food_type | foodType}}. {{model.key_text12}} {{x.total_food_for}} {{model.key_text13}}\n\t\t\t</ion-col>\t\t\n\t\t\t<ion-col size=\"3\" style=\"padding: 0;\" >\n\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"2\" >\n\t\t\t\t<ion-badge *ngIf=\"x.deactive == 1\" (click)=\"activeDonation(x.id)\" style=\"background-color:#6fb3af;float:right;margin-top:-5px;\">Act</ion-badge>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\t\t\t\n\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"presentAlertPrompt(x.id)\">\t\t\t \n\t\t\t</ion-col>\n\t\t</ion-row>        \n\t\t</div> \n\t\n\t\t<div class=\"search_single donartab\" *ngIf=\"alloted_food.length>0 && model.donartab == 1\" style=\"margin-top: 60px;\">\n\t\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{model.key_text16}}</div>  \n\t\t\t<ion-row *ngFor=\"let x of alloted_food;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t{{i+1}}.\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" style=\"padding: 0;\" >\n\t\t\t\t {{x.food_type | foodType}}. {{model.key_text12}} {{x.no_of_person}} {{model.key_text13}}\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"2\" style=\"padding: 0;\" >\n\t\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"2\" class=\"custom_new_call_btn\" style=\"text-align: right; margin-top: -4px;\">\t\t\t  \n\t\t\t\t<a class=\"size_15 medium\" (click)=\"call(x.mobile_no)\"><ion-icon name=\"call-outline\"></ion-icon></a> \t\t\t   \n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\n\t\t\t\t<span *ngIf=\"x.resultInMinutes<1\">\n\t\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"cancelAllotedFood(x.id,x.donate_food_id,x.donor_id,x.app_user_id,x.no_of_person)\">\t\t\t\t\t\n\t\t\t\t</span>\n\t\t\t</ion-col>\n\t\t\t</ion-row>  \t\t\n\t\t</div>\n    </div>\n</div>\n</div>\n<div class=\"ion-padding theme_width\" style=\"margin-top: 5%;\">\n\t<div class=\"activity_graph custom_new_graph\">\n    <form class=\"form\" id=\"myForm\">     \n      <div class=\"switch-field\" (change)=\"state()\">\n        <input type=\"radio\" id=\"radio-one\" name=\"switch-one\" value=\"yes\" checked/>\n        <label for=\"radio-one\" class=\"regular size_12\">{{model.key_text1}}</label>\n        <input type=\"radio\" id=\"radio-two\" name=\"switch-one\" value=\"no\" />\n        <label for=\"radio-two\" class=\"regular size_12\">{{model.key_text2}}</label>\n      </div> \n    </form> \n    <div id=\"highcharts\" style=\"width:100%;\"></div>\n    <div class=\"total_box\">\n      <div class=\"graph_total\">\n        <div class=\"graph_total_single size_12\" id=\"u_week_blessing_div\">\n          {{model.key_text3}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.blessing_this_week}}</span>\n        </div>\n\t\t<div class=\"graph_total_single size_12\" id=\"u_month_blessing_div\">\n          {{model.key_text4}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.blessing_this_week}}</span>\n        </div>\n        <div class=\"graph_total_single size_12\">\n          {{model.key_text8}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.total_blessings}}</span>\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n<div  [ngClass]=\"graphstate === 'week' ? '' : 'none'\">\n\t<div id=\"food_quality\" ></div>\n</div>\n<div [ngClass]=\"graphstate === 'month' ? '' : 'none'\">\n\t<div id=\"quality\" ></div>\n</div>\n\t\t\n\t<!-- <div class=\"total_box\">\n\t\t<div class=\"graph_total\">\n\t\t\t<div class=\"graph_total_single size_12\">\n\t\t\t\t{{model.key_text14}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.quality_rating}}</span>\n\t\t\t</div>\n\t\t</div>\n    </div> -->\n\t\t\n\t<!-- <div id=\"packaging\" ></div>\n\t\t\n\t<div class=\"total_box\">\n\t\t<div class=\"graph_total\">\n\t\t\t<div class=\"graph_total_single size_12\">\n\t\t\t\t{{model.key_text14}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.packaging_rating}}</span>\n\t\t\t</div>\n\t\t</div>\n    </div> -->\n\t\n\t<!-- <div id=\"behaviour\" ></div>\n\t\n    <div class=\"total_box\">\n\t\t<div class=\"graph_total\">\n\t\t\t<div class=\"graph_total_single size_12\">\n\t\t\t\t{{model.key_text14}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.behaviour_rating}}</span>\n\t\t\t</div>\n\t\t</div>\n    </div> -->\n\n\n\n\t<ion-slides class=\"swipe_msg\" [options]=\"slideOpts\">\n\t\t<ion-slide *ngFor=\"let x of model.feedback_data;let i = index\">\n\t\t\t<div class=\"thanks_msg\" *ngIf=\" i % 2 === 0 && x.comment != null\" >\n\t\t\t\t<div style=\"margin-bottom: 5px;\">{{x.username}} {{model.key_text15}}</div>\n\t\t\t\t<div class=\"size_15 regular green\">\n\t\t\t\t\t{{x.comment}}<ion-icon style=\"font-size: 18px;\" (click)=\"share(x.comment)\" name=\"share-social-outline\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t\t<img src=\"assets/images/smile.svg\"/>\n\t\t\t</div>\n\t\t\t<div class=\"thanks_msg second_slide\" *ngIf=\" i % 2 !== 0 && x.comment != null\">\n\t\t\t\t<img src=\"assets/images/smile.svg\"/>\n\t\t\t\t<div style=\"margin-bottom: 5px;\">{{x.username}} {{model.key_text15}}</div>\n\t\t\t\t<div class=\"size_15 regular green\">\n\t\t\t\t\t{{x.comment}}<ion-icon style=\"font-size: 18px;\" (click)=\"share(x.comment)\" name=\"share-social-outline\"></ion-icon>\n\t\t\t\t</div>      \n\t\t\t</div> \n\t\t</ion-slide>\n\t\t\n\t</ion-slides>\n\n\n<div class=\"ion-padding theme_width\">\n\t<div class=\"top_volunteers\">\n\t\t<div class=\"top_volunteers_heading size_18\">{{model.key_text9}}</div>\n\t\t<span *ngFor=\"let x of model.top_donors; let i = index;\">\n\t\t\t<div class=\"top_volunteer_single\">\n\t\t\t\t<div class=\"top_volunteer_name\">{{i+1}}. {{x.username}}</div>\n\t\t\t\t<div class=\"donations_count green\">{{x.cnt}} {{model.key_text10}}</div>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</div>\n<!-- </span> -->\n\n<center class=\"current_location_spinner_position\" id=\"activity_normal_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n</ion-content> \n<app-footer [currentRoute]=\"'/activity-normal'\"></app-footer>\n";
      /***/
    },

    /***/
    "lH3b":
    /*!***********************************************************!*\
      !*** ./src/app/activity-normal/activity-normal.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function lH3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".switch-field {\n  display: flex;\n  margin-bottom: 36px;\n  overflow: hidden;\n  width: 153px !important;\n  background: #b7b7b7;\n  border-radius: 20px;\n  margin: 0 auto;\n}\n\n.switch-field input {\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  overflow: hidden;\n}\n\n.switch-field label {\n  background-color: #B7B7B7;\n  color: #FFFFFF;\n  line-height: 1;\n  text-align: center;\n  padding: 10px 16px;\n  margin-right: -1px;\n  transition: all 0.1s ease-in-out;\n}\n\n.switch-field label:hover {\n  cursor: pointer;\n}\n\n.switch-field input:checked + label {\n  background-color: white;\n  box-shadow: none;\n  color: #363636;\n  border-radius: 20px;\n  z-index: 99;\n  font-family: medium !important;\n}\n\n.switch-field label:first-of-type {\n  border-radius: 20px 0px 0px 20px;\n}\n\n.switch-field label:last-of-type {\n  border-radius: 0px 20px 20px 0px;\n}\n\n/* This is just for CodePen. */\n\n.form {\n  max-width: 600px;\n  font-family: \"Lucida Grande\", Tahoma, Verdana, sans-serif;\n  font-weight: normal;\n  line-height: 1.625;\n  margin: 8px auto;\n  padding: 16px;\n}\n\nh2 {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n\n#activity_normal_content {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n\n.none {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjdGl2aXR5LW5vcm1hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDRyxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNDLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7RUFDRyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDQyxlQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0MsZ0NBQUE7QUFDRDs7QUFHQSw4QkFBQTs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EseURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBREQ7O0FBSUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUFERDs7QUFJQTtFQUNDLGFBQUE7QUFERDs7QUFJQTtFQUNDLGVBQUE7QUFERDs7QUFHQTtFQUNDLGlCQUFBO0FBQUQ7O0FBRUE7RUFDQyxhQUFBO0FBQ0QiLCJmaWxlIjoiYWN0aXZpdHktbm9ybWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gtZmllbGQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDE1M3B4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2I3YjdiNztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0IHtcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG5cdGhlaWdodDogMXB4O1xuXHR3aWR0aDogMXB4O1xuXHRib3JkZXI6IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2l0Y2gtZmllbGQgbGFiZWwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQjdCN0I3O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG5cdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0gIWltcG9ydGFudDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpsYXN0LW9mLXR5cGUge1xuXHRib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcblxufVxuXG4vKiBUaGlzIGlzIGp1c3QgZm9yIENvZGVQZW4uICovXG5cbi5mb3JtIHtcblx0bWF4LXdpZHRoOiA2MDBweDtcblx0Zm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxLjYyNTtcblx0bWFyZ2luOiA4cHggYXV0bztcblx0cGFkZGluZzogMTZweDtcbn1cblxuaDIge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuI2FjdGl2aXR5X25vcm1hbF9jb250ZW50e1xuXHRkaXNwbGF5IDogbm9uZTtcbn1cblxuLmN1cnJlbnRfbG9jYXRpb25fc3BwaW5lcntcblx0LS1jb2xvcjojNDE5Qjk1O1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3Bpbm5lcl9wb3NpdGlvbntcblx0bWFyZ2luLXRvcDoyNTBweDtcbn1cbi5ub25le1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "ntK3":
    /*!*********************************************************!*\
      !*** ./src/app/activity-normal/activity-normal.page.ts ***!
      \*********************************************************/

    /*! exports provided: ActivityNormalPage */

    /***/
    function ntK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityNormalPage", function () {
        return ActivityNormalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_activity_normal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./activity-normal.page.html */
      "a20N");
      /* harmony import */


      var _activity_normal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity-normal.page.scss */
      "lH3b");
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


      var _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/cancel-allotedfood/cancel-allotedfood.page */
      "hHBB");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! highcharts */
      "6n/F");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/browser-tab/ngx */
      "ORb9");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");

      var ActivityNormalPage = /*#__PURE__*/function () {
        function ActivityNormalPage(geolocation, fetch, storage, modalController, alertController, browserTab, callNumber) {
          _classCallCheck(this, ActivityNormalPage);

          this.geolocation = geolocation;
          this.fetch = fetch;
          this.storage = storage;
          this.modalController = modalController;
          this.alertController = alertController;
          this.browserTab = browserTab;
          this.callNumber = callNumber;
          this.model = {};
          this.donation_graph_data = [];
          this.blessing_this_week = [];
          this.pending_data = [];
          this.alloted_food = [];
          this.request_food = [];
          this.alloted_request_food = [];
          this.graphstate = 'week';
          this.reasons = [];
          this.slideOpts = {
            zoom: false,
            autoplay: true
          };

          this.format = function date2str(x, y) {
            var z = {
              M: x.getMonth() + 1,
              d: x.getDate(),
              h: x.getHours(),
              m: x.getMinutes(),
              s: x.getSeconds()
            };
            y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
              return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2);
            });
            return y.replace(/(y+)/g, function (v) {
              return x.getFullYear().toString().slice(-v.length);
            });
          };
        }

        return _createClass(ActivityNormalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            $('#add_location_spinner').show();
            this.model.receivertab = 0;
            this.model.donartab = 1;
            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            this.model.mode = 'WALKING';

            if (localStorage.getItem('isReceiverTab') != null) {
              if (localStorage.getItem('isReceiverTab') == '1') {
                this.model.receivertab = 1;
                this.model.donartab = 0;
              } else if (localStorage.getItem('isReceiverTab') == '0') {
                this.model.receivertab = 0;
                this.model.donartab = 1;
              }
            }

            var lang_code = JSON.parse(localStorage.getItem('lang')); //$('.receivertab').hide();

            $('#u_month_blessing_div').css('display', 'none');
            $('#u_week_blessing_div').css('display', 'block');
            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.fetch.get_user_city(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this.fetch.get_top_donors(res.data['city']).subscribe(function (res2) {
                  _this.model.top_donors = res2.data;
                });
              }
            });
            this.fetch.show_feedback(this.model.user_id).subscribe(function (res) {
              _this.model.feedback_data = res.data;
            });
            var user = JSON.stringify({
              'id': this.model.user_id
            });
            this.fetch.profile(user).subscribe(function (res) {
              _this.model.login_username = res['username'];
            });
            this.fetch.pending_donation(this.model.user_id).subscribe(function (res) {
              _this.pending_data = res['data'];
            });
            this.fetch.my_alloted_donation(this.model.user_id).subscribe(function (res) {
              _this.alloted_food = res['data'];

              _this.alloted_food.forEach(function (val, i) {
                var startTime = new Date(val.updated_at);
                var endTime = new Date();
                var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds

                var resultInMinutes = Math.round(difference / 60000);
                val.resultInMinutes = resultInMinutes;
              });

              $('#add_location_spinner').hide();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.options = {
              enableHighAccuracy: false
            };
            this.geolocation.getCurrentPosition(this.options).then(function (resp) {
              _this2.model.recLat = resp.coords.latitude;
              _this2.model.recLng = resp.coords.longitude;
            });
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope(); //	this.fetch.getKeyText(lang_code).subscribe(res => {

            var item1 = res.find(function (i) {
              return i.key_text === 'WEEKLY';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'MONTHLY';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'BLESSINGS_THIS_WEEK';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'BLESSINGS_THIS_MONTH';
            });
            this.model.key_text4 = item4[lang_code];
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
              return i.key_text === 'TOTAL_BLESSINGS';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'TOP_DONORS_FROM_YOUR_CITY';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'DONATIONS';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'YOUR_PENDING_DONATIONS';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'FOOD_FOR';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'AVERAGE_RATING';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'SAYS';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'ALLOTED_DONATION';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'YOUR_PENDING_REQUEST';
            });
            this.model.key_text17 = item17[lang_code];
            var item18 = res.find(function (i) {
              return i.key_text === 'YOUR_ALLOTED_REQUEST';
            });
            this.model.key_text18 = item18[lang_code];
            var item19 = res.find(function (i) {
              return i.key_text === 'AS_A_RECEIVER';
            });
            this.model.key_text19 = item19[lang_code];
            var item20 = res.find(function (i) {
              return i.key_text === 'AS_A_DONAR';
            });
            this.model.key_text20 = item20[lang_code];
            var item21 = res.find(function (i) {
              return i.key_text === 'CANCEL_DONATION_MSG';
            });
            this.model.key_text21 = item21[lang_code];
            var item22 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.key_text22 = item22[lang_code];
            var item23 = res.find(function (i) {
              return i.key_text === 'CANCEL';
            });
            this.model.key_text23 = item23[lang_code];
            var item24 = res.find(function (i) {
              return i.key_text === 'ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_REQUEST';
            });
            this.model.key_text24 = item24[lang_code];
            var item25 = res.find(function (i) {
              return i.key_text === 'CANCEL_ALLOTED_DONATION_MSG';
            });
            this.model.key_text25 = item25[lang_code];
            var item26 = res.find(function (i) {
              return i.key_text === 'FOOD_QUALITY';
            });
            this.model.key_text26 = item26[lang_code];
            var item27 = res.find(function (i) {
              return i.key_text === 'PACKAGING';
            });
            this.model.key_text27 = item27[lang_code];
            var item28 = res.find(function (i) {
              return i.key_text === 'BEHAVIOUR';
            });
            this.model.key_text28 = item28[lang_code];
            var item29 = res.find(function (i) {
              return i.key_text === 'EXCELLENT';
            });
            this.model.key_text29 = item29[lang_code];
            var item30 = res.find(function (i) {
              return i.key_text === 'GOOD';
            });
            this.model.key_text30 = item30[lang_code];
            var item31 = res.find(function (i) {
              return i.key_text === 'BAD';
            });
            this.model.key_text31 = item31[lang_code];
            var item32 = res.find(function (i) {
              return i.key_text === 'WEEKLY_FEEDBACK';
            });
            this.model.key_text32 = item32[lang_code];
            var item33 = res.find(function (i) {
              return i.key_text === 'VERY_BAD';
            });
            this.model.key_text33 = item33[lang_code];
            var item34 = res.find(function (i) {
              return i.key_text === 'MONTHLY_FEEDBACK';
            });
            this.model.key_text34 = item34[lang_code];
            var item35 = res.find(function (i) {
              return i.key_text === 'AVERAGE';
            });
            this.model.key_text35 = item35[lang_code];
            var item36 = res.find(function (i) {
              return i.key_text === 'MON';
            });
            this.model.key_text36 = item36[lang_code];
            var item37 = res.find(function (i) {
              return i.key_text === 'TUE';
            });
            this.model.key_text37 = item37[lang_code];
            var item38 = res.find(function (i) {
              return i.key_text === 'WED';
            });
            this.model.key_text38 = item38[lang_code];
            var item39 = res.find(function (i) {
              return i.key_text === 'THU';
            });
            this.model.key_text39 = item39[lang_code];
            var item40 = res.find(function (i) {
              return i.key_text === 'FRI';
            });
            this.model.key_text40 = item40[lang_code];
            var item41 = res.find(function (i) {
              return i.key_text === 'SAT';
            });
            this.model.key_text41 = item41[lang_code];
            var item42 = res.find(function (i) {
              return i.key_text === 'SUN';
            });
            this.model.key_text42 = item42[lang_code];
            var item43 = res.find(function (i) {
              return i.key_text === 'WEEK';
            });
            this.model.key_text43 = item43[lang_code]; //});

            this.weekly_donation_graph();
            this.weekly_pieChart();
          }
        }, {
          key: "handleTab",
          value: function handleTab(id) {
            var _this3 = this;

            if (id == 1) {
              $('#add_location_spinner').show();
              this.model.receivertab = 1;
              this.model.donartab = 0;
              $('.rec').addClass('btn1 active');
              $('.rec').css('border', '1px solid #419B95');
              $('.donar').removeClass('btn1 active');
              $('.donar').css('border', 'none');
              this.fetch.my_food_request(this.model.user_id).subscribe(function (res) {
                _this3.request_food = res['data'];
              });
              this.fetch.my_alloted_request(this.model.user_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this3.alloted_request_food = res['data'];
              });
            } else {
              this.model.receivertab = 0;
              this.model.donartab = 1;
              $('.rec').removeClass('btn1 active');
              $('.rec').css('border', 'none');
              $('.donar').css('border', '1px solid #419B95');
              $('.donar').addClass('btn1 active');
            }
          }
        }, {
          key: "share",
          value: function share(message) {
            var m = message + '\n\n';
            document.addEventListener("deviceready", function () {
              window.plugins.socialsharing.share(m, 'Khana app', '', 'https://play.google.com/store/apps/details?id=com.food.forAll');
            }, false);
          }
        }, {
          key: "call",
          value: function call(number) {
            var _this4 = this;

            var data = JSON.stringify({
              'caller_id': this.model.user_id,
              'callee_mobile_no': number
            });
            this.fetch.add_call_detail(data).subscribe(function (res) {
              _this4.callNumber.callNumber(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].phone_no, true).then(function (res) {
                console.log('Launched dialer!', res);
              })["catch"](function (err) {
                return console.log('Error launching dialer', err);
              });
            });
          }
        }, {
          key: "cancelAllotedRequest",
          value: function cancelAllotedRequest(id, food_id, donar_id, no_of_person, food_type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this5 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    $('#add_location_spinner').show();
                    _context.next = 3;
                    return this.modalController.create({
                      component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__["CancelAllotedfoodPage"],
                      cssClass: 'custom_filter_modal cancel_allot_food_popup',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title",
                        "id": id,
                        "type": 'get_food'
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this5.dataReturned = dataReturned.data;

                        if (_this5.dataReturned == 1) {
                          var data = JSON.stringify({
                            'food_id': food_id,
                            'logged_in_user': _this5.model.login_username,
                            'no_of_person': no_of_person,
                            'app_user_id': _this5.model.user_id,
                            'food_type': food_type,
                            'notification_type': 3,
                            'to': donar_id,
                            'from': _this5.model.user_id,
                            'getFoodId': id
                          }); //console.log(data);

                          _this5.fetch.notify_donar(data).subscribe(function (res) {
                            _this5.fetch.my_alloted_request(_this5.model.user_id).subscribe(function (res) {
                              _this5.alloted_request_food = res['data'];
                              $('#add_location_spinner').hide(); //console.log(this.alloted_request_food.length);
                            });
                          });
                        } //alert('Modal Sent Data :'+ dataReturned);

                      }
                    });
                    _context.next = 7;
                    return modal.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    $('#add_location_spinner').show();
                    _context2.next = 3;
                    return this.alertController.create({
                      cssClass: 'my-custom-class custom_alert_1',
                      //header: 'Alert',
                      message: this.model.key_text21,
                      buttons: [{
                        text: this.model.key_text23,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          $('#add_location_spinner').hide();
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.model.key_text22,
                        handler: function handler() {
                          var data = JSON.stringify({
                            'donate_food_id': id
                          });

                          _this6.fetch.cancel_donation_food(data).subscribe(function (res) {
                            _this6.fetch.pending_donation(_this6.model.user_id).subscribe(function (res) {
                              _this6.pending_data = res['data'];
                            });

                            _this6.fetch.my_alloted_donation(_this6.model.user_id).subscribe(function (res) {
                              _this6.alloted_food = res['data'];

                              _this6.alloted_food.forEach(function (val, i) {
                                var startTime = new Date(val.updated_at);
                                var endTime = new Date();
                                var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds

                                var resultInMinutes = Math.round(difference / 60000);
                                val.resultInMinutes = resultInMinutes;
                              });

                              $('#add_location_spinner').hide();
                            });
                          });
                        }
                      }]
                    });

                  case 3:
                    alert = _context2.sent;
                    _context2.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancelRequestFood",
          value: function cancelRequestFood(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this7 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    $('#add_location_spinner').show();
                    _context3.next = 3;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      //header: 'Alert',
                      message: this.model.key_text24,
                      buttons: [{
                        text: this.model.key_text23,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          $('#add_location_spinner').show();
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.model.key_text22,
                        handler: function handler() {
                          var data = JSON.stringify({
                            'id': id
                          });

                          _this7.fetch.cancel_requested_food(data).subscribe(function (res) {
                            _this7.fetch.my_food_request(_this7.model.user_id).subscribe(function (res) {
                              _this7.request_food = res['data'];
                              $('#add_location_spinner').hide();
                            });
                          });
                        }
                      }]
                    });

                  case 3:
                    alert = _context3.sent;
                    _context3.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "activeDonation",
          value: function activeDonation(id) {
            var _this8 = this;

            var data = JSON.stringify({
              'id': id
            });
            this.fetch.active_donation(data).subscribe(function (res) {
              _this8.ngOnInit();
            });
          }
        }, {
          key: "cancelAllotedFood",
          value: function cancelAllotedFood(id, donate_food_id, donar_id, receiver_id, no_of_person) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this9 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    $('#add_location_spinner').show();
                    _context4.next = 3;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      //header: 'Alert',
                      message: this.model.key_text25,
                      buttons: [{
                        text: this.model.key_text23,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          $('#add_location_spinner').hide();
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.model.key_text22,
                        handler: function handler() {
                          var data = JSON.stringify({
                            'id': id,
                            'donate_food_id': donate_food_id,
                            'donar_id': donar_id,
                            'receiver_id': receiver_id,
                            'notification_type': 4,
                            'logged_in_username': _this9.model.login_username,
                            'no_of_person': no_of_person
                          });

                          _this9.fetch.cancel_alloted_food(data).subscribe(function (res) {
                            _this9.fetch.pending_donation(_this9.model.user_id).subscribe(function (res) {
                              _this9.pending_data = res['data'];
                            });

                            _this9.fetch.my_alloted_donation(_this9.model.user_id).subscribe(function (res) {
                              _this9.alloted_food = res['data'];

                              _this9.alloted_food.forEach(function (val, i) {
                                var startTime = new Date(val.updated_at);
                                var endTime = new Date();
                                var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds

                                var resultInMinutes = Math.round(difference / 60000);
                                val.resultInMinutes = resultInMinutes;
                              });

                              $('#add_location_spinner').hide();
                            });
                          });
                        }
                      }]
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
        }, {
          key: "plotSimpleBarChart",
          value: function plotSimpleBarChart(data, cat, min, max, tickInterval) {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_7__["chart"]('highcharts', {
              chart: {
                type: 'spline',
                backgroundColor: '#F7F6F4',
                height: 200
              },
              credits: {
                enabled: false
              },
              title: {
                text: ''
              },
              xAxis: {
                categories: cat
              },
              yAxis: {
                gridLineWidth: 0,
                min: min,
                max: max,
                tickInterval: tickInterval,
                tickPixelInterval: 1,
                title: {
                  text: ''
                }
              },
              plotOptions: {
                series: {
                  marker: {
                    enabled: false
                  }
                }
              },
              series: [{
                name: '',
                type: undefined,
                color: '#419B95',
                data: data
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 1000);
          }
        }, {
          key: "weekly_donation_graph",
          value: function weekly_donation_graph() {
            var _this10 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.donation_graph_data = [];
            this.fetch.weekly_donation_graph(this.model.user_id).subscribe(function (res) {
              for (var i = 0; i < 7; i++) {
                _this10.donation_graph_data.push(0);
              }

              var calcmax = 12;

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].day - 1;
                _this10.donation_graph_data[index] = res.data[j].cnt;

                if (res.data[j].cnt > calcmax) {
                  calcmax = res.data[j].cnt;
                }
              }

              _this10.model.xcat = [_this10.model.key_text36, _this10.model.key_text37, _this10.model.key_text38, _this10.model.key_text39, _this10.model.key_text40, _this10.model.key_text41, _this10.model.key_text42];
              _this10.model.min = 0;
              _this10.model.max = calcmax;
              _this10.model.tickInterval = 4;

              _this10.plotSimpleBarChart(_this10.donation_graph_data, _this10.model.xcat, _this10.model.min, _this10.model.max, _this10.model.tickInterval);
            });
            this.fetch.blessings_this_week(this.model.user_id).subscribe(function (res) {
              _this10.model.blessing_this_week = res.data[0].total_donation;
              _this10.model.blessing_quote = "week";
            });
            this.fetch.total_blessings(this.model.user_id).subscribe(function (res) {
              _this10.model.total_blessings = res.data[0].total_donation;
            });
          }
        }, {
          key: "monthly_donation_graph",
          value: function monthly_donation_graph() {
            var _this11 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.donation_graph_data = [];
            this.fetch.monthly_donation_graph(this.model.user_id).subscribe(function (res) {
              _this11.donation_graph_data = [0, 0, 0, 0];

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].Week_no - 1;
                _this11.donation_graph_data[index] = res.data[j].cnt;
              }

              _this11.model.xcat = [_this11.model.key_text43 + '1', _this11.model.key_text43 + '2', _this11.model.key_text43 + '3', _this11.model.key_text43 + '4'];
              _this11.model.min = 0;
              _this11.model.max = 60;
              _this11.model.tickInterval = 20;

              _this11.plotSimpleBarChart(_this11.donation_graph_data, _this11.model.xcat, _this11.model.min, _this11.model.max, _this11.model.tickInterval);
            });
            this.fetch.blessings_this_month(this.model.user_id).subscribe(function (res) {
              _this11.model.blessing_this_week = res.data[0].total_donation;
              _this11.model.blessing_quote = "month";
            });
            this.fetch.total_blessings(this.model.user_id).subscribe(function (res) {
              _this11.model.total_blessings = res.data[0].total_donation;
            });
          } //   pie_chart_food_quality(e, g, b){
          // 	let myChart = HighCharts.chart('food_quality', {
          // 		chart: {
          // 			type: 'pie',
          // 			backgroundColor: '#F7F6F4',
          // 			plotBackgroundColor: '#F7F6F4',
          // 			plotBorderWidth: null,
          // 			plotShadow: false,
          // 			height:300
          // 		},
          // 		credits: {
          // 			enabled: false
          // 		},
          // 		title: {
          // 			text: this.model.key_text26
          // 		},
          // 		plotOptions: {
          // 			pie: {
          // 				allowPointSelect: true,
          // 				cursor: 'pointer',
          // 				dataLabels: {
          // 					enabled: true,
          // 					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          // 				}
          // 			}
          // 		},
          // 		series: [{
          // 			name: '',
          // 			type: undefined,
          // 			data: [{
          // 				name: this.model.key_text29,
          // 				y: e,
          // 				color: "#32CD32"
          // 			}, {
          // 				name: this.model.key_text30,
          // 				y: g,
          // 				color: "orange"
          // 			}, {
          // 				name: this.model.key_text31,
          // 				y: b,
          // 				color: "red"
          // 			}]
          // 		}]
          // 	});
          // 	setTimeout(function(){ myChart.reflow(); }, 1000);
          //   }
          //   packagingPieChart(e, g, b) {
          //    let myChart = HighCharts.chart('packaging', {
          //       chart: {
          //         type: 'pie',
          // 		backgroundColor: '#F7F6F4',
          // 		plotBackgroundColor: '#F7F6F4',
          // 		plotBorderWidth: null,
          // 		plotShadow: false,
          // 		height:300
          //       },
          // 	  title: {
          //         text: this.model.key_text27
          //       },
          // 	 credits: {
          // 			enabled: false
          // 		},
          //       plotOptions: {
          //         pie: {
          //           allowPointSelect: true,
          //           cursor: 'pointer',
          //           dataLabels: {
          //             enabled: true,
          //             format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          //           }
          //         }
          //       },
          //       series: [{
          //         name: '',
          // 		type: undefined,
          //         data: [{
          //           name: this.model.key_text29,
          //           y: e,
          // 		  color: "#32CD32"
          //         }, {
          //           name: this.model.key_text30,
          //           y: g,
          // 		   color: "orange"
          //         }, {
          //           name: this.model.key_text31,
          //           y: b,
          // 		   color: "red"
          //         }]
          //       }]
          //     });
          // 	setTimeout(function(){ myChart.reflow(); }, 1000);
          //   }
          //   behaviourPieChart(e, g, b) {
          // let myChart = HighCharts.chart('behaviour', {
          //       chart: {
          //         type: 'pie',
          // 		backgroundColor: '#F7F6F4',
          // 		plotBackgroundColor: '#F7F6F4',
          // 		plotBorderWidth: null,
          // 		plotShadow: false,
          // 		height:300
          //       },
          // 	  title: {
          //         text: this.model.key_text28
          //       },
          // 	 credits: {
          // 			enabled: false
          // 		},
          //       plotOptions: {
          //         pie: {
          //           allowPointSelect: true,
          //           cursor: 'pointer',
          //           dataLabels: {
          //             enabled: true,
          //             format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          //           }
          //         }
          //       },
          //       series: [{
          //         name: '',
          // 		type: undefined,
          //         data: [{
          //           name: this.model.key_text29,
          //           y: e,
          // 		  color: "#32CD32"
          //         }, {
          //           name: this.model.key_text30,
          //           y: g,
          // 		   color: "orange"
          //         }, {
          //           name: this.model.key_text31,
          //           y: b,
          // 		   color: "red"
          //         }]
          //       }]
          //     });
          // 	setTimeout(function(){ myChart.reflow(); }, 1000);
          //   }

        }, {
          key: "checkday",
          value: function checkday(alldata) {
            var monday = [];
            var tuesday = [];
            var wednesday = [];
            var thursday = [];
            var friday = [];
            var saturday = [];
            var sunday = [];

            for (var i = 0; i < alldata.length; i++) {
              //console.log(alldata[i] , '-----------');
              if (alldata[i].day == "Mon") {
                monday.push(alldata[i]);
              }

              if (alldata[i].day == "Tue") {
                tuesday.push(alldata[i]);
              }

              if (alldata[i].day == "Wed") {
                wednesday.push(alldata[i]);
              }

              if (alldata[i].day == "Thu") {
                thursday.push(alldata[i]);
              }

              if (alldata[i].day == "Fri") {
                friday.push(alldata[i]);
              }

              if (alldata[i].day == "Sat") {
                saturday.push(alldata[i]);
              }

              if (alldata[i].day == "Sun") {
                sunday.push(alldata[i]);
              }
            }

            var sumfq1 = 0;
            var sumbeh1 = 0;
            var sumpac1 = 0;
            console.log(monday.length, 'length');

            for (var i = 0; i < monday.length; i++) {
              // console.log("aaaaaaaaaaaaa",monday.length);
              //console.log(monday[i].fq,'sdsdsd');
              var Mon = {
                fq: sumfq1 += monday[i].fq / monday.length,
                beh: sumbeh1 += monday[i].beh / monday.length,
                pac: sumpac1 += monday[i].pac / monday.length
              };
            }

            var sumfq2 = 0;
            var sumbeh2 = 0;
            var sumpac2 = 0;

            for (var i = 0; i < tuesday.length; i++) {
              var Tue = {
                fq: sumfq2 += tuesday[i].fq / tuesday.length,
                beh: sumbeh2 += tuesday[i].beh / tuesday.length,
                pac: sumpac2 += tuesday[i].pac / tuesday.length
              };
            }

            var sumfq3 = 0;
            var sumbeh3 = 0;
            var sumpac3 = 0;

            for (var i = 0; i < wednesday.length; i++) {
              var Wed = {
                fq: sumfq3 += wednesday[i].fq / wednesday.length,
                beh: sumbeh3 += wednesday[i].beh / wednesday.length,
                pac: sumpac3 += wednesday[i].pac / wednesday.length
              };
            }

            var sumfq4 = 0;
            var sumbeh4 = 0;
            var sumpac4 = 0;

            for (var i = 0; i < thursday.length; i++) {
              var Thu = {
                fq: sumfq4 += thursday[i].fq / thursday.length,
                beh: sumbeh4 += thursday[i].beh / thursday.length,
                pac: sumpac4 += thursday[i].pac / thursday.length
              };
            }

            var sumfq5 = 0;
            var sumbeh5 = 0;
            var sumpac5 = 0;

            for (var i = 0; i < friday.length; i++) {
              var Fri = {
                fq: sumfq5 += friday[i].fq / friday.length,
                beh: sumbeh5 += friday[i].beh / friday.length,
                pac: sumpac5 += friday[i].pac / friday.length
              };
            }

            var sumfq6 = 0;
            var sumbeh6 = 0;
            var sumpac6 = 0;

            for (var i = 0; i < saturday.length; i++) {
              var Sat = {
                fq: sumfq6 += saturday[i].fq / saturday.length,
                beh: sumbeh6 += saturday[i].beh / saturday.length,
                pac: sumpac6 += saturday[i].pac / saturday.length
              };
            }

            var sumfq7 = 0;
            var sumbeh7 = 0;
            var sumpac7 = 0;

            for (var i = 0; i < sunday.length; i++) {
              var Sun = {
                fq: sumfq7 += sunday[i].fq / sunday.length,
                beh: sumbeh7 += sunday[i].beh / sunday.length,
                pac: sumpac7 += sunday[i].pac / sunday.length
              };
            }

            return {
              Mon: Mon,
              Tue: Tue,
              Wed: Wed,
              Thu: Thu,
              Fri: Fri,
              Sat: Sat,
              Sun: Sun
            };
          }
        }, {
          key: "graph_weekly_food_quality",
          value: function graph_weekly_food_quality() {
            //.log('yes inside column chart')
            //  console.log('this is dataatta',this.foodweeklydata);
            var alldataarr = [];
            var weekdata = this.foodweeklydata.weekdata;

            for (var i = 0; i < weekdata.length; i++) {
              var date = new Date(weekdata[i].created_at).toDateString();
              var day = date.split(" "); //console.log('day',day)

              var alldata = {
                day: day[0],
                fq: weekdata[i].food_quality,
                beh: weekdata[i].behaviour,
                pac: weekdata[i].packaging
              };
              alldataarr.push(alldata);
            }

            var getall = this.checkday(alldataarr); //console.log('test',getall.Mon);

            if (getall.Mon == undefined) {
              getall.Mon = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (getall.Tue == undefined) {
              getall.Tue = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (getall.Wed == undefined) {
              getall.Wed = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (getall.Thu == undefined) {
              getall.Thu = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (getall.Fri == undefined) {
              getall.Fri = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (getall.Sat == undefined) {
              getall.Sat = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (getall.Sun == undefined) {
              getall.Sun = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            var Average = {
              Mon: getall.Mon.beh + getall.Mon.pac + getall.Mon.fq,
              Tue: getall.Tue.beh + getall.Tue.pac + getall.Tue.fq,
              Wed: getall.Wed.beh + getall.Wed.pac + getall.Wed.fq,
              Thu: getall.Thu.beh + getall.Thu.pac + getall.Thu.fq,
              Fri: getall.Fri.beh + getall.Fri.pac + getall.Fri.fq,
              Sat: getall.Sat.beh + getall.Sat.pac + getall.Sat.fq,
              Sun: getall.Sun.beh + getall.Sun.pac + getall.Sun.fq
            }; //console.log("final data",getall);

            var Labels = [this.model.key_text33, this.model.key_text31, this.model.key_text30, this.model.key_text29];
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_7__["chart"]('food_quality', {
              chart: {
                type: 'column'
              },
              title: {
                text: this.model.key_text32
              },
              credits: {
                enabled: false
              },
              xAxis: {
                categories: [this.model.key_text36, this.model.key_text37, this.model.key_text38, this.model.key_text39, this.model.key_text40, this.model.key_text41, this.model.key_text42],
                crosshair: true
              },
              yAxis: {
                max: 3,
                min: 1,
                labels: {
                  formatter: function formatter() {
                    //console.log(this.value,'this.value')
                    return Labels[this.value];
                  }
                }
              },
              tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' + '<td style = "padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
              },
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0
                }
              },
              series: [{
                name: this.model.key_text26,
                data: [getall.Mon.fq, getall.Tue.fq, getall.Wed.fq, getall.Thu.fq, getall.Fri.fq, getall.Sat.fq, getall.Sun.fq],
                type: undefined,
                color: '#15c9bc'
              }, {
                name: this.model.key_text27,
                data: [getall.Mon.pac, getall.Tue.pac, getall.Wed.pac, getall.Thu.pac, getall.Fri.pac, getall.Sat.pac, getall.Sun.pac],
                type: undefined,
                color: '#31a39b'
              }, {
                name: this.model.key_text28,
                data: [getall.Mon.beh, getall.Tue.beh, getall.Wed.beh, getall.Thu.beh, getall.Fri.beh, getall.Sat.beh, getall.Sun.beh],
                type: undefined,
                color: '#3c918b'
              }, {
                name: this.model.key_text35,
                data: [Average.Mon / 3, Average.Tue / 3, Average.Wed / 3, Average.Thu / 3, Average.Fri / 3, Average.Sat / 3, Average.Sun / 3],
                type: undefined,
                color: '#42726f'
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 1000);
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();

            if (dd < 10) {
              dd = '0' + dd;
            }

            if (mm < 10) {
              mm = '0' + mm;
            }

            date = {
              date: mm + '-' + dd + '-' + yyyy
            };
            return date;
          }
        }, {
          key: "getMonthData",
          value: function getMonthData() {
            var _this12 = this;

            var monthdata = this.foodweeklydata.monthdata;
            var result1 = [];
            var week4 = [];
            var week3 = [];
            var week2 = [];
            var week1 = [];
            var fulldate1 = [];

            for (var i = 0; i < 7; i++) {
              var d = new Date();
              d.setDate(d.getDate() - i);
              fulldate1.push(d);
              result1.push(this.formatDate(d));
            }

            var result2 = [];
            var fulldate2 = [];

            for (var j = 0; j < 7; j++) {
              var d1 = new Date();
              d1.setDate(d1.getDate() - 7);
              d1.setDate(d1.getDate() - j);
              fulldate2.push(d1);
              result2.push(this.formatDate(d1));
            } //console.log("week3",result2);


            var result3 = [];
            var fulldate3 = [];

            for (var k = 0; k < 7; k++) {
              var d2 = new Date();
              d2.setDate(d2.getDate() - 14);
              d2.setDate(d2.getDate() - k);
              fulldate3.push(d2);
              result3.push(this.formatDate(d2));
            } //console.log("week2",result3);


            var result4 = [];
            var fulldate4 = [];

            for (var l = 0; l < 7; l++) {
              var d3 = new Date();
              d3.setDate(d3.getDate() - 21);
              d3.setDate(d3.getDate() - l);
              fulldate4.push(d3);
              result4.push(this.formatDate(d3));
            } //console.log("week1",result4);


            var _loop = function _loop() {
              var crdate = monthdata[c].created_at;
              var formater = new Date(crdate);

              var vdate = _this12.formatDate(formater);

              var resu = result1.find(function (_ref) {
                var date = _ref.date;
                return date === vdate.date;
              });

              if (resu !== undefined) {
                week4.push(monthdata[c]);
              }

              var resu1 = result2.find(function (_ref2) {
                var date = _ref2.date;
                return date === vdate.date;
              });

              if (resu1 !== undefined) {
                week3.push(monthdata[c]);
              }

              var resu2 = result3.find(function (_ref3) {
                var date = _ref3.date;
                return date === vdate.date;
              });

              if (resu2 !== undefined) {
                week2.push(monthdata[c]);
              }

              var resu3 = result4.find(function (_ref4) {
                var date = _ref4.date;
                return date === vdate.date;
              });

              if (resu3 !== undefined) {
                week1.push(monthdata[c]);
              }
            };

            for (var c = 0; c < monthdata.length; c++) {
              _loop();
            }

            var sumfq1 = 0;
            var sumbeh1 = 0;
            var sumpac1 = 0;

            for (var i = 0; i < week4.length; i++) {
              var sumweek4 = {
                fq: sumfq1 += week4[i].food_quality / week4.length,
                beh: sumbeh1 += week4[i].behaviour / week4.length,
                pac: sumpac1 += week4[i].packaging / week4.length
              };
            }

            var sumfq2 = 0;
            var sumbeh2 = 0;
            var sumpac2 = 0;

            for (var i = 0; i < week3.length; i++) {
              var sumweek3 = {
                fq: sumfq2 += week3[i].food_quality / week3.length,
                beh: sumbeh2 += week3[i].behaviour / week3.length,
                pac: sumpac2 += week3[i].packaging / week3.length
              };
            }

            var sumfq3 = 0;
            var sumbeh3 = 0;
            var sumpac3 = 0;

            for (var i = 0; i < week2.length; i++) {
              var sumweek2 = {
                fq: sumfq3 += week2[i].food_quality / week2.length,
                beh: sumbeh3 += week2[i].behaviour / week2.length,
                pac: sumpac3 += week2[i].packaging / week2.length
              };
            }

            var sumfq4 = 0;
            var sumbeh4 = 0;
            var sumpac4 = 0;

            for (var i = 0; i < week1.length; i++) {
              var sumweek1 = {
                fq: sumfq4 += week1[i].food_quality / week1.length,
                beh: sumbeh4 += week1[i].behaviour / week1.length,
                pac: sumpac4 += week1[i].packaging / week1.length
              };
            }

            return {
              weekr4: sumweek4,
              weekr3: sumweek3,
              weekr2: sumweek2,
              weekr1: sumweek1
            };
          }
        }, {
          key: "graph_monthly_food_quality",
          value: function graph_monthly_food_quality() {
            var monthdata = this.getMonthData(); //console.log("month final data",monthdata);

            if (monthdata.weekr4 == undefined) {
              monthdata.weekr4 = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (monthdata.weekr3 == undefined) {
              monthdata.weekr3 = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (monthdata.weekr2 == undefined) {
              monthdata.weekr2 = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            if (monthdata.weekr1 == undefined) {
              monthdata.weekr1 = {
                fq: 0,
                pac: 0,
                beh: 0
              };
            }

            var Average = {
              week4: monthdata.weekr4.beh + monthdata.weekr4.pac + monthdata.weekr4.fq,
              week3: monthdata.weekr3.beh + monthdata.weekr3.pac + monthdata.weekr3.fq,
              week2: monthdata.weekr2.beh + monthdata.weekr2.pac + monthdata.weekr2.fq,
              week1: monthdata.weekr1.beh + monthdata.weekr1.pac + monthdata.weekr1.fq
            };
            var Labels = [this.model.key_text33, this.model.key_text31, this.model.key_text30, this.model.key_text29];
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_7__["chart"]('quality', {
              chart: {
                type: 'column'
              },
              title: {
                text: this.model.key_text34
              },
              credits: {
                enabled: false
              },
              xAxis: {
                categories: [this.model.key_text43 + '1', this.model.key_text43 + '2', this.model.key_text43 + '3', this.model.key_text43 + '4'],
                crosshair: true
              },
              yAxis: {
                max: 3,
                min: 1,
                labels: {
                  formatter: function formatter() {
                    return Labels[this.value];
                  }
                }
              },
              tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' + '<td style = "padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
              },
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0
                }
              },
              series: [{
                name: this.model.key_text26,
                data: [monthdata.weekr1.fq, monthdata.weekr2.fq, monthdata.weekr3.fq, monthdata.weekr4.fq],
                type: undefined,
                color: '#15c9bc'
              }, {
                name: this.model.key_text27,
                data: [monthdata.weekr1.pac, monthdata.weekr2.pac, monthdata.weekr3.pac, monthdata.weekr4.pac],
                type: undefined,
                color: '#31a39b'
              }, {
                name: this.model.key_text28,
                data: [monthdata.weekr1.beh, monthdata.weekr2.beh, monthdata.weekr3.beh, monthdata.weekr4.beh],
                type: undefined,
                color: '#3c918b'
              }, {
                name: this.model.key_text35,
                data: [Average.week1 / 3, Average.week2 / 3, Average.week3 / 3, Average.week4 / 3],
                type: undefined,
                color: '#42726f'
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 1000);
          }
        }, {
          key: "state",
          value: function state() {
            $('#activity_normal_content').css('display', 'none');
            $('#activity_normal_spinner').css('display', 'block');

            if ($('input[name=switch-one]:checked', '#myForm').val() == "no") {
              $('#u_week_blessing_div').css('display', 'none');
              $('#u_month_blessing_div').css('display', 'block');
              this.graphstate = 'month';
              this.monthly_donation_graph();
              this.monthly_pieChart();
            } else if ($('input[name=switch-one]:checked', '#myForm').val() == "yes") {
              $('#u_month_blessing_div').css('display', 'none');
              $('#u_week_blessing_div').css('display', 'block');
              this.graphstate = 'week';
              this.weekly_donation_graph();
              this.weekly_pieChart();
            }
          }
        }, {
          key: "weekly_pieChart",
          value: function weekly_pieChart() {
            var _this13 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            var curr = new Date();
            var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
            var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
            var startDate = this.format(firstday, 'yyyy-MM-dd');
            var endDate = this.format(lastday, 'yyyy-MM-dd');
            var data = JSON.stringify({
              'startDate': startDate,
              'endDate': endDate,
              'user_id': this.model.user_id
            });
            this.fetch.food_quality_weekly(data).subscribe(function (res) {
              _this13.foodweeklydata = res;
              _this13.model.excellent_cnt = res['excellent']['cnt'];
              _this13.model.good_cnt = res.good.cnt;
              _this13.model.bad_cnt = res.bad.cnt;

              if (_this13.model.excellent_cnt > _this13.model.good_cnt && _this13.model.excellent_cnt > _this13.model.bad_cnt) {
                _this13.model.quality_rating = _this13.model.key_text29;
              } else if (_this13.model.good_cnt > _this13.model.excellent_cnt && _this13.model.good_cnt > _this13.model.bad_cnt) {
                _this13.model.quality_rating = _this13.model.key_text30;
              } else if (_this13.model.bad_cnt > _this13.model.excellent_cnt && _this13.model.bad_cnt > _this13.model.good_cnt) {
                _this13.model.quality_rating = _this13.model.key_text31;
              }

              _this13.graph_weekly_food_quality();

              _this13.graph_monthly_food_quality(); //this.pie_chart_food_quality(this.model.excellent_cnt, this.model.good_cnt, this.model.bad_cnt);

            });
            this.fetch.weekly_packaging(this.model.user_id).subscribe(function (res) {
              _this13.model.excellent_cnt = res['excellent']['cnt'];
              _this13.model.good_cnt = res.good.cnt;
              _this13.model.bad_cnt = res.bad.cnt;

              if (_this13.model.excellent_cnt > _this13.model.good_cnt && _this13.model.excellent_cnt > _this13.model.bad_cnt) {
                _this13.model.packaging_rating = _this13.model.key_text29;
              } else if (_this13.model.good_cnt > _this13.model.excellent_cnt && _this13.model.good_cnt > _this13.model.bad_cnt) {
                _this13.model.packaging_rating = _this13.model.key_text30;
              } else if (_this13.model.bad_cnt > _this13.model.excellent_cnt && _this13.model.bad_cnt > _this13.model.good_cnt) {
                _this13.model.packaging_rating = _this13.model.key_text31;
              } //this.packagingPieChart(this.model.excellent_cnt, this.model.good_cnt, this.model.bad_cnt);

            });
            this.fetch.weekly_behaviour(this.model.user_id).subscribe(function (res) {
              _this13.model.excellent_cnt = res['excellent']['cnt'];
              _this13.model.good_cnt = res.good.cnt;
              _this13.model.bad_cnt = res.bad.cnt;

              if (_this13.model.excellent_cnt > _this13.model.good_cnt && _this13.model.excellent_cnt > _this13.model.bad_cnt) {
                _this13.model.behaviour_rating = _this13.model.key_text29;
              } else if (_this13.model.good_cnt > _this13.model.excellent_cnt && _this13.model.good_cnt > _this13.model.bad_cnt) {
                _this13.model.behaviour_rating = _this13.model.key_text30;
              } else if (_this13.model.bad_cnt > _this13.model.excellent_cnt && _this13.model.bad_cnt > _this13.model.good_cnt) {
                _this13.model.behaviour_rating = _this13.model.key_text31;
              } //	this.behaviourPieChart(this.model.excellent_cnt, this.model.good_cnt, this.model.bad_cnt);

            });
          }
        }, {
          key: "monthly_pieChart",
          value: function monthly_pieChart() {
            var _this14 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.fetch.monthly_food_quality(this.model.user_id).subscribe(function (res) {
              _this14.model.excellent_cnt = res['excellent']['cnt'];
              _this14.model.good_cnt = res.good.cnt;
              _this14.model.bad_cnt = res.bad.cnt;

              if (_this14.model.excellent_cnt > _this14.model.good_cnt && _this14.model.excellent_cnt > _this14.model.bad_cnt) {
                _this14.model.quality_rating = _this14.model.key_text29;
              } else if (_this14.model.good_cnt > _this14.model.excellent_cnt && _this14.model.good_cnt > _this14.model.bad_cnt) {
                _this14.model.quality_rating = _this14.model.key_text30;
              } else if (_this14.model.bad_cnt > _this14.model.excellent_cnt && _this14.model.bad_cnt > _this14.model.good_cnt) {
                _this14.model.quality_rating = _this14.model.key_text31;
              }

              _this14.graph_weekly_food_quality();

              _this14.graph_monthly_food_quality(); //	this.pie_chart_food_quality(this.model.excellent_cnt, this.model.good_cnt, this.model.bad_cnt);

            });
            this.fetch.monthly_packaging(this.model.user_id).subscribe(function (res) {
              _this14.model.excellent_cnt = res['excellent']['cnt'];
              _this14.model.good_cnt = res.good.cnt;
              _this14.model.bad_cnt = res.bad.cnt;

              if (_this14.model.excellent_cnt > _this14.model.good_cnt && _this14.model.excellent_cnt > _this14.model.bad_cnt) {
                _this14.model.packaging_rating = _this14.model.key_text29;
              } else if (_this14.model.good_cnt > _this14.model.excellent_cnt && _this14.model.good_cnt > _this14.model.bad_cnt) {
                _this14.model.packaging_rating = _this14.model.key_text30;
              } else if (_this14.model.bad_cnt > _this14.model.excellent_cnt && _this14.model.bad_cnt > _this14.model.good_cnt) {
                _this14.model.packaging_rating = _this14.model.key_text31;
              } //this.packagingPieChart(this.model.excellent_cnt, this.model.good_cnt, this.model.bad_cnt);

            });
            this.fetch.monthly_behaviour(this.model.user_id).subscribe(function (res) {
              _this14.model.excellent_cnt = res['excellent']['cnt'];
              _this14.model.good_cnt = res.good.cnt;
              _this14.model.bad_cnt = res.bad.cnt;

              if (_this14.model.excellent_cnt > _this14.model.good_cnt && _this14.model.excellent_cnt > _this14.model.bad_cnt) {
                _this14.model.behaviour_rating = _this14.model.key_text29;
              } else if (_this14.model.good_cnt > _this14.model.excellent_cnt && _this14.model.good_cnt > _this14.model.bad_cnt) {
                _this14.model.behaviour_rating = _this14.model.key_text30;
              } else if (_this14.model.bad_cnt > _this14.model.excellent_cnt && _this14.model.bad_cnt > _this14.model.good_cnt) {
                _this14.model.behaviour_rating = _this14.model.key_text31;
              } //	this.behaviourPieChart(this.model.excellent_cnt, this.model.good_cnt, this.model.bad_cnt);

            });
          }
        }]);
      }();

      ActivityNormalPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_9__["BrowserTab"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]
        }];
      };

      ActivityNormalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activity-normal',
        template: _raw_loader_activity_normal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]],
        styles: [_activity_normal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ActivityNormalPage);
      /***/
    },

    /***/
    "vYF8":
    /*!***********************************************************!*\
      !*** ./src/app/activity-normal/activity-normal.module.ts ***!
      \***********************************************************/

    /*! exports provided: ActivityNormalPageModule */

    /***/
    function vYF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityNormalPageModule", function () {
        return ActivityNormalPageModule;
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


      var _activity_normal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./activity-normal-routing.module */
      "YeSl");
      /* harmony import */


      var _activity_normal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./activity-normal.page */
      "ntK3");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");
      /* harmony import */


      var _footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../footer/footer.module */
      "PpLr");

      var ActivityNormalPageModule = /*#__PURE__*/_createClass(function ActivityNormalPageModule() {
        _classCallCheck(this, ActivityNormalPageModule);
      });

      ActivityNormalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_activity_normal_page__WEBPACK_IMPORTED_MODULE_6__["ActivityNormalPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _activity_normal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityNormalPageRoutingModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterPageModule"]]
      })], ActivityNormalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=activity-normal-activity-normal-module-es5.js.map