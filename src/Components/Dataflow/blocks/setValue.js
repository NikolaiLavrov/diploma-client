"use strict";
exports.__esModule = true;
exports.setValueBlock = void 0;
var block_1 = require("./block");
var port_1 = require("./port");
function setValueBlock(coordinates) {
    if (coordinates === void 0) { coordinates = [0, 0]; }
    return block_1.block({
        content: 'HTTP запрос',
        coordinates: coordinates,
        inputs: [
            port_1.port('value', 'left')
        ],
        payload: [
            {
                type: "SelectOutput",
                label: 'id'
            }
        ]
    });
}
exports.setValueBlock = setValueBlock;
setValueBlock.named = 'HTTP запрос';
setValueBlock.support = 'HTTP запрос';
