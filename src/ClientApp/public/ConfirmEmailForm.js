exports.ids = ["ConfirmEmailForm"];
exports.modules = {

/***/ "./ClientApp/src/components/Account/ConfirmEmailForm.tsx":
/*!***************************************************************!*\
  !*** ./ClientApp/src/components/Account/ConfirmEmailForm.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);



var confirmEmailForm = function confirmEmailForm(_ref) {
  var pristine = _ref.pristine,
      submitting = _ref.submitting,
      handleSubmit = _ref.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    id: "confirmEmailForm",
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
    id: "password",
    placeholder: "Password",
    required: true,
    component: "input",
    autoFocus: true,
    className: "form-control",
    type: "password"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: "password"
  }, "Password")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    className: "btn btn-lg btn-primary btn-block",
    type: "submit",
    disabled: pristine || submitting
  }, "Change Email")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'confirmEmailForm'
})(confirmEmailForm));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQWNjb3VudC9Db25maXJtRW1haWxGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFtQjtBQUFBLE1BQUcsUUFBSCxRQUFHLFFBQUg7QUFBQSxNQUFhLFVBQWIsUUFBYSxVQUFiO0FBQUEsTUFBeUIsWUFBekIsUUFBeUIsWUFBekI7QUFBQSxTQUNyQjtBQUFNLE1BQUUsRUFBQyxrQkFBVDtBQUE0QixhQUFTLEVBQUMsY0FBdEM7QUFBcUQsWUFBUSxFQUFFO0FBQS9ELEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLG9EQUFDLGdEQUFELEVBQU07QUFBQyxRQUFJLEVBQUMsT0FBTjtBQUFjLE1BQUUsRUFBQyxPQUFqQjtBQUF5QixlQUFXLEVBQUMsT0FBckM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxhQUFTLEVBQUMsT0FBaEU7QUFBd0UsYUFBUyxNQUFqRjtBQUFrRixhQUFTLEVBQUMsY0FBNUY7QUFBMkcsUUFBSSxFQUFDO0FBQWhILEdBQU4sQ0FESixFQUVJO0FBQU8sV0FBTyxFQUFDO0FBQWYsS0FBc0IsT0FBdEIsQ0FGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLG9EQUFDLGdEQUFELEVBQU07QUFBQyxRQUFJLEVBQUMsVUFBTjtBQUFpQixNQUFFLEVBQUMsVUFBcEI7QUFBK0IsZUFBVyxFQUFDLFVBQTNDO0FBQXNELFlBQVEsTUFBOUQ7QUFBK0QsYUFBUyxFQUFDLE9BQXpFO0FBQWlGLGFBQVMsTUFBMUY7QUFBMkYsYUFBUyxFQUFDLGNBQXJHO0FBQW9ILFFBQUksRUFBQztBQUF6SCxHQUFOLENBREosRUFFSTtBQUFPLFdBQU8sRUFBQztBQUFmLEtBQXlCLFVBQXpCLENBRkosQ0FMSixFQVNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFRLGFBQVMsRUFBQyxrQ0FBbEI7QUFBcUQsUUFBSSxFQUFDLFFBQTFEO0FBQW1FLFlBQVEsRUFBRSxRQUFRLElBQUk7QUFBekYsS0FBbUcsY0FBbkcsQ0FESixDQVRKLENBRHFCO0FBQUEsQ0FBekI7O0FBZUEsK0RBQWUsNERBQVMsQ0FBVztBQUMvQixNQUFJLEVBQUU7QUFEeUIsQ0FBWCxDQUFULENBRVosZ0JBRlksQ0FBZixFIiwiZmlsZSI6IkNvbmZpcm1FbWFpbEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNvbnN0IGNvbmZpcm1FbWFpbEZvcm0gPSAoeyBwcmlzdGluZSwgc3VibWl0dGluZywgaGFuZGxlU3VibWl0IH0pID0+IFxyXG4gICAgPGZvcm0gaWQ9XCJjb25maXJtRW1haWxGb3JtXCIgY2xhc3NOYW1lPSdmb3JtLXdyYXBwZXInIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGF1dG9Gb2N1cyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkIGNvbXBvbmVudD1cImlucHV0XCIgYXV0b0ZvY3VzIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3ByaXN0aW5lIHx8IHN1Ym1pdHRpbmd9PkNoYW5nZSBFbWFpbDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtPGFueSwgYW55Pih7XHJcbiAgICBmb3JtOiAnY29uZmlybUVtYWlsRm9ybSdcclxufSkoY29uZmlybUVtYWlsRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==