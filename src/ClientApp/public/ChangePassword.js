exports.ids = ["ChangePassword"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ChangePassword.tsx":
/*!*************************************************************!*\
  !*** ./ClientApp/src/components/Account/ChangePassword.tsx ***!
  \*************************************************************/
/*! exports provided: ChangePassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
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












var AsyncChangePasswordForm = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | ChangePasswordForm */ "ChangePasswordForm").then(__webpack_require__.bind(null, /*! ../Account/ChangePasswordForm */ "./ClientApp/src/components/Account/ChangePasswordForm.tsx"));
  },
  modules: ["../Account/ChangePasswordForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../Account/ChangePasswordForm */ "./ClientApp/src/components/Account/ChangePasswordForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var ChangePassword =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ChangePassword, _React$Component);

  function ChangePassword() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ChangePassword.prototype;

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
    }, "Change Password."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AsyncChangePasswordForm, {
      form: "registerForm",
      enableReinitialize: true,
      onSubmit: function onSubmit(values, dispatch) {
        _this.props.accountActions.changePassword(values, function () {
          _this.props.history.push("/");

          _this.props.alertActions.sendAlert("Password has been changed successfully!", _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].success, true);

          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reset"])("changePasswordForm"));

          _this.props.sessionActions.loadToken();
        }, function (error) {
          _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].danger, true);
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/account"
    }, "Go back")))));
  };

  return ChangePassword;
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
})(ChangePassword));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9DaGFuZ2VQYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkaW5nUm91dGUudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNLHVCQUF1QixHQUFHLHFEQUFRLENBQUM7QUFDdkMsUUFBTSxFQUFFO0FBQUEsV0FDTix1TkFETTtBQUFBLEdBRCtCO0FBR3ZDLFNBQU8sRUFBRSxDQUFDLCtCQUFELENBSDhCO0FBSXZDLFNBQU8sRUFBRTtBQUFBLFdBQU0sQ0FBQyxvQkFBb0IsZ0dBQXBCLENBQUQsQ0FBTjtBQUFBLEdBSjhCO0FBS3ZDLFNBQU8sRUFBRTtBQUw4QixDQUFELENBQXhDO0FBc0JBLElBQU0sY0FBTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsU0FJRSxNQUpGLHFCQUlRO0FBQUE7O0FBQ0osV0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQXFDLGtCQUFyQyxDQURGLEVBRUUsb0RBQUMsdUJBQUQsRUFBd0I7QUFDdEIsVUFBSSxFQUFDLGNBRGlCO0FBRXRCLHdCQUFrQixFQUFFLElBRkU7QUFHdEIsY0FBUSxFQUFFLGtCQUFDLE1BQUQsRUFBa0MsUUFBbEMsRUFBOEM7QUFDdEQsYUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYLENBQTBCLGNBQTFCLENBQ0UsTUFERixFQUVFLFlBQUs7QUFDSCxlQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEI7O0FBQ0EsZUFBSSxDQUFDLEtBQUwsQ0FBVyxZQUFYLENBQXdCLFNBQXhCLENBQ0UseUNBREYsRUFFRSxpREFBUyxDQUFDLE9BRlosRUFHRSxJQUhGOztBQUtBLGtCQUFRLENBQUMsd0RBQUssQ0FBQyxvQkFBRCxDQUFOLENBQVI7O0FBQ0EsZUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYLENBQTBCLFNBQTFCO0FBQ0QsU0FYSCxFQVlFLGVBQUssRUFBRztBQUNOLGVBQUksQ0FBQyxLQUFMLENBQVcsWUFBWCxDQUF3QixTQUF4QixDQUNFLEtBQUssQ0FBQyxpQkFEUixFQUVFLGlEQUFTLENBQUMsTUFGWixFQUdFLElBSEY7QUFLRCxTQWxCSDtBQW9CRDtBQXhCcUIsS0FBeEIsQ0FGRixFQTRCVSwrREFBRyxvREFBQyxxREFBRCxFQUFLO0FBQUMsUUFBRSxFQUFDO0FBQUosS0FBTCxFQUFtQixTQUFuQixDQUFILENBNUJWLENBREYsQ0FERixDQURGO0FBcUNELEdBMUNIOztBQUFBO0FBQUEsRUFBb0MsK0NBQXBDO0FBNkNBLCtEQUFlLDJEQUFPLENBQ3BCLFVBQUMsS0FBRDtBQUFBLFNBQTZCLEtBQUssQ0FBQyxPQUFuQztBQUFBLENBRG9CLEVBQ3dCO0FBQzVDLFVBQ0UsUUFERixFQUtJO0FBQ0Y7QUFDQSxTQUFPO0FBQ0wsa0JBQWMsRUFBRSxnRUFBa0IsQ0FBQyw2REFBRCxFQUE4QixRQUE5QixDQUQ3QjtBQUVMLGdCQUFZLEVBQUUsZ0VBQWtCLENBQUMsMkRBQUQsRUFBNEIsUUFBNUIsQ0FGM0I7QUFHTCxrQkFBYyxFQUFFLGdFQUFrQixDQUFDLDhEQUFELEVBQThCLFFBQTlCO0FBSDdCLEdBQVA7QUFLRCxDQWRtQixDQUFQLENBZWIsY0FmYSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBOztJQUVBLFk7Ozs7Ozs7Ozs7O1NBQ1MsTSxxQkFBTTtBQUNYLFdBQ0UsaUVBQ0Usb0RBQUMsOEVBQUQsRUFBZ0I7QUFBQyxVQUFJLEVBQUUscUZBQVA7QUFBa0IsVUFBSSxNQUF0QjtBQUF1QixVQUFJLEVBQUM7QUFBNUIsS0FBaEIsQ0FERixDQURGO0FBS0QsRzs7O0VBUHdCLCtDOztBQVUzQiwrREFBZSxZQUFmLEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7QUFDQTtBQUNBLDRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQyIsImZpbGUiOiJDaGFuZ2VQYXNzd29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgSW5qZWN0ZWRGb3JtUHJvcHMsIHJlc2V0IH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcclxuaW1wb3J0IHtcclxuICBBbGVydFR5cGUsXHJcbiAgRmllbGQgYXMgTW9kZWxGaWVsZCxcclxuICBDaGFuZ2VQYXNzd29yZFZpZXdNb2RlbFxyXG59IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBBY2NvdW50U3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL0FjY291bnRcIjtcclxuaW1wb3J0ICogYXMgQWxlcnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWxlcnRcIjtcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9TZXNzaW9uXCI7XHJcbmltcG9ydCBMb2FkaW5nUm91dGUgZnJvbSBcIi4uL0NvbW1vbi9Mb2FkaW5nUm91dGVcIjtcclxuY29uc3QgQXN5bmNDaGFuZ2VQYXNzd29yZEZvcm0gPSBMb2FkYWJsZSh7XHJcbiAgbG9hZGVyOiAoKSA9PlxyXG4gICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiQ2hhbmdlUGFzc3dvcmRGb3JtXCIgKi8gXCIuLi9BY2NvdW50L0NoYW5nZVBhc3N3b3JkRm9ybVwiKSxcclxuICBtb2R1bGVzOiBbXCIuLi9BY2NvdW50L0NoYW5nZVBhc3N3b3JkRm9ybVwiXSxcclxuICB3ZWJwYWNrOiAoKSA9PiBbcmVxdWlyZS5yZXNvbHZlV2VhayhcIi4uL0FjY291bnQvQ2hhbmdlUGFzc3dvcmRGb3JtXCIpXSxcclxuICBsb2FkaW5nOiBMb2FkaW5nUm91dGVcclxufSk7XHJcblxyXG50eXBlIENoYW5nZVBhc3N3b3JkUHJvcHMgPSBBY2NvdW50U3RhdGUuQWNjb3VudFN0YXRlICYge1xyXG4gIGFjY291bnRBY3Rpb25zOiB0eXBlb2YgQWNjb3VudFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gIGFsZXJ0QWN0aW9uczogdHlwZW9mIEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbiAgc2Vzc2lvbkFjdGlvbnM6IHR5cGVvZiBTZXNzaW9uU3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbn0gJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmludGVyZmFjZSBBZGRpdGlvbmFsUHJvcHMge1xyXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xyXG4gIGZpZWxkczogTW9kZWxGaWVsZFtdO1xyXG4gIGZvcm1CdXR0b24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgRm9ybVByb3BzID0gSW5qZWN0ZWRGb3JtUHJvcHMgJiBBZGRpdGlvbmFsUHJvcHM7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgQ2hhbmdlUGFzc3dvcmRQcm9wcyxcclxuICBGb3JtUHJvcHNcclxuPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGRpc3BsYXktNFwiPkNoYW5nZSBQYXNzd29yZC48L2gyPlxyXG4gICAgICAgICAgICA8QXN5bmNDaGFuZ2VQYXNzd29yZEZvcm1cclxuICAgICAgICAgICAgICBmb3JtPVwicmVnaXN0ZXJGb3JtXCJcclxuICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXM6IENoYW5nZVBhc3N3b3JkVmlld01vZGVsLCBkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50QWN0aW9ucy5jaGFuZ2VQYXNzd29yZChcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxlcnRBY3Rpb25zLnNlbmRBbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiUGFzc3dvcmQgaGFzIGJlZW4gY2hhbmdlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuc3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlc2V0KFwiY2hhbmdlUGFzc3dvcmRGb3JtXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlc3Npb25BY3Rpb25zLmxvYWRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuZGFuZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxMaW5rIHRvPVwiL2FjY291bnRcIj5HbyBiYWNrPC9MaW5rPjwvcD5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmFjY291bnQsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgKFxyXG4gICAgZGlzcGF0Y2g6XHJcbiAgICAgIHwgRGlzcGF0Y2g8QWNjb3VudFN0YXRlLkFjY291bnRTdGF0ZT5cclxuICAgICAgfCBEaXNwYXRjaDxBbGVydFN0YXRlLkFsZXJ0U3RhdGU+XHJcbiAgICAgIHwgRGlzcGF0Y2g8U2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZT5cclxuICApID0+IHtcclxuICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjY291bnRBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWNjb3VudFN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCksXHJcbiAgICAgIGFsZXJ0QWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSxcclxuICAgICAgc2Vzc2lvbkFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhTZXNzaW9uU3RhdGUuYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG4gICAgfTtcclxuICB9XHJcbikoQ2hhbmdlUGFzc3dvcmQpIGFzIHR5cGVvZiBDaGFuZ2VQYXNzd29yZDtcclxuIiwiaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIExvYWRpbmdSb3V0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Bpbm5lcn0gc3BpbiBzaXplPVwiMnhcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUm91dGU7XHJcbiIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc3Bpbm5lcic7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjExMCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTMwNCA0OGMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4cy00OC0yMS40OS00OC00OCAyMS40OS00OCA0OC00OCA0OCAyMS40OSA0OCA0OHptLTQ4IDM2OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHptMjA4LTIwOGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHpNOTYgMjU2YzAtMjYuNTEtMjEuNDktNDgtNDgtNDhTMCAyMjkuNDkgMCAyNTZzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDh6bTEyLjkyMiA5OS4wNzhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDkxLTQ4LTQ4LTQ4em0yOTQuMTU2IDBjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDktNDgtNDgtNDh6TTEwOC45MjIgNjAuOTIyYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5MS00OC00OC00OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7ICAgICAgICAgICBcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcbiAgXG5leHBvcnRzLmZhU3Bpbm5lciA9IGV4cG9ydHMuZGVmaW5pdGlvbjsgICAgICAgICAgIFxuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7IFxuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==