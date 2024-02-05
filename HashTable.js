class HashTable {
    #size;
    #capacity;
    table;
    #factor;
    constructor(initialCapacity) {
        this.#size = 0;
        this.#capacity = initialCapacity;
        this.#factor = 0.8;
        this.table = new Array(initialCapacity).fill(null).map(() => new List());
    }

    hash(key) {
        return key % this.#capacity;
    }

    set(val) {
        const index = this.hash(val);
        const list = this.table[index];

        if (list.head == null) {
            list.pushBack(val);
            this.#size++;
            if (this.#size / this.#capacity > this.#factor) {
                this.rehash();
            }
            return;
        }

        let curr = list.head;
        while (curr) {
            if (curr.data == val) {
                curr.data = val;
                return;
            }
            curr = curr.next;
        }

        list.pushBack(val);
        this.#size++;

        if (this.#size / this.#capacity > this.#factor) {
            this.rehash();
        }
    }

    rehash() {
        this.#capacity *= 2;
        let tmp = new Array(this.#capacity).fill(null).map(() => new List());
        for (let k of this.table) {
            let curr = k.head;
            while(curr) {
                let index = this.hash(curr.data);
                tmp[index].pushBack(curr.data);
                curr = curr.next;
            }
        }
        this.table = tmp;
    }

    remove(val) {
        const index = this.hash(val);
        const list = this.table[index];
        
        if (!list.head) {
            throw new Error ("Cannot read data in empty list");
        }

        let curr = list.head;
        let step = 0;
        while(curr.next && curr.data !== val) {
            step++;
            curr = curr.next;
        }
        list.delete(step);
        
        this.#size--;
    }

    get(val) {
        let t = false;
        const index = this.hash(val);
        const list = this.table[index];
        if (!list.head) {
            throw new Error ("Cannot read data in empty list");
        }
        let curr = list.head;
        while(curr.next && curr.data !== val) {
            curr = curr.next;
            t = true;
        }
        if (t) {
            return curr.data;
        }
        else {
            throw new Error("Value has not found");
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    pushBack(data) {
        if (this.head === null) {
            this.head = new Node(data);
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new Node(data);
        }
    }

    popBack() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        if (!this.head.next) {
            this.head = null;
        }
        else {
            let curr = this.head;
            while (curr.next && curr.next.next) {
                curr = curr.next;
            }
            curr.next = null;
        }
    }

    print() {   
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }  
    }

    pushFront(data) {
        if (this.head === null) {
            this.head = new Node(data);
        }
        else {
            let tmp = this.head;
            this.head = new Node(data);
            this.head.next = tmp;
        }
    }

    popFront() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        else {
            this.head = this.head.next;
        }
    }

    Isempty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }

    getSize() {
        if (this.head == null) {
            return 0;
        }
        let size = 1;
        let curr = this.head;
        while (curr.next) {
            size++;
            curr = curr.next;
        }
        return size;
    }

    insert(pos, data) {
        if (pos >= this.getSize() || pos < 0) {
            throw new Error ("Invalid position");
        }
        if (pos == 0) {
            this.pushFront(data);
        }
        else if (pos == this.getSize(data) - 1) {
            this.pushBack(data);
        }
        else {
            let newNode = new Node(data);
            let step = 1;
            let curr = this.head;
            while (step < pos) {
                curr = curr.next;
                step++;
            }
            newNode.next = curr.next;
            curr.next = newNode;
        }
    }

    delete(pos) {
        if (pos >= this.getSize() || pos < 0) {
            throw new Error ("Invalid position");
        }
        if (pos == 0) {
            this.popFront();
        }
        else if (pos == this.getSize() - 1) {
            this.popBack();
        }
        else {
            let step = 1;
            let curr = this.head;
            while (curr.next && step < pos) {
                curr = curr.next;
                step++;
            }
            curr.next = curr.next.next;
        }
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        return this.head.data;
    }

    getLast() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            return curr.data;
        }
    }
}
