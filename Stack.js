class Stack {
    #arr;
    #size;
    constructor() {
        this.#arr = [];
        this.#size = 0;
    }

    push(num) {
        this.#arr[this.#size++] = num;
    }

    pop() {
        if (this.#size == 0) {
            throw new Error("Invalid size");
        }
        this.#size--;
        this.#arr.pop();
    }

    top() {
        return this.#arr[this.#size - 1];
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

const stack = new Stack();
stack.push(7);
console.log(stack.print());
stack.pop();
console.log(stack.print());
// stack.pop();
stack.push(8);
console.log(stack.print());
stack.push(9);
console.log(stack.print());
console.log(stack.top());
console.log(stack.getSize());
stack.pop();
stack.pop();
console.log(stack.getSize());
console.log(stack.isEmpty());

