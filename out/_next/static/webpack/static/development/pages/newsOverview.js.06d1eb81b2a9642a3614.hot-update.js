webpackHotUpdate("static/development/pages/newsOverview.js",{

/***/ "./pages/newsOverview.js":
/*!*******************************!*\
  !*** ./pages/newsOverview.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content/nieuws/build/summary.json */ "./content/nieuws/build/summary.json");
var _content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/nieuws/build/summary.json */ "./content/nieuws/build/summary.json", 1);
/* harmony import */ var next_prefixed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-prefixed */ "./node_modules/next-prefixed/dist/index.js");
/* harmony import */ var next_prefixed__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_prefixed__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_utils_news__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/utils/news */ "./src/utils/news.js");
/* harmony import */ var _src_utils_dateTimeFormat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/utils/dateTimeFormat */ "./src/utils/dateTimeFormat.js");







var _jsxFileName = "/Users/nick/Documents/Github/kkontichfc/pages/newsOverview.js";

/* eslint-disable global-require */







var NewsOverviewPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NewsOverviewPage, _Component);

  function NewsOverviewPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewsOverviewPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NewsOverviewPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      newsCategories: Object(_src_utils_news__WEBPACK_IMPORTED_MODULE_11__["getAllNewsCategories"])(),
      seasons: Object(_src_utils_news__WEBPACK_IMPORTED_MODULE_11__["getAllSeasonsWithNews"])(),
      newsList: Object(_src_utils_news__WEBPACK_IMPORTED_MODULE_11__["sortNewsSummaryJsonOnDate"])(_content_nieuws_build_summary_json__WEBPACK_IMPORTED_MODULE_9__)
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NewsOverviewPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          newsCategories = _this$state.newsCategories,
          seasons = _this$state.seasons,
          newsList = _this$state.newsList;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "center mw6 pa3 pa4-ns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, newsList.map(function (newsArticle, i) {
        var href = Object(_src_utils_news__WEBPACK_IMPORTED_MODULE_11__["makeUrl"])(newsArticle);
        var date = Object(_src_utils_dateTimeFormat__WEBPACK_IMPORTED_MODULE_12__["formatDate"])(newsArticle.date);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, newsArticle.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, newsArticle.preview), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, date), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_prefixed__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          href: href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Meer lezen..")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }));
      })));
    }
  }]);

  return NewsOverviewPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NewsOverviewPage);

/***/ })

})
//# sourceMappingURL=newsOverview.js.06d1eb81b2a9642a3614.hot-update.js.map