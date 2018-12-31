// Queues
// FIFO

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

exports.createQueue = createQueue;

// const q = createQueue();

// q.enqueue('Make an Egghead lesson');
// q.enqueue('Help others learn');
// q.enqueue('Be happy');

// q.dequeue();
// console.log(`The length of the queue is ${q.length}`);
// console.log(q.peek());
