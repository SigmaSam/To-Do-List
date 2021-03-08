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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list */ \"./src/modules/list.js\");\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions */ \"./src/modules/functions.js\");\n\n\n\n\n\nconsole.log(_modules_functions__WEBPACK_IMPORTED_MODULE_3__.chores);\n\nconst addEvents = () => {\n    const addButton = document.getElementById('add');\n    const groupButton = document.getElementById('group');\n    const modCont = document.querySelector('#modal');\n    const modGroup = document.querySelector('#modalGroup');\n    const span = document.querySelector('#cancel');\n    const addNew = document.querySelector('#newChore');\n    const addNewG = document.querySelector('#newGroup');\n    const winOne = (event) => {\n        if (event.target === modCont) {\n          modCont.style.display = 'none';\n        }\n    };\n\n    const winTwo = (event) => {\n        if (event.target === modGroup) {\n          modGroup.style.display = 'none';\n        }\n    };\n\n    addButton.addEventListener('click', () => {\n        modCont.style.display = 'block';\n    });\n\n    span.addEventListener('click', () => {\n        modCont.style.display = 'none';\n    });\n    \n    window.addEventListener('click', winOne);\n\n    addNew.addEventListener('click', (e)=>{\n        e.preventDefault\n        ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_3__.addNewChore)();\n    });\n    \n    groupButton.addEventListener('click', () => {\n        modGroup.style.display = 'block';\n    });\n\n    span.addEventListener('click', () => {\n        modGroup.style.display = 'none';\n    });\n    \n    window.addEventListener('click', winTwo);\n\n    addNewG.addEventListener('click', (e)=>{\n        e.preventDefault\n        ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_3__.addNewGroup)();\n    });\n}\n\nconst body = () => {\n    ;(0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.default)();\n    (0,_modules_list__WEBPACK_IMPORTED_MODULE_2__.default)();\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modalGroup)();\n    addEvents();\n};\n\nbody();\n\n\n\n   \n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chores\": () => (/* binding */ chores),\n/* harmony export */   \"addNewChore\": () => (/* binding */ addNewChore),\n/* harmony export */   \"saveLocal\": () => (/* binding */ saveLocal),\n/* harmony export */   \"addNewGroup\": () => (/* binding */ addNewGroup)\n/* harmony export */ });\nconst chores =  JSON.parse(localStorage.getItem('chores')) || [];\n\nclass Chore { \n    constructor(title, description, time, priority, group, status = false) {\n      this.title = title;\n      this.description = description;\n      this.time = time;\n      this.priority = priority;\n      this.group = group;\n    } \n};\n\nconst saveLocal = () => {\n    localStorage.setItem('chores', JSON.stringify(chores));\n}\n  \nconst addChore = (chore) => {\n    chores.push(chore);\n    saveLocal();\n}\n\nconst addGroup = () => {\n    console.log('cat');\n}\n\nfunction addNewChore() {\n    const inputs = document.getElementsByTagName('input');\n    const textarea = document.getElementsByTagName('textarea');\n    const title = inputs[0].value;\n    const description = textarea[0].value;\n    const time = inputs[1].value;\n    const priority = inputs[2].value;\n    const status = false\n\n    const newChore = new Chore(title, description, time, priority,status);\n\n    addChore(newChore);\n    console.log('hello world');\n};\n\nconst addNewGroup =  (name) => {\n    console.log('cat');\n    saveLocal();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/modules/functions.js\");\n\n\nconst list = _functions__WEBPACK_IMPORTED_MODULE_0__.chores;\n\nconst todos = (projects) => {\n  const todos = [];\n    list.forEach(chore => {\n      todos.push(chore)\n    });\n  return todos;\n};\n\nconst showTodos = (chores) => {\n  const grid = document.getElementById('grid');\n  \n  chores.forEach(chore => {\n    const cont = document.createElement('div');\n    cont.className = 'flex justify-between w-full';\n\n    const title = document.createElement('div')\n    title.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\n    title.textContent = chore['title']\n\n    const description = document.createElement('div')\n    description.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\n    description.textContent = chore['description']\n    \n    const time = document.createElement('div')\n    time.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\n    time.textContent = chore['time']\n\n    const priority = document.createElement('div')\n    priority.className = 'border border-white bg-gray-300 text-bold font-mono text-center rounded w-1/5'\n\n    const prioValue = (arg) => { if (arg == 1) {\n      return priority.textContent = 'Low';\n    } else if (arg == 2) {\n      return priority.textContent = 'Mid';\n      } else {\n        return priority.textContent = 'High';\n      }\n    }\n\n    prioValue(chore['priority']);\n     \n    const checkBox = document.createElement('div');\n    checkBox.className = 'w-1/5 border border-white bg-gray-300 rounded flex justify-center';\n\n    const status = document.createElement('input')\n    status.setAttribute('id','check');\n    status.setAttribute('type','checkbox'); \n    \n    cont.appendChild(title);\n    cont.appendChild(description);\n    cont.appendChild(time);\n    cont.appendChild(priority);\n    checkBox.appendChild(status);\n    cont.appendChild(checkBox);\n    grid.appendChild(cont);\n  })\n}\n\nconst project = () => {\n  const all = list;\n  const projects = Object.keys(all)\n  const allTodos = todos(projects)\n  showTodos(allTodos);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"modalGroup\": () => (/* binding */ modalGroup)\n/* harmony export */ });\nconst modal = () => {\n  const body = document.getElementById('content');\n  const cont = document.createElement('div');\n  cont.setAttribute('id','modal');\n  cont.className = 'hidden fixed z-10 inset-0  overflow-auto bg-black bg-opacity-20 w-full h-full font-mono';\n\n  const content = document.createElement('form');\n  content.className = 'modal-content border-black bg-white flex flex-col items-center mx-auto mt-52 p-15 w-1/3 rounded border border-gray-500';\n\n  const labelOne = document.createElement('label');\n  labelOne.setAttribute('for', 'tittle');\n  labelOne.innerText = 'Title';\n  labelOne.className = 'font-bold';\n\n  const inputOne = document.createElement('input');\n  inputOne.setAttribute('type', 'text');\n  inputOne.setAttribute('id','title');\n  inputOne.setAttribute('name','title');\n  inputOne.className = 'border rounded border-black';\n\n  const labelTwo = document.createElement('label');\n  labelTwo.setAttribute('for', 'description');\n  labelTwo.innerText = 'Description';\n  labelTwo.className = 'font-bold';\n\n  const inputTwo = document.createElement('textarea');\n  inputTwo.setAttribute('cols','19');\n  inputTwo.setAttribute('rows', '3')\n  inputTwo.setAttribute('id','description');\n  inputTwo.setAttribute('name','description');\n  inputTwo.className = 'border rounded border-black';\n\n  const labelThree = document.createElement('label');\n  labelThree.setAttribute('for', 'time');\n  labelThree.innerText = 'Due to:';\n  labelThree.className = 'font-bold';\n  \n  const inputThree = document.createElement('input');\n  inputThree.setAttribute('type', 'date')\n  inputThree.setAttribute('id','description');\n  inputThree.setAttribute('name','description');\n  inputThree.className = 'border rounded border-black text-center';\n\n  const labelFour = document.createElement('label');\n  labelFour .setAttribute('for', 'priority');\n  labelFour .innerText = 'Priority';\n  labelFour .className = 'font-bold';\n\n  const inputFour = document.createElement('input');\n  inputFour.setAttribute('type', 'range')\n  inputFour.setAttribute('id','priority');\n  inputFour.setAttribute('name','priority');\n  inputFour.setAttribute('min','1');\n  inputFour.setAttribute('max','3');\n  inputFour.setAttribute('list','marks');\n  inputFour.setAttribute('value','1');\n  inputFour.className = 'border rounded border-black text-center';\n\n  const dataFour = document.createElement('datalist');\n  dataFour.setAttribute('id', 'marks');\n\n  const valLow = document.createElement('option');\n  valLow.setAttribute('value','1');\n\n  const valMid = document.createElement('option');\n  valMid.setAttribute('value','2');\n\n  const valHigh = document.createElement('option');\n  valHigh.setAttribute('value','3');\n\n  dataFour.appendChild(valHigh);\n  dataFour.appendChild(valMid);\n  dataFour.appendChild(valLow);\n\n  // const labelFive = document.createElement('select');\n    \n  const butBox = document.createElement('div');\n  butBox.className = 'flex justify-between';\n\n  const newChore = document.createElement('button');\n  newChore.className = 'bg-green-500 border border-black rounded px-4 py-1 m-2 mt-2';\n  newChore.setAttribute('type','submit')\n  newChore.setAttribute('id','newChore');\n  newChore.innerText = 'Create New'\n\n  const cancel = document.createElement('button');\n  cancel.setAttribute('id','cancel');\n  cancel.setAttribute('type','button');\n  cancel.className = 'bg-white px-4 py-1 m-2 mt-2 rounded border border-black'\n  cancel.innerText = 'Cancel';\n\n  content.appendChild(labelOne);\n  content.appendChild(inputOne);\n  content.appendChild(labelTwo);\n  content.appendChild(inputTwo);\n  content.appendChild(labelThree);\n  content.appendChild(inputThree);\n  content.appendChild(labelFour);\n  content.appendChild(inputFour);\n  content.appendChild(dataFour);\n  content.appendChild(butBox);\n  butBox.appendChild(newChore);\n  butBox.appendChild(cancel);\n  cont.appendChild(content);\n  body.appendChild(cont)\n    \n  return body;\n}\n\nconst modalGroup = () => {\n  const body = document.getElementById('content');\n  const cont = document.createElement('div');\n  cont.setAttribute('id','modalGroup');\n  cont.className = 'hidden fixed z-10 inset-0  overflow-auto bg-black bg-opacity-20 w-full h-full font-mono';\n\n  const content = document.createElement('form');\n  content.className = 'modal-content border-black bg-white flex flex-col items-center mx-auto mt-52 p-15 w-1/3 rounded border border-gray-500';\n\n  const labelOne = document.createElement('label');\n  labelOne.setAttribute('for', 'gName');\n  labelOne.innerText = 'Create a Group';\n  labelOne.className = 'font-bold';\n\n  const inputOne = document.createElement('input');\n  inputOne.setAttribute('type', 'text');\n  inputOne.setAttribute('id','gName');\n  inputOne.setAttribute('name','gName');\n  inputOne.className = 'border rounded border-black';\n    \n  const butBox = document.createElement('div');\n  butBox.className = 'flex justify-between font-sm';\n\n  const newGroup = document.createElement('button');\n  newGroup.className = 'bg-green-500 border border-black rounded px-4 py-1 m-2 mt-2';\n  newGroup.setAttribute('type','submit')\n  newGroup.setAttribute('id','newGroup');\n  newGroup.innerText = 'Create New'\n\n  const cancel = document.createElement('button');\n  cancel.setAttribute('id','cancel');\n  cancel.setAttribute('type','button');\n  cancel.className = 'bg-white px-4 py-1 m-2 mt-2 rounded border border-black'\n  cancel.innerText = 'Cancel';\n\n  content.appendChild(labelOne);\n  content.appendChild(inputOne);\n  content.appendChild(butBox);\n  butBox.appendChild(newGroup);\n  butBox.appendChild(cancel);\n  cont.appendChild(content);\n  body.appendChild(cont)\n    \n  return body;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst button = (name) => {\n    const btn = document.createElement('button');\n    btn.setAttribute('id', name);\n    btn.innerHTML = name;\n    btn.className = 'p-5 max-w-1/2 mx-1 rounded-full border-2 border-black ring-white font-bold text-sm capitalize italic bg-gray-400'\n\n    return btn;\n}\nconst addNav = () => {\n    const nav = document.createElement('nav');\n    nav.className = 'min-w-full bg-blue-900 h-10 flex items-center justify-center font-mono text-white font-bold';\n\n    const logo = document.createElement('i');\n    logo.className = 'fas fa-stream fa-lg ml-2';\n    \n    const text = document.createElement('p');\n    text.textContent = 'Tu-Du List!.'\n    text.className = 'ml-1 text-lg'\n\n    nav.appendChild(logo);\n    nav.appendChild(text);\n  \n    return nav;\n};\nconst addGrid = () => {\n  const grid = document.createElement('div');\n  grid.setAttribute('id', 'grid');\n  grid.className = 'grilla bg-white border-2 border-grey rounded p-1 flex flex-col m-auto w-9/12 h-96 lg:text-md md:text-sm';\n  \n  const cont = document.createElement('div');\n  cont.className = 'flex justify-between w-full'\n\n  const title = document.createElement('p');\n  title.innerText = 'Chores';\n  title.className = 'border border-white w-1/5  bg-blue-200 text-bold font-mono text-center  rounded';\n\n  const desc = document.createElement('p');\n  desc.innerText = 'Description';\n  desc.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';\n\n  const time = document.createElement('p');\n  time.innerText = 'Due to:';\n  time.className = 'border border-white w-1/5  bg-blue-200 text-bold font-mono text-center  rounded';\n\n  const priority = document.createElement('p');\n  priority.innerText = 'Priority';\n  priority.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';\n\n  const check = document.createElement('p');\n  check.innerText = 'Status'\n  check.className = 'border border-white w-1/5 bg-blue-200 text-bold font-mono text-center  rounded';\n\n\n\n\n  cont.appendChild(title);\n  cont.appendChild(desc);\n  cont.appendChild(time);\n  cont.appendChild(priority);\n  cont.appendChild(check);\n  grid.appendChild(cont);\n\n  \n  return grid\n}  \nconst addControls = () => {\n    const controls = document.createElement('footer');\n    controls.className = 'flex bg-blue-300 w-1/2 h-16 rounded-full position absolute bottom-0 border border-black items-center justify-center ring ring-white'\n\n    const add = button('add');\n    const group = button('group');\n    \n    controls.appendChild(add);\n    controls.appendChild(group);\n\n    return controls\n}\n\nconst body = () => {\n  const content = document.getElementById('content');\n  content.className = 'min-w-screen h-screen flex flex-col items-center';\n \n  const nav = addNav();\n  const grid = addGrid();\n  const control = addControls();\n\n  content.appendChild(nav);\n  content.appendChild(grid);\n  content.appendChild(control);\n\n  return content\n};\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);\n\n//# sourceURL=webpack://todo-list/./src/modules/page.js?");

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