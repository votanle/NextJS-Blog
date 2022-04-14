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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ userBlogs1 = ref[0], setUserBlogs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), blogs = ref1[0], setBlogs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collectionGroup(\"blog\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.ref.parent.parent.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!userBlogs1.length) {\n            return;\n        }\n        var getAllUser = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection(\"users\").get().then(function(querySnapshot) {\n            var users = [];\n            querySnapshot.forEach(function(doc) {\n                users.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(users);\n        });\n        getAllUser.then(function(users) {\n            var uids = userBlogs1.map(function(userBlogs) {\n                return userBlogs.uid;\n            });\n            var resultUser = users.filter(function(user) {\n                return uids.includes(user.id);\n            });\n            var userBlogList = [];\n            userBlogs1.map(function(blog) {\n                var user = resultUser.find(function(u) {\n                    return u.id === blog.uid;\n                });\n                userBlogList.push({\n                    id: blog.upid,\n                    author: users.name,\n                    title: blog.data.title,\n                    content: blog.data.content\n                });\n            });\n            setBlogs(userBlogList);\n        });\n    }, [\n        userBlogs1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d578b65e5a85516\" + \" \" + \"center\",\n        children: [\n            blogs.map(function(blog) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-d578b65e5a85516\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \"card-title card #ffc107 amber\",\n                                children: [\n                                    \"Title: \",\n                                    blog.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 16\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 14\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-d578b65e5a85516\",\n                                children: blog.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 16\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 14\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"format\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \" #aeea00 lime accent-4\",\n                                children: [\n                                    \"Author: \",\n                                    blog.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 16\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 14\n                        }, _this1)\n                    ]\n                }, blog.id, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, _this1);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d578b65e5a85516\",\n                children: \".card.jsx-d578b65e5a85516{max-width:500px;margin:22px auto}p.jsx-d578b65e5a85516{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"wWWgVWPF/D7gn9i8dQ6jW71Ehf8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDckIsSUFBSTtvQkFDYndCLE1BQU0sRUFBRWQsS0FBSyxDQUFDQyxJQUFJO29CQUNsQlQsS0FBSyxFQUFFbUIsSUFBSSxDQUFDcEIsSUFBSSxDQUFDQyxLQUFLO29CQUN0QkMsT0FBTyxFQUFFa0IsSUFBSSxDQUFDcEIsSUFBSSxDQUFDRSxPQUFPO2lCQUMzQixDQUFDO2FBQ0gsQ0FBQztZQUNGZixRQUFRLENBQUNnQyxZQUFZLENBQUM7U0FDdEIsQ0FBQztLQUVKLEVBQUU7UUFBQ25DLFVBQVM7S0FBQyxDQUFDO0lBRWIscUJBQ0UsOERBQUN3QyxLQUFHO2lEQUFXLFFBQVE7O1lBRXJCdEMsS0FBSyxDQUFDNEIsR0FBRyxDQUFDLFNBQUNNLElBQUk7cUNBQ2YsOERBQUNJLEtBQUc7NkRBQVcsTUFBTTs7c0NBQ2QsOERBQUNBLEtBQUc7O3NDQUNGLDRFQUFDQyxJQUFFO3lFQUFXLCtCQUErQjs7b0NBQUMsU0FBTztvQ0FBQ0wsSUFBSSxDQUFDbkIsS0FBSzs7Ozs7O3NDQUFNOzs7OztrQ0FDbEU7c0NBQ04sOERBQUN1QixLQUFHO3FFQUFXLGNBQWM7c0NBRTNCLDRFQUFDRSxHQUFDOzswQ0FBRU4sSUFBSSxDQUFDbEIsT0FBTzs7Ozs7c0NBQUs7Ozs7O2tDQUVoQjtzQ0FDUCw4REFBQ3NCLEtBQUc7cUVBQVcsUUFBUTtzQ0FDckIsNEVBQUNHLElBQUU7eUVBQVcsd0JBQXdCOztvQ0FBQyxVQUFRO29DQUFDUCxJQUFJLENBQUNHLE1BQU07Ozs7OztzQ0FBTTs7Ozs7a0NBQzdEOzttQkFYY0gsSUFBSSxDQUFDdEIsRUFBRTs7OzswQkFhdkI7YUFDWCxDQUFDOzs7Ozs7Ozs7O2FBZUcsQ0FDUDtDQUNEO0dBaEdLZixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFpR1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20nZmlyZWJhc2UvYXBwJ1xuXG5cbiBjb25zdCBIb21lID0gKHt9KSA9PntcbiAgY29uc3QgW3VzZXJCbG9ncywgc2V0VXNlckJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICBkYi5jb2xsZWN0aW9uR3JvdXAoJ2Jsb2cnKVxuICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXG4gICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICBsZXQgdXNlckJsb2dzID0gW11cbiAgICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICB1c2VyQmxvZ3MucHVzaCh7XG4gICAgICAgICAgdWlkOiBkb2MucmVmLnBhcmVudC5wYXJlbnQuaWQsXG4gICAgICAgICAgdXBpZDogZG9jLmlkLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsIGNvbnRlbnQ6IGRvYy5kYXRhKCkuY29udGVudCB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgXG4gICAgfSlcbiAgIFxufSwgW10pXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmICghdXNlckJsb2dzLmxlbmd0aCl7XG4gICAgcmV0dXJuXG4gIH1cbiAgXG4gICAgY29uc3QgZ2V0QWxsVXNlciA9IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT57XG4gICAgIGxldCB1c2VycyA9IFtdXG4gICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgdXNlcnMucHVzaCh7XG4gICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxuICAgICAgIH0pXG5cbiAgICAgfSlcbiAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VycylcbiAgIH0pXG4gICBnZXRBbGxVc2VyLnRoZW4oKHVzZXJzKT0+IHtcbiAgICBsZXQgdWlkcyA9IHVzZXJCbG9ncy5tYXAoKHVzZXJCbG9ncykgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJCbG9ncy51aWRcbiAgICB9KVxuICAgIGxldCByZXN1bHRVc2VyID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICByZXR1cm4gdWlkcy5pbmNsdWRlcyh1c2VyLmlkKVxuICAgIH0pXG4gICAgbGV0IHVzZXJCbG9nTGlzdCA9IFtdXG4gICAgdXNlckJsb2dzLm1hcCgoYmxvZykgPT4ge1xuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdFVzZXIuZmluZCgodSkgPT4ge1xuICAgICAgICByZXR1cm4gdS5pZCA9PT0gYmxvZy51aWRcbiAgICAgIH0pXG4gICAgICB1c2VyQmxvZ0xpc3QucHVzaCh7XG4gICAgICAgIGlkOiBibG9nLnVwaWQsXG4gICAgICAgIGF1dGhvcjogdXNlcnMubmFtZSxcbiAgICAgICAgdGl0bGU6IGJsb2cuZGF0YS50aXRsZSxcbiAgICAgICAgY29udGVudDogYmxvZy5kYXRhLmNvbnRlbnQsXG4gICAgICB9KVxuICAgIH0pXG4gICAgc2V0QmxvZ3ModXNlckJsb2dMaXN0KVxuICAgfSlcblxufSwgW3VzZXJCbG9nc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgXG4gICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17YmxvZy5pZH0+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGNhcmQgI2ZmYzEwNyBhbWJlclwiPlRpdGxlOiB7YmxvZy50aXRsZX08L2gxPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8cD57YmxvZy5jb250ZW50fTwvcD5cblxuICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1hdFwiPlxuICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIiAjYWVlYTAwIGxpbWUgYWNjZW50LTRcIj5BdXRob3I6IHtibG9nLmF1dGhvcn08L2g1PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgICAgIFxuICAgICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NTAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjIycHggYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuIH0gICAgICAgICBcbiBleHBvcnQgZGVmYXVsdCBIb21lXG5cbiJdLCJuYW1lcyI6WyJkYiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImZpcmViYXNlIiwiSG9tZSIsInVzZXJCbG9ncyIsInNldFVzZXJCbG9ncyIsImJsb2dzIiwic2V0QmxvZ3MiLCJjb2xsZWN0aW9uR3JvdXAiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ1aWQiLCJyZWYiLCJwYXJlbnQiLCJpZCIsInVwaWQiLCJkYXRhIiwidGl0bGUiLCJjb250ZW50IiwibGVuZ3RoIiwiZ2V0QWxsVXNlciIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsInVzZXJzIiwibmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidWlkcyIsIm1hcCIsInJlc3VsdFVzZXIiLCJmaWx0ZXIiLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1c2VyQmxvZ0xpc3QiLCJibG9nIiwiZmluZCIsInUiLCJhdXRob3IiLCJkaXYiLCJoMSIsInAiLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});