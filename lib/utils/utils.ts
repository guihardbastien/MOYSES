/**
 * Generates random float.
 * @param min
 * @param max
 */
export function randomFloat(min:number, max:number) {
    return Math.random() * (Math.floor(max) - Math.ceil(min)) + min;
}

/**
 * Generates random integer with max excluded.
 * @param min
 * @param max
 */
export function randomInt(min:number, max:number) {
    return Math.floor(Math.random() * ((Math.floor(max) - 1) - Math.ceil(min))) + min;
}
