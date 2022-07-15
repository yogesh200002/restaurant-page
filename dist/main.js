/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerCreation": () => (/* binding */ footerCreation),
/* harmony export */   "headerCreation": () => (/* binding */ headerCreation),
/* harmony export */   "mainCreation": () => (/* binding */ mainCreation)
/* harmony export */ });
/* harmony import */ var _assets_dosa_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _assets_idli_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




const contentSelector = document.querySelector('#content')

function headerCreation(){
    const header = document.createElement('header')
    const nameR = document.createElement('div')
    nameR.id = 'name'
    nameR.textContent = 'Chennai Tiffin House'
    const tabs = document.createElement('div')
    tabs.classList.add('tabs')
    const homeTab = document.createElement('div')
    const menuTab = document.createElement('div')
    const contactTab = document.createElement('div')
    homeTab.textContent = 'Home'
    homeTab.style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    menuTab.textContent = 'Menu'
    contactTab.textContent = 'Contact Us'
    homeTab.classList.add('tab-name')
    menuTab.classList.add('tab-name')
    contactTab.classList.add('tab-name')
    tabs.append(homeTab,menuTab,contactTab)
    header.append(nameR,tabs)
    contentSelector.appendChild(header)
}

function mainCreation(){
    const tabs = document.querySelectorAll('.tab-name')
    tabs[0].style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    tabs[1].style.backgroundColor = '#D9D9D9'
    tabs[2].style.backgroundColor = '#D9D9D9'
    const main = document.createElement('main')
    main.id = 'main'
    const title = document.createElement('div')
    title.id = 'title'
    title.textContent = 'Welcome to Chennai Tiffin House'
    const homeContent = document.createElement('div')
    homeContent.classList.add('home-content') 
    homeContent.textContent = 'We are number one in serving mouth watery south indian dishes all over in India Since 2000. We offer wide varieties of dishes and sweets which we are known for.'
    const imgL = document.createElement('img')
    const imgC = document.createElement('img')
    const imgR = document.createElement('img')
    const imgContainer = document.createElement('div')
    imgContainer.id = 'img-container'
    imgL.src = _assets_idli_jpg__WEBPACK_IMPORTED_MODULE_1__
    imgC.src = _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_2__
    imgR.src = _assets_dosa_jpg__WEBPACK_IMPORTED_MODULE_0__
    const lastContent = document.createElement('div')
    lastContent.textContent = 'Order online or Visit our outlets !'
    lastContent.classList.add('home-content')
    imgContainer.append(imgL,imgC,imgR)
    main.append(title,homeContent,imgContainer,lastContent)
    contentSelector.insertBefore(main,contentSelector.childNodes[2])
}

function footerCreation(){
    const footer = document.createElement('footer')
    footer.textContent = 'Made with Love by Yogesh S :)'
    contentSelector.append(footer)
}



/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d3151d1c52b9df37b315.jpg";

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6163c5ffda5878e8ee74.jpg";

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eab81bc4789994229771.jpg";

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuCreation": () => (/* binding */ menuCreation)
/* harmony export */ });
const contentSelector = document.querySelector('#content')

function menuCreation(){
    const tabs = document.querySelectorAll('.tab-name')
    tabs[0].style.backgroundColor = '#D9D9D9'
    tabs[1].style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    tabs[2].style.backgroundColor = '#D9D9D9'
    const menuContainer = document.createElement('div')
    menuContainer.id = 'menu-container'
    const menuTabs = document.createElement('div')
    menuTabs.id = 'menu-tab'
    const breakfastTab = document.createElement('div')
    const LunchTab = document.createElement('div')
    const dinnerTab = document.createElement('div')
    breakfastTab.setAttribute('style', 'white-space: pre;');
    LunchTab.setAttribute('style', 'white-space: pre;');
    dinnerTab.setAttribute('style', 'white-space: pre;');
    breakfastTab.textContent = 'Breakfast \r\n'
    breakfastTab.textContent +=  '7 am to 11 30 am'
    LunchTab.textContent = 'Lunch \r\n'
    LunchTab.textContent += '11 30 am to 4 pm'
    dinnerTab.textContent = 'Dinner \r\n'
    dinnerTab.textContent += '4 pm to 10 pm'
    menuTabs.append(breakfastTab,LunchTab,dinnerTab)
    const tableContainer = document.createElement('div')
    tableContainer.classList.add('menu-card')
    const breakfastTable = document.createElement('table')
    breakfastTable.classList.add('breakfast')
    breakfastTable.innerHTML = `
    <tr>
    <td>Plain Dosa</td>
    <td>Rs: 40</td>
    </tr>
    <tr>
        <td>Masala Dosa</td>
        <td>Rs: 60</td>
    </tr>
    <tr>
        <td>Podi Dosa</td>
        <td>Rs: 50</td>
    </tr>
    <tr>
        <td>Onion Dosa</td>
        <td>Rs: 50</td>
    </tr>
    <tr>
        <td>Idli (2pcs)</td>
        <td>Rs: 30</td>
    </tr>
    <tr>
        <td>Medhu Vada</td>
        <td>Rs: 20</td>
    </tr>
    <tr>
        <td>Pongal</td>
        <td>Rs: 40</td>
    </tr>
    <tr>
        <td>Chapathi (2pcs)</td>
        <td>Rs: 25</td>
    </tr>
    <tr>
        <td>Poori Masala</td>
        <td>Rs: 40</td>
    </tr>
    `
    const lunchTable = document.createElement('table')
    lunchTable.classList.add('lunch')
    lunchTable.innerHTML = 
    `
    <tr>
    <td>Veg Meals</td>
    <td>Rs: 100</td>
    </tr>
    <tr>
        <td>Butter Naan (2 pcs)</td>
        <td>Rs: 30</td>
    </tr>
    <tr>
        <td>Roti (2 pcs)</td>
        <td>Rs: 20</td>
    </tr>
    <tr>
        <td>Paneer Butter Masala</td>
        <td>Rs: 140</td>
    </tr>
    <tr>
        <td>Gobi Manchurian</td>
        <td>Rs: 130</td>
    </tr>
    <tr>
        <td>Mushroom Masala</td>
        <td>Rs: 130</td>
    </tr>
    <tr>
        <td>Kadai Paneer</td>
        <td>Rs: 150</td>
    </tr>
    <tr>
        <td>Veg Noodles <br> (Gobi / mushroom / paneer)</td>
        <td>Rs: 140/150/160</td>
    </tr>
    <tr>
        <td>Veg Fried Rice <br> (Gobi / mushroom / paneer)</td>
        <td>Rs: 140/150/160</td>
    </tr>
    `
    const dinnerCol = document.createElement('div')
    dinnerCol.classList.add('dinner')
    dinnerCol.innerHTML = `<div> All dishes are available except <br> 
    veg meals. </div>`
    tableContainer.append(breakfastTable,lunchTable,dinnerCol)
    menuContainer.append(menuTabs,tableContainer)
    contentSelector.insertBefore(menuContainer,contentSelector.childNodes[2])
}



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactCreation": () => (/* binding */ contactCreation)
/* harmony export */ });
/* harmony import */ var _assets_call_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _assets_call_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_call_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_contact_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _assets_contact_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_contact_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_street_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);




const contentSelector = document.querySelector('#content')

function contactCreation(){
    const tabs = document.querySelectorAll('.tab-name')
    tabs[0].style.backgroundColor = '#D9D9D9'
    tabs[1].style.backgroundColor = '#D9D9D9'
    tabs[2].style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    const contactTab = document.createElement('div')
    contactTab.id = 'contact-container'
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-section')
    const address = document.createElement('div')
    address.setAttribute('style', 'white-space: pre;');
    address.textContent = 'Address:\r\n' 
    address.textContent += '221B Baker St, \r\n'   
    address.textContent += 'Marylebone, London NW1 6XE, \r\n'   
    address.textContent += 'United Kingdom.'
    const contactNum = document.createElement('div')
    contactNum.classList.add('contact-number')
    const heading = document.createElement('div')
    heading.textContent = 'Contact Us:'
    contactNum.innerHTML = (_assets_call_svg__WEBPACK_IMPORTED_MODULE_0___default())
    const number = document.createElement('div')
    number.textContent = '044-12345678'
    contactNum.append(number)
    const mail = document.createElement('div')
    mail.classList.add('mail-id')
    mail.innerHTML = (_assets_contact_svg__WEBPACK_IMPORTED_MODULE_1___default())
    const mailId = document.createElement('div')
    mailId.textContent = 'chennaiTiffinHouse111@outlook.com'
    mail.append(mailId)
    contactContainer.append(address,heading,contactNum,mail)
    const mapContainer = document.createElement('div')
    mapContainer.classList.add('map')
    const mapImg = document.createElement('img')
    mapImg.src = _assets_street_map_png__WEBPACK_IMPORTED_MODULE_2__["default"]
    mapContainer.append(mapImg)
    contactTab.append(contactContainer,mapContainer)
    contentSelector.insertBefore(contactTab,contentSelector.childNodes[2])
}



/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Z\"></path></svg>"

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.95 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V9q0-1.2.9-2.1.9-.9 2.1-.9H45q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm13.5-14.5q2.45 0 4.175-1.725Q22.35 24.05 22.35 21.6q0-2.45-1.725-4.175Q18.9 15.7 16.45 15.7q-2.45 0-4.175 1.725Q10.55 19.15 10.55 21.6q0 2.45 1.725 4.175Q14 27.5 16.45 27.5Zm11.65-5.7h13.4v-9.3H28.1ZM3.45 39h26q-2.25-3.7-5.625-5.6-3.375-1.9-7.375-1.9t-7.4 1.9q-3.4 1.9-5.6 5.6Zm31.4-19.05L29.6 16v-2l5.2 3.95L40 14v2Z\"></path></svg>"

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";


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
/* 12 */
/***/ ((module) => {

"use strict";


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
/* 13 */
/***/ ((module) => {

"use strict";


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
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 16 */
/***/ ((module) => {

"use strict";


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
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(21), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'La Belle Aurore';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root{\n    font-family: 'La Belle Aurore';\n    position: relative;\n    min-height: 100%;\n}\n\nheader{\n    margin-bottom: 50px;\n}\n\n#name{\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    text-align: center;\n}\n\n.tabs{\n    display: flex;\n    background-color: #D9D9D9;\n    align-items: center;\n    height: 108px;\n    width: 100%;\n}\n\n.tab-name:hover{\n    transform: scale(1.02);\n    border-bottom: 2px solid black;\n    transition: all 0.5s;\n}\n\n.tab-name{\n    height: 108px;\n    width: 33.33%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    cursor: default;\n}\n\n#title{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    margin-bottom: 30px;\n}\n\n.home-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    margin-bottom: 30px;\n    text-align: center;\n}\n\n#img-container{\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 30px;\n    align-items: center;\n}\n\n#img-container > img{\n    width: 269px;\n    height: 202px;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #D9D9D9;\n}\n\n#menu-tab,.menu-card,.breakfast,.lunch,.dinner{\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 44px;\n}\n\n#menu-tab{\n    display: flex;\n    justify-content: space-around;\n}\n\n.menu-card{\n    display: flex;\n    justify-content: space-evenly;\n    margin-bottom: 20px;\n}\n\n.breakfast,.lunch{\n    border-spacing: 40px 10px;\n}\n\ntr > td{\n    width: 50%;\n}\n\n.dinner{\n    text-align: center;\n}\n\n#contact-container{\n    display: flex;\n}\n\n.contact-section{\n    display: flex;\n    gap: 15px;\n    flex-direction: column;\n    font-family: 'La Belle Aurore';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    padding-left: 10%;\n}\n\n.contact-section,.map{\n    width: 50%;\n}\n\n.map > img{\n    height: 90%;\n    width: 90%;\n    object-fit: cover;\n}\n\nsvg{\n    height: 50px;\n    width: 50px;\n}\n\n.contact-number,.mail-id{\n    display: flex;\n    gap: 10px;\n}\n\n#main,#menu-container,#contact-container{\n    animation: easeOut 500ms ;\n}\n\n@keyframes easeOut {\n    from {opacity: 0;}\n    to{opacity: 1;}\n}\n\n@media only screen and (max-width: 850px){\n    #img-container{\n        flex-direction: column;\n    }\n    #menu-tab{\n        display: none;\n    }\n    .menu-card{\n        flex-direction: column;\n        align-items: center;\n    }\n    .breakfast,.lunch,.dinner{\n        border-right: none;\n        border-bottom: 2px solid black;\n        width: 100%;\n        border-spacing: 0px 5px;\n    }\n    .breakfast::before{\n        content: 'Breakfast 7 am to 11 30 am';\n        text-align: center;\n        font-weight: bold;\n    }\n    .lunch::before{\n        text-align: center;\n        font-weight: bold;\n        content: 'Lunch 11 30 am to 4 pm';\n    }\n    .dinner::before{\n        font-weight: bold;\n        text-align: center;\n        content: 'Dinner 4 pm to 10 pm';\n    }\n    #contact-container{\n        flex-direction: column;\n    }\n    .map{\n        margin-bottom: 30px;\n        display: flex;\n        justify-content: center;\n    }\n    .contact-section,.map{\n        width: auto;\n    }\n    .contact-section{\n        font-size: 20px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,4CAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,MAAM,UAAU,CAAC;IACjB,GAAG,UAAU,CAAC;AAClB;;AAEA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,aAAa;IACjB;IACA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;IACA;QACI,kBAAkB;QAClB,8BAA8B;QAC9B,WAAW;QACX,uBAAuB;IAC3B;IACA;QACI,qCAAqC;QACrC,kBAAkB;QAClB,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,iBAAiB;QACjB,iCAAiC;IACrC;IACA;QACI,iBAAiB;QACjB,kBAAkB;QAClB,+BAA+B;IACnC;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,mBAAmB;QACnB,aAAa;QACb,uBAAuB;IAC3B;IACA;QACI,WAAW;IACf;IACA;QACI,eAAe;IACnB;AACJ","sourcesContent":["@font-face {\n    font-family: 'La Belle Aurore';\n    src: url('./assets/LaBelleAurore-Regular.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root{\n    font-family: 'La Belle Aurore';\n    position: relative;\n    min-height: 100%;\n}\n\nheader{\n    margin-bottom: 50px;\n}\n\n#name{\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    text-align: center;\n}\n\n.tabs{\n    display: flex;\n    background-color: #D9D9D9;\n    align-items: center;\n    height: 108px;\n    width: 100%;\n}\n\n.tab-name:hover{\n    transform: scale(1.02);\n    border-bottom: 2px solid black;\n    transition: all 0.5s;\n}\n\n.tab-name{\n    height: 108px;\n    width: 33.33%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    cursor: default;\n}\n\n#title{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    margin-bottom: 30px;\n}\n\n.home-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    margin-bottom: 30px;\n    text-align: center;\n}\n\n#img-container{\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 30px;\n    align-items: center;\n}\n\n#img-container > img{\n    width: 269px;\n    height: 202px;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #D9D9D9;\n}\n\n#menu-tab,.menu-card,.breakfast,.lunch,.dinner{\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 44px;\n}\n\n#menu-tab{\n    display: flex;\n    justify-content: space-around;\n}\n\n.menu-card{\n    display: flex;\n    justify-content: space-evenly;\n    margin-bottom: 20px;\n}\n\n.breakfast,.lunch{\n    border-spacing: 40px 10px;\n}\n\ntr > td{\n    width: 50%;\n}\n\n.dinner{\n    text-align: center;\n}\n\n#contact-container{\n    display: flex;\n}\n\n.contact-section{\n    display: flex;\n    gap: 15px;\n    flex-direction: column;\n    font-family: 'La Belle Aurore';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 67px;\n    padding-left: 10%;\n}\n\n.contact-section,.map{\n    width: 50%;\n}\n\n.map > img{\n    height: 90%;\n    width: 90%;\n    object-fit: cover;\n}\n\nsvg{\n    height: 50px;\n    width: 50px;\n}\n\n.contact-number,.mail-id{\n    display: flex;\n    gap: 10px;\n}\n\n#main,#menu-container,#contact-container{\n    animation: easeOut 500ms ;\n}\n\n@keyframes easeOut {\n    from {opacity: 0;}\n    to{opacity: 1;}\n}\n\n@media only screen and (max-width: 850px){\n    #img-container{\n        flex-direction: column;\n    }\n    #menu-tab{\n        display: none;\n    }\n    .menu-card{\n        flex-direction: column;\n        align-items: center;\n    }\n    .breakfast,.lunch,.dinner{\n        border-right: none;\n        border-bottom: 2px solid black;\n        width: 100%;\n        border-spacing: 0px 5px;\n    }\n    .breakfast::before{\n        content: 'Breakfast 7 am to 11 30 am';\n        text-align: center;\n        font-weight: bold;\n    }\n    .lunch::before{\n        text-align: center;\n        font-weight: bold;\n        content: 'Lunch 11 30 am to 4 pm';\n    }\n    .dinner::before{\n        font-weight: bold;\n        text-align: center;\n        content: 'Dinner 4 pm to 10 pm';\n    }\n    #contact-container{\n        flex-direction: column;\n    }\n    .map{\n        margin-bottom: 30px;\n        display: flex;\n        justify-content: center;\n    }\n    .contact-section,.map{\n        width: auto;\n    }\n    .contact-section{\n        font-size: 20px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 18 */
/***/ ((module) => {

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 19 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
/* 20 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bc43b15661f3e942b3f6.ttf";

/***/ })
/******/ 	]);
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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 			0: 0
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);





(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.headerCreation)()
;(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.mainCreation)()
;(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.footerCreation)()

const tabs = document.querySelectorAll('.tab-name')
const header = document.querySelector('header')

tabs[0].addEventListener('click',()=>{
    if(document.getElementById('main')){
        return
    }
    else if(document.getElementById('menu-container') != null){
        document.getElementById('menu-container').remove()
        ;(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.mainCreation)()
    }
    else if(document.getElementById('contact-container') != null){
        document.getElementById('contact-container').remove()
        ;(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.mainCreation)()
    }
})
tabs[1].addEventListener('click',()=>{
    console.log(document.getElementById('main'),document.getElementById('menu-container'),document.getElementById('contact-container'))
    if(document.getElementById('menu-container')){
        return
    }
    else if(document.getElementById('main') != null){
        document.getElementById('main').remove()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuCreation)()
    }
    else if(document.getElementById('contact-container') != null){
        document.getElementById('contact-container').remove()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuCreation)()
    }
})
tabs[2].addEventListener('click',()=>{
    if(document.getElementById('contact-container')){
        return
    }
    else if(document.getElementById('main') != null){
        document.getElementById('main').remove()
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactCreation)()
    }
    else if(document.getElementById('menu-container') != null){
        document.getElementById('menu-container').remove()
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactCreation)()
    }
})


})();

/******/ })()
;