"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
/**
 * Generates vectors belonging to a ring given its center and boundaries
 * @param boundaries
 * @param center
 * @param radius
 *
 * TODO turn into hypersphere
 */
function randomRingPoint(boundaries, center, radius) {
    // even data distribution inside circles
    const alpha = 2 * Math.PI * Math.random();
    const positiveR = radius * Math.sqrt(utils_1.randomFloat(boundaries[0], boundaries[1]));
    const x = positiveR * Math.cos(alpha) + center;
    const y = positiveR * Math.sin(alpha) + center;
    return [x, y];
}
exports.randomRingPoint = randomRingPoint;
/**
 * generate point inside sphere
 * @param x0
 * @param y0
 * @param z0
 * @param radius
 */
function randomSpherePoint(x0, y0, z0, radius) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
    const y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
    const z = z0 + (radius * Math.cos(phi));
    return [x, y, z];
}
exports.randomSpherePoint = randomSpherePoint;
/**
 * Generates vectors belonging to a linearly separable dataset
 * @param boundaries
 *
 * TODO turn into N-dimension set
 */
function randomLinearlySeparablePoint(boundaries) {
    const positiveX1 = utils_1.randomFloat(boundaries[0], boundaries[1]);
    const positiveX2 = utils_1.randomFloat(positiveX1, boundaries[1]);
    const negativeX1 = utils_1.randomFloat(boundaries[0], boundaries[1]);
    const negativeX2 = utils_1.randomFloat(boundaries[0], negativeX1);
    return { pos: [positiveX1, positiveX2], neg: [negativeX1, negativeX2] };
}
exports.randomLinearlySeparablePoint = randomLinearlySeparablePoint;
/**
 * Generates vectors belonging to a xor-like dataset
 * @param boundaries
 * @param dim
 *
 * turn into N-dimension set
 */
function randomXorPoint() {
    throw Error("'xorVector' method is not implemented yet.");
}
exports.randomXorPoint = randomXorPoint;
//# sourceMappingURL=generate_points.js.map