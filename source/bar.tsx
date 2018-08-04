/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Progress bar class.
 */
@Class.Describe()
export class Bar extends Control.Component<Properties> {
  /**
   * Progress states.
   */
  @Class.Private()
  private states = {
    name: '',
    percent: 0,
    current: 0,
    total: 0
  };

  /**
   * Progress element.
   */
  @Class.Private()
  private progressSlot: HTMLSlotElement = <slot name="progress" class="progress" /> as HTMLSlotElement;

  /**
   * Background element.
   */
  @Class.Private()
  private backgroundSlot: HTMLSlotElement = <slot name="background" class="background" /> as HTMLSlotElement;

  /**
   * Information element.
   */
  @Class.Private()
  private informationSlot: HTMLSlotElement = <slot name="information" class="information" /> as HTMLSlotElement;

  /**
   * Wrapper element.
   */
  @Class.Private()
  private wrapper: HTMLElement = (
    <div class="wrapper">
      {this.backgroundSlot}
      {this.progressSlot}
      {this.informationSlot}
    </div>
  ) as HTMLElement;

  /**
   * Form styles.
   */
  @Class.Private()
  private styles: HTMLStyleElement = (
    <style>
      {`:host > .wrapper {
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
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Progress skeleton.
   */
  @Class.Private()
  private skeleton: Element = (
    <div slot={this.properties.slot} class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * Progress elements.
   */
  @Class.Private()
  private elements: ShadowRoot = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.wrapper) as ShadowRoot;

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    Object.defineProperties(this.skeleton, {
      name: super.bindDescriptor(Bar.prototype, 'name'),
      value: super.bindDescriptor(Bar.prototype, 'value'),
      total: super.bindDescriptor(Bar.prototype, 'total')
    });
  }

  /**
   * Assign all elements properties.
   */
  @Class.Private()
  private assignProperties(): void {
    Control.assignProperties(this, this.properties, ['name', 'value', 'total']);
    this.changeHandler();
  }

  /**
   * Change event handler.
   */
  @Class.Private()
  private changeHandler(): void {
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
   * Default constructor.
   * @param properties Form properties.
   * @param children Form children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    this.bindProperties();
    this.assignProperties();
  }

  /**
   * Get progress name.
   */
  @Class.Public()
  public get name(): string {
    return this.states.name;
  }

  /**
   * Set progress name.
   */
  public set name(name: string) {
    this.states.name = name;
  }

  /**
   * Get current position.
   */
  @Class.Public()
  public get value(): number {
    return this.states.current;
  }

  /**
   * Set current position.
   */
  public set value(value: number) {
    this.states.current = value;
    this.changeHandler();
  }

  /**
   * Get final position.
   */
  @Class.Public()
  public get total(): number {
    return this.states.total;
  }

  /**
   * Set final position.
   */
  public set total(value: number) {
    this.states.total = value;
    this.changeHandler();
  }

  /**
   * Progress element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }
}
