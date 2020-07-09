webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/todoAction */ "./store/actions/todoAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\harri\\Documents\\Curso Desarrollo Web\\Proyectos\\infoCasa\\pages\\create.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Create = function Create() {
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var task = event.target.value;

    if (task && task.length != 0) {
      var object = {
        userId: 1,
        title: task,
        completed: false
      };
      Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__["postTodo"])(object);
    }
  };

  var handleChange = function handleChange(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "taskCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("form", {
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "task",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Create a Task"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "task",
    placeholder: "Type a task",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "Create"))))));
};

_c = Create;
/* harmony default export */ __webpack_exports__["default"] = (Create);

var _c;

$RefreshReg$(_c, "Create");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiQ3JlYXRlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhc2siLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm9iamVjdCIsInVzZXJJZCIsInRpdGxlIiwiY29tcGxldGVkIiwicG9zdFRvZG8iLCJoYW5kbGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFFbkIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFVO0FBQzdCQSxTQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUExQjs7QUFDQSxRQUFJRixJQUFJLElBQUlBLElBQUksQ0FBQ0csTUFBTCxJQUFjLENBQTFCLEVBQTZCO0FBQzNCLFVBQU1DLE1BQU0sR0FBRztBQUNiQyxjQUFNLEVBQUUsQ0FESztBQUViQyxhQUFLLEVBQUVOLElBRk07QUFHYk8saUJBQVMsRUFBRTtBQUhFLE9BQWY7QUFLQUMsZ0ZBQVEsQ0FBQ0osTUFBRCxDQUFSO0FBQ0Q7QUFDRixHQVhEOztBQVlBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNYLEtBQUQsRUFBVTtBQUM3QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFaO0FBQ0FZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFLLENBQUNHLE1BQU4sQ0FBYVcsSUFBekI7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVliLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUF6QjtBQUNELEdBTEQ7O0FBT0EsU0FFRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRSxrQkFBQVcsQ0FBQztBQUFBLGFBQUloQixZQUFZLENBQUNnQixDQUFELENBQWhCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsY0FGWjtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsZUFBVyxFQUFDLGFBSmQ7QUFLRSxZQUFRLEVBQUUsa0JBQUFBLENBQUM7QUFBQSxhQUFJSixZQUFZLENBQUNJLENBQUQsQ0FBaEI7QUFBQSxLQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBV0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixDQURGLENBREYsQ0FERixDQURGLENBRkY7QUEwQkQsQ0EvQ0Q7O0tBQU1qQixNO0FBaURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY3JlYXRlLmpzLjNjOWU5Zjg0NmU0MDY4OGQxZjRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBwb3N0VG9kbyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5cclxuY29uc3QgQ3JlYXRlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRhc2sgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgIGlmICh0YXNrICYmIHRhc2subGVuZ3RoICE9MCkge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHRpdGxlOiB0YXNrLFxyXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBwb3N0VG9kbyhvYmplY3QpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSlcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrQ2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gaGFuZGxlU3VibWl0KGUpIH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhc2tcIj5DcmVhdGUgYSBUYXNrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0YXNrXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGFza1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9