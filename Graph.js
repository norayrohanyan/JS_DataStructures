class Graph {
    constructor() {
        this.vertex = {};
    }

    addVertex(key) {
        if (this.vertex[key]) {
            return;
        }
        this.vertex[key] = [];
    }

    addEdges(vertex1, vertex2) {
        if (!this.vertex[vertex1] || !this.vertex[vertex2]) {
            return;
        }
        this.vertex[vertex1].push(vertex2);
        this.vertex[vertex2].push(vertex1);
    }

    DFS(vertex, visited = {}) {
        if (!this.vertex[vertex]) {
            return;
        }

        visited[vertex] = true;
        console.log(vertex);

        for (let v of this.vertex[vertex]) {
            if (!visited[v]) {
                this.DFS(v, visited);
            }
        }
    }
}

let c = new Graph;
c.addVertex(1);
c.addVertex(2);
c.addVertex(3);
c.addVertex(4);
c.addVertex(5);
c.addEdges(1, 2);
c.addEdges(1, 4);
c.addEdges(2, 3);
c.addEdges(4, 5);
console.log(c)
c.DFS(1);