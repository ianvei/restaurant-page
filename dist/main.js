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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadWebpage\": () => (/* binding */ loadWebpage)\n/* harmony export */ });\n// let loadWepbage = function(){\n//     return console.log('I am loading')\n\n\nfunction loadWebpage(){\n    \n    try{\n        let pageDelete = document.querySelector('.page')\n        pageDelete.remove()\n    }\n    catch(err){\n        console.log(err)\n    }\n    \n        \n    \n    // header //\n    let contentAppend = document.getElementById('content')\n    \n    let page = document.createElement('div')\n    page.classList.add('page')\n\n    let header = document.createElement(\"div\")\n    header.classList.add('header')\n\n    let above = document.createElement(\"div\")\n    above.classList.add('above')\n\n    let ls = document.createElement(\"div\")\n    ls.classList.add('ls')\n\n    let rs = document.createElement(\"div\")\n    rs.classList.add('rs')\n\n    let lsp1 = document.createElement(\"p\")\n    lsp1.textContent =\"Access\"\n\n    let lsp2 = document.createElement(\"p\")\n    lsp2.textContent =\"About\"\n\n    let lsp3 = document.createElement(\"p\")\n    lsp3.textContent =\"info@manpuku.jp\"\n\n    let rsp1 = document.createElement(\"p\")\n    rsp1.textContent =\"Instagram\"\n\n    let rsp2 = document.createElement(\"p\")\n    rsp2.textContent =\"Twitter\"\n\n    contentAppend.appendChild(page)\n    let pageAppend = document.querySelector('.page')\n    console.log(pageAppend)\n    pageAppend.appendChild(header)\n\n    let headerAppend = document.querySelector('.header')\n    headerAppend.appendChild(above)\n\n    let aboveAppend = document.querySelector('.above')\n    aboveAppend.appendChild(ls)\n    aboveAppend.appendChild(rs)\n\n    let lsAppend = document.querySelector('.ls')\n    lsAppend.appendChild(lsp1)\n    lsAppend.appendChild(lsp2)\n    lsAppend.appendChild(lsp3)\n    \n    let rsAppend = document.querySelector('.rs')\n    rsAppend.appendChild(rsp1)\n    rsAppend.appendChild(rsp2)\n\n    let below = document.createElement('div')\n    below.classList.add('below')\n    headerAppend.appendChild(below)\n\n    let belowp1 = document.createElement('p')\n    belowp1.textContent = 'News'\n    let belowp2 = document.createElement('p')\n    belowp2.textContent = 'Subscribe to our newsletter'\n\n    let belowAppend = document.querySelector('.below')\n    belowAppend.appendChild(belowp1)\n    belowAppend.appendChild(belowp2)\n    // header //\n\n    // nav //\n    let nav = document.createElement('div')\n    nav.classList.add('nav')\n    pageAppend.appendChild(nav)\n\n    let navAppend = document.querySelector('.nav')\n    let navContent = document.createElement('div')\n    navContent.classList.add('nav-content')\n    navAppend.appendChild(navContent)\n\n    let navh1 = document.createElement('h2')\n    navh1.classList.add('main')\n    navh1.textContent = 'Main'\n\n    let navh2 = document.createElement('h2')\n    navh2.classList.add('menu')\n    navh2.textContent = 'Menu'\n\n    let navh3 = document.createElement('h2')\n    navh3.classList.add('Info')\n    navh3.textContent = 'Info'\n\n    let navContentAppend = document.querySelector('.nav-content')\n    navContentAppend.appendChild(navh1)\n    navContentAppend.appendChild(navh2)\n    navContentAppend.appendChild(navh3)\n    // nav //\n\n    //body-content//\n    let bodyContent = document.createElement('div')\n    bodyContent.classList.add('body-content')\n    pageAppend.appendChild(bodyContent)\n\n    let bodySection = document.createElement('div')\n    bodySection.classList.add('body-section')\n\n    let bodyContentAppend = document.querySelector('.body-content')\n    bodyContent.appendChild(bodySection)\n\n    let bodySectionImg = document.createElement('img')\n    bodySectionImg.setAttribute('src', \"/src/manpuku.jpeg\")\n    bodySectionImg.setAttribute('alt', \"restaurant storefront\")\n    bodySectionImg.setAttribute('class', \"storefront-img\")\n    \n    let bodySectionAppend = document.querySelector('.body-section')\n    bodySectionAppend.appendChild(bodySectionImg)\n\n    let mainContentText = document.createElement('div')\n    mainContentText.classList.add('main-content-text')\n\n    let bodySectionp1 = document.createElement('p')\n    bodySectionp1.textContent = \"OUR STOREFRONT\"\n    let bodySectionp2 = document.createElement('p')\n    bodySectionp2.textContent = \"We are a restaurant in Toronto bringing the most authentic Japanese Food to the City\"\n    let bodySectionp3 = document.createElement('p')\n    bodySectionp3.textContent = \"写真家の川島小鳥主宰のブックレーベルpiyo piyo pressの出版２タイトル「（世界）² / 川島小鳥x仲野太賀」「花とイルカとユニコーン / 小橋陽介」とオリジナルトートバッグが再入荷しました。 以下関連商品お買い上げの方に、小橋陽介がジョウビタキを描いたpiyo piyo press（世界）²　特製ステッカーを差し上げます。\"\n\n    mainContentText.appendChild(bodySectionp1)\n    mainContentText.appendChild(bodySectionp2)\n    mainContentText.appendChild(bodySectionp3)\n    bodySectionAppend.appendChild(mainContentText)\n\n\n\n\n\n\n    return console.log('I am loading')\n}\n\n//# sourceURL=webpack:///./src/app/utils/load.js?");

/***/ }),

/***/ "./src/app/utils/menu.js":
/*!*******************************!*\
  !*** ./src/app/utils/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\n\nfunction loadMenu(){\n    \n    console.log('loading')\n    let bodySectionDelete = document.querySelector('.body-section')\n    console.log(bodySectionDelete)\n    bodySectionDelete.remove()\n\n    let newBodySection = document.createElement('div')\n    newBodySection.classList.add('body-section')\n    newBodySection.setAttribute('id', 'menu')\n\n    let bodyContentAppendMenu = document.querySelector('.body-content')\n    bodyContentAppendMenu.appendChild(newBodySection)\n\n    let menuItem1 = document.createElement('div')\n    menuItem1.classList.add('menu-item')\n    let food1 = document.createElement('div')\n    food1.classList.add('food')\n    food1.innerText = 'shigure don / しぐれ 丼'\n    let price1 = document.createElement('div')\n    price1.classList.add('price')\n    price1.innerText = '$7.49'\n\n    let menuItem2 = document.createElement('div')\n    menuItem2.classList.add('menu-item')\n    let food2 = document.createElement('div')\n    food2.classList.add('food')\n    food2.innerText = 'curry don / カレードン'\n    let price2 = document.createElement('div')\n    price2.classList.add('price')\n    price2.innerText = '$7.99'\n\n    let menuItem3 = document.createElement('div')\n    menuItem3.classList.add('menu-item')\n    let food3 = document.createElement('div')\n    food3.classList.add('food')\n    food3.innerText = 'niku udon / 肉 うどん'\n    let price3 = document.createElement('div')\n    price3.classList.add('price')\n    price3.innerText = '$6.99'\n\n    let menuItem4 = document.createElement('div')\n    menuItem4.classList.add('menu-item')\n    let food4 = document.createElement('div')\n    food4.classList.add('food')\n    food4.innerText = 'ochazuke / お茶漬け'\n    let price4 = document.createElement('div')\n    price4.classList.add('price')\n    price4.innerText = '$4.29'\n\n\n\n    let menuWrapper = document.createElement('div')\n    menuWrapper.classList.add('menu-wrapper')\n    let newBodySectionAppend = document.querySelector('.body-section')\n    newBodySectionAppend.appendChild(menuWrapper)\n\n    let menuWrapperAppend = document.querySelector('.menu-wrapper')\n    menuWrapperAppend.appendChild(menuItem1)\n    menuWrapperAppend.appendChild(menuItem2)\n    menuWrapperAppend.appendChild(menuItem3)\n    menuWrapperAppend.appendChild(menuItem4)\n\n    menuItem1.appendChild(food1)\n    menuItem1.appendChild(price1)\n\n    menuItem2.appendChild(food2)\n    menuItem2.appendChild(price2)\n\n    menuItem3.appendChild(food3)\n    menuItem3.appendChild(price3)\n\n    menuItem4.appendChild(food4)\n    menuItem4.appendChild(price4)\n\n}\n\n//# sourceURL=webpack:///./src/app/utils/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_utils_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/utils/load.js */ \"./src/app/utils/load.js\");\n/* harmony import */ var _app_utils_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/menu.js */ \"./src/app/utils/menu.js\");\nconsole.log('Parker')\nconsole.log('tarker')\n;\n\n\nlet firstLoadFlag = true\n\nif (firstLoadFlag){\n    (0,_app_utils_load_js__WEBPACK_IMPORTED_MODULE_0__.loadWebpage)(firstLoadFlag)\n}\n\nlet loadListener = document.querySelector('.main')\nlet menuListener = document.querySelector('.menu')\n\nloadListener.addEventListener('click', _app_utils_load_js__WEBPACK_IMPORTED_MODULE_0__.loadWebpage)\n\nmenuListener.addEventListener('click', _app_utils_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)\n\n\n//# sourceURL=webpack:///./src/index.js?");

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