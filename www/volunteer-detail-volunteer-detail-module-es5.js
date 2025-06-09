(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteer-detail-volunteer-detail-module"], {
    /***/
    "+ED7":
    /*!***********************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail.page.ts ***!
      \***********************************************************/

    /*! exports provided: VolunteerDetailPage */

    /***/
    function ED7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerDetailPage", function () {
        return VolunteerDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_volunteer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./volunteer-detail.page.html */
      "FbHi");
      /* harmony import */


      var _volunteer_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./volunteer-detail.page.scss */
      "5MKl");
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! highcharts */
      "6n/F");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../modal/cancel-allotedfood/cancel-allotedfood.page */
      "hHBB");

      var VolunteerDetailPage = /*#__PURE__*/function () {
        function VolunteerDetailPage(fetch, storage, alertController, router, modalController) {
          _classCallCheck(this, VolunteerDetailPage);

          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.router = router;
          this.modalController = modalController;
          this.model = {};
          this.food_request = [];
          this.food_request_fulfill = [];
          this.volunteer_data = [];
          this.onthe_way = [];
          this.completed_way = [];
          this.volunteer_graph_data = [];
          this.volunteer_graph_accepted_data = [];
          this.full_count = "";
          this.active_count = "";
          this.x_cat_count = [];
          this.mylang = '';
        }

        return _createClass(VolunteerDetailPage, [{
          key: "dynamicColumnChart",
          value: function dynamicColumnChart(data, data2, cat, min, max, tickInterval) {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('my_highcharts', {
              chart: {
                type: 'column',
                backgroundColor: '#fff',
                height: 300
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
                name: this.model.key_text27,
                type: undefined,
                color: '#ffcc00',
                data: data
              }, {
                name: this.model.key_text28,
                type: undefined,
                color: '#999900',
                data: data2
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 2000);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.head_tab = "tab-1";
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            var _this = this;

            $('#add_location_spinner').show();
            this.head_tab = ev.target.value;

            if (this.head_tab == 'tab-2') {
              this.fetch.my_ontheway_food(this.model.user_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this.onthe_way = res['data'];
              });
            } else if (this.head_tab == 'tab-3') {
              this.fetch.my_completed_food(this.model.user_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this.completed_way = res['data'];
              });
              this.todayGraph();
            } else if (this.head_tab == 'tab-1') {
              this.fetch.my_waiting_request(this.model.volunteer_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this.food_request = res.data;
              });
            }
          }
        }, {
          key: "segmentChangedCompleted",
          value: function segmentChangedCompleted(ev) {
            var vale = ev.target.value;

            if (vale == 'week') {
              this.weeklyGraph();
            }

            if (vale == 'month') {
              this.monthlyGraph();
            }

            if (vale == 'year') {
              this.yearlyGraph();
            }

            if (vale == 'today') {
              this.todayGraph();
            }
          }
        }, {
          key: "todayGraph",
          value: function todayGraph() {
            var _this2 = this;

            $('#add_location_spinner').show();
            this.volunteer_graph_data = [];
            this.x_cat_count = [];
            this.volunteer_graph_accepted_data = [];
            this.fetch.volunteer_graph_today(this.model.user_id).subscribe(function (res) {
              $('#add_location_spinner').hide();

              for (var m = 0; m < res.data.length; m++) {
                _this2.volunteer_graph_data.push(0);
              }

              var calcmax1 = 12;

              for (var k = 0; k < res.data.length; k++) {
                var index1 = k;
                _this2.volunteer_graph_data[index1] = res.data[k].cnt;

                _this2.x_cat_count.push(res.data[k].time);
              }

              _this2.fetch.volunteer_graph_today_accepted(_this2.model.user_id).subscribe(function (res1) {
                for (var l = 0; l < res1.data.length; l++) {
                  _this2.volunteer_graph_accepted_data.push(0);
                }

                var calcmax1 = 12;

                for (var kk = 0; kk < res1.data.length; kk++) {
                  var index2 = kk;
                  _this2.volunteer_graph_accepted_data[index2] = res1.data[kk].cnt;

                  _this2.x_cat_count.push(res1.data[kk].time);
                }

                _this2.model.min = 0;
                _this2.model.max = 30;
                _this2.model.tickInterval = 5;

                _this2.dynamicColumnChart(_this2.volunteer_graph_data, _this2.volunteer_graph_accepted_data, _this2.x_cat_count, _this2.model.min, _this2.model.max, _this2.model.tickInterval);
              });
            });
            this.fetch.count_today_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this2.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_today_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this2.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "weeklyGraph",
          value: function weeklyGraph() {
            var _this3 = this;

            $('#add_location_spinner').show();
            this.volunteer_graph_data = [];
            this.volunteer_graph_accepted_data = [];
            this.fetch.volunteer_graph_weekly(this.model.user_id).subscribe(function (res) {
              $('#add_location_spinner').hide();

              for (var i = 0; i < 7; i++) {
                _this3.volunteer_graph_data.push(0);
              }

              var calcmax = 12;

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].day - 1;
                _this3.volunteer_graph_data[index] = res.data[j].cnt;

                if (res.data[j].cnt > calcmax) {
                  calcmax = res.data[j].cnt;
                }
              }

              _this3.fetch.volunteer_graph_weekly_accepted(_this3.model.user_id).subscribe(function (res1) {
                $('#add_location_spinner').hide();

                for (var m = 0; m < 7; m++) {
                  _this3.volunteer_graph_accepted_data.push(0);
                }

                var calcmax1 = 12;

                for (var k = 0; k < res1.data.length; k++) {
                  var index1 = res1.data[k].day - 1;
                  _this3.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;

                  if (res1.data[k].cnt > calcmax1) {
                    calcmax1 = res1.data[k].cnt;
                  }
                }

                _this3.model.xcat = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                _this3.model.min = 0;
                _this3.model.max = 30;
                _this3.model.tickInterval = 5;

                _this3.dynamicColumnChart(_this3.volunteer_graph_data, _this3.volunteer_graph_accepted_data, _this3.model.xcat, _this3.model.min, _this3.model.max, _this3.model.tickInterval);
              });
            });
            this.fetch.count_weekly_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this3.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_weekly_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this3.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "monthlyGraph",
          value: function monthlyGraph() {
            var _this4 = this;

            $('#add_location_spinner').show();
            this.volunteer_graph_data = [];
            this.volunteer_graph_accepted_data = [];
            this.fetch.volunteer_graph_monthly(this.model.user_id).subscribe(function (res) {
              _this4.volunteer_graph_data = [0, 0, 0, 0];

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].Week_no - 1;
                _this4.volunteer_graph_data[index] = res.data[j].cnt;
              }

              $('#add_location_spinner').hide();

              _this4.fetch.volunteer_graph_monthly_accepted(_this4.model.user_id).subscribe(function (res1) {
                _this4.volunteer_graph_accepted_data = [0, 0, 0, 0];

                for (var k = 0; k < res1.data.length; k++) {
                  var index1 = res1.data[k].Week_no - 1;
                  _this4.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;
                }

                _this4.model.xcat = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'];
                _this4.model.min = 0;
                _this4.model.max = 60;
                _this4.model.tickInterval = 20;

                _this4.dynamicColumnChart(_this4.volunteer_graph_data, _this4.volunteer_graph_accepted_data, _this4.model.xcat, _this4.model.min, _this4.model.max, _this4.model.tickInterval);
              });
            });
            this.fetch.count_monthly_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this4.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_monthly_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this4.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "yearlyGraph",
          value: function yearlyGraph() {
            var _this5 = this;

            this.volunteer_graph_data = [];
            this.volunteer_graph_accepted_data = [];
            $('#add_location_spinner').show();
            this.fetch.volunteer_graph_yearly(this.model.user_id).subscribe(function (res) {
              _this5.volunteer_graph_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].month - 1;
                _this5.volunteer_graph_data[index] = res.data[j].cnt;
              }

              $('#add_location_spinner').hide();

              _this5.fetch.volunteer_graph_yearly_accepted(_this5.model.user_id).subscribe(function (res1) {
                _this5.volunteer_graph_accepted_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                for (var k = 0; k < res1.data.length; k++) {
                  var index1 = res1.data[k].month - 1;
                  _this5.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;
                }

                _this5.model.xcat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                _this5.model.min = 0;
                _this5.model.max = 60;
                _this5.model.tickInterval = 20;

                _this5.dynamicColumnChart(_this5.volunteer_graph_data, _this5.volunteer_graph_accepted_data, _this5.model.xcat, _this5.model.min, _this5.model.max, _this5.model.tickInterval);
              });
            });
            this.fetch.count_yearly_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this5.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_yearly_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this5.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this6 = this;

            this.model.app_user_id = localStorage.getItem("user_id");
            var user = JSON.stringify({
              'id': this.model.app_user_id
            });
            this.fetch.profile(user).subscribe(function (res) {
              _this6.model.login_username = res['username'];
            });
            this.model.mode = 'WALKING';
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            console.log(lang_code);
            this.mylang = lang_code; // this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'WAITING';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'ON_THE_WAY';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'COMPLETED';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'REASON_FOR_CANCEL_FOOD_REQUEST';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'CANCEL';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'TODAY';
            });
            this.model.key_text8 = item8[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            var item9 = res.find(function (i) {
              return i.key_text === 'FOOD_REQUESTS';
            });
            this.model.key_text9 = item9[lang_code];
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text12 = item12[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.key_text17 = item17[lang_code];
            var item18 = res.find(function (i) {
              return i.key_text === 'WEEK';
            });
            this.model.key_text18 = item18[lang_code];
            var item19 = res.find(function (i) {
              return i.key_text === 'MONTH';
            });
            this.model.key_text19 = item19[lang_code];
            var item20 = res.find(function (i) {
              return i.key_text === 'YEAR';
            });
            this.model.key_text20 = item20[lang_code];
            var item21 = res.find(function (i) {
              return i.key_text === 'TOTAL_DONATIONS_ACCEPTED';
            });
            this.model.key_text21 = item21[lang_code];
            var item22 = res.find(function (i) {
              return i.key_text === 'TOTAL_DONATIONS_FULLFILLED';
            });
            this.model.key_text22 = item22[lang_code];
            var item23 = res.find(function (i) {
              return i.key_text === 'FOOD_FOR';
            });
            this.model.key_text23 = item23[lang_code];
            var item24 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text24 = item24[lang_code];
            var item25 = res.find(function (i) {
              return i.key_text === 'VIEW_FEEDBACK';
            });
            this.model.key_text25 = item25[lang_code];
            var item26 = res.find(function (i) {
              return i.key_text === 'SHARE_FEEDBACK';
            });
            this.model.key_text26 = item26[lang_code];
            var item27 = res.find(function (i) {
              return i.key_text === 'DONATION_FULFILLED';
            });
            this.model.key_text27 = item27[lang_code];
            var item28 = res.find(function (i) {
              return i.key_text === 'DONATION_ACCEPTED';
            });
            this.model.key_text28 = item28[lang_code];
            var item29 = res.find(function (i) {
              return i.key_text === 'PEOPLE';
            });
            this.model.key_text29 = item29[lang_code];
            var item30 = res.find(function (i) {
              return i.key_text === 'PERSON';
            });
            this.model.key_text30 = item30[lang_code];
            var item31 = res.find(function (i) {
              return i.key_text === 'TYPE_HERE';
            });
            this.model.key_text31 = item31[lang_code];
            var item32 = res.find(function (i) {
              return i.key_text === 'FOOD';
            });
            this.model.key_text32 = item32[lang_code];
            var item33 = res.find(function (i) {
              return i.key_text === 'FOR';
            });
            this.model.key_text33 = item33[lang_code]; //});

            this.model.volunteer_id = '';
            var user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.model.user_id = user_id;
            this.fetch.v_check(user_id).subscribe(function (res) {
              if (res.success == true) {
                _this6.model.status = res.status;
                _this6.model.volunteer_id = res.data;

                _this6.fetch.v_edit(_this6.model.volunteer_id).subscribe(function (res1) {
                  _this6.volunteer_data = res1.data;
                  _this6.model.app_status = res1.data.app_status == 1 ? true : false;
                });

                if (_this6.model.status != 1) {
                  _this6.router.navigate(['/volunteer-food-request']);
                }

                _this6.fetch.my_waiting_request(_this6.model.volunteer_id).subscribe(function (res) {
                  _this6.food_request = res.data;
                });
              } else {
                _this6.model.status = 0;

                _this6.router.navigate(['/volunteer-food-request']);
              }

              if (_this6.model.volunteer_id == '') {
                _this6.router.navigate(['/volunteer-food-request']);
              }
            });
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this7 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.model.key_text6,
                      inputs: [{
                        name: 'reason',
                        id: 'cancel_rsn',
                        type: 'textarea',
                        placeholder: this.model.key_text31
                      }],
                      buttons: [{
                        text: this.model.key_text7,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: this.model.key_text4,
                        handler: function handler() {
                          var rsn = $('#cancel_rsn').val();

                          if (rsn == '') {
                            _this7.presentAlert();
                          } else {
                            $("#req_list_" + id).hide();
                            var data = JSON.stringify({
                              'v_id': id,
                              'rsn': rsn,
                              'status': 3
                            });

                            _this7.fetch.volunteer_cancel_requested_food(data).subscribe(function (res) {
                              _this7.fetch.my_waiting_request(_this7.model.volunteer_id).subscribe(function (res) {
                                _this7.food_request = res.data;
                              });
                            });
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "cancelAllotedRequest",
          value: function cancelAllotedRequest(id, food_id, donar_id, no_of_person, food_type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this8 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_9__["CancelAllotedfoodPage"],
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
                        _this8.dataReturned = dataReturned.data;

                        if (_this8.dataReturned == 1) {
                          var data = JSON.stringify({
                            'food_id': food_id,
                            'logged_in_user': _this8.model.login_username,
                            'no_of_person': no_of_person,
                            'app_user_id': _this8.model.app_user_id,
                            'food_type': food_type,
                            'notification_type': 3,
                            'to': donar_id,
                            'from': _this8.model.app_user_id,
                            'getFoodId': id
                          });

                          _this8.fetch.notify_donar_donate(data).subscribe(function (res) {
                            _this8.fetch.my_ontheway_food(_this8.model.user_id).subscribe(function (res) {
                              $('#add_location_spinner').hide();
                              _this8.onthe_way = res['data'];
                            });
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
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      message: this.model.key_text5,
                      buttons: [this.model.key_text4]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      VolunteerDetailPage.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      VolunteerDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-volunteer-detail',
        template: _raw_loader_volunteer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_volunteer_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VolunteerDetailPage);
      /***/
    },

    /***/
    "5MKl":
    /*!*************************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function MKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZvbHVudGVlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUNBO0VBQ0MsaUJBQUE7QUFFRCIsImZpbGUiOiJ2b2x1bnRlZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50X2xvY2F0aW9uX3NwcGluZXJ7XG5cdC0tY29sb3I6IzQxOUI5NTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3NwaW5uZXJfcG9zaXRpb257XG5cdG1hcmdpbi10b3A6MjUwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "FbHi":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer-detail/volunteer-detail.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FbHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width\">\n  <div class=\"food_request_heading size_18\">{{model.key_text9}}</div><br>\n  <ion-segment class=\"volunteer-tab\" [(ngModel)] = \"head_tab\" value=\"tab-1\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"tab-1\" >\n        <ion-label class=\"size_12 medium\" >{{model.key_text1}}</ion-label>    \n    </ion-segment-button>\n    <ion-segment-button value=\"tab-2\">\n      <ion-label class=\"size_12 medium\">{{model.key_text2}}</ion-label>    \n    </ion-segment-button>        \n    <ion-segment-button value=\"tab-3\">    \n      <ion-label class=\"size_12 medium\">{{model.key_text3}}</ion-label>                \n    </ion-segment-button>        \n  </ion-segment>      \n</div>\n<div [ngSwitch]=\"head_tab\">\n  <div class=\"food_request_new\" *ngSwitchCase=\"'tab-1'\">\n    <div class=\"food_request_entry\" *ngFor=\"let x of food_request;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;\">\n      <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n      <div class=\"entry_name\" style=\"width: 70%;\" *ngIf=\"mylang!='hi'\">\n        <span class=\"green\">{{x.name}}</span> \n        <br>\n        {{x.food_type | foodType}} {{model.key_text23}} {{x.no_of_person_leftfor_food}} {{model.key_text30}}\n        \n      </div> \n      <div class=\"entry_name\" style=\"width: 70%;\" *ngIf=\"mylang=='hi'\">\n        <span class=\"green\">{{x.name}}</span> \n        <br>\n        {{x.food_type | foodType}} {{model.key_text32}} {{x.no_of_person_leftfor_food}} <span *ngIf=\"x.no_of_person_leftfor_food > 1\">{{model.key_text24}}</span><span *ngIf=\"x.no_of_person_leftfor_food == 1\">{{model.key_text30}}</span> {{model.key_text33}}\n        \n      </div> \n      <div class=\"custom_new_close_btn entry_delete\" style=\"width: 11%;\">\n        <img src=\"assets/images/round_cross.svg\" style=\"margin-top:0px;\" (click)=\"presentAlertPrompt(x.id)\">\n      </div>      \n    </div>\n  \n  </div>\n  \n  <div class=\"food_request_new\" *ngSwitchCase=\"'tab-2'\">\n    <ion-row *ngFor=\"let x of onthe_way;let i = index;\" class=\"custom_new_single_row\">\n      <ion-col size=\"1\" style=\"padding: 0;\">\t\n        {{i+1}}.\n      </ion-col>\n      <ion-col size=\"8\" style=\"padding: 0; padding-right: 10px;\" >\n        {{ x.username }} {{x.food_type | foodType}}. {{model.key_text23}} {{x.no_of_person}} {{model.key_text24}}\n      </ion-col>\t\t\t  \n      <ion-col size=\"3\" style=\"padding: 0;\" >\n        <div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n      </ion-col>\n    </ion-row> \n  </div>\n  <div class=\"ion-padding theme_width\" *ngSwitchCase=\"'tab-3'\">\n\n    \n\n    <ion-segment class=\"volunteer-graph-tab\"  value=\"today\" (ionChange)=\"segmentChangedCompleted($event)\">  \n      <ion-segment-button value=\"today\" >\n          <ion-label class=\"size_12 medium\" >{{model.key_text8}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"week\">\n        <ion-label class=\"size_12 medium\">{{model.key_text18}}</ion-label>    \n      </ion-segment-button>        \n      <ion-segment-button value=\"month\">    \n        <ion-label class=\"size_12 medium\">{{model.key_text19}}</ion-label>                \n      </ion-segment-button> \n      <ion-segment-button value=\"year\">    \n        <ion-label class=\"size_12 medium\">{{model.key_text20}}</ion-label>                \n      </ion-segment-button>        \n    </ion-segment>   \n    <div class=\"count_detail\">\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-label class=\"size_14 medium\" >{{model.key_text21}}</ion-label> \n        </ion-col>\n        <ion-col size=\"1\">\n          :\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label class=\"size_14 medium\" >{{active_count}}</ion-label> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-label class=\"size_14 medium\" >{{model.key_text22}}</ion-label> \n        </ion-col>\n        <ion-col size=\"1\">\n          :\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label class=\"size_14 medium\" >{{full_count}} {{model.key_text29}}</ion-label> \n        </ion-col>\n      </ion-row>\n     </div> \n    \n     <div id=\"my_highcharts\" style=\"width:100%;\"></div>\n    <div class=\"border-bottom\"></div>\n    <div class=\"count_detail\">\n  \n      <div class=\"food_request_entry\" *ngFor=\"let x of completed_way;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;\">\n        <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n        <div class=\"entry_name\" style=\"width: 65%;\">\n          <span class=\"green\">{{x.username}}</span> \n          <br>\n          {{x.food_type | foodType}}. {{model.key_text23}} {{x.no_of_person}} {{model.key_text24}}\n        </div> \n        <div  routerLink=\"/view-feedback/{{x.feedback_id}}\" class=\"custom_new_close_btn entry_delete\" style=\"width: 28%;\" *ngIf=\"x.feedback_id\">\n          {{model.key_text25}}\n        </div>\n        <div routerLink=\"/feedback-form/{{x.app_user_id}}/{{x.id}}\" class=\"custom_new_close_btn entry_delete\" style=\"width: 28%;\" *ngIf=\"x.feedback_id =='' || x.feedback_id ==null\">\n          {{model.key_text26}}\n        </div>      \n      </div>\n    </div>\n    \n  </div>\n  </div>\n</ion-content>\n<app-footer [currentRoute]=\"'/volunteer-detail'\"></app-footer>\n\n";
      /***/
    },

    /***/
    "INBn":
    /*!*************************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail.module.ts ***!
      \*************************************************************/

    /*! exports provided: VolunteerDetailPageModule */

    /***/
    function INBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerDetailPageModule", function () {
        return VolunteerDetailPageModule;
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


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-google-charts */
      "omRQ");
      /* harmony import */


      var _volunteer_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./volunteer-detail-routing.module */
      "d6yE");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./volunteer-detail.page */
      "+ED7");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../captcha/captcha.component */
      "ekeA");
      /* harmony import */


      var _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../footer/footer.module */
      "PpLr");

      var VolunteerDetailPageModule = /*#__PURE__*/_createClass(function VolunteerDetailPageModule() {
        _classCallCheck(this, VolunteerDetailPageModule);
      });

      VolunteerDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_volunteer_detail_page__WEBPACK_IMPORTED_MODULE_8__["VolunteerDetailPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_9__["CaptchaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"], _volunteer_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["VolunteerDetailPageRoutingModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__["FooterPageModule"]]
      })], VolunteerDetailPageModule);
      /***/
    },

    /***/
    "d6yE":
    /*!*********************************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: VolunteerDetailPageRoutingModule */

    /***/
    function d6yE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerDetailPageRoutingModule", function () {
        return VolunteerDetailPageRoutingModule;
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


      var _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./volunteer-detail.page */
      "+ED7");

      var routes = [{
        path: '',
        component: _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_3__["VolunteerDetailPage"]
      }];

      var VolunteerDetailPageRoutingModule = /*#__PURE__*/_createClass(function VolunteerDetailPageRoutingModule() {
        _classCallCheck(this, VolunteerDetailPageRoutingModule);
      });

      VolunteerDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VolunteerDetailPageRoutingModule);
      /***/
    },

    /***/
    "omRQ":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js ***!
      \***********************************************************************************/

    /*! exports provided: ChartHTMLTooltip, GoogleChartComponent, GoogleChartEditor, GoogleChartType, GoogleChartsControlComponent, GoogleChartsDashboardComponent, GoogleChartsLoaderService, Ng2GoogleChartsModule */

    /***/
    function omRQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function () {
        return ChartHTMLTooltip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function () {
        return GoogleChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartEditor", function () {
        return GoogleChartEditor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartType", function () {
        return GoogleChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsControlComponent", function () {
        return GoogleChartsControlComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsDashboardComponent", function () {
        return GoogleChartsDashboardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function () {
        return GoogleChartsLoaderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function () {
        return Ng2GoogleChartsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GoogleChartsLoaderService = /*#__PURE__*/function () {
        function GoogleChartsLoaderService(localeId, googleChartsSettings) {
          var _this9 = this;

          _classCallCheck(this, GoogleChartsLoaderService);

          this.googleChartsSettings = googleChartsSettings;
          this.loadedPackages = [];
          this.loaded = false;
          var defaultSettings = {
            googleChartsVersion: '47',
            language: localeId
          };
          this.googleChartsSettings = Object.assign(Object.assign({}, defaultSettings), this.googleChartsSettings);
          this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.googleChartLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.googleScriptIsLoading = false;
          this.googleChartIsLoading = false;
          this.loadGoogleChartsScriptPromise = new Promise(function (resolve, reject) {
            if (typeof google !== 'undefined' && google.charts) {
              resolve();
            } else if (!_this9.googleScriptIsLoading) {
              _this9.googleScriptIsLoading = true;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = 'https://www.gstatic.com/charts/loader.js';
              script.async = true;
              script.defer = true;

              script.onload = function () {
                _this9.googleScriptIsLoading = false;

                _this9.googleScriptLoadingNotifier.emit(true);

                resolve();
              };

              script.onerror = function () {
                _this9.googleScriptIsLoading = false;

                _this9.googleScriptLoadingNotifier.emit(false);

                reject();
              };

              document.getElementsByTagName('head')[0].appendChild(script);
            } else {
              _this9.googleScriptLoadingNotifier.subscribe(function (loaded) {
                if (loaded) {
                  resolve();
                } else {
                  reject();
                }
              });
            }
          });
        }

        return _createClass(GoogleChartsLoaderService, [{
          key: "load",
          value: function load(settings) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this10 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadGoogleChartsScriptPromise;

                  case 2:
                    _context4.next = 4;
                    return new Promise(function (resolve) {
                      if (_this10.googleChartIsLoading) {
                        _this10.googleChartLoadingNotifier.subscribe(function () {
                          _this10.doLoad(resolve, settings);
                        });

                        return;
                      }

                      _this10.doLoad(resolve, settings);
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "doLoad",
          value: function doLoad(resolve, settings) {
            var _this11 = this;

            settings = Object.assign(Object.assign({}, this.googleChartsSettings), settings);

            if (!settings.packages && this.loaded) {
              resolve();
              return;
            }

            if (settings.packages) {
              var pkgs = settings.packages.filter(function (p) {
                return _this11.loadedPackages.indexOf(p) < 0;
              });

              if (pkgs.length == 0 && this.loaded) {
                resolve();
                return;
              }

              settings.packages = pkgs;
            }

            var _settings = settings;

            _settings.callback = function () {
              _this11.googleChartIsLoading = false;
              _this11.loadedPackages = _this11.loadedPackages.concat(_settings.packages);
              _this11.loaded = true;

              _this11.googleChartLoadingNotifier.emit();

              resolve();
            };

            this.googleChartIsLoading = true;
            google.charts.load(settings.googleChartsVersion, _settings);
          }
        }]);
      }();

      GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(t) {
        return new (t || GoogleChartsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('googleChartsSettings', 8));
      };

      GoogleChartsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function GoogleChartsLoaderService_Factory() {
          return new GoogleChartsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("googleChartsSettings", 8));
        },
        token: GoogleChartsLoaderService,
        providedIn: "root"
      });
      GoogleChartsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('googleChartsSettings')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object])], GoogleChartsLoaderService);

      var GoogleChartsDataTable = /*#__PURE__*/function () {
        function GoogleChartsDataTable(opt) {
          _classCallCheck(this, GoogleChartsDataTable);

          this.opt = opt;
          this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (opt) {
            this._setDataTable(opt.dataTable, opt.firstRowIsData);
          }
        }

        return _createClass(GoogleChartsDataTable, [{
          key: "send",
          value: function send() {
            var _this12 = this;

            if (this.query === undefined) {
              return;
            }

            this.query.send(function (queryResponse) {
              _this12.setDataTable(queryResponse.getDataTable());

              if (_this12.opt.queryCallback) {
                _this12.opt.queryCallback(queryResponse);
              }
            });
          }
        }, {
          key: "init",
          value: function init(opt) {
            var _this13 = this;

            if (opt) {
              this.opt = opt;
            }

            if (this.tid !== undefined) {
              // doesn't work, see https://github.com/google/google-visualization-issues/issues/2381
              // this.query.abort();
              window.clearInterval(this.tid);
              this.tid = undefined;
            }

            if (this.opt.dataSourceUrl) {
              this.query = new google.visualization.Query(this.opt.dataSourceUrl);

              if (this.opt.query) {
                this.query.setQuery(this.opt.query);
              }

              if (this.opt.timeout !== undefined) {
                this.query.setTimeout(this.opt.timeout);
              }

              if (this.opt.refreshInterval) {
                // this.query.setRefreshInterval(this.opt.refreshInterval);
                this.tid = window.setInterval(function () {
                  _this13.send();
                }, this.opt.refreshInterval * 1000);
              }

              this.send();
            } else {
              this.setDataTable(this.opt.dataTable);
            }
          }
          /**
           * @returns Underlying google.visualization.DataTable
           */

        }, {
          key: "getDataTable",
          value: function getDataTable() {
            return this.dataTable;
          }
        }, {
          key: "setDataTable",
          value: function setDataTable(dt, firstRowIsData) {
            if (firstRowIsData === undefined) {
              firstRowIsData = this.opt.firstRowIsData;
            }

            this._setDataTable(dt, firstRowIsData);

            this.dataTableChanged.emit(this.dataTable);
          }
        }, {
          key: "_setDataTable",
          value: function _setDataTable(dt, firstRowIsData) {
            if (Array.isArray(dt)) {
              dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
            }

            this.dataTable = dt;
            this.reformat();
          }
          /**
           * Applies formatters to data columns, if defined
           */

        }, {
          key: "reformat",
          value: function reformat() {
            var dt = this.dataTable;

            if (dt === undefined) {
              return;
            }

            if (this.opt.formatters === undefined) {
              return;
            }

            var _iterator = _createForOfIteratorHelper(this.opt.formatters),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var formatterConfig = _step.value;
                var formatter = void 0;

                if (formatterConfig.type === 'PatternFormat') {
                  var fmtOptions = formatterConfig.options;
                  formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
                  formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
                  continue;
                }

                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                formatter = new formatterConstructor(formatterOptions);

                if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                  var _fmtOptions = formatterOptions;

                  var _iterator2 = _createForOfIteratorHelper(_fmtOptions.ranges),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var range = _step2.value;

                      if (typeof range.fromBgColor !== 'undefined' && typeof range.toBgColor !== 'undefined') {
                        formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                      } else {
                        formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                var _iterator3 = _createForOfIteratorHelper(formatterConfig.columns),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var col = _step3.value;
                    formatter.format(dt, col);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);
      }();

      GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
      };

      GoogleChartsDataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: GoogleChartsDataTable,
        outputs: {
          dataTableChanged: "dataTableChanged"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartsDataTable.prototype, "dataTableChanged", void 0);

      var ChartHTMLTooltip = /*#__PURE__*/function () {
        function ChartHTMLTooltip(el) {
          _classCallCheck(this, ChartHTMLTooltip);

          this.el = el;
        }

        return _createClass(ChartHTMLTooltip, [{
          key: "setPosition",
          value: function setPosition(x, y) {
            this.el.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
            this.el.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
          }
        }, {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.el;
          }
        }]);
      }();

      ChartHTMLTooltip.PIXELS = 'px';
      var GoogleChartType;

      (function (GoogleChartType) {
        GoogleChartType["AnnotationChart"] = "AnnotationChart";
        GoogleChartType["AreaChart"] = "AreaChart";
        GoogleChartType["BarChart"] = "BarChart";
        GoogleChartType["BubbleChart"] = "BubbleChart";
        GoogleChartType["Calendar"] = "Calendar";
        GoogleChartType["CandlestickChart"] = "CandlestickChart";
        GoogleChartType["ColumnChart"] = "ColumnChart";
        GoogleChartType["ComboChart"] = "ComboChart";
        GoogleChartType["Gantt"] = "Gantt";
        GoogleChartType["Gauge"] = "Gauge";
        GoogleChartType["GeoChart"] = "GeoChart";
        GoogleChartType["Histogram"] = "Histogram";
        GoogleChartType["LineChart"] = "LineChart";
        GoogleChartType["Map"] = "Map";
        GoogleChartType["OrgChart"] = "OrgChart";
        GoogleChartType["PieChart"] = "PieChart";
        GoogleChartType["Sankey"] = "Sankey";
        GoogleChartType["ScatterChart"] = "ScatterChart";
        GoogleChartType["SteppedAreaChart"] = "SteppedAreaChart";
        GoogleChartType["Table"] = "Table";
        GoogleChartType["Timeline"] = "Timeline";
        GoogleChartType["TreeMap"] = "TreeMap";
        GoogleChartType["WordTree"] = "WordTree";
      })(GoogleChartType || (GoogleChartType = {}));

      var GoogleChartComponent = /*#__PURE__*/function () {
        function GoogleChartComponent(el, loaderService) {
          var _this14 = this;

          _classCallCheck(this, GoogleChartComponent);

          this.el = el;
          this.loaderService = loaderService;

          this.selectListener = function () {
            var event = {
              message: 'select',
              row: null,
              column: null,
              selectedRowValues: [],
              selectedRowFormattedValues: [],
              columnLabel: ''
            };

            var s = _this14.wrapper.visualization.getSelection();

            var gs = s[s.length - 1];

            if (!gs) {
              event.message = 'deselect';
              return event;
            }

            var selection = gs;

            if (gs.row != null) {
              event.row = selection.row;
              var selectedRowValues = [];
              var selectedRowFormattedValues = [];

              var dataTable = _this14.wrapper.getDataTable();

              var numberOfColumns = dataTable.getNumberOfColumns();

              for (var i = 0; i < numberOfColumns; i++) {
                selectedRowValues.push(dataTable.getValue(selection.row, i));
                selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
              }

              event.selectedRowValues = selectedRowValues;
              event.selectedRowFormattedValues = selectedRowFormattedValues;
            }

            if (selection.column != null) {
              event.column = selection.column;
              event.columnLabel = _this14.getColumnLabelAtPosition(selection);
            }

            if (gs.name) {
              event.columnLabel = gs.name;
            }

            return event;
          };

          this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.regionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.regionClickOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        return _createClass(GoogleChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.HTMLel = this.el.nativeElement.querySelector('div');

            if (Object.isExtensible(this.data)) {
              this.data.component = this;
            }

            this.options = this.data.options;
            this.init().then(function () {
              _this15.draw();
            });
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loaderService.load();

                  case 2:
                    this.recreateWrapper();

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "recreateWrapper",
          value: function recreateWrapper() {
            var _this16 = this;

            if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
              this.dataTable = new GoogleChartsDataTable(this.data);
              this.dataTable.dataTableChanged.subscribe(function (dt) {
                _this16._draw();
              }); // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart

              var temp = this.data;

              if (this.data.firstRowIsData) {
                temp = Object.assign(temp, this.data);
                temp.dataTable = this.dataTable.getDataTable();
              }

              this.wrapper = new google.visualization.ChartWrapper(temp);
              this.registerChartWrapperEvents();
              /* Calling draw even without data is the only way to pass the HTMl element
                 when using the chart in a dashboard. Don't do this in all other cases:
                 it breaks formatters with remote data source, hence the conditional. */

              if (temp.dataTable === undefined && temp.dataSourceUrl === undefined) {
                try {
                  this.wrapper.draw(this.HTMLel);
                } catch (err) {}
              }
            }
          }
        }, {
          key: "_draw",
          value: function _draw() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var dt;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    dt = this.dataTable.getDataTable();

                    if (!(dt === undefined)) {
                      _context6.next = 3;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 3:
                    this.convertOptions();
                    this.recreateWrapper();
                    this.wrapper.setOptions(this.options);
                    this.wrapper.setDataTable(dt);
                    this.wrapper.draw(this.HTMLel);

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getDataTable",
          value: function getDataTable() {
            return this.dataTable;
          }
        }, {
          key: "draw",
          value: function draw(value) {
            if (value === undefined) {
              value = this.data;
            }

            this.options = value.options;
            this.dataTable.init(value);
          }
        }, {
          key: "getSelectorBySeriesType",
          value: function getSelectorBySeriesType(seriesType) {
            var selectors = {
              bars: 'bar#%s#%r',
              haxis: 'hAxis#0#label',
              line: 'point#%s#%r',
              legend: 'legendentry#%s',
              area: 'point#%s#%r'
            };
            var selector = selectors[seriesType];
            return selector;
          }
          /**
           * Given a column number, counts how many
           * columns have rol=="data". Those are mapped
           * one-to-one to the series array. When rol is not defined
           * a column of type number means a series column.
           * @param column to inspect
           */

        }, {
          key: "getSeriesByColumn",
          value: function getSeriesByColumn(column) {
            var series = 0;
            var dataTable = this.wrapper.getDataTable();

            for (var i = column - 1; i >= 0; i--) {
              var role = dataTable.getColumnRole(i);
              var type = dataTable.getColumnType(i);

              if (role === 'data' || type === 'number') {
                series++;
              }
            }

            return series;
          }
        }, {
          key: "getBoundingBoxForItem",
          value: function getBoundingBoxForItem(item) {
            var boundingBox = {
              top: 0,
              left: 0,
              width: 0,
              height: 0
            };

            if (this.cli) {
              var column = item.column;
              var series = this.getSeriesByColumn(column);
              var row = item.row;
              var seriesType = this.options.seriesType;

              if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
              }

              if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);

                if (selector) {
                  selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                  var box = this.cli.getBoundingBox(selector);

                  if (box) {
                    boundingBox = box;
                  }
                }
              }
            }

            return boundingBox;
          }
        }, {
          key: "getValueAtPosition",
          value: function getValueAtPosition(position) {
            if (position.row == null) {
              return null;
            }

            var dataTable = this.wrapper.getDataTable();
            var value = dataTable.getValue(position.row, position.column);
            return value;
          }
        }, {
          key: "getColumnTypeAtPosition",
          value: function getColumnTypeAtPosition(position) {
            var dataTable = this.wrapper.getDataTable();
            var type = dataTable.getColumnType(position.column) || '';
            return type;
          }
        }, {
          key: "getColumnLabelAtPosition",
          value: function getColumnLabelAtPosition(position) {
            var dataTable = this.wrapper.getDataTable();
            var type = dataTable.getColumnLabel(position.column) || '';
            return type;
          }
        }, {
          key: "getHTMLTooltip",
          value: function getHTMLTooltip() {
            var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
            return new ChartHTMLTooltip(tooltipER);
          }
        }, {
          key: "parseMouseEvent",
          value: function parseMouseEvent(item) {
            var chartType = this.wrapper.getChartType();
            var eventColumn = item.column;

            if (eventColumn == null) {
              switch (chartType) {
                case 'Timeline':
                  eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                  break;

                default:
                  eventColumn = 0;
              }
            }

            var eventRow = item.row;
            var myItem = {
              row: eventRow,
              column: eventColumn
            };
            var event = {
              position: item,
              boundingBox: this.getBoundingBoxForItem(myItem),
              value: this.getValueAtPosition(myItem),
              columnType: this.getColumnTypeAtPosition(myItem),
              columnLabel: this.getColumnLabelAtPosition(myItem)
            };
            return event;
          }
        }, {
          key: "registerChartEvents",
          value: function registerChartEvents() {
            var _this17 = this;

            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;

            if (this.mouseOver.observers.length > 0) {
              google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this17.parseMouseEvent(item);

                event.tooltip = _this17.getHTMLTooltip();

                _this17.mouseOver.emit(event);
              });
            }

            if (this.mouseOverOneTime.observers.length > 0) {
              google.visualization.events.addOneTimeListener(chart, 'onmouseover', function (item) {
                var event = _this17.parseMouseEvent(item);

                event.tooltip = _this17.getHTMLTooltip();

                _this17.mouseOverOneTime.emit(event);
              });
            }

            if (this.mouseOut.observers.length > 0) {
              google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this17.parseMouseEvent(item);

                _this17.mouseOut.emit(event);
              });
            }

            if (this.mouseOutOneTime.observers.length > 0) {
              google.visualization.events.addOneTimeListener(chart, 'onmouseout', function (item) {
                var event = _this17.parseMouseEvent(item);

                _this17.mouseOutOneTime.emit(event);
              });
            }

            if (this.data.chartType === 'GeoChart') {
              if (this.regionClick.observers.length > 0) {
                google.visualization.events.addListener(chart, 'regionClick', function (item) {
                  _this17.regionClick.emit(item);
                });
              }

              if (this.regionClickOneTime.observers.length > 0) {
                google.visualization.events.addOneTimeListener(chart, 'regionClick', function (item) {
                  _this17.regionClick.emit(item);
                });
              }
            }
          }
        }, {
          key: "registerChartWrapperEvents",
          value: function registerChartWrapperEvents() {
            var _this18 = this;

            google.visualization.events.addListener(this.wrapper, 'ready', function () {
              _this18.chartReady.emit({
                message: 'Chart ready'
              });
            });
            google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
              _this18.chartReadyOneTime.emit({
                message: 'Chart ready (one time)'
              });

              _this18.registerChartEvents();
            });
            google.visualization.events.addListener(this.wrapper, 'error', function (error) {
              _this18.chartError.emit(error);
            });
            google.visualization.events.addOneTimeListener(this.wrapper, 'error', function (error) {
              _this18.chartErrorOneTime.emit(error);
            });
            this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
            this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
          }
        }, {
          key: "addListener",
          value: function addListener(source, eventType, listenerFn, evEmitter) {
            google.visualization.events.addListener(source, eventType, function () {
              evEmitter.emit(listenerFn());
            });
          }
        }, {
          key: "addOneTimeListener",
          value: function addOneTimeListener(source, eventType, listenerFn, evEmitter) {
            google.visualization.events.addOneTimeListener(source, eventType, function () {
              evEmitter.emit(listenerFn());
            });
          }
        }, {
          key: "convertOptions",
          value: function convertOptions() {
            try {
              this.options = google.charts[this.data.chartType].convertOptions(this.options);
            } catch (error) {
              return;
            }
          }
        }]);
      }();

      GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) {
        return new (t || GoogleChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartComponent,
        selectors: [["google-chart"]],
        inputs: {
          data: "data"
        },
        outputs: {
          chartSelect: "chartSelect",
          chartSelectOneTime: "chartSelectOneTime",
          chartReady: "chartReady",
          chartReadyOneTime: "chartReadyOneTime",
          chartError: "chartError",
          chartErrorOneTime: "chartErrorOneTime",
          mouseOver: "mouseOver",
          mouseOverOneTime: "mouseOverOneTime",
          mouseOut: "mouseOut",
          mouseOutOneTime: "mouseOutOneTime",
          regionClick: "regionClick",
          regionClickOneTime: "regionClickOneTime"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartComponent.prototype, "data", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartReady", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartError", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "regionClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "regionClickOneTime", void 0);
      GoogleChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartComponent);

      var GoogleChartsDashboardComponent = /*#__PURE__*/function () {
        function GoogleChartsDashboardComponent(el, loaderService) {
          _classCallCheck(this, GoogleChartsDashboardComponent);

          this.el = el;
          this.loaderService = loaderService;
          this.el = el;
          this.loaderService = loaderService;
        }

        return _createClass(GoogleChartsDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.data.component = this;
            this.init().then(function () {
              if (!_this19.dataTable) {
                _this19.dataTable = new GoogleChartsDataTable(_this19.data);

                _this19.dataTable.dataTableChanged.subscribe(function (dt) {
                  _this19._draw();
                });
              }

              _this19.draw();
            });
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _iterator4, _step4, b, controls, charts, _iterator5, _step5, c, _iterator6, _step6, _c, data;

              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loaderService.load({
                      packages: ['controls']
                    });

                  case 2:
                    this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
                    _iterator4 = _createForOfIteratorHelper(this.data.bind);
                    _context7.prev = 4;

                    _iterator4.s();

                  case 6:
                    if ((_step4 = _iterator4.n()).done) {
                      _context7.next = 52;
                      break;
                    }

                    b = _step4.value;
                    controls = b[0];
                    charts = b[1];

                    if (!(controls instanceof Array)) {
                      controls = [controls];
                    }

                    if (!(charts instanceof Array)) {
                      charts = [charts];
                    }

                    _iterator5 = _createForOfIteratorHelper(controls);
                    _context7.prev = 13;

                    _iterator5.s();

                  case 15:
                    if ((_step5 = _iterator5.n()).done) {
                      _context7.next = 21;
                      break;
                    }

                    c = _step5.value;
                    _context7.next = 19;
                    return c.component.ensureInit();

                  case 19:
                    _context7.next = 15;
                    break;

                  case 21:
                    _context7.next = 26;
                    break;

                  case 23:
                    _context7.prev = 23;
                    _context7.t0 = _context7["catch"](13);

                    _iterator5.e(_context7.t0);

                  case 26:
                    _context7.prev = 26;

                    _iterator5.f();

                    return _context7.finish(26);

                  case 29:
                    _iterator6 = _createForOfIteratorHelper(charts);
                    _context7.prev = 30;

                    _iterator6.s();

                  case 32:
                    if ((_step6 = _iterator6.n()).done) {
                      _context7.next = 41;
                      break;
                    }

                    _c = _step6.value;
                    _context7.next = 36;
                    return _c.component.init();

                  case 36:
                    data = _c.component.data;

                    if (!(data.dataTable !== undefined || data.dataSourceUrl !== undefined)) {
                      _context7.next = 39;
                      break;
                    }

                    throw Error('dataTable and dataSourceUrl cannot be specified when ' + 'chart is drawn in a Dashboard');

                  case 39:
                    _context7.next = 32;
                    break;

                  case 41:
                    _context7.next = 46;
                    break;

                  case 43:
                    _context7.prev = 43;
                    _context7.t1 = _context7["catch"](30);

                    _iterator6.e(_context7.t1);

                  case 46:
                    _context7.prev = 46;

                    _iterator6.f();

                    return _context7.finish(46);

                  case 49:
                    this.dashboard.bind(controls.map(function (x) {
                      return x.component.wrapper;
                    }), charts.map(function (x) {
                      return x.component.wrapper;
                    }));

                  case 50:
                    _context7.next = 6;
                    break;

                  case 52:
                    _context7.next = 57;
                    break;

                  case 54:
                    _context7.prev = 54;
                    _context7.t2 = _context7["catch"](4);

                    _iterator4.e(_context7.t2);

                  case 57:
                    _context7.prev = 57;

                    _iterator4.f();

                    return _context7.finish(57);

                  case 60:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this, [[4, 54, 57, 60], [13, 23, 26, 29], [30, 43, 46, 49]]);
            }));
          }
        }, {
          key: "draw",
          value: function draw(value) {
            this.dataTable.init(value);
          }
        }, {
          key: "_draw",
          value: function _draw() {
            this.dashboard.draw(this.dataTable.getDataTable());
          }
        }]);
      }();

      GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(t) {
        return new (t || GoogleChartsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartsDashboardComponent,
        selectors: [["google-charts-dashboard"]],
        inputs: {
          data: "data"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartsDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartsDashboardComponent.prototype, "data", void 0);
      GoogleChartsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartsDashboardComponent);

      var GoogleChartsControlComponent = /*#__PURE__*/function () {
        function GoogleChartsControlComponent(el, loaderService) {
          _classCallCheck(this, GoogleChartsControlComponent);

          this.el = el;
          this.loaderService = loaderService;
          this.el = el;
          this.loaderService = loaderService;
        }

        return _createClass(GoogleChartsControlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data.component = this;
          }
        }, {
          key: "ensureInit",
          value: function ensureInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var opt;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!this.wrapper) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 2:
                    _context8.next = 4;
                    return this.loaderService.load({
                      packages: ['controls']
                    });

                  case 4:
                    opt = Object.create(this.data);
                    opt.containerId = this.el.nativeElement.querySelector('div');
                    this.wrapper = new google.visualization.ControlWrapper(opt);

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }]);
      }();

      GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(t) {
        return new (t || GoogleChartsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartsControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartsControlComponent,
        selectors: [["google-charts-control"]],
        inputs: {
          data: "data"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartsControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartsControlComponent.prototype, "data", void 0);
      GoogleChartsControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartsControlComponent);

      var Ng2GoogleChartsModule = /*#__PURE__*/_createClass(function Ng2GoogleChartsModule() {
        _classCallCheck(this, Ng2GoogleChartsModule);
      });

      Ng2GoogleChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: Ng2GoogleChartsModule
      });
      Ng2GoogleChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function Ng2GoogleChartsModule_Factory(t) {
          return new (t || Ng2GoogleChartsModule)();
        },
        providers: [GoogleChartsLoaderService]
      });

      function isComponent(chart) {
        return chart.wrapper !== undefined;
      }

      var GoogleChartEditor = /*#__PURE__*/function () {
        function GoogleChartEditor(loaderService) {
          _classCallCheck(this, GoogleChartEditor);

          this.loaderService = loaderService;
        }

        return _createClass(GoogleChartEditor, [{
          key: "createEditor",
          value: function createEditor() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this20 = this;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    if (!(this.chartEditor !== undefined)) {
                      _context9.next = 2;
                      break;
                    }

                    return _context9.abrupt("return");

                  case 2:
                    _context9.next = 4;
                    return this.loaderService.load({
                      packages: ['charteditor']
                    });

                  case 4:
                    this.chartEditor = new google.visualization.ChartEditor();
                    google.visualization.events.addListener(this.chartEditor, 'ok', function () {
                      var wrapper = _this20.chartEditor.getChartWrapper();

                      _this20.comp.wrapper = wrapper;
                      _this20.comp.data.chartType = wrapper.getChartType();

                      if (_this20.comp.data.options !== undefined || Object.isExtensible(_this20.comp.data)) {
                        _this20.comp.data.options = wrapper.getOptions();
                      }

                      _this20.comp.wrapper.draw();
                    });

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "openDialog",
          value: function openDialog(chart, options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this21 = this;

              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.createEditor();

                  case 2:
                    return _context10.abrupt("return", new Promise(function (resolve, reject) {
                      _this21.comp = isComponent(chart) ? chart : chart.component;

                      _this21.chartEditor.openDialog(_this21.comp.wrapper, options);

                      google.visualization.events.addListener(_this21.chartEditor, 'ok', function () {
                        resolve(_this21.comp.wrapper);
                      });
                      google.visualization.events.addListener(_this21.chartEditor, 'cancel', function () {
                        reject();
                      });
                    }));

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }
        }]);
      }();

      GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(t) {
        return new (t || GoogleChartEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleChartsLoaderService));
      };

      GoogleChartEditor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function GoogleChartEditor_Factory() {
          return new GoogleChartEditor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(GoogleChartsLoaderService));
        },
        token: GoogleChartEditor,
        providedIn: "root"
      });
      GoogleChartEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleChartsLoaderService])], GoogleChartEditor);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsLoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: ['googleChartsSettings']
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-chart',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          chartSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartSelectOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartReadyOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartErrorOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOverOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOutOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          regionClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          regionClickOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-charts-dashboard',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-charts-control',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2GoogleChartsModule, {
          declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
          exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2GoogleChartsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
            providers: [GoogleChartsLoaderService],
            exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartEditor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: GoogleChartsLoaderService
          }];
        }, null);
      })();
      /*
       * Public API Surface of ng2-google-charts
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-google-charts.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=volunteer-detail-volunteer-detail-module-es5.js.map