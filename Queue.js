class Queue {
    #arr;
    #size;
    constructor() {
        this.#arr = [];
        this.#size = 0;
    }

    pushBack(num) {
        this.#arr[this.#size++] = num;
    }

    popFront() {
        if (this.#size == 0) {
            throw new Error("Invalid size");
        }
        this.#size--;
        this.#arr.shift();
    }

    top() {
        return this.#arr[0];
    }

    getSize() {
        return this.#size;
    }

    isEmpty() {
        if (this.#size == 0) {
            return true;
        }
        return false;
    }

    print() {
        return this.#arr;
    }
}
