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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_todoAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/todoAction */ "./store/actions/todoAction.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\harri\\Documents\\Curso Desarrollo Web\\Proyectos\\infoCasa\\pages\\create.js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Create = function Create() {
  _s2();

  var _s = $RefreshSig$();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = useSelector(function (state) {
    return state.todo;
  }),
      todos = _useSelector.todos;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function (e) {
    dispatch(Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_3__["postTodo"])(e));
  }, []);
  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "taskCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "task",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Create a Task"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "task",
    placeholder: "Type a task",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx("button", {
    type: "submit",
    className: "btn btn-primary",
    onClick: _s(function (e) {
      _s();

      e.preventDefault();
      var task = document.getElementById("task").value;

      if (task.length != 0) {
        var _task = {
          title: task,
          complete: false,
          userId: 1
        };
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(); //   console.log(task)
        //   const res =  fetch('https://jsonplaceholder.typicode.com/todos', {
        //     method: 'POST',
        //     headers:{ 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //       userId: 1,
        //       title: task,
        //       completed: false
        //     }),
        //   }).then(res => console.log(res)).catch(err => console.log(err))

        document.getElementById("task").value = null;
      } else {
        console.log("no");
      }
    }, "OD7bBpZva5O2jO+Puf00hKivP7c="),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "Create"))))));
};

_s2(Create, "bIYqN2fbTDSI/9XEDLp8ud+MUiA=", true, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiQ3JlYXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b2RvIiwidG9kb3MiLCJ1c2VFZmZlY3QiLCJlIiwicG9zdFRvZG8iLCJwcmV2ZW50RGVmYXVsdCIsInRhc2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJsZW5ndGgiLCJfdGFzayIsInRpdGxlIiwiY29tcGxldGUiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBOztBQUVqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZpQixxQkFHRkMsV0FBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSFQ7QUFBQSxNQUdWQyxLQUhVLGdCQUdWQSxLQUhVOztBQUtqQkMseURBQVMsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDYlAsWUFBUSxDQUFDUSwwRUFBUSxDQUFDRCxDQUFELENBQVQsQ0FBUjtBQUNELEdBRk0sRUFFSixFQUZJLENBQVQ7QUFJRixTQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSxNQUFFLEVBQUMsTUFITDtBQUlFLGVBQVcsRUFBQyxhQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBVUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsaUJBQWhDO0FBQWtELFdBQU8sS0FBRSxVQUFDQSxDQUFELEVBQU87QUFBQTs7QUFDaEVBLE9BQUMsQ0FBQ0UsY0FBRjtBQUNBLFVBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUE3Qzs7QUFDQSxVQUFJSCxJQUFJLENBQUNJLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixZQUFNQyxLQUFLLEdBQUc7QUFDVkMsZUFBSyxFQUFFTixJQURHO0FBRVZPLGtCQUFRLEVBQUUsS0FGQTtBQUdWQyxnQkFBTSxFQUFFO0FBSEUsU0FBZDtBQUtBWiwrREFBUyxHQU5TLENBUXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdHSyxnQkFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUFoQyxHQUF3QyxJQUF4QztBQUVGLE9BdEJELE1Bc0JPO0FBQ0xNLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGLEtBNUJ3RCxpQ0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQW9ERCxDQTdERDs7SUFBTXJCLE07VUFFZUUsdUQ7OztLQUZmRixNO0FBK0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY3JlYXRlLmpzLjhiZWVjMDdhZmQyZWM1ZDdhYzUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcG9zdFRvZG8gfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy90b2RvQWN0aW9uXCI7XHJcbmNvbnN0IENyZWF0ZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7dG9kb3N9ID11c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50b2RvKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwb3N0VG9kbyhlKSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza0NhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YXNrXCI+Q3JlYXRlIGEgVGFzazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0YXNrXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGFza1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tcIikudmFsdWVcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX3Rhc2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0YXNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogMSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1c2VFZmZlY3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRhc2spXHJcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHJlcyA9ICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zJywge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6eyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdGl0bGU6IHRhc2ssXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAvLyAgIH0pLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrXCIpLnZhbHVlID0gbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9cIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9