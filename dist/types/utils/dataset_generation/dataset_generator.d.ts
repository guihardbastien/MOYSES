import IDataset from '../../types/dataset_type';
/**
 * DatasetGenerator class:
 * Will generate datasets given a supported "shape" and a number of fearure vectors
 */
export default class DatasetGenerator {
    /**
     * Array of generated points
     */
    private _points;
    /**
     * Array of corresponding labels (supervised learning)
     */
    private _labels;
    /**
     * Type of dataset we want
     */
    private _shape;
    /**
     * number of output points
     */
    private _total;
    /**
     * dimension of output points
     */
    private _dim;
    constructor(shape: string, total: number, dimension?: number);
    /**
     * Generates circular-like dataset
     */
    generateCircularData(): void;
    /**
     * Generates linearly seperable dataset
     */
    generateLinearData(): void;
    /**
     * generate xor like dataset
     */
    generateXorLikeData(): void;
    /**
     * Updates data
     * @param vec
     * @param label
     */
    pushData(vec: number[], label: number): void;
    /**
     * Generates dataset according to shape then returns object filled with tensor and labels
     */
    generate(): IDataset;
}
