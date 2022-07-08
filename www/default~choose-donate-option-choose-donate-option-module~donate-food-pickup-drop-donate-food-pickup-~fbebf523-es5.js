(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


      __webpack_exports__["default"] = "<center class=\"current_location_spinner_position\" id=\"location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content class=\"current_location_page_show\">\n\t<div class=\"map current_location\">\n\t\t<img src=\"assets/images/close_btn.svg\" class=\"close_btn\" (click)=\"closeModal()\">\n\t</div>\n\t<div id=\"my_custom_on\" style=\"margin-top: 18px;\">\n\t\t<input type=\"text\" id=\"my_test\" (keyup)=\"updateSources()\" placeholder=\"{{model.key_text2}}\"> <ion-icon *ngIf=\"autocomplete.start\" (click)=\"blank('start')\" class=\"cross_on_the\" name=\"close-outline\"></ion-icon>\n\t  </div>\n\t  <ion-button shape=\"round\" class=\"address_button\" *ngFor=\"let add of saved_address;\" (click)=\"addMarker2(add.latitude, add.longitude)\" fill=\"outline\">{{add.adress_type}}</ion-button>\n\t<div #map id=\"map\"></div> \n\t<div class=\"ion-padding\">\n    <div class=\"map-icon\">\n\t\t<img src=\"assets/images/location_red.svg\">\n    </div>\n    <div class=\"map_desc\">\n\t\t<div class=\"size_16 map_desc_text\"> \n\t\t\t{{model.colony_name}}\n\t\t</div>\n    </div>\n  </div>\n  \n</ion-content>\n  \n<ion-footer class=\"current_location_page_show\">\n    <ion-toolbar>    \n\t\t<div class=\"app_button\">\n\t\t\t<span (click)=\"current_location()\">\n\t\t\t\t<button class=\"app_btn\">{{model.key_text1}}</button>\n\t\t\t</span>\n\t\t</div>\n    </ion-toolbar>\n</ion-footer>\n  ";
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var lang_code, res, item1, _item, item2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
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

                      console.log(this.model.confirm_route);
                      this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
                      this.fetch.get_user_locations(this.model.user_id).subscribe(function (res) {
                        if (res['success'] == true) {
                          _this.saved_address = res['data'];
                        }
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
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
            this.lastLatLng(this.marker);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context2.next = 3;
                      return this.modalController.dismiss('');

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
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
              _this6.autocomplete.start = start_address.formatted_address;

              _this6.geoCode(_this6.autocomplete.start, 'start'); //console.log(place);

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

            console.log(address);
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