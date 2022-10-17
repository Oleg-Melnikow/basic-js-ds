const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  push(element) {
    this.array.push(element);
    this.length += 1;
  }

  pop() {
    const last = this.array[this.array.length - 1];
    this.array = this.array.slice(0, -1);
    this.length -= 1;
    return last;
  }

  peek() {
    const last = this.array[this.length - 1];
    return last;
  }
}

module.exports = {
  Stack,
};
