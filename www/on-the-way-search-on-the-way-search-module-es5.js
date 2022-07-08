(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

      var OnTheWaySearchPageModule = function OnTheWaySearchPageModule() {
        _classCallCheck(this, OnTheWaySearchPageModule);
      };

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

        _createClass(OnTheWaySearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var start = localStorage.getItem('temp_start_address');
            var end = localStorage.getItem('temp_end_address');
            this.id = this.route.snapshot.params['id'];
            this.id2 = this.route.snapshot.params['id2'];

            if (start) {
              this.autocomplete.start = start;
            }

            if (end) {
              this.autocomplete.end = end;
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
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'CONFIRM';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'NO_VOLUNTEER_FOUND';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'CLOSE';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'CHOOSE_STARTING_POINT';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'CHOOSE_DESTINATION';
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
            console.log('in');

            if (this.autocomplete.start != '') {
              this.geoCode(this.autocomplete.start, 'start');
            }
          }
        }, {
          key: "updateDestinations",
          value: function updateDestinations() {
            if (this.autocomplete.end != '') {
              this.geoCode(this.autocomplete.end, 'end');
            }
          }
        }, {
          key: "goToAddressSelection",
          value: function goToAddressSelection(type) {
            this.router.navigate(['/on-the-way-address', type]);
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

              if (path == 'start') {
                address_components.forEach(function (val, i) {
                  console.log('-', val);

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

              if (path == 'end') {
                address_components.forEach(function (val, i) {
                  console.log('-', val);

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

              if (path == 'start') {
                _this2.model.startLat = results[0].geometry.location.lat();
                _this2.model.startLng = results[0].geometry.location.lng();
                _this2.model.startColonyName = results[0].formatted_address;

                _this2.showRoutes();
              }

              if (path == 'end') {
                _this2.model.endLat = results[0].geometry.location.lat();
                _this2.model.endLng = results[0].geometry.location.lng();
                _this2.model.endColonyName = results[0].formatted_address;

                _this2.showRoutes();
              } // alert("lat: " + this.latitude + ", long: " + this.longitude);

            });
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
                endCity: this.model.endCity,
                user_id: this.model.user_id
              });
              this.fetch.get_volunteer_waypoints_by_condition(data).subscribe(function (res) {
                //console.log(res);
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
                      }

                      if (i == legs.length - 1) {
                        endLocation = legs[i].end_location;
                      }
                    } //console.log(waypointLocations);


                    _this3.waypoints = waypointsData;

                    _this3.createMarker(endLocation, "end", "special text for end marker", 0, "http://www.google.com/mapfiles/markerB.png");

                    _this3.createMarker(startLocation, "start", "special text for start marker", 0, "http://maps.gstatic.com/mapfiles/markers2/marker_greenA.png");

                    for (var i = 0; i < waypointsData.length; i++) {
                      _this3.createMarker(waypointsData[i].location, waypointsData[i].name, '', waypointsData[i].mobile_no, "");
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
          key: "showAlert",
          value: function showAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class custom_alert_1',
                        message: msg,
                        buttons: [{
                          text: this.model.key_text3,
                          role: 'cancel',
                          cssClass: 'secondary',
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
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "confirm",
          value: function confirm() {
            var _this5 = this;

            if (this.autocomplete.start != '' && this.autocomplete.end != '') {
              var data = JSON.stringify({
                startLat: this.model.startLat,
                startLng: this.model.startLng,
                endLat: this.model.endLat,
                endLng: this.model.endLng,
                endCity: this.model.endCity,
                'colony_name': this.model.startColonyName,
                city: this.model.city,
                'house_no': null,
                'landmark': null,
                'adress_type': null,
                'state': this.model.state,
                'country': this.model.country,
                'postalCode': this.model.postalCode,
                app_user_id: this.model.user_id,
                'id': this.id,
                'id2': this.id2
              });
              this.fetch.get_volunteer_waypoints_new(data).subscribe(function (res) {
                if (res['success'] == true) {
                  if (res['data'].length > 0) {
                    _this5.router.navigate(['/searching-volunteer', _this5.id, _this5.id2]);
                  } else {
                    _this5.showAlert(_this5.model.key_text2);

                    _this5.router.navigate(['/screen-after-volunteer-not-found', _this5.id, _this5.id2]);
                  }
                }
              });
            }
          }
        }]);

        return OnTheWaySearchPage;
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
          args: ['map']
        }]
      };
      OnTheWaySearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-on-the-way-search',
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


      __webpack_exports__["default"] = "<ion-header>\n  <div class=\"regular size_18 white center\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </div>\n    <ion-searchbar [(ngModel)]=\"autocomplete.start\" placeholder=\"{{model.key_text4}}\" [showCancelButton]=\"true\"   (ionChange)=\"updateSources()\" (ionCancel)=\"dismissSource()\" (click)=\"goToAddressSelection(1)\"></ion-searchbar>\n    \n    <ion-searchbar [(ngModel)]=\"autocomplete.end\" placeholder=\"{{model.key_text5}}\" [showCancelButton]=\"true\"   (ionChange)=\"updateDestinations()\" (ionCancel)=\"dismissDestination()\" (click)=\"goToAddressSelection(2)\"></ion-searchbar>\n    <div style=\"margin-left: 20px;\">\n      <div class=\"map-icon\">\n        <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n      </div>\n      <div class=\"map_desc\">      \n        <div class=\"regular size_12\">\n          Wearning a mask in some public spaces is required due to COVID - 19\n        </div> \n      </div>\n    </div> \n</ion-header>\n<ion-content class=\"current_location_page_show\">\n  <div #map id=\"map\"></div>\n  </ion-content>\n  <ion-footer class=\"current_location_page_show\">\n    <ion-toolbar>    \n\t\t<div class=\"app_button\" *ngIf=\"model.startLat && model.startLng && model.endLat && model.endLng\">\n\t\t\t<span (click)=\"confirm()\">\n\t\t\t\t<button class=\"app_btn\">{{model.key_text1}}</button>\n\t\t\t</span>\n\t\t\t<!--  <button class=\"app_btn\" (click)=\"confirm_location()\">Confirm Location</button> -->\n\t\t</div>\n    </ion-toolbar>\n</ion-footer>\n  \n  ";
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

      var OnTheWaySearchPageRoutingModule = function OnTheWaySearchPageRoutingModule() {
        _classCallCheck(this, OnTheWaySearchPageRoutingModule);
      };

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


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n\nion-header {\n  padding-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29uLXRoZS13YXktc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6Im9uLXRoZS13YXktc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=on-the-way-search-on-the-way-search-module-es5.js.map