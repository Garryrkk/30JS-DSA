class Deque {
  constructor(maxSize = 10) {
    this.queueArray = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  // Check if the deque is empty
  isEmpty() {
    return this.front === -1;
  }

  // Check if the deque is full
  isFull() {
    return (this.front === 0 && this.rear === this.queueArray.length - 1) ||
           (this.front === this.rear + 1);
  }

  // Insert an element at the front of the deque
  insertFront(x) {
    if (this.isFull()) {
      console.log("Deque Overflow");
      return;
    }

    if (this.front === -1) {
      this.front = this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.queueArray.length - 1;
    } else {
      this.front--;
    }

    this.queueArray[this.front] = x;
  }

  // Insert an element at the rear of the deque
  insertRear(x) {
    if (this.isFull()) {
      console.log("Deque Overflow");
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

  // Delete an element from the front of the deque
  deleteFront() {
    if (this.isEmpty()) {
      console.log("Deque Underflow");
      throw new Error("No elements in the deque");
    }

    const x = this.queueArray[this.front];

    if (this.front === this.rear) {
      // Only one element
      this.front = this.rear = -1;
    } else if (this.front === this.queueArray.length - 1) {
      this.front = 0;
    } else {
      this.front++;
    }

    return x;
  }

  // Delete an element from the rear of the deque
  deleteRear() {
    if (this.isEmpty()) {
      console.log("Deque Underflow");
      throw new Error("No elements in the deque");
    }

    const x = this.queueArray[this.rear];

    if (this.front === this.rear) {
      // Only one element
      this.front = this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.queueArray.length - 1;
    } else {
      this.rear--;
    }

    return x;
  }

  // Display the contents of the deque
  display() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }

    console.log("Deque is: ");

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
}
