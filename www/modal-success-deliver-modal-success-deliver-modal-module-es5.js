(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-success-deliver-modal-success-deliver-modal-module"], {
    /***/
    "C8Af":
    /*!*************************************************************************************!*\
      !*** ./src/app/modal/success-deliver-modal/success-deliver-modal-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: SuccessDeliverModalPageRoutingModule */

    /***/
    function C8Af(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessDeliverModalPageRoutingModule", function () {
        return SuccessDeliverModalPageRoutingModule;
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


      var _success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./success-deliver-modal.page */
      "br8U");

      var routes = [{
        path: '',
        component: _success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_3__["SuccessDeliverModalPage"]
      }];

      var SuccessDeliverModalPageRoutingModule = /*#__PURE__*/_createClass(function SuccessDeliverModalPageRoutingModule() {
        _classCallCheck(this, SuccessDeliverModalPageRoutingModule);
      });

      SuccessDeliverModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SuccessDeliverModalPageRoutingModule);
      /***/
    },

    /***/
    "yXmX":
    /*!*****************************************************************************!*\
      !*** ./src/app/modal/success-deliver-modal/success-deliver-modal.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: SuccessDeliverModalPageModule */

    /***/
    function yXmX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessDeliverModalPageModule", function () {
        return SuccessDeliverModalPageModule;
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


      var _success_deliver_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./success-deliver-modal-routing.module */
      "C8Af");
      /* harmony import */


      var _success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./success-deliver-modal.page */
      "br8U");

      var SuccessDeliverModalPageModule = /*#__PURE__*/_createClass(function SuccessDeliverModalPageModule() {
        _classCallCheck(this, SuccessDeliverModalPageModule);
      });

      SuccessDeliverModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_deliver_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessDeliverModalPageRoutingModule"]],
        declarations: [_success_deliver_modal_page__WEBPACK_IMPORTED_MODULE_6__["SuccessDeliverModalPage"]]
      })], SuccessDeliverModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-success-deliver-modal-success-deliver-modal-module-es5.js.map