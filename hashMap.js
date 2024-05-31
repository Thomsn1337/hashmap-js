import LinkedList from "./linkedList.js";
class HashMap {
    #capacity;
    #buckets;

    /**
     * @param {number} [capacity=16]
     * @param {number} [loadFactor=0.75]
     */
    constructor(capacity = 16, loadFactor = 0.75) {
        this.#capacity = capacity;
        this.#buckets = new Array(this.#capacity)
            .fill(null)
            .map(() => new LinkedList());

        this.loadFactor = loadFactor;
    }
}

export default HashMap;
