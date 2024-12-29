class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

class Queue {
  constructor() {
    this.rear = null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.rear === null;
  }

  // Insert an element into the queue
  insert(x) {
    const temp = new Node(x);

    if (this.isEmpty()) {
      this.rear = temp;
      temp.link = temp;
    } else {
      temp.link = this.rear.link;
      this.rear.link = temp;
      this.rear = temp;
    }
  }

  // Delete an element from the queue
  delete() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      throw new Error("No elements in the queue");
    }

    let temp;
    if (this.rear.link === this.rear) {
      // If only one element
      temp = this.rear;
      this.rear = null;
    } else {
      temp = this.rear.link;
      this.rear.link = temp.link;
    }

    return temp.data;
  }

  // Get the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      throw new Error("No elements in the queue");
    }

    return this.rear.link.data;
  }

  // Display the contents of the queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    console.log("Queue is : ");
    let p = this.rear.link;
    do {
      console.log(p.data, " ");
      p = p.link;
    } while (p !== this.rear.link);
    console.log();
  }

  // Get the size of the queue
  size() {
    if (this.isEmpty()) {
      return 0;
    }

    let s = 0;
    let p = this.rear.link;
    do {
      s++;
      p = p.link;
    } while (p !== this.rear.link);

    return s;
  }
}
