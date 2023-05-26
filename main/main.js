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

/***/ "./js/modulos/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modulos/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelectorAll(menuList);\r\n    this.html = document.querySelector(\"html\");\r\n\r\n    if (events === undefined) {\r\n      this.events = [\"touchstart\", \"click\"];\r\n    } else {\r\n      this.events = events;\r\n    }\r\n    this.openMenu = this.openMenu.bind(this);\r\n    this.handleOutsideClick = this.handleOutsideClick.bind(this);\r\n  }\r\n\r\n  openMenu(event) {\r\n    if (event.type === \"touchstart\") event.preventDefault();\r\n    this.menuList.forEach((element) => {\r\n      element.classList.toggle(\"ativo\");\r\n    });\r\n    this.menuButton.classList.toggle(\"ativo\");\r\n\r\n    const links = Array.from(\r\n      document.querySelectorAll(\".menu-categorias-container a\")\r\n    );\r\n    const submenu = document.querySelectorAll(\".sub-menu\");\r\n    links.forEach((link) => {\r\n      link.addEventListener(\"click\", activeSubMenu);\r\n    });\r\n    function activeSubMenu(event) {\r\n      event.preventDefault();\r\n      submenu.forEach((element) => {\r\n        element.classList.add(\"ativo\");\r\n      });\r\n      if (!this.eventRemoved) {\r\n        links.forEach((link) => {\r\n          link.removeEventListener(\"click\", activeSubMenu);\r\n        });\r\n        this.eventRemoved = true;\r\n      }\r\n    }\r\n  }\r\n  handleOutsideClick(event) {\r\n    const buttonMenu = document.querySelector(\".menu-mobile\");\r\n    const listMenu = document.querySelector(\".menu-categorias-container\");\r\n    const loginMenu = document.querySelector(\".menu-login\");\r\n\r\n    const targetElements = [buttonMenu, listMenu, loginMenu];\r\n\r\n    handleOutsideClick(targetElements, event, () => {\r\n      setTimeout(() => {\r\n        this.menuList.forEach((element) => {\r\n          element.classList.remove(\"ativo\");\r\n        });\r\n      });\r\n    });\r\n  }\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((event) => {\r\n      this.menuButton.addEventListener(event, this.openMenu);\r\n      this.html.addEventListener(event, this.handleOutsideClick);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\nfunction handleOutsideClick(elementTargets, events, callback) {\r\n  const insideClick = elementTargets.some((elementTarget) => {\r\n    return elementTarget.contains(events.target);\r\n  });\r\n  if (!insideClick) {\r\n    callback();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/menu-mobile.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./js/modulos/menu-mobile.js\");\n\r\n\r\nconst menuMobile = new _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\n\n//# sourceURL=webpack://meu_foot/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;