exports.ids = ["ConfirmEmail"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ConfirmEmail.tsx":
/*!***********************************************************!*\
  !*** ./ClientApp/src/components/Account/ConfirmEmail.tsx ***!
  \***********************************************************/
/*! exports provided: ConfirmEmail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmail", function() { return ConfirmEmail; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./ClientApp/src/models/index.ts");
/* harmony import */ var _store_Account__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/Account */ "./ClientApp/src/store/Account.ts");
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");
/* harmony import */ var _store_Session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/Session */ "./ClientApp/src/store/Session.ts");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! url-search-params */ "./node_modules/url-search-params/build/url-search-params.node.js");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Common/LoadingRoute */ "./ClientApp/src/components/Common/LoadingRoute.tsx");















var AsyncConfirmEmailForm = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | ConfirmEmailForm */ "ConfirmEmailForm").then(__webpack_require__.bind(null, /*! ../Account/ConfirmEmailForm */ "./ClientApp/src/components/Account/ConfirmEmailForm.tsx"));
  },
  modules: ["../Account/ConfirmEmailForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../Account/ConfirmEmailForm */ "./ClientApp/src/components/Account/ConfirmEmailForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_14__["default"]
});
var ConfirmEmail =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ConfirmEmail, _React$Component);

  function ConfirmEmail() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ConfirmEmail.prototype;

  _proto.render = function render() {
    var _this = this;

    var searchParams = new url_search_params__WEBPACK_IMPORTED_MODULE_13___default.a(this.props.location.search);
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "row justify-content-center pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "col-12 col-sm-8 col-lg-7"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Confirm Email."), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](AsyncConfirmEmailForm, {
      form: "confirmEmailForm",
      enableReinitialize: true,
      onSubmit: function onSubmit(values, dispatch) {
        _this.props.accountActions.confirmEmail(Object.assign({
          code: searchParams.get("code"),
          userId: searchParams.get("userId")
        }, values), function () {
          _this.props.history.push("/Account");

          _this.props.alertActions.sendAlert("Email as been changed successfully!", _models__WEBPACK_IMPORTED_MODULE_9__["AlertType"].success, true);

          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_8__["reset"])("confirmEmailForm"));

          _this.props.sessionActions.loadToken();
        }, function (error) {
          _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_9__["AlertType"].danger, true);
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: "/account"
    }, "Go back")))));
  };

  return ConfirmEmail;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state.account;
}, // Selects which state properties are merged into the component's props
function (dispatch) {
  // Selects which action creators are merged into the component's props
  return {
    accountActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_store_Account__WEBPACK_IMPORTED_MODULE_10__["actionCreators"], dispatch),
    alertActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_store_Alert__WEBPACK_IMPORTED_MODULE_11__["actionCreators"], dispatch),
    sessionActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_store_Session__WEBPACK_IMPORTED_MODULE_12__["actionCreators"], dispatch)
  };
})(ConfirmEmail));

/***/ }),

/***/ "./ClientApp/src/components/Common/LoadingRoute.tsx":
/*!**********************************************************!*\
  !*** ./ClientApp/src/components/Common/LoadingRoute.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ "./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var LoadingRoute =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(LoadingRoute, _React$Component);

  function LoadingRoute() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = LoadingRoute.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_1__["faSpinner"],
      spin: true,
      size: "2x"
    }));
  };

  return LoadingRoute;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoadingRoute);

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'spinner';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f110';
var svgPathData = 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z';

exports.definition = {           
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};
  
exports.faSpinner = exports.definition;           
exports.prefix = prefix;
exports.iconName = iconName; 
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "./node_modules/url-search-params/build/url-search-params.node.js":
/*!************************************************************************!*\
  !*** ./node_modules/url-search-params/build/url-search-params.node.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


function URLSearchParams(query) {
  var
    index, key, value,
    pairs, i, length,
    dict = Object.create(null)
  ;
  this[secret] = dict;
  if (!query) return;
  if (typeof query === 'string') {
    if (query.charAt(0) === '?') {
      query = query.slice(1);
    }
    for (
      pairs = query.split('&'),
      i = 0,
      length = pairs.length; i < length; i++
    ) {
      value = pairs[i];
      index = value.indexOf('=');
      if (-1 < index) {
        appendTo(
          dict,
          decode(value.slice(0, index)),
          decode(value.slice(index + 1))
        );
      } else if (value.length){
        appendTo(
          dict,
          decode(value),
          ''
        );
      }
    }
  } else {
    if (isArray(query)) {
      for (
        i = 0,
        length = query.length; i < length; i++
      ) {
        value = query[i];
        appendTo(dict, value[0], value[1]);
      }
    } else {
      for (key in query) {
         appendTo(dict, key, query[key]);
      }
    }
  }
}

var
  isArray = Array.isArray,
  URLSearchParamsProto = URLSearchParams.prototype,
  find = /[!'\(\)~]|%20|%00/g,
  plus = /\+/g,
  replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  },
  replacer = function (match) {
    return replace[match];
  },
  secret = '__URLSearchParams__:' + Math.random()
;

function appendTo(dict, name, value) {
  if (name in dict) {
    dict[name].push('' + value);
  } else {
    dict[name] = isArray(value) ? value : ['' + value];
  }
}

function decode(str) {
  return decodeURIComponent(str.replace(plus, ' '));
}

function encode(str) {
  return encodeURIComponent(str).replace(find, replacer);
}

URLSearchParamsProto.append = function append(name, value) {
  appendTo(this[secret], name, value);
};

URLSearchParamsProto.delete = function del(name) {
  delete this[secret][name];
};

URLSearchParamsProto.get = function get(name) {
  var dict = this[secret];
  return name in dict ? dict[name][0] : null;
};

URLSearchParamsProto.getAll = function getAll(name) {
  var dict = this[secret];
  return name in dict ? dict[name].slice(0) : [];
};

URLSearchParamsProto.has = function has(name) {
  return name in this[secret];
};

URLSearchParamsProto.set = function set(name, value) {
  this[secret][name] = ['' + value];
};

URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
  var dict = this[secret];
  Object.getOwnPropertyNames(dict).forEach(function(name) {
    dict[name].forEach(function(value) {
      callback.call(thisArg, value, name, this);
    }, this);
  }, this);
};

/*
URLSearchParamsProto.toBody = function() {
  return new Blob(
    [this.toString()],
    {type: 'application/x-www-form-urlencoded'}
  );
};
*/

URLSearchParamsProto.toJSON = function toJSON() {
  return {};
};

URLSearchParamsProto.toString = function toString() {
  var dict = this[secret], query = [], i, key, name, value;
  for (key in dict) {
    name = encode(key);
    for (
      i = 0,
      value = dict[key];
      i < value.length; i++
    ) {
      query.push(name + '=' + encode(value[i]));
    }
  }
  return query.join('&');
};

URLSearchParams = (module.exports = global.URLSearchParams || URLSearchParams);

(function (URLSearchParamsProto) {

  var iterable = (function () {
    try {
      return !!Symbol.iterator;
    } catch(error) {
      return false;
    }
  }());

  // mostly related to issue #24
  if (!('forEach' in URLSearchParamsProto)) {
    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
      var names = Object.create(null);
      this.toString()
          .replace(/=[\s\S]*?(?:&|$)/g, '=')
          .split('=')
          .forEach(function (name) {
            if (!name.length || name in names) return;
            (names[name] = this.getAll(name)).forEach(function(value) {
              callback.call(thisArg, value, name, this);
            }, this);
          }, this);
    };
  }

  if (!('keys' in URLSearchParamsProto)) {
    URLSearchParamsProto.keys = function keys() {
      var items = [];
      this.forEach(function(value, name) { items.push(name); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('values' in URLSearchParamsProto)) {
    URLSearchParamsProto.values = function values() {
      var items = [];
      this.forEach(function(value) { items.push(value); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('entries' in URLSearchParamsProto)) {
    URLSearchParamsProto.entries = function entries() {
      var items = [];
      this.forEach(function(value, name) { items.push([name, value]); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {
    URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;
  }

  if (!('sort' in URLSearchParamsProto)) {
    URLSearchParamsProto.sort = function sort() {
      var
        entries = this.entries(),
        entry = entries.next(),
        done = entry.done,
        keys = [],
        values = Object.create(null),
        i, key, value
      ;
      while (!done) {
        value = entry.value;
        key = value[0];
        keys.push(key);
        if (!(key in values)) {
          values[key] = [];
        }
        values[key].push(value[1]);
        entry = entries.next();
        done = entry.done;
      }
      // not the champion in efficiency
      // but these two bits just do the job
      keys.sort();
      for (i = 0; i < keys.length; i++) {
        this.delete(keys[i]);
      }
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        this.append(key, values[key].shift());
      }
    };
  }

}(URLSearchParams.prototype));


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9Db25maXJtRW1haWwudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9Db21tb24vTG9hZGluZ1JvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwtc2VhcmNoLXBhcmFtcy9idWlsZC91cmwtc2VhcmNoLXBhcmFtcy5ub2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTSxxQkFBcUIsR0FBRyxxREFBUSxDQUFDO0FBQ25DLFFBQU0sRUFBRTtBQUFBLFdBQ0osK01BREk7QUFBQSxHQUQyQjtBQUduQyxTQUFPLEVBQUUsQ0FBQyw2QkFBRCxDQUgwQjtBQUluQyxTQUFPLEVBQUU7QUFBQSxXQUFNLENBQUMsb0JBQW9CLDRGQUFwQixDQUFELENBQU47QUFBQSxHQUowQjtBQUtuQyxTQUFPLEVBQUU7QUFMMEIsQ0FBRCxDQUF0QztBQXNCQSxJQUFNLFlBQU47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLFNBSUksTUFKSixxQkFJVTtBQUFBOztBQUNGLFFBQU0sWUFBWSxHQUFHLElBQUkseURBQUosQ0FBb0IsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUF4QyxDQUFyQjtBQUVBLFdBQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUss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a0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJCQUEyQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiJDb25maXJtRW1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEluamVjdGVkRm9ybVByb3BzLCByZXNldCB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCB7IEFsZXJ0VHlwZSwgQ29uZmlybUVtYWlsVmlld01vZGVsLCBGaWVsZCBhcyBNb2RlbEZpZWxkIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIEFjY291bnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWNjb3VudFwiO1xyXG5pbXBvcnQgKiBhcyBBbGVydFN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9BbGVydFwiO1xyXG5pbXBvcnQgKiBhcyBTZXNzaW9uU3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL1Nlc3Npb25cIjtcclxuaW1wb3J0IFVSTFNlYXJjaFBhcmFtcyBmcm9tIFwidXJsLXNlYXJjaC1wYXJhbXNcIjtcclxuaW1wb3J0IExvYWRpbmdSb3V0ZSBmcm9tIFwiLi4vQ29tbW9uL0xvYWRpbmdSb3V0ZVwiO1xyXG5jb25zdCBBc3luY0NvbmZpcm1FbWFpbEZvcm0gPSBMb2FkYWJsZSh7XHJcbiAgICBsb2FkZXI6ICgpID0+XHJcbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiQ29uZmlybUVtYWlsRm9ybVwiICovIFwiLi4vQWNjb3VudC9Db25maXJtRW1haWxGb3JtXCIpLFxyXG4gICAgbW9kdWxlczogW1wiLi4vQWNjb3VudC9Db25maXJtRW1haWxGb3JtXCJdLFxyXG4gICAgd2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoXCIuLi9BY2NvdW50L0NvbmZpcm1FbWFpbEZvcm1cIildLFxyXG4gICAgbG9hZGluZzogTG9hZGluZ1JvdXRlXHJcbn0pO1xyXG5cclxudHlwZSBDb25maXJtRW1haWxQcm9wcyA9IEFjY291bnRTdGF0ZS5BY2NvdW50U3RhdGUgJiB7XHJcbiAgICBhY2NvdW50QWN0aW9uczogdHlwZW9mIEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIGFsZXJ0QWN0aW9uczogdHlwZW9mIEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbiAgICBzZXNzaW9uQWN0aW9uczogdHlwZW9mIFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxufSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e3VzZXJJZDogc3RyaW5nLCBjb2RlOiBzdHJpbmcgfT47XHJcblxyXG5pbnRlcmZhY2UgQWRkaXRpb25hbFByb3BzIHtcclxuICAgIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xyXG4gICAgZmllbGRzOiBNb2RlbEZpZWxkW107XHJcbiAgICBmb3JtQnV0dG9uPzogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEZvcm1Qcm9wcyA9IEluamVjdGVkRm9ybVByb3BzICYgQWRkaXRpb25hbFByb3BzO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpcm1FbWFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICAgIENvbmZpcm1FbWFpbFByb3BzLFxyXG4gICAgRm9ybVByb3BzXHJcbiAgICA+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGRpc3BsYXktNFwiPkNvbmZpcm0gRW1haWwuPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzeW5jQ29uZmlybUVtYWlsRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImNvbmZpcm1FbWFpbEZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXM6IENvbmZpcm1FbWFpbFZpZXdNb2RlbCwgZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRBY3Rpb25zLmNvbmZpcm1FbWFpbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VySWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvQWNjb3VudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxlcnRBY3Rpb25zLnNlbmRBbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVtYWlsIGFzIGJlZW4gY2hhbmdlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxlcnRUeXBlLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlc2V0KFwiY29uZmlybUVtYWlsRm9ybVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlc3Npb25BY3Rpb25zLmxvYWRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsZXJ0QWN0aW9ucy5zZW5kQWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxlcnRUeXBlLmRhbmdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxMaW5rIHRvPVwiL2FjY291bnRcIj5HbyBiYWNrPC9MaW5rPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50LCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgKFxyXG4gICAgICAgIGRpc3BhdGNoOlxyXG4gICAgICAgICAgICB8IERpc3BhdGNoPEFjY291bnRTdGF0ZS5BY2NvdW50U3RhdGU+XHJcbiAgICAgICAgICAgIHwgRGlzcGF0Y2g8QWxlcnRTdGF0ZS5BbGVydFN0YXRlPlxyXG4gICAgICAgICAgICB8IERpc3BhdGNoPFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RhdGU+XHJcbiAgICApID0+IHtcclxuICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWNjb3VudEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY2NvdW50U3RhdGUuYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSxcclxuICAgICAgICAgICAgYWxlcnRBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICAgICAgICBzZXNzaW9uQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuKShDb25maXJtRW1haWwpIGFzIHR5cGVvZiBDb25maXJtRW1haWw7XHJcbiIsImltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBMb2FkaW5nUm91dGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNwaW5uZXJ9IHNwaW4gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1JvdXRlO1xyXG4iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NwaW5uZXInO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxMTAnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zMDQgNDhjMCAyNi41MS0yMS40OSA0OC00OCA0OHMtNDgtMjEuNDktNDgtNDggMjEuNDktNDggNDgtNDggNDggMjEuNDkgNDggNDh6bS00OCAzNjhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6bTIwOC0yMDhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6TTk2IDI1NmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4UzAgMjI5LjQ5IDAgMjU2czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4em0xMi45MjIgOTkuMDc4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5MS00OC00OC00OHptMjk0LjE1NiAwYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5LTQ4LTQ4LTQ4ek0xMDguOTIyIDYwLjkyMmMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OTEtNDgtNDgtNDh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0geyAgICAgICAgICAgXG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG4gIFxuZXhwb3J0cy5mYVNwaW5uZXIgPSBleHBvcnRzLmRlZmluaXRpb247ICAgICAgICAgICBcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lOyBcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIi8vIEBAc2VhcmNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBTRUFSQ0gsICRzZWFyY2gpIHtcbiAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuICB9LCAkc2VhcmNoXTtcbn0pO1xuIiwiLyohXG5Db3B5cmlnaHQgKEMpIDIwMTUtMjAxNyBBbmRyZWEgR2lhbW1hcmNoaSAtIEBXZWJSZWZsZWN0aW9uXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KSB7XG4gIHZhclxuICAgIGluZGV4LCBrZXksIHZhbHVlLFxuICAgIHBhaXJzLCBpLCBsZW5ndGgsXG4gICAgZGljdCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgO1xuICB0aGlzW3NlY3JldF0gPSBkaWN0O1xuICBpZiAoIXF1ZXJ5KSByZXR1cm47XG4gIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHF1ZXJ5LmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKDEpO1xuICAgIH1cbiAgICBmb3IgKFxuICAgICAgcGFpcnMgPSBxdWVyeS5zcGxpdCgnJicpLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW5ndGggPSBwYWlycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrK1xuICAgICkge1xuICAgICAgdmFsdWUgPSBwYWlyc1tpXTtcbiAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuICAgICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgICAgYXBwZW5kVG8oXG4gICAgICAgICAgZGljdCxcbiAgICAgICAgICBkZWNvZGUodmFsdWUuc2xpY2UoMCwgaW5kZXgpKSxcbiAgICAgICAgICBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoKXtcbiAgICAgICAgYXBwZW5kVG8oXG4gICAgICAgICAgZGljdCxcbiAgICAgICAgICBkZWNvZGUodmFsdWUpLFxuICAgICAgICAgICcnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgZm9yIChcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBxdWVyeVtpXTtcbiAgICAgICAgYXBwZW5kVG8oZGljdCwgdmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gcXVlcnkpIHtcbiAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGtleSwgcXVlcnlba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhclxuICBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgVVJMU2VhcmNoUGFyYW1zUHJvdG8gPSBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLFxuICBmaW5kID0gL1shJ1xcKFxcKX5dfCUyMHwlMDAvZyxcbiAgcGx1cyA9IC9cXCsvZyxcbiAgcmVwbGFjZSA9IHtcbiAgICAnISc6ICclMjEnLFxuICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAnKCc6ICclMjgnLFxuICAgICcpJzogJyUyOScsXG4gICAgJ34nOiAnJTdFJyxcbiAgICAnJTIwJzogJysnLFxuICAgICclMDAnOiAnXFx4MDAnXG4gIH0sXG4gIHJlcGxhY2VyID0gZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICB9LFxuICBzZWNyZXQgPSAnX19VUkxTZWFyY2hQYXJhbXNfXzonICsgTWF0aC5yYW5kb20oKVxuO1xuXG5mdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSBpbiBkaWN0KSB7XG4gICAgZGljdFtuYW1lXS5wdXNoKCcnICsgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGRpY3RbbmFtZV0gPSBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogWycnICsgdmFsdWVdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZShwbHVzLCAnICcpKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZShmaW5kLCByZXBsYWNlcik7XG59XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICBhcHBlbmRUbyh0aGlzW3NlY3JldF0sIG5hbWUsIHZhbHVlKTtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmRlbGV0ZSA9IGZ1bmN0aW9uIGRlbChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzW3NlY3JldF1bbmFtZV07XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5nZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xuICB2YXIgZGljdCA9IHRoaXNbc2VjcmV0XTtcbiAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uZ2V0QWxsID0gZnVuY3Rpb24gZ2V0QWxsKG5hbWUpIHtcbiAgdmFyIGRpY3QgPSB0aGlzW3NlY3JldF07XG4gIHJldHVybiBuYW1lIGluIGRpY3QgPyBkaWN0W25hbWVdLnNsaWNlKDApIDogW107XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5oYXMgPSBmdW5jdGlvbiBoYXMobmFtZSkge1xuICByZXR1cm4gbmFtZSBpbiB0aGlzW3NlY3JldF07XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgdGhpc1tzZWNyZXRdW25hbWVdID0gWycnICsgdmFsdWVdO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgdmFyIGRpY3QgPSB0aGlzW3NlY3JldF07XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRpY3QpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gIH0sIHRoaXMpO1xufTtcblxuLypcblVSTFNlYXJjaFBhcmFtc1Byb3RvLnRvQm9keSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IEJsb2IoXG4gICAgW3RoaXMudG9TdHJpbmcoKV0sXG4gICAge3R5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfVxuICApO1xufTtcbiovXG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgcmV0dXJuIHt9O1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgdmFyIGRpY3QgPSB0aGlzW3NlY3JldF0sIHF1ZXJ5ID0gW10sIGksIGtleSwgbmFtZSwgdmFsdWU7XG4gIGZvciAoa2V5IGluIGRpY3QpIHtcbiAgICBuYW1lID0gZW5jb2RlKGtleSk7XG4gICAgZm9yIChcbiAgICAgIGkgPSAwLFxuICAgICAgdmFsdWUgPSBkaWN0W2tleV07XG4gICAgICBpIDwgdmFsdWUubGVuZ3RoOyBpKytcbiAgICApIHtcbiAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnkuam9pbignJicpO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zID0gKG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlVSTFNlYXJjaFBhcmFtcyB8fCBVUkxTZWFyY2hQYXJhbXMpO1xuXG4oZnVuY3Rpb24gKFVSTFNlYXJjaFBhcmFtc1Byb3RvKSB7XG5cbiAgdmFyIGl0ZXJhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICEhU3ltYm9sLml0ZXJhdG9yO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0oKSk7XG5cbiAgLy8gbW9zdGx5IHJlbGF0ZWQgdG8gaXNzdWUgIzI0XG4gIGlmICghKCdmb3JFYWNoJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgdmFyIG5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHRoaXMudG9TdHJpbmcoKVxuICAgICAgICAgIC5yZXBsYWNlKC89W1xcc1xcU10qPyg/OiZ8JCkvZywgJz0nKVxuICAgICAgICAgIC5zcGxpdCgnPScpXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghbmFtZS5sZW5ndGggfHwgbmFtZSBpbiBuYW1lcykgcmV0dXJuO1xuICAgICAgICAgICAgKG5hbWVzW25hbWVdID0gdGhpcy5nZXRBbGwobmFtZSkpLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCEoJ2tleXMnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmtleXMgPSBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKTsgfSk7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cblxuICBpZiAoISgndmFsdWVzJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKTsgfSk7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cblxuICBpZiAoISgnZW50cmllcycgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pOyB9KTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChpdGVyYWJsZSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90b1tTeW1ib2wuaXRlcmF0b3JdID0gVVJMU2VhcmNoUGFyYW1zUHJvdG8uZW50cmllcztcbiAgfVxuXG4gIGlmICghKCdzb3J0JyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5zb3J0ID0gZnVuY3Rpb24gc29ydCgpIHtcbiAgICAgIHZhclxuICAgICAgICBlbnRyaWVzID0gdGhpcy5lbnRyaWVzKCksXG4gICAgICAgIGVudHJ5ID0gZW50cmllcy5uZXh0KCksXG4gICAgICAgIGRvbmUgPSBlbnRyeS5kb25lLFxuICAgICAgICBrZXlzID0gW10sXG4gICAgICAgIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgIGksIGtleSwgdmFsdWVcbiAgICAgIDtcbiAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICB2YWx1ZSA9IGVudHJ5LnZhbHVlO1xuICAgICAgICBrZXkgPSB2YWx1ZVswXTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIGlmICghKGtleSBpbiB2YWx1ZXMpKSB7XG4gICAgICAgICAgdmFsdWVzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNba2V5XS5wdXNoKHZhbHVlWzFdKTtcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzLm5leHQoKTtcbiAgICAgICAgZG9uZSA9IGVudHJ5LmRvbmU7XG4gICAgICB9XG4gICAgICAvLyBub3QgdGhlIGNoYW1waW9uIGluIGVmZmljaWVuY3lcbiAgICAgIC8vIGJ1dCB0aGVzZSB0d28gYml0cyBqdXN0IGRvIHRoZSBqb2JcbiAgICAgIGtleXMuc29ydCgpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5kZWxldGUoa2V5c1tpXSk7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1trZXldLnNoaWZ0KCkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufShVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9