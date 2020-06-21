import * as Kernels from '../kernels/kernels';
import IDataset from '../../types/dataset_type';
import * as Utils from '../../utils/utils';

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
    private _rbfSigma: number;

    /**
     *labels
     */
    private _labels: number[];

    /**
     * data
     */
    private _data: number[][];

    /**
     * kernel
     */
    private _kernel: string;

    /**
     * c parameter
     */
    private _c: number;

    /**
     * length of data
     */
    private _n: number;

    /**
     * lagrangians
     */
    private _alphas: number[] = [];

    /**
     * b
     */
    private _b: number;

    /**
     * maximum passes before assumed convergence
     */
    private _maxPasses: number;

    /**
     * tolerence variable
     */
    private _tol: number;

    constructor(dataset:IDataset, c: number, kernel: string, rbfSigma:number = 15) {

        this._rbfSigma = rbfSigma;
        this._data = dataset.points;
        this._labels = dataset.labels;
        this._kernel = kernel;
        this._c = c;
        this._n = this._data.length;
        this._b = 0;
        this._maxPasses = 20;
        this._tol = 0.0001;

        this.initAlphas();
        this.fit();
    }

    /**
     * Initializes alphas to zero
     */
    initAlphas() {
        for (let i = 0; i < this._n; i += 1) {
            this._alphas.push(0);
        }
    }

    /**
     * Runs sequential minimum optimization algorithm
     */
    fit() {
        let passes = 0;
        while (passes < this._maxPasses) {
            let didAlphaChanged = 0;
            for (let i = 0; i < this._n; i += 1) {
                const errorI = this.dualClassification(this._data[i]) - this._labels[i];
                    // find data that violates KKT conditions
                if ((this._labels[i] * errorI < -this._tol && this._alphas[i] < this._c)
                    || (this._labels[i] * errorI > this._tol && this._alphas[i] > 0)) {
                    let j = i;
                    while (j === i) {
                        j = Utils.randomInt(0, this._n);
                    }
                    const errorJ = this.dualClassification(this._data[j]) - this._labels[j];
                    const ai = this._alphas[i];
                    const aj = this._alphas[j];
                    let l = 0;
                    let h = this._c;
                    if (this._labels[i] === this._labels[j]) {
                        l = Math.max(0, ai + aj - this._c);
                        h = Math.min(this._c, ai + aj);
                    } else {
                        l = Math.max(0, aj - ai);
                        h = Math.min(this._c, this._c + aj - ai);
                    }
                    if (Math.abs(l - h) < 1e-4) {
                        continue;
                    }
                    const eta = 2 * this.kernel(this._data[i], this._data[j]) -
                        this.kernel(this._data[i], this._data[i]) -
                        this.kernel(this._data[j], this._data[j]);
                    if (eta >= 0) {
                        continue;
                    }
                    let newaj = aj - (this._labels[j] * (errorI - errorJ)) / eta;
                    if (newaj > h) {
                        newaj = h;
                    } else if (newaj < l) {
                        newaj = l;
                    }
                    if (Math.abs(aj - newaj) < 0.00001) {
                        continue;
                    }
                    this._alphas[j] = newaj;
                    const newai = ai + this._labels[i] * this._labels[j] * (aj - newaj);
                    this._alphas[i] = newai;

                    const b1 = this._b - errorI - this._labels[i] * (newai - ai) *
                        this.kernel(this._data[i], this._data[i]) - this._labels[j] *
                        (newaj - aj) * this.kernel(this._data[i], this._data[j]);

                    const b2 = this._b - errorJ - this._labels[i] * (newai - ai) *
                        this.kernel(this._data[i], this._data[j]) - this._labels[j] *
                        (newaj - aj) * this.kernel(this._data[j], this._data[j]);

                    if (newai > 0 && newai < this._c) {
                        this._b = b1;
                    } else if (newaj > 0 && newaj < this._c) {
                        this._b = b2;
                    } else {
                        this._b = 0.5 * (b1 + b2);
                    }
                    didAlphaChanged += 1;
                } // end of for-loop related to j
                if (didAlphaChanged === 0) {
                    passes += 1;
                } else {
                    passes = 0;
                }
            } // end of for-loop related to i
        } // end while
    }

    /**
     * Kernelize inputs
     * @param Xi
     * @param Xj
     */
    kernel(xi: number[], xj: number[]): number {
        switch (this._kernel) {
            case 'RBF':
                return Kernels.gaussianKernel(xi, xj, this._rbfSigma);
            case 'LINEAR':
                throw Error('Kernel not implemented yet');
            case 'TAN_H':
                throw Error('Kernel not implemented yet');
            default:
                throw Error('INVALID KERNEL');
        }
    }

    /**
     * Distance between data and hyperplan
     * @param input
     */
    dualClassification(input:number[]) {
        let f = this._b;
        for (let i = 0; i < this._n; i += 1) {
            f += this._alphas[i] * this._labels[i] * this.kernel(input, this._data[i]);
        }
        return f;
    }

    /**
     * predict method
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
