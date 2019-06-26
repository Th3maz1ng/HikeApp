(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _second2time_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second2time.pipe */ "./src/app/home/second2time.pipe.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }
                ])
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                _second2time_pipe__WEBPACK_IMPORTED_MODULE_7__["Second2TimePipe"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<h2 class=\"header\">Hikings :</h2>\n\t<table *ngFor=\"let hike of hikes\" class=\"item\">\n\t\t<tr>\n\t\t\t<td colspan=\"2\"><ion-img class=\"item-img\" src=\"{{hike.img}}\"></ion-img></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"width:70%;\" colspan=\"2\" ><h3>{{hike.name}}</h3></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\" class=\"line-spacing\">{{hike.location}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t\n\t\t\t<td colspan=\"2\" style=\"max-width:70%;\" class=\"line-spacing\">{{hike.description}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t\n\t\t\t<td>~{{hike.duration | second2time}}</td>\n\t\t\t<td>{{hike.stepping}} m</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\" class=\"line-spacing\"><span *ngFor=\"let item of hikeService.htmlMarkGenerator(hike.mark)\"><ion-icon *ngIf=\"item == 0\" name=\"star-outline\" ></ion-icon><ion-icon *ngIf=\"item == 1\" name=\"star\" ></ion-icon></span></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><ion-button shape=\"round\" fill=\"outline\">Let's hike</ion-button></td>\n\t\t\t<td style=\"text-align:right;padding-right:10px;\"><ion-button routerLink=\"/details/{{hike.id}}\" shape=\"round\" fill=\"outline\">Details</ion-button></td>\n\t\t</tr>\n\t</table>\n</ion-content>\n\n<!--(click)=\"onSelect(hike)\"-->\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center; }\n\n.debug {\n  margin: auto; }\n\n.debug tr {\n  border: 1px black solid; }\n\n.debug td {\n  border: 1px black solid; }\n\n.item {\n  margin: 30px auto 30px auto;\n  box-shadow: 5px 5px 15px grey;\n  width: 70%; }\n\n.line-spacing {\n  padding: 10px 0 10px 0; }\n\n.item-img {\n  width: 70%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcVXNlcnNcXFRoaW5rXFxEZXNrdG9wXFxNZXMgZG9jdW1lbnRzXFxTY29sYWlyZVxcQ291cnMgSVVUXFxMaWNlbmNlIHByb1xcUHJvamV0SU9OSUNcXEhpa2VBcHBXaW5kb3dzL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGtCQUFpQixFQUFBOztBQUdsQjtFQUVDLFlBQVcsRUFBQTs7QUFHWjtFQUVDLHVCQUFzQixFQUFBOztBQUd2QjtFQUVDLHVCQUFzQixFQUFBOztBQUd2QjtFQUVDLDJCQUEwQjtFQUUxQiw2QkFBNkI7RUFDN0IsVUFBUyxFQUFBOztBQUdWO0VBRUMsc0JBQXFCLEVBQUE7O0FBR3RCO0VBRUMsVUFBUztFQUFDLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyXG57XG5cdHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uZGVidWdcbntcblx0bWFyZ2luOmF1dG87XG59XG5cbi5kZWJ1ZyB0clxue1xuXHRib3JkZXI6MXB4IGJsYWNrIHNvbGlkO1xufVxuXG4uZGVidWcgdGRcbntcblx0Ym9yZGVyOjFweCBibGFjayBzb2xpZDtcbn1cblxuLml0ZW1cbntcblx0bWFyZ2luOjMwcHggYXV0byAzMHB4IGF1dG87XG5cdFxuXHRib3gtc2hhZG93OiA1cHggNXB4IDE1cHggZ3JleTtcblx0d2lkdGg6NzAlO1xufVxuXG4ubGluZS1zcGFjaW5nXG57XG5cdHBhZGRpbmc6MTBweCAwIDEwcHggMDtcbn1cblxuLml0ZW0taW1nXG57XG5cdHdpZHRoOjcwJTttYXJnaW46YXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hike_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hike.service */ "./src/app/home/hike.service.ts");



var HomePage = /** @class */ (function () {
    function HomePage(hikeService) {
        this.hikeService = hikeService;
        this.title = 'Let\'s Hike';
    }
    HomePage.prototype.ngOnInit = function () {
        this.getHikes();
    };
    HomePage.prototype.onSelected = function (hike) {
        this.selectedHike = hike;
    };
    HomePage.prototype.getHikes = function () {
        var _this = this;
        this.hikeService.getHikes().subscribe(function (hikes) { return _this.hikes = hikes; });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hike_service__WEBPACK_IMPORTED_MODULE_2__["HikeService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map