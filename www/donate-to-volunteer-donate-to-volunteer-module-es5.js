(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-to-volunteer-donate-to-volunteer-module"], {
    /***/
    "W80D":
    /*!*****************************************************************!*\
      !*** ./src/app/donate-to-volunteer/donate-to-volunteer.page.ts ***!
      \*****************************************************************/

    /*! exports provided: DonateToVolunteerPage */

    /***/
    function W80D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateToVolunteerPage", function () {
        return DonateToVolunteerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_to_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate-to-volunteer.page.html */
      "kUrz");
      /* harmony import */


      var _donate_to_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate-to-volunteer.page.scss */
      "hJ/y");
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

      var DonateToVolunteerPage = /*#__PURE__*/function () {
        function DonateToVolunteerPage(http, route, router, fetch, storage) {
          _classCallCheck(this, DonateToVolunteerPage);

          this.http = http;
          this.route = route;
          this.router = router;
          this.fetch = fetch;
          this.storage = storage;
          this.model = {};
          this.food_request = [];
        }

        _createClass(DonateToVolunteerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            this.model.volunteer_id = this.route.snapshot.params['id'];
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.model.food_type = '';
            $('#v_food_1').addClass('active');
            this.fetch.get_request(this.model.volunteer_id).subscribe(function (res) {
              console.log(res.data);
              _this.food_request = res.data;
            });
          }
        }, {
          key: "food_type",
          value: function food_type(val) {
            this.model.food_type = val;

            if (val == 1) {
              $('#d_food_1').addClass('active');
              $('#d_food_2').removeClass('active');
              $('#d_food_3').removeClass('active');
            } else if (val == 2) {
              $('#d_food_2').addClass('active');
              $('#d_food_1').removeClass('active');
              $('#d_food_3').removeClass('active');
            } else {
              $('#d_food_3').addClass('active');
              $('#d_food_2').removeClass('active');
              $('#d_food_1').removeClass('active');
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'NAME';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'TYPE_HERE';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'SELECT_TYPE_OF_FOOD';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'ANY';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'FOOD_NEEDED_FOR_HOW_MANY_PEOPLE';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'UPLOAD_FOOD_REQUEST';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'FOOD_REQUESTS';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'NEARBY_OTHER_VOLUNTEER';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'REQUEST_FOOD';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'DONATE_FOOD';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'FOOD_FOR';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text17 = item17[lang_code]; //});
          }
        }, {
          key: "upload_food",
          value: function upload_food() {
            var _this2 = this;

            var req = [];
            $("input[name='request']:checked").each(function () {
              req.push($(this).val());
            }); //console.log(no_of_people);

            if (req.length == 0) {
              $('#error_no_of_people').show();
            } else {
              $('#error_no_of_people').hide();
              var data = JSON.stringify({
                'food_request_id': req,
                'donor_id': this.model.user_id,
                'volunteer_id': this.model.volunteer_id
              });
              this.fetch.donate_food_to_volunteer(data).subscribe(function (res) {
                _this2.router.navigate(['/volunteer-request']);
              });
            }
          }
        }]);

        return DonateToVolunteerPage;
      }();

      DonateToVolunteerPage.ctorParameters = function () {
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

      DonateToVolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate-to-volunteer',
        template: _raw_loader_donate_to_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_to_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonateToVolunteerPage);
      /***/
    },

    /***/
    "Z01+":
    /*!***************************************************************************!*\
      !*** ./src/app/donate-to-volunteer/donate-to-volunteer-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: DonateToVolunteerPageRoutingModule */

    /***/
    function Z01(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateToVolunteerPageRoutingModule", function () {
        return DonateToVolunteerPageRoutingModule;
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


      var _donate_to_volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate-to-volunteer.page */
      "W80D");

      var routes = [{
        path: '',
        component: _donate_to_volunteer_page__WEBPACK_IMPORTED_MODULE_3__["DonateToVolunteerPage"]
      }];

      var DonateToVolunteerPageRoutingModule = function DonateToVolunteerPageRoutingModule() {
        _classCallCheck(this, DonateToVolunteerPageRoutingModule);
      };

      DonateToVolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonateToVolunteerPageRoutingModule);
      /***/
    },

    /***/
    "ekeA":
    /*!**********************************************!*\
      !*** ./src/app/captcha/captcha.component.ts ***!
      \**********************************************/

    /*! exports provided: CaptchaComponent */

    /***/
    function ekeA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function () {
        return CaptchaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./captcha.component.html */
      "l+ky");
      /* harmony import */


      var _captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./captcha.component.scss */
      "oebF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CaptchaComponent = /*#__PURE__*/function () {
        function CaptchaComponent(fetch, router) {
          _classCallCheck(this, CaptchaComponent);

          this.fetch = fetch;
          this.router = router;
          this.model = {};
          this.notification = [];
        }

        _createClass(CaptchaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.pageName = this.router['routerState'].snapshot.url;
            this.model.user_id = localStorage.getItem('user_id');
            this.fetch.get_notification(this.model.user_id).subscribe(function (res) {
              _this3.notification = res['data'];

              if (_this3.notification.length > 0) {
                $('#black_spot').show();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.fetch.read_notification(this.model.user_id).subscribe(function (res) {
              $('#black_spot').hide();
            });
          }
        }]);

        return CaptchaComponent;
      }();

      CaptchaComponent.ctorParameters = function () {
        return [{
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      CaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-captcha',
        template: _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CaptchaComponent);
      /***/
    },

    /***/
    "hJ/y":
    /*!*******************************************************************!*\
      !*** ./src/app/donate-to-volunteer/donate-to-volunteer.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function hJY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checkbox {\n  width: 100%;\n  margin-bottom: 15px auto;\n  position: relative;\n  display: block;\n}\n.checkbox label {\n  position: relative;\n  min-height: 34px;\n  display: block;\n  padding-left: 37px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n  margin-left: -3px;\n}\n.checkbox label span {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.checkbox label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 5px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.28s ease;\n  border-radius: 3px;\n  border: 2px solid #419b95;\n}\n.checkbox label:after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 5px;\n  border-bottom: 2px solid #419b95;\n  border-left: 2px solid #419b95;\n  transform: rotate(-45deg) scale(0);\n  transition: transform ease 0.25s;\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n.checkbox input[type=checkbox] {\n  width: auto;\n  opacity: 1e-8;\n  position: absolute;\n  left: 0;\n  margin-left: -20px;\n}\n.checkbox input[type=checkbox]:checked ~ label:before {\n  border: 2px solid #419b95;\n}\n.checkbox input[type=checkbox]:checked ~ label:after {\n  transform: rotate(-45deg) scale(1);\n}\n.checkbox input[type=checkbox]:focus + label::before {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvbmF0ZS10by12b2x1bnRlZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFWjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1k7RUFDSSx5QkFBQTtBQUNoQjtBQUNZO0VBQ0ksa0NBQUE7QUFDaEI7QUFFUTtFQUNJLFVBQUE7QUFBWiIsImZpbGUiOiJkb25hdGUtdG8tdm9sdW50ZWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1ncmVlbjogIzM0QzM3QTsgXG4uY2hlY2tib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI4cyBlYXNlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MTliOTU7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0MTliOTU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UgMC4yNXM7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBvcGFjaXR5OiAwLjAwMDAwMDAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgICAgJjpjaGVja2VkIH4gbGFiZWx7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmb2N1cyArIGxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "kUrz":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate-to-volunteer/donate-to-volunteer.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kUrz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-captcha></app-captcha>\n<ion-content class=\"custom_new_volunteer\">\n  \n  <div class=\"ion-padding theme_width\">\n    \n    <div class=\"volunteer_info\">\n         \n      <!-- <div class=\"info_single\">\n        1. {{model.key_text3}} :\n        <div class=\"search_food_buttons\">\n          <div class=\"btn-group\">\n            <button class=\"grey regular btn1\" id=\"d_food_1\" (click)=\"food_type(1)\">{{model.key_text4}}.</button>\n            <button class=\"grey regular btn1\" id=\"d_food_2\" (click)=\"food_type(2)\">{{model.key_text5}}.</button>\n            \n          </div>\n        </div> \n        <span id=\"error_food_type\" style=\"display:none;color: red;\">This field is required</span>\n      </div>\n      <div class=\"info_single\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"custom_left\">\n            2. {{model.key_text7}}\n          </ion-col>\n          <ion-col size=\"1\" class=\"center\">\n            :\n          </ion-col>\n          <ion-col size=\"5\" class=\"custom_right\">\n            <div class=\"how_food\">\n              <input type=\"button\" class=\"minus\" onclick=\"donateDecrementValue()\" value=\"-\" />\n              <input type=\"text\" class=\"food_value\" name=\"quantity\" value=\"1\" maxlength=\"2\" max=\"10\" size=\"1\" id=\"d_r_number\" />\n              <input type=\"button\" class=\"plus\" onclick=\"donateIncrementValue()\" value=\"+\" />\n            </div>\n          </ion-col>\n        </ion-row>\n        <span id=\"error_no_of_people\" style=\"display:none;color: red;\">This field is required</span>\n      </div> -->\n      <div class=\"food_request_entry\" *ngFor=\"let x of food_request;let i = index; \" id=\"req_list_{{x.id}}\" style=\"position:relative;margin-bottom: 20px;\">\n        <!-- <div class=\"entry_number green\" style=\"width: 7%;\">{{i+1}}.</div> -->\n        <div class=\"checkbox\"  style=\"width: 92%;\n        \">\n          <input type=\"checkbox\" id=\"ch{{x.id}}\" class=\"request\"  name=\"request\" value=\"{{x.id}}\">\n          <label for=\"ch{{x.id}}\" class=\"green\"><span>{{x.name}}\n            <em *ngIf=\"x.food_type==1\">{{ model.key_text4 }}</em>\n            <em *ngIf=\"x.food_type==2\">{{ model.key_text5 }}</em>\n             {{ model.key_text16 }} {{x.no_of_person}} {{ model.key_text17 }}\n          </span></label>\n       </div>\n             \n      </div>\n      <div id=\"error_no_of_people\" style=\"display:none;color: red;\">Please check the food request which you want to donate.</div>\n      <button class=\"desgin_btn white\" (click)=\"upload_food()\">{{model.key_text15}}</button>\n    </div>\n\n    \n\n  </div>\n</ion-content>  \n\n<ion-footer>\n  <ion-toolbar>    \n      <ion-segment color=\"transparent\" value=\"volunteer\">\n        <ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n            <!--<img src=\"assets/images/red_footer_home.svg\">-->\n            <ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>\n            <ion-label class=\"size_12 medium\" >{{model.key_text10}}</ion-label>    \n        </ion-segment-button>\n        <ion-segment-button value=\"activity\" [routerLink]=\"['/activity-normal']\">\n          <!--<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>-->\n          <img src=\"assets/images/grey_footer_activity.svg\">\n          <ion-label class=\"size_12 medium\">{{model.key_text11}}</ion-label>    \n        </ion-segment-button>        \n        <ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">            \n          <ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>\n          <!--<img src=\"assets/images/grey_footer_volunteer.svg\">-->\n          <ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text12}}</ion-label>                \n        </ion-segment-button>        \n      </ion-segment>      \n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "l+ky":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/captcha/captcha.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function lKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\"></span>      \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n      \n     \n      \n    </ion-toolbar>\n  </ion-header>";
      /***/
    },

    /***/
    "ni/N":
    /*!*******************************************************************!*\
      !*** ./src/app/donate-to-volunteer/donate-to-volunteer.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DonateToVolunteerPageModule */

    /***/
    function niN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonateToVolunteerPageModule", function () {
        return DonateToVolunteerPageModule;
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


      var _donate_to_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donate-to-volunteer-routing.module */
      "Z01+");
      /* harmony import */


      var _donate_to_volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donate-to-volunteer.page */
      "W80D");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var DonateToVolunteerPageModule = function DonateToVolunteerPageModule() {
        _classCallCheck(this, DonateToVolunteerPageModule);
      };

      DonateToVolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_to_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonateToVolunteerPageRoutingModule"]],
        declarations: [_donate_to_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["DonateToVolunteerPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
      })], DonateToVolunteerPageModule);
      /***/
    },

    /***/
    "oebF":
    /*!************************************************!*\
      !*** ./src/app/captcha/captcha.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function oebF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0Y2hhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=donate-to-volunteer-donate-to-volunteer-module-es5.js.map