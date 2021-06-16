"use strict";
exports.__esModule = true;
exports.port = void 0;
var port = function (label, alignment) {
    return {
        id: `${Math.random()}`,
        alignment: alignment,
        label: label
    };
};
exports.port = port;
