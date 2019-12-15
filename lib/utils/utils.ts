
/**
 * Generates random float.
 * @param min 
 * @param max 
 */
export function randomFloat(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}

/**
 * Generates random integer with max excluded.
 * @param min 
 * @param max 
 */
export function randomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max) - 1;
    return Math.floor(Math.random() * (max - min)) + min;
}