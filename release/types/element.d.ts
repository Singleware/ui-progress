/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Progress element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Progress name.
   */
  name: string;
  /**
   * Current position.
   */
  value: number;
  /**
   * Default position.
   */
  defaultValue: number;
  /**
   * Final position.
   */
  total: number;
  /**
   * Reset the progress to its initial value and state.
   */
  reset: () => void;
}
