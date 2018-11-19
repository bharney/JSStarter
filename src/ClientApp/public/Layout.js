exports.ids = ["Layout"];
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

/***/ "./ClientApp/src/components/Layout/Layout.tsx":
/*!****************************************************!*\
  !*** ./ClientApp/src/components/Layout/Layout.tsx ***!
  \****************************************************/
/*! exports provided: Layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
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








var Layout =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Layout, _React$Component);

  function Layout() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Layout.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_App__WEBPACK_IMPORTED_MODULE_3__["NavContext"].Consumer, null, function (_ref) {
      var on = _ref.on,
          handleOverlayToggle = _ref.handleOverlayToggle;
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("main", {
        onClick: function onClick(e) {
          return handleOverlayToggle(e);
        },
        className: "container " + (on ? " overlay" : "")
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_AlertComponent__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, _this.props)), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        id: "slider",
        className: "row row-offcanvas row-offcanvas-right content " + (on ? " active" : "")
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "col-12 col-md-12 col-lg-9"
      }, _this.props.children), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        id: "sidebar",
        className: "col-8 col-md-0 col-lg-3 sidebar-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "list-group"
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Slider_SliderMenu__WEBPACK_IMPORTED_MODULE_6__["SliderMenu"], null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Slider_MemberSliderMenu__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, _this.props.session)), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Slider_AdminSliderMenu__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, _this.props.session)))))));
    });
  };

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0FsZXJ0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL1NsaWRlci9BZG1pblNsaWRlck1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9TbGlkZXIvTWVtYmVyU2xpZGVyTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXJNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbnRyb2xzL0V4cGFuZGFibGVMaXN0R3JvdXAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYXJldERvd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNhcmV0UmlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBUUEsSUFBTSxjQUFOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7QUFTWSx3QkFBYyxVQUFDLElBQUQsRUFBZ0I7QUFDbEMsVUFBTSxNQUFNLEdBQUc7QUFDWCxlQUFPLEVBQUU7QUFERSxPQUFmOztBQUdBLFVBQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFDLENBQUQsRUFBVztBQUFHLFNBQUMsQ0FBQyxjQUFGOztBQUFvQixjQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLElBQUksQ0FBQyxFQUEzQjtBQUFpQyxPQUF2Rjs7QUFDQSxhQUNJO0FBQUssV0FBRyxFQUFFLElBQUksQ0FBQyxFQUFmO0FBQW1CLGlCQUFTLEVBQUUsaUJBQWlCLElBQUksQ0FBQyxTQUF0QixHQUFrQywyQkFBbEMsbUJBQTZFLElBQUksQ0FBQyxLQUFsRixDQUE5QjtBQUF5SCxhQUFLLEVBQUUsTUFBaEk7QUFBd0ksWUFBSSxFQUFDO0FBQTdJLFNBQ0k7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFTLEVBQUMsT0FBdEI7QUFBNkIsc0JBQVksT0FBekM7QUFBaUQsZUFBTyxFQUFFO0FBQTFELFNBQXFFLE1BQXJFLENBREosRUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLLElBQUksQ0FBQyxPQURWLENBRkosQ0FESjtBQVFILEtBYk87O0FBVFo7QUF1QkM7O0FBdkJEOztBQUFBLFNBQ1csTUFEWCxxQkFDaUI7QUFDVCxXQUNJO0FBQUssUUFBRSxFQUFDLGlCQUFSO0FBQTBCLGVBQVMsRUFBQyx3QkFBcEM7QUFBNkQsVUFBSSxFQUFDO0FBQWxFLE9BQ0ssS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFxQixLQUFLLFdBQTFCLENBREwsQ0FESjtBQUtILEdBUEw7O0FBQUE7QUFBQSxFQUFvQywrQ0FBcEM7QUF3QkEsK0RBQWUsMkRBQU8sQ0FDbEIsVUFBQyxLQUFEO0FBQUEsU0FBNkIsS0FBSyxDQUFDLEtBQW5DO0FBQUEsQ0FEa0IsRUFFbEI7QUFDSSxZQUFVLEVBQUUsNERBQTBCO0FBRDFDLENBRmtCLENBQVAsQ0FLYixjQUxhLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQWVBLElBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsU0FFVyxNQUZYLHFCQUVpQjtBQUFBOztBQUNULFdBQU8sb0RBQUMsK0NBQVUsQ0FBQyxRQUFaLEVBQW9CLElBQXBCLEVBQ0Y7QUFBQSxVQUFHLEVBQUgsUUFBRyxFQUFIO0FBQUEsVUFBTyxtQkFBUCxRQUFPLG1CQUFQO0FBQUEsYUFDRyxvREFBQyw4Q0FBRCxFQUFlLElBQWYsRUFDSTtBQUFNLGVBQU8sRUFBRSxpQkFBQyxDQUFEO0FBQUEsaUJBQU8sbUJBQW1CLENBQUMsQ0FBRCxDQUExQjtBQUFBLFNBQWY7QUFBOEMsaUJBQVMsa0JBQWUsRUFBRSxHQUFHLFVBQUgsR0FBZ0IsRUFBakM7QUFBdkQsU0FDSSxvREFBQyx1REFBRCxFQUFNLGtCQUFLLEtBQUksQ0FBQyxLQUFWLENBQU4sQ0FESixFQUVJO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsc0RBQW1ELEVBQUUsR0FBRyxTQUFILEdBQWUsRUFBcEU7QUFBMUIsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLLEtBQUksQ0FBQyxLQUFMLENBQVcsUUFEaEIsQ0FESixFQUlJO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsaUJBQVMsRUFBQztBQUE1QixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksb0RBQUMsNkRBQUQsRUFBVyxJQUFYLENBREosRUFFSSxvREFBQyxnRUFBRCxFQUFpQixrQkFBSyxLQUFJLENBQUMsS0FBTCxDQUFXLE9BQWhCLENBQWpCLENBRkosRUFHSSxvREFBQywrREFBRCxFQUFnQixrQkFBSyxLQUFJLENBQUMsS0FBTCxDQUFXLE9BQWhCLENBQWhCLENBSEosQ0FESixDQUpKLENBRkosQ0FESixDQURIO0FBQUEsS0FERSxDQUFQO0FBcUJILEdBeEJMOztBQUFBO0FBQUEsRUFBNEIsK0NBQTVCO0FBMkJBLCtEQUFlLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsSUFBTSxlQUFOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxTQUNXLE1BRFgscUJBQ2lCO0FBQUEsc0JBQ21CLEtBQUssS0FEeEI7QUFBQSxRQUNELFFBREMsZUFDRCxRQURDO0FBQUEsUUFDUyxLQURULGVBQ1MsS0FEVDtBQUVULFFBQUksUUFBUSxJQUFJLEVBQWhCLEVBQ0ksT0FBTyxJQUFQO0FBRUosUUFBSSxLQUFLLElBQUksU0FBYixFQUNJLE9BQU8sSUFBUDtBQUVKLFFBQUksTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLEVBQW1CLE1BQW5CLEtBQThCLENBQWxDLEVBQ0ksT0FBTyxJQUFQO0FBVEssUUFVRCxNQVZDLEdBVVUsS0FWVixDQVVELE1BVkM7O0FBWVQsUUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFdBQVAsS0FBdUIsS0FBckMsRUFBNEM7QUFDeEMsVUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLFVBQUMsS0FBRCxFQUFVO0FBQUcsZUFBTyxLQUFLLElBQUksT0FBaEI7QUFBMEIsT0FBbkQsQ0FBSixFQUEwRDtBQUN0RCxlQUFPLG9EQUFDLCtDQUFVLENBQUMsUUFBWixFQUFvQixrQkFBSyxLQUFLLEtBQVYsQ0FBcEIsRUFDRjtBQUFBLGNBQUcsUUFBSCxRQUFHLFFBQUg7QUFBQSxpQkFDRyxvREFBQyxpRkFBRCxFQUFvQjtBQUFDLHdCQUFZLEVBQUMsT0FBZDtBQUFzQixjQUFFLEVBQUUsQ0FBMUI7QUFBNkIsZUFBRyxFQUFDO0FBQWpDLFdBQXBCLEVBQ0ksb0RBQUMsd0RBQUQsRUFBUTtBQUFDLGVBQUcsRUFBQyxZQUFMO0FBQWtCLGNBQUUsRUFBRSxjQUF0QjtBQUFzQyxnQkFBSSxFQUFDLEVBQTNDO0FBQThDLHFCQUFTLEVBQUMsc0JBQXhEO0FBQStFLG1CQUFPLEVBQUUsUUFBeEY7QUFBa0csMkJBQWUsRUFBQztBQUFsSCxXQUFSLEVBQWtJLE9BQWxJLENBREosQ0FESDtBQUFBLFNBREUsQ0FBUDtBQU9IO0FBQ0o7O0FBRUQsV0FBTyxJQUFQO0FBQ0gsR0ExQkw7O0FBQUE7QUFBQSxFQUFxQywrQ0FBckM7QUE2QkEsK0RBQWUsMkRBQU8sQ0FBQyxVQUFDLEtBQUQ7QUFBQSxTQUE2QixLQUFLLENBQUMsT0FBbkM7QUFBQSxDQUFELEVBQTZDLElBQTdDLENBQVAsQ0FDVixlQURVLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsSUFBTSxnQkFBTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsU0FFVyxNQUZYLHFCQUVpQjtBQUFBLHNCQUNtQixLQUFLLEtBRHhCO0FBQUEsUUFDRCxLQURDLGVBQ0QsS0FEQztBQUFBLFFBQ00sUUFETixlQUNNLFFBRE47QUFHVCxRQUFJLFFBQVEsSUFBSSxFQUFoQixFQUNJLE9BQU8sSUFBUDtBQUNKLFFBQUksS0FBSyxJQUFJLFNBQWIsRUFDSSxPQUFPLElBQVA7QUFDSixRQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBWixFQUFtQixNQUFuQixLQUE4QixDQUFsQyxFQUNJLE9BQU8sSUFBUDtBQUVKLFFBQUksUUFBUSxJQUFJLFNBQWhCLEVBQ0ksT0FBTyxJQUFQOztBQUVKLFFBQUksUUFBUSxDQUFDLE9BQVQsQ0FBaUIsd0JBQWpCLE1BQStDLENBQUMsQ0FBcEQsRUFBdUQ7QUFDbkQsYUFBTyxvREFBQywrQ0FBVSxDQUFDLFFBQVosRUFBb0Isa0JBQUssS0FBSyxLQUFWLENBQXBCLEVBQ047QUFBQSxZQUFHLFFBQUgsUUFBRyxRQUFIO0FBQUEsZUFDRyxvREFBQyw4Q0FBRCxFQUFlLElBQWYsRUFDUSxvREFBQyx3REFBRCxFQUFRO0FBQUMsYUFBRyxFQUFDLGlCQUFMO0FBQXVCLG1CQUFTLEVBQUMsaUJBQWpDO0FBQW1ELFlBQUUsRUFBRSxVQUF2RDtBQUFtRSxpQkFBTyxFQUFFLFFBQTVFO0FBQXNGLHlCQUFlLEVBQUM7QUFBdEcsU0FBUixFQUFzSCxTQUF0SCxDQURSLENBREg7QUFBQSxPQURNLENBQVA7QUFPSDs7QUFFRCxXQUFPLElBQVA7QUFDSCxHQTFCTDs7QUFBQTtBQUFBLEVBQXNDLCtDQUF0QztBQTZCQSwrREFBZSwyREFBTyxDQUNsQixVQUFDLEtBQUQ7QUFBQSxTQUE2QixLQUFLLENBQUMsT0FBbkM7QUFBQSxDQURrQixFQUMwQixJQUQxQixDQUFQLENBRVYsZ0JBRlUsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUtBLElBQU0sVUFBTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsU0FFVyxNQUZYLHFCQUVpQjtBQUNULFdBQU8sb0RBQUMsK0NBQVUsQ0FBQyxRQUFaLEVBQW9CLElBQXBCLEVBQ0Y7QUFBQSxVQUFHLFFBQUgsUUFBRyxRQUFIO0FBQUEsYUFDRyxvREFBQyw4Q0FBRCxFQUFlLElBQWYsRUFDUSxvREFBQyx3REFBRCxFQUFRO0FBQUMsaUJBQVMsRUFBQyxpQkFBWDtBQUE2QixVQUFFLEVBQUUsVUFBakM7QUFBNkMsZUFBTyxFQUFFLFFBQXREO0FBQWdFLHVCQUFlLEVBQUM7QUFBaEYsT0FBUixFQUFnRyxTQUFoRyxDQURSLEVBSVEsb0RBQUMsd0RBQUQsRUFBUTtBQUFDLGlCQUFTLEVBQUMsaUJBQVg7QUFBNkIsVUFBRSxFQUFFLFlBQWpDO0FBQStDLGVBQU8sRUFBRSxRQUF4RDtBQUFrRSx1QkFBZSxFQUFDO0FBQWxGLE9BQVIsRUFBa0csWUFBbEcsQ0FKUixDQURIO0FBQUEsS0FERSxDQUFQO0FBWUgsR0FmTDs7QUFBQTtBQUFBLEVBQWdDLG1EQUFoQztBQWtCQSwrREFBZSxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNLG1CQUFOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7OztBQUNJLGtCQUFRO0FBQUUsWUFBTSxFQUFFO0FBQVYsS0FBUjs7QUFDQSx3QkFBYyxZQUFLO0FBQ2YsWUFBSyxRQUFMLENBQWM7QUFBRSxjQUFNLEVBQUUsQ0FBQyxNQUFLLEtBQUwsQ0FBVztBQUF0QixPQUFkO0FBQ0gsS0FGRDs7QUFGSjtBQWtCQzs7QUFsQkQ7O0FBQUEsU0FLVyxNQUxYLHFCQUtpQjtBQUNULFdBQU87QUFBSyxTQUFHLHVCQUFxQixLQUFLLEtBQUwsQ0FBVyxFQUF4QztBQUE4QyxlQUFTLEVBQUMsYUFBeEQ7QUFBc0UsUUFBRSxFQUFDO0FBQXpFLE9BQ0g7QUFBQSxxQkFBZSxVQUFmO0FBQTBCLGVBQVMsRUFBQyxpQ0FBcEM7QUFBcUUscUJBQWEsa0JBQWxGO0FBQXFHLGFBQU8sRUFBRSxLQUFLLFdBQW5IO0FBQWdJLFVBQUksRUFBQyxLQUFySTtBQUEySSxRQUFFLGNBQVksS0FBSyxLQUFMLENBQVcsRUFBcEs7QUFBMEssVUFBSSxnQkFBYyxLQUFLLEtBQUwsQ0FBVyxFQUF2TTtBQUEyTSx1QkFBZ0IsT0FBM047QUFBa08sb0NBQTJCLEtBQUssS0FBTCxDQUFXO0FBQXhRLE9BQ2lCLEtBQUssS0FBTCxDQUFXLFlBRDVCLEVBRUksb0RBQUMsOEVBQUQsRUFBZ0I7QUFBQyxlQUFTLEVBQUMsOEJBQVg7QUFBMEMsVUFBSSxFQUFDLElBQS9DO0FBQW9ELFdBQUssRUFBRTtBQUFFLHFCQUFhLEVBQUUsUUFBakI7QUFBMkIsa0JBQVUsRUFBRTtBQUF2QyxPQUEzRDtBQUEyRyxVQUFJLEVBQUUsS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQix5RkFBcEIsR0FBa0M7QUFBbkosS0FBaEIsQ0FGSixDQURHLEVBS0M7QUFBSyxRQUFFLGVBQWEsS0FBSyxLQUFMLENBQVcsRUFBL0I7QUFBcUMsZUFBUyxFQUFDLDRCQUEvQztBQUE0RSxVQUFJLEVBQUMsVUFBakY7QUFBMkYscUNBQTRCLEtBQUssS0FBTCxDQUFXO0FBQWxJLE9BQ0k7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUNLLEtBQUssS0FBTCxDQUFXLFFBRGhCLENBREosQ0FMRCxDQUFQO0FBV0gsR0FqQkw7O0FBQUE7QUFBQSxFQUF5QywrQ0FBekM7QUFtQkEsK0RBQWUsbUJBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUM7QUFDQTtBQUNBLDRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEM7QUFDQTtBQUNBLDRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQyIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIEFsZXJ0U3RhdGUgZnJvbSAnLi4vLi4vc3RvcmUvQWxlcnQnO1xyXG5pbXBvcnQgeyBDbG9zZUFsZXJ0QWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvQWxlcnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb3BzIHtcclxuICAgIGl0ZW1zOiBBbGVydFtdO1xyXG4gICAgY2xvc2VBbGVydChpZDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248Q2xvc2VBbGVydEFjdGlvbj47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBbGVydFByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidG9hc3QtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYWxlcnRzIHRvYXN0LXRvcC1yaWdodFwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMubWFwKHRoaXMucmVuZGVyQWxlcnQpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQWxlcnQgPSAoaXRlbTogQWxlcnQpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbG9zZUFjdGlvbiA9IChlOiBhbnkpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnByb3BzLmNsb3NlQWxlcnQoaXRlbS5pZCk7IH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17J3RvYXN0IHRvYXN0LScgKyBpdGVtLmFsZXJ0VHlwZSArICcgYWxlcnQgYWxlcnQtZGlzbWlzc2FibGUgJyArIGBmYWRlIGZhZGUtJHtpdGVtLnN0YXRlfWB9IHN0eWxlPXtzdHlsZXN9IHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e2Nsb3NlQWN0aW9ufT4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmFsZXJ0LFxyXG4gICAge1xyXG4gICAgICAgIGNsb3NlQWxlcnQ6IEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnMuY2xvc2VBbGVydCxcclxuICAgIH0sXHJcbikoQWxlcnRDb21wb25lbnQpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSAnLi4vLi4vQXBwJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQWNjb3VudFN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL0FjY291bnQnO1xyXG5pbXBvcnQgKiBhcyBBbGVydFN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL0FsZXJ0JztcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL1Nlc3Npb24nO1xyXG5pbXBvcnQgQWRtaW5TbGlkZXJNZW51IGZyb20gJy4uL1NsaWRlci9BZG1pblNsaWRlck1lbnUnO1xyXG5pbXBvcnQgTWVtYmVyU2xpZGVyTWVudSBmcm9tICcuLi9TbGlkZXIvTWVtYmVyU2xpZGVyTWVudSc7XHJcbmltcG9ydCB7IFNsaWRlck1lbnUgfSBmcm9tICcuLi9TbGlkZXIvU2xpZGVyTWVudSc7XHJcbmltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0Q29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBOYXZQcm9wcyB7XHJcbiAgICBvbjogYm9vbGVhbjtcclxuICAgIGhhbmRsZU92ZXJsYXlUb2dnbGU6IChlKSA9PiB2b2lkO1xyXG59XHJcblxyXG50eXBlIExheW91dFByb3BzID0gQXBwbGljYXRpb25TdGF0ZVxyXG4gICAgJiB7XHJcbiAgICAgICAgYWNjb3VudEFjdGlvbnM6IHR5cGVvZiBBY2NvdW50U3RhdGUuYWN0aW9uQ3JlYXRvcnMsXHJcbiAgICAgICAgc2Vzc2lvbkFjdGlvbnM6IHR5cGVvZiBTZXNzaW9uU3RhdGUuYWN0aW9uQ3JlYXRvcnMsXHJcbiAgICAgICAgYWxlcnRBY3Rpb25zOiB0eXBlb2YgQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIH1cclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExheW91dFByb3BzLCB7fT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxOYXZDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICB7KHsgb24sIGhhbmRsZU92ZXJsYXlUb2dnbGUgfTogTmF2UHJvcHMpID0+IChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8bWFpbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3ZlcmxheVRvZ2dsZShlKX0gY2xhc3NOYW1lPXtgY29udGFpbmVyICR7b24gPyBcIiBvdmVybGF5XCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9e2Byb3cgcm93LW9mZmNhbnZhcyByb3ctb2ZmY2FudmFzLXJpZ2h0IGNvbnRlbnQgJHtvbiA/IFwiIGFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMiBjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIGNsYXNzTmFtZT1cImNvbC04IGNvbC1tZC0wIGNvbC1sZy0zIHNpZGViYXItb2ZmY2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW1iZXJTbGlkZXJNZW51IHsuLi50aGlzLnByb3BzLnNlc3Npb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZG1pblNsaWRlck1lbnUgey4uLnRoaXMucHJvcHMuc2Vzc2lvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTmF2Q29udGV4dC5Db25zdW1lcj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uL0FwcCc7XHJcbmltcG9ydCB7IEV4cGFuZGFibGVMaXN0R3JvdXAgfSBmcm9tICcuLi8uLi9jb250cm9scy9FeHBhbmRhYmxlTGlzdEdyb3VwJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL1Nlc3Npb24nO1xyXG5pbnRlcmZhY2UgTmF2UHJvcHMge1xyXG4gICAgb25VcGRhdGU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbnR5cGUgQWRtaW5TbGlkZXJNZW51UHJvcHMgPSBTZXNzaW9uU3RhdGUuU2Vzc2lvblN0YXRlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluU2xpZGVyTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBZG1pblNsaWRlck1lbnVQcm9wcywge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgdG9rZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lID09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIGlmICh0b2tlbiA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0b2tlbikubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGNvbnN0IHsgY2xhaW1zIH0gPSB0b2tlblxyXG5cclxuICAgICAgICBpZiAoY2xhaW1zICYmIGNsYWltcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKGNsYWltcy5zb21lKChjbGFpbSkgPT4geyByZXR1cm4gY2xhaW0gPT0gXCJBZG1pblwiOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxOYXZDb250ZXh0LkNvbnN1bWVyIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHsgb25VcGRhdGUgfTogTmF2UHJvcHMpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZGFibGVMaXN0R3JvdXAgZGlzcGxheVRpdGxlPVwiQWRtaW5cIiBpZD17MX0ga2V5PVwiYWRtaW5TbGlkZXJNZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9XCJhZG1pblVzZXJzXCIgdG89eycvYWRtaW4vdXNlcnMnfSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIHJvb3RcIiBvbkNsaWNrPXtvblVwZGF0ZX0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlVzZXJzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V4cGFuZGFibGVMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTmF2Q29udGV4dC5Db25zdW1lcj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLCBudWxsKVxyXG4gICAgKEFkbWluU2xpZGVyTWVudSkgYXMgdHlwZW9mIEFkbWluU2xpZGVyTWVudTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuLi8uLi9BcHAnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBTZXNzaW9uU3RhdGUgZnJvbSAnLi4vLi4vc3RvcmUvU2Vzc2lvbic7XHJcbmludGVyZmFjZSBOYXZQcm9wcyB7XHJcbiAgICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxudHlwZSBNZW1iZXJTbGlkZXJNZW51UHJvcHMgPSBTZXNzaW9uU3RhdGUuU2Vzc2lvblN0YXRlO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbWJlclNsaWRlck1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWVtYmVyU2xpZGVyTWVudVByb3BzLCB7fT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlcm5hbWUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICh0b2tlbiA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRva2VuKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZS5pbmRleE9mKFwiQGd1ZXN0LnN0YXJ0ZXJwYWNrLmNvbVwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxOYXZDb250ZXh0LkNvbnN1bWVyIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgICAgeyh7IG9uVXBkYXRlIH06IE5hdlByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT1cInNsaWRlck15UHJvZmlsZVwiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIHRvPXsnL0FjY291bnQnfSBvbkNsaWNrPXtvblVwZGF0ZX0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPkFjY291bnQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTmF2Q29udGV4dC5Db25zdW1lcj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLCBudWxsKVxyXG4gICAgKE1lbWJlclNsaWRlck1lbnUpIGFzIHR5cGVvZiBNZW1iZXJTbGlkZXJNZW51O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uL0FwcCc7XHJcbmludGVyZmFjZSBOYXZQcm9wcyB7XHJcbiAgICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsaWRlck1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PHt9LCB7fT57XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPE5hdkNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgICAgICAgIHsoeyBvblVwZGF0ZSB9OiBOYXZQcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiB0bz17Jy9jb3VudGVyJ30gb25DbGljaz17b25VcGRhdGV9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIgdG89eycvZmV0Y2hkYXRhJ30gb25DbGljaz17b25VcGRhdGV9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZXRjaCBEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9OYXZDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJNZW51OyIsImltcG9ydCB7IGZhQ2FyZXREb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2FyZXREb3duJztcclxuaW1wb3J0IHsgZmFDYXJldFJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2FyZXRSaWdodCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgRXhwYW5kYWJsZVBhbmVsUHJvcHMgPSB7XHJcbiAgICBkaXNwbGF5VGl0bGU6IHN0cmluZyxcclxuICAgIGlkOiBudW1iZXJcclxuICAgIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlTGlzdEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEV4cGFuZGFibGVQYW5lbFByb3BzLCB7fT4ge1xyXG4gICAgc3RhdGUgPSB7IGFjdGl2ZTogZmFsc2UgfTtcclxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZSB9KTtcclxuICAgIH07XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGtleT17YHNsaWRlckFjY29yZGlvbiAke3RoaXMucHJvcHMuaWR9YH0gY2xhc3NOYW1lPVwicGFuZWwtZ3JvdXBcIiBpZD1cInNsaWRlckFjY29yZGlvblwiPlxyXG4gICAgICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbVwiIGRhdGEtcGFyZW50PVwiI3NsaWRlckFjY29yZGlvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IHJvbGU9XCJ0YWJcIiBpZD17YGhlYWRpbmcke3RoaXMucHJvcHMuaWR9YH0gaHJlZj17YCNjb2xsYXBzZSR7dGhpcy5wcm9wcy5pZH1gfSBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPXtgY29sbGFwc2Uke3RoaXMucHJvcHMuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5VGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXctMTYgZmEtbGdcIiBzaXplPVwiMXhcIiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIi0wLjJlbVwiLCBtYXJnaW5MZWZ0OiBcIjhweFwiIH19IGljb249e3RoaXMuc3RhdGUuYWN0aXZlID8gZmFDYXJldERvd24gOiBmYUNhcmV0UmlnaHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2Bjb2xsYXBzZSR7dGhpcy5wcm9wcy5pZH1gfSBjbGFzc05hbWU9XCJwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZSBpblwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT17YGhlYWRpbmcke3RoaXMucHJvcHMuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZUxpc3RHcm91cDsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NhcmV0LWRvd24nO1xudmFyIHdpZHRoID0gMzIwO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwZDcnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0geyAgICAgICAgICAgXG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG4gIFxuZXhwb3J0cy5mYUNhcmV0RG93biA9IGV4cG9ydHMuZGVmaW5pdGlvbjsgICAgICAgICAgIFxuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7IFxuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjYXJldC1yaWdodCc7XG52YXIgd2lkdGggPSAxOTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjBkYSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTAgMzg0LjY2MlYxMjcuMzM4YzAtMTcuODE4IDIxLjU0My0yNi43NDEgMzQuMTQyLTE0LjE0MmwxMjguNjYyIDEyOC42NjJjNy44MSA3LjgxIDcuODEgMjAuNDc0IDAgMjguMjg0TDM0LjE0MiAzOTguODA0QzIxLjU0MyA0MTEuNDA0IDAgNDAyLjQ4IDAgMzg0LjY2MnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7ICAgICAgICAgICBcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcbiAgXG5leHBvcnRzLmZhQ2FyZXRSaWdodCA9IGV4cG9ydHMuZGVmaW5pdGlvbjsgICAgICAgICAgIFxuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7IFxuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==