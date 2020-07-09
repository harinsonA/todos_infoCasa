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

    if (event.target.id = "update") {
      var save = document.getElementById("save");
      var cancel = document.getElementById("cancel");
      var textarea = document.getElementById("textarea");
      save.classList.remove("d-none");
      cancel.classList.remove("d-none");
      textarea.classList.remove("d-none");
      e.target.classList.add("d-none");
    } else {}

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
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "taskCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Task: #", _task.id), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Description: ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 28
    }
  }), _task.title)), __jsx("div", {
    className: "card-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
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
      lineNumber: 54,
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
      lineNumber: 70,
      columnNumber: 17
    }
  }, "Cancel")), __jsx("textarea", {
    id: "textarea",
    className: "form-control d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90YXNrcy8uanMiXSwibmFtZXMiOlsiVGFzayIsIl90YXNrIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInNhdmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FuY2VsIiwidGV4dGFyZWEiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJlIiwiYWRkIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwidXBkYXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDBCLE1BRWxCQyxFQUZrQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFbEJELEVBRmtCOztBQUkxQixNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0JBLFNBQUssQ0FBQ0MsY0FBTjs7QUFDQSxRQUFLRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUwsRUFBYixHQUFrQixRQUF2QixFQUFrQztBQUNoQyxVQUFNTSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsVUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLFVBQU1FLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0FGLFVBQUksQ0FBQ0ssU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0FILFlBQU0sQ0FB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RSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBVSxZQUFNLENBQUNQLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0FOLFVBQUksQ0FBQ0ssU0FBTCxDQUFlRyxHQUFmLENBQW1CLFFBQW5CO0FBQ0FKLGNBQVEsQ0FBQ0MsU0FBVCxDQUFtQkcsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDQUQsT0FBQyxDQUFDUixNQUFGLENBQVNNLFNBQVQsQ0FBbUJHLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0QsS0FaSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJGLENBREYsRUEyQ0U7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLGFBQVMsRUFBQyxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0NGLENBREYsQ0FSRixDQURGLENBREYsQ0FERjtBQWlFRCxDQTdGRDs7R0FBTWxCLEk7VUFDV0cscUQ7OztLQURYSCxJOztBQStGTkEsSUFBSSxDQUFDdUIsZUFBTDtBQUFBLCtMQUF1QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIQyxLQUFLLHNEQUN5QkQsR0FBRyxDQUFDbkIsS0FBSixDQUFVRCxFQURuQyxFQURGOztBQUFBO0FBQ2ZzQixlQURlO0FBQUE7QUFBQSxtQkFJRkEsR0FBRyxDQUFDQyxJQUFKLEVBSkU7O0FBQUE7QUFJZkMsZ0JBSmU7QUFBQSw2Q0FLZDtBQUFFM0IsbUJBQUssRUFBRTJCO0FBQVQsYUFMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZTVCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0YXNrc1xcW2lkXS5qcy45MTE1MDhjM2MxYTUyZTMzNmE1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHsgX3Rhc2sgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoKGV2ZW50LnRhcmdldC5pZCA9IFwidXBkYXRlXCIpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVcIik7XHJcbiAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpO1xyXG4gICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWFcIik7XHJcbiAgICAgIHNhdmUuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgY2FuY2VsLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgIHRleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vIGNvbnN0IHRhc2sgPSBldmVudC50YXJnZXQudGFzay52YWx1ZTtcclxuICAgIC8vIGlmICh0YXNrICYmIHRhc2subGVuZ3RoICE9IDApIHtcclxuICAgIC8vICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgLy8gICAgIHVzZXJJZDogMSxcclxuICAgIC8vICAgICB0aXRsZTogdGFzayxcclxuICAgIC8vICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgLy8gICB9O1xyXG4gICAgLy8gICBkaXNwYXRjaChwb3N0VG9kbyhvYmplY3QpKTtcclxuICAgIC8vIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrQ2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UYXNrOiAje190YXNrLmlkfTwvaDU+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uOiA8YnIgLz5cclxuICAgICAgICAgICAgICB7X3Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBzYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGUuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZC1ub25lXCJcclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblRhc2suZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4geyBfdGFzazogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==