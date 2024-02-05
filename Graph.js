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
