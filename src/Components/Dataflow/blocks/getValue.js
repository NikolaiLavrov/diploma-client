"use strict";
exports.__esModule = true;
exports.getValueBlock = void 0;
var block_1 = require("./block");
var port_1 = require("./port");
function getValueBlock(coordinates) {
    if (coordinates === void 0) { coordinates = [0, 0]; }
    return block_1.block({
        content: 'Сохранить в БД',
        coordinates: coordinates,
        outputs: [
            port_1.port('value', 'right')
        ],
        payload: [
            {
                type: "SelectInput",
                label: 'id'
            }
        ]
    });
}
exports.getValueBlock = getValueBlock;
getValueBlock.named = 'Сохранить в БД';
getValueBlock.support = 'Сохранить в БД';
