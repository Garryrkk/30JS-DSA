class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.link = null;
  }
}

class PriorityQueue {
  constructor() {
    this.front = null;
  }

  // Insert an element into the priority queue
  insert(element, priority) {
    const temp = new Node(element, priority);

    // Queue is empty or element to be added has higher priority than the first element
    if (this.isEmpty() || priority < this.front.priority) {
      temp.link = this.front;
      this.front = temp;
      return;
    }

    let p = this.front;
    while (p.link !== null && p.link.priority <= priority) {
      p = p.link;
    }

    temp.link = p.link;
    p.link = temp;
  }

  // Delete the element with the highest priority from the queue
  delete() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      throw new Error("No elements in the queue");
    }

    const element = this.front.data;
    this.front = this.front.link;
    return element;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === null;
  }

  // Display the contents of the queue
  display() {
    let p = this.front;
    if (this.isEmpty()) {
      console.log("Queue is empty\n");
      return;
    }

    console.log("Queue is :");
    console.log("Element  Priority");
    while (p !== null) {
      console.log(p.data, "        ", p.priority);
      p = p.link;
    }
    console.log("");
  }
}
