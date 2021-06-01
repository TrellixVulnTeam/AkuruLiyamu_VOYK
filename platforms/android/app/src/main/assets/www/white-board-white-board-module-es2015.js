(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["white-board-white-board-module"],{

/***/ "845F":
/*!***************************************************!*\
  !*** ./src/app/white-board/white-board.module.ts ***!
  \***************************************************/
/*! exports provided: WhiteBoardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardPageModule", function() { return WhiteBoardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _white_board_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-board-routing.module */ "YeJB");
/* harmony import */ var _white_board_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./white-board.page */ "xCC9");







let WhiteBoardPageModule = class WhiteBoardPageModule {
};
WhiteBoardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _white_board_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhiteBoardPageRoutingModule"]
        ],
        declarations: [_white_board_page__WEBPACK_IMPORTED_MODULE_6__["WhiteBoardPage"]]
    })
], WhiteBoardPageModule);



/***/ }),

/***/ "JE9E":
/*!***************************************************!*\
  !*** ./src/app/white-board/white-board.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box-ion-row {\n  z-index: 10;\n  background-color: red;\n  width: 100%;\n  height: 100%;\n  left: 0;\n}\n\n.box {\n  top: 20%;\n  width: 200px;\n  height: 100px;\n  background: url('20200614151037156.png') no-repeat;\n  -webkit-animation: bear 1s steps(8) infinite, w 6s linear forwards;\n          animation: bear 1s steps(8) infinite, w 6s linear forwards;\n  position: absolute;\n}\n\n@-webkit-keyframes bear {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: -1600px 0;\n  }\n}\n\n@keyframes bear {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: -1600px 0;\n  }\n}\n\n@-webkit-keyframes w {\n  100% {\n    transform: translateX(500px);\n  }\n}\n\n@keyframes w {\n  100% {\n    transform: translateX(500px);\n  }\n}\n\n@-webkit-keyframes taadaa {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes taadaa {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.new-background-color {\n  --background: #0d5171;\n}\n\n.ion-color-primary {\n  --color: white !important;\n}\n\n.button-colrs {\n  --background: rgba(104, 126, 161, 0.79) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3doaXRlLWJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQVJGOztBQVVBO0VBQ0UsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxrRUFBQTtVQUFBLDBEQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFTQTtFQUNFO0lBQ0Usd0JBQUE7RUFORjtFQVFBO0lBQ0UsOEJBQUE7RUFORjtBQUNGOztBQUFBO0VBQ0U7SUFDRSx3QkFBQTtFQU5GO0VBUUE7SUFDRSw4QkFBQTtFQU5GO0FBQ0Y7O0FBUUE7RUFFRTtJQUNFLDRCQUFBO0VBUEY7QUFDRjs7QUFHQTtFQUVFO0lBQ0UsNEJBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0U7SUFDRSxVQUFBO0VBUkY7RUFXQTtJQUNFLFVBQUE7RUFURjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFBO0VBUkY7RUFXQTtJQUNFLFVBQUE7RUFURjtBQUNGOztBQWdCQTtFQUNFLHFCQUFBO0FBZEY7O0FBaUJBO0VBQ0UseUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxrREFBQTtBQWRGIiwiZmlsZSI6IndoaXRlLWJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY2FudmFzIHtcbi8vICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg3LCAxNzgsIDE3OCk7XG4vL1xuLy9cbi8vfVxuLy9cbi8vLmNvbG9yLWJsb2NrIHtcbi8vICBoZWlnaHQ6IDQwcHg7XG4vL31cbi5ib3gtaW9uLXJvdyB7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG4uYm94IHtcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29uLzIwMjAwNjE0MTUxMDM3MTU2LnBuZykgbm8tcmVwZWF0O1xuICBhbmltYXRpb246IGJlYXIgMXMgc3RlcHMoOCkgaW5maW5pdGUsdyA2cyBsaW5lYXIgZm9yd2FyZHM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBrZXlmcmFtZXMgYmVhciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MDBweCAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHcge1xuICAwJSB7fVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGFhZGFhIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZXItYW5pbWF0aW9uIGlvbi1zbGlkZSB7XG4gIC8vYW5pbWF0aW9uOiB0YWFkYWEgMnM7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgLS1iYWNrZ3JvdW5kOiAjMGQ1MTcxO1xufVxuXG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWNvbHJzIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTI2LCAxNjEsIDAuNzkpICFpbXBvcnRhbnQ7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "Wu3u":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/white-board/white-board.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" class=\"ion-color-primary \">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white\">සිංහල අකුරු හෝඩිය </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--<ion-content>-->\n<!--  <ion-row>-->\n<!--    <ion-col *ngFor=\"let color of colors\" [style.background]=\"color\" class=\"color-block\" tappable-->\n<!--             (click)=\"selectColor(color)\"></ion-col>-->\n<!--  </ion-row>-->\n<!--  <ion-radio-group [(ngModel)]=\"selectedColor\">-->\n<!--    <ion-row>-->\n<!--      <ion-col *ngFor=\"let color of colors\" class=\"ion-text-center\">-->\n<!--        <ion-radio [value]=\"color\"></ion-radio>-->\n<!--      </ion-col>-->\n<!--    </ion-row>-->\n<!--  </ion-radio-group>-->\n\n<!--  <ion-range min=\"2\" max=\"20\" color=\"primary\" [(ngModel)]=\"lineWidth\">-->\n<!--    <ion-icon size=\"small\" slot=\"start\" name=\"brush\"></ion-icon>-->\n<!--    <ion-icon slot=\"end\" name=\"brush\"></ion-icon>-->\n<!--  </ion-range>-->\n\n<!--  <div style=\"text-align: center;height: 80%\">-->\n<!--    <canvas #imageCanvas (mousedown)=\"startDrawing($event)\" (touchstart)=\"startDrawing($event)\"-->\n<!--            (touchmove)=\"moved($event)\" (mousemove)=\"moved($event)\" (mouseup)=\"endDrawing()\" (touchend)=\"endDrawing()\"></canvas>-->\n<!--  </div>-->\n\n<!--</ion-content>-->\n<ion-content>\n  <div style=\"height: 98%; background-color: #dddedc45;\">\n    <ion-slides style=\"margin-top: 1%; height: 95%\" #mySlider pager=\"false\" class=\"slider-animation\">\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(2).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(3).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(4).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(5).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(6).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(7).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(8).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(9).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(10).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(11).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(12).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(13).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(14).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(15).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(16).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(17).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(18).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(19).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(20).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(21).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(22).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(23).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(24).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(25).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(26).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(27).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(28).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(29).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(30).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(31).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(32).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/sinhala-letters/My%20Post(33).png\">\n      </ion-slide>\n\n\n    </ion-slides>\n\n  </div>\n\n  <ion-row *ngIf=\"show_animation\" class=\"box-ion-row\">\n    <div class=\"box\" ></div>\n  </ion-row>\n\n\n</ion-content>\n<ion-footer style=\"background-color: #083e58d6\">\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" float-left ion-button  color=\"primary\" class=\"btnPrev button-colrs\" (click)=\"prev()\" [disabled]=\"number==2\">Prev</ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\">\n      <ion-button type=\"submit\" float-right ion-button color=\"primary\" class=\"btnNext button-colrs\" (click)=\"next()\" [disabled]=\"number==33\">Next</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "YeJB":
/*!***********************************************************!*\
  !*** ./src/app/white-board/white-board-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WhiteBoardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardPageRoutingModule", function() { return WhiteBoardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _white_board_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./white-board.page */ "xCC9");




const routes = [
    {
        path: '',
        component: _white_board_page__WEBPACK_IMPORTED_MODULE_3__["WhiteBoardPage"]
    }
];
let WhiteBoardPageRoutingModule = class WhiteBoardPageRoutingModule {
};
WhiteBoardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WhiteBoardPageRoutingModule);



/***/ }),

/***/ "xCC9":
/*!*************************************************!*\
  !*** ./src/app/white-board/white-board.page.ts ***!
  \*************************************************/
/*! exports provided: WhiteBoardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardPage", function() { return WhiteBoardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_white_board_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./white-board.page.html */ "Wu3u");
/* harmony import */ var _white_board_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./white-board.page.scss */ "JE9E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let WhiteBoardPage = class WhiteBoardPage {
    // @ViewChild('imageCanvas', { static: false }) canvas: any;
    // canvasElement: any;
    // saveX: number;
    //
    // saveY: number;
    // selectedColor = '#9e2956';
    //
    // colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];
    //
    // drawing = false;
    // lineWidth = 5;
    constructor(plt) {
        this.plt = plt;
        this.number = 2;
        this.show_animation = false;
    }
    ngOnInit() {
    }
    next() {
        this.show_animation = true;
        this.number += 1;
        this.slides.lockSwipes(false);
        let self = this;
        setTimeout(() => {
            self.show_animation = false;
            self.slides.slideNext();
            self.slides.lockSwipes(true);
        }, 3000);
    }
    prev() {
        this.number -= 1;
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    }
    ionViewDidEnter() {
        this.slides.lockSwipes(true);
        // this.slides.onlyExternal = true;
        // Set the Canvas Element and its size
        // this.canvasElement = this.canvas.nativeElement;
        // this.canvasElement.width = this.plt.width() + '';
        // this.canvasElement.height = 500;
    }
};
WhiteBoardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
WhiteBoardPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mySlider',] }]
};
WhiteBoardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-white-board',
        template: _raw_loader_white_board_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_white_board_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WhiteBoardPage);



/***/ })

}]);
//# sourceMappingURL=white-board-white-board-module-es2015.js.map