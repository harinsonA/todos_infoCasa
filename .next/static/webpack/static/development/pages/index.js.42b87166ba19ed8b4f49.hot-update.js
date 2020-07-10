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
    var bool = event.target.value == "true";
    console.log(bool);
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
    value: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Task Complete"), __jsx("option", {
    value: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJzdGF0ZU9yZWRlciIsInNldFN0YXRlT3JkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5ld09yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiY29tcGxldGVkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJ0YXNrIiwibmV3b2JqZWN0IiwidXNlcklkIiwiY2hlY2tlZCIsInB1dFRvZG8iLCJoYW5kbGVPcmRlciIsImJvb2wiLCJlIiwibWFwIiwiaSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLEtBQUQsQ0FGbEI7QUFBQSxNQUVwQkcsV0FGb0I7QUFBQSxNQUVQQyxhQUZPOztBQUczQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaOztBQUNBLFFBQUlWLEtBQUss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LElBQUosQ0FBbEI7QUFBQSxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiRixDQURZO0FBQUEsR0FBYixDQURILENBbEJGLENBREY7QUE0Q0QsQ0E3RkQ7O0dBQU1sQyxLO1VBR2FRLHVEOzs7S0FIYlIsSztBQStGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQyYjg3MTY2YmExOWVkOGI0ZjQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrLCBwdXRUb2RvIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvdG9kb0FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFRhc2tzID0gKHsgdGFza3MgfSkgPT4ge1xyXG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdGF0ZU9yZWRlciwgc2V0U3RhdGVPcmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyXCIpO1xyXG4gICAgaWYgKHRhc2tzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBuZXdPcmRlciA9IHRhc2tzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gKHN0YXRlT3JlZGVyKVxyXG4gICAgICAgICAgPyBOdW1iZXIoYi5jb21wbGV0ZWQpIC0gTnVtYmVyKGEuY29tcGxldGVkKVxyXG4gICAgICAgICAgOiBOdW1iZXIoYS5jb21wbGV0ZWQpIC0gTnVtYmVyKGIuY29tcGxldGVkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRhc2tMaXN0KG5ld09yZGVyKTtcclxuICAgIH1cclxuICB9LCBbdGFza3MsIHN0YXRlT3JlZGVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBpZCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgZGlzcGF0Y2goZGVsZXRlVGFzayhpZCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGFza3MuZmlsdGVyKCh7IHRpdGxlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIHRpdGxlLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVjayA9IChldmVudCwgdGFzaykgPT4ge1xyXG4gICAgY29uc3QgbmV3b2JqZWN0ID0ge1xyXG4gICAgICB1c2VySWQ6IHRhc2sudXNlcklkLFxyXG4gICAgICBpZDogdGFzay5pZCxcclxuICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgIGNvbXBsZXRlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2gocHV0VG9kbyhuZXdvYmplY3QpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcmRlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgYm9vbCA9IChldmVudC50YXJnZXQudmFsdWUgPT1cInRydWVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhib29sKTtcclxuICAgXHJcbiAgICBcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0yIHN0aWNreS10b3AgYmctbGlnaHQgZC1mbGV4XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC03XCI+XHJcbiAgICAgICAgICBTZWFyY2g6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYSB0YXNrXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTJcIj5PcmRlciBieTogPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPcmRlcihlKX0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RydWV9ID5UYXNrIENvbXBsZXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZhbHNlfSA+VGFzayBJbmNvbXBsZXRlPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dGFza0xpc3QubWFwKCh0YXNrLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpfSBpZD17dGFzay5pZH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIHRhc2suaWQpfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgbmFtZT17dGFzay5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdGFza3MvW2lkXVwiLCBgL3Rhc2tzLyR7dGFzay5pZH1gKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGFzay5jb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGVjayhlLCB0YXNrKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=