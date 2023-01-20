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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadingComponent\": function() { return /* binding */ loadingComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages */ \"./pages/index.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($input: VideoInputType!) {\\n    createVideo(input: $input) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\nvar initialValues = {\n    url: \"\",\n    title: \"\"\n};\nvar loadingComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n    animation: \"border\",\n    role: \"status\",\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"visually-hidden\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n    lineNumber: 33,\n    columnNumber: 3\n}, undefined);\nvar AddVideoModal = function(param) {\n    var showModal = param.showModal, setShowModal = param.setShowModal;\n    _s();\n    var handleClose = function() {\n        return setShowModal(false);\n    };\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(ADD_VIDEO, {\n        refetchQueries: [\n            {\n                query: _pages__WEBPACK_IMPORTED_MODULE_3__.GET_VIDEOS\n            }\n        ]\n    }), 2), createVideo = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading, error = ref1.error;\n    if (loading) {\n        return loadingComponent;\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 51,\n        columnNumber: 21\n    }, _this);\n    var handleSubmitForm = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(values, param) {\n            var setSubmitting, resetForm;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                setSubmitting = param.setSubmitting, resetForm = param.resetForm;\n                console.log(\"values\", values);\n                createVideo({\n                    variables: {\n                        input: {\n                            url: values.url,\n                            title: values.title\n                        }\n                    }\n                });\n                resetForm();\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleSubmitForm(values, _) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                initialValues: initialValues\n            },\n            onSubmit: handleSubmitForm,\n            enableReinitialize: true,\n            children: function(props) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                    show: showModal,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {\n                                children: \"Add new entry\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"url\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {\n                                                children: \"URL\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"url\",\n                                                className: \"form-control\",\n                                                name: \"url\",\n                                                placeholder: \"Enter video url\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"title\",\n                                                className: \"form-control\",\n                                                name: \"title\",\n                                                placeholder: \"Enter video title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        props.handleSubmit();\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AddVideoModal, \"Ltd3QbPbC97mc/pmavov9utEetk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = AddVideoModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddVideoModal);\nvar _c;\n$RefreshReg$(_c, \"AddVideoModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LnRzeD8xMTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICBTcGlubmVyLFxyXG4gIEJ1dHRvbixcclxuICBNb2RhbCxcclxuICBGb3JtLFxyXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgRmllbGQsIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgR0VUX1ZJREVPUyB9IGZyb20gXCJAL3BhZ2VzXCI7XHJcblxyXG5pbnRlcmZhY2UgVmlkZW9JbnB1dFR5cGUge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEFERF9WSURFTyA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVWaWRlbygkaW5wdXQ6IFZpZGVvSW5wdXRUeXBlISkge1xyXG4gICAgY3JlYXRlVmlkZW8oaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICB1cmxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gIHVybDogXCJcIixcclxuICB0aXRsZTogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkaW5nQ29tcG9uZW50ID0gKFxyXG4gIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgPC9TcGlubmVyPlxyXG4pO1xyXG5cclxuY29uc3QgQWRkVmlkZW9Nb2RhbCA9ICh7IHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICBjb25zdCBbY3JlYXRlVmlkZW8sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihBRERfVklERU8sIHtcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgIHtxdWVyeTogR0VUX1ZJREVPU30sXHJcbiAgICAvLyAgICdHZXRDb21tZW50cycgLy8gUXVlcnkgbmFtZVxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiBsb2FkaW5nQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+YEVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDwvcD47XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEZvcm0gPSBhc3luYyAoXHJcbiAgICB2YWx1ZXM6IGFueSxcclxuICAgIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH06IGFueVxyXG4gICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZXNcIiwgdmFsdWVzKTtcclxuICAgIGNyZWF0ZVZpZGVvKHsgdmFyaWFibGVzOiB7IGlucHV0OiB7IHVybDogdmFsdWVzLnVybCwgdGl0bGU6IHZhbHVlcy50aXRsZSB9IH19KTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBpbml0aWFsVmFsdWVzIH19XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEZvcm19XHJcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgIC8vIHZhbGlkYXRpb25TY2hlbWE9e3ZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgICAgLy8gdmFsaWRhdGU9e3ZhbGlkYXRlRm9ybX1cclxuICAgICAgPlxyXG4gICAgICAgIHsocHJvcHMpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+QWRkIG5ldyBlbnRyeTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItMlwiIGNvbnRyb2xJZD1cInVybFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVSTDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmlkZW8gdXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIiBjb250cm9sSWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRpdGxlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmlkZW8gdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVTdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFZpZGVvTW9kYWw7XHJcblxyXG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlTXV0YXRpb24iLCJTcGlubmVyIiwiQnV0dG9uIiwiTW9kYWwiLCJGb3JtIiwiRmllbGQiLCJGb3JtaWsiLCJHRVRfVklERU9TIiwiQUREX1ZJREVPIiwiaW5pdGlhbFZhbHVlcyIsInVybCIsInRpdGxlIiwibG9hZGluZ0NvbXBvbmVudCIsImFuaW1hdGlvbiIsInJvbGUiLCJzcGFuIiwiY2xhc3NOYW1lIiwiQWRkVmlkZW9Nb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsImNyZWF0ZVZpZGVvIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInAiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0Rm9ybSIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiaW5wdXQiLCJvblN1Ym1pdCIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInByb3BzIiwic2hvdyIsIm9uSGlkZSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5IiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIkZvb3RlciIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/add-video-modal.tsx\n"));

/***/ })

});