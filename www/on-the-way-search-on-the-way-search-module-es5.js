(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["on-the-way-search-on-the-way-search-module"], {
    /***/
    "BWGN":
    /*!***************************************************************!*\
      !*** ./src/app/on-the-way-search/on-the-way-search.module.ts ***!
      \***************************************************************/

    /*! exports provided: OnTheWaySearchPageModule */

    /***/
    function BWGN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTheWaySearchPageModule", function () {
        return OnTheWaySearchPageModule;
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


      var _on_the_way_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./on-the-way-search-routing.module */
      "UbH3");
      /* harmony import */


      var _on_the_way_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./on-the-way-search.page */
      "C5Ha");

      var OnTheWaySearchPageModule = /*#__PURE__*/_createClass(function OnTheWaySearchPageModule() {
        _classCallCheck(this, OnTheWaySearchPageModule);
      });

      OnTheWaySearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _on_the_way_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnTheWaySearchPageRoutingModule"]],
        declarations: [_on_the_way_search_page__WEBPACK_IMPORTED_MODULE_6__["OnTheWaySearchPage"]]
      })], OnTheWaySearchPageModule);
      /***/
    },

    /***/
    "C5Ha":
    /*!*************************************************************!*\
      !*** ./src/app/on-the-way-search/on-the-way-search.page.ts ***!
      \*************************************************************/

    /*! exports provided: OnTheWaySearchPage */

    /***/
    function C5Ha(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTheWaySearchPage", function () {
        return OnTheWaySearchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_on_the_way_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./on-the-way-search.page.html */
      "OY+2");
      /* harmony import */


      var _on_the_way_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./on-the-way-search.page.scss */
      "y2dc");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var OnTheWaySearchPage = /*#__PURE__*/function () {
        function OnTheWaySearchPage(geolocation, nativeGeocoder, alertController, route, router, fetch, platform, location, zone, modal, storage) {
          var _this = this;

          _classCallCheck(this, OnTheWaySearchPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.alertController = alertController;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.platform = platform;
          this.location = location;
          this.zone = zone;
          this.modal = modal;
          this.storage = storage;
          this.voldata = [];
          this.volarr = [];
          this.pointarr = [];
          this.checkarr = [];
          this.volresult = [];
          this.finalarr = [];
          this.result2 = [];
          this.fooddata = [];
          this.finalfood = [];
          this.autocomplete = {};
          this.req_data = [];
          this.latitude = 0;
          this.longitude = 0;
          this.service = new google.maps.places.AutocompleteService();
          this.model = {};
          this.waypoints = [];
          this.directionsService = new google.maps.DirectionsService();
          this.directionsRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true
          });
          this.markers = [];
          this.infowindow = new google.maps.InfoWindow();
          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.location.back();
          });
          this.sources = [];
          this.destination = [];
          this.autocomplete = {
            start: "",
            end: ""
          };
        }

        return _createClass(OnTheWaySearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.user_id = JSON.parse(localStorage.getItem("user_registerd"));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            var start = localStorage.getItem("temp_start_address");
            var end = localStorage.getItem("temp_end_address");
            this.id = this.route.snapshot.params["id"];
            this.id2 = this.route.snapshot.params["id2"];

            if (this.id != 0) {
              this.fetch.reviewFood(this.id).subscribe(function (res) {
                if (res) {
                  _this2.fooddata = res.data;

                  _this2.fooddata.push(_this2.autocomplete);
                }
              });
            }

            if (this.id2 != 0) {
              this.fetch.reviewFood(this.id2).subscribe(function (res) {
                if (res) {
                  _this2.fooddata = res.data;

                  _this2.fooddata.push(_this2.autocomplete);
                }
              });
            }

            if (start) {
              this.autocomplete.start = start;
              console.log("staaarrrtt:", start);
            }

            if (end) {
              this.autocomplete.end = end;
              console.log("endddd:", end);
            }

            var self = this;
            self.options = {
              enableHighAccuracy: false
            };
            self.geolocation.getCurrentPosition(self.options).then(function (resp) {
              self.model.LastLat = resp.coords.latitude;
              self.model.LastLng = resp.coords.longitude;
              var latLng = new google.maps.LatLng(self.model.LastLat, self.model.LastLng);
              var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              self.map = new google.maps.Map(self.mapElement.nativeElement, mapOptions);
              self.directionsRenderer.setMap(self.map);
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var lang_code = JSON.parse(localStorage.getItem("lang")); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === "CONFIRM";
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === "NO_VOLUNTEER_FOUND";
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === "CLOSE";
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === "CHOOSE_STARTING_POINT";
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === "CHOOSE_DESTINATION";
            });
            this.model.key_text5 = item5[lang_code];
          }
        }, {
          key: "dismissSource",
          value: function dismissSource() {
            this.sources = [];
          }
        }, {
          key: "dismissDestination",
          value: function dismissDestination() {
            this.destination = [];
          }
        }, {
          key: "updateSources",
          value: function updateSources() {
            console.log("in");

            if (this.autocomplete.start != "") {
              this.geoCode(this.autocomplete.start, "start");
            }
          }
        }, {
          key: "updateDestinations",
          value: function updateDestinations() {
            if (this.autocomplete.end != "") {
              this.geoCode(this.autocomplete.end, "end");
            }
          }
        }, {
          key: "goToAddressSelection",
          value: function goToAddressSelection(type) {
            this.router.navigate(["/on-the-way-address", type]);
          } //convert Address string to lat and long

        }, {
          key: "geoCode",
          value: function geoCode(address, path) {
            var _this3 = this;

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              address: address
            }, function (results, status) {
              var address_components = results[0].address_components;
              var self = _this3;

              if (path == "start") {
                address_components.forEach(function (val, i) {
                  console.log("-", val);

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
              }

              if (path == "end") {
                address_components.forEach(function (val, i) {
                  console.log("-", val);

                  if (val.types[0] == "locality") {
                    self.model.endCity = val.long_name;
                  }

                  if (val.types[0] == "administrative_area_level_1") {
                    self.model.endState = val.long_name;
                  }

                  if (val.types[0] == "country") {
                    self.model.endCountry = val.long_name;
                  }

                  if (val.types[0] == "postal_code") {
                    self.model.endPostalCode = val.long_name;
                  }
                });
              }

              if (path == "start") {
                _this3.model.startLat = results[0].geometry.location.lat();
                _this3.model.startLng = results[0].geometry.location.lng();
                _this3.model.startColonyName = results[0].formatted_address;

                _this3.showRoutes();
              }

              if (path == "end") {
                _this3.model.endLat = results[0].geometry.location.lat();
                _this3.model.endLng = results[0].geometry.location.lng();
                _this3.model.endColonyName = results[0].formatted_address;

                _this3.showRoutes();
              } // alert("lat: " + this.latitude + ", long: " + this.longitude);

            });
          }
        }, {
          key: "showRoutes",
          value: function showRoutes() {
            var _this4 = this;

            if (this.autocomplete.start != "" && this.autocomplete.end != "") {
              var data = JSON.stringify({
                startLat: this.model.startLat,
                startLng: this.model.startLng,
                endLat: this.model.endLat,
                endLng: this.model.endLng,
                city: this.model.city,
                endCity: this.model.endCity,
                user_id: this.model.user_id
              }); //  this.fetch.get_volunteer_waypoints_by_condition(data).subscribe(res => {
              //     console.log("this is res:",res);
              //   console.log("this is res.data:",res.data);
              //    let waypts = [];
              //    let waypointsData = [];
              //   res.data.forEach((val,i)=>{
              //   console.log("this is val:",val);
              //   waypts.push({
              //   location: new google.maps.LatLng(val.latitude,val.longitude),
              // stopover: true
              //});
              //   waypointsData.push({
              //     location: new google.maps.LatLng(val.latitude,val.longitude),
              //     name : val.username,
              //     mobile_no : val.mobile_no
              //   });
              // });
              //  this.req_data = res.data;

              this.directionsRenderer.setMap(null);
              this.directionsRenderer.setDirections({
                routes: []
              });

              for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
              }

              this.directionsService.route({
                origin: this.autocomplete.start,
                destination: this.autocomplete.end,
                //   waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING
              }, function (response, status) {
                if (status === "OK") {
                  _this4.directionsRenderer.setDirections(response); /////////////////////////////


                  if (response.routes && response.routes.length > 0) {
                    console.log("this is response:", response);
                    var routes = response.routes;

                    for (var j = 0; j < routes.length; j++) {
                      var points = routes[j].overview_path; // var ul = document.getElementById("vertex");

                      for (var i = 0; i < points.length; i++) {
                        // var li = document.createElement('li');
                        // li.innerHTML = this.getLiText(points[i]);
                        var result = _this4.getLiText(points[i]);

                        console.log("path all latlong:", result); // ul.appendChild(li);
                        //  this.resultarr.push(result.lat,result.lng);

                        _this4.allpoints = new google.maps.LatLng(result.lat, result.lng);

                        _this4.pointarr.push(_this4.allpoints);

                        console.log(_this4.allpoints);
                      }
                    }
                  } /////////////////////////////


                  _this4.directionsRenderer.setMap(_this4.map);

                  var startLocation = new Object();
                  var endLocation = new Object(); // var waypointLocations = [];

                  var legs = response.routes[0].legs;
                  console.log("legs:", legs);

                  for (var i = 0; i < legs.length; i++) {
                    if (i == 0) {
                      startLocation = legs[i].start_location;
                    }

                    if (i == legs.length - 1) {
                      endLocation = legs[i].end_location;
                    }
                  } //console.log(waypointLocations);
                  // this.waypoints = waypointsData


                  _this4.createMarker(endLocation, "end", "special text for end marker", 0, "http://www.google.com/mapfiles/markerB.png");

                  _this4.createMarker(startLocation, "start", "special text for start marker", 0, "http://maps.gstatic.com/mapfiles/markers2/marker_greenA.png"); // for (var i = 0; i < waypointsData.length; i++) {
                  //   this.createMarker(waypointsData[i].location, waypointsData[i].name, '', waypointsData[i].mobile_no, "");
                  // }

                } else {
                  window.alert("Directions request failed due to " + status);
                }
              }); //  });
            }
          }
        }, {
          key: "getLiText",
          value: function getLiText(point) {
            var lat = point.lat(),
                lng = point.lng();
            return {
              lat: lat,
              lng: lng
            };
          }
        }, {
          key: "getvolText",
          value: function getvolText(point) {
            var lat = point.latitude,
                lng = point.longitude;
            return {
              lat: lat,
              lng: lng
            };
          }
        }, {
          key: "getcheckText",
          value: function getcheckText(point) {
            var res = point.res,
                vol = point.vol;
            return {
              res: res,
              vol: vol
            };
          }
        }, {
          key: "checkvolunteer",
          value: function checkvolunteer(vol, pathpoints) {
            var position = new google.maps.LatLng(vol.lat, vol.lng);
            var res = google.maps.geometry.poly.isLocationOnEdge(position, new google.maps.Polyline({
              path: pathpoints
            }), 0.0080);
            return {
              res: res,
              vol: vol
            };
          }
        }, {
          key: "createMarker",
          value: function createMarker(latlng, label, html, mobile_no, url) {
            var _this5 = this;

            if (mobile_no != 0) {
              var contentString = "<b>" + label + "</b><br>" + html;
            } else {
              var contentString = "<b>" + label + "</b><br>" + html;
            }

            var marker = new google.maps.Marker({
              position: latlng,
              map: this.map,
              icon: {
                url: url
              },
              title: label,
              zIndex: Math.round(latlng.lat() * -100000) << 5
            });
            this.markers.push(marker);
            google.maps.event.addListener(marker, "click", function () {
              _this5.infowindow.setContent(contentString);

              _this5.infowindow.open(_this5.map, marker);
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class custom_alert_1",
                      message: msg,
                      buttons: [{
                        text: this.model.key_text3,
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {//this.router.navigate(['/home']);
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
          key: "confirm",
          value: function confirm() {
            var _this6 = this;

            if (this.autocomplete.start != "" && this.autocomplete.end != "") {
              var data = JSON.stringify({
                startLat: this.model.startLat,
                startLng: this.model.startLng,
                endLat: this.model.endLat,
                endLng: this.model.endLng,
                endCity: this.model.endCity,
                colony_name: this.model.startColonyName,
                city: this.model.city,
                house_no: null,
                landmark: null,
                adress_type: null,
                state: this.model.state,
                country: this.model.country,
                postalCode: this.model.postalCode,
                app_user_id: this.model.user_id,
                id: this.id,
                id2: this.id2,
                vol: []
              });
              var fdata = JSON.parse(data);
              fdata.vol = this.fooddata;
              this.finalfood = fdata;
              this.fetch.get_volunteer_waypoints_new(data).subscribe(function (res) {
                if (res.data.length > 0) {
                  console.log("this is volunteer response:", res);
                  _this6.voldata = res.data;
                  var volunteer = res.data;

                  for (var j = 0; j < volunteer.length; j++) {
                    // var ul = document.getElementById("vertex");
                    var result = _this6.getvolText(volunteer[j]);

                    console.log("volunteer all latlong:", result);
                    _this6.volunteerpoints = result;

                    _this6.volarr.push(_this6.volunteerpoints);

                    console.log("volunteer points array:", _this6.volarr);
                  }

                  _this6.volarr.map(function (element, index) {
                    console.log("elements:", element);

                    var check = _this6.checkvolunteer(element, _this6.pointarr);

                    _this6.checkarr.push(check);

                    console.log("this is check:", _this6.checkarr);
                  });

                  var volcheck = _this6.checkarr;

                  for (var j = 0; j < volcheck.length; j++) {
                    var result2 = _this6.getcheckText(volcheck[j]);

                    console.log("vollatlng and res:", result2);

                    _this6.result2.push(result2);
                  }

                  _this6.result2.map(function (element, index) {
                    if (element.res == true) {
                      console.log("element.res:", element.res);

                      _this6.volresult.push(element);

                      console.log("volresult:", _this6.volresult);

                      _this6.volresult.map(function (element, index) {
                        console.log("final elements:", element);
                        var res = _this6.voldata;
                        var check1 = res.find(function (_ref) {
                          var latitude = _ref.latitude;
                          return latitude === element.vol.lat;
                        }); // var check1 = res.find((i) => i.latitude === element.vol.lat);

                        _this6.finalarr.push(check1);

                        console.log("this is final array:", _this6.finalarr);
                      });

                      var data1 = JSON.parse(data);
                      data1.vol = _this6.finalarr;
                      var data2 = JSON.stringify(data1);

                      _this6.fetch.alert_volunteer_on_true(data2).subscribe(function (res) {
                        _this6.router.navigate(["/searching-volunteer", _this6.id, _this6.id2]);
                      });
                    } else {
                      _this6.showAlert(_this6.model.key_text2);

                      console.log("fooddata:", _this6.fooddata);
                      var waitingdata = JSON.stringify(_this6.finalfood);
                      console.log(JSON.parse(waitingdata), "waitingdata");

                      _this6.fetch.store_food_for_waiting(waitingdata).subscribe(function (res) {
                        console.log("this is waiting response1:", res);
                      });

                      _this6.router.navigate(["/screen-after-volunteer-not-found", _this6.id, _this6.id2]);
                    }
                  });
                } else {
                  _this6.showAlert(_this6.model.key_text2);

                  console.log("fooddata:", _this6.finalfood);
                  var waitingdata = JSON.stringify(_this6.finalfood);
                  console.log("stringify fooddata:", waitingdata);

                  _this6.fetch.store_food_for_waiting(waitingdata).subscribe(function (res) {
                    console.log("this is waiting response2:", res);
                  });

                  _this6.router.navigate(["/screen-after-volunteer-not-found", _this6.id, _this6.id2]);
                }
              });
            }
          }
        }]);
      }();

      OnTheWaySearchPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_7__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      OnTheWaySearchPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["map"]
        }]
      };
      OnTheWaySearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-on-the-way-search",
        template: _raw_loader_on_the_way_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_the_way_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnTheWaySearchPage);
      /***/
    },

    /***/
    "OY+2":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/on-the-way-search/on-the-way-search.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <div class=\"regular size_18 white center\">\n  </div>\n    <ion-searchbar [(ngModel)]=\"autocomplete.start\" placeholder=\"{{model.key_text4}}\" [showCancelButton]=\"true\"   (ionChange)=\"updateSources()\" (ionCancel)=\"dismissSource()\" (click)=\"goToAddressSelection(1)\"></ion-searchbar>\n    \n    <ion-searchbar [(ngModel)]=\"autocomplete.end\" placeholder=\"{{model.key_text5}}\" [showCancelButton]=\"true\"   (ionChange)=\"updateDestinations()\" (ionCancel)=\"dismissDestination()\" (click)=\"goToAddressSelection(2)\"></ion-searchbar>\n    <div style=\"margin-left: 20px;\">\n      <div class=\"map-icon\">\n        <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n      </div>\n      <div class=\"map_desc\">      \n        <div class=\"regular size_12\">\n          Wearning a mask in some public spaces is required due to COVID - 19\n        </div> \n      </div>\n    </div> \n</ion-header>\n<ion-content class=\"current_location_page_show\">\n  <div #map id=\"map\"></div>\n  </ion-content>\n  <ion-footer class=\"current_location_page_show\">\n    <ion-toolbar>    \n\t\t<div class=\"app_button\" *ngIf=\"model.startLat && model.startLng && model.endLat && model.endLng\">\n\t\t\t<span (click)=\"confirm()\">\n\t\t\t\t<button class=\"app_btn\">{{model.key_text1}}</button>\n\t\t\t</span>\n\t\t\t<!--  <button class=\"app_btn\" (click)=\"confirm_location()\">Confirm Location</button> -->\n\t\t</div>\n    </ion-toolbar>\n</ion-footer>\n  \n  ";
      /***/
    },

    /***/
    "UbH3":
    /*!***********************************************************************!*\
      !*** ./src/app/on-the-way-search/on-the-way-search-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: OnTheWaySearchPageRoutingModule */

    /***/
    function UbH3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTheWaySearchPageRoutingModule", function () {
        return OnTheWaySearchPageRoutingModule;
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


      var _on_the_way_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./on-the-way-search.page */
      "C5Ha");

      var routes = [{
        path: '',
        component: _on_the_way_search_page__WEBPACK_IMPORTED_MODULE_3__["OnTheWaySearchPage"]
      }];

      var OnTheWaySearchPageRoutingModule = /*#__PURE__*/_createClass(function OnTheWaySearchPageRoutingModule() {
        _classCallCheck(this, OnTheWaySearchPageRoutingModule);
      });

      OnTheWaySearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnTheWaySearchPageRoutingModule);
      /***/
    },

    /***/
    "y2dc":
    /*!***************************************************************!*\
      !*** ./src/app/on-the-way-search/on-the-way-search.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function y2dc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n\nion-header {\n  padding-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9uLXRoZS13YXktc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6Im9uLXRoZS13YXktc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=on-the-way-search-on-the-way-search-module-es5.js.map