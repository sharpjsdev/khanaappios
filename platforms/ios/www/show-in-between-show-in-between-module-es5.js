(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show-in-between-show-in-between-module"], {
    /***/
    "1GTf":
    /*!***********************************************************!*\
      !*** ./src/app/show-in-between/show-in-between.module.ts ***!
      \***********************************************************/

    /*! exports provided: ShowInBetweenPageModule */

    /***/
    function GTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowInBetweenPageModule", function () {
        return ShowInBetweenPageModule;
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


      var _show_in_between_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./show-in-between-routing.module */
      "7RT8");
      /* harmony import */


      var _show_in_between_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./show-in-between.page */
      "AEvk");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var ShowInBetweenPageModule = /*#__PURE__*/_createClass(function ShowInBetweenPageModule() {
        _classCallCheck(this, ShowInBetweenPageModule);
      });

      ShowInBetweenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _show_in_between_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowInBetweenPageRoutingModule"]],
        declarations: [_show_in_between_page__WEBPACK_IMPORTED_MODULE_6__["ShowInBetweenPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], ShowInBetweenPageModule);
      /***/
    },

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
    "6IkM":
    /*!***********************************************************!*\
      !*** ./src/app/show-in-between/show-in-between.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function IkM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 285px;\n}\n\n.show_in_between_tab {\n  display: flex;\n}\n\n.show_in_between_tab ion-item {\n  width: 50%;\n}\n\n.show_in_between_tab input {\n  margin-inline-end: 15px;\n}\n\n.ion-padding {\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Nob3ctaW4tYmV0d2Vlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7QUFJSjs7QUFGQTtFQUNJLDhCQUFBO0FBS0oiLCJmaWxlIjoic2hvdy1pbi1iZXR3ZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjg1cHg7XG59XG4uc2hvd19pbl9iZXR3ZWVuX3RhYiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5zaG93X2luX2JldHdlZW5fdGFiIGlvbi1pdGVtIHtcbiAgICB3aWR0aDogNTAlO1xufVxuLnNob3dfaW5fYmV0d2Vlbl90YWIgaW5wdXQge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxNXB4O1xufVxuLmlvbi1wYWRkaW5ne1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "7RT8":
    /*!*******************************************************************!*\
      !*** ./src/app/show-in-between/show-in-between-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ShowInBetweenPageRoutingModule */

    /***/
    function RT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowInBetweenPageRoutingModule", function () {
        return ShowInBetweenPageRoutingModule;
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


      var _show_in_between_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./show-in-between.page */
      "AEvk");

      var routes = [{
        path: '',
        component: _show_in_between_page__WEBPACK_IMPORTED_MODULE_3__["ShowInBetweenPage"]
      }];

      var ShowInBetweenPageRoutingModule = /*#__PURE__*/_createClass(function ShowInBetweenPageRoutingModule() {
        _classCallCheck(this, ShowInBetweenPageRoutingModule);
      });

      ShowInBetweenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShowInBetweenPageRoutingModule);
      /***/
    },

    /***/
    "7j2l":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-in-between/show-in-between.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <center class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center> -->\n\n<ion-header>\n    \n  <app-captcha></app-captcha>\n  <div class=\"dark_grey_title regular size_18 white center\">\n    {{model.key_text1}}\n  </div>\n    <ion-searchbar [(ngModel)]=\"autocomplete.start\" placeholder=\"Source\" [showCancelButton]=\"true\"   (ionInput)=\"updateSources()\" (ionCancel)=\"dismissSource()\"></ion-searchbar>\n    <ion-list style=\"position: absolute;z-index: 999;\">\n      <ion-item *ngFor=\"let item of sources\" tappable   (click)=\"chooseSource(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n    <ion-searchbar [(ngModel)]=\"autocomplete.end\" placeholder=\"Destination\" [showCancelButton]=\"true\"   (ionInput)=\"updateDestinations()\" (ionCancel)=\"dismissDestination()\"></ion-searchbar>\n    <ion-list style=\"position: absolute;z-index: 999;\">\n      <ion-item *ngFor=\"let item of destination\" tappable   (click)=\"chooseDestination(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n   \n\n\n    <div style=\"display: flex;margin-top: 6px;\" class=\"custom_new_volunteer_btns\">\n      <div routerLink=\"/volunteer-request\">\n       {{ model.key_text15 }}\n      </div>\n      <div class=\"btn1 active\">\n        {{ model.key_text16 }}\n      </div>\n    </div>\n\n\n\n</ion-header>\n<ion-content class=\"current_location_page_show\">\n  \n  \n  <div #map id=\"map\"></div>\n  <div class=\"vfd_box\">\n    <div  *ngFor = \"let x of req_data; let i = index;\">\n      \n      <div class=\"vfd_single_entry\" *ngIf=\"x.veg > 0 || x.non_veg > 0 || x.any > 0\">\n        <div class=\"vfd_name green\">\n          {{i+1}}. {{x.username}} {{ x.app_user_id }} :-  <span *ngIf=\"x.veg > 0\">{{ model.key_text6 }}  {{ x.veg }} {{ model.key_text2 }} {{ model.key_text13 }} {{ model.key_text3 }} {{ model.key_text5 }}</span><span *ngIf=\"x.non_veg > 0\">, {{ model.key_text6 }} {{ x.non_veg }} {{ model.key_text2 }} {{ model.key_text13 }} {{ model.key_text4 }} {{ model.key_text5 }}</span><span *ngIf=\"x.any > 0\"> {{ x.any }} {{ model.key_text2 }} {{ model.key_text3 }}/{{ model.key_text4 }} {{ model.key_text5 }}</span>\n          <div style=\"float:right\">\n            <ion-badge class=\"size_15 medium\" style=\"margin-right: 6px;\n            background: #419B95;\n            color: white;\n            padding: 5px 5px 3px 5px;\n            border-radius: 30px\" (click)=\"call(x.mobile_no)\"><ion-icon name=\"call-outline\"></ion-icon></ion-badge>\n            <ion-badge routerLink=\"/donate-to-volunteer/{{ x.id }}\"  style=\"background-color:#6fb3af;padding:6px;\">{{ model.key_text14 }}</ion-badge>\n          </div>\n        </div>\n        <div class=\"vfd_location\">\n          <img src=\"assets/images/location_black.svg\">\n          <div class=\"vfd_address regular\">\n            <!-- {{x.colony_name}}, {{x.city}},\n            {{x.state}}, {{x.country}} -->\n            {{x.colony_name}}\n          </div>\n        </div>\n        </div>\n     \n    </div>\n  </div>\n  \n  </ion-content>\n  \n  \n  ";
      /***/
    },

    /***/
    "AEvk":
    /*!*********************************************************!*\
      !*** ./src/app/show-in-between/show-in-between.page.ts ***!
      \*********************************************************/

    /*! exports provided: ShowInBetweenPage */

    /***/
    function AEvk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowInBetweenPage", function () {
        return ShowInBetweenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_show_in_between_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./show-in-between.page.html */
      "7j2l");
      /* harmony import */


      var _show_in_between_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show-in-between.page.scss */
      "6IkM");
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");

      var ShowInBetweenPage = /*#__PURE__*/function () {
        function ShowInBetweenPage(geolocation, nativeGeocoder, alertController, http, route, router, fetch, platform, location, zone, modal, callNumber, storage) {
          var _this = this;

          _classCallCheck(this, ShowInBetweenPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.alertController = alertController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.platform = platform;
          this.location = location;
          this.zone = zone;
          this.modal = modal;
          this.callNumber = callNumber;
          this.storage = storage;
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
            start: '',
            end: ''
          };
        }

        _createClass(ShowInBetweenPage, [{
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
              self.model.LastLng = resp.coords.longitude;
              console.log(self.model.LastLat);
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
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'NEAREST_VOLUNTEER_LOCATIONS';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'PEOPLE';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'FOOD';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'WAITING';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'NEARBY_OTHER_VOLUNTEER';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'REQUEST_FOOD';
            });
            this.model.key_text8 = item8[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'FOR';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'DONATE_FOOD';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'CURRENT_LOCATION';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'SHOW_IN_BETWEEN';
            });
            this.model.key_text16 = item16[lang_code]; //});
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
            if (this.autocomplete.start == '') {
              this.sources = [];
              return;
            }

            var me = this;
            this.service.getPlacePredictions({
              input: this.autocomplete.start,
              componentRestrictions: {
                country: 'in'
              }
            }, function (predictions, status) {
              me.sources = [];
              me.zone.run(function () {
                if (predictions != null) {
                  predictions.forEach(function (prediction) {
                    me.sources.push(prediction.description);
                  });
                }
              });
            });
          }
        }, {
          key: "updateDestinations",
          value: function updateDestinations() {
            if (this.autocomplete.end == '') {
              this.destination = [];
              return;
            }

            var me = this;
            this.service.getPlacePredictions({
              input: this.autocomplete.end,
              componentRestrictions: {
                country: 'in'
              }
            }, function (predictions, status) {
              me.destination = [];
              me.zone.run(function () {
                if (predictions != null) {
                  predictions.forEach(function (prediction) {
                    me.destination.push(prediction.description);
                  });
                }
              });
            });
          } //convert Address string to lat and long

        }, {
          key: "geoCode",
          value: function geoCode(address, path) {
            var _this2 = this;

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': address
            }, function (results, status) {
              var address_components = results[0].address_components;
              var self = _this2;
              address_components.forEach(function (val, i) {
                if (val.types[0] == "locality") {
                  self.model.city = val.long_name;
                }
              });

              if (path == 'start') {
                _this2.model.startLat = results[0].geometry.location.lat();
                _this2.model.startLng = results[0].geometry.location.lng();

                _this2.showRoutes();
              }

              if (path == 'end') {
                _this2.model.endLat = results[0].geometry.location.lat();
                _this2.model.endLng = results[0].geometry.location.lng();

                _this2.showRoutes();
              } // alert("lat: " + this.latitude + ", long: " + this.longitude);

            });
          }
        }, {
          key: "changeChoice",
          value: function changeChoice(value) {
            this.router.navigate(['/volunteer-request']);
          }
        }, {
          key: "showRoutes",
          value: function showRoutes() {
            var _this3 = this;

            if (this.autocomplete.start != '' && this.autocomplete.end != '') {
              var data = JSON.stringify({
                startLat: this.model.startLat,
                startLng: this.model.startLng,
                endLat: this.model.endLat,
                endLng: this.model.endLng,
                city: this.model.city,
                user_id: this.model.user_id
              });
              this.fetch.get_volunteer_waypoints(data).subscribe(function (res) {
                var waypts = [];
                var waypointsData = [];
                res.data.forEach(function (val, i) {
                  waypts.push({
                    location: new google.maps.LatLng(val.latitude, val.longitude),
                    stopover: true
                  });
                  waypointsData.push({
                    location: new google.maps.LatLng(val.latitude, val.longitude),
                    name: val.username,
                    mobile_no: val.mobile_no
                  });
                });
                _this3.req_data = res.data;

                _this3.directionsRenderer.setMap(null);

                _this3.directionsRenderer.setDirections({
                  routes: []
                });

                for (var i = 0; i < _this3.markers.length; i++) {
                  _this3.markers[i].setMap(null);
                }

                _this3.directionsService.route({
                  origin: _this3.autocomplete.start,
                  destination: _this3.autocomplete.end,
                  waypoints: waypts,
                  optimizeWaypoints: true,
                  travelMode: google.maps.TravelMode.DRIVING
                }, function (response, status) {
                  if (status === "OK") {
                    _this3.directionsRenderer.setDirections(response);

                    _this3.directionsRenderer.setMap(_this3.map);

                    var startLocation = new Object();
                    var endLocation = new Object(); // var waypointLocations = [];

                    var legs = response.routes[0].legs;
                    console.log(legs);

                    for (var i = 0; i < legs.length; i++) {
                      if (i == 0) {
                        startLocation = legs[i].start_location;
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


                    _this3.waypoints = waypointsData;

                    _this3.createMarker(endLocation, "end", "special text for end marker", 0, "http://www.google.com/mapfiles/markerB.png");

                    _this3.createMarker(startLocation, "start", "special text for start marker", 0, "http://maps.gstatic.com/mapfiles/markers2/marker_greenA.png");

                    for (var i = 0; i < waypointsData.length; i++) {
                      _this3.createMarker(waypointsData[i].location, waypointsData[i].name, '', waypointsData[i].mobile_no, "http://www.google.com/mapfiles/marker_yellow.png");
                    }
                  } else {
                    window.alert("Directions request failed due to " + status);
                  }
                });
              });
            }
          }
        }, {
          key: "createMarker",
          value: function createMarker(latlng, label, html, mobile_no, url) {
            var _this4 = this;

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
              _this4.infowindow.setContent(contentString);

              _this4.infowindow.open(_this4.map, marker);
            });
          }
        }, {
          key: "call",
          value: function call(number) {
            var _this5 = this;

            var data = JSON.stringify({
              'caller_id': this.model.user_id,
              'callee_mobile_no': number
            });
            $('#add_location_spinner').show();
            this.fetch.add_call_detail(data).subscribe(function (res) {
              _this5.callNumber.callNumber("08069010223", true).then(function (res) {
                $('#add_location_spinner').show();
                console.log('Launched dialer!', res);
              })["catch"](function (err) {
                return console.log('Error launching dialer', err);
              });
            });
          }
        }]);

        return ShowInBetweenPage;
      }();

      ShowInBetweenPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }];
      };

      ShowInBetweenPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      ShowInBetweenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-in-between',
        template: _raw_loader_show_in_between_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"]],
        styles: [_show_in_between_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShowInBetweenPage);
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
            var _this6 = this;

            this.NotificationCount.data$.subscribe(function (newData) {
              _this6.notificationCount = newData;
            });
            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this6.notification = res['data'];
              _this6.notifications_admin = res['notifications'];

              if (_this6.notification.length != 0 || _this6.notifications_admin.length != 0) {
                $('#black_spot').show();
                var notifCount = _this6.notification.length + _this6.notifications_admin.length;

                _this6.NotificationCount.updateData(notifCount);
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
    }
  }]);
})();
//# sourceMappingURL=show-in-between-show-in-between-module-es5.js.map