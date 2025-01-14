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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FeaturedResources)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst resources = [\n    {\n        id: 1,\n        title: 'A-Level & AS Biology Chapter 1 Mindmap',\n        description: 'A mindmap covering the first chapter of AS Biology.',\n        category: 'Biology',\n        uploadDate: '2025-01-10',\n        link: '#a-level-as-biology-chapter-1-mindmap',\n        imageUrl: [\n            '/asch1mindmap.jpg'\n        ]\n    },\n    {\n        id: 2,\n        title: 'A-Level A2 Biology Syllabus Analysis',\n        description: 'A detailed analysis of the A2 Biology syllabus.',\n        category: 'Biology',\n        uploadDate: '2025-01-08',\n        link: '#a-level-a2-biology-syllabus-analysis',\n        imageUrl: [\n            '/a2syllabus1.jpg',\n            '/a2syllabus2.jpg',\n            '/a2syllabus3.jpg'\n        ]\n    },\n    {\n        id: 3,\n        title: 'GCSE Physics Formula Sheet',\n        description: 'A handy formula sheet for GCSE Physics students.',\n        category: 'Physics',\n        uploadDate: '2025-01-12',\n        link: '#gcse-physics-formula-sheet',\n        imageUrl: [\n            '/physics1.jpg',\n            '/physics2.jpg'\n        ]\n    }\n];\nfunction FeaturedResources() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [imageIndexes, setImageIndexes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(resources.map({\n        \"FeaturedResources.useState\": ()=>0\n    }[\"FeaturedResources.useState\"]) // 初始化每个资源的图片索引\n    );\n    const [hoveredIndex, setHoveredIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // 当前 hover 的资源索引\n    const [hoverTimeout, setHoverTimeout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // 记录 hover 的计时器\n    // 自动滚动功能\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FeaturedResources.useEffect\": ()=>{\n            const interval = setInterval({\n                \"FeaturedResources.useEffect.interval\": ()=>{\n                    setCurrentIndex({\n                        \"FeaturedResources.useEffect.interval\": (prevIndex)=>(prevIndex + 1) % resources.length\n                    }[\"FeaturedResources.useEffect.interval\"]);\n                }\n            }[\"FeaturedResources.useEffect.interval\"], 30000); // 每30秒切换\n            return ({\n                \"FeaturedResources.useEffect\": ()=>clearInterval(interval)\n            })[\"FeaturedResources.useEffect\"];\n        }\n    }[\"FeaturedResources.useEffect\"], []);\n    // 切换到下一个卡片\n    const handleNext = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % resources.length);\n    };\n    // 切换到上一个卡片\n    const handlePrev = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? resources.length - 1 : prevIndex - 1);\n    };\n    const handleMouseEnter = (resourceIndex)=>{\n        setHoveredIndex(resourceIndex);\n        const timeout = setTimeout(()=>{\n            handleImageNext(resourceIndex);\n        }, 3000); // 停留 3 秒后切换\n        setHoverTimeout(timeout);\n    };\n    // 当鼠标离开时，清除计时器\n    const handleMouseLeave = ()=>{\n        setHoveredIndex(null);\n        if (hoverTimeout) {\n            clearTimeout(hoverTimeout);\n            setHoverTimeout(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-white p-10 border rounded-lg shadow-lg w-4/5 mx-auto mt-10 mb-10 h-[600px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden flex items-center justify-center h-full relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex transition-transform duration-1000\",\n                    style: {\n                        transform: \"translateX(-\".concat(currentIndex * 100, \"%)\")\n                    },\n                    children: resources.map((resource, resourceIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"min-w-full p-4 flex-shrink bg-white rounded-lg flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center relative w-1/2 h-[400px] overflow-hidden\",\n                                    onMouseEnter: ()=>handleMouseEnter(resourceIndex),\n                                    onMouseLeave: handleMouseLeave,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex transition-transform duration-700\",\n                                        style: {\n                                            transform: \"translateX(-\".concat(imageIndexes[resourceIndex] * 100, \"%)\")\n                                        },\n                                        children: resource.imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                alt: \"Resource \".concat(resourceIndex + 1, \" Image \").concat(index + 1),\n                                                className: \"w-full h-full object-contain rounded-lg transition-transform duration-400 \".concat(hoveredIndex === resourceIndex ? 'scale-110' : 'scale-100')\n                                            }, index, false, {\n                                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                lineNumber: 109,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-1 ml-6 mr-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl font-semibold mb-4\",\n                                            children: resource.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 text-m mb-4 mt-4\",\n                                            children: resource.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 127,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-500 text-m mb-4 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Category:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 37\n                                                }, this),\n                                                \" \",\n                                                resource.category\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 128,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-500 text-m mb-4 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Uploaded:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                    lineNumber: 132,\n                                                    columnNumber: 37\n                                                }, this),\n                                                \" \",\n                                                resource.uploadDate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: resource.link,\n                                            className: \"block bg-lighter text-white text-center font-semibold py-2 mt-4 mb-4 rounded hover:bg-middle\",\n                                            children: \"View Resource\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, resource.id, true, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrev,\n                className: \"absolute top-1/2 left-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                children: \"◀\"\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                className: \"absolute top-1/2 right-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                children: \"▶\"\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 153,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-2 mr-6 bg-transparent\",\n                children: resources.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-3 w-3 rounded-full ml-2 mx-1 \".concat(currentIndex === index ? 'bg-gray-600' : 'bg-gray-300')\n                    }, index, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                        lineNumber: 163,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 161,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n}\n_s(FeaturedResources, \"xB9u7aG/t0frYQMfppLQARL8ffs=\");\n_c = FeaturedResources;\nvar _c;\n$RefreshReg$(_c, \"FeaturedResources\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzhDQWVyQiw4REFBQ1I7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDVzs0Q0FBR1gsV0FBVTtzREFBOEJHLFNBQVNsQyxLQUFLOzs7Ozs7c0RBQzFELDhEQUFDMkM7NENBQUVaLFdBQVU7c0RBQWtDRyxTQUFTakMsV0FBVzs7Ozs7O3NEQUNuRSw4REFBQzZCOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ2E7b0RBQUtiLFdBQVU7OERBQVk7Ozs7OztnREFBZ0I7Z0RBQUVHLFNBQVNoQyxRQUFROzs7Ozs7O3NEQUVuRSw4REFBQzRCOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ2E7b0RBQUtiLFdBQVU7OERBQVk7Ozs7OztnREFBZ0I7Z0RBQUVHLFNBQVMvQixVQUFVOzs7Ozs7O3NEQUVyRSw4REFBQzBDOzRDQUNHQyxNQUFNWixTQUFTOUIsSUFBSTs0Q0FDbkIyQixXQUFVO3NEQUNiOzs7Ozs7Ozs7Ozs7OzJCQS9DQUcsU0FBU25DLEVBQUU7Ozs7Ozs7Ozs7Ozs7OzswQkF5RGhDLDhEQUFDZ0Q7Z0JBQ0dDLFNBQVMxQjtnQkFDVFMsV0FBVTswQkFDYjs7Ozs7OzBCQUdELDhEQUFDZ0I7Z0JBQ0dDLFNBQVMzQjtnQkFDVFUsV0FBVTswQkFDYjs7Ozs7OzBCQUtELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVmpDLFVBQVVhLEdBQUcsQ0FBQyxDQUFDc0MsR0FBR1gsc0JBQ2YsOERBQUNSO3dCQUVHQyxXQUFXLGtDQUVWLE9BREd4QixpQkFBaUIrQixRQUFRLGdCQUFnQjt1QkFGeENBOzs7Ozs7Ozs7Ozs7Ozs7O0FBUzdCO0dBNUl3QmhDO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvd3VsaW5nL0Rlc2t0b3AvMjRXaW50ZXIvYmlvbWluZHdlYi9zcmMvY29tcG9uZW50cy9SZXNvdXJjZUNhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHJlc291cmNlcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogJ0EtTGV2ZWwgJiBBUyBCaW9sb2d5IENoYXB0ZXIgMSBNaW5kbWFwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIG1pbmRtYXAgY292ZXJpbmcgdGhlIGZpcnN0IGNoYXB0ZXIgb2YgQVMgQmlvbG9neS4nLFxuICAgICAgICBjYXRlZ29yeTogJ0Jpb2xvZ3knLFxuICAgICAgICB1cGxvYWREYXRlOiAnMjAyNS0wMS0xMCcsXG4gICAgICAgIGxpbms6ICcjYS1sZXZlbC1hcy1iaW9sb2d5LWNoYXB0ZXItMS1taW5kbWFwJyxcbiAgICAgICAgaW1hZ2VVcmw6IFsnL2FzY2gxbWluZG1hcC5qcGcnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiAnQS1MZXZlbCBBMiBCaW9sb2d5IFN5bGxhYnVzIEFuYWx5c2lzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGRldGFpbGVkIGFuYWx5c2lzIG9mIHRoZSBBMiBCaW9sb2d5IHN5bGxhYnVzLicsXG4gICAgICAgIGNhdGVnb3J5OiAnQmlvbG9neScsXG4gICAgICAgIHVwbG9hZERhdGU6ICcyMDI1LTAxLTA4JyxcbiAgICAgICAgbGluazogJyNhLWxldmVsLWEyLWJpb2xvZ3ktc3lsbGFidXMtYW5hbHlzaXMnLFxuICAgICAgICBpbWFnZVVybDogWycvYTJzeWxsYWJ1czEuanBnJywgJy9hMnN5bGxhYnVzMi5qcGcnLCcvYTJzeWxsYWJ1czMuanBnJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogJ0dDU0UgUGh5c2ljcyBGb3JtdWxhIFNoZWV0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGhhbmR5IGZvcm11bGEgc2hlZXQgZm9yIEdDU0UgUGh5c2ljcyBzdHVkZW50cy4nLFxuICAgICAgICBjYXRlZ29yeTogJ1BoeXNpY3MnLFxuICAgICAgICB1cGxvYWREYXRlOiAnMjAyNS0wMS0xMicsXG4gICAgICAgIGxpbms6ICcjZ2NzZS1waHlzaWNzLWZvcm11bGEtc2hlZXQnLFxuICAgICAgICBpbWFnZVVybDogWycvcGh5c2ljczEuanBnJywgJy9waHlzaWNzMi5qcGcnXSxcbiAgICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZWRSZXNvdXJjZXMoKSB7XG4gICAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpbWFnZUluZGV4ZXMsIHNldEltYWdlSW5kZXhlc10gPSB1c2VTdGF0ZShcbiAgICAgICAgcmVzb3VyY2VzLm1hcCgoKSA9PiAwKSAvLyDliJ3lp4vljJbmr4/kuKrotYTmupDnmoTlm77niYfntKLlvJVcbiAgICApO1xuICAgIGNvbnN0IFtob3ZlcmVkSW5kZXgsIHNldEhvdmVyZWRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTsgLy8g5b2T5YmNIGhvdmVyIOeahOi1hOa6kOe0ouW8lVxuICAgIGNvbnN0IFtob3ZlclRpbWVvdXQsIHNldEhvdmVyVGltZW91dF0gPSB1c2VTdGF0ZShudWxsKTsgLy8g6K6w5b2VIGhvdmVyIOeahOiuoeaXtuWZqFxuXG4gICAgLy8g6Ieq5Yqo5rua5Yqo5Yqf6IO9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgcmVzb3VyY2VzLmxlbmd0aCk7XG4gICAgICAgIH0sIDMwMDAwKTsgLy8g5q+PMzDnp5LliIfmjaJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIOWIh+aNouWIsOS4i+S4gOS4quWNoeeJh1xuICAgIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSByZXNvdXJjZXMubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgLy8g5YiH5o2i5Yiw5LiK5LiA5Liq5Y2h54mHXG4gICAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICAgICAgICBwcmV2SW5kZXggPT09IDAgPyByZXNvdXJjZXMubGVuZ3RoIC0gMSA6IHByZXZJbmRleCAtIDFcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChyZXNvdXJjZUluZGV4KSA9PiB7XG4gICAgICAgIHNldEhvdmVyZWRJbmRleChyZXNvdXJjZUluZGV4KTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlSW1hZ2VOZXh0KHJlc291cmNlSW5kZXgpO1xuICAgICAgICB9LCAzMDAwKTsgLy8g5YGc55WZIDMg56eS5ZCO5YiH5o2iXG4gICAgICAgIHNldEhvdmVyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuXG4gICAgLy8g5b2T6byg5qCH56a75byA5pe277yM5riF6Zmk6K6h5pe25ZmoXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SG92ZXJlZEluZGV4KG51bGwpO1xuICAgICAgICBpZiAoaG92ZXJUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaG92ZXJUaW1lb3V0KTtcbiAgICAgICAgICAgIHNldEhvdmVyVGltZW91dChudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHAtMTAgYm9yZGVyIHJvdW5kZWQtbGcgc2hhZG93LWxnIHctNC81IG14LWF1dG8gbXQtMTAgbWItMTAgaC1bNjAwcHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICB7Lyog5rua5Yqo5Y2h54mHICovfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0xMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7Y3VycmVudEluZGV4ICogMTAwfSUpYCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtyZXNvdXJjZXMubWFwKChyZXNvdXJjZSwgcmVzb3VyY2VJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVzb3VyY2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctZnVsbCBwLTQgZmxleC1zaHJpbmsgYmctd2hpdGUgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog5Zu+54mHICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgdy0xLzIgaC1bNDAwcHhdIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlTW91c2VFbnRlcihyZXNvdXJjZUluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUluZGV4ZXNbcmVzb3VyY2VJbmRleF0gKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9JSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc291cmNlLmltYWdlVXJsLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BSZXNvdXJjZSAke3Jlc291cmNlSW5kZXggKyAxfSBJbWFnZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNDAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmVkSW5kZXggPT09IHJlc291cmNlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdzY2FsZS0xMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2NhbGUtMTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWwtNiBtci02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPntyZXNvdXJjZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbSBtYi00IG10LTRcIj57cmVzb3VyY2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1tIG1iLTQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Q2F0ZWdvcnk6PC9zcGFuPiB7cmVzb3VyY2UuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1tIG1iLTQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VXBsb2FkZWQ6PC9zcGFuPiB7cmVzb3VyY2UudXBsb2FkRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtyZXNvdXJjZS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgYmctbGlnaHRlciB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgcHktMiBtdC00IG1iLTQgcm91bmRlZCBob3ZlcjpiZy1taWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFJlc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Lyog5bem5Y+z5YiH5o2i5oyJ6ZKuICovfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTAgdGV4dC0yeGwgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctdHJhbnNwYXJlbnQgcC0yIGgtZnVsbCB3LVs1MHB4XSBvcGFjaXR5LTQwIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4peAXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgcmlnaHQtMCB0ZXh0LTJ4bCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy10cmFuc3BhcmVudCBwLTIgaC1mdWxsIHctWzUwcHhdIG9wYWNpdHktNDAgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDilrZcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7Lyog5bqV6YOo5oyH56S654K5ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgbXItNiBiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIHtyZXNvdXJjZXMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0zIHctMyByb3VuZGVkLWZ1bGwgbWwtMiBteC0xICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID09PSBpbmRleCA/ICdiZy1ncmF5LTYwMCcgOiAnYmctZ3JheS0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlc291cmNlcyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwidXBsb2FkRGF0ZSIsImxpbmsiLCJpbWFnZVVybCIsIkZlYXR1cmVkUmVzb3VyY2VzIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiaW1hZ2VJbmRleGVzIiwic2V0SW1hZ2VJbmRleGVzIiwibWFwIiwiaG92ZXJlZEluZGV4Iiwic2V0SG92ZXJlZEluZGV4IiwiaG92ZXJUaW1lb3V0Iiwic2V0SG92ZXJUaW1lb3V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsImhhbmRsZU1vdXNlRW50ZXIiLCJyZXNvdXJjZUluZGV4IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJoYW5kbGVJbWFnZU5leHQiLCJoYW5kbGVNb3VzZUxlYXZlIiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZXNvdXJjZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImltYWdlIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsInAiLCJzcGFuIiwiYSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiXyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ResourceCard.js\n"));

/***/ })

});