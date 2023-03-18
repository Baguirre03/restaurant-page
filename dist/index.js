"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/background-home-page.jpg */ "./src/imgs/background-home-page.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/jason-leem.jpg */ "./src/imgs/jason-leem.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  --lightestGrey: #dad7cd;\n  --lightGreen: #a3b18a;\n  --forest: #588157;\n  --darkGreen: #344e41;\n}\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.header-container {\n  background-color: var(--forest);\n  padding: 20px;\n  border-bottom: black 4px solid;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.button-holder {\n  display: flex;\n  gap: 20px;\n}\n\n.name {\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  font-family: \"Tilt Warp\";\n}\n\n.coffeeLogo {\n  padding-top: 3px;\n  height: 2.5rem;\n  width: 3.2rem;\n}\n\nbutton {\n  padding: 10px 3vw 10px 3vw;\n  background-color: var(--forest);\n  border: none;\n  border-bottom: black 3px double;\n  font-size: 1.3rem;\n  font-family: \"Tilt Warp\";\n}\n\nbutton:hover {\n  color: #dad7cd;\n  transition: 0.3s;\n}\n\n.highlight {\n  color: #dad7cd;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  background-color: var(--lightGreen);\n  padding: 20px;\n  gap: 2rem;\n}\n\n/* HomePage CSS */\n\n.home-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center center;\n}\n\n.second-main {\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 5vw;\n  flex: 1;\n}\n\n.about-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  gap: 10px;\n}\n\n.about-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2.5rem;\n}\n\n.about-text {\n  font-size: 1.2rem;\n}\n\n.hours-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  gap: 10px;\n}\n\n.hours-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2.5rem;\n}\n\n.hours-text {\n  font-size: 1.2rem;\n}\n\n.location-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  gap: 10px;\n}\n\n.location-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2.5rem;\n}\n\n.location-text {\n  font-size: 1.2rem;\n}\n\n/* HomePage END */\n\n/* Menu Begin */\n.menu-holder {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 2rem;\n  gap: 20px;\n  flex-grow: 1;\n  align-self: center;\n}\n\n.food-container {\n  display: flex;\n  flex-direction: column;\n  border: black 2px solid;\n  border-radius: 1vh;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  height: 40vh;\n  width: 32vw;\n  gap: 5px;\n  background-color: var(--lightestGrey);\n  box-shadow: 2px 2px 2px black;\n}\n\n.food-name {\n  font-family: \"Tilt Warp\";\n  font-size: 1.5rem;\n}\n\n.food-image {\n  width: 20vw;\n  height: 25vh;\n}\n\n.food-description {\n  font-size: 1.1rem;\n}\n\n/* Menu END */\n\n/* Contact Begin */\n\n.contact-container {\n  padding: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center center;\n}\n\n.contact-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  background-color: var(--lightestGrey);\n  width: min-content;\n  align-self: center;\n  margin-top: 5vh;\n  padding: 4vh;\n  height: 60vh;\n  border: var(--forest) 2px solid;\n  box-shadow: 10px 10px 10px black;\n}\n\n.contact-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2rem;\n}\n\n.contact-text {\n  font-size: 1.2rem;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 3fr 1fr;\n  column-gap: 20px;\n  width: 30vw;\n  height: 100%;\n  border: black 2px solid;\n  background-color: var(--lightGreen);\n  padding: 2vh;\n  border-radius: 1vh;\n  font-size: 1rem;\n  font-family: \"Tilt Warp\";\n}\n\n.form-input {\n  display: flex;\n  flex-direction: column;\n}\ninput {\n  width: 100%;\n  border-radius: 1vh;\n  padding: 3px;\n  border: black 2px solid;\n}\n\ninput:focus {\n  outline: none;\n}\n\n#message {\n  resize: none;\n  height: 100%;\n  border-radius: 1vh;\n  width: 100%;\n  padding: 3px;\n  border: black 2px solid;\n}\n\n#message:focus {\n  outline: none;\n}\n\n#email-holder {\n  grid-column: span 2;\n}\n\n#message-holder {\n  grid-column: span 2;\n}\n\n.submit {\n  margin-top: 1vh;\n  grid-column: span 2;\n  background-color: var(--lightestGrey);\n  border: 2px solid black;\n}\n\n.submit:hover {\n  color: var(--lightestGrey);\n  background-color: var(--darkGreen);\n}\n\n@media screen and (max-width: 560px) {\n  .coffeeLogo {\n    visibility: hidden;\n  }\n}\n\n@media screen and (max-width: 1211px) {\n  .contact-header {\n    font-size: 1.7rem;\n  }\n  .contact-text {\n    font-size: 1.1rem;\n  }\n\n  .contact-holder {\n    height: fit-content;\n    margin-bottom: 2vh;\n  }\n  form {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: max-content;\n    gap: 1px;\n  }\n\n  #email-holder {\n    grid-column: span 1;\n  }\n\n  #message {\n    height: 100%;\n  }\n\n  #message-holder {\n    grid-column: span 1;\n  }\n\n  .submit {\n    grid-column: span 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap\");\n\n* {\n  --lightestGrey: #dad7cd;\n  --lightGreen: #a3b18a;\n  --forest: #588157;\n  --darkGreen: #344e41;\n}\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.header-container {\n  background-color: var(--forest);\n  padding: 20px;\n  border-bottom: black 4px solid;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.button-holder {\n  display: flex;\n  gap: 20px;\n}\n\n.name {\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  font-family: \"Tilt Warp\";\n}\n\n.coffeeLogo {\n  padding-top: 3px;\n  height: 2.5rem;\n  width: 3.2rem;\n}\n\nbutton {\n  padding: 10px 3vw 10px 3vw;\n  background-color: var(--forest);\n  border: none;\n  border-bottom: black 3px double;\n  font-size: 1.3rem;\n  font-family: \"Tilt Warp\";\n}\n\nbutton:hover {\n  color: #dad7cd;\n  transition: 0.3s;\n}\n\n.highlight {\n  color: #dad7cd;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  background-color: var(--lightGreen);\n  padding: 20px;\n  gap: 2rem;\n}\n\n/* HomePage CSS */\n\n.home-container {\n  background-image: url(/src/imgs/background-home-page.jpg);\n  background-size: cover;\n  background-position: center center;\n}\n\n.second-main {\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 5vw;\n  flex: 1;\n}\n\n.about-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  gap: 10px;\n}\n\n.about-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2.5rem;\n}\n\n.about-text {\n  font-size: 1.2rem;\n}\n\n.hours-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  gap: 10px;\n}\n\n.hours-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2.5rem;\n}\n\n.hours-text {\n  font-size: 1.2rem;\n}\n\n.location-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  gap: 10px;\n}\n\n.location-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2.5rem;\n}\n\n.location-text {\n  font-size: 1.2rem;\n}\n\n/* HomePage END */\n\n/* Menu Begin */\n.menu-holder {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 2rem;\n  gap: 20px;\n  flex-grow: 1;\n  align-self: center;\n}\n\n.food-container {\n  display: flex;\n  flex-direction: column;\n  border: black 2px solid;\n  border-radius: 1vh;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  height: 40vh;\n  width: 32vw;\n  gap: 5px;\n  background-color: var(--lightestGrey);\n  box-shadow: 2px 2px 2px black;\n}\n\n.food-name {\n  font-family: \"Tilt Warp\";\n  font-size: 1.5rem;\n}\n\n.food-image {\n  width: 20vw;\n  height: 25vh;\n}\n\n.food-description {\n  font-size: 1.1rem;\n}\n\n/* Menu END */\n\n/* Contact Begin */\n\n.contact-container {\n  padding: 0;\n  background-image: url(/src/imgs/jason-leem.jpg);\n  background-size: cover;\n  background-position: center center;\n}\n\n.contact-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  background-color: var(--lightestGrey);\n  width: min-content;\n  align-self: center;\n  margin-top: 5vh;\n  padding: 4vh;\n  height: 60vh;\n  border: var(--forest) 2px solid;\n  box-shadow: 10px 10px 10px black;\n}\n\n.contact-header {\n  font-family: \"Tilt Warp\";\n  font-size: 2rem;\n}\n\n.contact-text {\n  font-size: 1.2rem;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 3fr 1fr;\n  column-gap: 20px;\n  width: 30vw;\n  height: 100%;\n  border: black 2px solid;\n  background-color: var(--lightGreen);\n  padding: 2vh;\n  border-radius: 1vh;\n  font-size: 1rem;\n  font-family: \"Tilt Warp\";\n}\n\n.form-input {\n  display: flex;\n  flex-direction: column;\n}\ninput {\n  width: 100%;\n  border-radius: 1vh;\n  padding: 3px;\n  border: black 2px solid;\n}\n\ninput:focus {\n  outline: none;\n}\n\n#message {\n  resize: none;\n  height: 100%;\n  border-radius: 1vh;\n  width: 100%;\n  padding: 3px;\n  border: black 2px solid;\n}\n\n#message:focus {\n  outline: none;\n}\n\n#email-holder {\n  grid-column: span 2;\n}\n\n#message-holder {\n  grid-column: span 2;\n}\n\n.submit {\n  margin-top: 1vh;\n  grid-column: span 2;\n  background-color: var(--lightestGrey);\n  border: 2px solid black;\n}\n\n.submit:hover {\n  color: var(--lightestGrey);\n  background-color: var(--darkGreen);\n}\n\n@media screen and (max-width: 560px) {\n  .coffeeLogo {\n    visibility: hidden;\n  }\n}\n\n@media screen and (max-width: 1211px) {\n  .contact-header {\n    font-size: 1.7rem;\n  }\n  .contact-text {\n    font-size: 1.1rem;\n  }\n\n  .contact-holder {\n    height: fit-content;\n    margin-bottom: 2vh;\n  }\n  form {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: max-content;\n    gap: 1px;\n  }\n\n  #email-holder {\n    grid-column: span 1;\n  }\n\n  #message {\n    height: 100%;\n  }\n\n  #message-holder {\n    grid-column: span 1;\n  }\n\n  .submit {\n    grid-column: span 1;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/basicFunctions.js":
/*!*******************************!*\
  !*** ./src/basicFunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPage": () => (/* binding */ clearPage),
/* harmony export */   "colorButton": () => (/* binding */ colorButton),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createChildren": () => (/* binding */ createChildren),
/* harmony export */   "createFoodItem": () => (/* binding */ createFoodItem),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "createInput": () => (/* binding */ createInput),
/* harmony export */   "createMainContainer": () => (/* binding */ createMainContainer),
/* harmony export */   "textArea": () => (/* binding */ textArea)
/* harmony export */ });
const createMainContainer = (text, className) => {
  const body = document.querySelector("body");

  const element = document.createElement("div");
  element.classList.add(className);
  element.textContent = text;

  body.appendChild(element);

  return element;
};

const createChildren = (text, parentClass, className) => {
  const parent = document.querySelector(parentClass);

  const element = document.createElement("div");
  element.classList.add(className);
  element.textContent = text;

  parent.appendChild(element);

  return element;
};

const createImg = (imageSource, parentClass, className) => {
  const image = document.createElement("img");
  image.src = imageSource;
  image.classList.add(className);

  const parent = document.querySelector(parentClass);

  parent.appendChild(image);
};

const createButton = (text, parentClass, className) => {
  const parent = document.querySelector(parentClass);

  const element = document.createElement("button");
  element.classList.add(className);
  element.textContent = text;

  parent.appendChild(element);

  return element;
};

const clearPage = () => {
  let removeMain = document.querySelector(".main-container");
  while (removeMain.firstChild) {
    removeMain.removeChild(removeMain.firstChild);
  }
  removeMain.remove();
};

const createFoodItem = (name, foodDescription, parentClass, imageLink) => {
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");

  const parent = document.querySelector(parentClass);
  parent.appendChild(foodContainer);

  const food = document.createElement("div");
  food.classList.add("food-name");
  food.textContent = name;

  foodContainer.appendChild(food);

  const foodImage = document.createElement("img");
  foodImage.src = `${imageLink}`;
  foodImage.classList.add("food-image");

  foodContainer.appendChild(foodImage);

  const foodDesc = document.createElement("div");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = foodDescription;

  foodContainer.appendChild(foodDesc);
};

const createForm = (id, parentClass, className) => {
  const form = document.createElement("form");
  const parent = document.querySelector(parentClass);
  form.setAttribute("id", id);
  form.classList.add(className);
  parent.appendChild(form);
};

const createInput = (id, parentClass, labelText, bigId) => {
  const parent = document.querySelector(parentClass);
  const newDiv = document.createElement("div");
  newDiv.classList.add("form-input");
  newDiv.setAttribute("id", bigId);
  parent.appendChild(newDiv);

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelText;
  newDiv.appendChild(label);

  const input = document.createElement("input");
  newDiv.appendChild(input);
  input.setAttribute("id", id);
};

const textArea = (id, parentClass, labelText, bigId) => {
  const parent = document.querySelector(parentClass);
  const newDiv = document.createElement("div");
  newDiv.classList.add("form-input");
  newDiv.setAttribute("id", bigId);
  parent.appendChild(newDiv);

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelText;
  newDiv.appendChild(label);

  const input = document.createElement("textarea");
  newDiv.appendChild(input);
  input.setAttribute("id", id);
};

const colorButton = (button, other, other2) => {
  const highlight = document.querySelector(button);
  const remove = document.querySelector(other);
  const remove2 = document.querySelector(other2);

  highlight.classList.add("highlight");
  remove.classList.remove("highlight");
  remove2.classList.remove("highlight");
};




/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basicFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFunctions */ "./src/basicFunctions.js");


//syntax: (Text, parentClass, className)
//input: (id, parentClass, LabelText)
//Image: (imageSource, parentClass, className))
const renderContact = () => {
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createMainContainer)("", "main-container");
  const backgroundContainer = document.querySelector(".main-container");
  backgroundContainer.classList.add("contact-container");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".main-container", "contact-holder");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("Contact Ben's Coffee!", ".contact-holder", "contact-header");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)(
    "Lets get this conversation started. Tell us a bit about  yourself and we'll get in touch as soon as we can.",
    ".contact-holder",
    "contact-text"
  );

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createForm)("", ".contact-holder", "form");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createInput)("first-name", ".form", "First Name: ", "first-name-holder");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createInput)("last-name", ".form", "Last Name: ", "last-name-holder");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createInput)("email", ".form", "Email: ", "email-holder");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.textArea)("message", ".form", "Message: ", "message-holder");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createButton)("Submit", ".form", "submit");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basicFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFunctions */ "./src/basicFunctions.js");
/* harmony import */ var _imgs_coffee_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/coffee-outline.svg */ "./src/imgs/coffee-outline.svg");



const createHeader = () => {
  // HTML class main-container on page
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createMainContainer)("", "header-container");

  // syntax: createBlank(text, parentClass, className)
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".header-container", "header");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("Bens Super Cool Coffee shop", ".header", "name");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createImg)("/src/imgs/coffee-outline.svg", ".name", "coffeeLogo");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".header", "button-holder");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createButton)("Home", ".button-holder", "home");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createButton)("Menu", ".button-holder", "menu");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createButton)("Contact", ".button-holder", "contact");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basicFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFunctions */ "./src/basicFunctions.js");


// syntax: createBlank(text, parentClass, className)
const renderHomePage = () => {
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createMainContainer)("", "main-container");
  const backgroundContainer = document.querySelector(".main-container");
  backgroundContainer.classList.add("home-container");

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".main-container", "second-main");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".second-main", "about-container");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("About", ".about-container", "about-header");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)(
    "Welcome to our coffee shop, where we believe that every cup of coffee should be an experience to remember. Located in the heart of the city, our coffee shop is the perfect spot to unwind and relax, catch up with friends or get some work done. We pride ourselves on providing the highest quality coffee, sourced from the finest roasters around the world.Located in the heart of the city, our coffee shop is the perfect spot to unwind and relax, catch up with friends or get some work done.",
    ".about-container",
    "about-text"
  );

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".second-main", "hours-container");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("Hours", ".hours-container", "hours-header");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)(
    "Our coffee shop is open 7 days a week for your convenience. Our hours of operation are as follows: Monday to Friday: 7:00am - 7:00pm Saturday: 8:00am - 6:00pm Sunday: 9:00am - 5:00pm We understand that everyone has different schedules, so we aim to offer flexible hours that can accommodate a variety of lifestyles. Whether you need your morning caffeine fix or a cozy place to unwind in the evening, our doors are always open.",
    ".hours-container",
    "hours-text"
  );

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".second-main", "location-container");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("Location", ".location-container", "location-header");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)(
    "5298 West Loop Drive, Dallas, TX, 75214",
    ".location-container",
    "location-text"
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomePage);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFunctions */ "./src/basicFunctions.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
const highlightHome = (() => {
  const home = document.querySelector(".home");
  home.classList.add("highlight");
})();
(0,_homePage__WEBPACK_IMPORTED_MODULE_3__["default"])();

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Home":
        (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
        (0,_homePage__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.colorButton)(".home", ".menu", ".contact");
        break;
      case "Menu":
        (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.colorButton)(".menu", ".home", ".contact");
        break;
      case "Contact":
        (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
        (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
        (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.colorButton)(".contact", ".menu", ".home");
        break;
    }
  });
});


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basicFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFunctions */ "./src/basicFunctions.js");
/* harmony import */ var _imgs_espresso2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/espresso2.png */ "./src/imgs/espresso2.png");
/* harmony import */ var _imgs_cap_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/cap.png */ "./src/imgs/cap.png");
/* harmony import */ var _imgs_latte_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/latte.png */ "./src/imgs/latte.png");
/* harmony import */ var _imgs_machiatto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/machiatto.png */ "./src/imgs/machiatto.png");
/* harmony import */ var _imgs_mocha_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/mocha.png */ "./src/imgs/mocha.png");
/* harmony import */ var _imgs_americano_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/americano.png */ "./src/imgs/americano.png");









// syntax: createBlank(Title Name, Description, parentClass)
const createMenu = () => {
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createMainContainer)("", "main-container");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".main-container", "menu-holder");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Espresso",
    "A strong and concentrated shot of coffee made by forcing hot water through finely ground coffee beans. It has a thick crema on top and a rich flavor.",
    ".menu-holder",
    "../src/imgs/espresso2.png"
  );

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Cappuccino",
    "A classic Italian coffee drink made with espresso, steamed milk, and a layer of frothed milk on top. It has a creamy texture and a balanced flavor.",
    ".menu-holder",
    "../src/imgs/cap.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Americano",
    "A simple coffee drink made by adding hot water to a shot of espresso. It has a milder flavor than espresso and a higher volume.",
    ".menu-holder",
    "../src/imgs/americano.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Latte",
    "A popular coffee drink made with espresso and steamed milk, typically with a small amount of foam on top. It has a smooth and creamy texture with a mild espresso flavor.",
    ".menu-holder",
    "../src/imgs/latte.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Macchiato",
    "A small shot of espresso with a dollop of steamed milk on top. It has a bolder flavor than a latte and a lighter texture than a cappuccino.",
    ".menu-holder",
    "../src/imgs/machiatto.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Mocha",
    "A coffee drink made with espresso, steamed milk, chocolate syrup or powder, and whipped cream on top. It has a rich and indulgent flavor with a hint of chocolate.",
    ".menu-holder",
    "../src/imgs/mocha.png"
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/imgs/americano.png":
/*!********************************!*\
  !*** ./src/imgs/americano.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bf20e69af2e7fff653e.png";

/***/ }),

/***/ "./src/imgs/background-home-page.jpg":
/*!*******************************************!*\
  !*** ./src/imgs/background-home-page.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4230aa5731cc64e8e66d.jpg";

/***/ }),

/***/ "./src/imgs/cap.png":
/*!**************************!*\
  !*** ./src/imgs/cap.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "342066323cb119c554c3.png";

/***/ }),

/***/ "./src/imgs/coffee-outline.svg":
/*!*************************************!*\
  !*** ./src/imgs/coffee-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cd62c56676e8d38625f.svg";

/***/ }),

/***/ "./src/imgs/espresso2.png":
/*!********************************!*\
  !*** ./src/imgs/espresso2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7b9719c4ff567f3fe27.png";

/***/ }),

/***/ "./src/imgs/jason-leem.jpg":
/*!*********************************!*\
  !*** ./src/imgs/jason-leem.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cf5821a164d1af2c3a8.jpg";

/***/ }),

/***/ "./src/imgs/latte.png":
/*!****************************!*\
  !*** ./src/imgs/latte.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4a601c32bc13387d6fe.png";

/***/ }),

/***/ "./src/imgs/machiatto.png":
/*!********************************!*\
  !*** ./src/imgs/machiatto.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb4445ec002c3f66232c.png";

/***/ }),

/***/ "./src/imgs/mocha.png":
/*!****************************!*\
  !*** ./src/imgs/mocha.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "507b6ca2be55e2f0d5ed.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlKQUFxRDtBQUNqRyw0Q0FBNEMscUlBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVIO0FBQ3ZILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2Qyw0QkFBNEIsMEJBQTBCLHNCQUFzQix5QkFBeUIsR0FBRyxRQUFRLGtCQUFrQixjQUFjLGVBQWUsa0JBQWtCLDJCQUEyQixHQUFHLHVCQUF1QixvQ0FBb0Msa0JBQWtCLG1DQUFtQyxHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0Isc0JBQXNCLCtCQUErQixHQUFHLGlCQUFpQixxQkFBcUIsbUJBQW1CLGtCQUFrQixHQUFHLFlBQVksK0JBQStCLG9DQUFvQyxpQkFBaUIsb0NBQW9DLHNCQUFzQiwrQkFBK0IsR0FBRyxrQkFBa0IsbUJBQW1CLHFCQUFxQixHQUFHLGdCQUFnQixtQkFBbUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsd0NBQXdDLGtCQUFrQixjQUFjLEdBQUcsMkNBQTJDLHNFQUFzRSwyQkFBMkIsdUNBQXVDLEdBQUcsa0JBQWtCLG1DQUFtQyxrQkFBa0IsMkJBQTJCLG1DQUFtQyxpQkFBaUIsWUFBWSxHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGlCQUFpQixjQUFjLEdBQUcsbUJBQW1CLCtCQUErQixzQkFBc0IsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGNBQWMsR0FBRyxtQkFBbUIsK0JBQStCLHNCQUFzQixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsY0FBYyxHQUFHLHNCQUFzQiwrQkFBK0Isc0JBQXNCLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLDBEQUEwRCxrQkFBa0IsbUNBQW1DLGtCQUFrQixjQUFjLGlCQUFpQix1QkFBdUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixtQ0FBbUMsa0JBQWtCLGlCQUFpQixnQkFBZ0IsYUFBYSwwQ0FBMEMsa0NBQWtDLEdBQUcsZ0JBQWdCLCtCQUErQixzQkFBc0IsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxpRUFBaUUsZUFBZSxzRUFBc0UsMkJBQTJCLHVDQUF1QyxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLHdCQUF3QixjQUFjLDBDQUEwQyx1QkFBdUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsaUJBQWlCLG9DQUFvQyxxQ0FBcUMsR0FBRyxxQkFBcUIsK0JBQStCLG9CQUFvQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQixtQ0FBbUMsd0NBQXdDLHFCQUFxQixnQkFBZ0IsaUJBQWlCLDRCQUE0Qix3Q0FBd0MsaUJBQWlCLHVCQUF1QixvQkFBb0IsK0JBQStCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRyxTQUFTLGdCQUFnQix1QkFBdUIsaUJBQWlCLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxjQUFjLGlCQUFpQixpQkFBaUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsYUFBYSxvQkFBb0Isd0JBQXdCLDBDQUEwQyw0QkFBNEIsR0FBRyxtQkFBbUIsK0JBQStCLHVDQUF1QyxHQUFHLDBDQUEwQyxpQkFBaUIseUJBQXlCLEtBQUssR0FBRywyQ0FBMkMscUJBQXFCLHdCQUF3QixLQUFLLG1CQUFtQix3QkFBd0IsS0FBSyx1QkFBdUIsMEJBQTBCLHlCQUF5QixLQUFLLFVBQVUsaUNBQWlDLDBDQUEwQywwQkFBMEIsZUFBZSxLQUFLLHFCQUFxQiwwQkFBMEIsS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssdUJBQXVCLDBCQUEwQixLQUFLLGVBQWUsMEJBQTBCLEtBQUssR0FBRyxTQUFTLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSwwR0FBMEcsT0FBTyw0QkFBNEIsMEJBQTBCLHNCQUFzQix5QkFBeUIsR0FBRyxRQUFRLGtCQUFrQixjQUFjLGVBQWUsa0JBQWtCLDJCQUEyQixHQUFHLHVCQUF1QixvQ0FBb0Msa0JBQWtCLG1DQUFtQyxHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0Isc0JBQXNCLCtCQUErQixHQUFHLGlCQUFpQixxQkFBcUIsbUJBQW1CLGtCQUFrQixHQUFHLFlBQVksK0JBQStCLG9DQUFvQyxpQkFBaUIsb0NBQW9DLHNCQUFzQiwrQkFBK0IsR0FBRyxrQkFBa0IsbUJBQW1CLHFCQUFxQixHQUFHLGdCQUFnQixtQkFBbUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsd0NBQXdDLGtCQUFrQixjQUFjLEdBQUcsMkNBQTJDLDhEQUE4RCwyQkFBMkIsdUNBQXVDLEdBQUcsa0JBQWtCLG1DQUFtQyxrQkFBa0IsMkJBQTJCLG1DQUFtQyxpQkFBaUIsWUFBWSxHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGlCQUFpQixjQUFjLEdBQUcsbUJBQW1CLCtCQUErQixzQkFBc0IsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGNBQWMsR0FBRyxtQkFBbUIsK0JBQStCLHNCQUFzQixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsY0FBYyxHQUFHLHNCQUFzQiwrQkFBK0Isc0JBQXNCLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLDBEQUEwRCxrQkFBa0IsbUNBQW1DLGtCQUFrQixjQUFjLGlCQUFpQix1QkFBdUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixtQ0FBbUMsa0JBQWtCLGlCQUFpQixnQkFBZ0IsYUFBYSwwQ0FBMEMsa0NBQWtDLEdBQUcsZ0JBQWdCLCtCQUErQixzQkFBc0IsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxpRUFBaUUsZUFBZSxvREFBb0QsMkJBQTJCLHVDQUF1QyxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLHdCQUF3QixjQUFjLDBDQUEwQyx1QkFBdUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsaUJBQWlCLG9DQUFvQyxxQ0FBcUMsR0FBRyxxQkFBcUIsK0JBQStCLG9CQUFvQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQixtQ0FBbUMsd0NBQXdDLHFCQUFxQixnQkFBZ0IsaUJBQWlCLDRCQUE0Qix3Q0FBd0MsaUJBQWlCLHVCQUF1QixvQkFBb0IsK0JBQStCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRyxTQUFTLGdCQUFnQix1QkFBdUIsaUJBQWlCLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxjQUFjLGlCQUFpQixpQkFBaUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsYUFBYSxvQkFBb0Isd0JBQXdCLDBDQUEwQyw0QkFBNEIsR0FBRyxtQkFBbUIsK0JBQStCLHVDQUF1QyxHQUFHLDBDQUEwQyxpQkFBaUIseUJBQXlCLEtBQUssR0FBRywyQ0FBMkMscUJBQXFCLHdCQUF3QixLQUFLLG1CQUFtQix3QkFBd0IsS0FBSyx1QkFBdUIsMEJBQTBCLHlCQUF5QixLQUFLLFVBQVUsaUNBQWlDLDBDQUEwQywwQkFBMEIsZUFBZSxLQUFLLHFCQUFxQiwwQkFBMEIsS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssdUJBQXVCLDBCQUEwQixLQUFLLGVBQWUsMEJBQTBCLEtBQUssR0FBRyxxQkFBcUI7QUFDanRaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDYjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFhRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJd0I7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvRUFBbUI7QUFDckI7QUFDQTs7QUFFQSxFQUFFLCtEQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFVOztBQUVaLEVBQUUsNERBQVc7O0FBRWIsRUFBRSw0REFBVzs7QUFFYixFQUFFLDREQUFXOztBQUViLEVBQUUseURBQVE7O0FBRVYsRUFBRSw2REFBWTtBQUNkOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0g7QUFDUzs7QUFFbkM7QUFDQTtBQUNBLEVBQUUsb0VBQW1COztBQUVyQjtBQUNBLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSwrREFBYztBQUNoQixFQUFFLDBEQUFTOztBQUVYLEVBQUUsK0RBQWM7O0FBRWhCLEVBQUUsNkRBQVk7QUFDZCxFQUFFLDZEQUFZO0FBQ2QsRUFBRSw2REFBWTtBQUNkOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRjs7QUFFMUI7QUFDQTtBQUNBLEVBQUUsb0VBQW1CO0FBQ3JCO0FBQ0E7O0FBRUEsRUFBRSwrREFBYztBQUNoQixFQUFFLCtEQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtEQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtEQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEM0QjtBQUN0QjtBQUNKO0FBQ1E7QUFDRjtBQUNoQjs7QUFFdEIsbURBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscURBQWM7O0FBRWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFTO0FBQ2pCLFFBQVEscURBQWM7QUFDdEIsUUFBUSw0REFBVztBQUNuQjtBQUNBO0FBQ0EsUUFBUSwwREFBUztBQUNqQixRQUFRLGlEQUFVO0FBQ2xCLFFBQVEsNERBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMERBQVM7QUFDakIsUUFBUSxvREFBYTtBQUNyQixRQUFRLDREQUFXO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDeUI7O0FBRUk7QUFDTjtBQUNFO0FBQ0k7QUFDSjtBQUNJOztBQUU5QjtBQUNBO0FBQ0EsRUFBRSxvRUFBbUI7QUFDckIsRUFBRSwrREFBYztBQUNoQixFQUFFLCtEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYmFzaWNGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltZ3MvYmFja2dyb3VuZC1ob21lLXBhZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWdzL2phc29uLWxlZW0uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaWx0K1dhcnAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIC0tbGlnaHRlc3RHcmV5OiAjZGFkN2NkO1xcbiAgLS1saWdodEdyZWVuOiAjYTNiMThhO1xcbiAgLS1mb3Jlc3Q6ICM1ODgxNTc7XFxuICAtLWRhcmtHcmVlbjogIzM0NGU0MTtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3Jlc3QpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIDRweCBzb2xpZDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG59XFxuXFxuLmNvZmZlZUxvZ28ge1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDMuMnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggM3Z3IDEwcHggM3Z3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZXN0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBkb3VibGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZGFkN2NkO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBjb2xvcjogI2RhZDdjZDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmVlbik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4vKiBIb21lUGFnZSBDU1MgKi9cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uc2Vjb25kLW1haW4ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA1dnc7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWJvdXQtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uYWJvdXQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvdXJzLWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmhvdXJzLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5sb2NhdGlvbi10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiBIb21lUGFnZSBFTkQgKi9cXG5cXG4vKiBNZW51IEJlZ2luICovXFxuLm1lbnUtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9vZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IDMydnc7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmZvb2QtbmFtZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZvb2QtaW1hZ2Uge1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDI1dmg7XFxufVxcblxcbi5mb29kLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKiBNZW51IEVORCAqL1xcblxcbi8qIENvbnRhY3QgQmVnaW4gKi9cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICBwYWRkaW5nOiA0dmg7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBib3JkZXI6IHZhcigtLWZvcmVzdCkgMnB4IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggYmxhY2s7XFxufVxcblxcbi5jb250YWN0LWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWN0LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAzZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMjBweDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZWVuKTtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNtZXNzYWdlIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxufVxcblxcbiNtZXNzYWdlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNlbWFpbC1ob2xkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI21lc3NhZ2UtaG9sZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgbWFyZ2luLXRvcDogMXZoO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN1Ym1pdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmVlbik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAuY29mZmVlTG9nbyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIxMXB4KSB7XFxuICAuY29udGFjdC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gIH1cXG4gIC5jb250YWN0LXRleHQge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWhvbGRlciB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gIH1cXG4gIGZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGdhcDogMXB4O1xcbiAgfVxcblxcbiAgI2VtYWlsLWhvbGRlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICB9XFxuXFxuICAjbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gICNtZXNzYWdlLWhvbGRlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICB9XFxuXFxuICAuc3VibWl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLHlEQUF5RDtFQUN6RCxzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsaUJBQWlCOztBQUVqQixlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFFBQVE7RUFDUixxQ0FBcUM7RUFDckMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsYUFBYTs7QUFFYixrQkFBa0I7O0FBRWxCO0VBQ0UsVUFBVTtFQUNWLHlEQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaWx0K1dhcnAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICAtLWxpZ2h0ZXN0R3JleTogI2RhZDdjZDtcXG4gIC0tbGlnaHRHcmVlbjogI2EzYjE4YTtcXG4gIC0tZm9yZXN0OiAjNTg4MTU3O1xcbiAgLS1kYXJrR3JlZW46ICMzNDRlNDE7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZXN0KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiBibGFjayA0cHggc29saWQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5idXR0b24taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxufVxcblxcbi5jb2ZmZWVMb2dvIHtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAzLjJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDN2dyAxMHB4IDN2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVzdCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBibGFjayAzcHggZG91YmxlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2RhZDdjZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgY29sb3I6ICNkYWQ3Y2Q7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JlZW4pO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLyogSG9tZVBhZ2UgQ1NTICovXFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltZ3MvYmFja2dyb3VuZC1ob21lLXBhZ2UuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uc2Vjb25kLW1haW4ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA1dnc7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWJvdXQtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uYWJvdXQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvdXJzLWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmhvdXJzLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5sb2NhdGlvbi10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiBIb21lUGFnZSBFTkQgKi9cXG5cXG4vKiBNZW51IEJlZ2luICovXFxuLm1lbnUtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9vZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IDMydnc7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmZvb2QtbmFtZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZvb2QtaW1hZ2Uge1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDI1dmg7XFxufVxcblxcbi5mb29kLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKiBNZW51IEVORCAqL1xcblxcbi8qIENvbnRhY3QgQmVnaW4gKi9cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltZ3MvamFzb24tbGVlbS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgcGFkZGluZzogNHZoO1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgYm9yZGVyOiB2YXIoLS1mb3Jlc3QpIDJweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGJsYWNrO1xcbn1cXG5cXG4uY29udGFjdC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgM2ZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmVlbik7XFxuICBwYWRkaW5nOiAydmg7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbn1cXG5cXG4jbWVzc2FnZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jZW1haWwtaG9sZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNtZXNzYWdlLWhvbGRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIG1hcmdpbi10b3A6IDF2aDtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JlZW4pO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLmNvZmZlZUxvZ28ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMTFweCkge1xcbiAgLmNvbnRhY3QtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICB9XFxuICAuY29udGFjdC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxuXFxuICAuY29udGFjdC1ob2xkZXIge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDFweDtcXG4gIH1cXG5cXG4gICNlbWFpbC1ob2xkZXIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgfVxcblxcbiAgI21lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAjbWVzc2FnZS1ob2xkZXIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgfVxcblxcbiAgLnN1Ym1pdCB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZU1haW5Db250YWluZXIgPSAodGV4dCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVDaGlsZHJlbiA9ICh0ZXh0LCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlSW1nID0gKGltYWdlU291cmNlLCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudENsYXNzKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHRleHQsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRDbGFzcyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XG4gIGxldCByZW1vdmVNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKHJlbW92ZU1haW4uZmlyc3RDaGlsZCkge1xuICAgIHJlbW92ZU1haW4ucmVtb3ZlQ2hpbGQocmVtb3ZlTWFpbi5maXJzdENoaWxkKTtcbiAgfVxuICByZW1vdmVNYWluLnJlbW92ZSgpO1xufTtcblxuY29uc3QgY3JlYXRlRm9vZEl0ZW0gPSAobmFtZSwgZm9vZERlc2NyaXB0aW9uLCBwYXJlbnRDbGFzcywgaW1hZ2VMaW5rKSA9PiB7XG4gIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb29kLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudENsYXNzKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIpO1xuXG4gIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gIGZvb2QudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZCk7XG5cbiAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZm9vZEltYWdlLnNyYyA9IGAke2ltYWdlTGlua31gO1xuICBmb29kSW1hZ2UuY2xhc3NMaXN0LmFkZChcImZvb2QtaW1hZ2VcIik7XG5cbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuXG4gIGNvbnN0IGZvb2REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vZERlc2MuY2xhc3NMaXN0LmFkZChcImZvb2QtZGVzY3JpcHRpb25cIik7XG4gIGZvb2REZXNjLnRleHRDb250ZW50ID0gZm9vZERlc2NyaXB0aW9uO1xuXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZERlc2MpO1xufTtcblxuY29uc3QgY3JlYXRlRm9ybSA9IChpZCwgcGFyZW50Q2xhc3MsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKGlkLCBwYXJlbnRDbGFzcywgbGFiZWxUZXh0LCBiaWdJZCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudENsYXNzKTtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICBuZXdEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYmlnSWQpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbn07XG5cbmNvbnN0IHRleHRBcmVhID0gKGlkLCBwYXJlbnRDbGFzcywgbGFiZWxUZXh0LCBiaWdJZCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudENsYXNzKTtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICBuZXdEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYmlnSWQpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbn07XG5cbmNvbnN0IGNvbG9yQnV0dG9uID0gKGJ1dHRvbiwgb3RoZXIsIG90aGVyMikgPT4ge1xuICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbik7XG4gIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3RoZXIpO1xuICBjb25zdCByZW1vdmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdGhlcjIpO1xuXG4gIGhpZ2hsaWdodC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICByZW1vdmUuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcbiAgcmVtb3ZlMi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcixcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZUJ1dHRvbixcbiAgY2xlYXJQYWdlLFxuICBjcmVhdGVGb29kSXRlbSxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZUltZyxcbiAgY29sb3JCdXR0b24sXG4gIGNyZWF0ZUZvcm0sXG4gIHRleHRBcmVhLFxufTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZU1haW5Db250YWluZXIsXG4gIGNyZWF0ZUNoaWxkcmVuLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlRm9ybSxcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUltZyxcbiAgdGV4dEFyZWEsXG4gIGNyZWF0ZUJ1dHRvbixcbn0gZnJvbSBcIi4vYmFzaWNGdW5jdGlvbnNcIjtcblxuLy9zeW50YXg6IChUZXh0LCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKVxuLy9pbnB1dDogKGlkLCBwYXJlbnRDbGFzcywgTGFiZWxUZXh0KVxuLy9JbWFnZTogKGltYWdlU291cmNlLCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKSlcbmNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XG4gIGNyZWF0ZU1haW5Db250YWluZXIoXCJcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG4gIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xuXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLm1haW4tY29udGFpbmVyXCIsIFwiY29udGFjdC1ob2xkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFwiQ29udGFjdCBCZW4ncyBDb2ZmZWUhXCIsIFwiLmNvbnRhY3QtaG9sZGVyXCIsIFwiY29udGFjdC1oZWFkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFxuICAgIFwiTGV0cyBnZXQgdGhpcyBjb252ZXJzYXRpb24gc3RhcnRlZC4gVGVsbCB1cyBhIGJpdCBhYm91dCAgeW91cnNlbGYgYW5kIHdlJ2xsIGdldCBpbiB0b3VjaCBhcyBzb29uIGFzIHdlIGNhbi5cIixcbiAgICBcIi5jb250YWN0LWhvbGRlclwiLFxuICAgIFwiY29udGFjdC10ZXh0XCJcbiAgKTtcblxuICBjcmVhdGVGb3JtKFwiXCIsIFwiLmNvbnRhY3QtaG9sZGVyXCIsIFwiZm9ybVwiKTtcblxuICBjcmVhdGVJbnB1dChcImZpcnN0LW5hbWVcIiwgXCIuZm9ybVwiLCBcIkZpcnN0IE5hbWU6IFwiLCBcImZpcnN0LW5hbWUtaG9sZGVyXCIpO1xuXG4gIGNyZWF0ZUlucHV0KFwibGFzdC1uYW1lXCIsIFwiLmZvcm1cIiwgXCJMYXN0IE5hbWU6IFwiLCBcImxhc3QtbmFtZS1ob2xkZXJcIik7XG5cbiAgY3JlYXRlSW5wdXQoXCJlbWFpbFwiLCBcIi5mb3JtXCIsIFwiRW1haWw6IFwiLCBcImVtYWlsLWhvbGRlclwiKTtcblxuICB0ZXh0QXJlYShcIm1lc3NhZ2VcIiwgXCIuZm9ybVwiLCBcIk1lc3NhZ2U6IFwiLCBcIm1lc3NhZ2UtaG9sZGVyXCIpO1xuXG4gIGNyZWF0ZUJ1dHRvbihcIlN1Ym1pdFwiLCBcIi5mb3JtXCIsIFwic3VibWl0XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29udGFjdDtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZU1haW5Db250YWluZXIsXG4gIGNyZWF0ZUNoaWxkcmVuLFxuICBjcmVhdGVCdXR0b24sXG4gIGNyZWF0ZUltZyxcbn0gZnJvbSBcIi4vYmFzaWNGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vaW1ncy9jb2ZmZWUtb3V0bGluZS5zdmdcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAvLyBIVE1MIGNsYXNzIG1haW4tY29udGFpbmVyIG9uIHBhZ2VcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcihcIlwiLCBcImhlYWRlci1jb250YWluZXJcIik7XG5cbiAgLy8gc3ludGF4OiBjcmVhdGVCbGFuayh0ZXh0LCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKVxuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5oZWFkZXItY29udGFpbmVyXCIsIFwiaGVhZGVyXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIkJlbnMgU3VwZXIgQ29vbCBDb2ZmZWUgc2hvcFwiLCBcIi5oZWFkZXJcIiwgXCJuYW1lXCIpO1xuICBjcmVhdGVJbWcoXCIvc3JjL2ltZ3MvY29mZmVlLW91dGxpbmUuc3ZnXCIsIFwiLm5hbWVcIiwgXCJjb2ZmZWVMb2dvXCIpO1xuXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLmhlYWRlclwiLCBcImJ1dHRvbi1ob2xkZXJcIik7XG5cbiAgY3JlYXRlQnV0dG9uKFwiSG9tZVwiLCBcIi5idXR0b24taG9sZGVyXCIsIFwiaG9tZVwiKTtcbiAgY3JlYXRlQnV0dG9uKFwiTWVudVwiLCBcIi5idXR0b24taG9sZGVyXCIsIFwibWVudVwiKTtcbiAgY3JlYXRlQnV0dG9uKFwiQ29udGFjdFwiLCBcIi5idXR0b24taG9sZGVyXCIsIFwiY29udGFjdFwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUNoaWxkcmVuLFxuICBjcmVhdGVNYWluQ29udGFpbmVyLFxuICBjcmVhdGVJbWcsXG59IGZyb20gXCIuL2Jhc2ljRnVuY3Rpb25zXCI7XG5cbi8vIHN5bnRheDogY3JlYXRlQmxhbmsodGV4dCwgcGFyZW50Q2xhc3MsIGNsYXNzTmFtZSlcbmNvbnN0IHJlbmRlckhvbWVQYWdlID0gKCkgPT4ge1xuICBjcmVhdGVNYWluQ29udGFpbmVyKFwiXCIsIFwibWFpbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuICBiYWNrZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRhaW5lclwiKTtcblxuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5tYWluLWNvbnRhaW5lclwiLCBcInNlY29uZC1tYWluXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5zZWNvbmQtbWFpblwiLCBcImFib3V0LWNvbnRhaW5lclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJBYm91dFwiLCBcIi5hYm91dC1jb250YWluZXJcIiwgXCJhYm91dC1oZWFkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFxuICAgIFwiV2VsY29tZSB0byBvdXIgY29mZmVlIHNob3AsIHdoZXJlIHdlIGJlbGlldmUgdGhhdCBldmVyeSBjdXAgb2YgY29mZmVlIHNob3VsZCBiZSBhbiBleHBlcmllbmNlIHRvIHJlbWVtYmVyLiBMb2NhdGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgb3VyIGNvZmZlZSBzaG9wIGlzIHRoZSBwZXJmZWN0IHNwb3QgdG8gdW53aW5kIGFuZCByZWxheCwgY2F0Y2ggdXAgd2l0aCBmcmllbmRzIG9yIGdldCBzb21lIHdvcmsgZG9uZS4gV2UgcHJpZGUgb3Vyc2VsdmVzIG9uIHByb3ZpZGluZyB0aGUgaGlnaGVzdCBxdWFsaXR5IGNvZmZlZSwgc291cmNlZCBmcm9tIHRoZSBmaW5lc3Qgcm9hc3RlcnMgYXJvdW5kIHRoZSB3b3JsZC5Mb2NhdGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgb3VyIGNvZmZlZSBzaG9wIGlzIHRoZSBwZXJmZWN0IHNwb3QgdG8gdW53aW5kIGFuZCByZWxheCwgY2F0Y2ggdXAgd2l0aCBmcmllbmRzIG9yIGdldCBzb21lIHdvcmsgZG9uZS5cIixcbiAgICBcIi5hYm91dC1jb250YWluZXJcIixcbiAgICBcImFib3V0LXRleHRcIlxuICApO1xuXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLnNlY29uZC1tYWluXCIsIFwiaG91cnMtY29udGFpbmVyXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIkhvdXJzXCIsIFwiLmhvdXJzLWNvbnRhaW5lclwiLCBcImhvdXJzLWhlYWRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXG4gICAgXCJPdXIgY29mZmVlIHNob3AgaXMgb3BlbiA3IGRheXMgYSB3ZWVrIGZvciB5b3VyIGNvbnZlbmllbmNlLiBPdXIgaG91cnMgb2Ygb3BlcmF0aW9uIGFyZSBhcyBmb2xsb3dzOiBNb25kYXkgdG8gRnJpZGF5OiA3OjAwYW0gLSA3OjAwcG0gU2F0dXJkYXk6IDg6MDBhbSAtIDY6MDBwbSBTdW5kYXk6IDk6MDBhbSAtIDU6MDBwbSBXZSB1bmRlcnN0YW5kIHRoYXQgZXZlcnlvbmUgaGFzIGRpZmZlcmVudCBzY2hlZHVsZXMsIHNvIHdlIGFpbSB0byBvZmZlciBmbGV4aWJsZSBob3VycyB0aGF0IGNhbiBhY2NvbW1vZGF0ZSBhIHZhcmlldHkgb2YgbGlmZXN0eWxlcy4gV2hldGhlciB5b3UgbmVlZCB5b3VyIG1vcm5pbmcgY2FmZmVpbmUgZml4IG9yIGEgY296eSBwbGFjZSB0byB1bndpbmQgaW4gdGhlIGV2ZW5pbmcsIG91ciBkb29ycyBhcmUgYWx3YXlzIG9wZW4uXCIsXG4gICAgXCIuaG91cnMtY29udGFpbmVyXCIsXG4gICAgXCJob3Vycy10ZXh0XCJcbiAgKTtcblxuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5zZWNvbmQtbWFpblwiLCBcImxvY2F0aW9uLWNvbnRhaW5lclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJMb2NhdGlvblwiLCBcIi5sb2NhdGlvbi1jb250YWluZXJcIiwgXCJsb2NhdGlvbi1oZWFkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFxuICAgIFwiNTI5OCBXZXN0IExvb3AgRHJpdmUsIERhbGxhcywgVFgsIDc1MjE0XCIsXG4gICAgXCIubG9jYXRpb24tY29udGFpbmVyXCIsXG4gICAgXCJsb2NhdGlvbi10ZXh0XCJcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWVQYWdlO1xuIiwiaW1wb3J0IHsgY2xlYXJQYWdlLCBjb2xvckJ1dHRvbiB9IGZyb20gXCIuL2Jhc2ljRnVuY3Rpb25zXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gXCIuL2hvbWVQYWdlXCI7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jb25zdCBoaWdobGlnaHRIb21lID0gKCgpID0+IHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xufSkoKTtcbnJlbmRlckhvbWVQYWdlKCk7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuXG5idXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzd2l0Y2ggKGJ0bi50ZXh0Q29udGVudCkge1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgIHJlbmRlckhvbWVQYWdlKCk7XG4gICAgICAgIGNvbG9yQnV0dG9uKFwiLmhvbWVcIiwgXCIubWVudVwiLCBcIi5jb250YWN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgICAgIGNvbG9yQnV0dG9uKFwiLm1lbnVcIiwgXCIuaG9tZVwiLCBcIi5jb250YWN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICByZW5kZXJDb250YWN0KCk7XG4gICAgICAgIGNvbG9yQnV0dG9uKFwiLmNvbnRhY3RcIiwgXCIubWVudVwiLCBcIi5ob21lXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVGb29kSXRlbSxcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZU1haW5Db250YWluZXIsXG59IGZyb20gXCIuL2Jhc2ljRnVuY3Rpb25zXCI7XG5cbmltcG9ydCBcIi4vaW1ncy9lc3ByZXNzbzIucG5nXCI7XG5pbXBvcnQgXCIuL2ltZ3MvY2FwLnBuZ1wiO1xuaW1wb3J0IFwiLi9pbWdzL2xhdHRlLnBuZ1wiO1xuaW1wb3J0IFwiLi9pbWdzL21hY2hpYXR0by5wbmdcIjtcbmltcG9ydCBcIi4vaW1ncy9tb2NoYS5wbmdcIjtcbmltcG9ydCBcIi4vaW1ncy9hbWVyaWNhbm8ucG5nXCI7XG5cbi8vIHN5bnRheDogY3JlYXRlQmxhbmsoVGl0bGUgTmFtZSwgRGVzY3JpcHRpb24sIHBhcmVudENsYXNzKVxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcihcIlwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5tYWluLWNvbnRhaW5lclwiLCBcIm1lbnUtaG9sZGVyXCIpO1xuICBjcmVhdGVGb29kSXRlbShcbiAgICBcIkVzcHJlc3NvXCIsXG4gICAgXCJBIHN0cm9uZyBhbmQgY29uY2VudHJhdGVkIHNob3Qgb2YgY29mZmVlIG1hZGUgYnkgZm9yY2luZyBob3Qgd2F0ZXIgdGhyb3VnaCBmaW5lbHkgZ3JvdW5kIGNvZmZlZSBiZWFucy4gSXQgaGFzIGEgdGhpY2sgY3JlbWEgb24gdG9wIGFuZCBhIHJpY2ggZmxhdm9yLlwiLFxuICAgIFwiLm1lbnUtaG9sZGVyXCIsXG4gICAgXCIuLi9zcmMvaW1ncy9lc3ByZXNzbzIucG5nXCJcbiAgKTtcblxuICBjcmVhdGVGb29kSXRlbShcbiAgICBcIkNhcHB1Y2Npbm9cIixcbiAgICBcIkEgY2xhc3NpYyBJdGFsaWFuIGNvZmZlZSBkcmluayBtYWRlIHdpdGggZXNwcmVzc28sIHN0ZWFtZWQgbWlsaywgYW5kIGEgbGF5ZXIgb2YgZnJvdGhlZCBtaWxrIG9uIHRvcC4gSXQgaGFzIGEgY3JlYW15IHRleHR1cmUgYW5kIGEgYmFsYW5jZWQgZmxhdm9yLlwiLFxuICAgIFwiLm1lbnUtaG9sZGVyXCIsXG4gICAgXCIuLi9zcmMvaW1ncy9jYXAucG5nXCJcbiAgKTtcbiAgY3JlYXRlRm9vZEl0ZW0oXG4gICAgXCJBbWVyaWNhbm9cIixcbiAgICBcIkEgc2ltcGxlIGNvZmZlZSBkcmluayBtYWRlIGJ5IGFkZGluZyBob3Qgd2F0ZXIgdG8gYSBzaG90IG9mIGVzcHJlc3NvLiBJdCBoYXMgYSBtaWxkZXIgZmxhdm9yIHRoYW4gZXNwcmVzc28gYW5kIGEgaGlnaGVyIHZvbHVtZS5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIFwiLi4vc3JjL2ltZ3MvYW1lcmljYW5vLnBuZ1wiXG4gICk7XG4gIGNyZWF0ZUZvb2RJdGVtKFxuICAgIFwiTGF0dGVcIixcbiAgICBcIkEgcG9wdWxhciBjb2ZmZWUgZHJpbmsgbWFkZSB3aXRoIGVzcHJlc3NvIGFuZCBzdGVhbWVkIG1pbGssIHR5cGljYWxseSB3aXRoIGEgc21hbGwgYW1vdW50IG9mIGZvYW0gb24gdG9wLiBJdCBoYXMgYSBzbW9vdGggYW5kIGNyZWFteSB0ZXh0dXJlIHdpdGggYSBtaWxkIGVzcHJlc3NvIGZsYXZvci5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIFwiLi4vc3JjL2ltZ3MvbGF0dGUucG5nXCJcbiAgKTtcbiAgY3JlYXRlRm9vZEl0ZW0oXG4gICAgXCJNYWNjaGlhdG9cIixcbiAgICBcIkEgc21hbGwgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIGEgZG9sbG9wIG9mIHN0ZWFtZWQgbWlsayBvbiB0b3AuIEl0IGhhcyBhIGJvbGRlciBmbGF2b3IgdGhhbiBhIGxhdHRlIGFuZCBhIGxpZ2h0ZXIgdGV4dHVyZSB0aGFuIGEgY2FwcHVjY2luby5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIFwiLi4vc3JjL2ltZ3MvbWFjaGlhdHRvLnBuZ1wiXG4gICk7XG4gIGNyZWF0ZUZvb2RJdGVtKFxuICAgIFwiTW9jaGFcIixcbiAgICBcIkEgY29mZmVlIGRyaW5rIG1hZGUgd2l0aCBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBjaG9jb2xhdGUgc3lydXAgb3IgcG93ZGVyLCBhbmQgd2hpcHBlZCBjcmVhbSBvbiB0b3AuIEl0IGhhcyBhIHJpY2ggYW5kIGluZHVsZ2VudCBmbGF2b3Igd2l0aCBhIGhpbnQgb2YgY2hvY29sYXRlLlwiLFxuICAgIFwiLm1lbnUtaG9sZGVyXCIsXG4gICAgXCIuLi9zcmMvaW1ncy9tb2NoYS5wbmdcIlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==