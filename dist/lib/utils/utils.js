"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates random float.
 * @param min
 * @param max
 */
function randomFloat(min, max) {
    return Math.random() * (Math.floor(max) - Math.ceil(min)) + min;
}
exports.randomFloat = randomFloat;
/**
 * Generates random integer with max excluded.
 * @param min
 * @param max
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * ((Math.floor(max) - 1) - Math.ceil(min))) + min;
}
exports.randomInt = randomInt;
//# sourceMappingURL=utils.js.map