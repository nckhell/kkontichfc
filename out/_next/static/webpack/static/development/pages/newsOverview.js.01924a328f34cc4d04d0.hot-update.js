webpackHotUpdate("static/development/pages/newsOverview.js",{

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
  var options = {
    weekday: "short",
    month: "short",
    day: "numeric"
  };
  return new Date(dateString).toLocaleDateString();
};
var formatTime = function formatTime(dateString) {
  var date = new Date(dateString);
  var time = date.toLocaleTimeString();
  var removeSeconds = time.split(":");
  return removeSeconds.slice(0, -1).join(":");
};

/***/ })

})
//# sourceMappingURL=newsOverview.js.01924a328f34cc4d04d0.hot-update.js.map