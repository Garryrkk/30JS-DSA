class Queue {
  constructor(maxSize = 10) {
    this.queueArray = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1 || this.front === this.rear + 1;
  }

  // Check if the queue is full
  isFull() {
    return this.rear === this.queueArray.length - 1;
  }

  // Get the size of the queue
  size() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  // Insert an element into the queue
  insert(x) {
    if (this.isFull()) {
      console.log("Queue Overflow\n");
      return;
    }

    if (this.front === -1) {
      this.front = 0;
    }

    this.rear++;
    this.queueArray[this.rear] = x;
  }

  // Delete an element from the queue
  delete() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      throw new Error("No elements in the queue");
    }

    const x = this.queueArray[this.front];
    this.front++;
    return x;
  }

  // Get the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue Underflow\n");
      throw new Error("No elements in the queue");
    }

    return this.queueArray[this.front];
  }

  // Display the contents of the queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty\n");
      return;
    }

    console.log("Queue is :\n\n");
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.queueArray[i], " ");
    }
    console.log();
  }
}
