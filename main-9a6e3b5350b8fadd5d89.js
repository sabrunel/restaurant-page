/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/restaurant.jpg */ "./src/assets/images/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/hero.jpg */ "./src/assets/images/hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500&family=Palanquin:wght@400;500;600;700&family=Reenie+Beanie&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\nbody {\n    font-family: 'Hind', sans-serif;\n}\n\n/* HEADER */\n\nheader {\n    position: fixed;\n    top:0;\n    left:0;\n    display: flex;\n    justify-content: space-between;\n    padding: 2rem 5vw;\n    width: 100%;\n    z-index: 1;\n    gap: clamp(1.2rem, 5vw, 4rem);\n    background-color: #e44348;\n}\n\n.navbar {\n    display: flex;\n    gap: clamp(1.2rem, 5vw, 4rem);\n}\n\na {\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 1.2em;\n    color: white;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.logo-img {\n    height: 25px;\n    width: auto;\n    cursor: pointer;\n}\n\n.logo-txt {\n    visibility: hidden;\n    font-family: 'Reenie Beanie', cursive;\n    font-size: 2em;\n}\n\n/* MAIN SECTION */\n\nh1 {\n    font-family: 'Palanquin', sans-serif;\n    font-size: clamp(2.5em, 7vw, 4.5em);\n    font-weight: 400;\n    line-height: 1.2;\n}\n\nh2 {\n    font-family: 'Palanquin', sans-serif;\n    font-size: 2em;\n    font-weight: 400;\n}\n\np {\n    padding: 1rem 0;\n}\n\n.tagline {\n    padding: 4vh 0;\n    font-size: 1em;\n}\n\nimg {\n    width: 100%;\n}\n\n.container,\n.about .right-col,\n.hero .left-col {\n    padding: 8rem 10vw 4rem ;\n}\n\n.hero,\n.about {\n    display: grid;\n    height: 100vh;\n}\n\n.hero {\n    grid-template-rows: 1fr auto;\n    text-align: center;\n}\n\n.about {\n    grid-template-rows: auto 1fr;\n}\n\n.left-col {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n.right-col {\n    grid-row-start: 1;\n    grid-column-start: 1;\n}\n\n.about .left-col,\n.hero .right-col {\n    background-size: cover;\n} \n\n.about .left-col {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.hero .right-col {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbutton {\n    font-family: inherit;\n    background-color: black;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    padding: 1rem 1.5rem;\n    text-align: center;\n    text-decoration: none;\n    font-weight: 500;\n    font-size: 1em;\n    width: 100%;\n}\n\nbutton:hover {\n    background-color: transparent;\n    color: black;\n  }\n\n\n/* MEDIA QUERIES */\n\n@media (min-width: 734px) {\n\n    .logo-txt {\n        visibility: visible;\n    }\n\n    button {\n        width: auto;\n    }\n}\n\n\n@media (min-width: 1024px) {\n\n    .hero,\n    .about {\n        text-align: left;\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .about {\n        grid-template-rows: 1fr auto;\n    }\n\n    .left-col {\n        grid-row-start: 1;\n        grid-column-start: 1;\n    }\n    \n    .right-col {\n        grid-row-start: 1;\n        grid-column-start: 2;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":";AAGA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;AACnC;;AAEA,WAAW;;AAEX;IACI,eAAe;IACf,KAAK;IACL,MAAM;IACN,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,6BAA6B;IAC7B,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,qCAAqC;IACrC,cAAc;AAClB;;AAEA,iBAAiB;;AAEjB;IACI,oCAAoC;IACpC,mCAAmC;IACnC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;;;IAGI,wBAAwB;AAC5B;;AAEA;;IAEI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,yDAAsD;AAC1D;;AAEA;IACI,yDAAgD;AACpD;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;IACd,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;EACd;;;AAGF,kBAAkB;;AAElB;;IAEI;QACI,mBAAmB;IACvB;;IAEA;QACI,WAAW;IACf;AACJ;;;AAGA;;IAEI;;QAEI,gBAAgB;QAChB,8BAA8B;IAClC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,iBAAiB;QACjB,oBAAoB;IACxB;;AAEJ","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500&family=Palanquin:wght@400;500;600;700&family=Reenie+Beanie&display=swap');\n\n*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\nbody {\n    font-family: 'Hind', sans-serif;\n}\n\n/* HEADER */\n\nheader {\n    position: fixed;\n    top:0;\n    left:0;\n    display: flex;\n    justify-content: space-between;\n    padding: 2rem 5vw;\n    width: 100%;\n    z-index: 1;\n    gap: clamp(1.2rem, 5vw, 4rem);\n    background-color: #e44348;\n}\n\n.navbar {\n    display: flex;\n    gap: clamp(1.2rem, 5vw, 4rem);\n}\n\na {\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 1.2em;\n    color: white;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.logo-img {\n    height: 25px;\n    width: auto;\n    cursor: pointer;\n}\n\n.logo-txt {\n    visibility: hidden;\n    font-family: 'Reenie Beanie', cursive;\n    font-size: 2em;\n}\n\n/* MAIN SECTION */\n\nh1 {\n    font-family: 'Palanquin', sans-serif;\n    font-size: clamp(2.5em, 7vw, 4.5em);\n    font-weight: 400;\n    line-height: 1.2;\n}\n\nh2 {\n    font-family: 'Palanquin', sans-serif;\n    font-size: 2em;\n    font-weight: 400;\n}\n\np {\n    padding: 1rem 0;\n}\n\n.tagline {\n    padding: 4vh 0;\n    font-size: 1em;\n}\n\nimg {\n    width: 100%;\n}\n\n.container,\n.about .right-col,\n.hero .left-col {\n    padding: 8rem 10vw 4rem ;\n}\n\n.hero,\n.about {\n    display: grid;\n    height: 100vh;\n}\n\n.hero {\n    grid-template-rows: 1fr auto;\n    text-align: center;\n}\n\n.about {\n    grid-template-rows: auto 1fr;\n}\n\n.left-col {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n.right-col {\n    grid-row-start: 1;\n    grid-column-start: 1;\n}\n\n.about .left-col,\n.hero .right-col {\n    background-size: cover;\n} \n\n.about .left-col {\n    background-image: url(../assets/images/restaurant.jpg);\n}\n\n.hero .right-col {\n    background-image: url(../assets/images/hero.jpg);\n}\n\nbutton {\n    font-family: inherit;\n    background-color: black;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    padding: 1rem 1.5rem;\n    text-align: center;\n    text-decoration: none;\n    font-weight: 500;\n    font-size: 1em;\n    width: 100%;\n}\n\nbutton:hover {\n    background-color: transparent;\n    color: black;\n  }\n\n\n/* MEDIA QUERIES */\n\n@media (min-width: 734px) {\n\n    .logo-txt {\n        visibility: visible;\n    }\n\n    button {\n        width: auto;\n    }\n}\n\n\n@media (min-width: 1024px) {\n\n    .hero,\n    .about {\n        text-align: left;\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .about {\n        grid-template-rows: 1fr auto;\n    }\n\n    .left-col {\n        grid-row-start: 1;\n        grid-column-start: 1;\n    }\n    \n    .right-col {\n        grid-row-start: 1;\n        grid-column-start: 2;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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


const main = document.querySelector("main");

function renderAbout() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "about"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "left-col"}, [
            // new Element("img", {class:"photo"}),
        ]),    
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "right-col"}, [
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h2").setTextContent("WHO ARE WE?"),
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("p").setTextContent("At our noodle restaurant located in the sunny city of Montpellier, we take pride in offering a unique dining experience that combines the best of traditional Japanese noodles with a modern twist."),
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("p").setTextContent("Our passion for creating fresh and authentic dishes inspired by the rich culture and flavors of Japan drives everything we do. From our handcrafted noodles made daily to our carefully curated ingredients, we strive to bring you a truly exceptional culinary journey."),               
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("p").setTextContent("Join us at our cozy and welcoming restaurant and discover the art of noodle making like never before."),                    
        ]),
    ])
    main.appendChild(container.render());
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


const main = document.querySelector("main");

function renderContact() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "container"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h2").setTextContent("FIND US"),
    ])
    
    main.appendChild(container.render());
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


const main = document.querySelector("main");

function renderHome() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "hero"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "left-col"}, [
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setTextContent("DISCOVER THE ART OF NOODLE MAKING"),
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("p", {class:"tagline"}).setTextContent("Freshly Handcrafted Noodles Every Day"),
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("button", {class:"cta-btn"}).setTextContent("Explore Our Menu"),
        ]),
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "right-col"}, [
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("img", {class:"photo"}),
        ]),
    ])
main.appendChild(container.render());
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


const main = document.querySelector("main");

function renderMenu() {
    const container = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class: "container"}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("h2").setTextContent("TRY OUR NOODLES"),
    ])
    
    main.appendChild(container.render());
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
/* harmony import */ var _assets_images_noodle_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/noodle_logo.png */ "./src/assets/images/noodle_logo.png");



const body = document.querySelector("body");

function renderNavigation() {
    const header = new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("header", {}, [
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("div", {class:"logo"}, [
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("img", {src: `${_assets_images_noodle_logo_png__WEBPACK_IMPORTED_MODULE_1__}`, class:"logo-img"}),
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "logo-txt"}).setTextContent("Noodlicious"),
        ]),
        new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("nav", {}, [
            new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("ul", {class: "navbar"}, [
                new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("li", {}, [
                    new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "navlink", id: "menu-link"}).setTextContent("Menu"),
                ]),
                new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("li", {}, [
                    new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "navlink", id: "about-link"}).setTextContent("About"),
                ]),
                new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("li", {}, [
                    new _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]("a", {class: "navlink", id: "contact-link"}).setTextContent("Contact"),
                ]),
            ])
        ]),
    ])

    // Insert the header as the body Element's first child
    body.insertAdjacentElement('afterbegin', header.render());
}



/***/ }),

/***/ "./src/assets/images/hero.jpg":
/*!************************************!*\
  !*** ./src/assets/images/hero.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero.jpg";

/***/ }),

/***/ "./src/assets/images/noodle_logo.png":
/*!*******************************************!*\
  !*** ./src/assets/images/noodle_logo.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "noodle_logo.png";

/***/ }),

/***/ "./src/assets/images/restaurant.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/restaurant.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurant.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");







(0,_modules_Navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_Home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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


})();

/******/ })()
;
//# sourceMappingURL=main-9a6e3b5350b8fadd5d89.js.map