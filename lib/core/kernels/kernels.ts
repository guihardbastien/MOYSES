/**
 * Applies gaussian kernel
 * @param Xi
 * @param Xj
 * @param sigma
 */
export function gaussianKernel(xi:number[], xj:number[], sigma:number):number {
    let s = 0;
    for (let q = 0; q < xi.length; q += 1) {
        s += (xi[q] - xj[q]) * (xi[q] - xj[q]);
    }
    return Math.exp(-s / (2 * sigma * sigma));
}