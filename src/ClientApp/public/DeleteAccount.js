exports.ids = ["DeleteAccount"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/DeleteAccount.tsx":
/*!************************************************************!*\
  !*** ./ClientApp/src/components/Account/DeleteAccount.tsx ***!
  \************************************************************/
/*! exports provided: DeleteAccount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccount", function() { return DeleteAccount; });
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












var AsyncDeleteAccountForm = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | DeleteAccountForm */ "DeleteAccountForm").then(__webpack_require__.bind(null, /*! ../Account/DeleteAccountForm */ "./ClientApp/src/components/Account/DeleteAccountForm.tsx"));
  },
  modules: ["../Account/DeleteAccountForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../Account/DeleteAccountForm */ "./ClientApp/src/components/Account/DeleteAccountForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var DeleteAccount =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(DeleteAccount, _React$Component);

  function DeleteAccount() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DeleteAccount.prototype;

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
    }, "Delete Account."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
      className: "text-center lead"
    }, "To delete your account please enter your Email address in the field below."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AsyncDeleteAccountForm, {
      form: "deleteAccountForm",
      enableReinitialize: true,
      onSubmit: function onSubmit(values, dispatch) {
        _this.props.accountActions.deleteAccount(values, function () {
          _this.props.history.push("/");

          _this.props.alertActions.sendAlert("Your account has been deleted.", _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].danger, true);

          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reset"])("deleteAccountForm"));

          _this.props.sessionActions.getToken();
        }, function (error) {
          _this.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_7__["AlertType"].danger, true);
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/account"
    }, "Go back")))));
  };

  return DeleteAccount;
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
})(DeleteAccount));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9EZWxldGVBY2NvdW50LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRpbmdSb3V0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU0sc0JBQXNCLEdBQUcscURBQVEsQ0FBQztBQUN0QyxRQUFNLEVBQUU7QUFBQSxXQUNOLG1OQURNO0FBQUEsR0FEOEI7QUFHdEMsU0FBTyxFQUFFLENBQUMsOEJBQUQsQ0FINkI7QUFJdEMsU0FBTyxFQUFFO0FBQUEsV0FBTSxDQUFDLG9CQUFvQiw4RkFBcEIsQ0FBRCxDQUFOO0FBQUEsR0FKNkI7QUFLdEMsU0FBTyxFQUFFO0FBTDZCLENBQUQsQ0FBdkM7QUFzQkEsSUFBTSxhQUFOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxTQUlFLE1BSkYscUJBSVE7QUFBQTs7QUFDSixXQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBcUMsaUJBQXJDLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBQztBQUFiLE9BQStCLDRFQUEvQixDQUZGLEVBTUUsb0RBQUMsc0JBQUQsRUFBdUI7QUFDckIsVUFBSSxFQUFDLG1CQURnQjtBQUVyQix3QkFBa0IsRUFBRSxJQUZDO0FBR3JCLGNBQVEsRUFBRSxrQkFBQyxNQUFELEVBQWlDLFFBQWpDLEVBQTZDO0FBQ3JELGFBQUksQ0FBQyxLQUFMLENBQVcsY0FBWCxDQUEwQixhQUExQixDQUNFLE1BREYsRUFFSSxZQUFLO0FBQ0wsZUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQW5CLENBQXdCLEdBQXhCOztBQUNBLGVBQUksQ0FBQyxLQUFMLENBQVcsWUFBWCxDQUF3QixTQUF4QixDQUNFLGdDQURGLEVBRUUsaURBQVMsQ0FBQyxNQUZaLEVBR0UsSUFIRjs7QUFLSSxrQkFBUSxDQUFDLHdEQUFLLENBQUMsbUJBQUQsQ0FBTixDQUFSOztBQUNBLGVBQUksQ0FBQyxLQUFMLENBQVcsY0FBWCxDQUEwQixRQUExQjtBQUNMLFNBWEgsRUFZRSxlQUFLLEVBQUc7QUFDTixlQUFJLENBQUMsS0FBTCxDQUFXLFlBQVgsQ0FBd0IsU0FBeEIsQ0FDRSxLQUFLLENBQUMsaUJBRFIsRUFFRSxpREFBUyxDQUFDLE1BRlosRUFHRSxJQUhGO0FBS0QsU0FsQkg7QUFvQkQ7QUF4Qm9CLEtBQXZCLENBTkYsRUFnQ1UsK0RBQUcsb0RBQUMscURBQUQsRUFBSztBQUFDLFFBQUUsRUFBQztBQUFKLEtBQUwsRUFBbUIsU0FBbkIsQ0FBSCxDQWhDVixDQURGLENBREYsQ0FERjtBQXdDRCxHQTdDSDs7QUFBQTtBQUFBLEVBQW1DLCtDQUFuQztBQWdEQSwrREFBZSwyREFBTyxDQUNwQixVQUFDLEtBQUQ7QUFBQSxTQUE2QixLQUFLLENBQUMsT0FBbkM7QUFBQSxDQURvQixFQUN3QjtBQUM1QyxVQUNFLFFBREYsRUFLSTtBQUNGO0FBQ0EsU0FBTztBQUNMLGtCQUFjLEVBQUUsZ0VBQWtCLENBQUMsNkRBQUQsRUFBOEIsUUFBOUIsQ0FEN0I7QUFFTCxnQkFBWSxFQUFFLGdFQUFrQixDQUFDLDJEQUFELEVBQTRCLFFBQTVCLENBRjNCO0FBR0wsa0JBQWMsRUFBRSxnRUFBa0IsQ0FBQyw4REFBRCxFQUE4QixRQUE5QjtBQUg3QixHQUFQO0FBS0QsQ0FkbUIsQ0FBUCxDQWViLGFBZmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTs7SUFFQSxZOzs7Ozs7Ozs7OztTQUNTLE0scUJBQU07QUFDWCxXQUNFLGlFQUNFLG9EQUFDLDhFQUFELEVBQWdCO0FBQUMsVUFBSSxFQUFFLHFGQUFQO0FBQWtCLFVBQUksTUFBdEI7QUFBdUIsVUFBSSxFQUFDO0FBQTVCLEtBQWhCLENBREYsQ0FERjtBQUtELEc7OztFQVB3QiwrQzs7QUFVM0IsK0RBQWUsWUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0MiLCJmaWxlIjoiRGVsZXRlQWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgSW5qZWN0ZWRGb3JtUHJvcHMsIHJlc2V0IH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcclxuaW1wb3J0IHtcclxuICBBbGVydFR5cGUsXHJcbiAgRGVsZXRlQWNjb3VudFZpZXdNb2RlbCxcclxuICBGaWVsZCBhcyBNb2RlbEZpZWxkXHJcbn0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIEFjY291bnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWNjb3VudFwiO1xyXG5pbXBvcnQgKiBhcyBBbGVydFN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9BbGVydFwiO1xyXG5pbXBvcnQgKiBhcyBTZXNzaW9uU3RhdGUgZnJvbSBcIi4uLy4uL3N0b3JlL1Nlc3Npb25cIjtcclxuaW1wb3J0IExvYWRpbmdSb3V0ZSBmcm9tIFwiLi4vQ29tbW9uL0xvYWRpbmdSb3V0ZVwiO1xyXG5jb25zdCBBc3luY0RlbGV0ZUFjY291bnRGb3JtID0gTG9hZGFibGUoe1xyXG4gIGxvYWRlcjogKCkgPT5cclxuICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkRlbGV0ZUFjY291bnRGb3JtXCIgKi8gXCIuLi9BY2NvdW50L0RlbGV0ZUFjY291bnRGb3JtXCIpLFxyXG4gIG1vZHVsZXM6IFtcIi4uL0FjY291bnQvRGVsZXRlQWNjb3VudEZvcm1cIl0sXHJcbiAgd2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoXCIuLi9BY2NvdW50L0RlbGV0ZUFjY291bnRGb3JtXCIpXSxcclxuICBsb2FkaW5nOiBMb2FkaW5nUm91dGVcclxufSk7XHJcblxyXG50eXBlIENoYW5nZVBhc3N3b3JkUHJvcHMgPSBBY2NvdW50U3RhdGUuQWNjb3VudFN0YXRlICYge1xyXG4gIGFjY291bnRBY3Rpb25zOiB0eXBlb2YgQWNjb3VudFN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gIGFsZXJ0QWN0aW9uczogdHlwZW9mIEFsZXJ0U3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbiAgc2Vzc2lvbkFjdGlvbnM6IHR5cGVvZiBTZXNzaW9uU3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcbn0gJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmludGVyZmFjZSBBZGRpdGlvbmFsUHJvcHMge1xyXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xyXG4gIGZpZWxkczogTW9kZWxGaWVsZFtdO1xyXG4gIGZvcm1CdXR0b24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgRm9ybVByb3BzID0gSW5qZWN0ZWRGb3JtUHJvcHMgJiBBZGRpdGlvbmFsUHJvcHM7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlQWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBDaGFuZ2VQYXNzd29yZFByb3BzLFxyXG4gIEZvcm1Qcm9wc1xyXG4+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCBjb2wtbGctN1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZGlzcGxheS00XCI+RGVsZXRlIEFjY291bnQuPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGVhZFwiPlxyXG4gICAgICAgICAgICAgIFRvIGRlbGV0ZSB5b3VyIGFjY291bnQgcGxlYXNlIGVudGVyIHlvdXIgRW1haWwgYWRkcmVzcyBpbiB0aGVcclxuICAgICAgICAgICAgICBmaWVsZCBiZWxvdy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8QXN5bmNEZWxldGVBY2NvdW50Rm9ybVxyXG4gICAgICAgICAgICAgIGZvcm09XCJkZWxldGVBY2NvdW50Rm9ybVwiXHJcbiAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzOiBEZWxldGVBY2NvdW50Vmlld01vZGVsLCBkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50QWN0aW9ucy5kZWxldGVBY2NvdW50KFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsZXJ0QWN0aW9ucy5zZW5kQWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgYWNjb3VudCBoYXMgYmVlbiBkZWxldGVkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgQWxlcnRUeXBlLmRhbmdlcixcclxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZXNldChcImRlbGV0ZUFjY291bnRGb3JtXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uQWN0aW9ucy5nZXRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuZGFuZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxMaW5rIHRvPVwiL2FjY291bnRcIj5HbyBiYWNrPC9MaW5rPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUuYWNjb3VudCwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAoXHJcbiAgICBkaXNwYXRjaDpcclxuICAgICAgfCBEaXNwYXRjaDxBY2NvdW50U3RhdGUuQWNjb3VudFN0YXRlPlxyXG4gICAgICB8IERpc3BhdGNoPEFsZXJ0U3RhdGUuQWxlcnRTdGF0ZT5cclxuICAgICAgfCBEaXNwYXRjaDxTZXNzaW9uU3RhdGUuU2Vzc2lvblN0YXRlPlxyXG4gICkgPT4ge1xyXG4gICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWNjb3VudEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY2NvdW50U3RhdGUuYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSxcclxuICAgICAgYWxlcnRBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICBzZXNzaW9uQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKFNlc3Npb25TdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbiAgICB9O1xyXG4gIH1cclxuKShEZWxldGVBY2NvdW50KSBhcyB0eXBlb2YgRGVsZXRlQWNjb3VudDtcclxuIiwiaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIExvYWRpbmdSb3V0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Bpbm5lcn0gc3BpbiBzaXplPVwiMnhcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUm91dGU7XHJcbiIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc3Bpbm5lcic7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjExMCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTMwNCA0OGMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4cy00OC0yMS40OS00OC00OCAyMS40OS00OCA0OC00OCA0OCAyMS40OSA0OCA0OHptLTQ4IDM2OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHptMjA4LTIwOGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHpNOTYgMjU2YzAtMjYuNTEtMjEuNDktNDgtNDgtNDhTMCAyMjkuNDkgMCAyNTZzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDh6bTEyLjkyMiA5OS4wNzhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDkxLTQ4LTQ4LTQ4em0yOTQuMTU2IDBjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDktNDgtNDgtNDh6TTEwOC45MjIgNjAuOTIyYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5MS00OC00OC00OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7ICAgICAgICAgICBcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcbiAgXG5leHBvcnRzLmZhU3Bpbm5lciA9IGV4cG9ydHMuZGVmaW5pdGlvbjsgICAgICAgICAgIFxuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7IFxuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==