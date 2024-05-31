import LinkedList from "./linkedList.js";

class HashMap {
    #capacity;
    #initialCapacity;
    #buckets;
    #size;

    /**
     * @param {number} [capacity=16]
     * @param {number} [loadFactor=0.75]
     */
    constructor(capacity = 16, loadFactor = 0.75) {
        this.#initialCapacity = capacity;
        this.#capacity = this.#initialCapacity;
        this.loadFactor = loadFactor;
        this.#size = 0;

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
            this.#size += 1;
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
            this.#size -= 1;
            return true;
        }

        return false;
    }

    get size() {
        return this.#size;
    }

    clear() {
        this.#capacity = this.#initialCapacity;
        this.#size = 0;
        this.#buckets = new Array(this.#capacity)
            .fill(null)
            .map(() => new LinkedList());
    }

    /**
     * @returns {string[]}
     */
    keys() {
        const keys = [];

        this.#buckets.forEach((bucket) => {
            let current = bucket.head;

            while (current) {
                keys.push(current.key);

                current = current.next;
            }
        });

        return keys;
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
