webpackHotUpdate("static/development/pages/ranking.js",{

/***/ "./pages/ranking.js":
/*!**************************!*\
  !*** ./pages/ranking.js ***!
  \**************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_services_api_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/services/api/fetch */ "./src/services/api/fetch.js");
/* harmony import */ var _src_config_api_kbvb_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/config/api/kbvb_graphql */ "./src/config/api/kbvb_graphql.js");
/* harmony import */ var _src_config_api_kbvb_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_config_api_kbvb_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_ranking_RankingComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/ranking/RankingComponent */ "./src/components/ranking/RankingComponent.js");







var _jsxFileName = "/Users/nick/Documents/Github/kkontichfc/pages/ranking.js";






var RankingPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RankingPage, _Component);

  function RankingPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RankingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RankingPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isLoading: true,
      rankings: [],
      error: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RankingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchRanking();
    }
  }, {
    key: "fetchRanking",
    value: function fetchRanking() {
      var _this2 = this;

      var teamID = this.props.teamID;
      Object(_src_services_api_fetch__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_config_api_kbvb_graphql__WEBPACK_IMPORTED_MODULE_10___default.a[teamID].ranking.url).then(function (data) {
        return _this2.setState({
          rankings: data.data.seriesRankings,
          isLoading: false
        });
      }).catch(function (error) {
        return _this2.setState({
          error: error,
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          rankings = _this$state.rankings,
          error = _this$state.error;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Calendar"), error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, error.message) : null, !isLoading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_ranking_RankingComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        rankings: rankings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }) : // If there is a delay in data, let's let the user know it's loading
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Loading..."));
    }
  }]);

  return RankingPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

RankingPage.propTypes = {
  teamID: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};

RankingPage.getInitialProps = function (_ref) {
  var query = _ref.query;
  var teamID = query.teamID;
  return {
    teamID: teamID
  };
};

/* harmony default export */ __webpack_exports__["default"] = (RankingPage);

/***/ })

})
//# sourceMappingURL=ranking.js.102f9e2d2c0b4140c2b4.hot-update.js.map