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
