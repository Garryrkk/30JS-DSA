class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.start = null;
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
      p = p.next;
    }
    console.log();
  }

  // Insert a node at the beginning of the list
  insertInBeginning(data) {
    const temp = new Node(data);
    temp.next = this.start;
    if (this.start !== null) {
      this.start.prev = temp;
    }
    this.start = temp;
  }

  // Insert a node into an empty list
  insertInEmptyList(data) {
    const temp = new Node(data);
    this.start = temp;
  }

  // Insert a node at the end of the list
  insertAtEnd(data) {
    const temp = new Node(data);
    let p = this.start;
    if (p === null) {
      this.insertInEmptyList(data);
      return;
    }
    while (p.next !== null) {
      p = p.next;
    }
    p.next = temp;
    temp.prev = p;
  }

  // Create a list by reading data from the user
  createList() {
    let i, n, data;

    console.log("Enter the number of nodes: ");
    n = parseInt(prompt(), 10);

    if (n === 0) {
      return;
    }

    console.log("Enter the first element to be inserted: ");
    data = parseInt(prompt(), 10);
    this.insertInEmptyList(data);

    for (i = 2; i <= n; i++) {
      console.log("Enter the next element to be inserted: ");
      data = parseInt(prompt(), 10);
      this.insertAtEnd(data);
    }
  }

  // Insert a node after a specific node
  insertAfter(data, x) {
    let temp = new Node(data);
    let p = this.start;
    while (p !== null) {
      if (p.data === x) {
        break;
      }
      p = p.next;
    }

    if (p === null) {
      console.log(x + " not present in the list");
    } else {
      temp.prev = p;
      temp.next = p.next;
      if (p.next !== null) {
        p.next.prev = temp;
      }
      p.next = temp;
    }
  }

  // Insert a node before a specific node
  insertBefore(data, x) {
    if (this.start === null) {
      console.log("List is empty");
      return;
    }

    if (this.start.data === x) {
      this.insertInBeginning(data);
      return;
    }

    let p = this.start;
    while (p !== null) {
      if (p.next !== null && p.next.data === x) {
        break;
      }
      p = p.next;
    }

    if (p === null) {
      console.log(x + " not present in the list");
    } else {
      const temp = new Node(data);
      temp.prev = p;
      temp.next = p.next;
      p.next.prev = temp;
      p.next = temp;
    }
  }

  // Delete the first node from the list
  deleteFirstNode() {
    if (this.start === null) {
      return;
    }
    if (this.start.next === null) {
      this.start = null;
      return;
    }
    this.start = this.start.next;
    this.start.prev = null;
  }

  // Delete
