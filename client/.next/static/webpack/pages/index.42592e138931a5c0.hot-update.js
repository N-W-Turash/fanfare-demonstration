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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadingComponent\": function() { return /* binding */ loadingComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation AddTodo($type: String!) {\\n    addTodo(type: $type) {\\n      id\\n      type\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($url: String!, $title: String!) {\\n    createVideo(url: $url, title: $title) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// import YouTube from \"react-youtube\";\n\nvar ADD_TODO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nvar ADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nvar initialValues = {\n    url: \"\",\n    title: \"\"\n};\nvar loadingComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n    animation: \"border\",\n    role: \"status\",\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"visually-hidden\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n    lineNumber: 49,\n    columnNumber: 3\n}, undefined);\nvar AddVideoModal = function(param) {\n    var showModal = param.showModal, setShowModal = param.setShowModal;\n    _s();\n    var handleClose = function() {\n        return setShowModal(false);\n    };\n    //   {\n    //     \"message\": \"Unknown argument \\\"url\\\" on field \\\"Mutation.createVideo\\\".\",\n    //     \"locations\": [\n    //         {\n    //             \"line\": 2,\n    //             \"column\": 15\n    //         }\n    //     ],\n    //     \"extensions\": {\n    //         \"code\": \"GRAPHQL_VALIDATION_FAILED\",\n    //         \"exception\": {\n    //             \"stacktrace\": [\n    //                 \"GraphQLError: Unknown argument \\\"url\\\" on field \\\"Mutation.createVideo\\\".\",\n    //                 \"    at Object.Argument (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\validation\\\\rules\\\\KnownArgumentNamesRule.js:46:11)\",\n    //                 \"    at Object.enter (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\language\\\\visitor.js:301:32)\",\n    //                 \"    at Object.enter (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\utilities\\\\TypeInfo.js:391:27)\",\n    //                 \"    at visit (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\language\\\\visitor.js:197:21)\",\n    //                 \"    at validate (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\graphql\\\\validation\\\\validate.js:91:24)\",\n    //                 \"    at validate (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\requestPipeline.ts:474:27)\",\n    //                 \"    at processGraphQLRequest (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\requestPipeline.ts:265:30)\",\n    //                 \"    at runMicrotasks (<anonymous>)\",\n    //                 \"    at processTicksAndRejections (node:internal/process/task_queues:96:5)\",\n    //                 \"    at processHTTPRequest (G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\server\\\\node_modules\\\\apollo-server-core\\\\src\\\\runHttpQuery.ts:436:24)\"\n    //             ]\n    //         }\n    //     }\n    // }\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ADD_VIDEO), 2), createVideo = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading, error = ref1.error;\n    //   if (loading) return \"Submitting...\";\n    //   if (error) return `Submission error! ${error.message}`;\n    if (loading) {\n        return loadingComponent;\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 92,\n        columnNumber: 21\n    }, _this);\n    var handleSubmitForm = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(values, param) {\n            var setSubmitting, resetForm;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                setSubmitting = param.setSubmitting, resetForm = param.resetForm;\n                console.log(\"values\", values);\n                createVideo({\n                    variables: {\n                        url: values.url,\n                        title: values.title\n                    }\n                });\n                resetForm();\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleSubmitForm(values, _) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                initialValues: initialValues\n            },\n            onSubmit: handleSubmitForm,\n            enableReinitialize: true,\n            children: function(props) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                    show: showModal,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Title, {\n                                children: \"Add new entry\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"url\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                                children: \"URL\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 121,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"url\",\n                                                className: \"form-control\",\n                                                name: \"url\",\n                                                placeholder: \"Enter video url\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 122,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 131,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"title\",\n                                                className: \"form-control\",\n                                                name: \"title\",\n                                                placeholder: \"Enter video title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 132,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        props.handleSubmit();\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 13\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AddVideoModal, \"Ltd3QbPbC97mc/pmavov9utEetk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = AddVideoModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddVideoModal);\nvar _c;\n$RefreshReg$(_c, \"AddVideoModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxTQUFDQyxDQUFDLEVBQUs7d0NBQ2RBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7d0NBQ25CbEIsS0FBSyxDQUFDbUIsWUFBWSxFQUFFLENBQUM7b0NBQ3ZCLENBQUM7OENBQ0YsTUFFRDs7Ozs7eUNBQVM7Ozs7OztpQ0FDSTs7Ozs7O3lCQUNULENBQ1I7WUFDSixDQUFDOzs7OztpQkFDTTtxQkFDUixDQUNIO0FBQ0osQ0FBQztHQTdHS3RDLGFBQWE7O1FBK0IrQmpCLHVEQUFXOzs7QUEvQnZEaUIsS0FBQUEsYUFBYTtBQStHbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkZC12aWRlby1tb2RhbC50c3g/MTEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgLy8gICBDb250YWluZXIsXHJcbiAgLy8gICBSb3csXHJcbiAgLy8gICBDb2wsXHJcbiAgLy8gICBDYXJkLFxyXG4gIFNwaW5uZXIsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIEZvcm0sXHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBpbXBvcnQgWW91VHViZSBmcm9tIFwicmVhY3QteW91dHViZVwiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG4vLyBpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuLy8gaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uL2xpYi93aXRoQXBvbGxvXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFZpZGVvSW5wdXRUeXBlIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICB9XHJcblxyXG5jb25zdCBBRERfVE9ETyA9IGdxbGBcclxuICBtdXRhdGlvbiBBZGRUb2RvKCR0eXBlOiBTdHJpbmchKSB7XHJcbiAgICBhZGRUb2RvKHR5cGU6ICR0eXBlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHR5cGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBRERfVklERU8gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlVmlkZW8oJHVybDogU3RyaW5nISwgJHRpdGxlOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVWaWRlbyh1cmw6ICR1cmwsIHRpdGxlOiAkdGl0bGUpIHtcclxuICAgICAgdXJsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcclxuICB1cmw6IFwiXCIsXHJcbiAgdGl0bGU6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGluZ0NvbXBvbmVudCA9IChcclxuICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gIDwvU3Bpbm5lcj5cclxuKTtcclxuXHJcbmNvbnN0IEFkZFZpZGVvTW9kYWwgPSAoeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCB9OiBhbnkpID0+IHtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSk7XHJcblxyXG4gIC8vICAge1xyXG4gIC8vICAgICBcIm1lc3NhZ2VcIjogXCJVbmtub3duIGFyZ3VtZW50IFxcXCJ1cmxcXFwiIG9uIGZpZWxkIFxcXCJNdXRhdGlvbi5jcmVhdGVWaWRlb1xcXCIuXCIsXHJcbiAgLy8gICAgIFwibG9jYXRpb25zXCI6IFtcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICBcImxpbmVcIjogMixcclxuICAvLyAgICAgICAgICAgICBcImNvbHVtblwiOiAxNVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICBdLFxyXG4gIC8vICAgICBcImV4dGVuc2lvbnNcIjoge1xyXG4gIC8vICAgICAgICAgXCJjb2RlXCI6IFwiR1JBUEhRTF9WQUxJREFUSU9OX0ZBSUxFRFwiLFxyXG4gIC8vICAgICAgICAgXCJleGNlcHRpb25cIjoge1xyXG4gIC8vICAgICAgICAgICAgIFwic3RhY2t0cmFjZVwiOiBbXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiR3JhcGhRTEVycm9yOiBVbmtub3duIGFyZ3VtZW50IFxcXCJ1cmxcXFwiIG9uIGZpZWxkIFxcXCJNdXRhdGlvbi5jcmVhdGVWaWRlb1xcXCIuXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IE9iamVjdC5Bcmd1bWVudCAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcZ3JhcGhxbFxcXFx2YWxpZGF0aW9uXFxcXHJ1bGVzXFxcXEtub3duQXJndW1lbnROYW1lc1J1bGUuanM6NDY6MTEpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IE9iamVjdC5lbnRlciAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcZ3JhcGhxbFxcXFxsYW5ndWFnZVxcXFx2aXNpdG9yLmpzOjMwMTozMilcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgT2JqZWN0LmVudGVyIChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXHV0aWxpdGllc1xcXFxUeXBlSW5mby5qczozOTE6MjcpXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHZpc2l0IChHOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0c1xcXFxmYW5mYXJlLWRlbW9uc3RyYXRpb25cXFxcc2VydmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxncmFwaHFsXFxcXGxhbmd1YWdlXFxcXHZpc2l0b3IuanM6MTk3OjIxKVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCB2YWxpZGF0ZSAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcZ3JhcGhxbFxcXFx2YWxpZGF0aW9uXFxcXHZhbGlkYXRlLmpzOjkxOjI0KVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCB2YWxpZGF0ZSAoRzpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdHNcXFxcZmFuZmFyZS1kZW1vbnN0cmF0aW9uXFxcXHNlcnZlclxcXFxub2RlX21vZHVsZXNcXFxcYXBvbGxvLXNlcnZlci1jb3JlXFxcXHNyY1xcXFxyZXF1ZXN0UGlwZWxpbmUudHM6NDc0OjI3KVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCBwcm9jZXNzR3JhcGhRTFJlcXVlc3QgKEc6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RzXFxcXGZhbmZhcmUtZGVtb25zdHJhdGlvblxcXFxzZXJ2ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGFwb2xsby1zZXJ2ZXItY29yZVxcXFxzcmNcXFxccmVxdWVzdFBpcGVsaW5lLnRzOjI2NTozMClcIixcclxuICAvLyAgICAgICAgICAgICAgICAgXCIgICAgYXQgcnVuTWljcm90YXNrcyAoPGFub255bW91cz4pXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIFwiICAgIGF0IHByb2Nlc3NUaWNrc0FuZFJlamVjdGlvbnMgKG5vZGU6aW50ZXJuYWwvcHJvY2Vzcy90YXNrX3F1ZXVlczo5Njo1KVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBcIiAgICBhdCBwcm9jZXNzSFRUUFJlcXVlc3QgKEc6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RzXFxcXGZhbmZhcmUtZGVtb25zdHJhdGlvblxcXFxzZXJ2ZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGFwb2xsby1zZXJ2ZXItY29yZVxcXFxzcmNcXFxccnVuSHR0cFF1ZXJ5LnRzOjQzNjoyNClcIlxyXG4gIC8vICAgICAgICAgICAgIF1cclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgW2NyZWF0ZVZpZGVvLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oQUREX1ZJREVPKTtcclxuICAvLyAgIGlmIChsb2FkaW5nKSByZXR1cm4gXCJTdWJtaXR0aW5nLi4uXCI7XHJcbiAgLy8gICBpZiAoZXJyb3IpIHJldHVybiBgU3VibWlzc2lvbiBlcnJvciEgJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiBsb2FkaW5nQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+YEVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDwvcD47XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEZvcm0gPSBhc3luYyAoXHJcbiAgICB2YWx1ZXM6IGFueSxcclxuICAgIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH06IGFueVxyXG4gICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZXNcIiwgdmFsdWVzKTtcclxuICAgIGNyZWF0ZVZpZGVvKHsgdmFyaWFibGVzOiB7IHVybDogdmFsdWVzLnVybCwgdGl0bGU6IHZhbHVlcy50aXRsZSB9IH0pO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGluaXRpYWxWYWx1ZXMgfX1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0Rm9ybX1cclxuICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgLy8gdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgICAvLyB2YWxpZGF0ZT17dmFsaWRhdGVGb3JtfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyhwcm9wcykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5BZGQgbmV3IGVudHJ5PC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0yXCIgY29udHJvbElkPVwidXJsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VVJMPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2aWRlbyB1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItMlwiIGNvbnRyb2xJZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGl0bGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2aWRlbyB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhhbmRsZVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVmlkZW9Nb2RhbDtcclxuIl0sIm5hbWVzIjpbImdxbCIsInVzZU11dGF0aW9uIiwiU3Bpbm5lciIsIkJ1dHRvbiIsIk1vZGFsIiwiRm9ybSIsIkZpZWxkIiwiRm9ybWlrIiwiQUREX1RPRE8iLCJBRERfVklERU8iLCJpbml0aWFsVmFsdWVzIiwidXJsIiwidGl0bGUiLCJsb2FkaW5nQ29tcG9uZW50IiwiYW5pbWF0aW9uIiwicm9sZSIsInNwYW4iLCJjbGFzc05hbWUiLCJBZGRWaWRlb01vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGFuZGxlQ2xvc2UiLCJjcmVhdGVWaWRlbyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJwIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdEZvcm0iLCJ2YWx1ZXMiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsIm9uU3VibWl0IiwiZW5hYmxlUmVpbml0aWFsaXplIiwicHJvcHMiLCJzaG93Iiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJHcm91cCIsImNvbnRyb2xJZCIsIkxhYmVsIiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiRm9vdGVyIiwidmFyaWFudCIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/add-video-modal.tsx\n"));

/***/ })

});