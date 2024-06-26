(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-otp-filter-content-filter-content-module"], {
    /***/
    "kfW7":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/otp/filter-content/filter-content.module.ts ***!
      \*******************************************************************/

    /*! exports provided: FilterContentPageModule */

    /***/
    function kfW7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterContentPageModule", function () {
        return FilterContentPageModule;
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


      var _filter_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filter-content-routing.module */
      "xTcF");
      /* harmony import */


      var _filter_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filter-content.page */
      "/O/A");

      var FilterContentPageModule = /*#__PURE__*/_createClass(function FilterContentPageModule() {
        _classCallCheck(this, FilterContentPageModule);
      });

      FilterContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _filter_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterContentPageRoutingModule"]],
        declarations: [_filter_content_page__WEBPACK_IMPORTED_MODULE_6__["FilterContentPage"]]
      })], FilterContentPageModule);
      /***/
    },

    /***/
    "xTcF":
    /*!***************************************************************************!*\
      !*** ./src/app/modal/otp/filter-content/filter-content-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: FilterContentPageRoutingModule */

    /***/
    function xTcF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterContentPageRoutingModule", function () {
        return FilterContentPageRoutingModule;
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


      var _filter_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filter-content.page */
      "/O/A");

      var routes = [{
        path: '',
        component: _filter_content_page__WEBPACK_IMPORTED_MODULE_3__["FilterContentPage"]
      }];

      var FilterContentPageRoutingModule = /*#__PURE__*/_createClass(function FilterContentPageRoutingModule() {
        _classCallCheck(this, FilterContentPageRoutingModule);
      });

      FilterContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FilterContentPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-otp-filter-content-filter-content-module-es5.js.map