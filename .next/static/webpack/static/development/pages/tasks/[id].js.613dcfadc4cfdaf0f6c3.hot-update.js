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

  var handleClick = function handleClick(event) {
    event.preventDefault();
    console.log(event.target); // const task = event.target.task.value;
    // if (task && task.length != 0) {
    //   const object = {
    //     userId: 1,
    //     title: task,
    //     completed: false,
    //   };
    //   dispatch(postTodo(object));
    // }
  };

  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "taskCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Task: #", _task.id), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Description: ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 28
    }
  }), _task.title)), __jsx("div", {
    className: "card-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("button", {
    id: "update",
    type: "button",
    className: "btn btn-info ",
    onClick: function onClick(e) {
      return handleClick(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Update"), __jsx("button", {
    id: "save",
    type: "submit",
    className: "btn btn-success d-none",
    onClick: function onClick(e) {
      var update = document.getElementById("update");
      var cancel = document.getElementById("cancel");
      var textarea = document.getElementById("textarea");
      update.classList.remove("d-none");
      cancel.classList.add("d-none");
      textarea.classList.add("d-none");
      e.target.classList.add("d-none");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "save"), __jsx("button", {
    id: "cancel",
    type: "button",
    className: "btn btn-danger d-none",
    onClick: function onClick(e) {
      var save = document.getElementById("save");
      var update = document.getElementById("update");
      var textarea = document.getElementById("textarea");
      update.classList.remove("d-none");
      save.classList.add("d-none");
      textarea.classList.add("d-none");
      e.target.classList.add("d-none");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Cancel")), __jsx("textarea", {
    id: "textarea",
    className: "form-control d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90YXNrcy8uanMiXSwibmFtZXMiOlsiVGFzayIsIl90YXNrIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0aXRsZSIsImUiLCJ1cGRhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FuY2VsIiwidGV4dGFyZWEiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzYXZlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDBCLE1BRWxCQyxFQUZrQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFbEJELEVBRmtCOztBQUkxQixNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0JBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBSyxDQUFDSSxNQUFsQixFQUY2QixDQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVpEOztBQWNBLFNBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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S0FEWEgsSTs7QUFxRk5BLElBQUksQ0FBQ3VCLGVBQUw7QUFBQSwrTEFBdUIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSEMsS0FBSyxzREFDeUJELEdBQUcsQ0FBQ25CLEtBQUosQ0FBVUQsRUFEbkMsRUFERjs7QUFBQTtBQUNmc0IsZUFEZTtBQUFBO0FBQUEsbUJBSUZBLEdBQUcsQ0FBQ0MsSUFBSixFQUpFOztBQUFBO0FBSWZDLGdCQUplO0FBQUEsNkNBS2Q7QUFBRTNCLG1CQUFLLEVBQUUyQjtBQUFULGFBTGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWU1QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGFza3NcXFtpZF0uanMuNjEzZGNmYWRjNGNmZGFmMGY2YzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgVGFzayA9ICh7IF90YXNrIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxyXG4gICAgLy8gY29uc3QgdGFzayA9IGV2ZW50LnRhcmdldC50YXNrLnZhbHVlO1xyXG4gICAgLy8gaWYgKHRhc2sgJiYgdGFzay5sZW5ndGggIT0gMCkge1xyXG4gICAgLy8gICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAvLyAgICAgdXNlcklkOiAxLFxyXG4gICAgLy8gICAgIHRpdGxlOiB0YXNrLFxyXG4gICAgLy8gICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAvLyAgIH07XHJcbiAgICAvLyAgIGRpc3BhdGNoKHBvc3RUb2RvKG9iamVjdCkpO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2tDYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRhc2s6ICN7X3Rhc2suaWR9PC9oNT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgRGVzY3JpcHRpb246IDxiciAvPlxyXG4gICAgICAgICAgICAgIHtfdGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1cGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBzYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGUuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZC1ub25lXCJcclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblRhc2suZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4geyBfdGFzazogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==