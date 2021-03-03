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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list */ \"./src/modules/list.js\");\n\r\n\r\n\r\n\r\n\r\nconst body = () => {\r\n    (0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    (0,_modules_list__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n    // modal();\r\n};\r\n  \r\nbody();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = {\r\n  'project1': [{'title':'todo1',\r\n                'description':'something to do',\r\n                'time':'play with date-fns',\r\n                'priority':'low'},\r\n                {'title':'todo2',\r\n                'description':'something to do',\r\n                'time':'play with date-fns',\r\n                'priority':'mid'}],\r\n  'project2': [{'title':'todo3',\r\n                'description':'something to do',\r\n                'time':'play with date-fns',\r\n                'priority':'low'}]\r\n}\r\n\r\nconst todos = (projects) => {\r\n  const todos = [];\r\n  projects.forEach(project =>\r\n    list[project].forEach(chore => {\r\n      todos.push(chore)\r\n    })\r\n  )\r\n  return todos;\r\n}\r\n\r\nconst showTodos = (chores) => {\r\n  const grid = document.getElementById('grid')\r\n  chores.forEach(chore => {\r\n    const title = document.createElement('div')\r\n    title.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\r\n    title.textContent = chore['title']\r\n    const description = document.createElement('div')\r\n    description.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\r\n    description.textContent = chore['description']\r\n    const time = document.createElement('div')\r\n    time.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\r\n    time.textContent = chore['time']\r\n    const priority = document.createElement('div')\r\n    priority.className = 'border border-white bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\r\n    priority.textContent = chore['priority']\r\n    grid.appendChild(title);\r\n    grid.appendChild(description);\r\n    grid.appendChild(time);\r\n    grid.appendChild(priority);\r\n  })\r\n}\r\n\r\nconst project = () => {\r\n  const all = list;\r\n  const projects = Object.keys(all)\r\n  const allTodos = todos(projects)\r\n  showTodos(allTodos);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ (() => {

eval("// class Chore {\r\n//   constructor(title, description, time, priority) {\r\n//     this.title = title;\r\n//     this.description = description;\r\n//     this.time = time;\r\n//     this.priority = priority;\r\n//   }\r\n// }\r\n// const modalCont = document.getElementById('modal');\r\n// const btn = document.getElementById('add');\r\n// const span = document.getElementsByClassName('close')[0];\r\n// btn.addEventListener('click', () => {\r\n//   modalCont.style.display = 'block';\r\n// });\r\n// span.addEventListener('click', () => {\r\n//   modalCont.style.display = 'none';\r\n// });\r\n// const win = (event) => {\r\n//   if (event.target === modal) {\r\n//     modalCont.style.display = 'none';\r\n//   }\r\n// }\r\n// window.addEventListener('click', win);\r\n// const modal = () => {\r\n// }\r\n// export default modal;\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst button = (name) => {\r\n    const btn = document.createElement('button');\r\n    btn.setAttribute('id', name);\r\n    btn.innerHTML = name;\r\n    btn.className = 'p-4 mx-1 rounded-full border-2 border-black ring-white font-bold text-sm capitalize italic bg-gray-400'\r\n\r\n    return btn;\r\n}\r\nconst addNav = () => {\r\n    const nav = document.createElement('nav');\r\n    nav.className = 'min-w-full bg-blue-900 h-10 flex items-center justify-center font-mono text-white font-bold';\r\n\r\n    const logo = document.createElement('i');\r\n    logo.className = 'fas fa-stream fa-lg ml-2';\r\n    \r\n    const text = document.createElement('p');\r\n    text.textContent = 'Tu-Du List!.'\r\n    text.className = 'ml-1 text-lg'\r\n\r\n    nav.appendChild(logo);\r\n    nav.appendChild(text);\r\n  \r\n    return nav;\r\n  };\r\nconst addGrid = () => {\r\n  const grid = document.createElement('div');\r\n  grid.setAttribute('id', 'grid')\r\n  grid.className = 'grilla bg-white border-2 border-grey rounded p-1 grid grid-cols-4 grid-rows-auto m-auto w-9/12 h-96 '\r\n  \r\n  const title = document.createElement('div');\r\n  title.innerText = 'Chores';\r\n  title.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\r\n\r\n  const desc = document.createElement('div');\r\n  desc.innerText = 'Description';\r\n  desc.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\r\n\r\n  const time = document.createElement('div');\r\n  time.innerText = 'Created at:';\r\n  time.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded'\r\n\r\n  const check = document.createElement('div');\r\n  check.innerText = 'Status'\r\n  check.className = 'border border-white  bg-blue-200 text-bold font-mono text-center max-h-6 rounded' \r\n\r\n  grid.appendChild(title);\r\n  grid.appendChild(desc);\r\n  grid.appendChild(time);\r\n  grid.appendChild(check);\r\n\r\n  \r\n  return grid\r\n}  \r\nconst addControls = () => {\r\n    const controls = document.createElement('footer');\r\n    controls.className = 'flex bg-blue-300 w-1/2 h-16 rounded-full position absolute bottom-0 border border-black items-center justify-center ring ring-white'\r\n\r\n    const add = button('add');\r\n    \r\n    controls.appendChild(add);\r\n\r\n    return controls\r\n}\r\n\r\n  const body = () => {\r\n    const content = document.getElementById('content');\r\n    content.className = 'min-w-screen h-screen flex flex-col items-center';\r\n\r\n  \r\n    const nav = addNav();\r\n    const grid = addGrid();\r\n    const control = addControls();\r\n\r\n    content.appendChild(nav);\r\n    content.appendChild(grid);\r\n    content.appendChild(control);\r\n  \r\n\r\n    return content\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);\n\n//# sourceURL=webpack://todo-list/./src/modules/page.js?");

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