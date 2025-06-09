import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { Geolocation, GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule } from "ng-recaptcha";
import { HttpClientModule } from '@angular/common/http';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { DatePipe } from '@angular/common';
// import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { Network } from '@ionic-native/network/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule
  ],
  providers: [
    StatusBar,
    FCM,
    Network,
    Device,
    FirebaseX,
    SplashScreen,
    SocialSharing,
    DatePicker,
	Geolocation,
  NativeGeocoder,
  BrowserTab,
  DatePipe,
  Diagnostic,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // FCM
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
