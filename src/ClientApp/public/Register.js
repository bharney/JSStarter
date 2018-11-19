exports.ids = ["Register"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/Register.tsx":
/*!*******************************************************!*\
  !*** ./ClientApp/src/components/Account/Register.tsx ***!
  \*******************************************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./ClientApp/src/models/index.ts");
/* harmony import */ var _store_Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/Account */ "./ClientApp/src/store/Account.ts");
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");
/* harmony import */ var _store_Session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/Session */ "./ClientApp/src/store/Session.ts");
/* harmony import */ var _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Common/LoadingRoute */ "./ClientApp/src/components/Common/LoadingRoute.tsx");












var AsyncRegisterForm = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | RegisterForm */ "RegisterForm").then(__webpack_require__.bind(null, /*! ../Account/RegisterForm */ "./ClientApp/src/components/Account/RegisterForm.tsx"));
  },
  modules: ["../Account/RegisterForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../Account/RegisterForm */ "./ClientApp/src/components/Account/RegisterForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var Register =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Register, _React$Component);

  function Register() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Register.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-8 col-md-6 col-lg-5"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Register."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AsyncRegisterForm, {
      form: "registerForm",
      enableReinitialize: true,
      onSubmit: function onSubmit(values, dispatch) {
        _this.props.accountActions.register(values, function () {
          _this.props.history.push("/RegistrationConfirmation");

          _this.props.alertActions.sendAlert("Before logging in, you must confirm your email address. We have sent a confirmation email.", _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].success, true);

          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reset"])("registerForm"));
        }, function (error) {
          _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].danger, true);
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "bottom text-center"
    }, "I already have a Login? ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/signin"
    }, "Sign In")))));
  };

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state.account;
}, // Selects which state properties are merged into the component's props
function (dispatch) {
  // Selects which action creators are merged into the component's props
  return {
    accountActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_store_Account__WEBPACK_IMPORTED_MODULE_8__["actionCreators"], dispatch),
    alertActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_store_Alert__WEBPACK_IMPORTED_MODULE_9__["actionCreators"], dispatch),
    sessionActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_store_Session__WEBPACK_IMPORTED_MODULE_10__["actionCreators"], dispatch)
  };
})(Register));

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkaW5nUm91dGUudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNLGlCQUFpQixHQUFHLHFEQUFRLENBQUM7QUFDakMsUUFBTSxFQUFFO0FBQUEsV0FDTiwrTEFETTtBQUFBLEdBRHlCO0FBR2pDLFNBQU8sRUFBRSxDQUFDLHlCQUFELENBSHdCO0FBSWpDLFNBQU8sRUFBRTtBQUFBLFdBQU0sQ0FBQyxvQkFBb0Isb0ZBQXBCLENBQUQsQ0FBTjtBQUFBLEdBSndCO0FBS2pDLFNBQU8sRUFBRTtBQUx3QixDQUFELENBQWxDO0FBcUJBLElBQU0sUUFBTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsU0FDRSxNQURGLHFCQUNRO0FBQUE7O0FBQ0osV0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQXFDLFdBQXJDLENBREYsRUFFRSxvREFBQyxpQkFBRCxFQUFrQjtBQUNoQixVQUFJLEVBQUMsY0FEVztBQUVoQix3QkFBa0IsRUFBRSxJQUZKO0FBR2hCLGNBQVEsRUFBRSxrQkFBQyxNQUFELEVBQTRCLFFBQTVCLEVBQXdDO0FBQ2hELGFBQUksQ0FBQyxLQUFMLENBQVcsY0FBWCxDQUEwQixRQUExQixDQUNFLE1BREYsRUFFRSxZQUFLO0FBQ0QsZUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQW5CLENBQXdCLDJCQUF4Qjs7QUFDRixlQUFJLENBQUMsS0FBTCxDQUFXLFlBQVgsQ0FBd0IsU0FBeEIsQ0FDRSw0RkFERixFQUVFLGlEQUFTLENBQUMsT0FGWixFQUdFLElBSEY7O0FBS0Esa0JBQVEsQ0FBQyx3REFBSyxDQUFDLGNBQUQsQ0FBTixDQUFSO0FBQ0QsU0FWSCxFQVdFLGVBQUssRUFBRztBQUNOLGVBQUksQ0FBQyxLQUFMLENBQVcsWUFBWCxDQUF3QixTQUF4QixDQUNFLEtBQUssQ0FBQyxpQkFEUixFQUVFLGlEQUFTLENBQUMsTUFGWixFQUdFLElBSEY7QUFLRCxTQWpCSDtBQW1CRDtBQXZCZSxLQUFsQixDQUZGLEVBMkJFO0FBQUssZUFBUyxFQUFDO0FBQWYsTywwQkFBQSxFQUMwQixvREFBQyxxREFBRCxFQUFLO0FBQUMsUUFBRSxFQUFDO0FBQUosS0FBTCxFQUFrQixTQUFsQixDQUQxQixDQTNCRixDQURGLENBREYsQ0FERjtBQXFDRCxHQXZDSDs7QUFBQTtBQUFBLEVBQThCLCtDQUE5QjtBQTBDQSwrREFBZSwyREFBTyxDQUNwQixVQUFDLEtBQUQ7QUFBQSxTQUE2QixLQUFLLENBQUMsT0FBbkM7QUFBQSxDQURvQixFQUN3QjtBQUM1QyxVQUNFLFFBREYsRUFLSTtBQUNGO0FBQ0EsU0FBTztBQUNMLGtCQUFjLEVBQUUsZ0VBQWtCLENBQUMsNkRBQUQsRUFBOEIsUUFBOUIsQ0FEN0I7QUFFTCxnQkFBWSxFQUFFLGdFQUFrQixDQUFDLDJEQUFELEVBQTRCLFFBQTVCLENBRjNCO0FBR0wsa0JBQWMsRUFBRSxnRUFBa0IsQ0FBQyw4REFBRCxFQUE4QixRQUE5QjtBQUg3QixHQUFQO0FBS0QsQ0FkbUIsQ0FBUCxDQWViLFFBZmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTs7SUFFQSxZOzs7Ozs7Ozs7OztTQUNTLE0scUJBQU07QUFDWCxXQUNFLGlFQUNFLG9EQUFDLDhFQUFELEVBQWdCO0FBQUMsVUFBSSxFQUFFLHFGQUFQO0FBQWtCLFVBQUksTUFBdEI7QUFBdUIsVUFBSSxFQUFDO0FBQTVCLEtBQWhCLENBREYsQ0FERjtBQUtELEc7OztFQVB3QiwrQzs7QUFVM0IsK0RBQWUsWUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0MiLCJmaWxlIjoiUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEluamVjdGVkRm9ybVByb3BzLCByZXNldCB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCB7IEFsZXJ0VHlwZSwgRmllbGQgYXMgTW9kZWxGaWVsZCwgUmVnaXN0ZXJWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgQWNjb3VudFN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9BY2NvdW50XCI7XHJcbmltcG9ydCAqIGFzIEFsZXJ0U3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL0FsZXJ0XCI7XHJcbmltcG9ydCAqIGFzIFNlc3Npb25TdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvU2Vzc2lvblwiO1xyXG5pbXBvcnQgTG9hZGluZ1JvdXRlIGZyb20gXCIuLi9Db21tb24vTG9hZGluZ1JvdXRlXCI7XHJcblxyXG5jb25zdCBBc3luY1JlZ2lzdGVyRm9ybSA9IExvYWRhYmxlKHtcclxuICBsb2FkZXI6ICgpID0+XHJcbiAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJSZWdpc3RlckZvcm1cIiAqLyBcIi4uL0FjY291bnQvUmVnaXN0ZXJGb3JtXCIpLFxyXG4gIG1vZHVsZXM6IFtcIi4uL0FjY291bnQvUmVnaXN0ZXJGb3JtXCJdLFxyXG4gIHdlYnBhY2s6ICgpID0+IFtyZXF1aXJlLnJlc29sdmVXZWFrKFwiLi4vQWNjb3VudC9SZWdpc3RlckZvcm1cIildLFxyXG4gIGxvYWRpbmc6IExvYWRpbmdSb3V0ZVxyXG59KTtcclxudHlwZSBSZWdpc3RlclByb3BzID0gQWNjb3VudFN0YXRlLkFjY291bnRTdGF0ZSAmIHtcclxuICBhY2NvdW50QWN0aW9uczogdHlwZW9mIEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICBhbGVydEFjdGlvbnM6IHR5cGVvZiBBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gIHNlc3Npb25BY3Rpb25zOiB0eXBlb2YgU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG59ICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcblxyXG5pbnRlcmZhY2UgQWRkaXRpb25hbFByb3BzIHtcclxuICBvbkNhbmNlbDogKCkgPT4gdm9pZDtcclxuICBmaWVsZHM6IE1vZGVsRmllbGRbXTtcclxuICBmb3JtQnV0dG9uPzogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEZvcm1Qcm9wcyA9IEluamVjdGVkRm9ybVByb3BzICYgQWRkaXRpb25hbFByb3BzO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJlZ2lzdGVyUHJvcHMsIEZvcm1Qcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1tZC02IGNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5SZWdpc3Rlci48L2gyPlxyXG4gICAgICAgICAgICA8QXN5bmNSZWdpc3RlckZvcm1cclxuICAgICAgICAgICAgICBmb3JtPVwicmVnaXN0ZXJGb3JtXCJcclxuICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXM6IFJlZ2lzdGVyVmlld01vZGVsLCBkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50QWN0aW9ucy5yZWdpc3RlcihcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9SZWdpc3RyYXRpb25Db25maXJtYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJCZWZvcmUgbG9nZ2luZyBpbiwgeW91IG11c3QgY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MuIFdlIGhhdmUgc2VudCBhIGNvbmZpcm1hdGlvbiBlbWFpbC5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIEFsZXJ0VHlwZS5zdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVzZXQoXCJyZWdpc3RlckZvcm1cIikpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuZGFuZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBJIGFscmVhZHkgaGF2ZSBhIExvZ2luPyA8TGluayB0bz1cIi9zaWduaW5cIj5TaWduIEluPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUuYWNjb3VudCwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAoXHJcbiAgICBkaXNwYXRjaDpcclxuICAgICAgfCBEaXNwYXRjaDxBY2NvdW50U3RhdGUuQWNjb3VudFN0YXRlPlxyXG4gICAgICB8IERpc3BhdGNoPEFsZXJ0U3RhdGUuQWxlcnRTdGF0ZT5cclxuICAgICAgfCBEaXNwYXRjaDxTZXNzaW9uU3RhdGUuU2Vzc2lvblN0YXRlPlxyXG4gICkgPT4ge1xyXG4gICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWNjb3VudEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY2NvdW50U3RhdGUuYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSxcclxuICAgICAgYWxlcnRBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICBzZXNzaW9uQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbiAgICB9O1xyXG4gIH1cclxuKShSZWdpc3RlcikgYXMgdHlwZW9mIFJlZ2lzdGVyO1xyXG4iLCJpbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgTG9hZGluZ1JvdXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzcGluIHNpemU9XCIyeFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSb3V0ZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzcGlubmVyJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMTEwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMzA0IDQ4YzAgMjYuNTEtMjEuNDkgNDgtNDggNDhzLTQ4LTIxLjQ5LTQ4LTQ4IDIxLjQ5LTQ4IDQ4LTQ4IDQ4IDIxLjQ5IDQ4IDQ4em0tNDggMzY4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5LTQ4LTQ4LTQ4em0yMDgtMjA4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5LTQ4LTQ4LTQ4ek05NiAyNTZjMC0yNi41MS0yMS40OS00OC00OC00OFMwIDIyOS40OSAwIDI1NnMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OHptMTIuOTIyIDk5LjA3OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OGMwLTI2LjUwOS0yMS40OTEtNDgtNDgtNDh6bTI5NC4xNTYgMGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OGMwLTI2LjUwOS0yMS40OS00OC00OC00OHpNMTA4LjkyMiA2MC45MjJjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDkxLTQ4LTQ4LTQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHsgICAgICAgICAgIFxuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuICBcbmV4cG9ydHMuZmFTcGlubmVyID0gZXhwb3J0cy5kZWZpbml0aW9uOyAgICAgICAgICAgXG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTsgXG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9