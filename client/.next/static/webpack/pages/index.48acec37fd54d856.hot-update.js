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

/***/ "./components/add-video-modal.tsx":
/*!****************************************!*\
  !*** ./components/add-video-modal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation AddTodo($type: String!) {\\n    createVideo(url: $type, title: $type) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// import YouTube from \"react-youtube\";\n\n// import \"bootstrap/dist/css/bootstrap.min.css\";\n// import withApollo from \"../lib/withApollo\";\n// import styles from \"@/styles/Home.module.css\";\nvar ADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\n// interface FormValues {\n//   url: string;\n//   title: string;\n// }\nvar initialValues = {\n    url: \"\",\n    title: \"\"\n};\nvar AddVideoModal = function(param) {\n    var showModal = param.showModal, setShowModal = param.setShowModal;\n    _s();\n    var handleClose = function() {\n        return setShowModal(false);\n    };\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ADD_VIDEO), 2), addVideo = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading, error = ref1.error;\n    if (loading) return \"Submitting...\";\n    if (error) return \"Submission error! \".concat(error.message);\n    var handleSubmitForm = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(values, param) {\n            var setSubmitting, resetForm;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                setSubmitting = param.setSubmitting, resetForm = param.resetForm;\n                addVideo({\n                    variables: {\n                        url: values.url,\n                        title: values.title\n                    }\n                });\n                console.log(\"values\", values);\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleSubmitForm(values, _) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                initialValues: initialValues\n            },\n            onSubmit: handleSubmitForm,\n            enableReinitialize: true,\n            children: function(props) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Modal, {\n                    show: showModal,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Modal.Title, {\n                                children: \"Add new entry\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Modal.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"url\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Label, {\n                                                children: \"URL\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"url\",\n                                                className: \"form-control\",\n                                                name: \"url\",\n                                                placeholder: \"Enter video url\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Label, {\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"title\",\n                                                className: \"form-control\",\n                                                name: \"title\",\n                                                placeholder: \"Enter video title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        props.handleSubmit();\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AddVideoModal, \"TIMgwhV3PJ5jmgplcw3WN9aBRw8=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = AddVideoModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddVideoModal);\nvar _c;\n$RefreshReg$(_c, \"AddVideoModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dEQUNKbUMsSUFBSSxFQUFDLE1BQU07Z0RBQ1hDLEVBQUUsRUFBQyxPQUFPO2dEQUNWSixTQUFTLEVBQUMsY0FBYztnREFDeEJLLElBQUksRUFBQyxPQUFPO2dEQUNaQyxXQUFXLEVBQUMsbUJBQW1COzs7OztxREFDL0I7Ozs7Ozs2Q0FDUzs7Ozs7O3FDQUNSOzs7OztpQ0FDSTtzQ0FDYiw4REFBQ3hDLHlEQUFZOzs4Q0FDWCw4REFBQ0QsbURBQU07b0NBQUMyQyxPQUFPLEVBQUMsV0FBVztvQ0FBQ0MsT0FBTyxFQUFFaEMsV0FBVzs4Q0FBRSxPQUVsRDs7Ozs7eUNBQVM7OENBQ1QsOERBQUNaLG1EQUFNO29DQUNMMkMsT0FBTyxFQUFDLFNBQVM7b0NBQ2pCTCxJQUFJLEVBQUMsUUFBUTtvQ0FDYk0sT0FBTyxFQUFFLFNBQUNDLENBQUMsRUFBSzt3Q0FDZEEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQzt3Q0FDbkJuQixLQUFLLENBQUNvQixZQUFZLEVBQUUsQ0FBQztvQ0FDdkIsQ0FBQzs4Q0FDRixNQUVEOzs7Ozt5Q0FBUzs7Ozs7O2lDQUNJOzs7Ozs7eUJBQ1QsQ0FDUjtZQUNKLENBQUM7Ozs7O2lCQUNNO3FCQUNSLENBQ0g7QUFDSixDQUFDO0dBekVLdEMsYUFBYTs7UUFHNEJWLHVEQUFXOzs7QUFIcERVLEtBQUFBLGFBQWE7QUEyRW5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGQtdmlkZW8tbW9kYWwudHN4PzExMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIC8vICAgQ29udGFpbmVyLFxyXG4gIC8vICAgUm93LFxyXG4gIC8vICAgQ29sLFxyXG4gIC8vICAgQ2FyZCxcclxuICAvLyAgIFNwaW5uZXIsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIEZvcm0sXHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBpbXBvcnQgWW91VHViZSBmcm9tIFwicmVhY3QteW91dHViZVwiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG4vLyBpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuLy8gaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uL2xpYi93aXRoQXBvbGxvXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQUREX1ZJREVPID0gZ3FsYFxyXG4gIG11dGF0aW9uIEFkZFRvZG8oJHR5cGU6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVZpZGVvKHVybDogJHR5cGUsIHRpdGxlOiAkdHlwZSkge1xyXG4gICAgICB1cmxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vLyBpbnRlcmZhY2UgRm9ybVZhbHVlcyB7XHJcbi8vICAgdXJsOiBzdHJpbmc7XHJcbi8vICAgdGl0bGU6IHN0cmluZztcclxuLy8gfVxyXG5cclxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcclxuICB1cmw6IFwiXCIsXHJcbiAgdGl0bGU6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCBBZGRWaWRlb01vZGFsID0gKHsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbYWRkVmlkZW8sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihBRERfVklERU8pO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gJ1N1Ym1pdHRpbmcuLi4nO1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIGBTdWJtaXNzaW9uIGVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Rm9ybSA9IGFzeW5jICh2YWx1ZXM6IGFueSwgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG5cclxuICAgIGFkZFZpZGVvKHsgdmFyaWFibGVzOiB7IHVybDogdmFsdWVzLnVybCwgdGl0bGU6IHZhbHVlcy50aXRsZSB9IH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZXNcIiwgdmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgaW5pdGlhbFZhbHVlcyB9fVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRGb3JtfVxyXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAvLyB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgIC8vIHZhbGlkYXRlPXt2YWxpZGF0ZUZvcm19XHJcbiAgICAgID5cclxuICAgICAgICB7KHByb3BzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPkFkZCBuZXcgZW50cnk8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIiBjb250cm9sSWQ9XCJ1cmxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5VUkw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZpZGVvIHVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0yXCIgY29udHJvbElkPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5UaXRsZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZpZGVvIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRWaWRlb01vZGFsO1xyXG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlTXV0YXRpb24iLCJCdXR0b24iLCJNb2RhbCIsIkZvcm0iLCJGaWVsZCIsIkZvcm1payIsIkFERF9WSURFTyIsImluaXRpYWxWYWx1ZXMiLCJ1cmwiLCJ0aXRsZSIsIkFkZFZpZGVvTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVDbG9zZSIsImFkZFZpZGVvIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXRGb3JtIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInJlc2V0Rm9ybSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInByb3BzIiwic2hvdyIsIm9uSGlkZSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5IiwiR3JvdXAiLCJjbGFzc05hbWUiLCJjb250cm9sSWQiLCJMYWJlbCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIkZvb3RlciIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/add-video-modal.tsx\n"));

/***/ })

});