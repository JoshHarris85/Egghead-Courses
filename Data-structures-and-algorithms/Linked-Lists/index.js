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
      // Set next node on current node to the pushed node,
      // set current tail to the pushed node,
      // increase length
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
      // From data perspective:
      // { value: 'c',  next: { value: 'd', next: { value: 'e', next: null } } }
      // Iterates until 'd' is found and the next value of 'd' is the current tail of
      // { value: 'e', next: null }
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        // Set the next current to the next node
        current = current.next;
      }

      // Set the second to last next to null
      // Set the tail to the new end which is the old 2nd to last
      // Set the length to - 1
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
    },

    get(index) {
      // Return null if index is non-existant
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      // always return head for index 0
      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;

      // iterate through the nodes until the index is found
      while (i < index) {
        i++;
        current = current.next;
      }

      return current;
    },

    delete(index) {
      // null if index is non-existant
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      // if deleting the first node
      // Hold the head as a variable;
      // Change the new head to be the next
      // reduce length by 1
      if (index === 0) {
        const deleted = this.head;

        this.head = this.head.next;
        this.length--;

        return deleted;
      }

      let current = this.head;
      let previous;
      let i = 0;

      // Iterate through the indeces of the nodes
      // hold onto the previous
      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      // Return the delted item at the end
      const deleted = current;
      // update the next of the previous to the deleted items next
      previous.next = current.next;

      // If null then set the tail to the previous node
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

console.log(list.head);
console.log(list.tail);
console.log(list.delete(1));
console.log(list.print());

// TODO: On your own
// Cyclically linked list - tail points to the head
// Doubly linked list - each node also points to the node previous to it
