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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withApollo */ \"./lib/withApollo.ts\");\n/* harmony import */ var _components_add_video_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/add-video-modal */ \"./components/add-video-modal.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query {\\n    videos {\\n      _id\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject());\n// const ADD_VIDEO = gql`\n//   mutation AddTodo($type: String!) {\n//     createVideo(url: $type, title: $type) {\n//       url\n//       title\n//     }\n//   }\n// `;\n// interface FormValues {\n//   url: string;\n//   title: string;\n// }\n// const initialValues = {\n//   url: \"\",\n//   title: \"\",\n// };\nvar loadingComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Spinner, {\n    animation: \"border\",\n    role: \"status\",\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"visually-hidden\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n    lineNumber: 51,\n    columnNumber: 3\n}, undefined);\nvar Home = function() {\n    _s();\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(QUERY), loading = ref.loading, error = ref.error, data = ref.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), show = ref1[0], setShow = ref1[1];\n    // const handleClose = () => setShow(false);\n    // const handleShow = () => setShow(true);\n    if (loading) {\n        return loadingComponent;\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 67,\n        columnNumber: 21\n    }, _this);\n    var videos = data.videos;\n    // console.log(videos);\n    // const handleSubmitForm = async (values: any) => {\n    //   console.log(\"values\", values);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Fanfare Demonstration\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n                    fluid: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            className: \"text-light mb-4 text-center\",\n                            children: \"FANFARE DEMONSTRATION\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"d-grid col-4 gap-2 mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                variant: \"primary\",\n                                size: \"lg\",\n                                className: \"mb-4 rounded-1\",\n                                onClick: function() {\n                                    return setShow(true);\n                                },\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n                            children: videos.map(function(video) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                                    md: 4,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                                        className: \"mb-4 \".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().cardDark)),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Body, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Title, {\n                                                    children: video === null || video === void 0 ? void 0 : video.title\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 23\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().videoWrapper),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                        videoId: video === null || video === void 0 ? void 0 : video.url.replace(\"https://youtu.be/\", \"\"),\n                                                        id: video === null || video === void 0 ? void 0 : video._id,\n                                                        title: video === null || video === void 0 ? void 0 : video.title\n                                                    }, void 0, false, {\n                                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 23\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, video === null || video === void 0 ? void 0 : video._id, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_add_video_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                showModal: show,\n                setShowModal: setShow\n            }, void 0, false, {\n                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"sXNOoLHPld6ZU79S3+E4qbbY3xY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_lib_withApollo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkhWLCtEQUFlVCxNQUFBQSwyREFBVSxDQUFDUyxJQUFJLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIENhcmQsXG4gIFNwaW5uZXIsXG4gIEJ1dHRvbixcbiAgLy8gTW9kYWwsXG4gIC8vIEZvcm0sXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBZb3VUdWJlIGZyb20gXCJyZWFjdC15b3V0dWJlXCI7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vbGliL3dpdGhBcG9sbG9cIjtcbmltcG9ydCBBZGRWaWRlb01vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvYWRkLXZpZGVvLW1vZGFsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICB2aWRlb3Mge1xuICAgICAgX2lkXG4gICAgICB1cmxcbiAgICAgIHRpdGxlXG4gICAgfVxuICB9XG5gO1xuXG4vLyBjb25zdCBBRERfVklERU8gPSBncWxgXG4vLyAgIG11dGF0aW9uIEFkZFRvZG8oJHR5cGU6IFN0cmluZyEpIHtcbi8vICAgICBjcmVhdGVWaWRlbyh1cmw6ICR0eXBlLCB0aXRsZTogJHR5cGUpIHtcbi8vICAgICAgIHVybFxuLy8gICAgICAgdGl0bGVcbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGludGVyZmFjZSBGb3JtVmFsdWVzIHtcbi8vICAgdXJsOiBzdHJpbmc7XG4vLyAgIHRpdGxlOiBzdHJpbmc7XG4vLyB9XG5cbi8vIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4vLyAgIHVybDogXCJcIixcbi8vICAgdGl0bGU6IFwiXCIsXG4vLyB9O1xuXG5jb25zdCBsb2FkaW5nQ29tcG9uZW50ID0gKFxuICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgPC9TcGlubmVyPlxuKTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUlkpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcbiAgLy8gY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gbG9hZGluZ0NvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPmBFcnJvciEgJHtlcnJvci5tZXNzYWdlfWA8L3A+O1xuICBjb25zdCB7IHZpZGVvcyB9ID0gZGF0YTtcbiAgLy8gY29uc29sZS5sb2codmlkZW9zKTtcblxuICAvLyBjb25zdCBoYW5kbGVTdWJtaXRGb3JtID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJ2YWx1ZXNcIiwgdmFsdWVzKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZhbmZhcmUgRGVtb25zdHJhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0IG1iLTQgdGV4dC1jZW50ZXJcIj5GQU5GQVJFIERFTU9OU1RSQVRJT048L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkIGNvbC00IGdhcC0yICBteC1hdXRvXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCByb3VuZGVkLTFcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICB7dmlkZW9zLm1hcCgodmlkZW86IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGtleT17dmlkZW8/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2BtYi00ICR7c3R5bGVzLmNhcmREYXJrfWB9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnt2aWRlbz8udGl0bGV9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxZb3VUdWJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9e3ZpZGVvPy51cmwucmVwbGFjZShcImh0dHBzOi8veW91dHUuYmUvXCIsIFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dmlkZW8/Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3ZpZGVvPy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgICAgPEFkZFZpZGVvTW9kYWwgc2hvd01vZGFsPXtzaG93fSBzZXRTaG93TW9kYWw9e3NldFNob3d9IC8+XG4gICAgICB7LyogPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGluaXRpYWxWYWx1ZXMgfX1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEZvcm19XG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cbiAgICAgICAgLy8gdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYX1cbiAgICAgICAgLy8gdmFsaWRhdGU9e3ZhbGlkYXRlRm9ybX1cbiAgICAgID5cbiAgICAgICAgeyhwcm9wcykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPkFkZCBuZXcgZW50cnk8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0yXCIgY29udHJvbElkPVwidXJsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVSTDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmlkZW8gdXJsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIiBjb250cm9sSWQ9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5UaXRsZTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZpZGVvIHRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybWlrPiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oSG9tZSk7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiZ3FsIiwidXNlUXVlcnkiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiU3Bpbm5lciIsIkJ1dHRvbiIsIllvdVR1YmUiLCJ3aXRoQXBvbGxvIiwiQWRkVmlkZW9Nb2RhbCIsInN0eWxlcyIsIlFVRVJZIiwibG9hZGluZ0NvbXBvbmVudCIsImFuaW1hdGlvbiIsInJvbGUiLCJzcGFuIiwiY2xhc3NOYW1lIiwiSG9tZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJzaG93Iiwic2V0U2hvdyIsInAiLCJtZXNzYWdlIiwidmlkZW9zIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJmbHVpZCIsImgyIiwiZGl2IiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIiwibWFwIiwidmlkZW8iLCJtZCIsImNhcmREYXJrIiwiQm9keSIsIlRpdGxlIiwidmlkZW9XcmFwcGVyIiwidmlkZW9JZCIsInVybCIsInJlcGxhY2UiLCJpZCIsIl9pZCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});