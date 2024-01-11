(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523"], {
    /***/
    "3GZ/":
    /*!***********************************************************************************!*\
      !*** ./src/app/modal/current-location-content/current-location-content.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function GZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 53%;\n  margin-top: 18px;\n}\n\n.current_location_page_show {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n\n.map_desc_text {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1cnJlbnQtbG9jYXRpb24tY29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNILGdCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxhQUFBO0FBRUQ7O0FBQUE7RUFDQyxlQUFBO0FBR0Q7O0FBREE7RUFDQyxpQkFBQTtBQUlEOztBQUZBO0VBQ0MsdUJBQUE7RUFDRyxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUtKIiwiZmlsZSI6ImN1cnJlbnQtbG9jYXRpb24tY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUzJTtcblx0bWFyZ2luLXRvcDogMThweDtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3BhZ2Vfc2hvd3tcblx0ZGlzcGxheTpub25lO1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3BwaW5lcntcblx0LS1jb2xvcjojNDE5Qjk1O1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3Bpbm5lcl9wb3NpdGlvbntcblx0bWFyZ2luLXRvcDoyNTBweDtcbn1cbi5tYXBfZGVzY190ZXh0e1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufSJdfQ== */";
      /***/
    },

    /***/
    "QjQ/":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/current-location-content/current-location-content.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QjQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center class=\"current_location_spinner_position\" id=\"location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content class=\"current_location_page_show\">\n\t<div class=\"map current_location\">\n\t\t<img src=\"assets/images/close_btn.svg\" class=\"close_btn\" (click)=\"closeModal()\">\n\t</div>\n\t<div id=\"my_custom_on\" style=\"margin-top: 18px;\">\n\t\t<input type=\"text\" id=\"my_test\" (keyup)=\"updateSources()\" placeholder=\"{{model.key_text2}}\"> <ion-icon *ngIf=\"autocomplete.start\" (click)=\"blank('start')\" class=\"cross_on_the\" name=\"close-outline\"></ion-icon>\n\t  </div>\n\t  <ion-button shape=\"round\" id=\"saved\" class=\"address_button\" *ngFor=\"let add of saved_address;\" (click)=\"addMarker2(add.latitude, add.longitude)\" fill=\"outline\">{{add.adress_type}}</ion-button>\n\t<div #map id=\"map\"></div> \n\t<div class=\"ion-padding\">\n    <div class=\"map-icon\">\n\t\t<img src=\"assets/images/location_red.svg\">\n    </div>\n    <div class=\"map_desc\">\n\t\t<div class=\"size_16 map_desc_text\"> \n\t\t\t{{model.colony_name}}\n\t\t</div>\n    </div>\n  </div>\n  \n</ion-content>\n  \n<ion-footer class=\"current_location_page_show\">\n    <ion-toolbar>    \n\t\t<div class=\"app_button\">\n\t\t\t<span (click)=\"current_location()\">\n\t\t\t\t<button class=\"app_btn\">{{model.key_text1}}</button>\n\t\t\t</span>\n\t\t</div>\n    </ion-toolbar>\n</ion-footer>\n  ";
      /***/
    },

    /***/
    "rW5W":
    /*!*********************************************************************************!*\
      !*** ./src/app/modal/current-location-content/current-location-content.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: CurrentLocationContentPage */

    /***/
    function rW5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentLocationContentPage", function () {
        return CurrentLocationContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_current_location_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./current-location-content.page.html */
      "QjQ/");
      /* harmony import */


      var _current_location_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./current-location-content.page.scss */
      "3GZ/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "h+qT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CurrentLocationContentPage = /*#__PURE__*/function () {
        function CurrentLocationContentPage(modalController, navParams, geolocation, nativeGeocoder, router, fetch, storage, zone) {
          _classCallCheck(this, CurrentLocationContentPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.zone = zone;
          this.model = {};
          this.autocomplete = {};
          this.service = new google.maps.places.AutocompleteService();
          this.directionsService = new google.maps.DirectionsService();
          this.directionsRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true
          });
          this.markers = [];
          this.infowindow = new google.maps.InfoWindow();
          var self = this;
          self.options = {
            enableHighAccuracy: false
          };
          self.geolocation.getCurrentPosition(self.options).then(function (resp) {
            $('#location_spinner').css('display', 'none');
            $('.current_location_page_show').css('display', 'block');
            self.model.lat = resp.coords.latitude;
            self.model.lon = resp.coords.longitude;
            self.showAddress(self.model.lat, self.model.lon);
            var latLng = new google.maps.LatLng(self.model.lat, self.model.lon);
            var mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            self.map = new google.maps.Map(self.mapElement.nativeElement, mapOptions);
            self.addMarker();
          });
        }

        _createClass(CurrentLocationContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var lang_code, res, item1, _item, item2;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    lang_code = JSON.parse(localStorage.getItem('lang'));
                    res = this.storage.getScope();

                    if (this.paramTitle == 'donate_food') {
                      item1 = res.find(function (i) {
                        return i.key_text === 'CONFIRM_PICKUP_POINT';
                      });
                      this.model.key_text1 = item1[lang_code];
                    } else {
                      _item = res.find(function (i) {
                        return i.key_text === 'CONFIRM_LOCATION';
                      });
                      this.model.key_text1 = _item[lang_code];
                    }

                    item2 = res.find(function (i) {
                      return i.key_text === 'SEARCH';
                    });
                    this.model.key_text2 = item2[lang_code]; //});

                    this.model.confirm_route = JSON.parse(localStorage.getItem('set_confirm_location_route'));

                    if (this.model.confirm_route == null) {
                      this.model.confirm_route = 'donate-food';
                    }

                    this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                    this.fetch.get_user_locations(this.model.user_id).subscribe(function (res) {
                      if (res['success'] == true) {
                        _this.saved_address = res['data'];
                        var geocoder = new google.maps.Geocoder();
                        var address = _this.model.colony_name;
                        geocoder.geocode({
                          'address': address
                        }, function (results, status) {
                          if (status === 'OK') {
                            var latitude = results.geometry.location.lat();
                            var longitude = results.geometry.location.lng();
                            this.model.lat = latitude;
                            this.model.lon = longitude;
                          }
                        });
                      }
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismissSource",
          value: function dismissSource() {
            this.sources = [];
          }
        }, {
          key: "addMarker",
          value: function addMarker() {
            var _this2 = this;

            this.marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: this.map.getCenter(),
              draggable: true
            });
            var content = "<p>This is your current position !</p>";
            var infoWindow = new google.maps.InfoWindow({
              content: content
            });
            google.maps.event.addListener(this.marker, 'click', function () {
              infoWindow.open(_this2.map, _this2.marker);
            });
            this.lastLatLng(this.marker);
          }
        }, {
          key: "addMarker2",
          value: function addMarker2(lat, lng) {
            var _this3 = this;

            this.marker.setMap(null);
            this.showAddress(lat, lng);
            var mapOptions = {
              center: new google.maps.LatLng(lat, lng),
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: new google.maps.LatLng(lat, lng),
              draggable: true
            });
            var content = "<p>This is your current position !</p>";
            var infoWindow = new google.maps.InfoWindow({
              content: content
            });
            google.maps.event.addListener(this.marker, 'click', function () {
              infoWindow.open(_this3.map, _this3.marker);
            });
            this.model.LastLat = lat;
            this.model.LastLng = lng;
            this.model.lat = this.model.LastLat;
            this.model.lon = this.model.LastLng; //this.lastLatLng(this.marker);
          }
        }, {
          key: "lastLatLng",
          value: function lastLatLng(marker) {
            var _this4 = this;

            google.maps.event.addListener(marker, 'dragend', function () {
              _this4.model.LastLat = marker.position.lat();
              _this4.model.LastLng = marker.position.lng();
              _this4.model.lat = _this4.model.LastLat;
              _this4.model.lon = _this4.model.LastLng;

              _this4.showAddress(_this4.model.LastLat, _this4.model.LastLng);
            });
          }
        }, {
          key: "showAddress",
          value: function showAddress(lat, lon) {
            var _this5 = this;

            var self = this;
            var latLng = new google.maps.LatLng(lat, lon);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'latLng': latLng
            }, function (results, status) {
              _this5.model.colony_name = results[0].formatted_address;
              results[0].address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                  self.model.city = val.long_name;
                }

                if (val.types[0] == "administrative_area_level_1") {
                  self.model.state = val.long_name;
                }

                if (val.types[0] == "country") {
                  self.model.country = val.long_name;
                }

                if (val.types[0] == "postal_code") {
                  self.model.postalCode = val.long_name;
                }
              });

              if (_this5.model.confirm_route == "donate-food") {
                _this5.model.data = JSON.stringify({
                  'app_user_id': JSON.parse(localStorage.getItem('user_id')),
                  'house_no': null,
                  'landmark': null,
                  'adress_type': null,
                  'latitude': _this5.model.lat,
                  'longitude': _this5.model.lon,
                  'colony_name': _this5.model.colony_name,
                  'city': _this5.model.city,
                  'state': _this5.model.state,
                  'country': _this5.model.country,
                  'postalCode': _this5.model.postalCode
                });
                localStorage.setItem('donor_location', _this5.model.data); //alert(JSON.stringify(this.model.data));
              }

              if (_this5.model.confirm_route == "get-food-search") {
                _this5.model.data = JSON.stringify({
                  'latitude': _this5.model.lat,
                  'longitude': _this5.model.lon,
                  'colony_name': _this5.model.colony_name,
                  'city': _this5.model.city,
                  'state': _this5.model.state,
                  'country': _this5.model.country,
                  'postalCode': _this5.model.postalCode
                });
                localStorage.setItem('receiver_location', _this5.model.data);
              }

              if (_this5.model.confirm_route == "register-volunteer") {
                _this5.model.data = JSON.stringify({
                  'latitude': _this5.model.lat,
                  'longitude': _this5.model.lon,
                  'colony_name': _this5.model.colony_name,
                  'city': _this5.model.city,
                  'state': _this5.model.state,
                  'country': _this5.model.country,
                  'postalCode': _this5.model.postalCode
                }); //alert(JSON.stringify(this.model.data));
              }
            });
          }
        }, {
          key: "confirm_location",
          value: function confirm_location() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context2.next = 3;
                    return this.modalController.dismiss('');

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "current_location",
          value: function current_location() {
            this.modalController.dismiss(this.model.data);
          }
        }, {
          key: "blank",
          value: function blank(val) {
            if (val == 'start') {
              this.autocomplete.start = '';
              $("#my_test").val('');
            }
          }
        }, {
          key: "updateSources",
          value: function updateSources() {
            var _this6 = this;

            var center = {
              lat: this.model.lat,
              lng: this.model.lon
            }; // Create a bounding box with sides ~10km away from the center point

            var defaultBounds = {
              north: center.lat + 0.2,
              south: center.lat - 0.2,
              east: center.lng + 0.2,
              west: center.lng - 0.2
            };
            var options = {
              bounds: defaultBounds,
              componentRestrictions: {
                country: "in"
              },
              strictBounds: true,
              types: ["establishment"]
            };
            var input = document.getElementById("my_test");
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.addListener("place_changed", function () {
              var start_address = autocomplete.getPlace();
              var latitude = start_address.geometry.location.lat();
              var longitude = start_address.geometry.location.lng();
              _this6.model.lat = latitude;
              _this6.model.lon = longitude;
              _this6.autocomplete.start = start_address.formatted_address;

              _this6.geoCode(_this6.autocomplete.start, 'start');
            });
          }
        }, {
          key: "chooseSource",
          value: function chooseSource(item) {
            this.sources = [];
            this.autocomplete.start = item;
            this.geo = item;
            this.geoCode(this.geo, 'start'); //convert Address to lat and long
          } //convert Address string to lat and long

        }, {
          key: "geoCode",
          value: function geoCode(address, path) {
            var _this7 = this;

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': address
            }, function (results, status) {
              var address_components = results[0].address_components;
              var self = _this7;
              address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                  self.model.city = val.long_name;
                }

                if (val.types[0] == "administrative_area_level_1") {
                  self.model.state = val.long_name;
                }

                if (val.types[0] == "country") {
                  self.model.country = val.long_name;
                }

                if (val.types[0] == "postal_code") {
                  self.model.postalCode = val.long_name;
                }
              });

              if (path == 'start') {
                _this7.model.startLat = results[0].geometry.location.lat();
                _this7.model.startLng = results[0].geometry.location.lng();

                _this7.addMarker2(_this7.model.startLat, _this7.model.startLng);
              } // alert("lat: " + this.latitude + ", long: " + this.longitude);

            });
          }
        }]);

        return CurrentLocationContentPage;
      }();

      CurrentLocationContentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavParams"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_7__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      CurrentLocationContentPage.propDecorators = {
        paramTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      CurrentLocationContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-current-location-content',
        template: _raw_loader_current_location_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_current_location_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CurrentLocationContentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~choose-donate-option-choose-donate-option-module~donate-food-pickup-drop-donate-food-pickup-~fbebf523-es5.js.map