"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/withApollo.ts":
/*!***************************!*\
  !*** ./lib/withApollo.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ \"./node_modules/next-with-apollo/lib/index.js\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(function(param) {\n    var initialState = param.initialState;\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        uri: \"https://mysite.com/graphql\",\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache().restore(initialState || {})\n    });\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2l0aEFwb2xsby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQTBDO0FBQ21CO0FBRTdELCtEQUFlQSx1REFBVSxDQUFDLGdCQUFzQjtRQUFuQkcsWUFBWSxTQUFaQSxZQUFZO0lBQ3ZDLE9BQU8sSUFBSUYsd0RBQVksQ0FBQztRQUN0QkcsR0FBRyxFQUFFLDRCQUE0QjtRQUNqQ0MsS0FBSyxFQUFFLElBQUlILHlEQUFhLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDSCxZQUFZLElBQUksRUFBRSxDQUFDO0tBQ3ZELENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi93aXRoQXBvbGxvLnRzPzgwZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIm5leHQtd2l0aC1hcG9sbG9cIjtcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCh7IGluaXRpYWxTdGF0ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBcImh0dHBzOi8vbXlzaXRlLmNvbS9ncmFwaHFsXCIsXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSksXHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsid2l0aEFwb2xsbyIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJpbml0aWFsU3RhdGUiLCJ1cmkiLCJjYWNoZSIsInJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/withApollo.ts\n"));

/***/ })

});