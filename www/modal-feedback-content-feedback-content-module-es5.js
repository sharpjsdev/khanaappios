(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-feedback-content-feedback-content-module"], {
    /***/
    "K/ym":
    /*!*******************************************************************!*\
      !*** ./src/app/modal/feedback-content/feedback-content.module.ts ***!
      \*******************************************************************/

    /*! exports provided: FeedbackContentPageModule */

    /***/
    function KYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackContentPageModule", function () {
        return FeedbackContentPageModule;
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


      var _feedback_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feedback-content-routing.module */
      "bfm0");
      /* harmony import */


      var _feedback_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feedback-content.page */
      "7Aly");

      var FeedbackContentPageModule = function FeedbackContentPageModule() {
        _classCallCheck(this, FeedbackContentPageModule);
      };

      FeedbackContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feedback_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackContentPageRoutingModule"]],
        declarations: [_feedback_content_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackContentPage"]]
      })], FeedbackContentPageModule);
      /***/
    },

    /***/
    "bfm0":
    /*!***************************************************************************!*\
      !*** ./src/app/modal/feedback-content/feedback-content-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: FeedbackContentPageRoutingModule */

    /***/
    function bfm0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackContentPageRoutingModule", function () {
        return FeedbackContentPageRoutingModule;
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


      var _feedback_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feedback-content.page */
      "7Aly");

      var routes = [{
        path: '',
        component: _feedback_content_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackContentPage"]
      }];

      var FeedbackContentPageRoutingModule = function FeedbackContentPageRoutingModule() {
        _classCallCheck(this, FeedbackContentPageRoutingModule);
      };

      FeedbackContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedbackContentPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-feedback-content-feedback-content-module-es5.js.map