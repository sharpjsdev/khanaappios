(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-onthe-way-msg-onthe-way-msg-module"], {
    /***/
    "PF4X":
    /*!*************************************************************!*\
      !*** ./src/app/modal/onthe-way-msg/onthe-way-msg.module.ts ***!
      \*************************************************************/

    /*! exports provided: OntheWayMsgPageModule */

    /***/
    function PF4X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OntheWayMsgPageModule", function () {
        return OntheWayMsgPageModule;
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


      var _onthe_way_msg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./onthe-way-msg-routing.module */
      "myvS");
      /* harmony import */


      var _onthe_way_msg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onthe-way-msg.page */
      "UG66");

      var OntheWayMsgPageModule = /*#__PURE__*/_createClass(function OntheWayMsgPageModule() {
        _classCallCheck(this, OntheWayMsgPageModule);
      });

      OntheWayMsgPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onthe_way_msg_routing_module__WEBPACK_IMPORTED_MODULE_5__["OntheWayMsgPageRoutingModule"]],
        declarations: [_onthe_way_msg_page__WEBPACK_IMPORTED_MODULE_6__["OntheWayMsgPage"]]
      })], OntheWayMsgPageModule);
      /***/
    },

    /***/
    "myvS":
    /*!*********************************************************************!*\
      !*** ./src/app/modal/onthe-way-msg/onthe-way-msg-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OntheWayMsgPageRoutingModule */

    /***/
    function myvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OntheWayMsgPageRoutingModule", function () {
        return OntheWayMsgPageRoutingModule;
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


      var _onthe_way_msg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onthe-way-msg.page */
      "UG66");

      var routes = [{
        path: '',
        component: _onthe_way_msg_page__WEBPACK_IMPORTED_MODULE_3__["OntheWayMsgPage"]
      }];

      var OntheWayMsgPageRoutingModule = /*#__PURE__*/_createClass(function OntheWayMsgPageRoutingModule() {
        _classCallCheck(this, OntheWayMsgPageRoutingModule);
      });

      OntheWayMsgPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OntheWayMsgPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-onthe-way-msg-onthe-way-msg-module-es5.js.map