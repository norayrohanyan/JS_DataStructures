class Vertex {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (!this.root) {
            this.root = new Vertex(data);
        }
        else {
            this.add(this.root, data);
        }
    }

    add(vertex, data) {
        if (vertex.data < data) {
            if (!vertex.right) {
                vertex.right = new Vertex(data);
            }
            else {
                return this.add(vertex.right, data);
            }
        }
        else {
            if (!vertex.left) {
                vertex.left = new Vertex(data);
            }
            else {
                return this.add(vertex.left, data);
            }
        }
    }

    search(data) {
        if (!this.root) {
            return null;
        }
        else {
            return this.searchHelper(this.root, data);
        }
    }

    searchHelper(vertex, data) {
        if (vertex.data == data) {
            return vertex;
        }
        if (vertex.data < data) {
            return this.searchHelper(vertex.right, data);
        }
        else {
            return this.searchHelper(vertex.left, data);
        }
        
    }

    delete(data) {
        this.root = this.deleteA(this.root, data);
    }

    deleteA(node, data) {
        if (!node) {
            return null;
        }
        if (node.data > data) {
            node.left = this.deleteA(node.left, data);
            return node;
        }
        if (node.data < data) {
            node.right = this.deleteA(node.right, data);
            return node;
        } else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            } else if (!node.left) {
                node = node.right;
                return node;
            } else {
                let tmp = this.findMin(node.right);
                node.data = tmp.data;
                node.right = this.deleteA(node.right, tmp.data);
                return node;
            }
        }
    }


    findMin(node) {
        if (!node.left) {
            return node;
        }
        return this.findMin(node.left);
    }

    pre_order_traversal(node) {
        if(!node) {
            return;
        }
        console.log(node.data);
        this.pre_order_traversal(node.left);
        this.pre_order_traversal(node.right);
    }

    post_order_traversal(node) {
        if(!node) {
            return;
        }
        this.post_order_traversal(node.left);
        this.post_order_traversal(node.right);
        console.log(node.data);
    }

    in_order_traversal(node) {
        if(!node) {
            return;
        }
        this.in_order_traversal(node.left);
        console.log(node.data);
        this.in_order_traversal(node.right);
    }

    print() {   
        if (!this.root) {
            return;
        }
        this.in_order_traversal(this.root);
    }
}

let b = new BST();
b.insert(8);
b.insert(3);
b.insert(9);
b.insert(5);
b.delete(9);
b.print();