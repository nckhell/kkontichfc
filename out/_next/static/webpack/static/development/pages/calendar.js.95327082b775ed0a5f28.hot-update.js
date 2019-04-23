webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./src/components/calendar/CalendarTableComponent.js":
/*!***********************************************************!*\
  !*** ./src/components/calendar/CalendarTableComponent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api_formatDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api/formatDate.js */ "./src/utils/api/formatDate.js");
var _jsxFileName = "/Users/nick/Documents/Github/kkontichfc/src/components/calendar/CalendarTableComponent.js";




var CalendarTableComponent = function CalendarTableComponent(props) {
  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Datum"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Thuisploeg"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Uitploeg"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Score"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, data && data.map(function (calendarEntry) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: calendarEntry.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, calendarEntry.startDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, calendarEntry.homeTeam.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, calendarEntry.awayTeam.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, calendarEntry.outcome.homeTeamGoals, "-", calendarEntry.outcome.awayTeamGoals));
  }))));
};

CalendarTableComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarTableComponent);

/***/ }),

/***/ "./src/utils/api/formatDate.js":
/*!*************************************!*\
  !*** ./src/utils/api/formatDate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (dateString) {
  var utcString = new Date(dateString).toUTCString();
  var splitDate = utcString.split(" ");
  var dateArr = splitDate.slice(1, 4); // Swap day and month.
  // dateArr.splice(1, 1, dateArr.splice(0, 1, dateArr[1])[0])

  return dateArr.join(" ");
});

/***/ })

})
//# sourceMappingURL=calendar.js.95327082b775ed0a5f28.hot-update.js.map