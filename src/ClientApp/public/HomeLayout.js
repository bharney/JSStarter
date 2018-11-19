exports.ids = ["HomeLayout"];
exports.modules = {

/***/ "./ClientApp/src/components/Layout/AlertComponent.tsx":
/*!************************************************************!*\
  !*** ./ClientApp/src/components/Layout/AlertComponent.tsx ***!
  \************************************************************/
/*! exports provided: AlertComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");




var AlertComponent =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AlertComponent, _React$Component);

  function AlertComponent() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.renderAlert = function (item) {
      var styles = {
        display: "block"
      };

      var closeAction = function closeAction(e) {
        e.preventDefault();

        _this.props.closeAlert(item.id);
      };

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        key: item.id,
        className: 'toast toast-' + item.alertType + ' alert alert-dismissable ' + ("fade fade-" + item.state),
        style: styles,
        role: "alert"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        href: "#",
        className: "close",
        "aria-label": "close",
        onClick: closeAction
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "toast-message"
      }, item.message));
    };

    return _this;
  }

  var _proto = AlertComponent.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      id: "toast-container",
      className: "alerts toast-top-right",
      role: "alert"
    }, this.props.items.map(this.renderAlert));
  };

  return AlertComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state.alert;
}, {
  closeAlert: _store_Alert__WEBPACK_IMPORTED_MODULE_3__["actionCreators"].closeAlert
})(AlertComponent));

/***/ }),

/***/ "./ClientApp/src/components/Layout/HomeLayout.tsx":
/*!********************************************************!*\
  !*** ./ClientApp/src/components/Layout/HomeLayout.tsx ***!
  \********************************************************/
/*! exports provided: HomeLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayout", function() { return HomeLayout; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ "./ClientApp/src/App.tsx");
/* harmony import */ var _Slider_AdminSliderMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Slider/AdminSliderMenu */ "./ClientApp/src/components/Slider/AdminSliderMenu.tsx");
/* harmony import */ var _Slider_MemberSliderMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Slider/MemberSliderMenu */ "./ClientApp/src/components/Slider/MemberSliderMenu.tsx");
/* harmony import */ var _Slider_SliderMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Slider/SliderMenu */ "./ClientApp/src/components/Slider/SliderMenu.tsx");
/* harmony import */ var _AlertComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AlertComponent */ "./ClientApp/src/components/Layout/AlertComponent.tsx");








var HomeLayout =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(HomeLayout, _React$Component);

  function HomeLayout() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HomeLayout.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_App__WEBPACK_IMPORTED_MODULE_3__["NavContext"].Consumer, null, function (_ref) {
      var on = _ref.on,
          handleOverlayToggle = _ref.handleOverlayToggle;
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("main", {
        onClick: function onClick(e) {
          return handleOverlayToggle(e);
        },
        className: "container-fluid pl-0 pr-0 " + (on ? " overlay" : "")
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_AlertComponent__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, _this.props)), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        id: "slider",
        className: "row row-offcanvas row-offcanvas-right " + (on ? "active" : "")
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "col-12 col-md-12 col-lg-12"
      }, _this.props.children), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        id: "sidebar",
        className: "col-8 d-md-none d-lg-none d-xl-none sidebar-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "list-group"
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Slider_SliderMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Slider_MemberSliderMenu__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, _this.props.session)), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Slider_AdminSliderMenu__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, _this.props.session)))))));
    });
  };

  return HomeLayout;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (HomeLayout);

/***/ }),

/***/ "./ClientApp/src/components/Slider/AdminSliderMenu.tsx":
/*!*************************************************************!*\
  !*** ./ClientApp/src/components/Slider/AdminSliderMenu.tsx ***!
  \*************************************************************/
/*! exports provided: AdminSliderMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSliderMenu", function() { return AdminSliderMenu; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App */ "./ClientApp/src/App.tsx");
/* harmony import */ var _controls_ExpandableListGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../controls/ExpandableListGroup */ "./ClientApp/src/controls/ExpandableListGroup.tsx");










var AdminSliderMenu =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(AdminSliderMenu, _React$Component);

  function AdminSliderMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AdminSliderMenu.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        username = _this$props.username,
        token = _this$props.token;
    if (username == "") return null;
    if (token == undefined) return null;
    if (Object.keys(token).length === 0) return null;
    var claims = token.claims;

    if (claims && claims.constructor === Array) {
      if (claims.some(function (claim) {
        return claim == "Admin";
      })) {
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_App__WEBPACK_IMPORTED_MODULE_8__["NavContext"].Consumer, Object.assign({}, this.props), function (_ref) {
          var onUpdate = _ref.onUpdate;
          return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_controls_ExpandableListGroup__WEBPACK_IMPORTED_MODULE_9__["ExpandableListGroup"], {
            displayTitle: "Admin",
            id: 1,
            key: "adminSliderMenu"
          }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
            key: "adminUsers",
            to: '/admin/users',
            href: "",
            className: "list-group-item root",
            onClick: onUpdate,
            activeClassName: 'active'
          }, "Users"));
        });
      }
    }

    return null;
  };

  return AdminSliderMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state.session;
}, null)(AdminSliderMenu));

/***/ }),

/***/ "./ClientApp/src/components/Slider/MemberSliderMenu.tsx":
/*!**************************************************************!*\
  !*** ./ClientApp/src/components/Slider/MemberSliderMenu.tsx ***!
  \**************************************************************/
/*! exports provided: MemberSliderMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberSliderMenu", function() { return MemberSliderMenu; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App */ "./ClientApp/src/App.tsx");









var MemberSliderMenu =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(MemberSliderMenu, _React$Component);

  function MemberSliderMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MemberSliderMenu.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        token = _this$props.token,
        username = _this$props.username;
    if (username == "") return null;
    if (token == undefined) return null;
    if (Object.keys(token).length === 0) return null;
    if (username == undefined) return null;

    if (username.indexOf("@guest.starterpack.com") === -1) {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_App__WEBPACK_IMPORTED_MODULE_8__["NavContext"].Consumer, Object.assign({}, this.props), function (_ref) {
        var onUpdate = _ref.onUpdate;
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
          key: "sliderMyProfile",
          className: "list-group-item",
          to: '/Account',
          onClick: onUpdate,
          activeClassName: 'active'
        }, "Account"));
      });
    }

    return null;
  };

  return MemberSliderMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state.session;
}, null)(MemberSliderMenu));

/***/ }),

/***/ "./ClientApp/src/components/Slider/SliderMenu.tsx":
/*!********************************************************!*\
  !*** ./ClientApp/src/components/Slider/SliderMenu.tsx ***!
  \********************************************************/
/*! exports provided: SliderMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderMenu", function() { return SliderMenu; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ "./ClientApp/src/App.tsx");




var SliderMenu =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SliderMenu, _React$PureComponent);

  function SliderMenu() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = SliderMenu.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_App__WEBPACK_IMPORTED_MODULE_3__["NavContext"].Consumer, null, function (_ref) {
      var onUpdate = _ref.onUpdate;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        className: "list-group-item",
        to: '/counter',
        onClick: onUpdate,
        activeClassName: 'active'
      }, "Counter"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        className: "list-group-item",
        to: '/fetchdata',
        onClick: onUpdate,
        activeClassName: 'active'
      }, "Fetch Data"));
    });
  };

  return SliderMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);
/* harmony default export */ __webpack_exports__["default"] = (SliderMenu);

/***/ }),

/***/ "./ClientApp/src/controls/ExpandableListGroup.tsx":
/*!********************************************************!*\
  !*** ./ClientApp/src/controls/ExpandableListGroup.tsx ***!
  \********************************************************/
/*! exports provided: ExpandableListGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableListGroup", function() { return ExpandableListGroup; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCaretDown */ "./node_modules/@fortawesome/free-solid-svg-icons/faCaretDown.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCaretRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCaretRight */ "./node_modules/@fortawesome/free-solid-svg-icons/faCaretRight.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCaretRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCaretRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





var ExpandableListGroup =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ExpandableListGroup, _React$Component);

  function ExpandableListGroup() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      active: false
    };

    _this.handleClick = function () {
      _this.setState({
        active: !_this.state.active
      });
    };

    return _this;
  }

  var _proto = ExpandableListGroup.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      key: "sliderAccordion " + this.props.id,
      className: "panel-group",
      id: "sliderAccordion"
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
      "data-toggle": "collapse",
      className: "list-group-item list-group-item",
      "data-parent": "#sliderAccordion",
      onClick: this.handleClick,
      role: "tab",
      id: "heading" + this.props.id,
      href: "#collapse" + this.props.id,
      "aria-expanded": "false",
      "aria-controls": "collapse" + this.props.id
    }, this.props.displayTitle, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: "svg-inline--fa fa-w-16 fa-lg",
      size: "1x",
      style: {
        verticalAlign: "-0.2em",
        marginLeft: "8px"
      },
      icon: this.state.active ? _fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"] : _fortawesome_free_solid_svg_icons_faCaretRight__WEBPACK_IMPORTED_MODULE_2__["faCaretRight"]
    })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      id: "collapse" + this.props.id,
      className: "panel-collapse collapse in",
      role: "tabpanel",
      "aria-labelledby": "heading" + this.props.id
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("ul", {
      className: "list-group"
    }, this.props.children)));
  };

  return ExpandableListGroup;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ExpandableListGroup);

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCaretDown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCaretDown.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'caret-down';
var width = 320;
var height = 512;
var ligatures = [];
var unicode = 'f0d7';
var svgPathData = 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z';

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
  
exports.faCaretDown = exports.definition;           
exports.prefix = prefix;
exports.iconName = iconName; 
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCaretRight.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCaretRight.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'caret-right';
var width = 192;
var height = 512;
var ligatures = [];
var unicode = 'f0da';
var svgPathData = 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z';

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
  
exports.faCaretRight = exports.definition;           
exports.prefix = prefix;
exports.iconName = iconName; 
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0FsZXJ0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0hvbWVMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9TbGlkZXIvQWRtaW5TbGlkZXJNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvU2xpZGVyL01lbWJlclNsaWRlck1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9jb250cm9scy9FeHBhbmRhYmxlTGlzdEdyb3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2FyZXREb3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYXJldFJpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQVFBLElBQU0sY0FBTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7O0FBU1ksd0JBQWMsVUFBQyxJQUFELEVBQWdCO0FBQ2xDLFVBQU0sTUFBTSxHQUFHO0FBQ1gsZUFBTyxFQUFFO0FBREUsT0FBZjs7QUFHQSxVQUFNLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBQyxDQUFELEVBQVc7QUFBRyxTQUFDLENBQUMsY0FBRjs7QUFBb0IsY0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixJQUFJLENBQUMsRUFBM0I7QUFBaUMsT0FBdkY7O0FBQ0EsYUFDSTtBQUFLLFdBQUcsRUFBRSxJQUFJ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QTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQztBQUNBO0FBQ0EsNEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDIiwiZmlsZSI6IkhvbWVMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIEFsZXJ0U3RhdGUgZnJvbSAnLi4vLi4vc3RvcmUvQWxlcnQnO1xyXG5pbXBvcnQgeyBDbG9zZUFsZXJ0QWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvQWxlcnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb3BzIHtcclxuICAgIGl0ZW1zOiBBbGVydFtdO1xyXG4gICAgY2xvc2VBbGVydChpZDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248Q2xvc2VBbGVydEFjdGlvbj47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBbGVydFByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidG9hc3QtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYWxlcnRzIHRvYXN0LXRvcC1yaWdodFwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMubWFwKHRoaXMucmVuZGVyQWxlcnQpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQWxlcnQgPSAoaXRlbTogQWxlcnQpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbG9zZUFjdGlvbiA9IChlOiBhbnkpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnByb3BzLmNsb3NlQWxlcnQoaXRlbS5pZCk7IH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17J3RvYXN0IHRvYXN0LScgKyBpdGVtLmFsZXJ0VHlwZSArICcgYWxlcnQgYWxlcnQtZGlzbWlzc2FibGUgJyArIGBmYWRlIGZhZGUtJHtpdGVtLnN0YXRlfWB9IHN0eWxlPXtzdHlsZXN9IHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e2Nsb3NlQWN0aW9ufT4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmFsZXJ0LFxyXG4gICAge1xyXG4gICAgICAgIGNsb3NlQWxlcnQ6IEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnMuY2xvc2VBbGVydCxcclxuICAgIH0sXHJcbikoQWxlcnRDb21wb25lbnQpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSAnLi4vLi4vQXBwJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQWNjb3VudFN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL0FjY291bnQnO1xyXG5pbXBvcnQgKiBhcyBBbGVydFN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL0FsZXJ0JztcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL1Nlc3Npb24nO1xyXG5pbXBvcnQgQWRtaW5TbGlkZXJNZW51IGZyb20gJy4uL1NsaWRlci9BZG1pblNsaWRlck1lbnUnO1xyXG5pbXBvcnQgTWVtYmVyU2xpZGVyTWVudSBmcm9tICcuLi9TbGlkZXIvTWVtYmVyU2xpZGVyTWVudSc7XHJcbmltcG9ydCBTbGlkZXJNZW51IGZyb20gJy4uL1NsaWRlci9TbGlkZXJNZW51JztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnRDb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIE5hdlByb3BzIHtcclxuICAgIG9uOiBib29sZWFuO1xyXG4gICAgaGFuZGxlT3ZlcmxheVRvZ2dsZTogKGUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbnR5cGUgTGF5b3V0UHJvcHMgPSBBcHBsaWNhdGlvblN0YXRlXHJcbiAgICAmIHtcclxuICAgICAgICBhY2NvdW50QWN0aW9uczogdHlwZW9mIEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycyxcclxuICAgICAgICBzZXNzaW9uQWN0aW9uczogdHlwZW9mIFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycyxcclxuICAgICAgICBhbGVydEFjdGlvbnM6IHR5cGVvZiBBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gICAgfVxyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExheW91dFByb3BzLCB7fT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxOYXZDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICB7KHsgb24sIGhhbmRsZU92ZXJsYXlUb2dnbGUgfTogTmF2UHJvcHMpID0+IChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8bWFpbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3ZlcmxheVRvZ2dsZShlKX0gY2xhc3NOYW1lPXtgY29udGFpbmVyLWZsdWlkIHBsLTAgcHItMCAke29uID8gXCIgb3ZlcmxheVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPXtgcm93IHJvdy1vZmZjYW52YXMgcm93LW9mZmNhbnZhcy1yaWdodCAke29uID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyXCIgY2xhc3NOYW1lPVwiY29sLTggZC1tZC1ub25lIGQtbGctbm9uZSBkLXhsLW5vbmUgc2lkZWJhci1vZmZjYW52YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlck1lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbWJlclNsaWRlck1lbnUgey4uLnRoaXMucHJvcHMuc2Vzc2lvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkbWluU2xpZGVyTWVudSB7Li4udGhpcy5wcm9wcy5zZXNzaW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9OYXZDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTGF5b3V0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSAnLi4vLi4vQXBwJztcclxuaW1wb3J0IHsgRXhwYW5kYWJsZUxpc3RHcm91cCB9IGZyb20gJy4uLy4uL2NvbnRyb2xzL0V4cGFuZGFibGVMaXN0R3JvdXAnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBTZXNzaW9uU3RhdGUgZnJvbSAnLi4vLi4vc3RvcmUvU2Vzc2lvbic7XHJcbmludGVyZmFjZSBOYXZQcm9wcyB7XHJcbiAgICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxudHlwZSBBZG1pblNsaWRlck1lbnVQcm9wcyA9IFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RhdGU7XHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5TbGlkZXJNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFkbWluU2xpZGVyTWVudVByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCB0b2tlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAodXNlcm5hbWUgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgaWYgKHRva2VuID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRva2VuKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgY29uc3QgeyBjbGFpbXMgfSA9IHRva2VuXHJcblxyXG4gICAgICAgIGlmIChjbGFpbXMgJiYgY2xhaW1zLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAoY2xhaW1zLnNvbWUoKGNsYWltKSA9PiB7IHJldHVybiBjbGFpbSA9PSBcIkFkbWluXCI7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPE5hdkNvbnRleHQuQ29uc3VtZXIgey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsoeyBvblVwZGF0ZSB9OiBOYXZQcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kYWJsZUxpc3RHcm91cCBkaXNwbGF5VGl0bGU9XCJBZG1pblwiIGlkPXsxfSBrZXk9XCJhZG1pblNsaWRlck1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT1cImFkbWluVXNlcnNcIiB0bz17Jy9hZG1pbi91c2Vycyd9IGhyZWY9XCJcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gcm9vdFwiIG9uQ2xpY2s9e29uVXBkYXRlfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+VXNlcnM8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRXhwYW5kYWJsZUxpc3RHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9OYXZDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnNlc3Npb24sIG51bGwpXHJcbiAgICAoQWRtaW5TbGlkZXJNZW51KSBhcyB0eXBlb2YgQWRtaW5TbGlkZXJNZW51O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uL0FwcCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFNlc3Npb25TdGF0ZSBmcm9tICcuLi8uLi9zdG9yZS9TZXNzaW9uJztcclxuaW50ZXJmYWNlIE5hdlByb3BzIHtcclxuICAgIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG50eXBlIE1lbWJlclNsaWRlck1lbnVQcm9wcyA9IFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RhdGU7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVtYmVyU2xpZGVyTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNZW1iZXJTbGlkZXJNZW51UHJvcHMsIHt9PiB7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRva2VuLCB1c2VybmFtZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lID09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKHRva2VuID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModG9rZW4pLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lLmluZGV4T2YoXCJAZ3Vlc3Quc3RhcnRlcnBhY2suY29tXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPE5hdkNvbnRleHQuQ29uc3VtZXIgey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgICAgICB7KHsgb25VcGRhdGUgfTogTmF2UHJvcHMpID0+IChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PVwic2xpZGVyTXlQcm9maWxlXCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIgdG89eycvQWNjb3VudCd9IG9uQ2xpY2s9e29uVXBkYXRlfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+QWNjb3VudDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9OYXZDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnNlc3Npb24sIG51bGwpXHJcbiAgICAoTWVtYmVyU2xpZGVyTWVudSkgYXMgdHlwZW9mIE1lbWJlclNsaWRlck1lbnU7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSAnLi4vLi4vQXBwJztcclxuaW50ZXJmYWNlIE5hdlByb3BzIHtcclxuICAgIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVyTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8e30sIHt9PntcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8TmF2Q29udGV4dC5Db25zdW1lcj5cclxuICAgICAgICAgICAgeyh7IG9uVXBkYXRlIH06IE5hdlByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIHRvPXsnL2NvdW50ZXInfSBvbkNsaWNrPXtvblVwZGF0ZX0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiB0bz17Jy9mZXRjaGRhdGEnfSBvbkNsaWNrPXtvblVwZGF0ZX0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZldGNoIERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L05hdkNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlck1lbnU7IiwiaW1wb3J0IHsgZmFDYXJldERvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYXJldERvd24nO1xyXG5pbXBvcnQgeyBmYUNhcmV0UmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYXJldFJpZ2h0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBFeHBhbmRhYmxlUGFuZWxQcm9wcyA9IHtcclxuICAgIGRpc3BsYXlUaXRsZTogc3RyaW5nLFxyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVMaXN0R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXhwYW5kYWJsZVBhbmVsUHJvcHMsIHt9PiB7XHJcbiAgICBzdGF0ZSA9IHsgYWN0aXZlOiBmYWxzZSB9O1xyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlIH0pO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtgc2xpZGVyQWNjb3JkaW9uICR7dGhpcy5wcm9wcy5pZH1gfSBjbGFzc05hbWU9XCJwYW5lbC1ncm91cFwiIGlkPVwic2xpZGVyQWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtXCIgZGF0YS1wYXJlbnQ9XCIjc2xpZGVyQWNjb3JkaW9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gcm9sZT1cInRhYlwiIGlkPXtgaGVhZGluZyR7dGhpcy5wcm9wcy5pZH1gfSBocmVmPXtgI2NvbGxhcHNlJHt0aGlzLnByb3BzLmlkfWB9IGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9e2Bjb2xsYXBzZSR7dGhpcy5wcm9wcy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXlUaXRsZX1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtdy0xNiBmYS1sZ1wiIHNpemU9XCIxeFwiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwiLTAuMmVtXCIsIG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX0gaWNvbj17dGhpcy5zdGF0ZS5hY3RpdmUgPyBmYUNhcmV0RG93biA6IGZhQ2FyZXRSaWdodH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17YGNvbGxhcHNlJHt0aGlzLnByb3BzLmlkfWB9IGNsYXNzTmFtZT1cInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlIGluXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PXtgaGVhZGluZyR7dGhpcy5wcm9wcy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlTGlzdEdyb3VwOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnY2FyZXQtZG93bic7XG52YXIgd2lkdGggPSAzMjA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjBkNyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7ICAgICAgICAgICBcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcbiAgXG5leHBvcnRzLmZhQ2FyZXREb3duID0gZXhwb3J0cy5kZWZpbml0aW9uOyAgICAgICAgICAgXG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTsgXG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NhcmV0LXJpZ2h0JztcbnZhciB3aWR0aCA9IDE5MjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMGRhJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMCAzODQuNjYyVjEyNy4zMzhjMC0xNy44MTggMjEuNTQzLTI2Ljc0MSAzNC4xNDItMTQuMTQybDEyOC42NjIgMTI4LjY2MmM3LjgxIDcuODEgNy44MSAyMC40NzQgMCAyOC4yODRMMzQuMTQyIDM5OC44MDRDMjEuNTQzIDQxMS40MDQgMCA0MDIuNDggMCAzODQuNjYyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHsgICAgICAgICAgIFxuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuICBcbmV4cG9ydHMuZmFDYXJldFJpZ2h0ID0gZXhwb3J0cy5kZWZpbml0aW9uOyAgICAgICAgICAgXG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTsgXG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9