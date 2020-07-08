webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Tasks.js":
/*!*****************************!*\
  !*** ./components/Tasks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\harri\\Documents\\Curso Desarrollo Web\\Proyectos\\infoCasa\\components\\Tasks.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Tasks = function Tasks(_ref) {
  var _ref$tasks = _ref.tasks,
      tasks = _ref$tasks === void 0 ? [] : _ref$tasks;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, tasks.map(function (task) {
    return __jsx("li", {
      key: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "checkbox",
      name: task.id,
      id: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }), __jsx("label", {
      htmlFor: task.id,
      onClick: function onClick(e) {
        e.preventDefault();
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/tasks/[id]", "/tasks/".concat(task.id));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, task.title));
  })));
};

_c = Tasks;
/* harmony default export */ __webpack_exports__["default"] = (Tasks);

var _c;

$RefreshReg$(_c, "Tasks");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJtYXAiLCJ0YXNrIiwiaWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0I7QUFBQSx3QkFBZkMsS0FBZTtBQUFBLE1BQWZBLEtBQWUsMkJBQVQsRUFBUztBQUM5QixTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Q7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFJLEVBQUVELElBQUksQ0FBQ0MsRUFBbEM7QUFBc0MsUUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQ0UsYUFBTyxFQUFFRCxJQUFJLENBQUNDLEVBRGhCO0FBRUUsYUFBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDZEEsU0FBQyxDQUFDQyxjQUFGO0FBQ0FDLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLG1CQUFxQ0wsSUFBSSxDQUFDQyxFQUExQztBQUNELE9BTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9HRCxJQUFJLENBQUNNLEtBUFIsQ0FGRixDQURTO0FBQUEsR0FBVixDQURILENBREYsQ0FERjtBQW9CRCxDQXJCRDs7S0FBTVQsSztBQXdCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ2ZmZhNGU5NjFhMzU1ZWQ5ZWMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBUYXNrcyA9ICh7IHRhc2tzPVtdIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT17dGFzay5pZH0gaWQ9e3Rhc2suaWR9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9e3Rhc2suaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Rhc2tzL1tpZF1cIiwgYC90YXNrcy8ke3Rhc2suaWR9YCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=