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

/***/ "./src/app/utils/load.js":
/*!*******************************!*\
  !*** ./src/app/utils/load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadWebpage\": () => (/* binding */ loadWebpage)\n/* harmony export */ });\n// let loadWepbage = function(){\n//     return console.log('I am loading')\n// }\n\nfunction loadWebpage(){\n    // header //\n    let contentAppend = document.getElementById('content')\n    \n    let page = document.createElement('div')\n    page.classList.add('page')\n\n    let header = document.createElement(\"div\")\n    header.classList.add('header')\n\n    let above = document.createElement(\"div\")\n    above.classList.add('above')\n\n    let ls = document.createElement(\"div\")\n    ls.classList.add('ls')\n\n    let rs = document.createElement(\"div\")\n    rs.classList.add('rs')\n\n    let lsp1 = document.createElement(\"p\")\n    lsp1.textContent =\"Access\"\n\n    let lsp2 = document.createElement(\"p\")\n    lsp2.textContent =\"About\"\n\n    let lsp3 = document.createElement(\"p\")\n    lsp3.textContent =\"info@manpuku.jp\"\n\n    let rsp1 = document.createElement(\"p\")\n    rsp1.textContent =\"Instagram\"\n\n    let rsp2 = document.createElement(\"p\")\n    rsp2.textContent =\"Twitter\"\n\n    contentAppend.appendChild(page)\n    let pageAppend = document.querySelector('.page')\n    console.log(pageAppend)\n    pageAppend.appendChild(header)\n\n    let headerAppend = document.querySelector('.header')\n    headerAppend.appendChild(above)\n\n    let aboveAppend = document.querySelector('.above')\n    aboveAppend.appendChild(ls)\n    aboveAppend.appendChild(rs)\n\n    let lsAppend = document.querySelector('.ls')\n    lsAppend.appendChild(lsp1)\n    lsAppend.appendChild(lsp2)\n    lsAppend.appendChild(lsp3)\n    \n    let rsAppend = document.querySelector('.rs')\n    rsAppend.appendChild(rsp1)\n    rsAppend.appendChild(rsp2)\n\n    let below = document.createElement('div')\n    below.classList.add('below')\n    headerAppend.appendChild(below)\n\n    let belowp1 = document.createElement('p')\n    belowp1.textContent = 'News'\n    let belowp2 = document.createElement('p')\n    belowp2.textContent = 'Subscribe to our newsletter'\n\n    let belowAppend = document.querySelector('.below')\n    belowAppend.appendChild(belowp1)\n    belowAppend.appendChild(belowp2)\n    // header //\n\n    let nav = document.createElement('div')\n    nav.classList.add('nav')\n    pageAppend.appendChild(nav)\n\n    let navAppend = document.querySelector('.nav')\n    let navContent = document.createElement('div')\n    navContent.classList.add('nav-content')\n    navAppend.appendChild(navContent)\n\n    let navh1 = document.createElement('h2')\n    navh1.textContent = 'Main'\n\n    let navh2 = document.createElement('h2')\n    navh2.textContent = 'Menu'\n\n    let navh3 = document.createElement('h2')\n    navh3.textContent = 'Info'\n\n    let navContentAppend = document.querySelector('.nav-content')\n    navContentAppend.appendChild(navh1)\n    navContentAppend.appendChild(navh2)\n    navContentAppend.appendChild(navh3)\n\n\n\n\n\n\n\n\n\n    return console.log('I am loading')\n}\n\n//# sourceURL=webpack:///./src/app/utils/load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_utils_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/utils/load.js */ \"./src/app/utils/load.js\");\nconsole.log('Parker')\nconsole.log('tarker')\n;\n\n(0,_app_utils_load_js__WEBPACK_IMPORTED_MODULE_0__.loadWebpage)()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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