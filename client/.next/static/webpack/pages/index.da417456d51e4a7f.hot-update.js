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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadingComponent\": function() { return /* binding */ loadingComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation AddTodo($type: String!) {\\n    addTodo(type: $type) {\\n      id\\n      type\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($input: VideoInputType!) {\\n    createVideo(input: $input) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($url: String!, $title: String!) {\\n    createVideo(url: $url, title: $title) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// import YouTube from \"react-youtube\";\n\nvar ADD_TODO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nvar XADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nvar ADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2());\nvar initialValues = {\n    url: \"\",\n    title: \"\"\n};\nvar loadingComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n    animation: \"border\",\n    role: \"status\",\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"visually-hidden\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n    lineNumber: 58,\n    columnNumber: 3\n}, undefined);\nvar AddVideoModal = function(param) {\n    var showModal = param.showModal, setShowModal = param.setShowModal;\n    _s();\n    var handleClose = function() {\n        return setShowModal(false);\n    };\n    //   {\n    //     \"message\": \"Unknown argument \\\"url\\\" on field \\\"Mutation.createVideo\\\".\",\n    //     \"locations\": [\n    //         {\n    //             \"line\": 2,\n    //             \"column\": 15\n    //         }\n    //     ],\n    //     \"extensions\": {\n    //         \"code\": \"GRAPHQL_VALIDATION_FAILED\",\n    //         \"exception\": {\n    //             \"stacktrace\": [\n    //                 \"GraphQLError: Unknown argument \\\"url\\\" on field \\\"Mutation.createVideo\\\".\",\n    //                 \"    at Object.Argument (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\validation\\\\rules\\\\KnownArgumentNamesRule.js:46:11)\",\n    //                 \"    at Object.enter (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\language\\\\visitor.js:301:32)\",\n    //                 \"    at Object.enter (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\utilities\\\\TypeInfo.js:391:27)\",\n    //                 \"    at visit (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\language\\\\visitor.js:197:21)\",\n    //                 \"    at validate (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\validation\\\\validate.js:91:24)\",\n    //                 \"    at validate (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\requestPipeline.ts:474:27)\",\n    //                 \"    at processGraphQLRequest (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\requestPipeline.ts:265:30)\",\n    //                 \"    at runMicrotasks (<anonymous>)\",\n    //                 \"    at processTicksAndRejections (node:internal/process/task_queues:96:5)\",\n    //                 \"    at processHTTPRequest (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\runHttpQuery.ts:436:24)\"\n    //             ]\n    //         }\n    //     }\n    // }\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(XADD_VIDEO), 2), createVideo = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading, error = ref1.error;\n    //   if (loading) return \"Submitting...\";\n    //   if (error) return `Submission error! ${error.message}`;\n    if (loading) {\n        return loadingComponent;\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 101,\n        columnNumber: 21\n    }, _this);\n    var handleSubmitForm = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(values, param) {\n            var setSubmitting, resetForm;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                setSubmitting = param.setSubmitting, resetForm = param.resetForm;\n                console.log(\"values\", values);\n                // createVideo({ variables: { url: values.url, title: values.title } });\n                createVideo({\n                    variables: {\n                        input: {\n                            url: values.url,\n                            title: values.title\n                        }\n                    }\n                });\n                resetForm();\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleSubmitForm(values, _) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                initialValues: initialValues\n            },\n            onSubmit: handleSubmitForm,\n            enableReinitialize: true,\n            children: function(props) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                    show: showModal,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Title, {\n                                children: \"Add new entry\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"url\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                                children: \"URL\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 131,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"url\",\n                                                className: \"form-control\",\n                                                name: \"url\",\n                                                placeholder: \"Enter video url\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 132,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 141,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"title\",\n                                                className: \"form-control\",\n                                                name: \"title\",\n                                                placeholder: \"Enter video title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 142,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        props.handleSubmit();\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 13\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n            lineNumber: 115,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AddVideoModal, \"Ltd3QbPbC97mc/pmavov9utEetk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = AddVideoModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddVideoModal);\nvar _c;\n$RefreshReg$(_c, \"AddVideoModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OENBQ1QsOERBQUNuQixtREFBTTtvQ0FDTG1ELE9BQU8sRUFBQyxTQUFTO29DQUNqQkwsSUFBSSxFQUFDLFFBQVE7b0NBQ2JNLE9BQU8sRUFBRSxTQUFDQyxDQUFDLEVBQUs7d0NBQ2RBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7d0NBQ25CbEIsS0FBSyxDQUFDbUIsWUFBWSxFQUFFLENBQUM7b0NBQ3ZCLENBQUM7OENBQ0YsTUFFRDs7Ozs7eUNBQVM7Ozs7OztpQ0FDSTs7Ozs7O3lCQUNULENBQ1I7WUFDSixDQUFDOzs7OztpQkFDTTtxQkFDUixDQUNIO0FBQ0osQ0FBQztHQTlHS3ZDLGFBQWE7O1FBK0IrQmxCLHVEQUFXOzs7QUEvQnZEa0IsS0FBQUEsYUFBYTtBQWdIbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkZC12aWRlby1tb2RhbC50c3g/MTEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgLy8gICBDb250YWluZXIsXHJcbiAgLy8gICBSb3csXHJcbiAgLy8gICBDb2wsXHJcbiAgLy8gICBDYXJkLFxyXG4gIFNwaW5uZXIsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIEZvcm0sXHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBpbXBvcnQgWW91VHViZSBmcm9tIFwicmVhY3QteW91dHViZVwiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG4vLyBpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuLy8gaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uL2xpYi93aXRoQXBvbGxvXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFZpZGVvSW5wdXRUeXBlIHtcclxuICB1cmw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBRERfVE9ETyA9IGdxbGBcclxuICBtdXRhdGlvbiBBZGRUb2RvKCR0eXBlOiBTdHJpbmchKSB7XHJcbiAgICBhZGRUb2RvKHR5cGU6ICR0eXBlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHR5cGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBYQUREX1ZJREVPID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVZpZGVvKCRpbnB1dDogVmlkZW9JbnB1dFR5cGUhKSB7XHJcbiAgICBjcmVhdGVWaWRlbyhpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHVybFxyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFERF9WSURFTyA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVWaWRlbygkdXJsOiBTdHJpbmchLCAkdGl0bGU6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVZpZGVvKHVybDogJHVybCwgdGl0bGU6ICR0aXRsZSkge1xyXG4gICAgICB1cmxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gIHVybDogXCJcIixcclxuICB0aXRsZTogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkaW5nQ29tcG9uZW50ID0gKFxyXG4gIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgPC9TcGlubmVyPlxyXG4pO1xyXG5cclxuY29uc3QgQWRkVmlkZW9Nb2RhbCA9ICh7IHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIFwibWVzc2FnZVwiOiBcIlVua25vd24gYXJndW1lbnQgXFxcInVybFxcXCIgb24gZmllbGQgXFxcIk11dGF0aW9uLmNyZWF0ZVZpZGVvXFxcIi5cIixcclxuICAvLyAgICAgXCJsb2NhdGlvbnNcIjogW1xyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgIFwibGluZVwiOiAyLFxyXG4gIC8vICAgICAgICAgICAgIFwiY29sdW1uXCI6IDE1XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIF0sXHJcbiAgLy8gICAgIFwiZXh0ZW5zaW9uc1wiOiB7XHJcbiAgLy8gICAgICAgICBcImNvZGVcIjogXCJHUkFQSFFMX1ZBTElEQVRJT05fRkFJTEVEXCIsXHJcbiAgLy8gICAgICAgICBcImV4Y2VwdGlvblwiOiB7XHJcbiAgLy8gICAgICAgICAgICAgXCJzdGFja3RyYWNlXCI6IFtcclxuICAvLyAgICAgICAgICAgICAgICAgXCJHcmFwaFFMRXJyb3I6IFVua25vd24gYXJndW1lbnQgXFxcInVybFxcXCIgb24gZmllbGQgXFxcIk11dGF0aW9uLmNyZWF0ZVZpZGVvXFxcIi5cIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgT2JqZWN0LkFyZ3VtZW50IChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXHZhbGlkYXRpb25cXFxccnVsZXNcXFxcS25vd25Bcmd1bWVudE5hbWVzUnVsZS5qczo0NjoxMSlcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgT2JqZWN0LmVudGVyIChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXGxhbmd1YWdlXFxcXHZpc2l0b3IuanM6MzAxOjMyKVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCBPYmplY3QuZW50ZXIgKEc6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RzXFxcXGZhbmZhcmUtZGVtb25zdHJhdGlvblxcXFxzZXJ2ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGdyYXBocWxcXFxcdXRpbGl0aWVzXFxcXFR5cGVJbmZvLmpzOjM5MToyNylcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgdmlzaXQgKEc6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RzXFxcXGZhbmZhcmUtZGVtb25zdHJhdGlvblxcXFxzZXJ2ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGdyYXBocWxcXFxcbGFuZ3VhZ2VcXFxcdmlzaXRvci5qczoxOTc6MjEpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHZhbGlkYXRlIChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXHZhbGlkYXRpb25cXFxcdmFsaWRhdGUuanM6OTE6MjQpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHZhbGlkYXRlIChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxhcG9sbG8tc2VydmVyLWNvcmVcXFxcc3JjXFxcXHJlcXVlc3RQaXBlbGluZS50czo0NzQ6MjcpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHByb2Nlc3NHcmFwaFFMUmVxdWVzdCAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcYXBvbGxvLXNlcnZlci1jb3JlXFxcXHNyY1xcXFxyZXF1ZXN0UGlwZWxpbmUudHM6MjY1OjMwKVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCBydW5NaWNyb3Rhc2tzICg8YW5vbnltb3VzPilcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgcHJvY2Vzc1RpY2tzQW5kUmVqZWN0aW9ucyAobm9kZTppbnRlcm5hbC9wcm9jZXNzL3Rhc2tfcXVldWVzOjk2OjUpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHByb2Nlc3NIVFRQUmVxdWVzdCAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcYXBvbGxvLXNlcnZlci1jb3JlXFxcXHNyY1xcXFxydW5IdHRwUXVlcnkudHM6NDM2OjI0KVwiXHJcbiAgLy8gICAgICAgICAgICAgXVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBbY3JlYXRlVmlkZW8sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihYQUREX1ZJREVPKTtcclxuICAvLyAgIGlmIChsb2FkaW5nKSByZXR1cm4gXCJTdWJtaXR0aW5nLi4uXCI7XHJcbiAgLy8gICBpZiAoZXJyb3IpIHJldHVybiBgU3VibWlzc2lvbiBlcnJvciEgJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiBsb2FkaW5nQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+YEVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDwvcD47XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEZvcm0gPSBhc3luYyAoXHJcbiAgICB2YWx1ZXM6IGFueSxcclxuICAgIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH06IGFueVxyXG4gICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZXNcIiwgdmFsdWVzKTtcclxuICAgIC8vIGNyZWF0ZVZpZGVvKHsgdmFyaWFibGVzOiB7IHVybDogdmFsdWVzLnVybCwgdGl0bGU6IHZhbHVlcy50aXRsZSB9IH0pO1xyXG4gICAgY3JlYXRlVmlkZW8oeyB2YXJpYWJsZXM6IHsgaW5wdXQ6IHsgdXJsOiB2YWx1ZXMudXJsLCB0aXRsZTogdmFsdWVzLnRpdGxlIH0gfX0pO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGluaXRpYWxWYWx1ZXMgfX1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0Rm9ybX1cclxuICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgLy8gdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgICAvLyB2YWxpZGF0ZT17dmFsaWRhdGVGb3JtfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyhwcm9wcykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5BZGQgbmV3IGVudHJ5PC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0yXCIgY29udHJvbElkPVwidXJsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VVJMPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2aWRlbyB1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItMlwiIGNvbnRyb2xJZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGl0bGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2aWRlbyB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhhbmRsZVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVmlkZW9Nb2RhbDtcclxuIl0sIm5hbWVzIjpbImdxbCIsInVzZU11dGF0aW9uIiwiU3Bpbm5lciIsIkJ1dHRvbiIsIk1vZGFsIiwiRm9ybSIsIkZpZWxkIiwiRm9ybWlrIiwiQUREX1RPRE8iLCJYQUREX1ZJREVPIiwiQUREX1ZJREVPIiwiaW5pdGlhbFZhbHVlcyIsInVybCIsInRpdGxlIiwibG9hZGluZ0NvbXBvbmVudCIsImFuaW1hdGlvbiIsInJvbGUiLCJzcGFuIiwiY2xhc3NOYW1lIiwiQWRkVmlkZW9Nb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiY3JlYXRlVmlkZW8iLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicCIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXRGb3JtIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInJlc2V0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYWJsZXMiLCJpbnB1dCIsIm9uU3VibWl0IiwiZW5hYmxlUmVpbml0aWFsaXplIiwicHJvcHMiLCJzaG93Iiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJHcm91cCIsImNvbnRyb2xJZCIsIkxhYmVsIiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiRm9vdGVyIiwidmFyaWFudCIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/add-video-modal.tsx\n"));

/***/ })

});