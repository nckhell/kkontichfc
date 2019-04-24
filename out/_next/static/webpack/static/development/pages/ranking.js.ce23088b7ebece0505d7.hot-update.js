webpackHotUpdate("static/development/pages/ranking.js",{

/***/ "./src/components/ranking/RankingComponent.js":
/*!****************************************************!*\
  !*** ./src/components/ranking/RankingComponent.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _RankingTableComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RankingTableComponent */ "./src/components/ranking/RankingTableComponent.js");
/* harmony import */ var _tabs_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/Tabs */ "./src/components/tabs/Tabs.js");
/* harmony import */ var _utils_ranking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/ranking */ "./src/utils/ranking.js");





var _jsxFileName = "/Users/nick/Documents/Github/kkontichfc/src/components/ranking/RankingComponent.js";






var RankingComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RankingComponent, _Component);

  function RankingComponent() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RankingComponent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RankingComponent).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RankingComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var rankings = this.props.rankings;
      rankings = undefined;

      if (rankings) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tabs_Tabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, rankings.map(function (ranking) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: ranking.type,
            label: Object(_utils_ranking__WEBPACK_IMPORTED_MODULE_9__["getReadableRankingType"])(ranking.type),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_RankingTableComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: ranking.type,
            typeOfRanking: ranking.type,
            listOfTeams: ranking.teams,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }));
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "No rankings");
    }
  }]);

  return RankingComponent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

RankingComponent.propTypes = {
  rankings: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RankingComponent);

/***/ })

})
//# sourceMappingURL=ranking.js.ce23088b7ebece0505d7.hot-update.js.map