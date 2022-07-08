(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-food-review-donate-food-review-module"], {
    /***/
    "1zAN":
    /*!***************************************************************!*\
      !*** ./src/app/donate-food-review/donate-food-review.page.ts ***!
      \***************************************************************/

    /*! exports provided: DonateFoodReviewPage */

    /***/
    function zAN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodReviewPage", function () {
        return DonateFoodReviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_food_review_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate-food-review.page.html */
      "LnSc");
      /* harmony import */


      var _donate_food_review_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate-food-review.page.scss */
      "8ow6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_donate_food_content_donate_food_content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modal/donate-food-content/donate-food-content.page */
      "6kjK");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DonateFoodReviewPage = /*#__PURE__*/function () {
        function DonateFoodReviewPage(modalController, route, router, fetch, storage, alertController) {
          _classCallCheck(this, DonateFoodReviewPage);

          this.modalController = modalController;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.alertController = alertController;
          this.model = {};
          this.food_data = [];
          this.pending_data = [];
          this.veg_food = [];
          this.nonveg_food = [];
          this.notification = [];
        }

        _createClass(DonateFoodReviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.search = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            this.model.alert_text = 'Please fill all the details';
            this.model.okay = 'okay';
            var lang_code = JSON.parse(localStorage.getItem('lang')); ///this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'YOUR_PENDING_DONATIONS';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'FOOD_FOR';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'YOUR_NEW_DONATION';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'TOTAL_NO._OF_PACKETS';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'EACH_PACKET_CONTAINS_FOOD_FOR';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'TOTAL_FOOD_FOR';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'TYPE_OF_FOOD';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'DONATE_FOOD';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.alert_text = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'CONFIRM_DONATE_REQUEST';
            });
            this.model.key_text16 = item16[lang_code]; //});

            var id = parseInt(this.route.snapshot.params['id']);
            var id2 = parseInt(this.route.snapshot.params['id2']);
            this.model.veg = id;
            this.model.nonveg = id2;
            var user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.fetch.pending_donation(user_id).subscribe(function (res) {
              _this.pending_data = res['data'];
            });

            if (id != 0) {
              this.fetch.reviewFood(id).subscribe(function (res) {
                _this.veg_food = res['data'];
              });
            }

            if (id2 != 0) {
              this.fetch.reviewFood(id2).subscribe(function (res) {
                _this.nonveg_food = res['data'];
              });
            }
          }
        }, {
          key: "packets",
          value: function packets() {
            this.food_data.total_no_of_packet = $("#number3").val();
            this.food_data.total_food_for = this.food_data.each_packet_contain_food_for * this.food_data.total_no_of_packet;
          }
        }, {
          key: "food_for",
          value: function food_for() {
            this.food_data.each_packet_contain_food_for = $("#number4").val(); //this.food_data.total_food_for = this.food_data.each_packet_contain_food_for * this.food_data.total_no_of_packet;  

            this.food_data.total_food_for = this.food_data.each_packet_contain_food_for;
          }
        }, {
          key: "openModalDonateFood",
          value: function openModalDonateFood() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_donate_food_content_donate_food_content_page__WEBPACK_IMPORTED_MODULE_5__["DonateFoodContentPage"],
                        cssClass: 'custom_donate_food_modal',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title",
                          "veg": this.model.veg,
                          "nonveg": this.model.nonveg,
                          "veg_food": this.veg_food,
                          "nonveg_food": this.nonveg_food
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        localStorage.removeItem('donate_address_type');
                        localStorage.removeItem('set_confirm_location_route');
                        localStorage.removeItem('donor_location');

                        _this2.router.navigate(['/home']);

                        if (dataReturned !== null) {
                          _this2.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
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
          key: "donate_food",
          value: function donate_food() {
            this.model.search = true;
            var data = JSON.stringify({
              'id': this.model.veg,
              'id2': this.model.nonveg
            });
            this.router.navigate(['/donate-food-pickup-drop', this.model.veg, this.model.nonveg]); // }
          }
        }]);

        return DonateFoodReviewPage;
      }();

      DonateFoodReviewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      DonateFoodReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-food-review',
        template: _raw_loader_donate_food_review_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_food_review_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonateFoodReviewPage);
      /***/
    },

    /***/
    "8ow6":
    /*!*****************************************************************!*\
      !*** ./src/app/donate-food-review/donate-food-review.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function ow6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvbmF0ZS1mb29kLXJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoiZG9uYXRlLWZvb2QtcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG59Il19 */";
      /***/
    },

    /***/
    "HaGj":
    /*!*****************************************!*\
      !*** ./src/app/pipes/food-type.pipe.ts ***!
      \*****************************************/

    /*! exports provided: FoodTypePipe */

    /***/
    function HaGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodTypePipe", function () {
        return FoodTypePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FoodTypePipe = /*#__PURE__*/function () {
        function FoodTypePipe() {
          _classCallCheck(this, FoodTypePipe);
        }

        _createClass(FoodTypePipe, [{
          key: "transform",
          value: function transform(value, arg) {
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            console.log(lang_code);
            var address_type = "";

            if (lang_code == 'en') {
              if (value == 1) {
                address_type = "Veg";
              } else if (value == 2) {
                address_type = "Non Veg";
              } else {
                address_type = "Both";
              }
            } else if (lang_code == 'hi') {
              if (value == 1) {
                address_type = "शाकाहारी";
              } else if (value == 2) {
                address_type = "मासाहारी";
              } else {
                address_type = "दोनों";
              }
            } else if (lang_code == 'te') {
              if (value == 1) {
                address_type = "వెజ్";
              } else if (value == 2) {
                address_type = "నాన్ వెజ్";
              } else {
                address_type = "రెండు";
              }
            }

            return address_type;
          }
        }]);

        return FoodTypePipe;
      }();

      FoodTypePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'foodType'
      })], FoodTypePipe);
      /***/
    },

    /***/
    "LnSc":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate-food-review/donate-food-review.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LnSc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-captcha></app-captcha>\n<ion-content>\n<div class=\"ion-padding theme_width\"> \n  <div class=\"search_food_bg\" style=\"min-height: 234px;\">\n    <div class=\"search_single\">\n      <div class=\"size_18 medium big_heading\">{{model.key_text1}}</div>\n\n      <ion-row *ngFor=\"let x of pending_data;let i = index;\">\n        <ion-col size=\"8\" style=\"padding: 0;\">\n          {{i+1}}. {{x.food_type | foodType}}. {{model.key_text2}} {{x.total_food_for}} {{model.key_text3}}\n        </ion-col>\n        <ion-col size=\"4\" style=\"padding: 0;\">\n          <div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n        </ion-col>\n      </ion-row>  \n      \n    </div>\n\n  </div>   \n  \n  <div class=\"search_food_bg\" style=\"min-height: 306px; margin-top: 15px;\">\n    <div class=\"\">\n\n      <div class=\"size_18 medium big_heading\">{{model.key_text4}}</div>\n\n      <ion-row *ngIf=\"model.veg != 0\">\n        <ion-col size=\"6\">\n         {{model.key_text11}}\n        </ion-col>\n        <ion-col size=\"1\" class=\"center\">\n          :\n        </ion-col>\n        <ion-col size=\"5\">\n          <div class=\"light_green center\">{{veg_food.food_type | foodType}}.</div> \n        </ion-col>\n        <br>\n        <br>\n      </ion-row> \n      <ion-row *ngIf=\"model.veg != 0\">\n        <ion-col size=\"6\" class=\"custom_left\">\n          {{model.key_text7}}\n        </ion-col>\n        <ion-col size=\"1\" class=\"center\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"size_15 center green\">\n            {{veg_food.total_food_for}} {{model.key_text12}}\n          </div>\n        </ion-col>\n        <br>\n        <br>\n      </ion-row>  \n      \n      <ion-row *ngIf=\"model.nonveg != 0\" >\n        <ion-col size=\"6\">\n         {{model.key_text11}}\n        </ion-col>\n        <ion-col size=\"1\" class=\"center\">\n          :\n        </ion-col>\n        <ion-col size=\"5\">\n          <div style=\"color:#e8604c\" class=\"center\">{{nonveg_food.food_type | foodType}}.</div> \n        </ion-col>\n        <br>\n        <br>\n      </ion-row> \n      \n      <ion-row *ngIf=\"model.nonveg != 0\">\n        <ion-col size=\"6\" class=\"custom_left\">\n          {{model.key_text7}}\n        </ion-col>\n        <ion-col size=\"1\" class=\"center\">\n          :\n        </ion-col>\n        <ion-col size=\"5\" class=\"custom_right\">\n          <div class=\"size_15 center green\">\n            {{nonveg_food.total_food_for}} {{model.key_text12}}\n          </div>\n        </ion-col>\n      </ion-row> \n    </div>\n\n  </div>  \n  <br>\n</div>\n\n</ion-content>\n<div class=\"app_button\" (click)=\"donate_food()\">\n      \n  <button class=\"app_btn\" *ngIf=\"!model.search\">{{model.key_text16}}</button>\n  <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n</div>\n<ion-footer>\n  <ion-toolbar> \n\t\n    <br>\n     <ion-segment value=\"home\" color=\"transparent\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n        <img src=\"assets/images/red_footer_home.svg\">\n        <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">Home</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">Activity</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">\n        <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_volunteer.svg\">\n        <ion-label class=\"size_12 medium\">Volunteer</ion-label>    \n      </ion-segment-button>\n    </ion-segment>     \n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n  \n\n";
      /***/
    },

    /***/
    "UrZZ":
    /*!********************************************!*\
      !*** ./src/app/pipes/address-type.pipe.ts ***!
      \********************************************/

    /*! exports provided: AddressTypePipe */

    /***/
    function UrZZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressTypePipe", function () {
        return AddressTypePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddressTypePipe = /*#__PURE__*/function () {
        function AddressTypePipe() {
          _classCallCheck(this, AddressTypePipe);
        }

        _createClass(AddressTypePipe, [{
          key: "transform",
          value: function transform(value, arg) {
            var address_type = "";

            if (value == 1) {
              address_type = "Home";
            } else if (value == 2) {
              address_type = "Work";
            } else {
              address_type = "Other";
            }

            return address_type;
          }
        }]);

        return AddressTypePipe;
      }();

      AddressTypePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'addressType'
      })], AddressTypePipe);
      /***/
    },

    /***/
    "YYwF":
    /*!************************************!*\
      !*** ./src/app/pipes/safe.pipe.ts ***!
      \************************************/

    /*! exports provided: SafePipe */

    /***/
    function YYwF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SafePipe = /*#__PURE__*/function () {
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(value, arg) {
            value = value.replace('watch?v=', 'embed/');
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
      })], SafePipe);
      /***/
    },

    /***/
    "aOuy":
    /*!*****************************************************************!*\
      !*** ./src/app/donate-food-review/donate-food-review.module.ts ***!
      \*****************************************************************/

    /*! exports provided: DonateFoodReviewPageModule */

    /***/
    function aOuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodReviewPageModule", function () {
        return DonateFoodReviewPageModule;
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


      var _donate_food_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donate-food-review-routing.module */
      "oNHM");
      /* harmony import */


      var _donate_food_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donate-food-review.page */
      "1zAN");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var DonateFoodReviewPageModule = function DonateFoodReviewPageModule() {
        _classCallCheck(this, DonateFoodReviewPageModule);
      };

      DonateFoodReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _donate_food_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonateFoodReviewPageRoutingModule"]],
        declarations: [_donate_food_review_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodReviewPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"]]
      })], DonateFoodReviewPageModule);
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
            var _this3 = this;

            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this3.notification = res['data'];

              if (_this3.notification.length > 0) {
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
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pipes/safe.pipe */
      "YYwF");
      /* harmony import */


      var _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipes/address-type.pipe */
      "UrZZ");
      /* harmony import */


      var _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/food-type.pipe */
      "HaGj");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__["AddressTypePipe"], _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__["FoodTypePipe"]],
        imports: [],
        exports: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _pipes_address_type_pipe__WEBPACK_IMPORTED_MODULE_3__["AddressTypePipe"], _pipes_food_type_pipe__WEBPACK_IMPORTED_MODULE_4__["FoodTypePipe"]]
      })], PipesModule);
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
    "oNHM":
    /*!*************************************************************************!*\
      !*** ./src/app/donate-food-review/donate-food-review-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: DonateFoodReviewPageRoutingModule */

    /***/
    function oNHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodReviewPageRoutingModule", function () {
        return DonateFoodReviewPageRoutingModule;
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


      var _donate_food_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate-food-review.page */
      "1zAN");

      var routes = [{
        path: '',
        component: _donate_food_review_page__WEBPACK_IMPORTED_MODULE_3__["DonateFoodReviewPage"]
      }];

      var DonateFoodReviewPageRoutingModule = function DonateFoodReviewPageRoutingModule() {
        _classCallCheck(this, DonateFoodReviewPageRoutingModule);
      };

      DonateFoodReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonateFoodReviewPageRoutingModule);
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
//# sourceMappingURL=donate-food-review-donate-food-review-module-es5.js.map