webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./src/utils/date/formatDate.js":
/*!**************************************!*\
  !*** ./src/utils/date/formatDate.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (dateString) {
  var utcString = new Date(dateString).toUTCString();
  var splitDate = utcString.split(" ");
  var dateArr = splitDate.slice(1, 4); // Swap day and month.
  // dateArr.splice(1, 1, dateArr.splice(0, 1, dateArr[1])[0])

  return dateArr.join(" ").toLowerCase();
});

/***/ })

})
//# sourceMappingURL=calendar.js.39b05582fc22695c6075.hot-update.js.map