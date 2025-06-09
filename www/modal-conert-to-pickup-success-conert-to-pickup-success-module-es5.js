(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-conert-to-pickup-success-conert-to-pickup-success-module"], {
    /***/
    "KzT4":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modal/conert-to-pickup-success/conert-to-pickup-success-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ConertToPickupSuccessPageRoutingModule */

    /***/
    function KzT4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConertToPickupSuccessPageRoutingModule", function () {
        return ConertToPickupSuccessPageRoutingModule;
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


      var _conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./conert-to-pickup-success.page */
      "AgMY");

      var routes = [{
        path: '',
        component: _conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_3__["ConertToPickupSuccessPage"]
      }];

      var ConertToPickupSuccessPageRoutingModule = /*#__PURE__*/_createClass(function ConertToPickupSuccessPageRoutingModule() {
        _classCallCheck(this, ConertToPickupSuccessPageRoutingModule);
      });

      ConertToPickupSuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConertToPickupSuccessPageRoutingModule);
      /***/
    },

    /***/
    "QX3W":
    /*!***********************************************************************************!*\
      !*** ./src/app/modal/conert-to-pickup-success/conert-to-pickup-success.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ConertToPickupSuccessPageModule */

    /***/
    function QX3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConertToPickupSuccessPageModule", function () {
        return ConertToPickupSuccessPageModule;
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


      var _conert_to_pickup_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./conert-to-pickup-success-routing.module */
      "KzT4");
      /* harmony import */


      var _conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./conert-to-pickup-success.page */
      "AgMY");

      var ConertToPickupSuccessPageModule = /*#__PURE__*/_createClass(function ConertToPickupSuccessPageModule() {
        _classCallCheck(this, ConertToPickupSuccessPageModule);
      });

      ConertToPickupSuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _conert_to_pickup_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConertToPickupSuccessPageRoutingModule"]],
        declarations: [_conert_to_pickup_success_page__WEBPACK_IMPORTED_MODULE_6__["ConertToPickupSuccessPage"]]
      })], ConertToPickupSuccessPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-conert-to-pickup-success-conert-to-pickup-success-module-es5.js.map