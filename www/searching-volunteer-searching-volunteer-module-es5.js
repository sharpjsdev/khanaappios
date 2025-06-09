(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searching-volunteer-searching-volunteer-module"], {
    /***/
    "5t2i":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searching-volunteer/searching-volunteer.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content>\n    <ion-img src=\"../assets/images/loader.gif\" style=\"height: 100px;text-align: center;margin-top: 50%;\"></ion-img>\n    <h5 class=\"size_15 regular green center\">{{model.key_text1}}</h5>\n    </ion-content>";
      /***/
    },

    /***/
    "8xx+":
    /*!*****************************************************************!*\
      !*** ./src/app/searching-volunteer/searching-volunteer.page.ts ***!
      \*****************************************************************/

    /*! exports provided: SearchingVolunteerPage */

    /***/
    function xx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchingVolunteerPage", function () {
        return SearchingVolunteerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_searching_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./searching-volunteer.page.html */
      "5t2i");
      /* harmony import */


      var _searching_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./searching-volunteer.page.scss */
      "FNve");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");

      var SearchingVolunteerPage = /*#__PURE__*/function () {
        function SearchingVolunteerPage(http, route, router, fetch, storage) {
          _classCallCheck(this, SearchingVolunteerPage);

          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
          var self = this;
          this.tracking_timer = setTimeout(function () {
            self.stopTrackingLoop();
            self.router.navigate(['/home']);
          }, 30000);
        }

        return _createClass(SearchingVolunteerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'SEARCHING_DONEE_NEAR_YOU';
            });
            this.model.key_text1 = item1[lang_code];
            var id = parseInt(this.route.snapshot.params['id']);
            var id2 = parseInt(this.route.snapshot.params['id2']);
            this.model.veg = id;
            this.model.nonveg = id2;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.startTrackingLoop();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.stopTrackingLoop();
          }
        }, {
          key: "startTrackingLoop",
          value: function startTrackingLoop() {
            var _this = this;

            this.tracking = setInterval(function () {
              _this.checkVolunteer();
            }, 1000);
          }
        }, {
          key: "stopTrackingLoop",
          value: function stopTrackingLoop() {
            clearInterval(this.tracking);
            clearTimeout(this.tracking_timer);
            this.tracking = null;
          }
        }, {
          key: "checkVolunteer",
          value: function checkVolunteer() {
            var _this2 = this;

            var formData = new FormData();
            formData.append("id", this.model.veg);
            formData.append("id2", this.model.nonveg);
            this.fetch.checkVolunteerAcceptRequest(formData).subscribe(function (res) {
              if (res['success'] == true) {
                _this2.router.navigate(['/display-accept-request-on-map', JSON.stringify(res['data']), _this2.model.veg, _this2.model.nonveg]); //alert(JSON.stringify(res['data']));

              }
            });
          }
        }]);
      }();

      SearchingVolunteerPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }];
      };

      SearchingVolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-searching-volunteer',
        template: _raw_loader_searching_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_searching_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchingVolunteerPage);
      /***/
    },

    /***/
    "FNve":
    /*!*******************************************************************!*\
      !*** ./src/app/searching-volunteer/searching-volunteer.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function FNve(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2hpbmctdm9sdW50ZWVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "g8dT":
    /*!*******************************************************************!*\
      !*** ./src/app/searching-volunteer/searching-volunteer.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SearchingVolunteerPageModule */

    /***/
    function g8dT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchingVolunteerPageModule", function () {
        return SearchingVolunteerPageModule;
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


      var _searching_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./searching-volunteer-routing.module */
      "rovK");
      /* harmony import */


      var _searching_volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./searching-volunteer.page */
      "8xx+");

      var SearchingVolunteerPageModule = /*#__PURE__*/_createClass(function SearchingVolunteerPageModule() {
        _classCallCheck(this, SearchingVolunteerPageModule);
      });

      SearchingVolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _searching_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchingVolunteerPageRoutingModule"]],
        declarations: [_searching_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["SearchingVolunteerPage"]]
      })], SearchingVolunteerPageModule);
      /***/
    },

    /***/
    "rovK":
    /*!***************************************************************************!*\
      !*** ./src/app/searching-volunteer/searching-volunteer-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: SearchingVolunteerPageRoutingModule */

    /***/
    function rovK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchingVolunteerPageRoutingModule", function () {
        return SearchingVolunteerPageRoutingModule;
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


      var _searching_volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./searching-volunteer.page */
      "8xx+");

      var routes = [{
        path: '',
        component: _searching_volunteer_page__WEBPACK_IMPORTED_MODULE_3__["SearchingVolunteerPage"]
      }];

      var SearchingVolunteerPageRoutingModule = /*#__PURE__*/_createClass(function SearchingVolunteerPageRoutingModule() {
        _classCallCheck(this, SearchingVolunteerPageRoutingModule);
      });

      SearchingVolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchingVolunteerPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=searching-volunteer-searching-volunteer-module-es5.js.map