self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Zachary_Jones_Documents_Code_pluralsight_com_designing_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_Users_Zachary_Jones_Documents_Code_pluralsight_com_designing_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SpeakerContext */ "./src/contexts/SpeakerContext.js");
/* harmony import */ var _SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDelete */ "./src/components/SpeakerDelete.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Zachary Jones\\Documents\\Code\\pluralsight.com\\designing-react-components\\src\\components\\Speaker.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Zachary_Jones_Documents_Code_pluralsight_com_designing_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Session = function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_c = Session;

var Sessions = function Sessions() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext.speaker;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),
      eventYear = _useContext2.eventYear;

  var sessions = speaker.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: sessions.filter(function (session) {
      return session.eventYear === eventYear;
    }).map(function (session) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "session w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }, this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_s(Sessions, "SQXTH14QFaDSig27suhYiU1B2SM=");

_c2 = Sessions;

var ImageWithFallback = function ImageWithFallback(_ref2) {
  _s2();

  var src = _ref2.src,
      props = (0,C_Users_Zachary_Jones_Documents_Code_pluralsight_com_designing_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, ["src"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(src),
      imgSrc = _useState2[0],
      setImgSrc = _useState2[1];

  var onError = function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", _objectSpread(_objectSpread({
    src: imgSrc
  }, props), {}, {
    onError: onError
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 12
  }, _this);
};

_s2(ImageWithFallback, "R4UhDpTis3V59uQlUhTj6vAWrfc=");

_c3 = ImageWithFallback;

var SpeakerImage = function SpeakerImage() {
  _s3();

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      _useContext3$speaker = _useContext3.speaker,
      id = _useContext3$speaker.id,
      first = _useContext3$speaker.first,
      last = _useContext3$speaker.last;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageWithFallback, {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_s3(SpeakerImage, "YBtVBCzH/macbAqrtA8gPlMOAX0=");

_c4 = SpeakerImage;

var SpeakerFavorite = function SpeakerFavorite() {
  _s4();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext4.speaker,
      updateRecord = _useContext4.updateRecord;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isUpdating = _useState3[0],
      setIsUpdating = _useState3[1];

  var doneCallback = function doneCallback() {
    setIsUpdating(false);
    console.log("In SpeakerFavorite:donecallback ".concat(new Date().getMilliseconds()));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      onClick: function onClick() {
        setIsUpdating(true);
        updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
          favorite: !speaker.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
        className: speaker.favorite ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), " ", " ", "Favorite", " ", isUpdating ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 32
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s4(SpeakerFavorite, "u9jdC7ceC3on8gXpLLtwi8C4M50=");

_c5 = SpeakerFavorite;

var SpeakerDemographics = function SpeakerDemographics() {
  _s5();

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext5.speaker;

  var first = speaker.first,
      last = speaker.last,
      bio = speaker.bio,
      company = speaker.company,
      twitterHandle = speaker.twitterHandle,
      favorite = speaker.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-description",
        children: bio.substr(0, 70)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "social d-flex flew-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this), favorite]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, _this);
};

_s5(SpeakerDemographics, "+GLFQhMVC35zrtukZQzc41tR8Ok=");

_c6 = SpeakerDemographics;

var areEqualSpeaker = function areEqualSpeaker(prevProps, nextProps) {
  return prevProps.speaker.favorite === nextProps.speaker.favorite;
}; //Memo causes rerendering on updates for only for one speaker card


var SpeakerNoErrorBoundary = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c7 = _s6(function (_ref3) {
  _s6();

  var speaker = _ref3.speaker,
      updateRecord = _ref3.updateRecord,
      insertRecord = _ref3.insertRecord,
      deleteRecord = _ref3.deleteRecord;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),
      showSessions = _useContext6.showSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerProvider, {
    speaker: speaker,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, _this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sessions, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 42
      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 9
  }, _this);
}, "TltPt07ZHCSa0bZmdBKJaXz9l1w="), areEqualSpeaker);
_c8 = SpeakerNoErrorBoundary;

var Speaker = function Speaker() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ErrorBoundary, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerNoErrorBoundary, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 9
  }, _this);
};

_c9 = Speaker;
/* harmony default export */ __webpack_exports__["default"] = (Speaker);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "ImageWithFallback");
$RefreshReg$(_c4, "SpeakerImage");
$RefreshReg$(_c5, "SpeakerFavorite");
$RefreshReg$(_c6, "SpeakerDemographics");
$RefreshReg$(_c7, "SpeakerNoErrorBoundary$memo");
$RefreshReg$(_c8, "SpeakerNoErrorBoundary");
$RefreshReg$(_c9, "Speaker");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwidXNlQ29udGV4dCIsIlNwZWFrZXJDb250ZXh0Iiwic3BlYWtlciIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiZXZlbnRZZWFyIiwic2Vzc2lvbnMiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwib25FcnJvciIsIlNwZWFrZXJJbWFnZSIsImZpcnN0IiwibGFzdCIsIlNwZWFrZXJGYXZvcml0ZSIsInVwZGF0ZVJlY29yZCIsImlzVXBkYXRpbmciLCJzZXRJc1VwZGF0aW5nIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJmYXZvcml0ZSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsInN1YnN0ciIsImFyZUVxdWFsU3BlYWtlciIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsIlNwZWFrZXJOb0Vycm9yQm91bmRhcnkiLCJtZW1vIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1Nlc3Npb25zIiwiU3BlYWtlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXFCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNqQyxzQkFDSTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0tELEtBREws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QUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQWRrQyxtQ0FjaENQLGVBZGdDLENBQW5DO01BQU1HLHNCOztBQWdCTixJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLHNCQUNJLDhEQUFDLGFBQUQ7QUFBQSwyQkFDSSw4REFBQyxzQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FORDs7TUFBTUEsTztBQVFOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkZDQ1YmQ5YjE0MTk3ZDRjNzFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyUHJvdmlkZXIsIFNwZWFrZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NwZWFrZXJDb250ZXh0XCI7XHJcbmltcG9ydCAgU3BlYWtlckRlbGV0ZSBmcm9tIFwiLi9TcGVha2VyRGVsZXRlXCI7XHJcblxyXG5jb25zdCBTZXNzaW9uID0gKHsgdGl0bGUsIHJvb20gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBTZXNzaW9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcbiAgICBjb25zdCBzZXNzaW9ucyA9IHNwZWFrZXIuc2Vzc2lvbnM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgIHtzZXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIiBrZXk9e3Nlc3Npb24uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBJbWFnZVdpdGhGYWxsYmFjayA9ICh7c3JjLCAuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IHVzZVN0YXRlKHNyYyk7XHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEltZ1NyYyhcIi9pbWFnZXMvc3BlYWtlci05OTk5OS5qcGdcIik7XHJcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGltZyBzcmM9e2ltZ1NyY30gey4uLnByb3BzfSBvbkVycm9yPXtvbkVycm9yfS8+XHJcbn1cclxuXHJcbmNvbnN0IFNwZWFrZXJJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3R9IH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgPEltYWdlV2l0aEZhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBTcGVha2VyRmF2b3JpdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpOyBcclxuXHJcbiAgICBjb25zdCBbaXNVcGRhdGluZywgc2V0SXNVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBkb25lQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNVcGRhdGluZyhmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lY2FsbGJhY2sgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNVcGRhdGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkKHsgLi4uc3BlYWtlciwgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlIH0sIGRvbmVDYWxsYmFjaylcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3NwZWFrZXIuZmF2b3JpdGUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIn0gLz4ge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7aXNVcGRhdGluZyA/ICg8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+KSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBTcGVha2VyRGVtb2dyYXBoaWNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUgfSA9IHNwZWFrZXI7IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNwZWFrZXJGYXZvcml0ZSAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtiaW8uc3Vic3RyKDAsIDcwKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV3LXJvdyBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IGFyZUVxdWFsU3BlYWtlciA9IChwcmV2UHJvcHMsIG5leHRQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChwcmV2UHJvcHMuc3BlYWtlci5mYXZvcml0ZSA9PT0gbmV4dFByb3BzLnNwZWFrZXIuZmF2b3JpdGUpO1xyXG59O1xyXG5cclxuLy9NZW1vIGNhdXNlcyByZXJlbmRlcmluZyBvbiB1cGRhdGVzIGZvciBvbmx5IGZvciBvbmUgc3BlYWtlciBjYXJkXHJcbmNvbnN0IFNwZWFrZXJOb0Vycm9yQm91bmRhcnkgPSBtZW1vKCh7IHNwZWFrZXIsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BlYWtlclByb3ZpZGVyIHNwZWFrZXI9e3NwZWFrZXJ9IHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0gZGVsZXRlUmVjb3JkPXtkZWxldGVSZWNvcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJJbWFnZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJEZWxldGUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGVha2VyUHJvdmlkZXI+XHJcbiAgICApO1xyXG59LCBhcmVFcXVhbFNwZWFrZXIpO1xyXG5cclxuY29uc3QgU3BlYWtlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVycm9yQm91bmRhcnk+XHJcbiAgICAgICAgICAgIDxTcGVha2VyTm9FcnJvckJvdW5kYXJ5PjwvU3BlYWtlck5vRXJyb3JCb3VuZGFyeT5cclxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==