"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Applies gaussian kernel
 * @param Xi
 * @param Xj
 * @param sigma
 */
function gaussianKernel(xi, xj, sigma) {
    if (xi.length !== xj.length) {
        throw Error('data should be of same length');
    }
    let s = 0;
    for (let q = 0; q < xi.length; q += 1) {
        s += (xi[q] - xj[q]) * (xi[q] - xj[q]);
    }
    return Math.exp(-s / (2 * sigma * sigma));
}
exports.gaussianKernel = gaussianKernel;
//# sourceMappingURL=kernels.js.map