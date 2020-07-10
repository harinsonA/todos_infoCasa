webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Tasks.js":
/*!*****************************!*\
  !*** ./components/Tasks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/todoAction */ "./store/actions/todoAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\harri\\Documents\\Curso Desarrollo Web\\Proyectos\\infoCasa\\components\\Tasks.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Tasks = function Tasks(_ref) {
  _s();

  var tasks = _ref.tasks;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      taskList = _useState[0],
      setTaskList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      stateOreder = _useState2[0],
      setStateOrder = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("r");

    if (tasks.length) {
      var newOrder = tasks.sort(function (a, b) {
        return stateOreder ? Number(a.completed) - Number(b.completed) : Number(b.completed) - Number(a.completed);
      });
      setTaskList(newOrder);
    }
  }, [tasks, stateOreder]);

  var handleClick = function handleClick(event, id) {
    event.preventDefault();

    if (document.getElementById(id)) {
      dispatch(Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__["deleteTask"])(id));
    }
  };

  var handleChange = function handleChange(event) {
    event.preventDefault();
    var newTasks = tasks.filter(function (_ref2) {
      var title = _ref2.title;
      return title.includes(event.target.value);
    });
    setTaskList(newTasks);
  };

  var handleCheck = function handleCheck(event, task) {
    var newobject = {
      userId: task.userId,
      id: task.id,
      title: task.title,
      completed: event.target.checked
    };
    dispatch(Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__["putTodo"])(newobject));
  };

  var handleOrder = function handleOrder(event) {
    console.log(event.target.option);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row m-2 sticky-top bg-light d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "col-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Search:", __jsx("input", {
    placeholder: "Search a task",
    className: "form-control ",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-5 d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Order by: "), __jsx("select", {
    onChange: function onChange(e) {
      return handleOrder(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Task Complete"), __jsx("option", {
    value: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Task Incomplete")))), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, taskList.map(function (task, i) {
    return __jsx("li", {
      key: i,
      id: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return handleClick(e, task.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, __jsx("i", {
      className: "fas fa-trash-alt",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    })), __jsx("label", {
      name: task.id,
      onClick: function onClick(e) {
        e.preventDefault();
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/tasks/[id]", "/tasks/".concat(task.id));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, task.title), __jsx("input", {
      type: "checkbox",
      checked: task.completed,
      onChange: function onChange(e) {
        return handleCheck(e, task);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }));
  })));
};

_s(Tasks, "Yzzrd850BolfMGVIlEMev2+lz6o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = Tasks;
/* harmony default export */ __webpack_exports__["default"] = (Tasks);

var _c;

$RefreshReg$(_c, "Tasks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJzdGF0ZU9yZWRlciIsInNldFN0YXRlT3JkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5ld09yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiY29tcGxldGVkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJ0YXNrIiwibmV3b2JqZWN0IiwidXNlcklkIiwiY2hlY2tlZCIsInB1dFRvZG8iLCJoYW5kbGVPcmRlciIsIm9wdGlvbiIsImUiLCJtYXAiLCJpIiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3BCQyxRQURvQjtBQUFBLE1BQ1ZDLFdBRFU7O0FBQUEsbUJBRVVGLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRXBCRyxXQUZvQjtBQUFBLE1BRVBDLGFBRk87O0FBRzNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7O0FBQ0EsUUFBSVYsS0FB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O0FBQUE7QUFBQTtBQUFBLE1BYkYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQWxCRixDQURGO0FBNENELENBMUZEOztHQUFNbEMsSztVQUdhUSx1RDs7O0tBSGJSLEs7QUE0RlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xNGIyZWRkZjNjMGRlYzRmOTBhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFzaywgcHV0VG9kbyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBUYXNrcyA9ICh7IHRhc2tzIH0pID0+IHtcclxuICBjb25zdCBbdGFza0xpc3QsIHNldFRhc2tMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdGVPcmVkZXIsIHNldFN0YXRlT3JkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiclwiKTtcclxuICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbmV3T3JkZXIgPSB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlT3JlZGVyXHJcbiAgICAgICAgICA/IE51bWJlcihhLmNvbXBsZXRlZCkgLSBOdW1iZXIoYi5jb21wbGV0ZWQpXHJcbiAgICAgICAgICA6IE51bWJlcihiLmNvbXBsZXRlZCkgLSBOdW1iZXIoYS5jb21wbGV0ZWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGFza0xpc3QobmV3T3JkZXIpO1xyXG4gICAgfVxyXG4gIH0sIFt0YXNrcywgc3RhdGVPcmVkZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIGlkKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICBkaXNwYXRjaChkZWxldGVUYXNrKGlkKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3VGFza3MgPSB0YXNrcy5maWx0ZXIoKHsgdGl0bGUgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGl0bGUuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgc2V0VGFza0xpc3QobmV3VGFza3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGV2ZW50LCB0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBuZXdvYmplY3QgPSB7XHJcbiAgICAgIHVzZXJJZDogdGFzay51c2VySWQsXHJcbiAgICAgIGlkOiB0YXNrLmlkLFxyXG4gICAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgICAgY29tcGxldGVkOiBldmVudC50YXJnZXQuY2hlY2tlZCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaChwdXRUb2RvKG5ld29iamVjdCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9yZGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQub3B0aW9uKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTIgc3RpY2t5LXRvcCBiZy1saWdodCBkLWZsZXhcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLTdcIj5cclxuICAgICAgICAgIFNlYXJjaDpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIHRhc2tcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItMlwiPk9yZGVyIGJ5OiA8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU9yZGVyKGUpfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRydWVcIj5UYXNrIENvbXBsZXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWxzZVwiPlRhc2sgSW5jb21wbGV0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Rhc2tMaXN0Lm1hcCgodGFzaywgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0gaWQ9e3Rhc2suaWR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCB0YXNrLmlkKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIG5hbWU9e3Rhc2suaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Rhc2tzL1tpZF1cIiwgYC90YXNrcy8ke3Rhc2suaWR9YCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hlY2soZSwgdGFzayl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9