/**
 * An interface describing how a dataset should be formatted
 *
 * For instance,
 * ```ts
 * ```
 */
export default interface IDataset {
    /**
     * Feature vectors of the dataset
     */
    points: number[][];

    /**
     * Associated labels for supervised learning
     */
    labels: number[];
}
