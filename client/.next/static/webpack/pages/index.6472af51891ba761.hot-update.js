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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadingComponent\": function() { return /* binding */ loadingComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages */ \"./pages/index.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation AddTodo($type: String!) {\\n    addTodo(type: $type) {\\n      id\\n      type\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($input: VideoInputType!) {\\n    createVideo(input: $input) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation createVideo($url: String!, $title: String!) {\\n    createVideo(url: $url, title: $title) {\\n      url\\n      title\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// import YouTube from \"react-youtube\";\n\n// import \"bootstrap/dist/css/bootstrap.min.css\";\n// import withApollo from \"../lib/withApollo\";\n// import styles from \"@/styles/Home.module.css\";\n\nvar ADD_TODO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\nvar XADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject1());\nvar ADD_VIDEO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject2());\nvar initialValues = {\n    url: \"\",\n    title: \"\"\n};\nvar loadingComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n    animation: \"border\",\n    role: \"status\",\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"visually-hidden\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n    lineNumber: 59,\n    columnNumber: 3\n}, undefined);\nvar AddVideoModal = function(param) {\n    var showModal = param.showModal, setShowModal = param.setShowModal;\n    _s();\n    var handleClose = function() {\n        return setShowModal(false);\n    };\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(XADD_VIDEO, {\n        refetchQueries: [\n            {\n                query: _pages__WEBPACK_IMPORTED_MODULE_3__.GET_VIDEOS\n            }\n        ]\n    }), 2), createVideo = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading, error = ref1.error;\n    //   if (loading) return \"Submitting...\";\n    //   if (error) return `Submission error! ${error.message}`;\n    if (loading) {\n        return loadingComponent;\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"`Error! $\",\n            error.message,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n        lineNumber: 78,\n        columnNumber: 21\n    }, _this);\n    var handleSubmitForm = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(values, param) {\n            var setSubmitting, resetForm;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                setSubmitting = param.setSubmitting, resetForm = param.resetForm;\n                console.log(\"values\", values);\n                // createVideo({ variables: { url: values.url, title: values.title } });\n                createVideo({\n                    variables: {\n                        input: {\n                            url: values.url,\n                            title: values.title\n                        }\n                    }\n                });\n                resetForm();\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleSubmitForm(values, _) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                initialValues: initialValues\n            },\n            onSubmit: handleSubmitForm,\n            enableReinitialize: true,\n            children: function(props) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                    show: showModal,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {\n                                children: \"Add new entry\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"url\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {\n                                                children: \"URL\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"url\",\n                                                className: \"form-control\",\n                                                name: \"url\",\n                                                placeholder: \"Enter video url\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {\n                                        className: \"mb-2\",\n                                        controlId: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                type: \"text\",\n                                                id: \"title\",\n                                                className: \"form-control\",\n                                                name: \"title\",\n                                                placeholder: \"Enter video title\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    variant: \"secondary\",\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        props.handleSubmit();\n                                    },\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\projects\\\\fanfare-demonstration\\\\client\\\\components\\\\add-video-modal.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AddVideoModal, \"Ltd3QbPbC97mc/pmavov9utEetk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = AddVideoModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddVideoModal);\nvar _c;\n$RefreshReg$(_c, \"AddVideoModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQ1QsQ0FDUjtZQUNKLENBQUM7Ozs7O2lCQUNNO3FCQUNSLENBQ0g7QUFDSixDQUFDO0dBdEZLekMsYUFBYTs7UUFFK0JuQix1REFBVzs7O0FBRnZEbUIsS0FBQUEsYUFBYTtBQXdGbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkZC12aWRlby1tb2RhbC50c3g/MTEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgLy8gICBDb250YWluZXIsXHJcbiAgLy8gICBSb3csXHJcbiAgLy8gICBDb2wsXHJcbiAgLy8gICBDYXJkLFxyXG4gIFNwaW5uZXIsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIEZvcm0sXHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBpbXBvcnQgWW91VHViZSBmcm9tIFwicmVhY3QteW91dHViZVwiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG4vLyBpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuLy8gaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uL2xpYi93aXRoQXBvbGxvXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBHRVRfVklERU9TIH0gZnJvbSBcIkAvcGFnZXNcIjtcclxuXHJcbmludGVyZmFjZSBWaWRlb0lucHV0VHlwZSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQUREX1RPRE8gPSBncWxgXHJcbiAgbXV0YXRpb24gQWRkVG9kbygkdHlwZTogU3RyaW5nISkge1xyXG4gICAgYWRkVG9kbyh0eXBlOiAkdHlwZSkge1xyXG4gICAgICBpZFxyXG4gICAgICB0eXBlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgWEFERF9WSURFTyA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVWaWRlbygkaW5wdXQ6IFZpZGVvSW5wdXRUeXBlISkge1xyXG4gICAgY3JlYXRlVmlkZW8oaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICB1cmxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBRERfVklERU8gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlVmlkZW8oJHVybDogU3RyaW5nISwgJHRpdGxlOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVWaWRlbyh1cmw6ICR1cmwsIHRpdGxlOiAkdGl0bGUpIHtcclxuICAgICAgdXJsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcclxuICB1cmw6IFwiXCIsXHJcbiAgdGl0bGU6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGluZ0NvbXBvbmVudCA9IChcclxuICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gIDwvU3Bpbm5lcj5cclxuKTtcclxuXHJcbmNvbnN0IEFkZFZpZGVvTW9kYWwgPSAoeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCB9OiBhbnkpID0+IHtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgY29uc3QgW2NyZWF0ZVZpZGVvLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oWEFERF9WSURFTywge1xyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFtcclxuICAgICAge3F1ZXJ5OiBHRVRfVklERU9TfSxcclxuICAgIC8vICAgJ0dldENvbW1lbnRzJyAvLyBRdWVyeSBuYW1lXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIC8vICAgaWYgKGxvYWRpbmcpIHJldHVybiBcIlN1Ym1pdHRpbmcuLi5cIjtcclxuICAvLyAgIGlmIChlcnJvcikgcmV0dXJuIGBTdWJtaXNzaW9uIGVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIGxvYWRpbmdDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5gRXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gPC9wPjtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Rm9ybSA9IGFzeW5jIChcclxuICAgIHZhbHVlczogYW55LFxyXG4gICAgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfTogYW55XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlc1wiLCB2YWx1ZXMpO1xyXG4gICAgLy8gY3JlYXRlVmlkZW8oeyB2YXJpYWJsZXM6IHsgdXJsOiB2YWx1ZXMudXJsLCB0aXRsZTogdmFsdWVzLnRpdGxlIH0gfSk7XHJcbiAgICBjcmVhdGVWaWRlbyh7IHZhcmlhYmxlczogeyBpbnB1dDogeyB1cmw6IHZhbHVlcy51cmwsIHRpdGxlOiB2YWx1ZXMudGl0bGUgfSB9fSk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgaW5pdGlhbFZhbHVlcyB9fVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRGb3JtfVxyXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAvLyB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgIC8vIHZhbGlkYXRlPXt2YWxpZGF0ZUZvcm19XHJcbiAgICAgID5cclxuICAgICAgICB7KHByb3BzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPkFkZCBuZXcgZW50cnk8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIiBjb250cm9sSWQ9XCJ1cmxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5VUkw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZpZGVvIHVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0yXCIgY29udHJvbElkPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5UaXRsZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZpZGVvIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRWaWRlb01vZGFsO1xyXG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlTXV0YXRpb24iLCJTcGlubmVyIiwiQnV0dG9uIiwiTW9kYWwiLCJGb3JtIiwiRmllbGQiLCJGb3JtaWsiLCJHRVRfVklERU9TIiwiQUREX1RPRE8iLCJYQUREX1ZJREVPIiwiQUREX1ZJREVPIiwiaW5pdGlhbFZhbHVlcyIsInVybCIsInRpdGxlIiwibG9hZGluZ0NvbXBvbmVudCIsImFuaW1hdGlvbiIsInJvbGUiLCJzcGFuIiwiY2xhc3NOYW1lIiwiQWRkVmlkZW9Nb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsImNyZWF0ZVZpZGVvIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInAiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0Rm9ybSIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiaW5wdXQiLCJvblN1Ym1pdCIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInByb3BzIiwic2hvdyIsIm9uSGlkZSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5IiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIkZvb3RlciIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/add-video-modal.tsx\n"));

/***/ })

});