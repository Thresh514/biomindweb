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

/***/ "./src/components/ResourceCard.js":
/*!****************************************!*\
  !*** ./src/components/ResourceCard.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FeaturedResources)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst resources = [\n    {\n        id: 1,\n        title: 'A-Level & AS Biology Chapter 1 Mindmap',\n        description: 'A mindmap covering the first chapter of AS Biology.',\n        category: 'Biology',\n        uploadDate: '2025-01-10',\n        link: '#a-level-as-biology-chapter-1-mindmap',\n        imageUrl: [\n            '/asch1mindmap.jpg'\n        ]\n    },\n    {\n        id: 2,\n        title: 'A-Level A2 Biology Syllabus Analysis',\n        description: 'A detailed analysis of the A2 Biology syllabus.',\n        category: 'Biology',\n        uploadDate: '2025-01-08',\n        link: '#a-level-a2-biology-syllabus-analysis',\n        imageUrl: [\n            '/a2syllabus1.jpg',\n            '/a2syllabus2.jpg',\n            '/a2syllabus3.jpg'\n        ]\n    },\n    {\n        id: 3,\n        title: 'GCSE Physics Formula Sheet',\n        description: 'A handy formula sheet for GCSE Physics students.',\n        category: 'Physics',\n        uploadDate: '2025-01-12',\n        link: '#gcse-physics-formula-sheet',\n        imageUrl: [\n            '/physics1.jpg',\n            '/physics2.jpg'\n        ]\n    }\n];\nfunction FeaturedResources() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [imageIndexes, setImageIndexes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(resources.map({\n        \"FeaturedResources.useState\": ()=>0\n    }[\"FeaturedResources.useState\"]) // 初始化每个资源的图片索引\n    );\n    const [hoveredIndex, setHoveredIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // 当前 hover 的资源索引\n    // 自动滚动功能\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FeaturedResources.useEffect\": ()=>{\n            const interval = setInterval({\n                \"FeaturedResources.useEffect.interval\": ()=>{\n                    setCurrentIndex({\n                        \"FeaturedResources.useEffect.interval\": (prevIndex)=>(prevIndex + 1) % resources.length\n                    }[\"FeaturedResources.useEffect.interval\"]);\n                }\n            }[\"FeaturedResources.useEffect.interval\"], 30000); // 每30秒切换\n            return ({\n                \"FeaturedResources.useEffect\": ()=>clearInterval(interval)\n            })[\"FeaturedResources.useEffect\"];\n        }\n    }[\"FeaturedResources.useEffect\"], []);\n    // 切换到下一个卡片\n    const handleNext = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % resources.length);\n    };\n    // 切换到上一个卡片\n    const handlePrev = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? resources.length - 1 : prevIndex - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FeaturedResources.useEffect\": ()=>{\n            if (hoveredIndex !== null) {\n                const timeout = setTimeout({\n                    \"FeaturedResources.useEffect.timeout\": ()=>{\n                        setImageIndexes({\n                            \"FeaturedResources.useEffect.timeout\": (prevIndexes)=>prevIndexes.map({\n                                    \"FeaturedResources.useEffect.timeout\": (index, i)=>i === hoveredIndex ? (index + 1) % resources[hoveredIndex].imageUrl.length : index\n                                }[\"FeaturedResources.useEffect.timeout\"])\n                        }[\"FeaturedResources.useEffect.timeout\"]);\n                    }\n                }[\"FeaturedResources.useEffect.timeout\"], 1000); // 1 秒后切换图片\n                return ({\n                    \"FeaturedResources.useEffect\": ()=>clearTimeout(timeout)\n                })[\"FeaturedResources.useEffect\"];\n            }\n        }\n    }[\"FeaturedResources.useEffect\"], [\n        hoveredIndex,\n        imageIndexes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-white p-10 border rounded-lg shadow-lg w-4/5 mx-auto mt-10 mb-10 h-[600px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden flex items-center justify-center h-full relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex transition-transform duration-1000\",\n                    style: {\n                        transform: \"translateX(-\".concat(currentIndex * 100, \"%)\")\n                    },\n                    children: resources.map((resource, resourceIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"min-w-full p-4 flex-shrink bg-white rounded-lg flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex item-center relative w-1/2 h-[400px] overflow-hidden\",\n                                    onMouseEnter: ()=>setHoveredIndex(resourceIndex),\n                                    onMouseLeave: ()=>setHoveredIndex(null),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex transition-transform duration-700\",\n                                        style: {\n                                            transform: \"translateX(-\".concat(imageIndexes[resourceIndex] * 100, \"%)\")\n                                        },\n                                        children: resource.imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                alt: \"Resource \".concat(resourceIndex + 1, \" Image \").concat(index + 1),\n                                                className: \"w-full h-full object-contain rounded-lg transition-transform duration-400 \".concat(hoveredIndex === resourceIndex ? 'scale-110' : 'scale-100')\n                                            }, index, false, {\n                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-1 ml-6 mr-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl font-semibold mb-4\",\n                                            children: resource.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 text-m mb-4 mt-4\",\n                                            children: resource.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-500 text-m mb-4 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Category:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                    lineNumber: 127,\n                                                    columnNumber: 37\n                                                }, this),\n                                                \" \",\n                                                resource.category\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-500 text-m mb-4 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Uploaded:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 37\n                                                }, this),\n                                                \" \",\n                                                resource.uploadDate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 129,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: resource.link,\n                                            className: \"block bg-lighter text-white text-center font-semibold py-2 mt-4 mb-4 rounded hover:bg-middle\",\n                                            children: \"View Resource\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, resource.id, true, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                            lineNumber: 87,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrev,\n                className: \"absolute top-1/2 left-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                children: \"◀\"\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                className: \"absolute top-1/2 right-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                children: \"▶\"\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-2 mr-6 bg-transparent\",\n                children: resources.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-3 w-3 rounded-full ml-2 mx-1 \".concat(currentIndex === index ? 'bg-gray-600' : 'bg-gray-300')\n                    }, index, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                        lineNumber: 161,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 159,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_s(FeaturedResources, \"5Z/DFIStYdBekRwQtqE+dJhn0ec=\");\n_c = FeaturedResources;\nvar _c;\n$RefreshReg$(_c, \"FeaturedResources\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIsaUJBQWlCb0IsZ0JBQ1gsY0FDQTsrQ0FSTFI7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FlckIsOERBQUNHO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ1c7NENBQUdYLFdBQVU7c0RBQThCRyxTQUFTL0IsS0FBSzs7Ozs7O3NEQUMxRCw4REFBQ3dDOzRDQUFFWixXQUFVO3NEQUFrQ0csU0FBUzlCLFdBQVc7Ozs7OztzREFDbkUsOERBQUMwQjs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNhO29EQUFLYixXQUFVOzhEQUFZOzs7Ozs7Z0RBQWdCO2dEQUFFRyxTQUFTN0IsUUFBUTs7Ozs7OztzREFFbkUsOERBQUN5Qjs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNhO29EQUFLYixXQUFVOzhEQUFZOzs7Ozs7Z0RBQWdCO2dEQUFFRyxTQUFTNUIsVUFBVTs7Ozs7OztzREFFckUsOERBQUN1Qzs0Q0FDR0MsTUFBTVosU0FBUzNCLElBQUk7NENBQ25Cd0IsV0FBVTtzREFDYjs7Ozs7Ozs7Ozs7OzsyQkEvQ0FHLFNBQVNoQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7MEJBeURoQyw4REFBQzZDO2dCQUNHQyxTQUFTekI7Z0JBQ1RRLFdBQVU7MEJBQ2I7Ozs7OzswQkFHRCw4REFBQ2dCO2dCQUNHQyxTQUFTMUI7Z0JBQ1RTLFdBQVU7MEJBQ2I7Ozs7OzswQkFLRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1Y5QixVQUFVYSxHQUFHLENBQUMsQ0FBQ21DLEdBQUd0QixzQkFDZiw4REFBQ0c7d0JBRUdDLFdBQVcsa0NBRVYsT0FER3JCLGlCQUFpQmlCLFFBQVEsZ0JBQWdCO3VCQUZ4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0I7R0ExSXdCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy93dWxpbmcvRGVza3RvcC8yNFdpbnRlci9iaW9taW5kd2ViL3NyYy9jb21wb25lbnRzL1Jlc291cmNlQ2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVzb3VyY2VzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiAnQS1MZXZlbCAmIEFTIEJpb2xvZ3kgQ2hhcHRlciAxIE1pbmRtYXAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgbWluZG1hcCBjb3ZlcmluZyB0aGUgZmlyc3QgY2hhcHRlciBvZiBBUyBCaW9sb2d5LicsXG4gICAgICAgIGNhdGVnb3J5OiAnQmlvbG9neScsXG4gICAgICAgIHVwbG9hZERhdGU6ICcyMDI1LTAxLTEwJyxcbiAgICAgICAgbGluazogJyNhLWxldmVsLWFzLWJpb2xvZ3ktY2hhcHRlci0xLW1pbmRtYXAnLFxuICAgICAgICBpbWFnZVVybDogWycvYXNjaDFtaW5kbWFwLmpwZyddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6ICdBLUxldmVsIEEyIEJpb2xvZ3kgU3lsbGFidXMgQW5hbHlzaXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZGV0YWlsZWQgYW5hbHlzaXMgb2YgdGhlIEEyIEJpb2xvZ3kgc3lsbGFidXMuJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdCaW9sb2d5JyxcbiAgICAgICAgdXBsb2FkRGF0ZTogJzIwMjUtMDEtMDgnLFxuICAgICAgICBsaW5rOiAnI2EtbGV2ZWwtYTItYmlvbG9neS1zeWxsYWJ1cy1hbmFseXNpcycsXG4gICAgICAgIGltYWdlVXJsOiBbJy9hMnN5bGxhYnVzMS5qcGcnLCAnL2Eyc3lsbGFidXMyLmpwZycsJy9hMnN5bGxhYnVzMy5qcGcnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiAnR0NTRSBQaHlzaWNzIEZvcm11bGEgU2hlZXQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgaGFuZHkgZm9ybXVsYSBzaGVldCBmb3IgR0NTRSBQaHlzaWNzIHN0dWRlbnRzLicsXG4gICAgICAgIGNhdGVnb3J5OiAnUGh5c2ljcycsXG4gICAgICAgIHVwbG9hZERhdGU6ICcyMDI1LTAxLTEyJyxcbiAgICAgICAgbGluazogJyNnY3NlLXBoeXNpY3MtZm9ybXVsYS1zaGVldCcsXG4gICAgICAgIGltYWdlVXJsOiBbJy9waHlzaWNzMS5qcGcnLCAnL3BoeXNpY3MyLmpwZyddLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZFJlc291cmNlcygpIHtcbiAgICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2ltYWdlSW5kZXhlcywgc2V0SW1hZ2VJbmRleGVzXSA9IHVzZVN0YXRlKFxuICAgICAgICByZXNvdXJjZXMubWFwKCgpID0+IDApIC8vIOWIneWni+WMluavj+S4qui1hOa6kOeahOWbvueJh+e0ouW8lVxuICAgICk7XG4gICAgY29uc3QgW2hvdmVyZWRJbmRleCwgc2V0SG92ZXJlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpOyAvLyDlvZPliY0gaG92ZXIg55qE6LWE5rqQ57Si5byVXG5cbiAgICAvLyDoh6rliqjmu5rliqjlip/og71cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSByZXNvdXJjZXMubGVuZ3RoKTtcbiAgICAgICAgfSwgMzAwMDApOyAvLyDmr48zMOenkuWIh+aNolxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8g5YiH5o2i5Yiw5LiL5LiA5Liq5Y2h54mHXG4gICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIHJlc291cmNlcy5sZW5ndGgpO1xuICAgIH07XG5cbiAgICAvLyDliIfmjaLliLDkuIrkuIDkuKrljaHniYdcbiAgICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgICAgICAgIHByZXZJbmRleCA9PT0gMCA/IHJlc291cmNlcy5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaG92ZXJlZEluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmRleGVzKChwcmV2SW5kZXhlcykgPT5cbiAgICAgICAgICAgICAgICAgICAgcHJldkluZGV4ZXMubWFwKChpbmRleCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPT09IGhvdmVyZWRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGluZGV4ICsgMSkgJSByZXNvdXJjZXNbaG92ZXJlZEluZGV4XS5pbWFnZVVybC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSwgMTAwMCk7IC8vIDEg56eS5ZCO5YiH5o2i5Zu+54mHXG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9LCBbaG92ZXJlZEluZGV4LCBpbWFnZUluZGV4ZXNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgcC0xMCBib3JkZXIgcm91bmRlZC1sZyBzaGFkb3ctbGcgdy00LzUgbXgtYXV0byBtdC0xMCBtYi0xMCBoLVs2MDBweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiDmu5rliqjljaHniYcgKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTEwMDBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtjdXJyZW50SW5kZXggKiAxMDB9JSlgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Jlc291cmNlcy5tYXAoKHJlc291cmNlLCByZXNvdXJjZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZXNvdXJjZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIHAtNCBmbGV4LXNocmluayBiZy13aGl0ZSByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDlm77niYcgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW0tY2VudGVyIHJlbGF0aXZlIHctMS8yIGgtWzQwMHB4XSBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWRJbmRleChyZXNvdXJjZUluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkSW5kZXgobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSW5kZXhlc1tyZXNvdXJjZUluZGV4XSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0lKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzb3VyY2UuaW1hZ2VVcmwubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YFJlc291cmNlICR7cmVzb3VyY2VJbmRleCArIDF9IEltYWdlICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW4gcm91bmRlZC1sZyB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi00MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyZWRJbmRleCA9PT0gcmVzb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3NjYWxlLTExMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzY2FsZS0xMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtbC02IG1yLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e3Jlc291cmNlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1tIG1iLTQgbXQtNFwiPntyZXNvdXJjZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LW0gbWItNCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5DYXRlZ29yeTo8L3NwYW4+IHtyZXNvdXJjZS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LW0gbWItNCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5VcGxvYWRlZDo8L3NwYW4+IHtyZXNvdXJjZS51cGxvYWREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Jlc291cmNlLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBiZy1saWdodGVyIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBweS0yIG10LTQgbWItNCByb3VuZGVkIGhvdmVyOmJnLW1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUmVzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiDlt6blj7PliIfmjaLmjInpkq4gKi99XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMCB0ZXh0LTJ4bCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy10cmFuc3BhcmVudCBwLTIgaC1mdWxsIHctWzUwcHhdIG9wYWNpdHktNDAgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDil4BcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC0wIHRleHQtMnhsIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLXRyYW5zcGFyZW50IHAtMiBoLWZ1bGwgdy1bNTBweF0gb3BhY2l0eS00MCBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOKWtlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIHsvKiDlupXpg6jmjIfnpLrngrkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiBtci02IGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAge3Jlc291cmNlcy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTMgdy0zIHJvdW5kZWQtZnVsbCBtbC0yIG14LTEgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPT09IGluZGV4ID8gJ2JnLWdyYXktNjAwJyA6ICdiZy1ncmF5LTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVzb3VyY2VzIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJ1cGxvYWREYXRlIiwibGluayIsImltYWdlVXJsIiwiRmVhdHVyZWRSZXNvdXJjZXMiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJpbWFnZUluZGV4ZXMiLCJzZXRJbWFnZUluZGV4ZXMiLCJtYXAiLCJob3ZlcmVkSW5kZXgiLCJzZXRIb3ZlcmVkSW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkluZGV4IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXhlcyIsImluZGV4IiwiaSIsImNsZWFyVGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVzb3VyY2UiLCJyZXNvdXJjZUluZGV4Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsInAiLCJzcGFuIiwiYSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiXyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ResourceCard.js\n"));

/***/ })

});