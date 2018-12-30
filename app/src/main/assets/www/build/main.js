webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, events, network) {
        var _this = this;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.network = network;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            console.log("test");
            var type = _this.network.type;
            if (type == "unknown" || type == "none" || type == undefined) {
                MyApp_1.connection = false;
            }
            else {
                MyApp_1.connection = true;
            }
            _this.verifyConnection();
            _this.platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    _this.myHandlerFunction();
                }
            });
        });
    }
    MyApp_1 = MyApp;
    MyApp.prototype.myHandlerFunction = function () {
        var confirm = this.alertCtrl.create({
            title: "Sair",
            message: "Deseja realmente sair do app?",
            buttons: [
                {
                    text: "Não sair",
                    handler: function () { }
                },
                {
                    text: "Sair",
                    handler: function () {
                        navigator["app"].exitApp();
                    }
                }
            ]
        });
        confirm.present();
    };
    MyApp.prototype.displayNetworkUpdate = function (connectionState, timer) {
        if (connectionState == "offline") {
            var toast = document.createElement("div");
            toast.setAttribute("class", "offline-toast");
            toast.innerHTML = "Você está offline";
            document.querySelector("ion-app").appendChild(toast);
            this.events.publish("user:disconnected");
        }
        else {
            this.events.publish("user:getBanners");
            var toasts = document.querySelectorAll(".offline-toast");
            [].filter.call(toasts, function (element) {
                element.remove();
            });
        }
    };
    MyApp.prototype.verifyConnection = function () {
        var _this = this;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function (data) {
            MyApp_1.connection = false;
            _this.displayNetworkUpdate(data.type, 9999999999999999);
            var body = document.getElementsByTagName("ng-component")[0];
            body.classList.add("offline");
        });
        this.network.onConnect().subscribe(function (data) {
            MyApp_1.connection = true;
            _this.displayNetworkUpdate(data.type, 1);
            var body = document.getElementsByTagName("ng-component")[0];
            body.classList.remove("offline");
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.connection = true;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = MyApp_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\adlux-seja-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\adlux-seja-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
    var MyApp_1;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_themeable_browser__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, themeableBrowser, http, httpClient, alertCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.themeableBrowser = themeableBrowser;
        this.http = http;
        this.httpClient = httpClient;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.isConnected = __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */].connection;
        this.options = {
            statusbar: {
                color: "#ffffffff"
            },
            toolbar: {
                height: 0,
                color: "#f0f0f0ff"
            },
            title: {
                color: "#003264ff",
                showPageTitle: false
            },
            backButton: {
                image: "back",
                imagePressed: "back_pressed",
                align: "left",
                event: "backPressed"
            },
            forwardButton: {
                image: "forward",
                imagePressed: "forward_pressed",
                align: "left",
                event: "forwardPressed"
            },
            closeButton: {
                image: "close",
                imagePressed: "close_pressed",
                align: "left",
                event: "closePressed"
            },
            customButtons: [
                {
                    image: "share",
                    imagePressed: "share_pressed",
                    align: "right",
                    event: "sharePressed"
                }
            ],
            menu: {
                image: "menu",
                imagePressed: "menu_pressed",
                title: "Test",
                cancel: "Cancel",
                align: "right",
                items: [
                    {
                        event: "helloPressed",
                        label: "Hello World!"
                    },
                    {
                        event: "testPressed",
                        label: "Test!"
                    }
                ]
            },
            backButtonCanClose: false
        };
        this.link_url_adlux = "http://www.sejaadlux.com.br";
        this.premium_links = [
            {
                title: "Treinamentos",
                icon: "trending-up",
                url: this.link_url_adlux + "/treinamentos"
            },
            {
                title: "Graduações",
                icon: "school",
                url: this.link_url_adlux + "/graduacoes"
            },
            {
                title: "Serviços",
                icon: "megaphone",
                url: this.link_url_adlux + "/servicos"
            },
            {
                title: "Solicitações",
                icon: "images",
                url: this.link_url_adlux + "/minhas-solicitacoes"
            },
            {
                title: "Recrutador ADLUX",
                icon: "people",
                url: this.link_url_adlux + "/recrutador"
            },
            {
                title: "Artigos Exclusivos",
                icon: "paper",
                url: this.link_url_adlux + "/artigos-exclusivos"
            }
        ];
        this.events.subscribe("user:disconnected", function () {
            _this.slides.update();
        });
        this.events.subscribe("user:getBanners", function () {
            _this.http.get(_this.link_url_adlux + "/public_api/banners").subscribe(function (res) {
                _this.banners = res.json();
                _this.slides.update();
            }, function (err) {
                console.log(err);
            });
        });
        this.http.get(this.link_url_adlux + "/public_api/banners").subscribe(function (res) {
            _this.banners = res.json();
            _this.slides.update();
        }, function (err) {
            console.log(err);
        });
    }
    HomePage.prototype.openBrowser = function (url) {
        if (__WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */].connection) {
            if (url) {
                var browser = this.themeableBrowser.create(url, "_blank", this.options);
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Ops! Sem conexão",
                subTitle: "Infelizmente voce está sem conexão com a internet. Conecte-se para que voce possa acessar estes canais",
                buttons: ["Ok, entendi"]
            });
            alert_1.present();
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.slides.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mySlider"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\wamp64\www\adlux-seja-app\src\pages\home\home.html"*/'<ion-header no-border class="header">\n  <img src="../../assets/imgs/logo.png">\n</ion-header>\n\n<ion-slides *ngIf="isConnected" class="slider" #mySlider [pager]="true">\n  <ion-slide *ngFor="let banner of banners">\n    <img src="{{link_url_adlux}}/img/banners/{{banner.Banner.file}}" (click)="openBrowser(banner.Banner.url)">\n  </ion-slide>\n</ion-slides>\n\n<ion-slides *ngIf="!isConnected" class="slider">\n  <ion-slide *ngFor="let banner of banners">\n    <img src="../../assets/imgs/image-default.png">\n  </ion-slide>\n</ion-slides>\n\n\n<ion-item no-border class="menu-principal">\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334 209.6">\n    <style type="text/css">\n      .st0 {\n        fill: #E8E8E8;\n        stroke: #C8C8C8;\n        stroke-linecap: square;\n        stroke-miterlimit: 3;\n      }\n\n      .st1 {\n        enable-background: new;\n      }\n\n      .st2 {\n        fill: #393939;\n      }\n\n      .st4 {\n        font-size: 12px;\n      }\n\n      .st5 {\n        fill: #646363;\n      }\n\n      .st6 {\n        fill: #E8E8E8;\n      }\n\n      .st7 {\n        fill: none;\n        stroke: #C8C8C8;\n        stroke-linecap: square;\n        stroke-miterlimit: 3;\n      }\n    </style>\n\n    <g id="navigate" (click)="openBrowser(link_url_adlux)">\n      <path id="background" vector-effect="non-scaling-stroke" class="st0" d="M166,104.5H43l2.1-1.4C51.1, 99.2,56,90.2,56,83V14.5 c0-7.2,5.8-13,13-13h97V104.5z" />\n\n      <text id="text" transform="matrix(1 0 0 1 80.7764 72.891)" class="st1">\n        <tspan x="0" y="0" class="st2 st3 st4">Navegue na</tspan>\n        <tspan x="1.5" y="15" class="st2 st3 st4">Plataforma</tspan>\n      </text>\n\n      <path id="icon" class="st5" d="M128.2,42.5l-14.1-13.6c-0.3-0.3-0.7-0.4-1.1-0.4s-0.8,0.2-1.1,0.4L97.8,42.5 c-0.5,0.5-0.4,0.8-0.3,1s0.3,0.5,1,0.5h1.6v12.1c0,1.3,1.1,2.3,2.3,2.3h7.2v-8.2h6.9v8.2h7.3c1.2,0,2.3-1.1,2.3-2.3v-12h1.6 c0.7,0,0.9-0.3,1-0.5C128.6,43.4,128.7,43,128.2,42.5z" />\n    </g>\n\n    <g id="premium" (click)="openBrowser(link_url_adlux + \'/planos\')">\n      <path id="background_2_" vector-effect="non-scaling-stroke" class="st0" d="M166.8, 104.5h123l-2.1-1.4c-6-3.9-10.9-12.9-10.9-20.1 V14.5c0-7.2-5.8-13-13-13h-97L166.8,104.5L166.8,104.5z" />\n\n      <text id="text_1_" transform="matrix(1 0 0 1 196.508 72.891)" class="st1">\n        <tspan x="0" y="0" class="st2 st3 st4">Tornar-se</tspan>\n        <tspan x="0.9" y="15" class="st2 st3 st4">Premium</tspan>\n      </text>\n\n      <g id="icon_1_">\n        <path class="st5" d="M237.1,57.4c0,0-3.8-6.5-4.5-7.6c0.8-0.2,1.6-0.4,1.9-1c0.6-1-0.4-2.6-0.2-3.6c0.3-1.1,1.9-2,1.9-3.1 s-1.7-2.3-1.9-3.4c-0.3-1.1,0.7-2.7,0.2-3.6c-0.6-1-2.5-0.9-3.2-1.7c-0.8-0.8-0.8-2.7-1.8-3.2s-2.6,0.5-3.6,0.3 c-1.1-0.2-2-1.9-3.1-1.9s-2.9,1.8-3.2,1.9c-1.1,0.3-2.7-0.8-3.6-0.3c-1,0.5-1,2.4-1.8,3.2s-2.7,0.7-3.2,1.7 c-0.6,1,0.4,2.6,0.2,3.6c-0.3,1.1-1.9,2.1-1.9,3.3c0,1.1,1.6,2,1.9,3.1c0.3,1.1-0.7,2.7-0.2,3.6c0.3,0.5,1,0.8,1.7,1 c0.1,0,0.2,0.1,0.1,0.3c-0.5,0.8-4.4,7.5-4.4,7.5c-0.3,0.5-0.1,1,0.6,1l3,0.1c0.6,0,1.4,0.5,1.7,1l1.6,2.5c0.3,0.5,0.8,0.5,1.2,0 l4.5-7.7c0.1-0.1,0.2-0.1,0.2,0c0.5,0.4,1.2,0.8,1.7,0.8c0.6,0,1.1-0.4,1.6-0.8c0,0,0.1-0.1,0.2,0l4.5,7.7c0.3,0.5,0.8,0.5,1.2,0 l1.6-2.5c0.3-0.5,1.1-1,1.7-1l3-0.1C237.2,58.3,237.4,57.9,237.1,57.4z M227.7,50.4c-3.3,1.9-7.3,1.7-10.3-0.2 c-4.5-2.9-5.9-8.8-3.2-13.4c2.7-4.7,8.7-6.3,13.4-3.8c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0.1c1.5,0.8,2.7,2.1,3.6,3.6 C234.1,41.5,232.4,47.6,227.7,50.4z" />\n\n        <path class="st5" d="M226.9,34.5L226.9,34.5c-2.6-1.5-5.8-1.6-8.5,0c-4,2.3-5.4,7.5-3,11.5c0.7,1.2,1.7,2.2,2.8,2.9 c0.1,0.1,0.2,0.1,0.3,0.2c4,2.3,9.1,0.9,11.5-3.1C232.3,42,230.9,36.9,226.9,34.5z M227.9,41.1l-1.4,1.4c-0.4,0.4-0.7,1.3-0.6,1.9 l0.3,1.9c0.1,0.6-0.3,0.9-0.8,0.6l-1.7-0.9c-0.5-0.3-1.4-0.3-2,0l-1.7,0.9c-0.5,0.3-0.9,0-0.8-0.6l0.3-1.9 c0.1-0.6-0.2-1.4-0.6-1.9l-1.4-1.4c-0.4-0.4-0.3-0.8,0.3-0.9l1.9-0.3c0.6-0.1,1.3-0.6,1.6-1.1l0.9-1.8c0.3-0.5,0.7-0.5,1,0 l0.9,1.8c0.3,0.5,1,1.1,1.6,1.1l1.9,0.3C228.2,40.3,228.4,40.7,227.9,41.1z" />\n      </g>\n    </g>\n\n    <g id="articles" (click)="openBrowser(link_url_adlux + \'/artigos\')">\n      <g id="background_4_">\n        <path class="st6" d="M14.5,208.1h97v-103h-97c-7.2,0-13,5.8-13,13v77C1.5,202.2,7.3,208.1,14.5,208.1z" />\n\n        <path class="st7" d="M14.5,208.1h97v-103h-97c-7.2,0-13,5.8-13,13v77C1.5,202.2,7.3,208.1,14.5,208.1z" />\n      </g>\n\n      <text id="text_2_" transform="matrix(1 0 0 1 37 178.444)" class="st2 st3 st4">Artigos</text>\n\n      <g id="icon_2_">\n        <path class="st5" d="M70.3,138.6V134H38v25.4c0,0,0,4.6,4.6,4.6h28.8c0,0,3.5-0.1,3.5-4.6v-20.8L70.3,138.6L70.3,138.6z M42.7,161.7c-2.3,0-2.3-2.3-2.3-2.3v-23.1H68v23.1c0,1.1,0.3,1.8,0.8,2.3H42.7z" />\n\n        <rect x="42.7" y="140.9" class="st5" width="23.1" height="2.3" />\n\n        <rect x="55.3" y="154.8" class="st5" width="8.1" height="2.3" />\n\n        <rect x="55.3" y="150.2" class="st5" width="10.4" height="2.3" />\n\n        <rect x="55.3" y="145.6" class="st5" width="10.4" height="2.3" />\n\n        <rect x="42.7" y="145.6" class="st5" width="10.4" height="11.5" />\n      </g>\n    </g>\n\n    <g id="teasers" (click)="openBrowser(link_url_adlux + \'/teasers\')">\n      <rect id="background_3_" x="112" y="105.1" vector-effect="non-scaling-stroke" class="st0" width="110" height="103" />\n\n      <text id="text_3_" transform="matrix(1 0 0 1 144.8359 178.444)" class="st1">\n        <tspan x="0" y="0" class="st2 st3 st4">Teasers</tspan>\n        <tspan x="-13.4" y="15" class="st2 st3 st4">Motivacionais</tspan>\n      </text>\n\n      <path id="icon_3_" class="st5" d="M179.8,151.5l-8.7,6l-8.7,6c-2,1.3-3.6,0.5-3.6-1.9V149v-12.5c0-2.4,1.6-3.2,3.6-1.9l8.7,6l8.7,6 C181.8,147.9,181.8,150.1,179.8,151.5z" />\n    </g>\n\n    <g id="events" (click)="openBrowser(link_url_adlux + \'/eventos\')">\n      <g id="background_1_">\n        <path class="st6" d="M222.5,208.1h97c7.2,0,13-5.8,13-13v-77c0-7.2-5.8-13-13-13h-97V208.1z" />\n        <path class="st7" d="M222.5,208.1h97c7.2,0,13-5.8,13-13v-77c0-7.2-5.8-13-13-13h-97V208.1z" />\n      </g>\n\n      <text id="text_4_" transform="matrix(1 0 0 1 256.5 178.444)" class="st2 st3 st4">Eventos</text>\n\n      <path id="icon_4_" class="st5" d="M279.9,149.8L279.9,149.8c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6l0,0c0.9,0,1.6-0.7,1.6-1.6 C281.4,150.5,280.7,149.8,279.9,149.8z M275.1,148.2c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6 C273.6,147.5,274.3,148.2,275.1,148.2z M279.9,145.1L279.9,145.1c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6l0,0 c0.9,0,1.6-0.7,1.6-1.6C281.4,145.8,280.7,145.1,279.9,145.1z M281.4,137.2h-7.9v3.2h7.9V137.2z M284.6,148.2 c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6S283.7,148.2,284.6,148.2z M284.6,153c0.9,0,1.6-0.7,1.6-1.6 s-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6S283.7,153,284.6,153z M275.1,153c0.9,0,1.6-0.7,1.6-1.6s-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6 S274.3,153,275.1,153z M270.4,157.7c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6S269.5,157.7,270.4,157.7z M289.3,137.2h-1.6v3.2h1.6v20.5h-23.7v-20.5h1.6v-3.2h-1.6c-1.7,0-3.2,1.4-3.2,3.2v20.5c0,1.7,1.4,3.2,3.2,3.2h23.7 c1.7,0,3.2-1.4,3.2-3.2v-20.5C292.5,138.6,291.1,137.2,289.3,137.2z M270.4,153c0.9,0,1.6-0.7,1.6-1.6s-0.7-1.6-1.6-1.6 s-1.6,0.7-1.6,1.6S269.5,153,270.4,153z M270.4,148.2c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6 S269.5,148.2,270.4,148.2z M275.1,157.7c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6 C273.6,157,274.3,157.7,275.1,157.7z M270.4,140.3c0.9,0,1.6-0.7,1.6-1.6v-3.2c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6v3.2 C268.8,139.6,269.5,140.3,270.4,140.3z M284.6,140.3c0.9,0,1.6-0.7,1.6-1.6v-3.2c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6v3.2 C283,139.6,283.7,140.3,284.6,140.3z" />\n    </g>\n  </svg>\n\n</ion-item>\n\n<div class="divider">\n  <span>SEJA Premium</span>\n</div>\n\n<div class="wrap-items">\n  <div class="wrap">\n    <div class="item" *ngFor="let item of premium_links" (click)="openBrowser(item.url)">\n      <span class="icon">\n        <ion-icon name="{{item.icon}}"></ion-icon>\n      </span>\n\n      <span class="text">{{item.title}}</span>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"C:\wamp64\www\adlux-seja-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map