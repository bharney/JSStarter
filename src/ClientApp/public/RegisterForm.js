exports.ids = ["RegisterForm"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/RegisterForm.tsx":
/*!***********************************************************!*\
  !*** ./ClientApp/src/components/Account/RegisterForm.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);



var registerForm = function registerForm(_ref) {
  var pristine = _ref.pristine,
      submitting = _ref.submitting,
      handleSubmit = _ref.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    id: "registerForm",
    className: 'form-wrapper',
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "email",
    id: "registerEmail",
    placeholder: "Email",
    required: true,
    component: "input",
    autoFocus: true,
    className: "form-control",
    type: "email"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "registerEmail"
  }, "Email")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "password",
    id: "registerPassword",
    placeholder: "Password",
    required: true,
    component: "input",
    className: "form-control",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "registerPassword"
  }, "Password")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "confirmPassword",
    id: "confirmPassword",
    placeholder: "Confirm Password",
    required: true,
    component: "input",
    className: "form-control",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "confirmPassword"
  }, "Confirm Password")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    className: "btn btn-lg btn-primary btn-block",
    type: "submit",
    disabled: pristine || submitting
  }, "Register")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'registerForm'
})(registerForm));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9SZWdpc3RlckZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZTtBQUFBLE1BQUcsUUFBSCxRQUFHLFFBQUg7QUFBQSxNQUFhLFVBQWIsUUFBYSxVQUFiO0FBQUEsTUFBeUIsWUFBekIsUUFBeUIsWUFBekI7QUFBQSxTQUNqQjtBQUFNLE1BQUUsRUFBQyxjQUFUO0FBQXdCLGFBQVMsRUFBQyxjQUFsQztBQUFpRCxZQUFRLEVBQUU7QUFBM0QsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxPQUFOO0FBQWMsTUFBRSxFQUFDLGVBQWpCO0FBQWlDLGVBQVcsRUFBQyxPQUE3QztBQUFxRCxZQUFRLE1BQTdEO0FBQThELGFBQVMsRUFBQyxPQUF4RTtBQUFnRixhQUFTLE1BQXpGO0FBQTBGLGFBQVMsRUFBQyxjQUFwRztBQUFtSCxRQUFJLEVBQUM7QUFBeEgsR0FBTixDQURKLEVBRUk7QUFBTyxXQUFPLEVBQUM7QUFBZixLQUE4QixPQUE5QixDQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxVQUFOO0FBQWlCLE1BQUUsRUFBQyxrQkFBcEI7QUFBdUMsZUFBVyxFQUFDLFVBQW5EO0FBQThELFlBQVEsTUFBdEU7QUFBdUUsYUFBUyxFQUFDLE9BQWpGO0FBQXlGLGFBQVMsRUFBQyxjQUFuRztBQUFrSCxRQUFJLEVBQUM7QUFBdkgsR0FBTixDQURKLEVBRUk7QUFBTyxXQUFPLEVBQUM7QUFBZixLQUFpQyxVQUFqQyxDQUZKLENBTEosRUFTSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxpQkFBTjtBQUF3QixNQUFFLEVBQUMsaUJBQTNCO0FBQTZDLGVBQVcsRUFBQyxrQkFBekQ7QUFBNEUsWUFBUSxNQUFwRjtBQUFxRixhQUFTLEVBQUMsT0FBL0Y7QUFBdUcsYUFBUyxFQUFDLGNBQWpIO0FBQWdJLFFBQUksRUFBQztBQUFySSxHQUFOLENBREosRUFFSTtBQUFPLFdBQU8sRUFBQztBQUFmLEtBQWdDLGtCQUFoQyxDQUZKLENBVEosRUFhSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBUSxhQUFTLEVBQUMsa0NBQWxCO0FBQXFELFFBQUksRUFBQyxRQUExRDtBQUFtRSxZQUFRLEVBQUUsUUFBUSxJQUFJO0FBQXpGLEtBQW1HLFVBQW5HLENBREosQ0FiSixDQURpQjtBQUFBLENBQXJCOztBQW1CQSwrREFBZSw0REFBUyxDQUFXO0FBQy9CLE1BQUksRUFBRTtBQUR5QixDQUFYLENBQVQsQ0FFWixZQUZZLENBQWYsRSIsImZpbGUiOiJSZWdpc3RlckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNvbnN0IHJlZ2lzdGVyRm9ybSA9ICh7IHByaXN0aW5lLCBzdWJtaXR0aW5nLCBoYW5kbGVTdWJtaXQgfSkgPT4gXHJcbiAgICA8Zm9ybSBpZD1cInJlZ2lzdGVyRm9ybVwiIGNsYXNzTmFtZT0nZm9ybS13cmFwcGVyJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIGlkPVwicmVnaXN0ZXJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGF1dG9Gb2N1cyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2lzdGVyRW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInJlZ2lzdGVyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgY29tcG9uZW50PVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2lzdGVyUGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3ByaXN0aW5lIHx8IHN1Ym1pdHRpbmd9PlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm08YW55LCBhbnk+KHtcclxuICAgIGZvcm06ICdyZWdpc3RlckZvcm0nXHJcbn0pKHJlZ2lzdGVyRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==