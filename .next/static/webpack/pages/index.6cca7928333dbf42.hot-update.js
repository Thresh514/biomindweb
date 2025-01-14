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

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // 新增状态控制菜单显示隐藏\n    const menuItems = {\n        \"GCSE / IGCSE\": {\n            Biology: [\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            Chemistry: [\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            Physics: [\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            Maths: [\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ]\n        },\n        \"A-Level\": {\n            Biology: [\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            Chemistry: [\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            Physics: [\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            Maths: [\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ],\n            \"Computer Science\": [\n                \"Computer Science Papers\",\n                \"Computer Science Revision\"\n            ]\n        }\n    };\n    const handleMouseEnter = ()=>{\n        setIsVisible(true);\n    };\n    const handleMouseLeave = ()=>{\n        setIsVisible(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex bg-gradient-to-b from-lightest to-white text-darkest space-x-16 p-6 justify-evenly fixed top-20 left-0 right-0 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative group ml-8 mr-8\",\n                    onMouseEnter: handleMouseEnter,\n                    onMouseLeave: handleMouseLeave,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"cursor-pointer font-semibold text-lg hover:underline\",\n                            children: \"Resource Categories\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this),\n                        isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute text-black bg-white shadow-lg rounded-lg p-4 w-[450px] transition-all duration-300 ease-out \".concat(isVisible ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-4\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row space-x-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#igcse\",\n                                                className: \"font-bold text-xl cursor-pointer hover:underline\",\n                                                children: \"IGCSE\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"\",\n                                                children: Object.keys(menuItems[\"GCSE / IGCSE\"]).map((subject)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2 mb-2\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"font-semibold\",\n                                                                children: subject\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 49\n                                                            }, this),\n                                                            menuItems[\"GCSE / IGCSE\"][subject].map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"mt-2 mb-2\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                        href: \"#\".concat(item.replace(/\\s+/g, '-').toLowerCase()),\n                                                                        className: \"hover:underline\",\n                                                                        children: item\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                                        lineNumber: 66,\n                                                                        columnNumber: 57\n                                                                    }, this)\n                                                                }, idx, false, {\n                                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                                    lineNumber: 65,\n                                                                    columnNumber: 53\n                                                                }, this))\n                                                        ]\n                                                    }, subject, true, {\n                                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 45\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#alevel\",\n                                                className: \"font-bold text-xl cursor-pointer hover:underline\",\n                                                children: \"A-Level\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"\",\n                                                children: Object.keys(menuItems[\"A-Level\"]).map((subject)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2 mb-2\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"font-semibold\",\n                                                                children: subject\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                                lineNumber: 80,\n                                                                columnNumber: 49\n                                                            }, this),\n                                                            menuItems[\"A-Level\"][subject].map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"mt-2 mb-2\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                        href: \"#\".concat(item.replace(/\\s+/g, '-').toLowerCase()),\n                                                                        className: \"hover:underline\",\n                                                                        children: item\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                                        lineNumber: 83,\n                                                                        columnNumber: 57\n                                                                    }, this)\n                                                                }, idx, false, {\n                                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                                    lineNumber: 82,\n                                                                    columnNumber: 53\n                                                                }, this))\n                                                        ]\n                                                    }, subject, true, {\n                                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 45\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#membership\",\n                        className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                        children: \"Membership Zone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#faq\",\n                        className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                        children: \"FAQ\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/about\",\n                        className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                        children: \"About Us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                    lineNumber: 107,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#login\",\n                        className: \"relative left-44 p-4 font-semibold text-lg hover:underline\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                    lineNumber: 113,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#join\",\n                        className: \"p-5 relative left-48 font-semibold bg-darker rounded-lg text-white text-lg hover:underline\",\n                        children: \"Join Membership !\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 120,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                    lineNumber: 119,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"QjDZesRvLCmcrZLxgN677nXnVLA=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELDRFQUFDSzt3QkFBRUosTUFBSzt3QkFBY0YsV0FBVTtrQ0FBc0Q7Ozs7Ozs7Ozs7OzhCQUt0Riw4REFBQ0M7OEJBQ0QsNEVBQUNLO3dCQUFFSixNQUFLO3dCQUFPRixXQUFVO2tDQUFzRDs7Ozs7Ozs7Ozs7OEJBSy9FLDhEQUFDQzs4QkFDRCw0RUFBQ2Qsa0RBQUlBO3dCQUFDZSxNQUFLO3dCQUFTRixXQUFVO2tDQUFzRDs7Ozs7Ozs7Ozs7OEJBS3BGLDhEQUFDQzs4QkFDRCw0RUFBQ0s7d0JBQUVKLE1BQUs7d0JBQVNGLFdBQVU7a0NBQTZEOzs7Ozs7Ozs7Ozs4QkFLeEYsOERBQUNDOzhCQUNELDRFQUFDSzt3QkFBRUosTUFBSzt3QkFBUUYsV0FBVTtrQ0FBNkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkk7R0E1SHdCWDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3d1bGluZy9EZXNrdG9wLzI0V2ludGVyL2Jpb21pbmR3ZWIvc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCl7XG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8g5paw5aKe54q25oCB5o6n5Yi26I+c5Y2V5pi+56S66ZqQ6JePXG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW1zID0ge1xuICAgICAgICBcIkdDU0UgLyBJR0NTRVwiOiB7XG4gICAgICAgICAgICBCaW9sb2d5OiBbXCJCaW9sb2d5IFBhcGVyc1wiLCBcIkJpb2xvZ3kgUmV2aXNpb25cIl0sXG4gICAgICAgICAgICBDaGVtaXN0cnk6IFtcIkNoZW1pc3RyeSBQYXBlcnNcIiwgXCJDaGVtaXN0cnkgUmV2aXNpb25cIl0sXG4gICAgICAgICAgICBQaHlzaWNzOiBbXCJQaHlzaWNzIFBhcGVyc1wiLCBcIlBoeXNpY3MgUmV2aXNpb25cIl0sXG4gICAgICAgICAgICBNYXRoczogW1wiTWF0aHMgUGFwZXJzXCIsIFwiTWF0aHMgUmV2aXNpb25cIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJBLUxldmVsXCI6IHtcbiAgICAgICAgICAgIEJpb2xvZ3k6IFtcIkJpb2xvZ3kgUGFwZXJzXCIsIFwiQmlvbG9neSBSZXZpc2lvblwiXSxcbiAgICAgICAgICAgIENoZW1pc3RyeTogW1wiQ2hlbWlzdHJ5IFBhcGVyc1wiLCBcIkNoZW1pc3RyeSBSZXZpc2lvblwiXSxcbiAgICAgICAgICAgIFBoeXNpY3M6IFtcIlBoeXNpY3MgUGFwZXJzXCIsIFwiUGh5c2ljcyBSZXZpc2lvblwiXSxcbiAgICAgICAgICAgIE1hdGhzOiBbXCJNYXRocyBQYXBlcnNcIiwgXCJNYXRocyBSZXZpc2lvblwiXSxcbiAgICAgICAgICAgIFwiQ29tcHV0ZXIgU2NpZW5jZVwiOiBbXCJDb21wdXRlciBTY2llbmNlIFBhcGVyc1wiLCBcIkNvbXB1dGVyIFNjaWVuY2UgUmV2aXNpb25cIl1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggYmctZ3JhZGllbnQtdG8tYiBmcm9tLWxpZ2h0ZXN0IHRvLXdoaXRlIHRleHQtZGFya2VzdCBzcGFjZS14LTE2IHAtNiBqdXN0aWZ5LWV2ZW5seSBmaXhlZCB0b3AtMjAgbGVmdC0wIHJpZ2h0LTAgei01MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwLTQgbWwtNCBtci00IGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSZXNvdXJjZSBDYXRlZ29yaWVzIOS4i+aLieiPnOWNlSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwIG1sLTggbXItOFwiXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzb3VyY2UgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsvKiDkuIvmi4noj5zljZUgKi99XG4gICAgICAgICAgICAgICAgICAgIHtpc1Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdGV4dC1ibGFjayBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTQgdy1bNDUwcHhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIElHQ1NFICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNpZ2NzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPklHQ1NFPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobWVudUl0ZW1zW1wiR0NTRSAvIElHQ1NFXCJdKS5tYXAoKHN1YmplY3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YmplY3R9IGNsYXNzTmFtZT1cIm10LTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e3N1YmplY3R9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zW1wiR0NTRSAvIElHQ1NFXCJdW3N1YmplY3RdLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwibXQtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtpdGVtLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpfWB9IGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPntpdGVtfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQS1MZXZlbCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjYWxldmVsXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+QS1MZXZlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKG1lbnVJdGVtc1tcIkEtTGV2ZWxcIl0pLm1hcCgoc3ViamVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3ViamVjdH0gY2xhc3NOYW1lPVwibXQtMiBtYi0yXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e3N1YmplY3R9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zW1wiQS1MZXZlbFwiXVtzdWJqZWN0XS5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cIm10LTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7aXRlbS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKX1gfSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj57aXRlbX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjbWVtYmVyc2hpcFwiIGNsYXNzTmFtZT1cInAtNCBtbC00IG1yLTQgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIE1lbWJlcnNoaXAgWm9uZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI2ZhcVwiIGNsYXNzTmFtZT1cInAtNCBtbC00IG1yLTQgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIEZBUVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwicC00IG1sLTQgbXItNCBmb250LXNlbWlib2xkIHRleHQtbGcgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNsb2dpblwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGxlZnQtNDQgcC00IGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI2pvaW5cIiBjbGFzc05hbWU9XCJwLTUgcmVsYXRpdmUgbGVmdC00OCBmb250LXNlbWlib2xkIGJnLWRhcmtlciByb3VuZGVkLWxnIHRleHQtd2hpdGUgdGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICBKb2luIE1lbWJlcnNoaXAgIVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsIm1lbnVJdGVtcyIsIkJpb2xvZ3kiLCJDaGVtaXN0cnkiLCJQaHlzaWNzIiwiTWF0aHMiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcGFuIiwiYSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJzdWJqZWN0IiwiaXRlbSIsImlkeCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});