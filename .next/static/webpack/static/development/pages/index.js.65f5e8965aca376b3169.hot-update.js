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
        return stateOreder ? Number(b.completed) - Number(a.completed) : Number(a.completed) - Number(b.completed);
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
    console.log(parseInt(event.target.value));
    var bool = parseInt(event.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row m-2 sticky-top bg-light d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "col-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 59,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-5 d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Order by: "), __jsx("select", {
    onChange: function onChange(e) {
      return handleOrder(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("option", {
    defaultValue: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Task Complete"), __jsx("option", {
    defaultValue: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Task Incomplete")))), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, taskList.map(function (task, i) {
    return __jsx("li", {
      key: i,
      id: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return handleClick(e, task.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, __jsx("i", {
      className: "fas fa-trash-alt",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
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
        lineNumber: 79,
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
        lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJzdGF0ZU9yZWRlciIsInNldFN0YXRlT3JkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5ld09yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiY29tcGxldGVkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJ0YXNrIiwibmV3b2JqZWN0IiwidXNlcklkIiwiY2hlY2tlZCIsInB1dFRvZG8iLCJoYW5kbGVPcmRlciIsInBhcnNlSW50IiwiYm9vbCIsImUiLCJtYXAiLCJpIiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3BCQyxRQURvQjtBQUFBLE1BQ1ZDLFdBRFU7O0FBQUEsbUJBRVVGLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRXBCRyxXQUZvQjtBQUFBLE1BRVBDLGFBRk87O0FBRzNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7O0FBQ0Es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QUFHRSxjQUFRLEVBQUUsa0JBQUN3QixDQUFEO0FBQUEsZUFBT1QsV0FBVyxDQUFDUyxDQUFELEVBQUlSLElBQUosQ0FBbEI7QUFBQSxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiRixDQURZO0FBQUEsR0FBYixDQURILENBbEJGLENBREY7QUE0Q0QsQ0E3RkQ7O0dBQU1sQyxLO1VBR2FRLHVEOzs7S0FIYlIsSztBQStGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY1ZjVlODk2NWFjYTM3NmIzMTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrLCBwdXRUb2RvIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvdG9kb0FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFRhc2tzID0gKHsgdGFza3MgfSkgPT4ge1xyXG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdGF0ZU9yZWRlciwgc2V0U3RhdGVPcmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyXCIpO1xyXG4gICAgaWYgKHRhc2tzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBuZXdPcmRlciA9IHRhc2tzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gKHN0YXRlT3JlZGVyKVxyXG4gICAgICAgICAgPyBOdW1iZXIoYi5jb21wbGV0ZWQpIC0gTnVtYmVyKGEuY29tcGxldGVkKVxyXG4gICAgICAgICAgOiBOdW1iZXIoYS5jb21wbGV0ZWQpIC0gTnVtYmVyKGIuY29tcGxldGVkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRhc2tMaXN0KG5ld09yZGVyKTtcclxuICAgIH1cclxuICB9LCBbdGFza3MsIHN0YXRlT3JlZGVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBpZCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgZGlzcGF0Y2goZGVsZXRlVGFzayhpZCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGFza3MuZmlsdGVyKCh7IHRpdGxlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIHRpdGxlLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVjayA9IChldmVudCwgdGFzaykgPT4ge1xyXG4gICAgY29uc3QgbmV3b2JqZWN0ID0ge1xyXG4gICAgICB1c2VySWQ6IHRhc2sudXNlcklkLFxyXG4gICAgICBpZDogdGFzay5pZCxcclxuICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgIGNvbXBsZXRlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2gocHV0VG9kbyhuZXdvYmplY3QpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcmRlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICBjb25zdCBib29sID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgXHJcbiAgICBcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0yIHN0aWNreS10b3AgYmctbGlnaHQgZC1mbGV4XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC03XCI+XHJcbiAgICAgICAgICBTZWFyY2g6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYSB0YXNrXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTJcIj5PcmRlciBieTogPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPcmRlcihlKX0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXt0cnVlfSA+VGFzayBDb21wbGV0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17ZmFsc2V9ID5UYXNrIEluY29tcGxldGU8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt0YXNrTGlzdC5tYXAoKHRhc2ssIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l9IGlkPXt0YXNrLmlkfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgdGFzay5pZCl9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBuYW1lPXt0YXNrLmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi90YXNrcy9baWRdXCIsIGAvdGFza3MvJHt0YXNrLmlkfWApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoZWNrKGUsIHRhc2spfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==