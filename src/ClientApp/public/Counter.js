exports.ids = ["Counter"];
exports.modules = {

/***/ "./ClientApp/src/components/Counter/Counter.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/src/components/Counter/Counter.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Counter */ "./ClientApp/src/store/Counter.ts");





var Counter =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Counter, _React$Component);

  function Counter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Counter.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Counter"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "This is a simple example of a React component."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Current count: ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, this.props.count)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      onClick: function onClick() {
        _this.props.increment();
      }
    }, "Increment"));
  };

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // Wire up the React component to the Redux store


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state.counter;
}, // Selects which state properties are merged into the component's props
_store_Counter__WEBPACK_IMPORTED_MODULE_3__["actionCreators"] // Selects which action creators are merged into the component's props
)(Counter));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvQ291bnRlci9Db3VudGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7SUFPQSxPOzs7Ozs7Ozs7OztTQUNXLE0scUJBQU07QUFBQTs7QUFDVCxXQUFPLGlFQUNILDBFQURHLEVBR0gsZ0hBSEcsRUFLSCwrRCxpQkFBQSxFQUFrQixvRUFBVSxLQUFLLEtBQUwsQ0FBVyxLQUFyQixDQUFsQixDQUxHLEVBT0g7QUFBUSxhQUFPLEVBQUcsbUJBQUs7QUFBRyxhQUFJLENBQUMsS0FBTCxDQUFXLFNBQVg7QUFBd0I7QUFBbEQsT0FBa0QsV0FBbEQsQ0FQRyxDQUFQO0FBU0gsRzs7O0VBWGlCLCtDLEdBY3RCOzs7QUFDQSwrREFBZSwyREFBTyxDQUNsQixVQUFDLEtBQUQ7QUFBQSxTQUE2QixLQUFLLENBQUMsT0FBbkM7QUFBQSxDQURrQixFQUMwQjtBQUM1Qyw2REFGa0IsQ0FFMEI7QUFGMUIsQ0FBUCxDQUdiLE9BSGEsQ0FBZixFIiwiZmlsZSI6IkNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ291bnRlclN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL0NvdW50ZXInO1xyXG5cclxudHlwZSBDb3VudGVyUHJvcHMgPVxyXG4gICAgQ291bnRlclN0b3JlLkNvdW50ZXJTdGF0ZVxyXG4gICAgJiB0eXBlb2YgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+O1xyXG5cclxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb3VudGVyUHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q291bnRlcjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYSBSZWFjdCBjb21wb25lbnQuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57IHRoaXMucHJvcHMuY291bnQgfTwvc3Ryb25nPjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5wcm9wcy5pbmNyZW1lbnQoKSB9IH0+SW5jcmVtZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShDb3VudGVyKSBhcyB0eXBlb2YgQ291bnRlcjsiXSwic291cmNlUm9vdCI6IiJ9