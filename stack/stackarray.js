class Stack {
  constructor(maxSize = 10) {
    this.stackArray = new Array(maxSize);
    this.top = -1;
  }

  size() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.stackArray.length - 1;
  }

  push(x) {
    if (this.isFull()) {
      console.log("Stack Overflow");
      return;
    }
    this.top++;
    this.stackArray[this.top] = x;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      throw new Error("Stack underflow");
    }
    const x = this.stackArray[this.top];
    this.top--;
    return x;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      throw new Error("Stack underflow");
    }
    return this.stackArray[this.top];
  }

  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack is: ");
    for (let i = this.top; i >= 0; i--) {
      console.log(this.stackArray[i], " ");
    }
    console.log();
  }
}

function main() {
  const stack = new Stack();

  stack.push(10);
  stack.push(20);
  stack.push(30);

  console.log("Stack size:", stack.size());
  console.log("Peek:", stack.peek());

  stack.display();

  const poppedElement = stack.pop();
  console.log("Popped element:", poppedElement);

  stack.display();
}

main();
