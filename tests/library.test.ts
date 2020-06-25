import {SVM, DatasetGenerator, IDataset } from '../lib';
import * as Chai from 'chai';

const should = Chai.should();

describe('Library#index', () => {
    it('should export what\'s needed', () => {
        should.exist(SVM);
        should.exist(DatasetGenerator);
    });
});
