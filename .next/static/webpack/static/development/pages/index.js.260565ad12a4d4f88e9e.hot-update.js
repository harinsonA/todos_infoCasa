webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/actions/todoAction.js":
/*!*************************************!*\
  !*** ./store/actions/todoAction.js ***!
  \*************************************/
/*! exports provided: fetchTodos, postTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTodos", function() { return fetchTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTodo", function() { return postTodo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var fetchTodos = function fetchTodos() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://jsonplaceholder.typicode.com/todos");

            case 2:
              res = _context.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_TODOS"],
                payload: res.data
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var postTodo = function postTodo(todo) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://jsonplaceholder.typicode.com/todos", {
                data: todo
              });

            case 2:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["POST_TODO"],
                payload: todo
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb24uanMiXSwibmFtZXMiOlsiZmV0Y2hUb2RvcyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsInBvc3RUb2RvIiwidG9kbyIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBO0FBQUEsZ01BQU0saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDRDQUFWLENBRFk7O0FBQUE7QUFDeEJDLGlCQUR3QjtBQUU5Qkgsc0JBQVEsQ0FBQztBQUNQSSxvQkFBSSxFQUFFQyxnREFEQztBQUVQQyx1QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRk4sZUFBRCxDQUFSOztBQUY4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7QUFPQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUE7QUFBQSxpTUFBVSxrQkFBT1QsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMUJDLDRDQUFLLENBQUNTLElBQU4sQ0FBVyw0Q0FBWCxFQUF5RDtBQUM3REgsb0JBQUksRUFBRUU7QUFEdUQsZUFBekQsQ0FEMEI7O0FBQUE7QUFJaENULHNCQUFRLENBQUM7QUFDUEksb0JBQUksRUFBRUMsZ0RBREM7QUFFUEMsdUJBQU8sRUFBRUc7QUFGRixlQUFELENBQVI7O0FBSmdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjYwNTY1YWQxMmE0ZDRmODhlOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hUb2RvcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKTtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiB0eXBlcy5TRVRfVE9ET1MsXHJcbiAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHBvc3RUb2RvID0gKHRvZG8pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIiwge1xyXG4gICAgZGF0YTogdG9kbyxcclxuICB9KTtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiB0eXBlcy5QT1NUX1RPRE8sXHJcbiAgICBwYXlsb2FkOiB0b2RvLFxyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9