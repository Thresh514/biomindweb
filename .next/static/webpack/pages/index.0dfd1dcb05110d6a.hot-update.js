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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const categories = [\n        'IGCSE',\n        'A-Level'\n    ];\n    const menuItems = {\n        \"GCSE / IGCSE\": [\n            [\n                \"Biology\",\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            [\n                \"Chemistry\",\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            [\n                \"Physics\",\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            [\n                \"Maths\",\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ]\n        ],\n        \"A-Level\": [\n            [\n                \"Biology\",\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            [\n                \"Chemistry\",\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            [\n                \"Physics\",\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            [\n                \"Maths\",\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ],\n            [\n                \"Computer Science\",\n                \"Computer Science Papers\",\n                \"Computer Science Revision\"\n            ]\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Biomind Homepage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A platform for educational resources.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-gradient-to-r from-yellow-400 via-green-300 to-green-400 text-white shadow-lg space-x-8 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-center ml-12 mt-12\",\n                        children: \"Biomind Logic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-x-8 p-4 border-b border-gray-200\",\n                        children: [\n                            Object.keys(menuItems).map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative group\",\n                                    onMouseEnter: ()=>setActiveMenu(menu),\n                                    onMouseLeave: ()=>setActiveMenu(null),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"cursor-pointer font-semibold text-lg hover:underline\",\n                                            children: menu\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        activeMenu === menu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-black shadow-lg space-x-12 p-4\",\n                                            children: Object.keys(menuItems[menu]).map((subject, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"font-bold mb-2\",\n                                                            children: subject\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex flex-col\",\n                                                            children: menuItems[menu][subject].map((item, subIdx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                    href: \"#\".concat(item.replace(/\\s+/g, '-').toLowerCase()),\n                                                                    className: \"hover:underline hover:bg-gray-100 p-2 rounded\",\n                                                                    children: item\n                                                                }, subIdx, false, {\n                                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                                    lineNumber: 54,\n                                                                    columnNumber: 27\n                                                                }, this))\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#about\",\n                                    className: \"font-semibold text-lg hover:underline\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#upload\",\n                                    className: \"font-semibold text-lg hover:underline\",\n                                    children: \"Upload\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl text-green-500 font-semibold text-center mb-4\",\n                    children: \"Feature Resource\"\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-gray-100 text-center p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\xa9 2025 Biomind Logic. All rights reserved.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Contact us: Email: tonytudaodao@gmail.com \"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MocqPnwFqSmp7lBJG379qjRmafg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFFZCxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1LLGFBQWE7UUFBQztRQUFTO0tBQVU7SUFFdkMsTUFBTUMsWUFBWTtRQUNoQixnQkFBZ0I7WUFDZDtnQkFBQztnQkFBVztnQkFBa0I7YUFBbUI7WUFDakQ7Z0JBQUM7Z0JBQVk7Z0JBQW9CO2FBQXFCO1lBQ3REO2dCQUFDO2dCQUFXO2dCQUFrQjthQUFtQjtZQUNqRDtnQkFBQztnQkFBUztnQkFBZ0I7YUFBaUI7U0FDOUM7UUFDQyxXQUFXO1lBQ1Q7Z0JBQUM7Z0JBQVU7Z0JBQWtCO2FBQW1CO1lBQ2hEO2dCQUFDO2dCQUFhO2dCQUFvQjthQUFxQjtZQUN2RDtnQkFBQztnQkFBVztnQkFBa0I7YUFBbUI7WUFDakQ7Z0JBQUM7Z0JBQVM7Z0JBQWdCO2FBQWlCO1lBQzNDO2dCQUFDO2dCQUFtQjtnQkFBMkI7YUFBNEI7U0FDNUU7SUFDSDtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNOLGtEQUFJQTs7a0NBQ0gsOERBQUNPO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUE2Qzs7Ozs7O2tDQUN6RCw4REFBQ047d0JBQUlNLFdBQVU7OzRCQUNaRSxPQUFPQyxJQUFJLENBQUNWLFdBQVdXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDakMsOERBQUNaO29DQUVDTSxXQUFVO29DQUNWTyxjQUFjLElBQU1oQixjQUFjYztvQ0FDbENHLGNBQWMsSUFBTWpCLGNBQWM7O3NEQUVsQyw4REFBQ2tCOzRDQUFLVCxXQUFVO3NEQUNiSzs7Ozs7O3dDQUlGZixlQUFlZSxzQkFDZCw4REFBQ1g7NENBQUlNLFdBQVU7c0RBQ1pFLE9BQU9DLElBQUksQ0FBQ1YsU0FBUyxDQUFDWSxLQUFLLEVBQUVELEdBQUcsQ0FBQyxDQUFDTSxTQUFTQyxvQkFDMUMsOERBQUNqQjtvREFBSU0sV0FBVTs7c0VBQ2IsOERBQUNZOzREQUFHWixXQUFVO3NFQUFrQlU7Ozs7OztzRUFDaEMsOERBQUNoQjs0REFBSU0sV0FBVTtzRUFDWlAsU0FBUyxDQUFDWSxLQUFLLENBQUNLLFFBQVEsQ0FBQ04sR0FBRyxDQUFDLENBQUNTLE1BQU1DLHVCQUNuQyw4REFBQ0M7b0VBRUNDLE1BQU0sSUFBNEMsT0FBeENILEtBQUtJLE9BQU8sQ0FBQyxRQUFRLEtBQUtDLFdBQVc7b0VBQy9DbEIsV0FBVTs4RUFFVGE7bUVBSklDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWxCZFI7Ozs7OzBDQWdDVCw4REFBQ1o7MENBQ0MsNEVBQUNxQjtvQ0FBRUMsTUFBSztvQ0FBU2hCLFdBQVU7OENBQXdDOzs7Ozs7Ozs7OzswQ0FJckUsOERBQUNOOzBDQUNDLDRFQUFDcUI7b0NBQUVDLE1BQUs7b0NBQVVoQixXQUFVOzhDQUF3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTzFFLDhEQUFDbUI7Z0JBQUtuQixXQUFVOzBCQUNkLDRFQUFDb0I7b0JBQUdwQixXQUFVOzhCQUF5RDs7Ozs7Ozs7Ozs7MEJBR3pFLDhEQUFDcUI7Z0JBQU9yQixXQUFVOztrQ0FDaEIsOERBQUNzQjtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7R0F4RndCakM7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy93dWxpbmcvRGVza3RvcC8yNFdpbnRlci9iaW9taW5kd2ViL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbJ0lHQ1NFJywgJ0EtTGV2ZWwnXTtcblxuICBjb25zdCBtZW51SXRlbXMgPSB7XG4gICAgXCJHQ1NFIC8gSUdDU0VcIjogW1xuICAgICAgW1wiQmlvbG9neVwiLCBcIkJpb2xvZ3kgUGFwZXJzXCIsIFwiQmlvbG9neSBSZXZpc2lvblwiXSxcbiAgICAgIFtcIkNoZW1pc3RyeVwiLFwiQ2hlbWlzdHJ5IFBhcGVyc1wiLCBcIkNoZW1pc3RyeSBSZXZpc2lvblwiXSxcbiAgICAgIFtcIlBoeXNpY3NcIiwgXCJQaHlzaWNzIFBhcGVyc1wiLCBcIlBoeXNpY3MgUmV2aXNpb25cIl0sXG4gICAgICBbXCJNYXRoc1wiLCBcIk1hdGhzIFBhcGVyc1wiLCBcIk1hdGhzIFJldmlzaW9uXCJdXG4gIF0sXG4gICAgXCJBLUxldmVsXCI6IFtcbiAgICAgIFtcIkJpb2xvZ3lcIixcIkJpb2xvZ3kgUGFwZXJzXCIsIFwiQmlvbG9neSBSZXZpc2lvblwiXSxcbiAgICAgIFtcIkNoZW1pc3RyeVwiLCBcIkNoZW1pc3RyeSBQYXBlcnNcIiwgXCJDaGVtaXN0cnkgUmV2aXNpb25cIl0sXG4gICAgICBbXCJQaHlzaWNzXCIsIFwiUGh5c2ljcyBQYXBlcnNcIiwgXCJQaHlzaWNzIFJldmlzaW9uXCJdLFxuICAgICAgW1wiTWF0aHNcIiwgXCJNYXRocyBQYXBlcnNcIiwgXCJNYXRocyBSZXZpc2lvblwiXSxcbiAgICAgIFtcIkNvbXB1dGVyIFNjaWVuY2VcIixcIkNvbXB1dGVyIFNjaWVuY2UgUGFwZXJzXCIsIFwiQ29tcHV0ZXIgU2NpZW5jZSBSZXZpc2lvblwiXSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmlvbWluZCBIb21lcGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIHBsYXRmb3JtIGZvciBlZHVjYXRpb25hbCByZXNvdXJjZXMuXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20teWVsbG93LTQwMCB2aWEtZ3JlZW4tMzAwIHRvLWdyZWVuLTQwMCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzcGFjZS14LTggcC00XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1sLTEyIG10LTEyXCI+QmlvbWluZCBMb2dpYzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC04IHAtNCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMobWVudUl0ZW1zKS5tYXAoKG1lbnUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwXCJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVNZW51KG1lbnUpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZU1lbnUobnVsbCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICB7bWVudX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIHsvKiDkuIvmi4noj5zljZUgKi99XG4gICAgICAgICAgICAgIHthY3RpdmVNZW51ID09PSBtZW51ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgc2hhZG93LWxnIHNwYWNlLXgtMTIgcC00XCI+XG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobWVudUl0ZW1zW21lbnVdKS5tYXAoKHN1YmplY3QsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMlwiPntzdWJqZWN0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zW21lbnVdW3N1YmplY3RdLm1hcCgoaXRlbSwgc3ViSWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJJZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke2l0ZW0ucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmUgaG92ZXI6YmctZ3JheS0xMDAgcC0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjYWJvdXRcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjdXBsb2FkXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWdyZWVuLTUwMCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIG1iLTRcIj5GZWF0dXJlIFJlc291cmNlPC9oMj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB0ZXh0LWNlbnRlciBwLTQgbXQtNFwiPlxuICAgICAgICA8cD7CqSAyMDI1IEJpb21pbmQgTG9naWMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICA8cD4gQ29udGFjdCB1czogRW1haWw6IHRvbnl0dWRhb2Rhb0BnbWFpbC5jb20gPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIkhvbWUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsImNhdGVnb3JpZXMiLCJtZW51SXRlbXMiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm5hdiIsImNsYXNzTmFtZSIsImgxIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm1lbnUiLCJpbmRleCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNwYW4iLCJzdWJqZWN0IiwiaWR4IiwiaDMiLCJpdGVtIiwic3ViSWR4IiwiYSIsImhyZWYiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJtYWluIiwiaDIiLCJmb290ZXIiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});