"use strict";
exports.__esModule = true;
exports.dataflowBlocks = void 0;
var arithmetic_1 = require("./arithmetic");
var getValue_1 = require("./getValue");
var setValue_1 = require("./setValue");
exports.dataflowBlocks = [
    arithmetic_1.arithmeticBlock,
    getValue_1.getValueBlock,
    setValue_1.setValueBlock
];
