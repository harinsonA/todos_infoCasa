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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      check = _useState2[0],
      setCheck = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (tasks.length) {
      var order = tasks.sort(function (a, b) {
        return Number(a.completed) - Number(b.completed);
      });
      setTaskList(order);
    }
  }, [tasks]);

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
    console.log(event.target.checked, "1er Como llega");

    if (event.target.checked) {
      console.log(event.target.checked, '2do entro if TRUE');
      var newobject = {
        userId: task.userId,
        id: task.id,
        title: task.title,
        completed: event.target.checked
      };
      console.log(newobject, "asi va a la base de datos");
      dispatch(Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__["putTodo"])(newobject));
    } else {
      console.log(event.target.checked, '3ro entro if FALSE');
      var _newobject = {
        userId: task.userId,
        id: task.id,
        title: task.title,
        completed: event.target.checked
      };
      console.log(_newobject, "asi va a la base de datos");
      dispatch(Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__["putTodo"])(_newobject));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row m-4 sticky-top bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Search:", __jsx("input", {
    placeholder: "Search a task",
    className: "form-control col-6",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }))), __jsx("ul", {
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
      defaultChecked: task.completed,
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

_s(Tasks, "pRjPQzaJUBx5O1DE7Xhh0q48JsU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjaGVjayIsInNldENoZWNrIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm9yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiY29tcGxldGVkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJ0YXNrIiwiY29uc29sZSIsImxvZyIsImNoZWNrZWQiLCJuZXdvYmplY3QiLCJ1c2VySWQiLCJwdXRUb2RvIiwiZSIsIm1hcCIsImkiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDcEJDLFFBRG9CO0FBQUEsTUFDVkMsV0FEVTs7QUFBQSxtQkFFREYsc0RBQVEsRUFGUDtBQUFBLE1BRXBCRyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBRzNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVIsS0FBSyxDQUFDUyxNQUFWLEVBQWtCO0FBQ2hCLFVBQU1DLEtBQUssR0FBR1YsS0FBSyxDQUFDVyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxD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OztLQUhiUixLO0FBOEZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzgxOTYzNzhlNzRiYjg2NDRmNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHB1dFRvZG8gfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy90b2RvQWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgVGFza3MgPSAoeyB0YXNrcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgb3JkZXIgPSB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihhLmNvbXBsZXRlZCkgLSBOdW1iZXIoYi5jb21wbGV0ZWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGFza0xpc3Qob3JkZXIpO1xyXG4gICAgfVxyXG4gIH0sIFt0YXNrc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgaWQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XHJcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVRhc2soaWQpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdUYXNrcyA9IHRhc2tzLmZpbHRlcigoeyB0aXRsZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiB0aXRsZS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRUYXNrTGlzdChuZXdUYXNrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZXZlbnQsdGFzaykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmNoZWNrZWQsIFwiMWVyIENvbW8gbGxlZ2FcIilcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2hlY2tlZCwgJzJkbyBlbnRybyBpZiBUUlVFJylcclxuICAgICAgY29uc3QgbmV3b2JqZWN0ID0ge1xyXG4gICAgICAgIHVzZXJJZDogdGFzay51c2VySWQsXHJcbiAgICAgICAgaWQ6IHRhc2suaWQsXHJcbiAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgICAgY29tcGxldGVkOiBldmVudC50YXJnZXQuY2hlY2tlZCxcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2cobmV3b2JqZWN0LCBcImFzaSB2YSBhIGxhIGJhc2UgZGUgZGF0b3NcIilcclxuICAgICAgZGlzcGF0Y2gocHV0VG9kbyhuZXdvYmplY3QpKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5jaGVja2VkLCAnM3JvIGVudHJvIGlmIEZBTFNFJylcclxuICAgICAgY29uc3QgbmV3b2JqZWN0ID0ge1xyXG4gICAgICAgIHVzZXJJZDogdGFzay51c2VySWQsXHJcbiAgICAgICAgaWQ6IHRhc2suaWQsXHJcbiAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgICAgY29tcGxldGVkOiBldmVudC50YXJnZXQuY2hlY2tlZCxcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2cobmV3b2JqZWN0LCBcImFzaSB2YSBhIGxhIGJhc2UgZGUgZGF0b3NcIilcclxuICAgICAgZGlzcGF0Y2gocHV0VG9kbyhuZXdvYmplY3QpKVxyXG4gICAgfVxyXG4gICBcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS00IHN0aWNreS10b3AgYmctd2hpdGVcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICBTZWFyY2g6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYSB0YXNrXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC02XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt0YXNrTGlzdC5tYXAoKHRhc2ssIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l9IGlkPXt0YXNrLmlkfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgdGFzay5pZCl9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBuYW1lPXt0YXNrLmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi90YXNrcy9baWRdXCIsIGAvdGFza3MvJHt0YXNrLmlkfWApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dGFzay5jb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGVjayhlLHRhc2spfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==