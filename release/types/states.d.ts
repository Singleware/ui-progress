/**
 * Copyright (C) 2018-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Progress states interface.
 */
export interface States {
  /**
   * Progress name.
   */
  name: string;
  /**
   * Progress percentage.
   */
  percentage: number;
  /**
   * Progress current value.
   */
  current: number;
  /**
   * Progress max value.
   */
  total: number;
}
