/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list */ \"./src/modules/list.js\");\n\r\n\r\n\r\n\r\nconst body = () => {\r\n    (0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    (0,_modules_list__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n};\r\n  \r\nbody();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = [\r\n  {'project1': [{'title':'todo1',\r\n                'description':'something to do',\r\n                'time':'play with date-fns',\r\n                'priority':'low'},\r\n                {'title':'todo2',\r\n                'description':'something to do',\r\n                'time':'play with date-fns',\r\n                'priority':'mid'}]},\r\n  {'project2': [{'title':'todo3',\r\n                'description':'something to do',\r\n                'time':'play with date-fns',\r\n                'priority':'low'}]}\r\n]\r\n\r\nconst project = () => {\r\n  const allTodo = list;\r\n  const todos = allTodo.map((project) => {return Object.values(project)})\r\n  console.log(todos);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst button = (name) => {\r\n    const btn = document.createElement('button');\r\n    btn.setAttribute('id', name);\r\n    btn.innerHTML = name;\r\n    btn.className = 'p-4 mx-1 rounded-full border-2 border-black ring-white font-bold text-sm capitalize italic bg-gray-400'\r\n\r\n    return btn;\r\n}\r\n\r\nconst addNav = () => {\r\n    const nav = document.createElement('nav');\r\n    nav.className = 'min-w-full bg-blue-900 h-10 flex items-center justify-center font-mono text-white font-bold';\r\n\r\n    const logo = document.createElement('i');\r\n    logo.className = 'fas fa-stream fa-lg ml-2';\r\n    \r\n    const text = document.createElement('p');\r\n    text.textContent = 'Tu-Du List!.'\r\n    text.className = 'ml-1 text-lg'\r\n\r\n    nav.appendChild(logo);\r\n    nav.appendChild(text);\r\n  \r\n    return nav;\r\n  };\r\n\r\nconst addControls = () => {\r\n    const controls = document.createElement('footer');\r\n    controls.className = 'flex bg-blue-300 w-1/2 h-16 rounded-full position absolute bottom-0 border border-black items-center justify-center ring ring-white'\r\n\r\n    const add = button('add')\r\n\r\n    controls.appendChild(add);\r\n\r\n    return controls\r\n}\r\n\r\n  const body = () => {\r\n    const content = document.getElementById('content');\r\n    content.className = 'min-w-screen h-screen flex flex-col items-center bg-gray-200';\r\n    const table = document.createElement('div');\r\n    table.classList = 'table';\r\n\r\n  \r\n    const nav = addNav();\r\n    const control = addControls();\r\n\r\n    content.appendChild(nav);\r\n    content.appendChild(table);\r\n    content.appendChild(control);\r\n  \r\n\r\n    return content\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);\n\n//# sourceURL=webpack://todo-list/./src/modules/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;