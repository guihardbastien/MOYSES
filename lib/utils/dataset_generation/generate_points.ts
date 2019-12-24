import { randomFloat } from '../utils';

/**
 * Generates vectors and associated labels belonging to a ring given its center and boundaries
 * @param boundaries
 * @param center
 * @param radius
 *
 * TODO turn into hypersphere
 */
export function randomRingPoint(
    boundaries:number[], center: number, radius: number): number[] {

    // even data distribution inside circles
    const alpha = 2 * Math.PI * Math.random();
    const positiveR = radius * Math.sqrt(randomFloat(boundaries[0], boundaries[1]));
    const x = positiveR * Math.cos(alpha) + center;
    const y = positiveR * Math.sin(alpha) + center;

    return [x, y];
}

/**
 * genrate point inside sphere
 * @param x0
 * @param y0
 * @param z0
 * @param radius
 */
export function randomSpherePoint(x0:number, y0:number, z0:number, radius:number):number[] {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
    const y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
    const z = z0 + (radius * Math.cos(phi));

    return [x, y, z];
}

/**
 * Generates vectors and associated labels belonging to a linearly separable dataset
 * @param boundaries
 *
 * TODO turn into N-dimension set
 */
export function randomLinearlySeparablePoint(boundaries:number[]): {[key:string]:any} {
    const positiveX1 = randomFloat(boundaries[0], boundaries[1]);
    const positiveX2 = randomFloat(positiveX1, boundaries[1]);
    const negativeX1 = randomFloat(boundaries[0], boundaries[1]);
    const negativeX2 = randomFloat(boundaries[0], negativeX1);

    return { pos:[positiveX1, positiveX2], neg:[negativeX1, negativeX2] };

}

/**
 * Generates vectors and associated labels belonging to a xor-like dataset
 * @param boundaries
 * @param dim
 *
 * turn into N-dimension set
 */
export function randomXorPoint() {
    throw Error("'xorVector' method is not implemented yet.");
}
