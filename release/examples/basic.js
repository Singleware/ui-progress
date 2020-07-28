"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic progress bar.
 */
const Progress = require("../source");
const JSX = require("@singleware/jsx");
const progressBar = (JSX.create(Progress.Template, null,
    JSX.create("span", { slot: "information" }, "0%"),
    JSX.create("div", { slot: "progress" })));
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
