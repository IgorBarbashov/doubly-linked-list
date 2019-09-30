const Node = require("./node");

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data, this._tail, null);
    if (this.length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this.length += 1;
    return this;
  }

  head() {
    return this._head ? this._head.data : null;
  }

  tail() {
    return this._tail ? this._tail.data : null;
  }

  at(index) {
    let count = 0;
    let node = this._head;
    while (count < index) {
      node = node.next;
      count++;
    }
    return node.data;
  }

  insertAt(index, data) {
    if (this._head === this._tail) {
      this.append(data);
      return this;
    }

    let count = 0;
    let node = this._head;
    while (count < index) {
      node = node.next;
      count++;
    }
    const newNode = new Node(data, node.prev, node);
    node.prev.next = newNode;
    node.prev = newNode;
    this.length += 1;
    return this;
  }

  isEmpty() {
    return this._head === null;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    if (this._head === this._tail) {
      this.clear();
    } else {
      let count = 0;
      let node = this._head;
      while (count < index) {
        node = node.next;
        count++;
      }
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
      this.length -= 1;
    }
    return this;
  }

  reverse() {
    let node = this._head;
    while (node !== this._tail) {
      const nextNode = node.next;
      const next = node.next;
      const prev = node.prev;
      node.prev = next;
      node.next = prev;
      node = nextNode;
    }
    node.next = node.prev;
    node.prev = null;
    this._tail = this._head;
    this._head = node;
    return this;
  }

  indexOf(data) {
    let count = 0;
    let node = this._head;
    while (node.data !== data) {
      if (!node.next) {
        count = -1;
        break;
      }
      node = node.next;
      count += 1;
    }
    return count;
  }
}

module.exports = LinkedList;
