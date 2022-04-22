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
exports.id = "pages/posts/createblog";
exports.ids = ["pages/posts/createblog"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"serverTimestamp\": () => (/* binding */ serverTimestamp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDzTgFYYXj_Ob6GyZu1c-12N4SQBY0jQLI\",\n    authDomain: \"blog-c3244.firebaseapp.com\",\n    projectId: \"blog-c3244\",\n    storageBucket: \"blog-c3244.appspot.com\",\n    messagingSenderId: \"880498887215\",\n    appId: \"1:880498887215:web:6fd7e5e2324189022754da\",\n    measurementId: \"G-7QRY5R8E3H\"\n};\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\nconst auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();\nconst storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().storage();\nconst serverTimestamp = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.FieldValue.serverTimestamp);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDWjtBQUNLO0FBQ0g7QUFFekIsTUFBTUMsY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsYUFBYSxFQUFFLGNBQWM7Q0FDaEM7QUFFRCxJQUFHLENBQUNSLGlFQUFvQixFQUFFQSxpRUFBc0IsQ0FBQ0MsY0FBYyxDQUFDO0FBRWhFLE1BQU1XLElBQUksR0FBR1osd0RBQWEsRUFBRTtBQUM1QixNQUFNYSxFQUFFLEdBQUdiLDZEQUFrQixFQUFFO0FBQy9CLE1BQU1lLE9BQU8sR0FBR2YsMkRBQWdCLEVBQUU7QUFDbEMsTUFBTWdCLGVBQWUsR0FBR2hCLDBGQUE2QztBQUV4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RHpUZ0ZZWVhqX09iNkd5WnUxYy0xMk40U1FCWTBqUUxJXCIsXG4gICAgYXV0aERvbWFpbjogXCJibG9nLWMzMjQ0LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJibG9nLWMzMjQ0XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJibG9nLWMzMjQ0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODgwNDk4ODg3MjE1XCIsXG4gICAgYXBwSWQ6IFwiMTo4ODA0OTg4ODcyMTU6d2ViOjZmZDdlNWUyMzI0MTg5MDIyNzU0ZGFcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctN1FSWTVSOEUzSFwiXG59XG5cbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcblxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKVxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKVxuY29uc3Qgc2VydmVyVGltZXN0YW1wID0gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wXG5cbmV4cG9ydCB7IGF1dGgsIGRiLCBzdG9yYWdlLCBzZXJ2ZXJUaW1lc3RhbXAgfVxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZGIiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/posts/createblog.js":
/*!***********************************!*\
  !*** ./pages/posts/createblog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createblog)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n\n\n\n\n\nfunction createblog({ user  }) {\n    const { /*#__PURE__*/ 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const createPost = async (e)=>{\n        if (!title || !content) {\n            M.toast({\n                html: \"please add all the fields\",\n                classes: \"red\"\n            });\n            return;\n        }\n        try {\n            _firebase__WEBPACK_IMPORTED_MODULE_4__.db.collection(\"posts\").doc(user.uid).collection(\"userPosts\").add({\n                title,\n                content,\n                createdAt: new Date(),\n                updatedAt: new Date()\n            });\n            M.toast({\n                html: \"Blog Created\",\n                classes: \"green\"\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n        } catch (err) {\n            M.toast({\n                html: \"Error creating blog\",\n                classes: \"red\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-c4243dcf0e813242\" + \" \" + \"input-field rootdiv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"jsx-c4243dcf0e813242\",\n                children: \"Create A Blog !!\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/posts/createblog.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: title,\n                placeholder: \"Title\",\n                onChange: (e)=>setTitle(e.target.value)\n                ,\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/posts/createblog.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                type: \"text\",\n                value: content,\n                placeholder: \"Content\",\n                onChange: (e)=>setContent(e.target.value)\n                ,\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/posts/createblog.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>createPost()\n                ,\n                className: \"jsx-c4243dcf0e813242\" + \" \" + \"btn #fb8c00 orange darken-1\",\n                children: \"Submit Post\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/posts/createblog.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c4243dcf0e813242\",\n                children: \".rootdiv.jsx-c4243dcf0e813242{margin:30px auto;max-width:600px;padding:20px;text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/posts/createblog.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9jcmVhdGVibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDWDtBQUVHO0FBRXBCLFNBQVNJLFVBQVUsQ0FBQyxFQUFFQyxJQUFJLEdBQUUsRUFBRTtJQUN6QyxNQUFNLGdCQU5WLEdBTVdDLEtBQUssR0FOaEIsR0FNa0JDLFFBQVEsTUFBSVAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQVBWLEdBT1dRLE9BQU8sR0FQbEIsR0FPb0JDLFVBQVUsTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFHMUMsTUFBTVUsVUFBVSxHQUFHLE9BQU9DLENBQUMsR0FBSztRQUM1QixJQUFJLENBQUNMLEtBQUssSUFBSSxDQUFDRSxPQUFPLEVBQUM7WUFDbkJJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO2dCQUFDQyxJQUFJLEVBQUUsMkJBQTJCO2dCQUFDQyxPQUFPLEVBQUMsS0FBSzthQUFDLENBQUM7WUFDMUQsT0FBTTtTQUNUO1FBQ0QsSUFBSTtZQUNBWixvREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDYyxHQUFHLENBQUNaLElBQUksQ0FBQ2EsR0FBRyxDQUFDLENBQUNGLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQ0csR0FBRyxDQUFDO2dCQUNoRWIsS0FBSztnQkFDTEUsT0FBTztnQkFDUFksU0FBUyxFQUFFLElBQUlDLElBQUksRUFBRTtnQkFDckJDLFNBQVMsRUFBRSxJQUFJRCxJQUFJLEVBQUU7YUFDckIsQ0FBQztZQUVGVCxDQUFDLENBQUNDLEtBQUssQ0FBQztnQkFBRUMsSUFBSSxFQUFFLGNBQWM7Z0JBQUVDLE9BQU8sRUFBRSxPQUFPO2FBQUUsQ0FBQztZQUNuRGIsdURBQVcsQ0FBQyxHQUFHLENBQUM7U0FDWCxDQUFDLE9BQU9zQixHQUFHLEVBQUU7WUFDVlosQ0FBQyxDQUFDQyxLQUFLLENBQUM7Z0JBQUVDLElBQUksRUFBRSxxQkFBcUI7Z0JBQUVDLE9BQU8sRUFBRSxLQUFLO2FBQUUsQ0FBQztTQUMzRDtLQUNaO0lBRUQscUJBQ0ksOERBQUNVLEtBQUc7a0RBQVcscUJBQXFCOzswQkFDaEMsOERBQUNDLElBQUU7OzBCQUFDLGtCQUFnQjs7Ozs7b0JBQUs7MEJBQ3pCLDhEQUFDQyxPQUFLO2dCQUNGQyxJQUFJLEVBQUMsTUFBTTtnQkFDWEMsS0FBSyxFQUFFdkIsS0FBSztnQkFDWndCLFdBQVcsRUFBQyxPQUFPO2dCQUNuQkMsUUFBUSxFQUFFLENBQUNwQixDQUFDLEdBQUtKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDcUIsTUFBTSxDQUFDSCxLQUFLLENBQUM7Z0JBQUE7Ozs7OztvQkFFM0M7MEJBQ0YsOERBQUNJLFVBQVE7Z0JBQ0xMLElBQUksRUFBQyxNQUFNO2dCQUNYQyxLQUFLLEVBQUVyQixPQUFPO2dCQUNkc0IsV0FBVyxFQUFDLFNBQVM7Z0JBQ3JCQyxRQUFRLEVBQUUsQ0FBQ3BCLENBQUMsR0FBS0YsVUFBVSxDQUFDRSxDQUFDLENBQUNxQixNQUFNLENBQUNILEtBQUssQ0FBQztnQkFBQTs7Ozs7O29CQUM3QzswQkFDRiw4REFBQ0ssUUFBTTtnQkFBeUNDLE9BQU8sRUFBRSxJQUFNekIsVUFBVSxFQUFFO2dCQUFBOzBEQUF6RCw2QkFBNkI7MEJBQThCLGFBQVc7Ozs7O29CQUFTOzs7Ozs7Ozs7O1lBYy9GLENBQ1Q7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9wb3N0cy9jcmVhdGVibG9nLmpzPzQ5MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9maXJlYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlYmxvZyh7IHVzZXIgfSkge1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG4gICAgXG5cbiAgICBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgaWYgKCF0aXRsZSB8fCAhY29udGVudCl7XG4gICAgICAgICAgICBNLnRvYXN0KHtodG1sOiAncGxlYXNlIGFkZCBhbGwgdGhlIGZpZWxkcycsY2xhc3NlczpcInJlZFwifSkgICAgXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcInBvc3RzXCIpLmRvYyh1c2VyLnVpZCkuY29sbGVjdGlvbigndXNlclBvc3RzJykuYWRkKHtcbiAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBNLnRvYXN0KHsgaHRtbDogJ0Jsb2cgQ3JlYXRlZCcsIGNsYXNzZXM6IFwiZ3JlZW5cIiB9KVxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBNLnRvYXN0KHsgaHRtbDogJ0Vycm9yIGNyZWF0aW5nIGJsb2cnLCBjbGFzc2VzOiBcInJlZFwiIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgcm9vdGRpdlwiPlxuICAgICAgICAgICAgPGgzPkNyZWF0ZSBBIEJsb2cgISE8L2gzPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gI2ZiOGMwMCBvcmFuZ2UgZGFya2VuLTFcIiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVQb3N0KCl9PlN1Ym1pdCBQb3N0PC9idXR0b24+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIC5yb290ZGl2e1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjMwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdXRlciIsImRiIiwiY3JlYXRlYmxvZyIsInVzZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJjcmVhdGVQb3N0IiwiZSIsIk0iLCJ0b2FzdCIsImh0bWwiLCJjbGFzc2VzIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsImFkZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJwdXNoIiwiZXJyIiwiZGl2IiwiaDMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/createblog.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/createblog.js"));
module.exports = __webpack_exports__;

})();