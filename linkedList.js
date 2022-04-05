class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  add(node) {
    // check for a next property
    if (!this.next) {
      this.next = node;
    } else {
      // add data to node available
      this.next.add(node);
    }
  }
}
