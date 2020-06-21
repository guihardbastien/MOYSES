import IDataset from '../../types/dataset_type';
/**
 * Internal state of a support vector machine:
 *
 * Basic usage :
 * ```typescript
 *      const dataset = new DatasetGenerator('CIRCULAR', 10, 2).generate();
 *      const svm = new Svm(dataset, 5, 'RBF', 15 );
 *      const negativeResult = svm.predict([50,50]);
 * ```
 * TODO Check data.length
 */
export default class Svm {
    /**
     * rbf sigma
     */
    private _rbfSigma;
    /**
     *labels
     */
    private _labels;
    /**
     * data
     */
    private _data;
    /**
     * kernel
     */
    private _kernel;
    /**
     * c parameter
     */
    private _c;
    /**
     * length of data
     */
    private _n;
    /**
     * lagrangians
     */
    private _alphas;
    /**
     * b
     */
    private _b;
    /**
     * maximum passes before assumed convergence
     */
    private _maxPasses;
    /**
     * tolerence variable
     */
    private _tol;
    constructor(dataset: IDataset, c: number, kernel: string, rbfSigma?: number);
    /**
     * Initializes alphas to zero
     */
    initAlphas(): void;
    /**
     * Runs sequential minimum optimization algorithm
     */
    fit(): void;
    /**
     * Kernelize inputs
     * @param Xi
     * @param Xj
     */
    kernel(xi: number[], xj: number[]): number;
    /**
     * Distance between data and hyperplan
     * @param input
     */
    dualClassification(input: number[]): number;
    /**
     * predict method
     * @returns binary classification
     * @param input
     */
    predict(input: number[]): 1 | -1;
    /**
     * dataset getter
     */
    readonly data: number[][];
    /**
     * labels getter
     */
    readonly labels: number[];
}
