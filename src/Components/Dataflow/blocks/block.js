"use strict";
exports.__esModule = true;
exports.block = void 0;
function block(_a) {
    var content = _a.content, _b = _a.inputs, inputs = _b === void 0 ? [] : _b, _c = _a.outputs, outputs = _c === void 0 ? [] : _c, _d = _a.coordinates, coordinates = _d === void 0 ? [0, 0] : _d, _e = _a.payload, payload = _e === void 0 ? [] : _e;
    return {
        id: `${Math.random()}`,
        content: content,
        inputs: inputs,
        outputs: outputs,
        coordinates: coordinates,
        payload: payload
    };
}
exports.block = block;
