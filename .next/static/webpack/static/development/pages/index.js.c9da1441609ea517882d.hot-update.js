webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/actions/todoAction.js":
/*!*************************************!*\
  !*** ./store/actions/todoAction.js ***!
  \*************************************/
/*! exports provided: fetchTodos, postTodo, putTodo, getTask, deleteTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTodos", function() { return fetchTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTodo", function() { return postTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putTodo", function() { return putTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTask", function() { return getTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTask", function() { return deleteTask; });
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
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["POST_TODO"],
                payload: todo
              });

            case 4:
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
var getTask = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://jsonplaceholder.typicode.com/todos/".concat(id));

          case 2:
            res = _context4.sent;
            return _context4.abrupt("return", res.data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getTask(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteTask = function deleteTask(id) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("https://jsonplaceholder.typicode.com/todos/".concat(id), {
                data: id
              });

            case 2:
              res = _context5.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["DELETE_TODO"],
                payload: id
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb24uanMiXSwibmFtZXMiOlsiZmV0Y2hUb2RvcyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsInBvc3RUb2RvIiwidG9kbyIsInBvc3QiLCJwdXRUb2RvIiwicHV0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGFzayIsImRlbGV0ZVRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBO0FBQUEsZ01BQU0saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDRDQUFWLENBRFk7O0FBQUE7QUFDeEJDLGlCQUR3QjtBQUU5Qkgsc0JBQVEsQ0FBQztBQUNQSSxvQkFBSSxFQUFFQyxnREFEQztBQUVQQyx1QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRk4sZUFBRCxDQUFSOztBQUY4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7QUFPQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUE7QUFBQSxpTUFBVSxrQkFBT1QsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNkQyw0Q0FBSyxDQUFDUyxJQUFOLENBQVcsNENBQVgsRUFBeUQ7QUFDekVILG9CQUFJLEVBQUVFO0FBRG1FLGVBQXpELENBRGM7O0FBQUE7QUFDMUJOLGlCQUQwQjtBQUloQ0gsc0JBQVEsQ0FBQztBQUNQSSxvQkFBSSxFQUFFQyxnREFEQztBQUVQQyx1QkFBTyxFQUFFRztBQUZGLGVBQUQsQ0FBUjs7QUFKZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWpCO0FBU0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0YsSUFBRDtBQUFBO0FBQUEsaU1BQVUsa0JBQU9ULFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYkMsNENBQUssQ0FBQ1csR0FBTixzREFDOEJILElBQUksQ0FBQ0ksRUFEbkMsR0FFaEI7QUFDRU4sb0JBQUksRUFBRUU7QUFEUixlQUZnQixDQURhOztBQUFBO0FBQ3pCTixpQkFEeUI7QUFPN0JXLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVosR0FBWjtBQUNGSCxzQkFBUSxDQUFDO0FBQ1BJLG9CQUFJLEVBQUVDLCtDQURDO0FBRVBDLHVCQUFPLEVBQUVHO0FBRkYsZUFBRCxDQUFSOztBQVIrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBaEI7QUFhQSxJQUFNTyxPQUFPO0FBQUEsK0xBQUcsa0JBQU9ILEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSFosNENBQUssQ0FBQ0MsR0FBTixzREFDOEJXLEVBRDlCLEVBREc7O0FBQUE7QUFDZlYsZUFEZTtBQUFBLDhDQUtkQSxHQUFHLENBQUNJLElBTFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUFMsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiO0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0osRUFBRDtBQUFBO0FBQUEsaU1BQVEsa0JBQU9iLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZEMsNENBQUssVUFBTCxzREFDOEJZLEVBRDlCLEdBRWhCO0FBQ0VOLG9CQUFJLEVBQUVNO0FBRFIsZUFGZ0IsQ0FEYzs7QUFBQTtBQUMxQlYsaUJBRDBCO0FBT2hDSCxzQkFBUSxDQUFDO0FBQ1BJLG9CQUFJLEVBQUVDLGtEQURDO0FBRVBDLHVCQUFPLEVBQUVPO0FBRkYsZUFBRCxDQUFSOztBQVBnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM5ZGExNDQxNjA5ZWE1MTc4ODJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVG9kb3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIik7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuU0VUX1RPRE9TLFxyXG4gICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBwb3N0VG9kbyA9ICh0b2RvKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zXCIsIHtcclxuICAgIGRhdGE6IHRvZG8sXHJcbiAgfSk7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuUE9TVF9UT0RPLFxyXG4gICAgcGF5bG9hZDogdG9kbyxcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHB1dFRvZG8gPSAodG9kbykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8ke3RvZG8uaWR9YCxcclxuICAgIHtcclxuICAgICAgZGF0YTogdG9kbyxcclxuICAgIH1cclxuICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLlBVVF9UT0RPLFxyXG4gICAgcGF5bG9hZDogdG9kbyxcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFRhc2sgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLyR7aWR9YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBkYXRhOiBpZCxcclxuICAgIH1cclxuICApO1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkRFTEVURV9UT0RPLFxyXG4gICAgcGF5bG9hZDogaWQsXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=