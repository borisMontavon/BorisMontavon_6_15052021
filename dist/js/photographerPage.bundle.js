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

/***/ "./src/js/components/contact-button.js":
/*!*********************************************!*\
  !*** ./src/js/components/contact-button.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactButton)\n/* harmony export */ });\nclass ContactButton {\r\n    constructor() {\r\n        this.contactButtonClass = \"contact-button\";\r\n    }\r\n\r\n    render() {\r\n        const desktopParentElement = document.getElementById(\"photographer-section\");\r\n        const mobileParentElement = document.getElementsByTagName(\"main\")[0];\r\n\r\n        const desktopButton = document.createElement(\"button\");\r\n\r\n        desktopButton.setAttribute(\"class\", this.contactButtonClass);\r\n        desktopButton.setAttribute(\"id\", \"desktop-contact-button\");\r\n        desktopButton.innerHTML = \"Contactez-moi\";\r\n\r\n        desktopParentElement.appendChild(desktopButton);\r\n\r\n        const mobileButton = document.createElement(\"button\");\r\n\r\n        mobileButton.setAttribute(\"class\", this.contactButtonClass);\r\n        mobileButton.setAttribute(\"id\", \"mobile-contact-button\");\r\n        mobileButton.innerHTML = \"Contactez-moi\";\r\n\r\n        mobileParentElement.appendChild(mobileButton);\r\n        this.handleOpenForm();\r\n    }\r\n\r\n    handleOpenForm() {\r\n        const contactButtons = document.getElementsByClassName(this.contactButtonClass);\r\n\r\n        Array.prototype.forEach.call(contactButtons, (element) => {\r\n            element.addEventListener(\"click\", () => {\r\n                const form = document.getElementById(\"form-background\");\r\n\r\n                form.style.display = \"flex\";\r\n            });\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/contact-button.js?");

/***/ }),

/***/ "./src/js/components/factory.js":
/*!**************************************!*\
  !*** ./src/js/components/factory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ElementsFactory)\n/* harmony export */ });\nclass ElementsFactory {\r\n    constructor() {\r\n        this.elements = [];\r\n    }\r\n\r\n    addElement(element) {\r\n        this.elements.push(element);\r\n    }\r\n\r\n    renderElements() {\r\n        this.elements.forEach((element) => {\r\n            element.render();\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/factory.js?");

/***/ }),

/***/ "./src/js/components/like-button.js":
/*!******************************************!*\
  !*** ./src/js/components/like-button.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LikeButton)\n/* harmony export */ });\n// Like button\r\n\r\nclass LikeButton {\r\n    constructor(mediaId, likes, parentId) {\r\n        this.mediaId = mediaId;\r\n        this.likes = likes;\r\n        this.parentId = parentId;\r\n\r\n        this.divClass = \"like-button\";\r\n        this.iconClass = \"fas fa-heart\";\r\n        this.likeButtonId = `like-${this.mediaId}`;\r\n        this.likeCounterId = `like-counter-${this.mediaId}`;\r\n        this.liked = false;\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(this.parentId);\r\n\r\n        const div = document.createElement(\"div\");\r\n\r\n        div.setAttribute(\"class\", this.divClass);\r\n\r\n        const button = document.createElement(\"button\");\r\n\r\n        button.setAttribute(\"id\", this.likeButtonId);\r\n        button.appendChild(this.createIconElement());\r\n\r\n        div.appendChild(this.createNumberOfLikesElement());\r\n        div.appendChild(button);\r\n\r\n        parentElement.appendChild(div);\r\n\r\n        this.toggleLikeButton();\r\n    }\r\n\r\n    createNumberOfLikesElement() {\r\n        const p = document.createElement(\"p\");\r\n\r\n        p.setAttribute(\"id\", this.likeCounterId);\r\n\r\n        p.innerHTML = this.likes;\r\n\r\n        return p;\r\n    }\r\n\r\n    createIconElement() {\r\n        const icon = document.createElement(\"i\");\r\n\r\n        icon.setAttribute(\"class\", this.iconClass);\r\n\r\n        return icon;\r\n    }\r\n\r\n    toggleLikeButton() {\r\n        const button = document.getElementById(this.likeButtonId);\r\n        const likeCounter = document.getElementById(this.likeCounterId);\r\n\r\n        button.addEventListener(\"click\", () => {\r\n            button.setAttribute(\"disabled\", \"true\");\r\n            \r\n            if (this.liked === false) {\r\n                this.likes++;\r\n            } else {\r\n                this.likes--;\r\n            }\r\n            \r\n            this.liked = !this.liked;\r\n\r\n            likeCounter.innerHTML = this.likes;\r\n\r\n            button.removeAttribute(\"disabled\");\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/like-button.js?");

/***/ }),

/***/ "./src/js/components/media.js":
/*!************************************!*\
  !*** ./src/js/components/media.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Media)\n/* harmony export */ });\n/* harmony import */ var _like_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-button */ \"./src/js/components/like-button.js\");\n\r\n\r\nclass Media {\r\n    constructor(media) {\r\n        this.state = {\r\n            id: media.id,\r\n            photographerId: media.photographerId,\r\n            title: media.title,\r\n            image: media.image,\r\n            tags: media.tags,\r\n            likes: media.likes,\r\n            date: media.date,\r\n            price: media.price\r\n        }\r\n\r\n        this.imageContainerClass = \"image-container\";\r\n        this.imageClass = \"image\";\r\n        this.infosContainerClass = \"image-infos-container\";\r\n        this.infosContainerId = `image-infos-${this.state.id}`;\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(\"gallery-section\");\r\n        const imageContainer = document.createElement(\"div\");\r\n\r\n        imageContainer.setAttribute(\"class\", this.imageContainerClass);\r\n\r\n        const infosContainer = document.createElement(\"div\");\r\n\r\n        infosContainer.setAttribute(\"class\", this.infosContainerClass);\r\n        infosContainer.setAttribute(\"id\", this.infosContainerId);\r\n\r\n        infosContainer.appendChild(this.createTitleElement());\r\n\r\n        imageContainer.appendChild(this.createImageElement());\r\n        imageContainer.appendChild(infosContainer);\r\n\r\n        parentElement.appendChild(imageContainer);\r\n        \r\n        new _like_button__WEBPACK_IMPORTED_MODULE_0__.default(this.state.id, this.state.likes, this.infosContainerId).render();\r\n    }\r\n\r\n    createImageElement() {\r\n        const imageElement = document.createElement(\"img\");\r\n\r\n        imageElement.setAttribute(\"src\", `../../assets/photographer/${this.state.photographerId}/${this.state.image}`);\r\n        imageElement.setAttribute(\"class\", this.imageClass);\r\n        imageElement.setAttribute(\"alt\", this.state.title);\r\n\r\n        return imageElement;\r\n    }\r\n\r\n    createTitleElement() {\r\n        const titleElement = document.createElement(\"h3\");\r\n\r\n        titleElement.innerHTML = this.state.title;\r\n\r\n        return titleElement;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/media.js?");

/***/ }),

/***/ "./src/js/components/photographerSection.js":
/*!**************************************************!*\
  !*** ./src/js/components/photographerSection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographerSection)\n/* harmony export */ });\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./src/js/components/tags.js\");\n/* harmony import */ var _contact_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-button */ \"./src/js/components/contact-button.js\");\n\r\n\r\n\r\nclass PhotographerSection {\r\n    constructor(photograph) {\r\n        this.state = {\r\n            name: photograph.name,\r\n            id: photograph.id,\r\n            city: photograph.city,\r\n            country: photograph.country,\r\n            tags: photograph.tags,\r\n            tagline: photograph.tagline,\r\n            portrait: photograph.portrait\r\n        };\r\n\r\n        this.containerClass = \"photographer-container\";\r\n        this.photographerInfoClass = \"photographer-info\";\r\n        this.titleClass = \"photographer-name\";\r\n        this.locationClass = \"photographer-city-country\";\r\n        this.taglineClass = \"photographer-tagline\";\r\n        this.tagContainerClass = \"tag-container\";\r\n        this.portraitClass = \"photographer-portrait\";\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(\"photographer-section\");\r\n        const photographerInfo = document.createElement(\"div\");\r\n\r\n        photographerInfo.setAttribute(\"class\", this.photographerInfoClass);\r\n\r\n        photographerInfo.appendChild(this.createTitleElement());\r\n        photographerInfo.appendChild(this.createLocationElement());\r\n        photographerInfo.appendChild(this.createTaglineElement());\r\n        photographerInfo.appendChild(this.createTagContainerElement());\r\n\r\n        parentElement.appendChild(photographerInfo);\r\n        parentElement.appendChild(this.createPortraitElement());\r\n\r\n        new _tags__WEBPACK_IMPORTED_MODULE_0__.default(this.state.tags, `tag-container-${this.state.id}`).render();\r\n\r\n        new _contact_button__WEBPACK_IMPORTED_MODULE_1__.default().render();\r\n    }\r\n\r\n    createTitleElement() {\r\n        const titleElement = document.createElement(\"h1\");\r\n\r\n        titleElement.setAttribute(\"class\", this.titleClass);\r\n        titleElement.innerHTML = this.state.name;\r\n\r\n        return titleElement;\r\n    }\r\n\r\n    createLocationElement() {\r\n        const locationElement = document.createElement(\"p\");\r\n\r\n        locationElement.setAttribute(\"class\", this.locationClass);\r\n        locationElement.innerHTML = `${this.state.city}, ${this.state.country}`;\r\n\r\n        return locationElement;\r\n    }\r\n\r\n    createTaglineElement() {\r\n        const taglineElement = document.createElement(\"p\");\r\n\r\n        taglineElement.setAttribute(\"class\", this.taglineClass);\r\n        taglineElement.innerHTML = this.state.tagline;\r\n\r\n        return taglineElement;\r\n    }\r\n\r\n    createTagContainerElement() {\r\n        const tagContainerElement = document.createElement(\"div\");\r\n\r\n        tagContainerElement.setAttribute(\"class\", this.tagContainerClass);\r\n        tagContainerElement.setAttribute(\"id\", `tag-container-${this.state.id}`);\r\n\r\n        return tagContainerElement;\r\n    }\r\n\r\n    createPortraitElement() {\r\n        const portraitElement = document.createElement(\"img\");\r\n\r\n        portraitElement.setAttribute(\"src\", `./assets/photographer-ids/${this.state.portrait}`);\r\n        portraitElement.setAttribute(\"alt\", this.state.name);\r\n        portraitElement.setAttribute(\"class\", this.portraitClass);\r\n\r\n        return portraitElement;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/photographerSection.js?");

/***/ }),

/***/ "./src/js/components/tags.js":
/*!***********************************!*\
  !*** ./src/js/components/tags.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tags)\n/* harmony export */ });\n// Classe permettant d'afficher une liste des tags définis par le paramètre \"tags\" dans le conteneur avec l'id défini par le paramètre \"parentId\"\r\nclass Tags {\r\n    constructor(tags, parentId) {\r\n        this.tags = tags;\r\n        this.parentId = parentId;\r\n    }\r\n\r\n    render() {\r\n        // Récupération de l'élément parent dans lequel on va insérer de nouveaux éléments html paramétrés dans le json\r\n        const parentElement = document.getElementById(this.parentId);\r\n\r\n        // Parcours des éléments issus du json\r\n        this.tags.forEach((tag) => {\r\n            // Ajout du nouvel élément dans le DOM\r\n            parentElement.appendChild(this.createTag(tag));\r\n        });\r\n    }\r\n\r\n    createTag(tag) {\r\n        // Création du nouvel élément html\r\n        const span = document.createElement(\"span\");\r\n\r\n        // Mise à jour des attributs (class, aria-*, ...)\r\n        span.setAttribute(\"class\", \"tag\");\r\n        span.setAttribute(\"aria-label\", `Tag ${tag}`);\r\n\r\n        // Mise à jour du innerHtml\r\n        span.innerHTML = `# ${tag}`;\r\n\r\n        return span;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/tags.js?");

/***/ }),

/***/ "./src/js/photographerPage.js":
/*!************************************!*\
  !*** ./src/js/photographerPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/factory */ \"./src/js/components/factory.js\");\n/* harmony import */ var _components_photographerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/photographerSection */ \"./src/js/components/photographerSection.js\");\n/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/media */ \"./src/js/components/media.js\");\n\r\n\r\n\r\n\r\n// Get ID of the current photographer to get associate data\r\nconst urlParams = new URLSearchParams(window.location.search);\r\nconst currrentId = urlParams.get('id');\r\n\r\nconst factory = new _components_factory__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n// Photographers' data fetch\r\nconst getData = async (url) => {\r\n    const response = await fetch(url);\r\n\r\n    return response.json();\r\n};\r\n\r\n// Photographer page initialization with Json's data\r\nconst initializePhotographerPage = async () => {\r\n    const data = await getData(\"../../assets/data.json\");\r\n\r\n    const photographerData = data.photographers.find((photographer) => {\r\n        return photographer.id == currrentId;\r\n    });\r\n\r\n    const photographerImages = data.media.filter((image) => {\r\n        return image.photographerId == currrentId;\r\n    });\r\n    console.log(photographerImages);\r\n\r\n    factory.addElement(new _components_photographerSection__WEBPACK_IMPORTED_MODULE_1__.default(photographerData));\r\n    \r\n    photographerImages.forEach((image) => {\r\n        factory.addElement(new _components_media__WEBPACK_IMPORTED_MODULE_2__.default(image));\r\n    });\r\n\r\n    factory.renderElements();\r\n};\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    initializePhotographerPage();\r\n})\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/photographerPage.js?");

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