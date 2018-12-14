// Linked Lists

function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);

      // First item in list
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }

      // All other items added beyond first
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return node;
    },

    pop() {
      // when empty
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;

      // When there is only 1 item to pop - reset
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      let current = this.head;
      let penultimate;

      // Find a head node that points to a tail node of the same (Second to last item in list)
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        // Set the next current to the next node
        current = current.next;
      }

      // pop the last item off the list,
      // set the current tail,
      // and decrement the length
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;

      while (i < index) {
        i++;
        current = current.next;
      }

      return current;
    },

    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        const deleted = this.head;

        this.head = this.head.next;
        this.length--;

        return deleted;
      }

      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      const deleted = current;
      previous.next = current.next;

      if (previous.next === null) {
        this.tail = previous;
      }

      this.length--;

      return deleted;
    },

    isEmpty() {
      return this.length === 0;
    },

    print() {
      const values = [];
      let current = this.head;

      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(' => ');
    },
  };
}


const list = createLinkedList();
const values = ['a', 'b', 'c', 'd', 'e'];
const nodes = values.map(val => list.push(val));

console.log(list);
console.log(list.delete(1));
console.log(list.print());

// Cyclically linked list - tail points to the head
// Doubly linked list - each node also points to the node previous to it
