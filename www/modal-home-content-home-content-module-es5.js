(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-home-content-home-content-module"], {
    /***/
    "RpSc":
    /*!***********************************************************!*\
      !*** ./src/app/modal/home-content/home-content.module.ts ***!
      \***********************************************************/

    /*! exports provided: HomeContentPageModule */

    /***/
    function RpSc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeContentPageModule", function () {
        return HomeContentPageModule;
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


      var _home_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-content-routing.module */
      "bp/M");
      /* harmony import */


      var _home_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-content.page */
      "kzFx");

      var HomeContentPageModule = function HomeContentPageModule() {
        _classCallCheck(this, HomeContentPageModule);
      };

      HomeContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeContentPageRoutingModule"]],
        declarations: [_home_content_page__WEBPACK_IMPORTED_MODULE_6__["HomeContentPage"]]
      })], HomeContentPageModule);
      /***/
    },

    /***/
    "bp/M":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/home-content/home-content-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: HomeContentPageRoutingModule */

    /***/
    function bpM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeContentPageRoutingModule", function () {
        return HomeContentPageRoutingModule;
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


      var _home_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-content.page */
      "kzFx");

      var routes = [{
        path: '',
        component: _home_content_page__WEBPACK_IMPORTED_MODULE_3__["HomeContentPage"]
      }];

      var HomeContentPageRoutingModule = function HomeContentPageRoutingModule() {
        _classCallCheck(this, HomeContentPageRoutingModule);
      };

      HomeContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeContentPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-home-content-home-content-module-es5.js.map