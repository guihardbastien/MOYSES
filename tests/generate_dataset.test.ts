import * as Chai from 'chai';
import DatasetGenerator from '../lib/utils/dataset_generation/dataset_generator'

const should = Chai.should();

/**
 * Query related tests
 */
describe('testing data generation utils', () => {
    
    it('Generate circular', () => {
        console.log('test');
        const dataset = new DatasetGenerator('CIRCULAR', 3).generate();
        console.log(dataset);
    });

    it('Generate linear data', () => {
        console.log('test');
        const dataset = new DatasetGenerator('LINEAR', 3).generate();
        console.log(dataset);
    });
});
