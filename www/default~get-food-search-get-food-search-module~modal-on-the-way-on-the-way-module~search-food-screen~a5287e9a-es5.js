(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = [];
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
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