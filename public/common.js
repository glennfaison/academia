(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/crud.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var CrudService = /** @class */ (function () {
    function CrudService(httpSvc, apiEndpoint) {
        this.httpSvc = httpSvc;
        this.apiEndpoint = apiEndpoint;
    }
    CrudService.prototype.createOne = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/" + this.apiEndpoint;
                        return [4 /*yield*/, this.httpSvc.post(url, data, true)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CrudService.prototype.fetchMany = function (detailed) {
        if (detailed === void 0) { detailed = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/" + this.apiEndpoint;
                        return [4 /*yield*/, this.httpSvc.get(url, {}, true)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error || !Array.isArray(res)) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CrudService.prototype.fetchOne = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/" + this.apiEndpoint + "/" + id;
                        return [4 /*yield*/, this.httpSvc.get(url, {}, true)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CrudService.prototype.updateOne = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/" + this.apiEndpoint + "/" + data.id;
                        return [4 /*yield*/, this.httpSvc.put(url, data, true)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [2 /*return*/, res];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CrudService.prototype.deleteOne = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, res, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/" + this.apiEndpoint + "/" + id;
                        return [4 /*yield*/, this.httpSvc.delete(url, {}, true)];
                    case 1:
                        res = _a.sent();
                        if (!!res.error) {
                            throw res;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], String])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/services/gender.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/gender.service.ts ***!
  \********************************************/
/*! exports provided: GenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderService", function() { return GenderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud.service */ "./src/app/services/crud.service.ts");




var GenderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GenderService, _super);
    function GenderService(httpSvc) {
        var _this = _super.call(this, httpSvc, 'genders') || this;
        _this.httpSvc = httpSvc;
        return _this;
    }
    GenderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], GenderService);
    return GenderService;
}(_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map