(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receive-food-call-receive-food-call-module"], {
    /***/
    "DgmM":
    /*!***************************************************************!*\
      !*** ./src/app/receive-food-call/receive-food-call.module.ts ***!
      \***************************************************************/

    /*! exports provided: ReceiveFoodCallPageModule */

    /***/
    function DgmM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceiveFoodCallPageModule", function () {
        return ReceiveFoodCallPageModule;
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


      var _receive_food_call_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./receive-food-call-routing.module */
      "wyMP");
      /* harmony import */


      var _receive_food_call_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./receive-food-call.page */
      "X/oT");

      var ReceiveFoodCallPageModule = function ReceiveFoodCallPageModule() {
        _classCallCheck(this, ReceiveFoodCallPageModule);
      };

      ReceiveFoodCallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _receive_food_call_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceiveFoodCallPageRoutingModule"]],
        declarations: [_receive_food_call_page__WEBPACK_IMPORTED_MODULE_6__["ReceiveFoodCallPage"]]
      })], ReceiveFoodCallPageModule);
      /***/
    },

    /***/
    "E6ao":
    /*!***************************************************************!*\
      !*** ./src/app/receive-food-call/receive-food-call.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function E6ao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ifrm {\n  height: calc(80vh - 0px);\n  width: 100vw;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY2VpdmUtZm9vZC1jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHdCQUFBO0VBR0EsWUFBQTtFQUdBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUxKIiwiZmlsZSI6InJlY2VpdmUtZm9vZC1jYWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZnJte1xuXG4gICAgLy9zZXQgdGhlIGhlaWdodCB0byAxMDAlIG9mIHRoZSB2aWV3cG9ydCBsZXNzIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlclxuICAgIGhlaWdodDogY2FsYyg4MHZoIC0gMHB4KTtcbiAgXG4gICAgLy9zZXQgdGhlIHdpZHRoIHRvIDEwMCUgb2YgdGhlIHZpZXdwb3J0IHdpZHRoXG4gICAgd2lkdGg6IDEwMHZ3OyBcbiAgXG4gICAgLy9yZW1vdmUgYm9yZGVyLCBwYWRkaW5nLCBtYXJnaW5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "X/oT":
    /*!*************************************************************!*\
      !*** ./src/app/receive-food-call/receive-food-call.page.ts ***!
      \*************************************************************/

    /*! exports provided: ReceiveFoodCallPage */

    /***/
    function XOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceiveFoodCallPage", function () {
        return ReceiveFoodCallPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_receive_food_call_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./receive-food-call.page.html */
      "w6UH");
      /* harmony import */


      var _receive_food_call_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./receive-food-call.page.scss */
      "E6ao");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ReceiveFoodCallPage = /*#__PURE__*/function () {
        function ReceiveFoodCallPage(route, router, sanitizer) {
          _classCallCheck(this, ReceiveFoodCallPage);

          this.route = route;
          this.router = router;
          this.sanitizer = sanitizer;
          this.model = {};
        }

        _createClass(ReceiveFoodCallPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.mobile_no = 'https://example-client-app-9884-dev.twil.io/index.html?phone=' + this.route.snapshot.params['num'];
            this.model.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.model.mobile_no);
          }
        }]);

        return ReceiveFoodCallPage;
      }();

      ReceiveFoodCallPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      };

      ReceiveFoodCallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-receive-food-call',
        template: _raw_loader_receive_food_call_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_receive_food_call_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReceiveFoodCallPage);
      /***/
    },

    /***/
    "w6UH":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receive-food-call/receive-food-call.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w6UH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>receive-food-call</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe [src]='model.url' class=\"ifrm\"></iframe>\n</ion-content>\n";
      /***/
    },

    /***/
    "wyMP":
    /*!***********************************************************************!*\
      !*** ./src/app/receive-food-call/receive-food-call-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ReceiveFoodCallPageRoutingModule */

    /***/
    function wyMP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceiveFoodCallPageRoutingModule", function () {
        return ReceiveFoodCallPageRoutingModule;
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


      var _receive_food_call_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./receive-food-call.page */
      "X/oT");

      var routes = [{
        path: '',
        component: _receive_food_call_page__WEBPACK_IMPORTED_MODULE_3__["ReceiveFoodCallPage"]
      }];

      var ReceiveFoodCallPageRoutingModule = function ReceiveFoodCallPageRoutingModule() {
        _classCallCheck(this, ReceiveFoodCallPageRoutingModule);
      };

      ReceiveFoodCallPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReceiveFoodCallPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=receive-food-call-receive-food-call-module-es5.js.map