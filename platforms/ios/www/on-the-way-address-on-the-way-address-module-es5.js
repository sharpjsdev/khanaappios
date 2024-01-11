(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["on-the-way-address-on-the-way-address-module"], {
    /***/
    "626O":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/on-the-way-address/on-the-way-address.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\n    <!-- <ion-searchbar [(ngModel)]=\"autocomplete.start\" *ngIf=\"type == 1\" placeholder=\"choose starting point\" [showCancelButton]=\"true\"   (ionInput)=\"updateSources()\" (ionCancel)=\"dismissSource()\"></ion-searchbar>\n    <ion-list style=\"position: absolute;z-index: 999;\">\n      <ion-item *ngFor=\"let item of sources\" tappable   (click)=\"chooseSource(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n    <ion-searchbar [(ngModel)]=\"autocomplete.end\" *ngIf=\"type == 2\" placeholder=\"choose destination\" [showCancelButton]=\"true\"   (ionInput)=\"updateDestinations()\" (ionCancel)=\"dismissDestination()\"></ion-searchbar>\n    <ion-list style=\"position: absolute;z-index: 999;\">\n      <ion-item *ngFor=\"let item of destination\" tappable   (click)=\"chooseDestination(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list> -->\n    <div id=\"my_custom_on\">\n      <input type=\"text\" id=\"my_test\" *ngIf=\"type == 1\" (keyup)=\"updateSources()\" placeholder=\"{{model.key_text2}}\"> <ion-icon *ngIf=\"autocomplete.start\" (click)=\"blank('start')\" class=\"cross_on_the\" name=\"close-outline\"></ion-icon>\n      <input type=\"text\" id=\"my_test2\"  *ngIf=\"type == 2\" (keyup)=\"updateDestinations()\" placeholder=\"{{model.key_text3}}\"> <ion-icon *ngIf=\"autocomplete.end\" (click)=\"blank('end')\" class=\"cross_cross_2\" name=\"close-outline\"></ion-icon>\n    </div>\n<div style=\"display: flex;margin-top: 6px;\" class=\"custom_new_volunteer_btns ion-padding\" (click)=\"getYourLocation()\">\n  <ion-icon name=\"navigate-outline\" class=\"navigation_icon_css\"></ion-icon> {{model.key_text1}}\n</div>\n</ion-header>\n<ion-content>\n  <div class=\"address_btn_div\">\n    <ion-button shape=\"round\" class=\"custome_address_btn\" *ngFor=\"let add of saved_address;\" (click)=\"saveAdd(add.colony_name)\">{{add.adress_type}}</ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "7EXW":
    /*!*****************************************************************!*\
      !*** ./src/app/on-the-way-address/on-the-way-address.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function EXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  padding-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29uLXRoZS13YXktYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6Im9uLXRoZS13YXktYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "cSTq":
    /*!*****************************************************************!*\
      !*** ./src/app/on-the-way-address/on-the-way-address.module.ts ***!
      \*****************************************************************/

    /*! exports provided: OnTheWayAddressPageModule */

    /***/
    function cSTq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTheWayAddressPageModule", function () {
        return OnTheWayAddressPageModule;
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


      var _on_the_way_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./on-the-way-address-routing.module */
      "prpN");
      /* harmony import */


      var _on_the_way_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./on-the-way-address.page */
      "p0rS");

      var OnTheWayAddressPageModule = /*#__PURE__*/_createClass(function OnTheWayAddressPageModule() {
        _classCallCheck(this, OnTheWayAddressPageModule);
      });

      OnTheWayAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _on_the_way_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnTheWayAddressPageRoutingModule"]],
        declarations: [_on_the_way_address_page__WEBPACK_IMPORTED_MODULE_6__["OnTheWayAddressPage"]]
      })], OnTheWayAddressPageModule);
      /***/
    },

    /***/
    "p0rS":
    /*!***************************************************************!*\
      !*** ./src/app/on-the-way-address/on-the-way-address.page.ts ***!
      \***************************************************************/

    /*! exports provided: OnTheWayAddressPage */

    /***/
    function p0rS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTheWayAddressPage", function () {
        return OnTheWayAddressPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_on_the_way_address_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./on-the-way-address.page.html */
      "626O");
      /* harmony import */


      var _on_the_way_address_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./on-the-way-address.page.scss */
      "7EXW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "h+qT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");

      var OnTheWayAddressPage = /*#__PURE__*/function () {
        function OnTheWayAddressPage(geolocation, nativeGeocoder, alertController, http, fetch, platform, location, zone, storage, router, route, diagnostic) {
          var _this = this;

          _classCallCheck(this, OnTheWayAddressPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.alertController = alertController;
          this.http = http;
          this.fetch = fetch;
          this.platform = platform;
          this.location = location;
          this.zone = zone;
          this.storage = storage;
          this.router = router;
          this.route = route;
          this.diagnostic = diagnostic;
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
          this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
          };
          this.markers = [];
          this.infowindow = new google.maps.InfoWindow();
          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.location_back();
          });
          this.sources = [];
          this.destination = [];
          this.autocomplete = {
            start: '',
            end: ''
          };
        }

        _createClass(OnTheWayAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.type = this.route.snapshot.params['id'];
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.diagnostic.isLocationAvailable().then(function (resp) {
              if (!resp) {
                _this2.router.navigate(['/home']);
              }
            })["catch"](function (error) {
              _this2.router.navigate(['/home']);
            });
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
            this.fetch.get_user_locations(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this2.saved_address = res['data'];
                console.log(_this2.saved_address); //this.donate_address = res['data'][0];  
              }
            }); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'YOUR_LOCATION';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'CHOOSE_STARTING_POINT';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'CHOOSE_DESTINATION';
            });
            this.model.key_text3 = item3[lang_code];
            this.type = this.route.snapshot.params['id'];
            var self = this;
            self.options = {
              enableHighAccuracy: false
            };
            self.geolocation.getCurrentPosition(self.options).then(function (resp) {
              self.model.LastLat = resp.coords.latitude;
              self.model.LastLng = resp.coords.longitude;

              _this2.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

              var latLng = new google.maps.LatLng(self.model.LastLat, self.model.LastLng);
              var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
            });
          } //geocoder method to fetch address from coordinates passed as arguments

        }, {
          key: "getGeoencoder",
          value: function getGeoencoder(latitude, longitude) {
            var _this3 = this;

            this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions).then(function (result) {
              _this3.curr_address = _this3.generateAddress(result[0]);
              console.log('your location', _this3.curr_address);
            })["catch"](function (error) {// alert('Error getting location' + JSON.stringify(error));
            });
          } //Return Comma saperated address

        }, {
          key: "generateAddress",
          value: function generateAddress(addressObj) {
            var obj = [];
            var address = "";

            for (var key in addressObj) {
              obj.push(addressObj[key]);
            }

            obj.reverse();

            for (var val in obj) {
              if (obj[val].length) address += obj[val] + ', ';
            }

            return address.slice(0, -2);
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
            localStorage.setItem('temp_start_address', this.autocomplete.start);
            this.location_back();
            this.geo = item; //this.geoCode(this.geo,'start');//convert Address to lat and long
          }
        }, {
          key: "chooseDestination",
          value: function chooseDestination(item) {
            this.destination = [];
            this.autocomplete.end = item;
            localStorage.setItem('temp_end_address', this.autocomplete.end);
            this.location_back();
            this.geo = item; //this.geoCode(this.geo,'end');//convert Address to lat and long
          }
        }, {
          key: "saveAdd",
          value: function saveAdd(add) {
            if (this.type == 1) {
              localStorage.setItem('temp_start_address', add);
              this.location_back();
            } else {
              localStorage.setItem('temp_end_address', add);
              this.location_back();
            }
          }
        }, {
          key: "updateSources",
          value: function updateSources() {
            var _this4 = this;

            var center = {
              lat: this.model.LastLat,
              lng: this.model.LastLng
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
              //fields: ["address_components", "geometry","icon", "name"],
              strictBounds: true,
              types: ["establishment"]
            };
            var input = document.getElementById("my_test");
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.addListener("place_changed", function () {
              var start_address = autocomplete.getPlace();
              _this4.autocomplete.start = start_address.formatted_address;
              localStorage.setItem('temp_start_address', _this4.autocomplete.start);

              _this4.location_back();
            }); // if ( this.autocomplete.start == '') {
            //  this.sources = [];
            // return;
            // }
            //   let me = this;
            //     this.service.getPlacePredictions({
            //     input: this.autocomplete.start,
            //     componentRestrictions: {
            //       country: 'in'
            //     }
            //   }, (predictions, status) => {
            //   me.sources = [];
            //   me.zone.run(() => {
            //     if (predictions != null) {
            //         predictions.forEach((prediction) => {
            //           me.sources.push(prediction.description);
            //         });
            //       }
            //     });
            //   });
          }
        }, {
          key: "updateDestinations",
          value: function updateDestinations() {
            var _this5 = this;

            var center = {
              lat: this.model.LastLat,
              lng: this.model.LastLng
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
              //fields: ["address_components", "geometry","icon", "name"],
              strictBounds: true,
              types: ["establishment"]
            };
            var input = document.getElementById("my_test2");
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.addListener("place_changed", function () {
              var end_address = autocomplete.getPlace();
              _this5.autocomplete.end = end_address.formatted_address;
              localStorage.setItem('temp_end_address', _this5.autocomplete.end);

              _this5.location_back(); //console.log(place);

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
          }
        }, {
          key: "getYourLocation",
          value: function getYourLocation() {
            if (this.type == 1) {
              localStorage.setItem('temp_start_address', this.curr_address);
              this.location_back();
            } else {
              localStorage.setItem('temp_end_address', this.curr_address);
              this.location_back();
            }
          }
        }, {
          key: "location_back",
          value: function location_back() {
            console.log();

            if (this.type == 1) {
              var temp_address = localStorage.getItem("temp_start_address");
            } else {
              var temp_address = localStorage.getItem("temp_end_address");
            }

            if (temp_address && temp_address != 'undefined') {
              this.location.back();
            } else {
              return false;
            }
          }
        }]);

        return OnTheWayAddressPage;
      }();

      OnTheWayAddressPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_9__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_12__["Diagnostic"]
        }];
      };

      OnTheWayAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-on-the-way-address',
        template: _raw_loader_on_the_way_address_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_the_way_address_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnTheWayAddressPage);
      /***/
    },

    /***/
    "prpN":
    /*!*************************************************************************!*\
      !*** ./src/app/on-the-way-address/on-the-way-address-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: OnTheWayAddressPageRoutingModule */

    /***/
    function prpN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnTheWayAddressPageRoutingModule", function () {
        return OnTheWayAddressPageRoutingModule;
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


      var _on_the_way_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./on-the-way-address.page */
      "p0rS");

      var routes = [{
        path: '',
        component: _on_the_way_address_page__WEBPACK_IMPORTED_MODULE_3__["OnTheWayAddressPage"]
      }];

      var OnTheWayAddressPageRoutingModule = /*#__PURE__*/_createClass(function OnTheWayAddressPageRoutingModule() {
        _classCallCheck(this, OnTheWayAddressPageRoutingModule);
      });

      OnTheWayAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnTheWayAddressPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=on-the-way-address-on-the-way-address-module-es5.js.map