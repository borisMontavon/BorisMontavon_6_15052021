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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactButton)\n/* harmony export */ });\n/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validation */ \"./src/js/components/form-validation.js\");\n\r\n\r\nclass ContactButton {\r\n    constructor() {\r\n        this.contactButtonClass = \"contact-button\";\r\n        this.accessibilityButton = \"Contactez-moi\"\r\n    }\r\n\r\n    render() {\r\n        const desktopParentElement = document.getElementById(\"photographer-section\");\r\n        const mobileParentElement = document.getElementsByTagName(\"main\")[0];\r\n\r\n        const desktopButton = document.createElement(\"button\");\r\n\r\n        desktopButton.setAttribute(\"class\", this.contactButtonClass);\r\n        desktopButton.setAttribute(\"id\", \"desktop-contact-button\");\r\n        desktopButton.setAttribute(\"aria-label\", this.accessibilityButton);\r\n        desktopButton.innerHTML = \"Contactez-moi\";\r\n\r\n        desktopParentElement.appendChild(desktopButton);\r\n\r\n        const mobileButton = document.createElement(\"button\");\r\n\r\n        mobileButton.setAttribute(\"class\", this.contactButtonClass);\r\n        mobileButton.setAttribute(\"id\", \"mobile-contact-button\");\r\n        mobileButton.setAttribute(\"aria-label\", this.accessibilityButton);\r\n        mobileButton.innerHTML = \"Contactez-moi\";\r\n\r\n        mobileParentElement.appendChild(mobileButton);\r\n        this.handleOpenForm();\r\n    }\r\n\r\n    handleOpenForm() {\r\n        const contactButtons = document.getElementsByClassName(this.contactButtonClass);\r\n\r\n        Array.prototype.forEach.call(contactButtons, (element) => {\r\n            element.addEventListener(\"click\", () => {\r\n                const form = document.getElementById(\"form-background\");\r\n                const body = document.body;\r\n\r\n                form.style.display = \"block\";\r\n                body.classList.toggle(\"overflow\");\r\n\r\n                new _form_validation__WEBPACK_IMPORTED_MODULE_0__.default().isFormFieldsValid();\r\n            });\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/contact-button.js?");

/***/ }),

/***/ "./src/js/components/factory.js":
/*!**************************************!*\
  !*** ./src/js/components/factory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ElementsFactory)\n/* harmony export */ });\nclass ElementsFactory {\r\n    constructor() {\r\n        this.elements = [];\r\n    }\r\n\r\n    addElement(element) {\r\n        this.elements.push(element);\r\n    }\r\n\r\n    renderElements() {\r\n        this.elements.forEach((element) => {\r\n            element.render();\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/factory.js?");

/***/ }),

/***/ "./src/js/components/form-validation.js":
/*!**********************************************!*\
  !*** ./src/js/components/form-validation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormValidation)\n/* harmony export */ });\nclass FormValidation {\r\n    // Validate first/last name inputs\r\n    isFirstNameValid() {\r\n        const firstNameValue = document.getElementById(\"fname\").value;\r\n        const firstNameSpan = document.getElementById(\"fnameSpan\");\r\n        const hasNumber = /\\d/.test(firstNameValue);\r\n\r\n        if (hasNumber || firstNameValue.length < 2) {\r\n            firstNameSpan.style.display = \"block\";\r\n\r\n            return false;\r\n        }\r\n        \r\n        firstNameSpan.style.display = \"none\";\r\n\r\n        return true;\r\n    };\r\n\r\n    isLastNameValid() {\r\n        const lastNameValue = document.getElementById(\"lname\").value;\r\n        const lastNameSpan = document.getElementById(\"lnameSpan\");\r\n        const hasNumber = /\\d/.test(lastNameValue);\r\n\r\n        if (hasNumber || lastNameValue.length < 2) {\r\n            lastNameSpan.style.display = \"block\";\r\n\r\n            return false;\r\n\r\n        }\r\n        \r\n        lastNameSpan.style.display = \"none\";\r\n\r\n        return true;\r\n    };\r\n\r\n    // Validate email using regex\r\n    isEmailValid() {\r\n        const emailValue = document.getElementById(\"mail\").value;\r\n        const emailSpan = document.getElementById(\"mailSpan\");\r\n        const regEx = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n        const emailAdressTest = regEx.test(emailValue);\r\n\r\n        if (!emailAdressTest) {\r\n            emailSpan.style.display = \"block\";\r\n\r\n            return false;\r\n\r\n        }\r\n        \r\n        emailSpan.style.display = \"none\";\r\n\r\n        return true;\r\n    };\r\n\r\n    // Validate textarea\r\n    isMessageValid() {\r\n        const messageValue = document.getElementById(\"message\").value;\r\n        const messageSpan = document.getElementById(\"messageSpan\");\r\n\r\n        if (messageValue < 80 || messageValue > 500) {\r\n            messageSpan.style.display = \"block\";\r\n\r\n            return false;\r\n        }\r\n\r\n        messageSpan.style.display = \"none\";\r\n\r\n        return true;\r\n    }\r\n\r\n    validateForm() {\r\n        var isFormValid = true;\r\n\r\n        if (!this.isFirstNameValid()) {\r\n            isFormValid = false;\r\n        }\r\n        if (!this.isLastNameValid())\t{\r\n            isFormValid = false;\r\n        }\r\n        if (!this.isEmailValid()) {\r\n            isFormValid = false;\r\n        }\r\n        if (!this.isMessageValid()) {\r\n            isFormValid = false;\r\n        }\r\n\r\n        if (isFormValid) {\r\n            document.getElementById(\"contact-form\").reset();\r\n            document.getElementById(\"form-background\").style.display = \"none\";\r\n            document.body.classList.toggle(\"overflow\");\r\n        }\r\n    }\r\n\r\n    // Submit and check if inputs are valids\r\n    isFormFieldsValid() {\r\n        const btnSubmit = document.getElementById(\"btnSubmit\");\r\n\r\n        btnSubmit.addEventListener(\"click\", () => { this.validateForm() });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/form-validation.js?");

/***/ }),

/***/ "./src/js/components/like-button.js":
/*!******************************************!*\
  !*** ./src/js/components/like-button.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LikeButton)\n/* harmony export */ });\n// Like button\r\n\r\nclass LikeButton {\r\n    constructor(mediaId, likes, parentId) {\r\n        this.mediaId = mediaId;\r\n        this.likes = likes;\r\n        this.parentId = parentId;\r\n\r\n        this.divClass = \"like-button\";\r\n        this.likeAccessibility = \"likes\";\r\n        this.iconClassEmpty = \"far fa-heart\";\r\n        this.iconClassFull = \"fas fa-heart\";\r\n        this.iconId = `heart-icon-${this.mediaId}`;\r\n        this.likeButtonId = `like-${this.mediaId}`;\r\n        this.likeCounterId = `like-counter-${this.mediaId}`;\r\n        this.liked = false;\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(this.parentId);\r\n\r\n        const div = document.createElement(\"div\");\r\n\r\n        div.setAttribute(\"class\", this.divClass);\r\n        div.setAttribute(\"aria-label\", this.likeAccessibility);\r\n\r\n        const button = document.createElement(\"button\");\r\n\r\n        button.setAttribute(\"id\", this.likeButtonId);\r\n        button.appendChild(this.createIconElement());\r\n\r\n        div.appendChild(this.createNumberOfLikesElement());\r\n        div.appendChild(button);\r\n\r\n        parentElement.appendChild(div);\r\n\r\n        this.toggleLikeButton();\r\n    }\r\n\r\n    createNumberOfLikesElement() {\r\n        const p = document.createElement(\"p\");\r\n\r\n        p.setAttribute(\"id\", this.likeCounterId);\r\n\r\n        p.innerHTML = this.likes;\r\n\r\n        return p;\r\n    }\r\n\r\n    createIconElement() {\r\n        const icon = document.createElement(\"i\");\r\n\r\n        icon.setAttribute(\"class\", this.iconClassEmpty);\r\n        icon.setAttribute(\"id\", this.iconId);\r\n\r\n        return icon;\r\n    }\r\n\r\n    toggleLikeButton() {\r\n        const button = document.getElementById(this.likeButtonId);\r\n        const heart = document.getElementById(this.iconId);\r\n        const likeCounter = document.getElementById(this.likeCounterId);\r\n\r\n        button.addEventListener(\"click\", () => {\r\n            button.setAttribute(\"disabled\", \"true\");\r\n            \r\n            if (this.liked === false) {\r\n                this.likes++;\r\n                heart.removeAttribute(\"class\", this.iconClassEmpty);\r\n                heart.setAttribute(\"class\", this.iconClassFull);\r\n            } else {\r\n                this.likes--;\r\n                heart.removeAttribute(\"class\", this.iconClassFull);\r\n                heart.setAttribute(\"class\", this.iconClassEmpty);\r\n            }\r\n            \r\n            this.liked = !this.liked;\r\n\r\n            likeCounter.innerHTML = this.likes;\r\n\r\n            button.removeAttribute(\"disabled\");\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/like-button.js?");

/***/ }),

/***/ "./src/js/components/media.js":
/*!************************************!*\
  !*** ./src/js/components/media.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Media)\n/* harmony export */ });\n/* harmony import */ var _like_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-button */ \"./src/js/components/like-button.js\");\n\r\n\r\nclass Media {\r\n    constructor(media) {\r\n        this.state = {\r\n            id: media.id,\r\n            photographerId: media.photographerId,\r\n            title: media.title,\r\n            image: media.image,\r\n            video: media.video,\r\n            tags: media.tags,\r\n            likes: media.likes,\r\n            date: media.date,\r\n            price: media.price\r\n        }\r\n\r\n        this.mediaContainerClass = \"media-container\";\r\n        this.imageSrc = `../../assets/photographer/${this.state.photographerId}/${this.state.image}`;\r\n        this.imageClass = \"image\";\r\n        this.infosContainerClass = \"image-infos-container\";\r\n        this.infosContainerId = `image-infos-${this.state.id}`;\r\n        this.videoPoster = \"placeholder.png\";\r\n        this.videoClass = \"video\";\r\n        this.videoSrc = `../../assets/photographer/${this.state.photographerId}/${this.state.video}`;\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(\"gallery-section\");\r\n        const imageContainer = document.createElement(\"div\");\r\n\r\n        imageContainer.setAttribute(\"class\", this.mediaContainerClass);\r\n\r\n        const infosContainer = document.createElement(\"div\");\r\n\r\n        infosContainer.setAttribute(\"class\", this.infosContainerClass);\r\n        infosContainer.setAttribute(\"id\", this.infosContainerId);\r\n\r\n        infosContainer.appendChild(this.createTitleElement());\r\n\r\n        if (this.isVideo()) {\r\n            imageContainer.appendChild(this.createVideoElement());\r\n        } else {\r\n            imageContainer.appendChild(this.createImageElement());\r\n        }\r\n        \r\n        imageContainer.appendChild(infosContainer);\r\n\r\n        parentElement.appendChild(imageContainer);\r\n        \r\n        new _like_button__WEBPACK_IMPORTED_MODULE_0__.default(this.state.id, this.state.likes, this.infosContainerId).render();\r\n    }\r\n\r\n    createImageElement() {\r\n        const imageElement = document.createElement(\"img\");\r\n\r\n        imageElement.setAttribute(\"src\", this.imageSrc);\r\n        imageElement.setAttribute(\"class\", this.imageClass);\r\n        imageElement.setAttribute(\"alt\", this.state.title);\r\n\r\n        return imageElement;\r\n    }\r\n\r\n    isVideo() {\r\n        return this.state.video !== undefined;\r\n    }\r\n\r\n    createVideoElement() {\r\n        const videoElement = document.createElement(\"video\");\r\n\r\n        videoElement.setAttribute(\"poster\", this.videoPoster);\r\n        videoElement.setAttribute(\"controls\", \"\");\r\n        videoElement.setAttribute(\"class\", this.videoClass);\r\n        videoElement.setAttribute(\"aria-label\", this.state.title);\r\n\r\n        const sourceElement = document.createElement(\"source\");\r\n\r\n        sourceElement.setAttribute(\"src\", this.videoSrc);\r\n        sourceElement.setAttribute(\"type\", \"video/mp4\");\r\n\r\n        videoElement.appendChild(sourceElement);\r\n\r\n        return videoElement;\r\n    }\r\n\r\n    createTitleElement() {\r\n        const titleElement = document.createElement(\"h3\");\r\n\r\n        titleElement.innerHTML = this.state.title;\r\n\r\n        return titleElement;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/media.js?");

/***/ }),

/***/ "./src/js/components/photographerSection.js":
/*!**************************************************!*\
  !*** ./src/js/components/photographerSection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographerSection)\n/* harmony export */ });\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./src/js/components/tags.js\");\n/* harmony import */ var _contact_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-button */ \"./src/js/components/contact-button.js\");\n\r\n\r\n\r\nclass PhotographerSection {\r\n    constructor(photograph) {\r\n        this.state = {\r\n            name: photograph.name,\r\n            id: photograph.id,\r\n            city: photograph.city,\r\n            country: photograph.country,\r\n            tags: photograph.tags,\r\n            tagline: photograph.tagline,\r\n            portrait: photograph.portrait\r\n        };\r\n\r\n        this.containerClass = \"photographer-container\";\r\n        this.photographerInfoClass = \"photographer-info\";\r\n        this.titleClass = \"photographer-name\";\r\n        this.locationClass = \"photographer-city-country\";\r\n        this.taglineClass = \"photographer-tagline\";\r\n        this.tagContainerClass = \"tag-container\";\r\n        this.portraitClass = \"photographer-portrait\";\r\n    }\r\n\r\n    render() {\r\n        const parentElement = document.getElementById(\"photographer-section\");\r\n        const photographerInfo = document.createElement(\"div\");\r\n\r\n        photographerInfo.setAttribute(\"class\", this.photographerInfoClass);\r\n\r\n        photographerInfo.appendChild(this.createTitleElement());\r\n        photographerInfo.appendChild(this.createLocationElement());\r\n        photographerInfo.appendChild(this.createTaglineElement());\r\n        photographerInfo.appendChild(this.createTagContainerElement());\r\n\r\n        parentElement.appendChild(photographerInfo);\r\n        parentElement.appendChild(this.createPortraitElement());\r\n\r\n        new _tags__WEBPACK_IMPORTED_MODULE_0__.default(this.state.tags, `tag-container-${this.state.id}`).render();\r\n\r\n        new _contact_button__WEBPACK_IMPORTED_MODULE_1__.default().render();\r\n        const formTitle = document.getElementById(\"form-title\");\r\n\r\n        formTitle.innerHTML = this.state.name;\r\n    }\r\n\r\n    createTitleElement() {\r\n        const titleElement = document.createElement(\"h1\");\r\n\r\n        titleElement.setAttribute(\"class\", this.titleClass);\r\n        titleElement.innerHTML = this.state.name;\r\n\r\n        return titleElement;\r\n    }\r\n\r\n    createLocationElement() {\r\n        const locationElement = document.createElement(\"p\");\r\n\r\n        locationElement.setAttribute(\"class\", this.locationClass);\r\n        locationElement.innerHTML = `${this.state.city}, ${this.state.country}`;\r\n\r\n        return locationElement;\r\n    }\r\n\r\n    createTaglineElement() {\r\n        const taglineElement = document.createElement(\"p\");\r\n\r\n        taglineElement.setAttribute(\"class\", this.taglineClass);\r\n        taglineElement.innerHTML = this.state.tagline;\r\n\r\n        return taglineElement;\r\n    }\r\n\r\n    createTagContainerElement() {\r\n        const tagContainerElement = document.createElement(\"div\");\r\n\r\n        tagContainerElement.setAttribute(\"class\", this.tagContainerClass);\r\n        tagContainerElement.setAttribute(\"id\", `tag-container-${this.state.id}`);\r\n\r\n        return tagContainerElement;\r\n    }\r\n\r\n    createPortraitElement() {\r\n        const portraitElement = document.createElement(\"img\");\r\n\r\n        portraitElement.setAttribute(\"src\", `./assets/photographer-ids/${this.state.portrait}`);\r\n        portraitElement.setAttribute(\"alt\", this.state.name);\r\n        portraitElement.setAttribute(\"class\", this.portraitClass);\r\n\r\n        return portraitElement;\r\n    }\r\n}\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/components/photographerSection.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/factory */ \"./src/js/components/factory.js\");\n/* harmony import */ var _components_photographerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/photographerSection */ \"./src/js/components/photographerSection.js\");\n/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/media */ \"./src/js/components/media.js\");\n\r\n\r\n\r\n\r\n// Get ID of the current photographer to get associate data\r\nconst urlParams = new URLSearchParams(window.location.search);\r\nconst currrentId = urlParams.get('id');\r\nconst factory = new _components_factory__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n// Photographers' data fetch\r\nconst getData = async (url) => {\r\n    const response = await fetch(url);\r\n\r\n    return response.json();\r\n};\r\n\r\n// Photographer page initialization with Json's data\r\nconst initializePhotographerPage = async () => {\r\n    const data = await getData(\"../../assets/data.json\");\r\n\r\n    const photographerData = data.photographers.find((photographer) => {\r\n        return photographer.id == currrentId;\r\n    });\r\n\r\n    const photographerImages = data.media.filter((image) => {\r\n        return image.photographerId == currrentId;\r\n    });\r\n\r\n    factory.addElement(new _components_photographerSection__WEBPACK_IMPORTED_MODULE_1__.default(photographerData));\r\n    \r\n    photographerImages.forEach((image) => {\r\n        factory.addElement(new _components_media__WEBPACK_IMPORTED_MODULE_2__.default(image));\r\n    });\r\n\r\n    factory.renderElements();\r\n};\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    initializePhotographerPage();\r\n});\r\n\r\n// Close form button\r\n$(document).ready(function() {\r\n\t$(\"#close-form\").click(function() {\r\n        const form = document.getElementById(\"form-background\");\r\n        const body = document.body;\r\n\r\n        form.style.display = \"none\";\r\n        body.classList.toggle(\"overflow\");\r\n    });\r\n});\n\n//# sourceURL=webpack://BorisMontavon_6_21032021/./src/js/photographerPage.js?");

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