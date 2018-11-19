(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConfirmRegistrationEmail"],{

/***/ "./ClientApp/src/components/Account/ConfirmRegistrationEmail.tsx":
/*!***********************************************************************!*\
  !*** ./ClientApp/src/components/Account/ConfirmRegistrationEmail.tsx ***!
  \***********************************************************************/
/*! exports provided: ConfirmRegistrationEmail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfirmRegistrationEmail\", function() { return ConfirmRegistrationEmail; });\n/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ \"./ClientApp/src/models/index.ts\");\n/* harmony import */ var _store_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/Account */ \"./ClientApp/src/store/Account.ts\");\n/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/Alert */ \"./ClientApp/src/store/Alert.ts\");\n/* harmony import */ var _store_Session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/Session */ \"./ClientApp/src/store/Session.ts\");\n/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url-search-params */ \"./node_modules/url-search-params/build/url-search-params.node.js\");\n/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nvar ConfirmRegistrationEmail =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ConfirmRegistrationEmail, _React$Component);\n\n  function ConfirmRegistrationEmail() {\n    return _React$Component.apply(this, arguments) || this;\n  }\n\n  var _proto = ConfirmRegistrationEmail.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    var _this = this;\n\n    var searchParams = new url_search_params__WEBPACK_IMPORTED_MODULE_10___default.a(this.props.location.search);\n    this.props.accountActions.confirmRegistrationEmail({\n      code: searchParams.get(\"code\"),\n      userId: searchParams.get(\"userId\")\n    }, function () {\n      _this.props.alertActions.sendAlert(\"Your account has been registered successfully!\", _models__WEBPACK_IMPORTED_MODULE_6__[\"AlertType\"].success, true);\n\n      _this.props.sessionActions.loadToken();\n    }, function (error) {\n      _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_6__[\"AlertType\"].danger, true);\n    });\n  };\n\n  _proto.render = function render() {\n    return react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", {\n      className: \"container pt-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", {\n      className: \"row justify-content-center pt-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", {\n      className: \"col-12 col-sm-8 col-lg-7\"\n    }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"h2\", {\n      className: \"text-center display-4\"\n    }, \"Confirm Email.\"), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"p\", null, \"Thank you for confirming your email. You can now login using your Account. Remember if you forget your password you can always use the\", react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      to: \"/forgotpassword\"\n    }, \"Forgot Password\"), \" Assistance.\"), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"br\", null), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"br\", null), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"p\", null, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      to: \"/\"\n    }, \"Go back\")))));\n  };\n\n  return ConfirmRegistrationEmail;\n}(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(function (state) {\n  return state.account;\n}, // Selects which state properties are merged into the component's props\nfunction (dispatch) {\n  // Selects which action creators are merged into the component's props\n  return {\n    accountActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"bindActionCreators\"])(_store_Account__WEBPACK_IMPORTED_MODULE_7__[\"actionCreators\"], dispatch),\n    alertActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"bindActionCreators\"])(_store_Alert__WEBPACK_IMPORTED_MODULE_8__[\"actionCreators\"], dispatch),\n    sessionActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"bindActionCreators\"])(_store_Session__WEBPACK_IMPORTED_MODULE_9__[\"actionCreators\"], dispatch)\n  };\n})(ConfirmRegistrationEmail));\n\n//# sourceURL=webpack:///./ClientApp/src/components/Account/ConfirmRegistrationEmail.tsx?");

/***/ }),

/***/ "./node_modules/url-search-params/build/url-search-params.node.js":
/*!************************************************************************!*\
  !*** ./node_modules/url-search-params/build/url-search-params.node.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/*!\nCopyright (C) 2015-2017 Andrea Giammarchi - @WebReflection\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\n*/\n\n\nfunction URLSearchParams(query) {\n  var\n    index, key, value,\n    pairs, i, length,\n    dict = Object.create(null)\n  ;\n  this[secret] = dict;\n  if (!query) return;\n  if (typeof query === 'string') {\n    if (query.charAt(0) === '?') {\n      query = query.slice(1);\n    }\n    for (\n      pairs = query.split('&'),\n      i = 0,\n      length = pairs.length; i < length; i++\n    ) {\n      value = pairs[i];\n      index = value.indexOf('=');\n      if (-1 < index) {\n        appendTo(\n          dict,\n          decode(value.slice(0, index)),\n          decode(value.slice(index + 1))\n        );\n      } else if (value.length){\n        appendTo(\n          dict,\n          decode(value),\n          ''\n        );\n      }\n    }\n  } else {\n    if (isArray(query)) {\n      for (\n        i = 0,\n        length = query.length; i < length; i++\n      ) {\n        value = query[i];\n        appendTo(dict, value[0], value[1]);\n      }\n    } else {\n      for (key in query) {\n         appendTo(dict, key, query[key]);\n      }\n    }\n  }\n}\n\nvar\n  isArray = Array.isArray,\n  URLSearchParamsProto = URLSearchParams.prototype,\n  find = /[!'\\(\\)~]|%20|%00/g,\n  plus = /\\+/g,\n  replace = {\n    '!': '%21',\n    \"'\": '%27',\n    '(': '%28',\n    ')': '%29',\n    '~': '%7E',\n    '%20': '+',\n    '%00': '\\x00'\n  },\n  replacer = function (match) {\n    return replace[match];\n  },\n  secret = '__URLSearchParams__:' + Math.random()\n;\n\nfunction appendTo(dict, name, value) {\n  if (name in dict) {\n    dict[name].push('' + value);\n  } else {\n    dict[name] = isArray(value) ? value : ['' + value];\n  }\n}\n\nfunction decode(str) {\n  return decodeURIComponent(str.replace(plus, ' '));\n}\n\nfunction encode(str) {\n  return encodeURIComponent(str).replace(find, replacer);\n}\n\nURLSearchParamsProto.append = function append(name, value) {\n  appendTo(this[secret], name, value);\n};\n\nURLSearchParamsProto.delete = function del(name) {\n  delete this[secret][name];\n};\n\nURLSearchParamsProto.get = function get(name) {\n  var dict = this[secret];\n  return name in dict ? dict[name][0] : null;\n};\n\nURLSearchParamsProto.getAll = function getAll(name) {\n  var dict = this[secret];\n  return name in dict ? dict[name].slice(0) : [];\n};\n\nURLSearchParamsProto.has = function has(name) {\n  return name in this[secret];\n};\n\nURLSearchParamsProto.set = function set(name, value) {\n  this[secret][name] = ['' + value];\n};\n\nURLSearchParamsProto.forEach = function forEach(callback, thisArg) {\n  var dict = this[secret];\n  Object.getOwnPropertyNames(dict).forEach(function(name) {\n    dict[name].forEach(function(value) {\n      callback.call(thisArg, value, name, this);\n    }, this);\n  }, this);\n};\n\n/*\nURLSearchParamsProto.toBody = function() {\n  return new Blob(\n    [this.toString()],\n    {type: 'application/x-www-form-urlencoded'}\n  );\n};\n*/\n\nURLSearchParamsProto.toJSON = function toJSON() {\n  return {};\n};\n\nURLSearchParamsProto.toString = function toString() {\n  var dict = this[secret], query = [], i, key, name, value;\n  for (key in dict) {\n    name = encode(key);\n    for (\n      i = 0,\n      value = dict[key];\n      i < value.length; i++\n    ) {\n      query.push(name + '=' + encode(value[i]));\n    }\n  }\n  return query.join('&');\n};\n\nURLSearchParams = (module.exports = global.URLSearchParams || URLSearchParams);\n\n(function (URLSearchParamsProto) {\n\n  var iterable = (function () {\n    try {\n      return !!Symbol.iterator;\n    } catch(error) {\n      return false;\n    }\n  }());\n\n  // mostly related to issue #24\n  if (!('forEach' in URLSearchParamsProto)) {\n    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {\n      var names = Object.create(null);\n      this.toString()\n          .replace(/=[\\s\\S]*?(?:&|$)/g, '=')\n          .split('=')\n          .forEach(function (name) {\n            if (!name.length || name in names) return;\n            (names[name] = this.getAll(name)).forEach(function(value) {\n              callback.call(thisArg, value, name, this);\n            }, this);\n          }, this);\n    };\n  }\n\n  if (!('keys' in URLSearchParamsProto)) {\n    URLSearchParamsProto.keys = function keys() {\n      var items = [];\n      this.forEach(function(value, name) { items.push(name); });\n      var iterator = {\n        next: function() {\n          var value = items.shift();\n          return {done: value === undefined, value: value};\n        }\n      };\n\n      if (iterable) {\n        iterator[Symbol.iterator] = function() {\n          return iterator;\n        };\n      }\n\n      return iterator;\n    };\n  }\n\n  if (!('values' in URLSearchParamsProto)) {\n    URLSearchParamsProto.values = function values() {\n      var items = [];\n      this.forEach(function(value) { items.push(value); });\n      var iterator = {\n        next: function() {\n          var value = items.shift();\n          return {done: value === undefined, value: value};\n        }\n      };\n\n      if (iterable) {\n        iterator[Symbol.iterator] = function() {\n          return iterator;\n        };\n      }\n\n      return iterator;\n    };\n  }\n\n  if (!('entries' in URLSearchParamsProto)) {\n    URLSearchParamsProto.entries = function entries() {\n      var items = [];\n      this.forEach(function(value, name) { items.push([name, value]); });\n      var iterator = {\n        next: function() {\n          var value = items.shift();\n          return {done: value === undefined, value: value};\n        }\n      };\n\n      if (iterable) {\n        iterator[Symbol.iterator] = function() {\n          return iterator;\n        };\n      }\n\n      return iterator;\n    };\n  }\n\n  if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {\n    URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;\n  }\n\n  if (!('sort' in URLSearchParamsProto)) {\n    URLSearchParamsProto.sort = function sort() {\n      var\n        entries = this.entries(),\n        entry = entries.next(),\n        done = entry.done,\n        keys = [],\n        values = Object.create(null),\n        i, key, value\n      ;\n      while (!done) {\n        value = entry.value;\n        key = value[0];\n        keys.push(key);\n        if (!(key in values)) {\n          values[key] = [];\n        }\n        values[key].push(value[1]);\n        entry = entries.next();\n        done = entry.done;\n      }\n      // not the champion in efficiency\n      // but these two bits just do the job\n      keys.sort();\n      for (i = 0; i < keys.length; i++) {\n        this.delete(keys[i]);\n      }\n      for (i = 0; i < keys.length; i++) {\n        key = keys[i];\n        this.append(key, values[key].shift());\n      }\n    };\n  }\n\n}(URLSearchParams.prototype));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/url-search-params/build/url-search-params.node.js?");

/***/ })

}]);
//# sourceMappingURL=ConfirmRegistrationEmail.js.map