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

const queue = new Queue();
queue.pushBack(7);
queue.pushBack(8);
console.log(queue.print());
queue.popFront();
console.log(queue.print());
//queue.popFront();
queue.pushBack(8);
console.log(queue.print());
queue.pushBack(9);
console.log(queue.print());
console.log(queue.top());
console.log(queue.getSize());
queue.popFront();
queue.popFront();
console.log(queue.getSize());
console.log(queue.isEmpty());

