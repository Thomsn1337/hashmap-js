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
        this.loadFactor = loadFactor;

        /**
         * @type {HashMap[]}
         */
        this.#buckets = new Array(this.#capacity)
            .fill(null)
            .map(() => new LinkedList());
    }

    /**
     * @param {string} key
     */
    #hash(key) {
        let code = 0;
        const primeNumber = 13;

        for (let i = 0; i < key.length; i++) {
            code = (primeNumber * code + key.charCodeAt(i)) % this.#capacity;
        }

        return code;
    }

    /**
     * @param {string} key
     * @param {any} value
     */
    set(key, value) {
        const hashCode = this.#hash(key);
        const bucket = this.#buckets[hashCode];
        const node = bucket.getNode(key);

        if (!node) {
            bucket.append(key, value);
        } else {
            node.value = value;
        }
    }

    /**
     * @param {string} key
     *
     * @returns {any | null}
     */
    get(key) {
        const hashCode = this.#hash(key);
        const bucket = this.#buckets[hashCode];
        const node = bucket.getNode(key);

        if (!node) return null;

        return node.value;
    }

    /**
     * @param {string} key
     *
     * @returns {boolean}
     */
    has(key) {
        const hashCode = this.#hash(key);
        const bucket = this.#buckets[hashCode];

        if (bucket.hasKey(key)) return true;

        return false;
    }

    /**
     * @param {string} key
     *
     * @returns {boolean}
     */
    remove(key) {
        const hashCode = this.#hash(key);
        const bucket = this.#buckets[hashCode];

        if (bucket.removeByKey(key)) {
            return true;
        }

        return false;
    }

    toString() {
        let mapString = "";

        this.#buckets.forEach((bucket) => {
            mapString += `${bucket.toString()}\n`;
        });

        return mapString;
    }
}

export default HashMap;
