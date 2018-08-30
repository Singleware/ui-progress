"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Progress template class.
 */
let Template = Template_1 = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Form properties.
     * @param children Form children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Progress states.
         */
        this.states = {
            name: '',
            percent: 0,
            current: 0,
            total: 0
        };
        /**
         * Progress element.
         */
        this.progressSlot = DOM.create("slot", { name: "progress", class: "progress" });
        /**
         * Background element.
         */
        this.backgroundSlot = DOM.create("slot", { name: "background", class: "background" });
        /**
         * Information element.
         */
        this.informationSlot = DOM.create("slot", { name: "information", class: "information" });
        /**
         * Wrapper element.
         */
        this.wrapper = (DOM.create("div", { class: "wrapper" },
            this.backgroundSlot,
            this.progressSlot,
            this.informationSlot));
        /**
         * Form styles.
         */
        this.styles = (DOM.create("style", null, `:host > .wrapper {
  position: relative;
  display: block;
  height: inherit;
}
:host > .wrapper > .progress,
:host > .wrapper > .background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
:host > .wrapper > .progress {
  transition: width .25s;
  overflow: hidden;
  max-width: 100%;
  width: 0%;
}
:host > .wrapper > .information {
  text-align: center;
}
:host > .wrapper > .progress::slotted(*),
:host > .wrapper > .background::slotted(*),
:host > .wrapper > .information::slotted(*) {
  height: 100%;
  width: 100%;
}`));
        /**
         * Progress skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        /**
         * Progress elements.
         */
        this.elements = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.wrapper);
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        Object.defineProperties(this.skeleton, {
            name: super.bindDescriptor(this, Template_1.prototype, 'name'),
            value: super.bindDescriptor(this, Template_1.prototype, 'value'),
            total: super.bindDescriptor(this, Template_1.prototype, 'total')
        });
    }
    /**
     * Assign all elements properties.
     */
    assignProperties() {
        Control.assignProperties(this, this.properties, ['name', 'value', 'total']);
        this.changeHandler();
    }
    /**
     * Change event handler.
     */
    changeHandler() {
        this.states.percent = (this.states.current * 100) / this.states.total;
        this.progressSlot.style.width = `${this.states.percent.toFixed(2)}%`;
        const children = this.informationSlot.assignedNodes();
        for (const child of children) {
            if (child instanceof HTMLElement) {
                child.innerText = `${this.states.percent.toFixed(0)}%`;
            }
        }
    }
    /**
     * Get progress name.
     */
    get name() {
        return this.states.name;
    }
    /**
     * Set progress name.
     */
    set name(name) {
        this.states.name = name;
    }
    /**
     * Get current position.
     */
    get value() {
        return this.states.current;
    }
    /**
     * Set current position.
     */
    set value(value) {
        this.states.current = value;
        this.changeHandler();
    }
    /**
     * Get final position.
     */
    get total() {
        return this.states.total;
    }
    /**
     * Set final position.
     */
    set total(value) {
        this.states.total = value;
        this.changeHandler();
    }
    /**
     * Progress element.
     */
    get element() {
        return this.skeleton;
    }
};
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "progressSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "backgroundSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "informationSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "wrapper", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "elements", void 0);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "changeHandler", null);
__decorate([
    Class.Public()
], Template.prototype, "name", null);
__decorate([
    Class.Public()
], Template.prototype, "value", null);
__decorate([
    Class.Public()
], Template.prototype, "total", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
Template = Template_1 = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
