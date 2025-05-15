(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-cancel-allotedfood-cancel-allotedfood-module"], {
    /***/
    "8LZw":
    /*!***********************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CancelAllotedfoodPageModule */

    /***/
    function LZw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelAllotedfoodPageModule", function () {
        return CancelAllotedfoodPageModule;
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


      var _cancel_allotedfood_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cancel-allotedfood-routing.module */
      "N04E");
      /* harmony import */


      var _cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cancel-allotedfood.page */
      "hHBB");

      var CancelAllotedfoodPageModule = /*#__PURE__*/_createClass(function CancelAllotedfoodPageModule() {
        _classCallCheck(this, CancelAllotedfoodPageModule);
      });

      CancelAllotedfoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cancel_allotedfood_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelAllotedfoodPageRoutingModule"]],
        declarations: [_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__["CancelAllotedfoodPage"]]
      })], CancelAllotedfoodPageModule);
      /***/
    },

    /***/
    "N04E":
    /*!*******************************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CancelAllotedfoodPageRoutingModule */

    /***/
    function N04E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelAllotedfoodPageRoutingModule", function () {
        return CancelAllotedfoodPageRoutingModule;
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


      var _cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cancel-allotedfood.page */
      "hHBB");

      var routes = [{
        path: '',
        component: _cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_3__["CancelAllotedfoodPage"]
      }];

      var CancelAllotedfoodPageRoutingModule = /*#__PURE__*/_createClass(function CancelAllotedfoodPageRoutingModule() {
        _classCallCheck(this, CancelAllotedfoodPageRoutingModule);
      });

      CancelAllotedfoodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CancelAllotedfoodPageRoutingModule);
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
            var _this = this;

            this.model.search = false;
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.fetch.get_reasons(lang_code).subscribe(function (res) {
              res['data'].forEach(function (val, i) {
                _this.reasons.push({
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
            var _this2 = this;

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
                  _this2.model.search = false;

                  _this2.closeModal(1);
                });
              } else {
                this.fetch.cancel_alloted_request(data).subscribe(function (res) {
                  _this2.model.search = false;

                  _this2.closeModal(1);
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
    }
  }]);
})();
//# sourceMappingURL=modal-cancel-allotedfood-cancel-allotedfood-module-es5.js.map