(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-food-nearest-donors-two-get-food-nearest-donors-two-module"], {
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
    "3r+M":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n  \n    <ion-buttons slot=\"end\" (click)=\"openModalNotification()\">\n      <span *ngIf=\"notification.length>0\" style=\"position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;\n        right: 3px;\n        text-align: center;\"></span>      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"map_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<app-captcha></app-captcha>\n<ion-content>\n  <div class=\"custom_map_design\">\n  <div class=\"ion-padding\" style=\"margin-left: 20px; padding: 5px !important;\">\n    <div class=\"map-icon\">\n      <img src=\"assets/images/location_black.svg\">\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12 address_size\">\n        {{model.colony_name}} \n        <!-- {{model.city}}, {{model.state}} <br>\n        {{model.postalCode}}, {{model.country}} -->\n      </div> \n    </div>\n  </div>\n  \n  <!-- <div class=\"map volunteer_location\">    \n    <img src=\"assets/images/map_volunteer.svg\">\n  </div>  -->\n  <div class=\"ion-padding\" style=\"margin-left: 20px;padding: 5px !important;\">\n    <div class=\"map-icon\">\n      <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12\">\n        Wearning a mask in some public spaces is required due to COVID - 19 \n      </div> \n    </div>\n  </div>\n  <div #map id=\"map\"></div>\n  <br>\n  <ion-row>\n    <ion-col size=\"12\">\n      <a class=\"size_15 medium direction\"  (click)=\"openMap()\"><ion-icon name=\"navigate-outline\"></ion-icon> {{model.key_text16}}</a> \n    </ion-col>\n  </ion-row>\n  \n  <br>\n  <div class=\"ion-padding theme_width\">  \n    \n    <ul class=\"size_15 medium\">\n      <li>{{model.food_type}} {{model.key_text13}} {{model.key_text14}} {{model.total_food_for}} {{model.key_text15}}</li>\n      \n      <br>\n      <li style=\"padding-right: 100px;\">{{model.key_text12}} - {{model.shop_name}}</li>      \n       <a class=\"size_15 medium call\" (click)=\"call()\">{{model.key_text17}}</a> \n       \n\t   \n    </ul>\n\n\n  </div>\n\n </div>\n  \n  </ion-content>\n  <ion-footer style=\"padding-top: 0px!important;\">\n    <div class=\"medium size_16\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_reject_btn new_btn_css\"  (click)=\"pickup_status(0)\">{{model.key_text10}}</button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_accept_btn new_btn_css\"  (click)=\"pickup_status(1)\">{{model.key_text11}}</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-footer>\n\n\n \n  ";
      /***/
    },

    /***/
    "K8Ou":
    /*!***********************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: GetFoodNearestDonorsTwoPageModule */

    /***/
    function K8Ou(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoPageModule", function () {
        return GetFoodNearestDonorsTwoPageModule;
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


      var _get_food_nearest_donors_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two-routing.module */
      "eANI");
      /* harmony import */


      var _get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two.page */
      "wAmT");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var GetFoodNearestDonorsTwoPageModule = /*#__PURE__*/_createClass(function GetFoodNearestDonorsTwoPageModule() {
        _classCallCheck(this, GetFoodNearestDonorsTwoPageModule);
      });

      GetFoodNearestDonorsTwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _get_food_nearest_donors_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetFoodNearestDonorsTwoPageRoutingModule"]],
        declarations: [_get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_6__["GetFoodNearestDonorsTwoPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], GetFoodNearestDonorsTwoPageModule);
      /***/
    },

    /***/
    "bYHX":
    /*!***********************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function bYHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 45%;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdldC1mb29kLW5lYXJlc3QtZG9ub3JzLXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0MsZUFBQTtBQUVEOztBQUFBO0VBQ0MsaUJBQUE7QUFHRCIsImZpbGUiOiJnZXQtZm9vZC1uZWFyZXN0LWRvbm9ycy10d28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NSU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcHBpbmVye1xuXHQtLWNvbG9yOiM0MTlCOTU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcGlubmVyX3Bvc2l0aW9ue1xuXHRtYXJnaW4tdG9wOjI1MHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "eANI":
    /*!*******************************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: GetFoodNearestDonorsTwoPageRoutingModule */

    /***/
    function eANI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoPageRoutingModule", function () {
        return GetFoodNearestDonorsTwoPageRoutingModule;
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


      var _get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two.page */
      "wAmT");

      var routes = [{
        path: '',
        component: _get_food_nearest_donors_two_page__WEBPACK_IMPORTED_MODULE_3__["GetFoodNearestDonorsTwoPage"]
      }];

      var GetFoodNearestDonorsTwoPageRoutingModule = /*#__PURE__*/_createClass(function GetFoodNearestDonorsTwoPageRoutingModule() {
        _classCallCheck(this, GetFoodNearestDonorsTwoPageRoutingModule);
      });

      GetFoodNearestDonorsTwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GetFoodNearestDonorsTwoPageRoutingModule);
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
            var _this = this;

            this.NotificationCount.data$.subscribe(function (newData) {
              _this.notificationCount = newData;
            });
            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this.notification = res['data'];
              _this.notifications_admin = res['notifications'];

              if (_this.notification.length != 0 || _this.notifications_admin.length != 0) {
                $('#black_spot').show();
                var notifCount = _this.notification.length + _this.notifications_admin.length;

                _this.NotificationCount.updateData(notifCount);
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
    "epfR":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function epfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content class=\"modal_content\">\n  <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  <br>\n  <div class=\"ion-padding\">   \n  \n    <div class=\"modal_inner\">\n      <div class=\"regular medium size_16\" style=\"border-bottom: 1px solid;\"><label>{{model.key_text2}} <span style=\"color:red\">*</span></label></div><br/>\n\n      <ion-radio-group (ionChange)=\"select_reason($event)\"> \n        <ion-item *ngFor=\"let x of reasons\" lines=\"none\" class=\"cancel_radio\">\n          <ion-label class=\"regular size_14\">{{ x.label }}</ion-label>\n          <ion-radio name=\"reason\" slot=\"start\" value=\"{{x.label}}\" (ionChange)=\"radioGroupChange($event)\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <!--<label *ngFor=\"let x of reasons\">\n        <input  name=\"reason\" type=\"radio\" value=\"{{x.label}}\"/>{{ x.label }}\n        <br/>\n      </label>-->\n\n      <div id=\"reason_msg\" style=\"color:red;display:none;\">Reason is required</div><br/>\n      <label>{{model.key_text3}}</label><br/>      \n      <div class=\"btn-group\">\n        <ion-textarea rows=\"4\" name=\"comments\" placeholder=\"\" class=\"custom_textarea\" id=\"comments\"></ion-textarea>\n      </div>      \n      \n    </div>\n  </div>\n</ion-content> \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"cancelDonation()\" *ngIf=\"!model.search\" class=\"app_btn\">{{model.key_text1}}</button>\n        <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>      \n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "hHBB":
    /*!*********************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.ts ***!
      \*********************************************************************/

    /*! exports provided: CancelAllotedfoodPage */

    /***/
    function hHBB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelAllotedfoodPage", function () {
        return CancelAllotedfoodPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cancel_allotedfood_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cancel-allotedfood.page.html */
      "epfR");
      /* harmony import */


      var _cancel_allotedfood_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cancel-allotedfood.page.scss */
      "m52P");
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

      var CancelAllotedfoodPage = /*#__PURE__*/function () {
        function CancelAllotedfoodPage(modalController, navParams, storage, fetch) {
          _classCallCheck(this, CancelAllotedfoodPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.storage = storage;
          this.fetch = fetch;
          this.model = {};
          this.reasons = [];
        }

        return _createClass(CancelAllotedfoodPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.model.search = false;
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.fetch.get_reasons(lang_code).subscribe(function (res) {
              res['data'].forEach(function (val, i) {
                _this2.reasons.push({
                  label: val['' + lang_code + '']
                });
              });
            });
            var res = this.storage.getScope();

            if (this.paramTitle == 'get_food') {
              var item1 = res.find(function (i) {
                return i.key_text === 'CANCEL_PICK_UP';
              });
              this.model.key_text1 = item1[lang_code];
            } else {
              var _item = res.find(function (i) {
                return i.key_text === 'CANCEL_DROP';
              });

              this.model.key_text1 = _item[lang_code];
            }

            var item2 = res.find(function (i) {
              return i.key_text === 'REASON_FOR_CANCELLATION';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'COMMENT';
            });
            this.model.key_text3 = item3[lang_code];
          }
        }, {
          key: "select_reason",
          value: function select_reason(value) {
            this.model.selected_reason = value.detail.value;
            ;
          }
        }, {
          key: "cancelDonation",
          value: function cancelDonation() {
            var _this3 = this;

            this.model.search = true;
            var reason = this.model.selected_reason;

            if (!reason) {
              $('#reason_msg').show();
              this.model.search = false;
            } else {
              $('#reason_msg').hide();
              var comment = $('#comments').val();
              var data = JSON.stringify({
                'id': this.id,
                'reason': reason,
                'comment': comment
              });

              if (this.type == "get_food") {
                this.fetch.get_food_cancel_alloted_request(data).subscribe(function (res) {
                  _this3.model.search = false;

                  _this3.closeModal(1);
                });
              } else {
                this.fetch.cancel_alloted_request(data).subscribe(function (res) {
                  _this3.model.search = false;

                  _this3.closeModal(1);
                });
              }
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal(isDone) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    onClosedData = isDone;
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

      CancelAllotedfoodPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }];
      };

      CancelAllotedfoodPage.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        paramTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CancelAllotedfoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cancel-allotedfood',
        template: _raw_loader_cancel_allotedfood_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cancel_allotedfood_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CancelAllotedfoodPage);
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
    "m52P":
    /*!***********************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function m52P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-radio-group ion-item {\n  margin-left: -19px;\n  margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYW5jZWwtYWxsb3RlZGZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6ImNhbmNlbC1hbGxvdGVkZm9vZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn0iXX0= */";
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
    "wAmT":
    /*!*********************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two/get-food-nearest-donors-two.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: GetFoodNearestDonorsTwoPage */

    /***/
    function wAmT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoPage", function () {
        return GetFoodNearestDonorsTwoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_get_food_nearest_donors_two_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./get-food-nearest-donors-two.page.html */
      "3r+M");
      /* harmony import */


      var _get_food_nearest_donors_two_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two.page.scss */
      "bYHX");
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


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../modal/cancel-allotedfood/cancel-allotedfood.page */
      "hHBB");
      /* harmony import */


      var _modal_success_deliver_modal_success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../modal/success-deliver-modal/success-deliver-modal.page */
      "br8U");
      /* harmony import */


      var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/browser-tab/ngx */
      "ORb9");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var GetFoodNearestDonorsTwoPage = /*#__PURE__*/function () {
        function GetFoodNearestDonorsTwoPage(modalController, http, route, router, fetch, storage, geolocation, alertCtrl, browserTab, callNumber, platform) {
          _classCallCheck(this, GetFoodNearestDonorsTwoPage);

          this.modalController = modalController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.geolocation = geolocation;
          this.alertCtrl = alertCtrl;
          this.browserTab = browserTab;
          this.callNumber = callNumber;
          this.platform = platform;
          this.model = {};
          this.notification = [];
          this.directionsService = new google.maps.DirectionsService();
          this.directionsDisplay = new google.maps.DirectionsRenderer();
          this.directions = [];
          this.polylines = [];
        }

        return _createClass(GetFoodNearestDonorsTwoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this4 = this;

            $("#map_location_spinner").show();
            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            var infowindow = new google.maps.InfoWindow();
            var renderer = new google.maps.DirectionsRenderer({
              suppressPolylines: true,
              infoWindow: infowindow
            });
            this.model.latitude = '';
            this.model.longitude = '';
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            var food_id = this.route.snapshot.params['id'];
            var r_lat = this.route.snapshot.params['lat'];
            var r_lon = this.route.snapshot.params['lon'];
            this.model.r_id = this.route.snapshot.params['r_id'];
            this.model.d_food_type = this.route.snapshot.params['food_type'];
            this.model.getfood_id = this.route.snapshot.params['getfoodid'];

            if (this.model.d_food_type == 1 || this.model.d_food_type == 3) {
              this.model.food_type = 'Veg.';
            } else if (this.model.d_food_type == 2) {
              this.model.food_type = 'Non-Veg.';
            }

            this.l1 = r_lat;
            this.l2 = r_lon;
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'DONOR_NAME';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'CANCEL_PICK_UP';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'FOOD_PICKED_UP';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'CANCEL_FOOD_REQUEST';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'WANT_FOOD';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'DONT_WANT_FOOD';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'CANCEL_DROP';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'FOOD_DROPPED';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'SHOP_NAME1';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'FOOD';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'REQUESTED_FOR';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'PERSON';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'DIRECTION';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'CALL';
            });
            this.model.key_text17 = item17[lang_code]; //});

            var mode = this.route.snapshot.params['mode'];
            this.fetch.get_volunteer_detail(this.model.getfood_id).subscribe(function (res) {
              console.log(res.data);
              _this4.model.colony_name = res.data.colony_name;
              _this4.model.city = res.data.city;
              _this4.model.state = res.data.state;
              _this4.model.country = res.data.country;
              _this4.model.postalCode = res.data.postalCode;
              var no_of_person = localStorage.getItem('temp_total_food');
              _this4.model.total_food_for = no_of_person;
              _this4.model.username = res.data.username; //this.model.latitude = res.data.latitude;
              //this.model.longitude = res.data.longitude;

              _this4.model.donate_food_id = res.data.donate_food_id; //console.log(this.model.food_data);

              _this4.model.donar_id = res.data.donor_id;
              _this4.model.shop_name = res.data.shop_stall_name;
              var donar = JSON.stringify({
                'id': res.data.app_user_id
              });

              _this4.fetch.profile(donar).subscribe(function (res) {
                _this4.model.mobile_number = res['mobile_no'];
              });

              var receiver = JSON.stringify({
                'id': _this4.model.user_id
              });

              _this4.fetch.profile(receiver).subscribe(function (res) {
                _this4.model.loged_in_user = res['username'];
              });

              _this4.fetch.get_donate_food(food_id).subscribe(function (f_d) {
                if (f_d['success'] == true) {
                  _this4.model.latitude = f_d.data.don_lat;
                  _this4.model.longitude = f_d.data.don_lng;
                  console.log('my', _this4.model.latitude);
                  console.log('my', _this4.model.longitude);

                  if (_this4.model.latitude != '' && _this4.model.longitude != '') {
                    $("#map_location_spinner").hide();
                    console.log('receiver lat' + r_lat);
                    console.log('receiver lat' + r_lon);
                    console.log('donor lat' + _this4.model.latitude);
                    console.log('donor long' + _this4.model.longitude);

                    _this4.geolocation.getCurrentPosition().then(function (resp) {
                      //console.log(res.data.latitude);
                      //console.log(res.data.longitude);
                      var latLng = new google.maps.LatLng(_this4.model.latitude, _this4.model.longitude);
                      var mapOptions = {
                        center: latLng,
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                      };
                      _this4.map = new google.maps.Map(_this4.mapElement.nativeElement, mapOptions);
                      var directionsService = new google.maps.DirectionsService();
                      var directionsDisplay = new google.maps.DirectionsRenderer();
                      directionsDisplay.setMap(_this4.map); //directionsDisplay.setPanel(this.directionsPanel.nativeElement);

                      directionsService.route({
                        origin: r_lat + ", " + r_lon,
                        destination: _this4.model.latitude + ", " + _this4.model.longitude,
                        travelMode: google.maps.TravelMode[mode],
                        provideRouteAlternatives: true
                      }, function (res, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                          console.log(res);
                          renderer.setDirections(res);
                          renderer.setMap(_this4.map);

                          for (var i = 0; i < _this4.polylines.length; i++) {
                            _this4.polylines[i].setMap(null);
                          }

                          for (var i = 0; i < res.routes.length; i++) {
                            var fastest = Number.MAX_VALUE,
                                shortest = Number.MAX_VALUE;
                            res.routes.forEach(function (rou, index) {
                              console.log("distance of route " + index + ": ", rou.legs[0].distance.value);
                              console.log("duration of route " + index + ": ", rou.legs[0].duration.value);
                              if (rou.legs[0].distance.value < shortest) shortest = rou.legs[0].distance.value;
                              if (rou.legs[0].duration.value < fastest) fastest = rou.legs[0].duration.value;
                            });
                            var polylineOptions = {
                              strokeColor: res.routes[i].legs[0].duration.value == fastest ? "#22A7F0" : res.routes[i].legs[0].distance.value == shortest ? "#585858" : "#585858",
                              strokeOpacity: res.routes[i].legs[0].duration.value == fastest ? 0.8 : res.routes[i].legs[0].distance.value == shortest ? 0.9 : 0.5,
                              strokeWeight: res.routes[i].legs[0].duration.value == fastest ? 9 : res.routes[i].legs[0].distance.value == shortest ? 8 : 3
                            };

                            _this4.renderDirectionsPolylines(res.routes[i], polylineOptions);
                          }
                        } else {
                          console.warn(status);
                        }
                      });
                    });
                  }
                }
              });
            });
          }
        }, {
          key: "renderDirectionsPolylines",
          value: function renderDirectionsPolylines(response, polylineOptions) {
            console.log(response);
            var infowindow = new google.maps.InfoWindow();
            var legs = response.legs;

            for (var i = 0; i < legs.length; i++) {
              var steps = legs[i].steps;

              for (var j = 0; j < steps.length; j++) {
                var nextSegment = steps[j].path;
                var stepPolyline = new google.maps.Polyline(polylineOptions);

                for (var k = 0; k < nextSegment.length; k++) {
                  stepPolyline.getPath().push(nextSegment[k]);
                }

                this.polylines.push(stepPolyline);
                stepPolyline.setMap(this.map); // route click listeners, different one on each step

                /* infowindow2.setContent(response.legs[0].duration.text);
                var step = 6;
                infowindow2.setPosition(response.legs[0].steps[step].end_location);
                infowindow2.open(this.map); */

                google.maps.event.addListener(stepPolyline, 'click', function (evt) {
                  console.log(response.legs[0].duration.text);
                  infowindow.setContent(response.legs[0].duration.text);
                  infowindow.setPosition(evt.latLng);
                  infowindow.open(this.map);
                });
              }
            }
          }
        }, {
          key: "pickup_status",
          value: function pickup_status(val) {
            var _this5 = this;

            //console.log(val);
            if (val == 1) {
              var data = JSON.stringify({
                'receiver_id': this.model.r_id,
                'donor_id': this.model.donar_id,
                'getFood_id': this.model.getfood_id
              });
              this.fetch.pickup_food(data).subscribe(function (res) {
                //console.log(res);
                if (res.success == true) {
                  localStorage.removeItem('receiver_food_type');
                  localStorage.removeItem('set_confirm_location_route');
                  localStorage.removeItem('receiver_location');
                  localStorage.removeItem('food_for_no_of_person');

                  _this5.pickupRequestSuccessModal(res.data, _this5.model.getfood_id); //this.router.navigate(['/feedback-form',res.data,this.model.getfood_id]);

                }
              });
            } else {
              // this.presentConfirm();
              this.cancelAllotedRequest(this.model.getfood_id);
              /* localStorage.removeItem('receiver_food_type');
              localStorage.removeItem('set_confirm_location_route');
              localStorage.removeItem('receiver_location');
              localStorage.removeItem('food_for_no_of_person');
              this.router.navigate(['/home']); */
            }
          }
        }, {
          key: "call",
          value: function call() {
            var _this6 = this;

            var data = JSON.stringify({
              'caller_id': this.model.user_id,
              'callee_mobile_no': this.model.mobile_number
            });
            $('#add_location_spinner').show();
            this.fetch.add_call_detail(data).subscribe(function (res) {
              _this6.callNumber.callNumber(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].phone_no, true).then(function (res) {
                $('#add_location_spinner').show();
                console.log('Launched dialer!', res);
              })["catch"](function (err) {
                return console.log('Error launching dialer', err);
              });
            });
          }
        }, {
          key: "cancelAllotedRequest",
          value: function cancelAllotedRequest(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this7 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_10__["CancelAllotedfoodPage"],
                      cssClass: 'custom_filter_modal cancel_allot_food_popup',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title",
                        "id": id,
                        "type": 'donate_food'
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this7.dataReturned = dataReturned.data;

                        if (_this7.dataReturned == 1) {
                          // this.ngOnInit();
                          _this7.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                          var no_of_person = localStorage.getItem('temp_total_food');
                          var food_id = _this7.route.snapshot.params['id'];
                          var data = JSON.stringify({
                            'food_id': food_id,
                            'logged_in_user': _this7.model.loged_in_user,
                            'no_of_person': no_of_person,
                            'app_user_id': _this7.model.user_id,
                            'food_type': _this7.model.d_food_type,
                            'notification_type': 3,
                            'to': _this7.model.donar_id,
                            'from': _this7.model.user_id,
                            'getFoodId': _this7.model.getfood_id
                          }); //console.log(data);

                          _this7.fetch.notify_donar_donate(data).subscribe(function (res) {
                            _this7.router.navigate(['/home']);
                          });
                        } //alert('Modal Sent Data :'+ dataReturned);

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
          key: "pickupRequestSuccessModal",
          value: function pickupRequestSuccessModal(data, id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _modal_success_deliver_modal_success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_11__["SuccessDeliverModalPage"],
                      cssClass: 'custom_filter_modal cancel_allot_food_popup',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title",
                        "id": id,
                        "data": data
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {//alert('Modal Sent Data :'+ dataReturned);
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
          key: "presentConfirm",
          value: function presentConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this8 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      cssClass: 'my-custom-class',
                      header: this.model.key_text7,
                      buttons: [{
                        text: this.model.key_text9,
                        handler: function handler() {
                          _this8.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                          var no_of_person = localStorage.getItem('temp_total_food');
                          var food_id = _this8.route.snapshot.params['id'];
                          var data = JSON.stringify({
                            'food_id': food_id,
                            'logged_in_user': _this8.model.loged_in_user,
                            'no_of_person': no_of_person,
                            'app_user_id': _this8.model.user_id,
                            'food_type': _this8.model.d_food_type,
                            'notification_type': 3,
                            'to': _this8.model.donar_id,
                            'from': _this8.model.user_id,
                            'getFoodId': _this8.model.getfood_id
                          }); //console.log(data);

                          _this8.fetch.notify_donar(data).subscribe(function (res) {
                            _this8.router.navigate(['/home']);
                          });
                        }
                      }, {
                        text: this.model.key_text8,
                        handler: function handler() {//localStorage.removeItem('receiver_food_type'); 
                          //localStorage.removeItem('set_confirm_location_route'); 
                          //localStorage.removeItem('receiver_location'); 
                          //localStorage.removeItem('food_for_no_of_person'); 
                          //this.router.navigate(['/home']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "openMap",
          value: function openMap() {
            var destination = this.l1 + ',' + this.l2; //window.open('maps://?q=' + destination, '_system');

            if (this.platform.is('ios')) {
              window.open('maps://?q=' + destination, '_system');
            } else {
              var label = encodeURI('My Label');
              window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
            }
          }
        }]);
      }();

      GetFoodNearestDonorsTwoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }, {
          type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_12__["BrowserTab"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }];
      };

      GetFoodNearestDonorsTwoPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      GetFoodNearestDonorsTwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-food-nearest-donors-two',
        template: _raw_loader_get_food_nearest_donors_two_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"]],
        styles: [_get_food_nearest_donors_two_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GetFoodNearestDonorsTwoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=get-food-nearest-donors-two-get-food-nearest-donors-two-module-es5.js.map