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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadingComponent\": function() { return /* binding */ loadingComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages */ \"./pages/index.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($input: VideoInputType!) {\\n    createVideo(input: $input) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// import YouTube from \"react-youtube\";\n\n// import \"bootstrap/dist/css/bootstrap.min.css\";\n// import withApollo from \"../lib/withApollo\";\n// import styles from \"@/styles/Home.module.css\";\n\nvar ADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\nvar initialValues = {\n    url: \"\",\n    title: \"\"\n};\nvar loadingComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n    animation: \"border\",\n    role: \"status\",\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"visually-hidden\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n    lineNumber: 41,\n    columnNumber: 3\n}, undefined);\nvar AddVideoModal = function(param) {\n    var showModal = param.showModal, setShowModal = param.setShowModal;\n    _s();\n    var handleClose = function() {\n        return setShowModal(false);\n    };\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(ADD_VIDEO, {\n        refetchQueries: [\n            {\n                query: _pages__WEBPACK_IMPORTED_MODULE_3__.GET_VIDEOS\n            }\n        ]\n    }), 2), createVideo = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading, error = ref1.error;\n    if (loading) {\n        return loadingComponent;\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 59,\n        columnNumber: 21\n    }, _this);\n    var handleSubmitForm = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(values, param) {\n            var setSubmitting, resetForm;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                setSubmitting = param.setSubmitting, resetForm = param.resetForm;\n                console.log(\"values\", values);\n                // createVideo({ variables: { url: values.url, title: values.title } });\n                createVideo({\n                    variables: {\n                        input: {\n                            url: values.url,\n                            title: values.title\n                        }\n                    }\n                });\n                resetForm();\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleSubmitForm(values, _) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                initialValues: initialValues\n            },\n            onSubmit: handleSubmitForm,\n            enableReinitialize: true,\n            children: function(props) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                    show: showModal,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {\n                                children: \"Add new entry\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"url\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {\n                                                children: \"URL\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"url\",\n                                                className: \"form-control\",\n                                                name: \"url\",\n                                                placeholder: \"Enter video url\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"title\",\n                                                className: \"form-control\",\n                                                name: \"title\",\n                                                placeholder: \"Enter video title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        props.handleSubmit();\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AddVideoModal, \"Ltd3QbPbC97mc/pmavov9utEetk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = AddVideoModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddVideoModal);\nvar _c;\n$RefreshReg$(_c, \"AddVideoModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkLXZpZGVvLW1vZGFsLnRzeD8xMTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICAvLyAgIENvbnRhaW5lcixcclxuICAvLyAgIFJvdyxcclxuICAvLyAgIENvbCxcclxuICAvLyAgIENhcmQsXHJcbiAgU3Bpbm5lcixcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgRm9ybSxcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIGltcG9ydCBZb3VUdWJlIGZyb20gXCJyZWFjdC15b3V0dWJlXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbi8vIGltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG4vLyBpbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vbGliL3dpdGhBcG9sbG9cIjtcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEdFVF9WSURFT1MgfSBmcm9tIFwiQC9wYWdlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFZpZGVvSW5wdXRUeXBlIHtcclxuICB1cmw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBRERfVklERU8gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlVmlkZW8oJGlucHV0OiBWaWRlb0lucHV0VHlwZSEpIHtcclxuICAgIGNyZWF0ZVZpZGVvKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgdXJsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcclxuICB1cmw6IFwiXCIsXHJcbiAgdGl0bGU6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGluZ0NvbXBvbmVudCA9IChcclxuICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gIDwvU3Bpbm5lcj5cclxuKTtcclxuXHJcbmNvbnN0IEFkZFZpZGVvTW9kYWwgPSAoeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCB9OiBhbnkpID0+IHtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgY29uc3QgW2NyZWF0ZVZpZGVvLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oQUREX1ZJREVPLCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICB7cXVlcnk6IEdFVF9WSURFT1N9LFxyXG4gICAgLy8gICAnR2V0Q29tbWVudHMnIC8vIFF1ZXJ5IG5hbWVcclxuICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gbG9hZGluZ0NvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPmBFcnJvciEgJHtlcnJvci5tZXNzYWdlfWA8L3A+O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRGb3JtID0gYXN5bmMgKFxyXG4gICAgdmFsdWVzOiBhbnksXHJcbiAgICB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9OiBhbnlcclxuICApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidmFsdWVzXCIsIHZhbHVlcyk7XHJcbiAgICAvLyBjcmVhdGVWaWRlbyh7IHZhcmlhYmxlczogeyB1cmw6IHZhbHVlcy51cmwsIHRpdGxlOiB2YWx1ZXMudGl0bGUgfSB9KTtcclxuICAgIGNyZWF0ZVZpZGVvKHsgdmFyaWFibGVzOiB7IGlucHV0OiB7IHVybDogdmFsdWVzLnVybCwgdGl0bGU6IHZhbHVlcy50aXRsZSB9IH19KTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBpbml0aWFsVmFsdWVzIH19XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEZvcm19XHJcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgIC8vIHZhbGlkYXRpb25TY2hlbWE9e3ZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgICAgLy8gdmFsaWRhdGU9e3ZhbGlkYXRlRm9ybX1cclxuICAgICAgPlxyXG4gICAgICAgIHsocHJvcHMpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+QWRkIG5ldyBlbnRyeTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItMlwiIGNvbnRyb2xJZD1cInVybFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVSTDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmlkZW8gdXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIiBjb250cm9sSWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRpdGxlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmlkZW8gdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVTdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFZpZGVvTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VNdXRhdGlvbiIsIlNwaW5uZXIiLCJCdXR0b24iLCJNb2RhbCIsIkZvcm0iLCJGaWVsZCIsIkZvcm1payIsIkdFVF9WSURFT1MiLCJBRERfVklERU8iLCJpbml0aWFsVmFsdWVzIiwidXJsIiwidGl0bGUiLCJsb2FkaW5nQ29tcG9uZW50IiwiYW5pbWF0aW9uIiwicm9sZSIsInNwYW4iLCJjbGFzc05hbWUiLCJBZGRWaWRlb01vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGFuZGxlQ2xvc2UiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiY3JlYXRlVmlkZW8iLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicCIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXRGb3JtIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInJlc2V0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYWJsZXMiLCJpbnB1dCIsIm9uU3VibWl0IiwiZW5hYmxlUmVpbml0aWFsaXplIiwicHJvcHMiLCJzaG93Iiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJHcm91cCIsImNvbnRyb2xJZCIsIkxhYmVsIiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiRm9vdGVyIiwidmFyaWFudCIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/add-video-modal.tsx\n"));

/***/ })

});