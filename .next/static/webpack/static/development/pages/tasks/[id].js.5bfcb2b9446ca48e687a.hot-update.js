webpackHotUpdate("static\\development\\pages\\tasks\\[id].js",{

/***/ "./pages/tasks/[id].js":
/*!*****************************!*\
  !*** ./pages/tasks/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Container */ "./components/Container.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\harri\\Documents\\Curso Desarrollo Web\\Proyectos\\infoCasa\\pages\\tasks\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Task = function Task(_ref) {
  _s();

  var _task = _ref._task;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;
  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "taskCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Task: #", _task.id), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Description: ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 28
    }
  }), _task.title)), __jsx("div", {
    className: "card-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("button", {
    id: "update",
    type: "button",
    className: "btn btn-info ",
    onClick: function onClick(e) {
      var save = document.getElementById("save");
      save.classList.remove('d-none');
      e.target.classList.add('d-none');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Update"), __jsx("button", {
    id: "save",
    type: "button",
    className: "btn btn-success mr-4 d-none",
    onClick: function onClick(e) {
      var update = document.getElementById("update");
      update.classList.remove('d-none');
      e.target.classList.add('d-none');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Save"), __jsx("button", {
    id: "cancelar",
    type: "button",
    className: "btn btn-danger",
    onClick: function onClick(e) {
      var update = document.getElementById("update");
      update.classList.remove('d-none');
      e.target.classList.add('d-none');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Cancelar")), __jsx("textarea", {
    className: "form-control ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }))))));
};

_s(Task, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Task;

Task.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://jsonplaceholder.typicode.com/todos/".concat(ctx.query.id));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              _task: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Task);

var _c;

$RefreshReg$(_c, "Task");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90YXNrcy8uanMiXSwibmFtZXMiOlsiVGFzayIsIl90YXNrIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInRpdGxlIiwiZSIsInNhdmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFyZ2V0IiwiYWRkIiwidXBkYXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDBCLE1BRWxCQyxFQUZrQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFbEJELEVBRmtCO0FBSTFCLFNBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFtQ0gsS0FBSyxDQUFDRyxFQUF6QyxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZixFQUVHSCxLQUFLLENBQUNLLEtBRlQsQ0FGRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFDLFFBQVg7QUFBb0IsUUFBSSxFQUFDLFFBQXpCO0FBQWtDLGFBQVMsRUFBQyxlQUE1QztBQUE0RCxXQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBSztBQUN4RSxVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0FGLFVBQUksQ0FBQ0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0FMLE9BQUMsQ0FBQ00sTUFBRixDQUFTRixTQUFULENBQW1CRyxHQUFuQixDQUF1QixRQUF2QjtBQUNELEtBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBUUU7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixRQUFJLEVBQUMsUUFBdkI7QUFBZ0MsYUFBUyxFQUFDLDZCQUExQztBQUF5RSxXQUFPLEVBQUUsaUJBQUNQLENBQUQsRUFBSztBQUNyRixVQUFNUSxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0FLLFlBQU0sQ0FBQ0osU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQUwsT0FBQyxDQUFDTSxNQUFGLENBQVNGLFNBQVQsQ0FBbUJHLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0QsS0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFlRTtBQUFRLE1BQUUsRUFBQyxVQUFYO0FBQXNCLFFBQUksRUFBQyxRQUEzQjtBQUFvQyxhQUFTLEVBQUMsZ0JBQTlDO0FBQWdFLFdBQU8sRUFBRSxpQkFBQ1AsQ0FBRCxFQUFLO0FBQzVFLFVBQU1RLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUssWUFBTSxDQUFDSixTQUFQLENBQWlCQyxNQUFqQixDQUF3QixRQUF4QjtBQUNBTCxPQUFDLENBQUNNLE1BQUYsQ0FBU0YsU0FBVCxDQUFtQkcsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDRCxLQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkYsQ0FERixFQXdCRTtBQUFVLGFBQVMsRUFBQyxlQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJGLENBREYsQ0FSRixDQURGLENBREYsQ0FERjtBQTJDRCxDQS9DRDs7R0FBTWQsSTtVQUNXRyxxRDs7O0tBRFhILEk7O0FBaUROQSxJQUFJLENBQUNnQixlQUFMO0FBQUEsK0xBQXVCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0hDLEtBQUssc0RBQ3lCRCxHQUFHLENBQUNaLEtBQUosQ0FBVUQsRUFEbkMsRUFERjs7QUFBQTtBQUNmZSxlQURlO0FBQUE7QUFBQSxtQkFJRkEsR0FBRyxDQUFDQyxJQUFKLEVBSkU7O0FBQUE7QUFJZkMsZ0JBSmU7QUFBQSw2Q0FLZDtBQUFFcEIsbUJBQUssRUFBRW9CO0FBQVQsYUFMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZXJCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0YXNrc1xcW2lkXS5qcy41YmZjYjJiOTQ0NmNhNDhlNjg3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHsgX3Rhc2sgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza0NhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGFzazogI3tfdGFzay5pZH08L2g1PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogPGJyIC8+XHJcbiAgICAgICAgICAgICAge190YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ1cGRhdGVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIFwiIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICBzYXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXHJcbiAgICAgICAgICAgICAgICB9fT4gXHJcbiAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2F2ZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXItNCBkLW5vbmVcIiAgb25DbGljaz17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcclxuICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxhclwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiICBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UYXNrLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHsgX3Rhc2s6IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=