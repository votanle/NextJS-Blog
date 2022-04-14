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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var user1 = param.user;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ userBlogs1 = ref[0], setUserBlogs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), blogs = ref1[0], setBlogs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getAllUserBlogs = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collectionGroup(\"blog\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            setUserBlogs(userBlogs);\n        });\n        return function() {\n            return getAllUserBlogs;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!userBlogs1.length) {\n            return;\n        }\n        var getAllUsers = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection(\"users\").get().then(function(querySnapshot) {\n            var users = [];\n            querySnapshot.forEach(function(doc) {\n                users.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(users);\n        });\n        getAllUsers.then(function(users) {\n            var uids = userBlogs1.map(function(userBlogs) {\n                return userBlogs.uid;\n            });\n            var resultUser = users.filter(function(user) {\n                return uids.includes(user.id);\n            });\n            var userBlogList = [];\n            userBlogs1.map(function(blog) {\n                var _$users = resultUser.find(function(u) {\n                    return u.id === blog.uid;\n                });\n                userBlogList.push({\n                    id: blog.upid,\n                    author: _$users.name,\n                    title: blog.data.title,\n                    content: blog.data.content\n                });\n            });\n            setBlogs(userBlogList);\n        });\n        return getAllUsers;\n    }, [\n        userBlogs1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d578b65e5a85516\" + \" \" + \"center\",\n        children: [\n            blogs.map(function(blog) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-d578b65e5a85516\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \"card-title card #ffc107 amber\",\n                                children: [\n                                    \"Title: \",\n                                    blog.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-d578b65e5a85516\",\n                                children: blog.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"format\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \" #aeea00 lime accent-4\",\n                                children: [\n                                    \"Author: \",\n                                    blog.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, blog.id, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, _this1);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d578b65e5a85516\",\n                children: \".card.jsx-d578b65e5a85516{max-width:500px;margin:22px auto}p.jsx-d578b65e5a85516{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"wWWgVWPF/D7gn9i8dQ6jW71Ehf8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuXG5jb25zdCBIb21lID0gKHsgdXNlcn0pID0+IHtcbiAgY29uc3QgW3VzZXJCbG9ncywgc2V0VXNlckJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRBbGxVc2VyQmxvZ3MgPSBkYi5jb2xsZWN0aW9uR3JvdXAoJ2Jsb2cnKVxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xuICAgICAgICBsZXQgdXNlckJsb2dzID0gW11cbiAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgdXNlckJsb2dzLnB1c2goe1xuICAgICAgICAgICAgdWlkOiBkb2MuaWQsXG4gICAgICAgICAgICB1cGlkOiBkb2MuaWQsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLCBjb250ZW50OiBkb2MuZGF0YSgpLmNvbnRlbnQgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBzZXRVc2VyQmxvZ3ModXNlckJsb2dzKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAoKSA9PiBnZXRBbGxVc2VyQmxvZ3NcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXJCbG9ncy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGdldEFsbFVzZXJzID0gZGIuY29sbGVjdGlvbigndXNlcnMnKS5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICBsZXQgdXNlcnMgPSBbXVxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgdXNlcnMucHVzaCh7XG4gICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLm5hbWUsXG4gICAgICAgIH0pXG5cbiAgICAgIH0pXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXJzKVxuICAgIH0pXG4gICAgZ2V0QWxsVXNlcnMudGhlbigodXNlcnMpID0+IHtcbiAgICAgIGxldCB1aWRzID0gdXNlckJsb2dzLm1hcCgodXNlckJsb2dzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQmxvZ3MudWlkXG4gICAgICB9KVxuICAgICAgbGV0IHJlc3VsdFVzZXIgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHVpZHMuaW5jbHVkZXModXNlci5pZClcbiAgICAgIH0pXG4gICAgICBsZXQgdXNlckJsb2dMaXN0ID0gW11cbiAgICAgIHVzZXJCbG9ncy5tYXAoKGJsb2cpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSByZXN1bHRVc2VyLmZpbmQoKHUpID0+IHtcbiAgICAgICAgICByZXR1cm4gdS5pZCA9PT0gYmxvZy51aWRcbiAgICAgICAgfSkgICAgXG4gICAgICAgIHVzZXJCbG9nTGlzdC5wdXNoKHtcbiAgICAgICAgICBpZDogYmxvZy51cGlkLFxuICAgICAgICAgIGF1dGhvcjogdXNlcnMubmFtZSxcbiAgICAgICAgICB0aXRsZTogYmxvZy5kYXRhLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQ6IGJsb2cuZGF0YS5jb250ZW50LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHNldEJsb2dzKHVzZXJCbG9nTGlzdClcbiAgICB9KVxuICAgIHJldHVybiBnZXRBbGxVc2Vyc1xuICB9LCBbdXNlckJsb2dzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG5cbiAgICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtibG9nLmlkfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgY2FyZCAjZmZjMTA3IGFtYmVyXCI+VGl0bGU6IHtibG9nLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPHA+e2Jsb2cuY29udGVudH08L3A+XG5cbiAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYXRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCIgI2FlZWEwMCBsaW1lIGFjY2VudC00XCI+QXV0aG9yOiB7YmxvZy5hdXRob3J9PC9oNT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgICAgXG4gICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDo1MDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lXG5cbiJdLCJuYW1lcyI6WyJkYiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkhvbWUiLCJ1c2VyIiwidXNlckJsb2dzIiwic2V0VXNlckJsb2dzIiwiYmxvZ3MiLCJzZXRCbG9ncyIsImdldEFsbFVzZXJCbG9ncyIsImNvbGxlY3Rpb25Hcm91cCIsIm9yZGVyQnkiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsInVpZCIsImlkIiwidXBpZCIsImRhdGEiLCJ0aXRsZSIsImNvbnRlbnQiLCJsZW5ndGgiLCJnZXRBbGxVc2VycyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsInVzZXJzIiwibmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidWlkcyIsIm1hcCIsInJlc3VsdFVzZXIiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInVzZXJCbG9nTGlzdCIsImJsb2ciLCJmaW5kIiwidSIsImF1dGhvciIsImRpdiIsImgxIiwicCIsImg1Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});