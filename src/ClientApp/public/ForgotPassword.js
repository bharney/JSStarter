exports.ids = ["ForgotPassword"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ForgotPassword.tsx":
/*!*************************************************************!*\
  !*** ./ClientApp/src/components/Account/ForgotPassword.tsx ***!
  \*************************************************************/
/*! exports provided: ForgotPassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword", function() { return ForgotPassword; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/Account */ "./ClientApp/src/store/Account.ts");




 // At runtime, Redux will merge together...

var ForgotPassword =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ForgotPassword, _React$Component);

  function ForgotPassword() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ForgotPassword.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.getElementsByTagName("input")[0].focus();
  };

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
    }, "Forgot Password."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
      className: "lead text-center"
    }, "Please enter your Email address to send an Password Assistance Email to reset your password and login."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();

        if (_this.userName) {
          _this.props.forgotPassword(_this.userName.value);

          _this.props.history.push('/ForgotPasswordConfirmation');
        }
      },
      className: "form",
      role: "form",
      id: "forgotPassword"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
      htmlFor: "inputEmail",
      className: "form-control-label"
    }, "Email address"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
      type: "text",
      ref: function ref(input) {
        _this.userName = input;
      },
      className: "form-control",
      id: "username",
      placeholder: "Email",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-lg btn-primary btn-block",
      type: "submit"
    }, "Send Password Assistance Email"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/login"
    }, "Go back")))));
  };

  return ForgotPassword;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state.account;
}, // Selects which state properties are merged into the component's props
_store_Account__WEBPACK_IMPORTED_MODULE_4__["actionCreators"] // Selects which action creators are merged into the component's props
)(ForgotPassword));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FPQTs7QUFFQSxJQUFNLGNBQU47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLFNBT0ksaUJBUEosZ0NBT3FCO0FBQ2IsWUFBUSxDQUFDLG9CQUFULENBQThCLE9BQTlCLEVBQXVDLENBQXZDLEVBQTBDLEtBQTFDO0FBQ0gsR0FUTDs7QUFBQSxTQVdJLE1BWEoscUJBV1U7QUFBQTs7QUFDRixXQUFPO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSDtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBcUMsa0JBQXJDLENBREosRUFFSTtBQUFHLGVBQVMsRUFBQztBQUFiLE9BQStCLHdHQUEvQixDQUZKLEVBR0k7QUFBTSxjQUFRLEVBQ1Ysa0JBQUMsQ0FBRCxFQUFNO0FBQ0YsU0FBQyxDQUFDLGNBQUY7O0FBQ0EsWUFBSSxLQUFJLENBQUMsUUFBVCxFQUFtQjtBQUNmLGVBQUksQ0FBQyxLQUFMLENBQVcsY0FBWCxDQUEwQixLQUFJLENBQUMsUUFBTCxDQUFjLEtBQXhDOztBQUNBLGVBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUF3Qiw2QkFBeEI7QUFDSDtBQUNKLE9BUEw7QUFPTyxlQUFTLEVBQUMsTUFQakI7QUFPd0IsVUFBSSxFQUFDLE1BUDdCO0FBT29DLFFBQUUsRUFBQztBQVB2QyxPQVFJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFPLGFBQU8sRUFBQyxZQUFmO0FBQTRCLGVBQVMsRUFBQztBQUF0QyxPQUEwRCxlQUExRCxDQURKLEVBRUk7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFHLEVBQUUsYUFBQyxLQUFELEVBQVU7QUFBRyxhQUFJLENBQUMsUUFBTCxHQUFnQixLQUFoQjtBQUF3QixPQUE3RDtBQUErRCxlQUFTLEVBQUMsY0FBekU7QUFBd0YsUUFBRSxFQUFDLFVBQTNGO0FBQXNHLGlCQUFXLEVBQUMsT0FBbEg7QUFBMEgsY0FBUTtBQUFsSSxNQUZKLENBUkosRUFZSTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0k7QUFBUSxlQUFTLEVBQUMsa0NBQWxCO0FBQXFELFVBQUksRUFBQztBQUExRCxPQUFrRSxnQ0FBbEUsQ0FESixDQVpKLENBSEosRUFtQkksK0RBQUcsb0RBQUMscURBQUQsRUFBSztBQUFDLFFBQUUsRUFBQztBQUFKLEtBQUwsRUFBaUIsU0FBakIsQ0FBSCxDQW5CSixDQURKLENBREcsQ0FBUDtBQXlCSCxHQXJDTDs7QUFBQTtBQUFBLEVBQW9DLCtDQUFwQztBQXdDQSwrREFBZSwyREFBTyxDQUNsQixVQUFDLEtBQUQ7QUFBQSxTQUE2QixLQUFLLENBQUMsT0FBbkM7QUFBQSxDQURrQixFQUMwQjtBQUM1Qyw2REFGa0IsQ0FFMEI7QUFGMUIsQ0FBUCxDQUdiLGNBSGEsQ0FBZixFIiwiZmlsZSI6IkZvcmdvdFBhc3N3b3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQWNjb3VudFN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL0FjY291bnQnO1xyXG5cclxudHlwZSBVc2VyTWVudVByb3BzID0gQWNjb3VudFN0YXRlLkFjY291bnRTdGF0ZVxyXG4gICAgJiB0eXBlb2YgQWNjb3VudFN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8YW55PlxyXG4vLyBBdCBydW50aW1lLCBSZWR1eCB3aWxsIG1lcmdlIHRvZ2V0aGVyLi4uXHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlck1lbnVQcm9wcywgYW55PiB7XHJcbiAgICByZWZzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyTmFtZTogSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGRpc3BsYXktNFwiPkZvcmdvdCBQYXNzd29yZC48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1jZW50ZXJcIj5QbGVhc2UgZW50ZXIgeW91ciBFbWFpbCBhZGRyZXNzIHRvIHNlbmQgYW4gUGFzc3dvcmQgQXNzaXN0YW5jZSBFbWFpbCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGFuZCBsb2dpbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZvcmdvdFBhc3N3b3JkKHRoaXMudXNlck5hbWUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvRm9yZ290UGFzc3dvcmRDb25maXJtYXRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiZm9ybVwiIHJvbGU9XCJmb3JtXCIgaWQ9XCJmb3Jnb3RQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRFbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy51c2VyTmFtZSA9IGlucHV0OyB9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCIgPlNlbmQgUGFzc3dvcmQgQXNzaXN0YW5jZSBFbWFpbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PExpbmsgdG89XCIvbG9naW5cIj5HbyBiYWNrPC9MaW5rPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmFjY291bnQsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBBY2NvdW50U3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShGb3Jnb3RQYXNzd29yZCkgYXMgdHlwZW9mIEZvcmdvdFBhc3N3b3JkOyJdLCJzb3VyY2VSb290IjoiIn0=