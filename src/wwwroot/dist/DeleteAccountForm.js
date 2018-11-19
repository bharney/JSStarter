(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DeleteAccountForm"],{

/***/ "./ClientApp/src/components/Account/DeleteAccountForm.tsx":
/*!****************************************************************!*\
  !*** ./ClientApp/src/components/Account/DeleteAccountForm.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n\n\n\nvar changePasswordForm = function changePasswordForm(_ref) {\n  var pristine = _ref.pristine,\n      submitting = _ref.submitting,\n      handleSubmit = _ref.handleSubmit;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"form\", {\n    id: \"deleteAccountForm\",\n    className: 'form-wrapper',\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"form-label-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](redux_form__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n    name: \"userName\",\n    id: \"userName\",\n    placeholder: \"Email Address\",\n    required: true,\n    component: \"input\",\n    autoFocus: true,\n    className: \"form-control\",\n    type: \"email\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", {\n    htmlFor: \"userName\"\n  }, \"Email Address\")), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", {\n    className: \"btn btn-lg btn-primary btn-block\",\n    type: \"submit\",\n    disabled: pristine || submitting\n  }, \"Delete Account\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__[\"reduxForm\"])({\n  form: 'deleteAccountForm'\n})(changePasswordForm));\n\n//# sourceURL=webpack:///./ClientApp/src/components/Account/DeleteAccountForm.tsx?");

/***/ })

}]);
//# sourceMappingURL=DeleteAccountForm.js.map