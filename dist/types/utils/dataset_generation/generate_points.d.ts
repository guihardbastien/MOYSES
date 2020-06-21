/**
 * Generates vectors belonging to a ring given its center and boundaries
 * @param boundaries
 * @param center
 * @param radius
 *
 * TODO turn into hypersphere
 */
export declare function randomRingPoint(boundaries: number[], center: number, radius: number): number[];
/**
 * generate point inside sphere
 * @param x0
 * @param y0
 * @param z0
 * @param radius
 */
export declare function randomSpherePoint(x0: number, y0: number, z0: number, radius: number): number[];
/**
 * Generates vectors belonging to a linearly separable dataset
 * @param boundaries
 *
 * TODO turn into N-dimension set
 */
export declare function randomLinearlySeparablePoint(boundaries: number[]): {
    [key: string]: any;
};
/**
 * Generates vectors belonging to a xor-like dataset
 * @param boundaries
 * @param dim
 *
 * turn into N-dimension set
 */
export declare function randomXorPoint(): void;
