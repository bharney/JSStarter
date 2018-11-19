exports.ids = ["ResetPasswordForm"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ResetPasswordForm.tsx":
/*!****************************************************************!*\
  !*** ./ClientApp/src/components/Account/ResetPasswordForm.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);



var resetPasswordForm = function resetPasswordForm(_ref) {
  var pristine = _ref.pristine,
      submitting = _ref.submitting,
      handleSubmit = _ref.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    id: "resetPassword",
    className: 'form-wrapper',
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "email",
    id: "email",
    placeholder: "Email",
    required: true,
    component: "input",
    autoFocus: true,
    className: "form-control",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "email"
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
  }, "Change Password")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'resetPassword'
})(resetPasswordForm));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9SZXNldFBhc3N3b3JkRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTSxpQkFBaUIsR0FBRyxTQUFwQixpQkFBb0I7QUFBQSxNQUFHLFFBQUgsUUFBRyxRQUFIO0FBQUEsTUFBYSxVQUFiLFFBQWEsVUFBYjtBQUFBLE1BQXlCLFlBQXpCLFFBQXlCLFlBQXpCO0FBQUEsU0FDdEI7QUFBTSxNQUFFLEVBQUMsZUFBVDtBQUF5QixhQUFTLEVBQUMsY0FBbkM7QUFBa0QsWUFBUSxFQUFFO0FBQTVELEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLG9EQUFDLGdEQUFELEVBQU07QUFBQyxRQUFJLEVBQUMsT0FBTjtBQUFjLE1BQUUsRUFBQyxPQUFqQjtBQUF5QixlQUFXLEVBQUMsT0FBckM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxhQUFTLEVBQUMsT0FBaEU7QUFBd0UsYUFBUyxNQUFqRjtBQUFrRixhQUFTLEVBQUMsY0FBNUY7QUFBMkcsUUFBSSxFQUFDO0FBQWhILEdBQU4sQ0FESixFQUVJO0FBQU8sV0FBTyxFQUFDO0FBQWYsS0FBc0IsT0FBdEIsQ0FGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLG9EQUFDLGdEQUFELEVBQU07QUFBQyxRQUFJLEVBQUMsVUFBTjtBQUFpQixNQUFFLEVBQUMsa0JBQXBCO0FBQXVDLGVBQVcsRUFBQyxVQUFuRDtBQUE4RCxZQUFRLE1BQXRFO0FBQXVFLGFBQVMsRUFBQyxPQUFqRjtBQUF5RixhQUFTLEVBQUMsY0FBbkc7QUFBa0gsUUFBSSxFQUFDO0FBQXZILEdBQU4sQ0FESixFQUVJO0FBQU8sV0FBTyxFQUFDO0FBQWYsS0FBaUMsVUFBakMsQ0FGSixDQUxKLEVBU0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLG9EQUFDLGdEQUFELEVBQU07QUFBQyxRQUFJLEVBQUMsaUJBQU47QUFBd0IsTUFBRSxFQUFDLGlCQUEzQjtBQUE2QyxlQUFXLEVBQUMsa0JBQXpEO0FBQTRFLFlBQVEsTUFBcEY7QUFBcUYsYUFBUyxFQUFDLE9BQS9GO0FBQXVHLGFBQVMsRUFBQyxjQUFqSDtBQUFnSSxRQUFJLEVBQUM7QUFBckksR0FBTixDQURKLEVBRUk7QUFBTyxXQUFPLEVBQUM7QUFBZixLQUFnQyxrQkFBaEMsQ0FGSixDQVRKLEVBYUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQVEsYUFBUyxFQUFDLGtDQUFsQjtBQUFxRCxRQUFJLEVBQUMsUUFBMUQ7QUFBbUUsWUFBUSxFQUFFLFFBQVEsSUFBSTtBQUF6RixLQUFtRyxpQkFBbkcsQ0FESixDQWJKLENBRHNCO0FBQUEsQ0FBMUI7O0FBa0JBLCtEQUFlLDREQUFTLENBQVc7QUFDL0IsTUFBSSxFQUFFO0FBRHlCLENBQVgsQ0FBVCxDQUVaLGlCQUZZLENBQWYsRSIsImZpbGUiOiJSZXNldFBhc3N3b3JkRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG5cclxuY29uc3QgcmVzZXRQYXNzd29yZEZvcm0gPSAoeyBwcmlzdGluZSwgc3VibWl0dGluZywgaGFuZGxlU3VibWl0IH0pID0+IFxyXG4gICAgPGZvcm0gaWQ9XCJyZXNldFBhc3N3b3JkXCIgY2xhc3NOYW1lPSdmb3JtLXdyYXBwZXInIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGF1dG9Gb2N1cyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInJlZ2lzdGVyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgY29tcG9uZW50PVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2lzdGVyUGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3ByaXN0aW5lIHx8IHN1Ym1pdHRpbmd9PkNoYW5nZSBQYXNzd29yZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm08YW55LCBhbnk+KHtcclxuICAgIGZvcm06ICdyZXNldFBhc3N3b3JkJ1xyXG59KShyZXNldFBhc3N3b3JkRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==