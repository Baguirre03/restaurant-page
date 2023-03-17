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
  foodImage.src = imageLink;
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


// syntax: createBlank(Title Name, Description, parentClass)
const createMenu = () => {
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createMainContainer)("", "main-container");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createChildren)("", ".main-container", "menu-holder");
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Espresso",
    "A strong and concentrated shot of coffee made by forcing hot water through finely ground coffee beans. It has a thick crema on top and a rich flavor.",
    ".menu-holder",
    "/src/imgs/espresso2.png"
  );

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Cappuccino",
    "A classic Italian coffee drink made with espresso, steamed milk, and a layer of frothed milk on top. It has a creamy texture and a balanced flavor.",
    ".menu-holder",
    "/src/imgs/cap.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Americano",
    "A simple coffee drink made by adding hot water to a shot of espresso. It has a milder flavor than espresso and a higher volume.",
    ".menu-holder",
    "/src/imgs/americano.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Latte",
    "A popular coffee drink made with espresso and steamed milk, typically with a small amount of foam on top. It has a smooth and creamy texture with a mild espresso flavor.",
    ".menu-holder",
    "/src/imgs/latte.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Macchiato",
    "A small shot of espresso with a dollop of steamed milk on top. It has a bolder flavor than a latte and a lighter texture than a cappuccino.",
    ".menu-holder",
    "/src/imgs/machiatto.png"
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Mocha",
    "A coffee drink made with espresso, steamed milk, chocolate syrup or powder, and whipped cream on top. It has a rich and indulgent flavor with a hint of chocolate.",
    ".menu-holder",
    "/src/imgs/mocha.png"
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/imgs/background-home-page.jpg":
/*!*******************************************!*\
  !*** ./src/imgs/background-home-page.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4230aa5731cc64e8e66d.jpg";

/***/ }),

/***/ "./src/imgs/jason-leem.jpg":
/*!*********************************!*\
  !*** ./src/imgs/jason-leem.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cf5821a164d1af2c3a8.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBUztBQUNqQixRQUFRLG9EQUFhO0FBQ3JCLFFBQVEsNERBQVc7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0J5Qjs7QUFFMUI7QUFDQTtBQUNBLEVBQUUsb0VBQW1CO0FBQ3JCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Jhc2ljRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWdzL2JhY2tncm91bmQtaG9tZS1wYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvaW1ncy9qYXNvbi1sZWVtLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAtLWxpZ2h0ZXN0R3JleTogI2RhZDdjZDtcXG4gIC0tbGlnaHRHcmVlbjogI2EzYjE4YTtcXG4gIC0tZm9yZXN0OiAjNTg4MTU3O1xcbiAgLS1kYXJrR3JlZW46ICMzNDRlNDE7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZXN0KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiBibGFjayA0cHggc29saWQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5idXR0b24taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxufVxcblxcbi5jb2ZmZWVMb2dvIHtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAzLjJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDN2dyAxMHB4IDN2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVzdCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBibGFjayAzcHggZG91YmxlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2RhZDdjZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgY29sb3I6ICNkYWQ3Y2Q7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JlZW4pO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLyogSG9tZVBhZ2UgQ1NTICovXFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLnNlY29uZC1tYWluIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXZ3O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFib3V0LWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmFib3V0LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ob3Vycy1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5ob3Vycy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24tdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLyogSG9tZVBhZ2UgRU5EICovXFxuXFxuLyogTWVudSBCZWdpbiAqL1xcbi5tZW51LWhvbGRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiAzMnZ3O1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5mb29kLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mb29kLWltYWdlIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAyNXZoO1xcbn1cXG5cXG4uZm9vZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLyogTWVudSBFTkQgKi9cXG5cXG4vKiBDb250YWN0IEJlZ2luICovXFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgcGFkZGluZzogNHZoO1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgYm9yZGVyOiB2YXIoLS1mb3Jlc3QpIDJweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGJsYWNrO1xcbn1cXG5cXG4uY29udGFjdC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgM2ZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmVlbik7XFxuICBwYWRkaW5nOiAydmg7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbn1cXG5cXG4jbWVzc2FnZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jZW1haWwtaG9sZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNtZXNzYWdlLWhvbGRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIG1hcmdpbi10b3A6IDF2aDtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JlZW4pO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLmNvZmZlZUxvZ28ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMTFweCkge1xcbiAgLmNvbnRhY3QtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICB9XFxuICAuY29udGFjdC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxuXFxuICAuY29udGFjdC1ob2xkZXIge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDFweDtcXG4gIH1cXG5cXG4gICNlbWFpbC1ob2xkZXIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgfVxcblxcbiAgI21lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAjbWVzc2FnZS1ob2xkZXIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgfVxcblxcbiAgLnN1Ym1pdCB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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QzlCLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgLS1saWdodGVzdEdyZXk6ICNkYWQ3Y2Q7XFxuICAtLWxpZ2h0R3JlZW46ICNhM2IxOGE7XFxuICAtLWZvcmVzdDogIzU4ODE1NztcXG4gIC0tZGFya0dyZWVuOiAjMzQ0ZTQxO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVzdCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgNHB4IHNvbGlkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbn1cXG5cXG4uY29mZmVlTG9nbyB7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMy4ycmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAzdncgMTBweCAzdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3Jlc3QpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgM3B4IGRvdWJsZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNkYWQ3Y2Q7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGNvbG9yOiAjZGFkN2NkO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWdyb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZWVuKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi8qIEhvbWVQYWdlIENTUyAqL1xcblxcbi5ob21lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWdzL2JhY2tncm91bmQtaG9tZS1wYWdlLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLnNlY29uZC1tYWluIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXZ3O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFib3V0LWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmFib3V0LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ob3Vycy1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5ob3Vycy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24tdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLyogSG9tZVBhZ2UgRU5EICovXFxuXFxuLyogTWVudSBCZWdpbiAqL1xcbi5tZW51LWhvbGRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiAzMnZ3O1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5mb29kLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mb29kLWltYWdlIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAyNXZoO1xcbn1cXG5cXG4uZm9vZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLyogTWVudSBFTkQgKi9cXG5cXG4vKiBDb250YWN0IEJlZ2luICovXFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWdzL2phc29uLWxlZW0uanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIHBhZGRpbmc6IDR2aDtcXG4gIGhlaWdodDogNjB2aDtcXG4gIGJvcmRlcjogdmFyKC0tZm9yZXN0KSAycHggc29saWQ7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBibGFjaztcXG59XFxuXFxuLmNvbnRhY3QtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDNmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JlZW4pO1xcbiAgcGFkZGluZzogMnZoO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG59XFxuXFxuI21lc3NhZ2U6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2VtYWlsLWhvbGRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jbWVzc2FnZS1ob2xkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICBtYXJnaW4tdG9wOiAxdmg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3VibWl0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZWVuKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5jb2ZmZWVMb2dvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjExcHgpIHtcXG4gIC5jb250YWN0LWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgfVxcbiAgLmNvbnRhY3QtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaG9sZGVyIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgfVxcbiAgZm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgZ2FwOiAxcHg7XFxuICB9XFxuXFxuICAjZW1haWwtaG9sZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIH1cXG5cXG4gICNtZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgI21lc3NhZ2UtaG9sZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIH1cXG5cXG4gIC5zdWJtaXQge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVNYWluQ29udGFpbmVyID0gKHRleHQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlQ2hpbGRyZW4gPSAodGV4dCwgcGFyZW50Q2xhc3MsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudENsYXNzKTtcblxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChpbWFnZVNvdXJjZSwgcGFyZW50Q2xhc3MsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IGltYWdlU291cmNlO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRDbGFzcyk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0LCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY2xlYXJQYWdlID0gKCkgPT4ge1xuICBsZXQgcmVtb3ZlTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG4gIHdoaWxlIChyZW1vdmVNYWluLmZpcnN0Q2hpbGQpIHtcbiAgICByZW1vdmVNYWluLnJlbW92ZUNoaWxkKHJlbW92ZU1haW4uZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmVtb3ZlTWFpbi5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb2RJdGVtID0gKG5hbWUsIGZvb2REZXNjcmlwdGlvbiwgcGFyZW50Q2xhc3MsIGltYWdlTGluaykgPT4ge1xuICBjb25zdCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRDbGFzcyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyKTtcblxuICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vZC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICBmb29kLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2QpO1xuXG4gIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZvb2RJbWFnZS5zcmMgPSBpbWFnZUxpbms7XG4gIGZvb2RJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWFnZVwiKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG5cbiAgY29uc3QgZm9vZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kRGVzYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgZm9vZERlc2MudGV4dENvbnRlbnQgPSBmb29kRGVzY3JpcHRpb247XG5cbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kRGVzYyk7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKGlkLCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRDbGFzcyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaWQsIHBhcmVudENsYXNzLCBsYWJlbFRleHQsIGJpZ0lkKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBiaWdJZCk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSAoaWQsIHBhcmVudENsYXNzLCBsYWJlbFRleHQsIGJpZ0lkKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBiaWdJZCk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xufTtcblxuY29uc3QgY29sb3JCdXR0b24gPSAoYnV0dG9uLCBvdGhlciwgb3RoZXIyKSA9PiB7XG4gIGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKTtcbiAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdGhlcik7XG4gIGNvbnN0IHJlbW92ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG90aGVyMik7XG5cbiAgaGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gIHJlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpO1xuICByZW1vdmUyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVNYWluQ29udGFpbmVyLFxuICBjcmVhdGVDaGlsZHJlbixcbiAgY3JlYXRlQnV0dG9uLFxuICBjbGVhclBhZ2UsXG4gIGNyZWF0ZUZvb2RJdGVtLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlSW1nLFxuICBjb2xvckJ1dHRvbixcbiAgY3JlYXRlRm9ybSxcbiAgdGV4dEFyZWEsXG59O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcixcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVGb3JtLFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW1nLFxuICB0ZXh0QXJlYSxcbiAgY3JlYXRlQnV0dG9uLFxufSBmcm9tIFwiLi9iYXNpY0Z1bmN0aW9uc1wiO1xuXG4vL3N5bnRheDogKFRleHQsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpXG4vL2lucHV0OiAoaWQsIHBhcmVudENsYXNzLCBMYWJlbFRleHQpXG4vL0ltYWdlOiAoaW1hZ2VTb3VyY2UsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpKVxuY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcihcIlwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgY3JlYXRlQ2hpbGRyZW4oXCJcIiwgXCIubWFpbi1jb250YWluZXJcIiwgXCJjb250YWN0LWhvbGRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJDb250YWN0IEJlbidzIENvZmZlZSFcIiwgXCIuY29udGFjdC1ob2xkZXJcIiwgXCJjb250YWN0LWhlYWRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXG4gICAgXCJMZXRzIGdldCB0aGlzIGNvbnZlcnNhdGlvbiBzdGFydGVkLiBUZWxsIHVzIGEgYml0IGFib3V0ICB5b3Vyc2VsZiBhbmQgd2UnbGwgZ2V0IGluIHRvdWNoIGFzIHNvb24gYXMgd2UgY2FuLlwiLFxuICAgIFwiLmNvbnRhY3QtaG9sZGVyXCIsXG4gICAgXCJjb250YWN0LXRleHRcIlxuICApO1xuXG4gIGNyZWF0ZUZvcm0oXCJcIiwgXCIuY29udGFjdC1ob2xkZXJcIiwgXCJmb3JtXCIpO1xuXG4gIGNyZWF0ZUlucHV0KFwiZmlyc3QtbmFtZVwiLCBcIi5mb3JtXCIsIFwiRmlyc3QgTmFtZTogXCIsIFwiZmlyc3QtbmFtZS1ob2xkZXJcIik7XG5cbiAgY3JlYXRlSW5wdXQoXCJsYXN0LW5hbWVcIiwgXCIuZm9ybVwiLCBcIkxhc3QgTmFtZTogXCIsIFwibGFzdC1uYW1lLWhvbGRlclwiKTtcblxuICBjcmVhdGVJbnB1dChcImVtYWlsXCIsIFwiLmZvcm1cIiwgXCJFbWFpbDogXCIsIFwiZW1haWwtaG9sZGVyXCIpO1xuXG4gIHRleHRBcmVhKFwibWVzc2FnZVwiLCBcIi5mb3JtXCIsIFwiTWVzc2FnZTogXCIsIFwibWVzc2FnZS1ob2xkZXJcIik7XG5cbiAgY3JlYXRlQnV0dG9uKFwiU3VibWl0XCIsIFwiLmZvcm1cIiwgXCJzdWJtaXRcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcixcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZUJ1dHRvbixcbiAgY3JlYXRlSW1nLFxufSBmcm9tIFwiLi9iYXNpY0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIC8vIEhUTUwgY2xhc3MgbWFpbi1jb250YWluZXIgb24gcGFnZVxuICBjcmVhdGVNYWluQ29udGFpbmVyKFwiXCIsIFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcblxuICAvLyBzeW50YXg6IGNyZWF0ZUJsYW5rKHRleHQsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLmhlYWRlci1jb250YWluZXJcIiwgXCJoZWFkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFwiQmVucyBTdXBlciBDb29sIENvZmZlZSBzaG9wXCIsIFwiLmhlYWRlclwiLCBcIm5hbWVcIik7XG4gIGNyZWF0ZUltZyhcIi9zcmMvaW1ncy9jb2ZmZWUtb3V0bGluZS5zdmdcIiwgXCIubmFtZVwiLCBcImNvZmZlZUxvZ29cIik7XG5cbiAgY3JlYXRlQ2hpbGRyZW4oXCJcIiwgXCIuaGVhZGVyXCIsIFwiYnV0dG9uLWhvbGRlclwiKTtcblxuICBjcmVhdGVCdXR0b24oXCJIb21lXCIsIFwiLmJ1dHRvbi1ob2xkZXJcIiwgXCJob21lXCIpO1xuICBjcmVhdGVCdXR0b24oXCJNZW51XCIsIFwiLmJ1dHRvbi1ob2xkZXJcIiwgXCJtZW51XCIpO1xuICBjcmVhdGVCdXR0b24oXCJDb250YWN0XCIsIFwiLmJ1dHRvbi1ob2xkZXJcIiwgXCJjb250YWN0XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZU1haW5Db250YWluZXIsXG4gIGNyZWF0ZUltZyxcbn0gZnJvbSBcIi4vYmFzaWNGdW5jdGlvbnNcIjtcblxuLy8gc3ludGF4OiBjcmVhdGVCbGFuayh0ZXh0LCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKVxuY29uc3QgcmVuZGVySG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNyZWF0ZU1haW5Db250YWluZXIoXCJcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG4gIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xuXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLm1haW4tY29udGFpbmVyXCIsIFwic2Vjb25kLW1haW5cIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLnNlY29uZC1tYWluXCIsIFwiYWJvdXQtY29udGFpbmVyXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIkFib3V0XCIsIFwiLmFib3V0LWNvbnRhaW5lclwiLCBcImFib3V0LWhlYWRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXG4gICAgXCJXZWxjb21lIHRvIG91ciBjb2ZmZWUgc2hvcCwgd2hlcmUgd2UgYmVsaWV2ZSB0aGF0IGV2ZXJ5IGN1cCBvZiBjb2ZmZWUgc2hvdWxkIGJlIGFuIGV4cGVyaWVuY2UgdG8gcmVtZW1iZXIuIExvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LCBvdXIgY29mZmVlIHNob3AgaXMgdGhlIHBlcmZlY3Qgc3BvdCB0byB1bndpbmQgYW5kIHJlbGF4LCBjYXRjaCB1cCB3aXRoIGZyaWVuZHMgb3IgZ2V0IHNvbWUgd29yayBkb25lLiBXZSBwcmlkZSBvdXJzZWx2ZXMgb24gcHJvdmlkaW5nIHRoZSBoaWdoZXN0IHF1YWxpdHkgY29mZmVlLCBzb3VyY2VkIGZyb20gdGhlIGZpbmVzdCByb2FzdGVycyBhcm91bmQgdGhlIHdvcmxkLkxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LCBvdXIgY29mZmVlIHNob3AgaXMgdGhlIHBlcmZlY3Qgc3BvdCB0byB1bndpbmQgYW5kIHJlbGF4LCBjYXRjaCB1cCB3aXRoIGZyaWVuZHMgb3IgZ2V0IHNvbWUgd29yayBkb25lLlwiLFxuICAgIFwiLmFib3V0LWNvbnRhaW5lclwiLFxuICAgIFwiYWJvdXQtdGV4dFwiXG4gICk7XG5cbiAgY3JlYXRlQ2hpbGRyZW4oXCJcIiwgXCIuc2Vjb25kLW1haW5cIiwgXCJob3Vycy1jb250YWluZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFwiSG91cnNcIiwgXCIuaG91cnMtY29udGFpbmVyXCIsIFwiaG91cnMtaGVhZGVyXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcbiAgICBcIk91ciBjb2ZmZWUgc2hvcCBpcyBvcGVuIDcgZGF5cyBhIHdlZWsgZm9yIHlvdXIgY29udmVuaWVuY2UuIE91ciBob3VycyBvZiBvcGVyYXRpb24gYXJlIGFzIGZvbGxvd3M6IE1vbmRheSB0byBGcmlkYXk6IDc6MDBhbSAtIDc6MDBwbSBTYXR1cmRheTogODowMGFtIC0gNjowMHBtIFN1bmRheTogOTowMGFtIC0gNTowMHBtIFdlIHVuZGVyc3RhbmQgdGhhdCBldmVyeW9uZSBoYXMgZGlmZmVyZW50IHNjaGVkdWxlcywgc28gd2UgYWltIHRvIG9mZmVyIGZsZXhpYmxlIGhvdXJzIHRoYXQgY2FuIGFjY29tbW9kYXRlIGEgdmFyaWV0eSBvZiBsaWZlc3R5bGVzLiBXaGV0aGVyIHlvdSBuZWVkIHlvdXIgbW9ybmluZyBjYWZmZWluZSBmaXggb3IgYSBjb3p5IHBsYWNlIHRvIHVud2luZCBpbiB0aGUgZXZlbmluZywgb3VyIGRvb3JzIGFyZSBhbHdheXMgb3Blbi5cIixcbiAgICBcIi5ob3Vycy1jb250YWluZXJcIixcbiAgICBcImhvdXJzLXRleHRcIlxuICApO1xuXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLnNlY29uZC1tYWluXCIsIFwibG9jYXRpb24tY29udGFpbmVyXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIkxvY2F0aW9uXCIsIFwiLmxvY2F0aW9uLWNvbnRhaW5lclwiLCBcImxvY2F0aW9uLWhlYWRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXG4gICAgXCI1Mjk4IFdlc3QgTG9vcCBEcml2ZSwgRGFsbGFzLCBUWCwgNzUyMTRcIixcbiAgICBcIi5sb2NhdGlvbi1jb250YWluZXJcIixcbiAgICBcImxvY2F0aW9uLXRleHRcIlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZVBhZ2U7XG4iLCJpbXBvcnQgeyBjbGVhclBhZ2UsIGNvbG9yQnV0dG9uIH0gZnJvbSBcIi4vYmFzaWNGdW5jdGlvbnNcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgcmVuZGVySG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jcmVhdGVIZWFkZXIoKTtcbmNvbnN0IGhpZ2hsaWdodEhvbWUgPSAoKCkgPT4ge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG59KSgpO1xucmVuZGVySG9tZVBhZ2UoKTtcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5cbmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN3aXRjaCAoYnRuLnRleHRDb250ZW50KSB7XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgcmVuZGVySG9tZVBhZ2UoKTtcbiAgICAgICAgY29sb3JCdXR0b24oXCIuaG9tZVwiLCBcIi5tZW51XCIsIFwiLmNvbnRhY3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgIGNyZWF0ZU1lbnUoKTtcbiAgICAgICAgY29sb3JCdXR0b24oXCIubWVudVwiLCBcIi5ob21lXCIsIFwiLmNvbnRhY3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgIHJlbmRlckNvbnRhY3QoKTtcbiAgICAgICAgY29sb3JCdXR0b24oXCIuY29udGFjdFwiLCBcIi5tZW51XCIsIFwiLmhvbWVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUZvb2RJdGVtLFxuICBjcmVhdGVJbWcsXG4gIGNyZWF0ZUNoaWxkcmVuLFxuICBjcmVhdGVNYWluQ29udGFpbmVyLFxufSBmcm9tIFwiLi9iYXNpY0Z1bmN0aW9uc1wiO1xuXG4vLyBzeW50YXg6IGNyZWF0ZUJsYW5rKFRpdGxlIE5hbWUsIERlc2NyaXB0aW9uLCBwYXJlbnRDbGFzcylcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNyZWF0ZU1haW5Db250YWluZXIoXCJcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJcIiwgXCIubWFpbi1jb250YWluZXJcIiwgXCJtZW51LWhvbGRlclwiKTtcbiAgY3JlYXRlRm9vZEl0ZW0oXG4gICAgXCJFc3ByZXNzb1wiLFxuICAgIFwiQSBzdHJvbmcgYW5kIGNvbmNlbnRyYXRlZCBzaG90IG9mIGNvZmZlZSBtYWRlIGJ5IGZvcmNpbmcgaG90IHdhdGVyIHRocm91Z2ggZmluZWx5IGdyb3VuZCBjb2ZmZWUgYmVhbnMuIEl0IGhhcyBhIHRoaWNrIGNyZW1hIG9uIHRvcCBhbmQgYSByaWNoIGZsYXZvci5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIFwiL3NyYy9pbWdzL2VzcHJlc3NvMi5wbmdcIlxuICApO1xuXG4gIGNyZWF0ZUZvb2RJdGVtKFxuICAgIFwiQ2FwcHVjY2lub1wiLFxuICAgIFwiQSBjbGFzc2ljIEl0YWxpYW4gY29mZmVlIGRyaW5rIG1hZGUgd2l0aCBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBhbmQgYSBsYXllciBvZiBmcm90aGVkIG1pbGsgb24gdG9wLiBJdCBoYXMgYSBjcmVhbXkgdGV4dHVyZSBhbmQgYSBiYWxhbmNlZCBmbGF2b3IuXCIsXG4gICAgXCIubWVudS1ob2xkZXJcIixcbiAgICBcIi9zcmMvaW1ncy9jYXAucG5nXCJcbiAgKTtcbiAgY3JlYXRlRm9vZEl0ZW0oXG4gICAgXCJBbWVyaWNhbm9cIixcbiAgICBcIkEgc2ltcGxlIGNvZmZlZSBkcmluayBtYWRlIGJ5IGFkZGluZyBob3Qgd2F0ZXIgdG8gYSBzaG90IG9mIGVzcHJlc3NvLiBJdCBoYXMgYSBtaWxkZXIgZmxhdm9yIHRoYW4gZXNwcmVzc28gYW5kIGEgaGlnaGVyIHZvbHVtZS5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIFwiL3NyYy9pbWdzL2FtZXJpY2Fuby5wbmdcIlxuICApO1xuICBjcmVhdGVGb29kSXRlbShcbiAgICBcIkxhdHRlXCIsXG4gICAgXCJBIHBvcHVsYXIgY29mZmVlIGRyaW5rIG1hZGUgd2l0aCBlc3ByZXNzbyBhbmQgc3RlYW1lZCBtaWxrLCB0eXBpY2FsbHkgd2l0aCBhIHNtYWxsIGFtb3VudCBvZiBmb2FtIG9uIHRvcC4gSXQgaGFzIGEgc21vb3RoIGFuZCBjcmVhbXkgdGV4dHVyZSB3aXRoIGEgbWlsZCBlc3ByZXNzbyBmbGF2b3IuXCIsXG4gICAgXCIubWVudS1ob2xkZXJcIixcbiAgICBcIi9zcmMvaW1ncy9sYXR0ZS5wbmdcIlxuICApO1xuICBjcmVhdGVGb29kSXRlbShcbiAgICBcIk1hY2NoaWF0b1wiLFxuICAgIFwiQSBzbWFsbCBzaG90IG9mIGVzcHJlc3NvIHdpdGggYSBkb2xsb3Agb2Ygc3RlYW1lZCBtaWxrIG9uIHRvcC4gSXQgaGFzIGEgYm9sZGVyIGZsYXZvciB0aGFuIGEgbGF0dGUgYW5kIGEgbGlnaHRlciB0ZXh0dXJlIHRoYW4gYSBjYXBwdWNjaW5vLlwiLFxuICAgIFwiLm1lbnUtaG9sZGVyXCIsXG4gICAgXCIvc3JjL2ltZ3MvbWFjaGlhdHRvLnBuZ1wiXG4gICk7XG4gIGNyZWF0ZUZvb2RJdGVtKFxuICAgIFwiTW9jaGFcIixcbiAgICBcIkEgY29mZmVlIGRyaW5rIG1hZGUgd2l0aCBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBjaG9jb2xhdGUgc3lydXAgb3IgcG93ZGVyLCBhbmQgd2hpcHBlZCBjcmVhbSBvbiB0b3AuIEl0IGhhcyBhIHJpY2ggYW5kIGluZHVsZ2VudCBmbGF2b3Igd2l0aCBhIGhpbnQgb2YgY2hvY29sYXRlLlwiLFxuICAgIFwiLm1lbnUtaG9sZGVyXCIsXG4gICAgXCIvc3JjL2ltZ3MvbW9jaGEucG5nXCJcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=