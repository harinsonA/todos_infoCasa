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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tasks.completed),
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

  var handleCheck = function handleCheck(event) {
    if (event.target.check == true) {
      var newobject = {
        userId: tasks.userId,
        id: tasks.id,
        title: tasks.title,
        completed: false
      };
      console.log(newobject);
      dispatch(Object(_store_actions_todoAction__WEBPACK_IMPORTED_MODULE_2__["putTodo"])(newobject));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row m-4 sticky-top bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 53,
      columnNumber: 11
    }
  }))), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, taskList.map(function (task, i) {
    return __jsx("li", {
      key: i,
      id: task.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return handleClick(e, task.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("i", {
      className: "fas fa-trash-alt",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 66,
        columnNumber: 13
      }
    }, task.title), __jsx("input", {
      type: "checkbox",
      defaultChecked: task.completed,
      onChange: function onChange(e) {
        return handleCheck(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }));
  })));
};

_s(Tasks, "RRTPq4wONdNawFBAM2gI8D4MRXk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJjaGVjayIsInNldENoZWNrIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm9yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJuZXdvYmplY3QiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwicHV0VG9kbyIsImUiLCJtYXAiLCJ0YXNrIiwiaSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUFBLG1CQUVERixzREFBUSxDQUFDRCxLQUFLLENBQUNJLFNBQVAsQ0FGUDtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBRzNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVQsS0FBSyxDQUFDVSxNQUFWLEVBQWtCO0FBQ2hCLFVBQU1DLEtBQUssR0FBR1gsS0FBSyxDQUFDWSxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDakMsZUFBT0MsTUFBTSxDQUFDRixDQUFDLENBQUNULFNBQUgsQ0FBTixHQUFzQlcsTUFBTSxDQUFDRCxDQUFDLENBQUNWLFNBQUgsQ0FBbkM7QUFDRCxPQUZhLENBQWQ7QUFHQUQsaUJBQVcsQ0FBQ1EsS0FBRCxDQUFYO0FBQ0Q7QUFDRixHQVBRLEVBT04sQ0FBQ1gsS0FBRCxDQVBNLENBQVQ7O0FBU0EsTUFBTWdCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFlO0FBQ2pDRCxTQUFLLENBQUNFLGNBQU47O0FBQ0EsUUFBSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxFQUF4QixDQUFKLEVBQWlDO0FBQy9CWCxjQUFRLENBQUNlLDRFQUFVLENBQUNKLEVBQUQsQ0FBWCxDQUFSO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNOLEtBQUQsRUFBVztBQUM5QkEsU0FBSyxDQUFDRSxjQUFOO0FBQ0EsUUFBTUssUUFBUSxHQUFHeEIsS0FBSyxDQUFDeUIsTUFBTixDQUFhLGlCQUFlO0FBQUEsVUFBWkMsS0FBWSxTQUFaQSxLQUFZO0FBQzNDLGFBQU9BLEtBQUssQ0FBQ0MsUUFBTixDQUFlVixLQUFLLENBQUNXLE1BQU4sQ0FBYUMsS0FBNUIsQ0FBUDtBQUNELEtBRmdCLENBQWpCO0FBR0ExQixlQUFXLENBQUNxQixRQUFELENBQVg7QUFDRCxHQU5EOztBQVFBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNiLEtBQUQsRUFBVztBQUM3QixRQUFJQSxLQUFLLENBQUNXLE1BQU4sQ0FBYXZCLEtBQWIsSUFBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsVUFBTTBCLFNBQVMsR0FBRztBQUNoQkMsY0FBTSxFQUFFaEMsS0FBSyxDQUFDZ0MsTUFERTtBQUVoQmQsVUFBRSxFQUFFbEIsS0FBSyxDQUFDa0IsRUFGTTtBQUdoQlEsYUFBSyxFQUFFMUIsS0FBSyxDQUFDMEIsS0FIRztBQUloQnRCLGlCQUFTLEVBQUU7QUFKSyxPQUFsQjtBQU1BNkIsYUFBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFDQXhCLGNBQVEsQ0FBQzRCLHlFQUFPLENBQUNKLFNBQUQsQ0FBUixDQUFSO0FBQ0Q7QUFFRixHQVpEOztBQWNBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sYUFBUyxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUU7QUFDRSxlQUFXLEVBQUMsZUFEZDtBQUVFLGFBQVMsRUFBQyxvQkFGWjtBQUdFLFlBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLGFBQU9iLFlBQVksQ0FBQ2EsQ0FBRCxDQUFuQjtBQUFBLEtBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2xDLFFBQVEsQ0FBQ21DLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNaO0FBQUksU0FBRyxFQUFFQSxDQUFUO0FBQVksUUFBRSxFQUFFRCxJQUFJLENBQUNwQixFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBUSxhQUFPLEVBQUUsaUJBQUNrQixDQUFEO0FBQUEsZUFBT3BCLFdBQVcsQ0FBQ29CLENBQUQsRUFBSUUsSUFBSSxDQUFDcEIsRUFBVCxDQUFsQjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQ0UsVUFBSSxFQUFFb0IsSUFBSSxDQUFDcEIsRUFEYjtBQUVFLGFBQU8sRUFBRSxpQkFBQ2tCLENBQUQsRUFBTztBQUNkQSxTQUFDLENBQUNqQixjQUFGO0FBQ0FxQiwwREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixtQkFBcUNILElBQUksQ0FBQ3BCLEVBQTFDO0FBQ0QsT0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0dvQixJQUFJLENBQUNaLEtBUFIsQ0FKRixFQWFFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxvQkFBYyxFQUFFWSxJQUFJLENBQUNsQyxTQUZ2QjtBQUdFLGNBQVEsRUFBRSxrQkFBQ2dDLENBQUQ7QUFBQSxlQUFPTixXQUFXLENBQUNNLENBQUQsQ0FBbEI7QUFBQSxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiRixDQURZO0FBQUEsR0FBYixDQURILENBWEYsQ0FERjtBQXFDRCxDQWhGRDs7R0FBTXJDLEs7VUFHYVMsdUQ7OztLQUhiVCxLO0FBa0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmJlOGJiMTA0MTU2MDdlNjdmNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHB1dFRvZG8gfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy90b2RvQWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgVGFza3MgPSAoeyB0YXNrcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSh0YXNrcy5jb21wbGV0ZWQpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgb3JkZXIgPSB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihhLmNvbXBsZXRlZCkgLSBOdW1iZXIoYi5jb21wbGV0ZWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGFza0xpc3Qob3JkZXIpO1xyXG4gICAgfVxyXG4gIH0sIFt0YXNrc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgaWQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XHJcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVRhc2soaWQpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdUYXNrcyA9IHRhc2tzLmZpbHRlcigoeyB0aXRsZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiB0aXRsZS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRUYXNrTGlzdChuZXdUYXNrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBuZXdvYmplY3QgPSB7XHJcbiAgICAgICAgdXNlcklkOiB0YXNrcy51c2VySWQsXHJcbiAgICAgICAgaWQ6IHRhc2tzLmlkLFxyXG4gICAgICAgIHRpdGxlOiB0YXNrcy50aXRsZSxcclxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhuZXdvYmplY3QpXHJcbiAgICAgIGRpc3BhdGNoKHB1dFRvZG8obmV3b2JqZWN0KSlcclxuICAgIH1cclxuICAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tNCBzdGlja3ktdG9wIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgU2VhcmNoOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdGFza1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtNlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dGFza0xpc3QubWFwKCh0YXNrLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpfSBpZD17dGFzay5pZH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIHRhc2suaWQpfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgbmFtZT17dGFzay5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdGFza3MvW2lkXVwiLCBgL3Rhc2tzLyR7dGFzay5pZH1gKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3Rhc2suY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hlY2soZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9