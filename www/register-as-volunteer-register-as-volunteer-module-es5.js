(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-as-volunteer-register-as-volunteer-module"], {
    /***/
    "Bcqm":
    /*!*******************************************************************************!*\
      !*** ./src/app/register-as-volunteer/register-as-volunteer-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: RegisterAsVolunteerPageRoutingModule */

    /***/
    function Bcqm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterAsVolunteerPageRoutingModule", function () {
        return RegisterAsVolunteerPageRoutingModule;
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


      var _register_as_volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register-as-volunteer.page */
      "gCve");

      var routes = [{
        path: '',
        component: _register_as_volunteer_page__WEBPACK_IMPORTED_MODULE_3__["RegisterAsVolunteerPage"]
      }];

      var RegisterAsVolunteerPageRoutingModule = function RegisterAsVolunteerPageRoutingModule() {
        _classCallCheck(this, RegisterAsVolunteerPageRoutingModule);
      };

      RegisterAsVolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterAsVolunteerPageRoutingModule);
      /***/
    },

    /***/
    "M26G":
    /*!***********************************************************************!*\
      !*** ./src/app/register-as-volunteer/register-as-volunteer.module.ts ***!
      \***********************************************************************/

    /*! exports provided: RegisterAsVolunteerPageModule */

    /***/
    function M26G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterAsVolunteerPageModule", function () {
        return RegisterAsVolunteerPageModule;
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


      var _register_as_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-as-volunteer-routing.module */
      "Bcqm");
      /* harmony import */


      var _register_as_volunteer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register-as-volunteer.page */
      "gCve");

      var RegisterAsVolunteerPageModule = function RegisterAsVolunteerPageModule() {
        _classCallCheck(this, RegisterAsVolunteerPageModule);
      };

      RegisterAsVolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_as_volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterAsVolunteerPageRoutingModule"]],
        declarations: [_register_as_volunteer_page__WEBPACK_IMPORTED_MODULE_6__["RegisterAsVolunteerPage"]]
      })], RegisterAsVolunteerPageModule);
      /***/
    },

    /***/
    "QNAO":
    /*!***********************************************************************!*\
      !*** ./src/app/register-as-volunteer/register-as-volunteer.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function QNAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checkbox {\n  width: 100%;\n  margin: 15px auto;\n  position: relative;\n  display: block;\n}\n.checkbox label {\n  position: relative;\n  min-height: 34px;\n  display: block;\n  padding-left: 37px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n  margin-left: -3px;\n}\n.checkbox label span {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.checkbox label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 5px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.28s ease;\n  border-radius: 3px;\n  border: 2px solid #419b95;\n}\n.checkbox label:after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 5px;\n  border-bottom: 2px solid #419b95;\n  border-left: 2px solid #419b95;\n  transform: rotate(-45deg) scale(0);\n  transition: transform ease 0.25s;\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n.checkbox input[type=checkbox] {\n  width: auto;\n  opacity: 1e-8;\n  position: absolute;\n  left: 0;\n  margin-left: -20px;\n}\n.checkbox input[type=checkbox]:checked ~ label:before {\n  border: 2px solid #419b95;\n}\n.checkbox input[type=checkbox]:checked ~ label:after {\n  transform: rotate(-45deg) scale(1);\n}\n.checkbox input[type=checkbox]:focus + label::before {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLWFzLXZvbHVudGVlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFFWjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFWjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVaO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDWTtFQUNJLHlCQUFBO0FBQ2hCO0FBQ1k7RUFDSSxrQ0FBQTtBQUNoQjtBQUVRO0VBQ0ksVUFBQTtBQUFaIiwiZmlsZSI6InJlZ2lzdGVyLWFzLXZvbHVudGVlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItZ3JlZW46ICMzNEMzN0E7IFxuLmNoZWNrYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI4cyBlYXNlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MTliOTU7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0MTliOTU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UgMC4yNXM7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBvcGFjaXR5OiAwLjAwMDAwMDAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgICAgJjpjaGVja2VkIH4gbGFiZWx7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQxOWI5NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmb2N1cyArIGxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0= */";
      /***/
    },

    /***/
    "fR7h":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-as-volunteer/register-as-volunteer.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fR7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"big_header\">\n    <div class=\"ion-padding\">\n      <div class=\"title light poiret\">\n        {{app_title}}\n      </div>\n      <div class=\"big_header_bottom regular size_18\">\n       {{page_key1}}<br>\n        {{page_key2}}\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"ion-padding\">\n    <div class=\"register_volunteer app_input_text center_input\">\n      <img src=\"assets/images/icon_user_input.svg\">\n      <input type=\"text\" value=\"{{model.username_r}}\" placeholder=\"{{model.username}}\" class=\"input_username\">      \n    </div>  \n    \n    <div class=\"register_volunteer app_input_text center_input\">\n      <img src=\"assets/images/icon_calendar_input.svg\">\n      <input type=\"text\" disabled>  \n      <ion-datetime placeholder=\"{{model.dob}}\" class=\"regular input_dob\" value=\"{{model.dob_r}}\" max=\"{{ model.latest_date }}\" displayFormat=\"MMMM / DD / YYYY\"></ion-datetime>    \n    </div> \n    <br><br>\n    <div class=\"grey\" style=\"margin-left: 23px;\">{{model.food_type}} : </div>\n\n    <div class=\"btn-group\">\n      <button class=\"grey regular btn2\" id=\"r_food_1\" (click)=\"food_type(1)\">{{model.veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"r_food_2\" (click)=\"food_type(2)\">{{model.non_veg}}.</button>\n      <button class=\"grey regular btn2\" id=\"r_food_3\" (click)=\"food_type(3)\">{{model.both}}</button>\n    </div>\n  </div>\n  \n  </ion-content>\n  \n  <ion-footer> \n    <ion-toolbar>     \n      <div class=\"app_button\">\n\t\t<button class=\"app_btn\" (click)=\"save()\">{{model.next}}</button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  \n  \n  ";
      /***/
    },

    /***/
    "gCve":
    /*!*********************************************************************!*\
      !*** ./src/app/register-as-volunteer/register-as-volunteer.page.ts ***!
      \*********************************************************************/

    /*! exports provided: RegisterAsVolunteerPage */

    /***/
    function gCve(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterAsVolunteerPage", function () {
        return RegisterAsVolunteerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_as_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register-as-volunteer.page.html */
      "fR7h");
      /* harmony import */


      var _register_as_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register-as-volunteer.page.scss */
      "QNAO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../fetch.service */
      "RPep");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_terms_conditions_terms_conditions_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../modal/terms-conditions/terms-conditions.page */
      "t9PW");
      /* harmony import */


      var _error_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../error-msg.service */
      "ElZd");

      var RegisterAsVolunteerPage = /*#__PURE__*/function () {
        function RegisterAsVolunteerPage(errorMsg, storage, fetch, datepipe, modalController) {
          _classCallCheck(this, RegisterAsVolunteerPage);

          this.errorMsg = errorMsg;
          this.storage = storage;
          this.fetch = fetch;
          this.datepipe = datepipe;
          this.modalController = modalController;
          this.model = {};
        }

        _createClass(RegisterAsVolunteerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.accept = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.app_title = 'Khanaa.app';
            this.page_key1 = 'Enter your Personal Details';
            this.page_key2 = 'for better experience of the app';
            this.model.username = 'Username';
            this.model.dob = 'Date Of Birth';
            this.model.food_type = 'Type of food you prefer';
            this.model.veg = 'Veg';
            this.model.non_veg = 'Non Veg';
            this.model.both = 'Both';
            this.model.food_val = '';
            this.model.alert_text = 'Please fill all the details';
            this.model.okay = 'okay';
            this.model.get_start = "Get Started";
            this.model.next_btn = 'Next';
            this.model.username_req = 'Username is required';
            this.model.dob_req = 'DOB is required';
            this.model.food_type_req = 'Food type is required';
            var maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
            var latest_date = this.datepipe.transform(maxDate, 'yyyy-MM-dd');
            this.model.latest_date = latest_date;
            var lang_code = JSON.parse(localStorage.getItem('lang')); //this.fetch.getKeyText(lang_code).subscribe(res => {

            var res = this.storage.getScope();
            var item1 = res.find(function (i) {
              return i.key_text === 'KHANAA_APP';
            });
            this.app_title = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'ENTER_YOUR_PERSONAL_DETAILS';
            });
            this.page_key1 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'FOR_BETTER_EXPERIENCE_OF_THE_APP';
            });
            this.page_key2 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'USERNAME';
            });
            this.model.username = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'DATE_OF_BIRTH';
            });
            this.model.dob = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'TYPE_OF_FOOD_YOU_PREFER';
            });
            this.model.food_type = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'VEG';
            });
            this.model.veg = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'NON_VEG';
            });
            this.model.non_veg = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'ANY';
            });
            this.model.both = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'PLEASE_FILL_ALL_THE_DETAILS';
            });
            this.model.alert_text = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.okay = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'GET_STARTED';
            });
            this.model.get_start = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'TERMS_CONDITIONS';
            });
            this.model.terms = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'NEXT';
            });
            this.model.next = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'USERNAME_IS_REQUIRED';
            });
            this.model.username_req = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'DOB_IS_REQUIRED';
            });
            this.model.dob_req = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'FOOD_TYPE_IS_REQUIRED';
            });
            this.model.food_type_req = item17[lang_code]; //});

            this.model.user_id = JSON.parse(localStorage.getItem('user_id'));

            if (this.model.user_id != null) {
              this.fetch.get_registered_user_data(this.model.user_id).subscribe(function (res) {
                console.log(res);
                _this.model.username_r = res['username'];
                _this.model.dob_r = res['dob'];
                _this.model.food_type_r = res['type_of_food_you_prefer'];
                _this.model.food_val = res['type_of_food_you_prefer'];
                $('#r_food_' + res['type_of_food_you_prefer']).addClass('active');
              });
            }

            var lang_code = JSON.parse(localStorage.getItem('lang'));
            this.fetch.get_terms_conditions(lang_code).subscribe(function (res) {
              if (res.success) {
                _this.model.content = res.data.content;
              } else {
                _this.model.content = '';
              }
            });
          }
        }, {
          key: "food_type",
          value: function food_type(val) {
            this.model.food_val = val;

            if (val == 1) {
              $('#r_food_' + val).addClass('active');
              $('#r_food_2').removeClass('active');
              $('#r_food_3').removeClass('active');
            } else if (val == 2) {
              $('#r_food_' + val).addClass('active');
              $('#r_food_1').removeClass('active');
              $('#r_food_3').removeClass('active');
            } else {
              $('#r_food_' + val).addClass('active');
              $('#r_food_1').removeClass('active');
              $('#r_food_2').removeClass('active');
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            var username = $('.input_username').val();
            var dob = $('.input_dob').val();
            var food_type = this.model.food_val;

            if (username == "") {
              this.errorMsg.showModal(this.model.username_req);
            } else if (dob == "") {
              this.errorMsg.showModal(this.model.dob_req);
            } else if (food_type == "") {
              this.errorMsg.showModal(this.model.food_type_req);
            } else {
              var user_id = JSON.parse(localStorage.getItem('user_id'));
              var data = JSON.stringify({
                'id': user_id,
                'username': username,
                'dob': dob,
                'food_type': food_type
              });
              this.fetch.registerUser(data).subscribe(function (res) {
                if (res.success == true) {
                  _this2.openTermsAndConditions();

                  localStorage.setItem('user_registerd', JSON.stringify(res['user_id']));
                } else {
                  _this2.errorMsg.showModal("Enter unique username.");
                }
              });
            }
          }
        }, {
          key: "openTermsAndConditions",
          value: function openTermsAndConditions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_terms_conditions_terms_conditions_page__WEBPACK_IMPORTED_MODULE_8__["TermsConditionsPage"],
                        cssClass: 'home_content_modal_new',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": 1,
                          "content": this.model.content
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {});
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return RegisterAsVolunteerPage;
      }();

      RegisterAsVolunteerPage.ctorParameters = function () {
        return [{
          type: _error_msg_service__WEBPACK_IMPORTED_MODULE_9__["ErrorMsgService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      RegisterAsVolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-as-volunteer',
        template: _raw_loader_register_as_volunteer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_as_volunteer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterAsVolunteerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-as-volunteer-register-as-volunteer-module-es5.js.map