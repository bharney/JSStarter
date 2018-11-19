exports.ids = ["Account"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/Account.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/src/components/Account/Account.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_TabPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/TabPanel */ "./ClientApp/src/controls/TabPanel.tsx");
/* harmony import */ var _Common_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Loading */ "./ClientApp/src/components/Common/Loading.tsx");
/* harmony import */ var _Profile_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Profile/Profile */ "./ClientApp/src/components/Profile/Profile.tsx");
/* harmony import */ var _AccountManagement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccountManagement */ "./ClientApp/src/components/Account/AccountManagement.tsx");









var Account =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Account, _React$Component);

  function Account() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      currentTab: _this.props.location.pathname.substr(1)
    };

    _this.onUpdate = function (activeIndex) {
      _this.setState({
        currentTab: activeIndex
      });

      _this.props.history.push(activeIndex);
    };

    return _this;
  }

  var _proto = Account.prototype;

  _proto.render = function render() {
    var isLoading = this.props.isLoading;
    return isLoading ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Common_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "col-12"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_controls_TabPanel__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
      activeIndex: this.state.currentTab,
      onUpdate: this.onUpdate
    }, this.props), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_controls_TabPanel__WEBPACK_IMPORTED_MODULE_4__["default"].TabBar, null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_controls_TabPanel__WEBPACK_IMPORTED_MODULE_4__["default"].Tab, {
      tabIndex: "Account"
    }, "Account"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_controls_TabPanel__WEBPACK_IMPORTED_MODULE_4__["default"].Tab, {
      tabIndex: "Profile"
    }, "Profile")), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_controls_TabPanel__WEBPACK_IMPORTED_MODULE_4__["default"].Content, null, this.state.currentTab.toLowerCase() === "account" ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_AccountManagement__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, this.props)) : null, this.state.currentTab.toLowerCase() === "profile" ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Profile_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.props)) : null)))));
  };

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, null)(Account));

/***/ }),

/***/ "./ClientApp/src/components/Account/AccountManagement.tsx":
/*!****************************************************************!*\
  !*** ./ClientApp/src/components/Account/AccountManagement.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Loading */ "./ClientApp/src/components/Common/Loading.tsx");


 // At runtime, Redux will merge together...

var AccountManagement =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AccountManagement, _React$Component);

  function AccountManagement() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AccountManagement.prototype;

  _proto.render = function render() {
    var _this = this;

    var isLoading = this.props.isLoading;
    var _this$props = this.props,
        username = _this$props.username,
        accountActions = _this$props.accountActions;
    return isLoading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Common_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Account.")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-8 col-md-8 col-lg-5 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 offset-sm-3 justify-content-center pl-2"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, "Email:"), " ", username))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-10 col-md-8 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-lg btn-primary btn-block",
      onClick: function onClick() {
        return _this.props.history.push("/Account/ChangeEmail");
      }
    }, "Change email")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-10 col-md-8 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-lg btn-primary btn-block",
      onClick: function onClick() {
        return _this.props.history.push("/ChangePassword");
      }
    }, "Change password")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-10 col-md-8 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-lg btn-primary btn-block",
      onClick: function onClick() {
        return accountActions.downloadAccountData();
      }
    }, "Export Account Data")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-10 col-md-8 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-lg btn-primary btn-block",
      onClick: function onClick() {
        return _this.props.history.push("/Account/Delete");
      }
    }, "Delete account")))))));
  };

  return AccountManagement;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AccountManagement);

/***/ }),

/***/ "./ClientApp/src/components/Common/Loading.tsx":
/*!*****************************************************!*\
  !*** ./ClientApp/src/components/Common/Loading.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ "./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);





var Loading =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Loading, _React$Component);

  function Loading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Loading.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "container pt-4",
      style: {
        height: "70vh"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: "svg-inline--fa fa-w-16 fa-lg",
      size: "1x",
      style: {
        position: "absolute",
        top: "7vh",
        left: "50%",
        fontSize: "45px"
      },
      icon: _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2__["faSpinner"],
      spin: true
    }));
  };

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./ClientApp/src/components/Profile/Profile.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/src/components/Profile/Profile.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");
/* harmony import */ var _store_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/Profile */ "./ClientApp/src/store/Profile.ts");
/* harmony import */ var _Common_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/Loading */ "./ClientApp/src/components/Common/Loading.tsx");






 // At runtime, Redux will merge together...

var Profile =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Profile, _React$Component);

  function Profile() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Profile.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.profileActions.getProfile();
  };

  _proto.render = function render() {
    var _this = this;

    var isLoading = this.props.isLoading;
    var profile = this.props.profile;
    return isLoading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Common_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Profile.")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-8 col-md-8 col-lg-5 text-center form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      className: "img-fluid",
      src: profile.imageUrl,
      alt: "Profile Image"
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-8 col-md-8 col-lg-5 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
      htmlFor: "email",
      className: "form-control-label"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, profile.email)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
      htmlFor: "firstName",
      className: "form-control-label"
    }, "First Name"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, profile.firstName)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
      htmlFor: "lastName",
      className: "form-control-label"
    }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, profile.lastName)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-6 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-lg btn-primary btn-block",
      onClick: function onClick() {
        return _this.props.history.push("/Profile/Edit");
      }
    }, "Edit Profile")))))));
  };

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state.profile;
}, function (dispatch) {
  return {
    profileActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_store_Profile__WEBPACK_IMPORTED_MODULE_5__["actionCreators"], dispatch),
    alertActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_store_Alert__WEBPACK_IMPORTED_MODULE_4__["actionCreators"], dispatch)
  };
})(Profile));

/***/ }),

/***/ "./ClientApp/src/controls/TabPanel.tsx":
/*!*********************************************!*\
  !*** ./ClientApp/src/controls/TabPanel.tsx ***!
  \*********************************************/
/*! exports provided: TabPanelContext, TabPanel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanelContext", function() { return TabPanelContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};


var TabPanelContext = react__WEBPACK_IMPORTED_MODULE_2__["createContext"]({
  activeIndex: "Account",
  onUpdate: function onUpdate(activeIndex) {}
});
var TabPanel =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(TabPanel, _React$Component);

  function TabPanel() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.tabChange = function (activeIndex) {
      _this.setState(function (_ref) {
        var activeIndex = _ref.activeIndex;
        return {
          activeIndex: activeIndex
        };
      }, function () {
        _this.props.onUpdate(activeIndex);

        window.scrollTo(0, 0);
      });
    };

    _this.state = {
      activeIndex: _this.props.activeIndex || "Account",
      onTabChange: _this.tabChange
    };
    return _this;
  }

  var _proto = TabPanel.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TabPanelContext.Provider, {
      value: {
        onUpdate: this.tabChange,
        activeIndex: this.state.activeIndex
      }
    }, this.props.children);
  };

  return TabPanel;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

TabPanel.Content = function (_ref2) {
  var children = _ref2.children;
  return children;
};

TabPanel.TabBar = function (_a) {
  var children = _a.children,
      props = __rest(_a, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("ul", Object.assign({
    className: "nav nav-tabs"
  }, props), children);
};

TabPanel.Tab = function (_ref3) {
  var children = _ref3.children,
      tabIndex = _ref3.tabIndex;
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TabPanelContext.Consumer, null, function (_ref4) {
    var onUpdate = _ref4.onUpdate,
        activeIndex = _ref4.activeIndex;
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", {
      onClick: function onClick() {
        return onUpdate(tabIndex);
      },
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
      href: "javascript:void(0)",
      role: "button",
      className: "nav-link " + (tabIndex.toLowerCase() === activeIndex.toLowerCase() ? "active" : "")
    }, children));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TabPanel);

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50TWFuYWdlbWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbnRyb2xzL1RhYlBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTs7SUFjQSxPOzs7OztBQUFBO0FBQUE7OztBQUNFLGtCQUFRO0FBQUUsZ0JBQVUsRUFBRSxNQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFFBQXBCLENBQTZCLE1BQTdCLENBQW9DLENBQXBDO0FBQWQsS0FBUjs7QUFFQSxxQkFBVyxVQUFDLFdBQUQsRUFBd0I7QUFDakMsWUFBSyxRQUFMLENBQWM7QUFBRSxrQkFBVSxFQUFFO0FBQWQsT0FBZDs7QUFDQSxZQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQW5CLENBQXdCLFdBQXhCO0FBQ0QsS0FIRDs7QUFIRjtBQXlDQzs7OztTQWpDQyxNLHFCQUFNO0FBQUEsUUFDSSxTQURKLEdBQ2tCLEtBQUssS0FEdkIsQ0FDSSxTQURKO0FBRUosV0FBTyxTQUFTLEdBQ2Qsb0RBQUMsdURBQUQsRUFBUSxJQUFSLENBRGMsR0FHZDtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixP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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0MiLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgVGFiUGFuZWwgZnJvbSBcIi4uLy4uL2NvbnRyb2xzL1RhYlBhbmVsXCI7XHJcbmltcG9ydCAqIGFzIEFjY291bnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWNjb3VudFwiO1xyXG5pbXBvcnQgKiBhcyBBbGVydFN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9BbGVydFwiO1xyXG5pbXBvcnQgKiBhcyBQcm9maWxlU3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL1Byb2ZpbGVcIjtcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9TZXNzaW9uXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9Db21tb24vTG9hZGluZ1wiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vUHJvZmlsZS9Qcm9maWxlXCI7XHJcbmltcG9ydCBBY2NvdW50TWFuYWdlbWVudCBmcm9tIFwiLi9BY2NvdW50TWFuYWdlbWVudFwiO1xyXG50eXBlIEFjY291bnRNYW5hZ2VtZW50UHJvcHMgPSBBY2NvdW50U3RhdGUuQWNjb3VudFN0YXRlXHJcbiAgJiB7XHJcbiAgICBhY2NvdW50QWN0aW9uczogdHlwZW9mIEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG59ICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcblxyXG50eXBlIEFjY291bnRQcm9wcyA9IFByb2ZpbGVTdGF0ZS5Qcm9maWxlU3RhdGUgJlxyXG4gIFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RhdGUgJiB7XHJcbiAgICBwcm9maWxlQWN0aW9uczogdHlwZW9mIFByb2ZpbGVTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIGFsZXJ0QWN0aW9uczogdHlwZW9mIEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbiAgICBzZXNzaW9uQWN0aW9uczogdHlwZW9mIFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIGFjY291bnRBY3Rpb25zOiB0eXBlb2YgQWNjb3VudFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gIH0gJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QWNjb3VudFByb3BzLCBhbnk+IHtcclxuICBzdGF0ZSA9IHsgY3VycmVudFRhYjogdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoMSkgfTtcclxuXHJcbiAgb25VcGRhdGUgPSAoYWN0aXZlSW5kZXg6IHN0cmluZykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWI6IGFjdGl2ZUluZGV4IH0pO1xyXG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYWN0aXZlSW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIGlzTG9hZGluZyA/IChcclxuICAgICAgPExvYWRpbmcgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPFRhYlBhbmVsXHJcbiAgICAgICAgICAgICAgYWN0aXZlSW5kZXg9e3RoaXMuc3RhdGUuY3VycmVudFRhYn1cclxuICAgICAgICAgICAgICBvblVwZGF0ZT17dGhpcy5vblVwZGF0ZX1cclxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbC5UYWJCYXI+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwuVGFiIHRhYkluZGV4PXtgQWNjb3VudGB9PkFjY291bnQ8L1RhYlBhbmVsLlRhYj5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbC5UYWIgdGFiSW5kZXg9e2BQcm9maWxlYH0+UHJvZmlsZTwvVGFiUGFuZWwuVGFiPlxyXG4gICAgICAgICAgICAgIDwvVGFiUGFuZWwuVGFiQmFyPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFRhYi50b0xvd2VyQ2FzZSgpID09PSBcImFjY291bnRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPEFjY291bnRNYW5hZ2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMgYXMgQWNjb3VudE1hbmFnZW1lbnRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFRhYi50b0xvd2VyQ2FzZSgpID09PSBcInByb2ZpbGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBudWxsKShBY2NvdW50KSBhcyB0eXBlb2YgQWNjb3VudDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBBY2NvdW50U3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL0FjY291bnRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL0NvbW1vbi9Mb2FkaW5nXCI7XHJcblxyXG50eXBlIEFjY291bnRNYW5hZ2VtZW50UHJvcHMgPSBBY2NvdW50U3RhdGUuQWNjb3VudFN0YXRlICYge1xyXG4gIGFjY291bnRBY3Rpb25zOiB0eXBlb2YgQWNjb3VudFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG59ICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcbi8vIEF0IHJ1bnRpbWUsIFJlZHV4IHdpbGwgbWVyZ2UgdG9nZXRoZXIuLi5cclxuXHJcbmNsYXNzIEFjY291bnRNYW5hZ2VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFjY291bnRNYW5hZ2VtZW50UHJvcHMsIHt9PiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBhY2NvdW50QWN0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiBpc0xvYWRpbmcgPyAoXHJcbiAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5BY2NvdW50LjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1tZC04IGNvbC1sZy01IGZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBvZmZzZXQtc20tMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBsLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiB7dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTAgY29sLW1kLTggZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9BY2NvdW50L0NoYW5nZUVtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhbmdlIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTAgY29sLW1kLTggZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvQ2hhbmdlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMCBjb2wtbWQtOCBmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY2NvdW50QWN0aW9ucy5kb3dubG9hZEFjY291bnREYXRhKCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFeHBvcnQgQWNjb3VudCBEYXRhXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTAgY29sLW1kLTggZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvQWNjb3VudC9EZWxldGVcIil9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50TWFuYWdlbWVudDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNFwiIHN0eWxlPXt7IGhlaWdodDogXCI3MHZoXCIgfX0+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXctMTYgZmEtbGdcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjF4XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiN3ZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI0NXB4XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpY29uPXtmYVNwaW5uZXJ9XHJcbiAgICAgICAgICAgICAgICBzcGluXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgQWxlcnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWxlcnRcIjtcclxuaW1wb3J0ICogYXMgUHJvZmlsZVN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9Qcm9maWxlXCI7XHJcbmltcG9ydCAqIGFzIFNlc3Npb25TdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvU2Vzc2lvblwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vQ29tbW9uL0xvYWRpbmdcIjtcclxuXHJcbnR5cGUgUHJvZmlsZVByb3BzID0gUHJvZmlsZVN0YXRlLlByb2ZpbGVTdGF0ZSAmXHJcbiAgU2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZSAmIHtcclxuICAgIHByb2ZpbGVBY3Rpb25zOiB0eXBlb2YgUHJvZmlsZVN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gICAgYWxlcnRBY3Rpb25zOiB0eXBlb2YgQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIHNlc3Npb25BY3Rpb25zOiB0eXBlb2YgU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gIH0gJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxyXG5cclxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9maWxlUHJvcHMsIGFueT4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5wcm9maWxlQWN0aW9ucy5nZXRQcm9maWxlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHByb2ZpbGUgPSB0aGlzLnByb3BzLnByb2ZpbGUgYXMgUHJvZmlsZVZpZXdNb2RlbDtcclxuICAgIHJldHVybiBpc0xvYWRpbmcgPyAoXHJcbiAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5Qcm9maWxlLjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1tZC04IGNvbC1sZy01IHRleHQtY2VudGVyIGZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGUuaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBJbWFnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1tZC04IGNvbC1sZy01IGZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2ZpbGUuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIEZpcnN0IE5hbWVcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxwPntwcm9maWxlLmZpcnN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBMYXN0IE5hbWVcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxwPntwcm9maWxlLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvUHJvZmlsZS9FZGl0XCIpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdCBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5wcm9maWxlLFxyXG4gIChcclxuICAgIGRpc3BhdGNoOlxyXG4gICAgICB8IERpc3BhdGNoPFByb2ZpbGVTdGF0ZS5Qcm9maWxlU3RhdGU+XHJcbiAgICAgIHwgRGlzcGF0Y2g8U2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZT5cclxuICAgICAgfCBEaXNwYXRjaDxBbGVydFN0YXRlLkFsZXJ0U3RhdGU+XHJcbiAgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKFByb2ZpbGVTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICBhbGVydEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxuICAgIH07XHJcbiAgfVxyXG4pKFByb2ZpbGUpIGFzIHR5cGVvZiBQcm9maWxlO1xyXG4iLCJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmludGVyZmFjZSBBY3RpdmVJbmRleCB7XHJcbiAgYWN0aXZlSW5kZXg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYlBhbmVsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIGFjdGl2ZUluZGV4OiBcIkFjY291bnRcIixcclxuICBvblVwZGF0ZTogKGFjdGl2ZUluZGV4OiBzdHJpbmcpID0+IHt9XHJcbn0pO1xyXG5cclxudHlwZSBUYWJQYW5lbFByb3BzID0ge1xyXG4gIGFjdGl2ZUluZGV4OiBzdHJpbmc7XHJcbiAgb25VcGRhdGU6IChhY3RpdmVJbmRleDogc3RyaW5nKSA9PiB2b2lkO1xyXG59ICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFiUGFuZWxQcm9wcywge30+IHtcclxuICBzdGF0aWMgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IGNoaWxkcmVuO1xyXG5cclxuICBzdGF0aWMgVGFiQmFyID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIiB7Li4ucHJvcHN9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcblxyXG4gIHN0YXRpYyBUYWIgPSAoeyBjaGlsZHJlbiwgdGFiSW5kZXggfSkgPT4gKFxyXG4gICAgPFRhYlBhbmVsQ29udGV4dC5Db25zdW1lcj5cclxuICAgICAgeyh7IG9uVXBkYXRlLCBhY3RpdmVJbmRleCB9KSA9PiAoXHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHRhYkluZGV4KX0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxyXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtcclxuICAgICAgICAgICAgICB0YWJJbmRleC50b0xvd2VyQ2FzZSgpID09PSBhY3RpdmVJbmRleC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICl9XHJcbiAgICA8L1RhYlBhbmVsQ29udGV4dC5Db25zdW1lcj5cclxuICApO1xyXG5cclxuICB0YWJDaGFuZ2UgPSAoYWN0aXZlSW5kZXg6IHN0cmluZykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKHsgYWN0aXZlSW5kZXggfTogQWN0aXZlSW5kZXgpID0+ICh7IGFjdGl2ZUluZGV4IH0pLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZShhY3RpdmVJbmRleCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgYWN0aXZlSW5kZXg6IHRoaXMucHJvcHMuYWN0aXZlSW5kZXggfHwgXCJBY2NvdW50XCIsXHJcbiAgICBvblRhYkNoYW5nZTogdGhpcy50YWJDaGFuZ2VcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGFiUGFuZWxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgIG9uVXBkYXRlOiB0aGlzLnRhYkNoYW5nZSxcclxuICAgICAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L1RhYlBhbmVsQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhYlBhbmVsO1xyXG4iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NwaW5uZXInO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxMTAnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zMDQgNDhjMCAyNi41MS0yMS40OSA0OC00OCA0OHMtNDgtMjEuNDktNDgtNDggMjEuNDktNDggNDgtNDggNDggMjEuNDkgNDggNDh6bS00OCAzNjhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6bTIwOC0yMDhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6TTk2IDI1NmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4UzAgMjI5LjQ5IDAgMjU2czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4em0xMi45MjIgOTkuMDc4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5MS00OC00OC00OHptMjk0LjE1NiAwYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5LTQ4LTQ4LTQ4ek0xMDguOTIyIDYwLjkyMmMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OTEtNDgtNDgtNDh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0geyAgICAgICAgICAgXG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG4gIFxuZXhwb3J0cy5mYVNwaW5uZXIgPSBleHBvcnRzLmRlZmluaXRpb247ICAgICAgICAgICBcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lOyBcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=