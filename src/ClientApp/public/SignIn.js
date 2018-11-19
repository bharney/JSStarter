exports.ids = ["SignIn"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/SignIn.tsx":
/*!*****************************************************!*\
  !*** ./ClientApp/src/components/Account/SignIn.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./ClientApp/src/models/index.ts");
/* harmony import */ var _store_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/Account */ "./ClientApp/src/store/Account.ts");
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");
/* harmony import */ var _store_Session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/Session */ "./ClientApp/src/store/Session.ts");
/* harmony import */ var _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Common/LoadingRoute */ "./ClientApp/src/components/Common/LoadingRoute.tsx");











var AsyncSigninForm = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | SignInForm */ "SignInForm").then(__webpack_require__.bind(null, /*! ./SignInForm */ "./ClientApp/src/components/Account/SignInForm.tsx"));
  },
  modules: ["./SignInForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./SignInForm */ "./ClientApp/src/components/Account/SignInForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_10__["default"]
});

var SignIn =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SignIn, _React$Component);

  function SignIn() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SignIn.prototype;

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
    }, "Sign-In."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AsyncSigninForm, {
      form: "signinForm",
      onSubmit: function onSubmit(values) {
        _this.props.accountActions.login(values, function () {
          _this.props.history.push("/");

          _this.props.alertActions.sendAlert("Signed in successfully!", _models__WEBPACK_IMPORTED_MODULE_6__["AlertType"].success, true);

          _this.props.sessionActions.loadToken();
        }, function (error) {
          _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_6__["AlertType"].danger, true);
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "bottom text-center"
    }, "New here? ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/register"
    }, "Register")))));
  };

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
})(SignIn));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9TaWduSW4udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9Db21tb24vTG9hZGluZ1JvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0sZUFBZSxHQUFHLHFEQUFRLENBQUM7QUFDL0IsUUFBTSxFQUFFO0FBQUEsV0FBTSw4S0FBTjtBQUFBLEdBRHVCO0FBRS9CLFNBQU8sRUFBRSxDQUFDLGNBQUQsQ0FGc0I7QUFHL0IsU0FBTyxFQUFFO0FBQUEsV0FBTSxDQUFDLG9CQUFvQix1RUFBcEIsQ0FBRCxDQUFOO0FBQUEsR0FIc0I7QUFJL0IsU0FBTyxFQUFFO0FBSnNCLENBQUQsQ0FBaEM7O0lBcUJBLE07Ozs7Ozs7Ozs7O1NBQ0UsTSxxQkFBTTtBQUFBOztBQUNKLFdBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFxQyxVQUFyQyxDQURGLEVBRUUsb0RBQUMsZUFBRCxFQUFnQjtBQUNkLFVBQUksRUFBQyxZQURTO0FBRWQsY0FBUSxFQUFFLGtCQUFDLE1BQUQsRUFBMkI7QUFDbkMsYUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEtBQTFCLENBQ0UsTUFERixFQUVFLFlBQUs7QUFDSCxlQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEI7O0FBQ0EsZUFBSSxDQUFDLEtBQUwsQ0FBVyxZQUFYLENBQXdCLFNBQXhCLENBQ0UseUJBREYsRUFFRSxpREFBUyxDQUFDLE9BRlosRUFHRSxJQUhGOztBQUtBLGVBQUksQ0FBQyxLQUFMLENBQVcsY0FBWCxDQUEwQixTQUExQjtBQUNELFNBVkgsRUFXRSxlQUFLLEVBQUc7QUFDTixlQUFJLENBQUMsS0FBTCxDQUFXLFlBQVgsQ0FBd0IsU0FBeEIsQ0FDRSxLQUFLLENBQUMsaUJBRFIsRUFFRSxpREFBUyxDQUFDLE1BRlosRUFHRSxJQUhGO0FBS0QsU0FqQkg7QUFtQkQ7QUF0QmEsS0FBaEIsQ0FGRixFQTBCRTtBQUFLLGVBQVMsRUFBQztBQUFmLE8sWUFBQSxFQUNZLG9EQUFDLHFEQUFELEVBQUs7QUFBQyxRQUFFLEVBQUM7QUFBSixLQUFMLEVBQW9CLFVBQXBCLENBRFosQ0ExQkYsQ0FERixDQURGLENBREY7QUFvQ0QsRzs7O0VBdENrQiwrQzs7QUF5Q3JCLCtEQUFlLDJEQUFPLENBQ3BCLFVBQUMsS0FBRDtBQUFBLFNBQTZCLEtBQUssQ0FBQyxPQUFuQztBQUFBLENBRG9CLEVBQ3dCO0FBQzVDLFVBQ0UsUUFERixFQUtJO0FBQ0Y7QUFDQSxTQUFPO0FBQ0wsa0JBQWMsRUFBRSxnRUFBa0IsQ0FBQyw2REFBRCxFQUE4QixRQUE5QixDQUQ3QjtBQUVMLGdCQUFZLEVBQUUsZ0VBQWtCLENBQUMsMkRBQUQsRUFBNEIsUUFBNUIsQ0FGM0I7QUFHTCxrQkFBYyxFQUFFLGdFQUFrQixDQUFDLDZEQUFELEVBQThCLFFBQTlCO0FBSDdCLEdBQVA7QUFLRCxDQWRtQixDQUFQLENBZWIsTUFmYSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBOztJQUVBLFk7Ozs7Ozs7Ozs7O1NBQ1MsTSxxQkFBTTtBQUNYLFdBQ0UsaUVBQ0Usb0RBQUMsOEVBQUQsRUFBZ0I7QUFBQyxVQUFJLEVBQUUscUZBQVA7QUFBa0IsVUFBSSxNQUF0QjtBQUF1QixVQUFJLEVBQUM7QUFBNUIsS0FBaEIsQ0FERixDQURGO0FBS0QsRzs7O0VBUHdCLCtDOztBQVUzQiwrREFBZSxZQUFmLEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7QUFDQTtBQUNBLDRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQyIsImZpbGUiOiJTaWduSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEluamVjdGVkRm9ybVByb3BzIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcclxuaW1wb3J0IHsgQWxlcnRUeXBlLCBGaWVsZCBhcyBNb2RlbEZpZWxkLCBMb2dpblZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBBY2NvdW50U3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL0FjY291bnRcIjtcclxuaW1wb3J0ICogYXMgQWxlcnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWxlcnRcIjtcclxuaW1wb3J0ICogYXMgU2Vzc2lvblN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9TZXNzaW9uXCI7XHJcbmltcG9ydCBMb2FkaW5nUm91dGUgZnJvbSBcIi4uL0NvbW1vbi9Mb2FkaW5nUm91dGVcIjtcclxuXHJcbmNvbnN0IEFzeW5jU2lnbmluRm9ybSA9IExvYWRhYmxlKHtcclxuICBsb2FkZXI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIlNpZ25JbkZvcm1cIiAqLyBcIi4vU2lnbkluRm9ybVwiKSxcclxuICBtb2R1bGVzOiBbXCIuL1NpZ25JbkZvcm1cIl0sXHJcbiAgd2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoXCIuL1NpZ25JbkZvcm1cIildLFxyXG4gIGxvYWRpbmc6IExvYWRpbmdSb3V0ZVxyXG59KTtcclxuXHJcbnR5cGUgVXNlck1lbnVQcm9wcyA9IEFjY291bnRTdGF0ZS5BY2NvdW50U3RhdGUgJiB7XHJcbiAgYWNjb3VudEFjdGlvbnM6IHR5cGVvZiBBY2NvdW50U3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbiAgYWxlcnRBY3Rpb25zOiB0eXBlb2YgQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICBzZXNzaW9uQWN0aW9uczogdHlwZW9mIFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxufSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+O1xyXG5cclxuaW50ZXJmYWNlIEFkZGl0aW9uYWxQcm9wcyB7XHJcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XHJcbiAgZmllbGRzOiBNb2RlbEZpZWxkW107XHJcbiAgZm9ybUJ1dHRvbj86IHN0cmluZztcclxufVxyXG5cclxudHlwZSBGb3JtUHJvcHMgPSBJbmplY3RlZEZvcm1Qcm9wcyAmIEFkZGl0aW9uYWxQcm9wcztcclxuXHJcbmNsYXNzIFNpZ25JbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyTWVudVByb3BzLCBGb3JtUHJvcHM+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCBjb2wtbWQtNiBjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZGlzcGxheS00XCI+U2lnbi1Jbi48L2gyPlxyXG4gICAgICAgICAgICA8QXN5bmNTaWduaW5Gb3JtXHJcbiAgICAgICAgICAgICAgZm9ybT1cInNpZ25pbkZvcm1cIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzOiBMb2dpblZpZXdNb2RlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50QWN0aW9ucy5sb2dpbihcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxlcnRBY3Rpb25zLnNlbmRBbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiU2lnbmVkIGluIHN1Y2Nlc3NmdWxseSFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIEFsZXJ0VHlwZS5zdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uQWN0aW9ucy5sb2FkVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxlcnRBY3Rpb25zLnNlbmRBbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yLmVycm9yX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgQWxlcnRUeXBlLmRhbmdlcixcclxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgTmV3IGhlcmU/IDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50LCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gIChcclxuICAgIGRpc3BhdGNoOlxyXG4gICAgICB8IERpc3BhdGNoPEFjY291bnRTdGF0ZS5BY2NvdW50U3RhdGU+XHJcbiAgICAgIHwgRGlzcGF0Y2g8QWxlcnRTdGF0ZS5BbGVydFN0YXRlPlxyXG4gICAgICB8IERpc3BhdGNoPFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RhdGU+XHJcbiAgKSA9PiB7XHJcbiAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY2NvdW50QWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjY291bnRTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICBhbGVydEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCksXHJcbiAgICAgIHNlc3Npb25BY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxuICAgIH07XHJcbiAgfVxyXG4pKFNpZ25JbikgYXMgdHlwZW9mIFNpZ25JbjtcclxuIiwiaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIExvYWRpbmdSb3V0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Bpbm5lcn0gc3BpbiBzaXplPVwiMnhcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUm91dGU7XHJcbiIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc3Bpbm5lcic7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjExMCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTMwNCA0OGMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4cy00OC0yMS40OS00OC00OCAyMS40OS00OCA0OC00OCA0OCAyMS40OSA0OCA0OHptLTQ4IDM2OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHptMjA4LTIwOGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHpNOTYgMjU2YzAtMjYuNTEtMjEuNDktNDgtNDgtNDhTMCAyMjkuNDkgMCAyNTZzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDh6bTEyLjkyMiA5OS4wNzhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDkxLTQ4LTQ4LTQ4em0yOTQuMTU2IDBjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDktNDgtNDgtNDh6TTEwOC45MjIgNjAuOTIyYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5MS00OC00OC00OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7ICAgICAgICAgICBcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcbiAgXG5leHBvcnRzLmZhU3Bpbm5lciA9IGV4cG9ydHMuZGVmaW5pdGlvbjsgICAgICAgICAgIFxuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7IFxuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==