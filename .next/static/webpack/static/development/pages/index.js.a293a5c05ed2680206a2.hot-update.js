webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/actions/todoAction.js":
/*!*************************************!*\
  !*** ./store/actions/todoAction.js ***!
  \*************************************/
/*! exports provided: fetchTodos, postTodo, putTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTodos", function() { return fetchTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTodo", function() { return postTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putTodo", function() { return putTodo; });
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
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://jsonplaceholder.typicode.com/todos", {
                data: todo
              });

            case 2:
              res = _context2.sent;
              console.log(res);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["POST_TODO"],
                payload: todo
              });

            case 5:
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
var putTodo = function putTodo(todo) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("https://jsonplaceholder.typicode.com/todos/".concat(todo.id), {
                data: todo
              });

            case 2:
              res = _context3.sent;
              console.log(res);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["PUT_TODO"],
                payload: todo
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb24uanMiXSwibmFtZXMiOlsiZmV0Y2hUb2RvcyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsInBvc3RUb2RvIiwidG9kbyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwicHV0VG9kbyIsInB1dCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUE7QUFBQSxnTUFBTSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNaQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNENBQVYsQ0FEWTs7QUFBQTtBQUN4QkMsaUJBRHdCO0FBRTlCSCxzQkFBUSxDQUFDO0FBQ1BJLG9CQUFJLEVBQUVDLGdEQURDO0FBRVBDLHVCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixlQUFELENBQVI7O0FBRjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFuQjtBQU9BLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQTtBQUFBLGlNQUFVLGtCQUFPVCxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2RDLDRDQUFLLENBQUNTLElBQU4sQ0FBVyw0Q0FBWCxFQUF5RDtBQUN6RUgsb0JBQUksRUFBRUU7QUFEbUUsZUFBekQsQ0FEYzs7QUFBQTtBQUMxQk4saUJBRDBCO0FBSWhDUSxxQkFBTyxDQUFDQyxHQUFSLENBQVlULEdBQVo7QUFDQUgsc0JBQVEsQ0FBQztBQUNQSSxvQkFBSSxFQUFFQyxnREFEQztBQUVQQyx1QkFBTyxFQUFFRztBQUZGLGVBQUQsQ0FBUjs7QUFMZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWpCO0FBVUEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0osSUFBRDtBQUFBO0FBQUEsaU1BQVUsa0JBQU9ULFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYkMsNENBQUssQ0FBQ2EsR0FBTixzREFBd0RMLElBQUksQ0FBQ00sRUFBN0QsR0FBbUU7QUFDbkZSLG9CQUFJLEVBQUVFO0FBRDZFLGVBQW5FLENBRGE7O0FBQUE7QUFDekJOLGlCQUR5QjtBQUkvQlEscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVCxHQUFaO0FBQ0FILHNCQUFRLENBQUM7QUFDUEksb0JBQUksRUFBRUMsK0NBREM7QUFFUEMsdUJBQU8sRUFBRUc7QUFGRixlQUFELENBQVI7O0FBTCtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTI5M2E1YzA1ZWQyNjgwMjA2YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hUb2RvcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKTtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiB0eXBlcy5TRVRfVE9ET1MsXHJcbiAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHBvc3RUb2RvID0gKHRvZG8pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIiwge1xyXG4gICAgZGF0YTogdG9kbyxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuUE9TVF9UT0RPLFxyXG4gICAgcGF5bG9hZDogdG9kbyxcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHB1dFRvZG8gPSAodG9kbykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvJHt0b2RvLmlkfWAsIHtcclxuICAgIGRhdGE6IHRvZG8sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2cocmVzKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLlBVVF9UT0RPLFxyXG4gICAgcGF5bG9hZDogdG9kbyxcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==