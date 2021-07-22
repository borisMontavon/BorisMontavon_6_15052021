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

/***/ "./src/js/components/factory.js":
/*!**************************************!*\
  !*** ./src/js/components/factory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ElementsFactory)\n/* harmony export */ });\nclass ElementsFactory {\r\n    constructor() {\r\n        this.elements = [];\r\n    }\r\n\r\n    addElement(element) {\r\n        this.elements.push(element);\r\n    }\r\n\r\n    renderElements() {\r\n        this.elements.forEach((element) => {\r\n            element.render();\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/factory.js?");

/***/ }),

/***/ "./src/js/components/photograph-container.js":
/*!***************************************************!*\
  !*** ./src/js/components/photograph-container.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographContainer)\n/* harmony export */ });\n/* harmony import */ var _photograph_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photograph-list */ \"./src/js/components/photograph-list.js\");\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags */ \"./src/js/components/tags.js\");\n\r\n\r\n\r\nclass PhotographContainer {\r\n    constructor(photographers, tagsList) {\r\n        this.tagsSelected = [];\r\n\r\n        this.tags = new _tags__WEBPACK_IMPORTED_MODULE_1__.default(tagsList, \"tags\", this);\r\n\r\n        this.photographers = [];\r\n        \r\n        photographers.forEach((photographer) => {\r\n            this.photographers.push(new _photograph_list__WEBPACK_IMPORTED_MODULE_0__.default(photographer, this));\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const tagsParentElement = document.getElementById(\"tags\");\r\n\r\n        tagsParentElement.innerHTML = \"\";\r\n\r\n        this.tags.render();\r\n        \r\n        const photographersParentElement = document.getElementById(\"photographers\");\r\n\r\n        photographersParentElement.innerHTML = \"\";\r\n\r\n        this.photographers.forEach((photograph) => {\r\n            if (photograph.state.display) {\r\n                photograph.render();\r\n            } \r\n        });\r\n    }\r\n\r\n    getElementsToFilter() {\r\n        return this.photographers;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/photograph-container.js?");

/***/ }),

/***/ "./src/js/components/photograph-list.js":
/*!**********************************************!*\
  !*** ./src/js/components/photograph-list.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographList)\n/* harmony export */ });\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./src/js/components/tags.js\");\n\r\n\r\nclass PhotographList {\r\n    constructor(photograph, photographContainer) {\r\n        this.state = {\r\n            name: photograph.name,\r\n            id: photograph.id,\r\n            city: photograph.city,\r\n            country: photograph.country,\r\n            tags: photograph.tags,\r\n            tagline: photograph.tagline,\r\n            price: photograph.price,\r\n            portrait: photograph.portrait,\r\n            display: true\r\n        };\r\n    \r\n        this.linkClass = \"photographer-link\";\r\n        this.portraitClass = \"photographer-portrait\";\r\n        this.titleClass = \"photographer-name\";\r\n        this.locationClass = \"photographer-city-country\";\r\n        this.taglineClass = \"photographer-tagline\";\r\n        this.priceClass = \"photographer-price\";\r\n        this.tagContainerClass = \"tag-container\";\r\n\r\n        this.photographContainer = photographContainer;\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(\"photographers\");\r\n        const containerElement = document.createElement(\"div\");\r\n\r\n        containerElement.setAttribute(\"id\", `photographer-${this.state.id}`);\r\n        \r\n        parentElement.appendChild(containerElement);\r\n\r\n        const linkElement = document.createElement(\"a\");\r\n\r\n        linkElement.setAttribute(\"href\", `photographer.html?id=${this.state.id}`);\r\n        linkElement.setAttribute(\"class\", this.linkClass);\r\n        linkElement.setAttribute(\"aria-label\", `Lien vers la page du photographe ${this.state.name}`);\r\n        linkElement.setAttribute(\"tabindex\", \"0\");\r\n\r\n        linkElement.appendChild(this.createPortraitElement());\r\n        linkElement.appendChild(this.createTitleElement());\r\n\r\n        containerElement.appendChild(linkElement);\r\n        containerElement.appendChild(this.createLocationElement());\r\n        containerElement.appendChild(this.createTaglineElement());\r\n        containerElement.appendChild(this.createPriceElement());\r\n        containerElement.appendChild(this.createTagContainerElement());\r\n\r\n        new _tags__WEBPACK_IMPORTED_MODULE_0__.default(this.state.tags, `tag-container-${this.state.id}`, this.photographContainer).render();\r\n    }\r\n    \r\n    createPortraitElement() {\r\n        const portraitElement = document.createElement(\"img\");\r\n\r\n        portraitElement.setAttribute(\"src\", `assets/photographer-ids/${this.state.portrait}`);\r\n        portraitElement.setAttribute(\"alt\", this.state.name);\r\n        portraitElement.setAttribute(\"class\", this.portraitClass);\r\n\r\n        return portraitElement;\r\n    }\r\n\r\n    createTitleElement() {\r\n        const titleElement = document.createElement(\"h2\");\r\n\r\n        titleElement.setAttribute(\"class\", this.titleClass);\r\n        titleElement.innerHTML = this.state.name;\r\n\r\n        return titleElement;\r\n    }\r\n\r\n    createLocationElement() {\r\n        const locationElement = document.createElement(\"p\");\r\n\r\n        locationElement.setAttribute(\"class\", this.locationClass);\r\n        locationElement.innerHTML = `${this.state.city}, ${this.state.country}`;\r\n\r\n        return locationElement;\r\n    }\r\n\r\n    createTaglineElement() {\r\n        const taglineElement = document.createElement(\"p\");\r\n\r\n        taglineElement.setAttribute(\"class\", this.taglineClass);\r\n        taglineElement.innerHTML = this.state.tagline;\r\n\r\n        return taglineElement;\r\n    }\r\n\r\n    createPriceElement() {\r\n        const priceElement = document.createElement(\"p\");\r\n\r\n        priceElement.setAttribute(\"class\", this.priceClass);\r\n        priceElement.innerHTML = `${this.state.price}€/jour`;\r\n        \r\n        return priceElement;\r\n    }\r\n\r\n    createTagContainerElement() {\r\n        const tagContainerElement = document.createElement(\"div\");\r\n\r\n        tagContainerElement.setAttribute(\"class\", this.tagContainerClass);\r\n        tagContainerElement.setAttribute(\"id\", `tag-container-${this.state.id}`);\r\n\r\n        return tagContainerElement;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/photograph-list.js?");

/***/ }),

/***/ "./src/js/components/tags.js":
/*!***********************************!*\
  !*** ./src/js/components/tags.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tags)\n/* harmony export */ });\nclass Tags {\r\n    constructor(tags, parentId, container) {\r\n        this.tags = tags;\r\n        this.parentId = parentId;\r\n        this.container = container;\r\n    }\r\n\r\n    render() {\r\n        // Get parent element in which we will insert new HTML elements with values extracted from json's data\r\n        const parentElement = document.getElementById(this.parentId);\r\n\r\n        // Get elements from json\r\n        this.tags.forEach((tag) => {\r\n            // Add it to the DOM\r\n            parentElement.appendChild(this.createTag(tag));\r\n        });\r\n    }\r\n\r\n    createTag(tag) {\r\n        // Creation of a new HTML element\r\n        const span = document.createElement(\"span\");\r\n\r\n        // Attributes update (class, aria-*, ...)\r\n        span.setAttribute(\"class\", \"tag\");\r\n        span.setAttribute(\"aria-label\", `Tag ${tag}`);\r\n        span.setAttribute(\"tabindex\", \"0\");\r\n        \r\n        if (this.container.tagsSelected.includes(tag)) {\r\n            span.classList.add(\"tag-selected\");\r\n        }\r\n\r\n        // innerHtml value update\r\n        span.innerHTML = `# ${tag}`;\r\n\r\n        span.addEventListener(\"click\", () => {\r\n            span.classList.toggle(\"tag-selected\");\r\n\r\n            if (span.classList.contains(\"tag-selected\")) {\r\n                this.container.tagsSelected.push(tag);\r\n            } else {\r\n                const tagClicked = this.container.tagsSelected.indexOf(tag);\r\n\r\n                if (tagClicked > -1) {\r\n                    this.container.tagsSelected.splice(tagClicked, 1);\r\n                }\r\n            }\r\n\r\n            this.elementHasSelectedTag(this.container.getElementsToFilter(), this.container.tagsSelected);\r\n\r\n            this.container.render();\r\n        });\r\n\r\n        span.addEventListener(\"keydown\", (event) => {\r\n            if (event.key === \"Enter\") {\r\n                event.preventDefault();\r\n\r\n                span.classList.toggle(\"tag-selected\");\r\n\r\n                if (span.classList.contains(\"tag-selected\")) {\r\n                    this.container.tagsSelected.push(tag);\r\n                } else {\r\n                    const tagClicked = this.container.tagsSelected.indexOf(tag);\r\n\r\n                    if (tagClicked > -1) {\r\n                        this.container.tagsSelected.splice(tagClicked, 1);\r\n                    }\r\n                }\r\n\r\n                this.elementHasSelectedTag(this.container.getElementsToFilter(), this.container.tagsSelected);\r\n\r\n                this.container.render();\r\n            }\r\n        });\r\n\r\n        return span;\r\n    }\r\n\r\n    elementHasSelectedTag(elements, tags) {\r\n        if (tags.length === 0) {\r\n            elements.forEach((element) => {\r\n                element.state.display = true;\r\n            });\r\n        } else {\r\n            elements.forEach((element) => {\r\n                const found = element.state.tags.some(tag => tags.includes(tag));\r\n\r\n                if (found) {\r\n                    element.state.display = true;\r\n                } else {\r\n                    element.state.display = false;\r\n                }\r\n            });\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/tags.js?");

/***/ }),

/***/ "./src/js/homepage.js":
/*!****************************!*\
  !*** ./src/js/homepage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/factory */ \"./src/js/components/factory.js\");\n/* harmony import */ var _components_photograph_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/photograph-container */ \"./src/js/components/photograph-container.js\");\n\r\n\r\n\r\nconst factory = new _components_factory__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\nconst sortTags = (photographers) => {\r\n    let tagsArrays = [];\r\n\r\n    photographers.map((photographer) => {\r\n        tagsArrays.push(photographer.tags);\r\n    });\r\n\r\n    const tagsArray = Array.prototype.concat.apply([], tagsArrays);\r\n\r\n    return [...new Set(tagsArray)];\r\n};\r\n\r\n// Photographers' data fetch from json\r\nconst getData = async (url) => {\r\n    const response = await fetch(url);\r\n\r\n    return response.json();\r\n};\r\n\r\n// Home page initialization with json's data\r\nconst initializeHomepage = async () => {\r\n    const data = await getData(\"assets/data.json\");\r\n    const photographContainer = new _components_photograph_container__WEBPACK_IMPORTED_MODULE_1__.default(data.photographers, sortTags(data.photographers));\r\n\r\n    factory.addElement(photographContainer);\r\n\r\n    factory.renderElements();\r\n};\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    initializeHomepage();\r\n});\r\n\r\n// Top button\r\n$(window).scroll(function() {\r\n\tconst height = $(window).scrollTop();\r\n\t\r\n\tif (height > 150) {\r\n\t\t$(\"#toTopButton\").fadeIn();\r\n\t} else {\r\n\t\t$(\"#toTopButton\").fadeOut();\r\n\t}\r\n});\r\n\t\r\n$(document).ready(function() {\r\n\t$(\"#toTopButton\").click(function(event) {\r\n\t\tevent.preventDefault();\r\n\t\t$(\"html, body\").animate({ scrollTop: 0}, \"slow\");\r\n\t\treturn false;\r\n\t});\r\n});\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/homepage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/homepage.js");
/******/ 	
/******/ })()
;