import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Progress bar class.
 */
export declare class Bar extends Control.Component<Properties> {
    /**
     * Progress states.
     */
    private states;
    /**
     * Progress element.
     */
    private progressSlot;
    /**
     * Background element.
     */
    private backgroundSlot;
    /**
     * Information element.
     */
    private informationSlot;
    /**
     * Wrapper element.
     */
    private wrapper;
    /**
     * Form styles.
     */
    private styles;
    /**
     * Progress skeleton.
     */
    private skeleton;
    /**
     * Progress elements.
     */
    private elements;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all elements properties.
     */
    private assignProperties;
    /**
     * Change event handler.
     */
    private changeHandler;
    /**
     * Default constructor.
     * @param properties Form properties.
     * @param children Form children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Get progress name.
     */
    /**
    * Set progress name.
    */
    name: string;
    /**
     * Get current position.
     */
    /**
    * Set current position.
    */
    value: number;
    /**
     * Get final position.
     */
    /**
    * Set final position.
    */
    total: number;
    /**
     * Progress element.
     */
    readonly element: Element;
}
