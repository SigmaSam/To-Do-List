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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list */ \"./src/modules/list.js\");\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions */ \"./src/modules/functions.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(_modules_functions__WEBPACK_IMPORTED_MODULE_3__.chores);\r\nconsole.log(_modules_functions__WEBPACK_IMPORTED_MODULE_3__.groups);\r\n\r\nconst addEvents = () => {\r\n    const addButton = document.getElementById('add');\r\n    const groupButton = document.getElementById('group');\r\n    const modCont = document.querySelector('#modal');\r\n    const modGroup = document.querySelector('#modalGroup');\r\n    const spanOne = document.querySelector('#cancel');\r\n    const spanTwo = document.querySelector('#cancelG');\r\n    const addNew = document.querySelector('#newChore');\r\n    const addNewG = document.querySelector('#newGroup');\r\n    const winOne = (event) => {\r\n        if (event.target === modCont) {\r\n          modCont.style.display = 'none';\r\n        }\r\n    };\r\n\r\n    const winTwo = (event) => {\r\n        if (event.target === modGroup) {\r\n          modGroup.style.display = 'none';\r\n        }\r\n    };\r\n\r\n    addButton.addEventListener('click', () => {\r\n        modCont.style.display = 'block';\r\n    });\r\n\r\n    spanOne.addEventListener('click', () => {\r\n        modCont.style.display = 'none';\r\n    });\r\n    \r\n    window.addEventListener('click', winOne);\r\n\r\n    addNew.addEventListener('click', (e)=>{\r\n        e.preventDefault\r\n        ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_3__.addNewChore)();\r\n    });\r\n\r\n    groupButton.addEventListener('click', () => {\r\n        modGroup.style.display = 'block';\r\n    });\r\n\r\n    spanTwo.addEventListener('click', () => {\r\n        modGroup.style.display = 'none';\r\n    });\r\n    \r\n    window.addEventListener('click', winTwo);\r\n\r\n    addNewG.addEventListener('click', (e)=>{\r\n        e.preventDefault\r\n        ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_3__.addNewGroup)();\r\n    });\r\n}\r\n\r\nconst body = () => {\r\n    ;(0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    (0,_modules_list__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();\r\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modalGroup)();\r\n    addEvents();\r\n};\r\n\r\nbody();\r\n\r\n\r\n\r\n   \r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chores\": () => (/* binding */ chores),\n/* harmony export */   \"groups\": () => (/* binding */ groups),\n/* harmony export */   \"addNewChore\": () => (/* binding */ addNewChore),\n/* harmony export */   \"saveLocalChore\": () => (/* binding */ saveLocalChore),\n/* harmony export */   \"saveLocalGroup\": () => (/* binding */ saveLocalGroup),\n/* harmony export */   \"addNewGroup\": () => (/* binding */ addNewGroup)\n/* harmony export */ });\nconst chores =  JSON.parse(localStorage.getItem('chores')) || [];\r\nconst groups =  JSON.parse(localStorage.getItem('groups')) || [];\r\n\r\nclass Chore { \r\n    constructor(title, description, time, priority, group, status = false) {\r\n      this.title = title;\r\n      this.description = description;\r\n      this.time = time;\r\n      this.priority = priority;\r\n      this.group = group;\r\n    } \r\n};\r\n\r\nconst saveLocalChore = () => {\r\n    localStorage.setItem('chores', JSON.stringify(chores));\r\n}\r\nconst saveLocalGroup= () => {\r\n    localStorage.setItem('groups', JSON.stringify(groups));\r\n}\r\n  \r\nconst addChore = (chore) => {\r\n    chores.push(chore);\r\n    saveLocalChore();\r\n}\r\nconst addGroup = (name) => {\r\n    groups.push(name);\r\n    saveLocalGroup();\r\n}\r\n\r\nfunction addNewChore() {\r\n    const form = document.getElementsByTagName('form')\r\n    const inputs = form[0]\r\n    const textarea = document.getElementsByTagName('textarea');\r\n    const title = inputs[0].value;\r\n    const description = textarea[0].value;\r\n    const time = inputs[2].value;\r\n    const priority = inputs[3].value;\r\n    const status = false\r\n\r\n    const newChore = new Chore(title, description, time, priority, status);\r\n\r\n    addChore(newChore);\r\n};\r\n\r\nconst addNewGroup =  (name) => {\r\n    const inputs = document.getElementsByTagName('input');\r\n    const group = inputs[0].value;\r\n    \r\n    addGroup(group);\r\n    saveLocal();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/modules/functions.js\");\n\r\n\r\nconst list = _functions__WEBPACK_IMPORTED_MODULE_0__.chores;\r\n\r\nconst todos = (projects) => {\r\n  const todos = [];\r\n    list.forEach(chore => {\r\n      todos.push(chore)\r\n    });\r\n  return todos;\r\n};\r\n\r\nconst showTodos = (chores) => {\r\n  const grid = document.getElementById('grid');\r\n  \r\n  chores.forEach(chore => {\r\n    const cont = document.createElement('div');\r\n    cont.className = 'flex justify-between w-full';\r\n\r\n    const title = document.createElement('div')\r\n    title.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\r\n    title.textContent = chore['title']\r\n\r\n    const description = document.createElement('div')\r\n    description.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\r\n    description.textContent = chore['description']\r\n    \r\n    const time = document.createElement('div')\r\n    time.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\r\n    time.textContent = chore['time']\r\n\r\n    const priority = document.createElement('div')\r\n    priority.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\r\n\r\n    const prioValue = (arg) => { if (arg == 1) {\r\n      return priority.textContent = 'Low';\r\n    } else if (arg == 2) {\r\n      return priority.textContent = 'Mid';\r\n      } else {\r\n        return priority.textContent = 'High';\r\n      }\r\n    }\r\n\r\n    prioValue(chore['priority']);\r\n     \r\n    const checkBox = document.createElement('div');\r\n    checkBox.className = 'w-1/5 border border-white bg-gray-300 rounded flex justify-center';\r\n\r\n    const status = document.createElement('input')\r\n    status.setAttribute('id','check');\r\n    status.setAttribute('type','checkbox'); \r\n    \r\n    cont.appendChild(title);\r\n    cont.appendChild(description);\r\n    cont.appendChild(time);\r\n    cont.appendChild(priority);\r\n    checkBox.appendChild(status);\r\n    cont.appendChild(checkBox);\r\n    grid.appendChild(cont);\r\n  })\r\n}\r\n\r\nconst project = () => {\r\n  const all = list;\r\n  const projects = Object.keys(all)\r\n  const allTodos = todos(projects)\r\n  showTodos(allTodos);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"modalGroup\": () => (/* binding */ modalGroup)\n/* harmony export */ });\nconst modal = () => {\r\n  const body = document.getElementById('content');\r\n  const cont = document.createElement('div');\r\n  cont.setAttribute('id','modal');\r\n  cont.className = 'hidden fixed z-10 inset-0  overflow-auto bg-black bg-opacity-20 w-full h-full font-mono';\r\n\r\n  const content = document.createElement('form');\r\n  content.className = 'modal-content border-black bg-white flex flex-col items-center mx-auto mt-52 p-15 w-1/3 rounded border border-gray-500';\r\n\r\n  const labelOne = document.createElement('label');\r\n  labelOne.setAttribute('for', 'tittle');\r\n  labelOne.innerText = 'Title';\r\n  labelOne.className = 'font-bold';\r\n\r\n  const inputOne = document.createElement('input');\r\n  inputOne.setAttribute('type', 'text');\r\n  inputOne.setAttribute('id','title');\r\n  inputOne.setAttribute('name','title');\r\n  inputOne.className = 'border rounded border-black';\r\n\r\n  const labelTwo = document.createElement('label');\r\n  labelTwo.setAttribute('for', 'description');\r\n  labelTwo.innerText = 'Description';\r\n  labelTwo.className = 'font-bold';\r\n\r\n  const inputTwo = document.createElement('textarea');\r\n  inputTwo.setAttribute('cols','19');\r\n  inputTwo.setAttribute('rows', '3')\r\n  inputTwo.setAttribute('id','description');\r\n  inputTwo.setAttribute('name','description');\r\n  inputTwo.className = 'border rounded border-black';\r\n\r\n  const labelThree = document.createElement('label');\r\n  labelThree.setAttribute('for', 'time');\r\n  labelThree.innerText = 'Due to:';\r\n  labelThree.className = 'font-bold';\r\n  \r\n  const inputThree = document.createElement('input');\r\n  inputThree.setAttribute('type', 'date')\r\n  inputThree.setAttribute('id','time');\r\n  inputThree.setAttribute('name','time');\r\n  inputThree.className = 'border rounded border-black text-center';\r\n\r\n  const labelFour = document.createElement('label');\r\n  labelFour .setAttribute('for', 'priority');\r\n  labelFour .innerText = 'Priority';\r\n  labelFour .className = 'font-bold';\r\n\r\n  const inputFour = document.createElement('input');\r\n  inputFour.setAttribute('type', 'range')\r\n  inputFour.setAttribute('id','priority');\r\n  inputFour.setAttribute('name','priority');\r\n  inputFour.setAttribute('min','1');\r\n  inputFour.setAttribute('max','3');\r\n  inputFour.setAttribute('list','marks');\r\n  inputFour.setAttribute('value','1');\r\n  inputFour.className = 'border rounded border-black text-center';\r\n\r\n  const dataFour = document.createElement('datalist');\r\n  dataFour.setAttribute('id', 'marks');\r\n\r\n  const valLow = document.createElement('option');\r\n  valLow.setAttribute('value','1');\r\n\r\n  const valMid = document.createElement('option');\r\n  valMid.setAttribute('value','2');\r\n\r\n  const valHigh = document.createElement('option');\r\n  valHigh.setAttribute('value','3');\r\n\r\n  dataFour.appendChild(valHigh);\r\n  dataFour.appendChild(valMid);\r\n  dataFour.appendChild(valLow);\r\n\r\n  // const labelFive = document.createElement('select');\r\n    \r\n  const butBox = document.createElement('div');\r\n  butBox.className = 'flex justify-between';\r\n\r\n  const newChore = document.createElement('button');\r\n  newChore.className = 'bg-green-500 border border-black rounded px-4 py-1 m-2 mt-2';\r\n  newChore.setAttribute('type','submit')\r\n  newChore.setAttribute('id','newChore');\r\n  newChore.innerText = 'Create New'\r\n\r\n  const cancel = document.createElement('button');\r\n  cancel.setAttribute('id','cancel');\r\n  cancel.setAttribute('type','button');\r\n  cancel.className = 'bg-white px-4 py-1 m-2 mt-2 rounded border border-black'\r\n  cancel.innerText = 'Cancel';\r\n\r\n  content.appendChild(labelOne);\r\n  content.appendChild(inputOne);\r\n  content.appendChild(labelTwo);\r\n  content.appendChild(inputTwo);\r\n  content.appendChild(labelThree);\r\n  content.appendChild(inputThree);\r\n  content.appendChild(labelFour);\r\n  content.appendChild(inputFour);\r\n  content.appendChild(dataFour);\r\n  content.appendChild(butBox);\r\n  butBox.appendChild(newChore);\r\n  butBox.appendChild(cancel);\r\n  cont.appendChild(content);\r\n  body.appendChild(cont)\r\n    \r\n  return body;\r\n}\r\n\r\nconst modalGroup = () => {\r\n  const body = document.getElementById('content');\r\n  const cont = document.createElement('div');\r\n  cont.setAttribute('id','modalGroup');\r\n  cont.className = 'hidden fixed z-10 inset-0  overflow-auto bg-black bg-opacity-20 w-full h-full font-mono';\r\n\r\n  const content = document.createElement('form');\r\n  content.className = 'modal-content border-black bg-white flex flex-col items-center mx-auto mt-52 p-15 w-1/3 rounded border border-gray-500';\r\n\r\n  const labelOne = document.createElement('label');\r\n  labelOne.setAttribute('for', 'gName');\r\n  labelOne.innerText = 'Create a Group';\r\n  labelOne.className = 'font-bold';\r\n\r\n  const inputOne = document.createElement('input');\r\n  inputOne.setAttribute('type', 'text');\r\n  inputOne.setAttribute('id','gName');\r\n  inputOne.setAttribute('name','gName');\r\n  inputOne.className = 'border rounded border-black';\r\n    \r\n  const butBox = document.createElement('div');\r\n  butBox.className = 'flex justify-between font-sm';\r\n\r\n  const newGroup = document.createElement('button');\r\n  newGroup.className = 'bg-green-500 border border-black rounded px-4 py-1 m-2 mt-2';\r\n  newGroup.setAttribute('type','submit')\r\n  newGroup.setAttribute('id','newGroup');\r\n  newGroup.innerText = 'Create New'\r\n\r\n  const cancel = document.createElement('button');\r\n  cancel.setAttribute('id','cancelG');\r\n  cancel.setAttribute('type','button');\r\n  cancel.className = 'bg-white px-4 py-1 m-2 mt-2 rounded border border-black'\r\n  cancel.innerText = 'Cancel';\r\n\r\n  content.appendChild(labelOne);\r\n  content.appendChild(inputOne);\r\n  content.appendChild(butBox);\r\n  butBox.appendChild(newGroup);\r\n  butBox.appendChild(cancel);\r\n  cont.appendChild(content);\r\n  body.appendChild(cont)\r\n    \r\n  return body;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst button = (name) => {\r\n    const btn = document.createElement('button');\r\n    btn.setAttribute('id', name);\r\n    btn.innerHTML = name;\r\n    btn.className = 'p-5 max-w-1/2 mx-1 rounded-full border-2 border-black ring-white font-bold text-sm capitalize italic bg-gray-400'\r\n\r\n    return btn;\r\n}\r\nconst addNav = () => {\r\n    const nav = document.createElement('nav');\r\n    nav.className = 'min-w-full bg-blue-900 h-10 flex items-center justify-center font-mono text-white font-bold';\r\n\r\n    const logo = document.createElement('i');\r\n    logo.className = 'fas fa-stream fa-lg ml-2';\r\n    \r\n    const text = document.createElement('p');\r\n    text.textContent = 'Tu-Du List!.'\r\n    text.className = 'ml-1 text-lg'\r\n\r\n    nav.appendChild(logo);\r\n    nav.appendChild(text);\r\n  \r\n    return nav;\r\n};\r\nconst addGrid = () => {\r\n  const grid = document.createElement('div');\r\n  grid.setAttribute('id', 'grid');\r\n  grid.className = 'grilla bg-white border-2 border-grey rounded p-1 flex flex-col m-auto w-9/12 h-96 lg:text-md md:text-sm';\r\n  \r\n  const cont = document.createElement('div');\r\n  cont.className = 'flex justify-between w-full'\r\n\r\n  const title = document.createElement('p');\r\n  title.innerText = 'Chores';\r\n  title.className = 'border border-white w-1/5  bg-blue-200 text-bold font-mono text-center  rounded';\r\n\r\n  const desc = document.createElement('p');\r\n  desc.innerText = 'Description';\r\n  desc.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';\r\n\r\n  const time = document.createElement('p');\r\n  time.innerText = 'Due to:';\r\n  time.className = 'border border-white w-1/5  bg-blue-200 text-bold font-mono text-center  rounded';\r\n\r\n  const priority = document.createElement('p');\r\n  priority.innerText = 'Priority';\r\n  priority.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';\r\n\r\n  const check = document.createElement('p');\r\n  check.innerText = 'Status'\r\n  check.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';\r\n\r\n\r\n\r\n\r\n  cont.appendChild(title);\r\n  cont.appendChild(desc);\r\n  cont.appendChild(time);\r\n  cont.appendChild(priority);\r\n  cont.appendChild(check);\r\n  grid.appendChild(cont);\r\n\r\n  \r\n  return grid\r\n}  \r\nconst addControls = () => {\r\n    const controls = document.createElement('footer');\r\n    controls.className = 'flex bg-blue-300 w-1/2 h-16 rounded-full position absolute bottom-0 border border-black items-center justify-center ring ring-white'\r\n\r\n    const add = button('add');\r\n    const group = button('group');\r\n    \r\n    controls.appendChild(add);\r\n    controls.appendChild(group);\r\n\r\n    return controls\r\n}\r\n\r\nconst body = () => {\r\n  const content = document.getElementById('content');\r\n  content.className = 'min-w-screen h-screen flex flex-col items-center';\r\n \r\n  const nav = addNav();\r\n  const grid = addGrid();\r\n  const control = addControls();\r\n\r\n  content.appendChild(nav);\r\n  content.appendChild(grid);\r\n  content.appendChild(control);\r\n\r\n  return content\r\n};\r\n  \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);\n\n//# sourceURL=webpack://todo-list/./src/modules/page.js?");

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