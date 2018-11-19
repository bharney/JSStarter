exports.ids = ["DeleteAccountForm"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/DeleteAccountForm.tsx":
/*!****************************************************************!*\
  !*** ./ClientApp/src/components/Account/DeleteAccountForm.tsx ***!
  \****************************************************************/
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
    id: "deleteAccountForm",
    className: 'form-wrapper',
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-label-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "userName",
    id: "userName",
    placeholder: "Email Address",
    required: true,
    component: "input",
    autoFocus: true,
    className: "form-control",
    type: "email"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "userName"
  }, "Email Address")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    className: "btn btn-lg btn-primary btn-block",
    type: "submit",
    disabled: pristine || submitting
  }, "Delete Account")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'deleteAccountForm'
})(changePasswordForm));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9EZWxldGVBY2NvdW50Rm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTSxrQkFBa0IsR0FBRyxTQUFyQixrQkFBcUI7QUFBQSxNQUFHLFFBQUgsUUFBRyxRQUFIO0FBQUEsTUFBYSxVQUFiLFFBQWEsVUFBYjtBQUFBLE1BQXlCLFlBQXpCLFFBQXlCLFlBQXpCO0FBQUEsU0FDdkI7QUFBTSxNQUFFLEVBQUMsbUJBQVQ7QUFBNkIsYUFBUyxFQUFDLGNBQXZDO0FBQXNELFlBQVEsRUFBRTtBQUFoRSxLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSxvREFBQyxnREFBRCxFQUFNO0FBQUMsUUFBSSxFQUFDLFVBQU47QUFBaUIsTUFBRSxFQUFDLFVBQXBCO0FBQStCLGVBQVcsRUFBQyxlQUEzQztBQUEyRCxZQUFRLE1BQW5FO0FBQW9FLGFBQVMsRUFBQyxPQUE5RTtBQUFzRixhQUFTLE1BQS9GO0FBQWdHLGFBQVMsRUFBQyxjQUExRztBQUF5SCxRQUFJLEVBQUM7QUFBOUgsR0FBTixDQURKLEVBRUk7QUFBTyxXQUFPLEVBQUM7QUFBZixLQUF5QixlQUF6QixDQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBUSxhQUFTLEVBQUMsa0NBQWxCO0FBQXFELFFBQUksRUFBQyxRQUExRDtBQUFtRSxZQUFRLEVBQUUsUUFBUSxJQUFJO0FBQXpGLEtBQW1HLGdCQUFuRyxDQURKLENBTEosQ0FEdUI7QUFBQSxDQUEzQjs7QUFXQSwrREFBZSw0REFBUyxDQUFXO0FBQy9CLE1BQUksRUFBRTtBQUR5QixDQUFYLENBQVQsQ0FFWixrQkFGWSxDQUFmLEUiLCJmaWxlIjoiRGVsZXRlQWNjb3VudEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNvbnN0IGNoYW5nZVBhc3N3b3JkRm9ybSA9ICh7IHByaXN0aW5lLCBzdWJtaXR0aW5nLCBoYW5kbGVTdWJtaXQgfSkgPT4gXHJcbiAgICA8Zm9ybSBpZD1cImRlbGV0ZUFjY291bnRGb3JtXCIgY2xhc3NOYW1lPSdmb3JtLXdyYXBwZXInIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJOYW1lXCIgaWQ9XCJ1c2VyTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkIGNvbXBvbmVudD1cImlucHV0XCIgYXV0b0ZvY3VzIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30+RGVsZXRlIEFjY291bnQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybTxhbnksIGFueT4oe1xyXG4gICAgZm9ybTogJ2RlbGV0ZUFjY291bnRGb3JtJ1xyXG59KShjaGFuZ2VQYXNzd29yZEZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=