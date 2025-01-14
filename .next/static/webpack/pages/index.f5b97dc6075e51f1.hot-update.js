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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FeaturedResources)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst resources = [\n    {\n        id: 1,\n        title: 'A-Level & AS Biology Chapter 1 Mindmap',\n        description: 'A mindmap covering the first chapter of AS Biology.',\n        category: 'Biology',\n        uploadDate: '2025-01-10',\n        link: '#a-level-as-biology-chapter-1-mindmap',\n        imageUrl: [\n            '/asch1mindmap.jpg'\n        ]\n    },\n    {\n        id: 2,\n        title: 'A-Level A2 Biology Syllabus Analysis',\n        description: 'A detailed analysis of the A2 Biology syllabus.',\n        category: 'Biology',\n        uploadDate: '2025-01-08',\n        link: '#a-level-a2-biology-syllabus-analysis',\n        imageUrl: [\n            '/a2syllabus1.jpg',\n            '/a2syllabus2.jpg',\n            '/a2syllabus3.jpg'\n        ]\n    },\n    {\n        id: 3,\n        title: 'GCSE Physics Formula Sheet',\n        description: 'A handy formula sheet for GCSE Physics students.',\n        category: 'Physics',\n        uploadDate: '2025-01-12',\n        link: '#gcse-physics-formula-sheet',\n        imageUrl: [\n            '/physics1.jpg',\n            '/physics2.jpg'\n        ]\n    }\n];\nfunction FeaturedResources() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [imageIndexes, setImageIndexes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(resources.map({\n        \"FeaturedResources.useState\": ()=>0\n    }[\"FeaturedResources.useState\"]) // 初始化每个资源的图片索引\n    );\n    // 自动滚动功能\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FeaturedResources.useEffect\": ()=>{\n            const interval = setInterval({\n                \"FeaturedResources.useEffect.interval\": ()=>{\n                    setCurrentIndex({\n                        \"FeaturedResources.useEffect.interval\": (prevIndex)=>(prevIndex + 1) % resources.length\n                    }[\"FeaturedResources.useEffect.interval\"]);\n                }\n            }[\"FeaturedResources.useEffect.interval\"], 30000); // 每30秒切换\n            return ({\n                \"FeaturedResources.useEffect\": ()=>clearInterval(interval)\n            })[\"FeaturedResources.useEffect\"];\n        }\n    }[\"FeaturedResources.useEffect\"], []);\n    // 切换到下一个卡片\n    const handleNext = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % resources.length);\n    };\n    // 切换到上一个卡片\n    const handlePrev = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? resources.length - 1 : prevIndex - 1);\n    };\n    // 切换到下一个图片\n    const handleImageNext = ()=>{\n        setImageIndexes((prevIndexes)=>prevIndexes.map((index, i)=>i === currentIndex ? (index + 1) % resources[currentIndex].imageUrl.length : index));\n    };\n    // 切换到上一个图片\n    const handleImagePrev = ()=>{\n        setImageIndexes((prevIndexes)=>prevIndexes.map((index, i)=>i === currentIndex ? index === 0 ? resources[currentIndex].imageUrl.length - 1 : index - 1 : index));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-white p-10 border rounded-lg shadow-lg w-4/5 mx-auto mt-10 mb-10 h-[600px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden flex items-center justify-center h-full relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex transition-transform duration-1000\",\n                    style: {\n                        transform: \"translateX(-\".concat(currentIndex * 100, \"%)\")\n                    },\n                    children: resources.map((resource, resourceIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"min-w-full p-4 flex-shrink bg-white rounded-lg flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex justify-center items-center overflow-x-auto space-x-4 w-1/2 bg-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleImagePrev(resourceIndex),\n                                            className: \"absolute top-1/2 left-0 text-m transform -translate-y-1/2 bg-transparent p-2 h-full w-[30px] z-10 opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                                            children: \"◀\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex transition-transform duration-1000\",\n                                            style: {\n                                                transform: \"translateX(-\".concat(imageIndexes[resourceIndex] * 100, \"%)\")\n                                            },\n                                            children: Array.isArray(resource.imageUrl) && resource.imageUrl.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex-shrink-1 w-full h-full\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: image,\n                                                        alt: resource.title,\n                                                        style: {\n                                                            width: '100%',\n                                                            height: 'auto',\n                                                            objectFit: 'contain'\n                                                        },\n                                                        className: \"rounded-lg object-contain\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                        lineNumber: 118,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                }, index, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 41\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleImageNext(resourceIndex),\n                                            className: \"absolute top-1/2 right-0 text-m transform -translate-y-1/2 bg-transparent p-4 h-full w-[30px] z-10 opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                                            children: \"▶\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 128,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-1 ml-6 mr-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl font-semibold mb-4\",\n                                            children: resource.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 137,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 text-m mb-4 mt-4\",\n                                            children: resource.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-500 text-m mb-4 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Category:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                    lineNumber: 140,\n                                                    columnNumber: 37\n                                                }, this),\n                                                \" \",\n                                                resource.category\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-500 text-m mb-4 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Uploaded:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                                    lineNumber: 143,\n                                                    columnNumber: 37\n                                                }, this),\n                                                \" \",\n                                                resource.uploadDate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: resource.link,\n                                            className: \"block bg-lighter text-white text-center text-semibold py-2 mt-4 mb-4 rounded hover:bg-middle\",\n                                            children: \"View Resource\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                            lineNumber: 145,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, resource.id, true, {\n                            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                            lineNumber: 92,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrev,\n                className: \"absolute top-1/2 left-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                children: \"◀\"\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 158,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                className: \"absolute top-1/2 right-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300\",\n                children: \"▶\"\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 164,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-2 mr-6 bg-transparent\",\n                children: resources.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-3 w-3 rounded-full ml-2 mx-1 \".concat(currentIndex === index ? 'bg-gray-600' : 'bg-gray-300')\n                    }, index, false, {\n                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                        lineNumber: 174,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n                lineNumber: 172,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/ResourceCard.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_s(FeaturedResources, \"OxbD19eQACGSNXH71lGmcRLB7Ds=\");\n_c = FeaturedResources;\nvar _c;\n$RefreshReg$(_c, \"FeaturedResources\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Zy9EZXNrdG9wLzI0V2ludGVyL2Jpb21pbmR3ZWIvc3JjL2NvbXBvbmVudHMvUmVzb3VyY2VDYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCByZXNvdXJjZXMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6ICdBLUxldmVsICYgQVMgQmlvbG9neSBDaGFwdGVyIDEgTWluZG1hcCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBtaW5kbWFwIGNvdmVyaW5nIHRoZSBmaXJzdCBjaGFwdGVyIG9mIEFTIEJpb2xvZ3kuJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdCaW9sb2d5JyxcbiAgICAgICAgdXBsb2FkRGF0ZTogJzIwMjUtMDEtMTAnLFxuICAgICAgICBsaW5rOiAnI2EtbGV2ZWwtYXMtYmlvbG9neS1jaGFwdGVyLTEtbWluZG1hcCcsXG4gICAgICAgIGltYWdlVXJsOiBbJy9hc2NoMW1pbmRtYXAuanBnJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogJ0EtTGV2ZWwgQTIgQmlvbG9neSBTeWxsYWJ1cyBBbmFseXNpcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZXRhaWxlZCBhbmFseXNpcyBvZiB0aGUgQTIgQmlvbG9neSBzeWxsYWJ1cy4nLFxuICAgICAgICBjYXRlZ29yeTogJ0Jpb2xvZ3knLFxuICAgICAgICB1cGxvYWREYXRlOiAnMjAyNS0wMS0wOCcsXG4gICAgICAgIGxpbms6ICcjYS1sZXZlbC1hMi1iaW9sb2d5LXN5bGxhYnVzLWFuYWx5c2lzJyxcbiAgICAgICAgaW1hZ2VVcmw6IFsnL2Eyc3lsbGFidXMxLmpwZycsICcvYTJzeWxsYWJ1czIuanBnJywnL2Eyc3lsbGFidXMzLmpwZyddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6ICdHQ1NFIFBoeXNpY3MgRm9ybXVsYSBTaGVldCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBoYW5keSBmb3JtdWxhIHNoZWV0IGZvciBHQ1NFIFBoeXNpY3Mgc3R1ZGVudHMuJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdQaHlzaWNzJyxcbiAgICAgICAgdXBsb2FkRGF0ZTogJzIwMjUtMDEtMTInLFxuICAgICAgICBsaW5rOiAnI2djc2UtcGh5c2ljcy1mb3JtdWxhLXNoZWV0JyxcbiAgICAgICAgaW1hZ2VVcmw6IFsnL3BoeXNpY3MxLmpwZycsICcvcGh5c2ljczIuanBnJ10sXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVkUmVzb3VyY2VzKCkge1xuICAgIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaW1hZ2VJbmRleGVzLCBzZXRJbWFnZUluZGV4ZXNdID0gdXNlU3RhdGUoXG4gICAgICAgIHJlc291cmNlcy5tYXAoKCkgPT4gMCkgLy8g5Yid5aeL5YyW5q+P5Liq6LWE5rqQ55qE5Zu+54mH57Si5byVXG4gICAgKTtcblxuICAgIC8vIOiHquWKqOa7muWKqOWKn+iDvVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIHJlc291cmNlcy5sZW5ndGgpO1xuICAgICAgICB9LCAzMDAwMCk7IC8vIOavjzMw56eS5YiH5o2iXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyDliIfmjaLliLDkuIvkuIDkuKrljaHniYdcbiAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgcmVzb3VyY2VzLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIC8vIOWIh+aNouWIsOS4iuS4gOS4quWNoeeJh1xuICAgIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PlxuICAgICAgICAgICAgcHJldkluZGV4ID09PSAwID8gcmVzb3VyY2VzLmxlbmd0aCAtIDEgOiBwcmV2SW5kZXggLSAxXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIOWIh+aNouWIsOS4i+S4gOS4quWbvueJh1xuICAgIGNvbnN0IGhhbmRsZUltYWdlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgc2V0SW1hZ2VJbmRleGVzKChwcmV2SW5kZXhlcykgPT5cbiAgICAgICAgICAgIHByZXZJbmRleGVzLm1hcCgoaW5kZXgsIGkpID0+XG4gICAgICAgICAgICAgICAgaSA9PT0gY3VycmVudEluZGV4ID8gKGluZGV4ICsgMSkgJSByZXNvdXJjZXNbY3VycmVudEluZGV4XS5pbWFnZVVybC5sZW5ndGggOiBpbmRleFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvLyDliIfmjaLliLDkuIrkuIDkuKrlm77niYdcbiAgICBjb25zdCBoYW5kbGVJbWFnZVByZXYgPSAoKSA9PiB7XG4gICAgICAgIHNldEltYWdlSW5kZXhlcygocHJldkluZGV4ZXMpID0+XG4gICAgICAgICAgICBwcmV2SW5kZXhlcy5tYXAoKGluZGV4LCBpKSA9PlxuICAgICAgICAgICAgICAgIGkgPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgICA/IGluZGV4ID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc291cmNlc1tjdXJyZW50SW5kZXhdLmltYWdlVXJsLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaW5kZXggLSAxXG4gICAgICAgICAgICAgICAgICAgIDogaW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBwLTEwIGJvcmRlciByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LTQvNSBteC1hdXRvIG10LTEwIG1iLTEwIGgtWzYwMHB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgey8qIOa7muWKqOWNoeeJhyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTAwMFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2N1cnJlbnRJbmRleCAqIDEwMH0lKWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cmVzb3VyY2VzLm1hcCgocmVzb3VyY2UsIHJlc291cmNlSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jlc291cmNlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgcC00IGZsZXgtc2hyaW5rIGJnLXdoaXRlIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgb3ZlcmZsb3cteC1hdXRvIHNwYWNlLXgtNCB3LTEvMiBiZy13aGl0ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIOWbvueJh+W3pui+uea7muWKqOaMiemSriAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSW1hZ2VQcmV2KHJlc291cmNlSW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTAgdGV4dC1tIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLXRyYW5zcGFyZW50IHAtMiBoLWZ1bGwgdy1bMzBweF0gei0xMCBvcGFjaXR5LTQwIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKXgFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog5Zu+54mHICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0xMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7aW1hZ2VJbmRleGVzW3Jlc291cmNlSW5kZXhdICogMTAwfSUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHJlc291cmNlLmltYWdlVXJsKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2VVcmwubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0gJ2ZsZXgtc2hyaW5rLTEgdy1mdWxsIGgtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Jlc291cmNlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJywgb2JqZWN0Rml0OiAnY29udGFpbid9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog5Zu+54mH5Y+z6L655rua5Yqo5oyJ6ZKuICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJbWFnZU5leHQocmVzb3VyY2VJbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHJpZ2h0LTAgdGV4dC1tIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLXRyYW5zcGFyZW50IHAtNCBoLWZ1bGwgdy1bMzBweF0gei0xMCBvcGFjaXR5LTQwIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWtlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1sLTYgbXItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj57cmVzb3VyY2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LW0gbWItNCBtdC00XCI+e3Jlc291cmNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtbSBtYi00IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkNhdGVnb3J5Ojwvc3Bhbj4ge3Jlc291cmNlLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtbSBtYi00IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlVwbG9hZGVkOjwvc3Bhbj4ge3Jlc291cmNlLnVwbG9hZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cmVzb3VyY2UubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGJnLWxpZ2h0ZXIgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB0ZXh0LXNlbWlib2xkIHB5LTIgbXQtNCBtYi00IHJvdW5kZWQgaG92ZXI6YmctbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBSZXNvdXJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIOW3puWPs+WIh+aNouaMiemSriAqL31cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0wIHRleHQtMnhsIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLXRyYW5zcGFyZW50IHAtMiBoLWZ1bGwgdy1bNTBweF0gb3BhY2l0eS00MCBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOKXgFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHJpZ2h0LTAgdGV4dC0yeGwgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctdHJhbnNwYXJlbnQgcC0yIGgtZnVsbCB3LVs1MHB4XSBvcGFjaXR5LTQwIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4pa2XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgey8qIOW6lemDqOaMh+ekuueCuSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIG1yLTYgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICB7cmVzb3VyY2VzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtMyB3LTMgcm91bmRlZC1mdWxsIG1sLTIgbXgtMSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9PT0gaW5kZXggPyAnYmctZ3JheS02MDAnIDogJ2JnLWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZXNvdXJjZXMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInVwbG9hZERhdGUiLCJsaW5rIiwiaW1hZ2VVcmwiLCJGZWF0dXJlZFJlc291cmNlcyIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImltYWdlSW5kZXhlcyIsInNldEltYWdlSW5kZXhlcyIsIm1hcCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJoYW5kbGVJbWFnZU5leHQiLCJwcmV2SW5kZXhlcyIsImluZGV4IiwiaSIsImhhbmRsZUltYWdlUHJldiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVzb3VyY2UiLCJyZXNvdXJjZUluZGV4IiwiYnV0dG9uIiwib25DbGljayIsIkFycmF5IiwiaXNBcnJheSIsImltYWdlIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJoMyIsInAiLCJzcGFuIiwiYSIsImhyZWYiLCJfIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ResourceCard.js\n"));

/***/ })

});