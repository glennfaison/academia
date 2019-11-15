(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"mx-auto col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h1 class=\"text-center\">Log In</h1>\n        </div>\n        <div class=\"card-body\">\n          <form #form=\"ngForm\" [noValidate]=\"false\">\n\n            <div class=\"d-flex flex-column flex-md-row\" *ngIf=\"errorMessage\">\n              <div class=\"px-md-1 flex-fill text-center\">\n                <label class=\"text-danger font-weight-bold\"> {{ errorMessage }} </label>\n              </div>\n            </div>\n\n            <div class=\"d-flex flex-column flex-md-row\">\n              <div class=\"px-md-1 flex-fill required\">\n                <label> Username / Email Address </label>\n                <input class=\"form-control\" type=\"email\" name=\"email\" ngModel #email=\"ngModel\" required />\n              </div>\n            </div>\n            <div class=\"d-flex flex-column flex-md-row\">\n              <div class=\"px-md-1 flex-fill required\">\n                <label> Password </label>\n                <input class=\"form-control\" type=\"password\" name=\"password\" ngModel #password=\"ngModel\" required />\n              </div>\n            </div>\n\n          </form>\n        </div>\n        <div class=\"card-footer text-center\">\n          <div class=\"row\">\n            <button class=\"btn btn-fill btn-danger mx-auto\" (click)=\"onSubmit(form)\" type=\"submit\">Log In</button>\n          </div>\n          <hr/>\n          <small>Don't have an account? <a [routerLink]=\"['/register']\">Register</a>.</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"mx-auto col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h1 class=\"text-center\">Register</h1>\n        </div>\n        <div class=\"card-body\">\n          <form #form=\"ngForm\" [noValidate]=\"false\">\n\n            <div class=\"d-flex flex-column flex-md-row\" *ngIf=\"errorMessage\">\n              <div class=\"px-md-1 flex-fill text-center\">\n                <label class=\"text-danger font-weight-bold\"> {{ errorMessage }} </label>\n              </div>\n            </div>\n\n            <div class=\"d-flex flex-column flex-md-row\">\n              <div class=\"px-md-1 flex-fill required\">\n                <label> First Name </label>\n                <input class=\"form-control\" type=\"text\" name=\"first_name\" #first_name=\"ngModel\" ngModel required />\n              </div>\n              <div class=\"px-md-1 flex-fill required\">\n                <label> Other Names </label>\n                <input class=\"form-control\" type=\"text\" name=\"other_names\" ngModel #other_names=\"ngModel\" required />\n              </div>\n            </div>\n            <div class=\"d-flex flex-column flex-md-row\">\n              <div class=\"px-md-1 flex-fill\">\n                <label> Username </label>\n                <input class=\"form-control\" type=\"text\" name=\"username\" ngModel #username=\"ngModel\" />\n              </div>\n              <div class=\"px-md-1 flex-fill required\">\n                <label> Email Address </label>\n                <input class=\"form-control\" type=\"email\" name=\"email\" ngModel #email=\"ngModel\" required />\n              </div>\n            </div>\n            <div class=\"d-flex flex-column flex-md-row\">\n              <div class=\"px-md-1 flex-fill required\">\n                <label> Password </label>\n                <input class=\"form-control\" type=\"password\" name=\"password\" ngModel #password=\"ngModel\" required />\n              </div>\n              <div class=\"px-md-1 flex-fill required\">\n                <label> Repeat Password </label>\n                <input class=\"form-control\" type=\"password\" name=\"repeat_password\" ngModel #repeat_password=\"ngModel\"\n                  required />\n              </div>\n            </div>\n            <div class=\"d-flex flex-column flex-md-row\">\n              <div class=\"px-md-1 flex-fill required\">\n                <label> Gender </label>\n                <select class=\"form-control\" name=\"gender_id\" ngModel #gender_id=\"ngModel\" required>\n                  <option *ngFor=\"let gender of genders\" class=\"form-control\" [value]=\"gender.id\">\n                    {{ gender.name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"px-md-1 flex-fill\">\n                <label> Date of Birth </label>\n                <input class=\"form-control\" type=\"date\" name=\"date_of_birth\" ngModel #date_of_birth=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"d-flex flex-column flex-md-row\">\n              <div class=\"px-md-1 flex-fill\">\n                <label> Place of Birth </label>\n                <input class=\"form-control\" type=\"text\" name=\"place_of_birth\" ngModel #place_of_birth=\"ngModel\" />\n              </div>\n            </div>\n\n          </form>\n        </div>\n        <div class=\"card-footer text-center\">\n          <div class=\"row\">\n            <button class=\"btn btn-fill btn-danger mx-auto\" (click)=\"onSubmit(form)\" type=\"submit\">Register</button>\n          </div>\n          <hr/>\n          <small>Already have an account? <a [routerLink]=\"['/login']\">Log in</a>.</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/login/login.component */ "./src/app/pages/login/login.component.ts");










var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [
                src_app_pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var src_app_pages_register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/login/login.component */ "./src/app/pages/login/login.component.ts");


var AuthLayoutRoutes = [
    { path: 'register', pathMatch: 'full', component: src_app_pages_register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"] },
    { path: 'login', pathMatch: 'full', component: src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];


/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSvc, alerts, router) {
        this.authSvc = authSvc;
        this.alerts = alerts;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, email, password, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        if (!this.validate(form)) {
                            return [2 /*return*/];
                        }
                        _a = form.value, email = _a.email, password = _a.password;
                        return [4 /*yield*/, this.authSvc.instructorLogin(email, password)];
                    case 1:
                        _b.sent();
                        this.alerts.success('Successfully logged in');
                        this.router.navigate(['dashboard']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.alerts.error(src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].findHttpError(error_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.validate = function (form) {
        if (!form.value.email) {
            this.errorMessage = 'Your username or email is required!';
            return false;
        }
        if (!form.value.password) {
            this.errorMessage = 'Your password is required!';
            return false;
        }
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required label {\n  font-weight: bold;\n}\n\n.required label:after {\n  color: #e32;\n  content: \" *\";\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc3gvQ29kZS9Bbmd1bGFyL2FjYWRlbWlhL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yZXF1aXJlZCBsYWJlbDphZnRlciB7XG4gIGNvbG9yOiAjZTMyO1xuICBjb250ZW50OiAnIConO1xuICBkaXNwbGF5OmlubGluZTtcbn1cbiIsIi5yZXF1aXJlZCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVxdWlyZWQgbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogI2UzMjtcbiAgY29udGVudDogXCIgKlwiO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_gender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gender.service */ "./src/app/services/gender.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authSvc, genderSvc, alerts, router) {
        this.authSvc = authSvc;
        this.genderSvc = genderSvc;
        this.alerts = alerts;
        this.router = router;
        this.fetchGenders();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.fetchGenders = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.genderSvc.fetchMany()];
                    case 1:
                        _a.genders = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.alerts.error(src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].findHttpError(error_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!this.validate(form)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authSvc.instructorRegister(form.value)];
                    case 1:
                        _a.sent();
                        this.alerts.success('Successfully registered!');
                        this.router.navigate(['login']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.alerts.error(src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].findHttpError(error_2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.validate = function (form) {
        if (form.value.password !== form.value.repeat_password) {
            this.errorMessage = 'Passwords do not match!';
            return false;
        }
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], RegisterComponent.prototype, "form", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_gender_service__WEBPACK_IMPORTED_MODULE_2__["GenderService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map