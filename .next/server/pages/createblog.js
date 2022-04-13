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
exports.id = "pages/createblog";
exports.ids = ["pages/createblog"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"serverTimestamp\": () => (/* binding */ serverTimestamp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDzTgFYYXj_Ob6GyZu1c-12N4SQBY0jQLI\",\n    authDomain: \"blog-c3244.firebaseapp.com\",\n    projectId: \"blog-c3244\",\n    storageBucket: \"blog-c3244.appspot.com\",\n    messagingSenderId: \"880498887215\",\n    appId: \"1:880498887215:web:6fd7e5e2324189022754da\",\n    measurementId: \"G-7QRY5R8E3H\"\n};\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\nconst auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();\nconst storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().storage();\nconst serverTimestamp = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.FieldValue.serverTimestamp);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDWjtBQUNLO0FBQ0g7QUFFekIsTUFBTUMsY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsYUFBYSxFQUFFLGNBQWM7Q0FDaEM7QUFFRCxJQUFHLENBQUNSLGlFQUFvQixFQUFFQSxpRUFBc0IsQ0FBQ0MsY0FBYyxDQUFDO0FBRWhFLE1BQU1XLElBQUksR0FBR1osd0RBQWEsRUFBRTtBQUM1QixNQUFNYSxFQUFFLEdBQUdiLDZEQUFrQixFQUFFO0FBQy9CLE1BQU1lLE9BQU8sR0FBR2YsMkRBQWdCLEVBQUU7QUFDbEMsTUFBTWdCLGVBQWUsR0FBR2hCLDBGQUE2QztBQUV4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RHpUZ0ZZWVhqX09iNkd5WnUxYy0xMk40U1FCWTBqUUxJXCIsXG4gICAgYXV0aERvbWFpbjogXCJibG9nLWMzMjQ0LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJibG9nLWMzMjQ0XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJibG9nLWMzMjQ0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODgwNDk4ODg3MjE1XCIsXG4gICAgYXBwSWQ6IFwiMTo4ODA0OTg4ODcyMTU6d2ViOjZmZDdlNWUyMzI0MTg5MDIyNzU0ZGFcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctN1FSWTVSOEUzSFwiXG59XG5cbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcblxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKVxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKVxuY29uc3Qgc2VydmVyVGltZXN0YW1wID0gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wXG5cbmV4cG9ydCB7IGF1dGgsIGRiLCBzdG9yYWdlLCBzZXJ2ZXJUaW1lc3RhbXAgfVxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZGIiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/createblog.js":
/*!*****************************!*\
  !*** ./pages/createblog.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createblog)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\n\n\nfunction createblog({ user  }) {\n    const { /*#__PURE__*/ 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const createPost = async (e)=>{\n        if (!title || !content) {\n            M.toast({\n                html: \"please add all the fields\",\n                classes: \"red\"\n            });\n            return;\n        }\n        try {\n            _firebase__WEBPACK_IMPORTED_MODULE_4__.db.collection(\"blogs\").doc(user.uid).collection(\"blog\").add({\n                title,\n                content,\n                createdAt: (0,_firebase__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),\n                updatedAt: (0,_firebase__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()\n            });\n            M.toast({\n                html: \"Blog Created\",\n                classes: \"green\"\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n        } catch (err) {\n            M.toast({\n                html: \"Error creating blog\",\n                classes: \"red\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-c4243dcf0e813242\" + \" \" + \"input-field rootdiv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"jsx-c4243dcf0e813242\",\n                children: \"Create A Blog !!\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: title,\n                placeholder: \"Title\",\n                onChange: (e)=>setTitle(e.target.value)\n                ,\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                type: \"text\",\n                value: content,\n                placeholder: \"Content\",\n                onChange: (e)=>setContent(e.target.value)\n                ,\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>createPost()\n                ,\n                className: \"jsx-c4243dcf0e813242\" + \" \" + \"btn #fb8c00 orange darken-1\",\n                children: \"Submit Post\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c4243dcf0e813242\",\n                children: \".rootdiv.jsx-c4243dcf0e813242{margin:30px auto;max-width:600px;padding:20px;text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDWDtBQUVxQjtBQUV0QyxTQUFTTSxVQUFVLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFDekMsTUFBTSxnQkFOVixHQU1XQyxLQUFLLEdBTmhCLEdBTWtCQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sRUFQVixHQU9XVSxPQUFPLEdBUGxCLEdBT29CQyxVQUFVLE1BQUlYLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRzFDLE1BQU1ZLFVBQVUsR0FBRyxPQUFPQyxDQUFDLEdBQUs7UUFDNUIsSUFBSSxDQUFDTCxLQUFLLElBQUksQ0FBQ0UsT0FBTyxFQUFDO1lBQ25CSSxDQUFDLENBQUNDLEtBQUssQ0FBQztnQkFBQ0MsSUFBSSxFQUFFLDJCQUEyQjtnQkFBQ0MsT0FBTyxFQUFDLEtBQUs7YUFBQyxDQUFDO1lBQzFELE9BQU07U0FDVDtRQUNELElBQUk7WUFDQWIsb0RBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ2UsR0FBRyxDQUFDWixJQUFJLENBQUNhLEdBQUcsQ0FBQyxDQUFDRixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUNHLEdBQUcsQ0FBQztnQkFDM0RiLEtBQUs7Z0JBQ0xFLE9BQU87Z0JBQ1BZLFNBQVMsRUFBRWpCLDBEQUFlLEVBQUU7Z0JBQzVCa0IsU0FBUyxFQUFFbEIsMERBQWUsRUFBRTthQUM1QixDQUFDO1lBRUZTLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO2dCQUFFQyxJQUFJLEVBQUUsY0FBYztnQkFBRUMsT0FBTyxFQUFFLE9BQU87YUFBRSxDQUFDO1lBQ25EZix1REFBVyxDQUFDLEdBQUcsQ0FBQztTQUNYLENBQUMsT0FBT3VCLEdBQUcsRUFBRTtZQUNWWCxDQUFDLENBQUNDLEtBQUssQ0FBQztnQkFBRUMsSUFBSSxFQUFFLHFCQUFxQjtnQkFBRUMsT0FBTyxFQUFFLEtBQUs7YUFBRSxDQUFDO1NBQzNEO0tBQ1o7SUFFRCxxQkFDSSw4REFBQ1MsS0FBRztrREFBVyxxQkFBcUI7OzBCQUNoQyw4REFBQ0MsSUFBRTs7MEJBQUMsa0JBQWdCOzs7OztvQkFBSzswQkFDekIsOERBQUNDLE9BQUs7Z0JBQ0ZDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxLQUFLLEVBQUV0QixLQUFLO2dCQUNadUIsV0FBVyxFQUFDLE9BQU87Z0JBQ25CQyxRQUFRLEVBQUUsQ0FBQ25CLENBQUMsR0FBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNvQixNQUFNLENBQUNILEtBQUssQ0FBQztnQkFBQTs7Ozs7O29CQUUzQzswQkFDRiw4REFBQ0ksVUFBUTtnQkFDTEwsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLEtBQUssRUFBRXBCLE9BQU87Z0JBQ2RxQixXQUFXLEVBQUMsU0FBUztnQkFDckJDLFFBQVEsRUFBRSxDQUFDbkIsQ0FBQyxHQUFLRixVQUFVLENBQUNFLENBQUMsQ0FBQ29CLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2dCQUFBOzs7Ozs7b0JBRTdDOzBCQUNGLDhEQUFDSyxRQUFNO2dCQUF5Q0MsT0FBTyxFQUFFLElBQU14QixVQUFVLEVBQUU7Z0JBQUE7MERBQXpELDZCQUE2QjswQkFBOEIsYUFBVzs7Ozs7b0JBQVM7Ozs7Ozs7Ozs7WUFjL0YsQ0FDVDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL3BhZ2VzL2NyZWF0ZWJsb2cuanM/NTU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQge2F1dGgsIGRiLCBzZXJ2ZXJUaW1lc3RhbXB9IGZyb20gJy4uL2ZpcmViYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVibG9nKHsgdXNlciB9KSB7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICBcblxuICAgIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBpZiAoIXRpdGxlIHx8ICFjb250ZW50KXtcbiAgICAgICAgICAgIE0udG9hc3Qoe2h0bWw6ICdwbGVhc2UgYWRkIGFsbCB0aGUgZmllbGRzJyxjbGFzc2VzOlwicmVkXCJ9KSAgICBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiYmxvZ3NcIikuZG9jKHVzZXIudWlkKS5jb2xsZWN0aW9uKCdibG9nJykuYWRkKHtcbiAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgIGNyZWF0ZWRBdDogc2VydmVyVGltZXN0YW1wKCksXG4gICAgICAgICAgICAgdXBkYXRlZEF0OiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIE0udG9hc3QoeyBodG1sOiAnQmxvZyBDcmVhdGVkJywgY2xhc3NlczogXCJncmVlblwiIH0pXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIE0udG9hc3QoeyBodG1sOiAnRXJyb3IgY3JlYXRpbmcgYmxvZycsIGNsYXNzZXM6IFwicmVkXCIgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCByb290ZGl2XCI+XG4gICAgICAgICAgICA8aDM+Q3JlYXRlIEEgQmxvZyAhITwvaDM+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCkgPT4gY3JlYXRlUG9zdCgpfT5TdWJtaXQgUG9zdDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAucm9vdGRpdntcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjozMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJhdXRoIiwiZGIiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJjcmVhdGVibG9nIiwidXNlciIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNyZWF0ZVBvc3QiLCJlIiwiTSIsInRvYXN0IiwiaHRtbCIsImNsYXNzZXMiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwiYWRkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwicHVzaCIsImVyciIsImRpdiIsImgzIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/createblog.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/createblog.js"));
module.exports = __webpack_exports__;

})();