(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteer-detail-volunteer-detail-module"], {
    /***/
    "+ED7":
    /*!***********************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail.page.ts ***!
      \***********************************************************/

    /*! exports provided: VolunteerDetailPage */

    /***/
    function ED7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerDetailPage", function () {
        return VolunteerDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_volunteer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./volunteer-detail.page.html */
      "FbHi");
      /* harmony import */


      var _volunteer_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./volunteer-detail.page.scss */
      "5MKl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! highcharts */
      "6n/F");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../modal/cancel-allotedfood/cancel-allotedfood.page */
      "hHBB");

      var VolunteerDetailPage = /*#__PURE__*/function () {
        function VolunteerDetailPage(fetch, storage, alertController, router, modalController) {
          _classCallCheck(this, VolunteerDetailPage);

          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.router = router;
          this.modalController = modalController;
          this.model = {};
          this.food_request = [];
          this.food_request_fulfill = [];
          this.volunteer_data = [];
          this.onthe_way = [];
          this.completed_way = [];
          this.volunteer_graph_data = [];
          this.volunteer_graph_accepted_data = [];
          this.full_count = "";
          this.active_count = "";
          this.x_cat_count = [];
          this.mylang = '';
        }

        _createClass(VolunteerDetailPage, [{
          key: "dynamicColumnChart",
          value: function dynamicColumnChart(data, data2, cat, min, max, tickInterval) {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('my_highcharts', {
              chart: {
                type: 'column',
                backgroundColor: '#fff',
                height: 300
              },
              credits: {
                enabled: false
              },
              title: {
                text: ''
              },
              xAxis: {
                categories: cat
              },
              yAxis: {
                gridLineWidth: 0,
                min: min,
                max: max,
                tickInterval: tickInterval,
                tickPixelInterval: 1,
                title: {
                  text: ''
                }
              },
              plotOptions: {
                series: {
                  marker: {
                    enabled: false
                  }
                }
              },
              series: [{
                name: this.model.key_text27,
                type: undefined,
                color: '#ffcc00',
                data: data
              }, {
                name: this.model.key_text28,
                type: undefined,
                color: '#999900',
                data: data2
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 2000);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.head_tab = "tab-1";
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            var _this = this;

            $('#add_location_spinner').show();
            this.head_tab = ev.target.value;

            if (this.head_tab == 'tab-2') {
              this.fetch.my_ontheway_food(this.model.user_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this.onthe_way = res['data'];
              });
            } else if (this.head_tab == 'tab-3') {
              this.fetch.my_completed_food(this.model.user_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this.completed_way = res['data'];
              });
              this.todayGraph();
            } else if (this.head_tab == 'tab-1') {
              this.fetch.my_waiting_request(this.model.volunteer_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this.food_request = res.data;
              });
            }
          }
        }, {
          key: "segmentChangedCompleted",
          value: function segmentChangedCompleted(ev) {
            var vale = ev.target.value;

            if (vale == 'week') {
              this.weeklyGraph();
            }

            if (vale == 'month') {
              this.monthlyGraph();
            }

            if (vale == 'year') {
              this.yearlyGraph();
            }

            if (vale == 'today') {
              this.todayGraph();
            }
          }
        }, {
          key: "todayGraph",
          value: function todayGraph() {
            var _this2 = this;

            $('#add_location_spinner').show();
            this.volunteer_graph_data = [];
            this.x_cat_count = [];
            this.volunteer_graph_accepted_data = [];
            this.fetch.volunteer_graph_today(this.model.user_id).subscribe(function (res) {
              $('#add_location_spinner').hide();

              for (var m = 0; m < res.data.length; m++) {
                _this2.volunteer_graph_data.push(0);
              }

              var calcmax1 = 12;

              for (var k = 0; k < res.data.length; k++) {
                var index1 = k;
                _this2.volunteer_graph_data[index1] = res.data[k].cnt;

                _this2.x_cat_count.push(res.data[k].time);
              }

              _this2.fetch.volunteer_graph_today_accepted(_this2.model.user_id).subscribe(function (res1) {
                for (var l = 0; l < res1.data.length; l++) {
                  _this2.volunteer_graph_accepted_data.push(0);
                }

                var calcmax1 = 12;

                for (var kk = 0; kk < res1.data.length; kk++) {
                  var index2 = kk;
                  _this2.volunteer_graph_accepted_data[index2] = res1.data[kk].cnt;

                  _this2.x_cat_count.push(res1.data[kk].time);
                }

                _this2.model.min = 0;
                _this2.model.max = 30;
                _this2.model.tickInterval = 5;

                _this2.dynamicColumnChart(_this2.volunteer_graph_data, _this2.volunteer_graph_accepted_data, _this2.x_cat_count, _this2.model.min, _this2.model.max, _this2.model.tickInterval);
              });
            });
            this.fetch.count_today_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this2.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_today_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this2.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "weeklyGraph",
          value: function weeklyGraph() {
            var _this3 = this;

            $('#add_location_spinner').show();
            this.volunteer_graph_data = [];
            this.volunteer_graph_accepted_data = [];
            this.fetch.volunteer_graph_weekly(this.model.user_id).subscribe(function (res) {
              $('#add_location_spinner').hide();

              for (var i = 0; i < 7; i++) {
                _this3.volunteer_graph_data.push(0);
              }

              var calcmax = 12;

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].day - 1;
                _this3.volunteer_graph_data[index] = res.data[j].cnt;

                if (res.data[j].cnt > calcmax) {
                  calcmax = res.data[j].cnt;
                }
              }

              _this3.fetch.volunteer_graph_weekly_accepted(_this3.model.user_id).subscribe(function (res1) {
                $('#add_location_spinner').hide();

                for (var m = 0; m < 7; m++) {
                  _this3.volunteer_graph_accepted_data.push(0);
                }

                var calcmax1 = 12;

                for (var k = 0; k < res1.data.length; k++) {
                  var index1 = res1.data[k].day - 1;
                  _this3.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;

                  if (res1.data[k].cnt > calcmax1) {
                    calcmax1 = res1.data[k].cnt;
                  }
                }

                _this3.model.xcat = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                _this3.model.min = 0;
                _this3.model.max = 30;
                _this3.model.tickInterval = 5;

                _this3.dynamicColumnChart(_this3.volunteer_graph_data, _this3.volunteer_graph_accepted_data, _this3.model.xcat, _this3.model.min, _this3.model.max, _this3.model.tickInterval);
              });
            });
            this.fetch.count_weekly_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this3.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_weekly_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this3.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "monthlyGraph",
          value: function monthlyGraph() {
            var _this4 = this;

            $('#add_location_spinner').show();
            this.volunteer_graph_data = [];
            this.volunteer_graph_accepted_data = [];
            this.fetch.volunteer_graph_monthly(this.model.user_id).subscribe(function (res) {
              _this4.volunteer_graph_data = [0, 0, 0, 0];

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].Week_no - 1;
                _this4.volunteer_graph_data[index] = res.data[j].cnt;
              }

              $('#add_location_spinner').hide();

              _this4.fetch.volunteer_graph_monthly_accepted(_this4.model.user_id).subscribe(function (res1) {
                _this4.volunteer_graph_accepted_data = [0, 0, 0, 0];

                for (var k = 0; k < res1.data.length; k++) {
                  var index1 = res1.data[k].Week_no - 1;
                  _this4.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;
                }

                _this4.model.xcat = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'];
                _this4.model.min = 0;
                _this4.model.max = 60;
                _this4.model.tickInterval = 20;

                _this4.dynamicColumnChart(_this4.volunteer_graph_data, _this4.volunteer_graph_accepted_data, _this4.model.xcat, _this4.model.min, _this4.model.max, _this4.model.tickInterval);
              });
            });
            this.fetch.count_monthly_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this4.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_monthly_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this4.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "yearlyGraph",
          value: function yearlyGraph() {
            var _this5 = this;

            this.volunteer_graph_data = [];
            this.volunteer_graph_accepted_data = [];
            $('#add_location_spinner').show();
            this.fetch.volunteer_graph_yearly(this.model.user_id).subscribe(function (res) {
              _this5.volunteer_graph_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].month - 1;
                _this5.volunteer_graph_data[index] = res.data[j].cnt;
              }

              $('#add_location_spinner').hide();

              _this5.fetch.volunteer_graph_yearly_accepted(_this5.model.user_id).subscribe(function (res1) {
                _this5.volunteer_graph_accepted_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                for (var k = 0; k < res1.data.length; k++) {
                  var index1 = res1.data[k].month - 1;
                  _this5.volunteer_graph_accepted_data[index1] = res1.data[k].cnt;
                }

                _this5.model.xcat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                _this5.model.min = 0;
                _this5.model.max = 60;
                _this5.model.tickInterval = 20;

                _this5.dynamicColumnChart(_this5.volunteer_graph_data, _this5.volunteer_graph_accepted_data, _this5.model.xcat, _this5.model.min, _this5.model.max, _this5.model.tickInterval);
              });
            });
            this.fetch.count_yearly_donation_fullfiled(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this5.full_count = res.data[0].total_donation;
              }
            });
            this.fetch.count_yearly_donation_accepted(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this5.active_count = res.data[0].total_donation;
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this6 = this;

            this.model.app_user_id = localStorage.getItem("user_id");
            var user = JSON.stringify({
              'id': this.model.app_user_id
            });
            this.fetch.profile(user).subscribe(function (res) {
              _this6.model.login_username = res['username'];
            });
            this.model.mode = 'WALKING';
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            console.log(lang_code);
            this.mylang = lang_code; // this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'WAITING';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'ON_THE_WAY';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'COMPLETED';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'REASON_FOR_CANCEL_FOOD_REQUEST';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'CANCEL';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'TODAY';
            });
            this.model.key_text8 = item8[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            var item9 = res.find(function (i) {
              return i.key_text === 'FOOD_REQUESTS';
            });
            this.model.key_text9 = item9[lang_code];
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text12 = item12[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.key_text17 = item17[lang_code];
            var item18 = res.find(function (i) {
              return i.key_text === 'WEEK';
            });
            this.model.key_text18 = item18[lang_code];
            var item19 = res.find(function (i) {
              return i.key_text === 'MONTH';
            });
            this.model.key_text19 = item19[lang_code];
            var item20 = res.find(function (i) {
              return i.key_text === 'YEAR';
            });
            this.model.key_text20 = item20[lang_code];
            var item21 = res.find(function (i) {
              return i.key_text === 'TOTAL_DONATIONS_ACCEPTED';
            });
            this.model.key_text21 = item21[lang_code];
            var item22 = res.find(function (i) {
              return i.key_text === 'TOTAL_DONATIONS_FULLFILLED';
            });
            this.model.key_text22 = item22[lang_code];
            var item23 = res.find(function (i) {
              return i.key_text === 'FOOD_FOR';
            });
            this.model.key_text23 = item23[lang_code];
            var item24 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text24 = item24[lang_code];
            var item25 = res.find(function (i) {
              return i.key_text === 'VIEW_FEEDBACK';
            });
            this.model.key_text25 = item25[lang_code];
            var item26 = res.find(function (i) {
              return i.key_text === 'SHARE_FEEDBACK';
            });
            this.model.key_text26 = item26[lang_code];
            var item27 = res.find(function (i) {
              return i.key_text === 'DONATION_FULFILLED';
            });
            this.model.key_text27 = item27[lang_code];
            var item28 = res.find(function (i) {
              return i.key_text === 'DONATION_ACCEPTED';
            });
            this.model.key_text28 = item28[lang_code];
            var item29 = res.find(function (i) {
              return i.key_text === 'PEOPLE';
            });
            this.model.key_text29 = item29[lang_code];
            var item30 = res.find(function (i) {
              return i.key_text === 'PERSON';
            });
            this.model.key_text30 = item30[lang_code];
            var item31 = res.find(function (i) {
              return i.key_text === 'TYPE_HERE';
            });
            this.model.key_text31 = item31[lang_code];
            var item32 = res.find(function (i) {
              return i.key_text === 'FOOD';
            });
            this.model.key_text32 = item32[lang_code];
            var item33 = res.find(function (i) {
              return i.key_text === 'FOR';
            });
            this.model.key_text33 = item33[lang_code]; //});

            this.model.volunteer_id = '';
            var user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.model.user_id = user_id;
            this.fetch.v_check(user_id).subscribe(function (res) {
              if (res.success == true) {
                _this6.model.status = res.status;
                _this6.model.volunteer_id = res.data;

                _this6.fetch.v_edit(_this6.model.volunteer_id).subscribe(function (res1) {
                  _this6.volunteer_data = res1.data;
                  _this6.model.app_status = res1.data.app_status == 1 ? true : false;
                });

                if (_this6.model.status != 1) {
                  _this6.router.navigate(['/volunteer-food-request']);
                }

                _this6.fetch.my_waiting_request(_this6.model.volunteer_id).subscribe(function (res) {
                  _this6.food_request = res.data;
                });
              } else {
                _this6.model.status = 0;

                _this6.router.navigate(['/volunteer-food-request']);
              }

              if (_this6.model.volunteer_id == '') {
                _this6.router.navigate(['/volunteer-food-request']);
              }
            });
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: this.model.key_text6,
                        inputs: [{
                          name: 'reason',
                          id: 'cancel_rsn',
                          type: 'textarea',
                          placeholder: this.model.key_text31
                        }],
                        buttons: [{
                          text: this.model.key_text7,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: this.model.key_text4,
                          handler: function handler() {
                            var rsn = $('#cancel_rsn').val();

                            if (rsn == '') {
                              _this7.presentAlert();
                            } else {
                              $("#req_list_" + id).hide();
                              var data = JSON.stringify({
                                'v_id': id,
                                'rsn': rsn,
                                'status': 3
                              });

                              _this7.fetch.volunteer_cancel_requested_food(data).subscribe(function (res) {
                                _this7.fetch.my_waiting_request(_this7.model.volunteer_id).subscribe(function (res) {
                                  _this7.food_request = res.data;
                                });
                              });
                            }
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
          key: "cancelAllotedRequest",
          value: function cancelAllotedRequest(id, food_id, donar_id, no_of_person, food_type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_9__["CancelAllotedfoodPage"],
                        cssClass: 'custom_filter_modal cancel_allot_food_popup',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title",
                          "id": id,
                          "type": 'donate_food'
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this8.dataReturned = dataReturned.data;

                          if (_this8.dataReturned == 1) {
                            var data = JSON.stringify({
                              'food_id': food_id,
                              'logged_in_user': _this8.model.login_username,
                              'no_of_person': no_of_person,
                              'app_user_id': _this8.model.app_user_id,
                              'food_type': food_type,
                              'notification_type': 3,
                              'to': donar_id,
                              'from': _this8.model.app_user_id,
                              'getFoodId': id
                            });

                            _this8.fetch.notify_donar_donate(data).subscribe(function (res) {
                              _this8.fetch.my_ontheway_food(_this8.model.user_id).subscribe(function (res) {
                                $('#add_location_spinner').hide();
                                _this8.onthe_way = res['data'];
                              });
                            });
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
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: this.model.key_text5,
                        buttons: [this.model.key_text4]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return VolunteerDetailPage;
      }();

      VolunteerDetailPage.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      VolunteerDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-volunteer-detail',
        template: _raw_loader_volunteer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_volunteer_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VolunteerDetailPage);
      /***/
    },

    /***/
    "5MKl":
    /*!*************************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function MKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZvbHVudGVlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUNBO0VBQ0MsaUJBQUE7QUFFRCIsImZpbGUiOiJ2b2x1bnRlZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50X2xvY2F0aW9uX3NwcGluZXJ7XG5cdC0tY29sb3I6IzQxOUI5NTtcbn1cbi5jdXJyZW50X2xvY2F0aW9uX3NwaW5uZXJfcG9zaXRpb257XG5cdG1hcmdpbi10b3A6MjUwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "FbHi":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer-detail/volunteer-detail.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FbHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<app-captcha></app-captcha>\n<ion-content style=\"display: flex;flex-direction: column;height: 100%;\">\n<div class=\"ion-padding theme_width\">\n  <div class=\"food_request_heading size_18\">{{model.key_text9}}</div><br>\n  <ion-segment class=\"volunteer-tab\" [(ngModel)] = \"head_tab\" value=\"tab-1\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"tab-1\" >\n        <ion-label class=\"size_12 medium\" >{{model.key_text1}}</ion-label>    \n    </ion-segment-button>\n    <ion-segment-button value=\"tab-2\">\n      <ion-label class=\"size_12 medium\">{{model.key_text2}}</ion-label>    \n    </ion-segment-button>        \n    <ion-segment-button value=\"tab-3\">    \n      <ion-label class=\"size_12 medium\">{{model.key_text3}}</ion-label>                \n    </ion-segment-button>        \n  </ion-segment>      \n</div>\n<div [ngSwitch]=\"head_tab\">\n  <div class=\"food_request_new\" *ngSwitchCase=\"'tab-1'\">\n    <div class=\"food_request_entry\" *ngFor=\"let x of food_request;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;\">\n      <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n      <div class=\"entry_name\" style=\"width: 70%;\" *ngIf=\"mylang!='hi'\">\n        <span class=\"green\">{{x.name}}</span> \n        <br>\n        {{x.food_type | foodType}} {{model.key_text23}} {{x.no_of_person_leftfor_food}} {{model.key_text30}}\n        \n      </div> \n      <div class=\"entry_name\" style=\"width: 70%;\" *ngIf=\"mylang=='hi'\">\n        <span class=\"green\">{{x.name}}</span> \n        <br>\n        {{x.food_type | foodType}} {{model.key_text32}} {{x.no_of_person_leftfor_food}} <span *ngIf=\"x.no_of_person_leftfor_food > 1\">{{model.key_text24}}</span><span *ngIf=\"x.no_of_person_leftfor_food == 1\">{{model.key_text30}}</span> {{model.key_text33}}\n        \n      </div> \n      <div class=\"custom_new_close_btn entry_delete\" style=\"width: 11%;\">\n        <img src=\"assets/images/round_cross.svg\" style=\"margin-top:0px;\" (click)=\"presentAlertPrompt(x.id)\">\n      </div>      \n    </div>\n  \n  </div>\n  \n  <div class=\"food_request_new\" *ngSwitchCase=\"'tab-2'\">\n    <ion-row *ngFor=\"let x of onthe_way;let i = index;\" class=\"custom_new_single_row\">\n      <ion-col size=\"1\" style=\"padding: 0;\">\t\n        {{i+1}}.\n      </ion-col>\n      <ion-col size=\"8\" style=\"padding: 0; padding-right: 10px;\" >\n        {{ x.username }} {{x.food_type | foodType}}. {{model.key_text23}} {{x.no_of_person}} {{model.key_text24}}\n      </ion-col>\t\t\t  \n      <ion-col size=\"3\" style=\"padding: 0;\" >\n        <div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n      </ion-col>\n    </ion-row> \n  </div>\n  <div class=\"ion-padding theme_width\" *ngSwitchCase=\"'tab-3'\">\n\n    \n\n    <ion-segment class=\"volunteer-graph-tab\"  value=\"today\" (ionChange)=\"segmentChangedCompleted($event)\">  \n      <ion-segment-button value=\"today\" >\n          <ion-label class=\"size_12 medium\" >{{model.key_text8}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"week\">\n        <ion-label class=\"size_12 medium\">{{model.key_text18}}</ion-label>    \n      </ion-segment-button>        \n      <ion-segment-button value=\"month\">    \n        <ion-label class=\"size_12 medium\">{{model.key_text19}}</ion-label>                \n      </ion-segment-button> \n      <ion-segment-button value=\"year\">    \n        <ion-label class=\"size_12 medium\">{{model.key_text20}}</ion-label>                \n      </ion-segment-button>        \n    </ion-segment>   \n    <div class=\"count_detail\">\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-label class=\"size_14 medium\" >{{model.key_text21}}</ion-label> \n        </ion-col>\n        <ion-col size=\"1\">\n          :\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label class=\"size_14 medium\" >{{active_count}}</ion-label> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-label class=\"size_14 medium\" >{{model.key_text22}}</ion-label> \n        </ion-col>\n        <ion-col size=\"1\">\n          :\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label class=\"size_14 medium\" >{{full_count}} {{model.key_text29}}</ion-label> \n        </ion-col>\n      </ion-row>\n     </div> \n    \n     <div id=\"my_highcharts\" style=\"width:100%;\"></div>\n    <div class=\"border-bottom\"></div>\n    <div class=\"count_detail\">\n  \n      <div class=\"food_request_entry\" *ngFor=\"let x of completed_way;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;\">\n        <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div>\n        <div class=\"entry_name\" style=\"width: 65%;\">\n          <span class=\"green\">{{x.username}}</span> \n          <br>\n          {{x.food_type | foodType}}. {{model.key_text23}} {{x.no_of_person}} {{model.key_text24}}\n        </div> \n        <div  routerLink=\"/view-feedback/{{x.feedback_id}}\" class=\"custom_new_close_btn entry_delete\" style=\"width: 28%;\" *ngIf=\"x.feedback_id\">\n          {{model.key_text25}}\n        </div>\n        <div routerLink=\"/feedback-form/{{x.app_user_id}}/{{x.id}}\" class=\"custom_new_close_btn entry_delete\" style=\"width: 28%;\" *ngIf=\"x.feedback_id =='' || x.feedback_id ==null\">\n          {{model.key_text26}}\n        </div>      \n      </div>\n    </div>\n    \n  </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>    \n    <ion-segment color=\"transparent\" value=\"volunteer\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n          <!--<img src=\"assets/images/red_footer_home.svg\">-->\n          <ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>\n          <ion-label class=\"size_12 medium\" >{{model.key_text10}}</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">{{model.key_text11}}</ion-label>    \n      </ion-segment-button>        \n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">            \n        <ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>\n        <!--<img src=\"assets/images/grey_footer_volunteer.svg\">-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text12}}</ion-label>                \n      </ion-segment-button>        \n    </ion-segment>      \n</ion-toolbar>\n</ion-footer>\n\n\n  \n\n";
      /***/
    },

    /***/
    "INBn":
    /*!*************************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail.module.ts ***!
      \*************************************************************/

    /*! exports provided: VolunteerDetailPageModule */

    /***/
    function INBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerDetailPageModule", function () {
        return VolunteerDetailPageModule;
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


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-google-charts */
      "omRQ");
      /* harmony import */


      var _volunteer_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./volunteer-detail-routing.module */
      "d6yE");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./volunteer-detail.page */
      "+ED7");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../captcha/captcha.component */
      "ekeA");

      var VolunteerDetailPageModule = function VolunteerDetailPageModule() {
        _classCallCheck(this, VolunteerDetailPageModule);
      };

      VolunteerDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"], _volunteer_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["VolunteerDetailPageRoutingModule"]],
        declarations: [_volunteer_detail_page__WEBPACK_IMPORTED_MODULE_8__["VolunteerDetailPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_9__["CaptchaComponent"]]
      })], VolunteerDetailPageModule);
      /***/
    },

    /***/
    "bljD":
    /*!************************************************************************!*\
      !*** ./node_modules/ng2-google-charts/node_modules/tslib/tslib.es6.js ***!
      \************************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function bljD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "d6yE":
    /*!*********************************************************************!*\
      !*** ./src/app/volunteer-detail/volunteer-detail-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: VolunteerDetailPageRoutingModule */

    /***/
    function d6yE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerDetailPageRoutingModule", function () {
        return VolunteerDetailPageRoutingModule;
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


      var _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./volunteer-detail.page */
      "+ED7");

      var routes = [{
        path: '',
        component: _volunteer_detail_page__WEBPACK_IMPORTED_MODULE_3__["VolunteerDetailPage"]
      }];

      var VolunteerDetailPageRoutingModule = function VolunteerDetailPageRoutingModule() {
        _classCallCheck(this, VolunteerDetailPageRoutingModule);
      };

      VolunteerDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VolunteerDetailPageRoutingModule);
      /***/
    },

    /***/
    "omRQ":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js ***!
      \***********************************************************************************/

    /*! exports provided: ChartHTMLTooltip, GoogleChartComponent, GoogleChartEditor, GoogleChartsControlComponent, GoogleChartsDashboardComponent, GoogleChartsLoaderService, Ng2GoogleChartsModule */

    /***/
    function omRQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function () {
        return ChartHTMLTooltip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function () {
        return GoogleChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartEditor", function () {
        return GoogleChartEditor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsControlComponent", function () {
        return GoogleChartsControlComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsDashboardComponent", function () {
        return GoogleChartsDashboardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function () {
        return GoogleChartsLoaderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function () {
        return Ng2GoogleChartsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "bljD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GoogleChartsLoaderService = /*#__PURE__*/function () {
        function GoogleChartsLoaderService(localeId, googleChartsSettings) {
          var _this9 = this;

          _classCallCheck(this, GoogleChartsLoaderService);

          this.googleChartsSettings = googleChartsSettings;
          this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.googleScriptIsLoading = false;
          this.localeId = localeId;
          this.loadGoogleChartsScriptPromise = new Promise(function (resolve, reject) {
            if (typeof google !== 'undefined' && google.charts) {
              resolve();
            } else if (!_this9.googleScriptIsLoading) {
              _this9.googleScriptIsLoading = true;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = 'https://www.gstatic.com/charts/loader.js';
              script.async = true;
              script.defer = true;

              script.onload = function () {
                _this9.googleScriptIsLoading = false;

                _this9.googleScriptLoadingNotifier.emit(true);

                resolve();
              };

              script.onerror = function () {
                _this9.googleScriptIsLoading = false;

                _this9.googleScriptLoadingNotifier.emit(false);

                reject();
              };

              document.getElementsByTagName('head')[0].appendChild(script);
            } else {
              _this9.googleScriptLoadingNotifier.subscribe(function (loaded) {
                if (loaded) {
                  resolve();
                } else {
                  reject();
                }
              });
            }
          });
        }

        _createClass(GoogleChartsLoaderService, [{
          key: "load",
          value: function load(settings) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadGoogleChartsScriptPromise;

                    case 2:
                      _context4.next = 4;
                      return new Promise(function (resolve) {
                        if (!settings) {
                          settings = Object.create(_this10.googleChartsSettings);
                        }

                        if (!settings) {
                          settings = {};
                        }

                        if (!settings.language) {
                          settings.language = _this10.localeId;
                        }

                        if (!settings.googleChartsVersion) {
                          settings.googleChartsVersion = '47';
                        }

                        var _settings = settings;
                        _settings.callback = resolve;
                        google.charts.load(settings.googleChartsVersion, _settings);
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return GoogleChartsLoaderService;
      }();

      GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(t) {
        return new (t || GoogleChartsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('googleChartsSettings', 8));
      };

      GoogleChartsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function GoogleChartsLoaderService_Factory() {
          return new GoogleChartsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("googleChartsSettings", 8));
        },
        token: GoogleChartsLoaderService,
        providedIn: "root"
      });
      GoogleChartsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('googleChartsSettings')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object])], GoogleChartsLoaderService);

      var GoogleChartsDataTable = /*#__PURE__*/function () {
        function GoogleChartsDataTable(opt) {
          _classCallCheck(this, GoogleChartsDataTable);

          this.opt = opt;
          this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (opt) {
            this._setDataTable(opt.dataTable, opt.firstRowIsData);
          }
        }

        _createClass(GoogleChartsDataTable, [{
          key: "send",
          value: function send() {
            var _this11 = this;

            if (this.query === undefined) {
              return;
            }

            this.query.send(function (queryResponse) {
              _this11.setDataTable(queryResponse.getDataTable());

              if (_this11.opt.queryCallback) {
                _this11.opt.queryCallback(queryResponse);
              }
            });
          }
        }, {
          key: "init",
          value: function init(opt) {
            var _this12 = this;

            if (opt) {
              this.opt = opt;
            }

            if (this.tid !== undefined) {
              // doesn't work, see https://github.com/google/google-visualization-issues/issues/2381
              // this.query.abort();
              window.clearInterval(this.tid);
              this.tid = undefined;
            }

            if (this.opt.dataSourceUrl) {
              this.query = new google.visualization.Query(this.opt.dataSourceUrl);

              if (this.opt.query) {
                this.query.setQuery(this.opt.query);
              }

              if (this.opt.timeout !== undefined) {
                this.query.setTimeout(this.opt.timeout);
              }

              if (this.opt.refreshInterval) {
                // this.query.setRefreshInterval(this.opt.refreshInterval);
                this.tid = window.setInterval(function () {
                  _this12.send();
                }, this.opt.refreshInterval * 1000);
              }

              this.send();
            } else {
              this.setDataTable(this.opt.dataTable);
            }
          }
          /**
           * @returns Underlying google.visualization.DataTable
           */

        }, {
          key: "getDataTable",
          value: function getDataTable() {
            return this.dataTable;
          }
        }, {
          key: "setDataTable",
          value: function setDataTable(dt, firstRowIsData) {
            if (firstRowIsData === undefined) {
              firstRowIsData = this.opt.firstRowIsData;
            }

            this._setDataTable(dt, firstRowIsData);

            this.dataTableChanged.emit(this.dataTable);
          }
        }, {
          key: "_setDataTable",
          value: function _setDataTable(dt, firstRowIsData) {
            if (Array.isArray(dt)) {
              dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
            }

            this.dataTable = dt;
            this.reformat();
          }
          /**
           * Applies formatters to data columns, if defined
           */

        }, {
          key: "reformat",
          value: function reformat() {
            var dt = this.dataTable;

            if (dt === undefined) {
              return;
            }

            if (this.opt.formatters === undefined) {
              return;
            }

            var _iterator = _createForOfIteratorHelper(this.opt.formatters),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var formatterConfig = _step.value;
                var formatter = void 0;

                if (formatterConfig.type === 'PatternFormat') {
                  var fmtOptions = formatterConfig.options;
                  formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
                  formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
                  continue;
                }

                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                formatter = new formatterConstructor(formatterOptions);

                if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                  var _fmtOptions = formatterOptions;

                  var _iterator2 = _createForOfIteratorHelper(_fmtOptions.ranges),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var range = _step2.value;

                      if (typeof range.fromBgColor !== 'undefined' && typeof range.toBgColor !== 'undefined') {
                        formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                      } else {
                        formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                var _iterator3 = _createForOfIteratorHelper(formatterConfig.columns),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var col = _step3.value;
                    formatter.format(dt, col);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);

        return GoogleChartsDataTable;
      }();

      GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
      };

      GoogleChartsDataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: GoogleChartsDataTable,
        outputs: {
          dataTableChanged: "dataTableChanged"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartsDataTable.prototype, "dataTableChanged", void 0);

      var ChartHTMLTooltip = /*#__PURE__*/function () {
        function ChartHTMLTooltip(el) {
          _classCallCheck(this, ChartHTMLTooltip);

          this.el = el;
        }

        _createClass(ChartHTMLTooltip, [{
          key: "setPosition",
          value: function setPosition(x, y) {
            this.el.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
            this.el.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
          }
        }, {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.el;
          }
        }]);

        return ChartHTMLTooltip;
      }();

      ChartHTMLTooltip.PIXELS = 'px';

      var GoogleChartComponent = /*#__PURE__*/function () {
        function GoogleChartComponent(el, loaderService) {
          var _this13 = this;

          _classCallCheck(this, GoogleChartComponent);

          this.el = el;
          this.loaderService = loaderService;

          this.mouseOverListener = function (item) {
            var event = _this13.parseMouseEvent(item);

            event.tooltip = _this13.getHTMLTooltip();
            return event;
          };

          this.mouseOutListener = function (item) {
            var event = _this13.parseMouseEvent(item);

            return event;
          };

          this.selectListener = function () {
            var event = {
              message: 'select',
              row: null,
              column: null,
              selectedRowValues: [],
              selectedRowFormattedValues: [],
              columnLabel: ''
            };

            var s = _this13.wrapper.visualization.getSelection();

            var gs = s[s.length - 1];

            if (!gs) {
              event.message = 'deselect';
              return event;
            }

            var selection = gs;

            if (gs.row != null) {
              event.row = selection.row;
              var selectedRowValues = [];
              var selectedRowFormattedValues = [];

              var dataTable = _this13.wrapper.getDataTable();

              var numberOfColumns = dataTable.getNumberOfColumns();

              for (var i = 0; i < numberOfColumns; i++) {
                selectedRowValues.push(dataTable.getValue(selection.row, i));
                selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
              }

              event.selectedRowValues = selectedRowValues;
              event.selectedRowFormattedValues = selectedRowFormattedValues;
            }

            if (selection.column != null) {
              event.column = selection.column;
              event.columnLabel = _this13.getColumnLabelAtPosition(selection);
            }

            if (gs.name) {
              event.columnLabel = gs.name;
            }

            return event;
          };

          this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.regionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.regionClickOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(GoogleChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.HTMLel = this.el.nativeElement.querySelector('div');

            if (Object.isExtensible(this.data)) {
              this.data.component = this;
            }

            this.options = this.data.options;
            this.init().then(function () {
              _this14.draw();
            });
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loaderService.load();

                    case 2:
                      this.recreateWrapper();

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "recreateWrapper",
          value: function recreateWrapper() {
            var _this15 = this;

            if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
              this.dataTable = new GoogleChartsDataTable(this.data);
              this.dataTable.dataTableChanged.subscribe(function (dt) {
                _this15._draw();
              }); // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart

              var temp = this.data;

              if (this.data.firstRowIsData) {
                temp = Object.assign(temp, this.data);
                temp.dataTable = this.dataTable.getDataTable();
              }

              this.wrapper = new google.visualization.ChartWrapper(temp);
              this.registerChartWrapperEvents();
              /* Calling draw even without data is the only way to pass the HTMl element
                 when using the chart in a dashboard. Don't do this in all other cases:
                 it breaks formatters with remote data source, hence the conditional. */

              if (temp.dataTable === undefined && temp.dataSourceUrl === undefined) {
                try {
                  this.wrapper.draw(this.HTMLel);
                } catch (err) {}
              }
            }
          }
        }, {
          key: "_draw",
          value: function _draw() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var dt;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      dt = this.dataTable.getDataTable();

                      if (!(dt === undefined)) {
                        _context6.next = 3;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 3:
                      this.convertOptions();
                      this.recreateWrapper();
                      this.wrapper.setOptions(this.options);
                      this.wrapper.setDataTable(dt);
                      this.wrapper.draw(this.HTMLel);

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getDataTable",
          value: function getDataTable() {
            return this.dataTable;
          }
        }, {
          key: "draw",
          value: function draw(value) {
            if (value === undefined) {
              value = this.data;
            }

            this.options = value.options;
            this.dataTable.init(value);
          }
        }, {
          key: "getSelectorBySeriesType",
          value: function getSelectorBySeriesType(seriesType) {
            var selectors = {
              bars: 'bar#%s#%r',
              haxis: 'hAxis#0#label',
              line: 'point#%s#%r',
              legend: 'legendentry#%s',
              area: 'point#%s#%r'
            };
            var selector = selectors[seriesType];
            return selector;
          }
          /**
           * Given a column number, counts how many
           * columns have rol=="data". Those are mapped
           * one-to-one to the series array. When rol is not defined
           * a column of type number means a series column.
           * @param column to inspect
           */

        }, {
          key: "getSeriesByColumn",
          value: function getSeriesByColumn(column) {
            var series = 0;
            var dataTable = this.wrapper.getDataTable();

            for (var i = column - 1; i >= 0; i--) {
              var role = dataTable.getColumnRole(i);
              var type = dataTable.getColumnType(i);

              if (role === 'data' || type === 'number') {
                series++;
              }
            }

            return series;
          }
        }, {
          key: "getBoundingBoxForItem",
          value: function getBoundingBoxForItem(item) {
            var boundingBox = {
              top: 0,
              left: 0,
              width: 0,
              height: 0
            };

            if (this.cli) {
              var column = item.column;
              var series = this.getSeriesByColumn(column);
              var row = item.row;
              var seriesType = this.options.seriesType;

              if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
              }

              if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);

                if (selector) {
                  selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                  var box = this.cli.getBoundingBox(selector);

                  if (box) {
                    boundingBox = box;
                  }
                }
              }
            }

            return boundingBox;
          }
        }, {
          key: "getValueAtPosition",
          value: function getValueAtPosition(position) {
            if (position.row == null) {
              return null;
            }

            var dataTable = this.wrapper.getDataTable();
            var value = dataTable.getValue(position.row, position.column);
            return value;
          }
        }, {
          key: "getColumnTypeAtPosition",
          value: function getColumnTypeAtPosition(position) {
            var dataTable = this.wrapper.getDataTable();
            var type = dataTable.getColumnType(position.column) || '';
            return type;
          }
        }, {
          key: "getColumnLabelAtPosition",
          value: function getColumnLabelAtPosition(position) {
            var dataTable = this.wrapper.getDataTable();
            var type = dataTable.getColumnLabel(position.column) || '';
            return type;
          }
        }, {
          key: "getHTMLTooltip",
          value: function getHTMLTooltip() {
            var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
            return new ChartHTMLTooltip(tooltipER);
          }
        }, {
          key: "parseMouseEvent",
          value: function parseMouseEvent(item) {
            var chartType = this.wrapper.getChartType();
            var eventColumn = item.column;

            if (eventColumn == null) {
              switch (chartType) {
                case 'Timeline':
                  eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                  break;

                default:
                  eventColumn = 0;
              }
            }

            var eventRow = item.row;
            var myItem = {
              row: eventRow,
              column: eventColumn
            };
            var event = {
              position: item,
              boundingBox: this.getBoundingBoxForItem(myItem),
              value: this.getValueAtPosition(myItem),
              columnType: this.getColumnTypeAtPosition(myItem),
              columnLabel: this.getColumnLabelAtPosition(myItem)
            };
            return event;
          }
        }, {
          key: "unregisterEvents",
          value: function unregisterEvents() {
            google.visualization.events.removeAllListeners(this.wrapper.getChart());
            google.visualization.events.removeAllListeners(this.wrapper);
          }
        }, {
          key: "registerChartEvents",
          value: function registerChartEvents() {
            var _this16 = this;

            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;

            if (this.mouseOver.observers.length > 0) {
              google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this16.parseMouseEvent(item);

                event.tooltip = _this16.getHTMLTooltip();

                _this16.mouseOver.emit(event);
              });
            }

            if (this.mouseOverOneTime.observers.length > 0) {
              google.visualization.events.addOneTimeListener(chart, 'onmouseover', function (item) {
                var event = _this16.parseMouseEvent(item);

                event.tooltip = _this16.getHTMLTooltip();

                _this16.mouseOverOneTime.emit(event);
              });
            }

            if (this.mouseOut.observers.length > 0) {
              google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this16.parseMouseEvent(item);

                _this16.mouseOut.emit(event);
              });
            }

            if (this.mouseOutOneTime.observers.length > 0) {
              google.visualization.events.addOneTimeListener(chart, 'onmouseout', function (item) {
                var event = _this16.parseMouseEvent(item);

                _this16.mouseOutOneTime.emit(event);
              });
            }

            if (this.data.chartType === 'GeoChart') {
              if (this.regionClick.observers.length > 0) {
                google.visualization.events.addListener(chart, 'regionClick', function (item) {
                  _this16.regionClick.emit(item);
                });
              }

              if (this.regionClickOneTime.observers.length > 0) {
                google.visualization.events.addOneTimeListener(chart, 'regionClick', function (item) {
                  _this16.regionClick.emit(item);
                });
              }
            }
          }
        }, {
          key: "registerChartWrapperEvents",
          value: function registerChartWrapperEvents() {
            var _this17 = this;

            google.visualization.events.addListener(this.wrapper, 'ready', function () {
              _this17.chartReady.emit({
                message: 'Chart ready'
              });
            });
            google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
              _this17.chartReadyOneTime.emit({
                message: 'Chart ready (one time)'
              });

              _this17.registerChartEvents();
            });
            google.visualization.events.addListener(this.wrapper, 'error', function (error) {
              _this17.chartError.emit(error);
            });
            google.visualization.events.addOneTimeListener(this.wrapper, 'error', function (error) {
              _this17.chartErrorOneTime.emit(error);
            });
            this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
            this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
          }
        }, {
          key: "addListener",
          value: function addListener(source, eventType, listenerFn, evEmitter) {
            google.visualization.events.addListener(source, eventType, function () {
              evEmitter.emit(listenerFn());
            });
          }
        }, {
          key: "addOneTimeListener",
          value: function addOneTimeListener(source, eventType, listenerFn, evEmitter) {
            google.visualization.events.addOneTimeListener(source, eventType, function () {
              evEmitter.emit(listenerFn());
            });
          }
        }, {
          key: "convertOptions",
          value: function convertOptions() {
            try {
              this.options = google.charts[this.data.chartType].convertOptions(this.options);
            } catch (error) {
              return;
            }
          }
        }]);

        return GoogleChartComponent;
      }();

      GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) {
        return new (t || GoogleChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartComponent,
        selectors: [["google-chart"]],
        inputs: {
          data: "data"
        },
        outputs: {
          chartSelect: "chartSelect",
          chartSelectOneTime: "chartSelectOneTime",
          chartReady: "chartReady",
          chartReadyOneTime: "chartReadyOneTime",
          chartError: "chartError",
          chartErrorOneTime: "chartErrorOneTime",
          mouseOver: "mouseOver",
          mouseOverOneTime: "mouseOverOneTime",
          mouseOut: "mouseOut",
          mouseOutOneTime: "mouseOutOneTime",
          regionClick: "regionClick",
          regionClickOneTime: "regionClickOneTime"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartComponent.prototype, "data", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartReady", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartError", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "regionClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GoogleChartComponent.prototype, "regionClickOneTime", void 0);
      GoogleChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartComponent);

      var GoogleChartsDashboardComponent = /*#__PURE__*/function () {
        function GoogleChartsDashboardComponent(el, loaderService) {
          _classCallCheck(this, GoogleChartsDashboardComponent);

          this.el = el;
          this.loaderService = loaderService;
          this.el = el;
          this.loaderService = loaderService;
        }

        _createClass(GoogleChartsDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.data.component = this;
            this.init().then(function () {
              if (!_this18.dataTable) {
                _this18.dataTable = new GoogleChartsDataTable(_this18.data);

                _this18.dataTable.dataTableChanged.subscribe(function (dt) {
                  _this18._draw();
                });
              }

              _this18.draw();
            });
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _iterator4, _step4, b, controls, charts, _iterator5, _step5, c, _iterator6, _step6, _c, data;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loaderService.load({
                        packages: ['controls']
                      });

                    case 2:
                      this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
                      _iterator4 = _createForOfIteratorHelper(this.data.bind);
                      _context7.prev = 4;

                      _iterator4.s();

                    case 6:
                      if ((_step4 = _iterator4.n()).done) {
                        _context7.next = 52;
                        break;
                      }

                      b = _step4.value;
                      controls = b[0];
                      charts = b[1];

                      if (!(controls instanceof Array)) {
                        controls = [controls];
                      }

                      if (!(charts instanceof Array)) {
                        charts = [charts];
                      }

                      _iterator5 = _createForOfIteratorHelper(controls);
                      _context7.prev = 13;

                      _iterator5.s();

                    case 15:
                      if ((_step5 = _iterator5.n()).done) {
                        _context7.next = 21;
                        break;
                      }

                      c = _step5.value;
                      _context7.next = 19;
                      return c.component.ensureInit();

                    case 19:
                      _context7.next = 15;
                      break;

                    case 21:
                      _context7.next = 26;
                      break;

                    case 23:
                      _context7.prev = 23;
                      _context7.t0 = _context7["catch"](13);

                      _iterator5.e(_context7.t0);

                    case 26:
                      _context7.prev = 26;

                      _iterator5.f();

                      return _context7.finish(26);

                    case 29:
                      _iterator6 = _createForOfIteratorHelper(charts);
                      _context7.prev = 30;

                      _iterator6.s();

                    case 32:
                      if ((_step6 = _iterator6.n()).done) {
                        _context7.next = 41;
                        break;
                      }

                      _c = _step6.value;
                      _context7.next = 36;
                      return _c.component.init();

                    case 36:
                      data = _c.component.data;

                      if (!(data.dataTable !== undefined || data.dataSourceUrl !== undefined)) {
                        _context7.next = 39;
                        break;
                      }

                      throw Error('dataTable and dataSourceUrl cannot be specified when ' + 'chart is drawn in a Dashboard');

                    case 39:
                      _context7.next = 32;
                      break;

                    case 41:
                      _context7.next = 46;
                      break;

                    case 43:
                      _context7.prev = 43;
                      _context7.t1 = _context7["catch"](30);

                      _iterator6.e(_context7.t1);

                    case 46:
                      _context7.prev = 46;

                      _iterator6.f();

                      return _context7.finish(46);

                    case 49:
                      this.dashboard.bind(controls.map(function (x) {
                        return x.component.wrapper;
                      }), charts.map(function (x) {
                        return x.component.wrapper;
                      }));

                    case 50:
                      _context7.next = 6;
                      break;

                    case 52:
                      _context7.next = 57;
                      break;

                    case 54:
                      _context7.prev = 54;
                      _context7.t2 = _context7["catch"](4);

                      _iterator4.e(_context7.t2);

                    case 57:
                      _context7.prev = 57;

                      _iterator4.f();

                      return _context7.finish(57);

                    case 60:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[4, 54, 57, 60], [13, 23, 26, 29], [30, 43, 46, 49]]);
            }));
          }
        }, {
          key: "draw",
          value: function draw(value) {
            this.dataTable.init(value);
          }
        }, {
          key: "_draw",
          value: function _draw() {
            this.dashboard.draw(this.dataTable.getDataTable());
          }
        }]);

        return GoogleChartsDashboardComponent;
      }();

      GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(t) {
        return new (t || GoogleChartsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartsDashboardComponent,
        selectors: [["google-charts-dashboard"]],
        inputs: {
          data: "data"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartsDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartsDashboardComponent.prototype, "data", void 0);
      GoogleChartsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartsDashboardComponent);

      var GoogleChartsControlComponent = /*#__PURE__*/function () {
        function GoogleChartsControlComponent(el, loaderService) {
          _classCallCheck(this, GoogleChartsControlComponent);

          this.el = el;
          this.loaderService = loaderService;
          this.el = el;
          this.loaderService = loaderService;
        }

        _createClass(GoogleChartsControlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data.component = this;
          }
        }, {
          key: "ensureInit",
          value: function ensureInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var opt;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!this.wrapper) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 2:
                      _context8.next = 4;
                      return this.loaderService.load({
                        packages: ['controls']
                      });

                    case 4:
                      opt = Object.create(this.data);
                      opt.containerId = this.el.nativeElement.querySelector('div');
                      this.wrapper = new google.visualization.ControlWrapper(opt);

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return GoogleChartsControlComponent;
      }();

      GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(t) {
        return new (t || GoogleChartsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
      };

      GoogleChartsControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleChartsControlComponent,
        selectors: [["google-charts-control"]],
        inputs: {
          data: "data"
        },
        decls: 1,
        vars: 0,
        template: function GoogleChartsControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleChartsControlComponent.prototype, "data", void 0);
      GoogleChartsControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleChartsLoaderService])], GoogleChartsControlComponent);

      var Ng2GoogleChartsModule = function Ng2GoogleChartsModule() {
        _classCallCheck(this, Ng2GoogleChartsModule);
      };

      Ng2GoogleChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: Ng2GoogleChartsModule
      });
      Ng2GoogleChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function Ng2GoogleChartsModule_Factory(t) {
          return new (t || Ng2GoogleChartsModule)();
        },
        providers: [GoogleChartsLoaderService]
      });

      function isComponent(chart) {
        return chart.wrapper !== undefined;
      }

      var GoogleChartEditor = /*#__PURE__*/function () {
        function GoogleChartEditor(loaderService) {
          _classCallCheck(this, GoogleChartEditor);

          this.loaderService = loaderService;
        }

        _createClass(GoogleChartEditor, [{
          key: "createEditor",
          value: function createEditor() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this19 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(this.chartEditor !== undefined)) {
                        _context9.next = 2;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 2:
                      _context9.next = 4;
                      return this.loaderService.load({
                        packages: ['charteditor']
                      });

                    case 4:
                      this.chartEditor = new google.visualization.ChartEditor();
                      google.visualization.events.addListener(this.chartEditor, 'ok', function () {
                        var wrapper = _this19.chartEditor.getChartWrapper();

                        _this19.comp.wrapper = wrapper;
                        _this19.comp.data.chartType = wrapper.getChartType();

                        if (_this19.comp.data.options !== undefined || Object.isExtensible(_this19.comp.data)) {
                          _this19.comp.data.options = wrapper.getOptions();
                        }

                        _this19.comp.wrapper.draw();
                      });

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "openDialog",
          value: function openDialog(chart, options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this20 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.createEditor();

                    case 2:
                      return _context10.abrupt("return", new Promise(function (resolve, reject) {
                        _this20.comp = isComponent(chart) ? chart : chart.component;

                        _this20.chartEditor.openDialog(_this20.comp.wrapper, options);

                        google.visualization.events.addListener(_this20.chartEditor, 'ok', function () {
                          resolve(_this20.comp.wrapper);
                        });
                        google.visualization.events.addListener(_this20.chartEditor, 'cancel', function () {
                          reject();
                        });
                      }));

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return GoogleChartEditor;
      }();

      GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(t) {
        return new (t || GoogleChartEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleChartsLoaderService));
      };

      GoogleChartEditor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function GoogleChartEditor_Factory() {
          return new GoogleChartEditor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(GoogleChartsLoaderService));
        },
        token: GoogleChartEditor,
        providedIn: "root"
      });
      GoogleChartEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleChartsLoaderService])], GoogleChartEditor);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsLoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: ['googleChartsSettings']
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-chart',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          chartSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartSelectOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartReadyOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          chartErrorOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOverOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOutOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          regionClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          regionClickOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-charts-dashboard',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'google-charts-control',
            template: '<div></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleChartsLoaderService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2GoogleChartsModule, {
          declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
          exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2GoogleChartsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
            providers: [GoogleChartsLoaderService],
            exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartEditor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: GoogleChartsLoaderService
          }];
        }, null);
      })();
      /*
       * Public API Surface of ng2-google-charts
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-google-charts.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=volunteer-detail-volunteer-detail-module-es5.js.map