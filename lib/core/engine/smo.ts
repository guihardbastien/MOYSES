import * as Utils from '../../utils/utils';
import Svm from '../../svm';

    /**
    * Runs sequential minimum optimisation.
    * 
    * All documentation on SMO algorithm can be found here:
    * https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-98-14.pdf
    * http://cs229.stanford.edu/materials/smo.pdf
    */
    export function sequentialMinimalOptimization(ctx: Svm) {
        let passes = 0;
        while (passes < ctx._maxPasses) {
            let didAlphaChanged = 0;
            for (let i = 0; i < ctx._N; i++) {
                const Ei = ctx.dualClassification(ctx._data[i]) - ctx._labels[i];
                // find data that violates KKT conditions
                if ((ctx._labels[i] * Ei < -ctx._tol && ctx._alphas[i] < ctx._C) || (ctx._labels[i] * Ei > ctx._tol && ctx._alphas[i] > 0)) {
                    let j = i;
                    while (j === i) {
                        j = Utils.randomInt(0, ctx._N);
                    }
                    const Ej = ctx.dualClassification(ctx._data[j]) - ctx._labels[j];
                    let ai = ctx._alphas[i],
                        aj = ctx._alphas[j];
                    let L = 0,
                        H = ctx._C;
                    if (ctx._labels[i] === ctx._labels[j]) {
                        L = Math.max(0, ai + aj - ctx._C);
                        H = Math.min(ctx._C, ai + aj);
                    } else {
                        L = Math.max(0, aj - ai);
                        H = Math.min(ctx._C, ctx._C + aj - ai);
                    }
                    if (Math.abs(L - H) < 1e-4) {
                        continue;
                    }
                    const eta = 2 * ctx.kernel(ctx._data[i], ctx._data[j]) - ctx.kernel(ctx._data[i], ctx._data[i]) - ctx.kernel(ctx._data[j], ctx._data[j]);
                    if (eta >= 0) {
                        continue;
                    }
                    let newaj = aj - (ctx._labels[j] * (Ei - Ej)) / eta;
                    if (newaj > H) {
                        newaj = H;
                    } else if (newaj < L) {
                        newaj = L;
                    }
                    if (Math.abs(aj - newaj) < 0.00001) {
                        continue;
                    }
                    ctx._alphas[j] = newaj;
                    let newai = ai + ctx._labels[i] * ctx._labels[j] * (aj - newaj);
                    ctx._alphas[i] = newai;

                    const b1 = ctx._b - Ei - ctx._labels[i] * (newai - ai) * ctx.kernel(ctx._data[i], ctx._data[i]) - ctx._labels[j] * (newaj - aj) * ctx.kernel(ctx._data[i], ctx._data[j]);
                    const b2 = ctx._b - Ej - ctx._labels[i] * (newai - ai) * ctx.kernel(ctx._data[i], ctx._data[j]) - ctx._labels[j] * (newaj - aj) * ctx.kernel(ctx._data[j], ctx._data[j]);

                    if (newai > 0 && newai < ctx._C) {
                        ctx._b = b1;
                    } else if (newaj > 0 && newaj < ctx._C) {
                        ctx._b = b2;
                    } else {
                        ctx._b = 0.5 * (b1 + b2);
                    }
                    didAlphaChanged += 1;
                } //end of for-loop related to j
                if (didAlphaChanged === 0) {
                    passes += 1;
                } else {
                    passes = 0;
                }
            } //end of for-loop related to i
        } //end while
    } //end of function