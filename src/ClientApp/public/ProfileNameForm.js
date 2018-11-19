exports.ids = ["ProfileNameForm"];
exports.modules = {

/***/ "./ClientApp/src/components/Profile/ProfileNameForm.tsx":
/*!**************************************************************!*\
  !*** ./ClientApp/src/components/Profile/ProfileNameForm.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/lib/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};



var DropDownMenu = redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"];
var InputField = redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"];

var DropDown =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(DropDown, _Field);

  function DropDown() {
    return _Field.apply(this, arguments) || this;
  }

  return DropDown;
}(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"]);

var profileForm = function profileForm(_a) {
  var submitting = _a.submitting,
      handleSubmit = _a.handleSubmit,
      props = __rest(_a, ["submitting", "handleSubmit"]);

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", {
    id: "profileForm",
    className: 'form-wrapper',
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
    htmlFor: "email",
    className: "form-control-label"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "email",
    id: "email",
    placeholder: "Email",
    disabled: true,
    component: "input",
    className: "form-control",
    type: "text"
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
    htmlFor: "firstName",
    className: "form-control-label"
  }, "First Name"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "firstName",
    id: "firstName",
    placeholder: "First Name",
    required: true,
    component: "input",
    className: "form-control",
    type: "text"
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
    htmlFor: "lastName",
    className: "form-control-label"
  }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "lastName",
    id: "lastName",
    placeholder: "Last Name",
    required: true,
    component: "input",
    className: "form-control",
    type: "text"
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    className: "btn btn-lg btn-primary btn-block",
    type: "submit",
    disabled: submitting
  }, "Next")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'profileForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(profileForm));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlTmFtZUZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNLFlBQVksR0FBRyxnREFBckI7QUFDQSxJQUFNLFVBQVUsR0FBRyxnREFBbkI7O0lBVUEsUTs7Ozs7Ozs7OztFQUF1QixnRDs7QUFFdkIsSUFBTSxXQUFXLEdBQUcsU0FBZCxXQUFjLENBQUMsRUFBRCxFQUEyQztBQUFBLE1BQXhDLFVBQXdDLEdBQWhCLEVBQWdCLENBQXhDLFVBQXdDO0FBQUEsTUFBNUIsWUFBNEIsR0FBaEIsRUFBZ0IsQ0FBNUIsWUFBNEI7QUFBQSxNQUFkLEtBQWMsR0FBZCwwQ0FBYzs7QUFDM0QsU0FBUTtBQUFNLE1BQUUsRUFBQyxhQUFUO0FBQXVCLGFBQVMsRUFBQyxjQUFqQztBQUFnRCxZQUFRLEVBQUU7QUFBMUQsS0FDSjtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUF1QixhQUFTLEVBQUM7QUFBakMsS0FBcUQsT0FBckQsQ0FESixFQUVJLG9EQUFDLGdEQUFELEVBQU07QUFBQyxRQUFJLEVBQUMsT0FBTjtBQUFjLE1BQUUsRUFBQyxPQUFqQjtBQUF5QixlQUFXLEVBQUMsT0FBckM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxhQUFTLEVBQUMsT0FBaEU7QUFBd0UsYUFBUyxFQUFDLGNBQWxGO0FBQWlHLFFBQUksRUFBQztBQUF0RyxHQUFOLENBRkosQ0FESSxFQUtKO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFPLFdBQU8sRUFBQyxXQUFmO0FBQTJCLGFBQVMsRUFBQztBQUFyQyxLQUF5RCxZQUF6RCxDQURKLEVBRUksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxXQUFOO0FBQWtCLE1BQUUsRUFBQyxXQUFyQjtBQUFpQyxlQUFXLEVBQUMsWUFBN0M7QUFBMEQsWUFBUSxNQUFsRTtBQUFtRSxhQUFTLEVBQUMsT0FBN0U7QUFBcUYsYUFBUyxFQUFDLGNBQS9GO0FBQThHLFFBQUksRUFBQztBQUFuSCxHQUFOLENBRkosQ0FMSSxFQVNKO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQTBCLGFBQVMsRUFBQztBQUFwQyxLQUF3RCxXQUF4RCxDQURKLEVBRUksb0RBQUMsZ0RBQUQsRUFBTTtBQUFDLFFBQUksRUFBQyxVQUFOO0FBQWlCLE1BQUUsRUFBQyxVQUFwQjtBQUErQixlQUFXLEVBQUMsV0FBM0M7QUFBdUQsWUFBUSxNQUEvRDtBQUFnRSxhQUFTLEVBQUMsT0FBMUU7QUFBa0YsYUFBUyxFQUFDLGNBQTVGO0FBQTJHLFFBQUksRUFBQztBQUFoSCxHQUFOLENBRkosQ0FUSSxFQWFKO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFRLGFBQVMsRUFBQyxrQ0FBbEI7QUFBcUQsUUFBSSxFQUFDLFFBQTFEO0FBQW1FLFlBQVEsRUFBRTtBQUE3RSxLQUF1RixNQUF2RixDQURKLENBYkksQ0FBUjtBQWlCSCxDQWxCRDs7QUFvQkEsK0RBQWUsNERBQVMsQ0FBUztBQUM3QixNQUFJLEVBQUUsYUFEdUI7QUFFN0Isa0JBQWdCLEVBQUUsS0FGVztBQUc3QiwwQkFBd0IsRUFBRTtBQUhHLENBQVQsQ0FBVCxDQUlaLFdBSlksQ0FBZixFIiwiZmlsZSI6IlByb2ZpbGVOYW1lRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmllbGQsIEdlbmVyaWNGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5jb25zdCBEcm9wRG93bk1lbnUgPSBGaWVsZCBhcyBuZXcgKCkgPT4gR2VuZXJpY0ZpZWxkPGFueT47XHJcbmNvbnN0IElucHV0RmllbGQgPSBGaWVsZCBhcyBuZXcgKCkgPT4gR2VuZXJpY0ZpZWxkPGFueT47XHJcblxyXG5pbnRlcmZhY2UgRHJvcERvd25Qcm9wcyB7XHJcbiAgICBvcHRpb25zOiBhbnk7XHJcbiAgICBpZDogc3RyaW5nOyBcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7IFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhblxyXG59XHJcblxyXG5jbGFzcyBEcm9wRG93biBleHRlbmRzIEZpZWxkPERyb3BEb3duUHJvcHM+IHsgfVxyXG5cclxuY29uc3QgcHJvZmlsZUZvcm0gPSAoeyBzdWJtaXR0aW5nLCBoYW5kbGVTdWJtaXQsIC4uLnByb3BzIH0pID0+IHtcclxuICAgIHJldHVybiAoPGZvcm0gaWQ9XCJwcm9maWxlRm9ybVwiIGNsYXNzTmFtZT0nZm9ybS13cmFwcGVyJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgZGlzYWJsZWQgY29tcG9uZW50PVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZmlyc3ROYW1lXCIgaWQ9XCJmaXJzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwibGFzdE5hbWVcIiBpZD1cImxhc3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiByZXF1aXJlZCBjb21wb25lbnQ9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybTx7fSwge30+KHtcclxuICAgIGZvcm06ICdwcm9maWxlRm9ybScsXHJcbiAgICBkZXN0cm95T25Vbm1vdW50OiBmYWxzZSwgLy8gICAgICAgIDwtLS0tLS0gcHJlc2VydmUgZm9ybSBkYXRhXHJcbiAgICBmb3JjZVVucmVnaXN0ZXJPblVubW91bnQ6IHRydWUsIC8vIDwtLS0tLS0gdW5yZWdpc3RlciBmaWVsZHMgb24gdW5tb3VudFxyXG59KShwcm9maWxlRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==