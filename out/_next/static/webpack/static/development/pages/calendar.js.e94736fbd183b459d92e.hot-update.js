webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./src/utils/dateTimeFormat.js":
/*!*************************************!*\
  !*** ./src/utils/dateTimeFormat.js ***!
  \*************************************/
/*! exports provided: formatDate, formatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
var formatDate = function formatDate(dateString) {
  var utcString = new Date(dateString).toUTCString();
  var splitDate = utcString.split(" ");
  var dateArr = splitDate.slice(1, 4); // Swap day and month.
  // dateArr.splice(1, 1, dateArr.splice(0, 1, dateArr[1])[0])

  return dateArr.join(" ").toLowerCase();
};
var formatTime = function formatTime(dateString) {
  var date = new Date(dateString);
  return 2;
};

/***/ })

})
//# sourceMappingURL=calendar.js.e94736fbd183b459d92e.hot-update.js.map