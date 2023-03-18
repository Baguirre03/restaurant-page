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
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createImg)(_imgs_coffee_outline_svg__WEBPACK_IMPORTED_MODULE_1__, ".name", "coffeeLogo");

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
    _imgs_espresso2_png__WEBPACK_IMPORTED_MODULE_1__
  );

  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Cappuccino",
    "A classic Italian coffee drink made with espresso, steamed milk, and a layer of frothed milk on top. It has a creamy texture and a balanced flavor.",
    ".menu-holder",
    _imgs_cap_png__WEBPACK_IMPORTED_MODULE_2__
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Americano",
    "A simple coffee drink made by adding hot water to a shot of espresso. It has a milder flavor than espresso and a higher volume.",
    ".menu-holder",
    _imgs_americano_png__WEBPACK_IMPORTED_MODULE_6__
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Latte",
    "A popular coffee drink made with espresso and steamed milk, typically with a small amount of foam on top. It has a smooth and creamy texture with a mild espresso flavor.",
    ".menu-holder",
    _imgs_latte_png__WEBPACK_IMPORTED_MODULE_3__
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Macchiato",
    "A small shot of espresso with a dollop of steamed milk on top. It has a bolder flavor than a latte and a lighter texture than a cappuccino.",
    ".menu-holder",
    _imgs_machiatto_png__WEBPACK_IMPORTED_MODULE_4__
  );
  (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
    "Mocha",
    "A coffee drink made with espresso, steamed milk, chocolate syrup or powder, and whipped cream on top. It has a rich and indulgent flavor with a hint of chocolate.",
    ".menu-holder",
    _imgs_mocha_png__WEBPACK_IMPORTED_MODULE_5__
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLDREQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRLDBEQUFTO0FBQ2pCLFFBQVEsb0RBQWE7QUFDckIsUUFBUSw0REFBVztBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3lCOztBQUVrQjtBQUNYO0FBQ0k7QUFDRztBQUNIO0FBQ1E7O0FBRTdDO0FBQ0E7QUFDQSxFQUFFLG9FQUFtQjtBQUNyQixFQUFFLCtEQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBUTtBQUNaOztBQUVBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwQ0FBRztBQUNQO0FBQ0EsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQSxFQUFFLCtEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLElBQUksNENBQUs7QUFDVDtBQUNBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBSTtBQUNSO0FBQ0EsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRDQUFLO0FBQ1Q7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9iYXNpY0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvaW1ncy9iYWNrZ3JvdW5kLWhvbWUtcGFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltZ3MvamFzb24tbGVlbS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRpbHQrV2FycCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgLS1saWdodGVzdEdyZXk6ICNkYWQ3Y2Q7XFxuICAtLWxpZ2h0R3JlZW46ICNhM2IxOGE7XFxuICAtLWZvcmVzdDogIzU4ODE1NztcXG4gIC0tZGFya0dyZWVuOiAjMzQ0ZTQxO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVzdCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgNHB4IHNvbGlkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbn1cXG5cXG4uY29mZmVlTG9nbyB7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMy4ycmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAzdncgMTBweCAzdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3Jlc3QpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgM3B4IGRvdWJsZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNkYWQ3Y2Q7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGNvbG9yOiAjZGFkN2NkO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWdyb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZWVuKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi8qIEhvbWVQYWdlIENTUyAqL1xcblxcbi5ob21lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5zZWNvbmQtbWFpbiB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDV2dztcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hYm91dC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5hYm91dC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaG91cnMtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaG91cnMtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qIEhvbWVQYWdlIEVORCAqL1xcblxcbi8qIE1lbnUgQmVnaW4gKi9cXG4ubWVudS1ob2xkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb29kLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogMzJ2dztcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZm9vZC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZm9vZC1pbWFnZSB7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMjV2aDtcXG59XFxuXFxuLmZvb2QtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi8qIE1lbnUgRU5EICovXFxuXFxuLyogQ29udGFjdCBCZWdpbiAqL1xcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIHBhZGRpbmc6IDR2aDtcXG4gIGhlaWdodDogNjB2aDtcXG4gIGJvcmRlcjogdmFyKC0tZm9yZXN0KSAycHggc29saWQ7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBibGFjaztcXG59XFxuXFxuLmNvbnRhY3QtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDNmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JlZW4pO1xcbiAgcGFkZGluZzogMnZoO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG59XFxuXFxuI21lc3NhZ2U6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2VtYWlsLWhvbGRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jbWVzc2FnZS1ob2xkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICBtYXJnaW4tdG9wOiAxdmg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3VibWl0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVzdEdyZXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZWVuKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5jb2ZmZWVMb2dvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjExcHgpIHtcXG4gIC5jb250YWN0LWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgfVxcbiAgLmNvbnRhY3QtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaG9sZGVyIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgfVxcbiAgZm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgZ2FwOiAxcHg7XFxuICB9XFxuXFxuICAjZW1haWwtaG9sZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIH1cXG5cXG4gICNtZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgI21lc3NhZ2UtaG9sZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIH1cXG5cXG4gIC5zdWJtaXQge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UseURBQXlEO0VBQ3pELHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxpQkFBaUI7O0FBRWpCLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsUUFBUTtFQUNSLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxhQUFhOztBQUViLGtCQUFrQjs7QUFFbEI7RUFDRSxVQUFVO0VBQ1YseURBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLFFBQVE7RUFDVjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRpbHQrV2FycCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIC0tbGlnaHRlc3RHcmV5OiAjZGFkN2NkO1xcbiAgLS1saWdodEdyZWVuOiAjYTNiMThhO1xcbiAgLS1mb3Jlc3Q6ICM1ODgxNTc7XFxuICAtLWRhcmtHcmVlbjogIzM0NGU0MTtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3Jlc3QpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIDRweCBzb2xpZDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG59XFxuXFxuLmNvZmZlZUxvZ28ge1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDMuMnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggM3Z3IDEwcHggM3Z3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZXN0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBkb3VibGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZGFkN2NkO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBjb2xvcjogI2RhZDdjZDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmVlbik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4vKiBIb21lUGFnZSBDU1MgKi9cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvaW1ncy9iYWNrZ3JvdW5kLWhvbWUtcGFnZS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5zZWNvbmQtbWFpbiB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDV2dztcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hYm91dC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5hYm91dC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaG91cnMtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaG91cnMtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qIEhvbWVQYWdlIEVORCAqL1xcblxcbi8qIE1lbnUgQmVnaW4gKi9cXG4ubWVudS1ob2xkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb29kLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogMzJ2dztcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZm9vZC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZm9vZC1pbWFnZSB7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMjV2aDtcXG59XFxuXFxuLmZvb2QtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi8qIE1lbnUgRU5EICovXFxuXFxuLyogQ29udGFjdCBCZWdpbiAqL1xcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvaW1ncy9qYXNvbi1sZWVtLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICBwYWRkaW5nOiA0dmg7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBib3JkZXI6IHZhcigtLWZvcmVzdCkgMnB4IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggYmxhY2s7XFxufVxcblxcbi5jb250YWN0LWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWN0LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAzZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMjBweDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZWVuKTtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNtZXNzYWdlIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxufVxcblxcbiNtZXNzYWdlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNlbWFpbC1ob2xkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI21lc3NhZ2UtaG9sZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgbWFyZ2luLXRvcDogMXZoO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0R3JleSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN1Ym1pdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlc3RHcmV5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmVlbik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAuY29mZmVlTG9nbyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIxMXB4KSB7XFxuICAuY29udGFjdC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gIH1cXG4gIC5jb250YWN0LXRleHQge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWhvbGRlciB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gIH1cXG4gIGZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGdhcDogMXB4O1xcbiAgfVxcblxcbiAgI2VtYWlsLWhvbGRlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICB9XFxuXFxuICAjbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gICNtZXNzYWdlLWhvbGRlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICB9XFxuXFxuICAuc3VibWl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlTWFpbkNvbnRhaW5lciA9ICh0ZXh0LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoaWxkcmVuID0gKHRleHQsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRDbGFzcyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVJbWcgPSAoaW1hZ2VTb3VyY2UsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG59O1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodGV4dCwgcGFyZW50Q2xhc3MsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudENsYXNzKTtcblxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNsZWFyUGFnZSA9ICgpID0+IHtcbiAgbGV0IHJlbW92ZU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuICB3aGlsZSAocmVtb3ZlTWFpbi5maXJzdENoaWxkKSB7XG4gICAgcmVtb3ZlTWFpbi5yZW1vdmVDaGlsZChyZW1vdmVNYWluLmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJlbW92ZU1haW4ucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVGb29kSXRlbSA9IChuYW1lLCBmb29kRGVzY3JpcHRpb24sIHBhcmVudENsYXNzLCBpbWFnZUxpbmspID0+IHtcbiAgY29uc3QgZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2QtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcik7XG5cbiAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2QuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgZm9vZC50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kKTtcblxuICBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmb29kSW1hZ2Uuc3JjID0gYCR7aW1hZ2VMaW5rfWA7XG4gIGZvb2RJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWFnZVwiKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG5cbiAgY29uc3QgZm9vZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kRGVzYy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1kZXNjcmlwdGlvblwiKTtcbiAgZm9vZERlc2MudGV4dENvbnRlbnQgPSBmb29kRGVzY3JpcHRpb247XG5cbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kRGVzYyk7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKGlkLCBwYXJlbnRDbGFzcywgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRDbGFzcyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaWQsIHBhcmVudENsYXNzLCBsYWJlbFRleHQsIGJpZ0lkKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBiaWdJZCk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSAoaWQsIHBhcmVudENsYXNzLCBsYWJlbFRleHQsIGJpZ0lkKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Q2xhc3MpO1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBiaWdJZCk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xufTtcblxuY29uc3QgY29sb3JCdXR0b24gPSAoYnV0dG9uLCBvdGhlciwgb3RoZXIyKSA9PiB7XG4gIGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKTtcbiAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdGhlcik7XG4gIGNvbnN0IHJlbW92ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG90aGVyMik7XG5cbiAgaGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gIHJlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpO1xuICByZW1vdmUyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVNYWluQ29udGFpbmVyLFxuICBjcmVhdGVDaGlsZHJlbixcbiAgY3JlYXRlQnV0dG9uLFxuICBjbGVhclBhZ2UsXG4gIGNyZWF0ZUZvb2RJdGVtLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlSW1nLFxuICBjb2xvckJ1dHRvbixcbiAgY3JlYXRlRm9ybSxcbiAgdGV4dEFyZWEsXG59O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcixcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVGb3JtLFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW1nLFxuICB0ZXh0QXJlYSxcbiAgY3JlYXRlQnV0dG9uLFxufSBmcm9tIFwiLi9iYXNpY0Z1bmN0aW9uc1wiO1xuXG4vL3N5bnRheDogKFRleHQsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpXG4vL2lucHV0OiAoaWQsIHBhcmVudENsYXNzLCBMYWJlbFRleHQpXG4vL0ltYWdlOiAoaW1hZ2VTb3VyY2UsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpKVxuY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcihcIlwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgY3JlYXRlQ2hpbGRyZW4oXCJcIiwgXCIubWFpbi1jb250YWluZXJcIiwgXCJjb250YWN0LWhvbGRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJDb250YWN0IEJlbidzIENvZmZlZSFcIiwgXCIuY29udGFjdC1ob2xkZXJcIiwgXCJjb250YWN0LWhlYWRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXG4gICAgXCJMZXRzIGdldCB0aGlzIGNvbnZlcnNhdGlvbiBzdGFydGVkLiBUZWxsIHVzIGEgYml0IGFib3V0ICB5b3Vyc2VsZiBhbmQgd2UnbGwgZ2V0IGluIHRvdWNoIGFzIHNvb24gYXMgd2UgY2FuLlwiLFxuICAgIFwiLmNvbnRhY3QtaG9sZGVyXCIsXG4gICAgXCJjb250YWN0LXRleHRcIlxuICApO1xuXG4gIGNyZWF0ZUZvcm0oXCJcIiwgXCIuY29udGFjdC1ob2xkZXJcIiwgXCJmb3JtXCIpO1xuXG4gIGNyZWF0ZUlucHV0KFwiZmlyc3QtbmFtZVwiLCBcIi5mb3JtXCIsIFwiRmlyc3QgTmFtZTogXCIsIFwiZmlyc3QtbmFtZS1ob2xkZXJcIik7XG5cbiAgY3JlYXRlSW5wdXQoXCJsYXN0LW5hbWVcIiwgXCIuZm9ybVwiLCBcIkxhc3QgTmFtZTogXCIsIFwibGFzdC1uYW1lLWhvbGRlclwiKTtcblxuICBjcmVhdGVJbnB1dChcImVtYWlsXCIsIFwiLmZvcm1cIiwgXCJFbWFpbDogXCIsIFwiZW1haWwtaG9sZGVyXCIpO1xuXG4gIHRleHRBcmVhKFwibWVzc2FnZVwiLCBcIi5mb3JtXCIsIFwiTWVzc2FnZTogXCIsIFwibWVzc2FnZS1ob2xkZXJcIik7XG5cbiAgY3JlYXRlQnV0dG9uKFwiU3VibWl0XCIsIFwiLmZvcm1cIiwgXCJzdWJtaXRcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTWFpbkNvbnRhaW5lcixcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZUJ1dHRvbixcbiAgY3JlYXRlSW1nLFxufSBmcm9tIFwiLi9iYXNpY0Z1bmN0aW9uc1wiO1xuaW1wb3J0IGNvZmZlZSBmcm9tIFwiLi9pbWdzL2NvZmZlZS1vdXRsaW5lLnN2Z1wiO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIC8vIEhUTUwgY2xhc3MgbWFpbi1jb250YWluZXIgb24gcGFnZVxuICBjcmVhdGVNYWluQ29udGFpbmVyKFwiXCIsIFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcblxuICAvLyBzeW50YXg6IGNyZWF0ZUJsYW5rKHRleHQsIHBhcmVudENsYXNzLCBjbGFzc05hbWUpXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLmhlYWRlci1jb250YWluZXJcIiwgXCJoZWFkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFwiQmVucyBTdXBlciBDb29sIENvZmZlZSBzaG9wXCIsIFwiLmhlYWRlclwiLCBcIm5hbWVcIik7XG4gIGNyZWF0ZUltZyhjb2ZmZWUsIFwiLm5hbWVcIiwgXCJjb2ZmZWVMb2dvXCIpO1xuXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLmhlYWRlclwiLCBcImJ1dHRvbi1ob2xkZXJcIik7XG5cbiAgY3JlYXRlQnV0dG9uKFwiSG9tZVwiLCBcIi5idXR0b24taG9sZGVyXCIsIFwiaG9tZVwiKTtcbiAgY3JlYXRlQnV0dG9uKFwiTWVudVwiLCBcIi5idXR0b24taG9sZGVyXCIsIFwibWVudVwiKTtcbiAgY3JlYXRlQnV0dG9uKFwiQ29udGFjdFwiLCBcIi5idXR0b24taG9sZGVyXCIsIFwiY29udGFjdFwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUNoaWxkcmVuLFxuICBjcmVhdGVNYWluQ29udGFpbmVyLFxuICBjcmVhdGVJbWcsXG59IGZyb20gXCIuL2Jhc2ljRnVuY3Rpb25zXCI7XG5cbi8vIHN5bnRheDogY3JlYXRlQmxhbmsodGV4dCwgcGFyZW50Q2xhc3MsIGNsYXNzTmFtZSlcbmNvbnN0IHJlbmRlckhvbWVQYWdlID0gKCkgPT4ge1xuICBjcmVhdGVNYWluQ29udGFpbmVyKFwiXCIsIFwibWFpbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuICBiYWNrZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRhaW5lclwiKTtcblxuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5tYWluLWNvbnRhaW5lclwiLCBcInNlY29uZC1tYWluXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5zZWNvbmQtbWFpblwiLCBcImFib3V0LWNvbnRhaW5lclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJBYm91dFwiLCBcIi5hYm91dC1jb250YWluZXJcIiwgXCJhYm91dC1oZWFkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFxuICAgIFwiV2VsY29tZSB0byBvdXIgY29mZmVlIHNob3AsIHdoZXJlIHdlIGJlbGlldmUgdGhhdCBldmVyeSBjdXAgb2YgY29mZmVlIHNob3VsZCBiZSBhbiBleHBlcmllbmNlIHRvIHJlbWVtYmVyLiBMb2NhdGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgb3VyIGNvZmZlZSBzaG9wIGlzIHRoZSBwZXJmZWN0IHNwb3QgdG8gdW53aW5kIGFuZCByZWxheCwgY2F0Y2ggdXAgd2l0aCBmcmllbmRzIG9yIGdldCBzb21lIHdvcmsgZG9uZS4gV2UgcHJpZGUgb3Vyc2VsdmVzIG9uIHByb3ZpZGluZyB0aGUgaGlnaGVzdCBxdWFsaXR5IGNvZmZlZSwgc291cmNlZCBmcm9tIHRoZSBmaW5lc3Qgcm9hc3RlcnMgYXJvdW5kIHRoZSB3b3JsZC5Mb2NhdGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgb3VyIGNvZmZlZSBzaG9wIGlzIHRoZSBwZXJmZWN0IHNwb3QgdG8gdW53aW5kIGFuZCByZWxheCwgY2F0Y2ggdXAgd2l0aCBmcmllbmRzIG9yIGdldCBzb21lIHdvcmsgZG9uZS5cIixcbiAgICBcIi5hYm91dC1jb250YWluZXJcIixcbiAgICBcImFib3V0LXRleHRcIlxuICApO1xuXG4gIGNyZWF0ZUNoaWxkcmVuKFwiXCIsIFwiLnNlY29uZC1tYWluXCIsIFwiaG91cnMtY29udGFpbmVyXCIpO1xuICBjcmVhdGVDaGlsZHJlbihcIkhvdXJzXCIsIFwiLmhvdXJzLWNvbnRhaW5lclwiLCBcImhvdXJzLWhlYWRlclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXG4gICAgXCJPdXIgY29mZmVlIHNob3AgaXMgb3BlbiA3IGRheXMgYSB3ZWVrIGZvciB5b3VyIGNvbnZlbmllbmNlLiBPdXIgaG91cnMgb2Ygb3BlcmF0aW9uIGFyZSBhcyBmb2xsb3dzOiBNb25kYXkgdG8gRnJpZGF5OiA3OjAwYW0gLSA3OjAwcG0gU2F0dXJkYXk6IDg6MDBhbSAtIDY6MDBwbSBTdW5kYXk6IDk6MDBhbSAtIDU6MDBwbSBXZSB1bmRlcnN0YW5kIHRoYXQgZXZlcnlvbmUgaGFzIGRpZmZlcmVudCBzY2hlZHVsZXMsIHNvIHdlIGFpbSB0byBvZmZlciBmbGV4aWJsZSBob3VycyB0aGF0IGNhbiBhY2NvbW1vZGF0ZSBhIHZhcmlldHkgb2YgbGlmZXN0eWxlcy4gV2hldGhlciB5b3UgbmVlZCB5b3VyIG1vcm5pbmcgY2FmZmVpbmUgZml4IG9yIGEgY296eSBwbGFjZSB0byB1bndpbmQgaW4gdGhlIGV2ZW5pbmcsIG91ciBkb29ycyBhcmUgYWx3YXlzIG9wZW4uXCIsXG4gICAgXCIuaG91cnMtY29udGFpbmVyXCIsXG4gICAgXCJob3Vycy10ZXh0XCJcbiAgKTtcblxuICBjcmVhdGVDaGlsZHJlbihcIlwiLCBcIi5zZWNvbmQtbWFpblwiLCBcImxvY2F0aW9uLWNvbnRhaW5lclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJMb2NhdGlvblwiLCBcIi5sb2NhdGlvbi1jb250YWluZXJcIiwgXCJsb2NhdGlvbi1oZWFkZXJcIik7XG4gIGNyZWF0ZUNoaWxkcmVuKFxuICAgIFwiNTI5OCBXZXN0IExvb3AgRHJpdmUsIERhbGxhcywgVFgsIDc1MjE0XCIsXG4gICAgXCIubG9jYXRpb24tY29udGFpbmVyXCIsXG4gICAgXCJsb2NhdGlvbi10ZXh0XCJcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWVQYWdlO1xuIiwiaW1wb3J0IHsgY2xlYXJQYWdlLCBjb2xvckJ1dHRvbiB9IGZyb20gXCIuL2Jhc2ljRnVuY3Rpb25zXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gXCIuL2hvbWVQYWdlXCI7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jb25zdCBoaWdobGlnaHRIb21lID0gKCgpID0+IHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xufSkoKTtcbnJlbmRlckhvbWVQYWdlKCk7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuXG5idXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzd2l0Y2ggKGJ0bi50ZXh0Q29udGVudCkge1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgIHJlbmRlckhvbWVQYWdlKCk7XG4gICAgICAgIGNvbG9yQnV0dG9uKFwiLmhvbWVcIiwgXCIubWVudVwiLCBcIi5jb250YWN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgICAgIGNvbG9yQnV0dG9uKFwiLm1lbnVcIiwgXCIuaG9tZVwiLCBcIi5jb250YWN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICByZW5kZXJDb250YWN0KCk7XG4gICAgICAgIGNvbG9yQnV0dG9uKFwiLmNvbnRhY3RcIiwgXCIubWVudVwiLCBcIi5ob21lXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVGb29kSXRlbSxcbiAgY3JlYXRlQ2hpbGRyZW4sXG4gIGNyZWF0ZU1haW5Db250YWluZXIsXG59IGZyb20gXCIuL2Jhc2ljRnVuY3Rpb25zXCI7XG5cbmltcG9ydCBlc3ByZXNzbyBmcm9tIFwiLi9pbWdzL2VzcHJlc3NvMi5wbmdcIjtcbmltcG9ydCBjYXAgZnJvbSBcIi4vaW1ncy9jYXAucG5nXCI7XG5pbXBvcnQgbGF0dGUgZnJvbSBcIi4vaW1ncy9sYXR0ZS5wbmdcIjtcbmltcG9ydCBtYWNoIGZyb20gXCIuL2ltZ3MvbWFjaGlhdHRvLnBuZ1wiO1xuaW1wb3J0IG1vY2hhIGZyb20gXCIuL2ltZ3MvbW9jaGEucG5nXCI7XG5pbXBvcnQgYW1lcmljYW5vIGZyb20gXCIuL2ltZ3MvYW1lcmljYW5vLnBuZ1wiO1xuXG4vLyBzeW50YXg6IGNyZWF0ZUJsYW5rKFRpdGxlIE5hbWUsIERlc2NyaXB0aW9uLCBwYXJlbnRDbGFzcylcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNyZWF0ZU1haW5Db250YWluZXIoXCJcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgY3JlYXRlQ2hpbGRyZW4oXCJcIiwgXCIubWFpbi1jb250YWluZXJcIiwgXCJtZW51LWhvbGRlclwiKTtcbiAgY3JlYXRlRm9vZEl0ZW0oXG4gICAgXCJFc3ByZXNzb1wiLFxuICAgIFwiQSBzdHJvbmcgYW5kIGNvbmNlbnRyYXRlZCBzaG90IG9mIGNvZmZlZSBtYWRlIGJ5IGZvcmNpbmcgaG90IHdhdGVyIHRocm91Z2ggZmluZWx5IGdyb3VuZCBjb2ZmZWUgYmVhbnMuIEl0IGhhcyBhIHRoaWNrIGNyZW1hIG9uIHRvcCBhbmQgYSByaWNoIGZsYXZvci5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIGVzcHJlc3NvXG4gICk7XG5cbiAgY3JlYXRlRm9vZEl0ZW0oXG4gICAgXCJDYXBwdWNjaW5vXCIsXG4gICAgXCJBIGNsYXNzaWMgSXRhbGlhbiBjb2ZmZWUgZHJpbmsgbWFkZSB3aXRoIGVzcHJlc3NvLCBzdGVhbWVkIG1pbGssIGFuZCBhIGxheWVyIG9mIGZyb3RoZWQgbWlsayBvbiB0b3AuIEl0IGhhcyBhIGNyZWFteSB0ZXh0dXJlIGFuZCBhIGJhbGFuY2VkIGZsYXZvci5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIGNhcFxuICApO1xuICBjcmVhdGVGb29kSXRlbShcbiAgICBcIkFtZXJpY2Fub1wiLFxuICAgIFwiQSBzaW1wbGUgY29mZmVlIGRyaW5rIG1hZGUgYnkgYWRkaW5nIGhvdCB3YXRlciB0byBhIHNob3Qgb2YgZXNwcmVzc28uIEl0IGhhcyBhIG1pbGRlciBmbGF2b3IgdGhhbiBlc3ByZXNzbyBhbmQgYSBoaWdoZXIgdm9sdW1lLlwiLFxuICAgIFwiLm1lbnUtaG9sZGVyXCIsXG4gICAgYW1lcmljYW5vXG4gICk7XG4gIGNyZWF0ZUZvb2RJdGVtKFxuICAgIFwiTGF0dGVcIixcbiAgICBcIkEgcG9wdWxhciBjb2ZmZWUgZHJpbmsgbWFkZSB3aXRoIGVzcHJlc3NvIGFuZCBzdGVhbWVkIG1pbGssIHR5cGljYWxseSB3aXRoIGEgc21hbGwgYW1vdW50IG9mIGZvYW0gb24gdG9wLiBJdCBoYXMgYSBzbW9vdGggYW5kIGNyZWFteSB0ZXh0dXJlIHdpdGggYSBtaWxkIGVzcHJlc3NvIGZsYXZvci5cIixcbiAgICBcIi5tZW51LWhvbGRlclwiLFxuICAgIGxhdHRlXG4gICk7XG4gIGNyZWF0ZUZvb2RJdGVtKFxuICAgIFwiTWFjY2hpYXRvXCIsXG4gICAgXCJBIHNtYWxsIHNob3Qgb2YgZXNwcmVzc28gd2l0aCBhIGRvbGxvcCBvZiBzdGVhbWVkIG1pbGsgb24gdG9wLiBJdCBoYXMgYSBib2xkZXIgZmxhdm9yIHRoYW4gYSBsYXR0ZSBhbmQgYSBsaWdodGVyIHRleHR1cmUgdGhhbiBhIGNhcHB1Y2Npbm8uXCIsXG4gICAgXCIubWVudS1ob2xkZXJcIixcbiAgICBtYWNoXG4gICk7XG4gIGNyZWF0ZUZvb2RJdGVtKFxuICAgIFwiTW9jaGFcIixcbiAgICBcIkEgY29mZmVlIGRyaW5rIG1hZGUgd2l0aCBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBjaG9jb2xhdGUgc3lydXAgb3IgcG93ZGVyLCBhbmQgd2hpcHBlZCBjcmVhbSBvbiB0b3AuIEl0IGhhcyBhIHJpY2ggYW5kIGluZHVsZ2VudCBmbGF2b3Igd2l0aCBhIGhpbnQgb2YgY2hvY29sYXRlLlwiLFxuICAgIFwiLm1lbnUtaG9sZGVyXCIsXG4gICAgbW9jaGFcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=