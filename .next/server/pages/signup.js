"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"serverTimestamp\": () => (/* binding */ serverTimestamp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDzTgFYYXj_Ob6GyZu1c-12N4SQBY0jQLI\",\n    authDomain: \"blog-c3244.firebaseapp.com\",\n    projectId: \"blog-c3244\",\n    storageBucket: \"blog-c3244.appspot.com\",\n    messagingSenderId: \"880498887215\",\n    appId: \"1:880498887215:web:6fd7e5e2324189022754da\",\n    measurementId: \"G-7QRY5R8E3H\"\n};\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\nconst auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();\nconst storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().storage();\nconst serverTimestamp = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.FieldValue.serverTimestamp);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDWjtBQUNLO0FBQ0g7QUFFekIsTUFBTUMsY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsYUFBYSxFQUFFLGNBQWM7Q0FDaEM7QUFFRCxJQUFHLENBQUNSLGlFQUFvQixFQUFFQSxpRUFBc0IsQ0FBQ0MsY0FBYyxDQUFDO0FBRWhFLE1BQU1XLElBQUksR0FBR1osd0RBQWEsRUFBRTtBQUM1QixNQUFNYSxFQUFFLEdBQUdiLDZEQUFrQixFQUFFO0FBQy9CLE1BQU1lLE9BQU8sR0FBR2YsMkRBQWdCLEVBQUU7QUFDbEMsTUFBTWdCLGVBQWUsR0FBR2hCLDBGQUE2QztBQUV4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RHpUZ0ZZWVhqX09iNkd5WnUxYy0xMk40U1FCWTBqUUxJXCIsXG4gICAgYXV0aERvbWFpbjogXCJibG9nLWMzMjQ0LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJibG9nLWMzMjQ0XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJibG9nLWMzMjQ0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODgwNDk4ODg3MjE1XCIsXG4gICAgYXBwSWQ6IFwiMTo4ODA0OTg4ODcyMTU6d2ViOjZmZDdlNWUyMzI0MTg5MDIyNzU0ZGFcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctN1FSWTVSOEUzSFwiXG59XG5cbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcblxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKVxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKVxuY29uc3Qgc2VydmVyVGltZXN0YW1wID0gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wXG5cbmV4cG9ydCB7IGF1dGgsIGRiLCBzdG9yYWdlLCBzZXJ2ZXJUaW1lc3RhbXAgfVxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZGIiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signup)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Router */ \"next/Router\");\n/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar md5 = __webpack_require__(/*! md5 */ \"md5\");\nfunction Signup() {\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: dateofbirth , 1: setDateofbirth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!name || !email || !password) {\n            M.toast({\n                html: \"please add all the fields\",\n                classes: \"red\"\n            });\n            return;\n        }\n        try {\n            const result = await _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(email, password);\n            await result.user.updateProfile({\n                displayName: name\n            });\n            _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").doc(result.user.uid).set({\n                name: name,\n                email: result.user.email,\n                dateofbirth: dateofbirth,\n                createAt: new Date(),\n                updateAt: new Date(),\n                password: md5(password)\n            });\n            M.toast({\n                html: `Welcome ${name}`,\n                classes: \"green\"\n            });\n            next_Router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/login\");\n        } catch (err) {\n            M.toast({\n                html: err.message,\n                classes: \"red\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Sign Up Form!\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>handleSubmit(e)\n                ,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"input-field\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Full Name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                placeholder: \"dateofbirth\",\n                                value: dateofbirth,\n                                onChange: (e)=>setDateofbirth(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn #fb8c00 orange darken-1\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Already have an account!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                                lineNumber: 51,\n                                columnNumber: 36\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                            lineNumber: 51,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/signup.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxPQUFLO2dDQUFDQyxJQUFJLEVBQUMsT0FBTztnQ0FBQ0MsV0FBVyxFQUFDLE9BQU87Z0NBQUNDLEtBQUssRUFBR3BDLEtBQUs7Z0NBQUVxQyxRQUFRLEVBQUc5QixDQUFBQSxDQUFDLEdBQUlOLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDK0IsTUFBTSxDQUFDRixLQUFLLENBQUM7Ozs7O29DQUFJOzBDQUNuRyw4REFBQ0gsT0FBSztnQ0FBQ0MsSUFBSSxFQUFDLFVBQVU7Z0NBQUNDLFdBQVcsRUFBQyxVQUFVO2dDQUFDQyxLQUFLLEVBQUdsQyxRQUFRO2dDQUFFbUMsUUFBUSxFQUFHOUIsQ0FBQUEsQ0FBQyxHQUFJSixXQUFXLENBQUNJLENBQUMsQ0FBQytCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDOzs7OztvQ0FBSTswQ0FDL0csOERBQUNILE9BQUs7Z0NBQUNDLElBQUksRUFBQyxNQUFNO2dDQUFDQyxXQUFXLEVBQUMsYUFBYTtnQ0FBQ0MsS0FBSyxFQUFHaEMsV0FBVztnQ0FBRWlDLFFBQVEsRUFBRzlCLENBQUFBLENBQUMsR0FBSUYsY0FBYyxDQUFDRSxDQUFDLENBQUMrQixNQUFNLENBQUNGLEtBQUssQ0FBQzs7Ozs7b0NBQUk7Ozs7Ozs0QkFFbEg7a0NBQ04sOERBQUNHLFFBQU07d0JBQUNMLElBQUksRUFBQyxRQUFRO3dCQUFDTCxTQUFTLEVBQUMsNkJBQTZCO2tDQUFDLE9BQUs7Ozs7OzRCQUFTO2tDQUM1RSw4REFBQ3RDLGtEQUFJO3dCQUFDaUQsSUFBSSxFQUFDLFFBQVE7a0NBQUMsNEVBQUNDLEdBQUM7c0NBQUMsNEVBQUNDLElBQUU7MENBQUMsMEJBQXdCOzs7OztvQ0FBSzs7Ozs7Z0NBQUk7Ozs7OzRCQUFPOzs7Ozs7b0JBQ2hFOzs7Ozs7WUFFTCxDQUNQO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vcGFnZXMvc2lnbnVwLmpzP2NhOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCB7YXV0aCwgZGJ9IGZyb20gJy4uL2ZpcmViYXNlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L1JvdXRlcidcblxudmFyIG1kNSA9IHJlcXVpcmUoJ21kNScpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwKCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZGF0ZW9mYmlydGgsIHNldERhdGVvZmJpcnRoXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoIW5hbWUgfHwgIWVtYWlsfHwgIXBhc3N3b3JkKXtcbiAgICAgICAgICAgIE0udG9hc3Qoe2h0bWw6ICdwbGVhc2UgYWRkIGFsbCB0aGUgZmllbGRzJyxjbGFzc2VzOlwicmVkXCJ9KSAgICBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgICAgICBhd2FpdCByZXN1bHQudXNlci51cGRhdGVQcm9maWxlKHtcbiAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6bmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MocmVzdWx0LnVzZXIudWlkKS5zZXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6bmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDpyZXN1bHQudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBkYXRlb2ZiaXJ0aDpkYXRlb2ZiaXJ0aCxcbiAgICAgICAgICAgICAgICBjcmVhdGVBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICB1cGRhdGVBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogbWQ1KHBhc3N3b3JkKVxuICAgICAgICAgICAgfSlcblxuICAgICAgIE0udG9hc3Qoe2h0bWw6IGBXZWxjb21lICR7bmFtZX1gLGNsYXNzZXM6XCJncmVlblwifSlcbiAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJykgXG4gICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgIE0udG9hc3Qoe2h0bWw6IGVyci5tZXNzYWdlLGNsYXNzZXM6XCJyZWRcIn0pICAgIFxuICAgICAgIH1cblxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgPGgzPlNpZ24gVXAgRm9ybSE8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHZhbHVlID17bmFtZX0gb25DaGFuZ2UgPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWUgPXtlbWFpbH0gb25DaGFuZ2UgPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlID17cGFzc3dvcmR9IG9uQ2hhbmdlID17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJkYXRlb2ZiaXJ0aFwiIHZhbHVlID17ZGF0ZW9mYmlydGh9IG9uQ2hhbmdlID17ZSA9PiBzZXREYXRlb2ZiaXJ0aChlLnRhcmdldC52YWx1ZSl9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT48aDU+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQhPC9oNT48L2E+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiYXV0aCIsImRiIiwiUm91dGVyIiwibWQ1IiwicmVxdWlyZSIsIlNpZ251cCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJkYXRlb2ZiaXJ0aCIsInNldERhdGVvZmJpcnRoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiTSIsInRvYXN0IiwiaHRtbCIsImNsYXNzZXMiLCJyZXN1bHQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwidXBkYXRlUHJvZmlsZSIsImRpc3BsYXlOYW1lIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImNyZWF0ZUF0IiwiRGF0ZSIsInVwZGF0ZUF0IiwicHVzaCIsImVyciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsImhyZWYiLCJhIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("firebase/storage");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "next/Router":
/*!******************************!*\
  !*** external "next/Router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/Router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup.js"));
module.exports = __webpack_exports__;

})();