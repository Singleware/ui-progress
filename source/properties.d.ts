/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Progress properties interface.
 */
export interface Properties {
  /**
   * Progress classes.
   */
  class?: string;
  /**
   * Progress slot.
   */
  slot?: string;
  /**
   * Progress name.
   */
  name?: string;
  /**
   * Current position.
   */
  value?: number;
  /**
   * Final position.
   */
  total?: number;
  /**
   * Progress children.
   */
  children?: {};
}
