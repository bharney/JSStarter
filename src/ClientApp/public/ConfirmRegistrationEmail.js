exports.ids = ["ConfirmRegistrationEmail"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ConfirmRegistrationEmail.tsx":
/*!***********************************************************************!*\
  !*** ./ClientApp/src/components/Account/ConfirmRegistrationEmail.tsx ***!
  \***********************************************************************/
/*! exports provided: ConfirmRegistrationEmail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationEmail", function() { return ConfirmRegistrationEmail; });
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./ClientApp/src/models/index.ts");
/* harmony import */ var _store_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/Account */ "./ClientApp/src/store/Account.ts");
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");
/* harmony import */ var _store_Session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/Session */ "./ClientApp/src/store/Session.ts");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url-search-params */ "./node_modules/url-search-params/build/url-search-params.node.js");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_10__);











var ConfirmRegistrationEmail =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ConfirmRegistrationEmail, _React$Component);

  function ConfirmRegistrationEmail() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ConfirmRegistrationEmail.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this = this;

    var searchParams = new url_search_params__WEBPACK_IMPORTED_MODULE_10___default.a(this.props.location.search);
    this.props.accountActions.confirmRegistrationEmail({
      code: searchParams.get("code"),
      userId: searchParams.get("userId")
    }, function () {
      _this.props.alertActions.sendAlert("Your account has been registered successfully!", _models__WEBPACK_IMPORTED_MODULE_6__["AlertType"].success, true);

      _this.props.sessionActions.loadToken();
    }, function (error) {
      _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_6__["AlertType"].danger, true);
    });
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "row justify-content-center pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "col-12 col-sm-8 col-lg-7"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Confirm Email."), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null, "Thank you for confirming your email. You can now login using your Account. Remember if you forget your password you can always use the", react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/forgotpassword"
    }, "Forgot Password"), " Assistance."), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/"
    }, "Go back")))));
  };

  return ConfirmRegistrationEmail;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state.account;
}, // Selects which state properties are merged into the component's props
function (dispatch) {
  // Selects which action creators are merged into the component's props
  return {
    accountActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_store_Account__WEBPACK_IMPORTED_MODULE_7__["actionCreators"], dispatch),
    alertActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_store_Alert__WEBPACK_IMPORTED_MODULE_8__["actionCreators"], dispatch),
    sessionActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_store_Session__WEBPACK_IMPORTED_MODULE_9__["actionCreators"], dispatch)
  };
})(ConfirmRegistrationEmail));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9Db25maXJtUmVnaXN0cmF0aW9uRW1haWwudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zL2J1aWxkL3VybC1zZWFyY2gtcGFyYW1zLm5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBLElBQU0sd0JBQU47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLFNBS0ksaUJBTEosZ0NBS3FCO0FBQUE7O0FBQ2IsUUFBTSxZQUFZLEdBQUcsSUFBSSx5REFBSixDQUFvQixLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE1BQXhDLENBQXJCO0FBQ0EsU0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQix3QkFBMUIsQ0FDUTtBQUNJLFVBQUksRUFBRSxZQUFZLENBQUMsR0FBYixDQUFpQixNQUFqQixDQURWO0FBRUksWUFBTSxFQUFFLFlBQVksQ0FBQyxHQUFiLENBQWlCLFFBQWpCO0FBRlosS0FEUixFQUtRLFlBQUs7QUFDRCxXQUFJLENBQUMsS0FBTCxDQUFXLFlBQVgsQ0FBd0IsU0FBeEIsQ0FDSSxnREFESixFQUVJLGlEQUFTLENBQUMsT0FGZCxFQUdJLElBSEo7O0FBS0EsV0FBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYLENBQTBCLFNBQTFCO0FBQ0gsS0FaVCxFQWFRLGVBQUssRUFBRztBQUNKLFdBQUksQ0FBQyxLQUFMLENBQVcsWUFBWCxDQUF3QixTQUF4QixDQUNJLEtBQUssQ0FBQyxpQkFEVixFQUVJLGlEQUFTLENBQUMsTUFGZCxFQUdJLElBSEo7QUFLSCxLQW5CVDtBQXFCSCxHQTVCTDs7QUFBQSxTQTZCSSxNQTdCSixxQkE2QlU7QUFFRixXQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBcUMsZ0JBQXJDLENBREosRUFFSSwrRCx3SUFBQSxFQUVJLG9EQUFDLHFEQUFELEVBQUs7QUFBQyxRQUFFLEVBQUM7QUFBSixLQUFMLEVBQTBCLGlCQUExQixDQUZKLEVBRXFFLGNBRnJFLENBRkosRUFLSSwrREFMSixFQU1JLCtEQU5KLEVBT0ksK0RBQUcsb0RBQUMscURBQUQsRUFBSztBQUFDLFFBQUUsRUFBQztBQUFKLEtBQUwsRUFBWSxTQUFaLENBQUgsQ0FQSixDQURKLENBREosQ0FESjtBQWVILEdBOUNMOztBQUFBO0FBQUEsRUFBOEMsK0NBQTlDO0FBaURBLCtEQUFlLDJEQUFPLENBQ2xCLFVBQUMsS0FBRDtBQUFBLFNBQTZCLEtBQUssQ0FBQyxPQUFuQztBQUFBLENBRGtCLEVBQzBCO0FBQzVDLFVBQ0ksUUFESixFQUtJO0FBQ0E7QUFDQSxTQUFPO0FBQ0gsa0JBQWMsRUFBRSxnRUFBa0IsQ0FBQyw2REFBRCxFQUE4QixRQUE5QixDQUQvQjtBQUVILGdCQUFZLEVBQUUsZ0VBQWtCLENBQUMsMkRBQUQsRUFBNEIsUUFBNUIsQ0FGN0I7QUFHSCxrQkFBYyxFQUFFLGdFQUFrQixDQUFDLDZEQUFELEVBQThCLFFBQTlCO0FBSC9CLEdBQVA7QUFLSCxDQWRpQixDQUFQLENBZWIsd0JBZmEsQ0FBZixFOzs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0JBQWtCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQixFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyQkFBMkIsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoiQ29uZmlybVJlZ2lzdHJhdGlvbkVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBJbmplY3RlZEZvcm1Qcm9wcywgcmVzZXQgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xyXG5pbXBvcnQgeyBBbGVydFR5cGUsIEZpZWxkIGFzIE1vZGVsRmllbGQsIENvbmZpcm1FbWFpbFZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBBY2NvdW50U3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL0FjY291bnRcIjtcclxuaW1wb3J0ICogYXMgQWxlcnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWxlcnRcIjtcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9TZXNzaW9uXCI7XHJcbmltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSBcInVybC1zZWFyY2gtcGFyYW1zXCI7XHJcbmltcG9ydCBMb2FkaW5nUm91dGUgZnJvbSBcIi4uL0NvbW1vbi9Mb2FkaW5nUm91dGVcIjtcclxuXHJcblxyXG50eXBlIENvbmZpcm1SZWdpc3RyYXRpb25FbWFpbFByb3BzID0gQWNjb3VudFN0YXRlLkFjY291bnRTdGF0ZSAmIHtcclxuICAgIGFjY291bnRBY3Rpb25zOiB0eXBlb2YgQWNjb3VudFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gICAgYWxlcnRBY3Rpb25zOiB0eXBlb2YgQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIHNlc3Npb25BY3Rpb25zOiB0eXBlb2YgU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG59ICYgUm91dGVDb21wb25lbnRQcm9wczx7dXNlcklkOiBzdHJpbmcsIGNvZGU6IHN0cmluZyB9PjtcclxuXHJcbmludGVyZmFjZSBBZGRpdGlvbmFsUHJvcHMge1xyXG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XHJcbiAgICBmaWVsZHM6IE1vZGVsRmllbGRbXTtcclxuICAgIGZvcm1CdXR0b24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgRm9ybVByb3BzID0gSW5qZWN0ZWRGb3JtUHJvcHMgJiBBZGRpdGlvbmFsUHJvcHM7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybVJlZ2lzdHJhdGlvbkVtYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gICAgQ29uZmlybVJlZ2lzdHJhdGlvbkVtYWlsUHJvcHMsXHJcbiAgICBGb3JtUHJvcHNcclxuICAgID4ge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWNjb3VudEFjdGlvbnMuY29uZmlybVJlZ2lzdHJhdGlvbkVtYWlsKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHNlYXJjaFBhcmFtcy5nZXQoXCJjb2RlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogc2VhcmNoUGFyYW1zLmdldChcInVzZXJJZFwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsZXJ0QWN0aW9ucy5zZW5kQWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91ciBhY2NvdW50IGhhcyBiZWVuIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuc3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uQWN0aW9ucy5sb2FkVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5lcnJvcl9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWxlcnRUeXBlLmRhbmdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5Db25maXJtIEVtYWlsLjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoYW5rIHlvdSBmb3IgY29uZmlybWluZyB5b3VyIGVtYWlsLiBZb3UgY2FuIG5vdyBsb2dpbiB1c2luZyB5b3VyIEFjY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciBpZiB5b3UgZm9yZ2V0IHlvdXIgcGFzc3dvcmQgeW91IGNhbiBhbHdheXMgdXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZm9yZ290cGFzc3dvcmRcIj5Gb3Jnb3QgUGFzc3dvcmQ8L0xpbms+IEFzc2lzdGFuY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxMaW5rIHRvPVwiL1wiPkdvIGJhY2s8L0xpbms+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmFjY291bnQsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICAoXHJcbiAgICAgICAgZGlzcGF0Y2g6XHJcbiAgICAgICAgICAgIHwgRGlzcGF0Y2g8QWNjb3VudFN0YXRlLkFjY291bnRTdGF0ZT5cclxuICAgICAgICAgICAgfCBEaXNwYXRjaDxBbGVydFN0YXRlLkFsZXJ0U3RhdGU+XHJcbiAgICAgICAgICAgIHwgRGlzcGF0Y2g8U2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZT5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhY2NvdW50QWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICAgICAgICBhbGVydEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCksXHJcbiAgICAgICAgICAgIHNlc3Npb25BY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4pKENvbmZpcm1SZWdpc3RyYXRpb25FbWFpbCkgYXMgdHlwZW9mIENvbmZpcm1SZWdpc3RyYXRpb25FbWFpbDtcclxuIiwiLy8gQEBzZWFyY2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc2VhcmNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIFNFQVJDSCwgJHNlYXJjaCkge1xuICAvLyAyMS4xLjMuMTUgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2gocmVnZXhwKVxuICByZXR1cm4gW2Z1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRzZWFyY2hdO1xufSk7XG4iLCIvKiFcbkNvcHlyaWdodCAoQykgMjAxNS0yMDE3IEFuZHJlYSBHaWFtbWFyY2hpIC0gQFdlYlJlZmxlY3Rpb25cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXMocXVlcnkpIHtcbiAgdmFyXG4gICAgaW5kZXgsIGtleSwgdmFsdWUsXG4gICAgcGFpcnMsIGksIGxlbmd0aCxcbiAgICBkaWN0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICA7XG4gIHRoaXNbc2VjcmV0XSA9IGRpY3Q7XG4gIGlmICghcXVlcnkpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocXVlcnkuY2hhckF0KDApID09PSAnPycpIHtcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSk7XG4gICAgfVxuICAgIGZvciAoXG4gICAgICBwYWlycyA9IHF1ZXJ5LnNwbGl0KCcmJyksXG4gICAgICBpID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrXG4gICAgKSB7XG4gICAgICB2YWx1ZSA9IHBhaXJzW2ldO1xuICAgICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCc9Jyk7XG4gICAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgICBhcHBlbmRUbyhcbiAgICAgICAgICBkaWN0LFxuICAgICAgICAgIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLFxuICAgICAgICAgIGRlY29kZSh2YWx1ZS5zbGljZShpbmRleCArIDEpKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGgpe1xuICAgICAgICBhcHBlbmRUbyhcbiAgICAgICAgICBkaWN0LFxuICAgICAgICAgIGRlY29kZSh2YWx1ZSksXG4gICAgICAgICAgJydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzQXJyYXkocXVlcnkpKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKytcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IHF1ZXJ5W2ldO1xuICAgICAgICBhcHBlbmRUbyhkaWN0LCB2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiBxdWVyeSkge1xuICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBxdWVyeVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyXG4gIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICBVUkxTZWFyY2hQYXJhbXNQcm90byA9IFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUsXG4gIGZpbmQgPSAvWyEnXFwoXFwpfl18JTIwfCUwMC9nLFxuICBwbHVzID0gL1xcKy9nLFxuICByZXBsYWNlID0ge1xuICAgICchJzogJyUyMScsXG4gICAgXCInXCI6ICclMjcnLFxuICAgICcoJzogJyUyOCcsXG4gICAgJyknOiAnJTI5JyxcbiAgICAnfic6ICclN0UnLFxuICAgICclMjAnOiAnKycsXG4gICAgJyUwMCc6ICdcXHgwMCdcbiAgfSxcbiAgcmVwbGFjZXIgPSBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gIH0sXG4gIHNlY3JldCA9ICdfX1VSTFNlYXJjaFBhcmFtc19fOicgKyBNYXRoLnJhbmRvbSgpXG47XG5cbmZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lIGluIGRpY3QpIHtcbiAgICBkaWN0W25hbWVdLnB1c2goJycgKyB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGljdFtuYW1lXSA9IGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbJycgKyB2YWx1ZV07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKHBsdXMsICcgJykpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKGZpbmQsIHJlcGxhY2VyKTtcbn1cblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIGFwcGVuZFRvKHRoaXNbc2VjcmV0XSwgbmFtZSwgdmFsdWUpO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uZGVsZXRlID0gZnVuY3Rpb24gZGVsKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXNbc2VjcmV0XVtuYW1lXTtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gIHZhciBkaWN0ID0gdGhpc1tzZWNyZXRdO1xuICByZXR1cm4gbmFtZSBpbiBkaWN0ID8gZGljdFtuYW1lXVswXSA6IG51bGw7XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwobmFtZSkge1xuICB2YXIgZGljdCA9IHRoaXNbc2VjcmV0XTtcbiAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV0uc2xpY2UoMCkgOiBbXTtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmhhcyA9IGZ1bmN0aW9uIGhhcyhuYW1lKSB7XG4gIHJldHVybiBuYW1lIGluIHRoaXNbc2VjcmV0XTtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldChuYW1lLCB2YWx1ZSkge1xuICB0aGlzW3NlY3JldF1bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICB2YXIgZGljdCA9IHRoaXNbc2VjcmV0XTtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGljdCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgZGljdFtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICB9LCB0aGlzKTtcbiAgfSwgdGhpcyk7XG59O1xuXG4vKlxuVVJMU2VhcmNoUGFyYW1zUHJvdG8udG9Cb2R5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgQmxvYihcbiAgICBbdGhpcy50b1N0cmluZygpXSxcbiAgICB7dHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9XG4gICk7XG59O1xuKi9cblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICByZXR1cm4ge307XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICB2YXIgZGljdCA9IHRoaXNbc2VjcmV0XSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgIG5hbWUgPSBlbmNvZGUoa2V5KTtcbiAgICBmb3IgKFxuICAgICAgaSA9IDAsXG4gICAgICB2YWx1ZSA9IGRpY3Rba2V5XTtcbiAgICAgIGkgPCB2YWx1ZS5sZW5ndGg7IGkrK1xuICAgICkge1xuICAgICAgcXVlcnkucHVzaChuYW1lICsgJz0nICsgZW5jb2RlKHZhbHVlW2ldKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG59O1xuXG5VUkxTZWFyY2hQYXJhbXMgPSAobW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zIHx8IFVSTFNlYXJjaFBhcmFtcyk7XG5cbihmdW5jdGlvbiAoVVJMU2VhcmNoUGFyYW1zUHJvdG8pIHtcblxuICB2YXIgaXRlcmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISFTeW1ib2wuaXRlcmF0b3I7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSgpKTtcblxuICAvLyBtb3N0bHkgcmVsYXRlZCB0byBpc3N1ZSAjMjRcbiAgaWYgKCEoJ2ZvckVhY2gnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICB2YXIgbmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdGhpcy50b1N0cmluZygpXG4gICAgICAgICAgLnJlcGxhY2UoLz1bXFxzXFxTXSo/KD86JnwkKS9nLCAnPScpXG4gICAgICAgICAgLnNwbGl0KCc9JylcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKCFuYW1lLmxlbmd0aCB8fCBuYW1lIGluIG5hbWVzKSByZXR1cm47XG4gICAgICAgICAgICAobmFtZXNbbmFtZV0gPSB0aGlzLmdldEFsbChuYW1lKSkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG4gIH1cblxuICBpZiAoISgna2V5cycgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8ua2V5cyA9IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpOyB9KTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghKCd2YWx1ZXMnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLnZhbHVlcyA9IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpOyB9KTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghKCdlbnRyaWVzJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5lbnRyaWVzID0gZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7IH0pO1xuICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGl0ZXJhYmxlICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvW1N5bWJvbC5pdGVyYXRvcl0gPSBVUkxTZWFyY2hQYXJhbXNQcm90by5lbnRyaWVzO1xuICB9XG5cbiAgaWYgKCEoJ3NvcnQnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLnNvcnQgPSBmdW5jdGlvbiBzb3J0KCkge1xuICAgICAgdmFyXG4gICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMoKSxcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzLm5leHQoKSxcbiAgICAgICAgZG9uZSA9IGVudHJ5LmRvbmUsXG4gICAgICAgIGtleXMgPSBbXSxcbiAgICAgICAgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgaSwga2V5LCB2YWx1ZVxuICAgICAgO1xuICAgICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHZhbHVlID0gZW50cnkudmFsdWU7XG4gICAgICAgIGtleSA9IHZhbHVlWzBdO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgaWYgKCEoa2V5IGluIHZhbHVlcykpIHtcbiAgICAgICAgICB2YWx1ZXNba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1trZXldLnB1c2godmFsdWVbMV0pO1xuICAgICAgICBlbnRyeSA9IGVudHJpZXMubmV4dCgpO1xuICAgICAgICBkb25lID0gZW50cnkuZG9uZTtcbiAgICAgIH1cbiAgICAgIC8vIG5vdCB0aGUgY2hhbXBpb24gaW4gZWZmaWNpZW5jeVxuICAgICAgLy8gYnV0IHRoZXNlIHR3byBiaXRzIGp1c3QgZG8gdGhlIGpvYlxuICAgICAga2V5cy5zb3J0KCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmRlbGV0ZShrZXlzW2ldKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWVzW2tleV0uc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG59KFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=