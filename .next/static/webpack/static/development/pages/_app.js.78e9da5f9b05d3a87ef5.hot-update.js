webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/reducers/todoReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/todoReducer.js ***!
  \***************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  todos: [],
  todo: {},
  loading: false,
  error: null
};
var todoReducer = function todoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_TODOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        todos: action.payload,
        loading: false,
        error: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["POST_TODO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        todos: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.todos), [action.payload]),
        loading: false,
        error: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["PUT_TODO"]:
      var _todos = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.todos);

      var todos = _todos.map(function (element) {
        if (element.id == action.payload.id) {
          return action.payload;
        }

        return element;
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        todos: todos,
        loading: false,
        error: null
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy90b2RvUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0b2RvcyIsInRvZG8iLCJsb2FkaW5nIiwiZXJyb3IiLCJ0b2RvUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsIl90b2RvcyIsIm1hcCIsImVsZW1lbnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsTUFBSSxFQUFFLEVBRmE7QUFHbkJDLFNBQU8sRUFBRSxLQUhVO0FBSW5CQyxPQUFLLEVBQUU7QUFKWSxDQUFyQjtBQU9PLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6Qk4sWUFBeUI7QUFBQSxNQUFYTyxNQUFXOztBQUMzRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxnREFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVMLGFBQUssRUFBRU0sTUFBTSxDQUFDRyxPQUZoQjtBQUdFUCxlQUFPLEVBQUUsS0FIWDtBQUlFQyxhQUFLLEVBQUU7QUFKVDs7QUFNRixTQUFLSyxnREFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVMLGFBQUsseUdBQU1LLEtBQUssQ0FBQ0wsS0FBWixJQUFtQk0sTUFBTSxDQUFDRyxPQUExQixFQUZQO0FBR0VQLGVBQU8sRUFBRSxLQUhYO0FBSUVDLGFBQUssRUFBRTtBQUpUOztBQU1GLFNBQUtLLCtDQUFMO0FBQ0UsVUFBTUUsTUFBTSxHQUFHLDZGQUFJTCxLQUFLLENBQUNMLEtBQWIsQ0FBWjs7QUFDQSxVQUFNQSxLQUFLLEdBQUdVLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLE9BQUQsRUFBYTtBQUNwQyxZQUFJQSxPQUFPLENBQUNDLEVBQVIsSUFBY1AsTUFBTSxDQUFDRyxPQUFQLENBQWVJLEVBQWpDLEVBQXFDO0FBQ25DLGlCQUFPUCxNQUFNLENBQUNHLE9BQWQ7QUFDRDs7QUFDRCxlQUFPRyxPQUFQO0FBQ0QsT0FMYSxDQUFkOztBQU1BLDZDQUNLUCxLQURMO0FBRUVMLGFBQUssRUFBTEEsS0FGRjtBQUdFRSxlQUFPLEVBQUUsS0FIWDtBQUlFQyxhQUFLLEVBQUU7QUFKVDs7QUFPRjtBQUNFLGFBQU9FLEtBQVA7QUEvQko7QUFpQ0QsQ0FsQ00iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNzhlOWRhNWY5YjA1ZDNhODdlZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHRvZG9zOiBbXSxcclxuICB0b2RvOiB7fSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2RvUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5TRVRfVE9ET1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9kb3M6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5QT1NUX1RPRE86XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9kb3M6IFsuLi5zdGF0ZS50b2RvcywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5QVVRfVE9ETzpcclxuICAgICAgY29uc3QgX3RvZG9zID0gWy4uLnN0YXRlLnRvZG9zXTtcclxuICAgICAgY29uc3QgdG9kb3MgPSBfdG9kb3MubWFwKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRvZG9zLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=