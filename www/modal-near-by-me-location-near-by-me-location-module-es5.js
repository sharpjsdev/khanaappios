(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-near-by-me-location-near-by-me-location-module"], {
    /***/
    "PHXc":
    /*!*************************************************************************!*\
      !*** ./src/app/modal/near-by-me-location/near-by-me-location.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function PHXc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZWFyLWJ5LW1lLWxvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Qoc/":
    /*!*************************************************************************!*\
      !*** ./src/app/modal/near-by-me-location/near-by-me-location.module.ts ***!
      \*************************************************************************/

    /*! exports provided: NearByMeLocationPageModule */

    /***/
    function Qoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearByMeLocationPageModule", function () {
        return NearByMeLocationPageModule;
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


      var _near_by_me_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./near-by-me-location-routing.module */
      "i/ZJ");
      /* harmony import */


      var _near_by_me_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./near-by-me-location.page */
      "hu7r");

      var NearByMeLocationPageModule = function NearByMeLocationPageModule() {
        _classCallCheck(this, NearByMeLocationPageModule);
      };

      NearByMeLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _near_by_me_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["NearByMeLocationPageRoutingModule"]],
        declarations: [_near_by_me_location_page__WEBPACK_IMPORTED_MODULE_6__["NearByMeLocationPage"]]
      })], NearByMeLocationPageModule);
      /***/
    },

    /***/
    "hu7r":
    /*!***********************************************************************!*\
      !*** ./src/app/modal/near-by-me-location/near-by-me-location.page.ts ***!
      \***********************************************************************/

    /*! exports provided: NearByMeLocationPage */

    /***/
    function hu7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearByMeLocationPage", function () {
        return NearByMeLocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_near_by_me_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./near-by-me-location.page.html */
      "uWHO");
      /* harmony import */


      var _near_by_me_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./near-by-me-location.page.scss */
      "PHXc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NearByMeLocationPage = /*#__PURE__*/function () {
        function NearByMeLocationPage() {
          _classCallCheck(this, NearByMeLocationPage);
        }

        _createClass(NearByMeLocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NearByMeLocationPage;
      }();

      NearByMeLocationPage.ctorParameters = function () {
        return [];
      };

      NearByMeLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-near-by-me-location',
        template: _raw_loader_near_by_me_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_near_by_me_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NearByMeLocationPage);
      /***/
    },

    /***/
    "i/ZJ":
    /*!*********************************************************************************!*\
      !*** ./src/app/modal/near-by-me-location/near-by-me-location-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: NearByMeLocationPageRoutingModule */

    /***/
    function iZJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NearByMeLocationPageRoutingModule", function () {
        return NearByMeLocationPageRoutingModule;
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


      var _near_by_me_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./near-by-me-location.page */
      "hu7r");

      var routes = [{
        path: '',
        component: _near_by_me_location_page__WEBPACK_IMPORTED_MODULE_3__["NearByMeLocationPage"]
      }];

      var NearByMeLocationPageRoutingModule = function NearByMeLocationPageRoutingModule() {
        _classCallCheck(this, NearByMeLocationPageRoutingModule);
      };

      NearByMeLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NearByMeLocationPageRoutingModule);
      /***/
    },

    /***/
    "uWHO":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/near-by-me-location/near-by-me-location.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uWHO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>near-by-me-location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-near-by-me-location-near-by-me-location-module-es5.js.map