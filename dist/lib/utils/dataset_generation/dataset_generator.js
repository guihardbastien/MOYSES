"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_points_1 = require("./generate_points");
/**
 * DatasetGenerator class:
 * Will generate datasets given a supported "shape" and a number of fearure vectors
 */
class DatasetGenerator {
    constructor(shape, total, dimension = 2) {
        /**
         * Array of generated points
         */
        this._points = [];
        /**
         * Array of corresponding labels (supervised learning)
         */
        this._labels = [];
        /**
         * Type of dataset we want
         */
        this._shape = 'CIRCULAR';
        /**
         * number of output points
         */
        this._total = 50;
        /**
         * dimension of output points
         */
        this._dim = 2;
        this._shape = shape;
        this._total = total;
        this._dim = dimension;
    }
    /**
     * Generates circular-like dataset
     */
    generateCircularData() {
        const center = 50;
        const radius = 10;
        const innerCircle = [0, 3];
        const outerCircle = [6, 20];
        for (let i = 0; i < this._total; i += 1) {
            this.pushData(generate_points_1.randomRingPoint(outerCircle, center, radius), 1);
            this.pushData(generate_points_1.randomRingPoint(innerCircle, center, radius), -1);
        }
    }
    /**
     * Generates linearly seperable dataset
     */
    generateLinearData() {
        for (let i = 0; i < this._total; i += 1) {
            const pairs = generate_points_1.randomLinearlySeparablePoint([0, 100]);
            this.pushData(pairs.neg, -1);
            this.pushData(pairs.pos, 1);
        }
    }
    /**
     * generate xor like dataset
     */
    generateXorLikeData() {
        throw Error('NOT IMPLEMENTED YET!');
    }
    /**
     * Updates data
     * @param vec
     * @param label
     */
    pushData(vec, label) {
        this._points.push(vec);
        this._labels.push(label);
    }
    /**
     * Generates dataset according to shape then returns object filled with tensor and labels
     */
    generate() {
        switch (this._shape) {
            case 'CIRCULAR':
                this.generateCircularData();
                break;
            case 'LINEAR':
                this.generateLinearData();
                break;
            case 'XOR':
                this.generateXorLikeData();
                break;
            default:
                throw Error('INVALID SHAPE');
        }
        return { points: this._points, labels: this._labels };
    }
}
exports.default = DatasetGenerator;
//# sourceMappingURL=dataset_generator.js.map