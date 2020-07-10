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
    console.log("r");

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
    console.log(event.target.checked, '2do entro if TRUE');
    var newobject = {
      userId: task.userId,
      id: task.id,
      title: task.title,
      completed: !event.target.checked
    };
    console.log(newobject, "asi va a la base de datos");
    dispatch(Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__["putTodo"])(newobject));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row m-4 sticky-top bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 55,
      columnNumber: 11
    }
  }))), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, taskList.map(function (task, i) {
    return __jsx("li", {
      key: i,
      id: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return handleClick(e, task.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx("i", {
      className: "fas fa-trash-alt",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
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
        lineNumber: 68,
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
        lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjaGVjayIsInNldENoZWNrIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJvcmRlciIsInNvcnQiLCJhIiwiYiIsIk51bWJlciIsImNvbXBsZXRlZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJpZCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRlbGV0ZVRhc2siLCJoYW5kbGVDaGFuZ2UiLCJuZXdUYXNrcyIsImZpbHRlciIsInRpdGxlIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoZWNrIiwidGFzayIsImNoZWNrZWQiLCJuZXdvYmplY3QiLCJ1c2VySWQiLCJwdXRUb2RvIiwiZSIsIm1hcCIsImkiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDcEJDLFFBRG9CO0FBQUEsTUFDVkMsV0FEVTs7QUFBQSxtQkFFREYsc0RBQVEsRUFGUDtBQUFBLE1BRXBCRyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBRzNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7O0FBQ0EsUUFBSVYsS0FBSyxDQUFDVyxNQUFWLEVBQWtCO0FBQ2hCLFVBQU1DLEtBQUssR0FBR1osS0FBSyxD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QUcsZUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFDRSxVQUFJLEVBQUVhLElBQUksQ0FBQ2IsRUFEYjtBQUVFLGFBQU8sRUFBRSxpQkFBQ2tCLENBQUQsRUFBTztBQUNkQSxTQUFDLENBQUNqQixjQUFGO0FBQ0FvQiwwREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixtQkFBcUNULElBQUksQ0FBQ2IsRUFBMUM7QUFDRCxPQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR2EsSUFBSSxDQUFDTCxLQVBSLENBSkYsRUFhRTtBQUNFLFVBQUksRUFBQyxVQURQO0FBRUUsb0JBQWMsRUFBRUssSUFBSSxDQUFDaEIsU0FGdkI7QUFHRSxjQUFRLEVBQUUsa0JBQUNxQixDQUFEO0FBQUEsZUFBT04sV0FBVyxDQUFDTSxDQUFELEVBQUdMLElBQUgsQ0FBbEI7QUFBQSxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiRixDQURZO0FBQUEsR0FBYixDQURILENBWEYsQ0FERjtBQXFDRCxDQWxGRDs7R0FBTWxDLEs7VUFHYVEsdUQ7OztLQUhiUixLO0FBb0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTI4YWU4YTI4YTc2YTFhMGZmZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHB1dFRvZG8gfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy90b2RvQWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgVGFza3MgPSAoeyB0YXNrcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiclwiKTtcclxuICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgb3JkZXIgPSB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihhLmNvbXBsZXRlZCkgLSBOdW1iZXIoYi5jb21wbGV0ZWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGFza0xpc3Qob3JkZXIpO1xyXG4gICAgfVxyXG4gIH0sIFt0YXNrc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgaWQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XHJcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVRhc2soaWQpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdUYXNrcyA9IHRhc2tzLmZpbHRlcigoeyB0aXRsZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiB0aXRsZS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRUYXNrTGlzdChuZXdUYXNrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZXZlbnQsdGFzaykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmNoZWNrZWQsIFwiMWVyIENvbW8gbGxlZ2FcIilcclxuICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2hlY2tlZCwgJzJkbyBlbnRybyBpZiBUUlVFJylcclxuICAgICAgY29uc3QgbmV3b2JqZWN0ID0ge1xyXG4gICAgICAgIHVzZXJJZDogdGFzay51c2VySWQsXHJcbiAgICAgICAgaWQ6IHRhc2suaWQsXHJcbiAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgICAgY29tcGxldGVkOiAhZXZlbnQudGFyZ2V0LmNoZWNrZWQsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKG5ld29iamVjdCwgXCJhc2kgdmEgYSBsYSBiYXNlIGRlIGRhdG9zXCIpXHJcbiAgICAgIGRpc3BhdGNoKHB1dFRvZG8obmV3b2JqZWN0KSlcclxuICAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tNCBzdGlja3ktdG9wIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgU2VhcmNoOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdGFza1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dGFza0xpc3QubWFwKCh0YXNrLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpfSBpZD17dGFzay5pZH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIHRhc2suaWQpfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgbmFtZT17dGFzay5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdGFza3MvW2lkXVwiLCBgL3Rhc2tzLyR7dGFzay5pZH1gKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3Rhc2suY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hlY2soZSx0YXNrKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=