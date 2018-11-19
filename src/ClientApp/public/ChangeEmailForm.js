exports.ids = ["ChangeEmailForm"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ChangeEmailForm.tsx":
/*!**************************************************************!*\
  !*** ./ClientApp/src/components/Account/ChangeEmailForm.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);



var changeEmailForm = function changeEmailForm(_ref) {
  var pristine = _ref.pristine,
      submitting = _ref.submitting,
      handleSubmit = _ref.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    id: "changeEmailForm",
    className: 'form-wrapper',
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "confirmedEmail",
    id: "confirmedEmail",
    placeholder: "Current email",
    required: true,
    component: "input",
    autoFocus: true,
    className: "form-control",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "confirmedEmail"
  }, "Current Email")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "unConfirmedEmail",
    id: "unConfirmedEmail",
    placeholder: "New email",
    required: true,
    component: "input",
    className: "form-control",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "unConfirmedEmail"
  }, "New Email")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    className: "btn btn-lg btn-primary btn-block",
    type: "submit",
    disabled: pristine || submitting
  }, "Change Email")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'changeEmailForm'
})(changeEmailForm));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9DaGFuZ2VFbWFpbEZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU0sZUFBZSxHQUFHLFNBQWxCLGVBQWtCO0FBQUEsTUFBRyxRQUFILFFBQUcsUUFBSDtBQUFBLE1BQWEsVUFBYixRQUFhLFVBQWI7QUFBQSxNQUF5QixZQUF6QixRQUF5QixZQUF6QjtBQUFBLFNBQ3BCO0FBQU0sTUFBRSxFQUFDLGlCQUFUO0FBQTJCLGFBQVMsRUFBQyxjQUFyQztBQUFvRCxZQUFRLEVBQUU7QUFBOUQsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxnQkFBTjtBQUF1QixNQUFFLEVBQUMsZ0JBQTFCO0FBQTJDLGVBQVcsRUFBQyxlQUF2RDtBQUF1RSxZQUFRLE1BQS9FO0FBQWdGLGFBQVMsRUFBQyxPQUExRjtBQUFrRyxhQUFTLE1BQTNHO0FBQTRHLGFBQVMsRUFBQyxjQUF0SDtBQUFxSSxRQUFJLEVBQUM7QUFBMUksR0FBTixDQURKLEVBRUk7QUFBTyxXQUFPLEVBQUM7QUFBZixLQUErQixlQUEvQixDQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxrQkFBTjtBQUF5QixNQUFFLEVBQUMsa0JBQTVCO0FBQStDLGVBQVcsRUFBQyxXQUEzRDtBQUF1RSxZQUFRLE1BQS9FO0FBQWdGLGFBQVMsRUFBQyxPQUExRjtBQUFrRyxhQUFTLEVBQUMsY0FBNUc7QUFBMkgsUUFBSSxFQUFDO0FBQWhJLEdBQU4sQ0FESixFQUVJO0FBQU8sV0FBTyxFQUFDO0FBQWYsS0FBaUMsV0FBakMsQ0FGSixDQUxKLEVBU0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQVEsYUFBUyxFQUFDLGtDQUFsQjtBQUFxRCxRQUFJLEVBQUMsUUFBMUQ7QUFBbUUsWUFBUSxFQUFFLFFBQVEsSUFBSTtBQUF6RixLQUFtRyxjQUFuRyxDQURKLENBVEosQ0FEb0I7QUFBQSxDQUF4Qjs7QUFlQSwrREFBZSw0REFBUyxDQUFXO0FBQy9CLE1BQUksRUFBRTtBQUR5QixDQUFYLENBQVQsQ0FFWixlQUZZLENBQWYsRSIsImZpbGUiOiJDaGFuZ2VFbWFpbEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNvbnN0IGNoYW5nZUVtYWlsRm9ybSA9ICh7IHByaXN0aW5lLCBzdWJtaXR0aW5nLCBoYW5kbGVTdWJtaXQgfSkgPT4gXHJcbiAgICA8Zm9ybSBpZD1cImNoYW5nZUVtYWlsRm9ybVwiIGNsYXNzTmFtZT0nZm9ybS13cmFwcGVyJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJjb25maXJtZWRFbWFpbFwiIGlkPVwiY29uZmlybWVkRW1haWxcIiBwbGFjZWhvbGRlcj1cIkN1cnJlbnQgZW1haWxcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGF1dG9Gb2N1cyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybWVkRW1haWxcIj5DdXJyZW50IEVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ1bkNvbmZpcm1lZEVtYWlsXCIgaWQ9XCJ1bkNvbmZpcm1lZEVtYWlsXCIgcGxhY2Vob2xkZXI9XCJOZXcgZW1haWxcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1bkNvbmZpcm1lZEVtYWlsXCI+TmV3IEVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30+Q2hhbmdlIEVtYWlsPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm08YW55LCBhbnk+KHtcclxuICAgIGZvcm06ICdjaGFuZ2VFbWFpbEZvcm0nXHJcbn0pKGNoYW5nZUVtYWlsRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==