import * as Moyses from '../lib';
import * as Chai from 'chai';

const should = Chai.should();
const expect = Chai.expect;

/**
 * Utils#dataset_generator related tests
 */
describe('testing data generation utils', () => {
    
    it('Generate circular dataset', () => {
        const dataset = new Moyses.DatasetGenerator('CIRCULAR',5).generate()
        expect(dataset.points).to.be.of.length(10);
    });

    it('Generate linear dataset', () => {
        const dataset = new Moyses.DatasetGenerator('LINEAR',5).generate()
        expect(dataset.points).to.be.of.length(10);
    });

    it('Generate xor-like dataset', () => {
        expect(()=>{const dataset = new Moyses.DatasetGenerator('XOR',5).generate()}).to.Throw();
    });

});
