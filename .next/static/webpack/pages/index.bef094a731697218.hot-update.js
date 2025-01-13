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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const menuItems = {\n        \"GCSE / IGCSE\": {\n            Biology: [\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            Chemistry: [\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            Physics: [\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            Maths: [\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ]\n        },\n        \"A-Level\": {\n            Biology: [\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            Chemistry: [\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            Physics: [\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            Maths: [\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ],\n            \"Computer Science\": [\n                \"Computer Science Papers\",\n                \"Computer Science Revision\"\n            ]\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Biomind Homepage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A platform for educational resources.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex bg-gradient-to-r from-yellow-400 via-green-300 to-green-400 text-white shadow-lg space-x-8 p-6  justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"absolute text-4xl font-bold left-0 ml-12 mt-2\",\n                        children: \"Biomind Logic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row p-4\",\n                        children: [\n                            Object.keys(menuItems).map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative group ml-8 mr-8\",\n                                    onMouseEnter: ()=>setActiveMenu(menu),\n                                    onMouseLeave: ()=>setActiveMenu(null),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"cursor-pointer font-semibold text-lg hover:underline\",\n                                            children: menu\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, this),\n                                        activeMenu === menu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute text-black bg-white shadow-lg p-4 w-[180px]\",\n                                            children: Object.keys(menuItems[menu]).map((subject, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"font-bold mb-2\",\n                                                            children: subject\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex flex-col\",\n                                                            children: menuItems[menu][subject].map((item, subIdx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                    href: \"#\".concat(item.replace(/\\s+/g, '-').toLowerCase()),\n                                                                    className: \"hover:underline hover:bg-gray-100 p-2 rounded\",\n                                                                    children: item\n                                                                }, subIdx, false, {\n                                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                                    lineNumber: 52,\n                                                                    columnNumber: 27\n                                                                }, this))\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#about\",\n                                    className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#upload\",\n                                    className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                                    children: \"Upload\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl text-green-500 font-semibold text-center mt-4 mb-4\",\n                        children: \"Feature Resource\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"This block is under construction.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-gray-100 text-center p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\xa9 2025 Biomind Logic. All rights reserved.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Contact us: Email: tonytudaodao@gmail.com \"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/pages/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MocqPnwFqSmp7lBJG379qjRmafg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFFZCxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1LLFlBQVk7UUFDaEIsZ0JBQWdCO1lBQ2RDLFNBQVM7Z0JBQUM7Z0JBQWtCO2FBQW1CO1lBQy9DQyxXQUFXO2dCQUFDO2dCQUFvQjthQUFxQjtZQUNyREMsU0FBUztnQkFBQztnQkFBa0I7YUFBbUI7WUFDakRDLE9BQU87Z0JBQUM7Z0JBQWdCO2FBQWlCO1FBQzNDO1FBQ0UsV0FBVztZQUNUSCxTQUFTO2dCQUFDO2dCQUFrQjthQUFtQjtZQUMvQ0MsV0FBVztnQkFBQztnQkFBb0I7YUFBcUI7WUFDckRDLFNBQVM7Z0JBQUM7Z0JBQWtCO2FBQW1CO1lBQy9DQyxPQUFPO2dCQUFDO2dCQUFnQjthQUFpQjtZQUN6QyxvQkFBb0I7Z0JBQUM7Z0JBQTJCO2FBQTRCO1FBQzlFO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDVCxrREFBSUE7O2tDQUNILDhEQUFDVTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBZ0Q7Ozs7OztrQ0FDNUQsOERBQUNOO3dCQUFJTSxXQUFVOzs0QkFDWkUsT0FBT0MsSUFBSSxDQUFDZCxXQUFXZSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pDLDhEQUFDWjtvQ0FFQ00sV0FBVTtvQ0FDVk8sY0FBYyxJQUFNbkIsY0FBY2lCO29DQUNsQ0csY0FBYyxJQUFNcEIsY0FBYzs7c0RBRWxDLDhEQUFDcUI7NENBQUtULFdBQVU7c0RBQ2JLOzs7Ozs7d0NBSUZsQixlQUFla0Isc0JBQ2QsOERBQUNYOzRDQUFJTSxXQUFVO3NEQUNaRSxPQUFPQyxJQUFJLENBQUNkLFNBQVMsQ0FBQ2dCLEtBQUssRUFBRUQsR0FBRyxDQUFDLENBQUNNLFNBQVNDLG9CQUMxQyw4REFBQ2pCO29EQUFJTSxXQUFVOztzRUFDYiw4REFBQ1k7NERBQUdaLFdBQVU7c0VBQWtCVTs7Ozs7O3NFQUNoQyw4REFBQ2hCOzREQUFJTSxXQUFVO3NFQUNaWCxTQUFTLENBQUNnQixLQUFLLENBQUNLLFFBQVEsQ0FBQ04sR0FBRyxDQUFDLENBQUNTLE1BQU1DLHVCQUNuQyw4REFBQ0M7b0VBRUNDLE1BQU0sSUFBNEMsT0FBeENILEtBQUtJLE9BQU8sQ0FBQyxRQUFRLEtBQUtDLFdBQVc7b0VBQy9DbEIsV0FBVTs4RUFFVGE7bUVBSklDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWxCZFI7Ozs7OzBDQWdDVCw4REFBQ1o7MENBQ0MsNEVBQUNxQjtvQ0FBRUMsTUFBSztvQ0FBU2hCLFdBQVU7OENBQXNEOzs7Ozs7Ozs7OzswQ0FJbkYsOERBQUNOOzBDQUNDLDRFQUFDcUI7b0NBQUVDLE1BQUs7b0NBQVVoQixXQUFVOzhDQUFzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3hGLDhEQUFDbUI7Z0JBQUtuQixXQUFVOztrQ0FDZCw4REFBQ29CO3dCQUFHcEIsV0FBVTtrQ0FBOEQ7Ozs7OztrQ0FDNUUsOERBQUNxQjt3QkFBRXJCLFdBQVU7a0NBQWM7Ozs7Ozs7Ozs7OzswQkFZN0IsOERBQUNzQjtnQkFBT3RCLFdBQVU7O2tDQUNoQiw4REFBQ3FCO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNBO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtHQWhHd0JuQztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3d1bGluZy9EZXNrdG9wLzI0V2ludGVyL2Jpb21pbmR3ZWIvc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0ge1xuICAgIFwiR0NTRSAvIElHQ1NFXCI6IHtcbiAgICAgIEJpb2xvZ3k6IFtcIkJpb2xvZ3kgUGFwZXJzXCIsIFwiQmlvbG9neSBSZXZpc2lvblwiXSxcbiAgICAgIENoZW1pc3RyeTogW1wiQ2hlbWlzdHJ5IFBhcGVyc1wiLCBcIkNoZW1pc3RyeSBSZXZpc2lvblwiXSxcbiAgICAgIFBoeXNpY3M6IFtcIlBoeXNpY3MgUGFwZXJzXCIsIFwiUGh5c2ljcyBSZXZpc2lvblwiXSxcbiAgICBNYXRoczogW1wiTWF0aHMgUGFwZXJzXCIsIFwiTWF0aHMgUmV2aXNpb25cIl1cbiAgfSxcbiAgICBcIkEtTGV2ZWxcIjoge1xuICAgICAgQmlvbG9neTogW1wiQmlvbG9neSBQYXBlcnNcIiwgXCJCaW9sb2d5IFJldmlzaW9uXCJdLFxuICAgICAgQ2hlbWlzdHJ5OiBbXCJDaGVtaXN0cnkgUGFwZXJzXCIsIFwiQ2hlbWlzdHJ5IFJldmlzaW9uXCJdLFxuICAgICAgUGh5c2ljczogW1wiUGh5c2ljcyBQYXBlcnNcIiwgXCJQaHlzaWNzIFJldmlzaW9uXCJdLFxuICAgICAgTWF0aHM6IFtcIk1hdGhzIFBhcGVyc1wiLCBcIk1hdGhzIFJldmlzaW9uXCJdLFxuICAgICAgXCJDb21wdXRlciBTY2llbmNlXCI6IFtcIkNvbXB1dGVyIFNjaWVuY2UgUGFwZXJzXCIsIFwiQ29tcHV0ZXIgU2NpZW5jZSBSZXZpc2lvblwiXVxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CaW9taW5kIEhvbWVwYWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgcGxhdGZvcm0gZm9yIGVkdWNhdGlvbmFsIHJlc291cmNlcy5cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggYmctZ3JhZGllbnQtdG8tciBmcm9tLXllbGxvdy00MDAgdmlhLWdyZWVuLTMwMCB0by1ncmVlbi00MDAgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc3BhY2UteC04IHAtNiAganVzdGlmeS1ldmVubHlcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LTR4bCBmb250LWJvbGQgbGVmdC0wIG1sLTEyIG10LTJcIj5CaW9taW5kIExvZ2ljPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHAtNFwiPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhtZW51SXRlbXMpLm1hcCgobWVudSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXAgbWwtOCBtci04XCJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVNZW51KG1lbnUpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZU1lbnUobnVsbCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICB7bWVudX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIHsvKiDkuIvmi4noj5zljZUgKi99XG4gICAgICAgICAgICAgIHthY3RpdmVNZW51ID09PSBtZW51ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtYmxhY2sgYmctd2hpdGUgc2hhZG93LWxnIHAtNCB3LVsxODBweF1cIj5cbiAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhtZW51SXRlbXNbbWVudV0pLm1hcCgoc3ViamVjdCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0yXCI+e3N1YmplY3R9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXNbbWVudV1bc3ViamVjdF0ubWFwKChpdGVtLCBzdWJJZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1YklkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgIyR7aXRlbS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZSBob3ZlcjpiZy1ncmF5LTEwMCBwLTIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiIGNsYXNzTmFtZT1cInAtNCBtbC00IG1yLTQgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI3VwbG9hZFwiIGNsYXNzTmFtZT1cInAtNCBtbC00IG1yLTQgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWdyZWVuLTUwMCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIG10LTQgbWItNFwiPkZlYXR1cmUgUmVzb3VyY2U8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlRoaXMgYmxvY2sgaXMgdW5kZXIgY29uc3RydWN0aW9uLlxuXG5cblxuXG5cblxuXG4gICAgICAgICAgXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB0ZXh0LWNlbnRlciBwLTQgbXQtNFwiPlxuICAgICAgICA8cD7CqSAyMDI1IEJpb21pbmQgTG9naWMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICA8cD4gQ29udGFjdCB1czogRW1haWw6IHRvbnl0dWRhb2Rhb0BnbWFpbC5jb20gPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIkhvbWUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsIm1lbnVJdGVtcyIsIkJpb2xvZ3kiLCJDaGVtaXN0cnkiLCJQaHlzaWNzIiwiTWF0aHMiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm5hdiIsImNsYXNzTmFtZSIsImgxIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm1lbnUiLCJpbmRleCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNwYW4iLCJzdWJqZWN0IiwiaWR4IiwiaDMiLCJpdGVtIiwic3ViSWR4IiwiYSIsImhyZWYiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJtYWluIiwiaDIiLCJwIiwiZm9vdGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});