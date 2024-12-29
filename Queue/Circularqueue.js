class CircularQueue {
  constructor(maxSize = 10) {
    this.queueArray = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Check if the queue is full
  isFull() {
    return (this.front === 0 && this.rear === this.queueArray.length - 1) ||
           (this.front === this.rear + 1);
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

    if (this.rear === this.queueArray.length - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }

    this.queueArray[this.rear] = x;
  }

  // Delete an element from the queue
  delete() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      throw new Error("No elements in the queue");
    }

    const x = this.queueArray[this.front];

    if (this.front === this.rear) {
      // Queue has only one element
      this.front = this.rear = -1;
    } else if (this.front === this.queueArray.length - 1) {
      this.front = 0;
    } else {
      this.front++;
    }

    return x;
  }

  // Get the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      throw new Error("No elements in the queue");
    }

    return this.queueArray[this.front];
  }

  // Display the contents of the queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    console.log("Queue is: ");

    let i = this.front;
    if (this.front <= this.rear) {
      while (i <= this.rear) {
        console.log(this.queueArray[i++], " ");
      }
    } else {
      while (i <= this.queueArray.length - 1) {
        console.log(this.queueArray[i++], " ");
      }
      i = 0;
      while (i <= this.rear) {
        console.log(this.queueArray[i++], " ");
      }
    }
    console.log();
  }

  // Get the size of the queue
  size() {
    if (this.isEmpty()) {
      return 0;
    }

    if (this.isFull()) {
      return this.queueArray.length;
    }

    let i = this.front;
    let sz = 0;
    if (this.front <= this.rear) {
      while (i <= this.rear) {
        sz++;
        i++;
      }
    } else {
      while (i <= this.queueArray.length - 1) {
        sz++;
        i++;
      }
      i = 0;
      while (i <= this.rear) {
        sz++;
        i++;
      }
    }

    return sz;
  }
}
