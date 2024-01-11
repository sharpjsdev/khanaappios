(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-feedback-view-feedback-module"], {
    /***/
    "N1Y6":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-feedback/view-feedback.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function N1Y6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"ion-padding\">\n    <div class=\"single_page_title medium size_18\">{{model.key_text9}}</div>\n  </div>\n\n  <div class=\"ion-padding custom_padding\"> \n    \n    <div>1. {{model.key_text1}}</div> \n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_1\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_2\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"food_quality_3\">{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>2. {{model.key_text5}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_1\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_2\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"packaging_3\" >{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>3. {{model.key_text6}}</div>\n    <div class=\"btn-group\">\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_1\">{{model.key_text2}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_2\">{{model.key_text3}}</button>\n      <button class=\"size_15 grey regular btn2\" id=\"behaviour_3\">{{model.key_text4}}</button>\n    </div>\n    <br>\n    <div>4. {{model.key_text7}}</div>\n    <div class=\"btn-group\">\n      <ion-textarea rows=\"4\" readonly placeholder=\"{{model.key_text8}}. . .\" class=\"custom_textarea\" id=\"feedback_comment\"></ion-textarea>\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "P05z":
    /*!*******************************************************!*\
      !*** ./src/app/view-feedback/view-feedback.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function P05z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWZlZWRiYWNrLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "UnYZ":
    /*!*****************************************************!*\
      !*** ./src/app/view-feedback/view-feedback.page.ts ***!
      \*****************************************************/

    /*! exports provided: ViewFeedbackPage */

    /***/
    function UnYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewFeedbackPage", function () {
        return ViewFeedbackPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-feedback.page.html */
      "N1Y6");
      /* harmony import */


      var _view_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-feedback.page.scss */
      "P05z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ViewFeedbackPage = /*#__PURE__*/function () {
        function ViewFeedbackPage(http, route, router, fetch, storage) {
          _classCallCheck(this, ViewFeedbackPage);

          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
        }

        _createClass(ViewFeedbackPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.model.feedback_id = this.route.snapshot.params['id'];
            this.model.food_quality = '';
            this.model.packaging = '';
            this.model.behaviour = '';
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'FOOD_QUALITY';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'EXCELLENT';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'GOOD';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'BAD';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'PACKAGING';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'BEHAVIOUR';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'COMMENT';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'TYPE_HERE';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'HOW_WAS_YOUR_EXPERIENCE';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'SUBMIT';
            });
            this.model.key_text10 = item10[lang_code];
            this.fetch.show_feedback_by_id(this.model.feedback_id).subscribe(function (res) {
              console.log(res);

              if (res.success == true) {
                if (res.data.food_quality == 1) {
                  $('#food_quality_' + res.data.food_quality).addClass('active');
                } else if (res.data.food_quality == 2) {
                  $('#food_quality_' + res.data.food_quality).addClass('active');
                } else {
                  $('#food_quality_' + res.data.food_quality).addClass('active');
                }

                if (res.data.packaging == 1) {
                  $('#packaging_' + res.data.packaging).addClass('active');
                } else if (res.data.packaging == 2) {
                  $('#packaging_' + res.data.packaging).addClass('active');
                } else {
                  $('#packaging_' + res.data.packaging).addClass('active');
                }

                if (res.data.behaviour == 1) {
                  $('#behaviour_' + res.data.behaviour).addClass('active');
                } else if (res.data.behaviour == 2) {
                  $('#behaviour_' + res.data.behaviour).addClass('active');
                } else {
                  $('#behaviour_' + res.data.behaviour).addClass('active');
                }

                $("#feedback_comment").val(res.data.comment);
              }
            }); //});
          }
        }]);

        return ViewFeedbackPage;
      }();

      ViewFeedbackPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      ViewFeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-feedback',
        template: _raw_loader_view_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewFeedbackPage);
      /***/
    },

    /***/
    "j3DA":
    /*!***************************************************************!*\
      !*** ./src/app/view-feedback/view-feedback-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ViewFeedbackPageRoutingModule */

    /***/
    function j3DA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewFeedbackPageRoutingModule", function () {
        return ViewFeedbackPageRoutingModule;
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


      var _view_feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-feedback.page */
      "UnYZ");

      var routes = [{
        path: '',
        component: _view_feedback_page__WEBPACK_IMPORTED_MODULE_3__["ViewFeedbackPage"]
      }];

      var ViewFeedbackPageRoutingModule = /*#__PURE__*/_createClass(function ViewFeedbackPageRoutingModule() {
        _classCallCheck(this, ViewFeedbackPageRoutingModule);
      });

      ViewFeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewFeedbackPageRoutingModule);
      /***/
    },

    /***/
    "vBvZ":
    /*!*******************************************************!*\
      !*** ./src/app/view-feedback/view-feedback.module.ts ***!
      \*******************************************************/

    /*! exports provided: ViewFeedbackPageModule */

    /***/
    function vBvZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewFeedbackPageModule", function () {
        return ViewFeedbackPageModule;
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


      var _view_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-feedback-routing.module */
      "j3DA");
      /* harmony import */


      var _view_feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-feedback.page */
      "UnYZ");

      var ViewFeedbackPageModule = /*#__PURE__*/_createClass(function ViewFeedbackPageModule() {
        _classCallCheck(this, ViewFeedbackPageModule);
      });

      ViewFeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewFeedbackPageRoutingModule"]],
        declarations: [_view_feedback_page__WEBPACK_IMPORTED_MODULE_6__["ViewFeedbackPage"]]
      })], ViewFeedbackPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=view-feedback-view-feedback-module-es5.js.map