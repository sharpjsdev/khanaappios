(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["on-the-way-search-on-the-way-search-module"],{

/***/ "BWGN":
/*!***************************************************************!*\
  !*** ./src/app/on-the-way-search/on-the-way-search.module.ts ***!
  \***************************************************************/
/*! exports provided: OnTheWaySearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTheWaySearchPageModule", function() { return OnTheWaySearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _on_the_way_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-the-way-search-routing.module */ "UbH3");
/* harmony import */ var _on_the_way_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-the-way-search.page */ "C5Ha");







let OnTheWaySearchPageModule = class OnTheWaySearchPageModule {
};
OnTheWaySearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _on_the_way_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnTheWaySearchPageRoutingModule"]
        ],
        declarations: [_on_the_way_search_page__WEBPACK_IMPORTED_MODULE_6__["OnTheWaySearchPage"]]
    })
], OnTheWaySearchPageModule);



/***/ }),

/***/ "C5Ha":
/*!*************************************************************!*\
  !*** ./src/app/on-the-way-search/on-the-way-search.page.ts ***!
  \*************************************************************/
/*! exports provided: OnTheWaySearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTheWaySearchPage", function() { return OnTheWaySearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_on_the_way_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./on-the-way-search.page.html */ "OY+2");
/* harmony import */ var _on_the_way_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-the-way-search.page.scss */ "y2dc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "h+qT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fetch.service */ "RPep");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












let OnTheWaySearchPage = class OnTheWaySearchPage {
    constructor(geolocation, nativeGeocoder, alertController, route, router, fetch, platform, location, zone, modal, storage) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.fetch = fetch;
        this.platform = platform;
        this.location = location;
        this.zone = zone;
        this.modal = modal;
        this.storage = storage;
        this.voldata = [];
        this.volarr = [];
        this.pointarr = [];
        this.checkarr = [];
        this.volresult = [];
        this.finalarr = [];
        this.result2 = [];
        this.fooddata = [];
        this.finalfood = [];
        this.autocomplete = {};
        this.req_data = [];
        this.latitude = 0;
        this.longitude = 0;
        this.service = new google.maps.places.AutocompleteService();
        this.model = {};
        this.waypoints = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.markers = [];
        this.infowindow = new google.maps.InfoWindow();
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.location.back();
        });
        this.sources = [];
        this.destination = [];
        this.autocomplete = {
            start: "",
            end: "",
        };
    }
    ngOnInit() {
        this.model.user_id = JSON.parse(localStorage.getItem("user_registerd"));
    }
    ionViewWillEnter() {
        var start = localStorage.getItem("temp_start_address");
        var end = localStorage.getItem("temp_end_address");
        this.id = this.route.snapshot.params["id"];
        this.id2 = this.route.snapshot.params["id2"];
        if (this.id != 0) {
            this.fetch.reviewFood(this.id).subscribe(res => {
                if (res) {
                    this.fooddata = res.data;
                    this.fooddata.push(this.autocomplete);
                }
            });
        }
        if (this.id2 != 0) {
            this.fetch.reviewFood(this.id2).subscribe(res => {
                if (res) {
                    this.fooddata = res.data;
                    this.fooddata.push(this.autocomplete);
                }
            });
        }
        if (start) {
            this.autocomplete.start = start;
            console.log("staaarrrtt:", start);
        }
        if (end) {
            this.autocomplete.end = end;
            console.log("endddd:", end);
        }
        var self = this;
        self.options = {
            enableHighAccuracy: false,
        };
        self.geolocation.getCurrentPosition(self.options).then((resp) => {
            self.model.LastLat = resp.coords.latitude;
            self.model.LastLng = resp.coords.longitude;
            let latLng = new google.maps.LatLng(self.model.LastLat, self.model.LastLng);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            self.map = new google.maps.Map(self.mapElement.nativeElement, mapOptions);
            self.directionsRenderer.setMap(self.map);
        });
    }
    ionViewDidEnter() {
        var lang_code = JSON.parse(localStorage.getItem("lang"));
        //this.fetch.getKeyText(lang_code).subscribe(res => {
        let res = this.storage.getScope();
        let item1 = res.find((i) => i.key_text === "CONFIRM");
        this.model.key_text1 = item1[lang_code];
        let item2 = res.find((i) => i.key_text === "NO_VOLUNTEER_FOUND");
        this.model.key_text2 = item2[lang_code];
        let item3 = res.find((i) => i.key_text === "CLOSE");
        this.model.key_text3 = item3[lang_code];
        let item4 = res.find((i) => i.key_text === "CHOOSE_STARTING_POINT");
        this.model.key_text4 = item4[lang_code];
        let item5 = res.find((i) => i.key_text === "CHOOSE_DESTINATION");
        this.model.key_text5 = item5[lang_code];
    }
    dismissSource() {
        this.sources = [];
    }
    dismissDestination() {
        this.destination = [];
    }
    updateSources() {
        console.log("in");
        if (this.autocomplete.start != "") {
            this.geoCode(this.autocomplete.start, "start");
        }
    }
    updateDestinations() {
        if (this.autocomplete.end != "") {
            this.geoCode(this.autocomplete.end, "end");
        }
    }
    goToAddressSelection(type) {
        this.router.navigate(["/on-the-way-address", type]);
    }
    //convert Address string to lat and long
    geoCode(address, path) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, (results, status) => {
            var address_components = results[0].address_components;
            var self = this;
            if (path == "start") {
                address_components.forEach(function (val, i) {
                    console.log("-", val);
                    if (val.types[0] == "locality") {
                        self.model.city = val.long_name;
                    }
                    if (val.types[0] == "administrative_area_level_1") {
                        self.model.state = val.long_name;
                    }
                    if (val.types[0] == "country") {
                        self.model.country = val.long_name;
                    }
                    if (val.types[0] == "postal_code") {
                        self.model.postalCode = val.long_name;
                    }
                });
            }
            if (path == "end") {
                address_components.forEach(function (val, i) {
                    console.log("-", val);
                    if (val.types[0] == "locality") {
                        self.model.endCity = val.long_name;
                    }
                    if (val.types[0] == "administrative_area_level_1") {
                        self.model.endState = val.long_name;
                    }
                    if (val.types[0] == "country") {
                        self.model.endCountry = val.long_name;
                    }
                    if (val.types[0] == "postal_code") {
                        self.model.endPostalCode = val.long_name;
                    }
                });
            }
            if (path == "start") {
                this.model.startLat = results[0].geometry.location.lat();
                this.model.startLng = results[0].geometry.location.lng();
                this.model.startColonyName = results[0].formatted_address;
                this.showRoutes();
            }
            if (path == "end") {
                this.model.endLat = results[0].geometry.location.lat();
                this.model.endLng = results[0].geometry.location.lng();
                this.model.endColonyName = results[0].formatted_address;
                this.showRoutes();
            }
            // alert("lat: " + this.latitude + ", long: " + this.longitude);
        });
    }
    showRoutes() {
        if (this.autocomplete.start != "" && this.autocomplete.end != "") {
            let data = JSON.stringify({
                startLat: this.model.startLat,
                startLng: this.model.startLng,
                endLat: this.model.endLat,
                endLng: this.model.endLng,
                city: this.model.city,
                endCity: this.model.endCity,
                user_id: this.model.user_id,
            });
            //  this.fetch.get_volunteer_waypoints_by_condition(data).subscribe(res => {
            //     console.log("this is res:",res);
            //   console.log("this is res.data:",res.data);
            //    let waypts = [];
            //    let waypointsData = [];
            //   res.data.forEach((val,i)=>{
            //   console.log("this is val:",val);
            //   waypts.push({
            //   location: new google.maps.LatLng(val.latitude,val.longitude),
            // stopover: true
            //});
            //   waypointsData.push({
            //     location: new google.maps.LatLng(val.latitude,val.longitude),
            //     name : val.username,
            //     mobile_no : val.mobile_no
            //   });
            // });
            //  this.req_data = res.data;
            this.directionsRenderer.setMap(null);
            this.directionsRenderer.setDirections({ routes: [] });
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.directionsService.route({
                origin: this.autocomplete.start,
                destination: this.autocomplete.end,
                //   waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    this.directionsRenderer.setDirections(response);
                    /////////////////////////////
                    if (response.routes && response.routes.length > 0) {
                        console.log("this is response:", response);
                        var routes = response.routes;
                        for (var j = 0; j < routes.length; j++) {
                            var points = routes[j].overview_path;
                            // var ul = document.getElementById("vertex");
                            for (var i = 0; i < points.length; i++) {
                                // var li = document.createElement('li');
                                // li.innerHTML = this.getLiText(points[i]);
                                var result = this.getLiText(points[i]);
                                console.log("path all latlong:", result);
                                // ul.appendChild(li);
                                //  this.resultarr.push(result.lat,result.lng);
                                this.allpoints = new google.maps.LatLng(result.lat, result.lng);
                                this.pointarr.push(this.allpoints);
                                console.log(this.allpoints);
                            }
                        }
                    }
                    /////////////////////////////
                    this.directionsRenderer.setMap(this.map);
                    var startLocation = new Object();
                    var endLocation = new Object();
                    // var waypointLocations = [];
                    var legs = response.routes[0].legs;
                    console.log("legs:", legs);
                    for (var i = 0; i < legs.length; i++) {
                        if (i == 0) {
                            startLocation = legs[i].start_location;
                        }
                        if (i == legs.length - 1) {
                            endLocation = legs[i].end_location;
                        }
                    }
                    //console.log(waypointLocations);
                    // this.waypoints = waypointsData
                    this.createMarker(endLocation, "end", "special text for end marker", 0, "http://www.google.com/mapfiles/markerB.png");
                    this.createMarker(startLocation, "start", "special text for start marker", 0, "http://maps.gstatic.com/mapfiles/markers2/marker_greenA.png");
                    // for (var i = 0; i < waypointsData.length; i++) {
                    //   this.createMarker(waypointsData[i].location, waypointsData[i].name, '', waypointsData[i].mobile_no, "");
                    // }
                }
                else {
                    window.alert("Directions request failed due to " + status);
                }
            });
            //  });
        }
    }
    getLiText(point) {
        let lat = point.lat(), lng = point.lng();
        return { lat: lat, lng: lng };
    }
    getvolText(point) {
        let lat = point.latitude, lng = point.longitude;
        return { lat: lat, lng: lng };
    }
    getcheckText(point) {
        let res = point.res, vol = point.vol;
        return { res: res, vol: vol };
    }
    checkvolunteer(vol, pathpoints) {
        var position = new google.maps.LatLng(vol.lat, vol.lng);
        var res = google.maps.geometry.poly.isLocationOnEdge(position, new google.maps.Polyline({ path: pathpoints }), 0.0080);
        return { res, vol };
    }
    createMarker(latlng, label, html, mobile_no, url) {
        if (mobile_no != 0) {
            var contentString = "<b>" + label + "</b><br>" + html;
        }
        else {
            var contentString = "<b>" + label + "</b><br>" + html;
        }
        var marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            icon: { url: url },
            title: label,
            zIndex: Math.round(latlng.lat() * -100000) << 5,
        });
        this.markers.push(marker);
        google.maps.event.addListener(marker, "click", () => {
            this.infowindow.setContent(contentString);
            this.infowindow.open(this.map, marker);
        });
    }
    showAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class custom_alert_1",
                message: msg,
                buttons: [
                    {
                        text: this.model.key_text3,
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            //this.router.navigate(['/home']);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    confirm() {
        if (this.autocomplete.start != "" && this.autocomplete.end != "") {
            var data = JSON.stringify({
                startLat: this.model.startLat,
                startLng: this.model.startLng,
                endLat: this.model.endLat,
                endLng: this.model.endLng,
                endCity: this.model.endCity,
                colony_name: this.model.startColonyName,
                city: this.model.city,
                house_no: null,
                landmark: null,
                adress_type: null,
                state: this.model.state,
                country: this.model.country,
                postalCode: this.model.postalCode,
                app_user_id: this.model.user_id,
                id: this.id,
                id2: this.id2,
                vol: []
            });
            let fdata = JSON.parse(data);
            fdata.vol = this.fooddata;
            this.finalfood = fdata;
            this.fetch.get_volunteer_waypoints_new(data).subscribe((res) => {
                if (res.data.length > 0) {
                    console.log("this is volunteer response:", res);
                    this.voldata = res.data;
                    var volunteer = res.data;
                    for (var j = 0; j < volunteer.length; j++) {
                        // var ul = document.getElementById("vertex");
                        var result = this.getvolText(volunteer[j]);
                        console.log("volunteer all latlong:", result);
                        this.volunteerpoints = result;
                        this.volarr.push(this.volunteerpoints);
                        console.log("volunteer points array:", this.volarr);
                    }
                    this.volarr.map((element, index) => {
                        console.log("elements:", element);
                        var check = this.checkvolunteer(element, this.pointarr);
                        this.checkarr.push(check);
                        console.log("this is check:", this.checkarr);
                    });
                    var volcheck = this.checkarr;
                    for (var j = 0; j < volcheck.length; j++) {
                        var result2 = this.getcheckText(volcheck[j]);
                        console.log("vollatlng and res:", result2);
                        this.result2.push(result2);
                    }
                    this.result2.map((element, index) => {
                        if (element.res == true) {
                            console.log("element.res:", element.res);
                            this.volresult.push(element);
                            console.log("volresult:", this.volresult);
                            this.volresult.map((element, index) => {
                                console.log("final elements:", element);
                                var res = this.voldata;
                                var check1 = res.find(({ latitude }) => latitude === element.vol.lat);
                                // var check1 = res.find((i) => i.latitude === element.vol.lat);
                                this.finalarr.push(check1);
                                console.log("this is final array:", this.finalarr);
                            });
                            var data1 = JSON.parse(data);
                            data1.vol = this.finalarr;
                            var data2 = JSON.stringify(data1);
                            this.fetch
                                .alert_volunteer_on_true(data2)
                                .subscribe((res) => {
                                this.router.navigate([
                                    "/searching-volunteer",
                                    this.id,
                                    this.id2,
                                ]);
                            });
                        }
                        else {
                            this.showAlert(this.model.key_text2);
                            console.log("fooddata:", this.fooddata);
                            var waitingdata = JSON.stringify(this.finalfood);
                            console.log(JSON.parse(waitingdata), "waitingdata");
                            this.fetch.store_food_for_waiting(waitingdata).subscribe((res) => {
                                console.log("this is waiting response1:", res);
                            });
                            this.router.navigate([
                                "/screen-after-volunteer-not-found",
                                this.id,
                                this.id2,
                            ]);
                        }
                    });
                }
                else {
                    this.showAlert(this.model.key_text2);
                    console.log("fooddata:", this.finalfood);
                    var waitingdata = JSON.stringify(this.finalfood);
                    console.log("stringify fooddata:", waitingdata);
                    this.fetch.store_food_for_waiting(waitingdata).subscribe((res) => {
                        console.log("this is waiting response2:", res);
                    });
                    this.router.navigate([
                        "/screen-after-volunteer-not-found",
                        this.id,
                        this.id2,
                    ]);
                }
            });
        }
    }
};
OnTheWaySearchPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_7__["FetchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] }
];
OnTheWaySearchPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["map",] }]
};
OnTheWaySearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-on-the-way-search",
        template: _raw_loader_on_the_way_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_the_way_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OnTheWaySearchPage);



/***/ }),

/***/ "OY+2":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/on-the-way-search/on-the-way-search.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div class=\"regular size_18 white center\">\n    <ion-buttons class=\"back_button_menu_bar\" slot=\"end\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </div>\n    <ion-searchbar [(ngModel)]=\"autocomplete.start\" placeholder=\"{{model.key_text4}}\" [showCancelButton]=\"true\"   (ionChange)=\"updateSources()\" (ionCancel)=\"dismissSource()\" (click)=\"goToAddressSelection(1)\"></ion-searchbar>\n    \n    <ion-searchbar [(ngModel)]=\"autocomplete.end\" placeholder=\"{{model.key_text5}}\" [showCancelButton]=\"true\"   (ionChange)=\"updateDestinations()\" (ionCancel)=\"dismissDestination()\" (click)=\"goToAddressSelection(2)\"></ion-searchbar>\n    <div style=\"margin-left: 20px;\">\n      <div class=\"map-icon\">\n        <ion-icon name=\"warning-outline\" style=\"font-size: 14px; margin-top: 10px;\"></ion-icon>\n      </div>\n      <div class=\"map_desc\">      \n        <div class=\"regular size_12\">\n          Wearning a mask in some public spaces is required due to COVID - 19\n        </div> \n      </div>\n    </div> \n</ion-header>\n<ion-content class=\"current_location_page_show\">\n  <div #map id=\"map\"></div>\n  </ion-content>\n  <ion-footer class=\"current_location_page_show\">\n    <ion-toolbar>    \n\t\t<div class=\"app_button\" *ngIf=\"model.startLat && model.startLng && model.endLat && model.endLng\">\n\t\t\t<span (click)=\"confirm()\">\n\t\t\t\t<button class=\"app_btn\">{{model.key_text1}}</button>\n\t\t\t</span>\n\t\t\t<!--  <button class=\"app_btn\" (click)=\"confirm_location()\">Confirm Location</button> -->\n\t\t</div>\n    </ion-toolbar>\n</ion-footer>\n  \n  ");

/***/ }),

/***/ "UbH3":
/*!***********************************************************************!*\
  !*** ./src/app/on-the-way-search/on-the-way-search-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OnTheWaySearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTheWaySearchPageRoutingModule", function() { return OnTheWaySearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _on_the_way_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-the-way-search.page */ "C5Ha");




const routes = [
    {
        path: '',
        component: _on_the_way_search_page__WEBPACK_IMPORTED_MODULE_3__["OnTheWaySearchPage"]
    }
];
let OnTheWaySearchPageRoutingModule = class OnTheWaySearchPageRoutingModule {
};
OnTheWaySearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnTheWaySearchPageRoutingModule);



/***/ }),

/***/ "y2dc":
/*!***************************************************************!*\
  !*** ./src/app/on-the-way-search/on-the-way-search.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 100%;\n}\n\nion-header {\n  padding-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29uLXRoZS13YXktc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6Im9uLXRoZS13YXktc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=on-the-way-search-on-the-way-search-module-es2015.js.map