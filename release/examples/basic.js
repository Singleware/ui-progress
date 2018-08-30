"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic progress bar.
 */
const Progress = require("../source");
const DOM = require("@singleware/jsx");
const progressBar = (DOM.create(Progress.Template, null,
    DOM.create("span", { slot: "text" }, "0%"),
    DOM.create("div", { slot: "bar" })));
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
