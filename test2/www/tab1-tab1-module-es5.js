(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  \n  <ion-content fullscreen padding class=\"ion-padding\" scroll-y=\"true\"\n    [scrollEvents]=\"true\"\n    (ionScrollStart)=\"logScrollStart()\"\n    (ionScroll)=\"logScrolling($event)\"\n    (ionScrollEnd)=\"logScrollEnd()\">\n\n    <ion-slides>\n\n      <ion-slide>\n        <!-- <ion-card>\n          <img src=\"https://pngimage.net/wp-content/uploads/2018/05/cocktails-png-1.png\" />\n          <ion-card-header>\n            <ion-card-title>Bienvenido!</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n            Prepara tu trago ideal en <b>2 simples pasos</b>\n          </ion-card-content>\n        </ion-card> -->\n\n        <div class=\"slide\">\n          <img src=\"assets/icon/DrinkIT Logo Vertical V2.png\" alt = \"LOGO\" class=\"full-image\"/>\n          <ion-text> <h1> ¡BIENVENIDO! </h1> <p></p></ion-text>\n          <ion-text> \n            <p1>Prepara tu trago en 3 simples pasos</p1> <br>\n            \n            \n            <br><p2>Ingresa la IP del servidor</p2><br>\n          </ion-text>\n          <P></P>\n          <ion-item>\n            <ion-input (ionChange)=\"ipChange()\" placeholder = \"Ingresa la IP del server\"  id=\"IPaddress\" [(ngModel)]=\"valorIP\"></ion-input>\n           \n          </ion-item>\n          <ion-text> <br><br><p3>DESLIZA PARA VER LAS INSTRUCCIONES →</p3><br></ion-text>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/icon/glass.png\">\n        <h1>PASO 1</h1>\n        <p1><p3> Apoya tu vaso</p3> sobre la plataforma</p1>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/icon/Mobile.png\">\n        <h1>PASO 2</h1>\n        <p1>Elegi el trago que quieras en la <p3>pestaña de cocktails</p3></p1>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/icon/finish.png\"/>\n        <h1>LISTO!</h1>\n        <p1>En unos segundos <p3>tendras tu trago!</p3></p1>\n        <p></p>\n        <h1>Empeza a tomar!</h1>\n        <p></p>\n        <h1><ion-icon slot=\"end\" name=\"arrow-down\"></ion-icon></h1>\n      </ion-slide>\n\n    </ion-slides>\n  </ion-content>\n</ion-app>\n\n<style>\n  ion-slides {\n    height: 100%;\n  }\n\n  .swiper-slide {\n    display: block;\n  }\n\n  .swiper-slide h2 {\n    margin-top: 2.8rem;\n  }\n\n  .swiper-slide img {\n    max-height: 50%;\n    max-width: 80%;\n    margin: 60px 0 40px;\n    pointer-events: none;\n  }\n\n  b {\n    font-weight: 500;\n  }\n\n  p {\n    padding: 0 40px;\n    font-size: 18px;\n    line-height: 1.5;\n    color: var(--ion-color-step-600, #60646b);\n  }\n\n  p b {\n    color: var(--ion-text-color, #000000);\n  }\n</style>";
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../config */
      "Vx+w");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page() {
          _classCallCheck(this, Tab1Page);

          this.valorIP = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getIpValue"])();
        }

        _createClass(Tab1Page, [{
          key: "ipChange",
          value: function ipChange() {
            console.log(this.valorIP);
            Object(_config__WEBPACK_IMPORTED_MODULE_4__["setIpValue"])(this.valorIP);
            console.log(Object(_config__WEBPACK_IMPORTED_MODULE_4__["getIpValue"])());
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      ;
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-content {\n  --background: url(\"/assets/icon/Fondo.png\") no-repeat 100% 100%;\n}\n\nh1 {\n  color: #ed662b;\n  font-family: arial;\n  font-style: normal;\n  font-weight: 1000;\n  font-size: 40px;\n  text-align: center;\n  text-shadow: 1px 1px #ffffff;\n  margin-top: 0px;\n}\n\np {\n  color: #d4d4d4;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 0px;\n}\n\np1 {\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  text-align: center;\n}\n\np2 {\n  color: #cfcfcf;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: underline;\n}\n\np3 {\n  color: #ed662b;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  text-align: center;\n}\n\n#empezar {\n  color: #1d9ce6;\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDSSwrREFBQTtBQUVOOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFFO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUdKOztBQUFFO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ljb24vRm9uZG8ucG5nJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcclxuICB9XHJcbiAgaDF7XHJcbiAgICBjb2xvcjpyZ2IoMjM3LDEwMiw0Myk7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZmZmZmZjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICBjb2xvcjpyZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIHAxe1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBwMntcclxuICAgIGNvbG9yOnJnYigyMDcsIDIwNywgMjA3KTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgcDN7XHJcbiAgICBjb2xvcjpyZ2IoMjM3LDEwMiw0Myk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gICNlbXBlemFye1xyXG4gICAgY29sb3I6cmdiKDI5LCAxNTYsIDIzMCk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
        }]), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map