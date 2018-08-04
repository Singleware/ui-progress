/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Progress element interface.
 */
export interface Element extends HTMLFormElement {
  /**
   * Current position.
   */
  value: number;
  /**
   * Final position.
   */
  total: number;
}
