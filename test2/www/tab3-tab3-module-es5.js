(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "IqiF":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function IqiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "h1hx");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "nRCe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../config */
      "Vx+w");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(toastController, actionSheetController, http) {
          _classCallCheck(this, Tab3Page);

          this.toastController = toastController;
          this.actionSheetController = actionSheetController;
          this.http = http;
        }

        _createClass(Tab3Page, [{
          key: "getURL",
          value: function getURL() {
            return 'http://' + Object(_config__WEBPACK_IMPORTED_MODULE_6__["getIpValue"])() + ':8080/drinks';
          }
        }, {
          key: "openBusy",
          value: function openBusy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'DrkinIT está ocupada en este momento. Intente nuevamente más tarde',
                        duration: 5000,
                        position: 'top',
                        color: 'danger'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openEmpty",
          value: function openEmpty() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: 'Por favor, coloca el vaso en la plataforma e intente nuevamente',
                        duration: 5000,
                        position: 'top',
                        color: 'danger'
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "reqDrink",
          value: function reqDrink(n, shot) {
            var _this = this;

            console.log(this.getURL());
            this.http.post(this.getURL(), {
              "trago": n,
              "shot": shot
            }).subscribe(function (val) {
              console.log(val);

              if (val == "busy") {
                _this.openBusy();
              } else if (val == "empty") {
                _this.openEmpty();
              } else if (val == "inProgress") {
                _this.openToast();
              } else if (val == "cleaning") {
                _this.openToast2();
              }
            });
          }
        }, {
          key: "openToast",
          value: function openToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'Estoy preparando tu trago. Aguarda unos instantes',
                        duration: 5000,
                        position: 'top',
                        color: 'dark'
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openToast2",
          value: function openToast2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: 'Limpiando la máquina. Aguarde unos instantes',
                        duration: 5000,
                        position: 'top',
                        color: 'dark'
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "shots",
          value: function shots(n) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

              var actionSheet, _actionSheet;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(n != "Limpieza")) {
                        _context5.next = 8;
                        break;
                      }

                      _context5.next = 3;
                      return this.actionSheetController.create({
                        header: 'Seleccione intensidad del ' + n,
                        buttons: [{
                          text: 'Regular',
                          role: 'destructive',
                          handler: function handler() {
                            var shot = 1;

                            _this2.reqDrink(n, shot);
                          }
                        }, {
                          text: 'Fuerte',
                          role: 'destructive',
                          handler: function handler() {
                            var shot = 2;

                            _this2.reqDrink(n, shot);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel'
                        }]
                      });

                    case 3:
                      actionSheet = _context5.sent;
                      _context5.next = 6;
                      return actionSheet.present();

                    case 6:
                      _context5.next = 13;
                      break;

                    case 8:
                      _context5.next = 10;
                      return this.actionSheetController.create({
                        header: 'Estas por limpiar la maquina. Por favor, comprueba que los productos de limpieza esten en su lugar. Luego, presioná "Aceptar"',
                        buttons: [{
                          text: 'Aceptar',
                          role: 'destructive',
                          handler: function handler() {
                            var shot = 1;

                            _this2.reqDrink(n, shot);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel'
                        }]
                      });

                    case 10:
                      _actionSheet = _context5.sent;
                      _context5.next = 13;
                      return _actionSheet.present();

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab3Page);
      /***/
    },

    /***/
    "h1hx":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function h1hx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-header >\n      <ion-toolbar translucent>\n        <ion-title>\n          <h1>COCKTAILS</h1>\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content fullscreen padding>\n    <ion-card>\n      <img src=\"assets/icon/vodka_con_limon.jpeg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Absolut Vodka</ion-card-subtitle>\n        <ion-card-title>Lemon Drop</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content >\n        Cocktail a base de Vodka con el sabor dulce y agrio del limon\n      </ion-card-content>\n      \n      <ion-button expand=\"block\" (click)=\"shots('Lemon Drop')\" color = success> <h>Drink IT</h> </ion-button>\n    </ion-card>\n    \n    <ion-card>\n      <img src=\"assets/icon/vodka1.jpg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Absolut Vodka</ion-card-subtitle>\n        <ion-card-title>Destornillador</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        El cocktail mas famoso del mundo. Bebida a base de Vodka con jugo de naranja\n      </ion-card-content>\n      <ion-button expand =\"block\" color=\"warning\" (click)=\"shots('Destornillador')\" ><h>Drink IT</h></ion-button>\n    </ion-card>\n    \n    <ion-card>\n      <img src=\"assets/icon/campari1.jpg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Campari</ion-card-subtitle>\n        <ion-card-title>Campari Orange</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        Cocktail dulce que combina dos ingredientes provenientes del norte y del sur de Italia. Campari de Milano y naranjas del sur\n      </ion-card-content>\n      <ion-button expand =\"block\" color=\"danger\" (click)=\"shots('Campari Orange')\" ><h>Drink IT</h></ion-button>\n    </ion-card>\n\n    <ion-card>\n      <img src=\"assets/icon/vodka_campari.jpeg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Absolute Vodka & Campari</ion-card-subtitle>\n        <ion-card-title>Mutticano</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        La perfecta combinación entre Vodka, Campari y el fresco jugo de naranja\n      </ion-card-content>\n      <ion-button expand =\"block\" color=\"warning\" (click)=\"shots('Mutticano')\" ><h>Drink IT</h></ion-button>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Cuidado & Mantenimiento</ion-card-subtitle>\n        <ion-card-title>Limpieza</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        Para garantizar la calidad de tus tragos te recomendamos que hagas una limpieza periódica de la máquina\n      </ion-card-content>\n      <ion-button expand =\"block\" color=\"primary\" (click)=\"shots('Limpieza')\" ><h>Limpiar</h></ion-button>\n    </ion-card>\n\n    </ion-content>\n    </ion-app>";
      /***/
    },

    /***/
    "k+ul":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function kUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "nRCe":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function nRCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h {\n  font-size: 20px;\n  font-weight: bold;\n}\n\nh1 {\n  color: #ed662b;\n  text-align: center;\n  font-weight: bold;\n  font-size: 25px;\n  position: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgY29sb3I6cmdiKDIzNywxMDIsNDMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map