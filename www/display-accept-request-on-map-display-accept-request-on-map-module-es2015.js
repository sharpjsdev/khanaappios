(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["display-accept-request-on-map-display-accept-request-on-map-module"],{

/***/ "0mpz":
/*!***************************************************************************************!*\
  !*** ./src/app/display-accept-request-on-map/display-accept-request-on-map.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rpc3BsYXktYWNjZXB0LXJlcXVlc3Qtb24tbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiZGlzcGxheS1hY2NlcHQtcmVxdWVzdC1vbi1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NSU7XG59Il19 */");

/***/ }),

/***/ "77PC":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display-accept-request-on-map/display-accept-request-on-map.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-captcha></app-captcha>\n<ion-content>\n  <div class=\"custom_map_design\">\n  <div style=\"margin-left: 20px;\">\n    <div class=\"map-icon\">\n      <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_12\">\n        Wearning a mask in some public spaces is required due to COVID - 19\n      </div> \n    </div>\n  </div>\n  <div class=\"ion-padding res_ion_padding\">\n    <div class=\"btn-group\" style=\"margin-top: -12px;\">\n      <button class=\"grey regular btn4\" id=\"btn_drive\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('DRIVING', 2)\">\n          <img src=\"assets/images/{{model.bike_image}}\">\n          <!--<img src=\"assets/images/icon_donor_bike_white.svg\">-->\n        </div>\n        <div class=\"grey size_12\" id=\"text_bike_time\">\n          {{model.drive_time}}\n        </div>\n      </button>\n\n      <button class=\"grey regular btn4\" id=\"btn_bus\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('TRANSIT', 2)\">\n          <img src=\"assets/images/{{model.bus_image}}\">\n          <!-- <img src=\"assets/images/icon_donor_bus_white.svg\"> -->\n        </div>\n        <div class=\"grey size_12\" id=\"text_bus_time\">\n          {{model.public_time}}\n        </div>\n      </button>\n\n      <button class=\"grey regular btn4\" id=\"btn_walk\">\n        <div class=\"donor_icon\" (click)=\"calculate_route('WALKING', 2)\">\n          <img src=\"assets/images/{{model.walk_image}}\">\n          <!--<img src=\"assets/images/icon_donor_walk_white.svg\">-->\n        </div>\n        <div class=\"grey size_12\" id=\"text_walk_time\">\n         {{model.walk_time}}\n        </div>\n      </button>      \n      \n    </div>\n  </div>\n \n <!--  <div class=\"map volunteer_location\">    \n    <img src=\"assets/images/map_volunteer.svg\">\n  </div> -->\n  <div #map id=\"map\"></div>\n  <div class=\"\" style=\"margin-left:10px;\">\n    <p class=\"regular medium size_14 green\">{{time_c}} <span class=\"grey size_14\">({{distance_c}})</span></p>\n  </div>\n  <div style=\"margin-left:10px;\">\n    <div class=\"map-icon\">\n      <img src=\"assets/images/location_black.svg\">\n    </div>\n    <div class=\"map_desc\">      \n      <div class=\"regular size_14\"><span  style=\" color: orange;\">Food Drop Location</span>\n       <p class=\"address_size_2\">{{model.colony_name}}</p>\n      </div>      \n      \n    </div>\n\n  </div>\n</div>\n  \n  </ion-content> \n  <ion-footer style=\"padding-top: 0px!important;\">\n  <div class=\"medium size_16\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <button class=\"app_btn custom_reject_btn new_btn_css\"  (click)=\"rejectRequest()\">{{model.key_text1}}</button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <button class=\"app_btn custom_accept_btn new_btn_css\"  (click)=\"acceptRequest()\">{{model.key_text5}}</button>\n      </ion-col>\n    </ion-row>\n     \n  </div>\n  </ion-footer>\n  \n  ");

/***/ }),

/***/ "QGWy":
/*!***********************************************************************************************!*\
  !*** ./src/app/display-accept-request-on-map/display-accept-request-on-map-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: DisplayAcceptRequestOnMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayAcceptRequestOnMapPageRoutingModule", function() { return DisplayAcceptRequestOnMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _display_accept_request_on_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-accept-request-on-map.page */ "zZ1J");




const routes = [
    {
        path: '',
        component: _display_accept_request_on_map_page__WEBPACK_IMPORTED_MODULE_3__["DisplayAcceptRequestOnMapPage"]
    }
];
let DisplayAcceptRequestOnMapPageRoutingModule = class DisplayAcceptRequestOnMapPageRoutingModule {
};
DisplayAcceptRequestOnMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisplayAcceptRequestOnMapPageRoutingModule);



/***/ }),

/***/ "U/2Q":
/*!***************************************************************************************!*\
  !*** ./src/app/display-accept-request-on-map/display-accept-request-on-map.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DisplayAcceptRequestOnMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayAcceptRequestOnMapPageModule", function() { return DisplayAcceptRequestOnMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _display_accept_request_on_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-accept-request-on-map-routing.module */ "QGWy");
/* harmony import */ var _display_accept_request_on_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display-accept-request-on-map.page */ "zZ1J");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../captcha/captcha.component */ "ekeA");








let DisplayAcceptRequestOnMapPageModule = class DisplayAcceptRequestOnMapPageModule {
};
DisplayAcceptRequestOnMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _display_accept_request_on_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisplayAcceptRequestOnMapPageRoutingModule"]
        ],
        declarations: [_display_accept_request_on_map_page__WEBPACK_IMPORTED_MODULE_6__["DisplayAcceptRequestOnMapPage"], _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"]]
    })
], DisplayAcceptRequestOnMapPageModule);



/***/ }),

/***/ "ekeA":
/*!**********************************************!*\
  !*** ./src/app/captcha/captcha.component.ts ***!
  \**********************************************/
/*! exports provided: CaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function() { return CaptchaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./captcha.component.html */ "l+ky");
/* harmony import */ var _captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha.component.scss */ "oebF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let CaptchaComponent = class CaptchaComponent {
    constructor(fetch, router) {
        this.fetch = fetch;
        this.router = router;
        this.model = {};
        this.notification = [];
    }
    ngOnInit() {
        this.pageName = this.router['routerState'].snapshot.url;
        this.model.user_id = localStorage.getItem('user_id');
        this.fetch.get_notification(this.model.user_id).subscribe(res => {
            this.notification = res['data'];
            if (this.notification.length > 0) {
                $('#black_spot').show();
            }
        });
    }
    ngOnDestroy() {
        this.fetch.read_notification(this.model.user_id).subscribe(res => {
            $('#black_spot').hide();
        });
    }
};
CaptchaComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-captcha',
        template: _raw_loader_captcha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_captcha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CaptchaComponent);



/***/ }),

/***/ "l+ky":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/captcha/captcha.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"assets/images/icon_menu.svg\">\n        </ion-menu-button>\n        <ion-buttons slot=\"end\" *ngIf=\"pageName != '/home' \">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n       </ion-buttons>\n      </ion-buttons>\n      <!--<ion-title>home</ion-title>-->\n      <ion-buttons slot=\"end\" routerLink=\"/notification\">\n        <span  id=\"black_spot\" style=\"display:none;position: absolute;height: 10px;width: 10px;background-color: #000;border-radius: 50%;color: #fff;\n        top: -3px;right: 3px;text-align: center;\"></span>      \n          <img src=\"assets/images/icon_notification.svg\">\n      </ion-buttons>\n      \n     \n      \n    </ion-toolbar>\n  </ion-header>");

/***/ }),

/***/ "oebF":
/*!************************************************!*\
  !*** ./src/app/captcha/captcha.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0Y2hhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zZ1J":
/*!*************************************************************************************!*\
  !*** ./src/app/display-accept-request-on-map/display-accept-request-on-map.page.ts ***!
  \*************************************************************************************/
/*! exports provided: DisplayAcceptRequestOnMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayAcceptRequestOnMapPage", function() { return DisplayAcceptRequestOnMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_display_accept_request_on_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./display-accept-request-on-map.page.html */ "77PC");
/* harmony import */ var _display_accept_request_on_map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-accept-request-on-map.page.scss */ "0mpz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");









let DisplayAcceptRequestOnMapPage = class DisplayAcceptRequestOnMapPage {
    constructor(http, route, router, fetch, storage, geolocation) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.storage = storage;
        this.geolocation = geolocation;
        this.model = {};
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directions = [];
        this.polylines = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.model.is_volunteer = 0;
        if (localStorage.getItem('volunteer_approve') != null) {
            this.model.is_volunteer = localStorage.getItem('volunteer_approve');
        }
        var lang_code = JSON.parse(localStorage.getItem('lang'));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find(i => i.key_text === 'REJECT');
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find(i => i.key_text === 'HOME');
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find(i => i.key_text === 'ACTIVITY');
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find(i => i.key_text === 'VOLUNTEER');
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find(i => i.key_text === 'ACCEPT');
        this.model.key_text5 = item5[lang_code];
        //});
        var data = this.route.snapshot.params['data'];
        this.id = this.route.snapshot.params['id'];
        this.id2 = this.route.snapshot.params['id2'];
        var x = JSON.parse(data);
        var donor = (x.donor_details);
        console.log(this.id, '', this.id2);
        console.log('volunteer', x);
        var no_of_person = x.no_of_person;
        localStorage.setItem('temp_total_food', no_of_person);
        var r_lat = x.latitude;
        var r_lon = x.longitude;
        this.model.r_id = x.app_user_id;
        this.model.f_id = x.id;
        this.model.r_lat = r_lat;
        this.model.r_lon = r_lon;
        this.model.food_id = donor.id;
        this.model.colony_name = donor.colony_name;
        this.model.add_id = donor.id;
        this.model.d_lat = donor.latitude;
        this.model.d_lon = donor.longitude;
        this.model.d_food_type = donor.food_type;
        if (x.time_distance_walking.rows[0].elements[0].status == 'OK') {
            this.model.walk_time = x.time_distance_walking.rows[0].elements[0].duration.text;
            this.model.walk_distance = x.time_distance_walking.rows[0].elements[0].distance.text;
        }
        else {
            this.model.walk_time = 0;
            this.model.walk_distance = 0;
        }
        if (x.time_distance_driving.rows[0].elements[0].status == 'OK') {
            this.model.drive_time = x.time_distance_driving.rows[0].elements[0].duration.text;
            this.model.drive_distance = x.time_distance_driving.rows[0].elements[0].distance.text;
        }
        else {
            this.model.drive_time = 0;
            this.model.drive_distance = 0;
        }
        if (x.time_distance_transit.rows[0].elements[0].status == 'OK') {
            this.model.public_time = x.time_distance_transit.rows[0].elements[0].duration.text;
            this.model.public_distance = x.time_distance_transit.rows[0].elements[0].distance.text;
        }
        else {
            this.model.public_time = 0;
            this.model.public_distance = 0;
        }
        this.geolocation.getCurrentPosition().then((resp) => {
            let latLng = new google.maps.LatLng(donor.latitude, donor.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.model.directionsService = new google.maps.DirectionsService();
            this.model.directionsDisplay = new google.maps.DirectionsRenderer();
            this.model.directionsDisplay.setMap(this.map);
            //directionsDisplay.setPanel(this.directionsPanel.nativeElement);
            this.calculate_route('WALKING');
            $("#btn_walk").addClass('active');
            $("#text_walk_time").removeClass('grey');
            $("#text_walk_time").css('color', 'white');
            this.model.walk_image = 'icon_donor_walk_white.svg';
            this.model.mode = 'WALKING';
        });
    }
    calculate_route(mode) {
        var infowindow = new google.maps.InfoWindow();
        var renderer = new google.maps.DirectionsRenderer({
            suppressPolylines: true,
            infoWindow: infowindow,
        });
        if (this.directions && this.directions.length > 0) {
            for (var i = 0; i < this.directions.length; i++)
                this.directions[i].setMap(null);
        }
        this.directions = [];
        this.model.directionsDisplay.setMap(null);
        this.model.directionsDisplay.setDirections({ routes: [] });
        this.model.directionsDisplay.setMap(this.map);
        this.model.mode = mode;
        if (mode == 'WALKING') {
            this.time_c = this.model.walk_time;
            this.distance_c = this.model.walk_distance;
            $("#btn_walk").addClass('active');
            $("#btn_drive").removeClass('active');
            $("#btn_bus").removeClass('active');
            $("#text_walk_time").removeClass('grey');
            $("#text_bus_time").addClass('grey');
            $("#text_bike_time").addClass('grey');
            $("#text_walk_time").css('color', 'white');
            this.model.walk_image = 'icon_donor_walk_white.svg';
            this.model.bus_image = 'icon_donor_bus.svg';
            this.model.bike_image = 'icon_donor_bike.svg';
        }
        else if (mode == 'TRANSIT') {
            this.time_c = this.model.public_time;
            this.distance_c = this.model.public_distance;
            $("#btn_bus").addClass('active');
            $("#btn_drive").removeClass('active');
            $("#btn_walk").removeClass('active');
            $("#text_bus_time").removeClass('grey');
            $("#text_walk_time").addClass('grey');
            $("#text_bike_time").addClass('grey');
            $("#text_bus_time").css('color', 'white');
            this.model.bus_image = 'icon_donor_bus_white.svg';
            this.model.walk_image = 'icon_donor_walk.svg';
            this.model.bike_image = 'icon_donor_bike.svg';
        }
        else if (mode == 'DRIVING') {
            this.time_c = this.model.drive_time;
            this.distance_c = this.model.drive_distance;
            $("#btn_drive").addClass('active');
            $("#btn_bus").removeClass('active');
            $("#btn_walk").removeClass('active');
            $("#text_bike_time").removeClass('grey');
            $("#text_walk_time").addClass('grey');
            $("#text_bus_time").addClass('grey');
            $("#text_bike_time").css('color', 'white');
            this.model.bike_image = 'icon_donor_bike_white.svg';
            this.model.walk_image = 'icon_donor_walk.svg';
            this.model.bus_image = 'icon_donor_bus.svg';
        }
        /*const s_latlng = {
          lat : 23.1827,
          lng : 75.7682
        }*/
        this.model.directionsService.route({
            origin: this.model.r_lat + ", " + this.model.r_lon,
            destination: this.model.d_lat + ", " + this.model.d_lon,
            travelMode: google.maps.TravelMode[mode],
            provideRouteAlternatives: true,
        }, (res, status) => {
            if (status == google.maps.DirectionsStatus.OK) {
                renderer.setDirections(res);
                renderer.setMap(this.map);
                for (var i = 0; i < this.polylines.length; i++) {
                    this.polylines[i].setMap(null);
                }
                for (var i = 0; i < res.routes.length; i++) {
                    var fastest = Number.MAX_VALUE, shortest = Number.MAX_VALUE;
                    res.routes.forEach(function (rou, index) {
                        console.log("distance of route " + index + ": ", rou.legs[0].distance.value);
                        console.log("duration of route " + index + ": ", rou.legs[0].duration.value);
                        if (rou.legs[0].distance.value < shortest)
                            shortest = rou.legs[0].distance.value;
                        if (rou.legs[0].duration.value < fastest)
                            fastest = rou.legs[0].duration.value;
                    });
                    var polylineOptions = {
                        strokeColor: res.routes[i].legs[0].duration.value == fastest ? "#22A7F0" : res.routes[i].legs[0].distance.value == shortest ? "#585858" : "#585858",
                        strokeOpacity: res.routes[i].legs[0].duration.value == fastest ? 0.8 : res.routes[i].legs[0].distance.value == shortest ? 0.9 : 0.5,
                        strokeWeight: res.routes[i].legs[0].duration.value == fastest ? 9 : res.routes[i].legs[0].distance.value == shortest ? 8 : 3,
                    };
                    this.renderDirectionsPolylines(res.routes[i], polylineOptions);
                }
            }
            else {
                console.warn(status);
            }
        });
    }
    renderDirectionsPolylines(response, polylineOptions) {
        console.log(response);
        var infowindow = new google.maps.InfoWindow();
        var legs = response.legs;
        for (var i = 0; i < legs.length; i++) {
            var steps = legs[i].steps;
            for (var j = 0; j < steps.length; j++) {
                var nextSegment = steps[j].path;
                var stepPolyline = new google.maps.Polyline(polylineOptions);
                for (var k = 0; k < nextSegment.length; k++) {
                    stepPolyline.getPath().push(nextSegment[k]);
                }
                this.polylines.push(stepPolyline);
                stepPolyline.setMap(this.map);
                // route click listeners, different one on each step
                google.maps.event.addListener(stepPolyline, 'click', function (evt) {
                    //stepPolyline.setOptions({strokeColor: '#FF0000'});
                    console.log(response.legs[0].duration.text);
                    infowindow.setContent(response.legs[0].duration.text);
                    infowindow.setPosition(evt.latLng);
                    infowindow.open(this.map);
                });
            }
        }
    }
    rejectRequest() {
        var formData = new FormData();
        formData.append("receiver_id", this.model.r_id);
        formData.append("get_food_id", this.model.f_id);
        this.fetch.reject_food_request_by_donee(formData).subscribe(res => {
        });
        this.router.navigate(['/choose-screen-after-reject', this.model.food_id, this.model.r_id, this.model.f_id]);
    }
    acceptRequest() {
        var formData = new FormData();
        formData.append("receiver_id", this.model.r_id);
        formData.append("food_id", this.model.food_id);
        formData.append("no_of_people", localStorage.getItem('temp_total_food'));
        this.fetch.donee_accept_food(formData).subscribe(res => {
            this.router.navigate(['/get-food-nearest-donors-two', this.model.add_id, this.model.r_lat, this.model.r_lon, this.model.r_id, this.model.mode, this.model.d_food_type, this.model.f_id]);
        });
    }
};
DisplayAcceptRequestOnMapPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_5__["FetchService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] }
];
DisplayAcceptRequestOnMapPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
DisplayAcceptRequestOnMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-display-accept-request-on-map',
        template: _raw_loader_display_accept_request_on_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_display_accept_request_on_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DisplayAcceptRequestOnMapPage);



/***/ })

}]);
//# sourceMappingURL=display-accept-request-on-map-display-accept-request-on-map-module-es2015.js.map