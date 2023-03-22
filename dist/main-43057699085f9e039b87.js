/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/About.js":
/*!******************************!*\
  !*** ./src/modules/About.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ "./src/modules/Element.js");


const content = document.getElementById("content");

function renderAbout() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "container"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setTextContent("About Page")
    ])

    content.appendChild(container.render());
}


/***/ }),

/***/ "./src/modules/Contact.js":
/*!********************************!*\
  !*** ./src/modules/Contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ "./src/modules/Element.js");


const content = document.getElementById("content");

function renderContact() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "container"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setTextContent("Contact Page")
    ])

    content.appendChild(container.render());
}


/***/ }),

/***/ "./src/modules/Element.js":
/*!********************************!*\
  !*** ./src/modules/Element.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Element)
/* harmony export */ });
class Element {
    constructor(element, attributes = {}, children = []) {
        this.element = element;
        this.attributes = attributes;
        this.children = children;
    }

    setTextContent(textContent) {
        this.textContent = textContent;

        return this;
    }

    render() {
        let DOMElement = document.createElement(this.element);

        for (const k of Object.keys(this.attributes)) {
            DOMElement.setAttribute(k, this.attributes[k]);
        }

        // Append children Element or Text nodes
        if (this.textContent === undefined) {
            for (const child of this.children) {
                DOMElement.appendChild(child.render());
            } 
        } else {
            const textNode = document.createTextNode(this.textContent);
            DOMElement.appendChild(textNode);
        }
        return DOMElement;
    }
}

/***/ }),

/***/ "./src/modules/Home.js":
/*!*****************************!*\
  !*** ./src/modules/Home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ "./src/modules/Element.js");


const content = document.getElementById("content");

function renderHome() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "container"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setTextContent("Home Page")
    ])
    
    content.appendChild(container.render());
}




/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ "./src/modules/Element.js");


const content = document.getElementById("content");

function renderMenu() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "container"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setTextContent("Menu Page")
    ])

    content.appendChild(container.render());
}



/***/ }),

/***/ "./src/modules/Navigation.js":
/*!***********************************!*\
  !*** ./src/modules/Navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderNavigation)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ "./src/modules/Element.js");


const body = document.querySelector("body");

function renderNavigation() {
    const header = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("header", {}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "logo"}).setTextContent("Logo"),
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("nav", {}, [
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("ul", {class: "navbar"}, [
                new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("li", {}, [
                    new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "navlink", id: "menu-link"}).setTextContent("Menu")
                ]),
                new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("li", {}, [
                    new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "navlink", id: "about-link"}).setTextContent("About")
                ]),
                new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("li", {}, [
                    new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "navlink", id: "contact-link"}).setTextContent("Contact")
                ]),
            ])
        ]),
    ])

    // Insert the header as the body Element's first child
    body.insertAdjacentElement('afterbegin', header.render());
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Home.js */ "./src/modules/Home.js");
/* harmony import */ var _modules_Menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Menu.js */ "./src/modules/Menu.js");
/* harmony import */ var _modules_About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/About.js */ "./src/modules/About.js");
/* harmony import */ var _modules_Contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Contact.js */ "./src/modules/Contact.js");
/* harmony import */ var _modules_Navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Navigation.js */ "./src/modules/Navigation.js");






const content = document.getElementById("content");
const logo = document.querySelector(".logo");
const menuLink = document.getElementById("menu-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

function clearPageContent() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

logo.addEventListener("click", () => {
    clearPageContent()
    ;(0,_modules_Home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
});

menuLink.addEventListener("click", () => {
    clearPageContent()
    ;(0,_modules_Menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
});

aboutLink.addEventListener("click", () => {
    clearPageContent()
    ;(0,_modules_About_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
});

contactLink.addEventListener("click", () => {
    clearPageContent()
    ;(0,_modules_Contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
});

(0,_modules_Navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_Home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main-43057699085f9e039b87.js.map