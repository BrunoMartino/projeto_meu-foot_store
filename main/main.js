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

/***/ "./js/modulos/active-dropdown-menu.js":
/*!********************************************!*\
  !*** ./js/modulos/active-dropdown-menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ActiveDropDownMenu)\n/* harmony export */ });\nclass ActiveDropDownMenu {\r\n  constructor(linksSelector, submenuSelector) {\r\n    this.links = document.querySelectorAll(linksSelector);\r\n    this.submenu = document.querySelectorAll(submenuSelector);\r\n\r\n    this.activeSubMenu = this.activeSubMenu.bind(this);\r\n  }\r\n\r\n  hasSubMenu(link) {\r\n    const linkChildren = Array.from(link.children);\r\n    const submenuChildren = Array.from(this.submenu);\r\n    return linkChildren.some((child) => submenuChildren.includes(child));\r\n  }\r\n\r\n  activeSubMenu(event) {\r\n    const link = event.currentTarget;\r\n    const submenu = link.querySelector(\".sub-menu\");\r\n\r\n    if (submenu) {\r\n      this.submenu.forEach((element) => {\r\n        element.classList.remove(\"active\");\r\n      });\r\n      submenu.classList.add(\"active\");\r\n\r\n      setTimeout(() => {\r\n        link.removeEventListener(\"click\", this.removePreventedEvent);\r\n        console.log(\"removeu trava\");\r\n      }, 600);\r\n    }\r\n  }\r\n\r\n  removePreventedEvent(event) {\r\n    event.preventDefault();\r\n  }\r\n\r\n  subMenuEvents() {\r\n    this.links.forEach((link) => {\r\n      if (this.hasSubMenu(link)) {\r\n        link.addEventListener(\"click\", this.activeSubMenu);\r\n        link.addEventListener(\"click\", this.removePreventedEvent);\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.subMenuEvents();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/active-dropdown-menu.js?");

/***/ }),

/***/ "./js/modulos/category-swatches.js":
/*!*****************************************!*\
  !*** ./js/modulos/category-swatches.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cat_Swachtes)\n/* harmony export */ });\nclass Cat_Swachtes {\r\n  constructor(attrUL, variationSelect) {\r\n    this.attrUL = Array.from(document.querySelectorAll(attrUL));\r\n    this.variationSelect = Array.from(\r\n      document.querySelectorAll(variationSelect)\r\n    );\r\n  }\r\n\r\n  createVariationsArray() {\r\n    this.variationSelect.forEach((element) => {\r\n      const selectID = element.id;\r\n      let variationArray = Array.from(element.children);\r\n      variationArray.shift();\r\n\r\n      const attrElements = this.attrUL.filter((attrElement) =>\r\n        attrElement.classList.contains(selectID)\r\n      );\r\n      attrElements.forEach((attrElement) => {\r\n        let attrArray = Array.from(attrElement.children);\r\n        this.setVariationsSelected(attrArray, element, variationArray);\r\n      });\r\n      this.addChangeEvents(element);\r\n      console.log(element);\r\n    });\r\n  }\r\n\r\n  setVariationsSelected(attrArray, selectElement, variationArray) {\r\n    attrArray.forEach((attr, index) => {\r\n      attr.addEventListener(\"click\", () => {\r\n        attrArray.forEach((el) => {\r\n          el.classList.remove(\"ativo\");\r\n        });\r\n        attr.classList.add(\"ativo\");\r\n        if (!this.isChangeEventInProgress) {\r\n          this.isChangeEventInProgress = true;\r\n\r\n          variationArray.forEach((variationElement, variationIndex) => {\r\n            variationElement.removeAttribute(\"selected\");\r\n            if (variationIndex === index) {\r\n              variationElement.setAttribute(\"selected\", \"selected\");\r\n              selectElement.value = variationElement.value;\r\n            }\r\n          });\r\n          this.updateForm();\r\n\r\n          this.isChangeEventInProgress = false;\r\n        }\r\n      });\r\n    });\r\n  }\r\n  // this two functions updates the default form created by the woocommerce.\r\n  updateForm() {\r\n    const changeEvent = new Event(\"change\", { bubbles: true });\r\n\r\n    this.variationSelect.forEach((element) => {\r\n      element.dispatchEvent(changeEvent);\r\n    });\r\n    this.attrUL.forEach((attrElement) => {\r\n      attrElement.dispatchEvent(changeEvent);\r\n    });\r\n  }\r\n\r\n  addChangeEvents(element) {\r\n    element.addEventListener(\"change\", () => {\r\n      if (!this.isChangeEventInProgress) {\r\n        this.isChangeEventInProgress = true;\r\n        this.updateForm();\r\n        this.isChangeEventInProgress = false;\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.createVariationsArray();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/category-swatches.js?");

/***/ }),

/***/ "./js/modulos/change-color.js":
/*!************************************!*\
  !*** ./js/modulos/change-color.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChangeColor)\n/* harmony export */ });\nclass ChangeColor {\r\n  constructor(element) {\r\n    this.element = document.querySelector(element);\r\n    this.text = this.element.innerHTML;\r\n\r\n    this.orderStatus = {\r\n      pending: \"Pagamento pendente\",\r\n      processing: \"Processando\",\r\n      waiting: \"Aguardando\",\r\n      concluded: \"Concluído\",\r\n      canceled: \"Cancelado\",\r\n      refunded: \"Reembolsado\",\r\n      unsucced: \"Malsucedido\",\r\n    };\r\n  }\r\n\r\n  yellowBackground() {\r\n    this.element.style.backgroundColor = \"#FFDA73\";\r\n  }\r\n  redBackground() {\r\n    this.element.style.backgroundColor = \"#f79f9f\";\r\n  }\r\n  grayBackground() {\r\n    this.element.style.backgroundColor = \"#ededed\";\r\n  }\r\n\r\n  setBackgroundColor() {\r\n    if (this.text === this.orderStatus.pending) {\r\n      this.yellowBackground();\r\n    } else if (\r\n      this.text === this.orderStatus.canceled ||\r\n      this.text === this.orderStatus.refunded ||\r\n      this.text === this.orderStatus.unsucced\r\n    ) {\r\n      this.redBackground();\r\n    } else if (\r\n      this.text === this.orderStatus.processing ||\r\n      this.text === this.orderStatus.waiting\r\n    ) {\r\n      this.grayBackground();\r\n    } else {\r\n      this.element.style.backgroundColor = \"#a3de67\";\r\n    }\r\n  }\r\n  init() {\r\n    this.setBackgroundColor();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/change-color.js?");

/***/ }),

/***/ "./js/modulos/change-main-gallery.js":
/*!*******************************************!*\
  !*** ./js/modulos/change-main-gallery.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChangeGallery)\n/* harmony export */ });\nclass ChangeGallery {\r\n  constructor(galleryList, swatches, mainImg) {\r\n    this.galleryList = document.querySelectorAll(galleryList);\r\n    this.swatches = document.querySelectorAll(swatches);\r\n    this.mainImg = document.querySelector(mainImg);\r\n\r\n    this.changeImage = this.changeImage.bind(this);\r\n  }\r\n\r\n  changeImage({ currentTarget }) {\r\n    this.mainImg.src = currentTarget.src;\r\n  }\r\n  addListChangeEvent() {\r\n    this.galleryList.forEach((img) => {\r\n      img.addEventListener(\"click\", this.changeImage);\r\n    });\r\n    this.galleryList.forEach((img) => {\r\n      img.addEventListener(\"click\", () => {\r\n        this.galleryList.forEach((obj) => {\r\n          obj.classList.remove(\"ativo\");\r\n        });\r\n        img.classList.add(\"ativo\");\r\n      });\r\n    });\r\n  }\r\n  addSwatchesChangeEvent() {\r\n    this.swatches.forEach((img) => {\r\n      img.addEventListener(\"click\", this.changeImage);\r\n    });\r\n    this.swatches.forEach((img) => {\r\n      img.addEventListener(\"click\", () => {\r\n        this.swatches.forEach((obj) => {\r\n          obj.parentElement.classList.remove(\"ativo\");\r\n        });\r\n        img.parentElement.classList.add(\"ativo\");\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.addListChangeEvent();\r\n    this.addSwatchesChangeEvent();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/change-main-gallery.js?");

/***/ }),

/***/ "./js/modulos/copy-btn.js":
/*!********************************!*\
  !*** ./js/modulos/copy-btn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CopyButton)\n/* harmony export */ });\nclass CopyButton {\r\n  constructor(copyContainer, copyText) {\r\n    this.copyContainer = document.querySelector(copyContainer);\r\n    this.copyText = document.querySelector(copyText);\r\n  }\r\n\r\n  createBtn() {\r\n    const copyBtn = document.createElement(\"span\");\r\n    const copySvg = document.createElement(\"img\");\r\n    this.setSvg(copySvg);\r\n    copyBtn.classList.add(\"copy-button\");\r\n    copyBtn.appendChild(copySvg);\r\n    this.copyContainer.appendChild(copyBtn);\r\n  }\r\n  setSvg(element) {\r\n    element.src =\r\n      \"https://meufoot.test/wp-content/themes/Meu_Foot/img-meufoot/icones/content-copy.svg\";\r\n  }\r\n\r\n  copyEvent() {\r\n    const btnCopy = document.querySelector(\".copy-button\");\r\n    btnCopy.addEventListener(\"click\", () => {\r\n      const textToCopy = this.copyText.innerHTML;\r\n      const textArea = document.createElement(\"textarea\");\r\n      textArea.value = textToCopy;\r\n      document.body.appendChild(textArea);\r\n\r\n      textArea.select();\r\n      document.execCommand(\"copy\");\r\n\r\n      document.body.removeChild(textArea);\r\n\r\n      const alert = document.createElement(\"span\");\r\n      alert.classList.add(\"copy-alert\");\r\n      alert.innerHTML = \"Copiado !\";\r\n      this.copyContainer.appendChild(alert);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.createBtn();\r\n    this.copyEvent();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/copy-btn.js?");

/***/ }),

/***/ "./js/modulos/debounce.js":
/*!********************************!*\
  !*** ./js/modulos/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearInterval(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/debounce.js?");

/***/ }),

/***/ "./js/modulos/image-swatches.js":
/*!**************************************!*\
  !*** ./js/modulos/image-swatches.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Img_Swachtes)\n/* harmony export */ });\nclass Img_Swachtes {\r\n  constructor(imageUL, imageID) {\r\n    if (imageUL && imageID) {\r\n      this.imageUL = document.querySelector(imageUL);\r\n      this.imageID = document.querySelector(imageID);\r\n      //create images arrays for control\r\n      this.arrayImgUl = Array.from(this.imageUL.children);\r\n      this.arrayImgSelect = Array.from(this.imageID.children);\r\n      this.arrayImgSelect.shift();\r\n      this.arrayImgSelect.reverse();\r\n    }\r\n  }\r\n  SetImgSelected() {\r\n    this.arrayImgUl.forEach((img, index) => {\r\n      img.addEventListener(\"click\", () => {\r\n        this.arrayImgSelect.forEach((option) => {\r\n          option.removeAttribute(\"selected\");\r\n        });\r\n        this.arrayImgSelect[index].setAttribute(\"selected\", \"selected\");\r\n        if (this.imageID) {\r\n          this.imageID.value = this.arrayImgSelect[index].value;\r\n        }\r\n\r\n        this.updateForm();\r\n      });\r\n    });\r\n  }\r\n\r\n  // this two functions updates the default form created by the woocommerce.\r\n  updateForm() {\r\n    const changeEvent = new Event(\"change\", { bubbles: true });\r\n\r\n    if (this.imageID) {\r\n      this.imageID.dispatchEvent(changeEvent);\r\n    }\r\n\r\n    this.imageUL.dispatchEvent(changeEvent);\r\n  }\r\n\r\n  init() {\r\n    this.SetImgSelected();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/image-swatches.js?");

/***/ }),

/***/ "./js/modulos/increment-qty.js":
/*!*************************************!*\
  !*** ./js/modulos/increment-qty.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IncrementQty)\n/* harmony export */ });\nclass IncrementQty {\r\n  constructor(inputNumber) {\r\n    this.inputNumber = document.querySelector(inputNumber);\r\n  }\r\n\r\n  createSpanBtn() {\r\n    this.decreaseBtn = document.createElement(\"span\");\r\n    this.decreaseBtn.classList.add(\"decrease-btn\");\r\n    this.increaseBtn = document.createElement(\"span\");\r\n    this.increaseBtn.classList.add(\"increase-btn\");\r\n    // styles, icons e images are setted on CSS.\r\n\r\n    this.inputNumber.insertAdjacentElement(\"beforebegin\", this.decreaseBtn);\r\n    this.inputNumber.insertAdjacentElement(\"afterend\", this.increaseBtn);\r\n  }\r\n\r\n  controlValues() {\r\n    this.qtyValue = +this.inputNumber.value;\r\n\r\n    this.decreaseBtn.addEventListener(\"click\", () => {\r\n      if (!this.isChangeEventInProgress) {\r\n        this.qtyValue--;\r\n        if (this.qtyValue <= 0) {\r\n          return 1;\r\n        }\r\n        this.inputNumber.value = this.qtyValue.toString();\r\n      }\r\n    });\r\n    this.increaseBtn.addEventListener(\"click\", () => {\r\n      if (!this.isChangeEventInProgress) {\r\n        this.qtyValue++;\r\n        this.inputNumber.value = this.qtyValue.toString();\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.createSpanBtn();\r\n    this.controlValues();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/increment-qty.js?");

/***/ }),

/***/ "./js/modulos/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modulos/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modulos/outsideclick.js\");\n/* harmony import */ var _active_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-dropdown-menu.js */ \"./js/modulos/active-dropdown-menu.js\");\n\r\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, parentCat, submenu, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelectorAll(menuList);\r\n    this.parentCat = document.querySelectorAll(parentCat);\r\n    this.submenu = document.querySelectorAll(submenu);\r\n    this.html = document.querySelector(\"html\");\r\n    this.isOpen = false;\r\n    this.dropdownMenu = new _active_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](parentCat, submenu);\r\n\r\n    if (events === undefined) {\r\n      this.events = [\"touchstart\", \"click\"];\r\n    } else {\r\n      this.events = events;\r\n    }\r\n    this.openMenu = this.openMenu.bind(this);\r\n    this.linkPreventRemove = this.linkPreventRemove.bind(this);\r\n  }\r\n\r\n  linkPreventRemove(event) {\r\n    event.preventDefault();\r\n  }\r\n\r\n  openMenu(event) {\r\n    if (event.type === \"touchstart\") event.preventDefault();\r\n    if (!this.isOpen) {\r\n      this.menuList.forEach((element) => {\r\n        element.classList.add(\"ativo\");\r\n      });\r\n      this.menuButton.classList.add(\"ativo\");\r\n\r\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array.from(this.menuList), this.events, () => {\r\n        this.menuList.forEach((element) => {\r\n          element.classList.remove(\"ativo\");\r\n        });\r\n        this.menuButton.classList.remove(\"ativo\");\r\n        this.isOpen = false;\r\n      });\r\n      this.isOpen = true;\r\n      if (this.isOpen) {\r\n        this.dropdownMenu.init();\r\n      }\r\n    } else {\r\n      this.menuList.forEach((element) => {\r\n        element.classList.remove(\"ativo\");\r\n      });\r\n      this.menuButton.classList.remove(\"ativo\");\r\n      this.isOpen = false;\r\n    }\r\n  }\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((event) => {\r\n      this.menuButton.addEventListener(event, this.openMenu);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/menu-mobile.js?");

/***/ }),

/***/ "./js/modulos/outsideclick.js":
/*!************************************!*\
  !*** ./js/modulos/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elements, events, callback) {\r\n  const html = document.querySelector(\"html\");\r\n\r\n  function handleOutsideClick(event) {\r\n    const isOutside = !elements.some((element) =>\r\n      element.contains(event.target)\r\n    );\r\n\r\n    if (isOutside) {\r\n      callback();\r\n      events.forEach((event) => {\r\n        html.removeEventListener(event, handleOutsideClick);\r\n      });\r\n    }\r\n  }\r\n\r\n  events.forEach((event) => {\r\n    setTimeout(() => {\r\n      html.addEventListener(event, handleOutsideClick);\r\n    }, 0);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/outsideclick.js?");

/***/ }),

/***/ "./js/modulos/regressive-timer.js":
/*!****************************************!*\
  !*** ./js/modulos/regressive-timer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RegressiveTimer)\n/* harmony export */ });\nclass RegressiveTimer {\r\n  constructor(product) {\r\n    this.product = document.querySelectorAll(product);\r\n    this.productArray = [...this.product];\r\n    this.now = new Date();\r\n  }\r\n\r\n  createTimer() {\r\n    this.productArray.forEach((element, index) => {\r\n      const clock = document.createElement(\"div\");\r\n      clock.classList.add(\"item-timer\");\r\n      element.appendChild(clock);\r\n      this.setTimer(clock, index);\r\n    });\r\n  }\r\n\r\n  setTimer(clock, index) {\r\n    let timerData = this.getTimerData();\r\n    let totalTime;\r\n\r\n    if (timerData && timerData[index]) {\r\n      totalTime = timerData[index].remainTime;\r\n    } else {\r\n      const hours = index * 1;\r\n      const min = 25;\r\n      const sec = 20;\r\n\r\n      totalTime = hours * 3600 + min * 60 + sec;\r\n    }\r\n\r\n    let timeInterval = setInterval(() => {\r\n      let remainHours = Math.floor(totalTime / 3600);\r\n      let remainMin = Math.floor((totalTime % 3600) / 60);\r\n      let remainSec = totalTime % 60;\r\n\r\n      remainHours = remainHours.toString().padStart(2, \"0\");\r\n      remainMin = remainMin.toString().padStart(2, \"0\");\r\n      remainSec = remainSec.toString().padStart(2, \"0\");\r\n\r\n      clock.innerHTML = `<p>${remainHours}:${remainMin}:${remainSec}</p>`;\r\n\r\n      if (totalTime <= 0) {\r\n        clock.innerHTML = `<p>Promoção Esgotou</p>`;\r\n        clearInterval(timeInterval);\r\n        clock.parentNode.classList.add(\"disabled\");\r\n        this.updateTimerData(index, 0);\r\n      } else {\r\n        this.updateTimerData(index, totalTime);\r\n      }\r\n      totalTime--;\r\n    }, 1000);\r\n  }\r\n\r\n  getTimerData() {\r\n    const storedData = localStorage.getItem(\"today\");\r\n    return storedData ? JSON.parse(storedData) : undefined;\r\n  }\r\n\r\n  updateTimerData(index, remainTime) {\r\n    let timerData = this.getTimerData() || [];\r\n    if (!timerData[index]) {\r\n      timerData[index] = {};\r\n    }\r\n    timerData[index].remainTime = remainTime;\r\n    localStorage.setItem(\"today\", JSON.stringify(timerData));\r\n  }\r\n\r\n  resetTimerIfDayChanged() {\r\n    const storedData = this.getTimerData();\r\n    const storedDay = storedData ? storedData.day : null;\r\n    const currentDay = this.now.toDateString();\r\n\r\n    if (storedDay !== currentDay) {\r\n      localStorage.setItem(\"today\", JSON.stringify({ day: currentDay }));\r\n\r\n      this.productArray.forEach((element) => {\r\n        element.classList.remove(\"disabled\");\r\n        element.removeAttribute(\"disabled\");\r\n      });\r\n    }\r\n  }\r\n\r\n  init() {\r\n    this.resetTimerIfDayChanged();\r\n    this.createTimer();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/regressive-timer.js?");

/***/ }),

/***/ "./js/modulos/slide-gallery.js":
/*!*************************************!*\
  !*** ./js/modulos/slide-gallery.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GallerySlide)\n/* harmony export */ });\nclass GallerySlide {\r\n  constructor(slide, prev, next) {\r\n    this.slide = document.querySelector(slide);\r\n    this.prevbtn = document.querySelector(prev);\r\n    this.nextbtn = document.querySelector(next);\r\n\r\n    this.slideItems = Array.from(this.slide.children);\r\n    this.itemWidth = this.slideItems[0].offsetWidth;\r\n\r\n    this.currentPosition = 1;\r\n\r\n    this.prevEvent = this.prevEvent.bind(this);\r\n    this.nextEvent = this.nextEvent.bind(this);\r\n\r\n    this.updateSlidePosition();\r\n  }\r\n\r\n  prevEvent() {\r\n    this.currentPosition =\r\n      (this.currentPosition - 1 + this.slideItems.length) %\r\n      this.slideItems.length;\r\n    this.updateSlidePosition();\r\n  }\r\n\r\n  nextEvent() {\r\n    this.currentPosition = (this.currentPosition + 1) % this.slideItems.length;\r\n    this.updateSlidePosition();\r\n  }\r\n\r\n  updateSlidePosition() {\r\n    const adjustedPosition =\r\n      (this.currentPosition + this.slideItems.length - 1) %\r\n      this.slideItems.length;\r\n    this.slide.style.transform = `translate3d(${\r\n      -adjustedPosition * this.itemWidth\r\n    }px, 0, 0)`;\r\n  }\r\n\r\n  addGalleryEvents() {\r\n    this.prevbtn.addEventListener(\"click\", this.prevEvent);\r\n    this.nextbtn.addEventListener(\"click\", this.nextEvent);\r\n  }\r\n\r\n  init() {\r\n    if (this.slideItems.length > 4) {\r\n      this.addGalleryEvents();\r\n      return this;\r\n    } else {\r\n      this.prevbtn.style.display = \"none\";\r\n      this.nextbtn.style.display = \"none\";\r\n      return this;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/slide-gallery.js?");

/***/ }),

/***/ "./js/modulos/slide.js":
/*!*****************************!*\
  !*** ./js/modulos/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modulos/debounce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 };\r\n    this.activeClass = \"ativo\";\r\n    this.changeEvent = new Event(\"changeEvent\");\r\n    this.mousedown;\r\n    this.mouseup;\r\n  }\r\n\r\n  // slide transition and dists\r\n  transitionSlide(active) {\r\n    this.slide.style.transition = active ? \"transform .4s\" : \"\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\r\n    return this.dist.finalPosition - this.dist.movement;\r\n  }\r\n\r\n  // slide movement and click\r\n\r\n  removeAnchorClick() {\r\n    const targetElement = event.target;\r\n    const isAnchor = targetElement.closest(\"a\");\r\n    function preventedDefault(event) {\r\n      event.preventDefault();\r\n    }\r\n    if (isAnchor) {\r\n      isAnchor.addEventListener(\"click\", preventedDefault);\r\n      setTimeout(() => {\r\n        isAnchor.removeEventListener(\"click\", preventedDefault);\r\n      }, 180);\r\n    }\r\n  }\r\n\r\n  onStart(event) {\r\n    let movetype;\r\n    if (event.type === \"mousedown\") {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      movetype = \"mousemove\";\r\n      this.mousedown = event.timeStamp;\r\n    } else {\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n      movetype = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transitionSlide(false);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition =\r\n      event.type === \"mousemove\"\r\n        ? event.clientX\r\n        : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    let mouseup;\r\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    if (event.type === \"mouseup\") {\r\n      this.mouseup = event.timeStamp;\r\n    }\r\n    if (this.mouseup - this.mousedown > 150) {\r\n      this.removeAnchorClick();\r\n    }\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalPosition = this.dist.movePosition;\r\n    this.transitionSlide(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\r\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\r\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\r\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\r\n  }\r\n\r\n  // init slides navigation\r\n\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) {\r\n      this.changeSlide(this.index.prev);\r\n    } else {\r\n      const last = this.slideArray.length - 1;\r\n      this.changeSlide(last);\r\n    }\r\n  }\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) {\r\n      this.changeSlide(this.index.next);\r\n    } else {\r\n      this.changeSlide(0);\r\n    }\r\n  }\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      return this.activeNextSlide();\r\n    } else if (this.dist.movement > 120 && this.index.next === undefined) {\r\n      return this.changeSlide(0);\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      return this.activePrevSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev === undefined) {\r\n      const last = this.slideArray.length - 1;\r\n      this.changeSlide(last);\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  // carousel function\r\n\r\n  carouselSlide() {\r\n    setInterval(() => {\r\n      this.activeNextSlide();\r\n    }, 8000);\r\n  }\r\n  // slides config\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n  slideIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slideIndexNav(index);\r\n    this.dist.finalPosition = activeSlide.position;\r\n    this.changeActiveClass();\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n  changeActiveClass() {\r\n    this.slideArray.forEach((item) => {\r\n      item.element.classList.remove(this.activeClass);\r\n    });\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  addResizeEvent(index) {\r\n    let counter = 1;\r\n    let size = this.slideArray[index].clientWidth;\r\n    window.addEventListener(\"resize\", () => {\r\n      this.slide.style.transform = `translateX(${-size * counter}px)`;\r\n    });\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n  }\r\n  // init class slide on script file\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transitionSlide(true);\r\n    this.addSlideEvents();\r\n    this.slidesConfig();\r\n    this.changeSlide(0);\r\n    this.addResizeEvent(0);\r\n    this.carouselSlide();\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper);\r\n    this.bindControlEvents();\r\n  }\r\n\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    if (prev && next) this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener(\"click\", this.activePrevSlide);\r\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement(\"ul\");\r\n    control.dataset.control = \"page-slide\";\r\n    this.slideArray.forEach((item, index) => {\r\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${\r\n        index + 1\r\n      }</a></li>`;\r\n    });\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      this.changeSlide(index);\r\n    });\r\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\r\n  }\r\n\r\n  addControl(customControl) {\r\n    this.control =\r\n      document.querySelector(customControl) || this.createControl();\r\n    this.controlArray = [...this.control.children];\r\n    this.activeControlItem();\r\n    this.controlArray.forEach(this.eventControl);\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach((item) =>\r\n      item.classList.remove(this.activeClass)\r\n    );\r\n    this.controlArray[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.eventControl = this.eventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/modulos/slide.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./js/modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/slide.js */ \"./js/modulos/slide.js\");\n/* harmony import */ var _modulos_regressive_timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/regressive-timer.js */ \"./js/modulos/regressive-timer.js\");\n/* harmony import */ var _modulos_category_swatches_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/category-swatches.js */ \"./js/modulos/category-swatches.js\");\n/* harmony import */ var _modulos_image_swatches_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/image-swatches.js */ \"./js/modulos/image-swatches.js\");\n/* harmony import */ var _modulos_increment_qty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/increment-qty.js */ \"./js/modulos/increment-qty.js\");\n/* harmony import */ var _modulos_change_main_gallery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/change-main-gallery.js */ \"./js/modulos/change-main-gallery.js\");\n/* harmony import */ var _modulos_change_color_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/change-color.js */ \"./js/modulos/change-color.js\");\n/* harmony import */ var _modulos_copy_btn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/copy-btn.js */ \"./js/modulos/copy-btn.js\");\n/* harmony import */ var _modulos_active_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/active-dropdown-menu.js */ \"./js/modulos/active-dropdown-menu.js\");\n/* harmony import */ var _modulos_slide_gallery_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modulos/slide-gallery.js */ \"./js/modulos/slide-gallery.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuMobile = new _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  '[data-menu=\"button\"]',\r\n  '[data-menu=\"list\"]',\r\n  \"#menu-categorias > .menu-item\",\r\n  \".sub-menu\"\r\n);\r\nmenuMobile.init();\r\n\r\nconst filterMobile = new _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \".filter-mobile\",\r\n  \".filters\",\r\n  \"#menu-categorias-internas > .menu-item\",\r\n  \".sub-menu\"\r\n);\r\nfilterMobile.init();\r\n\r\nconst dropdownFilterActive = new _modulos_active_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\r\n  \"#menu-categorias-internas > .menu-item\",\r\n  \".sub-menu\"\r\n);\r\ndropdownFilterActive.init();\r\n\r\nconst slideExist = document.querySelector('[data-home=\"slide\"]');\r\nif (slideExist) {\r\n  const slide = new _modulos_slide_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".slide\", \".slide-wrapper\");\r\n  slide.init();\r\n  slide.addArrow(\".prev_btn\", \".next_btn\");\r\n  slide.addControl();\r\n}\r\n\r\nconst cronoExist = document.querySelector('[data-home=\"crono\"]');\r\nif (cronoExist) {\r\n  const timer = new _modulos_regressive_timer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n    \".chrono-galeria .product-list .product-item\"\r\n  );\r\n  timer.init();\r\n}\r\nconst infoProductExist = document.querySelector(\".product-info\");\r\nif (infoProductExist) {\r\n  const swatches = new _modulos_category_swatches_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n    '[data-cat=\"attributes\"]',\r\n    \".variations select\"\r\n  );\r\n  swatches.init();\r\n\r\n  const idImage = \"#pa_imagem\";\r\n  const selectImgExist = document.querySelector(idImage);\r\n  if (selectImgExist) {\r\n    const swatchesImg = new _modulos_image_swatches_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-cat=\"imgs\"]', idImage);\r\n    swatchesImg.init();\r\n  }\r\n\r\n  const qtyValues = new _modulos_increment_qty_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\".qty\");\r\n  qtyValues.init();\r\n}\r\n\r\nconst galleryExist = document.querySelector(\".product-gallery\");\r\nif (galleryExist) {\r\n  const galleryChange = new _modulos_change_main_gallery_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\r\n    \"[data-gallery=gallery-list]\",\r\n    \"[data-cat=imgs-box]\",\r\n    \"[data-gallery=gallery-main]\"\r\n  );\r\n  galleryChange.init();\r\n}\r\n\r\nconst slideGallery = document.querySelector(\".product-gallery__list\");\r\nif (slideGallery) {\r\n  const gallerySlide = new _modulos_slide_gallery_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\r\n    \".gallery-slide\",\r\n    \".product-gallery__list .prev\",\r\n    \".product-gallery__list .next\"\r\n  );\r\n  gallerySlide.init();\r\n}\r\n\r\nconst statusExist = document.querySelector(\".order-status\");\r\nif (statusExist) {\r\n  const colorChange = new _modulos_change_color_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\".order-status\");\r\n  colorChange.init();\r\n}\r\nconst trackExist = document.querySelector(\".wc-correios-tracking__description\");\r\nif (trackExist) {\r\n  const buttonCopy = new _modulos_copy_btn_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\r\n    \".wc-correios-tracking__description\",\r\n    \".wc-correios-tracking__description strong\"\r\n  );\r\n  buttonCopy.init();\r\n}\r\n\n\n//# sourceURL=webpack://meu_foot/./js/script.js?");

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