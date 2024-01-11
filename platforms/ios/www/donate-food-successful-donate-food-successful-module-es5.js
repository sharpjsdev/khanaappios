(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-food-successful-donate-food-successful-module"], {
    /***/
    "fIfy":
    /*!*************************************************************************!*\
      !*** ./src/app/donate-food-successful/donate-food-successful.module.ts ***!
      \*************************************************************************/

    /*! exports provided: DonateFoodSuccessfulPageModule */

    /***/
    function fIfy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodSuccessfulPageModule", function () {
        return DonateFoodSuccessfulPageModule;
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


      var _donate_food_successful_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donate-food-successful-routing.module */
      "hpc3");
      /* harmony import */


      var _donate_food_successful_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donate-food-successful.page */
      "gzQH");

      var DonateFoodSuccessfulPageModule = /*#__PURE__*/_createClass(function DonateFoodSuccessfulPageModule() {
        _classCallCheck(this, DonateFoodSuccessfulPageModule);
      });

      DonateFoodSuccessfulPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_food_successful_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonateFoodSuccessfulPageRoutingModule"]],
        declarations: [_donate_food_successful_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodSuccessfulPage"]]
      })], DonateFoodSuccessfulPageModule);
      /***/
    },

    /***/
    "gzQH":
    /*!***********************************************************************!*\
      !*** ./src/app/donate-food-successful/donate-food-successful.page.ts ***!
      \***********************************************************************/

    /*! exports provided: DonateFoodSuccessfulPage */

    /***/
    function gzQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodSuccessfulPage", function () {
        return DonateFoodSuccessfulPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_food_successful_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate-food-successful.page.html */
      "uUSY");
      /* harmony import */


      var _donate_food_successful_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate-food-successful.page.scss */
      "sHTw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DonateFoodSuccessfulPage = /*#__PURE__*/function () {
        function DonateFoodSuccessfulPage() {
          _classCallCheck(this, DonateFoodSuccessfulPage);
        }

        _createClass(DonateFoodSuccessfulPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DonateFoodSuccessfulPage;
      }();

      DonateFoodSuccessfulPage.ctorParameters = function () {
        return [];
      };

      DonateFoodSuccessfulPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-food-successful',
        template: _raw_loader_donate_food_successful_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_food_successful_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonateFoodSuccessfulPage);
      /***/
    },

    /***/
    "hpc3":
    /*!*********************************************************************************!*\
      !*** ./src/app/donate-food-successful/donate-food-successful-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: DonateFoodSuccessfulPageRoutingModule */

    /***/
    function hpc3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateFoodSuccessfulPageRoutingModule", function () {
        return DonateFoodSuccessfulPageRoutingModule;
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


      var _donate_food_successful_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate-food-successful.page */
      "gzQH");

      var routes = [{
        path: '',
        component: _donate_food_successful_page__WEBPACK_IMPORTED_MODULE_3__["DonateFoodSuccessfulPage"]
      }];

      var DonateFoodSuccessfulPageRoutingModule = /*#__PURE__*/_createClass(function DonateFoodSuccessfulPageRoutingModule() {
        _classCallCheck(this, DonateFoodSuccessfulPageRoutingModule);
      });

      DonateFoodSuccessfulPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonateFoodSuccessfulPageRoutingModule);
      /***/
    },

    /***/
    "sHTw":
    /*!*************************************************************************!*\
      !*** ./src/app/donate-food-successful/donate-food-successful.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function sHTw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb25hdGUtZm9vZC1zdWNjZXNzZnVsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "uUSY":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate-food-successful/donate-food-successful.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uUSY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <a href=\"home\">\n    <img src=\"assets/images/close_btn.svg\" class=\"close_btn\" style=\"right: 30px; top: 30px;\">\n  </a>\n<div class=\"vertical_center\">\n  <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n    <ion-back-button defaultHref=\"home\"></ion-back-button>\n  </ion-buttons>\n  <div class=\"ion-padding center\">    \n    <img src=\"assets/images/icon_successful.svg\">\n    <br><br>\n    <div class=\"size_18 medium green\">\n      Thank you for your Donation\n    </div>\n    <br><br><br>\n    <div>\n      As per research the people who eats\n      proper food have better thinking and\n      are better citizens of the country.\n    </div>\n    <br><br>\n    <div>\n      So we thank you for making our country\n      better place by donating food.\n    </div>\n  </div>\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=donate-food-successful-donate-food-successful-module-es5.js.map