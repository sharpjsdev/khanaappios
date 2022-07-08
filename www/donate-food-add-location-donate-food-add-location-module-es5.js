(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-food-add-location-donate-food-add-location-module"], {
    /***/
    "2MyT":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate-food-add-location/donate-food-add-location.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MyT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center class=\"current_location_spinner_position\" id=\"add_fav_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content class=\"current_location_page_show\">\n  <div class=\"map edit\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <a href=\"donate-food\">\n      <img src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n    </a>\n    <!-- <img src=\"assets/images/map.svg\"> -->\n  </div>\n  <div #map id=\"map\"></div>\n  <div class=\"ion-padding\">\n    <div class=\"map-icon\">\n      <img src=\"assets/images/location_red.svg\">\n    </div>\n    <div class=\"map_desc\">\n      <div class=\"size_18\"> \n        {{model.colony_name}}\n      </div>\n      <div class=\"regular size_12\">\n        {{model.colony_name}}<br>\n        {{model.city}}, {{model.state}} {{model.postalCode}}, {{model.country}}\n      </div>\n      <br>\n      <div class=\"map_input\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text1}} / {{model.key_text2}} / {{model.key_text3}} NO.</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"donor_house_no\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n        <br>\n        <ion-item lines=\"none\"> \n          <ion-label position=\"stacked\" class=\"size_10 regular\" style=\"color: #DADADA;\">{{model.key_text4}}</ion-label>\n          <ion-input class=\"size_12 regular\" id=\"donor_landmark\"></ion-input>\n          <hr class=\"input_line\">\n        </ion-item>\n      </div>\n      <div class=\"btn-group buttons2\">\n        <button class=\"grey regular btn3 size_12 medium\" id=\"d_add_food_type_1\" (click)=\"address_type(1)\">{{model.key_text5}}</button>\n        <button class=\"grey regular btn3 size_12 medium\" id=\"d_add_food_type_2\" (click)=\"address_type(2)\">{{model.key_text6}}</button>\n        <button class=\"grey regular btn3 size_12 medium\" id=\"d_add_food_type_3\" (click)=\"address_type(3)\">{{model.key_text7}}</button>\n      </div>\n    </div>\n  </div>\n  \n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar>    \n      <div class=\"app_button\">\n        <!-- <ion-router-link href=\"select-location\">\n          <button class=\"app_btn\">Add Location</button>\n        </ion-router-link> -->\n\t\t<button class=\"app_btn\" (click)=\"save()\">{{model.key_text8}}</button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  ";
      /***/
    },

    /***/
    "HP7G":
    /*!*****************************************************************************!*\
      !*** ./src/app/donate-food-add-location/donate-food-add-location.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: DonateFoodAddLocationPageModule */

    /***/
    function HP7G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodAddLocationPageModule", function () {
        return DonateFoodAddLocationPageModule;
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


      var _donate_food_add_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donate-food-add-location-routing.module */
      "mKgv");
      /* harmony import */


      var _donate_food_add_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donate-food-add-location.page */
      "VJfl");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var DonateFoodAddLocationPageModule = function DonateFoodAddLocationPageModule() {
        _classCallCheck(this, DonateFoodAddLocationPageModule);
      };

      DonateFoodAddLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_food_add_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonateFoodAddLocationPageRoutingModule"]],
        declarations: [_donate_food_add_location_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodAddLocationPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], DonateFoodAddLocationPageModule);
      /***/
    },

    /***/
    "VJfl":
    /*!***************************************************************************!*\
      !*** ./src/app/donate-food-add-location/donate-food-add-location.page.ts ***!
      \***************************************************************************/

    /*! exports provided: DonateFoodAddLocationPage */

    /***/
    function VJfl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodAddLocationPage", function () {
        return DonateFoodAddLocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_food_add_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate-food-add-location.page.html */
      "2MyT");
      /* harmony import */


      var _donate_food_add_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate-food-add-location.page.scss */
      "ZWCX");
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

      var DonateFoodAddLocationPage = /*#__PURE__*/function () {
        function DonateFoodAddLocationPage(geolocation, nativeGeocoder, alertController, http, route, router, fetch, storage) {
          _classCallCheck(this, DonateFoodAddLocationPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.alertController = alertController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(DonateFoodAddLocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.model.alert_text = 'Please fill all the details';
            this.model.okay = 'okay';
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
            this.model.okay = item10[lang_code]; //});  

            this.options = {
              enableHighAccuracy: false
            };
            this.geolocation.getCurrentPosition(this.options).then(function (resp) {
              $('#add_fav_location_spinner').css('display', 'none');
              $('.current_location_page_show').css('display', 'block');
              _this.model.LastLat = resp.coords.latitude;
              _this.model.LastLng = resp.coords.longitude;
              console.log('lat :' + _this.model.LastLat, 'lon :' + _this.model.LastLng);

              _this.showAddress(_this.model.LastLat, _this.model.LastLng);

              var latLng = new google.maps.LatLng(_this.model.LastLat, _this.model.LastLng);
              var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);

              _this.addMarker();
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker() {
            var _this2 = this;

            var marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: this.map.getCenter(),
              draggable: true
            });
            var content = "<p>This is your current position !</p>";
            var infoWindow = new google.maps.InfoWindow({
              content: content
            });
            google.maps.event.addListener(marker, 'click', function () {
              infoWindow.open(_this2.map, marker);
            });
            this.lastLatLng(marker);
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

            var options = {
              useLocale: true,
              maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lat, lon, options).then(function (result) {
              _this4.model.colony_name = result[0].subLocality;
              _this4.model.city = result[0].locality;
              _this4.model.state = result[0].administrativeArea;
              _this4.model.country = result[0].countryName;
              _this4.model.postalCode = result[0].postalCode;
            })["catch"](function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "address_type",
          value: function address_type(val) {
            this.model.address_type = val;

            if (val == 1) {
              $('#d_add_food_type_' + val).addClass('active');
              $('#d_add_food_type_2').removeClass('active');
              $('#d_add_food_type_3').removeClass('active');
            } else if (val == 2) {
              $('#d_add_food_type_' + val).addClass('active');
              $('#d_add_food_type_1').removeClass('active');
              $('#d_add_food_type_3').removeClass('active');
            } else {
              $('#d_add_food_type_' + val).addClass('active');
              $('#d_add_food_type_2').removeClass('active');
              $('#d_add_food_type_1').removeClass('active');
            }
          }
        }, {
          key: "save",
          value: function save() {
            var house_no = $('#donor_house_no').val();
            var landmark = $('#donor_landmark').val();
            var address_type = this.model.address_type;

            if (house_no == "") {
              this.presentAlert();
            } else if (landmark == "") {
              this.presentAlert();
            } else if (address_type == "") {
              this.presentAlert();
            } else {
              var data = JSON.stringify({
                'app_user_id': JSON.parse(localStorage.getItem('user_id')),
                'house_no': house_no,
                'landmark': landmark,
                'adress_type': address_type,
                'latitude': this.model.LastLat,
                'longitude': this.model.LastLng,
                'colony_name': this.model.colony_name,
                'city': this.model.city,
                'state': this.model.state,
                'country': this.model.country,
                'postalCode': this.model.postalCode
              });
              localStorage.setItem('donor_location', data);
              this.router.navigate(['/donate-food']);
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: this.model.alert_text,
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
        }]);

        return DonateFoodAddLocationPage;
      }();

      DonateFoodAddLocationPage.ctorParameters = function () {
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
        }];
      };

      DonateFoodAddLocationPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }]
      };
      DonateFoodAddLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-food-add-location',
        template: _raw_loader_donate_food_add_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_food_add_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonateFoodAddLocationPage);
      /***/
    },

    /***/
    "ZWCX":
    /*!*****************************************************************************!*\
      !*** ./src/app/donate-food-add-location/donate-food-add-location.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function ZWCX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 66%;\n}\n\n.current_location_page_show {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvbmF0ZS1mb29kLWFkZC1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0MsYUFBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtBQUdEOztBQURBO0VBQ0MsaUJBQUE7QUFJRCIsImZpbGUiOiJkb25hdGUtZm9vZC1hZGQtbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2NiU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9wYWdlX3Nob3d7XG5cdGRpc3BsYXk6bm9uZTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3NwcGluZXJ7XG5cdC0tY29sb3I6IzQxOUI5NTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3NwaW5uZXJfcG9zaXRpb257XG5cdG1hcmdpbi10b3A6MjUwcHg7XG59Il19 */";
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

      var CaptchaComponent = /*#__PURE__*/function () {
        function CaptchaComponent(fetch, router) {
          _classCallCheck(this, CaptchaComponent);

          this.fetch = fetch;
          this.router = router;
          this.model = {};
          this.notification = [];
        }

        _createClass(CaptchaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this5.notification = res['data'];

              if (_this5.notification.length > 0) {
                $('#black_spot').show();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.fetch.read_notification(this.model.user_id).subscribe(function (res) {
              $('#black_spot').hide();
            });
          }
        }]);

        return CaptchaComponent;
      }();

      CaptchaComponent.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
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


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\"></span>      \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n      \n     \n      \n    </ion-toolbar>\n  </ion-header>";
      /***/
    },

    /***/
    "mKgv":
    /*!*************************************************************************************!*\
      !*** ./src/app/donate-food-add-location/donate-food-add-location-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: DonateFoodAddLocationPageRoutingModule */

    /***/
    function mKgv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodAddLocationPageRoutingModule", function () {
        return DonateFoodAddLocationPageRoutingModule;
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


      var _donate_food_add_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate-food-add-location.page */
      "VJfl");

      var routes = [{
        path: '',
        component: _donate_food_add_location_page__WEBPACK_IMPORTED_MODULE_3__["DonateFoodAddLocationPage"]
      }];

      var DonateFoodAddLocationPageRoutingModule = function DonateFoodAddLocationPageRoutingModule() {
        _classCallCheck(this, DonateFoodAddLocationPageRoutingModule);
      };

      DonateFoodAddLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonateFoodAddLocationPageRoutingModule);
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
//# sourceMappingURL=donate-food-add-location-donate-food-add-location-module-es5.js.map