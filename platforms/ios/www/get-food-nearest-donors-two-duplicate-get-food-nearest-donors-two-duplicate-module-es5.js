(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-food-nearest-donors-two-duplicate-get-food-nearest-donors-two-duplicate-module"], {
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

        _createClass(NotificationCountService, [{
          key: "updateData",
          value: function updateData(newData) {
            this.dataSubject.next(newData);
          }
        }]);

        return NotificationCountService;
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
    "5yZr":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two-duplicate/get-food-nearest-donors-two-duplicate.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: GetFoodNearestDonorsTwoDuplicatePageModule */

    /***/
    function yZr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoDuplicatePageModule", function () {
        return GetFoodNearestDonorsTwoDuplicatePageModule;
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


      var _get_food_nearest_donors_two_duplicate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two-duplicate-routing.module */
      "tN53");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _get_food_nearest_donors_two_duplicate_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two-duplicate.page */
      "by26");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var GetFoodNearestDonorsTwoDuplicatePageModule = /*#__PURE__*/_createClass(function GetFoodNearestDonorsTwoDuplicatePageModule() {
        _classCallCheck(this, GetFoodNearestDonorsTwoDuplicatePageModule);
      });

      GetFoodNearestDonorsTwoDuplicatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _get_food_nearest_donors_two_duplicate_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetFoodNearestDonorsTwoDuplicatePageRoutingModule"]],
        declarations: [_get_food_nearest_donors_two_duplicate_page__WEBPACK_IMPORTED_MODULE_7__["GetFoodNearestDonorsTwoDuplicatePage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"]]
      })], GetFoodNearestDonorsTwoDuplicatePageModule);
      /***/
    },

    /***/
    "HaGj":
    /*!*****************************************!*\
      !*** ./src/app/pipes/food-type.pipe.ts ***!
      \*****************************************/

    /*! exports provided: FoodTypePipe */

    /***/
    function HaGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodTypePipe", function () {
        return FoodTypePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FoodTypePipe = /*#__PURE__*/function () {
        function FoodTypePipe() {
          _classCallCheck(this, FoodTypePipe);
        }

        _createClass(FoodTypePipe, [{
          key: "transform",
          value: function transform(value, arg) {
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            console.log(lang_code);
            var address_type = "";

            if (lang_code == 'en') {
              if (value == 1) {
                address_type = "Veg";
              } else if (value == 2) {
                address_type = "Non Veg";
              } else {
                address_type = "Both";
              }
            } else if (lang_code == 'hi') {
              if (value == 1) {
                address_type = "शाकाहारी";
              } else if (value == 2) {
                address_type = "मासाहारी";
              } else {
                address_type = "दोनों";
              }
            } else if (lang_code == 'te') {
              if (value == 1) {
                address_type = "వెజ్";
              } else if (value == 2) {
                address_type = "నాన్ వెజ్";
              } else {
                address_type = "రెండు";
              }
            }

            return address_type;
          }
        }]);

        return FoodTypePipe;
      }();

      FoodTypePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'foodType'
      })], FoodTypePipe);
      /***/
    },

    /***/
    "ISmK":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two-duplicate/get-food-nearest-donors-two-duplicate.page.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ISmK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dldC1mb29kLW5lYXJlc3QtZG9ub3JzLXR3by1kdXBsaWNhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJnZXQtZm9vZC1uZWFyZXN0LWRvbm9ycy10d28tZHVwbGljYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "U2Ub":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-food-nearest-donors-two-duplicate/get-food-nearest-donors-two-duplicate.page.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U2Ub(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-captcha></app-captcha>\n<ion-content>\n\n  <!-- <div class=\"ion-padding\" style=\"margin-left: 20px; margin-top: -15px;\">\n    <div class=\"map-icon\">\n      <img src=\"assets/images/location_black.svg\">\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12\">\n        {{model.colony_name}}\n      </div> \n    </div>\n  </div> -->\n  <div class=\"custom_map_design\">\n  <div style=\"margin-left: 20px;\">\n    <div class=\"map-icon\">\n      <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12\">\n        Wearning a mask in some public spaces is required due to COVID - 19\n      </div> \n    </div>\n  </div>\n  <div class=\"ion-padding res_ion_padding\">\n    <div class=\"btn-group\" style=\"margin-top: -12px;\">\n      <button class=\"grey regular btn4\" id=\"btn_drive_dup\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('DRIVING', 2)\">\n          <img src=\"assets/images/{{model.bike_image}}\">\n          <!--<img src=\"assets/images/icon_donor_bike_white.svg\">-->\n        </div>\n        <div class=\"grey size_12\" id=\"text_bike_time_dup\">\n          {{model.drive_time}}\n        </div>\n      </button>\n\n      <button class=\"grey regular btn4\" id=\"btn_bus_dup\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('TRANSIT', 2)\">\n          <img src=\"assets/images/{{model.bus_image}}\">\n          <!-- <img src=\"assets/images/icon_donor_bus_white.svg\"> -->\n        </div>\n        <div class=\"grey size_12\" id=\"text_bus_time_dup\">\n          {{model.public_time}}\n        </div>\n      </button>\n\n      <button class=\"grey regular btn4\" id=\"btn_walk_dup\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('WALKING', 2)\">\n          <img src=\"assets/images/{{model.walk_image}}\">\n          <!--<img src=\"assets/images/icon_donor_walk_white.svg\">-->\n        </div>\n        <div class=\"grey size_12\" id=\"text_walk_time_dup\">\n         {{model.walk_time}}\n        </div>\n      </button>      \n      \n    </div>\n  </div>\n  <div #map id=\"map\"></div>\n  <div class=\"ion-padding theme_width theme_width_new\">\n    <div class=\"\" style=\"margin-bottom: 10px;\" >\n      <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"regular medium size_14 green line-height-0\">{{time_c}} <span class=\"grey size_14\">({{distance_c}})</span></p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <a class=\"size_14 medium direction\" style=\"float: right;\" (click)=\"openMap()\"><ion-icon name=\"navigate-outline\"></ion-icon> {{model.key_text10}}</a>\n      </ion-col>\n      </ion-row>\n      \n       \n    </div>  \n    <ul class=\"size_14 medium\">\n      <li class=\"li_new\">{{model.key_text12}} {{model.food_type  | foodType}} {{model.key_text13}} {{model.key_text14}} {{model.total_food_for}} {{model.key_text15}}</li>\n      <li style=\"padding-right: 100px;\">{{model.key_text1}} - {{model.username}}</li>      \n       <a class=\"size_14 medium call\" (click)=\"call()\">{{model.key_text11}}</a> \n\t   \n    </ul>\n    <!-- <div class=\"grey_buttons\">  \n      <ion-row>\n        <ion-col size=\"6\">\n            <button class=\"app_btn custom_reject_btn new_btn_css\" (click)=\"pickup_status(0)\">{{model.key_text2}}</button>\n         \n        </ion-col>\n        <ion-col size=\"6\">\n            <button class=\"app_btn custom_accept_btn new_btn_css\" (click)=\"pickup_status(1)\">{{model.key_text3}}</button>\n         \n        </ion-col>\n      </ion-row>\n    </div> -->\n\n  </div>\n</div>\n \n  \n  </ion-content>\n  <ion-footer style=\"padding-top: 0px!important;\">\n    <div class=\"medium size_16\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_reject_btn new_btn_css\"  (click)=\"pickup_status(0)\">{{model.key_text2}}</button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <button class=\"app_btn custom_accept_btn new_btn_css\"  (click)=\"pickup_status(1)\">{{model.key_text3}}</button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- <div class=\"app_button\">\n      <a routerLink=\"/get-food-nearest-donors-two/{{model.add_id}}/{{model.r_lat}}/{{model.r_lon}}/{{model.r_id}}/{{model.mode}}/{{model.d_food_type}}/{{model.getFood_id}}\">\n        <button class=\"app_btn\">{{model.key_text1}}</button>\n      </a>\n    </div> -->\n\n  </ion-footer> \n  <!-- <ion-footer>    \n    <ion-toolbar>    \n        <ion-segment value=\"home\" color=\"transparent\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n        <img src=\"assets/images/red_footer_home.svg\">\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text4}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text5}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n       \n        <img src=\"assets/images/grey_footer_volunteer.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text6}}</ion-label>    \n      </ion-segment-button>\n    </ion-segment>    \n    </ion-toolbar>\n  </ion-footer>  -->\n\n\n \n  ";
      /***/
    },

    /***/
    "UrZZ":
    /*!********************************************!*\
      !*** ./src/app/pipes/address-type.pipe.ts ***!
      \********************************************/

    /*! exports provided: AddressTypePipe */

    /***/
    function UrZZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressTypePipe", function () {
        return AddressTypePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddressTypePipe = /*#__PURE__*/function () {
        function AddressTypePipe() {
          _classCallCheck(this, AddressTypePipe);
        }

        _createClass(AddressTypePipe, [{
          key: "transform",
          value: function transform(value, arg) {
            var address_type = "";

            if (value == 1) {
              address_type = "Home";
            } else if (value == 2) {
              address_type = "Work";
            } else {
              address_type = "Other";
            }

            return address_type;
          }
        }]);

        return AddressTypePipe;
      }();

      AddressTypePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'addressType'
      })], AddressTypePipe);
      /***/
    },

    /***/
    "YYwF":
    /*!************************************!*\
      !*** ./src/app/pipes/safe.pipe.ts ***!
      \************************************/

    /*! exports provided: SafePipe */

    /***/
    function YYwF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
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

      var SafePipe = /*#__PURE__*/function () {
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(value, arg) {
            value = value.replace('watch?v=', 'embed/');
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
      })], SafePipe);
      /***/
    },

    /***/
    "by26":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two-duplicate/get-food-nearest-donors-two-duplicate.page.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: GetFoodNearestDonorsTwoDuplicatePage */

    /***/
    function by26(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoDuplicatePage", function () {
        return GetFoodNearestDonorsTwoDuplicatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_get_food_nearest_donors_two_duplicate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./get-food-nearest-donors-two-duplicate.page.html */
      "U2Ub");
      /* harmony import */


      var _get_food_nearest_donors_two_duplicate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two-duplicate.page.scss */
      "ISmK");
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


      var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/browser-tab/ngx */
      "ORb9");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var GetFoodNearestDonorsTwoDuplicatePage = /*#__PURE__*/function () {
        function GetFoodNearestDonorsTwoDuplicatePage(modalController, http, route, router, fetch, storage, geolocation, alertCtrl, browserTab, callNumber, platform) {
          _classCallCheck(this, GetFoodNearestDonorsTwoDuplicatePage);

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

        _createClass(GetFoodNearestDonorsTwoDuplicatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.model.is_volunteer = 0;
            this.model.walk_time = 0;
            this.model.walk_distance = 0;
            this.model.drive_time = 0;
            this.model.drive_distance = 0;
            this.model.public_time = 0;
            this.model.public_distance = 0;
            $("#btn_walk_dup").addClass('active');
            $("#text_walk_time_dup").removeClass('grey');
            $("#text_walk_time_dup").css('color', 'white');
            this.model.walk_image = 'icon_donor_walk_white.svg';
            this.model.mode = 'WALKING';

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            var infowindow = new google.maps.InfoWindow();
            var renderer = new google.maps.DirectionsRenderer({
              suppressPolylines: true,
              infoWindow: infowindow
            });
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            var food_id = this.route.snapshot.params['id'];
            var r_lat = this.route.snapshot.params['lat'];
            var r_lon = this.route.snapshot.params['lon'];
            this.model.r_id = this.route.snapshot.params['r_id'];
            this.model.d_food_type = this.route.snapshot.params['food_type'];
            this.model.getfood_id = this.route.snapshot.params['getfoodid'];
            this.model.r_lat = r_lat;
            this.model.r_lon = r_lon;

            if (this.model.d_food_type == 1 || this.model.d_food_type == 3) {
              this.model.food_type = 'vegetarian';
            } else if (this.model.d_food_type == 2) {
              this.model.food_type = 'Non-vegetarian';
            }

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
              return i.key_text === 'DIRECTION';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'CALL';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'COLLECTING';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'FOOD';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'FOR';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text15 = item15[lang_code]; //});

            var mode = this.route.snapshot.params['mode'];
            this.fetch.get_donor_food_detail(food_id).subscribe(function (res) {
              console.log(res.data);
              _this.model.colony_name = res.data.colony_name;
              _this.model.city = res.data.city;
              _this.model.state = res.data.state;
              _this.model.country = res.data.country;
              _this.model.postalCode = res.data.postalCode;
              var no_of_person = localStorage.getItem('temp_total_food');
              _this.model.total_food_for = no_of_person;
              _this.model.username = res.data.username;
              _this.model.latitude = res.data.latitude;
              _this.model.longitude = res.data.longitude;
              _this.model.donate_food_id = res.data.donate_food_id; //console.log(this.model.food_data);

              _this.model.donar_id = res.data.app_user_id;
              var donar = JSON.stringify({
                'id': res.data.app_user_id
              });

              _this.fetch.profile(donar).subscribe(function (res) {
                _this.model.mobile_number = res['mobile_no'];
              });

              var receiver = JSON.stringify({
                'id': _this.model.user_id
              });

              _this.fetch.profile(receiver).subscribe(function (res) {
                _this.model.loged_in_user = res['username'];
              });

              console.log('receiver lat' + r_lat);
              console.log('receiver lat' + r_lon);
              console.log('donor lat' + _this.model.latitude);
              console.log('donor long' + _this.model.longitude);
              var getKM = new FormData();
              getKM.append('donor_lat', _this.model.latitude);
              getKM.append('donor_lng', _this.model.longitude);
              getKM.append('rec_lat', r_lat);
              getKM.append('rec_lng', r_lon);

              _this.fetch.get_location(getKM).subscribe(function (km) {
                if (km.data.time_distance_walking.rows[0].elements[0].status == 'OK') {
                  _this.model.walk_time = km.data.time_distance_walking.rows[0].elements[0].duration.text;
                  _this.model.walk_distance = km.data.time_distance_walking.rows[0].elements[0].distance.text;
                  _this.time_c = _this.model.walk_time;
                  _this.distance_c = _this.model.walk_distance;
                }

                if (km.data.time_distance_driving.rows[0].elements[0].status == 'OK') {
                  _this.model.drive_time = km.data.time_distance_driving.rows[0].elements[0].duration.text;
                  _this.model.drive_distance = km.data.time_distance_driving.rows[0].elements[0].distance.text;
                }

                if (km.data.time_distance_transit.rows[0].elements[0].status == 'OK') {
                  _this.model.public_time = km.data.time_distance_transit.rows[0].elements[0].duration.text;
                  _this.model.public_distance = km.data.time_distance_transit.rows[0].elements[0].distance.text;
                  console.log(_this.model.public_time, '-', _this.model.public_distance);
                }
              });

              _this.geolocation.getCurrentPosition().then(function (resp) {
                //console.log(res.data.latitude);
                //console.log(res.data.longitude);
                var latLng = new google.maps.LatLng(_this.model.latitude, _this.model.longitude);
                var mapOptions = {
                  center: latLng,
                  zoom: 15,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                _this.model.directionsService = new google.maps.DirectionsService();
                _this.model.directionsDisplay = new google.maps.DirectionsRenderer();

                _this.model.directionsDisplay.setMap(_this.map); //directionsDisplay.setPanel(this.directionsPanel.nativeElement);


                _this.calculate_route('WALKING');
              });
            });
          }
        }, {
          key: "calculate_route",
          value: function calculate_route(mode) {
            var _this2 = this;

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
              console.log(this.time_c);
              $("#btn_walk_dup").addClass('active');
              $("#btn_drive_dup").removeClass('active');
              $("#btn_bus_dup").removeClass('active');
              $("#text_walk_time_dup").removeClass('grey');
              $("#text_bus_time_dup").addClass('grey');
              $("#text_bike_time_dup").addClass('grey');
              $("#text_walk_time_dup").css('color', 'white');
              this.model.walk_image = 'icon_donor_walk_white.svg';
              this.model.bus_image = 'icon_donor_bus.svg';
              this.model.bike_image = 'icon_donor_bike.svg';
            } else if (mode == 'TRANSIT') {
              this.time_c = this.model.public_time;
              this.distance_c = this.model.public_distance;
              $("#btn_bus_dup").addClass('active');
              $("#btn_drive_dup").removeClass('active');
              $("#btn_walk_dup").removeClass('active');
              $("#text_bus_time_dup").removeClass('grey');
              $("#text_walk_time_dup").addClass('grey');
              $("#text_bike_time_dup").addClass('grey');
              $("#text_bus_time_dup").css('color', 'white');
              this.model.bus_image = 'icon_donor_bus_white.svg';
              this.model.walk_image = 'icon_donor_walk.svg';
              this.model.bike_image = 'icon_donor_bike.svg';
            } else if (mode == 'DRIVING') {
              this.time_c = this.model.drive_time;
              this.distance_c = this.model.drive_distance;
              $("#btn_drive_dup").addClass('active');
              $("#btn_bus_dup").removeClass('active');
              $("#btn_walk_dup").removeClass('active');
              $("#text_bike_time_dup").removeClass('grey');
              $("#text_walk_time_dup").addClass('grey');
              $("#text_bus_time_dup").addClass('grey');
              $("#text_bike_time_dup").css('color', 'white');
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
              destination: this.model.latitude + ", " + this.model.longitude,
              travelMode: google.maps.TravelMode[mode],
              provideRouteAlternatives: true
            }, function (res, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                renderer.setDirections(res);
                renderer.setMap(_this2.map);

                for (var i = 0; i < _this2.polylines.length; i++) {
                  _this2.polylines[i].setMap(null);
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

                  _this2.renderDirectionsPolylines(res.routes[i], polylineOptions);
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
            var _this3 = this;

            //console.log(val);
            if (val == 1) {
              var data = JSON.stringify({
                'receiver_id': this.model.r_id,
                'donor_id': this.model.donar_id,
                'getFood_id': this.model.getfood_id
              });
              this.fetch.pickup_food_for_get(data).subscribe(function (res) {
                //console.log(res);
                if (res.success == true) {
                  localStorage.removeItem('receiver_food_type');
                  localStorage.removeItem('set_confirm_location_route');
                  localStorage.removeItem('receiver_location');
                  localStorage.removeItem('food_for_no_of_person');

                  _this3.router.navigate(['/feedback-form', res.data, _this3.model.getfood_id]);
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
            var _this4 = this;

            var data = JSON.stringify({
              'caller_id': this.model.user_id,
              'callee_mobile_no': this.model.mobile_number
            });
            $('#add_location_spinner').show();
            this.fetch.add_call_detail(data).subscribe(function (res) {
              _this4.callNumber.callNumber(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].phone_no, true).then(function (res) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this5 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_10__["CancelAllotedfoodPage"],
                      cssClass: 'custom_filter_modal cancel_allot_food_popup',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "get_food",
                        "id": id,
                        "type": 'get_food'
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this5.dataReturned = dataReturned.data;

                        if (_this5.dataReturned == 1) {
                          // this.ngOnInit();
                          _this5.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                          var no_of_person = localStorage.getItem('temp_total_food');
                          var food_id = _this5.route.snapshot.params['id'];
                          var data = JSON.stringify({
                            'food_id': food_id,
                            'logged_in_user': _this5.model.loged_in_user,
                            'no_of_person': no_of_person,
                            'app_user_id': _this5.model.user_id,
                            'food_type': _this5.model.d_food_type,
                            'notification_type': 3,
                            'to': _this5.model.donar_id,
                            'from': _this5.model.user_id,
                            'getFoodId': _this5.model.getfood_id
                          }); //console.log(data);

                          _this5.fetch.notify_donar(data).subscribe(function (res) {
                            _this5.router.navigate(['/home']);
                          });
                        } //alert('Modal Sent Data :'+ dataReturned);

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
          key: "presentConfirm",
          value: function presentConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      cssClass: 'my-custom-class',
                      header: this.model.key_text7,
                      buttons: [{
                        text: this.model.key_text9,
                        handler: function handler() {
                          _this6.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                          var no_of_person = localStorage.getItem('temp_total_food');
                          var food_id = _this6.route.snapshot.params['id'];
                          var data = JSON.stringify({
                            'food_id': food_id,
                            'logged_in_user': _this6.model.loged_in_user,
                            'no_of_person': no_of_person,
                            'app_user_id': _this6.model.user_id,
                            'food_type': _this6.model.d_food_type,
                            'notification_type': 3,
                            'to': _this6.model.donar_id,
                            'from': _this6.model.user_id,
                            'getFoodId': _this6.model.getfood_id
                          }); //console.log(data);

                          _this6.fetch.notify_donar(data).subscribe(function (res) {
                            _this6.router.navigate(['/home']);
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
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openMap",
          value: function openMap() {
            var destination = this.model.latitude + '+' + this.model.longitude; //window.open('maps://?q=' + destination, '_system');

            if (this.platform.is('ios')) {
              this.browserTab.openUrl('http://maps.google.com/maps?q=loc:' + destination);
            } else {
              var label = encodeURI('My Label');
              window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
            }
          }
        }]);

        return GetFoodNearestDonorsTwoDuplicatePage;
      }();

      GetFoodNearestDonorsTwoDuplicatePage.ctorParameters = function () {
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
          type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_11__["BrowserTab"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }];
      };

      GetFoodNearestDonorsTwoDuplicatePage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      GetFoodNearestDonorsTwoDuplicatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-food-nearest-donors-two-duplicate',
        template: _raw_loader_get_food_nearest_donors_two_duplicate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"]],
        styles: [_get_food_nearest_donors_two_duplicate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GetFoodNearestDonorsTwoDuplicatePage);
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

        _createClass(CaptchaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.NotificationCount.data$.subscribe(function (newData) {
              _this7.notificationCount = newData;
            });
            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this7.notification = res['data'];
              _this7.notifications_admin = res['notifications'];

              if (_this7.notification.length != 0 || _this7.notifications_admin.length != 0) {
                $('#black_spot').show();
                var notifCount = _this7.notification.length + _this7.notifications_admin.length;

                _this7.NotificationCount.updateData(notifCount);
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

        return CaptchaComponent;
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

        _createClass(CancelAllotedfoodPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.model.search = false;
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.fetch.get_reasons(lang_code).subscribe(function (res) {
              res['data'].forEach(function (val, i) {
                _this8.reasons.push({
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
            var _this9 = this;

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
                  _this9.model.search = false;

                  _this9.closeModal(1);
                });
              } else {
                this.fetch.cancel_alloted_request(data).subscribe(function (res) {
                  _this9.model.search = false;

                  _this9.closeModal(1);
                });
              }
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal(isDone) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    onClosedData = isDone;
                    _context3.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CancelAllotedfoodPage;
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
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pipes/safe.pipe */
      "YYwF");
      /* harmony import */


      var _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipes/address-type.pipe */
      "UrZZ");
      /* harmony import */


      var _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/food-type.pipe */
      "HaGj");

      var PipesModule = /*#__PURE__*/_createClass(function PipesModule() {
        _classCallCheck(this, PipesModule);
      });

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__["AddressTypePipe"], _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__["FoodTypePipe"]],
        imports: [],
        exports: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__["AddressTypePipe"], _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__["FoodTypePipe"]]
      })], PipesModule);
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


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <!-- <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\">\n        {{ this.notification.length + this.notifications_admin.length }}</span>  -->\n        <span *ngIf=\"this.notificationCount!== 0\" id=\"black_spot\" style=\"position: absolute;background-color: #000;border-radius: 50%;color: #fff;font-size: 13px;\n        top: -3px;right: 0px;text-align: center;padding: 0px 3px;\">\n        {{ this.notificationCount }}</span> \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n      \n     \n      \n    </ion-toolbar>\n  </ion-header>";
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


      __webpack_exports__["default"] = "ion-radio-group ion-item {\n  margin-left: -19px;\n  margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbmNlbC1hbGxvdGVkZm9vZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoiY2FuY2VsLWFsbG90ZWRmb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufSJdfQ== */";
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
    "tN53":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/get-food-nearest-donors-two-duplicate/get-food-nearest-donors-two-duplicate-routing.module.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: GetFoodNearestDonorsTwoDuplicatePageRoutingModule */

    /***/
    function tN53(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFoodNearestDonorsTwoDuplicatePageRoutingModule", function () {
        return GetFoodNearestDonorsTwoDuplicatePageRoutingModule;
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


      var _get_food_nearest_donors_two_duplicate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./get-food-nearest-donors-two-duplicate.page */
      "by26");

      var routes = [{
        path: '',
        component: _get_food_nearest_donors_two_duplicate_page__WEBPACK_IMPORTED_MODULE_3__["GetFoodNearestDonorsTwoDuplicatePage"]
      }];

      var GetFoodNearestDonorsTwoDuplicatePageRoutingModule = /*#__PURE__*/_createClass(function GetFoodNearestDonorsTwoDuplicatePageRoutingModule() {
        _classCallCheck(this, GetFoodNearestDonorsTwoDuplicatePageRoutingModule);
      });

      GetFoodNearestDonorsTwoDuplicatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GetFoodNearestDonorsTwoDuplicatePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=get-food-nearest-donors-two-duplicate-get-food-nearest-donors-two-duplicate-module-es5.js.map