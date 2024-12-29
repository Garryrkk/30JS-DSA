class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

class SortedLinkedList {
  constructor() {
    this.start = null;
  }

  // Insert a node in sorted order
  insertInOrder(data) {
    const temp = new Node(data);

    // List is empty or new node is less than the first node
    if (this.start === null || data < this.start.data) {
      temp.link = this.start;
      this.start = temp;
      return;
    }

    let p = this.start;
    while (p.link !== null && p.link.data <= data) {
      p = p.link;
    }

    temp.link = p.link;
    p.link = temp;
  }

  // Create a sorted linked list by reading data from the user
  createList() {
    let n, data;

    console.log("Enter the number of nodes: ");
    n = parseInt(prompt(), 10);

    if (n === 0) {
      return;
    }

    for (let i = 1; i <= n; i++) {
      console.log("Enter the element to be inserted: ");
      data = parseInt(prompt(), 10);
      this.insertInOrder(data);
    }
  }

  // Search for a specific value in the list
  search(x) {
    if (this.start === null) {
      console.log("List is empty");
      return;
    }

    let p = this.start;
    let position = 1;
    while (p !== null && p.data <= x) {
      if (p.data === x) {
        break;
      }
      position++;
      p = p.link;
    }

    if (p === null || p.data !== x) {
      console.log(x + " not found in list");
    } else {
      console.log(x + " is at position " + position);
    }
  }

  // Display the contents of the list
  displayList() {
    if (this.start === null) {
      console.log("List is empty");
      return;
    }

    let p = this.start;
    console.log("List is: ");
    while (p !== null) {
      console.log(p.data + " ");
      p = p.link;
    }
    console.log();
  }
}
