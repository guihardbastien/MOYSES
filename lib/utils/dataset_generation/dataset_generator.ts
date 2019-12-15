import { randomFloat } from '../utils';
import { ringVector } from './generate_feature_vector';
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
     * Array of generated vectors
     */
    _vectors: number[][] = [];

    /**
     * Array of corresponding labels (supervised learning)
     */
    _labels: number[] = [];

    /**
     * Type of dataset we want
     */
    _shape: string = 'CIRCULAR';

    /**
     * number of output vector
     */
    _total: number = 50;

    /**
     * dimension of output vectors
     */
    _dim: number = 2;

    constructor(shape:string, total:number, dimension:number = 2) {
        this._shape = shape;
        this._total = total;
        this._dim = dimension;
    }

    /**
     * Generates circular-like dataset
     */
    generateCircularData() {

        const hyperSphereCenter = 50;
        const hyperSphereRadius = 10;

        const boundaries = {
            innerSphere:[0,3],
            outerSphere:[6,20]
        }

        for (let i = 0; i < this._total; i++) {

            const posFeatureVector = ringVector(boundaries.outerSphere, 
                hyperSphereCenter,hyperSphereRadius,this._dim);
            this.pushData(posFeatureVector, 1);

            const negFeatureVector = ringVector(boundaries.innerSphere, 
                hyperSphereCenter,hyperSphereRadius,this._dim);
            this.pushData(negFeatureVector, -1);
        }
    }

    /**
     * Generates linearly seperable dataset
     */
    generateLinearData() {
        const boundaries = {
            linearSet:[0,3],
        }

        for (let i = 0; i < this._total; i++) {
            let positive_x1 = randomFloat(0, 100);
            let positive_x2 = randomFloat(positive_x1, 100);
            this.pushData([positive_x1, positive_x2], -1);

            let negative_x1 = randomFloat(0, 100);
            let negative_x2 = randomFloat(0, negative_x1);
            this.pushData([negative_x1, negative_x2], 1);
        }
    }

    generateXorLikeData() {
        throw Error("NOT IMPLEMENTED YET!")
    }

    /**
     * Updates data
     * @param vec 
     * @param label 
     */
    pushData(vec:number[], label:number) {
        this._vectors.push(vec);
        this._labels.push(label);
    }

    /**
     * Generates tensor according to shape then returns object filled with tensor and labels 
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
                break

            default:
                throw Error("INVALID SHAPE");
        };

        return {featureVectors: this._vectors, labels: this._labels};
    }
}

export default DatasetGenerator;