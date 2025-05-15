(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-food-nearest-donors-get-food-nearest-donors-module"], {
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
    "M/g4":
    /*!***************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors/get-food-nearest-donors.module.ts ***!
      \***************************************************************************/

    /*! exports provided: GetFoodNearestDonorsPageModule */

    /***/
    function M_g4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsPageModule", function () {
        return GetFoodNearestDonorsPageModule;
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


      var _get_food_nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./get-food-nearest-donors-routing.module */
      "suP1");
      /* harmony import */


      var _get_food_nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./get-food-nearest-donors.page */
      "nZD9");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var GetFoodNearestDonorsPageModule = /*#__PURE__*/_createClass(function GetFoodNearestDonorsPageModule() {
        _classCallCheck(this, GetFoodNearestDonorsPageModule);
      });

      GetFoodNearestDonorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _get_food_nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetFoodNearestDonorsPageRoutingModule"]],
        declarations: [_get_food_nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__["GetFoodNearestDonorsPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], GetFoodNearestDonorsPageModule);
      /***/
    },

    /***/
    "SXlU":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-food-nearest-donors/get-food-nearest-donors.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SXlU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n  \n    <ion-buttons slot=\"end\" (click)=\"openModalNotification()\">\n      <span *ngIf=\"notification.length>0\" style=\"position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;\n        right: 3px;\n        text-align: center;\"></span>      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<app-captcha></app-captcha>\n<ion-content>\n  <div class=\"custom_map_design\">\n  <div style=\"margin-left: 20px;\">\n    <div class=\"map-icon\">\n      <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12\">\n        Wearning a mask in some public spaces is required due to COVID - 19\n      </div> \n    </div>\n  </div> \n  <div class=\"ion-padding res_ion_padding\">\n    <div class=\"btn-group\" style=\"margin-top: -12px;\">\n      <button class=\"grey regular btn4\" id=\"btn_drive\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('DRIVING', 2)\">\n          <img src=\"assets/images/{{model.bike_image}}\">\n          <!--<img src=\"assets/images/icon_donor_bike_white.svg\">-->\n        </div>\n        <div class=\"grey size_12\" id=\"text_bike_time\">\n          {{model.drive_time}}\n        </div>\n      </button>\n\n      <button class=\"grey regular btn4\" id=\"btn_bus\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('TRANSIT', 2)\">\n          <img src=\"assets/images/{{model.bus_image}}\">\n          <!-- <img src=\"assets/images/icon_donor_bus_white.svg\"> -->\n        </div>\n        <div class=\"grey size_12\" id=\"text_bus_time\">\n          {{model.public_time}}\n        </div>\n      </button>\n\n      <button class=\"grey regular btn4\" id=\"btn_walk\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('WALKING', 2)\">\n          <img src=\"assets/images/{{model.walk_image}}\">\n          <!--<img src=\"assets/images/icon_donor_walk_white.svg\">-->\n        </div>\n        <div class=\"grey size_12\" id=\"text_walk_time\">\n         {{model.walk_time}}\n        </div>\n      </button>      \n      \n    </div>\n  </div>\n \n <!--  <div class=\"map volunteer_location\">    \n    <img src=\"assets/images/map_volunteer.svg\">\n  </div> -->\n  <div #map id=\"map\"></div>\n  \n  <div class=\"ion-padding res_custom_padding\">\n    <div class=\"\" >\n      <p class=\"regular medium size_14 green\">{{time_c}} <span class=\"grey size_14\">({{distance_c}})</span></p>\n    </div>\n    <div class=\"\"> \n        \n      <div class=\"regular size_14 green\">\n        {{model.key_text6}} {{model.username_r}}, {{model.food_name}} {{model.key_text7}} {{model.number_of_person}} {{model.key_text8}} {{model.key_text9}} <span class=\"size_14 regular red\">{{distance_c}}</span> {{model.key_text10}}.{{model.key_text11}} {{additional_msg_2}}.\n        <!-- {{model.donor_address.city}}, {{model.donor_address.state}} <br>\n        {{model.donor_address.postalCode}}, {{model.donor_address.country}} -->\n      </div>      \n      \n    </div>\n  </div>\n</div>\n  \n  </ion-content>\n  \n  <ion-footer style=\"padding-top: 0px!important;\">\n    <div class=\"medium size_16\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_reject_btn\" [ngClass]=\"disableButton || !mapLoaded ? 'light-shade' : '' \" [disabled]=\"disableButton || !mapLoaded\" (click)=\"rejectRequest()\">{{model.key_text1}}</button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_accept_btn\" [ngClass]=\"disableButton || !mapLoaded ? 'light-shade' : ''\" [disabled]=\"disableButton || !mapLoaded\"  (click)=\"acceptRequest()\">{{model.key_text5}}</button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- <div class=\"app_button\">\n      <a routerLink=\"/get-food-nearest-donors-two/{{model.add_id}}/{{model.r_lat}}/{{model.r_lon}}/{{model.r_id}}/{{model.mode}}/{{model.d_food_type}}/{{model.getFood_id}}\">\n        <button class=\"app_btn\">{{model.key_text1}}</button>\n      </a>\n    </div> -->\n\n  </ion-footer> \n\n\n \n  ";
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
    "mKPC":
    /*!***************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors/get-food-nearest-donors.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function mKPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 48%;\n}\n\n.light-shade {\n  opacity: 0.2;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdldC1mb29kLW5lYXJlc3QtZG9ub3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUFFSiIsImZpbGUiOiJnZXQtZm9vZC1uZWFyZXN0LWRvbm9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4JTtcbn1cbi5saWdodC1zaGFkZSB7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */";
      /***/
    },

    /***/
    "nZD9":
    /*!*************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors/get-food-nearest-donors.page.ts ***!
      \*************************************************************************/

    /*! exports provided: GetFoodNearestDonorsPage */

    /***/
    function nZD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsPage", function () {
        return GetFoodNearestDonorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_get_food_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./get-food-nearest-donors.page.html */
      "SXlU");
      /* harmony import */


      var _get_food_nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./get-food-nearest-donors.page.scss */
      "mKPC");
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


      var _modal_reject_get_food_request_reject_get_food_request_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../modal/reject-get-food-request/reject-get-food-request.page */
      "Fcc0");
      /* harmony import */


      var _error_msg_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../error-msg.service */
      "ElZd");

      var GetFoodNearestDonorsPage = /*#__PURE__*/function () {
        function GetFoodNearestDonorsPage(modalController, http, route, router, fetch, storage, geolocation, errorMsg) {
          _classCallCheck(this, GetFoodNearestDonorsPage);

          this.modalController = modalController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.geolocation = geolocation;
          this.errorMsg = errorMsg;
          this.model = {};
          this.directionsService = new google.maps.DirectionsService();
          this.directionsDisplay = new google.maps.DirectionsRenderer();
          this.directions = [];
          this.polylines = [];
          this.additional_msg_1 = "";
          this.additional_msg_2 = "";
          this.disableButton = false;
          this.mapLoaded = false;
        }

        return _createClass(GetFoodNearestDonorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.model.is_volunteer = 0;
            this.model.user_id = localStorage.getItem('user_id');
            this.no_of_person = localStorage.getItem('number_of_person');

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            this.fetch.get_registered_user_data(this.model.user_id).subscribe(function (res) {
              //console.log(res);
              _this2.model.username_r = res['username'];
            });
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'REJECT';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'ACCEPT';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'DEAR';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'GET_FOOD_MSG_1';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'PEOPLE';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'IN';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'GET_FOOD_MSG_2';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'GET_FOOD_MSG_3';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'FOOD';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'GET_FOOD_MSG_4';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'GET_FOOD_MSG_5';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'FOOD_ALREADY_DONATED_TO_OTHER_DONEES';
            });
            this.model.key_text17 = item17[lang_code]; //});

            var data = this.route.snapshot.params['data'];
            var data2 = this.route.snapshot.params['data2'];
            var r_lat = this.route.snapshot.params['r_lat'];
            var r_lon = this.route.snapshot.params['r_lon'];
            this.model.r_id = this.route.snapshot.params['r_id'];
            this.model.getFood_id = this.route.snapshot.params['id'];
            this.model.type_id = this.route.snapshot.params['t'];
            this.model.r_lat = r_lat;
            this.model.r_lon = r_lon;
            var x = JSON.parse(data);
            var rdata = JSON.parse(data2);
            this.model.rdata = rdata;
            this.model.total_data = x;
            this.model.colony_name = x.data.colony_name;
            this.model.add_id = x.data.id;
            this.model.d_lat = x.data.latitude;
            this.model.d_lon = x.data.longitude;
            this.model.d_food_type = x.data.food_type;
            this.model.no_of_food = x.data.total_food_for;

            if (this.model.d_food_type == 1) {
              this.model.food_name = this.model.key_text12 + ' ' + this.model.key_text14;
            }

            if (this.model.d_food_type == 2) {
              this.model.food_name = this.model.key_text13 + ' ' + this.model.key_text14;
              ;
            }

            if (this.model.d_food_type == 3) {
              this.model.food_name = this.model.key_text12 + '/' + this.model.key_text13 + ' ' + this.model.key_text14;
              ;
            }

            if (x.data.time_distance_walking.rows[0].elements[0].status == 'OK') {
              this.model.walk_time = x.data.time_distance_walking.rows[0].elements[0].duration.text;
              this.model.walk_distance = x.data.time_distance_walking.rows[0].elements[0].distance.text;
            } else {
              this.model.walk_time = 0;
              this.model.walk_distance = 0;
            }

            if (x.data.time_distance_driving.rows[0].elements[0].status == 'OK') {
              this.model.drive_time = x.data.time_distance_driving.rows[0].elements[0].duration.text;
              this.model.drive_distance = x.data.time_distance_driving.rows[0].elements[0].distance.text;
            } else {
              this.model.drive_time = 0;
              this.model.drive_distance = 0;
            }

            if (x.data.time_distance_transit.rows[0].elements[0].status == 'OK') {
              this.model.public_time = x.data.time_distance_transit.rows[0].elements[0].duration.text;
              this.model.public_distance = x.data.time_distance_transit.rows[0].elements[0].distance.text;
            } else {
              this.model.public_time = 0;
              this.model.public_distance = 0;
            }

            this.geolocation.getCurrentPosition().then(function (resp) {
              var latLng = new google.maps.LatLng(x.data.latitude, x.data.longitude);
              var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              _this2.map = new google.maps.Map(_this2.mapElement.nativeElement, mapOptions);
              _this2.model.directionsService = new google.maps.DirectionsService();
              _this2.model.directionsDisplay = new google.maps.DirectionsRenderer();

              _this2.model.directionsDisplay.setMap(_this2.map);

              _this2.map.addListener('idle', function () {
                _this2.mapLoaded = true;
              }); //directionsDisplay.setPanel(this.directionsPanel.nativeElement);


              _this2.calculate_route('WALKING');

              $("#btn_walk").addClass('active');
              $("#text_walk_time").removeClass('grey');
              $("#text_walk_time").css('color', 'white');
              _this2.model.walk_image = 'icon_donor_walk_white.svg';
              _this2.model.mode = 'WALKING';
            });

            if (this.no_of_person > this.model.total_data.data.total_food_for) {
              //this.additional_msg_1 = this.model.key_text16;
              this.additional_msg_2 = this.model.key_text15;
              this.model.number_of_person = this.model.total_data.data.total_food_for;
            } else if (this.no_of_person <= this.model.total_data.data.total_food_for) {
              this.additional_msg_1 = "";
              this.additional_msg_2 = "";
              this.model.number_of_person = this.no_of_person;
            }
          }
        }, {
          key: "calculate_route",
          value: function calculate_route(mode) {
            var _this3 = this;

            var infowindow = new google.maps.InfoWindow();
            var renderer = new google.maps.DirectionsRenderer({
              suppressPolylines: true,
              infoWindow: infowindow
            });

            if (this.directions && this.directions.length > 0) {
              for (var i = 0; i < this.directions.length; i++) this.directions[i].setMap(null);
            }

            this.directions = [];
            this.model.directionsDisplay.setMap(null);
            this.model.directionsDisplay.setDirections({
              routes: []
            });
            this.model.directionsDisplay.setMap(this.map);
            this.model.mode = mode;

            if (mode == 'WALKING') {
              this.time_c = this.model.walk_time;
              this.distance_c = this.model.walk_distance;
              $("#btn_walk").addClass('active');
              $("#btn_drive").removeClass('active');
              $("#btn_bus").removeClass('active');
              $("#text_walk_time").removeClass('grey');
              $("#text_bus_time").addClass('grey');
              $("#text_bike_time").addClass('grey');
              $("#text_walk_time").css('color', 'white');
              this.model.walk_image = 'icon_donor_walk_white.svg';
              this.model.bus_image = 'icon_donor_bus.svg';
              this.model.bike_image = 'icon_donor_bike.svg';
            } else if (mode == 'TRANSIT') {
              this.time_c = this.model.public_time;
              this.distance_c = this.model.public_distance;
              $("#btn_bus").addClass('active');
              $("#btn_drive").removeClass('active');
              $("#btn_walk").removeClass('active');
              $("#text_bus_time").removeClass('grey');
              $("#text_walk_time").addClass('grey');
              $("#text_bike_time").addClass('grey');
              $("#text_bus_time").css('color', 'white');
              this.model.bus_image = 'icon_donor_bus_white.svg';
              this.model.walk_image = 'icon_donor_walk.svg';
              this.model.bike_image = 'icon_donor_bike.svg';
            } else if (mode == 'DRIVING') {
              this.time_c = this.model.drive_time;
              this.distance_c = this.model.drive_distance;
              $("#btn_drive").addClass('active');
              $("#btn_bus").removeClass('active');
              $("#btn_walk").removeClass('active');
              $("#text_bike_time").removeClass('grey');
              $("#text_walk_time").addClass('grey');
              $("#text_bus_time").addClass('grey');
              $("#text_bike_time").css('color', 'white');
              this.model.bike_image = 'icon_donor_bike_white.svg';
              this.model.walk_image = 'icon_donor_walk.svg';
              this.model.bus_image = 'icon_donor_bus.svg';
            }
            /*const s_latlng = {
                lat : 23.1827,
                lng : 75.7682
            }*/


            this.model.directionsService.route({
              origin: this.model.r_lat + ", " + this.model.r_lon,
              destination: this.model.d_lat + ", " + this.model.d_lon,
              travelMode: google.maps.TravelMode[mode],
              provideRouteAlternatives: true
            }, function (res, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                renderer.setDirections(res);
                renderer.setMap(_this3.map);

                for (var i = 0; i < _this3.polylines.length; i++) {
                  _this3.polylines[i].setMap(null);
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

                  _this3.renderDirectionsPolylines(res.routes[i], polylineOptions);
                }
              } else {
                console.warn(status);
              }
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
                stepPolyline.setMap(this.map);
                /* var infowindow2 = new google.maps.InfoWindow();
                  infowindow2.setContent(response.legs[0].duration.text);
                  var step = 6;
                  infowindow2.setPosition(response.legs[0].steps[step].end_location);
                  console.log(response.legs[0]);
                  infowindow2.open(this.map); */
                // route click listeners, different one on each step

                google.maps.event.addListener(stepPolyline, 'click', function (evt) {
                  //stepPolyline.setOptions({strokeColor: '#FF0000'});
                  console.log(response.legs[0].duration.text);
                  infowindow.setContent(response.legs[0].duration.text);
                  infowindow.setPosition(evt.latLng);
                  infowindow.open(this.map);
                });
              }
            }
          }
        }, {
          key: "openRejectModel",
          value: function openRejectModel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modal_reject_get_food_request_reject_get_food_request_page__WEBPACK_IMPORTED_MODULE_10__["RejectGetFoodRequestPage"],
                      cssClass: 'custom_current_location_modal notification-modal',
                      backdropDismiss: false,
                      componentProps: {
                        "data": this.model.total_data,
                        "r_data": this.model.rdata,
                        "app_id": this.model.r_id,
                        "type_id": this.model.type_id
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
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
          key: "rejectRequest",
          value: function rejectRequest() {
            this.disableButton = true;
            this.openRejectModel();
          }
        }, {
          key: "acceptRequest",
          value: function acceptRequest() {
            var _this4 = this;

            this.disableButton = true;
            this.model.search = true;
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            var data;

            if (this.no_of_person > this.model.total_data.data.total_food_for) {
              this.model.number_of_person = this.model.total_data.data.total_food_for;
            } else if (this.no_of_person <= this.model.total_data.data.total_food_for) {
              this.model.number_of_person = this.no_of_person;
            }

            data = JSON.stringify({
              'app_user_id': this.model.user_id,
              'donar_id': this.model.total_data.data.app_user_id,
              'donate_food_id': this.model.total_data.data.id,
              'food_type': this.model.total_data.data.food_type,
              'no_of_person': this.model.number_of_person,
              'latitude': this.model.total_data.data.latitude,
              'longitude': this.model.total_data.data.longitude,
              'colony_name': this.model.total_data.data.colony_name,
              'city': this.model.total_data.data.city,
              'state': this.model.total_data.data.state,
              'country': this.model.total_data.data.country,
              'postal_code': this.model.total_data.data.postalCode,
              'notification_type': 1
            });
            localStorage.setItem('temp_total_food', this.model.number_of_person);
            this.fetch.accept_food(data).subscribe(function (res) {
              if (res.success == true) {
                _this4.model.search = false;
                localStorage.setItem('res.receiver_food_id', res.receiver_food_id);

                _this4.router.navigate(['/get-food-nearest-donors-two-duplicate', _this4.model.add_id, _this4.model.r_lat, _this4.model.r_lon, _this4.model.r_id, _this4.model.mode, _this4.model.d_food_type, res.receiver_food_id]);
              } else {
                _this4.errorMsg.showModal(_this4.model.key_text17);

                _this4.router.navigate(['/home']);
              }
            });
          }
        }]);
      }();

      GetFoodNearestDonorsPage.ctorParameters = function () {
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
          type: _error_msg_service__WEBPACK_IMPORTED_MODULE_11__["ErrorMsgService"]
        }];
      };

      GetFoodNearestDonorsPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      GetFoodNearestDonorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-food-nearest-donors',
        template: _raw_loader_get_food_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_get_food_nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GetFoodNearestDonorsPage);
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
    "suP1":
    /*!***********************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors/get-food-nearest-donors-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: GetFoodNearestDonorsPageRoutingModule */

    /***/
    function suP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsPageRoutingModule", function () {
        return GetFoodNearestDonorsPageRoutingModule;
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


      var _get_food_nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./get-food-nearest-donors.page */
      "nZD9");

      var routes = [{
        path: '',
        component: _get_food_nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__["GetFoodNearestDonorsPage"]
      }];

      var GetFoodNearestDonorsPageRoutingModule = /*#__PURE__*/_createClass(function GetFoodNearestDonorsPageRoutingModule() {
        _classCallCheck(this, GetFoodNearestDonorsPageRoutingModule);
      });

      GetFoodNearestDonorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GetFoodNearestDonorsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=get-food-nearest-donors-get-food-nearest-donors-module-es5.js.map