// Priority Queue

const { createQueue } = require('./index');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },

    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },

    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },

    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },

    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
  };
}

const priorityQueue = createPriorityQueue();

priorityQueue.enqueue('A fix here');
priorityQueue.enqueue('A bug there');
priorityQueue.enqueue('A new feature');

priorityQueue.dequeue();
priorityQueue.enqueue('Emergency task!', true);

console.log(priorityQueue.peek());
priorityQueue.dequeue();
console.log(priorityQueue.peek());
