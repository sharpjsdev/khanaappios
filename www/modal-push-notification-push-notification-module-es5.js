(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-push-notification-push-notification-module"], {
    /***/
    "cJEu":
    /*!*********************************************************************!*\
      !*** ./src/app/modal/push-notification/push-notification.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PushNotificationPageModule */

    /***/
    function cJEu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PushNotificationPageModule", function () {
        return PushNotificationPageModule;
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


      var _push_notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./push-notification-routing.module */
      "iUl7");
      /* harmony import */


      var _push_notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./push-notification.page */
      "kEdH");

      var PushNotificationPageModule = function PushNotificationPageModule() {
        _classCallCheck(this, PushNotificationPageModule);
      };

      PushNotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _push_notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["PushNotificationPageRoutingModule"]],
        declarations: [_push_notification_page__WEBPACK_IMPORTED_MODULE_6__["PushNotificationPage"]]
      })], PushNotificationPageModule);
      /***/
    },

    /***/
    "iUl7":
    /*!*****************************************************************************!*\
      !*** ./src/app/modal/push-notification/push-notification-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: PushNotificationPageRoutingModule */

    /***/
    function iUl7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PushNotificationPageRoutingModule", function () {
        return PushNotificationPageRoutingModule;
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


      var _push_notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./push-notification.page */
      "kEdH");

      var routes = [{
        path: '',
        component: _push_notification_page__WEBPACK_IMPORTED_MODULE_3__["PushNotificationPage"]
      }];

      var PushNotificationPageRoutingModule = function PushNotificationPageRoutingModule() {
        _classCallCheck(this, PushNotificationPageRoutingModule);
      };

      PushNotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PushNotificationPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-push-notification-push-notification-module-es5.js.map