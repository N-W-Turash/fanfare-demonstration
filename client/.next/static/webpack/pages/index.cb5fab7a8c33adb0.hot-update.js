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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadingComponent\": function() { return /* binding */ loadingComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation AddTodo($type: String!) {\\n    addTodo(type: $type) {\\n      id\\n      type\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($input: VideoInputType!) {\\n    createVideo(input: $input) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($url: String!, $title: String!) {\\n    createVideo(url: $url, title: $title) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// import YouTube from \"react-youtube\";\n\nvar ADD_TODO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nvar XADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nvar ADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2());\nvar initialValues = {\n    url: \"\",\n    title: \"\"\n};\nvar loadingComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n    animation: \"border\",\n    role: \"status\",\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"visually-hidden\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n    lineNumber: 59,\n    columnNumber: 3\n}, undefined);\nvar AddVideoModal = function(param) {\n    var showModal = param.showModal, setShowModal = param.setShowModal;\n    _s();\n    var handleClose = function() {\n        return setShowModal(false);\n    };\n    //   {\n    //     \"message\": \"Unknown argument \\\"url\\\" on field \\\"Mutation.createVideo\\\".\",\n    //     \"locations\": [\n    //         {\n    //             \"line\": 2,\n    //             \"column\": 15\n    //         }\n    //     ],\n    //     \"extensions\": {\n    //         \"code\": \"GRAPHQL_VALIDATION_FAILED\",\n    //         \"exception\": {\n    //             \"stacktrace\": [\n    //                 \"GraphQLError: Unknown argument \\\"url\\\" on field \\\"Mutation.createVideo\\\".\",\n    //                 \"    at Object.Argument (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\validation\\\\rules\\\\KnownArgumentNamesRule.js:46:11)\",\n    //                 \"    at Object.enter (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\language\\\\visitor.js:301:32)\",\n    //                 \"    at Object.enter (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\utilities\\\\TypeInfo.js:391:27)\",\n    //                 \"    at visit (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\language\\\\visitor.js:197:21)\",\n    //                 \"    at validate (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\validation\\\\validate.js:91:24)\",\n    //                 \"    at validate (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\requestPipeline.ts:474:27)\",\n    //                 \"    at processGraphQLRequest (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\requestPipeline.ts:265:30)\",\n    //                 \"    at runMicrotasks (<anonymous>)\",\n    //                 \"    at processTicksAndRejections (node:internal/process/task_queues:96:5)\",\n    //                 \"    at processHTTPRequest (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\runHttpQuery.ts:436:24)\"\n    //             ]\n    //         }\n    //     }\n    // }\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(XADD_VIDEO, {\n        refetchQueries: [\n            {\n                query: GET_POST\n            },\n            \"GetComments\" // Query name\n        ]\n    }), 2), createVideo = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading, error = ref1.error;\n    //   if (loading) return \"Submitting...\";\n    //   if (error) return `Submission error! ${error.message}`;\n    if (loading) {\n        return loadingComponent;\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 107,\n        columnNumber: 21\n    }, _this);\n    var handleSubmitForm = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(values, param) {\n            var setSubmitting, resetForm;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                setSubmitting = param.setSubmitting, resetForm = param.resetForm;\n                console.log(\"values\", values);\n                // createVideo({ variables: { url: values.url, title: values.title } });\n                createVideo({\n                    variables: {\n                        input: {\n                            url: values.url,\n                            title: values.title\n                        }\n                    }\n                });\n                resetForm();\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleSubmitForm(values, _) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                initialValues: initialValues\n            },\n            onSubmit: handleSubmitForm,\n            enableReinitialize: true,\n            children: function(props) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                    show: showModal,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Title, {\n                                children: \"Add new entry\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"url\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                                children: \"URL\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"url\",\n                                                className: \"form-control\",\n                                                name: \"url\",\n                                                placeholder: \"Enter video url\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 147,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"title\",\n                                                className: \"form-control\",\n                                                name: \"title\",\n                                                placeholder: \"Enter video title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 148,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        props.handleSubmit();\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 13\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n            lineNumber: 121,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AddVideoModal, \"Ltd3QbPbC97mc/pmavov9utEetk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = AddVideoModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddVideoModal);\nvar _c;\n$RefreshReg$(_c, \"AddVideoModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYLDhEQUFDRCxtREFBTTtvQ0FBQ3NELE9BQU8sRUFBQyxXQUFXO29DQUFDQyxPQUFPLEVBQUVwQyxXQUFXOzhDQUFFLE9BRWxEOzs7Ozt5Q0FBUzs4Q0FDVCw4REFBQ25CLG1EQUFNO29DQUNMc0QsT0FBTyxFQUFDLFNBQVM7b0NBQ2pCTCxJQUFJLEVBQUMsUUFBUTtvQ0FDYk0sT0FBTyxFQUFFLFNBQUNDLENBQUMsRUFBSzt3Q0FDZEEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQzt3Q0FDbkJsQixLQUFLLENBQUNtQixZQUFZLEVBQUUsQ0FBQztvQ0FDdkIsQ0FBQzs4Q0FDRixNQUVEOzs7Ozt5Q0FBUzs7Ozs7O2lDQUNJOzs7Ozs7eUJBQ1QsQ0FDUjtZQUNKLENBQUM7Ozs7O2lCQUNNO3FCQUNSLENBQ0g7QUFDSixDQUFDO0dBbkhLMUMsYUFBYTs7UUErQitCbEIsdURBQVc7OztBQS9CdkRrQixLQUFBQSxhQUFhO0FBcUhuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkLXZpZGVvLW1vZGFsLnRzeD8xMTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICAvLyAgIENvbnRhaW5lcixcclxuICAvLyAgIFJvdyxcclxuICAvLyAgIENvbCxcclxuICAvLyAgIENhcmQsXHJcbiAgU3Bpbm5lcixcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgRm9ybSxcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIGltcG9ydCBZb3VUdWJlIGZyb20gXCJyZWFjdC15b3V0dWJlXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbi8vIGltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG4vLyBpbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vbGliL3dpdGhBcG9sbG9cIjtcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEdFVF9WSURFT1MgfSBmcm9tIFwiQC9wYWdlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFZpZGVvSW5wdXRUeXBlIHtcclxuICB1cmw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBRERfVE9ETyA9IGdxbGBcclxuICBtdXRhdGlvbiBBZGRUb2RvKCR0eXBlOiBTdHJpbmchKSB7XHJcbiAgICBhZGRUb2RvKHR5cGU6ICR0eXBlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHR5cGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBYQUREX1ZJREVPID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVZpZGVvKCRpbnB1dDogVmlkZW9JbnB1dFR5cGUhKSB7XHJcbiAgICBjcmVhdGVWaWRlbyhpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHVybFxyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFERF9WSURFTyA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVWaWRlbygkdXJsOiBTdHJpbmchLCAkdGl0bGU6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVZpZGVvKHVybDogJHVybCwgdGl0bGU6ICR0aXRsZSkge1xyXG4gICAgICB1cmxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gIHVybDogXCJcIixcclxuICB0aXRsZTogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkaW5nQ29tcG9uZW50ID0gKFxyXG4gIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgPC9TcGlubmVyPlxyXG4pO1xyXG5cclxuY29uc3QgQWRkVmlkZW9Nb2RhbCA9ICh7IHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIFwibWVzc2FnZVwiOiBcIlVua25vd24gYXJndW1lbnQgXFxcInVybFxcXCIgb24gZmllbGQgXFxcIk11dGF0aW9uLmNyZWF0ZVZpZGVvXFxcIi5cIixcclxuICAvLyAgICAgXCJsb2NhdGlvbnNcIjogW1xyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgIFwibGluZVwiOiAyLFxyXG4gIC8vICAgICAgICAgICAgIFwiY29sdW1uXCI6IDE1XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIF0sXHJcbiAgLy8gICAgIFwiZXh0ZW5zaW9uc1wiOiB7XHJcbiAgLy8gICAgICAgICBcImNvZGVcIjogXCJHUkFQSFFMX1ZBTElEQVRJT05fRkFJTEVEXCIsXHJcbiAgLy8gICAgICAgICBcImV4Y2VwdGlvblwiOiB7XHJcbiAgLy8gICAgICAgICAgICAgXCJzdGFja3RyYWNlXCI6IFtcclxuICAvLyAgICAgICAgICAgICAgICAgXCJHcmFwaFFMRXJyb3I6IFVua25vd24gYXJndW1lbnQgXFxcInVybFxcXCIgb24gZmllbGQgXFxcIk11dGF0aW9uLmNyZWF0ZVZpZGVvXFxcIi5cIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgT2JqZWN0LkFyZ3VtZW50IChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXHZhbGlkYXRpb25cXFxccnVsZXNcXFxcS25vd25Bcmd1bWVudE5hbWVzUnVsZS5qczo0NjoxMSlcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgT2JqZWN0LmVudGVyIChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXGxhbmd1YWdlXFxcXHZpc2l0b3IuanM6MzAxOjMyKVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCBPYmplY3QuZW50ZXIgKEc6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RzXFxcXGZhbmZhcmUtZGVtb25zdHJhdGlvblxcXFxzZXJ2ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGdyYXBocWxcXFxcdXRpbGl0aWVzXFxcXFR5cGVJbmZvLmpzOjM5MToyNylcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgdmlzaXQgKEc6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RzXFxcXGZhbmZhcmUtZGVtb25zdHJhdGlvblxcXFxzZXJ2ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGdyYXBocWxcXFxcbGFuZ3VhZ2VcXFxcdmlzaXRvci5qczoxOTc6MjEpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHZhbGlkYXRlIChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXHZhbGlkYXRpb25cXFxcdmFsaWRhdGUuanM6OTE6MjQpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHZhbGlkYXRlIChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxhcG9sbG8tc2VydmVyLWNvcmVcXFxcc3JjXFxcXHJlcXVlc3RQaXBlbGluZS50czo0NzQ6MjcpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHByb2Nlc3NHcmFwaFFMUmVxdWVzdCAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcYXBvbGxvLXNlcnZlci1jb3JlXFxcXHNyY1xcXFxyZXF1ZXN0UGlwZWxpbmUudHM6MjY1OjMwKVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCBydW5NaWNyb3Rhc2tzICg8YW5vbnltb3VzPilcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgcHJvY2Vzc1RpY2tzQW5kUmVqZWN0aW9ucyAobm9kZTppbnRlcm5hbC9wcm9jZXNzL3Rhc2tfcXVldWVzOjk2OjUpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHByb2Nlc3NIVFRQUmVxdWVzdCAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcYXBvbGxvLXNlcnZlci1jb3JlXFxcXHNyY1xcXFxydW5IdHRwUXVlcnkudHM6NDM2OjI0KVwiXHJcbiAgLy8gICAgICAgICAgICAgXVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBbY3JlYXRlVmlkZW8sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihYQUREX1ZJREVPLCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICB7cXVlcnk6IEdFVF9QT1NUfSwgLy8gRG9jdW1lbnROb2RlIG9iamVjdCBwYXJzZWQgd2l0aCBncWxcclxuICAgICAgJ0dldENvbW1lbnRzJyAvLyBRdWVyeSBuYW1lXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIC8vICAgaWYgKGxvYWRpbmcpIHJldHVybiBcIlN1Ym1pdHRpbmcuLi5cIjtcclxuICAvLyAgIGlmIChlcnJvcikgcmV0dXJuIGBTdWJtaXNzaW9uIGVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIGxvYWRpbmdDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5gRXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gPC9wPjtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Rm9ybSA9IGFzeW5jIChcclxuICAgIHZhbHVlczogYW55LFxyXG4gICAgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfTogYW55XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlc1wiLCB2YWx1ZXMpO1xyXG4gICAgLy8gY3JlYXRlVmlkZW8oeyB2YXJpYWJsZXM6IHsgdXJsOiB2YWx1ZXMudXJsLCB0aXRsZTogdmFsdWVzLnRpdGxlIH0gfSk7XHJcbiAgICBjcmVhdGVWaWRlbyh7IHZhcmlhYmxlczogeyBpbnB1dDogeyB1cmw6IHZhbHVlcy51cmwsIHRpdGxlOiB2YWx1ZXMudGl0bGUgfSB9fSk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgaW5pdGlhbFZhbHVlcyB9fVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRGb3JtfVxyXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAvLyB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgIC8vIHZhbGlkYXRlPXt2YWxpZGF0ZUZvcm19XHJcbiAgICAgID5cclxuICAgICAgICB7KHByb3BzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPkFkZCBuZXcgZW50cnk8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIiBjb250cm9sSWQ9XCJ1cmxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5VUkw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZpZGVvIHVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0yXCIgY29udHJvbElkPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5UaXRsZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZpZGVvIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRWaWRlb01vZGFsO1xyXG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlTXV0YXRpb24iLCJTcGlubmVyIiwiQnV0dG9uIiwiTW9kYWwiLCJGb3JtIiwiRmllbGQiLCJGb3JtaWsiLCJBRERfVE9ETyIsIlhBRERfVklERU8iLCJBRERfVklERU8iLCJpbml0aWFsVmFsdWVzIiwidXJsIiwidGl0bGUiLCJsb2FkaW5nQ29tcG9uZW50IiwiYW5pbWF0aW9uIiwicm9sZSIsInNwYW4iLCJjbGFzc05hbWUiLCJBZGRWaWRlb01vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGFuZGxlQ2xvc2UiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiR0VUX1BPU1QiLCJjcmVhdGVWaWRlbyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJwIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdEZvcm0iLCJ2YWx1ZXMiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsImlucHV0Iiwib25TdWJtaXQiLCJlbmFibGVSZWluaXRpYWxpemUiLCJwcm9wcyIsInNob3ciLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkdyb3VwIiwiY29udHJvbElkIiwiTGFiZWwiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJGb290ZXIiLCJ2YXJpYW50Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/add-video-modal.tsx\n"));

/***/ })

});