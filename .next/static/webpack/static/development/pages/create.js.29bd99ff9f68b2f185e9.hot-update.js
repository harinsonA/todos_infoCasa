webpackHotUpdate("static\\development\\pages\\create.js",{

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
                payload: res.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb24uanMiXSwibmFtZXMiOlsiZmV0Y2hUb2RvcyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsInBvc3RUb2RvIiwidG9kbyIsInBvc3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQTtBQUFBLGdNQUFNLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1pDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSw0Q0FBVixDQURZOztBQUFBO0FBQ3hCQyxpQkFEd0I7QUFFOUJILHNCQUFRLENBQUM7QUFDUEksb0JBQUksRUFBRUMsZ0RBREM7QUFFUEMsdUJBQU8sRUFBRUgsR0FBRyxDQUFDSTtBQUZOLGVBQUQsQ0FBUjs7QUFGOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQW5CO0FBT0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBO0FBQUEsaU1BQVUsa0JBQU9ULFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZEMsNENBQUssQ0FBQ1MsSUFBTixDQUFXLDRDQUFYLEVBQXlEO0FBQ3pFSCxvQkFBSSxFQUFFRTtBQURtRSxlQUF6RCxDQURjOztBQUFBO0FBQzFCTixpQkFEMEI7QUFJaENRLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVQsR0FBWjtBQUNBSCxzQkFBUSxDQUFDO0FBQ1BJLG9CQUFJLEVBQUVDLGdEQURDO0FBRVBDLHVCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixlQUFELENBQVI7O0FBTGdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY3JlYXRlLmpzLjI5YmQ5OWZmOWY2OGIyZjE4NWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVG9kb3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIik7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuU0VUX1RPRE9TLFxyXG4gICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBwb3N0VG9kbyA9ICh0b2RvKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zXCIsIHtcclxuICAgIGRhdGE6IHRvZG8sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2cocmVzKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLlBPU1RfVE9ETyxcclxuICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9