(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var ProfilePageModule = /*#__PURE__*/_createClass(function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      });

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(storage, http, route, router, fetch, alertController, platform, datepipe) {
          var _this = this;

          _classCallCheck(this, ProfilePage);

          this.storage = storage;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.alertController = alertController;
          this.platform = platform;
          this.datepipe = datepipe;
          this.notidata = {
            id: "",
            admin_notification: 0,
            app_notification: 0
          };
          this.model = {};
          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.router.navigate(['/home']);
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.search = false;
          }
        }, {
          key: "appNotifications",
          value: function appNotifications(app_noti) {
            // console.log("$event.detail.checked:",$event.detail.checked);
            // console.log("$event.detail.value:",$event.detail.value);
            // console.log("$event",$event);	
            var id = JSON.stringify(this.model.user_id);

            if (app_noti == true) {
              this.notidata.app_notification = 0, this.notidata.id = id;
              this.fetch.notify(this.notidata).subscribe(function (res) {
                console.log("this is notification response", res);
              });
            } else {
              this.notidata.app_notification = 1, this.notidata.id = id;
              this.fetch.notify(this.notidata).subscribe(function (res) {
                console.log("this is notification response", res);
              });
            }
          }
        }, {
          key: "adminNotifications",
          value: function adminNotifications(update_noti) {
            // console.log("admin $event.detail.checked:",$event.detail.checked);
            // console.log("admin $event.detail.value:",$event.detail.value);
            // console.log("admin $event",$event);
            var id = JSON.stringify(this.model.user_id);

            if (update_noti == true) {
              this.notidata.admin_notification = 0, this.notidata.id = id;
              this.fetch.notify(this.notidata).subscribe(function (res) {
                console.log("this is notification response", res);
              });
            } else {
              this.notidata.admin_notification = 1, this.notidata.id = id;
              this.fetch.notify(this.notidata).subscribe(function (res) {
                console.log("this is notification response", res);
              });
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.model.key_page_name = 'Profile Page';
            this.model.key_username = 'Username';
            this.model.key_dob = 'Date Of Birth';
            this.model.key_food_type = 'Type of food you prefer';
            this.model.key_veg = 'Veg';
            this.model.key_non_veg = 'Non Veg';
            this.model.key_both = 'Both';
            this.model.key_save_changes = 'Save Changes';
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
            var latest_date = this.datepipe.transform(maxDate, 'yyyy-MM-dd');
            this.model.latest_date = latest_date; //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'PROFILE_PAGE';
            });
            this.model.key_page_name = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'USERNAME';
            });
            this.model.key_username = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'DATE_OF_BIRTH';
            });
            this.model.key_dob = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'TYPE_OF_FOOD_YOU_PREFER';
            });
            this.model.key_food_type = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_veg = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_non_veg = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'ANY';
            });
            this.model.key_both = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'SAVE_CHANGES';
            });
            this.model.key_save_changes = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'THIS_FIELD_IS_REQUIRED';
            });
            this.model.key_valid = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'PROFILE_UPDATE_MSG';
            });
            this.model.succ_msg = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'OTHER_ADMIN';
            });
            this.model.other_admin = item12[lang_code];
            var item23 = res.find(function (i) {
              return i.key_text === 'CANCEL';
            });
            this.model.key_text23 = item23[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'DELETE_MY_ACCOUNT';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'DELETE_MY_ACCOUNT_CONFIRM';
            });
            this.model.key_text14 = item14[lang_code]; //});

            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            var data = JSON.stringify({
              'id': this.model.user_id
            });
            this.fetch.profile(data).subscribe(function (res) {
              _this2.notidata.admin_notification = res['admin_notification'];

              if (_this2.notidata.admin_notification == 1) {
                _this2.update_noti = false;
              } else {
                _this2.update_noti = true;
              }

              _this2.notidata.app_notification = res['app_notification'];

              if (_this2.notidata.app_notification == 1) {
                _this2.app_noti = false;
              } else {
                _this2.app_noti = true;
              }

              _this2.model.username = res['username'];
              _this2.model.dob = res['dob'];
              _this2.model.food_type = res['type_of_food_you_prefer'];
              $('#profile_food_' + res['type_of_food_you_prefer']).addClass('active');
            });
          }
        }, {
          key: "food_type",
          value: function food_type(val) {
            this.model.food_type = val;

            if (val == 1) {
              $('#profile_food_' + val).addClass('active');
              $('#profile_food_2').removeClass('active');
              $('#profile_food_3').removeClass('active');
            } else if (val == 2) {
              $('#profile_food_' + val).addClass('active');
              $('#profile_food_1').removeClass('active');
              $('#profile_food_3').removeClass('active');
            } else {
              $('#profile_food_' + val).addClass('active');
              $('#profile_food_2').removeClass('active');
              $('#profile_food_1').removeClass('active');
            }
          }
        }, {
          key: "update_profile",
          value: function update_profile() {
            var _this3 = this;

            this.model.search = true;
            var username = $('#profile_username').val();
            var dob = $('#profile_dob').val();

            if (!username) {
              this.model.search = false;
              $('#username').show();
              $('#dob').hide();
              $('#foodtype').hide();
            } else if (!dob) {
              this.model.search = false;
              $('#username').hide();
              $('#dob').show();
              $('#foodtype').hide();
            } else if (!this.model.food_type) {
              this.model.search = false;
              $('#username').hide();
              $('#dob').hide();
              $('#foodtype').show();
            } else {
              $('#username').hide();
              $('#dob').hide();
              $('#foodtype').hide();
              var profile_data = JSON.stringify({
                'id': this.model.user_id,
                'username': username,
                'dob': dob,
                'food_type': this.model.food_type
              });
              this.fetch.registerUser(profile_data).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var alert;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        this.model.search = false;

                        if (!(res.success == true)) {
                          _context.next = 7;
                          break;
                        }

                        _context.next = 4;
                        return this.alertController.create({
                          cssClass: 'my-custom-class',
                          //header: 'alert',
                          message: this.model.succ_msg,
                          buttons: [this.model.okay]
                        });

                      case 4:
                        alert = _context.sent;
                        _context.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, this);
                }));
              });
            }
          }
        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class custom_alert_1',
                      message: this.model.key_text14,
                      buttons: [{
                        text: this.model.key_text23,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.model.okay,
                        handler: function handler() {
                          var data = {
                            id: JSON.parse(localStorage.getItem('user_registerd'))
                          };

                          _this4.fetch.deleteMyAccount(data).subscribe(function (resp) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                while (1) switch (_context2.prev = _context2.next) {
                                  case 0:
                                    localStorage.clear();
                                    this.router.navigate(['/language']);

                                  case 2:
                                  case "end":
                                    return _context2.stop();
                                }
                              }, _callee2, this);
                            }));
                          });
                        }
                      }]
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

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"ion-padding\">\n    \n    <div class=\"single_page_title medium size_18\">\n      <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      {{model.key_page_name}}\n    </div>\n  </div>\n\n  <div class=\"ion-padding\">\n    <div class=\"profile app_input_text\">      \n      <input type=\"text\" id=\"profile_username\" value=\"{{model.username}}\" placeholder=\"{{model.key_username}}\">      \n    </div>\n    <span class=\"error\" id=\"username\">{{model.key_valid}}</span>  \n    <div class=\"profile app_input_text center_input\">    \n      <input type=\"text\" disabled>  \n      <ion-datetime placeholder=\"{{model.key_dob}}\" class=\"regular\" id=\"profile_dob\" value=\"{{model.dob}}\" max=\"{{ model.latest_date }}\" displayFormat=\"MMMM DD, YYYY\"></ion-datetime>         \n    </div> \n    <span class=\"error\" id=\"dob\">{{model.key_valid}}</span>  \n    <br><br>\n    <div class=\"grey\" style=\"margin-left: 23px;\">{{model.key_food_type}} : </div>\n\n    <div class=\"btn-group\">\n      <button class=\"grey regular btn2\" id=\"profile_food_1\" (click)=\"food_type(1)\">{{model.key_veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"profile_food_2\" (click)=\"food_type(2)\">{{model.key_non_veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"profile_food_3\" (click)=\"food_type(3)\">{{model.key_both}}</button>\n    </div> \n    <span class=\"error\" id=\"foodtype\">{{model.key_valid}}</span>  \n  </div>\n  <div>\n    <!-- <ion-item>\n      <ion-label>CURRENT UPDATE</ion-label>\n      <ion-toggle  [(ngModel)]=\"app_noti\" (ionChange)=\"appNotifications(app_noti)\"></ion-toggle>\n    </ion-item> -->\n  \n    <ion-item>\n      <ion-label>{{model.other_admin}}</ion-label>\n      <ion-toggle  [(ngModel)]=\"update_noti\" (ionChange)=\"adminNotifications(update_noti)\"></ion-toggle>\n    </ion-item>\n  </div>\n  <div class=\"delete-account\">\n    <ion-label (click)=\"deleteAccount()\"><ion-icon name=\"trash-outline\"></ion-icon> {{model.key_text13}}</ion-label>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n      <!-- <ion-router-link href=\"\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link> -->\n\t   <button class=\"app_btn\" (click)=\"update_profile()\" *ngIf=\"!model.search\">{{model.key_save_changes}}</button>\n     <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = /*#__PURE__*/_createClass(function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      });

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".error {\n  display: none;\n  color: red;\n  margin-left: 8px;\n}\n\nion-toggle {\n  --background: rgb(179, 179, 179);\n  --background-checked: #7be0da;\n  --handle-background: white;\n  --handle-background-checked: #419B95;\n}\n\n.delete-account {\n  padding: 15px;\n  font-size: 18px;\n  color: #419b95;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUVBLDBCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOnJlZDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuaW9uLXRvZ2dsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTc5LCAxNzksIDE3OSk7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM3YmUwZGE7XG4gIFxuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzQxOUI5NTtcbiAgfVxuLmRlbGV0ZS1hY2NvdW50IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzQxOWI5NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map