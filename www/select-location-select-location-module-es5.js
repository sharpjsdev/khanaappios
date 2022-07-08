(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-location-select-location-module"], {
    /***/
    "68u6":
    /*!*********************************************************!*\
      !*** ./src/app/select-location/select-location.page.ts ***!
      \*********************************************************/

    /*! exports provided: SelectLocationPage */

    /***/
    function u6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectLocationPage", function () {
        return SelectLocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-location.page.html */
      "SZ8s");
      /* harmony import */


      var _select_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-location.page.scss */
      "SBE5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SelectLocationPage = /*#__PURE__*/function () {
        function SelectLocationPage() {
          _classCallCheck(this, SelectLocationPage);
        }

        _createClass(SelectLocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SelectLocationPage;
      }();

      SelectLocationPage.ctorParameters = function () {
        return [];
      };

      SelectLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-location',
        template: _raw_loader_select_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SelectLocationPage);
      /***/
    },

    /***/
    "SBE5":
    /*!***********************************************************!*\
      !*** ./src/app/select-location/select-location.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function SBE5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtbG9jYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "SZ8s":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-location/select-location.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SZ8s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/images/icon_menu.svg\">\n      </ion-menu-button>\n    </ion-buttons>\n    <!--<ion-title>home</ion-title>-->\n    <ion-buttons slot=\"end\">      \n        <img src=\"assets/images/icon_notification.svg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding theme_width\"> \n  <div class=\"search_food_bg\">\n    <div class=\"search_single\">\n      Select Location :\n      <div class=\"search_food_buttons\">\n        <div class=\"btn-group\">\n          <button class=\"grey regular btn1\">Home</button>\n          <button class=\"grey regular btn1\">Office</button>\n        </div>\n      </div>        \n      \n      <a href=\"donate-food-add-location\">\n        <div class=\"grey_font size_12 regular\" style=\"margin-top: 12px;\">\n          + ADD FAVORITE LOCATION \n        </div>\n      </a>\n      <br><br>\n      \n      <div class=\"location_input\" (click)=\"openModalCurrentLocation()\">\n        <img src=\"assets/images/food_location_icon.svg\" style=\"left: 12px;\">\n        <input type=\"text\" placeholder=\"Current Location\">\n      </div>\n      <br><br>\n      <div class=\"size_13 green medium\" style=\"margin-top: 16px;\">\n        Rajsamrat Colony, Ayodhya Nagar,<br>\n        Bhopal, Madhya Pradesh<br>\n        462041, India\n      </div>\n      \n    </div>\n\n\n  </div>   \n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">\n      <ion-router-link href=\"donate-food-members\">\n        <button class=\"app_btn\">Proceed</button>\n      </ion-router-link>\n    </div>\n    <br>\n   <ion-segment value=\"home\" color=\"transparent\">\n      <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n        <img src=\"assets/images/red_footer_home.svg\">\n        <!--<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>-->\n        <ion-label class=\"size_12 medium\" color=\"tertiary\">Home</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n        <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_activity.svg\">\n        <ion-label class=\"size_12 medium\">Activity</ion-label>    \n      </ion-segment-button>\n      <ion-segment-button value=\"volunteer\" [routerLink]=\"['/volunteer']\">\n        <!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n        <img src=\"assets/images/grey_footer_volunteer.svg\">\n        <ion-label class=\"size_12 medium\">Volunteer</ion-label>    \n      </ion-segment-button>\n    </ion-segment>      \n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n\n  \n\n";
      /***/
    },

    /***/
    "fHwT":
    /*!*******************************************************************!*\
      !*** ./src/app/select-location/select-location-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SelectLocationPageRoutingModule */

    /***/
    function fHwT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectLocationPageRoutingModule", function () {
        return SelectLocationPageRoutingModule;
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


      var _select_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-location.page */
      "68u6");

      var routes = [{
        path: '',
        component: _select_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectLocationPage"]
      }];

      var SelectLocationPageRoutingModule = function SelectLocationPageRoutingModule() {
        _classCallCheck(this, SelectLocationPageRoutingModule);
      };

      SelectLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectLocationPageRoutingModule);
      /***/
    },

    /***/
    "spR7":
    /*!***********************************************************!*\
      !*** ./src/app/select-location/select-location.module.ts ***!
      \***********************************************************/

    /*! exports provided: SelectLocationPageModule */

    /***/
    function spR7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectLocationPageModule", function () {
        return SelectLocationPageModule;
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


      var _select_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-location-routing.module */
      "fHwT");
      /* harmony import */


      var _select_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-location.page */
      "68u6");

      var SelectLocationPageModule = function SelectLocationPageModule() {
        _classCallCheck(this, SelectLocationPageModule);
      };

      SelectLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectLocationPageRoutingModule"]],
        declarations: [_select_location_page__WEBPACK_IMPORTED_MODULE_6__["SelectLocationPage"]]
      })], SelectLocationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=select-location-select-location-module-es5.js.map