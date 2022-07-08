(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saved-addresses-saved-addresses-module"], {
    /***/
    "2cCr":
    /*!*******************************************************************!*\
      !*** ./src/app/saved-addresses/saved-addresses-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SavedAddressesPageRoutingModule */

    /***/
    function cCr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAddressesPageRoutingModule", function () {
        return SavedAddressesPageRoutingModule;
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


      var _saved_addresses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./saved-addresses.page */
      "6gyF");

      var routes = [{
        path: '',
        component: _saved_addresses_page__WEBPACK_IMPORTED_MODULE_3__["SavedAddressesPage"]
      }];

      var SavedAddressesPageRoutingModule = function SavedAddressesPageRoutingModule() {
        _classCallCheck(this, SavedAddressesPageRoutingModule);
      };

      SavedAddressesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SavedAddressesPageRoutingModule);
      /***/
    },

    /***/
    "2uUW":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saved-addresses/saved-addresses.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uUW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"view_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<ion-content>\n\n  <div class=\"ion-padding\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\" *ngIf=\"pageName != '/home' \">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"single_page_title medium size_18\">{{model.key_page_name}}</div>\n  </div>\n\n  <div class=\"ion-padding\">\n    <div  class=\"t\" *ngFor=\"let x of model.data\" id=\"add_{{x.id}}\"> \n    <div class=\"medium green size_16 capital\">{{ x.adress_type }}</div>  \n    <div class=\"saved address regular\">\n      {{ x.colony_name }}\n    </div>\n \n    <div class=\"blank_buttons\">\n      <a routerLink=\"/saved-addresses-edit/{{x.id}}\" class=\"blank_btn size_12 medium\">{{model.key_text1}}</a>\n      <a class=\"blank_btn size_12 medium\" (click)=\"remove(x.id)\">{{model.key_text2}}</a>\n    </div>\n    <br><br>\n    <hr class=\"app_divider\"></div>\n\t<div class=\"no_adress\">{{model.key_text6}}</div>\n    <br><br>\n    <div class=\"add_btn\">\n      <a routerLink=\"/saved-addresses-add\">\n        <img src=\"assets/images/icon_add.svg\">\n      </a>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n        <button class=\"app_btn\" (click)=\"saveChanges()\">{{model.key_text4}}</button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "6gyF":
    /*!*********************************************************!*\
      !*** ./src/app/saved-addresses/saved-addresses.page.ts ***!
      \*********************************************************/

    /*! exports provided: SavedAddressesPage */

    /***/
    function gyF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAddressesPage", function () {
        return SavedAddressesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_saved_addresses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./saved-addresses.page.html */
      "2uUW");
      /* harmony import */


      var _saved_addresses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./saved-addresses.page.scss */
      "8Ufc");
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

      var SavedAddressesPage = /*#__PURE__*/function () {
        function SavedAddressesPage(storage, http, route, router, fetch, platform) {
          var _this = this;

          _classCallCheck(this, SavedAddressesPage);

          this.storage = storage;
          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.platform = platform;
          this.model = {};
          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.router.navigate(['/home']);
          });
        }

        _createClass(SavedAddressesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            $(".t").hide();
            $("#view_location_spinner").show();
            this.model.key_page_name = 'Saved Addresses';
            this.model.key_text1 = 'Edit';
            this.model.key_text2 = 'Remove';
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'SAVED_ADDRESSES';
            });
            this.model.key_page_name = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'EDIT';
            });
            this.model.key_text1 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'REMOVE';
            });
            this.model.key_text2 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'SAVE_CHANGES';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'ARE_YOU_SURE';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'NO_SAVED_ADDRESS';
            });
            this.model.key_text6 = item6[lang_code]; //});

            var app_user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.fetch.get_user_locations(app_user_id).subscribe(function (res) {
              $("#view_location_spinner").hide();

              if (res['success'] == true) {
                $(".t").show();
                $(".no_adress").css("display", "none");
                _this2.model.data = res['data'];
              }
            });
          }
        }, {
          key: "remove",
          value: function remove(id) {
            if (confirm(this.model.key_text5 + ' ?')) {
              $("#add_" + id).hide();
              this.fetch.remove_location(id).subscribe(function (res) {});
            }
          }
        }, {
          key: "saveChanges",
          value: function saveChanges() {
            this.ionViewWillEnter();
          }
        }]);

        return SavedAddressesPage;
      }();

      SavedAddressesPage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }];
      };

      SavedAddressesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saved-addresses',
        template: _raw_loader_saved_addresses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_addresses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SavedAddressesPage);
      /***/
    },

    /***/
    "8Ufc":
    /*!***********************************************************!*\
      !*** ./src/app/saved-addresses/saved-addresses.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function Ufc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no_adress {\n  color: #80808085;\n  text-align: center;\n}\n\n#map {\n  width: 100%;\n  height: 66%;\n  margin-top: 18px;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NhdmVkLWFkZHJlc3Nlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxnQkFBQTtFQUNHLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNILGdCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxlQUFBO0FBRUQ7O0FBQUE7RUFDQyxpQkFBQTtBQUdEIiwiZmlsZSI6InNhdmVkLWFkZHJlc3Nlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ub19hZHJlc3N7XG5cdGNvbG9yOiAjODA4MDgwODU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2NiU7XG5cdG1hcmdpbi10b3A6IDE4cHg7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcHBpbmVye1xuXHQtLWNvbG9yOiM0MTlCOTU7XG59XG4uY3VycmVudF9sb2NhdGlvbl9zcGlubmVyX3Bvc2l0aW9ue1xuXHRtYXJnaW4tdG9wOjI1MHB4O1xufSJdfQ== */";
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
    "xuot":
    /*!***********************************************************!*\
      !*** ./src/app/saved-addresses/saved-addresses.module.ts ***!
      \***********************************************************/

    /*! exports provided: SavedAddressesPageModule */

    /***/
    function xuot(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAddressesPageModule", function () {
        return SavedAddressesPageModule;
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


      var _saved_addresses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./saved-addresses-routing.module */
      "2cCr");
      /* harmony import */


      var _saved_addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./saved-addresses.page */
      "6gyF");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var SavedAddressesPageModule = function SavedAddressesPageModule() {
        _classCallCheck(this, SavedAddressesPageModule);
      };

      SavedAddressesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _saved_addresses_routing_module__WEBPACK_IMPORTED_MODULE_5__["SavedAddressesPageRoutingModule"]],
        declarations: [_saved_addresses_page__WEBPACK_IMPORTED_MODULE_6__["SavedAddressesPage"]]
      })], SavedAddressesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=saved-addresses-saved-addresses-module-es5.js.map