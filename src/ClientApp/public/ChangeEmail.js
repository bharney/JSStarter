exports.ids = ["ChangeEmail"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ChangeEmail.tsx":
/*!**********************************************************!*\
  !*** ./ClientApp/src/components/Account/ChangeEmail.tsx ***!
  \**********************************************************/
/*! exports provided: ChangeEmail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmail", function() { return ChangeEmail; });
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












var AsyncChangeEmailForm = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | ChangeEmailForm */ "ChangeEmailForm").then(__webpack_require__.bind(null, /*! ../Account/ChangeEmailForm */ "./ClientApp/src/components/Account/ChangeEmailForm.tsx"));
  },
  modules: ["../Account/ChangeEmailForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../Account/ChangeEmailForm */ "./ClientApp/src/components/Account/ChangeEmailForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var ChangeEmail =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ChangeEmail, _React$Component);

  function ChangeEmail() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ChangeEmail.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "row justify-content-center pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "col-12 col-sm-8 col-lg-7"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Change Email."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AsyncChangeEmailForm, {
      form: "changeEmailForm",
      enableReinitialize: true,
      onSubmit: function onSubmit(values, dispatch) {
        _this.props.accountActions.changeEmail(values, function () {
          _this.props.history.push("/Account/ChangeEmail/Confirmation");

          _this.props.alertActions.sendAlert("Confirmation Email as been sent successfully!", _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].success, true);

          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reset"])("changeEmailForm"));
        }, function (error) {
          _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].danger, true);
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/account"
    }, "Go back")))));
  };

  return ChangeEmail;
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
})(ChangeEmail));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9DaGFuZ2VFbWFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkaW5nUm91dGUudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNLG9CQUFvQixHQUFHLHFEQUFRLENBQUM7QUFDbEMsUUFBTSxFQUFFO0FBQUEsV0FDSiwyTUFESTtBQUFBLEdBRDBCO0FBR2xDLFNBQU8sRUFBRSxDQUFDLDRCQUFELENBSHlCO0FBSWxDLFNBQU8sRUFBRTtBQUFBLFdBQU0sQ0FBQyxvQkFBb0IsMEZBQXBCLENBQUQsQ0FBTjtBQUFBLEdBSnlCO0FBS2xDLFNBQU8sRUFBRTtBQUx5QixDQUFELENBQXJDO0FBc0JBLElBQU0sV0FBTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsU0FJSSxNQUpKLHFCQUlVO0FBQUE7O0FBQ0YsV0FDSTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQXFDLGVBQXJDLENBREosRUFFSSxvREFBQyxvQkFBRCxFQUFxQjtBQUNqQixVQUFJLEVBQUMsaUJBRFk7QUFFakIsd0JBQWtCLEVBQUUsSUFGSDtBQUdqQixjQUFRLEVBQUUsa0JBQUMsTUFBRCxFQUErQixRQUEvQixFQUEyQztBQUNqRCxhQUFJLENBQUMsS0FBTCxDQUFXLGNBQVgsQ0FBMEIsV0FBMUIsQ0FDSSxNQURKLEVBRUksWUFBSztBQUNELGVBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUF3QixtQ0FBeEI7O0FBQ0EsZUFBSSxDQUFDLEtBQUwsQ0FBVyxZQUFYLENBQXdCLFNBQXhCLENBQ0ksK0NBREosRUFFSSxpREFBUyxDQUFDLE9BRmQsRUFHSSxJQUhKOztBQUtBLGtCQUFRLENBQUMsd0RBQUssQ0FBQyxpQkFBRCxDQUFOLENBQVI7QUFDSCxTQVZMLEVBV0ksZUFBSyxFQUFHO0FBQ0osZUFBSSxDQUFDLEtBQUwsQ0FBVyxZQUFYLENBQXdCLFNBQXhCLENBQ0ksS0FBSyxDQUFDLGlCQURWLEVBRUksaURBQVMsQ0FBQyxNQUZkLEVBR0ksSUFISjtBQUtILFNBakJMO0FBbUJIO0FBdkJnQixLQUFyQixDQUZKLEVBMkJJLCtEQUFHLG9EQUFDLHFEQUFELEVBQUs7QUFBQyxRQUFFLEVBQUM7QUFBSixLQUFMLEVBQW1CLFNBQW5CLENBQUgsQ0EzQkosQ0FESixDQURKLENBREo7QUFvQ0gsR0F6Q0w7O0FBQUE7QUFBQSxFQUFpQywrQ0FBakM7QUE0Q0EsK0RBQWUsMkRBQU8sQ0FDbEIsVUFBQyxLQUFEO0FBQUEsU0FBNkIsS0FBSyxDQUFDLE9BQW5DO0FBQUEsQ0FEa0IsRUFDMEI7QUFDNUMsVUFDSSxRQURKLEVBS0k7QUFDQTtBQUNBLFNBQU87QUFDSCxrQkFBYyxFQUFFLGdFQUFrQixDQUFDLDZEQUFELEVBQThCLFFBQTlCLENBRC9CO0FBRUgsZ0JBQVksRUFBRSxnRUFBa0IsQ0FBQywyREFBRCxFQUE0QixRQUE1QixDQUY3QjtBQUdILGtCQUFjLEVBQUUsZ0VBQWtCLENBQUMsOERBQUQsRUFBOEIsUUFBOUI7QUFIL0IsR0FBUDtBQUtILENBZGlCLENBQVAsQ0FlYixXQWZhLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7O0lBRUEsWTs7Ozs7Ozs7Ozs7U0FDUyxNLHFCQUFNO0FBQ1gsV0FDRSxpRUFDRSxvREFBQyw4RUFBRCxFQUFnQjtBQUFDLFVBQUksRUFBRSxxRkFBUDtBQUFrQixVQUFJLE1BQXRCO0FBQXVCLFVBQUksRUFBQztBQUE1QixLQUFoQixDQURGLENBREY7QUFLRCxHOzs7RUFQd0IsK0M7O0FBVTNCLCtEQUFlLFlBQWYsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QztBQUNBO0FBQ0EsNEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDIiwiZmlsZSI6IkNoYW5nZUVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBJbmplY3RlZEZvcm1Qcm9wcywgcmVzZXQgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xyXG5pbXBvcnQgeyBBbGVydFR5cGUsIENoYW5nZUVtYWlsVmlld01vZGVsLCBGaWVsZCBhcyBNb2RlbEZpZWxkIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIEFjY291bnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWNjb3VudFwiO1xyXG5pbXBvcnQgKiBhcyBBbGVydFN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9BbGVydFwiO1xyXG5pbXBvcnQgKiBhcyBTZXNzaW9uU3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL1Nlc3Npb25cIjtcclxuaW1wb3J0IExvYWRpbmdSb3V0ZSBmcm9tIFwiLi4vQ29tbW9uL0xvYWRpbmdSb3V0ZVwiO1xyXG5jb25zdCBBc3luY0NoYW5nZUVtYWlsRm9ybSA9IExvYWRhYmxlKHtcclxuICAgIGxvYWRlcjogKCkgPT5cclxuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJDaGFuZ2VFbWFpbEZvcm1cIiAqLyBcIi4uL0FjY291bnQvQ2hhbmdlRW1haWxGb3JtXCIpLFxyXG4gICAgbW9kdWxlczogW1wiLi4vQWNjb3VudC9DaGFuZ2VFbWFpbEZvcm1cIl0sXHJcbiAgICB3ZWJwYWNrOiAoKSA9PiBbcmVxdWlyZS5yZXNvbHZlV2VhayhcIi4uL0FjY291bnQvQ2hhbmdlRW1haWxGb3JtXCIpXSxcclxuICAgIGxvYWRpbmc6IExvYWRpbmdSb3V0ZVxyXG59KTtcclxuXHJcbnR5cGUgQ2hhbmdlUGFzc3dvcmRQcm9wcyA9IEFjY291bnRTdGF0ZS5BY2NvdW50U3RhdGUgJiB7XHJcbiAgICBhY2NvdW50QWN0aW9uczogdHlwZW9mIEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIGFsZXJ0QWN0aW9uczogdHlwZW9mIEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbiAgICBzZXNzaW9uQWN0aW9uczogdHlwZW9mIFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxufSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+O1xyXG5cclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxQcm9wcyB7XHJcbiAgICBvbkNhbmNlbDogKCkgPT4gdm9pZDtcclxuICAgIGZpZWxkczogTW9kZWxGaWVsZFtdO1xyXG4gICAgZm9ybUJ1dHRvbj86IHN0cmluZztcclxufVxyXG5cclxudHlwZSBGb3JtUHJvcHMgPSBJbmplY3RlZEZvcm1Qcm9wcyAmIEFkZGl0aW9uYWxQcm9wcztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VFbWFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICAgIENoYW5nZVBhc3N3b3JkUHJvcHMsXHJcbiAgICBGb3JtUHJvcHNcclxuICAgID4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5DaGFuZ2UgRW1haWwuPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzeW5jQ2hhbmdlRW1haWxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiY2hhbmdlRW1haWxGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzOiBDaGFuZ2VFbWFpbFZpZXdNb2RlbCwgZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRBY3Rpb25zLmNoYW5nZUVtYWlsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL0FjY291bnQvQ2hhbmdlRW1haWwvQ29uZmlybWF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uZmlybWF0aW9uIEVtYWlsIGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxlcnRUeXBlLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlc2V0KFwiY2hhbmdlRW1haWxGb3JtXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLmVycm9yX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsZXJ0VHlwZS5kYW5nZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48TGluayB0bz1cIi9hY2NvdW50XCI+R28gYmFjazwvTGluaz48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmFjY291bnQsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICAoXHJcbiAgICAgICAgZGlzcGF0Y2g6XHJcbiAgICAgICAgICAgIHwgRGlzcGF0Y2g8QWNjb3VudFN0YXRlLkFjY291bnRTdGF0ZT5cclxuICAgICAgICAgICAgfCBEaXNwYXRjaDxBbGVydFN0YXRlLkFsZXJ0U3RhdGU+XHJcbiAgICAgICAgICAgIHwgRGlzcGF0Y2g8U2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZT5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhY2NvdW50QWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICAgICAgICBhbGVydEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCksXHJcbiAgICAgICAgICAgIHNlc3Npb25BY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4pKENoYW5nZUVtYWlsKSBhcyB0eXBlb2YgQ2hhbmdlRW1haWw7XHJcbiIsImltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBMb2FkaW5nUm91dGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNwaW5uZXJ9IHNwaW4gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1JvdXRlO1xyXG4iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NwaW5uZXInO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxMTAnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zMDQgNDhjMCAyNi41MS0yMS40OSA0OC00OCA0OHMtNDgtMjEuNDktNDgtNDggMjEuNDktNDggNDgtNDggNDggMjEuNDkgNDggNDh6bS00OCAzNjhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6bTIwOC0yMDhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6TTk2IDI1NmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4UzAgMjI5LjQ5IDAgMjU2czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4em0xMi45MjIgOTkuMDc4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5MS00OC00OC00OHptMjk0LjE1NiAwYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5LTQ4LTQ4LTQ4ek0xMDguOTIyIDYwLjkyMmMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OTEtNDgtNDgtNDh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0geyAgICAgICAgICAgXG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG4gIFxuZXhwb3J0cy5mYVNwaW5uZXIgPSBleHBvcnRzLmRlZmluaXRpb247ICAgICAgICAgICBcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lOyBcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=