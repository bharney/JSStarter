exports.ids = ["EditProfile"];
exports.modules = {

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

/***/ "./ClientApp/src/components/Profile/EditProfile.tsx":
/*!**********************************************************!*\
  !*** ./ClientApp/src/components/Profile/EditProfile.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faImage */ "./node_modules/@fortawesome/free-solid-svg-icons/faImage.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faImage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faImage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ "./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUser */ "./node_modules/@fortawesome/free-solid-svg-icons/faUser.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models */ "./ClientApp/src/models/index.ts");
/* harmony import */ var _store_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/Alert */ "./ClientApp/src/store/Alert.ts");
/* harmony import */ var _store_Profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/Profile */ "./ClientApp/src/store/Profile.ts");
/* harmony import */ var _styles_formStepper_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styles/formStepper.scss */ "./ClientApp/src/styles/formStepper.scss");
/* harmony import */ var _styles_formStepper_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_formStepper_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Common_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Common/Loading */ "./ClientApp/src/components/Common/Loading.tsx");
/* harmony import */ var _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Common/LoadingRoute */ "./ClientApp/src/components/Common/LoadingRoute.tsx");

















var ProfileImageForm = react_loadable__WEBPACK_IMPORTED_MODULE_8___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | ProfileImageForm */ "ProfileImageForm").then(__webpack_require__.bind(null, /*! ./ProfileImageForm */ "./ClientApp/src/components/Profile/ProfileImageForm.tsx"));
  },
  modules: ["./ProfileImageForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./ProfileImageForm */ "./ClientApp/src/components/Profile/ProfileImageForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_16__["default"]
});
var ProfileNameForm = react_loadable__WEBPACK_IMPORTED_MODULE_8___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | ProfileNameForm */ "ProfileNameForm").then(__webpack_require__.bind(null, /*! ./ProfileNameForm */ "./ClientApp/src/components/Profile/ProfileNameForm.tsx"));
  },
  modules: ["./ProfileNameForm"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./ProfileNameForm */ "./ClientApp/src/components/Profile/ProfileNameForm.tsx")];
  },
  loading: _Common_LoadingRoute__WEBPACK_IMPORTED_MODULE_16__["default"]
}); // At runtime, Redux will merge together...

var EditProfile =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(EditProfile, _React$Component);

  function EditProfile() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.steps = [{
      name: "Personal Info",
      icon: _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_5__["faUser"]
    }, {
      name: "Upload Profile Image",
      icon: _fortawesome_free_solid_svg_icons_faImage__WEBPACK_IMPORTED_MODULE_3__["faImage"]
    }];
    _this.state = {
      page: 1,
      showPreviousBtn: false,
      showNextBtn: true,
      compState: 0,
      navState: _this.getNavStates(0, _this.steps.length),
      isLoading: false
    };

    _this.nextPage = function () {
      _this.setState(function (currentState) {
        return {
          page: currentState.page + 1
        };
      });

      _this.setNavState(_this.state.compState + 1);

      window.scrollTo(0, 0);
    };

    _this.previousPage = function () {
      _this.setState(function (currentState) {
        return {
          page: currentState.page - 1
        };
      });

      if (_this.state.compState > 0) {
        _this.setNavState(_this.state.compState - 1);
      }

      window.scrollTo(0, 0);
    };

    _this.checkNavState = function (currentStep) {
      if (currentStep > 0 && currentStep < _this.steps.length - 1) {
        _this.setState({
          showPreviousBtn: true,
          showNextBtn: true
        });
      } else if (currentStep === 0) {
        _this.setState({
          showPreviousBtn: false,
          showNextBtn: true
        });
      } else {
        _this.setState({
          showPreviousBtn: true,
          showNextBtn: false
        });
      }
    };

    _this.setNavState = function (next) {
      _this.setState({
        navState: _this.getNavStates(next, _this.steps.length)
      });

      if (next < _this.steps.length) {
        _this.setState({
          compState: next
        });
      }

      _this.checkNavState(next);
    };

    _this.handleKeyDown = function (evt) {
      if (evt.which === 13) {
        _this.nextPage();
      }
    };

    _this.moveToPage = function (evt) {
      if (evt.currentTarget.value <= _this.state.compState || evt.currentTarget.value == 1 || evt.currentTarget.value == 0) {
        if (evt.currentTarget.value === _this.steps.length - 1 && _this.state.compState === _this.steps.length - 1) {
          _this.setNavState(_this.steps.length - 1);

          _this.setState({
            page: _this.steps.length
          });
        } else {
          _this.setNavState(evt.currentTarget.value);

          _this.setState({
            page: evt.currentTarget.value + 1
          });
        }
      }

      window.scrollTo(0, 0);
    };

    _this.getClassName = function (className, i) {
      return className + "-" + _this.state.navState.styles[i];
    };

    _this.getIcon = function (className, i) {
      if (i < _this.state.compState) {
        return _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
      } else {
        return className;
      }
    };

    return _this;
  }

  var _proto = EditProfile.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.profileActions.getProfile();
  };

  _proto.getNavStates = function getNavStates(indx, length) {
    var styles = [];

    for (var i = 0; i < length; i++) {
      if (i < indx) {
        styles.push("done");
      } else if (i === indx) {
        styles.push("doing");
      } else {
        styles.push("todo");
      }
    }

    return {
      current: indx,
      styles: styles
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var profile = this.props.profile;
    var _this$state = this.state,
        page = _this$state.page,
        isLoading = _this$state.isLoading;
    return isLoading ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_Common_Loading__WEBPACK_IMPORTED_MODULE_15__["default"], null) : react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      className: "container pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      className: "row justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      key: "checkoutheader",
      className: "col-12 form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("h2", {
      className: "text-center display-4"
    }, "Profile.")), react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      className: "col-12 col-sm-12 col-md-9 col-lg-7 form-wrapper pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      key: "checkoutSteps",
      className: "row multi-step",
      onKeyDown: this.handleKeyDown
    }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      className: "col-12"
    }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("ol", {
      className: "progtrckr"
    }, this.steps.map(function (s, i) {
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("li", {
        className: _this2.getClassName("progtrckr", i),
        onClick: function onClick(e) {
          return _this2.moveToPage(e);
        },
        key: i,
        value: i
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        className: "prog-icon svg-inline--fa fa-w-16 fa-lg",
        size: "1x",
        icon: _this2.getIcon(_this2.steps[i].icon, i)
      }), react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", {
        className: "step-title"
      }, _this2.steps[i].name));
    })))), react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      className: "row justify-content-center pt-4"
    }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
      className: "col-12 col-sm-10 col-md-8 col-lg-7 form-wrapper"
    }, isLoading && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "svg-inline--fa fa-w-16 fa-lg",
      size: "1x",
      style: {
        position: "absolute",
        top: "10vh",
        left: "50%",
        fontSize: "45px"
      },
      icon: _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_4__["faSpinner"],
      spin: true
    }), page === 1 && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](ProfileNameForm, {
      initialValues: profile,
      onSubmit: function onSubmit(values) {
        _this2.nextPage();
      }
    }), page === 2 && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](ProfileImageForm, {
      previousPage: this.previousPage,
      initialValues: profile,
      onSubmit: function onSubmit(values) {
        window.scrollTo(0, 0);

        _this2.setState({
          isLoading: true
        });

        _this2.props.profileActions.updateProfile(values, function () {
          _this2.props.alertActions.sendAlert("Your profile was saved successfully.", _models__WEBPACK_IMPORTED_MODULE_11__["AlertType"].success, true);

          _this2.props.history.push("/Profile");
        }, function (error) {
          _this2.props.alertActions.sendAlert(error.error_description, _models__WEBPACK_IMPORTED_MODULE_11__["AlertType"].danger, true);
        });
      }
    }))))));
  };

  return EditProfile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state.profile;
}, function (dispatch) {
  return {
    profileActions: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_store_Profile__WEBPACK_IMPORTED_MODULE_13__["actionCreators"], dispatch),
    alertActions: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_store_Alert__WEBPACK_IMPORTED_MODULE_12__["actionCreators"], dispatch)
  };
})(EditProfile));

/***/ }),

/***/ "./ClientApp/src/styles/formStepper.scss":
/*!***********************************************!*\
  !*** ./ClientApp/src/styles/formStepper.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/sass-loader/lib/loader.js!./formStepper.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/src/styles/formStepper.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/src/styles/formStepper.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./ClientApp/src/styles/formStepper.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9Db21tb24vTG9hZGluZ1JvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9FZGl0UHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NyYy9zdHlsZXMvZm9ybVN0ZXBwZXIuc2Nzcz83NWE3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zcmMvc3R5bGVzL2Zvcm1TdGVwcGVyLnNjc3M/M2E1MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRUEsTzs7Ozs7Ozs7Ozs7U0FDVyxNLHFCQUFNO0FBQ1QsV0FBTztBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFnQyxXQUFLLEVBQUU7QUFBRSxjQUFNLEVBQUU7QUFBVjtBQUF2QyxPQUNILG9EQUFDLDhFQUFELEVBQWdCO0FBQ1osZUFBUyxFQUFDLDhCQURFO0FBRVosVUFBSSxFQUFDLElBRk87QUFHWixXQUFLLEVBQUU7QUFDSCxnQkFBUSxFQUFFLFVBRFA7QUFFSCxXQUFHLEVBQUUsS0FGRjtBQUdILFlBQUksRUFBRSxLQUhIO0FBSUgsZ0JBQVEsRUFBRTtBQUpQLE9BSEs7QUFTWixVQUFJLEVBQUUscUZBVE07QUFVWixVQUFJO0FBVlEsS0FBaEIsQ0FERyxDQUFQO0FBY0gsRzs7O0VBaEJpQiwrQzs7QUFtQnRCLCtEQUFlLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0lBRUEsWTs7Ozs7Ozs7Ozs7U0FDUyxNLHFCQUFNO0FBQ1gsV0FDRSxpRUFDRSxvREFBQyw4RUFBRCxFQUFnQjtBQUFDLFVBQUksRUFBRSxxRkFBUDtBQUFrQixVQUFJLE1BQXRCO0FBQXVCLFVBQUks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QUFDTixnQkFBSSxDQUFDLEtBQUwsQ0FBVyxZQUFYLENBQXdCLFNBQXhCLENBQ0UsS0FBSyxDQUFDLGlCQURSLEVBRUUsa0RBQVMsQ0FBQyxNQUZaLEVBR0UsSUFIRjtBQUtELFNBaEJIO0FBa0JEO0FBeEJjLEtBQWpCLENBeEJKLENBREYsQ0ExQkYsQ0FKRixDQURGLENBSEY7QUE0RkQsRzs7O0VBN011QiwrQzs7QUFnTjFCLCtEQUFlLDJEQUFPLENBQ3BCLFVBQUMsS0FBRDtBQUFBLFNBQTZCLEtBQUssQ0FBQyxPQUFuQztBQUFBLENBRG9CLEVBRXBCLFVBQ0UsUUFERixFQUtJO0FBQ0YsU0FBTztBQUNMLGtCQUFjLEVBQUUsaUVBQWtCLENBQUMsOERBQUQsRUFBOEIsUUFBOUIsQ0FEN0I7QUFFTCxnQkFBWSxFQUFFLGlFQUFrQixDQUFDLDREQUFELEVBQTRCLFFBQTVCO0FBRjNCLEdBQVA7QUFJRCxDQVptQixDQUFQLENBYWIsV0FiYSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDMVBBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWTs7Ozs7Ozs7Ozs7QUNkQSx1QyIsImZpbGUiOiJFZGl0UHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuY2xhc3MgTG9hZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTRcIiBzdHlsZT17eyBoZWlnaHQ6IFwiNzB2aFwiIH19PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS13LTE2IGZhLWxnXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCIxeFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjd2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNDVweFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTcGlubmVyfVxyXG4gICAgICAgICAgICAgICAgc3BpblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZzsiLCJpbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgTG9hZGluZ1JvdXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzcGluIHNpemU9XCIyeFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSb3V0ZTtcclxuIiwiaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVja1wiO1xyXG5pbXBvcnQgeyBmYUltYWdlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUltYWdlXCI7XHJcbmltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyXCI7XHJcbmltcG9ydCB7IGZhVXNlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFVc2VyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBBbGVydFR5cGUsIFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgQWxlcnRTdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvQWxlcnRcIjtcclxuaW1wb3J0ICogYXMgUHJvZmlsZVN0YXRlIGZyb20gXCIuLi8uLi9zdG9yZS9Qcm9maWxlXCI7XHJcbmltcG9ydCAqIGFzIFNlc3Npb25TdGF0ZSBmcm9tIFwiLi4vLi4vc3RvcmUvU2Vzc2lvblwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9ybVN0ZXBwZXIuc2Nzc1wiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vQ29tbW9uL0xvYWRpbmdcIjtcclxuaW1wb3J0IExvYWRpbmdSb3V0ZSBmcm9tIFwiLi4vQ29tbW9uL0xvYWRpbmdSb3V0ZVwiO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlRm9ybSA9IExvYWRhYmxlKHtcclxuICBsb2FkZXI6ICgpID0+XHJcbiAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJQcm9maWxlSW1hZ2VGb3JtXCIgKi8gXCIuL1Byb2ZpbGVJbWFnZUZvcm1cIiksXHJcbiAgbW9kdWxlczogW1wiLi9Qcm9maWxlSW1hZ2VGb3JtXCJdLFxyXG4gIHdlYnBhY2s6ICgpID0+IFtyZXF1aXJlLnJlc29sdmVXZWFrKFwiLi9Qcm9maWxlSW1hZ2VGb3JtXCIpXSxcclxuICBsb2FkaW5nOiBMb2FkaW5nUm91dGVcclxufSk7XHJcbmNvbnN0IFByb2ZpbGVOYW1lRm9ybSA9IExvYWRhYmxlKHtcclxuICBsb2FkZXI6ICgpID0+XHJcbiAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJQcm9maWxlTmFtZUZvcm1cIiAqLyBcIi4vUHJvZmlsZU5hbWVGb3JtXCIpLFxyXG4gIG1vZHVsZXM6IFtcIi4vUHJvZmlsZU5hbWVGb3JtXCJdLFxyXG4gIHdlYnBhY2s6ICgpID0+IFtyZXF1aXJlLnJlc29sdmVXZWFrKFwiLi9Qcm9maWxlTmFtZUZvcm1cIildLFxyXG4gIGxvYWRpbmc6IExvYWRpbmdSb3V0ZVxyXG59KTtcclxuXHJcbnR5cGUgUHJvZmlsZVByb3BzID0gUHJvZmlsZVN0YXRlLlByb2ZpbGVTdGF0ZSAmXHJcbiAgU2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZSAmIHtcclxuICAgIHByb2ZpbGVBY3Rpb25zOiB0eXBlb2YgUHJvZmlsZVN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gICAgYWxlcnRBY3Rpb25zOiB0eXBlb2YgQWxlcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuICAgIHNlc3Npb25BY3Rpb25zOiB0eXBlb2YgU2Vzc2lvblN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG4gIH0gJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxyXG5cclxuY2xhc3MgRWRpdFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvZmlsZVByb3BzLCBhbnk+IHtcclxuICBzdGVwcyA9IFtcclxuICAgIHsgbmFtZTogXCJQZXJzb25hbCBJbmZvXCIsIGljb246IGZhVXNlciB9LFxyXG4gICAgeyBuYW1lOiBcIlVwbG9hZCBQcm9maWxlIEltYWdlXCIsIGljb246IGZhSW1hZ2UgfVxyXG4gIF07XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBwYWdlOiAxLFxyXG4gICAgc2hvd1ByZXZpb3VzQnRuOiBmYWxzZSxcclxuICAgIHNob3dOZXh0QnRuOiB0cnVlLFxyXG4gICAgY29tcFN0YXRlOiAwLFxyXG4gICAgbmF2U3RhdGU6IHRoaXMuZ2V0TmF2U3RhdGVzKDAsIHRoaXMuc3RlcHMubGVuZ3RoKSxcclxuICAgIGlzTG9hZGluZzogZmFsc2VcclxuICB9O1xyXG5cclxuICBuZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoY3VycmVudFN0YXRlID0+ICh7IHBhZ2U6IGN1cnJlbnRTdGF0ZS5wYWdlICsgMSB9KSk7XHJcbiAgICB0aGlzLnNldE5hdlN0YXRlKHRoaXMuc3RhdGUuY29tcFN0YXRlICsgMSk7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfTtcclxuXHJcbiAgcHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShjdXJyZW50U3RhdGUgPT4gKHsgcGFnZTogY3VycmVudFN0YXRlLnBhZ2UgLSAxIH0pKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmNvbXBTdGF0ZSA+IDApIHtcclxuICAgICAgdGhpcy5zZXROYXZTdGF0ZSh0aGlzLnN0YXRlLmNvbXBTdGF0ZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnByb2ZpbGVBY3Rpb25zLmdldFByb2ZpbGUoKTtcclxuICB9XHJcblxyXG4gIGdldE5hdlN0YXRlcyhpbmR4LCBsZW5ndGgpIHtcclxuICAgIGxldCBzdHlsZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGkgPCBpbmR4KSB7XHJcbiAgICAgICAgc3R5bGVzLnB1c2goXCJkb25lXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGluZHgpIHtcclxuICAgICAgICBzdHlsZXMucHVzaChcImRvaW5nXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0eWxlcy5wdXNoKFwidG9kb1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgY3VycmVudDogaW5keCwgc3R5bGVzOiBzdHlsZXMgfTtcclxuICB9XHJcblxyXG4gIGNoZWNrTmF2U3RhdGUgPSBjdXJyZW50U3RlcCA9PiB7XHJcbiAgICBpZiAoY3VycmVudFN0ZXAgPiAwICYmIGN1cnJlbnRTdGVwIDwgdGhpcy5zdGVwcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3dQcmV2aW91c0J0bjogdHJ1ZSxcclxuICAgICAgICBzaG93TmV4dEJ0bjogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudFN0ZXAgPT09IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2hvd1ByZXZpb3VzQnRuOiBmYWxzZSxcclxuICAgICAgICBzaG93TmV4dEJ0bjogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3dQcmV2aW91c0J0bjogdHJ1ZSxcclxuICAgICAgICBzaG93TmV4dEJ0bjogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2V0TmF2U3RhdGUgPSBuZXh0ID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBuYXZTdGF0ZTogdGhpcy5nZXROYXZTdGF0ZXMobmV4dCwgdGhpcy5zdGVwcy5sZW5ndGgpIH0pO1xyXG4gICAgaWYgKG5leHQgPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tcFN0YXRlOiBuZXh0IH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja05hdlN0YXRlKG5leHQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUtleURvd24gPSBldnQgPT4ge1xyXG4gICAgaWYgKGV2dC53aGljaCA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5uZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1vdmVUb1BhZ2UgPSBldnQgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBldnQuY3VycmVudFRhcmdldC52YWx1ZSA8PSB0aGlzLnN0YXRlLmNvbXBTdGF0ZSB8fFxyXG4gICAgICBldnQuY3VycmVudFRhcmdldC52YWx1ZSA9PSAxIHx8XHJcbiAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlID09IDBcclxuICAgICkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQudmFsdWUgPT09IHRoaXMuc3RlcHMubGVuZ3RoIC0gMSAmJlxyXG4gICAgICAgIHRoaXMuc3RhdGUuY29tcFN0YXRlID09PSB0aGlzLnN0ZXBzLmxlbmd0aCAtIDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXROYXZTdGF0ZSh0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiB0aGlzLnN0ZXBzLmxlbmd0aCB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldE5hdlN0YXRlKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZTogZXZ0LmN1cnJlbnRUYXJnZXQudmFsdWUgKyAxIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSwgaSkgPT4ge1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5uYXZTdGF0ZS5zdHlsZXNbaV07XHJcbiAgfTtcclxuXHJcbiAgZ2V0SWNvbiA9IChjbGFzc05hbWUsIGkpID0+IHtcclxuICAgIGlmIChpIDwgdGhpcy5zdGF0ZS5jb21wU3RhdGUpIHtcclxuICAgICAgcmV0dXJuIGZhQ2hlY2s7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcHJvZmlsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgcGFnZSwgaXNMb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIGlzTG9hZGluZyA/IChcclxuICAgICAgPExvYWRpbmcgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGtleT1cImNoZWNrb3V0aGVhZGVyXCIgY2xhc3NOYW1lPVwiY29sLTEyIGZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZGlzcGxheS00XCI+UHJvZmlsZS48L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTkgY29sLWxnLTcgZm9ybS13cmFwcGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT1cImNoZWNrb3V0U3RlcHNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBtdWx0aS1zdGVwXCJcclxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJvZ3RyY2tyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0ZXBzLm1hcCgocywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmdldENsYXNzTmFtZShcInByb2d0cmNrclwiLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5tb3ZlVG9QYWdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9nLWljb24gc3ZnLWlubGluZS0tZmEgZmEtdy0xNiBmYS1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3RoaXMuZ2V0SWNvbih0aGlzLnN0ZXBzW2ldLmljb24sIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0ZXAtdGl0bGVcIj57dGhpcy5zdGVwc1tpXS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTAgY29sLW1kLTggY29sLWxnLTcgZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXctMTYgZmEtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIxeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMTB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjQ1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFTcGlubmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwaW5cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cGFnZSA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlTmFtZUZvcm1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzOiBQcm9maWxlVmlld01vZGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cGFnZSA9PT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlSW1hZ2VGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzOiBQcm9maWxlVmlld01vZGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9maWxlQWN0aW9ucy51cGRhdGVQcm9maWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsZXJ0QWN0aW9ucy5zZW5kQWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgcHJvZmlsZSB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxlcnRUeXBlLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9Qcm9maWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGVydEFjdGlvbnMuc2VuZEFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGVydFR5cGUuZGFuZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5wcm9maWxlLFxyXG4gIChcclxuICAgIGRpc3BhdGNoOlxyXG4gICAgICB8IERpc3BhdGNoPFByb2ZpbGVTdGF0ZS5Qcm9maWxlU3RhdGU+XHJcbiAgICAgIHwgRGlzcGF0Y2g8U2Vzc2lvblN0YXRlLlNlc3Npb25TdGF0ZT5cclxuICAgICAgfCBEaXNwYXRjaDxBbGVydFN0YXRlLkFsZXJ0U3RhdGU+XHJcbiAgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKFByb2ZpbGVTdGF0ZS5hY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpLFxyXG4gICAgICBhbGVydEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBbGVydFN0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxuICAgIH07XHJcbiAgfVxyXG4pKEVkaXRQcm9maWxlKSBhcyB0eXBlb2YgRWRpdFByb2ZpbGU7XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Zvcm1TdGVwcGVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZm9ybVN0ZXBwZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9mb3JtU3RlcHBlci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9