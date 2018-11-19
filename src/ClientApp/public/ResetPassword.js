exports.ids = ["ResetPassword"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ResetPassword.tsx":
/*!************************************************************!*\
  !*** ./ClientApp/src/components/Account/ResetPassword.tsx ***!
  \************************************************************/
/*! exports provided: ResetPassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return ResetPassword; });
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
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url-search-params */ "./node_modules/url-search-params/build/url-search-params.node.js");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models */ "./ClientApp/src/models/index.ts");
/* harmony import */ var _store_Account__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/Account */ "./ClientApp/src/store/Account.ts");
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");
/* harmony import */ var _store_Session__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/Session */ "./ClientApp/src/store/Session.ts");
/* harmony import */ var _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Common/LoadingRoute */ "./ClientApp/src/components/Common/LoadingRoute.tsx");















var AsyncResetPasswordForm = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | ResetPasswordForm */ "ResetPasswordForm").then(__webpack_require__.bind(null, /*! ../Account/ResetPasswordForm */ "./ClientApp/src/components/Account/ResetPasswordForm.tsx"));
  },
  modules: ["../Account/ResetPasswordForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../Account/ResetPasswordForm */ "./ClientApp/src/components/Account/ResetPasswordForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_14__["default"]
});
var ResetPassword =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ResetPassword, _React$Component);

  function ResetPassword() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResetPassword.prototype;

  _proto.render = function render() {
    var _this = this;

    var searchParams = new url_search_params__WEBPACK_IMPORTED_MODULE_9___default.a(this.props.location.search);
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "row justify-content-center pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "col-12 col-sm-8 col-lg-7"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Reset Password."), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](AsyncResetPasswordForm, {
      form: "changeEmailForm",
      enableReinitialize: true,
      onSubmit: function onSubmit(values, dispatch) {
        _this.props.accountActions.resetPassword(Object.assign({
          userId: searchParams.get("userId"),
          code: searchParams.get("code")
        }, values), function () {
          _this.props.history.push("/ResetPasswordConfirmation");

          _this.props.alertActions.sendAlert("Password has been reset successfully!", _models__WEBPACK_IMPORTED_MODULE_10__["AlertType"].success, true);

          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_8__["reset"])("changeEmailForm"));

          _this.props.sessionActions.requiredToken();
        }, function (error) {
          _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_10__["AlertType"].danger, true);
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: "/account"
    }, "Go back")))));
  };

  return ResetPassword;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state.account;
}, // Selects which state properties are merged into the component's props
function (dispatch) {
  // Selects which action creators are merged into the component's props
  return {
    accountActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_store_Account__WEBPACK_IMPORTED_MODULE_11__["actionCreators"], dispatch),
    alertActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_store_Alert__WEBPACK_IMPORTED_MODULE_12__["actionCreators"], dispatch),
    sessionActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_store_Session__WEBPACK_IMPORTED_MODULE_13__["actionCreators"], dispatch)
  };
})(ResetPassword));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9SZXNldFBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRpbmdSb3V0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXJsLXNlYXJjaC1wYXJhbXMvYnVpbGQvdXJsLXNlYXJjaC1wYXJhbXMubm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0sc0JBQXNCLEdBQUcscURBQVEsQ0FBQztBQUNwQyxRQUFNLEVBQUU7QUFBQSxXQUNKLG1OQURJO0FBQUEsR0FENEI7QUFHcEMsU0FBTyxFQUFFLENBQUMsOEJBQUQsQ0FIMkI7QUFJcEMsU0FBTyxFQUFFO0FBQUEsV0FBTSxDQUFDLG9CQUFvQiw4RkFBcEIsQ0FBRCxDQUFOO0FBQUEsR0FKMkI7QUFLcEMsU0FBTyxFQUFFO0FBTDJCLENBQUQsQ0FBdkM7QUFxQkEsSUFBTSxhQUFOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxTQUlJLE1BSkoscUJBSVU7QUFBQTs7QUFDRixRQUFNLFlBQVksR0FBRyxJQUFJLHdEQUFKLENBQW9CLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBeEMsQ0FBckI7QUFDQSxXQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFL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QUFrQixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUIsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMkJBQTJCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6IlJlc2V0UGFzc3dvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEluamVjdGVkRm9ybVByb3BzLCByZXNldCB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSBcInVybC1zZWFyY2gtcGFyYW1zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBbGVydFR5cGUsXHJcbiAgICBGaWVsZCBhcyBNb2RlbEZpZWxkLFxyXG4gICAgUmVzZXRQYXNzd29yZFZpZXdNb2RlbFxyXG59IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBBY2NvdW50U3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL0FjY291bnRcIjtcclxuaW1wb3J0ICogYXMgQWxlcnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWxlcnRcIjtcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9TZXNzaW9uXCI7XHJcbmltcG9ydCBMb2FkaW5nUm91dGUgZnJvbSBcIi4uL0NvbW1vbi9Mb2FkaW5nUm91dGVcIjtcclxuXHJcbmNvbnN0IEFzeW5jUmVzZXRQYXNzd29yZEZvcm0gPSBMb2FkYWJsZSh7XHJcbiAgICBsb2FkZXI6ICgpID0+XHJcbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiUmVzZXRQYXNzd29yZEZvcm1cIiAqLyBcIi4uL0FjY291bnQvUmVzZXRQYXNzd29yZEZvcm1cIiksXHJcbiAgICBtb2R1bGVzOiBbXCIuLi9BY2NvdW50L1Jlc2V0UGFzc3dvcmRGb3JtXCJdLFxyXG4gICAgd2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoXCIuLi9BY2NvdW50L1Jlc2V0UGFzc3dvcmRGb3JtXCIpXSxcclxuICAgIGxvYWRpbmc6IExvYWRpbmdSb3V0ZVxyXG59KTtcclxudHlwZSBSZXNldFBhc3N3b3JkUHJvcHMgPSBBY2NvdW50U3RhdGUuQWNjb3VudFN0YXRlICYge1xyXG4gICAgYWNjb3VudEFjdGlvbnM6IHR5cGVvZiBBY2NvdW50U3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbiAgICBhbGVydEFjdGlvbnM6IHR5cGVvZiBBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gICAgc2Vzc2lvbkFjdGlvbnM6IHR5cGVvZiBTZXNzaW9uU3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbn0gJiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgdXNlcklkOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9PjtcclxuXHJcbmludGVyZmFjZSBBZGRpdGlvbmFsUHJvcHMge1xyXG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XHJcbiAgICBmaWVsZHM6IE1vZGVsRmllbGRbXTtcclxuICAgIGZvcm1CdXR0b24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgRm9ybVByb3BzID0gSW5qZWN0ZWRGb3JtUHJvcHMgJiBBZGRpdGlvbmFsUHJvcHM7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICAgIFJlc2V0UGFzc3dvcmRQcm9wcyxcclxuICAgIEZvcm1Qcm9wc1xyXG4gICAgPiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGRpc3BsYXktNFwiPlJlc2V0IFBhc3N3b3JkLjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3luY1Jlc2V0UGFzc3dvcmRGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiY2hhbmdlRW1haWxGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzOiBSZXNldFBhc3N3b3JkVmlld01vZGVsLCBkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudEFjdGlvbnMucmVzZXRQYXNzd29yZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlcklkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvUmVzZXRQYXNzd29yZENvbmZpcm1hdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxlcnRBY3Rpb25zLnNlbmRBbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseSFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuc3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVzZXQoXCJjaGFuZ2VFbWFpbEZvcm1cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uQWN0aW9ucy5yZXF1aXJlZFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxlcnRBY3Rpb25zLnNlbmRBbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5lcnJvcl9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuZGFuZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hY2NvdW50XCI+R28gYmFjazwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmFjY291bnQsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICAoXHJcbiAgICAgICAgZGlzcGF0Y2g6XHJcbiAgICAgICAgICAgIHwgRGlzcGF0Y2g8QWNjb3VudFN0YXRlLkFjY291bnRTdGF0ZT5cclxuICAgICAgICAgICAgfCBEaXNwYXRjaDxBbGVydFN0YXRlLkFsZXJ0U3RhdGU+XHJcbiAgICAgICAgICAgIHwgRGlzcGF0Y2g8U2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZT5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhY2NvdW50QWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICAgICAgICBhbGVydEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCksXHJcbiAgICAgICAgICAgIHNlc3Npb25BY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4pKFJlc2V0UGFzc3dvcmQpIGFzIHR5cGVvZiBSZXNldFBhc3N3b3JkO1xyXG4iLCJpbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgTG9hZGluZ1JvdXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzcGluIHNpemU9XCIyeFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSb3V0ZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzcGlubmVyJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMTEwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMzA0IDQ4YzAgMjYuNTEtMjEuNDkgNDgtNDggNDhzLTQ4LTIxLjQ5LTQ4LTQ4IDIxLjQ5LTQ4IDQ4LTQ4IDQ4IDIxLjQ5IDQ4IDQ4em0tNDggMzY4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5LTQ4LTQ4LTQ4em0yMDgtMjA4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5LTQ4LTQ4LTQ4ek05NiAyNTZjMC0yNi41MS0yMS40OS00OC00OC00OFMwIDIyOS40OSAwIDI1NnMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OHptMTIuOTIyIDk5LjA3OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OGMwLTI2LjUwOS0yMS40OTEtNDgtNDgtNDh6bTI5NC4xNTYgMGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OGMwLTI2LjUwOS0yMS40OS00OC00OC00OHpNMTA4LjkyMiA2MC45MjJjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDkxLTQ4LTQ4LTQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHsgICAgICAgICAgIFxuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuICBcbmV4cG9ydHMuZmFTcGlubmVyID0gZXhwb3J0cy5kZWZpbml0aW9uOyAgICAgICAgICAgXG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTsgXG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIvLyBAQHNlYXJjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzZWFyY2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgU0VBUkNILCAkc2VhcmNoKSB7XG4gIC8vIDIxLjEuMy4xNSBTdHJpbmcucHJvdG90eXBlLnNlYXJjaChyZWdleHApXG4gIHJldHVybiBbZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgfSwgJHNlYXJjaF07XG59KTtcbiIsIi8qIVxuQ29weXJpZ2h0IChDKSAyMDE1LTIwMTcgQW5kcmVhIEdpYW1tYXJjaGkgLSBAV2ViUmVmbGVjdGlvblxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFVSTFNlYXJjaFBhcmFtcyhxdWVyeSkge1xuICB2YXJcbiAgICBpbmRleCwga2V5LCB2YWx1ZSxcbiAgICBwYWlycywgaSwgbGVuZ3RoLFxuICAgIGRpY3QgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIDtcbiAgdGhpc1tzZWNyZXRdID0gZGljdDtcbiAgaWYgKCFxdWVyeSkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJykge1xuICAgIGlmIChxdWVyeS5jaGFyQXQoMCkgPT09ICc/Jykge1xuICAgICAgcXVlcnkgPSBxdWVyeS5zbGljZSgxKTtcbiAgICB9XG4gICAgZm9yIChcbiAgICAgIHBhaXJzID0gcXVlcnkuc3BsaXQoJyYnKSxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuZ3RoID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKytcbiAgICApIHtcbiAgICAgIHZhbHVlID0gcGFpcnNbaV07XG4gICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJz0nKTtcbiAgICAgIGlmICgtMSA8IGluZGV4KSB7XG4gICAgICAgIGFwcGVuZFRvKFxuICAgICAgICAgIGRpY3QsXG4gICAgICAgICAgZGVjb2RlKHZhbHVlLnNsaWNlKDAsIGluZGV4KSksXG4gICAgICAgICAgZGVjb2RlKHZhbHVlLnNsaWNlKGluZGV4ICsgMSkpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCl7XG4gICAgICAgIGFwcGVuZFRvKFxuICAgICAgICAgIGRpY3QsXG4gICAgICAgICAgZGVjb2RlKHZhbHVlKSxcbiAgICAgICAgICAnJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNBcnJheShxdWVyeSkpIHtcbiAgICAgIGZvciAoXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSBxdWVyeS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrK1xuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gcXVlcnlbaV07XG4gICAgICAgIGFwcGVuZFRvKGRpY3QsIHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIHF1ZXJ5KSB7XG4gICAgICAgICBhcHBlbmRUbyhkaWN0LCBrZXksIHF1ZXJ5W2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXJcbiAgaXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gIFVSTFNlYXJjaFBhcmFtc1Byb3RvID0gVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZSxcbiAgZmluZCA9IC9bISdcXChcXCl+XXwlMjB8JTAwL2csXG4gIHBsdXMgPSAvXFwrL2csXG4gIHJlcGxhY2UgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgICAnJTAwJzogJ1xceDAwJ1xuICB9LFxuICByZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgfSxcbiAgc2VjcmV0ID0gJ19fVVJMU2VhcmNoUGFyYW1zX186JyArIE1hdGgucmFuZG9tKClcbjtcblxuZnVuY3Rpb24gYXBwZW5kVG8oZGljdCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgaW4gZGljdCkge1xuICAgIGRpY3RbbmFtZV0ucHVzaCgnJyArIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBkaWN0W25hbWVdID0gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFsnJyArIHZhbHVlXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UocGx1cywgJyAnKSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoZmluZCwgcmVwbGFjZXIpO1xufVxuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgYXBwZW5kVG8odGhpc1tzZWNyZXRdLCBuYW1lLCB2YWx1ZSk7XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5kZWxldGUgPSBmdW5jdGlvbiBkZWwobmFtZSkge1xuICBkZWxldGUgdGhpc1tzZWNyZXRdW25hbWVdO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgdmFyIGRpY3QgPSB0aGlzW3NlY3JldF07XG4gIHJldHVybiBuYW1lIGluIGRpY3QgPyBkaWN0W25hbWVdWzBdIDogbnVsbDtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbChuYW1lKSB7XG4gIHZhciBkaWN0ID0gdGhpc1tzZWNyZXRdO1xuICByZXR1cm4gbmFtZSBpbiBkaWN0ID8gZGljdFtuYW1lXS5zbGljZSgwKSA6IFtdO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uaGFzID0gZnVuY3Rpb24gaGFzKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgaW4gdGhpc1tzZWNyZXRdO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KG5hbWUsIHZhbHVlKSB7XG4gIHRoaXNbc2VjcmV0XVtuYW1lXSA9IFsnJyArIHZhbHVlXTtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gIHZhciBkaWN0ID0gdGhpc1tzZWNyZXRdO1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkaWN0W25hbWVdLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICB9LCB0aGlzKTtcbn07XG5cbi8qXG5VUkxTZWFyY2hQYXJhbXNQcm90by50b0JvZHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBCbG9iKFxuICAgIFt0aGlzLnRvU3RyaW5nKCldLFxuICAgIHt0eXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ31cbiAgKTtcbn07XG4qL1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gIHJldHVybiB7fTtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHZhciBkaWN0ID0gdGhpc1tzZWNyZXRdLCBxdWVyeSA9IFtdLCBpLCBrZXksIG5hbWUsIHZhbHVlO1xuICBmb3IgKGtleSBpbiBkaWN0KSB7XG4gICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgIGZvciAoXG4gICAgICBpID0gMCxcbiAgICAgIHZhbHVlID0gZGljdFtrZXldO1xuICAgICAgaSA8IHZhbHVlLmxlbmd0aDsgaSsrXG4gICAgKSB7XG4gICAgICBxdWVyeS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGUodmFsdWVbaV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKTtcbn07XG5cblVSTFNlYXJjaFBhcmFtcyA9IChtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5VUkxTZWFyY2hQYXJhbXMgfHwgVVJMU2VhcmNoUGFyYW1zKTtcblxuKGZ1bmN0aW9uIChVUkxTZWFyY2hQYXJhbXNQcm90bykge1xuXG4gIHZhciBpdGVyYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAhIVN5bWJvbC5pdGVyYXRvcjtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KCkpO1xuXG4gIC8vIG1vc3RseSByZWxhdGVkIHRvIGlzc3VlICMyNFxuICBpZiAoISgnZm9yRWFjaCcgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgIHZhciBuYW1lcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB0aGlzLnRvU3RyaW5nKClcbiAgICAgICAgICAucmVwbGFjZSgvPVtcXHNcXFNdKj8oPzomfCQpL2csICc9JylcbiAgICAgICAgICAuc3BsaXQoJz0nKVxuICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWUubGVuZ3RoIHx8IG5hbWUgaW4gbmFtZXMpIHJldHVybjtcbiAgICAgICAgICAgIChuYW1lc1tuYW1lXSA9IHRoaXMuZ2V0QWxsKG5hbWUpKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghKCdrZXlzJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5rZXlzID0gZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSk7IH0pO1xuICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCEoJ3ZhbHVlcycgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8udmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSk7IH0pO1xuICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCEoJ2VudHJpZXMnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmVudHJpZXMgPSBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTsgfSk7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cblxuICBpZiAoaXRlcmFibGUgJiYgIShTeW1ib2wuaXRlcmF0b3IgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG9bU3ltYm9sLml0ZXJhdG9yXSA9IFVSTFNlYXJjaFBhcmFtc1Byb3RvLmVudHJpZXM7XG4gIH1cblxuICBpZiAoISgnc29ydCcgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uc29ydCA9IGZ1bmN0aW9uIHNvcnQoKSB7XG4gICAgICB2YXJcbiAgICAgICAgZW50cmllcyA9IHRoaXMuZW50cmllcygpLFxuICAgICAgICBlbnRyeSA9IGVudHJpZXMubmV4dCgpLFxuICAgICAgICBkb25lID0gZW50cnkuZG9uZSxcbiAgICAgICAga2V5cyA9IFtdLFxuICAgICAgICB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICBpLCBrZXksIHZhbHVlXG4gICAgICA7XG4gICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgdmFsdWUgPSBlbnRyeS52YWx1ZTtcbiAgICAgICAga2V5ID0gdmFsdWVbMF07XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICBpZiAoIShrZXkgaW4gdmFsdWVzKSkge1xuICAgICAgICAgIHZhbHVlc1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2tleV0ucHVzaCh2YWx1ZVsxXSk7XG4gICAgICAgIGVudHJ5ID0gZW50cmllcy5uZXh0KCk7XG4gICAgICAgIGRvbmUgPSBlbnRyeS5kb25lO1xuICAgICAgfVxuICAgICAgLy8gbm90IHRoZSBjaGFtcGlvbiBpbiBlZmZpY2llbmN5XG4gICAgICAvLyBidXQgdGhlc2UgdHdvIGJpdHMganVzdCBkbyB0aGUgam9iXG4gICAgICBrZXlzLnNvcnQoKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlKGtleXNbaV0pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZXNba2V5XS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbn0oVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==