import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Progress template class.
 */
export declare class Template extends Control.Component<Properties> {
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
     * @param properties Progress properties.
     * @param children Progress children.
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
     * Get default progress value.
     */
    readonly defaultValue: number;
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
    /**
     * Reset the progress to its initial value and state.
     */
    reset(): void;
}
