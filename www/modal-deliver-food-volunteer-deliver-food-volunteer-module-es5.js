(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-deliver-food-volunteer-deliver-food-volunteer-module"], {
    /***/
    "IXC3":
    /*!***************************************************************************************!*\
      !*** ./src/app/modal/deliver-food-volunteer/deliver-food-volunteer-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: DeliverFoodVolunteerPageRoutingModule */

    /***/
    function IXC3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliverFoodVolunteerPageRoutingModule", function () {
        return DeliverFoodVolunteerPageRoutingModule;
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


      var _deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./deliver-food-volunteer.page */
      "EQfQ");

      var routes = [{
        path: '',
        component: _deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_3__["DeliverFoodVolunteerPage"]
      }];

      var DeliverFoodVolunteerPageRoutingModule = /*#__PURE__*/_createClass(function DeliverFoodVolunteerPageRoutingModule() {
        _classCallCheck(this, DeliverFoodVolunteerPageRoutingModule);
      });

      DeliverFoodVolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeliverFoodVolunteerPageRoutingModule);
      /***/
    },

    /***/
    "Rhyd":
    /*!*******************************************************************************!*\
      !*** ./src/app/modal/deliver-food-volunteer/deliver-food-volunteer.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: DeliverFoodVolunteerPageModule */

    /***/
    function Rhyd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliverFoodVolunteerPageModule", function () {
        return DeliverFoodVolunteerPageModule;
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


      var _deliver_food_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./deliver-food-volunteer-routing.module */
      "IXC3");
      /* harmony import */


      var _deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./deliver-food-volunteer.page */
      "EQfQ");

      var DeliverFoodVolunteerPageModule = /*#__PURE__*/_createClass(function DeliverFoodVolunteerPageModule() {
        _classCallCheck(this, DeliverFoodVolunteerPageModule);
      });

      DeliverFoodVolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deliver_food_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliverFoodVolunteerPageRoutingModule"]],
        declarations: [_deliver_food_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["DeliverFoodVolunteerPage"]]
      })], DeliverFoodVolunteerPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-deliver-food-volunteer-deliver-food-volunteer-module-es5.js.map