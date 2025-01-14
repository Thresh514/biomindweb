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

/***/ "./src/components/MembershipBenefits.js":
/*!**********************************************!*\
  !*** ./src/components/MembershipBenefits.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MembershipBenefits)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction MembershipBenefits() {\n    _s();\n    // 定义每个特权模块的状态，用于控制是否展开详细描述\n    const [expandedIndex, setExpandedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // 会员权益数据\n    const benefits = [\n        {\n            title: '无限下载资源',\n            description: '会员可以无限制下载平台上的所有学习资源，随时随地掌握新知识。',\n            details: '除了普通的资源，会员还可以优先访问最新的学习资料，确保学到最前沿的内容。',\n            icon: '/unlimited.svg'\n        },\n        {\n            title: '专属学习计划',\n            description: '根据您的学习目标和进度，提供个性化的学习计划，帮助您高效学习。',\n            details: '我们的学习计划会根据您的反馈和学习进度进行调整，确保最适合您的学习节奏。',\n            icon: '/study-plan.svg'\n        },\n        {\n            title: '无广告纯净体验',\n            description: '会员用户将享受无广告干扰的学习环境，专注于提升自我。',\n            details: '告别广告弹窗和中断，让您可以在一个干净、专注的环境中高效学习。',\n            icon: '/ad-block-icon.svg'\n        },\n        {\n            title: '专家答疑支持',\n            description: '会员可以向专家提问，获得一对一的答疑支持，解决学习中的疑难问题。',\n            details: '我们的专家团队随时待命，解答您在学习过程中遇到的各种问题。',\n            icon: '/expert-icon.svg'\n        }\n    ];\n    // 切换展开/收起详细描述\n    const handleHover = (index)=>{\n        setExpandedIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-24 bg-red-400\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-semibold text-darker mb-12\",\n                    children: \"为什么选择会员？\"\n                }, void 0, false, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8\",\n                    children: [\n                        \" \",\n                        benefits.map((benefit, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl\",\n                                onMouseEnter: ()=>handleHover(index),\n                                onMouseLeave: ()=>handleHover(null),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: benefit.icon,\n                                        alt: benefit.title,\n                                        className: \"w-16 h-16 mx-auto mb-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl font-semibold text-darker mb-4\",\n                                        children: benefit.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-600 mb-4\",\n                                        children: benefit.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, this),\n                                    expandedIndex === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500\",\n                                        children: benefit.details\n                                    }, void 0, false, {\n                                        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wuling/Desktop/24Winter/biomindweb/src/components/MembershipBenefits.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(MembershipBenefits, \"bzV0X/G6ETLTHnPPQQ2qIqf2BxU=\");\n_c = MembershipBenefits;\nvar _c;\n$RefreshReg$(_c, \"MembershipBenefits\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW1iZXJzaGlwQmVuZWZpdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUV6QixTQUFTRTs7SUFDcEIsMkJBQTJCO0lBQzNCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQSxDQUFDO0lBRW5ELFNBQVM7SUFDVCxNQUFNSSxXQUFXO1FBQ2I7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFNBQVM7WUFDVEMsTUFBTTtRQUNWO1FBQ0E7WUFDSUgsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFNBQVM7WUFDVEMsTUFBTTtRQUNWO1FBQ0E7WUFDSUgsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFNBQVM7WUFDVEMsTUFBTTtRQUNWO1FBQ0E7WUFDSUgsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFNBQVM7WUFDVEMsTUFBTTtRQUNWO0tBQ0g7SUFFRCxjQUFjO0lBQ2QsTUFBTUMsY0FBYyxDQUFDQztRQUNqQlAsaUJBQWlCTztJQUNyQjtJQUVBLHFCQUNJLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDWCw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQTJDOzs7Ozs7OEJBQ3pELDhEQUFDQztvQkFBSUQsV0FBVTs7d0JBQXVEO3dCQUNqRVIsU0FBU1csR0FBRyxDQUFDLENBQUNDLFNBQVNOLHNCQUNwQiw4REFBQ0c7Z0NBRUdELFdBQVU7Z0NBQ1ZLLGNBQWMsSUFBTVIsWUFBWUM7Z0NBQ2hDUSxjQUFjLElBQU1ULFlBQVk7O2tEQUVoQyw4REFBQ1U7d0NBQ0dDLEtBQUtKLFFBQVFSLElBQUk7d0NBQ2pCYSxLQUFLTCxRQUFRWCxLQUFLO3dDQUNsQk8sV0FBVTs7Ozs7O2tEQUVkLDhEQUFDVTt3Q0FBR1YsV0FBVTtrREFBMENJLFFBQVFYLEtBQUs7Ozs7OztrREFDckUsOERBQUNrQjt3Q0FBRVgsV0FBVTtrREFBc0JJLFFBQVFWLFdBQVc7Ozs7OztvQ0FDckRKLGtCQUFrQlEsdUJBQ2YsOERBQUNhO3dDQUFFWCxXQUFVO2tEQUFpQkksUUFBUVQsT0FBTzs7Ozs7OzsrQkFiNUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJqQztHQWpFd0JUO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvd3VsaW5nL0Rlc2t0b3AvMjRXaW50ZXIvYmlvbWluZHdlYi9zcmMvY29tcG9uZW50cy9NZW1iZXJzaGlwQmVuZWZpdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW1iZXJzaGlwQmVuZWZpdHMoKSB7XG4gICAgLy8g5a6a5LmJ5q+P5Liq54m55p2D5qih5Z2X55qE54q25oCB77yM55So5LqO5o6n5Yi25piv5ZCm5bGV5byA6K+m57uG5o+P6L+wXG4gICAgY29uc3QgW2V4cGFuZGVkSW5kZXgsIHNldEV4cGFuZGVkSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyDkvJrlkZjmnYPnm4rmlbDmja5cbiAgICBjb25zdCBiZW5lZml0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfml6DpmZDkuIvovb3otYTmupAnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfkvJrlkZjlj6/ku6Xml6DpmZDliLbkuIvovb3lubPlj7DkuIrnmoTmiYDmnInlrabkuaDotYTmupDvvIzpmo/ml7bpmo/lnLDmjozmj6HmlrDnn6Xor4bjgIInLFxuICAgICAgICAgICAgZGV0YWlsczogJ+mZpOS6huaZrumAmueahOi1hOa6kO+8jOS8muWRmOi/mOWPr+S7peS8mOWFiOiuv+mXruacgOaWsOeahOWtpuS5oOi1hOaWme+8jOehruS/neWtpuWIsOacgOWJjeayv+eahOWGheWuueOAgicsXG4gICAgICAgICAgICBpY29uOiAnL3VubGltaXRlZC5zdmcnLCAvLyDlj6/mm7/mjaLkuLrlrp7pmYXlm77moIfot6/lvoRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfkuJPlsZ7lrabkuaDorqHliJInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfmoLnmja7mgqjnmoTlrabkuaDnm67moIflkozov5vluqbvvIzmj5DkvpvkuKrmgKfljJbnmoTlrabkuaDorqHliJLvvIzluK7liqnmgqjpq5jmlYjlrabkuaDjgIInLFxuICAgICAgICAgICAgZGV0YWlsczogJ+aIkeS7rOeahOWtpuS5oOiuoeWIkuS8muagueaNruaCqOeahOWPjemmiOWSjOWtpuS5oOi/m+W6pui/m+ihjOiwg+aVtO+8jOehruS/neacgOmAguWQiOaCqOeahOWtpuS5oOiKguWlj+OAgicsXG4gICAgICAgICAgICBpY29uOiAnL3N0dWR5LXBsYW4uc3ZnJywgLy8g5Y+v5pu/5o2i5Li65a6e6ZmF5Zu+5qCH6Lev5b6EXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAn5peg5bm/5ZGK57qv5YeA5L2T6aqMJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Lya5ZGY55So5oi35bCG5Lqr5Y+X5peg5bm/5ZGK5bmy5omw55qE5a2m5Lmg546v5aKD77yM5LiT5rOo5LqO5o+Q5Y2H6Ieq5oiR44CCJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICflkYrliKvlub/lkYrlvLnnqpflkozkuK3mlq3vvIzorqnmgqjlj6/ku6XlnKjkuIDkuKrlubLlh4DjgIHkuJPms6jnmoTnjq/looPkuK3pq5jmlYjlrabkuaDjgIInLFxuICAgICAgICAgICAgaWNvbjogJy9hZC1ibG9jay1pY29uLnN2ZycsIC8vIOWPr+abv+aNouS4uuWunumZheWbvuagh+i3r+W+hFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ+S4k+WutuetlOeWkeaUr+aMgScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+S8muWRmOWPr+S7peWQkeS4k+WutuaPkOmXru+8jOiOt+W+l+S4gOWvueS4gOeahOetlOeWkeaUr+aMge+8jOino+WGs+WtpuS5oOS4reeahOeWkemavumXrumimOOAgicsXG4gICAgICAgICAgICBkZXRhaWxzOiAn5oiR5Lus55qE5LiT5a625Zui6Zif6ZqP5pe25b6F5ZG977yM6Kej562U5oKo5Zyo5a2m5Lmg6L+H56iL5Lit6YGH5Yiw55qE5ZCE56eN6Zeu6aKY44CCJyxcbiAgICAgICAgICAgIGljb246ICcvZXhwZXJ0LWljb24uc3ZnJywgLy8g5Y+v5pu/5o2i5Li65a6e6ZmF5Zu+5qCH6Lev5b6EXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIC8vIOWIh+aNouWxleW8gC/mlLbotbfor6bnu4bmj4/ov7BcbiAgICBjb25zdCBoYW5kbGVIb3ZlciA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRFeHBhbmRlZEluZGV4KGluZGV4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjQgYmctcmVkLTQwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtZGFya2VyIG1iLTEyXCI+5Li65LuA5LmI6YCJ5oup5Lya5ZGY77yfPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLThcIj4gey8q572R5qC85biD5bGA77ya6buY6K6k5LiA5YiX77yM5bGP5bmV5a695bqm5aSn5LqONjQwcHjml7bkuLrkuKTliJfvvIw3NjhweOS7peS4iuS4uuWbm+WIlyovfVxuICAgICAgICAgICAgICAgICAgICB7YmVuZWZpdHMubWFwKChiZW5lZml0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUhvdmVyKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtiZW5lZml0Lmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YmVuZWZpdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG14LWF1dG8gbWItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZGFya2VyIG1iLTRcIj57YmVuZWZpdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPntiZW5lZml0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhwYW5kZWRJbmRleCA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e2JlbmVmaXQuZGV0YWlsc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWVtYmVyc2hpcEJlbmVmaXRzIiwiZXhwYW5kZWRJbmRleCIsInNldEV4cGFuZGVkSW5kZXgiLCJiZW5lZml0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXRhaWxzIiwiaWNvbiIsImhhbmRsZUhvdmVyIiwiaW5kZXgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJtYXAiLCJiZW5lZml0Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MembershipBenefits.js\n"));

/***/ })

});