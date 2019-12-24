import { randomRingPoint, randomLinearlySeparablePoint } from './generate_points';
import IDataset from '../../types/dataset_type';

/**
 * DatasetGenerator class:
 *
 * Will generate tensors given a supported "shape".
 *
 * For instance, the following code :
 * ```typescript
 * ```
 * will generate:
 * ```typescript
 * ```
 */
class DatasetGenerator {

    /**
     * Array of generated points
     */
    private _points: number[][] = [];

    /**
     * Array of corresponding labels (supervised learning)
     */
    private _labels: number[] = [];

    /**
     * Type of dataset we want
     */
    private _shape: string = 'CIRCULAR';

    /**
     * number of output points
     */
    private _total: number = 50;

    /**
     * dimension of output points
     */
    private _dim: number = 2;

    constructor(shape:string, total:number, dimension:number = 2) {
        this._shape = shape;
        this._total = total;
        this._dim = dimension;
    }

    /**
     * Generates circular-like dataset
     */
    generateCircularData() {
        const center = 50;
        const radius = 10;
        const innerCircle = [0, 3];
        const outerCircle = [6, 20];

        for (let i = 0; i < this._total; i += 1) {
            this.pushData(randomRingPoint(outerCircle, center, radius), 1);
            this.pushData(randomRingPoint(innerCircle, center, radius), -1);
        }
    }

    /**
     * Generates linearly seperable dataset
     */
    generateLinearData() {
        for (let i = 0; i < this._total; i += 1) {
            const pairs = randomLinearlySeparablePoint([0, 100]);
            this.pushData(pairs.neg, -1);
            this.pushData(pairs.pos, 1);
        }
    }

    /**
     * generate xor like dataset
     */
    generateXorLikeData() {
        throw Error('NOT IMPLEMENTED YET!');
    }

    /**
     * Updates data
     * @param vec
     * @param label
     */
    pushData(vec:number[], label:number) {
        this._points.push(vec);
        this._labels.push(label);
    }

    /**
     * Generates dataset according to shape then returns object filled with tensor and labels
     */
    generate(): IDataset {
        switch (this._shape) {

            case 'CIRCULAR':
                this.generateCircularData();
                break;

            case 'LINEAR':
                this.generateLinearData();
                break;

            case 'XOR':
                this.generateXorLikeData();
                break;

            default:
                throw Error('INVALID SHAPE');
        }

        return { points: this._points, labels: this._labels };
    }
}

export default DatasetGenerator;
