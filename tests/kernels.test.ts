import * as Kernels from '../lib/core/kernels/kernels'
import * as Chai from 'chai';

const should = Chai.should();
const expect = Chai.expect;

describe('Engine#kernels', () => {
    it('should apply kernel correctly for 2 dimensional data', () => {
        const gaussian = Kernels.gaussianKernel([5,8],[40,40],15);
        gaussian.should.equal(0.006752936863875647)
    });

    it('should apply kernel correctly for 3 dimensional data', () => {
        const gaussian = Kernels.gaussianKernel([5,8,30],[40,40,40],15);
        gaussian.should.equal(0.005407329126440959)
    });

    it('should throw when data.length is different', () => {
        expect(() => {const gaussian = Kernels.gaussianKernel([5,8,30],[40,40],15);}).to.Throw()
    });
});
