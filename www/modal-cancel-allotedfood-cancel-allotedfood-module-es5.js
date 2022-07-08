(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-cancel-allotedfood-cancel-allotedfood-module"], {
    /***/
    "8LZw":
    /*!***********************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CancelAllotedfoodPageModule */

    /***/
    function LZw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelAllotedfoodPageModule", function () {
        return CancelAllotedfoodPageModule;
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


      var _cancel_allotedfood_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cancel-allotedfood-routing.module */
      "N04E");
      /* harmony import */


      var _cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cancel-allotedfood.page */
      "hHBB");

      var CancelAllotedfoodPageModule = function CancelAllotedfoodPageModule() {
        _classCallCheck(this, CancelAllotedfoodPageModule);
      };

      CancelAllotedfoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cancel_allotedfood_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelAllotedfoodPageRoutingModule"]],
        declarations: [_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__["CancelAllotedfoodPage"]]
      })], CancelAllotedfoodPageModule);
      /***/
    },

    /***/
    "N04E":
    /*!*******************************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CancelAllotedfoodPageRoutingModule */

    /***/
    function N04E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelAllotedfoodPageRoutingModule", function () {
        return CancelAllotedfoodPageRoutingModule;
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


      var _cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cancel-allotedfood.page */
      "hHBB");

      var routes = [{
        path: '',
        component: _cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_3__["CancelAllotedfoodPage"]
      }];

      var CancelAllotedfoodPageRoutingModule = function CancelAllotedfoodPageRoutingModule() {
        _classCallCheck(this, CancelAllotedfoodPageRoutingModule);
      };

      CancelAllotedfoodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CancelAllotedfoodPageRoutingModule);
      /***/
    },

    /***/
    "epfR":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function epfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content class=\"modal_content\">\n  <img (click)=\"closeModal()\" src=\"assets/images/close_btn.svg\" class=\"close_btn\">\n  <br>\n  <div class=\"ion-padding\">   \n  \n    <div class=\"modal_inner\">\n      <div class=\"regular medium size_16\" style=\"border-bottom: 1px solid;\"><label>{{model.key_text2}} <span style=\"color:red\">*</span></label></div><br/>\n\n      <ion-radio-group (ionChange)=\"select_reason($event)\"> \n        <ion-item *ngFor=\"let x of reasons\" lines=\"none\" class=\"cancel_radio\">\n          <ion-label class=\"regular size_14\">{{ x.label }}</ion-label>\n          <ion-radio name=\"reason\" slot=\"start\" value=\"{{x.label}}\" (ionChange)=\"radioGroupChange($event)\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <!--<label *ngFor=\"let x of reasons\">\n        <input  name=\"reason\" type=\"radio\" value=\"{{x.label}}\"/>{{ x.label }}\n        <br/>\n      </label>-->\n\n      <div id=\"reason_msg\" style=\"color:red;display:none;\">Reason is required</div><br/>\n      <label>{{model.key_text3}}</label><br/>      \n      <div class=\"btn-group\">\n        <ion-textarea rows=\"4\" name=\"comments\" placeholder=\"\" class=\"custom_textarea\" id=\"comments\"></ion-textarea>\n      </div>      \n      \n    </div>\n  </div>\n</ion-content> \n\n<ion-footer>\n  <ion-toolbar>    \n    <div class=\"app_button\">      \n        <button type=\"btn\" (click)=\"cancelDonation()\" *ngIf=\"!model.search\" class=\"app_btn\">{{model.key_text1}}</button>\n        <button class=\"app_btn\"  *ngIf=\"model.search\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></button>      \n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "hHBB":
    /*!*********************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.ts ***!
      \*********************************************************************/

    /*! exports provided: CancelAllotedfoodPage */

    /***/
    function hHBB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelAllotedfoodPage", function () {
        return CancelAllotedfoodPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cancel_allotedfood_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cancel-allotedfood.page.html */
      "epfR");
      /* harmony import */


      var _cancel_allotedfood_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cancel-allotedfood.page.scss */
      "m52P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CancelAllotedfoodPage = /*#__PURE__*/function () {
        function CancelAllotedfoodPage(modalController, navParams, storage, fetch) {
          _classCallCheck(this, CancelAllotedfoodPage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.storage = storage;
          this.fetch = fetch;
          this.model = {};
          this.reasons = [];
        }

        _createClass(CancelAllotedfoodPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.model.search = false;
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.fetch.get_reasons(lang_code).subscribe(function (res) {
              res['data'].forEach(function (val, i) {
                _this.reasons.push({
                  label: val['' + lang_code + '']
                });
              });
            });
            var res = this.storage.getScope();

            if (this.paramTitle == 'get_food') {
              var item1 = res.find(function (i) {
                return i.key_text === 'CANCEL_PICK_UP';
              });
              this.model.key_text1 = item1[lang_code];
            } else {
              var _item = res.find(function (i) {
                return i.key_text === 'CANCEL_DROP';
              });

              this.model.key_text1 = _item[lang_code];
            }

            var item2 = res.find(function (i) {
              return i.key_text === 'REASON_FOR_CANCELLATION';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'COMMENT';
            });
            this.model.key_text3 = item3[lang_code];
          }
        }, {
          key: "select_reason",
          value: function select_reason(value) {
            this.model.selected_reason = value.detail.value;
            ;
          }
        }, {
          key: "cancelDonation",
          value: function cancelDonation() {
            var _this2 = this;

            this.model.search = true;
            var reason = this.model.selected_reason;

            if (!reason) {
              $('#reason_msg').show();
              this.model.search = false;
            } else {
              $('#reason_msg').hide();
              var comment = $('#comments').val();
              var data = JSON.stringify({
                'id': this.id,
                'reason': reason,
                'comment': comment
              });

              if (this.type == "get_food") {
                this.fetch.get_food_cancel_alloted_request(data).subscribe(function (res) {
                  _this2.model.search = false;

                  _this2.closeModal(1);
                });
              } else {
                this.fetch.cancel_alloted_request(data).subscribe(function (res) {
                  _this2.model.search = false;

                  _this2.closeModal(1);
                });
              }
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal(isDone) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = isDone;
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CancelAllotedfoodPage;
      }();

      CancelAllotedfoodPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }];
      };

      CancelAllotedfoodPage.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        paramTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CancelAllotedfoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cancel-allotedfood',
        template: _raw_loader_cancel_allotedfood_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cancel_allotedfood_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CancelAllotedfoodPage);
      /***/
    },

    /***/
    "m52P":
    /*!***********************************************************************!*\
      !*** ./src/app/modal/cancel-allotedfood/cancel-allotedfood.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function m52P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-radio-group ion-item {\n  margin-left: -19px;\n  margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbmNlbC1hbGxvdGVkZm9vZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoiY2FuY2VsLWFsbG90ZWRmb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-cancel-allotedfood-cancel-allotedfood-module-es5.js.map