webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: fakeCategorizedRequest, matchStateToTermWithHeaders, matchStateToTerm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fakeCategorizedRequest\", function() { return fakeCategorizedRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchStateToTermWithHeaders\", function() { return matchStateToTermWithHeaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchStateToTerm\", function() { return matchStateToTerm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-autocomplete */ \"./node_modules/react-autocomplete/build/lib/Autocomplete.js\");\n/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tophy/GitHub/dictionary-template/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n // requires a loader\n\n\n\nfunction fakeCategorizedRequest(value, english, cb) {\n  if (english) {\n    setTimeout(cb, 500, value ? getCategorizedStates1().filter(function (state) {\n      return matchStateToTermWithHeaders(state, value);\n    }) : getCategorizedStates1());\n  } else {\n    setTimeout(cb, 500, value ? getCategorizedStates().filter(function (state) {\n      return matchStateToTermWithHeaders(state, value);\n    }) : getCategorizedStates());\n  }\n}\nfunction matchStateToTermWithHeaders(state, value) {\n  return state.header || state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;\n}\nfunction matchStateToTerm(state, value) {\n  return state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;\n}\n\nvar Home = /*#__PURE__*/function (_Component) {\n  Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _dictionary;\n\n    var _this;\n\n    Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      entrySearched: false,\n      search: '',\n      searched: '',\n      dictionary: (_dictionary = {\n        \"hunt\": [\"pissur-\", \"verb\", \"pissurtuq\", \"she is hunting\", \"\", \"\", \"\", \"hunting.jpg\", \"\", \"\"],\n        \"coat\": [\"paltuuk\", \"noun\", \"\", \"\", \"paltuugia\", \"take off your coat\", \"atkuk\", \"coat.jpag\", \"\", \"\"],\n        \"boat\": [\"angyaq\", \"noun\", \"\", \"\", \"Angyateng-llu aqvaluku cupumarian un’a kuik.\", \"And (they) went and got their boat after the ice in that river had gone out. (ELN 1990:17)\", \"angsaq\", \"boat.jpg\", \"\", \"\"],\n        \"\": [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]\n      }, Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dictionary, \"\", [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]), _dictionary),\n      returnMessage: \"\",\n      results: [],\n      entryExists: false,\n      value: '',\n      unitedStates: [],\n      loading: false,\n      searchIn: true,\n      //true is english, false is inupiaq\n      wordSearched: false\n    };\n    _this.requestTimer = null;\n    return _this;\n  }\n\n  Object(_Users_tophy_GitHub_dictionary_template_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, [{\n    key: \"inputClicked\",\n    value: function inputClicked(event, data) {\n      // console.log('you clicked the button!')\n      // console.log(data)\n      this.setState({\n        entrySearched: true\n      });\n\n      if (this.state.search in this.state.dictionary) {\n        this.setState({\n          entryExists: true,\n          returnMessage: '',\n          results: this.state.dictionary[this.state.search]\n        });\n      } else {\n        this.setState({\n          returnMessage: 'No results. :('\n        });\n      }\n    }\n  }, {\n    key: \"onChangeSearch\",\n    value: function onChangeSearch(data) {\n      console.log(data);\n      this.setState({\n        search: data\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var value = \"\";\n      var entry = ['tuntuvak', 'moose (alces alces)', 'noun', 'Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.', 'Then her father pointed out to her the moose tracks, and they followed those tracks all morning.'];\n      console.log(this.state);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            display: 'flex',\n            padding: '20px'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              width: '90px',\n              fontFamily: 'serif',\n              paddingTop: '5px'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              style: {\n                fontSize: '27px',\n                fontWeight: '500'\n              },\n              children: \"Yup'ik\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              style: {\n                fontSize: '17px',\n                fontWeight: '400',\n                paddingTop: '5px'\n              },\n              children: \"Dictionary\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              flex: 5\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n              fluid: true,\n              size: \"huge\",\n              placeholder: \"Search in Yupik or English\",\n              action: {\n                icon: 'search',\n                transparent: true,\n                size: 'huge',\n                onClick: function onClick() {\n                  return _this2.inputClicked();\n                }\n              },\n              iconPosition: \"right\",\n              onChange: function onChange(e) {\n                return _this2.onChangeSearch(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            position: 'relative',\n            left: '50%',\n            marginLeft: '-220px',\n            width: '440px',\n            height: '80px',\n            border: '1px solid black',\n            borderRadius: '10px',\n            padding: '10px'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              fontWeight: 'bold',\n              textDecoration: 'underline',\n              fontSize: '20px'\n            },\n            children: \"tuntuvak\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              fontSize: '20px'\n            },\n            children: \"moose (alces alces)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Icon\"], {\n            style: {\n              position: 'absolute',\n              fontSize: '30px',\n              top: 0,\n              right: 0\n            },\n            name: \"star outline\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_11__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJmYWtlQ2F0ZWdvcml6ZWRSZXF1ZXN0IiwidmFsdWUiLCJlbmdsaXNoIiwiY2IiLCJzZXRUaW1lb3V0IiwiZ2V0Q2F0ZWdvcml6ZWRTdGF0ZXMxIiwiZmlsdGVyIiwic3RhdGUiLCJtYXRjaFN0YXRlVG9UZXJtV2l0aEhlYWRlcnMiLCJnZXRDYXRlZ29yaXplZFN0YXRlcyIsImhlYWRlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXRjaFN0YXRlVG9UZXJtIiwiSG9tZSIsInByb3BzIiwiZW50cnlTZWFyY2hlZCIsInNlYXJjaCIsInNlYXJjaGVkIiwiZGljdGlvbmFyeSIsInJldHVybk1lc3NhZ2UiLCJyZXN1bHRzIiwiZW50cnlFeGlzdHMiLCJ1bml0ZWRTdGF0ZXMiLCJsb2FkaW5nIiwic2VhcmNoSW4iLCJ3b3JkU2VhcmNoZWQiLCJyZXF1ZXN0VGltZXIiLCJldmVudCIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlbnRyeSIsImRpc3BsYXkiLCJwYWRkaW5nIiwid2lkdGgiLCJmb250RmFtaWx5IiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZsZXgiLCJpY29uIiwidHJhbnNwYXJlbnQiLCJzaXplIiwib25DbGljayIsImlucHV0Q2xpY2tlZCIsImUiLCJvbkNoYW5nZVNlYXJjaCIsInRhcmdldCIsInBvc2l0aW9uIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJoZWlnaHQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0RGVjb3JhdGlvbiIsInRvcCIsInJpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7Q0FDZ0U7O0FBQ2hFO0FBQ0E7QUFFTyxTQUFT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QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBNkJEOzs7O0VBeEVnQkMsZ0Q7O0FBMkVKN0MsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnXG5pbXBvcnQge0ltYWdlLCBJbnB1dCwgTGlzdCwgQnV0dG9uLCBJY29ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICBTd2l0Y2gsXG4gIFJvdXRlLFxuICBMaW5rXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdyZWFjdC1hdXRvY29tcGxldGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmFrZUNhdGVnb3JpemVkUmVxdWVzdCh2YWx1ZSwgZW5nbGlzaCwgY2IpIHtcbiAgaWYgKGVuZ2xpc2gpIHtcbiAgICBzZXRUaW1lb3V0KGNiLCA1MDAsIHZhbHVlID9cbiAgICAgIGdldENhdGVnb3JpemVkU3RhdGVzMSgpLmZpbHRlcihzdGF0ZSA9PiBtYXRjaFN0YXRlVG9UZXJtV2l0aEhlYWRlcnMoc3RhdGUsIHZhbHVlKSkgOlxuICAgICAgZ2V0Q2F0ZWdvcml6ZWRTdGF0ZXMxKClcbiAgICApICAgIFxuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQoY2IsIDUwMCwgdmFsdWUgP1xuICAgICAgZ2V0Q2F0ZWdvcml6ZWRTdGF0ZXMoKS5maWx0ZXIoc3RhdGUgPT4gbWF0Y2hTdGF0ZVRvVGVybVdpdGhIZWFkZXJzKHN0YXRlLCB2YWx1ZSkpIDpcbiAgICAgIGdldENhdGVnb3JpemVkU3RhdGVzKClcbiAgICApICAgICAgXG4gIH1cblxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoU3RhdGVUb1Rlcm1XaXRoSGVhZGVycyhzdGF0ZSwgdmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZS5oZWFkZXIgfHxcbiAgICBzdGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hTdGF0ZVRvVGVybShzdGF0ZSwgdmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgKVxufVxuXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW50cnlTZWFyY2hlZDpmYWxzZSxcbiAgICAgIHNlYXJjaDonJyxcbiAgICAgIHNlYXJjaGVkOicnLFxuICAgICAgZGljdGlvbmFyeTp7XCJodW50XCI6W1wicGlzc3VyLVwiLFwidmVyYlwiLFwicGlzc3VydHVxXCIsXCJzaGUgaXMgaHVudGluZ1wiLFwiXCIsXCJcIixcIlwiLFwiaHVudGluZy5qcGdcIixcIlwiLFwiXCJdLFwiY29hdFwiOltcInBhbHR1dWtcIixcIm5vdW5cIixcIlwiLFwiXCIsXCJwYWx0dXVnaWFcIixcInRha2Ugb2ZmIHlvdXIgY29hdFwiLFwiYXRrdWtcIixcImNvYXQuanBhZ1wiLFwiXCIsXCJcIl0sXCJib2F0XCI6W1wiYW5neWFxXCIsXCJub3VuXCIsXCJcIixcIlwiLFwiQW5neWF0ZW5nLWxsdSBhcXZhbHVrdSBjdXB1bWFyaWFuIHVu4oCZYSBrdWlrLlwiLFwiQW5kICh0aGV5KSB3ZW50IGFuZCBnb3QgdGhlaXIgYm9hdCBhZnRlciB0aGUgaWNlIGluIHRoYXQgcml2ZXIgaGFkIGdvbmUgb3V0LiAoRUxOIDE5OTA6MTcpXCIsXCJhbmdzYXFcIixcImJvYXQuanBnXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcIlwiOltcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSx9LFxuICAgICAgcmV0dXJuTWVzc2FnZTpcIlwiLFxuICAgICAgcmVzdWx0czpbXSxcbiAgICAgIGVudHJ5RXhpc3RzOmZhbHNlLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdW5pdGVkU3RhdGVzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VhcmNoSW46IHRydWUsIC8vdHJ1ZSBpcyBlbmdsaXNoLCBmYWxzZSBpcyBpbnVwaWFxXG5cbiAgICAgIHdvcmRTZWFyY2hlZDpmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0VGltZXIgPSBudWxsXG4gIH1cblxuICBpbnB1dENsaWNrZWQoZXZlbnQsZGF0YSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd5b3UgY2xpY2tlZCB0aGUgYnV0dG9uIScpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICB0aGlzLnNldFN0YXRlKHtlbnRyeVNlYXJjaGVkOnRydWV9KVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VhcmNoIGluIHRoaXMuc3RhdGUuZGljdGlvbmFyeSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW50cnlFeGlzdHM6dHJ1ZSxyZXR1cm5NZXNzYWdlOicnLHJlc3VsdHM6dGhpcy5zdGF0ZS5kaWN0aW9uYXJ5W3RoaXMuc3RhdGUuc2VhcmNoXX0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3JldHVybk1lc3NhZ2U6J05vIHJlc3VsdHMuIDooJ30pXG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZVNlYXJjaChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6ZGF0YX0pOyAgICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB2YWx1ZT1cIlwiXG4gICAgbGV0IGVudHJ5PVsndHVudHV2YWsnLCdtb29zZSAoYWxjZXMgYWxjZXMpJywnbm91bicsJ1BpcWVybHVuaSBhYXRpaW4gdHVudHV2aW5yYXJuZWsgdHVtbmVrIGFwZXJ0dXVsbHVrdSwgdHVhLWktbGx1IHVudWFrdXJwYWsgbWFsaWdnbHVraSB0YW1ha3V0IHR1bWV0LicsJ1RoZW4gaGVyIGZhdGhlciBwb2ludGVkIG91dCB0byBoZXIgdGhlIG1vb3NlIHRyYWNrcywgYW5kIHRoZXkgZm9sbG93ZWQgdGhvc2UgdHJhY2tzIGFsbCBtb3JuaW5nLiddXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxwYWRkaW5nOicyMHB4J319PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzkwcHgnLGZvbnRGYW1pbHk6J3NlcmlmJyxwYWRkaW5nVG9wOic1cHgnfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMjdweCcsZm9udFdlaWdodDonNTAwJ319Pll1cCdpazwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6JzE3cHgnLGZvbnRXZWlnaHQ6JzQwMCcscGFkZGluZ1RvcDonNXB4J319PkRpY3Rpb25hcnk8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6NX19PlxuICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICBmbHVpZCBcbiAgICAgICAgICAgICAgc2l6ZT0naHVnZSdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gWXVwaWsgb3IgRW5nbGlzaFwiXG4gICAgICAgICAgICAgIGFjdGlvbj17eyBpY29uOidzZWFyY2gnLCB0cmFuc3BhcmVudDp0cnVlLHNpemU6J2h1Z2UnLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmlucHV0Q2xpY2tlZCgpfX1cbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdyaWdodCdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkNoYW5nZVNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLGxlZnQ6JzUwJScsbWFyZ2luTGVmdDonLTIyMHB4Jyx3aWR0aDonNDQwcHgnLGhlaWdodDonODBweCcsYm9yZGVyOicxcHggc29saWQgYmxhY2snLGJvcmRlclJhZGl1czonMTBweCcscGFkZGluZzonMTBweCd9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJyx0ZXh0RGVjb3JhdGlvbjondW5kZXJsaW5lJyxmb250U2l6ZTonMjBweCd9fT50dW50dXZhazwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOicyMHB4J319Pm1vb3NlIChhbGNlcyBhbGNlcyk8L2Rpdj5cbiAgICAgICAgICAgIDxJY29uIHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJyxmb250U2l6ZTonMzBweCcsdG9wOjAscmlnaHQ6MH19IG5hbWU9J3N0YXIgb3V0bGluZScgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})