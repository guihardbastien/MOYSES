import * as Chai from 'chai';
import Svm from '../lib/svm'
import DatasetGenerator from '../lib/utils/dataset_generation/dataset_generator';

const should = Chai.should();

/**
 * Query related tests
 */
describe('testing bool queries', () => {
    
    it('Generate tensor', () => {

      const dataset = new DatasetGenerator('CIRCULAR', 10, 2).generate();
      const svm = new Svm(dataset, 5, 'RBF', 15 );

      const positiveResult = svm.predict([0,0]);
      const negativeResult = svm.predict([50,50]);

      console.log(positiveResult,negativeResult)

    });
});
