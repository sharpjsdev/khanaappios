(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module"], {
    /***/
    "Ub2x":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/receiver-confirm/receiver-confirm.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ub2x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <div class=\"ion-padding\">\n      <img (click)=\"closeModal('Wrapped Up!')\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">    \n    \n      <div class=\"modal_inner\">      \n      <br>\n      <div class=\"medium size_18 green center\">\n        <div *ngIf=\"this.data.data != null\">\n          <span *ngIf=\"no_of_person <= data.data.total_food_for && data.data.food_type == 1\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text2 }} {{ model.key_text4 }} {{ model.key_text6 }} {{ no_of_person }} {{ model.key_text3 }} {{ model.key_text7 }} {{ model.donar_username }} </span>\n          <span *ngIf=\"no_of_person > data.data.total_food_for && data.data.food_type == 1\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text4 }} {{ model.key_text6 }} {{ data.data.total_food_for }} {{ model.key_text3 }} {{ model.key_text8 }} {{ model.donar_username }}, {{ model.key_text9 }} {{ no_of_person-data.data.total_food_for }} {{ model.key_text10 }}</span>\n          <span *ngIf=\"no_of_person <= data.data.total_food_for && data.data.food_type == 2\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text2 }} {{ model.key_text5 }} {{ model.key_text6 }} {{ no_of_person }} {{ model.key_text3 }} {{ model.key_text7 }} {{ model.donar_username }} </span>\n          <span *ngIf=\"no_of_person > data.data.total_food_for && data.data.food_type == 2\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text5 }} {{ model.key_text6 }} {{ data.data.total_food_for }} {{ model.key_text3 }} {{ model.key_text8 }} {{ model.donar_username }}, {{ model.key_text9 }} {{ no_of_person-data.data.total_food_for }} {{ model.key_text10 }}</span>\n          <span *ngIf=\"no_of_person <= data.data.total_food_for && data.data.food_type == 3\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text13 }} <span *ngIf=\"data.data.food_type == 1\">{{ model.key_text4 }}</span> <span *ngIf=\"data.data.food_type == 2\">{{ model.key_text5 }}</span> {{ model.key_text6 }} {{ no_of_person }} {{ model.key_text3 }} {{ model.key_text7 }} {{ model.donar_username }} </span>\n          <span *ngIf=\"no_of_person > data.data.total_food_for && data.data.food_type == 3\">{{ model.key_text1 }} {{ model.receiver_username }} {{ model.key_text13 }} <span *ngIf=\"data.data.food_type == 1\">{{ model.key_text4 }}</span> <span *ngIf=\"data.data.food_type == 2\">{{ model.key_text5 }}</span> {{ model.key_text6 }} {{ data.data.total_food_for }} {{ model.key_text3 }} {{ model.key_text8 }} {{ model.donar_username }}, {{ model.key_text9 }} {{ no_of_person-data.data.total_food_for }} {{ model.key_text10 }}</span>\n        </div>\n      \n      <span *ngIf=\"this.data.data == null && model.notify == 0 && this.location_data != null\" class=\"custom_new_food_btn\">\n          {{ model.key_text14 }} {{ distance }} {{ model.key_text15 }}<br><br>\n          <button class=\"app_btn\" (click)=\"accept_food_request()\" *ngIf=\"!model.search\">{{ model.key_text16 }}</button>\n          <button class=\"app_btn\" (click)=\"search_again()\" *ngIf=\"!model.search\">{{ model.key_text17 }}</button>\n      </span>\n      <span *ngIf=\"this.data.data == null && model.notify == 0 && this.ontheway_data.length>0\" class=\"custom_new_food_btn\">\n        {{ model.key_text19 }}<br><br>\n        \n    </span>\n      <span *ngIf=\"model.notify == 1\">\n        {{ model.key_text18 }}\n      </span>\n      </div>\n      <div class=\"app_button\" *ngIf=\"this.data.data != null\" style=\"margin-top: 85px;\">\n        <ion-router-link (click)=\"accept_food()\" *ngIf=\"!model.search\">\n          <button class=\"app_btn\">{{ model.key_text12 }}</button>\n        </ion-router-link>\n      </div>\n      <div class=\"app_button\" >\n        <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n      </div>\n      <!-- <br><br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text2}}\n      </div> -->\n\t  <!-- <br> -->\n      <!-- <div class=\"medium size_16 center\" style=\"max-width: 240px; width: 100%; margin: 0 auto;\">\n        {{model.key_text3}}\n      </div> -->\n    </div>\n\n  </div> \n</ion-content> ";
      /***/
    },

    /***/
    "oNc3":
    /*!*****************************************************************!*\
      !*** ./src/app/modal/receiver-confirm/receiver-confirm.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ReceiverConfirmPage */

    /***/
    function oNc3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceiverConfirmPage", function () {
        return ReceiverConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_receiver_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./receiver-confirm.page.html */
      "Ub2x");
      /* harmony import */


      var _receiver_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./receiver-confirm.page.scss */
      "twDH");
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

      var ReceiverConfirmPage = /*#__PURE__*/function () {
        function ReceiverConfirmPage(modalController, navParams, router, fetch, storage) {
          _classCallCheck(this, ReceiverConfirmPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(ReceiverConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.model.search = false;
            this.model.notify = 0;
            var receiver = JSON.stringify({
              'id': this.app_user_id
            });
            this.fetch.profile(receiver).subscribe(function (res) {
              _this.model.receiver_username = res['username'];
            });

            if (this.data.data != null && this.data.data.total_food_for != 0) {
              var donar = JSON.stringify({
                'id': this.data.data.app_user_id
              });
              this.fetch.profile(donar).subscribe(function (res) {
                _this.model.donar_username = res['username'];
              });
            }

            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'DEAR';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'RECEIVER_MSG_1';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'PEOPLE';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'FOOD_FOR';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'FROM';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'RECEIVER_MSG_2';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'RECEIVER_MSG_3';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'RECEIVER_MSG_4';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'NO_DONATION_FOUND';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'ACCEPT';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text == 'RECEIVER_MSG_1';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text == 'FOOD_NOTAVAILABLE_MSG';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text == 'FOOD_NOTAVAILABLE_MSG1';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text == 'YES';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text == 'NO';
            });
            this.model.key_text17 = item17[lang_code];
            var item18 = res.find(function (i) {
              return i.key_text == 'ACCEPT_REQUEST_MSG';
            });
            this.model.key_text18 = item18[lang_code];
            var item19 = res.find(function (i) {
              return i.key_text == 'NOT_ON_THE_WAY_MSG';
            });
            this.model.key_text19 = item19[lang_code]; // let item1 = res.find(i => i.key_text === 'THANK_YOU_FOR_YOUR_KIND_GESTURE');
            //   this.model.key_text1 = item1[lang_code]; 
            // let item2 = res.find(i => i.key_text === 'END_DONATION_MSG');
            //   this.model.key_text2= item2[lang_code]; 
            // let item3 = res.find(i => i.key_text === 'CHECK_DONATION');
            //   this.model.key_text3= item3[lang_code]; 
            //});
          }
        }, {
          key: "accept_food",
          value: function accept_food() {
            var _this2 = this;

            this.model.search = true;
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            var data;

            if (this.no_of_person > this.data.data.total_food_for) {
              this.model.number_of_person = this.data.data.total_food_for;
            } else if (this.no_of_person <= this.data.data.total_food_for) {
              this.model.number_of_person = this.no_of_person;
            }

            if (this.location_data != null) {
              data = JSON.stringify({
                'app_user_id': this.app_user_id,
                'donar_id': this.data.data.app_user_id,
                'donate_food_id': this.data.data.id,
                'food_type': this.data.data.food_type,
                'no_of_person': this.model.number_of_person,
                'latitude': this.location_data.latitude,
                'longitude': this.location_data.longitude,
                'colony_name': this.location_data.colony_name,
                'city': this.location_data.city,
                'state': this.location_data.state,
                'country': this.location_data.country,
                'postal_code': this.location_data.postalCode,
                'notification_type': 1
              });
            } else if (this.ontheway_data.length > 0) {
              data = JSON.stringify({
                'app_user_id': this.app_user_id,
                'donar_id': this.data.data.app_user_id,
                'donate_food_id': this.data.data.id,
                'food_type': this.data.data.food_type,
                'no_of_person': this.model.number_of_person,
                'latitude': this.ontheway_data[0].startLat,
                'longitude': this.ontheway_data[0].startLng,
                'colony_name': this.ontheway_data[1].start,
                'city': this.ontheway_data[0].city,
                'state': this.ontheway_data[0].state,
                'country': this.ontheway_data[0].country,
                'postal_code': this.ontheway_data[0].postalCode,
                'notification_type': 1
              });
            } //console.log(data);


            localStorage.setItem('temp_total_food', this.model.number_of_person);
            this.fetch.accept_food(data).subscribe(function (res) {
              if (res.success == true) {
                _this2.model.search = false;
                localStorage.setItem('res.receiver_food_id', res.receiver_food_id);

                _this2.closeModal("accept");
              }
            });
          }
        }, {
          key: "accept_food_request",
          value: function accept_food_request() {
            var _this3 = this;

            this.model.search = true;
            var data;

            if (this.location_data != null) {
              data = JSON.stringify({
                'app_user_id': this.app_user_id,
                'food_type': this.food_type,
                'no_of_person': this.no_of_person,
                'latitude': this.location_data.latitude,
                'longitude': this.location_data.longitude,
                'colony_name': this.location_data.colony_name,
                'city': this.location_data.city,
                'state': this.location_data.state,
                'country': this.location_data.country,
                'postal_code': this.location_data.postalCode,
                'status': 0,
                'distance': this.distance
              });
            } else if (this.ontheway_data.length > 0) {
              data = JSON.stringify({
                'app_user_id': this.app_user_id,
                'food_type': this.food_type,
                'no_of_person': this.no_of_person,
                'latitude': this.ontheway_data[0].startLat,
                'longitude': this.ontheway_data[0].startLng,
                'colony_name': this.ontheway_data[1].start,
                'city': this.ontheway_data[0].city,
                'state': this.ontheway_data[0].state,
                'country': this.ontheway_data[0].country,
                'postal_code': this.ontheway_data[0].postalCode,
                'status': 0,
                'distance': 0
              });
            }

            this.fetch.accept_food_request(data).subscribe(function (res) {
              _this3.model.search = false;

              if (res.success) {
                _this3.model.notify = 1;
              } else {
                console.log(res.success);
              }
            });
          }
        }, {
          key: "search_again",
          value: function search_again() {
            this.closeModal("Wrapped Up!");
          }
        }, {
          key: "closeModal",
          value: function closeModal(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _data, onClosedData;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (this.data.data != null) {
                      _data = JSON.stringify({
                        'food_id': this.data.data.id
                      });
                      this.fetch.cancel_accept_food(_data).subscribe(function (res) {
                        if (res.success) {} else {
                          console.log(res.data);
                        }
                      });
                    }

                    onClosedData = data;
                    _context.next = 4;
                    return this.modalController.dismiss(onClosedData);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return ReceiverConfirmPage;
      }();

      ReceiverConfirmPage.ctorParameters = function () {
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

      ReceiverConfirmPage.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        app_user_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        no_of_person: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        food_type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        location_data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        distance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ontheway_data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ReceiverConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-receiver-confirm',
        template: _raw_loader_receiver_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_receiver_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReceiverConfirmPage);
      /***/
    },

    /***/
    "twDH":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/receiver-confirm/receiver-confirm.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function twDH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "span.custom_new_food_btn button {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY2VpdmVyLWNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJyZWNlaXZlci1jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uY3VzdG9tX25ld19mb29kX2J0biBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~get-food-search-get-food-search-module~modal-receiver-confirm-receiver-confirm-module-es5.js.map