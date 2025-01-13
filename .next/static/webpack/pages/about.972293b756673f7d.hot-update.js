"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const menuItems = {\n        \"GCSE / IGCSE\": {\n            Biology: [\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            Chemistry: [\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            Physics: [\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            Maths: [\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ]\n        },\n        \"A-Level\": {\n            Biology: [\n                \"Biology Papers\",\n                \"Biology Revision\"\n            ],\n            Chemistry: [\n                \"Chemistry Papers\",\n                \"Chemistry Revision\"\n            ],\n            Physics: [\n                \"Physics Papers\",\n                \"Physics Revision\"\n            ],\n            Maths: [\n                \"Maths Papers\",\n                \"Maths Revision\"\n            ],\n            \"Computer Science\": [\n                \"Computer Science Papers\",\n                \"Computer Science Revision\"\n            ]\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex bg-lightest text-darkest space-x-8 p-6 justify-evenly fixed top-0 left-0 right-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"absolute text-4xl font-bold left-0 ml-12 mt-2\",\n                children: \"Biomind Logic\"\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    Object.keys(menuItems).map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative group ml-8 mr-8\",\n                            onMouseEnter: ()=>setActiveMenu(menu),\n                            onMouseLeave: ()=>setActiveMenu(null),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"cursor-pointer font-semibold text-lg hover:underline\",\n                                    children: menu\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this),\n                                activeMenu === menu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute text-black bg-white shadow-lg p-4 w-[180px]\",\n                                    children: Object.keys(menuItems[menu]).map((subject, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"font-bold mb-2\",\n                                                    children: subject\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-col\",\n                                                    children: menuItems[menu][subject].map((item, subIdx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"#\".concat(item.replace(/\\s+/g, '-').toLowerCase()),\n                                                            className: \"hover:underline hover:bg-gray-100 p-2 rounded\",\n                                                            children: item\n                                                        }, subIdx, false, {\n                                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 29\n                                                        }, this))\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/about\",\n                            className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#upload\",\n                            className: \"p-4 ml-4 mr-4 font-semibold text-lg hover:underline\",\n                            children: \"Upload\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/Navbar.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"MocqPnwFqSmp7lBJG379qjRmafg=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFFbEIsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNSSxZQUFZO1FBQ2QsZ0JBQWdCO1lBQ1pDLFNBQVM7Z0JBQUM7Z0JBQWtCO2FBQW1CO1lBQy9DQyxXQUFXO2dCQUFDO2dCQUFvQjthQUFxQjtZQUNyREMsU0FBUztnQkFBQztnQkFBa0I7YUFBbUI7WUFDL0NDLE9BQU87Z0JBQUM7Z0JBQWdCO2FBQWlCO1FBQzdDO1FBQ0EsV0FBVztZQUNQSCxTQUFTO2dCQUFDO2dCQUFrQjthQUFtQjtZQUMvQ0MsV0FBVztnQkFBQztnQkFBb0I7YUFBcUI7WUFDckRDLFNBQVM7Z0JBQUM7Z0JBQWtCO2FBQW1CO1lBQy9DQyxPQUFPO2dCQUFDO2dCQUFnQjthQUFpQjtZQUN6QyxvQkFBb0I7Z0JBQUM7Z0JBQTJCO2FBQTRCO1FBQ2hGO0lBQ0o7SUFDQSxxQkFDQSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFnRDs7Ozs7OzBCQUM5RCw4REFBQ0U7Z0JBQUlGLFdBQVU7O2tDQUNYLDhEQUFDRTtrQ0FDRCw0RUFBQ2Isa0RBQUlBOzRCQUFDYyxNQUFLOzRCQUFJSCxXQUFVO3NDQUFzRDs7Ozs7Ozs7Ozs7b0JBSzlFSSxPQUFPQyxJQUFJLENBQUNYLFdBQVdZLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkMsOERBQUNOOzRCQUVHRixXQUFVOzRCQUNWUyxjQUFjLElBQU1oQixjQUFjYzs0QkFDbENHLGNBQWMsSUFBTWpCLGNBQWM7OzhDQUVsQyw4REFBQ2tCO29DQUFLWCxXQUFVOzhDQUNmTzs7Ozs7O2dDQUdBZixlQUFlZSxzQkFDaEIsOERBQUNMO29DQUFJRixXQUFVOzhDQUNWSSxPQUFPQyxJQUFJLENBQUNYLFNBQVMsQ0FBQ2EsS0FBSyxFQUFFRCxHQUFHLENBQUMsQ0FBQ00sU0FBU0Msb0JBQzVDLDhEQUFDWDs0Q0FBSUYsV0FBVTs7OERBQ1gsOERBQUNjO29EQUFHZCxXQUFVOzhEQUFrQlk7Ozs7Ozs4REFDaEMsOERBQUNWO29EQUFJRixXQUFVOzhEQUNkTixTQUFTLENBQUNhLEtBQUssQ0FBQ0ssUUFBUSxDQUFDTixHQUFHLENBQUMsQ0FBQ1MsTUFBTUMsdUJBQ2pDLDhEQUFDQzs0REFFRGQsTUFBTSxJQUE0QyxPQUF4Q1ksS0FBS0csT0FBTyxDQUFDLFFBQVEsS0FBS0MsV0FBVzs0REFDL0NuQixXQUFVO3NFQUVUZTsyREFKSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBakJaUjs7Ozs7a0NBK0JULDhEQUFDTjtrQ0FDRCw0RUFBQ2Isa0RBQUlBOzRCQUFDYyxNQUFLOzRCQUFTSCxXQUFVO3NDQUFzRDs7Ozs7Ozs7Ozs7a0NBSXBGLDhEQUFDRTtrQ0FDRCw0RUFBQ2U7NEJBQUVkLE1BQUs7NEJBQVVILFdBQVU7c0NBQXNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85RjtHQTFFd0JUO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvd3VsaW5nL0Rlc2t0b3AvMjRXaW50ZXIvYmlvbWluZHdlYi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKXtcbiAgICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbXMgPSB7XG4gICAgICAgIFwiR0NTRSAvIElHQ1NFXCI6IHtcbiAgICAgICAgICAgIEJpb2xvZ3k6IFtcIkJpb2xvZ3kgUGFwZXJzXCIsIFwiQmlvbG9neSBSZXZpc2lvblwiXSxcbiAgICAgICAgICAgIENoZW1pc3RyeTogW1wiQ2hlbWlzdHJ5IFBhcGVyc1wiLCBcIkNoZW1pc3RyeSBSZXZpc2lvblwiXSxcbiAgICAgICAgICAgIFBoeXNpY3M6IFtcIlBoeXNpY3MgUGFwZXJzXCIsIFwiUGh5c2ljcyBSZXZpc2lvblwiXSxcbiAgICAgICAgICAgIE1hdGhzOiBbXCJNYXRocyBQYXBlcnNcIiwgXCJNYXRocyBSZXZpc2lvblwiXVxuICAgICAgICB9LFxuICAgICAgICBcIkEtTGV2ZWxcIjoge1xuICAgICAgICAgICAgQmlvbG9neTogW1wiQmlvbG9neSBQYXBlcnNcIiwgXCJCaW9sb2d5IFJldmlzaW9uXCJdLFxuICAgICAgICAgICAgQ2hlbWlzdHJ5OiBbXCJDaGVtaXN0cnkgUGFwZXJzXCIsIFwiQ2hlbWlzdHJ5IFJldmlzaW9uXCJdLFxuICAgICAgICAgICAgUGh5c2ljczogW1wiUGh5c2ljcyBQYXBlcnNcIiwgXCJQaHlzaWNzIFJldmlzaW9uXCJdLFxuICAgICAgICAgICAgTWF0aHM6IFtcIk1hdGhzIFBhcGVyc1wiLCBcIk1hdGhzIFJldmlzaW9uXCJdLFxuICAgICAgICAgICAgXCJDb21wdXRlciBTY2llbmNlXCI6IFtcIkNvbXB1dGVyIFNjaWVuY2UgUGFwZXJzXCIsIFwiQ29tcHV0ZXIgU2NpZW5jZSBSZXZpc2lvblwiXVxuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggYmctbGlnaHRlc3QgdGV4dC1kYXJrZXN0IHNwYWNlLXgtOCBwLTYganVzdGlmeS1ldmVubHkgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtNHhsIGZvbnQtYm9sZCBsZWZ0LTAgbWwtMTIgbXQtMlwiPkJpb21pbmQgTG9naWM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwLTQgbWwtNCBtci00IGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogYWxldmVsLGlnY3Nl6I+c5Y2VICovfVxuICAgICAgICAgICAge09iamVjdC5rZXlzKG1lbnVJdGVtcykubWFwKChtZW51LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXAgbWwtOCBtci04XCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEFjdGl2ZU1lbnUobWVudSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmVNZW51KG51bGwpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICB7bWVudX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHsvKiDkuIvmi4noj5zljZUgKi99XG4gICAgICAgICAgICAgICAge2FjdGl2ZU1lbnUgPT09IG1lbnUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1ibGFjayBiZy13aGl0ZSBzaGFkb3ctbGcgcC00IHctWzE4MHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobWVudUl0ZW1zW21lbnVdKS5tYXAoKHN1YmplY3QsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0yXCI+e3N1YmplY3R9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtc1ttZW51XVtzdWJqZWN0XS5tYXAoKGl0ZW0sIHN1YklkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJJZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke2l0ZW0ucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmUgaG92ZXI6YmctZ3JheS0xMDAgcC0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cInAtNCBtbC00IG1yLTQgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI3VwbG9hZFwiIGNsYXNzTmFtZT1cInAtNCBtbC00IG1yLTQgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIFVwbG9hZFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJOYXZiYXIiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsIm1lbnVJdGVtcyIsIkJpb2xvZ3kiLCJDaGVtaXN0cnkiLCJQaHlzaWNzIiwiTWF0aHMiLCJuYXYiLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsImhyZWYiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibWVudSIsImluZGV4Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3BhbiIsInN1YmplY3QiLCJpZHgiLCJoMyIsIml0ZW0iLCJzdWJJZHgiLCJhIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});