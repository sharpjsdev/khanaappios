(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-otp-otp-content-otp-content-module"], {
    /***/
    "0DpX":
    /*!*************************************************************!*\
      !*** ./src/app/modal/otp/otp-content/otp-content.module.ts ***!
      \*************************************************************/

    /*! exports provided: OtpContentPageModule */

    /***/
    function DpX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpContentPageModule", function () {
        return OtpContentPageModule;
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


      var _otp_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-content-routing.module */
      "gggb");
      /* harmony import */


      var _otp_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp-content.page */
      "7vly");

      var OtpContentPageModule = /*#__PURE__*/_createClass(function OtpContentPageModule() {
        _classCallCheck(this, OtpContentPageModule);
      });

      OtpContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpContentPageRoutingModule"]],
        declarations: [_otp_content_page__WEBPACK_IMPORTED_MODULE_6__["OtpContentPage"]]
      })], OtpContentPageModule);
      /***/
    },

    /***/
    "gggb":
    /*!*********************************************************************!*\
      !*** ./src/app/modal/otp/otp-content/otp-content-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OtpContentPageRoutingModule */

    /***/
    function gggb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpContentPageRoutingModule", function () {
        return OtpContentPageRoutingModule;
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


      var _otp_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp-content.page */
      "7vly");

      var routes = [{
        path: '',
        component: _otp_content_page__WEBPACK_IMPORTED_MODULE_3__["OtpContentPage"]
      }];

      var OtpContentPageRoutingModule = /*#__PURE__*/_createClass(function OtpContentPageRoutingModule() {
        _classCallCheck(this, OtpContentPageRoutingModule);
      });

      OtpContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpContentPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-otp-otp-content-otp-content-module-es5.js.map