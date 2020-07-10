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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
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
    var bool = event.target.value != "true";
    console.log(bool);
    setStateOrder(bool);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row m-2 sticky-top bg-light d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "col-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-5 d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Order by: "), __jsx("select", {
    onChange: function onChange(e) {
      return handleOrder(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Task Complete"), __jsx("option", {
    value: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Task Incomplete")))), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, taskList.map(function (task, i) {
    return __jsx("li", {
      key: i,
      id: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return handleClick(e, task.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, __jsx("i", {
      className: "fas fa-trash-alt",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
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
        lineNumber: 78,
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
        lineNumber: 87,
        columnNumber: 13
      }
    }));
  })));
};

_s(Tasks, "qTvPzcI6V66LO5bVBkKwG4nsDKQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJzdGF0ZU9yZWRlciIsInNldFN0YXRlT3JkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5ld09yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiY29tcGxldGVkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJ0YXNrIiwibmV3b2JqZWN0IiwidXNlcklkIiwiY2hlY2tlZCIsInB1dFRvZG8iLCJoYW5kbGVPcmRlciIsImJvb2wiLCJlIiwibWFwIiwiaSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUVwQkcsV0FGb0I7QUFBQSxNQUVQQyxhQUZPOztBQUczQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaOztBQUNBLFFBQUlWLEtBQUss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QSxlQUFPUixXQUFXLENBQUNRLENBQUQsRUFBSVAsSUFBSixDQUFsQjtBQUFBLE9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJGLENBRFk7QUFBQSxHQUFiLENBREgsQ0FsQkYsQ0FERjtBQTRDRCxDQTVGRDs7R0FBTWxDLEs7VUFHYVEsdUQ7OztLQUhiUixLO0FBOEZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMGZjNjU3ZGEwNTVmMjY0YmIzZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHB1dFRvZG8gfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy90b2RvQWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgVGFza3MgPSAoeyB0YXNrcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXRlT3JlZGVyLCBzZXRTdGF0ZU9yZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiclwiKTtcclxuICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbmV3T3JkZXIgPSB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlT3JlZGVyXHJcbiAgICAgICAgICA/IE51bWJlcihhLmNvbXBsZXRlZCkgLSBOdW1iZXIoYi5jb21wbGV0ZWQpXHJcbiAgICAgICAgICA6IE51bWJlcihiLmNvbXBsZXRlZCkgLSBOdW1iZXIoYS5jb21wbGV0ZWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGFza0xpc3QobmV3T3JkZXIpO1xyXG4gICAgfVxyXG4gIH0sIFt0YXNrcywgc3RhdGVPcmVkZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIGlkKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICBkaXNwYXRjaChkZWxldGVUYXNrKGlkKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3VGFza3MgPSB0YXNrcy5maWx0ZXIoKHsgdGl0bGUgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGl0bGUuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgc2V0VGFza0xpc3QobmV3VGFza3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGV2ZW50LCB0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBuZXdvYmplY3QgPSB7XHJcbiAgICAgIHVzZXJJZDogdGFzay51c2VySWQsXHJcbiAgICAgIGlkOiB0YXNrLmlkLFxyXG4gICAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgICAgY29tcGxldGVkOiBldmVudC50YXJnZXQuY2hlY2tlZCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaChwdXRUb2RvKG5ld29iamVjdCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9yZGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBib29sID0gZXZlbnQudGFyZ2V0LnZhbHVlICE9IFwidHJ1ZVwiO1xyXG4gICAgY29uc29sZS5sb2coYm9vbCk7XHJcbiAgICBzZXRTdGF0ZU9yZGVyKGJvb2wpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTIgc3RpY2t5LXRvcCBiZy1saWdodCBkLWZsZXhcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLTdcIj5cclxuICAgICAgICAgIFNlYXJjaDpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIHRhc2tcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItMlwiPk9yZGVyIGJ5OiA8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU9yZGVyKGUpfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRydWVcIj5UYXNrIENvbXBsZXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWxzZVwiPlRhc2sgSW5jb21wbGV0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Rhc2tMaXN0Lm1hcCgodGFzaywgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0gaWQ9e3Rhc2suaWR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCB0YXNrLmlkKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIG5hbWU9e3Rhc2suaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Rhc2tzL1tpZF1cIiwgYC90YXNrcy8ke3Rhc2suaWR9YCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hlY2soZSwgdGFzayl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9