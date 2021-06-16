"use strict";
exports.__esModule = true;
exports.arithmeticBlock = void 0;
var block_1 = require("./block");
var port_1 = require("./port");

function arithmeticBlock(coordinates) {
    if (coordinates === void 0) { coordinates = [0, 0]; }
    return block_1.block({
        content: 'Тело запроса',
        coordinates: coordinates,
        inputs: [
            port_1.port('num1', 'left'),
            port_1.port('num2', 'left'),
        ],
        outputs: [
            port_1.port('result', 'right')
        ],
        payload: [
            {
                type: "Select",
                label: 'Operator',
                options: [
                    {
                        label: 'Plus',
                        value: 'plus'
                    },
                    {
                        label: 'Minus',
                        value: 'minus'
                    },
                    {
                        label: 'Divide',
                        value: 'divide'
                    },
                    {
                        label: 'Multiply',
                        value: 'multiply'
                    },
                ]
            }
        ]
    });
}
exports.arithmeticBlock = arithmeticBlock;
arithmeticBlock.named = 'Тело запроса';
arithmeticBlock.support = 'Тело запроса';
