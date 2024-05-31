class ListNode {
    /**
     * @constructor
     * @param {string} key
     * @param {any} value
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;

        /**
         * @type {ListNode | null}
         */
        this.next = null;
    }
}

class LinkedList {
    /**
     * @type {ListNode | null}
     */
    #head;

    /**
     * @type {ListNode | null}
     */
    #tail;

    constructor() {
        this.#head = null;
        this.#tail = null;
    }

    /**
     * @param {string} key
     * @param {any} value
     */
    append(key, value) {
        const node = new ListNode(key, value);

        if (this.#head === null) {
            this.#head = node;
            this.#tail = node;
            return;
        }

        if (this.#tail !== null) {
            const current = this.#tail;
            current.next = node;
            this.#tail = node;
        }
    }

    get head() {
        return this.#head;
    }

    /**
     * @param {string} key
     *
     * @returns {boolean}
     */
    hasKey(key) {
        let current = this.#head;

        while (current) {
            if (current.key === key) return true;

            current = current.next;
        }

        return false;
    }

    /**
     * @param {string} key
     *
     * @returns {ListNode | null}
     */
    getNode(key) {
        let current = this.#head;

        while (current) {
            if (current.key === key) return current;

            current = current.next;
        }

        return null;
    }

    /**
     * @param {string} key
     *
     * @returns {boolean}
     */
    removeByKey(key) {
        let current = this.#head;
        let previous = null;

        while (current) {
            if (current.key === key) {
                if (!previous) {
                    this.#head = current.next;
                } else {
                    previous.next = current.next;
                }

                current.next = null;
                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    toString() {
        let current = this.#head;
        let listString = "";

        if (!current) listString = "()";

        while (current) {
            if (current.next)
                listString += `([${current.key}, ${current.value}]) -> `;
            else listString += `([${current.key}, ${current.value}])`;

            current = current.next;
        }

        return listString;
    }
}

export default LinkedList;
