(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearest-donors-nearest-donors-module"], {
    /***/
    "58Pt":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nearest-donors/nearest-donors.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n    <!--<ion-title>home</ion-title>-->\n    <ion-buttons slot=\"end\">      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"grey_title regular size_18 white center\">\n  {{model.key_text1}}\n</div>\n<div class=\"sorting\">\n  <ion-row>\n    <ion-col size=\"6\" (click)=\"openModalSort()\" class=\"right_border\">\n      {{model.key_text2}} <img src=\"assets/images/icon_sort.svg\">\n    </ion-col>\n    <ion-col size=\"6\" (click)=\"openModal()\">\n      {{model.key_text3}} <img src=\"assets/images/icon_filter.svg\">\n    </ion-col>\n  </ion-row>\n</div>\n\n<div class=\"donor_list\" id=\"nearest_donors_list\">\n\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n\t\t\t<ion-grid class=\"donor_list_single\" *ngFor=\"let x of model.donor_data; let i = index;\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t<div class=\"donor_name medium\">\n\t\t\t\t\t\t  {{i+1}}. {{x.username}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t<div class=\"donor_title_sub size_13 regular\">\n\t\t\t\t\t\t\tFood available for <span class=\"green\">{{x.total_food_for}} persons</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"donor_list_inner\">\n\t\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_walk.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\">\n\t\t\t\t\t\t\t{{x.time_distance_walking.rows[0].elements[0].duration.text}}  {{model.key_text6}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_bike.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\">\n\t\t\t\t\t\t\t{{x.time_distance_driving.rows[0].elements[0].duration.text}} {{model.key_text7}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"donor_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icon_donor_bus.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grey size_10\" >\n\t\t\t\t\t\t\t{{x.time_distance_transit.rows[0].elements[0].duration.text}} {{model.key_text8}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<a (click)=\"collect_food(x)\">\n\t\t\t\t\t\t\t<div class=\"donor_single_btn\">\n\t\t\t\t\t\t\t\t{{model.key_text5}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<hr class=\"donor_single_line\">\n\t\t\t\t</ion-row>  \n\t\t\t</ion-grid>\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\t<input type=\"hidden\" id=\"start_page\" value=\"0\">\n</div>\n<center class=\"current_location_spinner_position\" id=\"nearest_donors_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>    \n    <ion-segment value=\"home\" color=\"transparent\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n        <img src=\"assets/images/red_footer_home.svg\">\n        <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text9}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text10}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n        <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_volunteer.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text11}}</ion-label>    \n      </ion-segment-button>\n    </ion-segment>  \n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "TnvT":
    /*!*******************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors.page.ts ***!
      \*******************************************************/

    /*! exports provided: NearestDonorsPage */

    /***/
    function TnvT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearestDonorsPage", function () {
        return NearestDonorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nearest-donors.page.html */
      "58Pt");
      /* harmony import */


      var _nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nearest-donors.page.scss */
      "e9r2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modal/otp/filter-content/filter-content.page */
      "/O/A");
      /* harmony import */


      var _modal_sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/sort-content/sort-content.page */
      "G7j0");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NearestDonorsPage = /*#__PURE__*/function () {
        function NearestDonorsPage(modalController, http, route, router, fetch, alertController) {
          _classCallCheck(this, NearestDonorsPage);

          this.modalController = modalController;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.alertController = alertController;
          this.model = {};
        }

        _createClass(NearestDonorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            var lang_code = JSON.parse(localStorage.getItem('lang'));
            console.log(lang_code);
            this.fetch.getKeyText(lang_code).subscribe(function (res) {
              var item1 = res.find(function (i) {
                return i.key_text === 'NEAREST_FOOD_DONORS';
              });
              _this.model.key_text1 = item1[lang_code];
              var item2 = res.find(function (i) {
                return i.key_text === 'SORT';
              });
              _this.model.key_text2 = item2[lang_code];
              var item3 = res.find(function (i) {
                return i.key_text === 'FILTER';
              });
              _this.model.key_text3 = item3[lang_code];
              var item5 = res.find(function (i) {
                return i.key_text === 'COLLECT_FOOD';
              });
              _this.model.key_text5 = item5[lang_code];
              var item6 = res.find(function (i) {
                return i.key_text === 'WALK';
              });
              _this.model.key_text6 = item6[lang_code];
              var item7 = res.find(function (i) {
                return i.key_text === 'TWO-WHEELER';
              });
              _this.model.key_text7 = item7[lang_code];
              var item8 = res.find(function (i) {
                return i.key_text === 'PUBLIC_TRANSPORT';
              });
              _this.model.key_text8 = item8[lang_code];
              var item9 = res.find(function (i) {
                return i.key_text === 'HOME';
              });
              _this.model.key_text9 = item9[lang_code];
              var item10 = res.find(function (i) {
                return i.key_text === 'ACTIVITY';
              });
              _this.model.key_text10 = item10[lang_code];
              var item11 = res.find(function (i) {
                return i.key_text === 'VOLUNTEER';
              });
              _this.model.key_text11 = item11[lang_code];
              var item12 = res.find(function (i) {
                return i.key_text === 'NO_DONOR';
              });
              _this.model.key_text12 = item12[lang_code];
              var item13 = res.find(function (i) {
                return i.key_text === 'OKAY';
              });
              _this.model.key_text13 = item13[lang_code];
            });
            var id = this.route.snapshot.params['id'];
            this.model.receiver_id = this.route.snapshot.params['id'];
            this.fetch.receiver_details(id).subscribe(function (res) {
              _this.model.city = res['data'].city;
              _this.model.colony_name = res['data'].colony_name;
              _this.model.receiver_lat = res['data'].latitude;
              _this.model.receiver_lon = res['data'].longitude;
              _this.model.food_type = res['data'].food_type;
              _this.model.no_of_person = res['data'].no_of_person;
              var i = $('#start_page').val();
              _this.model.receiver_data = JSON.stringify({
                'latitude': _this.model.receiver_lat,
                'longitude': _this.model.receiver_lon,
                'city': res['data'].city,
                'food_type': res['data'].food_type,
                'needed_person': res['data'].no_of_person,
                'skip': i
              });
              console.log(_this.model.receiver_data);

              _this.fetch.nearest_donors(_this.model.receiver_data).subscribe(function (response) {
                $('#nearest_donors_spinner').css('display', 'none');
                $('#nearest_donors_list').css('display', 'block');
                console.log(response['data']);

                if (response['data'].length == 0) {
                  _this.presentAlert();
                }

                _this.model.donor_data = response['data'];
              });
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_otp_filter_content_filter_content_page__WEBPACK_IMPORTED_MODULE_5__["FilterContentPage"],
                        cssClass: 'custom_filter_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this2.dataReturned = dataReturned.data;
                          console.log('Modal Sent Data :' + JSON.stringify(_this2.dataReturned));

                          if (_this2.dataReturned != "close") {
                            $('#nearest_donors_spinner').css('display', 'block');
                            $('#nearest_donors_list').css('display', 'none');
                            _this2.model.food_type = _this2.dataReturned.filter_food_type;
                            _this2.model.no_of_person = _this2.dataReturned.filter_no_of_person;
                            _this2.model.receiver_data = JSON.stringify({
                              'latitude': _this2.model.receiver_lat,
                              'longitude': _this2.model.receiver_lon,
                              'city': _this2.model.city,
                              'food_type': _this2.model.food_type,
                              'needed_person': _this2.model.no_of_person,
                              'skip': 0
                            });

                            _this2.fetch.nearest_donors(_this2.model.receiver_data).subscribe(function (response) {
                              /* var self = this;
                               response['data'].forEach(function (i, val) {
                                  var x = self.distace(self.model.receiver_lat, self.model.receiver_lon, i.latitude ,i.longitude);
                                  response['data'][val]['times'] = x;
                              }); */
                              $('#nearest_donors_spinner').css('display', 'none');
                              $('#nearest_donors_list').css('display', 'block');
                              console.log(response['data']);
                              _this2.model.donor_data = response['data'];
                            });
                          }
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openModalSort",
          value: function openModalSort() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modal_sort_content_sort_content_page__WEBPACK_IMPORTED_MODULE_6__["SortContentPage"],
                        cssClass: 'custom_filter_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this3.dataReturned = dataReturned.data;
                          console.log('Modal Sent Data :' + JSON.stringify(_this3.dataReturned));

                          if (_this3.dataReturned != "close") {
                            $('#nearest_donors_spinner').css('display', 'block');
                            $('#nearest_donors_list').css('display', 'none');

                            if (_this3.dataReturned.distance != null) {
                              //console.log(this.dataReturned.distance);
                              //this.model.donor_data.sort();
                              $('#nearest_donors_spinner').css('display', 'none');
                              $('#nearest_donors_list').css('display', 'block');

                              _this3.model.donor_data.sort(function (a, b) {
                                var d1 = a.time_distance_transit.rows[0].elements[0].distance.text[0];
                                var d2 = b.time_distance_transit.rows[0].elements[0].distance.text[0];
                                console.log(d1 - d2);
                                return d1 - d2;
                              });

                              console.log(_this3.model.donor_data);
                            }

                            if (_this3.dataReturned.time != null) {
                              $('#nearest_donors_spinner').css('display', 'none');
                              $('#nearest_donors_list').css('display', 'block');

                              _this3.model.donor_data.sort(function (a, b) {
                                var d1 = a.time_distance_transit.rows[0].elements[0].duration.text[0];
                                var d2 = b.time_distance_transit.rows[0].elements[0].duration.text[0];
                                console.log(d1 - d2);
                                return d1 - d2;
                              });

                              console.log(_this3.model.donor_data);
                            }
                          }
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "collect_food",
          value: function collect_food(x) {
            console.log(x);
            this.router.navigate(['/get-food-nearest-donors', JSON.stringify(x), this.model.receiver_lat, this.model.receiver_lon, this.model.receiver_id]);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this4 = this;

            var self = this;
            setTimeout(function () {
              console.log('Done');
              event.target.complete();
              console.log(event);
              var i = $('#start_page').val();
              var j = 5 + parseInt(i);
              self.model.receiver_data = JSON.stringify({
                'latitude': self.model.receiver_lat,
                'longitude': self.model.receiver_lon,
                'city': self.model.city,
                'food_type': self.model.food_type,
                'needed_person': _this4.model.no_of_person,
                'skip': j
              });
              self.fetch.nearest_donors(self.model.receiver_data).subscribe(function (res) {
                console.log(res['data']); //self.model.donor_data.push(response['data']);

                /* res['data'].foreach((value, index) => {
                    response['data'].push(value);
                }); */

                for (var i = 0; i < res['data'].length; i++) {
                  self.model.donor_data.push(res['data'][i]);
                }
              });
              $('#start_page').val(j);
            }, 500);
          }
        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(this.model.key_text12);
                      _context3.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: this.model.key_text12,
                        buttons: [this.model.key_text13]
                      });

                    case 3:
                      alert = _context3.sent;
                      _context3.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return NearestDonorsPage;
      }();

      NearestDonorsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_8__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      NearestDonorsPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]]
        }]
      };
      NearestDonorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nearest-donors',
        template: _raw_loader_nearest_donors_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nearest_donors_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NearestDonorsPage);
      /***/
    },

    /***/
    "e9r2":
    /*!*********************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function e9r2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#nearest_donors_list {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25lYXJlc3QtZG9ub3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFDQTtFQUNDLGlCQUFBO0FBRUQiLCJmaWxlIjoibmVhcmVzdC1kb25vcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25lYXJlc3RfZG9ub3JzX2xpc3R7XG5cdGRpc3BsYXkgOiBub25lO1xufVxuXG4uY3VycmVudF9sb2NhdGlvbl9zcHBpbmVye1xuXHQtLWNvbG9yOiM0MTlCOTU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcGlubmVyX3Bvc2l0aW9ue1xuXHRtYXJnaW4tdG9wOjI1MHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "ggf1":
    /*!*****************************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NearestDonorsPageRoutingModule */

    /***/
    function ggf1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearestDonorsPageRoutingModule", function () {
        return NearestDonorsPageRoutingModule;
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


      var _nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nearest-donors.page */
      "TnvT");

      var routes = [{
        path: '',
        component: _nearest_donors_page__WEBPACK_IMPORTED_MODULE_3__["NearestDonorsPage"]
      }];

      var NearestDonorsPageRoutingModule = function NearestDonorsPageRoutingModule() {
        _classCallCheck(this, NearestDonorsPageRoutingModule);
      };

      NearestDonorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NearestDonorsPageRoutingModule);
      /***/
    },

    /***/
    "qX/V":
    /*!*********************************************************!*\
      !*** ./src/app/nearest-donors/nearest-donors.module.ts ***!
      \*********************************************************/

    /*! exports provided: NearestDonorsPageModule */

    /***/
    function qXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearestDonorsPageModule", function () {
        return NearestDonorsPageModule;
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


      var _nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nearest-donors-routing.module */
      "ggf1");
      /* harmony import */


      var _nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nearest-donors.page */
      "TnvT");

      var NearestDonorsPageModule = function NearestDonorsPageModule() {
        _classCallCheck(this, NearestDonorsPageModule);
      };

      NearestDonorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nearest_donors_routing_module__WEBPACK_IMPORTED_MODULE_5__["NearestDonorsPageRoutingModule"]],
        declarations: [_nearest_donors_page__WEBPACK_IMPORTED_MODULE_6__["NearestDonorsPage"]]
      })], NearestDonorsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=nearest-donors-nearest-donors-module-es5.js.map