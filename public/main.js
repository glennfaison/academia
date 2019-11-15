(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav\">\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.creative-tim.com?ref=bda-footer\">\n          Creative Tim\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-footer\">\n          About Us\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"http://blog.creative-tim.com?ref=bda-footer\"> Blog </a>\n      </li> -->\n    </ul>\n    <div class=\"copyright\">\n      &copy; {{ today | date: \"yyyy\" }}\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login-modal/login-modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login-modal/login-modal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">\n  <h1 class=\"text-center\">Log In</h1>\n</div>\n<div class=\"card-body\">\n  <form #form=\"ngForm\" [noValidate]=\"false\">\n\n      <div class=\"d-flex flex-column flex-md-row\">\n        <div class=\"px-md-1 flex-fill required\">\n          <label> Username / Email Address </label>\n          <input class=\"form-control\" type=\"email\" name=\"email\" ngModel #email=\"ngModel\" required />\n        </div>\n      </div>\n      <div class=\"d-flex flex-column flex-md-row\">\n        <div class=\"px-md-1 flex-fill required\">\n          <label> Password </label>\n          <input class=\"form-control\" type=\"password\" name=\"password\" ngModel #password=\"ngModel\" required />\n        </div>\n      </div>\n\n  </form>\n</div>\n\n\n\n\n\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"mx-auto col-md-8\">\n      <div class=\"card\">\n\n        <div class=\"card-footer text-center\">\n          <div class=\"row\">\n            <button class=\"btn btn-fill btn-info mx-auto\" (click)=\"onSubmit(form)\" type=\"submit\">Log In</button>\n            <button class=\"btn btn-fill btn-danger mx-auto\" (click)=\"onCancel()\" type=\"cancel\">Log Out</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-absolute navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle d-inline\">\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"> </span>\n          <span class=\"navbar-toggler-bar bar2\"> </span>\n          <span class=\"navbar-toggler-bar bar3\"> </span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\"> {{ getTitle() }} </a>\n    </div>\n    <button\n      aria-label=\"Toggle navigation\"\n      class=\"navbar-toggler\"\n      (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      aria-controls=\"collapseExample\"\n      id=\"navigation\"\n      type=\"button\"\n    >\n      <span class=\"navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"> </span>\n    </button>\n    <div class=\"navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"search-bar input-group\">\n          <button\n            class=\"btn btn-link\"\n            data-target=\"#searchModal\"\n            data-toggle=\"modal\"\n            (click)=\"open(content)\"\n            id=\"search-button\"\n          >\n            <i class=\"tim-icons icon-zoom-split\"> </i>\n            <span class=\"d-lg-none d-md-block\"> Search </span>\n          </button>\n        </li>\n        <li class=\"nav-item\" ngbDropdown>\n          <a\n            class=\"nav-link\"\n            data-toggle=\"dropdown\"\n            href=\"javascript:void(0)\"\n            ngbDropdownToggle\n          >\n            <div class=\"notification d-none d-lg-block d-xl-block\"></div>\n            <i class=\"tim-icons icon-sound-wave\"> </i>\n            <p class=\"d-lg-none\">Notifications</p>\n          </a>\n          <ul class=\"dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Mike John responded to your email\n              </a>\n            </li>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                You have 5 more tasks\n              </a>\n            </li>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Your friend Michael is in town\n              </a>\n            </li>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Another notification\n              </a>\n            </li>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Another one\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"nav-item\" ngbDropdown>\n          <a\n            class=\"nav-link\"\n            data-toggle=\"dropdown\"\n            href=\"javascript:void(0)\"\n            ngbDropdownToggle\n          >\n            <div class=\"photo\">\n              <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\n            </div>\n            <b class=\"caret d-none d-lg-block d-xl-block\"> </b>\n            <p class=\"d-lg-none\" (click)=\"logout()\">Log out</p>\n          </a>\n          <ul class=\"dropdown-navbar\" ngbDropdownMenu>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" [routerLink]=\"['/my-profile']\" ngbDropdownItem>\n                Profile\n              </a>\n            </li>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Settings\n              </a>\n            </li>\n            <li class=\"dropdown-divider\"></li>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" (click)=\"lockScreen()\" ngbDropdownItem>\n                Lock Screen\n              </a>\n            </li>\n            <li class=\"dropdown-divider\"></li>\n            <li class=\"nav-link\">\n              <a class=\"nav-item\" href=\"javascript:void(0)\" (click)=\"logout()\" ngbDropdownItem>\n                Log out\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"separator d-lg-none\"></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <input\n      class=\"form-control\"\n      id=\"inlineFormInputGroup\"\n      placeholder=\"SEARCH\"\n      type=\"text\"\n    />\n\n    <button\n      aria-label=\"Close\"\n      class=\"close\"\n      data-dismiss=\"modal\"\n      type=\"button\"\n      (click)=\"modal.dismiss('Cross click')\"\n    >\n      <i class=\"tim-icons icon-simple-remove\"> </i>\n    </button>\n  </div>\n\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <a [routerLink]=\"''\" class=\"simple-text logo-mini\">\n    <div class=\"logo-img\">\n      <img src=\"./assets/img/angular2-logo-white.png\" />\n    </div>\n  </a>\n  <a [routerLink]=\"''\" class=\"simple-text logo-normal\">\n    {{'Academia'}}\n  </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <ul class=\"nav\">\n    <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{ menuItem.class }} nav-item\">\n      <a [routerLink]=\"[menuItem.path]\">\n        <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\n        <p>{{ menuItem.title }}</p>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n<!-- <div class=\"fixed-plugin\">\n  <div class=\"show-dropdown\" ngbDropdown>\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\n      <i class=\"fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul ngbDropdownMenu>\n      <li class=\"header-title\">Sidebar Background</li>\n      <li class=\"adjustments-line\">\n        <a class=\"switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\"badge-colors text-center\">\n            <span\n              class=\"badge filter badge-danger\"\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n            <span\n              class=\"badge filter badge-primary\"\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\n            <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\n            </span>\n          </div>\n          <div class=\"clearfix\"></div>\n        </a>\n      </li>\n      <li class=\"adjustments-line text-center color-change\">\n        <span class=\"color-label\"> LIGHT MODE </span>\n        <span class=\"badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\n        <span class=\"badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\n        <span class=\"color-label\"> DARK MODE </span>\n      </li>\n    </ul>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-5\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"common",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"common",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Academia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-modal/login-modal.component */ "./src/app/components/login-modal/login-modal.component.ts");










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_9__["LoginModalComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_9__["LoginModalComponent"]],
            entryComponents: [_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_9__["LoginModalComponent"]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/login-modal/login-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(authSvc, alerts, router, route, activeModal) {
        this.authSvc = authSvc;
        this.alerts = alerts;
        this.router = router;
        this.route = route;
        this.activeModal = activeModal;
    }
    LoginModalComponent.prototype.ngAfterViewInit = function () {
        this.form.value.email = this.emailOrUsername;
        this.form.value.password = this.password;
    };
    LoginModalComponent.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, email, password, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, 3, 4]);
                        if (!this.validate(form)) {
                            throw new Error(this.errorMessage);
                        }
                        _a = form.value, email = _a.email, password = _a.password;
                        return [4 /*yield*/, this.authSvc.instructorLogin(email, password)];
                    case 1:
                        _b.sent();
                        this.alerts.success('Successfully logged in');
                        this.router.navigate([this.successRedirectPath || this.route.snapshot.url]);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _b.sent();
                        this.router.navigate([this.failureRedirectPath || '/login']);
                        this.alerts.error(src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].findHttpError(error_1));
                        return [3 /*break*/, 4];
                    case 3:
                        this.activeModal.close();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginModalComponent.prototype.onCancel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authSvc.logout()];
                    case 1:
                        _a.sent();
                        this.alerts.info('Logged out');
                        this.router.navigate(['/login']);
                        this.activeModal.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginModalComponent.prototype.validate = function (form) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginModalComponent.prototype, "successRedirectPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginModalComponent.prototype, "failureRedirectPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginModalComponent.prototype, "emailOrUsername", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginModalComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginModalComponent.prototype, "form", void 0);
    LoginModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-modal',
            template: __webpack_require__(/*! raw-loader!./login-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login-modal/login-modal.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/login-modal/login-modal.component */ "./src/app/components/login-modal/login-modal.component.ts");








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, modalSvc, authSvc, route) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.modalSvc = modalSvc;
        this.authSvc = authSvc;
        this.route = route;
        // tslint:disable-next-line:variable-name
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('resize', this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            _this.$layer = document.getElementsByClassName('close-layer')[0];
            if (_this.$layer) {
                _this.$layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName('nav')[0];
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName('main-panel')[0]);
        var html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        var mainPanel = (document.getElementsByClassName('main-panel')[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                if (!mainPanel || !mainPanel.style) {
                    return;
                }
                mainPanel.style.position = '';
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var _this = this;
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName('html')[0];
        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if (this.$layer) {
                this.$layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            this.$layer = document.createElement('div');
            this.$layer.setAttribute('class', 'close-layer');
            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild(this.$layer);
            }
            else if (html.classList.contains('off-canvas-sidebar')) {
                document
                    .getElementsByClassName('wrapper-full-page')[0]
                    .appendChild(this.$layer);
            }
            setTimeout(function () {
                _this.$layer.classList.add('visible');
            }, 100);
            this.$layer.onclick = function () {
                // asign a function
                html.classList.remove('nav-open');
                _this.mobile_menu_visible = 0;
                _this.$layer.classList.remove('visible');
                setTimeout(function () {
                    _this.$layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            };
            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var _i = 0, _a = this.listTitles; _i < _a.length; _i++) {
            var listTitle = _a[_i];
            if (listTitle.path === titlee) {
                return listTitle.title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalSvc.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authSvc.logout()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.lockScreen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, _a, email, username, modalRef, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = this.route.snapshot.toString();
                        _a = src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].thisUser, email = _a.email, username = _a.username;
                        modalRef = this.modalSvc.open(src_app_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginModalComponent"], {
                            centered: false,
                            backdrop: 'static',
                        });
                        modalRef.componentInstance.successRedirectPath = path;
                        modalRef.componentInstance.failureRedirectPath = '/login';
                        modalRef.componentInstance.emailOrUsername = email || username;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, modalRef.result];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.updateColor);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ROUTES = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'icon-chart-pie-36',
        class: ''
    },
    {
        path: '/students',
        title: 'Students',
        icon: 'icon-single-02',
        class: ''
    },
    {
        path: '/instructors',
        title: 'Instructors',
        icon: 'icon-single-02',
        class: ''
    },
    {
        path: '/classrooms',
        title: 'Classrooms',
        icon: 'icon-istanbul',
        class: ''
    },
    {
        path: '/sequences',
        title: 'Sequences',
        icon: 'icon-paper',
        class: ''
    },
    {
        path: '/courses',
        title: 'Courses',
        icon: 'icon-paper',
        class: ''
    },
    {
        path: '/examinations',
        title: 'Examinations',
        icon: 'icon-paper',
        class: ''
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.sidebarColor = 'blue';
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar !== undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel !== undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () {
        this.changeSidebarColor('blue');
    };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
        this.test = new Date();
        this.sidebarColor = 'blue';
        this.isCollapsed = true;
        this.mobile_menu_visible = 0;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () { };
    AuthLayoutComponent.prototype.ngOnDestroy = function () { };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var AlertService = /** @class */ (function () {
    function AlertService(alerts) {
        this.alerts = alerts;
    }
    AlertService.prototype.show = function (message, title, position, override) {
        if (title === void 0) { title = ''; }
        if (position === void 0) { position = 'toast-top-right'; }
        if (override === void 0) { override = {}; }
        this.alerts.show("<span class=\"tim-icons icon-bell-55\" [data-notify]=\"icon\"></span> " + message, title, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ closeButton: true, enableHtml: true, toastClass: 'alert alert-primary alert-with-icon', positionClass: position }, override));
    };
    AlertService.prototype.info = function (message, title, position, override) {
        if (title === void 0) { title = ''; }
        if (position === void 0) { position = 'toast-top-right'; }
        if (override === void 0) { override = {}; }
        this.alerts.info("<span class=\"tim-icons icon-bell-55\" [data-notify]=\"icon\"></span> " + message, title, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ closeButton: true, enableHtml: true, toastClass: 'alert alert-info alert-with-icon', positionClass: position }, override));
    };
    AlertService.prototype.success = function (message, title, position, override) {
        if (title === void 0) { title = ''; }
        if (position === void 0) { position = 'toast-top-right'; }
        if (override === void 0) { override = {}; }
        this.alerts.success("<span class=\"tim-icons icon-bell-55\" [data-notify]=\"icon\"></span> " + message, title, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ closeButton: true, enableHtml: true, toastClass: 'alert alert-success alert-with-icon', positionClass: position }, override));
    };
    AlertService.prototype.warning = function (message, title, position, override) {
        if (title === void 0) { title = ''; }
        if (position === void 0) { position = 'toast-top-right'; }
        if (override === void 0) { override = {}; }
        this.alerts.warning("<span class=\"tim-icons icon-bell-55\" [data-notify]=\"icon\"></span> " + message, title, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ closeButton: true, enableHtml: true, toastClass: 'alert alert-warning alert-with-icon', positionClass: position }, override));
    };
    AlertService.prototype.error = function (message, title, position, override) {
        if (title === void 0) { title = ''; }
        if (position === void 0) { position = 'toast-top-right'; }
        if (override === void 0) { override = {}; }
        this.alerts.error("<span class=\"tim-icons icon-bell-55\" [data-notify]=\"icon\"></span> " + message, title, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ closeButton: true, enableHtml: true, toastClass: 'alert alert-danger alert-with-icon', positionClass: position }, override));
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AuthService = /** @class */ (function () {
    function AuthService(httpSvc) {
        this.httpSvc = httpSvc;
        if (!AuthService_1.accessToken) {
            AuthService_1.accessToken = localStorage.getItem('academia-jwt');
            if (!!AuthService_1.accessToken) {
                this.getThisUser();
            }
        }
    }
    AuthService_1 = AuthService;
    AuthService.prototype.instructorRegister = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/auth/instructor-registration";
                        return [4 /*yield*/, this.httpSvc.post(url, user, false)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.instructorLogin = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, user, jwt, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/auth/instructor-login";
                        return [4 /*yield*/, this.httpSvc.post(url, { email: email, password: password }, false)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        user = res.user, jwt = res.jwt;
                        AuthService_1.accessToken = jwt;
                        this.httpSvc.accessToken = jwt;
                        AuthService_1.thisUser = user;
                        localStorage.setItem('academia-jwt', jwt);
                        localStorage.setItem('academia-thisUser', JSON.stringify(user));
                        return [2 /*return*/, user];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    AuthService_1.accessToken = null;
                    AuthService_1.thisUser = null;
                    localStorage.removeItem('academia-jwt');
                    localStorage.removeItem('academia-thisUser');
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.getThisUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var browserUser, url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        browserUser = JSON.parse(localStorage.getItem('academia-thisUser'));
                        if (!!browserUser) {
                            AuthService_1.thisUser = browserUser;
                            return [2 /*return*/, browserUser];
                        }
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/auth/me";
                        return [4 /*yield*/, this.httpSvc.get(url, {})];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        AuthService_1.thisUser = res;
                        localStorage.setItem('academia-thisUser', JSON.stringify(res));
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var AuthService_1;
    AuthService = AuthService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        if (!this._accessToken) {
            this._accessToken = localStorage.getItem('academia-jwt');
        }
    }
    Object.defineProperty(HttpService.prototype, "accessToken", {
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: true,
        configurable: true
    });
    HttpService.findHttpError = function (error) {
        var errorMessage = 'Oops! An error occured.';
        if (typeof error === typeof errorMessage) {
            errorMessage = error;
        }
        try {
            if (typeof error.message === typeof errorMessage) {
                errorMessage = error.message;
            }
            if (typeof error.error === typeof errorMessage) {
                errorMessage = error.error;
            }
            if (typeof error.error.message === typeof errorMessage) {
                errorMessage = error.error.message;
            }
            if (typeof error.error.message.inner === typeof errorMessage) {
                errorMessage = error.error.message.inner;
            }
            if (typeof error.error.message.inner.message === typeof errorMessage) {
                errorMessage = error.error.message.inner.message;
            }
        }
        catch (e) { }
        return errorMessage;
    };
    HttpService.prototype.setOptions = function (withAuth) {
        if (withAuth) {
            this.options.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                // tslint:disable-next-line:object-literal-key-quotes
                'Authorization': "Bearer " + this._accessToken,
                'Content-Type': "application/json",
            });
        }
        if (withAuth && !this._accessToken) {
            this.options.headers.delete('Authorization');
        }
    };
    HttpService.prototype.getQueryParamsFromObject = function (obj) {
        var params = new URLSearchParams();
        for (var key in obj) {
            if (!!obj[key]) {
                params.set(key, obj[key]);
            }
        }
        return params.toString();
    };
    HttpService.prototype.get = function (url, requestParams, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        params = this.getQueryParamsFromObject(requestParams);
                        return [4 /*yield*/, this.http.get(url + "?" + params, this.options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.post = function (url, requestBody, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        return [4 /*yield*/, this.http.post("" + url, requestBody, this.options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, error_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.put = function (url, requestBody, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        return [4 /*yield*/, this.http.put("" + url, requestBody, this.options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, error_3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.delete = function (url, requestBody, withAuth) {
        if (withAuth === void 0) { withAuth = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, options, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setOptions(withAuth);
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](requestBody).toString();
                        options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.options, { body: params });
                        return [4 /*yield*/, this.http.delete("" + url, options).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, error_4];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiRoot: 'http://localhost:3000/api/v1',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
 =========================================================
 * Black Dashboard Angular - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/osx/Code/Angular/academia/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map