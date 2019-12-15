import * as Kernels from './core/kernels/kernels';
import { sequentialMinimalOptimization } from './core/engine/smo';
import IDataset from './types/dataset_type';

/**
 * Internal state of a support vector machine:
 * 
 * For instance, the following code :
 * ```typescript
 * ```
 * 
 * will generate:
 * ```typescript
 * ```
 */
class Svm {

    _RBFSigma: number;
    _labels: number[];
    _data: number[][];
    _kernel: string;
    _C: number;
    _N: number;
    _alphas: number[] = [];
    _b: number;
    _maxPasses: number;
    _tol: number;

    constructor(dataset:IDataset, C: number, kernel: string, RBFSigma:number = 15) {

        this._RBFSigma = RBFSigma;
        this._data = dataset.featureVectors;
        this._labels = dataset.labels;
        this._kernel = kernel;
        this._C = C;
        this._N = this._data.length;
        this._b = 0;
        this._maxPasses = 20;
        this._tol = 0.0001;

        this.initAlphas();
        this.fit();
    }

    /**
     * Initializes alphas to zero
     */
    initAlphas(){
        for (let i = 0; i < this._N; i++) {
            this._alphas.push(0);
        }
    }

    /**
     * Runs sequential minimum optimization algorithm
     */
    fit() {
        sequentialMinimalOptimization(this);
    }

    /**
     * Kernelize inputs
     * @param Xi 
     * @param Xj 
     */
    kernel(Xi: number[], Xj: number[]): number {
        switch (this._kernel) {
            case 'RBF':
                return Kernels.gaussianKernel(Xi, Xj, this._RBFSigma);
            case 'LINEAR':
                return Kernels.linearKernel();
            case 'TAN_H':
                return Kernels.tanHKernel();    
            default:
                throw Error("INVALID KERNEL");
        }
    }

    /**
     * @returns the distance between decision hyperplane and given input 
     * @param input 
     */
    dualClassification(input:number[]) {
        let f = this._b;
        for (let i = 0; i < this._N; i++) {
            f += this._alphas[i] * this._labels[i] * this.kernel(input, this._data[i]);
        }
        return f;
    }

    /**
     * @returns binary classification
     * @param input 
     */
    predict(input: number[]) {
        return this.dualClassification(input) > 0 ? 1 : -1;
    }

    /**
     * dataset getter
     */
    get data() {
        return this._data;
    }

    /**
     * labels getter
     */
    get labels() {
        return this._labels;
    }

}

export default Svm;