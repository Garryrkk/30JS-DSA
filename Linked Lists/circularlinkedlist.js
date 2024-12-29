class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.last = null;
  }

  // Display the contents of the list
  displayList() {
    if (this.last === null) {
      console.log("List is empty\n");
      return;
    }

    let p = this.last.next;
    do {
      console.log(p.data + " ");
      p = p.next;
    } while (p !== this.last.next);
    console.log();
  }

  // Insert a node at the beginning of the list
  insertInBeginning(data) {
    const temp = new Node(data);
    temp.next = this.last.next;
    this.last.next = temp;
  }

  // Insert a node into an empty list
  insertInEmptyList(data) {
    const temp = new Node(data);
    this.last = temp;
    this.last.next = this.last;
  }

  // Insert a node at the end of the list
  insertAtEnd(data) {
    const temp = new Node(data);
    temp.next = this.last.next;
    this.last.next = temp;
    this.last = temp;
  }

  // Create a list by reading data from the user
  createList() {
    let i, n, data;

    console.log("Enter the number of nodes: ");
    n = parseInt(prompt(), 10);

    if (n === 0) {
      return;
    }

    console.log("Enter the element to be inserted: ");
    data = parseInt(prompt(), 10);
    this.insertInEmptyList(data);

    for (i = 2; i <= n; i++) {
      console.log("Enter the element to be inserted: ");
      data = parseInt(prompt(), 10);
      this.insertAtEnd(data);
    }
  }

  // Insert a node after a specific node
  insertAfter(data, x) {
    let p = this.last.next;
    do {
      if (p.data === x) {
        break;
      }
      p = p.next;
    } while (p !== this.last.next);

    if (p === this.last.next && p.data !== x) {
      console.log(x + " not present in the list");
    } else {
      const temp = new Node(data);
      temp.next = p.next;
      p.next = temp;
      if (p === this.last) {
        this.last = temp;
      }
    }
  }

  // Delete the first node from the list
  deleteFirstNode() {
    if (this.last === null) {
      return;
    }
    if (this.last.next === this.last) {
      this.last = null;
      return;
    }
    this.last.next = this.last.next.next;
  }

  // Delete the last node from the list
  deleteLastNode() {
    if (this.last === null) {
      return;
    }
    if (this.last.next === this.last) {
      this.last = null;
      return;
    }
    let p = this.last.next;
    while (p.next !== this.last) {
      p = p.next;
    }
    p.next = this.last.next;
    this.last = p;
  }

  // Delete a specific node from the list
  deleteNode(x) {
    if (this.last === null) {
      return;
    }

    if (this.last.next === this.last && this.last.data === x) {
      this.last = null;
      return;
    }

    if (this.last.next.data === x) {
      this.last.next = this.last.next.next;
      return;
    }

    let p = this.last.next
