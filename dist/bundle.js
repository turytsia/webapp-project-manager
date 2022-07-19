/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Component.ts":
/*!*************************************!*\
  !*** ./src/Components/Component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/**
 * Creates HTML node
 * @private {template} Selected template
 * @private {element} First template's child node
 */
class Component {
    constructor(templateId, rootElement) {
        this.element = {};
        this.template = document.getElementById(templateId);
        this.createElementInDOM(rootElement);
    }
    get getElement() {
        return this.element;
    }
    createElementInDOM(rootElement) {
        const templateNode = document.importNode(this.template.content, true);
        this.element = templateNode.firstElementChild;
        rootElement.insertAdjacentElement("beforeend", this.element);
    }
}


/***/ }),

/***/ "./src/Components/Form.ts":
/*!********************************!*\
  !*** ./src/Components/Form.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Components/Component.ts");
/* harmony import */ var _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Decorators/autobind */ "./src/Decorators/autobind.ts");
/* harmony import */ var _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants/project-status */ "./src/Constants/project-status.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const root = document.getElementById("app");
// Validator
class Validator {
    static isEmpty(value, message = "Value is empty") {
        if (value.length === 0) {
            alert(message);
            return true;
        }
        return false;
    }
}
const defaultBody = {
    title: "",
    description: "",
    people: "",
    type: _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.ACTIVE,
};
class Form extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("template-form", root);
        this.onsubmit = () => { };
        this.inputs = [];
        this.body = Object.assign({}, defaultBody);
        this.configureElementInDOM();
    }
    onInputChange(e) {
        const inputName = e.target.getAttribute("name");
        this.body[inputName] = e.target.value;
    }
    onSubmit(e) {
        e.preventDefault();
        if (Validator.isEmpty(this.body.title, "Error: Title is empty") ||
            Validator.isEmpty(this.body.description, "Error: Description is empty") ||
            Validator.isEmpty(this.body.people, "Error: People is empty")) {
            return;
        }
        this.onsubmit(this.body);
        this.clear();
    }
    configureElementInDOM() {
        const inputs = this.getElement.getElementsByTagName("input");
        const textareas = this.getElement.getElementsByTagName("textarea");
        this.inputs = this.inputs.concat(Array.from(inputs), Array.from(textareas));
        this.getElement.addEventListener("submit", this.onSubmit);
        for (const input of this.inputs) {
            input.addEventListener("change", this.onInputChange);
        }
    }
    clear() {
        for (const input of this.inputs) {
            input.value = "";
        }
        this.body = Object.assign({}, defaultBody);
    }
}
__decorate([
    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__["default"]
], Form.prototype, "onInputChange", null);
__decorate([
    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__["default"]
], Form.prototype, "onSubmit", null);


/***/ }),

/***/ "./src/Components/List.ts":
/*!********************************!*\
  !*** ./src/Components/List.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Components/Component.ts");
/* harmony import */ var _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Decorators/autobind */ "./src/Decorators/autobind.ts");
/* harmony import */ var _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants/project-status */ "./src/Constants/project-status.ts");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItem */ "./src/Components/ListItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const root = document.getElementById("app");
/**
 * Project List Section
 */
class List extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(type) {
        super("template-list", root);
        this.type = type;
        this.configureElementInDOM();
    }
    static append(body) {
        List.items.push(new _ListItem__WEBPACK_IMPORTED_MODULE_3__["default"](body));
    }
    onDragOver(event) {
        event.preventDefault();
        this.getElement.classList.add("droppable");
    }
    onDragDrop(event) {
        var _a;
        const id = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("plain/text");
        if (id) {
            const index = List.items.findIndex((item) => item.id === id);
            List.items[index].type = this.type;
            this.updateElementInDOM();
        }
        this.getElement.classList.remove("droppable");
    }
    onDragLeave(event) {
        this.getElement.classList.remove("droppable");
    }
    updateElementInDOM() {
        for (const item of List.items) {
            if (item.type === this.type) {
                item.updateElementInDOM();
            }
        }
    }
    configureElementInDOM() {
        this.getElement.addEventListener("dragover", this.onDragOver);
        this.getElement.addEventListener("drop", this.onDragDrop);
        this.getElement.addEventListener("dragleave", this.onDragLeave);
        if (this.type === _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.ACTIVE) {
            this.getElement.classList.add("list--active");
            this.getElement.querySelector("h2").innerHTML = "Active Projects";
        }
        else {
            this.getElement.classList.add("list--finished");
            this.getElement.querySelector("h2").innerHTML = "Finished Projects";
        }
    }
}
List.items = [];
__decorate([
    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__["default"]
], List.prototype, "onDragOver", null);
__decorate([
    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__["default"]
], List.prototype, "onDragDrop", null);
__decorate([
    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__["default"]
], List.prototype, "onDragLeave", null);


/***/ }),

/***/ "./src/Components/ListItem.ts":
/*!************************************!*\
  !*** ./src/Components/ListItem.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Components/Component.ts");
/* harmony import */ var _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Decorators/autobind */ "./src/Decorators/autobind.ts");
/* harmony import */ var _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants/project-status */ "./src/Constants/project-status.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Project Item
 * @private {title} Item's Title
 * @private {description} Item's Description
 * @private {people} Item's People
 */
class ListItem extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(body) {
        super("template-list-item", document.querySelector(body.type === _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.ACTIVE
            ? ".list--active ul"
            : ".list--finished ul"));
        this.id = Math.random().toString();
        this.title = body.title;
        this.description = body.description;
        this.people = body.people;
        this.type = body.type;
        this.configureElementInDOM();
    }
    get getItem() {
        return {
            title: this.title,
            description: this.description,
            people: this.people,
            type: this.type,
        };
    }
    onDragStart(event) {
        var _a;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("plain/text", this.id);
    }
    onDragEnd(event) { }
    updateElementInDOM() {
        let CSSClass = ".list--active ul";
        if (this.type === _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.FINISHED) {
            CSSClass = ".list--finished ul";
        }
        const rootElement = document.querySelector(CSSClass);
        this.getElement.remove();
        this.createElementInDOM(rootElement);
        this.configureElementInDOM();
    }
    configureElementInDOM() {
        this.getElement.addEventListener("dragstart", this.onDragStart);
        this.getElement.addEventListener("dragend", this.onDragEnd);
        this.getElement.setAttribute("id", this.id);
        const titleElement = this.getElement.querySelector("h2");
        const peopleElement = this.getElement.querySelector("span");
        titleElement.innerHTML = this.title;
        peopleElement.innerHTML = this.people;
    }
}
__decorate([
    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__["default"]
], ListItem.prototype, "onDragStart", null);
__decorate([
    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__["default"]
], ListItem.prototype, "onDragEnd", null);


/***/ }),

/***/ "./src/Constants/project-status.ts":
/*!*****************************************!*\
  !*** ./src/Constants/project-status.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectStatus": () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["ACTIVE"] = 0] = "ACTIVE";
    ProjectStatus[ProjectStatus["FINISHED"] = 1] = "FINISHED";
})(ProjectStatus || (ProjectStatus = {}));


/***/ }),

/***/ "./src/Decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/Decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ autobind)
/* harmony export */ });
function autobind(target, name, descriptor) {
    const originalFunction = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalFunction.bind(this);
        },
    };
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Form */ "./src/Components/Form.ts");
/* harmony import */ var _Components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/List */ "./src/Components/List.ts");
/* harmony import */ var _Constants_project_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants/project-status */ "./src/Constants/project-status.ts");



const form = new _Components_Form__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _Components_List__WEBPACK_IMPORTED_MODULE_1__["default"](_Constants_project_status__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.ACTIVE);
new _Components_List__WEBPACK_IMPORTED_MODULE_1__["default"](_Constants_project_status__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.FINISHED);
form.onsubmit = (body) => {
    _Components_List__WEBPACK_IMPORTED_MODULE_1__["default"].append(body);
};
//test

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNBO0FBQ2dDO0FBRXJFLE1BQU0sSUFBSSxHQUFHLElBQUksd0RBQUksRUFBRSxDQUFDO0FBR3hCLElBQUksd0RBQUksQ0FBQywyRUFBYSxDQUFDLENBQUM7QUFFeEIsSUFBSSx3REFBSSxDQUFDLDZFQUFlLENBQUMsQ0FBQztBQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDdkIsK0RBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFDRixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL0NvbXBvbmVudHMvRm9ybS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL0NvbXBvbmVudHMvTGlzdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL0NvbXBvbmVudHMvTGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9Db25zdGFudHMvcHJvamVjdC1zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9EZWNvcmF0b3JzL2F1dG9iaW5kLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlcyBIVE1MIG5vZGVcclxuICogQHByaXZhdGUge3RlbXBsYXRlfSBTZWxlY3RlZCB0ZW1wbGF0ZVxyXG4gKiBAcHJpdmF0ZSB7ZWxlbWVudH0gRmlyc3QgdGVtcGxhdGUncyBjaGlsZCBub2RlXHJcbiAqL1xyXG4gZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgdGVtcGxhdGU6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IFBhcnRpYWw8RWxlbWVudD4gPSB7fTtcclxuICBcclxuICAgIGdldCBnZXRFbGVtZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50IGFzIEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZUlkOiBzdHJpbmcsIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudEluRE9NKHJvb3RFbGVtZW50KTtcclxuICAgIH1cclxuICBcclxuICAgIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50SW5ET00ocm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlTm9kZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGVtcGxhdGVOb2RlLmZpcnN0RWxlbWVudENoaWxkISBhcyBFbGVtZW50O1xyXG4gICAgICByb290RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGhpcy5lbGVtZW50IGFzIEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbmZpZ3VyZUVsZW1lbnRJbkRPTSgpOiB2b2lkO1xyXG4gIH0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50J1xyXG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnLi4vRGVjb3JhdG9ycy9hdXRvYmluZCdcclxuaW1wb3J0IHsgUHJvamVjdFN0YXR1cyB9IGZyb20gJy4uL0NvbnN0YW50cy9wcm9qZWN0LXN0YXR1cyc7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikhO1xyXG5cclxuLy8gVmFsaWRhdG9yXHJcbmNsYXNzIFZhbGlkYXRvciB7XHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlZhbHVlIGlzIGVtcHR5XCIpIHtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG50eXBlIEZvcm1JbnB1dEVsZW1lbnRzID0gSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcblxyXG5leHBvcnQgdHlwZSBGb3JtSW5wdXRQcm9wcyA9IFwidGl0bGVcIiB8IFwiZGVzY3JpcHRpb25cIiB8IFwicGVvcGxlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Cb2R5IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcGVvcGxlOiBzdHJpbmc7XHJcbiAgdHlwZTogUHJvamVjdFN0YXR1cztcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEJvZHk6IEZvcm1Cb2R5ID0ge1xyXG4gIHRpdGxlOiBcIlwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gIHBlb3BsZTogXCJcIixcclxuICB0eXBlOiBQcm9qZWN0U3RhdHVzLkFDVElWRSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHB1YmxpYyBvbnN1Ym1pdDogKGJvZHk6IEZvcm1Cb2R5KSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIHByaXZhdGUgaW5wdXRzOiBGb3JtSW5wdXRFbGVtZW50c1tdID0gW107XHJcbiAgcHJpdmF0ZSBib2R5ID0geyAuLi5kZWZhdWx0Qm9keSB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwidGVtcGxhdGUtZm9ybVwiLCByb290KTtcclxuICAgIHRoaXMuY29uZmlndXJlRWxlbWVudEluRE9NKCk7XHJcbiAgfVxyXG5cclxuICBAYXV0b2JpbmRcclxuICBwcml2YXRlIG9uSW5wdXRDaGFuZ2UoZTogRXZlbnQgJiB7IHRhcmdldDogYW55IH0pIHtcclxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgICB0aGlzLmJvZHlbaW5wdXROYW1lIGFzIEZvcm1JbnB1dFByb3BzXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQGF1dG9iaW5kXHJcbiAgcHJpdmF0ZSBvblN1Ym1pdChlOiBFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICBWYWxpZGF0b3IuaXNFbXB0eSh0aGlzLmJvZHkudGl0bGUsIFwiRXJyb3I6IFRpdGxlIGlzIGVtcHR5XCIpIHx8XHJcbiAgICAgIFZhbGlkYXRvci5pc0VtcHR5KHRoaXMuYm9keS5kZXNjcmlwdGlvbiwgXCJFcnJvcjogRGVzY3JpcHRpb24gaXMgZW1wdHlcIikgfHxcclxuICAgICAgVmFsaWRhdG9yLmlzRW1wdHkodGhpcy5ib2R5LnBlb3BsZSwgXCJFcnJvcjogUGVvcGxlIGlzIGVtcHR5XCIpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbnN1Ym1pdCh0aGlzLmJvZHkpO1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyZUVsZW1lbnRJbkRPTSgpIHtcclxuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuZ2V0RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSEoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHRleHRhcmVhcyA9IHRoaXMuZ2V0RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSEoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRoaXMuaW5wdXRzID0gdGhpcy5pbnB1dHMuY29uY2F0KEFycmF5LmZyb20oaW5wdXRzKSwgQXJyYXkuZnJvbSh0ZXh0YXJlYXMpKTtcclxuXHJcbiAgICB0aGlzLmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciEoXCJzdWJtaXRcIiwgdGhpcy5vblN1Ym1pdCk7XHJcbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMuaW5wdXRzKSB7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5vbklucHV0Q2hhbmdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXIoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMuaW5wdXRzKSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuYm9keSA9IHsgLi4uZGVmYXVsdEJvZHkgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IGF1dG9iaW5kIGZyb20gXCIuLi9EZWNvcmF0b3JzL2F1dG9iaW5kXCI7XHJcbmltcG9ydCB7IFByb2plY3RTdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzL3Byb2plY3Qtc3RhdHVzXCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgeyBEcmFnQXJlYSB9IGZyb20gXCIuLi9VdGlscy9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgRm9ybUJvZHkgfSBmcm9tIFwiLi9Gb3JtXCI7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikhO1xyXG5cclxuLyoqXHJcbiAqIFByb2plY3QgTGlzdCBTZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50IGltcGxlbWVudHMgRHJhZ0FyZWEge1xyXG4gIHN0YXRpYyBpdGVtczogTGlzdEl0ZW1bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHR5cGU6IFByb2plY3RTdGF0dXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHR5cGU6IFByb2plY3RTdGF0dXMpIHtcclxuICAgIHN1cGVyKFwidGVtcGxhdGUtbGlzdFwiLCByb290KTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNvbmZpZ3VyZUVsZW1lbnRJbkRPTSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFwcGVuZChib2R5OiBGb3JtQm9keSkge1xyXG4gICAgTGlzdC5pdGVtcy5wdXNoKG5ldyBMaXN0SXRlbShib2R5KSk7XHJcbiAgfVxyXG5cclxuICBAYXV0b2JpbmRcclxuICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZVwiKTtcclxuICB9XHJcblxyXG4gIEBhdXRvYmluZFxyXG4gIHB1YmxpYyBvbkRyYWdEcm9wKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgaWQgPSAoZXZlbnQgYXMgRHJhZ0V2ZW50KS5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJwbGFpbi90ZXh0XCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTGlzdC5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuICAgICAgTGlzdC5pdGVtc1tpbmRleF0udHlwZSA9IHRoaXMudHlwZTtcclxuICAgICAgdGhpcy51cGRhdGVFbGVtZW50SW5ET00oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xyXG4gIH1cclxuXHJcbiAgQGF1dG9iaW5kXHJcbiAgcHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5nZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XHJcbiAgfVxyXG4gIHB1YmxpYyB1cGRhdGVFbGVtZW50SW5ET00oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgTGlzdC5pdGVtcykge1xyXG4gICAgICBpZiAoaXRlbS50eXBlID09PSB0aGlzLnR5cGUpIHtcclxuICAgICAgICBpdGVtLnVwZGF0ZUVsZW1lbnRJbkRPTSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY29uZmlndXJlRWxlbWVudEluRE9NKCkge1xyXG4gICAgdGhpcy5nZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLm9uRHJhZ092ZXIpO1xyXG4gICAgdGhpcy5nZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMub25EcmFnRHJvcCk7XHJcbiAgICB0aGlzLmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB0aGlzLm9uRHJhZ0xlYXZlKTtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSBQcm9qZWN0U3RhdHVzLkFDVElWRSkge1xyXG4gICAgICB0aGlzLmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtLWFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5nZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKSEuaW5uZXJIVE1MID0gXCJBY3RpdmUgUHJvamVjdHNcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC0tZmluaXNoZWRcIik7XHJcbiAgICAgIHRoaXMuZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikhLmlubmVySFRNTCA9IFwiRmluaXNoZWQgUHJvamVjdHNcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4uL1V0aWxzL0RyYWdnYWJsZVwiO1xyXG5pbXBvcnQgYXV0b2JpbmQgZnJvbSBcIi4uL0RlY29yYXRvcnMvYXV0b2JpbmRcIjtcclxuaW1wb3J0IHsgUHJvamVjdFN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHMvcHJvamVjdC1zdGF0dXNcIjtcclxuaW1wb3J0IHtGb3JtQm9keX0gZnJvbSAnLi9Gb3JtJ1xyXG5cclxuLyoqXHJcbiAqIFByb2plY3QgSXRlbVxyXG4gKiBAcHJpdmF0ZSB7dGl0bGV9IEl0ZW0ncyBUaXRsZVxyXG4gKiBAcHJpdmF0ZSB7ZGVzY3JpcHRpb259IEl0ZW0ncyBEZXNjcmlwdGlvblxyXG4gKiBAcHJpdmF0ZSB7cGVvcGxlfSBJdGVtJ3MgUGVvcGxlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCBpbXBsZW1lbnRzIERyYWdnYWJsZSB7XHJcbiAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgcHVibGljIHR5cGU6IFByb2plY3RTdGF0dXM7XHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHVibGljIHBlb3BsZTogc3RyaW5nO1xyXG5cclxuICBnZXQgZ2V0SXRlbSgpOiBGb3JtQm9keSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIHBlb3BsZTogdGhpcy5wZW9wbGUsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihib2R5OiBGb3JtQm9keSkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIFwidGVtcGxhdGUtbGlzdC1pdGVtXCIsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYm9keS50eXBlID09PSBQcm9qZWN0U3RhdHVzLkFDVElWRVxyXG4gICAgICAgICAgPyBcIi5saXN0LS1hY3RpdmUgdWxcIlxyXG4gICAgICAgICAgOiBcIi5saXN0LS1maW5pc2hlZCB1bFwiXHJcbiAgICAgICkhXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLnRpdGxlID0gYm9keS50aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBib2R5LmRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wZW9wbGUgPSBib2R5LnBlb3BsZTtcclxuICAgIHRoaXMudHlwZSA9IGJvZHkudHlwZTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZ3VyZUVsZW1lbnRJbkRPTSgpO1xyXG4gIH1cclxuXHJcbiAgQGF1dG9iaW5kXHJcbiAgcHVibGljIG9uRHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgKGV2ZW50IGFzIERyYWdFdmVudCkuZGF0YVRyYW5zZmVyPy5zZXREYXRhKFwicGxhaW4vdGV4dFwiLCB0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIEBhdXRvYmluZFxyXG4gIHB1YmxpYyBvbkRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRWxlbWVudEluRE9NKCkge1xyXG4gICAgbGV0IENTU0NsYXNzID0gXCIubGlzdC0tYWN0aXZlIHVsXCI7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gUHJvamVjdFN0YXR1cy5GSU5JU0hFRCkge1xyXG4gICAgICBDU1NDbGFzcyA9IFwiLmxpc3QtLWZpbmlzaGVkIHVsXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENTU0NsYXNzKSEgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5nZXRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50SW5ET00ocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5jb25maWd1cmVFbGVtZW50SW5ET00oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maWd1cmVFbGVtZW50SW5ET00oKSB7XHJcbiAgICB0aGlzLmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuICAgIHRoaXMuZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblxyXG4gICAgdGhpcy5nZXRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQpO1xyXG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKSE7XHJcbiAgICBjb25zdCBwZW9wbGVFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpITtcclxuICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xyXG4gICAgcGVvcGxlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnBlb3BsZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gUHJvamVjdFN0YXR1cyB7XHJcbiAgQUNUSVZFLFxyXG4gIEZJTklTSEVELFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9iaW5kKFxyXG4gICAgdGFyZ2V0OiBhbnksXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3JcclxuICApOiBQcm9wZXJ0eURlc2NyaXB0b3Ige1xyXG4gICAgY29uc3Qgb3JpZ2luYWxGdW5jdGlvbiA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb24uYmluZCh0aGlzKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZvcm0gZnJvbSBcIi4vQ29tcG9uZW50cy9Gb3JtXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0U3RhdHVzIGFzIHN0YXR1cyB9IGZyb20gXCIuL0NvbnN0YW50cy9wcm9qZWN0LXN0YXR1c1wiO1xyXG5cclxuY29uc3QgZm9ybSA9IG5ldyBGb3JtKCk7XHJcblxyXG5cclxubmV3IExpc3Qoc3RhdHVzLkFDVElWRSk7XHJcblxyXG5uZXcgTGlzdChzdGF0dXMuRklOSVNIRUQpO1xyXG5cclxuZm9ybS5vbnN1Ym1pdCA9IChib2R5KSA9PiB7XHJcbiAgTGlzdC5hcHBlbmQoYm9keSk7XHJcbn07XHJcbi8vdGVzdFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=