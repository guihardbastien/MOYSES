import { randomFloat } from "../utils";

/**
 * Generates vectors and associated labels belonging to a ring given its center and boundaries 
 * @param boundaries 
 * @param center 
 * @param radius 
 * 
 * TODO turn into hypersphere
 */
export function ringVector(boundaries:number[], center: number, radius: number, dim : number): number[]{

    //even data distribution inside circles
    const alpha = 2 * Math.PI * Math.random();

    const positiveR = radius * Math.sqrt(randomFloat(boundaries[0], boundaries[1]));
    const x1 = positiveR * Math.cos(alpha) + center;
    const x2 = positiveR * Math.sin(alpha) + center;

    const vec = [x1,x2];
    return vec;
}

/**
 * Generates vectors and associated labels belonging to a linearly separable dataset
 * @param boundaries 
 * @param dim 
 * 
 * TODO turn into N-dimension set
 */
export function linearlySeparableVector(boundaries:{[key:string]:any}, dim: number): {[key:string]:any}{

    const vec = [1,1];
    const label = 1;
    return {vec, label};
}

/**
 * Generates vectors and associated labels belonging to a xor-like dataset
 * @param boundaries 
 * @param dim 
 * 
 * turn into N-dimension set
 */
export function xorVector(boundaries:{[key:string]:any}, dim: number){
    throw Error("'xorVector' method is not implemented yet.");
}