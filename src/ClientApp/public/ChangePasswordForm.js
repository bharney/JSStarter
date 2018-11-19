exports.ids = ["ChangePasswordForm"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ChangePasswordForm.tsx":
/*!*****************************************************************!*\
  !*** ./ClientApp/src/components/Account/ChangePasswordForm.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);



var changePasswordForm = function changePasswordForm(_ref) {
  var pristine = _ref.pristine,
      submitting = _ref.submitting,
      handleSubmit = _ref.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    id: "changePasswordForm",
    className: 'form-wrapper',
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "oldPassword",
    id: "oldPasswordChange",
    placeholder: "Old password",
    required: true,
    component: "input",
    autoFocus: true,
    className: "form-control",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "oldPasswordChange"
  }, "Old password")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "newPassword",
    id: "newPasswordChange",
    placeholder: "New password",
    required: true,
    component: "input",
    className: "form-control",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "newPasswordChange"
  }, "New password")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "confirmPassword",
    id: "confirmPassword",
    placeholder: "Confirm password",
    required: true,
    component: "input",
    className: "form-control",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "confirmPassword"
  }, "Confirm password")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    className: "btn btn-lg btn-primary btn-block",
    type: "submit",
    disabled: pristine || submitting
  }, "Change Password")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'changePasswordForm'
})(changePasswordForm));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9DaGFuZ2VQYXNzd29yZEZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU0sa0JBQWtCLEdBQUcsU0FBckIsa0JBQXFCO0FBQUEsTUFBRyxRQUFILFFBQUcsUUFBSDtBQUFBLE1BQWEsVUFBYixRQUFhLFVBQWI7QUFBQSxNQUF5QixZQUF6QixRQUF5QixZQUF6QjtBQUFBLFNBQ3ZCO0FBQU0sTUFBRSxFQUFDLG9CQUFUO0FBQThCLGFBQVMsRUFBQyxjQUF4QztBQUF1RCxZQUFRLEVBQUU7QUFBakUsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxhQUFOO0FBQW9CLE1BQUUsRUFBQyxtQkFBdkI7QUFBMkMsZUFBVyxFQUFDLGNBQXZEO0FBQXNFLFlBQVEsTUFBOUU7QUFBK0UsYUFBUyxFQUFDLE9BQXpGO0FBQWlHLGFBQVMsTUFBMUc7QUFBMkcsYUFBUyxFQUFDLGNBQXJIO0FBQW9JLFFBQUksRUFBQztBQUF6SSxHQUFOLENBREosRUFFSTtBQUFPLFdBQU8sRUFBQztBQUFmLEtBQWtDLGNBQWxDLENBRkosQ0FESixFQUtJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSxvREFBQyxnREFBRCxFQUFNO0FBQUMsUUFBSSxFQUFDLGFBQU47QUFBb0IsTUFBRSxFQUFDLG1CQUF2QjtBQUEyQyxlQUFXLEVBQUMsY0FBdkQ7QUFBc0UsWUFBUSxNQUE5RTtBQUErRSxhQUFTLEVBQUMsT0FBekY7QUFBaUcsYUFBUyxFQUFDLGNBQTNHO0FBQTBILFFBQUksRUFBQztBQUEvSCxHQUFOLENBREosRUFFSTtBQUFPLFdBQU8sRUFBQztBQUFmLEtBQWtDLGNBQWxDLENBRkosQ0FMSixFQVNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSxvREFBQyxnREFBRCxFQUFNO0FBQUMsUUFBSSxFQUFDLGlCQUFOO0FBQXdCLE1BQUUsRUFBQyxpQkFBM0I7QUFBNkMsZUFBVyxFQUFDLGtCQUF6RDtBQUE0RSxZQUFRLE1BQXBGO0FBQXFGLGFBQVMsRUFBQyxPQUEvRjtBQUF1RyxhQUFTLEVBQUMsY0FBakg7QUFBZ0ksUUFBSSxFQUFDO0FBQXJJLEdBQU4sQ0FESixFQUVJO0FBQU8sV0FBTyxFQUFDO0FBQWYsS0FBZ0Msa0JBQWhDLENBRkosQ0FUSixFQWFJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFRLGFBQVMsRUFBQyxrQ0FBbEI7QUFBcUQsUUFBSSxFQUFDLFFBQTFEO0FBQW1FLFlBQVEsRUFBRSxRQUFRLElBQUk7QUFBekYsS0FBbUcsaUJBQW5HLENBREosQ0FiSixDQUR1QjtBQUFBLENBQTNCOztBQW1CQSwrREFBZSw0REFBUyxDQUFXO0FBQy9CLE1BQUksRUFBRTtBQUR5QixDQUFYLENBQVQsQ0FFWixrQkFGWSxDQUFmLEUiLCJmaWxlIjoiQ2hhbmdlUGFzc3dvcmRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5jb25zdCBjaGFuZ2VQYXNzd29yZEZvcm0gPSAoeyBwcmlzdGluZSwgc3VibWl0dGluZywgaGFuZGxlU3VibWl0IH0pID0+IFxyXG4gICAgPGZvcm0gaWQ9XCJjaGFuZ2VQYXNzd29yZEZvcm1cIiBjbGFzc05hbWU9J2Zvcm0td3JhcHBlcicgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwib2xkUGFzc3dvcmRcIiBpZD1cIm9sZFBhc3N3b3JkQ2hhbmdlXCIgcGxhY2Vob2xkZXI9XCJPbGQgcGFzc3dvcmRcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGF1dG9Gb2N1cyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZFBhc3N3b3JkQ2hhbmdlXCI+T2xkIHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJuZXdQYXNzd29yZFwiIGlkPVwibmV3UGFzc3dvcmRDaGFuZ2VcIiBwbGFjZWhvbGRlcj1cIk5ldyBwYXNzd29yZFwiIHJlcXVpcmVkIGNvbXBvbmVudD1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdQYXNzd29yZENoYW5nZVwiPk5ldyBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3ByaXN0aW5lIHx8IHN1Ym1pdHRpbmd9PkNoYW5nZSBQYXNzd29yZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtPGFueSwgYW55Pih7XHJcbiAgICBmb3JtOiAnY2hhbmdlUGFzc3dvcmRGb3JtJ1xyXG59KShjaGFuZ2VQYXNzd29yZEZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=