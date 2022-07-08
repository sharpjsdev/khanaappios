(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(storage, http, route, router, fetch, alertController, platform, datepipe) {
          var _this = this;

          _classCallCheck(this, ProfilePage);

          this.storage = storage;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.alertController = alertController;
          this.platform = platform;
          this.datepipe = datepipe;
          this.model = {};
          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.router.navigate(['/home']);
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.search = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.model.key_page_name = 'Profile Page';
            this.model.key_username = 'Username';
            this.model.key_dob = 'Date Of Birth';
            this.model.key_food_type = 'Type of food you prefer';
            this.model.key_veg = 'Veg';
            this.model.key_non_veg = 'Non Veg';
            this.model.key_both = 'Both';
            this.model.key_save_changes = 'Save Changes';
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
            var latest_date = this.datepipe.transform(maxDate, 'yyyy-MM-dd');
            this.model.latest_date = latest_date; //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'PROFILE_PAGE';
            });
            this.model.key_page_name = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'USERNAME';
            });
            this.model.key_username = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'DATE_OF_BIRTH';
            });
            this.model.key_dob = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'TYPE_OF_FOOD_YOU_PREFER';
            });
            this.model.key_food_type = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_veg = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_non_veg = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'ANY';
            });
            this.model.key_both = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'SAVE_CHANGES';
            });
            this.model.key_save_changes = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'THIS_FIELD_IS_REQUIRED';
            });
            this.model.key_valid = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'PROFILE_UPDATE_MSG';
            });
            this.model.succ_msg = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item11[lang_code]; //});

            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            var data = JSON.stringify({
              'id': this.model.user_id
            });
            this.fetch.profile(data).subscribe(function (res) {
              _this2.model.username = res['username'];
              _this2.model.dob = res['dob'];
              _this2.model.food_type = res['type_of_food_you_prefer'];
              $('#profile_food_' + res['type_of_food_you_prefer']).addClass('active');
            });
          }
        }, {
          key: "food_type",
          value: function food_type(val) {
            this.model.food_type = val;

            if (val == 1) {
              $('#profile_food_' + val).addClass('active');
              $('#profile_food_2').removeClass('active');
              $('#profile_food_3').removeClass('active');
            } else if (val == 2) {
              $('#profile_food_' + val).addClass('active');
              $('#profile_food_1').removeClass('active');
              $('#profile_food_3').removeClass('active');
            } else {
              $('#profile_food_' + val).addClass('active');
              $('#profile_food_2').removeClass('active');
              $('#profile_food_1').removeClass('active');
            }
          }
        }, {
          key: "update_profile",
          value: function update_profile() {
            var _this3 = this;

            this.model.search = true;
            var username = $('#profile_username').val();
            var dob = $('#profile_dob').val();

            if (!username) {
              this.model.search = false;
              $('#username').show();
              $('#dob').hide();
              $('#foodtype').hide();
            } else if (!dob) {
              this.model.search = false;
              $('#username').hide();
              $('#dob').show();
              $('#foodtype').hide();
            } else if (!this.model.food_type) {
              this.model.search = false;
              $('#username').hide();
              $('#dob').hide();
              $('#foodtype').show();
            } else {
              $('#username').hide();
              $('#dob').hide();
              $('#foodtype').hide();
              var profile_data = JSON.stringify({
                'id': this.model.user_id,
                'username': username,
                'dob': dob,
                'food_type': this.model.food_type
              });
              this.fetch.registerUser(profile_data).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var alert;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.model.search = false;

                          if (!(res.success == true)) {
                            _context.next = 7;
                            break;
                          }

                          _context.next = 4;
                          return this.alertController.create({
                            cssClass: 'my-custom-class',
                            //header: 'alert',
                            message: this.model.succ_msg,
                            buttons: [this.model.okay]
                          });

                        case 4:
                          alert = _context.sent;
                          _context.next = 7;
                          return alert.present();

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            }
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"ion-padding\">\n    \n    <div class=\"single_page_title medium size_18\">\n      <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      {{model.key_page_name}}\n    </div>\n  </div>\n\n  <div class=\"ion-padding\">\n    <div class=\"profile app_input_text\">      \n      <input type=\"text\" id=\"profile_username\" value=\"{{model.username}}\" placeholder=\"{{model.key_username}}\">      \n    </div>\n    <span class=\"error\" id=\"username\">{{model.key_valid}}</span>  \n    <div class=\"profile app_input_text center_input\">    \n      <input type=\"text\" disabled>  \n      <ion-datetime placeholder=\"{{model.key_dob}}\" class=\"regular\" id=\"profile_dob\" value=\"{{model.dob}}\" max=\"{{ model.latest_date }}\" displayFormat=\"MMMM DD, YYYY\"></ion-datetime>         \n    </div> \n    <span class=\"error\" id=\"dob\">{{model.key_valid}}</span>  \n    <br><br>\n    <div class=\"grey\" style=\"margin-left: 23px;\">{{model.key_food_type}} : </div>\n\n    <div class=\"btn-group\">\n      <button class=\"grey regular btn2\" id=\"profile_food_1\" (click)=\"food_type(1)\">{{model.key_veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"profile_food_2\" (click)=\"food_type(2)\">{{model.key_non_veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"profile_food_3\" (click)=\"food_type(3)\">{{model.key_both}}</button>\n    </div> \n    <span class=\"error\" id=\"foodtype\">{{model.key_valid}}</span>  \n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n      <!-- <ion-router-link href=\"\">\n        <button class=\"app_btn\">Save Changes</button>\n      </ion-router-link> -->\n\t   <button class=\"app_btn\" (click)=\"update_profile()\" *ngIf=\"!model.search\">{{model.key_save_changes}}</button>\n     <button class=\"app_btn\" *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".error {\n  display: none;\n  color: red;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map