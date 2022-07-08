(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-volunteer-register-volunteer-module"], {
    /***/
    "AlzZ":
    /*!*****************************************************************!*\
      !*** ./src/app/register-volunteer/register-volunteer.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function AlzZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".error_border {\n  border: 1px solid red;\n}\n\n.error_msg_shop_name {\n  color: red;\n  display: none;\n}\n\n.error_msg_working_hours {\n  color: red;\n  display: none;\n}\n\n.error_msg_shop_location {\n  color: red;\n  display: none;\n}\n\n.error_terms {\n  color: red;\n  display: none;\n}\n\nion-toggle {\n  --background-checked: #ffc9c1;\n}\n\n.error_msg_from_time {\n  color: red;\n  display: none;\n}\n\n.error_msg_to_time {\n  color: red;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLXZvbHVudGVlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLDZCQUFBO0FBTUo7O0FBSkE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQU9KOztBQUxBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFRSiIsImZpbGUiOiJyZWdpc3Rlci12b2x1bnRlZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yX2JvcmRlcntcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbn1cbi5lcnJvcl9tc2dfc2hvcF9uYW1le1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmVycm9yX21zZ193b3JraW5nX2hvdXJze1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmVycm9yX21zZ19zaG9wX2xvY2F0aW9ue1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmVycm9yX3Rlcm1ze1xuICAgIGNvbG9yOnJlZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuaW9uLXRvZ2dsZSB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmM5YzE7XG59XG4uZXJyb3JfbXNnX2Zyb21fdGltZXtcbiAgICBjb2xvcjpyZWQ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5lcnJvcl9tc2dfdG9fdGltZXtcbiAgICBjb2xvcjpyZWQ7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "OetK":
    /*!***************************************************************!*\
      !*** ./src/app/register-volunteer/register-volunteer.page.ts ***!
      \***************************************************************/

    /*! exports provided: RegisterVolunteerPage */

    /***/
    function OetK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterVolunteerPage", function () {
        return RegisterVolunteerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register-volunteer.page.html */
      "gpQI");
      /* harmony import */


      var _register_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register-volunteer.page.scss */
      "AlzZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_current_location_content_current_location_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modal/current-location-content/current-location-content.page */
      "rW5W");
      /* harmony import */


      var _modal_location_error_content_location_error_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/location-error-content/location-error-content.page */
      "GCnJ");
      /* harmony import */


      var _modal_home_content_home_content_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../modal/home-content/home-content.page */
      "kzFx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modal_terms_conditions_terms_conditions_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../modal/terms-conditions/terms-conditions.page */
      "t9PW");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "ya1t");
      /* harmony import */


      var _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../modal/error-msg-modal/error-msg-modal.page */
      "HQjg");

      var RegisterVolunteerPage = /*#__PURE__*/function () {
        function RegisterVolunteerPage(modalController, platform, location, http, route, router, fetch, storage, alertController, datePicker) {
          var _this = this;

          _classCallCheck(this, RegisterVolunteerPage);

          this.modalController = modalController;
          this.platform = platform;
          this.location = location;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.datePicker = datePicker;
          this.model = {};
          this.user_ = {};
          this.fromTime = "";
          this.toTime = "";
          this.location_data = [];
          this.volunteer_data = [];
          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.location.back();
          });
        }

        _createClass(RegisterVolunteerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.accept = false;
            this.model.search = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.model.is_address = false;
            this.user_.colony_name = '';
            this.user_.city = '';
            this.user_.state = '';
            this.user_.country = '';
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'KHANAA_APP';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER_TAG';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'DATE_OF_BIRTH';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'USERNAME';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'SET_LOCATION';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'REGISTER';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'SAVE_CHANGES';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'DEAR';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'SHOP_NAME';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'SHOP_LOCATION';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'WORKING_HOURS_NEW';
            });
            this.model.key_text11 = item11[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'TERMS_CONDITIONS';
            });
            this.model.terms = item13[lang_code];
            var alert_text = res.find(function (i) {
              return i.key_text === 'KEEP_PIN_EXACT_LOCATION';
            });
            this.alert_text = alert_text[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item12[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'FROM';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'TO';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'THIS_FIELD_IS_REQUIRED';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'PLEASE_SELECT_A_LOCATION';
            });
            this.model.key_text17 = item17[lang_code]; //});
            //console.log(this.location_data);

            $("#v_update").css("display", "none");
            this.model.volunteer_id = '';
            var user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.fetch.v_check(user_id).subscribe(function (res) {
              //alert(res.data);
              if (res.success == true) {
                $("#v_register").css("display", "none");
                $("#v_update").css("display", "block");
                _this2.model.volunteer_id = res.data;

                _this2.fetch.v_edit(_this2.model.volunteer_id).subscribe(function (res) {
                  console.log(res.data);
                  _this2.volunteer_data = res.data;
                  _this2.model.is_address = true;
                  _this2.model.volunteer_id = res.data.id;
                  var time_split = res.data.working_hour.split("-");
                  _this2.from_Time = time_split[0];
                  _this2.to_Time = time_split[1];
                  _this2.model.app_status = res.data.app_status == 1 ? true : false;
                });
              } else {
                _this2.model.volunteer_id = JSON.parse(localStorage.getItem('volunteer_id'));

                if (_this2.model.volunteer_id != null) {
                  $("#v_register").css("display", "none");
                  $("#v_update").css("display", "block");

                  _this2.fetch.v_edit(_this2.model.volunteer_id).subscribe(function (res) {
                    console.log(res);

                    if (res.success == true) {
                      _this2.model.app_status = res.data.app_status == 1 ? true : false;
                      _this2.volunteer_data = res.data;
                      _this2.model.is_address = true;
                    }
                  });
                } else {
                  $("#v_register").css("display", "block");
                  $("#v_update").css("display", "none");
                  var data = JSON.stringify({
                    'id': user_id
                  });

                  _this2.fetch.profile(data).subscribe(function (res) {
                    _this2.volunteer_data.username = res['username'];
                    _this2.volunteer_data.dob = res['dob'];
                  });

                  _this2.fetch.getUserLocationForDonation(user_id).subscribe(function (res) {
                    if (res.success == true) {
                      console.log(res);
                      _this2.user_.colony_name = res.data.colony_name;
                      _this2.user_.city = res.data.city;
                      _this2.user_.state = res.data.state;
                      _this2.user_.country = res.data.country;
                      _this2.user_.latitude = res.data.latitude;
                      _this2.user_.longitude = res.data.longitude;
                      _this2.user_.postalCode = res.data.postalCode;
                    }
                  });
                }
              }
            });
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.fetch.volunteer_get_terms_conditions(lang_code).subscribe(function (res) {
              if (res.success) {
                _this2.model.content = res.data.content;
              } else {
                _this2.model.content = '';
              }
            });
          }
        }, {
          key: "openModalCurrentLocation",
          value: function openModalCurrentLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      localStorage.setItem('set_confirm_location_route', JSON.stringify('register-volunteer'));
                      _context.next = 3;
                      return this.modalController.create({
                        component: _modal_current_location_content_current_location_content_page__WEBPACK_IMPORTED_MODULE_5__["CurrentLocationContentPage"],
                        cssClass: 'custom_current_location_modal_new',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this3.dataReturned = dataReturned.data;
                          _this3.location_data = JSON.parse(_this3.dataReturned);
                          _this3.model.is_address = true;
                          _this3.volunteer_data.latitude = _this3.location_data.latitude;
                          _this3.volunteer_data.longitude = _this3.location_data.longitude;
                          _this3.volunteer_data.colony_name = _this3.location_data.colony_name;
                          _this3.volunteer_data.city = _this3.location_data.city;
                          _this3.volunteer_data.state = _this3.location_data.state;
                          _this3.volunteer_data.country = _this3.location_data.country;
                          _this3.volunteer_data.postalCode = _this3.location_data.postalCode;
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "successFullRegistration",
          value: function successFullRegistration() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modal_home_content_home_content_page__WEBPACK_IMPORTED_MODULE_7__["HomeContentPage"],
                        cssClass: 'home_content_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        $("#v_register").css("display", "block");
                        $("#v_update").css("display", "none");

                        _this4.router.navigate(['/home']);

                        if (dataReturned !== null) {}
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
          key: "openTermsAndConditions",
          value: function openTermsAndConditions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _modal_terms_conditions_terms_conditions_page__WEBPACK_IMPORTED_MODULE_13__["TermsConditionsPage"],
                        cssClass: 'home_content_modal_new',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": 2,
                          "content": this.model.content
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        $("#v_register").css("display", "block");
                        $("#v_update").css("display", "none");
                        _this5.model.accept = dataReturned.data;

                        if (_this5.model.accept == true) {
                          $('#dup-chekbox').css('background-color', '#419b95');
                          $('#dup-chekbox').css('border-color', '#419b95');
                        } else {
                          $('#dup-chekbox').css('background-color', '#fff');
                          $('#dup-chekbox').css('border-color', '#ccc');
                        } ///$('#terms').attr('checked',true);


                        if (dataReturned !== null) {}
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openModalError",
          value: function openModalError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _modal_location_error_content_location_error_content_page__WEBPACK_IMPORTED_MODULE_6__["LocationErrorContentPage"],
                        cssClass: 'custom_otp_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this6.dataReturned = dataReturned.data;
                          _this6.location_data = JSON.parse(_this6.dataReturned);
                        }
                      });
                      _context4.next = 6;
                      return modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please fill all the details',
                        buttons: ['Okay']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "msgAlert",
          value: function msgAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: msg,
                        buttons: ['Okay']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "from",
          value: function from(event) {
            this.from_Time = new Date(event.target.value);
            this.from_Time = this.formatAMPM(this.from_Time);
            console.log(this.from_Time); // this.datePicker.show({
            //   date: new Date(),
            //   mode: 'time',
            //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            //   okText:"Save Time",
            //   nowText:"Set Now"
            // }).then(
            //   time => {
            //     this.fromTime = this.formatAMPM(time);
            //   },
            //   err => console.log('Error occurred while getting time: '+ JSON.stringify(err))
            // );
          }
        }, {
          key: "to",
          value: function to(event) {
            this.to_Time = new Date(event.target.value);
            this.to_Time = this.formatAMPM(this.to_Time);
            console.log(this.to_Time); // this.datePicker.show({
            //   date: new Date(),
            //   mode: 'time',
            //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            //   okText:"Save Time",
            //   nowText:"Set Now"
            // }).then(
            //   time => {
            //     this.toTime =  this.formatAMPM(time);
            //   },
            //   err => console.log('Error occurred while getting time: '+ JSON.stringify(err))
            // );
          }
        }, {
          key: "formatAMPM",
          value: function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'

            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
          }
        }, {
          key: "register",
          value: function register() {
            var _this7 = this;

            var shop_name = $("#shop_name").val();
            var working_hours = this.from_Time + '-' + this.to_Time;
            var shop_location = $("#shop_location").val(); //var terms = $('#terms:checked').val();

            this.model.search = true;

            if (shop_name == '' && this.from_Time == '' && this.to_Time == '') {
              this.model.search = false;
              $('#shop_name').addClass('error_border');
              $('#from_time').addClass('error_border');
              $('#to_time').addClass('error_border');
              $('.error_msg_from_time').css('display', 'block');
              $('.error_msg_to_time').css('display', 'block');
              $('.error_msg_shop_name').css('display', 'block');
              $('.error_terms').hide();
            } else if (shop_name == '') {
              this.model.search = false;
              $('#shop_name').addClass('error_border');
              $('#from_time').removeClass('error_border');
              $('#to_time').removeClass('error_border');
              $('.error_msg_from_time').css('display', 'none');
              $('.error_msg_to_time').css('display', 'none');
              $('.error_msg_shop_name').css('display', 'block'); //$('.error_terms').hide();
            } else if (this.from_Time == '') {
              this.model.search = false;
              $('#shop_name').removeClass('error_border');
              $('#from_time').addClass('error_border');
              $('#to_time').removeClass('error_border');
              $('.error_msg_from_time').css('display', 'block');
              $('.error_msg_to_time').css('display', 'none');
              $('.error_msg_shop_name').css('display', 'none'); //$('.error_terms').hide();
            } else if (this.to_Time == '') {
              this.model.search = false;
              $('#shop_name').removeClass('error_border');
              $('#from_time').removeClass('error_border');
              $('#to_time').addClass('error_border');
              $('.error_msg_from_time').css('display', 'none');
              $('.error_msg_to_time').css('display', 'block');
              $('.error_msg_shop_name').css('display', 'none');
            } else if (!(this.volunteer_data.latitude || this.volunteer_data.longitude || this.volunteer_data.colony_name || this.volunteer_data.city || this.volunteer_data.state || this.volunteer_data.country || this.volunteer_data.postalCode)) {
              // this.presentAlert();
              this.model.search = false;
              $('#shop_name').removeClass('error_border');
              $('#from_time').removeClass('error_border');
              $('#totime').removeClass('error_border');
              $('.error_msg_from_time').css('display', 'none');
              $('.error_msg_to_time').css('display', 'none');
              $('.error_msg_shop_name').css('display', 'none');
              $('#shop_location').addClass('error_border');
              $('.error_msg_shop_location').css('display', 'block');
            } else {
              $('#shop_name').removeClass('error_border');
              $('#from_time').removeClass('error_border');
              $('#totime').removeClass('error_border');
              $('.error_msg_from_time').css('display', 'none');
              $('.error_msg_to_time').css('display', 'none');
              $('.error_msg_shop_name').css('display', 'none');
              $('#shop_location').removeClass('error_border');
              $('.error_msg_shop_location').css('display', 'none'); //$('.error_terms').hide();

              if (this.model.volunteer_id == '' || this.model.volunteer_id == null) {
                if (this.volunteer_data.latitude === undefined && this.volunteer_data.longitude === undefined && this.volunteer_data.colony_name === undefined && this.volunteer_data.city === undefined && this.volunteer_data.state === undefined && this.volunteer_data.country === undefined && this.volunteer_data.postalCode === undefined) {
                  this.volunteer_data.colony_name = this.user_.colony_name;
                  this.volunteer_data.city = this.user_.city;
                  this.volunteer_data.state = this.user_.state;
                  this.volunteer_data.country = this.user_.country;
                  this.volunteer_data.latitude = this.user_.latitude;
                  this.volunteer_data.longitude = this.user_.longitude;
                  this.volunteer_data.postalCode = this.user_.postalCode;
                }

                var app_status = 0;
                var data = JSON.stringify({
                  'app_user_id': JSON.parse(localStorage.getItem('user_id')),
                  'username': this.volunteer_data.username,
                  'dob': this.volunteer_data.dob,
                  'latitude': this.volunteer_data.latitude,
                  'longitude': this.volunteer_data.longitude,
                  'colony_name': this.volunteer_data.colony_name,
                  'city': this.volunteer_data.city,
                  'state': this.volunteer_data.state,
                  'country': this.volunteer_data.country,
                  'postalCode': this.volunteer_data.postalCode,
                  'status': 0,
                  'shop_stall_name': shop_name,
                  'working_hour': working_hours,
                  'app_status': app_status,
                  'countof_closeapp': this.volunteer_data.countof_closeapp
                });
                this.fetch.register_volunteer(data).subscribe(function (res) {
                  _this7.model.search = false;

                  _this7.openTermsAndConditions();

                  localStorage.setItem('volunteer_id', res.volunteer_id);
                });
              } else {
                var app_status = 0;

                var _data = JSON.stringify({
                  'id': this.model.volunteer_id,
                  'app_user_id': JSON.parse(localStorage.getItem('user_id')),
                  'username': this.volunteer_data.username,
                  'dob': this.volunteer_data.dob,
                  'latitude': this.volunteer_data.latitude,
                  'longitude': this.volunteer_data.longitude,
                  'colony_name': this.volunteer_data.colony_name,
                  'city': this.volunteer_data.city,
                  'state': this.volunteer_data.state,
                  'country': this.volunteer_data.country,
                  'postalCode': this.volunteer_data.postalCode,
                  'status': 0,
                  'shop_stall_name': shop_name,
                  'working_hour': working_hours,
                  'app_status': app_status,
                  'countof_closeapp': this.volunteer_data.countof_closeapp
                });

                this.fetch.update_volunteer(_data).subscribe(function (res) {
                  _this7.model.search = false;
                  localStorage.setItem('volunteer_id', res.volunteer_id);

                  _this7.router.navigate(['/home']); //}

                });
              }
            }
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this8 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: _modal_error_msg_modal_error_msg_modal_page__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgModalPage"],
                        cssClass: 'error_modal_css',
                        backdropDismiss: false,
                        componentProps: {
                          "msg": this.alert_text
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        _this8.openModalCurrentLocation();
                      });
                      _context7.next = 6;
                      return modal.present();

                    case 6:
                      return _context7.abrupt("return", _context7.sent);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return RegisterVolunteerPage;
      }();

      RegisterVolunteerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_10__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["DatePicker"]
        }];
      };

      RegisterVolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-volunteer',
        template: _raw_loader_register_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterVolunteerPage);
      /***/
    },

    /***/
    "WdT9":
    /*!*****************************************************************!*\
      !*** ./src/app/register-volunteer/register-volunteer.module.ts ***!
      \*****************************************************************/

    /*! exports provided: RegisterVolunteerPageModule */

    /***/
    function WdT9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterVolunteerPageModule", function () {
        return RegisterVolunteerPageModule;
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


      var _register_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-volunteer-routing.module */
      "l4wH");
      /* harmony import */


      var _register_volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register-volunteer.page */
      "OetK");

      var RegisterVolunteerPageModule = function RegisterVolunteerPageModule() {
        _classCallCheck(this, RegisterVolunteerPageModule);
      };

      RegisterVolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterVolunteerPageRoutingModule"]],
        declarations: [_register_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["RegisterVolunteerPage"]]
      })], RegisterVolunteerPageModule);
      /***/
    },

    /***/
    "gpQI":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-volunteer/register-volunteer.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gpQI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\t<div class=\"big_header\">\n\t\t\n\t\t<div class=\"ion-padding\">\n\t\t\t\n\t\t\t<div class=\"title light poiret\">\n\t\t\t\t\t\n\t\t\t\t\t\t<ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n\t\t\t\t\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t{{model.key_text1}}\n\t\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"big_header_bottom regular size_18\">\n\t\t\t\t{{ model.key_text8 }} {{ volunteer_data.username }}, {{model.key_text2}} \n\t\t\t</div>\n\t\t</div>\n\t</div>\n  \n\t<div class=\"ion-padding\">\n\t\t<div class=\"register_volunteer app_input_text center_input\">\n\t\t  \t<img src=\"assets/images/shop.png\">\n\t\t  <input type=\"text\" placeholder=\"{{model.key_text9}}\" id=\"shop_name\" value=\"{{volunteer_data.shop_stall_name}}\">\n\t\t  <span class=\"error_msg_shop_name\">{{model.key_text16}}</span>        \n\t\t</div>  \n\t\t<div class=\"register_volunteer app_input_text custom_timer_div\">\n\t\t\t<img src=\"assets/images/wall-clock.png\" id=\"clock_image\">\n\t\t\t<label class=\"grey\" style=\"margin-left: 28px;\">{{model.key_text11}}</label>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"3\" class=\"mt-12\">\n\t\t\t\t\t<label class=\"grey\">{{model.key_text14}}</label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\"  class=\"mt-12\">\n\t\t\t\t\t<label class=\"grey\">-</label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"7\">\n\n\t\t\t\t\t<!-- <input type=\"text\" id=\"from_time\" (click)=\"from()\" value=\"{{fromTime}}\"> -->\n\n\t\t\t\t\t<ion-datetime displayFormat=\"hh:mm A\"  id=\"from_time\" value=\"{{from_Time}}\"  name=\"from_time\" placeholder=\"select from time\" (ionChange)=\"from($event)\"  ></ion-datetime>\n\n\t\t\t\t\t<span class=\"error_msg_from_time\">{{model.key_text16}}</span>   \n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"3\"  class=\"mt-12\">\n\t\t\t\t\t<label class=\"grey\">{{model.key_text15}}</label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\"  class=\"mt-12\">\n\t\t\t\t\t<label class=\"grey\">-</label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<!-- <ion-button (click)=\"to()\">from</ion-button> -->\n\t\t\t\t\t<!-- <input type=\"text\"id=\"to_time\" (click)=\"to()\" value=\"{{toTime}}\"> -->\n\t\t\t\t\t<ion-datetime displayFormat=\"hh:mm A\"  id=\"to_time\" value=\"{{to_Time}}\" placeholder=\"select to time\"  name=\"toTime\" (ionChange)=\"to($event)\"  ></ion-datetime>\n\t\t\t\t\t<span class=\"error_msg_to_time\">{{model.key_text16}}</span>  \n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\n\t\t<div class=\"register_volunteer app_input_text center_input\">\n\t\t  <img src=\"assets/images/food_location_icon.svg\">\n\t\t  <input type=\"text\" value=\"{{volunteer_data.colony_name}}\" id=\"shop_location\" placeholder=\"{{model.key_text10}}\" (click)=\"presentConfirm()\">   \n\t\t  <span class=\"error_msg_shop_location\">{{model.key_text17}}</span> \n\t\t</div> \n\n\t\t<div class=\"vfd_location\" style=\"margin: 13px 23px;\" *ngIf=\"volunteer_data || volunteer_data != null\">\n\t\t\t<img src=\"assets/images/location_black.svg\" *ngIf=\"model.is_address\">\n\t\t\t<div class=\"vfd_address regular green\">\n\t\t\t  {{volunteer_data.colony_name}}\n\t\t\t</div>\n\t\t</div> \n\t</div>\n  </ion-content> \n  \n  <ion-footer> \n    <ion-toolbar>     \n      <div class=\"app_button\">\n        <span (click)=\"register()\" *ngIf=\"!model.search\" id=\"v_register\">\n          <button class=\"app_btn\">{{model.key_text6}}</button>\n        </span> \n\t\t<span (click)=\"register()\" *ngIf=\"!model.search\" id=\"v_update\">\n          <button class=\"app_btn\">{{model.key_text7}}</button>\n        </span><button class=\"app_btn\" style=\"padding:10px\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n\t\t\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  \n  \n  ";
      /***/
    },

    /***/
    "l4wH":
    /*!*************************************************************************!*\
      !*** ./src/app/register-volunteer/register-volunteer-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: RegisterVolunteerPageRoutingModule */

    /***/
    function l4wH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterVolunteerPageRoutingModule", function () {
        return RegisterVolunteerPageRoutingModule;
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


      var _register_volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register-volunteer.page */
      "OetK");

      var routes = [{
        path: '',
        component: _register_volunteer_page__WEBPACK_IMPORTED_MODULE_3__["RegisterVolunteerPage"]
      }];

      var RegisterVolunteerPageRoutingModule = function RegisterVolunteerPageRoutingModule() {
        _classCallCheck(this, RegisterVolunteerPageRoutingModule);
      };

      RegisterVolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterVolunteerPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-volunteer-register-volunteer-module-es5.js.map