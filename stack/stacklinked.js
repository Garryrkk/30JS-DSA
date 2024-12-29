class Node {
  constructor(data) {
    this.info = data;
    this.link = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  size() {
    let s = 0;
    let p = this.top;
    while (p !== null) {
      p = p.link;
      s++;
    }
    return s;
  }

  push(x) {
    const temp = new Node(x);
    temp.link = this.top;
    this.top = temp;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow\n");
      throw new Error("Stack underflow");
    }
    const x = this.top.info;
    this.top = this.top.link;
    return x;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack Underflow\n");
      throw new Error("Stack underflow");
    }
    return this.top.info;
  }

  isEmpty() {
    return this.top === null;
  }

  display() {
    let p = this.top;
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }

    console.log("Stack is: ");
    while (p !== null) {
      console.log(p.info, " ");
      p = p.link;
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
