(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saved-addresses-add-saved-addresses-add-module"], {
    /***/
    "2rwE":
    /*!*******************************************************************!*\
      !*** ./src/app/saved-addresses-add/saved-addresses-add.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SavedAddressesAddPageModule */

    /***/
    function rwE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAddressesAddPageModule", function () {
        return SavedAddressesAddPageModule;
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


      var _saved_addresses_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./saved-addresses-add-routing.module */
      "G4zG");
      /* harmony import */


      var _saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./saved-addresses-add.page */
      "IQXk");

      var SavedAddressesAddPageModule = function SavedAddressesAddPageModule() {
        _classCallCheck(this, SavedAddressesAddPageModule);
      };

      SavedAddressesAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _saved_addresses_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["SavedAddressesAddPageRoutingModule"]],
        declarations: [_saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_6__["SavedAddressesAddPage"]]
      })], SavedAddressesAddPageModule);
      /***/
    },

    /***/
    "G4zG":
    /*!***************************************************************************!*\
      !*** ./src/app/saved-addresses-add/saved-addresses-add-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: SavedAddressesAddPageRoutingModule */

    /***/
    function G4zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAddressesAddPageRoutingModule", function () {
        return SavedAddressesAddPageRoutingModule;
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


      var _saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./saved-addresses-add.page */
      "IQXk");

      var routes = [{
        path: '',
        component: _saved_addresses_add_page__WEBPACK_IMPORTED_MODULE_3__["SavedAddressesAddPage"]
      }];

      var SavedAddressesAddPageRoutingModule = function SavedAddressesAddPageRoutingModule() {
        _classCallCheck(this, SavedAddressesAddPageRoutingModule);
      };

      SavedAddressesAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SavedAddressesAddPageRoutingModule);
      /***/
    },

    /***/
    "IQXk":
    /*!*****************************************************************!*\
      !*** ./src/app/saved-addresses-add/saved-addresses-add.page.ts ***!
      \*****************************************************************/

    /*! exports provided: SavedAddressesAddPage */

    /***/
    function IQXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAddressesAddPage", function () {
        return SavedAddressesAddPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_saved_addresses_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./saved-addresses-add.page.html */
      "tDHX");
      /* harmony import */


      var _saved_addresses_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./saved-addresses-add.page.scss */
      "R+91");
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


      var _error_msg_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../error-msg.service */
      "ElZd");

      var SavedAddressesAddPage = /*#__PURE__*/function () {
        function SavedAddressesAddPage(geolocation, nativeGeocoder, alertController, http, route, router, fetch, storage, platform, zone, location, errorMsg) {
          var _this = this;

          _classCallCheck(this, SavedAddressesAddPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.alertController = alertController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.platform = platform;
          this.zone = zone;
          this.location = location;
          this.errorMsg = errorMsg;
          this.model = {};
          this.autocomplete = {};
          this.service = new google.maps.places.AutocompleteService();
          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.location.back();
          });
        }

        _createClass(SavedAddressesAddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.search = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            //$('.current_location_page_show').hide();  
            //$('#add_t_1').addClass('active');
            this.model.alert_text = 'Please fill all the details';
            this.model.okay = 'okay';
            this.model.zoom = 15;
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'HOUSE';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'FLAT';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'BLOCK';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'LANDMARK';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'WORK';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'OTHER';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'ADD_LOCATION';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.alert_text = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'SAVE_AS';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'SEARCH_HERE';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'LANDMARK_FIELD_IS_REQUIRED';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'SAVE_AS_FIELD_REQUIRED';
            });
            this.model.key_text14 = item14[lang_code]; //});

            var self = this;
            self.options = {
              enableHighAccuracy: false
            };
            self.geolocation.getCurrentPosition(self.options).then(function (resp) {
              $('#add_location_spinner').css('display', 'none');
              $('.current_location_page_show').css('display', 'block');
              self.model.LastLat = resp.coords.latitude;
              self.model.LastLng = resp.coords.longitude;
              console.log('lat :' + self.model.LastLat, 'lon :' + self.model.LastLng);
              self.showAddress(self.model.LastLat, self.model.LastLng);
              var latLng = new google.maps.LatLng(self.model.LastLat, self.model.LastLng);
              var mapOptions = {
                center: latLng,
                zoom: self.model.zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              self.map = new google.maps.Map(self.mapElement.nativeElement, mapOptions);
              self.addMarker();
              self.map.addListener('zoom_changed', function () {
                var zoom = self.map.getZoom();
                self.model.zoom = zoom;
              });
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker() {
            var _this2 = this;

            console.log(this.map.getCenter());
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
          key: "lastLatLng",
          value: function lastLatLng(marker) {
            var _this3 = this;

            google.maps.event.addListener(marker, 'dragend', function () {
              _this3.model.LastLat = marker.position.lat();
              _this3.model.LastLng = marker.position.lng();

              _this3.showAddress(_this3.model.LastLat, _this3.model.LastLng);
            });
          }
        }, {
          key: "showAddress",
          value: function showAddress(lat, lon) {
            var _this4 = this;

            var self = this;
            var latLng = new google.maps.LatLng(lat, lon);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'latLng': latLng
            }, function (results, status) {
              _this4.model.colony_name = results[0].formatted_address;
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
            }); // let options: NativeGeocoderOptions = {
            // 	useLocale: true,
            // 	maxResults: 5
            // };
            // this.nativeGeocoder.reverseGeocode(lat, lon, options).then((result: NativeGeocoderResult[]) => {
            // 	console.log(result);
            // 	this.model.colony_name = result[0].areasOfInterest[0]+' '+result[0].subLocality;
            // 	this.model.city = result[0].locality;
            // 	this.model.state = result[0].administrativeArea;
            // 	this.model.country = result[0].countryName;
            // 	this.model.postalCode = result[0].postalCode
            // }).catch((error: any) => console.log(error));
          }
        }, {
          key: "address_type",
          value: function address_type(val) {
            this.model.address_type = val;

            if (val == 1) {
              $('#add_t_' + val).addClass('active');
              $('#add_t_2').removeClass('active');
              $('#add_t_3').removeClass('active');
            } else if (val == 2) {
              $('#add_t_' + val).addClass('active');
              $('#add_t_1').removeClass('active');
              $('#add_t_3').removeClass('active');
            } else {
              $('#add_t_' + val).addClass('active');
              $('#add_t_1').removeClass('active');
              $('#add_t_2').removeClass('active');
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this5 = this;

            this.model.search = true;
            var house_no = $('#add_location_house_no').val();
            var landmark = $('#add_location_landmark').val(); // var address_type = this.model.address_type;

            var save_as = $('#save_as').val(); // if(house_no == ""){
            // 	this.presentAlert("House No. field is required");
            // }else 

            if (landmark == "") {
              this.model.search = false;
              this.errorMsg.showModal(this.model.key_text13);
            } else if (save_as == "") {
              this.model.search = false;
              this.errorMsg.showModal(this.model.key_text14);
            } else {
              this.model.user_id = JSON.parse(localStorage.getItem('user_id'));
              var data = JSON.stringify({
                'zoom': this.model.zoom,
                'app_user_id': this.model.user_id,
                'house_no': house_no,
                'landmark': landmark,
                'address_type': save_as,
                'latitude': this.model.LastLat,
                'longitude': this.model.LastLng,
                'colony_name': this.model.colony_name,
                'city': this.model.city,
                'state': this.model.state,
                'country': this.model.country,
                'postalCode': this.model.postalCode
              }); //alert(data);

              this.fetch.add_location(data).subscribe(function (res) {
                _this5.model.search = false;
                console.log(res); //alert(res.success);

                if (res.success == true) {
                  _this5.router.navigate(['/saved-addresses', _this5.model.user_id]);
                }
              });
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: msg,
                        buttons: [this.model.okay]
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
          key: "close_btn",
          value: function close_btn() {
            this.location.back();
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
          key: "dismissSource",
          value: function dismissSource() {
            this.sources = [];
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
              }); //console.log(this.sources);
            });
          }
        }, {
          key: "geoCode",
          value: function geoCode(address, path) {
            var _this6 = this;

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': address
            }, function (results, status) {
              var address_components = results[0].address_components;
              var self = _this6;
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
                _this6.model.startLat = results[0].geometry.location.lat();
                _this6.model.startLng = results[0].geometry.location.lng();

                _this6.addMarker2(_this6.model.startLat, _this6.model.startLng);
              } // alert("lat: " + this.latitude + ", long: " + this.longitude);

            });
          }
        }, {
          key: "addMarker2",
          value: function addMarker2(lat, lng) {
            var _this7 = this;

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
              infoWindow.open(_this7.map, _this7.marker);
            });
            this.lastLatLng(this.marker);
          }
        }]);

        return SavedAddressesAddPage;
      }();

      SavedAddressesAddPage.ctorParameters = function () {
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
          type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _error_msg_service__WEBPACK_IMPORTED_MODULE_12__["ErrorMsgService"]
        }];
      };

      SavedAddressesAddPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      SavedAddressesAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saved-addresses-add',
        template: _raw_loader_saved_addresses_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_addresses_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SavedAddressesAddPage);
      /***/
    },

    /***/
    "R+91":
    /*!*******************************************************************!*\
      !*** ./src/app/saved-addresses-add/saved-addresses-add.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function R91(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 52%;\n}\n\n.current_location_page_show {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NhdmVkLWFkZHJlc3Nlcy1hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNDLGFBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7QUFHRDs7QUFEQTtFQUNDLGlCQUFBO0FBSUQiLCJmaWxlIjoic2F2ZWQtYWRkcmVzc2VzLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUyJTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3BhZ2Vfc2hvd3tcblx0ZGlzcGxheTpub25lO1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3BwaW5lcntcblx0LS1jb2xvcjojNDE5Qjk1O1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3Bpbm5lcl9wb3NpdGlvbntcblx0bWFyZ2luLXRvcDoyNTBweDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "tDHX":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saved-addresses-add/saved-addresses-add.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tDHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content class=\"current_location_page_show\">\n  \n  <div class=\"map edit\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <a (click)=\"close_btn()\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    \n  </div>\n  <ion-searchbar [(ngModel)]=\"autocomplete.start\" placeholder=\"{{model.key_text12}}\" [showCancelButton]=\"true\"   (ionInput)=\"updateSources()\" (ionCancel)=\"dismissSource()\"></ion-searchbar>\n  <ion-list style=\"position: absolute;z-index: 999;\">\n  <ion-item *ngFor=\"let item of sources\" tappable   (click)=\"chooseSource(item)\">\n    {{ item }}\n  </ion-item>\n  </ion-list>\n  <div #map id=\"map\"></div>\n  <div class=\"ion-padding\">\n    <div class=\"map-icon\">\n      <img src=\"assets/images/location_red.svg\">\n    </div>\n    <div class=\"map_desc\">\n      <div class=\"size_16\">\n        {{model.colony_name}}\n      </div>\n      <div class=\"regular size_12\">\n        <!-- {{model.colony_name}}<br> -->\n        <!-- {{model.city}}, {{model.state}} {{model.postalCode}}, {{model.country}} -->\n      </div>\n      <div class=\"map_input\">\n        <ion-item lines=\"none\" style=\"display: none;\">\n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text1}} / {{model.key_text2}} / {{model.key_text3}} NO.</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"add_location_house_no\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n        <ion-item lines=\"none\"> \n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text4}}</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"add_location_landmark\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n        <ion-item lines=\"none\"> \n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{ model.key_text11 }}</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"save_as\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n      </div>\n      <!-- <div class=\"btn-group buttons2\">\n        <button class=\"grey regular btn3 size_12 medium\" id=\"add_t_1\" (click)=\"address_type(1)\">{{model.key_text5}}</button>\n        <button class=\"grey regular btn3 size_12 medium\" id=\"add_t_2\" (click)=\"address_type(2)\">{{model.key_text6}}</button>\n        <button class=\"grey regular btn3 size_12 medium\" id=\"add_t_3\" (click)=\"address_type(3)\">{{model.key_text7}}</button> \n        \n      </div> -->\n    </div>\n  </div>\n  \n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar>    \n      <div class=\"app_button\">\n        <!-- <ion-router-link href=\"saved-addresses\">\n          <button class=\"app_btn\">Save Changes</button>\n        </ion-router-link> -->\n\t\t<button class=\"app_btn\" (click)=\"save()\" *ngIf=\"!model.search\">{{model.key_text8}}</button>\n    <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=saved-addresses-add-saved-addresses-add-module-es5.js.map