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
    console.log(Boolean(event.target.value));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row m-2 sticky-top bg-light d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "col-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-5 d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Order by: "), __jsx("select", {
    onChange: function onChange(e) {
      return handleOrder(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Task Complete"), __jsx("option", {
    value: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Task Incomplete")))), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, taskList.map(function (task, i) {
    return __jsx("li", {
      key: i,
      id: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return handleClick(e, task.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, __jsx("i", {
      className: "fas fa-trash-alt",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
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
        lineNumber: 77,
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
        lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJzdGF0ZU9yZWRlciIsInNldFN0YXRlT3JkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5ld09yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiY29tcGxldGVkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJ0YXNrIiwibmV3b2JqZWN0IiwidXNlcklkIiwiY2hlY2tlZCIsInB1dFRvZG8iLCJoYW5kbGVPcmRlciIsIkJvb2xlYW4iLCJlIiwibWFwIiwiaSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLEtBQUQsQ0FGbEI7QUFBQSxNQUVwQkcsV0FGb0I7QUFBQSxNQUVQQyxhQUZPOztBQUczQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaOztBQUNBLFFBQUlWLEtB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJGLENBRFk7QUFBQSxHQUFiLENBREgsQ0FsQkYsQ0FERjtBQTRDRCxDQTNGRDs7R0FBTWxDLEs7VUFHYVEsdUQ7OztLQUhiUixLO0FBNkZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDIzNjgzY2U3MjI1MzJmNTRlOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHB1dFRvZG8gfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy90b2RvQWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgVGFza3MgPSAoeyB0YXNrcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXRlT3JlZGVyLCBzZXRTdGF0ZU9yZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJcIik7XHJcbiAgICBpZiAodGFza3MubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG5ld09yZGVyID0gdGFza3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZU9yZWRlclxyXG4gICAgICAgICAgPyBOdW1iZXIoYS5jb21wbGV0ZWQpIC0gTnVtYmVyKGIuY29tcGxldGVkKVxyXG4gICAgICAgICAgOiBOdW1iZXIoYi5jb21wbGV0ZWQpIC0gTnVtYmVyKGEuY29tcGxldGVkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRhc2tMaXN0KG5ld09yZGVyKTtcclxuICAgIH1cclxuICB9LCBbdGFza3MsIHN0YXRlT3JlZGVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBpZCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgZGlzcGF0Y2goZGVsZXRlVGFzayhpZCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGFza3MuZmlsdGVyKCh7IHRpdGxlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIHRpdGxlLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVjayA9IChldmVudCwgdGFzaykgPT4ge1xyXG4gICAgY29uc3QgbmV3b2JqZWN0ID0ge1xyXG4gICAgICB1c2VySWQ6IHRhc2sudXNlcklkLFxyXG4gICAgICBpZDogdGFzay5pZCxcclxuICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgIGNvbXBsZXRlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2gocHV0VG9kbyhuZXdvYmplY3QpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcmRlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMiBzdGlja3ktdG9wIGJnLWxpZ2h0IGQtZmxleFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtN1wiPlxyXG4gICAgICAgICAgU2VhcmNoOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdGFza1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtci0yXCI+T3JkZXIgYnk6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT3JkZXIoZSl9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0cnVlfT5UYXNrIENvbXBsZXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZhbHNlfT5UYXNrIEluY29tcGxldGU8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt0YXNrTGlzdC5tYXAoKHRhc2ssIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l9IGlkPXt0YXNrLmlkfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgdGFzay5pZCl9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBuYW1lPXt0YXNrLmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi90YXNrcy9baWRdXCIsIGAvdGFza3MvJHt0YXNrLmlkfWApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoZWNrKGUsIHRhc2spfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==