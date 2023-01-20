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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_VIDEOS\": function() { return /* binding */ GET_VIDEOS; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withApollo */ \"./lib/withApollo.ts\");\n/* harmony import */ var _components_add_video_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/add-video-modal */ \"./components/add-video-modal.tsx\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/loader */ \"./components/loader.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query {\\n    videos {\\n      _id\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar GET_VIDEOS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject());\nvar Home = function() {\n    _s();\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(GET_VIDEOS), loading = ref.loading, error = ref.error, data = ref.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), show = ref1[0], setShow = ref1[1];\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, _this);\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 21\n    }, _this);\n    var videos = data.videos;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Fanfare Demonstration\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Container, {\n                    fluid: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            className: \"text-light mb-4 text-center\",\n                            children: \"FANFARE DEMONSTRATION\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"d-grid col-4 gap-2 mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                variant: \"primary\",\n                                size: \"lg\",\n                                className: \"mb-4 rounded-1\",\n                                onClick: function() {\n                                    return setShow(true);\n                                },\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {\n                            children: videos.map(function(video) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {\n                                    md: 4,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {\n                                        className: \"mb-4 \".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().cardDark)),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Card.Body, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Card.Title, {\n                                                    children: video === null || video === void 0 ? void 0 : video.title\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 23\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().videoWrapper),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                        videoId: video === null || video === void 0 ? void 0 : video.url.replace(\"https://youtu.be/\", \"\"),\n                                                        id: video === null || video === void 0 ? void 0 : video._id,\n                                                        title: video === null || video === void 0 ? void 0 : video.title\n                                                    }, void 0, false, {\n                                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 23\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, video === null || video === void 0 ? void 0 : video._id, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_add_video_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                showModal: show,\n                setShowModal: setShow\n            }, void 0, false, {\n                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"sXNOoLHPld6ZU79S3+E4qbbY3xY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_lib_withApollo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFVLEdBQVZBLEtBQUssQ0FBRU8sR0FBRyxDQUFDQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO3dEQUNwREMsRUFBRSxFQUFFVCxLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRVUsR0FBRzt3REFDZDFCLEtBQUssRUFBRWdCLEtBQUssYUFBTEEsS0FBSyxXQUFPLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsS0FBSyxDQUFFaEIsS0FBSzs7Ozs7NkRBQ25COzs7Ozt5REFDRTs7Ozs7O2lEQUNJOzs7Ozs2Q0FDUDttQ0FaUWdCLEtBQUssYUFBTEEsS0FBSyxXQUFLLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsS0FBSyxDQUFFVSxHQUFHOzs7O3lDQWFyQixDQUNOOzRCQUNKLENBQUMsQ0FBQzs7Ozs7aUNBQ0U7Ozs7Ozt5QkFDSTs7Ozs7cUJBQ1A7MEJBQ1AsOERBQUN2QyxtRUFBYTtnQkFBQ3dDLFNBQVMsRUFBRWhDLElBQUk7Z0JBQUVpQyxZQUFZLEVBQUVoQyxPQUFPOzs7OztxQkFBSTs7b0JBQ3hELENBQ0g7QUFDSixDQUFDO0dBMURLTCxJQUFJOztRQUN5Qlosb0RBQVE7OztBQURyQ1ksS0FBQUEsSUFBSTtBQTREViwrREFBZUwsTUFBQUEsMkRBQVUsQ0FBQ0ssSUFBSSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQsIFNwaW5uZXIsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBZb3VUdWJlIGZyb20gXCJyZWFjdC15b3V0dWJlXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gXCIuLi9saWIvd2l0aEFwb2xsb1wiO1xuaW1wb3J0IEFkZFZpZGVvTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9hZGQtdmlkZW8tbW9kYWxcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9sb2FkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgR0VUX1ZJREVPUyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHZpZGVvcyB7XG4gICAgICBfaWRcbiAgICAgIHVybFxuICAgICAgdGl0bGVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9WSURFT1MpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgfVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPmBFcnJvciEgJHtlcnJvci5tZXNzYWdlfWA8L3A+O1xuICBjb25zdCB7IHZpZGVvcyB9ID0gZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZhbmZhcmUgRGVtb25zdHJhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0IG1iLTQgdGV4dC1jZW50ZXJcIj5GQU5GQVJFIERFTU9OU1RSQVRJT048L2gyPlxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBjb2wtNCBnYXAtMiBteC1hdXRvXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCByb3VuZGVkLTFcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICB7dmlkZW9zLm1hcCgodmlkZW86IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGtleT17dmlkZW8/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2BtYi00ICR7c3R5bGVzLmNhcmREYXJrfWB9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnt2aWRlbz8udGl0bGV9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxZb3VUdWJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9e3ZpZGVvPy51cmwucmVwbGFjZShcImh0dHBzOi8veW91dHUuYmUvXCIsIFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dmlkZW8/Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3ZpZGVvPy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgICAgPEFkZFZpZGVvTW9kYWwgc2hvd01vZGFsPXtzaG93fSBzZXRTaG93TW9kYWw9e3NldFNob3d9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKEhvbWUpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsImdxbCIsInVzZVF1ZXJ5IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQ2FyZCIsIkJ1dHRvbiIsIllvdVR1YmUiLCJ3aXRoQXBvbGxvIiwiQWRkVmlkZW9Nb2RhbCIsIkxvYWRlciIsInN0eWxlcyIsIkdFVF9WSURFT1MiLCJIb21lIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInNob3ciLCJzZXRTaG93IiwicCIsIm1lc3NhZ2UiLCJ2aWRlb3MiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImZsdWlkIiwiaDIiLCJkaXYiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJtYXAiLCJ2aWRlbyIsIm1kIiwiY2FyZERhcmsiLCJCb2R5IiwiVGl0bGUiLCJ2aWRlb1dyYXBwZXIiLCJ2aWRlb0lkIiwidXJsIiwicmVwbGFjZSIsImlkIiwiX2lkIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});