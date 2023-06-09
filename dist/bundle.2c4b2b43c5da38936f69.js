/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/markup-injectors/update-tasklist-dom-injection.js":
/*!******************************************************************!*\
  !*** ./src/js/markup-injectors/update-tasklist-dom-injection.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_controller_task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-controller/task-manager-class.js */ "./src/js/user-controller/task-manager-class.js");
/* harmony import */ var _markup_templates_create_task_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markup-templates/create-task-template.js */ "./src/js/markup-templates/create-task-template.js");


var updateTaskListOnDOM = function updateTaskListOnDOM(updateWhen) {
  var taskListHolder = document.querySelector('[data-task-list-holder]');
  var taskList = new _user_controller_task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]().getTaskList();
  if (updateWhen === 'lastTask') {
    taskListHolder.innerHTML += (0,_markup_templates_create_task_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskList[taskList.length - 1]);
  } else if (updateWhen === 'fullList') {
    taskList.forEach(function (task) {
      taskListHolder.innerHTML += (0,_markup_templates_create_task_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskListOnDOM);

/***/ }),

/***/ "./src/js/markup-templates/create-task-template.js":
/*!*********************************************************!*\
  !*** ./src/js/markup-templates/create-task-template.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createTaskTemplate = function createTaskTemplate(task) {
  return "<div id=\"".concat(task.index, "\" class=\"w-100 p-3 ps-2 d-flex\"\n  data-task-holder\n>\n<input type=\"checkbox\" class=\"m-2\" data-task-checkbox\n  data-completed=\"").concat(task.completed, "\"\n/>\n<input\n  type=\"text\"\n  value=\"").concat(task.description, "\"\n  class=\"border-0 ps-2 w-100\"\n  data-task\n  readonly\n/>\n<button\n  type=\"button\"\n  class=\"my-button trash align-self-start ms-3\"\n  data-delete-task\n>\n  <i class=\"fa-solid fa-trash\"></i>\n</button>\n<button\n  type=\"button\"\n  class=\"my-button draggable align-self-start ms-3\"\n  data-draggable-task\n>\n  <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n</button>\n</div>");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskTemplate);

/***/ }),

/***/ "./src/js/user-controller/task-manager-class.js":
/*!******************************************************!*\
  !*** ./src/js/user-controller/task-manager-class.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TaskManager = /*#__PURE__*/function () {
  function TaskManager() {
    _classCallCheck(this, TaskManager);
    this.taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  }
  _createClass(TaskManager, [{
    key: "updateLocalStorage",
    value: function updateLocalStorage() {
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }, {
    key: "addNewTask",
    value: function addNewTask(task) {
      this.taskList.push({
        description: task.description,
        completed: false,
        index: this.taskList.length
      });
      this.updateLocalStorage();
    }
  }, {
    key: "updateTask",
    value: function updateTask(task) {
      if (task.index in this.taskList) {
        if ('description' in task) {
          this.taskList[task.index].description = task.description;
        }
        if ('completed' in task) {
          this.taskList[task.index].completed = task.completed;
        }
        this.updateLocalStorage();
      }
    }
  }, {
    key: "removeCompletedTasks",
    value: function removeCompletedTasks() {
      this.taskList = this.taskList.filter(function (task) {
        return !task.completed;
      });
      this.updateTaskIndex();
      this.updateLocalStorage();
    }
  }, {
    key: "removeTask",
    value: function removeTask(taskIndex) {
      this.taskList.splice(taskIndex, 1);
      this.updateTaskIndex();
      this.updateLocalStorage();
    }
  }, {
    key: "updateTaskIndex",
    value: function updateTaskIndex() {
      this.taskList.forEach(function (task, index) {
        task.index = index;
      });
    }
  }, {
    key: "getTaskList",
    value: function getTaskList() {
      return this.taskList;
    }
  }]);
  return TaskManager;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskManager);

/***/ }),

/***/ "./src/js/user-controller/user-controller-events.js":
/*!**********************************************************!*\
  !*** ./src/js/user-controller/user-controller-events.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-manager-class.js */ "./src/js/user-controller/task-manager-class.js");
/* harmony import */ var _markup_injectors_update_tasklist_dom_injection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markup-injectors/update-tasklist-dom-injection.js */ "./src/js/markup-injectors/update-tasklist-dom-injection.js");
/* harmony import */ var _utils_get_parent_element_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-parent-element-id.js */ "./src/js/utils/get-parent-element-id.js");
/* harmony import */ var _utils_updateCompletedTaskStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/updateCompletedTaskStyles.js */ "./src/js/utils/updateCompletedTaskStyles.js");




if (window.localStorage.length > 0) {
  (0,_markup_injectors_update_tasklist_dom_injection_js__WEBPACK_IMPORTED_MODULE_1__["default"])('fullList');
  (0,_utils_updateCompletedTaskStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
document.querySelector('[data-refresh-btn]').addEventListener('click', function () {
  window.location.reload();
});
document.querySelector('[data-add-task]').addEventListener('click', function () {
  var taskData = document.querySelector('[name="new-task"]');
  if (!taskData.value) {
    return;
  }
  var taskList = new _task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  taskList.addNewTask({
    description: taskData.value
  });
  (0,_markup_injectors_update_tasklist_dom_injection_js__WEBPACK_IMPORTED_MODULE_1__["default"])('lastTask');
  window.location.reload();
});
document.querySelectorAll('[data-task]').forEach(function (taskInput) {
  taskInput.addEventListener('click', function () {
    taskInput.readOnly = false;
  });
  document.addEventListener('mouseleave', function (event) {
    // ? update data => when mouse leaves input element
    if (!taskInput.contains(event.target)) {
      var parentDiv = (0,_utils_get_parent_element_id_js__WEBPACK_IMPORTED_MODULE_2__["default"])(taskInput, 'div');
      var taskList = new _task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      taskList.updateTask({
        index: parentDiv.id,
        description: taskInput.value
      });
    }
  });
});
document.querySelectorAll('[data-task-checkbox]').forEach(function (checkbox) {
  checkbox.addEventListener('change', function (event) {
    var taskCompleted = JSON.parse(event.target.dataset.completed);
    var parentDiv = (0,_utils_get_parent_element_id_js__WEBPACK_IMPORTED_MODULE_2__["default"])(checkbox, 'div');
    var taskList = new _task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    taskList.updateTask({
      index: parentDiv.id,
      completed: !taskCompleted
    });
    parentDiv.classList.toggle('task-completed');
    window.location.reload();
  });
});
document.querySelectorAll('[data-delete-task]').forEach(function (button) {
  button.addEventListener('click', function () {
    var parentDiv = (0,_utils_get_parent_element_id_js__WEBPACK_IMPORTED_MODULE_2__["default"])(button, 'div');
    var taskList = new _task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    taskList.removeTask(parentDiv.id);
    window.location.reload();
  });
});
document.querySelector('[data-clear-all-btn]').addEventListener('click', function () {
  var taskList = new _task_manager_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  taskList.removeCompletedTasks();
  window.location.reload();
});

/***/ }),

/***/ "./src/js/utils/get-parent-element-id.js":
/*!***********************************************!*\
  !*** ./src/js/utils/get-parent-element-id.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getParentElement = function getParentElement(element, type) {
  var parent = element.closest(type);
  return parent;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getParentElement);

/***/ }),

/***/ "./src/js/utils/updateCompletedTaskStyles.js":
/*!***************************************************!*\
  !*** ./src/js/utils/updateCompletedTaskStyles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateCompletedTaskStyles = function updateCompletedTaskStyles() {
  var taskHolder = document.querySelectorAll('[data-task-holder]');
  taskHolder.forEach(function (task) {
    var taskCheckboxInput = task.children[0];
    if (JSON.parse(taskCheckboxInput.dataset.completed) === true) {
      task.classList.add('task-completed');
      taskCheckboxInput.checked = true;
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCompletedTaskStyles);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&family=Poppins:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: "Poppins", sans-serif;
  background-color: #090930;
}

#header {
  font-weight: 700;
  color: #090930;
}

.task--wrapper {
  padding: 0;
}
@media (min-width: 768px) {
  .task--wrapper {
    width: 60%;
  }
}

input[type=text] {
  outline: none;
}
input[type=text]::placeholder {
  font-style: italic;
}

input[type=checkbox] {
  transition: all 0.2s ease-in-out;
}
input[type=checkbox]:checked {
  accent-color: #2ecd2e;
}
input[type=checkbox]:hover {
  transform: scale(1.2);
}

.my-button {
  background-color: #fff;
  color: #8f8f8f;
  border: none;
  transition: all 0.2s ease-in-out;
}
.my-button.clear-all {
  background-color: #e2e2e2;
}
.my-button.draggable {
  cursor: move;
}
.my-button.trash:hover {
  color: #8f2727;
}
.my-button:hover {
  color: #555;
}

.task-completed {
  text-decoration: line-through;
  opacity: 0.5;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAOA;EACE,kCAAA;EACA,yBAJU;AADZ;;AAQA;EACE,gBAAA;EACA,cATU;AAIZ;;AAQA;EACE,UAAA;AALF;AAOE;EAHF;IAII,UAAA;EAJF;AACF;;AAOA;EACE,aAAA;AAJF;AAME;EACE,kBAAA;AAJJ;;AAQA;EACE,gCAAA;AALF;AAOE;EACE,qBAAA;AALJ;AAQE;EACE,qBAAA;AANJ;;AAUA;EACE,sBA5CkB;EA6ClB,cA5CkB;EA6ClB,YAAA;EACA,gCAAA;AAPF;AASE;EACE,yBAAA;AAPJ;AAUE;EACE,YAAA;AARJ;AAWE;EACE,cAAA;AATJ;AAYE;EACE,WA5DuB;AAkD3B;;AAcA;EACE,6BAAA;EACA,YAAA;AAXF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&family=Poppins:wght@300&display=swap');\n\n$button-background: #fff;\n$button-font-color: #8f8f8f;\n$button-darker-font-color: #555;\n$dark-blue: #090930;\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  background-color: $dark-blue;\n}\n\n#header {\n  font-weight: 700;\n  color: $dark-blue;\n}\n\n.task--wrapper {\n  padding: 0;\n\n  @media (min-width: 768px) {\n    width: 60%;\n  }\n}\n\ninput[type='text'] {\n  outline: none;\n\n  &::placeholder {\n    font-style: italic;\n  }\n}\n\ninput[type='checkbox'] {\n  transition: all 0.2s ease-in-out;\n\n  &:checked {\n    accent-color: #2ecd2e;\n  }\n\n  &:hover {\n    transform: scale(1.2);\n  }\n}\n\n.my-button {\n  background-color: $button-background;\n  color: $button-font-color;\n  border: none;\n  transition: all 0.2s ease-in-out;\n\n  &.clear-all {\n    background-color: #e2e2e2;\n  }\n\n  &.draggable {\n    cursor: move;\n  }\n\n  &.trash:hover {\n    color: #8f2727;\n  }\n\n  &:hover {\n    color: $button-darker-font-color;\n  }\n}\n\n.task-completed {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _user_controller_user_controller_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-controller/user-controller-events.js */ "./src/js/user-controller/user-controller-events.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.2c4b2b43c5da38936f69.js.map