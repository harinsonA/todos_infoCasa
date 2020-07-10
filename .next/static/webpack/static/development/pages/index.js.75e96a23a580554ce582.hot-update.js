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

  var handleCheck = function handleCheck(event, task) {
    if (event.target.check == false) {
      var newobject = {
        userId: task.userId,
        id: task.id,
        title: task.title,
        completed: true
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
        return handleCheck(e, task);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLmpzIl0sIm5hbWVzIjpbIlRhc2tzIiwidGFza3MiLCJ1c2VTdGF0ZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJjaGVjayIsInNldENoZWNrIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm9yZGVyIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImlkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImhhbmRsZUNoYW5nZSIsIm5ld1Rhc2tzIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2siLCJ0YXNrIiwibmV3b2JqZWN0IiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsInB1dFRvZG8iLCJlIiwibWFwIiwiaSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUFBLG1CQUVERixzREFBUSxDQUFDRCxLQUFLLENBQUNJLFNBQVAsQ0FGUDtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBRzNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVQsS0FBSyxDQUFDVSxNQUFWLEVBQWtCO0FBQ2hCLFVBQU1DLEtBQUssR0FBR1gsS0FBSyxDQUFDWSxJQUFOLENBQVcsVUFBQ0Ms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LFNBQUMsQ0FBQ2xCLGNBQUY7QUFDQXFCLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLG1CQUFxQ1YsSUFBSSxDQUFDYixFQUExQztBQUNELE9BTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9HYSxJQUFJLENBQUNMLEtBUFIsQ0FKRixFQWFFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxvQkFBYyxFQUFFSyxJQUFJLENBQUMzQixTQUZ2QjtBQUdFLGNBQVEsRUFBRSxrQkFBQ2lDLENBQUQ7QUFBQSxlQUFPUCxXQUFXLENBQUNPLENBQUQsRUFBR04sSUFBSCxDQUFsQjtBQUFBLE9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJGLENBRFk7QUFBQSxHQUFiLENBREgsQ0FYRixDQURGO0FBcUNELENBaEZEOztHQUFNaEMsSztVQUdhUyx1RDs7O0tBSGJULEs7QUFrRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43NWU5NmEyM2E1ODA1NTRjZTU4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFzaywgcHV0VG9kbyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3RvZG9BY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBUYXNrcyA9ICh7IHRhc2tzIH0pID0+IHtcclxuICBjb25zdCBbdGFza0xpc3QsIHNldFRhc2tMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKHRhc2tzLmNvbXBsZXRlZCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRhc2tzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBvcmRlciA9IHRhc2tzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKGEuY29tcGxldGVkKSAtIE51bWJlcihiLmNvbXBsZXRlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUYXNrTGlzdChvcmRlcik7XHJcbiAgICB9XHJcbiAgfSwgW3Rhc2tzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBpZCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgZGlzcGF0Y2goZGVsZXRlVGFzayhpZCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGFza3MuZmlsdGVyKCh7IHRpdGxlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIHRpdGxlLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVjayA9IChldmVudCx0YXNrKSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IG5ld29iamVjdCA9IHtcclxuICAgICAgICB1c2VySWQ6IHRhc2sudXNlcklkLFxyXG4gICAgICAgIGlkOiB0YXNrLmlkLFxyXG4gICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2cobmV3b2JqZWN0KVxyXG4gICAgICBkaXNwYXRjaChwdXRUb2RvKG5ld29iamVjdCkpXHJcbiAgICB9XHJcbiAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTQgc3RpY2t5LXRvcCBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgIFNlYXJjaDpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIHRhc2tcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLTZcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Rhc2tMaXN0Lm1hcCgodGFzaywgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0gaWQ9e3Rhc2suaWR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCB0YXNrLmlkKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIG5hbWU9e3Rhc2suaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Rhc2tzL1tpZF1cIiwgYC90YXNrcy8ke3Rhc2suaWR9YCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0YXNrLmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoZWNrKGUsdGFzayl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9