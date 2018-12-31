// Graphs
// Collection of nodes aka vertices
// Nodes may point to other nodes known as edges

const { createQueue } = require('../Queues/index');

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbors(node) {
      neighbors.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key))
    },
    getNode(key) {
      return nodes.find(node => node.key === key)
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbors(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbors(node1)
      }
    },
    print() {
      return nodes
        .map(({ neighbors, key }) => {
          let result = `${key}`

          if (neighbors.length) {
            result += ` => ${neighbors
            .map(node => node.key)
            .join(' ')}`
          }

          return result
        })
        .join('\n')
    },

    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);

      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc
      }, {});

      const queue = createQueue();
      queue.enqueue(startingNode);

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        })
      }
    },

    depthFirstSearch(startingNodeKey, visitFn){
      const startingNode = this.getNode(startingNodeKey);

      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc
      }, {});

      function explore(node) {
        if (visited[node.key]) {
          return
        }

        visitFn(node)
        visited[node.key] = true

        node.neighbors.forEach(child => {
          explore(child)
        })
      }

      explore(startingNode);
    }
  }
}

// const graph = createGraph(true);

// graph.addNode('Josh');
// graph.addNode('Lily');
// graph.addNode('Chunk');
// graph.addNode('John Lennon');

// graph.addEdge('Josh', 'Lily');
// graph.addEdge('Lily', 'Josh');
// graph.addEdge('Josh', 'John Lennon');
// graph.addEdge('Lily', 'Chunk');

// console.log(graph.print());

const graph = createGraph(true);
const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
];

nodes.forEach(node => {
  graph.addNode(node)
});

edges.forEach(nodes => {
  graph.addEdge(...nodes)
});

console.log('Breadth First Search:');
graph.breadthFirstSearch('a', node => {
  console.log(node.key)
});

console.log('Depth First Search:');
graph.depthFirstSearch('a', node => {
  console.log(node.key)
})
