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

/***/ "./js/modulos/slide.js":
/*!*****************************!*\
  !*** ./js/modulos/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slide)\n/* harmony export */ });\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 };\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\r\n    return this.dist.finalPosition + this.dist.movement;\r\n  }\r\n\r\n  onStart(event) {\r\n    let movetype;\r\n    if (event.type === \"mousedown\") {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      movetype = \"mousemove\";\r\n    } else {\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n      movetype = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n  }\r\n  onMove(event) {\r\n    const pointerPosition =\r\n      event.type === \"mousemove\"\r\n        ? event.clientX\r\n        : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalPosition = this.dist.movePosition;\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\r\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\r\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\r\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n  }\r\n\r\n  // slides config\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft + (-210 - margin));\r\n  }\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n  slidesIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slidesIndexNav(index);\r\n    this.dist.finalPosition = activeSlide.position;\r\n    console.log(activeSlide);\r\n  }\r\n\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\r\n  }\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement < -120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.dist.movement > 120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  // init class slide on script file\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.addSlideEvents();\r\n    this.slidesConfig();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/slide.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./js/modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/slide.js */ \"./js/modulos/slide.js\");\n\r\n\r\nconst menuMobile = new _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\n\r\n\r\nconst slide = new _modulos_slide_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".slide\", \".slide-wrapper\");\r\nslide.init();\r\n\r\nslide.changeSlide(0);\r\n\n\n//# sourceURL=webpack://meu_foot/./js/script.js?");

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