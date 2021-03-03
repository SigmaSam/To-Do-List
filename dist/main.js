/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_modal__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst body = () => {\n    (0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.default)();\n    // modal();\n};\n  \nbody();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst button = (name) => {\n    const btn = document.createElement('button');\n    btn.setAttribute('id', name);\n    btn.innerHTML = name;\n    btn.className = 'p-4 mx-1 rounded-full border-2 border-black ring-white font-bold text-sm capitalize italic bg-gray-400'\n\n    return btn;\n}\nconst addNav = () => {\n    const nav = document.createElement('nav');\n    nav.className = 'min-w-full bg-blue-900 h-10 flex items-center justify-center font-mono text-white font-bold';\n\n    const logo = document.createElement('i');\n    logo.className = 'fas fa-stream fa-lg ml-2';\n    \n    const text = document.createElement('p');\n    text.textContent = 'Tu-Du List!.'\n    text.className = 'ml-1 text-lg'\n\n    nav.appendChild(logo);\n    nav.appendChild(text);\n  \n    return nav;\n  };\nconst addGrid = () => {\n  const grid = document.createElement('div');\n  grid.className = 'grilla bg-white border-2 border-grey rounded p-1 grid grid-cols-4 grid-rows-auto m-auto w-9/12 h-96 '\n  \n  const title = document.createElement('div');\n  title.innerText = 'Chores';\n  title.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\n\n  const desc = document.createElement('div');\n  desc.innerText = 'Description';\n  desc.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\n\n  const time = document.createElement('div');\n  time.innerText = 'Created at:';\n  time.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\n\n  const check = document.createElement('div');\n  check.innerText = 'Status'\n  check.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded' \n\n  grid.appendChild(title);\n  grid.appendChild(desc);\n  grid.appendChild(time);\n  grid.appendChild(check);\n\n  \n  return grid\n}  \nconst addControls = () => {\n    const controls = document.createElement('footer');\n    controls.className = 'flex bg-blue-300 w-1/2 h-16 rounded-full position absolute bottom-0 border border-black items-center justify-center ring ring-white'\n\n    const add = button('add');\n    \n    controls.appendChild(add);\n\n    return controls\n}\n\n  const body = () => {\n    const content = document.getElementById('content');\n    content.className = 'min-w-screen h-screen flex flex-col items-center';\n\n  \n    const nav = addNav();\n    const grid = addGrid();\n    const control = addControls();\n\n    content.appendChild(nav);\n    content.appendChild(grid);\n    content.appendChild(control);\n  \n\n    return content\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);\n\n//# sourceURL=webpack://todo-list/./src/modules/page.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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