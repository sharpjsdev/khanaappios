(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1"], {
    /***/
    "/O/A":
    /*!*****************************************************************!*\
      !*** ./src/app/modal/otp/filter-content/filter-content.page.ts ***!
      \*****************************************************************/

    /*! exports provided: FilterContentPage */

    /***/
    function OA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterContentPage", function () {
        return FilterContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_filter_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./filter-content.page.html */
      "2mm5");
      /* harmony import */


      var _filter_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filter-content.page.scss */
      "YRlk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../sort-content/sort-content.page */
      "G7j0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var FilterContentPage = /*#__PURE__*/function () {
        //const receiver_id: string = this.navParams.get('paramID');
        function FilterContentPage(modalController, navParams, route, router, fetch, storage) {
          _classCallCheck(this, FilterContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(FilterContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.log(this.receiver_id);
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'SORT';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'FILTER';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'SELECT_TYPE_OF_FOOD';
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
              return i.key_text === 'BOTH';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'FOOD_NEEDED_FOR';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'SAVE_CHANGES';
            });
            this.model.key_text8 = item8[lang_code]; //});

            var filter_food_type = JSON.parse(localStorage.getItem('filter_food_type'));
            console.log(JSON.parse(localStorage.getItem('food_for_no_of_person')));

            if (JSON.parse(localStorage.getItem('food_for_no_of_person')) != null) {
              $('#filter_food_needed').val(JSON.parse(localStorage.getItem('food_for_no_of_person')));
            }

            if (filter_food_type != null) {
              this.model.food_type = filter_food_type;
              $('#filter_food_' + filter_food_type).addClass('active');
            }
          }
        }, {
          key: "food_type",
          value: function food_type(val) {
            this.model.food_type = val;

            if (val == 1) {
              $('#filter_food_' + val).addClass('active');
              $('#filter_food_2').removeClass('active');
              $('#filter_food_3').removeClass('active');
            } else if (val == 2) {
              $('#filter_food_' + val).addClass('active');
              $('#filter_food_1').removeClass('active');
              $('#filter_food_3').removeClass('active');
            } else {
              $('#filter_food_' + val).addClass('active');
              $('#filter_food_2').removeClass('active');
              $('#filter_food_1').removeClass('active');
            }

            localStorage.setItem('filter_food_type', val);
          }
        }, {
          key: "filter",
          value: function filter() {
            localStorage.setItem('food_for_no_of_person', $('#filter_food_needed').val());
            var data = {
              filter_food_type: this.model.food_type,
              filter_no_of_person: $('#filter_food_needed').val()
            };
            this.modalController.dismiss(data);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    onClosedData = "close";
                    _context.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openModalSort",
          value: function openModalSort() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this.closeModal();
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_4__["SortContentPage"],
                      cssClass: 'custom_filter_modal',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title"
                      }
                    });

                  case 3:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                      }
                    });
                    _context2.next = 7;
                    return modal.present();

                  case 7:
                    return _context2.abrupt("return", _context2.sent);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }]);

        return FilterContentPage;
      }();

      FilterContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }];
      };

      FilterContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filter-content',
        template: _raw_loader_filter_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filter_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FilterContentPage);
      /***/
    },

    /***/
    "2mm5":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/otp/filter-content/filter-content.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mm5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  <br><br><br>\n  <div class=\"modal_inner\">\n    <div class=\"sorting\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"right_border\" (click)=\"openModalSort()\">\n          {{model.key_text1}} <img src=\"assets/images/icon_sort.svg\">\n        </ion-col>\n        <ion-col size=\"6\" class=\"black\">\n          {{model.key_text2}} <img src=\"assets/images/icon_filter_black.svg\">\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"ion-padding\">      \n    <div style=\"margin-top: -24px; margin-left: 15px;\">{{model.key_text3}}:</div>\n    <div class=\"btn-group\">\n      <button class=\"grey regular btn2\" id=\"filter_food_1\" (click)=\"food_type(1)\">{{model.key_text4}}.</button>\n      <button class=\"grey regular btn2\" id=\"filter_food_2\" (click)=\"food_type(2)\">{{model.key_text5}}.</button>\n      <button class=\"grey regular btn2\" id=\"filter_food_3\" (click)=\"food_type(3)\">{{model.key_text6}}</button>\n    </div>\n\n    <ion-row style=\"margin-top: 25px; margin-left: 13px;\">\n      <ion-col size=\"6\" class=\"custom_left\" style=\"margin-top: 14px;\">\n        {{model.key_text7}} :\n      </ion-col>\n      <ion-col size=\"6\" class=\"custom_right\">\n        <div class=\"how_food\">\n          <input type=\"button\" class=\"minus\" onclick=\"filter_decrementValue()\" value=\"-\" />\n          <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"filter_food_needed\" disabled/>\n          <input type=\"button\" class=\"plus\" onclick=\"filter_incrementValue()\" value=\"+\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>  \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button modal_btn\">\n      <!-- <ion-router-link href=\"nearest-donors/{{receiver_id}}\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link> -->\n\t  <span (click)=\"filter()\">\n        <button class=\"app_btn\">{{model.key_text8}}</button>\n      </span>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "F0z1":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/sort-content/sort-content.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F0z1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"modal_content\">\n  <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  <br><br><br>\n  <div class=\"modal_inner\">\n    <div class=\"sorting\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"right_border black\">\n          {{model.key_text1}} <img src=\"assets/images/icon_sort_black.svg\">\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"openModalFilter()\">\n          {{model.key_text2}} <img src=\"assets/images/icon_filter.svg\">\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"ion-padding\">   \n\n    <div style=\"margin-top: -24px;\">\n      <div class=\"input_text_bottom\">\n        <div class=\"left\">\n          <div style=\"margin-top: -10px; margin-bottom: 15px;\">\n            <input type=\"checkbox\" id=\"distance\" name=\"sort1\" value=\"1\">\n            <label for=\"distance\" class=\"light light_grey size_12\">{{model.key_text3}}</label>\n          </div>\n          <div>\n            <input type=\"checkbox\" id=\"time\" name=\"sort2\" value=\"2\">\n            <label for=\"time\" class=\"light light_grey size_12\">{{model.key_text4}}</label>\n          </div>\n        </div>        \n      </div>\n    </div>\n    \n  </div>\n</ion-content>  \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button modal_btn\">\n      <!-- <ion-router-link href=\"nearest-donors\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link>-->\n\t  <span (click)=\"save()\">\n        <button class=\"app_btn\">{{model.key_text5}}</button>\n      </span> \n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "G7j0":
    /*!*********************************************************!*\
      !*** ./src/app/modal/sort-content/sort-content.page.ts ***!
      \*********************************************************/

    /*! exports provided: SortContentPage */

    /***/
    function G7j0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortContentPage", function () {
        return SortContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sort_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sort-content.page.html */
      "F0z1");
      /* harmony import */


      var _sort_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sort-content.page.scss */
      "Zua1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../otp/filter-content/filter-content.page */
      "/O/A");
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

      var SortContentPage = /*#__PURE__*/function () {
        function SortContentPage(modalController, navParams, fetch, storage) {
          _classCallCheck(this, SortContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(SortContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'SORT';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'FILTER';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'BY_DISTANCE';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'BY_TIME';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'SAVE_CHANGES';
            });
            this.model.key_text5 = item5[lang_code]; //});
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    onClosedData = "close";
                    _context3.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openModalFilter",
          value: function openModalFilter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this2 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    this.closeModal();
                    _context4.next = 3;
                    return this.modalController.create({
                      component: _otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_4__["FilterContentPage"],
                      cssClass: 'custom_filter_modal',
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title"
                      }
                    });

                  case 3:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this2.dataReturned = dataReturned.data;
                        console.log('Modal Sent Data :' + JSON.stringify(_this2.dataReturned)); //alert('Modal Sent Data :'+ dataReturned);
                      }
                    });
                    _context4.next = 7;
                    return modal.present();

                  case 7:
                    return _context4.abrupt("return", _context4.sent);

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "save",
          value: function save() {
            this.model.distance = null;
            this.model.time = null;
            var self = this;
            $('input[type="checkbox"]:checked').each(function () {
              if (this.value == 1) {
                self.model.distance = this.value;
              }

              if (this.value == 2) {
                self.model.time = this.value;
              }
            });
            var data = {
              distance: self.model.distance,
              time: self.model.time
            };
            console.log(data);
            self.modalController.dismiss(data);
          }
        }]);

        return SortContentPage;
      }();

      SortContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      SortContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sort-content',
        template: _raw_loader_sort_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sort_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SortContentPage);
      /***/
    },

    /***/
    "YRlk":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/otp/filter-content/filter-content.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function YRlk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItY29udGVudC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Zua1":
    /*!***********************************************************!*\
      !*** ./src/app/modal/sort-content/sort-content.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function Zua1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LWNvbnRlbnQucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modal-otp-filter-content-filter-content-module~modal-sort-content-sort-content-module~neares~cb2614b1-es5.js.map