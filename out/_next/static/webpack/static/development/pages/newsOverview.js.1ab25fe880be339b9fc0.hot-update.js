webpackHotUpdate("static/development/pages/newsOverview.js",{

/***/ "./src/utils/news.js":
/*!***************************!*\
  !*** ./src/utils/news.js ***!
  \***************************/
/*! exports provided: getAllNewsCategories, getAllSeasonsWithNews, getCategoryFromNewsPost, getSeasonFromNewsPost, sortNewsSummaryJsonOnDate, limit, makeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllNewsCategories", function() { return getAllNewsCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeasonsWithNews", function() { return getAllSeasonsWithNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryFromNewsPost", function() { return getCategoryFromNewsPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeasonFromNewsPost", function() { return getSeasonFromNewsPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortNewsSummaryJsonOnDate", function() { return sortNewsSummaryJsonOnDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limit", function() { return limit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUrl", function() { return makeUrl; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/nieuws/build/summary.json */ "./content/nieuws/build/summary.json");
var _content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/nieuws/build/summary.json */ "./content/nieuws/build/summary.json", 1);


/* eslint-disable no-nested-ternary */

/* eslint-disable no-unused-expressions */

var getAllNewsCategories = function getAllNewsCategories() {
  var newsCategories = [];
  _content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_1__.fileMap && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_1__.fileMap).forEach(function (file) {
    // Handle pages
    var newsCategory = file.split("/").slice(-2)[0];

    if (newsCategories.indexOf(newsCategory) === -1) {
      newsCategories.push(newsCategory);
    }
  });
  return newsCategories;
};
var getAllSeasonsWithNews = function getAllSeasonsWithNews() {
  var seasons = [];
  _content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_1__.fileMap && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_1__.fileMap).forEach(function (file) {
    var season = file.split("/").slice(-3)[0];

    if (seasons.indexOf(season) === -1) {
      seasons.push(season);
    }
  });
  return seasons;
};
var getCategoryFromNewsPost = function getCategoryFromNewsPost(newsPostDir) {
  return newsPostDir.file.split("/").slice(-1)[0];
};
var getSeasonFromNewsPost = function getSeasonFromNewsPost(newsPostDir) {
  return newsPostDir.file.split("/").slice(-2)[0];
};
var sortNewsSummaryJsonOnDate = function sortNewsSummaryJsonOnDate(summaryJson) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "desc";
  return summaryJson && summaryJson.fileMap && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(summaryJson.fileMap).filter(function (file) {
    if (file.indexOf("content/nieuws") === 0) {
      return true;
    }

    return false;
  }).map(function (file) {
    return summaryJson.fileMap[file];
  }).sort(function (a, b) {
    var aDate = Date.parse(a.date);
    var bDate = Date.parse(b.date);

    if (order === "asc") {
      return bDate < aDate ? 1 : bDate > aDate ? -1 : 0;
    }

    return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
  });
};
var limit = function limit(summaryJson, amountOfArticles) {
  return amountOfArticles.slice(0, amountOfArticles - 1);
};
var makeUrl = function makeUrl(article) {
  return "".concat(article.dir.split("content/nieuws/build/").join("nieuws/"), "/").concat(article.base.split(".json").join("/"));
};

/***/ })

})
//# sourceMappingURL=newsOverview.js.1ab25fe880be339b9fc0.hot-update.js.map