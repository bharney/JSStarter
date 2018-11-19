exports.ids = ["FetchData"];
exports.modules = {

/***/ "./ClientApp/src/components/WeatherForecast/FetchData.tsx":
/*!****************************************************************!*\
  !*** ./ClientApp/src/components/WeatherForecast/FetchData.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ "./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_WeatherForecasts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/WeatherForecasts */ "./ClientApp/src/store/WeatherForecasts.ts");










var FetchData =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FetchData, _React$Component);

  function FetchData() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      startDateIndex: 0
    };
    return _this;
  }

  var _proto = FetchData.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // This method runs when the component is first added to the page
    var startDateIndex = parseInt(this.props.match.params.startDateIndex) || 0;
    this.props.weatherForcastActions.requestWeatherForecasts(startDateIndex);
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h1", null, "Weather forecast"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, "This component demonstrates fetching data from the server and working with URL parameters."), this.renderForecastsTable(), this.renderPagination());
  };

  _proto.renderForecastsTable = function renderForecastsTable() {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("table", {
      className: 'table'
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("thead", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("tr", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("th", null, "Date"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("th", null, "Temp. (C)"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("th", null, "Temp. (F)"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("th", null, "Summary"))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("tbody", null, this.props.forecasts.map(function (forecast) {
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("tr", {
        key: forecast.dateFormatted
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("td", null, forecast.dateFormatted), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("td", null, forecast.temperatureC), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("td", null, forecast.temperatureF), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("td", null, forecast.summary));
    })));
  };

  _proto.renderPagination = function renderPagination() {
    var prevStartDateIndex = (this.props.startDateIndex || 0) - 5;
    var nextStartDateIndex = (this.props.startDateIndex || 0) + 5;
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", {
      className: 'clearfix text-center'
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      className: 'btn btn-default pull-left',
      to: "/fetchdata/" + prevStartDateIndex
    }, "Previous"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      className: 'btn btn-default pull-right',
      to: "/fetchdata/" + nextStartDateIndex
    }, "Next"), this.props.isLoading ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: "svg-inline--fa fa-w-16 fa-lg",
      icon: _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_2__["faSpinner"],
      spin: true,
      size: "2x"
    }) : []);
  };

  return FetchData;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state.weatherForecasts;
}, // Selects which state properties are merged into the component's props
function (dispatch) {
  return {
    weatherForcastActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_store_WeatherForecasts__WEBPACK_IMPORTED_MODULE_8__["actionCreators"], dispatch)
  };
})(FetchData));

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'spinner';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f110';
var svgPathData = 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z';

exports.definition = {           
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};
  
exports.faSpinner = exports.definition;           
exports.prefix = prefix;
exports.iconName = iconName; 
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvV2VhdGhlckZvcmVjYXN0L0ZldGNoRGF0YS50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFVQSxTOzs7OztBQUFBO0FBQUE7OztBQUNJLGtCQUFRO0FBQ0osb0JBQWMsRUFBRTtBQURaLEtBQVI7QUFESjtBQW9EQzs7OztTQWhERyxpQixnQ0FBaUI7QUFDYjtBQUNBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCLENBQXdCLGNBQXpCLENBQVIsSUFBb0QsQ0FBekU7QUFDQSxTQUFLLEtBQUwsQ0FBVyxxQkFBWCxDQUFpQyx1QkFBakMsQ0FBeUQsY0FBekQ7QUFDSCxHOztTQUVNLE0scUJBQU07QUFDVCxXQUFPLGlFQUNILG1GQURHLEVBRUgsNEpBRkcsRUFHRCxLQUFLLG9CQUFMLEVBSEMsRUFJRCxLQUFLLGdCQUFMLEVBSkMsQ0FBUDtBQU1ILEc7O1NBRU8sb0IsbUNBQW9CO0FBQ3hCLFdBQU87QUFBTyxlQUFTLEVBQUM7QUFBakIsT0FDSCxtRUFDSSxnRUFDSSx1RUFESixFQUVJLDRFQUZKLEVBR0ksNEVBSEosRUFJSSwwRUFKSixDQURKLENBREcsRUFTSCxtRUFDQyxLQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGtCQUFRO0FBQUEsYUFDOUI7QUFBSSxXQUFHLEVBQUcsUUFBUSxDQUFDO0FBQW5CLFNBQ0ksZ0VBQU0sUUFBUSxDQUFDLGFBQWYsQ0FESixFQUVJLGdFQUFNLFFBQVEsQ0FBQyxZQUFmLENBRkosRUFHSSxnRUFBTSxRQUFRLENBQUMsWUFBZixDQUhKLEVBSUksZ0VBQU0sUUFBUSxDQUFDLE9BQWYsQ0FKSixDQUQ4QjtBQUFBLEtBQWpDLENBREQsQ0FURyxDQUFQO0FBb0JILEc7O1NBRU8sZ0IsK0JBQWdCO0FBQ3BCLFFBQUksa0JBQWtCLEdBQUcsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxjQUFYLElBQTZCLENBQTlCLElBQW1DLENBQTVEO0FBQ0EsUUFBSSxrQkFBa0IsR0FBRyxDQUFDLEtBQUssS0FBTCxDQUFXLGNBQVgsSUFBNkIsQ0FBOUIsSUFBbUMsQ0FBNUQ7QUFFQSxXQUFPO0FBQUcsZUFBUyxFQUFDO0FBQWIsT0FDSCxvREFBQyxxREFBRCxFQUFLO0FBQUMsZUFBUyxFQUFDLDJCQUFYO0FBQXVDLFFBQUUsa0JBQWtCO0FBQTNELEtBQUwsRUFBcUYsVUFBckYsQ0FERyxFQUVILG9EQUFDLHFEQUFELEVBQUs7QUFBQyxlQUFTLEVBQUMsNEJBQVg7QUFBd0MsUUFBRSxrQkFBa0I7QUFBNUQsS0FBTCxFQUFzRixNQUF0RixDQUZHLEVBR0YsS0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixvREFBQyw4RUFBRCxFQUFnQjtBQUFDLGVBQVMsRUFBQyw4QkFBWDtBQUEwQyxVQUFJLEVBQUUscUZBQWhEO0FBQTJELFVBQUksTUFBL0Q7QUFBZ0UsVUFBSSxFQUFDO0FBQXJFLEtBQWhCLENBQXZCLEdBQXNILEVBSHBILENBQVA7QUFLSCxHOzs7RUFuRG1CLCtDOztBQXNEeEIsK0RBQWUsMkRBQU8sQ0FDbEIsVUFBQyxLQUFEO0FBQUEsU0FBNkIsS0FBSyxDQUFDLGdCQUFuQztBQUFBLENBRGtCLEVBQ21DO0FBQ3JELFVBQUMsUUFBRCxFQUFvRTtBQUNoRSxTQUFPO0FBQ0gseUJBQXFCLEVBQUUsZ0VBQWtCLENBQUMsc0VBQUQsRUFBdUMsUUFBdkM7QUFEdEMsR0FBUDtBQUdILENBTmlCLENBQVAsQ0FPYixTQVBhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7QUFDQTtBQUNBLDRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6IkZldGNoRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXInO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIERpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0c1N0YXRlIGZyb20gJy4uLy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxyXG50eXBlIFdlYXRoZXJGb3JlY2FzdFByb3BzID1cclxuICAgIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGUgICAgICAgIC8vIC4uLiBzdGF0ZSB3ZSd2ZSByZXF1ZXN0ZWQgZnJvbSB0aGUgUmVkdXggc3RvcmVcclxuICAgICYge1xyXG4gICAgICAgIHdlYXRoZXJGb3JjYXN0QWN0aW9uczogdHlwZW9mIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgfVxyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgc3RhcnREYXRlSW5kZXg6IHN0cmluZyB9PjsgLy8gLi4uIHBsdXMgaW5jb21pbmcgcm91dGluZyBwYXJhbWV0ZXJzXHJcblxyXG5jbGFzcyBGZXRjaERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8V2VhdGhlckZvcmVjYXN0UHJvcHMsIHt9PiB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzdGFydERhdGVJbmRleDogMCxcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGFkZGVkIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy53ZWF0aGVyRm9yY2FzdEFjdGlvbnMucmVxdWVzdFdlYXRoZXJGb3JlY2FzdHMoc3RhcnREYXRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cclxuICAgICAgICAgICAgPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCB3b3JraW5nIHdpdGggVVJMIHBhcmFtZXRlcnMuPC9wPlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRm9yZWNhc3RzVGFibGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCkgfVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckZvcmVjYXN0c1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JlY2FzdHMubWFwKGZvcmVjYXN0ID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5zdW1tYXJ5IH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHByZXZTdGFydERhdGVJbmRleCA9ICh0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4IHx8IDApIC0gNTtcclxuICAgICAgICBsZXQgbmV4dFN0YXJ0RGF0ZUluZGV4ID0gKHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggfHwgMCkgKyA1O1xyXG5cclxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjbGVhcmZpeCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IHB1bGwtbGVmdCcgdG89eyBgL2ZldGNoZGF0YS8keyBwcmV2U3RhcnREYXRlSW5kZXggfWB9PlByZXZpb3VzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IG5leHRTdGFydERhdGVJbmRleCB9YH0+TmV4dDwvTGluaz5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXNMb2FkaW5nID8gPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS13LTE2IGZhLWxnXCIgaWNvbj17ZmFTcGlubmVyfSBzcGluIHNpemU9XCIyeFwiIC8+IDogW10gfVxyXG4gICAgICAgIDwvcD47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLndlYXRoZXJGb3JlY2FzdHMsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICAoZGlzcGF0Y2g6IERpc3BhdGNoPFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGU+KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2VhdGhlckZvcmNhc3RBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pKEZldGNoRGF0YSkgYXMgdHlwZW9mIEZldGNoRGF0YTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzcGlubmVyJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMTEwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMzA0IDQ4YzAgMjYuNTEtMjEuNDkgNDgtNDggNDhzLTQ4LTIxLjQ5LTQ4LTQ4IDIxLjQ5LTQ4IDQ4LTQ4IDQ4IDIxLjQ5IDQ4IDQ4em0tNDggMzY4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5LTQ4LTQ4LTQ4em0yMDgtMjA4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5LTQ4LTQ4LTQ4ek05NiAyNTZjMC0yNi41MS0yMS40OS00OC00OC00OFMwIDIyOS40OSAwIDI1NnMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OHptMTIuOTIyIDk5LjA3OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OGMwLTI2LjUwOS0yMS40OTEtNDgtNDgtNDh6bTI5NC4xNTYgMGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OGMwLTI2LjUwOS0yMS40OS00OC00OC00OHpNMTA4LjkyMiA2MC45MjJjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDkxLTQ4LTQ4LTQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHsgICAgICAgICAgIFxuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuICBcbmV4cG9ydHMuZmFTcGlubmVyID0gZXhwb3J0cy5kZWZpbml0aW9uOyAgICAgICAgICAgXG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTsgXG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIvLyBAQG1hdGNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ21hdGNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIE1BVENILCAkbWF0Y2gpIHtcbiAgLy8gMjEuMS4zLjExIFN0cmluZy5wcm90b3R5cGUubWF0Y2gocmVnZXhwKVxuICByZXR1cm4gW2Z1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRtYXRjaF07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=