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

    for
