/**
 * Applies gaussian kernel
 * @param Xi 
 * @param Xj 
 * @param sigma 
 */
export function gaussianKernel(Xi:number[], Xj:number[], sigma:number):number {
    let s = 0;
    for (let q = 0; q < Xi.length; q++) {
        s += (Xi[q] - Xj[q]) * (Xi[q] - Xj[q]);
    }
    return Math.exp(-s / (2 * sigma * sigma));
}

/**
 * Applies linear kernel
 */
export function linearKernel():number {
    throw Error("linear kernel not implemented yet")
}

/**
 * Applies tan h kernel
 */
export function tanHKernel():number {
    throw Error("tan h kernel not implemented yet")
}