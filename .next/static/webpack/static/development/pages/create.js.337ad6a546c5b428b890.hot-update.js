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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
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

_s2(Create, "bIYqN2fbTDSI/9XEDLp8ud+MUiA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiQ3JlYXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b2RvIiwidG9kb3MiLCJ1c2VFZmZlY3QiLCJlIiwicG9zdFRvZG8iLCJwcmV2ZW50RGVmYXVsdCIsInRhc2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJsZW5ndGgiLCJfdGFzayIsInRpdGxlIiwiY29tcGxldGUiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBOztBQUVqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZpQixxQkFHRkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUhUO0FBQUEsTUFHVkMsS0FIVSxnQkFHVkEsS0FIVTs7QUFLakJDLHlEQUFTLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2JQLFlBQVEsQ0FBQ1EsMEVBQVEsQ0FBQ0QsQ0FBRCxDQUFULENBQVI7QUFDRCxHQUZNLEVBRUosRUFGSSxDQUFUO0FBSUYsU0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsTUFBRSxFQUFDLE1BSEw7QUFJRSxlQUFXLEVBQUMsYUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVVFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFrRCxXQUFPLEtBQUUsVUFBQ0EsQ0FBRCxFQUFPO0FBQUE7O0FBQ2hFQSxPQUFDLENBQUNFLGNBQUY7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FBN0M7O0FBQ0EsVUFBSUgsSUFBSSxDQUFDSSxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsWUFBTUMsS0FBSyxHQUFHO0FBQ1ZDLGVBQUssRUFBRU4sSUFERztBQUVWTyxrQkFBUSxFQUFFLEtBRkE7QUFHVkMsZ0JBQU0sRUFBRTtBQUhFLFNBQWQ7QUFLQVosK0RBQVMsR0FOUyxDQVF0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHR0ssZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FBaEMsR0FBd0MsSUFBeEM7QUFFRixPQXRCRCxNQXNCTztBQUNMTSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7QUFDRixLQTVCd0QsaUNBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixDQURGLENBREYsQ0FERixDQURGLENBREY7QUFvREQsQ0E3REQ7O0lBQU1yQixNO1VBRWVFLHVELEVBQ0ZDLHVEOzs7S0FIYkgsTTtBQStEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWF0ZS5qcy4zMzdhZDZhNTQ2YzViNDI4Yjg5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwb3N0VG9kbyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb25cIjtcclxuY29uc3QgQ3JlYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHt0b2Rvc30gPXVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnRvZG8pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHBvc3RUb2RvKGUpKTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrQ2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhc2tcIj5DcmVhdGUgYSBUYXNrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInRhc2tcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSB0YXNrXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1wiKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2subGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBfdGFzayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRhc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAxICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUVmZmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGFzaylcclxuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgcmVzID0gIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MnLCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVhZGVyczp7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB0aXRsZTogdGFzayxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAgICAgICAgIC8vICAgfSkudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tcIikudmFsdWUgPSBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=