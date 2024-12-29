class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

class SingleLinkedList {
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
      p = p.link;
    }
    console.log();
  }

  // Count the number of nodes in the list
  countNodes() {
    let n = 0;
    let p = this.start;
    while (p !== null) {
      n++;
      p = p.link;
    }
    console.log("Number of nodes in the list = " + n);
  }

  // Search for a specific value in the list
  search(x) {
    let p = this.start;
    let position = 1;
    while (p !== null) {
      if (p.data === x) {
        break;
      }
      position++;
      p = p.link;
    }
    if (p === null) {
      console.log(x + " not found in list");
      return false;
    } else {
      console.log(x + " is at position " + position);
      return true;
    }
  }

  // Insert a node at the beginning of the list
  insertInBeginning(data) {
    const temp = new Node(data);
    temp.link = this.start;
    this.start = temp;
  }

  // Insert a node at the end of the list
  insertAtEnd(data) {
    const temp = new Node(data);
    if (this.start === null) {
      this.start = temp;
      return;
    }

    let p = this.start;
    while (p.link !== null) {
      p = p.link;
    }
    p.link = temp;
  }

  // Create a list by reading data from the user
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
      this.insertAtEnd(data);
    }
  }

  // Insert a node after a specific node
  insertAfter(data, x) {
    let p = this.start;
    while (p !== null) {
      if (p.data === x) {
        break;
      }
      p = p.link;
    }

    if (p === null) {
      console.log(x + " not present in the list");
    } else {
      const temp = new Node(data);
      temp.link = p.link;
      p.link = temp;
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
    while (p.link !== null && p.link.data !== x) {
      p = p.link;
    }

    if (p.link === null) {
      console.log(x + " not present in the list");
    } else {
      const temp = new Node(data);
      temp.link = p.link;
      p.link = temp;
    }
  }

  // Insert a node at a specific position
  insertAtPosition(data, k) {
    const temp = new Node(data);
    if (k === 1) {
      temp.link = this.start;
      this.start = temp;
      return;
