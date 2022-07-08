(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-normal-activity-normal-module"], {
    /***/
    "YeSl":
    /*!*******************************************************************!*\
      !*** ./src/app/activity-normal/activity-normal-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ActivityNormalPageRoutingModule */

    /***/
    function YeSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityNormalPageRoutingModule", function () {
        return ActivityNormalPageRoutingModule;
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


      var _activity_normal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activity-normal.page */
      "ntK3");

      var routes = [{
        path: '',
        component: _activity_normal_page__WEBPACK_IMPORTED_MODULE_3__["ActivityNormalPage"]
      }];

      var ActivityNormalPageRoutingModule = function ActivityNormalPageRoutingModule() {
        _classCallCheck(this, ActivityNormalPageRoutingModule);
      };

      ActivityNormalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivityNormalPageRoutingModule);
      /***/
    },

    /***/
    "a20N":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activity-normal/activity-normal.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a20N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<center style=\"position: absolute;display: none;z-index:999;margin-left:45%;\" class=\"current_location_spinner_position\" id=\"add_location_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n<app-captcha></app-captcha>\n<ion-content>\n<!-- <span id=\"activity_normal_content\"> -->\n<div class=\"ion-padding theme_width\">\n  <div class=\"activity_graph custom_new_graph\">\n\t<div style=\"display: flex;\">\n\t\t<div (click)=\"handleTab(1)\" class=\"rec custon_new_tab_active\" style=\"margin-left: 15px;margin-bottom:10px;border-radius: 15px;width: 50%;text-align: center;padding: 8px;background: #f7f6f4;\n\t\t\">\n\t\t {{ model.key_text19 }}\n\t\t</div>\n\t\t<div (click)=\"handleTab(2)\" class=\"donar custon_new_tab_deactive btn1 active\" style=\"border:1px solid #419B95;margin-right: 15px;margin-bottom:10px;border-radius: 15px;width: 50%;text-align: center;padding: 8px;background: #f7f6f4;\">\n\t\t {{ model.key_text20 }}\n\t\t</div>\n\t   </div>\n\t<div class=\"search_food_bg\" style=\"min-height: 234px;\" >\n\t\t<div class=\"search_single receivertab\" *ngIf=\"request_food.length>0 && model.receivertab == 1\">\n\t\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{ model.key_text17 }}</div>\n\t  \n\t\t\t<ion-row *ngFor=\"let x of request_food;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t  <ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t{{i+1}}.\n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"6\" style=\"padding: 0;\">\n\t\t\t\t{{x.food_type | foodType}}. {{model.key_text12}} {{x.no_of_person}} {{model.key_text13}}\n\t\t\t  </ion-col>\t\t\t  \n\t\t\t  <ion-col size=\"3\" style=\"padding: 0;\" >\n\t\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"2\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\t\t\t\t  \n\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"cancelRequestFood(x.id)\">\t\t\t\t   \n\t\t\t  </ion-col>\n\t\t\t</ion-row>  \t\t\t\n\t\t</div>\n\t\t\n\t\t<div class=\"search_single receivertab\"  *ngIf=\"alloted_request_food.length>0 && model.receivertab == 1\" style=\"margin-top: 60px;\">\n\t\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{ model.key_text18 }}</div>\n\t\t\n\t\t\t<ion-row *ngFor=\"let x of alloted_request_food;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t\t<ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t\t{{i+1}}.\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" style=\"padding: 0; padding-right: 10px;\" routerLink=\"/get-food-nearest-donors-two-duplicate/{{x.donate_food_id}}/{{model.recLat}}/{{model.recLng}}/{{x.app_user_id}}/{{model.mode}}/{{x.food_type}}/{{x.id}}\">\n\t\t\t\t\t{{ x.username }} {{x.food_type | foodType}}. {{model.key_text12}} {{x.no_of_person}} {{model.key_text13}}\n\t\t\t\t</ion-col>\t\t\t  \n\t\t\t\t<ion-col size=\"2\" style=\"padding: 0;\" >\n\t\t\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t\t</ion-col>\t\t\t\t\n\t\t\t\t<ion-col size=\"2\" class=\"custom_new_call_btn\" style=\"text-align: right; margin-top: -4px;\">\n\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t<a class=\"size_15 medium\" (click)=\"call(x.mobile_no)\"><ion-icon name=\"call-outline\"></ion-icon></a> \t\t\t\t   \n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"1\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\t\t\t\n\t\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"cancelAllotedRequest(x.id,x.donate_food_id,x.donor_id,x.no_of_person,x.food_type)\">\t\t\t \n\t\t\t\t</ion-col>\n\t\t\t</ion-row>  \t\t\t\n\t\t</div>\t\n\n\t\t<div class=\"search_single donartab\" *ngIf=\"pending_data.length>0 && model.donartab == 1\">\n\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{model.key_text11}}</div>\n\t\t<ion-row *ngFor=\"let x of pending_data;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t{{i+1}}.\n\t\t\t</ion-col>  \n\t\t\t<ion-col size=\"5\" style=\"padding: 0;\" >\n\t\t\t{{x.food_type | foodType}}. {{model.key_text12}} {{x.total_food_for}} {{model.key_text13}}\n\t\t\t</ion-col>\t\t\n\t\t\t<ion-col size=\"3\" style=\"padding: 0;\" >\n\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"2\" >\n\t\t\t\t<ion-badge *ngIf=\"x.deactive == 1\" (click)=\"activeDonation(x.id)\" style=\"background-color:#6fb3af;float:right;margin-top:-5px;\">Act</ion-badge>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\t\t\t\n\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"presentAlertPrompt(x.id)\">\t\t\t \n\t\t\t</ion-col>\n\t\t</ion-row>        \n\t\t</div> \n\t\n\t\t<div class=\"search_single donartab\" *ngIf=\"alloted_food.length>0 && model.donartab == 1\" style=\"margin-top: 60px;\">\n\t\t\t<div class=\"size_15 medium big_heading custom_new_tab_heading\">{{model.key_text16}}</div>  \n\t\t\t<ion-row *ngFor=\"let x of alloted_food;let i = index;\" class=\"custom_new_single_row\">\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\">\t\n\t\t\t\t{{i+1}}.\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" style=\"padding: 0;\" >\n\t\t\t\t1.{{ x.username }} {{x.food_type | foodType}}. {{model.key_text12}} {{x.no_of_person}} {{model.key_text13}}\n\t\t\t</ion-col>\t\t  \n\t\t\t<ion-col size=\"2\" style=\"padding: 0;\" >\n\t\t\t\t<div class=\"grey_font right\">{{x.updated_at | date:'shortTime'}}</div> \n\t\t\t</ion-col>\t\t  \n\t\t\t<ion-col size=\"2\" class=\"custom_new_call_btn\" style=\"text-align: right; margin-top: -4px;\">\t\t\t  \n\t\t\t\t<a class=\"size_15 medium\" (click)=\"call(x.mobile_no)\"><ion-icon name=\"call-outline\"></ion-icon></a> \t\t\t   \n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"1\" style=\"padding: 0;\" class=\"custom_new_close_btn\">\n\t\t\t\t<span *ngIf=\"x.resultInMinutes<1\">\n\t\t\t\t\t<img src=\"assets/images/round_cross.svg\" (click)=\"cancelAllotedFood(x.id,x.donate_food_id,x.donor_id,x.app_user_id,x.no_of_person)\">\t\t\t\t\t\n\t\t\t\t</span>\n\t\t\t</ion-col>\n\t\t\t</ion-row>  \t\t\n\t\t</div>\n    </div>\n   \n    <form class=\"form\" id=\"myForm\">     \n      <div class=\"switch-field\" (change)=\"state()\">\n        <input type=\"radio\" id=\"radio-one\" name=\"switch-one\" value=\"yes\" checked/>\n        <label for=\"radio-one\" class=\"regular size_12\">{{model.key_text1}}</label>\n        <input type=\"radio\" id=\"radio-two\" name=\"switch-one\" value=\"no\" />\n        <label for=\"radio-two\" class=\"regular size_12\">{{model.key_text2}}</label>\n      </div> \n    </form> \n    <div id=\"highcharts\" style=\"width:100%;\"></div>\n    <div class=\"total_box\">\n      <div class=\"graph_total\">\n        <div class=\"graph_total_single size_12\" id=\"u_week_blessing_div\">\n          {{model.key_text3}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.blessing_this_week}}</span>\n        </div>\n\t\t<div class=\"graph_total_single size_12\" id=\"u_month_blessing_div\">\n          {{model.key_text4}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.blessing_this_week}}</span>\n        </div>\n        <div class=\"graph_total_single size_12\">\n          {{model.key_text8}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.total_blessings}}</span>\n        </div>\n      </div>\n    </div>\n\t<div id=\"food_quality\" ></div>\n\t\t\n\t<div class=\"total_box\">\n\t\t<div class=\"graph_total\">\n\t\t\t<div class=\"graph_total_single size_12\">\n\t\t\t\t{{model.key_text14}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.quality_rating}}</span>\n\t\t\t</div>\n\t\t</div>\n    </div>\n\t\t\n\t<div id=\"packaging\" ></div>\n\t\t\n\t<div class=\"total_box\">\n\t\t<div class=\"graph_total\">\n\t\t\t<div class=\"graph_total_single size_12\">\n\t\t\t\t{{model.key_text14}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.packaging_rating}}</span>\n\t\t\t</div>\n\t\t</div>\n    </div>\n\t\n\t<div id=\"behaviour\" ></div>\n\t\n    <div class=\"total_box\">\n\t\t<div class=\"graph_total\">\n\t\t\t<div class=\"graph_total_single size_12\">\n\t\t\t\t{{model.key_text14}} -&nbsp;&nbsp;&nbsp;<span class=\"green\">{{model.behaviour_rating}}</span>\n\t\t\t</div>\n\t\t</div>\n    </div>\n\n  </div>\n\n</div>\n\n\n<ion-slides class=\"swipe_msg\" [options]=\"slideOpts\">\n\t<ion-slide *ngFor=\"let x of model.feedback_data;let i = index\">\n\t\t<div class=\"thanks_msg\" *ngIf=\" i % 2 === 0 && x.comment != null\" >\n\t\t\t<div style=\"margin-bottom: 5px;\">{{x.username}} {{model.key_text15}}</div>\n\t\t\t<div class=\"size_15 regular green\">\n\t\t\t\t{{x.comment}}<ion-icon style=\"font-size: 18px;\" (click)=\"share(x.comment)\" name=\"share-social-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<img src=\"assets/images/smile.svg\"/>\n\t\t</div>\n\t\t<div class=\"thanks_msg second_slide\" *ngIf=\" i % 2 !== 0 && x.comment != null\">\n\t\t\t<img src=\"assets/images/smile.svg\"/>\n\t\t\t<div style=\"margin-bottom: 5px;\">{{x.username}} {{model.key_text15}}</div>\n\t\t\t<div class=\"size_15 regular green\">\n\t\t\t\t{{x.comment}}<ion-icon style=\"font-size: 18px;\" (click)=\"share(x.comment)\" name=\"share-social-outline\"></ion-icon>\n\t\t\t</div>      \n\t\t</div> \n\t</ion-slide>\n\t\n</ion-slides>\n\n\n<div class=\"ion-padding theme_width\">\n\t<div class=\"top_volunteers\">\n\t\t<div class=\"top_volunteers_heading size_18\">{{model.key_text9}}</div>\n\t\t<span *ngFor=\"let x of model.top_donors; let i = index;\">\n\t\t\t<div class=\"top_volunteer_single\">\n\t\t\t\t<div class=\"top_volunteer_name\">{{i+1}}. {{x.username}}</div>\n\t\t\t\t<div class=\"donations_count green\">{{x.cnt}} {{model.key_text10}}</div>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</div>\n<!-- </span> -->\n\n<center class=\"current_location_spinner_position\" id=\"activity_normal_spinner\"><ion-spinner class=\"current_location_sppiner\"></ion-spinner></center>\n</ion-content> \n\n<ion-footer>\n\t<ion-toolbar>     \n\t\t<ion-segment color=\"transparent\" value=\"activity\">\n\t\t\t<ion-segment-button value=\"home\" [routerLink]=\"['/home']\">\n\t\t\t\t<!--<img src=\"assets/images/red_footer_home.svg\">-->\n\t\t\t\t<ion-img src=\"assets/images/grey_footer_home.svg\"></ion-img>\n\t\t\t\t<ion-label class=\"size_12 medium\">{{model.key_text5}}</ion-label>    \n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"activity\">\n\t\t\t\t<ion-img src=\"assets/images/red_footer_activity.svg\"></ion-img>\n\t\t\t\t<!--<img src=\"assets/images/grey_footer_activity.svg\">-->\n\t\t\t\t<ion-label class=\"size_12 medium\" color=\"tertiary\">{{model.key_text6}}</ion-label>    \n\t\t\t</ion-segment-button>        \n\t\t\t<ion-segment-button value=\"volunteer\" *ngIf=\"model.is_volunteer== 1 \" [routerLink]=\"['/volunteer-detail']\">            \n\t\t\t\t<!--<ion-img src=\"assets/images/red_footer_volunteer.svg\"></ion-img>-->\n\t\t\t\t<img src=\"assets/images/grey_footer_volunteer.svg\">\n\t\t\t\t<ion-label class=\"size_12 medium\" >{{model.key_text7}}</ion-label>                \n\t\t\t</ion-segment-button>        \n\t\t</ion-segment>      \n\t</ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "lH3b":
    /*!***********************************************************!*\
      !*** ./src/app/activity-normal/activity-normal.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function lH3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".switch-field {\n  display: flex;\n  margin-bottom: 36px;\n  overflow: hidden;\n  width: 153px !important;\n  background: #b7b7b7;\n  border-radius: 20px;\n  margin: 0 auto;\n}\n\n.switch-field input {\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  overflow: hidden;\n}\n\n.switch-field label {\n  background-color: #B7B7B7;\n  color: #FFFFFF;\n  line-height: 1;\n  text-align: center;\n  padding: 10px 16px;\n  margin-right: -1px;\n  transition: all 0.1s ease-in-out;\n}\n\n.switch-field label:hover {\n  cursor: pointer;\n}\n\n.switch-field input:checked + label {\n  background-color: white;\n  box-shadow: none;\n  color: #363636;\n  border-radius: 20px;\n  z-index: 99;\n  font-family: medium !important;\n}\n\n.switch-field label:first-of-type {\n  border-radius: 20px 0px 0px 20px;\n}\n\n.switch-field label:last-of-type {\n  border-radius: 0px 20px 20px 0px;\n}\n\n/* This is just for CodePen. */\n\n.form {\n  max-width: 600px;\n  font-family: \"Lucida Grande\", Tahoma, Verdana, sans-serif;\n  font-weight: normal;\n  line-height: 1.625;\n  margin: 8px auto;\n  padding: 16px;\n}\n\nh2 {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n\n#activity_normal_content {\n  display: none;\n}\n\n.current_location_sppiner {\n  --color:#419B95;\n}\n\n.current_location_spinner_position {\n  margin-top: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FjdGl2aXR5LW5vcm1hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDRyxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNDLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7RUFDRyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDQyxlQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0MsZ0NBQUE7QUFDRDs7QUFHQSw4QkFBQTs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EseURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBREQ7O0FBSUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUFERDs7QUFJQTtFQUNDLGFBQUE7QUFERDs7QUFJQTtFQUNDLGVBQUE7QUFERDs7QUFHQTtFQUNDLGlCQUFBO0FBQUQiLCJmaWxlIjoiYWN0aXZpdHktbm9ybWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gtZmllbGQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDE1M3B4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2I3YjdiNztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0IHtcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG5cdGhlaWdodDogMXB4O1xuXHR3aWR0aDogMXB4O1xuXHRib3JkZXI6IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2l0Y2gtZmllbGQgbGFiZWwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQjdCN0I3O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG5cdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0gIWltcG9ydGFudDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpsYXN0LW9mLXR5cGUge1xuXHRib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcblxufVxuXG4vKiBUaGlzIGlzIGp1c3QgZm9yIENvZGVQZW4uICovXG5cbi5mb3JtIHtcblx0bWF4LXdpZHRoOiA2MDBweDtcblx0Zm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxLjYyNTtcblx0bWFyZ2luOiA4cHggYXV0bztcblx0cGFkZGluZzogMTZweDtcbn1cblxuaDIge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuI2FjdGl2aXR5X25vcm1hbF9jb250ZW50e1xuXHRkaXNwbGF5IDogbm9uZTtcbn1cblxuLmN1cnJlbnRfbG9jYXRpb25fc3BwaW5lcntcblx0LS1jb2xvcjojNDE5Qjk1O1xufVxuLmN1cnJlbnRfbG9jYXRpb25fc3Bpbm5lcl9wb3NpdGlvbntcblx0bWFyZ2luLXRvcDoyNTBweDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "ntK3":
    /*!*********************************************************!*\
      !*** ./src/app/activity-normal/activity-normal.page.ts ***!
      \*********************************************************/

    /*! exports provided: ActivityNormalPage */

    /***/
    function ntK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityNormalPage", function () {
        return ActivityNormalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_activity_normal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./activity-normal.page.html */
      "a20N");
      /* harmony import */


      var _activity_normal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity-normal.page.scss */
      "lH3b");
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


      var _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/cancel-allotedfood/cancel-allotedfood.page */
      "hHBB");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! highcharts */
      "6n/F");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/browser-tab/ngx */
      "ORb9");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");

      var ActivityNormalPage = /*#__PURE__*/function () {
        function ActivityNormalPage(geolocation, fetch, storage, modalController, alertController, browserTab, callNumber) {
          _classCallCheck(this, ActivityNormalPage);

          this.geolocation = geolocation;
          this.fetch = fetch;
          this.storage = storage;
          this.modalController = modalController;
          this.alertController = alertController;
          this.browserTab = browserTab;
          this.callNumber = callNumber;
          this.model = {};
          this.donation_graph_data = [];
          this.blessing_this_week = [];
          this.pending_data = [];
          this.alloted_food = [];
          this.request_food = [];
          this.alloted_request_food = [];
          this.reasons = [];
          this.slideOpts = {
            zoom: false,
            autoplay: true
          };
        }

        _createClass(ActivityNormalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            $('#add_location_spinner').show();
            this.model.receivertab = 0;
            this.model.donartab = 1;
            this.model.is_volunteer = 0;

            if (localStorage.getItem('volunteer_approve') != null) {
              this.model.is_volunteer = localStorage.getItem('volunteer_approve');
            }

            this.model.mode = 'WALKING';

            if (localStorage.getItem('isReceiverTab') != null) {
              if (localStorage.getItem('isReceiverTab') == '1') {
                this.model.receivertab = 1;
                this.model.donartab = 0;
              } else if (localStorage.getItem('isReceiverTab') == '0') {
                this.model.receivertab = 0;
                this.model.donartab = 1;
              }
            }

            var lang_code = JSON.parse(localStorage.getItem('lang')); //$('.receivertab').hide();

            $('#u_month_blessing_div').css('display', 'none');
            $('#u_week_blessing_div').css('display', 'block');
            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.model.user_id = JSON.parse(localStorage.getItem('user_registerd'));
            this.fetch.get_user_city(this.model.user_id).subscribe(function (res) {
              if (res['success'] == true) {
                _this.fetch.get_top_donors(res.data['city']).subscribe(function (res2) {
                  _this.model.top_donors = res2.data;
                });
              }
            });
            this.fetch.show_feedback(this.model.user_id).subscribe(function (res) {
              _this.model.feedback_data = res.data;
            });
            var user = JSON.stringify({
              'id': this.model.user_id
            });
            this.fetch.profile(user).subscribe(function (res) {
              _this.model.login_username = res['username'];
            });
            this.fetch.pending_donation(this.model.user_id).subscribe(function (res) {
              _this.pending_data = res['data'];
            });
            this.fetch.my_alloted_donation(this.model.user_id).subscribe(function (res) {
              _this.alloted_food = res['data'];

              _this.alloted_food.forEach(function (val, i) {
                var startTime = new Date(val.updated_at);
                var endTime = new Date();
                var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds

                var resultInMinutes = Math.round(difference / 60000);
                val.resultInMinutes = resultInMinutes;
              });

              $('#add_location_spinner').hide();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.options = {
              enableHighAccuracy: false
            };
            this.geolocation.getCurrentPosition(this.options).then(function (resp) {
              _this2.model.recLat = resp.coords.latitude;
              _this2.model.recLng = resp.coords.longitude;
            });
            var lang_code = JSON.parse(localStorage.getItem('lang'));
            var res = this.storage.getScope(); //	this.fetch.getKeyText(lang_code).subscribe(res => {

            var item1 = res.find(function (i) {
              return i.key_text === 'WEEKLY';
            });
            this.model.key_text1 = item1[lang_code];
            var item2 = res.find(function (i) {
              return i.key_text === 'MONTHLY';
            });
            this.model.key_text2 = item2[lang_code];
            var item3 = res.find(function (i) {
              return i.key_text === 'BLESSINGS_THIS_WEEK';
            });
            this.model.key_text3 = item3[lang_code];
            var item4 = res.find(function (i) {
              return i.key_text === 'BLESSINGS_THIS_MONTH';
            });
            this.model.key_text4 = item4[lang_code];
            var item5 = res.find(function (i) {
              return i.key_text === 'HOME';
            });
            this.model.key_text5 = item5[lang_code];
            var item6 = res.find(function (i) {
              return i.key_text === 'ACTIVITY';
            });
            this.model.key_text6 = item6[lang_code];
            var item7 = res.find(function (i) {
              return i.key_text === 'VOLUNTEER';
            });
            this.model.key_text7 = item7[lang_code];
            var item8 = res.find(function (i) {
              return i.key_text === 'TOTAL_BLESSINGS';
            });
            this.model.key_text8 = item8[lang_code];
            var item9 = res.find(function (i) {
              return i.key_text === 'TOP_DONORS_FROM_YOUR_CITY';
            });
            this.model.key_text9 = item9[lang_code];
            var item10 = res.find(function (i) {
              return i.key_text === 'DONATIONS';
            });
            this.model.key_text10 = item10[lang_code];
            var item11 = res.find(function (i) {
              return i.key_text === 'YOUR_PENDING_DONATIONS';
            });
            this.model.key_text11 = item11[lang_code];
            var item12 = res.find(function (i) {
              return i.key_text === 'FOOD_FOR';
            });
            this.model.key_text12 = item12[lang_code];
            var item13 = res.find(function (i) {
              return i.key_text === 'PERSONS';
            });
            this.model.key_text13 = item13[lang_code];
            var item14 = res.find(function (i) {
              return i.key_text === 'AVERAGE_RATING';
            });
            this.model.key_text14 = item14[lang_code];
            var item15 = res.find(function (i) {
              return i.key_text === 'SAYS';
            });
            this.model.key_text15 = item15[lang_code];
            var item16 = res.find(function (i) {
              return i.key_text === 'ALLOTED_DONATION';
            });
            this.model.key_text16 = item16[lang_code];
            var item17 = res.find(function (i) {
              return i.key_text === 'YOUR_PENDING_REQUEST';
            });
            this.model.key_text17 = item17[lang_code];
            var item18 = res.find(function (i) {
              return i.key_text === 'YOUR_ALLOTED_REQUEST';
            });
            this.model.key_text18 = item18[lang_code];
            var item19 = res.find(function (i) {
              return i.key_text === 'AS_A_RECEIVER';
            });
            this.model.key_text19 = item19[lang_code];
            var item20 = res.find(function (i) {
              return i.key_text === 'AS_A_DONAR';
            });
            this.model.key_text20 = item20[lang_code];
            var item21 = res.find(function (i) {
              return i.key_text === 'CANCEL_DONATION_MSG';
            });
            this.model.key_text21 = item21[lang_code];
            var item22 = res.find(function (i) {
              return i.key_text === 'OKAY';
            });
            this.model.key_text22 = item22[lang_code];
            var item23 = res.find(function (i) {
              return i.key_text === 'CANCEL';
            });
            this.model.key_text23 = item23[lang_code];
            var item24 = res.find(function (i) {
              return i.key_text === 'ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_REQUEST';
            });
            this.model.key_text24 = item24[lang_code];
            var item25 = res.find(function (i) {
              return i.key_text === 'CANCEL_ALLOTED_DONATION_MSG';
            });
            this.model.key_text25 = item25[lang_code];
            var item26 = res.find(function (i) {
              return i.key_text === 'FOOD_QUALITY';
            });
            this.model.key_text26 = item26[lang_code];
            var item27 = res.find(function (i) {
              return i.key_text === 'PACKAGING';
            });
            this.model.key_text27 = item27[lang_code];
            var item28 = res.find(function (i) {
              return i.key_text === 'BEHAVIOUR';
            });
            this.model.key_text28 = item28[lang_code];
            var item29 = res.find(function (i) {
              return i.key_text === 'EXCELLENT';
            });
            this.model.key_text29 = item29[lang_code];
            var item30 = res.find(function (i) {
              return i.key_text === 'GOOD';
            });
            this.model.key_text30 = item30[lang_code];
            var item31 = res.find(function (i) {
              return i.key_text === 'BAD';
            });
            this.model.key_text31 = item31[lang_code]; //});

            this.weekly_donation_graph();
            this.weekly_pieChart();
          }
        }, {
          key: "handleTab",
          value: function handleTab(id) {
            var _this3 = this;

            if (id == 1) {
              $('#add_location_spinner').show();
              this.model.receivertab = 1;
              this.model.donartab = 0;
              $('.rec').addClass('btn1 active');
              $('.rec').css('border', '1px solid #419B95');
              $('.donar').removeClass('btn1 active');
              $('.donar').css('border', 'none');
              this.fetch.my_food_request(this.model.user_id).subscribe(function (res) {
                _this3.request_food = res['data'];
              });
              this.fetch.my_alloted_request(this.model.user_id).subscribe(function (res) {
                $('#add_location_spinner').hide();
                _this3.alloted_request_food = res['data'];
              });
            } else {
              this.model.receivertab = 0;
              this.model.donartab = 1;
              $('.rec').removeClass('btn1 active');
              $('.rec').css('border', 'none');
              $('.donar').css('border', '1px solid #419B95');
              $('.donar').addClass('btn1 active');
            }
          }
        }, {
          key: "share",
          value: function share(message) {
            var m = message + '\n\n';
            document.addEventListener("deviceready", function () {
              window.plugins.socialsharing.share(m, 'Khana app', '', 'https://play.google.com/store/apps/details?id=com.food.forAll');
            }, false);
          }
        }, {
          key: "call",
          value: function call(number) {
            var _this4 = this;

            var data = JSON.stringify({
              'caller_id': this.model.user_id,
              'callee_mobile_no': number
            });
            this.fetch.add_call_detail(data).subscribe(function (res) {
              _this4.callNumber.callNumber(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].phone_no, true).then(function (res) {
                console.log('Launched dialer!', res);
              })["catch"](function (err) {
                return console.log('Error launching dialer', err);
              });
            });
          }
        }, {
          key: "cancelAllotedRequest",
          value: function cancelAllotedRequest(id, food_id, donar_id, no_of_person, food_type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      $('#add_location_spinner').show();
                      _context.next = 3;
                      return this.modalController.create({
                        component: _modal_cancel_allotedfood_cancel_allotedfood_page__WEBPACK_IMPORTED_MODULE_6__["CancelAllotedfoodPage"],
                        cssClass: 'custom_filter_modal cancel_allot_food_popup',
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title",
                          "id": id,
                          "type": 'get_food'
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this5.dataReturned = dataReturned.data;

                          if (_this5.dataReturned == 1) {
                            var data = JSON.stringify({
                              'food_id': food_id,
                              'logged_in_user': _this5.model.login_username,
                              'no_of_person': no_of_person,
                              'app_user_id': _this5.model.user_id,
                              'food_type': food_type,
                              'notification_type': 3,
                              'to': donar_id,
                              'from': _this5.model.user_id,
                              'getFoodId': id
                            }); //console.log(data);

                            _this5.fetch.notify_donar(data).subscribe(function (res) {
                              _this5.fetch.my_alloted_request(_this5.model.user_id).subscribe(function (res) {
                                _this5.alloted_request_food = res['data'];
                                $('#add_location_spinner').hide(); //console.log(this.alloted_request_food.length);
                              });
                            });
                          } //alert('Modal Sent Data :'+ dataReturned);

                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      $('#add_location_spinner').show();
                      _context2.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class custom_alert_1',
                        //header: 'Alert',
                        message: this.model.key_text21,
                        buttons: [{
                          text: this.model.key_text23,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            $('#add_location_spinner').hide();
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: this.model.key_text22,
                          handler: function handler() {
                            var data = JSON.stringify({
                              'donate_food_id': id
                            });

                            _this6.fetch.cancel_donation_food(data).subscribe(function (res) {
                              _this6.fetch.pending_donation(_this6.model.user_id).subscribe(function (res) {
                                _this6.pending_data = res['data'];
                              });

                              _this6.fetch.my_alloted_donation(_this6.model.user_id).subscribe(function (res) {
                                _this6.alloted_food = res['data'];

                                _this6.alloted_food.forEach(function (val, i) {
                                  var startTime = new Date(val.updated_at);
                                  var endTime = new Date();
                                  var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds

                                  var resultInMinutes = Math.round(difference / 60000);
                                  val.resultInMinutes = resultInMinutes;
                                });

                                $('#add_location_spinner').hide();
                              });
                            });
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancelRequestFood",
          value: function cancelRequestFood(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      $('#add_location_spinner').show();
                      _context3.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        //header: 'Alert',
                        message: this.model.key_text24,
                        buttons: [{
                          text: this.model.key_text23,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            $('#add_location_spinner').show();
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: this.model.key_text22,
                          handler: function handler() {
                            var data = JSON.stringify({
                              'id': id
                            });

                            _this7.fetch.cancel_requested_food(data).subscribe(function (res) {
                              _this7.fetch.my_food_request(_this7.model.user_id).subscribe(function (res) {
                                _this7.request_food = res['data'];
                                $('#add_location_spinner').hide();
                              });
                            });
                          }
                        }]
                      });

                    case 3:
                      alert = _context3.sent;
                      _context3.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "activeDonation",
          value: function activeDonation(id) {
            var _this8 = this;

            var data = JSON.stringify({
              'id': id
            });
            this.fetch.active_donation(data).subscribe(function (res) {
              _this8.ngOnInit();
            });
          }
        }, {
          key: "cancelAllotedFood",
          value: function cancelAllotedFood(id, donate_food_id, donar_id, receiver_id, no_of_person) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      $('#add_location_spinner').show();
                      _context4.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        //header: 'Alert',
                        message: this.model.key_text25,
                        buttons: [{
                          text: this.model.key_text23,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            $('#add_location_spinner').hide();
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: this.model.key_text22,
                          handler: function handler() {
                            var data = JSON.stringify({
                              'id': id,
                              'donate_food_id': donate_food_id,
                              'donar_id': donar_id,
                              'receiver_id': receiver_id,
                              'notification_type': 4,
                              'logged_in_username': _this9.model.login_username,
                              'no_of_person': no_of_person
                            });

                            _this9.fetch.cancel_alloted_food(data).subscribe(function (res) {
                              _this9.fetch.pending_donation(_this9.model.user_id).subscribe(function (res) {
                                _this9.pending_data = res['data'];
                              });

                              _this9.fetch.my_alloted_donation(_this9.model.user_id).subscribe(function (res) {
                                _this9.alloted_food = res['data'];

                                _this9.alloted_food.forEach(function (val, i) {
                                  var startTime = new Date(val.updated_at);
                                  var endTime = new Date();
                                  var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds

                                  var resultInMinutes = Math.round(difference / 60000);
                                  val.resultInMinutes = resultInMinutes;
                                });

                                $('#add_location_spinner').hide();
                              });
                            });
                          }
                        }]
                      });

                    case 3:
                      alert = _context4.sent;
                      _context4.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "plotSimpleBarChart",
          value: function plotSimpleBarChart(data, cat, min, max, tickInterval) {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_7__["chart"]('highcharts', {
              chart: {
                type: 'spline',
                backgroundColor: '#F7F6F4',
                height: 200
              },
              credits: {
                enabled: false
              },
              title: {
                text: ''
              },
              xAxis: {
                categories: cat
              },
              yAxis: {
                gridLineWidth: 0,
                min: min,
                max: max,
                tickInterval: tickInterval,
                tickPixelInterval: 1,
                title: {
                  text: ''
                }
              },
              plotOptions: {
                series: {
                  marker: {
                    enabled: false
                  }
                }
              },
              series: [{
                name: '',
                type: undefined,
                color: '#419B95',
                data: data
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 1000);
          }
        }, {
          key: "weekly_donation_graph",
          value: function weekly_donation_graph() {
            var _this10 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.donation_graph_data = [];
            this.fetch.weekly_donation_graph(this.model.user_id).subscribe(function (res) {
              for (var i = 0; i < 7; i++) {
                _this10.donation_graph_data.push(0);
              }

              var calcmax = 12;

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].day;
                _this10.donation_graph_data[index] = res.data[j].cnt;

                if (res.data[j].cnt > calcmax) {
                  calcmax = res.data[j].cnt;
                }
              }

              _this10.model.xcat = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
              _this10.model.min = 0;
              _this10.model.max = calcmax;
              _this10.model.tickInterval = 4;

              _this10.plotSimpleBarChart(_this10.donation_graph_data, _this10.model.xcat, _this10.model.min, _this10.model.max, _this10.model.tickInterval);
            });
            this.fetch.blessings_this_week(this.model.user_id).subscribe(function (res) {
              _this10.model.blessing_this_week = res.data[0].total_donation;
              _this10.model.blessing_quote = "week";
            });
            this.fetch.total_blessings(this.model.user_id).subscribe(function (res) {
              _this10.model.total_blessings = res.data[0].total_donation;
            });
          }
        }, {
          key: "monthly_donation_graph",
          value: function monthly_donation_graph() {
            var _this11 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.donation_graph_data = [];
            this.fetch.monthly_donation_graph(this.model.user_id).subscribe(function (res) {
              _this11.donation_graph_data = [0, 0, 0, 0];

              for (var j = 0; j < res.data.length; j++) {
                var index = res.data[j].Week_no - 1;
                _this11.donation_graph_data[index] = res.data[j].cnt;
              }

              _this11.model.xcat = ['Week1', 'Week2', 'Week3', 'Week4'];
              _this11.model.min = 0;
              _this11.model.max = 60;
              _this11.model.tickInterval = 20;

              _this11.plotSimpleBarChart(_this11.donation_graph_data, _this11.model.xcat, _this11.model.min, _this11.model.max, _this11.model.tickInterval);
            });
            this.fetch.blessings_this_month(this.model.user_id).subscribe(function (res) {
              _this11.model.blessing_this_week = res.data[0].total_donation;
              _this11.model.blessing_quote = "month";
            });
            this.fetch.total_blessings(this.model.user_id).subscribe(function (res) {
              _this11.model.total_blessings = res.data[0].total_donation;
            });
          }
        }, {
          key: "pie_chart_food_quality",
          value: function pie_chart_food_quality(e, g, b) {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_7__["chart"]('food_quality', {
              chart: {
                type: 'pie',
                backgroundColor: '#F7F6F4',
                plotBackgroundColor: '#F7F6F4',
                plotBorderWidth: null,
                plotShadow: false,
                height: 300
              },
              credits: {
                enabled: false
              },
              title: {
                text: this.model.key_text26
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  }
                }
              },
              series: [{
                name: '',
                type: undefined,
                data: [{
                  name: this.model.key_text29,
                  y: e,
                  color: "#32CD32"
                }, {
                  name: this.model.key_text30,
                  y: g,
                  color: "orange"
                }, {
                  name: this.model.key_text31,
                  y: b,
                  color: "red"
                }]
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 1000);
          }
        }, {
          key: "packagingPieChart",
          value: function packagingPieChart(e, g, b) {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_7__["chart"]('packaging', {
              chart: {
                type: 'pie',
                backgroundColor: '#F7F6F4',
                plotBackgroundColor: '#F7F6F4',
                plotBorderWidth: null,
                plotShadow: false,
                height: 300
              },
              title: {
                text: this.model.key_text27
              },
              credits: {
                enabled: false
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  }
                }
              },
              series: [{
                name: '',
                type: undefined,
                data: [{
                  name: this.model.key_text29,
                  y: e,
                  color: "#32CD32"
                }, {
                  name: this.model.key_text30,
                  y: g,
                  color: "orange"
                }, {
                  name: this.model.key_text31,
                  y: b,
                  color: "red"
                }]
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 1000);
          }
        }, {
          key: "behaviourPieChart",
          value: function behaviourPieChart(e, g, b) {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_7__["chart"]('behaviour', {
              chart: {
                type: 'pie',
                backgroundColor: '#F7F6F4',
                plotBackgroundColor: '#F7F6F4',
                plotBorderWidth: null,
                plotShadow: false,
                height: 300
              },
              title: {
                text: this.model.key_text28
              },
              credits: {
                enabled: false
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  }
                }
              },
              series: [{
                name: '',
                type: undefined,
                data: [{
                  name: this.model.key_text29,
                  y: e,
                  color: "#32CD32"
                }, {
                  name: this.model.key_text30,
                  y: g,
                  color: "orange"
                }, {
                  name: this.model.key_text31,
                  y: b,
                  color: "red"
                }]
              }]
            });
            setTimeout(function () {
              myChart.reflow();
            }, 1000);
          }
        }, {
          key: "state",
          value: function state() {
            $('#activity_normal_content').css('display', 'none');
            $('#activity_normal_spinner').css('display', 'block');

            if ($('input[name=switch-one]:checked', '#myForm').val() == "no") {
              $('#u_week_blessing_div').css('display', 'none');
              $('#u_month_blessing_div').css('display', 'block');
              this.monthly_donation_graph();
              this.monthly_pieChart();
            } else if ($('input[name=switch-one]:checked', '#myForm').val() == "yes") {
              $('#u_month_blessing_div').css('display', 'none');
              $('#u_week_blessing_div').css('display', 'block');
              this.weekly_donation_graph();
              this.weekly_pieChart();
            }
          }
        }, {
          key: "weekly_pieChart",
          value: function weekly_pieChart() {
            var _this12 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.fetch.food_quality_weekly(this.model.user_id).subscribe(function (res) {
              _this12.model.excellent_cnt = res['excellent']['cnt'];
              _this12.model.good_cnt = res.good.cnt;
              _this12.model.bad_cnt = res.bad.cnt;

              if (_this12.model.excellent_cnt > _this12.model.good_cnt && _this12.model.excellent_cnt > _this12.model.bad_cnt) {
                _this12.model.quality_rating = _this12.model.key_text29;
              } else if (_this12.model.good_cnt > _this12.model.excellent_cnt && _this12.model.good_cnt > _this12.model.bad_cnt) {
                _this12.model.quality_rating = _this12.model.key_text30;
              } else if (_this12.model.bad_cnt > _this12.model.excellent_cnt && _this12.model.bad_cnt > _this12.model.good_cnt) {
                _this12.model.quality_rating = _this12.model.key_text31;
              }

              _this12.pie_chart_food_quality(_this12.model.excellent_cnt, _this12.model.good_cnt, _this12.model.bad_cnt);
            });
            this.fetch.weekly_packaging(this.model.user_id).subscribe(function (res) {
              _this12.model.excellent_cnt = res['excellent']['cnt'];
              _this12.model.good_cnt = res.good.cnt;
              _this12.model.bad_cnt = res.bad.cnt;

              if (_this12.model.excellent_cnt > _this12.model.good_cnt && _this12.model.excellent_cnt > _this12.model.bad_cnt) {
                _this12.model.packaging_rating = _this12.model.key_text29;
              } else if (_this12.model.good_cnt > _this12.model.excellent_cnt && _this12.model.good_cnt > _this12.model.bad_cnt) {
                _this12.model.packaging_rating = _this12.model.key_text30;
              } else if (_this12.model.bad_cnt > _this12.model.excellent_cnt && _this12.model.bad_cnt > _this12.model.good_cnt) {
                _this12.model.packaging_rating = _this12.model.key_text31;
              }

              _this12.packagingPieChart(_this12.model.excellent_cnt, _this12.model.good_cnt, _this12.model.bad_cnt);
            });
            this.fetch.weekly_behaviour(this.model.user_id).subscribe(function (res) {
              _this12.model.excellent_cnt = res['excellent']['cnt'];
              _this12.model.good_cnt = res.good.cnt;
              _this12.model.bad_cnt = res.bad.cnt;

              if (_this12.model.excellent_cnt > _this12.model.good_cnt && _this12.model.excellent_cnt > _this12.model.bad_cnt) {
                _this12.model.behaviour_rating = _this12.model.key_text29;
              } else if (_this12.model.good_cnt > _this12.model.excellent_cnt && _this12.model.good_cnt > _this12.model.bad_cnt) {
                _this12.model.behaviour_rating = _this12.model.key_text30;
              } else if (_this12.model.bad_cnt > _this12.model.excellent_cnt && _this12.model.bad_cnt > _this12.model.good_cnt) {
                _this12.model.behaviour_rating = _this12.model.key_text31;
              }

              _this12.behaviourPieChart(_this12.model.excellent_cnt, _this12.model.good_cnt, _this12.model.bad_cnt);
            });
          }
        }, {
          key: "monthly_pieChart",
          value: function monthly_pieChart() {
            var _this13 = this;

            setTimeout(function () {
              $('#activity_normal_spinner').css('display', 'none');
              $('#activity_normal_content').css('display', 'block');
            }, 100);
            this.fetch.monthly_food_quality(this.model.user_id).subscribe(function (res) {
              _this13.model.excellent_cnt = res['excellent']['cnt'];
              _this13.model.good_cnt = res.good.cnt;
              _this13.model.bad_cnt = res.bad.cnt;

              if (_this13.model.excellent_cnt > _this13.model.good_cnt && _this13.model.excellent_cnt > _this13.model.bad_cnt) {
                _this13.model.quality_rating = _this13.model.key_text29;
              } else if (_this13.model.good_cnt > _this13.model.excellent_cnt && _this13.model.good_cnt > _this13.model.bad_cnt) {
                _this13.model.quality_rating = _this13.model.key_text30;
              } else if (_this13.model.bad_cnt > _this13.model.excellent_cnt && _this13.model.bad_cnt > _this13.model.good_cnt) {
                _this13.model.quality_rating = _this13.model.key_text31;
              }

              _this13.pie_chart_food_quality(_this13.model.excellent_cnt, _this13.model.good_cnt, _this13.model.bad_cnt);
            });
            this.fetch.monthly_packaging(this.model.user_id).subscribe(function (res) {
              _this13.model.excellent_cnt = res['excellent']['cnt'];
              _this13.model.good_cnt = res.good.cnt;
              _this13.model.bad_cnt = res.bad.cnt;

              if (_this13.model.excellent_cnt > _this13.model.good_cnt && _this13.model.excellent_cnt > _this13.model.bad_cnt) {
                _this13.model.packaging_rating = _this13.model.key_text29;
              } else if (_this13.model.good_cnt > _this13.model.excellent_cnt && _this13.model.good_cnt > _this13.model.bad_cnt) {
                _this13.model.packaging_rating = _this13.model.key_text30;
              } else if (_this13.model.bad_cnt > _this13.model.excellent_cnt && _this13.model.bad_cnt > _this13.model.good_cnt) {
                _this13.model.packaging_rating = _this13.model.key_text31;
              }

              _this13.packagingPieChart(_this13.model.excellent_cnt, _this13.model.good_cnt, _this13.model.bad_cnt);
            });
            this.fetch.monthly_behaviour(this.model.user_id).subscribe(function (res) {
              _this13.model.excellent_cnt = res['excellent']['cnt'];
              _this13.model.good_cnt = res.good.cnt;
              _this13.model.bad_cnt = res.bad.cnt;

              if (_this13.model.excellent_cnt > _this13.model.good_cnt && _this13.model.excellent_cnt > _this13.model.bad_cnt) {
                _this13.model.behaviour_rating = _this13.model.key_text29;
              } else if (_this13.model.good_cnt > _this13.model.excellent_cnt && _this13.model.good_cnt > _this13.model.bad_cnt) {
                _this13.model.behaviour_rating = _this13.model.key_text30;
              } else if (_this13.model.bad_cnt > _this13.model.excellent_cnt && _this13.model.bad_cnt > _this13.model.good_cnt) {
                _this13.model.behaviour_rating = _this13.model.key_text31;
              }

              _this13.behaviourPieChart(_this13.model.excellent_cnt, _this13.model.good_cnt, _this13.model.bad_cnt);
            });
          }
        }]);

        return ActivityNormalPage;
      }();

      ActivityNormalPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"]
        }, {
          type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_9__["BrowserTab"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]
        }];
      };

      ActivityNormalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activity-normal',
        template: _raw_loader_activity_normal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]],
        styles: [_activity_normal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ActivityNormalPage);
      /***/
    },

    /***/
    "vYF8":
    /*!***********************************************************!*\
      !*** ./src/app/activity-normal/activity-normal.module.ts ***!
      \***********************************************************/

    /*! exports provided: ActivityNormalPageModule */

    /***/
    function vYF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityNormalPageModule", function () {
        return ActivityNormalPageModule;
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


      var _activity_normal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./activity-normal-routing.module */
      "YeSl");
      /* harmony import */


      var _activity_normal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./activity-normal.page */
      "ntK3");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../captcha/captcha.component */
      "ekeA");

      var ActivityNormalPageModule = function ActivityNormalPageModule() {
        _classCallCheck(this, ActivityNormalPageModule);
      };

      ActivityNormalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _activity_normal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityNormalPageRoutingModule"]],
        declarations: [_activity_normal_page__WEBPACK_IMPORTED_MODULE_6__["ActivityNormalPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"]]
      })], ActivityNormalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=activity-normal-activity-normal-module-es5.js.map