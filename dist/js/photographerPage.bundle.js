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

/***/ "./src/js/components/photographerSection.js":
/*!**************************************************!*\
  !*** ./src/js/components/photographerSection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographerSection)\n/* harmony export */ });\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./src/js/components/tags.js\");\n\r\n\r\nclass PhotographerSection {\r\n    constructor(photograph) {\r\n        this.state = {\r\n            name: photograph.name,\r\n            id: photograph.id,\r\n            city: photograph.city,\r\n            country: photograph.country,\r\n            tags: photograph.tags,\r\n            tagline: photograph.tagline,\r\n            portrait: photograph.portrait\r\n        };\r\n\r\n        this.containerClass = \"photographer-container\";\r\n        this.photographerInfoClass = \"photographer-info\";\r\n        this.titleClass = \"photographer-name\";\r\n        this.locationClass = \"photographer-city-country\";\r\n        this.taglineClass = \"photographer-tagline\";\r\n        this.tagContainerClass = \"tag-container\";\r\n        this.portraitClass = \"photographer-portrait\";\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(\"photographer-section\");\r\n        const photographerInfo = document.createElement(\"div\");\r\n\r\n        photographerInfo.setAttribute(\"class\", this.photographerInfoClass);\r\n\r\n        photographerInfo.appendChild(this.createTitleElement());\r\n        photographerInfo.appendChild(this.createLocationElement());\r\n        photographerInfo.appendChild(this.createTaglineElement());\r\n        photographerInfo.appendChild(this.createTagContainerElement());\r\n\r\n        parentElement.appendChild(photographerInfo);\r\n        // parentElement.appendChild(contact-button);\r\n        parentElement.appendChild(this.createPortraitElement());\r\n\r\n        new _tags__WEBPACK_IMPORTED_MODULE_0__.default(this.state.tags, \"tag-container-\" + this.state.id).render();\r\n    }\r\n\r\n    createTitleElement() {\r\n        const titleElement = document.createElement(\"h1\");\r\n\r\n        titleElement.setAttribute(\"class\", this.titleClass);\r\n        titleElement.innerHTML = this.state.name;\r\n\r\n        return titleElement;\r\n    }\r\n\r\n    createLocationElement() {\r\n        const locationElement = document.createElement(\"p\");\r\n\r\n        locationElement.setAttribute(\"class\", this.locationClass);\r\n        locationElement.innerHTML = this.state.city + \", \" + this.state.country;\r\n\r\n        return locationElement;\r\n    }\r\n\r\n    createTaglineElement() {\r\n        const taglineElement = document.createElement(\"p\");\r\n\r\n        taglineElement.setAttribute(\"class\", this.taglineClass);\r\n        taglineElement.innerHTML = this.state.tagline;\r\n\r\n        return taglineElement;\r\n    }\r\n\r\n    createTagContainerElement() {\r\n        const tagContainerElement = document.createElement(\"div\");\r\n\r\n        tagContainerElement.setAttribute(\"class\", this.tagContainerClass);\r\n        tagContainerElement.setAttribute(\"id\", \"tag-container-\" + this.state.id);\r\n\r\n        return tagContainerElement;\r\n    }\r\n\r\n    createPortraitElement() {\r\n        const portraitElement = document.createElement(\"img\");\r\n\r\n        portraitElement.setAttribute(\"src\", \"./assets/photographer-ids/\" + this.state.portrait);\r\n        portraitElement.setAttribute(\"alt\", this.state.name);\r\n        portraitElement.setAttribute(\"class\", this.portraitClass);\r\n\r\n        return portraitElement;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/photographerSection.js?");

/***/ }),

/***/ "./src/js/components/tags.js":
/*!***********************************!*\
  !*** ./src/js/components/tags.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tags)\n/* harmony export */ });\n// Classe permettant d'afficher une liste des tags définis par le paramètre \"tags\" dans le conteneur avec l'id défini par le paramètre \"parentId\"\r\nclass Tags {\r\n    constructor(tags, parentId) {\r\n        this.tags = tags;\r\n        this.parentId = parentId;\r\n    }\r\n\r\n    render() {\r\n        // Récupération de l'élément parent dans lequel on va insérer de nouveaux éléments html paramétrés dans le json\r\n        const parentElement = document.getElementById(this.parentId);\r\n\r\n        // Parcours des éléments issus du json\r\n        this.tags.forEach((tag) => {\r\n            // Ajout du nouvel élément dans le DOM\r\n            parentElement.appendChild(this.createTag(tag));\r\n        });\r\n    }\r\n\r\n    createTag(tag) {\r\n        // Création du nouvel élément html\r\n        const span = document.createElement(\"span\");\r\n\r\n        // Mise à jour des attributs (class, aria-*, ...)\r\n        span.setAttribute(\"class\", \"tag\");\r\n        span.setAttribute(\"aria-label\", \"Tag \" + tag);\r\n\r\n        // Mise à jour du innerHtml\r\n        span.innerHTML = \"#\" + tag;\r\n\r\n        return span;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/tags.js?");

/***/ }),

/***/ "./src/js/photographerPage.js":
/*!************************************!*\
  !*** ./src/js/photographerPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/factory */ \"./src/js/components/factory.js\");\n/* harmony import */ var _components_photographerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/photographerSection */ \"./src/js/components/photographerSection.js\");\n\r\n\r\n\r\n// Get ID of the current photographer to get associate data\r\nconst urlParams = new URLSearchParams(window.location.search);\r\nconst currrentId = urlParams.get('id');\r\n\r\nconst factory = new _components_factory__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n// Photographers' data fetch\r\nconst getData = async (url) => {\r\n    const response = await fetch(url);\r\n\r\n    return response.json();\r\n};\r\n\r\n// Photographer page initialization with Json's data\r\nconst initializePhotographerPage = async () => {\r\n    const data = await getData(\"../../assets/data.json\");\r\n\r\n    const photographerData = data.photographers.find((photographer) => {\r\n        return photographer.id == currrentId;\r\n    });\r\n\r\n    console.log({photographerData});\r\n\r\n    const photographerImages = data.media.filter((image) => {\r\n        return image.photographerId == currrentId;\r\n    });\r\n\r\n    factory.addElement(new _components_photographerSection__WEBPACK_IMPORTED_MODULE_1__.default(photographerData));\r\n\r\n    factory.renderElements();\r\n};\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    initializePhotographerPage();\r\n})\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/photographerPage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/photographerPage.js");
/******/ 	
/******/ })()
;