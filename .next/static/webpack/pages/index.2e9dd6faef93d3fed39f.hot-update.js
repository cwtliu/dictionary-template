webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: fakeCategorizedRequest, matchStateToTermWithHeaders, matchStateToTerm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fakeCategorizedRequest\", function() { return fakeCategorizedRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchStateToTermWithHeaders\", function() { return matchStateToTermWithHeaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchStateToTerm\", function() { return matchStateToTerm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-autocomplete */ \"./node_modules/react-autocomplete/build/lib/Autocomplete.js\");\n/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tophy/GitHub/dictionary-template/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n // requires a loader\n\n\n\nfunction fakeCategorizedRequest(value, english, cb) {\n  if (english) {\n    setTimeout(cb, 500, value ? getCategorizedStates1().filter(function (state) {\n      return matchStateToTermWithHeaders(state, value);\n    }) : getCategorizedStates1());\n  } else {\n    setTimeout(cb, 500, value ? getCategorizedStates().filter(function (state) {\n      return matchStateToTermWithHeaders(state, value);\n    }) : getCategorizedStates());\n  }\n}\nfunction matchStateToTermWithHeaders(state, value) {\n  return state.header || state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;\n}\nfunction matchStateToTerm(state, value) {\n  return state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;\n}\n\nvar Home = /*#__PURE__*/function (_Component) {\n  Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _dictionary;\n\n    var _this;\n\n    Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      entrySearched: false,\n      search: '',\n      searched: '',\n      dictionary: (_dictionary = {\n        \"hunt\": [\"pissur-\", \"verb\", \"pissurtuq\", \"she is hunting\", \"\", \"\", \"\", \"hunting.jpg\", \"\", \"\"],\n        \"coat\": [\"paltuuk\", \"noun\", \"\", \"\", \"paltuugia\", \"take off your coat\", \"atkuk\", \"coat.jpag\", \"\", \"\"],\n        \"boat\": [\"angyaq\", \"noun\", \"\", \"\", \"Angyateng-llu aqvaluku cupumarian un’a kuik.\", \"And (they) went and got their boat after the ice in that river had gone out. (ELN 1990:17)\", \"angsaq\", \"boat.jpg\", \"\", \"\"],\n        \"\": [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]\n      }, Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), _dictionary),\n      returnMessage: \"\",\n      results: [],\n      entryExists: false,\n      value: '',\n      unitedStates: [],\n      loading: false,\n      searchIn: true,\n      //true is english, false is inupiaq\n      expand: false,\n      wordSearched: false,\n      entriesExist: false\n    };\n    _this.requestTimer = null;\n    return _this;\n  }\n\n  Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, [{\n    key: \"inputClicked\",\n    value: function inputClicked(event, data) {\n      // console.log('you clicked the button!')\n      // console.log(data)\n      this.setState({\n        entrySearched: true\n      });\n\n      if (this.state.search === 'moose') {\n        this.setState({\n          entriesExist: true\n        });\n      }\n\n      if (this.state.search in this.state.dictionary) {\n        this.setState({\n          entryExists: true,\n          returnMessage: '',\n          results: this.state.dictionary[this.state.search]\n        });\n      } else {\n        this.setState({\n          returnMessage: 'No results. :('\n        });\n      }\n    }\n  }, {\n    key: \"onChangeSearch\",\n    value: function onChangeSearch(data) {\n      console.log(data);\n      this.setState({\n        search: data\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // let value=\"\"\n      // let entry2=['tuntuvak','moose (alces alces)','noun','Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.','Then her father pointed out to her the moose tracks, and they followed those tracks all morning.']\n      // let entry=[['nulirta','bull (caribou, moose, cattle)','noun','...malruk-was nulirtek, ...elliitnguarkat','...two bulls, ...for an offering'],['tuntuvak','moose (alces alces)','noun','Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.','Then her father pointed out to her the moose tracks, and they followed those tracks all morning.']]\n      console.log(this.state);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            fontSize: '30px',\n            padding: '20px',\n            fontWeight: 'bold',\n            fontFamily: 'serif'\n          },\n          children: \" My Spanish Dictionary \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Image\"], {\n          style: {\n            height: '150px'\n          },\n          src: \"https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/englisharrow.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n          action: {\n            icon: 'search'\n          },\n          placeholder: \"Search...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Image\"], {\n          style: {\n            height: '150px'\n          },\n          src: \"https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/bookworm.jpg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_11__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJmYWtlQ2F0ZWdvcml6ZWRSZXF1ZXN0IiwidmFsdWUiLCJlbmdsaXNoIiwiY2IiLCJzZXRUaW1lb3V0IiwiZ2V0Q2F0ZWdvcml6ZWRTdGF0ZXMxIiwiZmlsdGVyIiwic3RhdGUiLCJtYXRjaFN0YXRlVG9UZXJtV2l0aEhlYWRlcnMiLCJnZXRDYXRlZ29yaXplZFN0YXRlcyIsImhlYWRlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXRjaFN0YXRlVG9UZXJtIiwiSG9tZSIsInByb3BzIiwiZW50cnlTZWFyY2hlZCIsInNlYXJjaCIsInNlYXJjaGVkIiwiZGljdGlvbmFyeSIsInJldHVybk1lc3NhZ2UiLCJyZXN1bHRzIiwiZW50cnlFeGlzdHMiLCJ1bml0ZWRTdGF0ZXMiLCJsb2FkaW5nIiwic2VhcmNoSW4iLCJleHBhbmQiLCJ3b3JkU2VhcmNoZWQiLCJlbnRyaWVzRXhpc3QiLCJyZXF1ZXN0VGltZXIiLCJldmVudCIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmb250U2l6ZSIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImhlaWdodCIsImljb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtDQUNnRTs7QUFDaEU7QUFDQTtBQUVPLFNBQVNBLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1Q0MsT0FBdkMsRUFBZ0RDLEVBQWhELEVBQW9EO0FBQ3pELE1BQUlELE9BQUosRUFBYTtBQUNYRSxjQUFVLENBQUNELEVBQUQsRUFBSyxHQUFMLEVBQVVGLEtBQUssR0FDdkJJLHFCQUFxQixHQUFHQyxNQUF4QixDQUErQixVQUFBQyxLQUFLO0FBQUEsYUFBSUMsMkJBQTJCLENBQUNE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QUFMLENBQWM7QUFBQ2YsY0FBTSxFQUFDYztBQUFSLE9BQWQ7QUFDRDs7OzZCQUVRO0FBQ1A7QUFDQTtBQUNBO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUs1QixLQUFqQjtBQUNBLDBCQUNJO0FBQUEsZ0NBQ0U7QUFBSyxlQUFLLEVBQUU7QUFBQzZCLG9CQUFRLEVBQUMsTUFBVjtBQUFpQkMsbUJBQU8sRUFBQyxNQUF6QjtBQUFnQ0Msc0JBQVUsRUFBQyxNQUEzQztBQUFrREMsc0JBQVUsRUFBQztBQUE3RCxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBTyxlQUFLLEVBQUU7QUFBQ0Msa0JBQU0sRUFBQztBQUFSLFdBQWQ7QUFBZ0MsYUFBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyx3REFBRDtBQUFPLGdCQUFNLEVBQUU7QUFBRUMsZ0JBQUksRUFBRTtBQUFSLFdBQWY7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUUscUVBQUMsd0RBQUQ7QUFBTyxlQUFLLEVBQUU7QUFBQ0Qsa0JBQU0sRUFBQztBQUFSLFdBQWQ7QUFBZ0MsYUFBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFTRDs7OztFQTFEZ0JFLGdEOztBQTZESjNCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJ1xuaW1wb3J0IHtJbWFnZSwgSW5wdXQsIExpc3QsIEJ1dHRvbiwgSWNvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgU3dpdGNoLFxuICBSb3V0ZSxcbiAgTGlua1xufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJztcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAncmVhY3QtYXV0b2NvbXBsZXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZha2VDYXRlZ29yaXplZFJlcXVlc3QodmFsdWUsIGVuZ2xpc2gsIGNiKSB7XG4gIGlmIChlbmdsaXNoKSB7XG4gICAgc2V0VGltZW91dChjYiwgNTAwLCB2YWx1ZSA/XG4gICAgICBnZXRDYXRlZ29yaXplZFN0YXRlczEoKS5maWx0ZXIoc3RhdGUgPT4gbWF0Y2hTdGF0ZVRvVGVybVdpdGhIZWFkZXJzKHN0YXRlLCB2YWx1ZSkpIDpcbiAgICAgIGdldENhdGVnb3JpemVkU3RhdGVzMSgpXG4gICAgKSAgICBcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KGNiLCA1MDAsIHZhbHVlID9cbiAgICAgIGdldENhdGVnb3JpemVkU3RhdGVzKCkuZmlsdGVyKHN0YXRlID0+IG1hdGNoU3RhdGVUb1Rlcm1XaXRoSGVhZGVycyhzdGF0ZSwgdmFsdWUpKSA6XG4gICAgICBnZXRDYXRlZ29yaXplZFN0YXRlcygpXG4gICAgKSAgICAgIFxuICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFN0YXRlVG9UZXJtV2l0aEhlYWRlcnMoc3RhdGUsIHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgc3RhdGUuaGVhZGVyIHx8XG4gICAgc3RhdGUubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoU3RhdGVUb1Rlcm0oc3RhdGUsIHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgc3RhdGUubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gIClcbn1cblxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVudHJ5U2VhcmNoZWQ6ZmFsc2UsXG4gICAgICBzZWFyY2g6JycsXG4gICAgICBzZWFyY2hlZDonJyxcbiAgICAgIGRpY3Rpb25hcnk6e1wiaHVudFwiOltcInBpc3N1ci1cIixcInZlcmJcIixcInBpc3N1cnR1cVwiLFwic2hlIGlzIGh1bnRpbmdcIixcIlwiLFwiXCIsXCJcIixcImh1bnRpbmcuanBnXCIsXCJcIixcIlwiXSxcImNvYXRcIjpbXCJwYWx0dXVrXCIsXCJub3VuXCIsXCJcIixcIlwiLFwicGFsdHV1Z2lhXCIsXCJ0YWtlIG9mZiB5b3VyIGNvYXRcIixcImF0a3VrXCIsXCJjb2F0LmpwYWdcIixcIlwiLFwiXCJdLFwiYm9hdFwiOltcImFuZ3lhcVwiLFwibm91blwiLFwiXCIsXCJcIixcIkFuZ3lhdGVuZy1sbHUgYXF2YWx1a3UgY3VwdW1hcmlhbiB1buKAmWEga3Vpay5cIixcIkFuZCAodGhleSkgd2VudCBhbmQgZ290IHRoZWlyIGJvYXQgYWZ0ZXIgdGhlIGljZSBpbiB0aGF0IHJpdmVyIGhhZCBnb25lIG91dC4gKEVMTiAxOTkwOjE3KVwiLFwiYW5nc2FxXCIsXCJib2F0LmpwZ1wiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sXCJcIjpbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sfSxcbiAgICAgIHJldHVybk1lc3NhZ2U6XCJcIixcbiAgICAgIHJlc3VsdHM6W10sXG4gICAgICBlbnRyeUV4aXN0czpmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHVuaXRlZFN0YXRlczogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHNlYXJjaEluOiB0cnVlLCAvL3RydWUgaXMgZW5nbGlzaCwgZmFsc2UgaXMgaW51cGlhcVxuICAgICAgZXhwYW5kOmZhbHNlLFxuICAgICAgd29yZFNlYXJjaGVkOmZhbHNlLFxuICAgICAgZW50cmllc0V4aXN0OmZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnJlcXVlc3RUaW1lciA9IG51bGxcbiAgfVxuXG4gIGlucHV0Q2xpY2tlZChldmVudCxkYXRhKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIHRoZSBidXR0b24hJylcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHRoaXMuc2V0U3RhdGUoe2VudHJ5U2VhcmNoZWQ6dHJ1ZX0pXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2ggPT09ICdtb29zZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VudHJpZXNFeGlzdDp0cnVlfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2ggaW4gdGhpcy5zdGF0ZS5kaWN0aW9uYXJ5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbnRyeUV4aXN0czp0cnVlLHJldHVybk1lc3NhZ2U6JycscmVzdWx0czp0aGlzLnN0YXRlLmRpY3Rpb25hcnlbdGhpcy5zdGF0ZS5zZWFyY2hdfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmV0dXJuTWVzc2FnZTonTm8gcmVzdWx0cy4gOignfSlcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlU2VhcmNoKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpkYXRhfSk7ICAgICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gbGV0IHZhbHVlPVwiXCJcbiAgICAvLyBsZXQgZW50cnkyPVsndHVudHV2YWsnLCdtb29zZSAoYWxjZXMgYWxjZXMpJywnbm91bicsJ1BpcWVybHVuaSBhYXRpaW4gdHVudHV2aW5yYXJuZWsgdHVtbmVrIGFwZXJ0dXVsbHVrdSwgdHVhLWktbGx1IHVudWFrdXJwYWsgbWFsaWdnbHVraSB0YW1ha3V0IHR1bWV0LicsJ1RoZW4gaGVyIGZhdGhlciBwb2ludGVkIG91dCB0byBoZXIgdGhlIG1vb3NlIHRyYWNrcywgYW5kIHRoZXkgZm9sbG93ZWQgdGhvc2UgdHJhY2tzIGFsbCBtb3JuaW5nLiddXG4gICAgLy8gbGV0IGVudHJ5PVtbJ251bGlydGEnLCdidWxsIChjYXJpYm91LCBtb29zZSwgY2F0dGxlKScsJ25vdW4nLCcuLi5tYWxydWstd2FzIG51bGlydGVrLCAuLi5lbGxpaXRuZ3VhcmthdCcsJy4uLnR3byBidWxscywgLi4uZm9yIGFuIG9mZmVyaW5nJ10sWyd0dW50dXZhaycsJ21vb3NlIChhbGNlcyBhbGNlcyknLCdub3VuJywnUGlxZXJsdW5pIGFhdGlpbiB0dW50dXZpbnJhcm5layB0dW1uZWsgYXBlcnR1dWxsdWt1LCB0dWEtaS1sbHUgdW51YWt1cnBhayBtYWxpZ2dsdWtpIHRhbWFrdXQgdHVtZXQuJywnVGhlbiBoZXIgZmF0aGVyIHBvaW50ZWQgb3V0IHRvIGhlciB0aGUgbW9vc2UgdHJhY2tzLCBhbmQgdGhleSBmb2xsb3dlZCB0aG9zZSB0cmFja3MgYWxsIG1vcm5pbmcuJ11dXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMzBweCcscGFkZGluZzonMjBweCcsZm9udFdlaWdodDonYm9sZCcsZm9udEZhbWlseTonc2VyaWYnfX0+IE15IFNwYW5pc2ggRGljdGlvbmFyeSA8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2Ugc3R5bGU9e3toZWlnaHQ6JzE1MHB4J319IHNyYz1cImh0dHBzOi8veXVwaWttb2R1bGVzd2ViLnMzLmFtYXpvbmF3cy5jb20vc3RhdGljL2V4ZXJjaXNlMS9lbmdsaXNoYXJyb3cucG5nXCIvPlxuICAgICAgICAgIDxJbnB1dCBhY3Rpb249e3sgaWNvbjogJ3NlYXJjaCcgfX0gcGxhY2Vob2xkZXI9J1NlYXJjaC4uLicgLz5cbiAgICAgICAgICA8SW1hZ2Ugc3R5bGU9e3toZWlnaHQ6JzE1MHB4J319IHNyYz1cImh0dHBzOi8veXVwaWttb2R1bGVzd2ViLnMzLmFtYXpvbmF3cy5jb20vc3RhdGljL2V4ZXJjaXNlMS9ib29rd29ybS5qcGdcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})