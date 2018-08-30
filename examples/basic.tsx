/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic progress bar.
 */
import * as Progress from '../source';
import * as DOM from '@singleware/jsx';

const progressBar = (
  <Progress.Template>
    <span slot="text">0%</span>
    <div slot="bar" />
  </Progress.Template>
) as Progress.Element;

/**
 * Change the progress bar name.
 */
progressBar.name = 'progress-bar';

/**
 * Change the current progress value.
 */
progressBar.value = 10;

/**
 * Change the final progress value.
 */
progressBar.total = 150;
