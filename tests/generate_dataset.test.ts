import * as Chai from 'chai';
import DatasetGenerator from '../lib/utils/dataset_generation/dataset_generator'

const should = Chai.should();

/**
 * Query related tests
 */
describe('testing bool queries', () => {
    
    it('Generate smthg', () => {
        console.log('test');
        const dataset = new DatasetGenerator('CIRCULAR', 3, 2).generate();
        console.log(dataset);
    });
});
