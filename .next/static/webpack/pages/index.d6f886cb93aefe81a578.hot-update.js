webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: fakeCategorizedRequest, matchStateToTermWithHeaders, matchStateToTerm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fakeCategorizedRequest\", function() { return fakeCategorizedRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchStateToTermWithHeaders\", function() { return matchStateToTermWithHeaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchStateToTerm\", function() { return matchStateToTerm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-autocomplete */ \"./node_modules/react-autocomplete/build/lib/Autocomplete.js\");\n/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tophy/GitHub/dictionary-template/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n // requires a loader\n\n\n\nfunction fakeCategorizedRequest(value, english, cb) {\n  if (english) {\n    setTimeout(cb, 500, value ? getCategorizedStates1().filter(function (state) {\n      return matchStateToTermWithHeaders(state, value);\n    }) : getCategorizedStates1());\n  } else {\n    setTimeout(cb, 500, value ? getCategorizedStates().filter(function (state) {\n      return matchStateToTermWithHeaders(state, value);\n    }) : getCategorizedStates());\n  }\n}\nfunction matchStateToTermWithHeaders(state, value) {\n  return state.header || state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;\n}\nfunction matchStateToTerm(state, value) {\n  return state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;\n}\n\nvar Home = /*#__PURE__*/function (_Component) {\n  Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _dictionary;\n\n    var _this;\n\n    Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      entrySearched: false,\n      search: '',\n      searched: '',\n      dictionary: (_dictionary = {\n        \"hunt\": [\"pissur-\", \"verb\", \"pissurtuq\", \"she is hunting\", \"\", \"\", \"\", \"hunting.jpg\", \"\", \"\"],\n        \"coat\": [\"paltuuk\", \"noun\", \"\", \"\", \"paltuugia\", \"take off your coat\", \"atkuk\", \"coat.jpag\", \"\", \"\"],\n        \"boat\": [\"angyaq\", \"noun\", \"\", \"\", \"Angyateng-llu aqvaluku cupumarian un’a kuik.\", \"And (they) went and got their boat after the ice in that river had gone out. (ELN 1990:17)\", \"angsaq\", \"boat.jpg\", \"\", \"\"],\n        \"\": [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]\n      }, Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), _dictionary),\n      returnMessage: \"\",\n      results: [],\n      entryExists: false,\n      value: '',\n      unitedStates: [],\n      loading: false,\n      searchIn: true,\n      //true is english, false is inupiaq\n      wordSearched: false\n    };\n    _this.requestTimer = null;\n    return _this;\n  }\n\n  Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, [{\n    key: \"inputClicked\",\n    value: function inputClicked(event, data) {\n      // console.log('you clicked the button!')\n      // console.log(data)\n      this.setState({\n        entrySearched: true\n      });\n\n      if (this.state.search in this.state.dictionary) {\n        this.setState({\n          entryExists: true,\n          returnMessage: '',\n          results: this.state.dictionary[this.state.search]\n        });\n      } else {\n        this.setState({\n          returnMessage: 'No results. :('\n        });\n      }\n    }\n  }, {\n    key: \"onChangeSearch\",\n    value: function onChangeSearch(data) {\n      // console.log(data.value)\n      this.setState({\n        search: data\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var value = \"\";\n      var entry = ['tuntuvak', 'moose (alces alces)', 'noun', 'Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.', 'Then her father pointed out to her the moose tracks, and they followed those tracks all morning.'];\n      console.log(this.state);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            display: 'flex',\n            padding: '20px'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              width: '90px',\n              fontFamily: 'serif'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              style: {\n                fontSize: '27px',\n                fontWeight: '500'\n              },\n              children: \"Yup'ik\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              style: {\n                fontSize: '17px',\n                fontWeight: '400',\n                paddingTop: '5px'\n              },\n              children: \"Dictionary\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n            fluid: true,\n            size: \"huge\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_11__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJmYWtlQ2F0ZWdvcml6ZWRSZXF1ZXN0IiwidmFsdWUiLCJlbmdsaXNoIiwiY2IiLCJzZXRUaW1lb3V0IiwiZ2V0Q2F0ZWdvcml6ZWRTdGF0ZXMxIiwiZmlsdGVyIiwic3RhdGUiLCJtYXRjaFN0YXRlVG9UZXJtV2l0aEhlYWRlcnMiLCJnZXRDYXRlZ29yaXplZFN0YXRlcyIsImhlYWRlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXRjaFN0YXRlVG9UZXJtIiwiSG9tZSIsInByb3BzIiwiZW50cnlTZWFyY2hlZCIsInNlYXJjaCIsInNlYXJjaGVkIiwiZGljdGlvbmFyeSIsInJldHVybk1lc3NhZ2UiLCJyZXN1bHRzIiwiZW50cnlFeGlzdHMiLCJ1bml0ZWRTdGF0ZXMiLCJsb2FkaW5nIiwic2VhcmNoSW4iLCJ3b3JkU2VhcmNoZWQiLCJyZXF1ZXN0VGltZXIiLCJldmVudCIsImRhdGEiLCJzZXRTdGF0ZSIsImVudHJ5IiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJwYWRkaW5nIiwid2lkdGgiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicGFkZGluZ1RvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0NBQ2dFOztBQUNoRTtBQUNBO0FBRU8sU0FBU0Esc0JBQVQsQ0FBZ0NDLEtBQWhDLEVBQXVDQyxPQUF2QyxFQUFnREMsRUFBaEQsRUFBb0Q7QUFDekQsTUFBSUQsT0FBSixFQUFhO0FBQ1hFLGNBQVUsQ0FBQ0QsRUFBRCxFQUFLLEdBQUwsRUFBVUYsS0FBSyxHQUN2QkkscUJBQXFCLEdBQUdDLE1BQXhCLENBQStCLFVBQUFDLEtBQUs7QUFBQSxhQUFJQywyQkFBMkIsQ0FBQ0Qs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QUFSLENBQVksS0FBSzNCLEtBQWpCO0FBQ0EsMEJBQ0k7QUFBQSwrQkFDRTtBQUFLLGVBQUssRUFBRTtBQUFDNEIsbUJBQU8sRUFBQyxNQUFUO0FBQWdCQyxtQkFBTyxFQUFDO0FBQXhCLFdBQVo7QUFBQSxrQ0FFRTtBQUFLLGlCQUFLLEVBQUU7QUFBQ0MsbUJBQUssRUFBQyxNQUFQO0FBQWNDLHdCQUFVLEVBQUM7QUFBekIsYUFBWjtBQUFBLG9DQUNFO0FBQUssbUJBQUssRUFBRTtBQUFDQyx3QkFBUSxFQUFDLE1BQVY7QUFBaUJDLDBCQUFVLEVBQUM7QUFBNUIsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUssbUJBQUssRUFBRTtBQUFDRCx3QkFBUSxFQUFDLE1BQVY7QUFBaUJDLDBCQUFVLEVBQUMsS0FBNUI7QUFBa0NDLDBCQUFVLEVBQUM7QUFBN0MsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFNRSxxRUFBQyx3REFBRDtBQUFPLGlCQUFLLE1BQVo7QUFBYSxnQkFBSSxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBY0Q7Ozs7RUF6RGdCQyxnRDs7QUE0REozQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcydcbmltcG9ydCB7SW1hZ2UsIElucHV0LCBMaXN0LCBCdXR0b24sIEljb259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXG4gIFN3aXRjaCxcbiAgUm91dGUsXG4gIExpbmtcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ3JlYWN0LWF1dG9jb21wbGV0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWtlQ2F0ZWdvcml6ZWRSZXF1ZXN0KHZhbHVlLCBlbmdsaXNoLCBjYikge1xuICBpZiAoZW5nbGlzaCkge1xuICAgIHNldFRpbWVvdXQoY2IsIDUwMCwgdmFsdWUgP1xuICAgICAgZ2V0Q2F0ZWdvcml6ZWRTdGF0ZXMxKCkuZmlsdGVyKHN0YXRlID0+IG1hdGNoU3RhdGVUb1Rlcm1XaXRoSGVhZGVycyhzdGF0ZSwgdmFsdWUpKSA6XG4gICAgICBnZXRDYXRlZ29yaXplZFN0YXRlczEoKVxuICAgICkgICAgXG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dChjYiwgNTAwLCB2YWx1ZSA/XG4gICAgICBnZXRDYXRlZ29yaXplZFN0YXRlcygpLmZpbHRlcihzdGF0ZSA9PiBtYXRjaFN0YXRlVG9UZXJtV2l0aEhlYWRlcnMoc3RhdGUsIHZhbHVlKSkgOlxuICAgICAgZ2V0Q2F0ZWdvcml6ZWRTdGF0ZXMoKVxuICAgICkgICAgICBcbiAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hTdGF0ZVRvVGVybVdpdGhIZWFkZXJzKHN0YXRlLCB2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHN0YXRlLmhlYWRlciB8fFxuICAgIHN0YXRlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFN0YXRlVG9UZXJtKHN0YXRlLCB2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHN0YXRlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICApXG59XG5cblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbnRyeVNlYXJjaGVkOmZhbHNlLFxuICAgICAgc2VhcmNoOicnLFxuICAgICAgc2VhcmNoZWQ6JycsXG4gICAgICBkaWN0aW9uYXJ5OntcImh1bnRcIjpbXCJwaXNzdXItXCIsXCJ2ZXJiXCIsXCJwaXNzdXJ0dXFcIixcInNoZSBpcyBodW50aW5nXCIsXCJcIixcIlwiLFwiXCIsXCJodW50aW5nLmpwZ1wiLFwiXCIsXCJcIl0sXCJjb2F0XCI6W1wicGFsdHV1a1wiLFwibm91blwiLFwiXCIsXCJcIixcInBhbHR1dWdpYVwiLFwidGFrZSBvZmYgeW91ciBjb2F0XCIsXCJhdGt1a1wiLFwiY29hdC5qcGFnXCIsXCJcIixcIlwiXSxcImJvYXRcIjpbXCJhbmd5YXFcIixcIm5vdW5cIixcIlwiLFwiXCIsXCJBbmd5YXRlbmctbGx1IGFxdmFsdWt1IGN1cHVtYXJpYW4gdW7igJlhIGt1aWsuXCIsXCJBbmQgKHRoZXkpIHdlbnQgYW5kIGdvdCB0aGVpciBib2F0IGFmdGVyIHRoZSBpY2UgaW4gdGhhdCByaXZlciBoYWQgZ29uZSBvdXQuIChFTE4gMTk5MDoxNylcIixcImFuZ3NhcVwiLFwiYm9hdC5qcGdcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFwiXCI6W1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLH0sXG4gICAgICByZXR1cm5NZXNzYWdlOlwiXCIsXG4gICAgICByZXN1bHRzOltdLFxuICAgICAgZW50cnlFeGlzdHM6ZmFsc2UsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB1bml0ZWRTdGF0ZXM6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBzZWFyY2hJbjogdHJ1ZSwgLy90cnVlIGlzIGVuZ2xpc2gsIGZhbHNlIGlzIGludXBpYXFcblxuICAgICAgd29yZFNlYXJjaGVkOmZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnJlcXVlc3RUaW1lciA9IG51bGxcbiAgfVxuXG4gIGlucHV0Q2xpY2tlZChldmVudCxkYXRhKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIHRoZSBidXR0b24hJylcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHRoaXMuc2V0U3RhdGUoe2VudHJ5U2VhcmNoZWQ6dHJ1ZX0pXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2ggaW4gdGhpcy5zdGF0ZS5kaWN0aW9uYXJ5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbnRyeUV4aXN0czp0cnVlLHJldHVybk1lc3NhZ2U6JycscmVzdWx0czp0aGlzLnN0YXRlLmRpY3Rpb25hcnlbdGhpcy5zdGF0ZS5zZWFyY2hdfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmV0dXJuTWVzc2FnZTonTm8gcmVzdWx0cy4gOignfSlcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlU2VhcmNoKGRhdGEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnZhbHVlKVxuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpkYXRhfSk7ICAgICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHZhbHVlPVwiXCJcbiAgICBsZXQgZW50cnk9Wyd0dW50dXZhaycsJ21vb3NlIChhbGNlcyBhbGNlcyknLCdub3VuJywnUGlxZXJsdW5pIGFhdGlpbiB0dW50dXZpbnJhcm5layB0dW1uZWsgYXBlcnR1dWxsdWt1LCB0dWEtaS1sbHUgdW51YWt1cnBhayBtYWxpZ2dsdWtpIHRhbWFrdXQgdHVtZXQuJywnVGhlbiBoZXIgZmF0aGVyIHBvaW50ZWQgb3V0IHRvIGhlciB0aGUgbW9vc2UgdHJhY2tzLCBhbmQgdGhleSBmb2xsb3dlZCB0aG9zZSB0cmFja3MgYWxsIG1vcm5pbmcuJ11cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLHBhZGRpbmc6JzIwcHgnfX0+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonOTBweCcsZm9udEZhbWlseTonc2VyaWYnfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMjdweCcsZm9udFdlaWdodDonNTAwJ319Pll1cCdpazwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6JzE3cHgnLGZvbnRXZWlnaHQ6JzQwMCcscGFkZGluZ1RvcDonNXB4J319PkRpY3Rpb25hcnk8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPElucHV0IGZsdWlkIHNpemU9J2h1Z2UnLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})