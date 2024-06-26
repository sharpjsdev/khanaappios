(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a"], {
    /***/
    "31T2":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/on-the-way/on-the-way.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function T2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"current_location_page_show\">\n  <!-- <div class=\"map current_location\">\n\t\t<img src=\"assets/images/close_btn.svg\" style=\"float:right;margin-right:20px;\" (click)=\"closeModal()\">\n\t</div> -->\n  <div id=\"my_custom_on\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" (click)=\"closeModal()\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <input type=\"text\" id=\"my_test\" (keyup)=\"updateSources()\" placeholder=\"{{model.key_text2}}\"> <ion-icon *ngIf=\"autocomplete.start\" (click)=\"blank('start')\" class=\"cross_on_the\" name=\"close-outline\"></ion-icon>\n    <input type=\"text\" id=\"my_test2\" (keyup)=\"updateDestinations()\" placeholder=\"{{model.key_text3}} \"> <ion-icon *ngIf=\"autocomplete.end\" (click)=\"blank('end')\" class=\"cross_cross_2\" name=\"close-outline\"></ion-icon>\n  </div>\n  \n  <!-- <ion-searchbar [(ngModel)]=\"autocomplete.start\" placeholder=\"choose starting point\" [showCancelButton]=\"true\"   (ionInput)=\"updateSources()\" (ionCancel)=\"dismissSource()\"></ion-searchbar>\n    <ion-list style=\"position: absolute;z-index: 999;\">\n      <ion-item *ngFor=\"let item of sources\" tappable   (click)=\"chooseSource(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n    <ion-searchbar style=\"margin-bottom:20px;\" [(ngModel)]=\"autocomplete.end\" placeholder=\"choose destination \" [showCancelButton]=\"true\"   (ionInput)=\"updateDestinations()\" (ionCancel)=\"dismissDestination()\"></ion-searchbar>\n    <ion-list style=\"position: absolute;z-index: 999;\">\n      <ion-item *ngFor=\"let item of destination\" tappable   (click)=\"chooseDestination(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list> -->\n\t<!-- <div class=\"map current_location\">\n\t\t<img src=\"assets/images/close_btn.svg\" class=\"close_btn\" (click)=\"closeModal()\">\n\t</div> -->\n\t<div #map id=\"map\"></div> \n  <div class=\"\" style=\"margin-left:10px;\" *ngIf=\"time_c\">\n    <p class=\"regular medium size_14 green\">{{time_c}} <span class=\"grey size_14\">({{distance_c}})</span></p>\n  </div>\n</ion-content>\n<ion-footer class=\"current_location_page_show\" > \n    <ion-toolbar>    \n\t\t<div class=\"app_button\" *ngIf=\"model.startLat && model.startLng && model.endLat && model.endLng\">\n\t\t\t<span (click)=\"current_location()\">\n\t\t\t\t<button class=\"app_btn\">{{model.key_text1}}</button>\n\t\t\t</span>\n\t\t\t<!--  <button class=\"app_btn\" (click)=\"confirm_location()\">Confirm Location</button> -->\n\t\t</div>\n    </ion-toolbar>\n</ion-footer>\n  ";
      /***/
    },

    /***/
    "JMo9":
    /*!*******************************************************!*\
      !*** ./src/app/modal/on-the-way/on-the-way.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function JMo9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29uLXRoZS13YXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJvbi10aGUtd2F5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzUwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "ZFA4":
    /*!*****************************************************!*\
      !*** ./src/app/modal/on-the-way/on-the-way.page.ts ***!
      \*****************************************************/

    /*! exports provided: OnTheWayPage */

    /***/
    function ZFA4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTheWayPage", function () {
        return OnTheWayPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_on_the_way_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./on-the-way.page.html */
      "31T2");
      /* harmony import */


      var _on_the_way_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./on-the-way.page.scss */
      "JMo9");
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


      var _fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var OnTheWayPage = /*#__PURE__*/function () {
        function OnTheWayPage(geolocation, nativeGeocoder, route, router, fetch, platform, location, modalController, zone, storage) {
          _classCallCheck(this, OnTheWayPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.platform = platform;
          this.location = location;
          this.modalController = modalController;
          this.zone = zone;
          this.storage = storage;
          this.pointarr = [];
          this.autocomplete = {};
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
          this.sources = [];
          this.destination = [];
          this.autocomplete = {
            start: '',
            end: ''
          };
        }

        _createClass(OnTheWayPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var self = this;
            self.options = {
              enableHighAccuracy: false
            };
            self.geolocation.getCurrentPosition(self.options).then(function (resp) {
              self.model.LastLat = resp.coords.latitude;
              self.model.LastLng = resp.coords.longitude; //self.getCurrentCity(resp.coords.latitude,resp.coords.longitude);

              var latLng = new google.maps.LatLng(self.model.LastLat, self.model.LastLng);
              var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              self.map = new google.maps.Map(document.getElementById('map'), mapOptions);
              self.directionsRenderer.setMap(self.map);
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'CONFIRM_LOCATION';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'CHOOSE_STARTING_POINT';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'CHOOSE_DESTINATION';
            });
            this.model.key_text3 = item3[lang_code]; //});
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
          key: "chooseSource",
          value: function chooseSource(item) {
            this.sources = [];
            this.autocomplete.start = item;
            this.geo = item;
            this.geoCode(this.geo, 'start'); //convert Address to lat and long
          }
        }, {
          key: "chooseDestination",
          value: function chooseDestination(item) {
            this.destination = [];
            this.autocomplete.end = item;
            this.geo = item;
            this.geoCode(this.geo, 'end'); //convert Address to lat and long
          }
        }, {
          key: "updateSources",
          value: function updateSources() {
            var _this = this;

            //alert(this.model.LastLat);
            //alert(this.model.LastLng);
            //console.log('-',input);
            // if ( this.autocomplete.start == '') {
            //  this.sources = [];
            // return;
            // }
            var center = {
              lat: this.model.LastLat,
              lng: this.model.LastLng
            }; // Create a bounding box with sides ~10km away from the center point

            var defaultBounds = {
              north: center.lat + 0.3,
              south: center.lat - 0.3,
              east: center.lng + 0.3,
              west: center.lng - 0.3
            };
            var options = {
              bounds: defaultBounds,
              componentRestrictions: {
                country: "in"
              },
              //fields: ["address_components", "geometry","icon", "name"],
              strictBounds: true,
              types: ["establishment"]
            };
            var input = document.getElementById("my_test");
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.addListener("place_changed", function () {
              var start_address = autocomplete.getPlace();
              _this.autocomplete.start = start_address.formatted_address;
              console.log(_this.autocomplete.start);

              _this.geoCode(_this.autocomplete.start, 'start'); //console.log(place);

            }); // var options = {
            //   //language: 'en-GB',
            //   types: ['(Ujjain)'],
            //   componentRestrictions: { country: "in" }
            // }
            // var input = $('.address-search');
            // var d = new google.maps.places.Autocomplete(input[0],options);
            // console.log(input[0]);
            // this.sources.push(d);
            // let me = this;
            //   this.service.getPlacePredictions({
            //   input: this.autocomplete.start,
            //   types: [this.model.currnet_city_name],
            //   componentRestrictions: {
            //     country: 'in'
            //   }
            // }, (predictions, status) => {
            // me.sources = [];
            // me.zone.run(() => {
            //   if (predictions != null) {
            //       predictions.forEach((prediction) => {
            //         me.sources.push(prediction.description);
            //       });
            //     }
            //   });
            // });
          }
        }, {
          key: "updateDestinations",
          value: function updateDestinations() {
            var _this2 = this;

            var center = {
              lat: this.model.LastLat,
              lng: this.model.LastLng
            }; // Create a bounding box with sides ~10km away from the center point

            var defaultBounds = {
              north: center.lat + 0.3,
              south: center.lat - 0.3,
              east: center.lng + 0.3,
              west: center.lng - 0.3
            };
            var options = {
              bounds: defaultBounds,
              componentRestrictions: {
                country: "in"
              },
              //fields: ["address_components", "geometry","icon", "name"],
              strictBounds: true,
              types: ["establishment"]
            };
            var input = document.getElementById("my_test2");
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.addListener("place_changed", function () {
              var end_address = autocomplete.getPlace();
              _this2.autocomplete.end = end_address.formatted_address;

              _this2.geoCode(_this2.autocomplete.end, 'end'); //console.log(place);

            }); // if ( this.autocomplete.end == '') {
            //  this.destination = [];
            // return;
            // }
            //   let me = this;
            //     this.service.getPlacePredictions({
            //     input: this.autocomplete.end,
            //     componentRestrictions: {
            //       country: 'in'
            //     }
            //   }, (predictions, status) => {
            //   me.destination = [];
            //   me.zone.run(() => {
            //     if (predictions != null) {
            //         predictions.forEach((prediction) => {
            //           me.destination.push(prediction.description);
            //         });
            //       }
            //     });
            //   });
          } //convert Address string to lat and long

        }, {
          key: "geoCode",
          value: function geoCode(address, path) {
            var _this3 = this;

            console.log(address);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': address
            }, function (results, status) {
              var address_components = results[0].address_components;
              var self = _this3;
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
                _this3.model.startLat = results[0].geometry.location.lat();
                _this3.model.startLng = results[0].geometry.location.lng();
                console.log(_this3.model.startLat);
                console.log(_this3.model.startLng);

                _this3.showRoutes();
              }

              if (path == 'end') {
                _this3.model.endLat = results[0].geometry.location.lat();
                _this3.model.endLng = results[0].geometry.location.lng();
                console.log(_this3.model.endLat);
                console.log(_this3.model.endLng);

                _this3.showRoutes();
              } // alert("lat: " + this.latitude + ", long: " + this.longitude);

            });
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
          key: "showRoutes",
          value: function showRoutes() {
            var _this4 = this;

            if (this.autocomplete.start != '' && this.autocomplete.end != '') {
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
                waypoints: [],
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING
              }, function (response, status) {
                if (status === "OK") {
                  _this4.directionsRenderer.setDirections(response);

                  if (response.routes && response.routes.length > 0) {
                    console.log("this is response:", response);
                    var routes = response.routes;

                    for (var j = 0; j < routes.length; j++) {
                      var points = routes[j].overview_path; // var ul = document.getElementById("vertex");

                      for (var i = 0; i < points.length; i++) {
                        // var li = document.createElement('li');
                        // li.innerHTML = this.getLiText(points[i]);
                        var result = _this4.getLiText(points[i]); // ul.appendChild(li);
                        //  this.resultarr.push(result.lat,result.lng);


                        _this4.allpoints = new google.maps.LatLng(result.lat, result.lng);

                        _this4.pointarr.push(_this4.allpoints);

                        console.log(_this4.allpoints);
                        _this4.model.allpoints = _this4.allpoints;
                        _this4.model.pointarr = _this4.pointarr;
                        _this4.model.alllatlng = result;
                      }
                    }
                  }

                  _this4.directionsRenderer.setMap(_this4.map);

                  var startLocation = new Object();
                  var endLocation = new Object(); // var waypointLocations = [];

                  var legs = response.routes[0].legs;
                  console.log(legs);

                  for (var i = 0; i < legs.length; i++) {
                    if (i == 0) {
                      startLocation = legs[i].start_location;
                      _this4.time_c = legs[i].duration.text;
                      _this4.distance_c = legs[i].distance.text;
                    } // if (i != 0 && i != legs.length - 1) { 
                    //   var waypoint = {latlng : '', address : ''};
                    //   waypoint.latlng = legs[i].start_location;
                    //   waypoint.address = legs[i].start_address;
                    //   waypointLocations.push(waypoint);
                    // }


                    if (i == legs.length - 1) {
                      endLocation = legs[i].end_location;
                    }
                  } //console.log(waypointLocations);


                  _this4.createMarker(endLocation, "end", "special text for end marker", 0, "http://www.google.com/mapfiles/markerB.png");

                  _this4.createMarker(startLocation, "start", "special text for start marker", 0, "http://maps.gstatic.com/mapfiles/markers2/marker_greenA.png");
                } else {
                  window.alert("Directions request failed due to " + status);
                }
              });
            }
          }
        }, {
          key: "createMarker",
          value: function createMarker(latlng, label, html, mobile_no, url) {
            var _this5 = this;

            if (mobile_no != 0) {
              var contentString = '<b>' + label + '</b><br>' + html;
            } else {
              var contentString = '<b>' + label + '</b><br>' + html;
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
            google.maps.event.addListener(marker, 'click', function () {
              _this5.infowindow.setContent(contentString);

              _this5.infowindow.open(_this5.map, marker);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var onClosedData;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    onClosedData = [];
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
          key: "current_location",
          value: function current_location() {
            //alert(JSON.stringify(this.model.data));
            var data = [];

            if (this.autocomplete.start && this.autocomplete.end) {
              data.push(this.model);
              data.push(this.autocomplete);
            }

            this.modalController.dismiss(data);
          }
        }, {
          key: "blank",
          value: function blank(val) {
            if (val == 'start') {
              this.autocomplete.start = '';
              $("#my_test").val('');
            } else {
              this.autocomplete.end = '';
              $("#my_test2").val('');
            }
          }
        }]);

        return OnTheWayPage;
      }();

      OnTheWayPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }];
      };

      OnTheWayPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      OnTheWayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-on-the-way',
        template: _raw_loader_on_the_way_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_the_way_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnTheWayPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~get-food-search-get-food-search-module~modal-on-the-way-on-the-way-module~search-food-screen~a5287e9a-es5.js.map